import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { handleRegister } = useContext(AppContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      console.log("MISSING FIELDS");
      return;
    }

    try {
      setLoading(true);
      const res = await handleRegister(formData);

      setFormData({ username: "", email: "", password: "" });
      navigate("/login");
    } catch (error) {
      console.log("REGISTER ERROR IN COMPONENT", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="w-full flex justify-center items-center py-10">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md space-y-4 border p-6 rounded-lg shadow"
      >
        <h2 className="text-2xl font-semibold text-center">Register</h2>

        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            value={formData.username}
            onChange={onChange}
            placeholder="Enter username"
            className="border px-3 py-2 rounded"
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="Enter email"
            type="email"
            className="border px-3 py-2 rounded"
            autoComplete="off"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            value={formData.password}
            onChange={onChange}
            placeholder="Enter password"
            type="password"
            className="border px-3 py-2 rounded"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded mt-2 disabled:opacity-60"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
