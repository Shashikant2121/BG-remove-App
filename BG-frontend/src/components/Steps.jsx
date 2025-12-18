const steps = [
  {
    id: 1,
    title: "Upload your image",
    desc: "Choose any photo from your device. JPG, PNG aur transparent images support hoti hain.",
  },
  {
    id: 2,
    title: "Background removal",
    desc: "Hamari app automatically background detect karke clean cutout generate karti hai.",
  },
  {
    id: 3,
    title: "Preview & download",
    desc: "Result dekh kar transparent PNG ya colored background ke saath image download karo.",
  },
];

const Steps = () => {
  return (
    <section className="w-full py-10 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          How it works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center gap-3 p-5 rounded-xl border shadow-sm bg-slate-50"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold mb-1">
                {step.id}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-lg text-slate-900 flex justify-center items-center pt-4 font-semibold">
        Experiance the fastest and accurate background removel tool - simplifying your workflow and saving your time !{" "}
        </p>
      </div>
    </section>
  );
};

export default Steps;
