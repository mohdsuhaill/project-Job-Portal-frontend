import React from 'react';
import InputField from '../Components/InputField';

const JobPostingData = ({handleChange}) => {
  const now = new Date();
//   console.log(now);

const twentyFourHourAgo = new Date(now - 24 * 60 * 60 * 1000 );
const sevenDadyAgo = new Date(now - 7 * 24 * 60  * 60 * 1000 );
const ThirtyDayAgo = new Date(now - 30 * 24 * 60 * 60 * 1000 );
// console.log(twentyFourHourAgo);

// convert date to string 

const twentyFourHourAgoDate = twentyFourHourAgo.toISOString().slice(0,7)
const sevenDadyAgoData = sevenDadyAgo.toISOString().slice(0,7)
const ThirtyDayAgoData = ThirtyDayAgo.toISOString().slice(0,7)
// console.log(twentyFourHourAgoDate);

    return (
        <div>
        <h4 className="text-lg font-medium">Date of posting</h4>
  
        <div>
          <label className="sidebar-label-container">
            <input
              type="radio"
              name="test"
              id="test"
              value=""
              onChange={handleChange}
            /> 
            <span className="checkmark"></span>All Time
          </label>
  
          <InputField
            handleChange={handleChange}
            value={twentyFourHourAgoDate}
            title="Last 24 hours"
            name="test"
          />
                          <InputField
            handleChange={handleChange}
            value={sevenDadyAgoData}
            title="Last 7 days"
            name="test"
          />
                  <InputField
            handleChange={handleChange}
            value={ThirtyDayAgoData}
            title="Last month"
            name="test"
          />
        </div>
      </div>
    );
};

export default JobPostingData;