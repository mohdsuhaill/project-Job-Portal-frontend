import React from 'react';
import Location from './Location';
import Salary from './Salary';
import JobPostingData from '../Pages/JobPostingData';
import WorkExperience from './WorkExperience';
import EmploymentType from './EmploymentType';


const Sidebar = ({handleChange , handleClick}) => {

    return (
        <div className='space-y-5'>
            <h3 className='text-lg font-bold mb-2'>Filteres</h3>

            <Location handlechange={handleChange}/>
            <Salary handleChange={handleChange} handleClick={handleClick} />
            <JobPostingData handleChange={handleChange} />
            <WorkExperience handleChange={handleChange} />
            <EmploymentType handleChange={handleChange} />
        </div>
    );
};

export default Sidebar;