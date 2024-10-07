import Image from "next/image"; // Assuming you use Next.js for the logo image

const footerLinks = [
  {
    title: "Explore",
    links: ["Services", "Portfolio", "Careers"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Blog", "Partners"],
  },
  {
    title: "Contact Us",
    links: ["Email", "Phone", "Address"],
  },
];

export default function Footer() {
  return (
    <footer className="py-16 bg-neutral-800 text-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* About Section */}
        <div className="text-left">
          {/* Company Logo (replace the src with your logo image path) */}
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={120}
            height={40}
            className="mx-auto md:mx-0 mb-4"
          />

          {/* Company Description */}
          <p className="text-gray-400">
            We provide custom software solutions tailored to your business
            needs. Let us help you accelerate your growth.
          </p>
        </div>

        {/* First Links Section */}
        <div className="flex flex-col w-full justify-center items-center">
          <h3 className="font-semibold text-lg mb-4">Explore</h3>
          <ul className="space-y-2">
            {footerLinks[0].links.map((link, index) => (
              <li key={index} className="hover:text-gray-300">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Second Links Section */}
        <div className="flex flex-col w-full  justify-center items-center">
          <h3 className="font-semibold text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            {footerLinks[1].links.map((link, index) => (
              <li key={index} className="hover:text-gray-300">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
