import React from "react";

import companyImg1 from "../../../assets/Company-logo/Company logo.png";
import companyImg2 from "../../../assets/Company-logo/Company logo (1).png";
import companyImg3 from "../../../assets/Company-logo/Company logo (2).png";
import companyImg4 from "../../../assets/Company-logo/Company logo (3).png";
import companyImg5 from "../../../assets/Company-logo/Company logo (4).png";
import companyImg6 from "../../../assets/Company-logo/Company logo (5).png";

const Company = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="text-center mb-10">
        <h3 className="text-gray-800 text-2xl md:text-5xl font-bold mb-10">
          Trusted by leading brands
        </h3>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
        {[companyImg1, companyImg2, companyImg3, companyImg4, companyImg5, companyImg6].map(
          (img, index) => (
            <div
              key={index}
              className="transition-transform duration-300 hover:scale-110 hover:grayscale-0 grayscale opacity-80 hover:opacity-100"
            >
              <img
                src={img}
                alt={`Company logo ${index + 1}`}
                className="w-28 md:w-36 lg:w-40 object-contain"
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Company;
