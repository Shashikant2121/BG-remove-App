import { Link, useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const outputUrl = location.state?.outputUrl || "";

  if (!outputUrl) {
    return (
      <section className="w-full py-16 px-6 min-h-[70vh] flex items-center justify-center">
        <div className="text-center space-y-3">
          <p className="text-slate-600 text-sm">
            No result found. Please upload an image first.
          </p>
          <Link
            to="/upload"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition"
          >
            Go to Upload
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 px-6 bg-blue-50 min-h-[80vh]">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Your background-free image
          </h2>
          <Link
            to="/upload"
            className="text-xs md:text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            Remove background from another image
          </Link>
        </div>

        <div className="rounded-2xl border bg-white p-4 flex items-center justify-center">
          <img
            src={outputUrl}
            alt="Result"
            className="w-full max-h-[420px] object-contain"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={outputUrl}
            download="background-removed.png"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition"
          >
            Download image
          </a>

          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(outputUrl)}
            className="inline-flex items-center justify-center px-4 py-2 rounded-md text-xs md:text-sm font-medium text-slate-700 border border-slate-300 bg-white hover:bg-slate-50 transition"
          >
            Copy image URL
          </button>
        </div>
      </div>
    </section>
  );
};

export default Result;
