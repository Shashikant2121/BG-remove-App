import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isUploadPage = location.pathname === "/upload";

  return (
    <header className="w-full py-10 px-6 bg-blue-50 border-b">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold ">
          Remove {" "}
          <span className="text-indigo-700">Image Background</span> in Seconds
        </h1>

        <p className="text-slate-600 max-w-2xl mx-auto">
          Upload your photo and get a clean background automatically. Register
          or login to save your results and download high‑quality images.
        </p>

        {!isUploadPage && (
          <div className="flex justify-center gap-4 mt-4">
            <Link
              to="/upload"
              className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
            >
              Upload Image
            </Link>
            <Link
              to="/register"
              className="border border-blue-600 text-blue-600 px-5 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
