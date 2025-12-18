import user from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "please fill all the fields",
      });
    }

    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await user.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    // IMPORTANT: yeh response zaroor bhejna hai
    return res.status(201).json({
      success: true,
      message: "Registration successful",
      user: {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
      token,
    });
  } catch (error) {
    console.log("REGISTER ERROR 👉", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const login = async (req, res) => {
    try{

        const {email, password} = req.body

        if (!email || !password) {
            return res.status(400).json({success: false, message: "please fill all the fields"})
        }

        const existingUser = await user.findOne({ email})
        if(!existingUser) {
            return res.status(400).json({ success: false, message: "User doesn't exist"})
        }
        const isMatch = await bcrypt.compare(password, existingUser.password)
        if(!isMatch){
            return res.status(400).json({ success: false, message:"Invalid credentials"})
        }
        const token = jwt.sign({ id: existingUser._id, email:existingUser }, process.env.JWT_SECRET, {
          expiresIn: "7d",
        });

        existingUser.password = undefined

        res.cookie("token", token, {
          httpOnly: true,
          secure: false,
          sameSite: "Lax",
          maxAge: 7 * 24 * 60 * 60 * 1000, //7days
        });
        res.status(200).json({
          success: true,
          message: "Login successful",
          user: existingUser,
          token,
        });

    }catch(error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server error"})
    }
}
export { register, login };
