import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import seoImg from "../../../assets/Illustrations/Illustration (1).png";
import ppcImg from "../../../assets/Illustrations/Illustration (2).png";
import socialImg from "../../../assets/Illustrations/Illustration (3).png";
import emailImg from "../../../assets/Illustrations/tokyo-sending-messages-from-one-place-to-another 1.png";
import contentImg from "../../../assets/Illustrations/Illustration (4).png";
import analyticsImg from "../../../assets/Illustrations/Illustration (5).png";
import analytics2Img from "../../../assets/Illustrations/Illustration (6).png";

const services = [
  {
    title: "Search engine optimization",
    img: seoImg,
    bg: "bg-[#F3F3F3]",
    text: "text-black",
  },
  {
    title: "Pay-per-click advertising",
    img: ppcImg,
    bg: "bg-[#B9FF66]",
    text: "text-black",
  },
  {
    title: "Social Media Marketing",
    img: socialImg,
    bg: "bg-[#191A23]",
    text: "text-white",
  },
  {
    title: "Email Marketing",
    img: emailImg,
    bg: "bg-[#F3F3F3]",
    text: "text-black",
  },
  {
    title: "Content Creation",
    img: contentImg,
    bg: "bg-[#B9FF66]",
    text: "text-black",
  },
  {
    title: "Analytics and Tracking",
    img: analyticsImg,
    bg: "bg-[#191A23]",
    text: "text-white",
  },
];

const Service = () => {
  return (
    <section className="px-6 md:px-12 py-24 bg-white font-sans overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-[#B9FF66] px-4 py-1 rounded-md shadow-sm">
            Services
          </span>
        </h2>
        <p className="text-gray-600 mt-4 md:mt-0 md:w-1/2 leading-relaxed">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </motion.div>

      {/* Service Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow:
                service.bg === "bg-[#191A23]"
                  ? "0 10px 25px rgba(185,255,102,0.2)"
                  : "0 10px 25px rgba(0,0,0,0.1)",
              transition: { type: "spring", stiffness: 150 },
            }}
            className={`${service.bg} ${service.text} flex flex-col md:flex-row justify-between items-center rounded-3xl px-10 py-10 border border-black shadow-[0_5px_0_#000] transition-all duration-500`}
          >
            <div className="md:w-1/2 flex flex-col justify-between space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold leading-snug">
                <span
                  className={`${
                    service.bg === "bg-[#191A23]"
                      ? "bg-white text-black"
                      : "bg-[#B9FF66]"
                  } px-1 rounded-sm`}
                >
                  {service.title.split(" ")[0]}
                </span>{" "}
                {service.title.split(" ").slice(1).join(" ")}
              </h3>

              <motion.button
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="flex items-center gap-3 text-base font-medium group"
              >
                <div className="bg-black text-white p-2 rounded-full group-hover:bg-[#B9FF66] group-hover:text-black transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <span className="group-hover:underline">Learn more</span>
              </motion.button>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
              <motion.img
                src={service.img}
                alt={service.title}
                className="w-44 md:w-52 object-contain"
                whileHover={{ rotate: 4, scale: 1.07 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 bg-gradient-to-r from-gray-100 to-gray-200 border border-black shadow-[0_6px_0_#000] rounded-3xl px-6 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden"
      >
        {/* Subtle Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#B9FF66]/20 to-transparent blur-2xl opacity-70 pointer-events-none"></div>

        {/* Left Content */}
        <div className="relative z-10 text-center md:text-left md:w-1/2">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#191A23] leading-snug"
          >
            Let’s make things happen
          </motion.h3>
          <p className="text-gray-700 text-sm md:text-base mt-6 leading-relaxed">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="mt-8 px-8 py-3 bg-black text-white rounded-xl font-medium hover:bg-[#191A23] hover:shadow-xl transition-all duration-300"
          >
            Get your free proposal
          </motion.button>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 md:w-1/2 flex justify-center"
        >
          <motion.img
            src={analytics2Img}
            alt="Analytics Illustration"
            className="w-72 md:w-96 object-contain"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Service;
