import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.message) {
      toast.error("Please fill in all fields 🧐", {
        position: "bottom-right",
        theme: "dark",
      });
      return;
    }

    toast.info("Sending your message...", {
      position: "bottom-right",
      theme: "dark",
    });

    try {
      // 1️⃣ Send message to YOU using Gmail
      await emailjs.sendForm(
        "service_0worfes", // ✔ correct Gmail service
        "template_k4y5cvn", // ✔ main template
        formRef.current,
        "iCsKa5I1cM1rLNpv8" // ✔ public key
      );

      // 2️⃣ Send automatic reply to USER using SMTP
      await emailjs.send(
        "service_0worfes", //
        "template_xxzlp1z", // ✔ replace with your autoresponder template
        {
          to_email: formData.from_email,
          to_name: formData.from_name,
        },
        "iCsKa5I1cM1rLNpv8"
      );

      toast.success("Message sent successfully ✅", {
        position: "bottom-right",
        autoClose: 3000,
        theme: "dark",
      });

      setFormData({ from_name: "", from_email: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong ❌", {
        position: "bottom-right",
        theme: "dark",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gray-50 dark:bg-[#0B1120] text-gray-800 dark:text-gray-100 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Get In{" "}
          <span className="text-indigo-600 dark:text-purple-400">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center items-center md:items-start gap-5"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center md:text-left">
              Have a project idea, collaboration, or just want to say hi? Drop a
              message — I’d love to connect.
            </p>

            <div className="flex gap-6 text-2xl mt-4">
              <a
                href="mailto:nihaldas8888@gmail.com"
                className="text-gray-700 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-purple-400 transition"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/nihal-py/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-purple-400 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Nihal-das"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-purple-400 transition"
              >
                <FaGithub />
              </a>
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 bg-white dark:bg-[#141C2F] p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none"
            ></textarea>

            <button
              type="submit"
              className="px-6 py-3 bg-indigo-500 text-white rounded-full font-medium hover:bg-indigo-600 dark:bg-purple-500 dark:hover:bg-purple-600 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
