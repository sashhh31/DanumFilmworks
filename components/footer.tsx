const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="col-span-2 md:col-span-1">
          <img src="/logo.png" alt="Danum Filmworks" className="h-12 mb-4" />
          <p className="text-sm text-zinc-400 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
            aliquam, purus sit amet luctus venenatis, lectus magna fringilla
            urna
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Company</h3>
          <ul className="space-y-5 text-zinc-400 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">How We Work</a></li>
          </ul>
        </div>

        {/* Service */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Service</h3>
          <ul className="space-y-5 text-zinc-400 text-sm">
            <li><a href="#">Pre-Production</a></li>
            <li><a href="#">Production</a></li>
            <li><a href="#">Post-Production</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-5"> 
          <h3 className="font-semibold text-lg mb-2">Contact</h3>
          <ul className="text-sm text-zinc-400 space-y-5">
            <li>00000 111222</li>
            <li><a href="mailto:team@danumfilmworks.com">team@danumfilmworks.com</a></li>
            <li>
              York Ave. Doncaster,<br />
              United Kingdom
            </li>
          </ul>
        </div>

        {/* Link */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Link</h3>
          <ul className="space-y-5 text-zinc-400 text-sm">
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-700 mt-10 pt-6 text-center text-sm text-zinc-100">
        © 2024 Danum Filmworks - All Rights Reserved. Design by:{" "}
        <a href="#" className="underline">Webxcell Digital</a>
      </div>
    </footer>
  );
};

export default Footer;
