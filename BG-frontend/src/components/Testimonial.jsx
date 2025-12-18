const testimonials = [
  {
    id: 1,
    name: "Govind Prakash",
    role: "E-commerce Seller",
    text: "Is tool ne mera kaafi time bacha diya. Ab product photos ke background clean karne ke liye designer hire nahi karna padta.",
  },
  {
    id: 2,
    name: "Ansh kumar",
    role: "Content Creator",
    text: "One-click background remove kaafi accurate hai. Thodi editing kabhi kabhi karni padti hai, lekin result kaafi professional lagta hai.",
  },
  {
    id: 3,
    name: "Manish Kumar",
    role: "Freelance Designer",
    text: "Client ke liye jaldi se cutout chahiye hota hai, tab ye tool perfect hai. High‑res download se direct final use ho jata hai.",
  },
];

const Testimonial = () => {
  return (
    <section className="w-full py-12 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
            Users love the fast results
          </h2>
          <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
            Dekho hamare users ko background remover kaisa laga. Unke experience
            se tumhe idea milega ki tool real life me kaise perform karta hai.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-3 ">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="h-full flex flex-col justify-between cursor-pointer rounded-2xl border hover:scale-105 border-slate-200 bg-blue-50/60 p-5 shadow-sm"
            >
              <p className="text-slate-800 text-sm leading-relaxed">
                “{item.text}”
              </p>

              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="font-semibold text-slate-900">{item.name}</p>
                <p className="text-xs text-slate-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
