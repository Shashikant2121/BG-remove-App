const Footer = () => {
  return (
    <footer className="w-full border-t bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-white tracking-wide">
            BG Remover
          </h3>
          <p className="text-xs text-slate-400 max-w-xs">
            Remove image backgrounds in seconds  for
            your products, thumbnails and social posts.
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-xs">
          <a href="#how-it-works" className="text-slate-300 hover:text-white">
            How it works
          </a>
          <a href="#pricing" className="text-slate-300 hover:text-white">
            Pricing
          </a>
          <a href="#faq" className="text-slate-300 hover:text-white">
            FAQ
          </a>
          <a href="#contact" className="text-slate-300 hover:text-white">
            Contact
          </a>
        </nav>

        <div className="text-right space-y-1">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} BG Remover. All rights reserved.
          </p>
          <p className="text-[11px] text-slate-500">
            Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

