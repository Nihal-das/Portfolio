import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
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
      await emailjs.sendForm(
        "service_0worfes",
        "template_k4y5cvn",
        formRef.current,
        "iCsKa5I1cM1rLNpv8"
      );

      await emailjs.send(
        "service_0worfes",
        "template_xxzlp1z",
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

  const contactDetails = [
    { icon: <FaEnvelope />, label: "nihaldas8888@gmail.com", href: "mailto:nihaldas8888@gmail.com" },
    { icon: <FaPhoneAlt />, label: "+91 77367 85386", href: "tel:+917736785386" },
    { icon: <FaMapMarkerAlt />, label: "Kochi, Kerala, India", href: null },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gray-50 dark:bg-[#0B1120] text-gray-800 dark:text-gray-100 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono-label text-xs uppercase text-violet-600 dark:text-cyan-300 mb-3"
        >
          06 / Contact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-4xl font-bold mb-12"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center items-center md:items-start gap-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-center md:text-left">
              Have a project idea, collaboration, or just want to say hi? Drop a
              message — I'd love to connect.
            </p>

            <div className="flex flex-col gap-3 w-full">
              {contactDetails.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                >
                  <span className="text-violet-500 dark:text-cyan-300">{c.icon}</span>
                  {c.href ? (
                    <a href={c.href} className="hover:text-violet-600 dark:hover:text-cyan-300 transition">
                      {c.label}
                    </a>
                  ) : (
                    <span>{c.label}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-6 text-2xl mt-2">
              <a
                href="mailto:nihaldas8888@gmail.com"
                className="text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-cyan-300 transition"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/nihal-py/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-cyan-300 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Nihal-das"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-violet-600 dark:text-gray-300 dark:hover:text-cyan-300 transition"
                aria-label="GitHub"
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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-5 bg-white dark:bg-[#141C2F] p-8 rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-[#0B1120] text-gray-900 dark:text-gray-100 border border-transparent focus:border-violet-400 dark:focus:border-cyan-400 outline-none transition"
            />
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-[#0B1120] text-gray-900 dark:text-gray-100 border border-transparent focus:border-violet-400 dark:focus:border-cyan-400 outline-none transition"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-3 rounded-lg bg-gray-100 dark:bg-[#0B1120] text-gray-900 dark:text-gray-100 border border-transparent focus:border-violet-400 dark:focus:border-cyan-400 outline-none transition resize-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-cyan)] hover:shadow-lg hover:shadow-violet-500/30 transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
