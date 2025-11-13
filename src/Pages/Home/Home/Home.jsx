import React from 'react';
import Banner from '../Banner/Banner';
import Company from '../Company/Company';
import Service from '../Services/Service';
import CaseStudies from '../CaseStudies/CaseStudies';
import WorkingProcess from '../WorkingProcess/WorkingProcess';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Company></Company>
           <Service></Service>
           <CaseStudies></CaseStudies>
           <WorkingProcess></WorkingProcess>
        </div>
    );
};

export default Home;