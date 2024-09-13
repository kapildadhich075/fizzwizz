import { Mail, MapIcon, Phone } from "lucide-react";
import { useState } from "react";
import { CalendlyButton } from "./CalendlyButton";

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
      <div className="flex flex-col justify-center items-center h-full md:h-[100vh] bg-black/85 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
          {/* Map Section */}
          <div className="relative flex justify-center items-center w-full h-64 md:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120553.25640728594!2d72.71382509726563!3d19.2262212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0ce8bbec7b7%3A0x79ed625cd26a381e!2sHorizon%20Green!5e0!3m2!1sen!2sin!4v1722295147148!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%)" }}
              loading="lazy"
            ></iframe>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          {/* Contact Details and Form Section */}
          <div className="flex flex-col justify-center items-center p-4 md:p-8 space-y-8">
            <h1
              className="text-4xl md:text-6xl text-white font-bold 
                transition duration-500 ease-in-out transform hover:scale-110
            "
            >
              Contact Us
            </h1>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex flex-col items-center text-center md:text-left space-y-2">
                <h2 className="text-2xl text-white font-bold">
                  <MapIcon size={24} />
                </h2>
                <div className="flex flex-col items-center md:items-start space-y-2">
                  <p className="text-white text-sm md:text-base">
                    <span className="font-bold">Registered Office: </span>
                    08, Shakti Nagar, 1st Street, Paota ‘c’ Road, Jodhpur,
                    Rajasthan, 342001
                  </p>
                  <p className="text-white text-sm md:text-base">
                    <span className="font-bold">Mumbai Office </span>- 1704,
                    Horizon Green, Kulupwadi, Borivali East, Mumbai, 400066
                  </p>
                  <p className="text-white text-sm md:text-base">
                    <span className="font-bold">Bengaluru Office</span>- 201,
                    Shet&apos;s Residency, Natraja Layout, JP Nagar 7th Phase
                    7th Main, 7th Cross, Bengaluru(Karnataka)-560078
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5">
                <div className="flex flex-col items-center text-center md:text-left space-y-2">
                  <h2 className="text-2xl text-white font-bold">
                    <Mail size={24} />
                  </h2>
                  <p className="text-white text-sm md:text-base">
                    <a
                      href="mailto:info@fizzwizz.in"
                      className="text-white hover:text-white/70"
                    >
                      info@fizzwizz.in
                    </a>
                  </p>
                </div>

                <div className="flex flex-col items-center text-center md:text-left space-y-2">
                  <h2 className="text-2xl text-white font-bold">
                    <Phone size={24} />
                  </h2>
                  <p className="text-white text-sm md:text-base">
                    <a
                      href="tel:+917297062504"
                      className="text-white hover:text-white/70"
                    >
                      +91 72970 62504
                    </a>
                  </p>
                </div>

                <CalendlyButton />
              </div>
            </div>

            <div className="hidden md:block ">
              <div className="flex flex-col items-center space-y-2 text-center">
                <p className="text-white text-2xl font-bold">Got a question?</p>

                <p className="text-white text-sm md:text-base">
                  Drop us a line, give us a call, or send a carrier
                  pigeon—whatever floats your boat.
                </p>
              </div>
              <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col justify-evenly md:flex-row space-y-4 md:space-y-0 md:space-x-5">
                  <div>
                    <label
                      className="block text-white text-sm font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-black rounded-md"
                      type="text"
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-white text-sm font-bold mb-2"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <input
                      className="w-full px-3 py-2 text-black rounded-md"
                      type="text"
                      id="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4 flex flex-col justify-evenly md:flex-row space-y-4 md:space-y-0 md:space-x-5">
                  <div>
                    <label
                      className="block text-white text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 text-black rounded-md"
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-white text-sm font-bold mb-2"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      className="w-full px-3 py-2 text-black rounded-md"
                      type="text"
                      id="phone"
                      placeholder="Your Phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-white text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="w-full px-3 py-2 text-black rounded-md"
                    id="message"
                    rows={6}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
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
