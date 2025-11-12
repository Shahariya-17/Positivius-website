import React from "react";
import { motion } from "framer-motion";
import illustrationImg from "../../../assets/Illustrations/Illustration.png";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f9fff0] via-white to-[#e8ffd0] px-6 md:px-12 py-20 md:py-28 font-sans">
     
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#B9FF66] opacity-20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#B9FF66] opacity-10 blur-[100px] rounded-full"></div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
            Navigating the <br />{" "}
            <span className="text-[#B9FF66] drop-shadow-[0_0_10px_#b9ff66aa]">
              digital landscape
            </span>{" "}
            <br /> for success
          </h1>

          <p className="text-gray-700 text-base md:text-lg mb-10 leading-relaxed">
            Our digital marketing agency helps businesses grow and thrive
            online through cutting-edge strategies — including{" "}
            <span className="font-semibold text-gray-900">SEO</span>,{" "}
            <span className="font-semibold text-gray-900">PPC</span>, social media
            marketing, and impactful content creation.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px #B9FF66",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-3 rounded-full text-sm md:text-base font-medium hover:bg-[#B9FF66] hover:text-black transition-all duration-300"
          >
            Book a consultation
          </motion.button>
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center md:justify-end w-full md:w-1/2"
        >
          <motion.img
            src={illustrationImg}
            alt="Digital marketing illustration"
            className="w-[90%] md:w-[80%] drop-shadow-2xl"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
