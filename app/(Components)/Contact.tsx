import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { CalendlyButton } from "./CalendlyButton";
import React from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, subject, message, phone } = formData;

    const mailtoLink = `mailto:abc@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nPhone.No: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      phone: "",
    });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-black/85 max-w-5xl p-4 mx-auto">
        <h1 className="text-4xl md:text-6xl text-white font-bold mb-8 transition duration-500 ease-in-out transform hover:scale-110 text-center">
          Got a question?
        </h1>

        <div className="flex flex-col w-full gap-8">
          {/* Contact Information Section */}

          {/* Contact Form Section */}
          <div className="w-full">
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-white text-lg">
                  Drop us a line, give us a call, or send a carrier
                  pigeon—whatever floats your boat.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="text-center">
                  <h2 className="text-2xl text-white font-bold flex items-center justify-center">
                    <Mail size={24} className="mr-2" />
                    <a
                      href="mailto:info@fizzwizz.in"
                      className="text-white hover:text-white/70 text-sm"
                    >
                      info@fizzwizz.in
                    </a>
                  </h2>
                </div>

                <div className="text-center">
                  <h2 className="text-2xl text-white font-bold flex items-center justify-center">
                    <Phone size={24} className="mr-2" />
                    <a
                      href="tel:+917297062504"
                      className="text-white hover:text-white/70 text-sm"
                    >
                      +91 72970 62504
                    </a>
                  </h2>
                </div>

                <CalendlyButton />
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    className="w-full px-3 py-2 text-black rounded-md"
                    type="text"
                    placeholder="Your Name"
                    onChange={handleChange}
                  />
                  <input
                    className="w-full px-3 py-2 text-black rounded-md"
                    type="text"
                    placeholder="Subject"
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    className="w-full px-3 py-2 text-black rounded-md"
                    type="email"
                    placeholder="Your Email"
                    onChange={handleChange}
                  />
                  <input
                    className="w-full px-3 py-2 text-black rounded-md"
                    type="tel"
                    placeholder="Your Phone"
                    onChange={handleChange}
                  />
                </div>
                <textarea
                  className="w-full px-3 py-2 text-black rounded-md"
                  rows={6}
                  placeholder="Your Message"
                  onChange={handleChange}
                ></textarea>
                <button
                  className="w-full bg-[#ff841a] text-white py-2 rounded-md hover:bg-[#ff841a]/80 transition duration-300"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
