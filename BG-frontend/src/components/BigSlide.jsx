import sampleImg from "../assets/BigSlide.jpg"; 

const BigSlide = () => {
  return (
    <section className="w-full py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white/70 rounded-2xl shadow-md p-8">
        <div className="space-y-4">

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Remove Background with High Quality and Accuracy
          </h2>

          <p className="text-slate-600">
            Just upload your photo once and let our AI handle the hard work.
            Remove backgrounds, keep full quality, and download ready‑to‑use
            images for your social media, e‑commerce, or portfolio.
          </p>

          <ul className="space-y-2 text-sm text-slate-700">
            <li>• No signup required for first preview</li>
            <li>• Supports PNG, JPG and transparent images</li>
            <li>• High‑resolution downloads for logged‑in users</li>
          </ul>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-sm">
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-3 shadow-inner">
              <img
                src={sampleImg}
                alt="Before / After preview"
                className="w-full h-64 object-contain rounded-xl bg-white"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BigSlide;
