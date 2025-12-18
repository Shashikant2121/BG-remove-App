import jwt from "jsonwebtoken"

const auth = async (req, res, next) => {
    const token = req.header("Authorization").replace("Bearer ", "");
    if(!token) {
        return res.status(401).json({ message: "unauthorized"})
    } 
    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { userId: decoded.id}
        next()
    }catch (error) {
        res.status(401).json({ error: "Please authenticate"});
    }
}

export default auth;