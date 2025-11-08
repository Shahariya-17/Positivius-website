import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

const CaseStudies = () => {
  return (
    <section className="px-6 md:px-12 py-24 bg-white font-sans overflow-hidden">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-center md:justify-between mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          <span className="bg-[#B9FF66] px-4 py-1 rounded-md shadow-sm">
            Case Studies
          </span>
        </h2>
        <p className="text-gray-600 mt-4 md:mt-0 md:w-1/2 leading-relaxed">
          Explore real-life examples of our proven digital marketing success
          stories. Discover how we’ve helped clients achieve exceptional
          results.
        </p>
      </motion.div>

      {/* Case Studies Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-[#191A23] text-white rounded-3xl shadow-[0_6px_0_#000] border border-black p-10 md:p-14 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-700 overflow-hidden"
      >
        {caseStudies.map((study, index) => (
          <motion.div
            key={index}
            whileHover={{
              y: -6,
              scale: 1.02,
              transition: { type: "spring", stiffness: 200 },
            }}
            className="md:w-1/3 px-0 md:px-8 py-8 md:py-0 flex flex-col justify-between text-center md:text-left transition-all duration-300"
          >
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-gray-300 leading-relaxed mb-8"
            >
              {study.text}
            </motion.p>

            <motion.button
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-[#B9FF66] font-medium mx-auto md:mx-0 group"
            >
              <span className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[#B9FF66] after:left-0 after:-bottom-0.5 group-hover:after:w-full after:transition-all after:duration-300">
                Learn more
              </span>
              <div className="bg-[#B9FF66] text-black p-1 rounded-full group-hover:rotate-12 transition-transform duration-300">
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
