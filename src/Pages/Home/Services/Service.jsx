import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";


import seoImg from "../../../assets/Illustrations/Illustration (1).png";
import ppcImg from "../../../assets/Illustrations/Illustration (2).png";
import socialImg from "../../../assets/Illustrations/Illustration (3).png";
import emailImg from "../../../assets/Illustrations/Illustration (4).png";
import contentImg from "../../../assets/Illustrations/Illustration (5).png";
import analyticsImg from "../../../assets/Illustrations/Illustration (6).png";

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
    <section className="px-6 md:px-12 py-20 bg-white font-sans overflow-hidden">
     
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="bg-[#B9FF66] px-4 py-1 rounded-md shadow-sm">
            Services
          </span>
        </h2>
        <p className="text-gray-600 mt-4 md:mt-0 md:w-1/2 leading-relaxed">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              y: -8,
              boxShadow: "0 10px 0 #000",
              transition: { type: "spring", stiffness: 200 },
            }}
            className={`${service.bg} ${service.text} flex flex-col md:flex-row justify-between items-center rounded-3xl px-10 py-10 border border-black shadow-[0_5px_0_#000] transition-all duration-300`}
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

              <button className="flex items-center gap-3 text-base font-medium group">
                <div className="bg-black text-white p-2 rounded-full group-hover:bg-[#B9FF66] group-hover:text-black transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <span className="group-hover:underline">Learn more</span>
              </button>
            </div>

           
            <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
              <motion.img
                src={service.img}
                alt={service.title}
                className="w-44 md:w-52 object-contain"
                whileHover={{ rotate: 3, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
