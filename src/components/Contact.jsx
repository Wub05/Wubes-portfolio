import { motion } from "framer-motion";
import { useRef } from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const ContactSection = ({ id, setActiveSection }) => {
  const nameRef = useRef(); //create ref
  const emailRef = useRef();
  const messageRef = useRef();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!name || !email || !message) {
      return toast.error("All fields required.");
    }

    //start loading...
    setLoading(true);
    try {
      const res = await axios.post(
        "https://portfolio-backend-v1-sxx5.onrender.com/contact",
        {
          name: name,
          email: email,
          message: message,
        }
      );

      console.log("res--->", res);
      toast.success(res?.data?.msg);
      setTimeout(() => {
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      }, 2000);
      setLoading(false); //stop loading...
    } catch (error) {
      console.log("Error", error.res?.data?.msg || error);
      return toast.error(error.res?.data?.msg || "Internal Server error!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id={id}
      setActiveSection={setActiveSection}
      className="relative py-24 px-6 md:px-12 min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden"
    >
      {/* Floating blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-400 rounded-full blur-[120px] opacity-20 animate-blob -z-10" />
      <div className="absolute top-10 right-0 w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-20 animate-blob animation-delay-2000 -z-10" />
      <div className="absolute bottom-0 left-16 w-72 h-72 bg-cyan-500 rounded-full blur-[120px] opacity-20 animate-blob animation-delay-4000 -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-3xl p-10 md:p-16 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl shadow-emerald-600/10 relative z-10"
      >
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Let’s Connect 🤖
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Have a project idea or want to discuss AI automations? I'm always
            open to new collaborations and ideas.
          </p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {[
            { field: "name", name: "name", ref: nameRef },
            { field: "email", name: "email", ref: emailRef },
          ].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <input
                type={item.field === "email" ? "email" : "text"}
                name={item.name}
                ref={item.ref}
                placeholder={item.field[0].toUpperCase() + item.field.slice(1)}
                className="w-full bg-transparent border-b-2 border-gray-700 focus:border-emerald-400 text-white placeholder-gray-500 p-3 text-lg outline-none transition duration-300"
              />
            </motion.div>
          ))}

          {/* Message Field */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <textarea
              name="message"
              rows="4"
              ref={messageRef}
              placeholder="Your message..."
              className="w-full bg-transparent border-b-2 border-gray-700 focus:border-emerald-400 text-white placeholder-gray-500 p-2 text-lg outline-none transition duration-300 resize-none"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              disabled={loading}
              type="submit"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 bg-gradient-to-r from-emerald-400 via-cyan-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:from-purple-500 hover:to-emerald-400 transition-all duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactSection;
