import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin, IoMailUnread } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const social_media = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=61565075614840",
    icon: <FaFacebook className="w-6 h-6 text-blue-500" />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/dotescapists/",
    icon: <FaInstagram className="w-6 h-6 text-pink-500" />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/company/dot-escapists/",
    icon: <IoLogoLinkedin className="w-6 h-6 text-blue-600" />,
  },
  {
    name: "Mail",
    link: "Sarmmad2000@gmail.com",
    icon: <IoMailUnread className="w-6 h-6 text-yellow-500" />,
  },
];

export default function Contact() {

  const form: any = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8zrytcr",
        "template_osrgdew",
        form.current,
        "n_Tv3y8HAfxqN3FyF"
      )
      .then(
        (result: any) => {
          console.log(result.text);
        },
        (error: any) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="">
      <div className="flex justify-center items-center">
        <div className="w-[35rem] h-[42rem] rounded-lg backdrop-blur-lg z-10 bg-white/20 p-10 flex flex-col items-center">
          <div className="w-full">
            <h2 className="text-2xl text-white font-bold">Contact Us</h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-6 flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="What's Your Name?"
                  className="bg-tertiary px-3 py-3 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">Your Email</span>
                <input
                  type="text"
                  name="email"
                  id=""
                  placeholder="What's Your Email?"
                  className="bg-tertiary py-3 px-3 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">
                  Your Message
                </span>
                <textarea
                  rows={5}
                  name="message"
                  id=""
                  placeholder="What's Your Message?"
                  className="bg-tertiary py-3 px-3 placeholder:text-secondary text-black rounded-lg outline-none border-none font-medium"
                />
              </label>
              <button
                type="submit"
                className="border border-[#E72C0D] hover:bg-[#E72C0D] py-3 px-8 text-xl active:scale-95 outline-none w-full text-white font-bold shadow-md shadow-primary rounded-full transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div
          className="w-[35rem] h-[40rem] rounded-lg bg-white transform -translate-x-6 px-16 py-16 flex flex-col gap-5" // Adjust this value as needed
        >
          <Image
            src={"/logo.png"}
            alt="logo"
            width={500}
            height={500}
            className="w-60 h-10"
          />
          <p>A Software Company With All The Solutions</p>
          <div className="flex flex-col gap-2">
            {social_media.map((handle) => (
              <>
                <Link
                  href={handle.link}
                  className="flex items-center gap-3 w-fit"
                >
                  <h2>{handle.icon}</h2>
                  <h2 className="font-medium">{handle.name}</h2>
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
