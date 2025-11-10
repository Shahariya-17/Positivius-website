import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    title: "Restaurant Growth",
    text: "We helped a local restaurant achieve a 50% increase in website traffic and a 25% boost in sales through a precision-targeted PPC campaign.",
  },
  {
    title: "B2B SEO Success",
    text: "Our tailored SEO strategy ranked a B2B software firm on Google's first page and boosted organic traffic by 200%.",
  },
  {
    title: "Retail Chain Expansion",
    text: "Through an engaging social media campaign, a national retailer gained 25% more followers and a 20% rise in online sales.",
  },
];

const CaseStudies = () => {
  return (
    <section className="px-6 md:px-16 py-24 bg-gradient-to-b from-white to-gray-50 font-sans overflow-hidden">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between mb-20"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          <span className="bg-[#B9FF66] px-5 py-2 rounded-xl shadow-md">
            Case Studies
          </span>
        </h2>
        <p className="text-gray-600 mt-5 md:mt-0 md:w-1/2 leading-relaxed text-lg">
          Explore how our digital strategies have transformed brands — driving
          engagement, visibility, and tangible growth.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 250 }}
            className="bg-[#191A23] text-white rounded-3xl border border-black shadow-[0_6px_0_#000] p-10 flex flex-col justify-between"
          >
            <div>
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-xl font-semibold mb-4 text-[#B9FF66]"
              >
                {study.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.25 }}
                className="text-gray-300 leading-relaxed"
              >
                {study.text}
              </motion.p>
            </div>

            <motion.button
              whileHover={{ x: 6 }}
              className="flex items-center gap-2 text-[#B9FF66] font-medium mt-10 group"
            >
              <span className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[#B9FF66] after:left-0 after:-bottom-0.5 group-hover:after:w-full after:transition-all after:duration-300">
                Learn more
              </span>
              <div className="bg-[#B9FF66] text-black p-1.5 rounded-full group-hover:rotate-12 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CaseStudies;
