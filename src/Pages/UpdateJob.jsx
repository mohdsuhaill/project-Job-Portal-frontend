
import { useLoaderData, useParams } from 'react-router-dom';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";



const UpdateJob = () => {
    const {id} = useParams();
    // console.log(id);

    const {_id,jobTitle,companyName,minPrice,maxPrice,salaryType,jobLocation,postingDate,experienceLevel,companyLogo,employmentType,description,PostedBy,skills} = useLoaderData()
    // console.log(jobTitle);

    const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    // console.log(data);
    fetch(`http://localhost:3000/update-job/${id}` ,{
      method:"PATCH",
      headers: {'content-Type' : 'application/json'},
      body:JSON.stringify(data)
      
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if(result.acknowledged === true){
          alert("job updated Sucessfully")
        }
        reset()
      });
  };

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "c++" },
    { value: "React Js ", label: "React Js" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Node Js", label: "Node Js" },
    { value: "Express", label: "Express" },
    { value: "redux", label: "Redux" },
    { value: "HTMl", label: "HTML" },
    { value: "CSS", label: "CSS" },
  ];
 

    return (
        <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        {/* form  cration */}
        <div className="bg-[#FEFBD8] py-10 px-4 lg:px-16">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* row 1 */}
            <div className="create-job-flex">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg "> Job Title</label>
                <input
                  type="text"
                  defaultValue={jobTitle}
                  {...register("jobTitle")}
                  className="create-job-input"
                />
              </div>
  
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg ">Company Name</label>
                <input
                  type="text"
                  placeholder="Ex: ZOHO"
                  defaultValue={companyName}
                  {...register("companyName")}
                  className="create-job-input"
                />
              </div>
            </div>
  
            {/* row 2 */}
            <div className="create-job-flex">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg ">Minimum Salary</label>
                <input
                  type="text"
                  placeholder={"20k"}
                  defaultValue={minPrice}
                  {...register("minPrice")}
                  className="create-job-input"
                />
              </div>
  
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg ">Maximum Salary</label>
                <input
                  type="text"
                  placeholder="120k"
                  defaultValue={maxPrice}
                  {...register("maxPrice")}
                  className="create-job-input"
                />
              </div>
            </div>
  
            {/* row 3 */}
            <div className="create-job-flex">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg ">Salary Type</label>
                <select {...register("salaryType")} className="create-job-input">
                  <option value={salaryType}>{salaryType}</option>
                  <option value="Hourly">Hourly</option>
                  <option value="Monthly">Monthly</option>
                  <option value="Yearly">Yearly</option>
                </select>
              </div>
  
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg ">Job Location</label>
                <input
                  type="text"
                  placeholder="Ex: London"
                  defaultValue={jobLocation}
                  {...register("jobLocation")}
                  className="create-job-input"
                />
              </div>
            </div>
  
            {/* row 4 */}
            <div className="create-job-flex">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg ">Job Posting Date </label>
                <input
                  type="date"
                  placeholder="Ex: 2024-07--14"
                  defaultValue={postingDate}
                  {...register("postingDate")}
                  className="create-job-input"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg ">Experience Level</label>
                <select
                  {...register("experienceLevel")}
                  className="create-job-input"
                >
                  <option value={experienceLevel}>Choose your Experience</option>
                  <option value="NoExperience">Hourly</option>
                  <option value="Intership">Intership</option>
                  <option value="Work remotely">Work remotely</option>
                </select>
              </div>
            </div>
  
            {/* row 5 */}
  
            <div>
              <label className="block mb-2 text-lg ">Requried Skill Sets</label>
              <CreatableSelect
                defaultValue={skills}
                onChange={setSelectedOption}
                options={options}
                isMulti
                className="create-job-input"
              />
            </div>
  
            {/* row 6 */}
            <div className="create-job-flex">
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg ">Company Logo</label>
                <input
                  type="url"
                  placeholder=" Paste your Compnay URL : https://sharekaro.com/img2"
                  defaultValue={companyLogo}
                  {...register("companyLogo")}
                  className="create-job-input"
                />
              </div>
              <div className="lg:w-1/2 w-full">
                <label className="block mb-2 text-lg ">Employment Type</label>
                <select
                  
                  {...register("employmentType")}
                  className="create-job-input"
                >
                  <option value={employmentType}>Choose your Experience</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>
            </div>
  
            {/* row 7 */}
            <div className="w-full">
              <label className="block mb-2 text-lg ">Job Description </label>
              <textarea
                className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
                rows={6}
                defaultValue={
                 "description"
                }
                placeholder="Job Description"
                {...register("description")}
              />
            </div>
  
            {/* row 8 */}
  
            <div className="w-full">
              <label className="block mb-2 text-lg"> Job Posted By</label>
              <input
                type="email"
                placeholder="you Email "
                defaultValue={PostedBy}
                {...register("PostedBy")}
                className="create-job-input"
              />
            </div>
  
            <input
              type="submit"
              className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
            />
          </form>
        </div>
      </div>
    );
};

export default UpdateJob;  