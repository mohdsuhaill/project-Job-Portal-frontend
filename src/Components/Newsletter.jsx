import React from 'react';
import { FaEnvelopeOpenText } from 'react-icons/fa';
import { FaRocket } from "react-icons/fa6"
const Newsletter = () => {
    return (
        <div>
             <div>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>Email Me For jobs <FaEnvelopeOpenText /></h3>
                <p>ut esse eiusmod aute. sit enim labore salary . Aute  ea fugist commodo ea foes. </p>

                <div className='w-full space-y-4'>
                  <input type="email" name="email" id="email" placeholder='name@gmail.com ex.'  className='w-full block py-2 pl-3 border focus:outline-none '/>
                  <input type="submit" value={"Subscribe"} className='w-full block py-2 pl-3 border bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
                </div>
             </div>
 {/* 2 nd  */}
             <div className='mt-20'>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>Get noticed Faster <FaRocket /></h3>
                <p>ut esse eiusmod aute. sit enim labore salary . Aute  ea fugist commodo ea foes. </p>

                <div className='w-full space-y-4'>
                    <br />
                  <input type="submit" value={"Upload your resume"} className='w-full block py-2 pl-3 border bg-blue rounded-sm text-white cursor-pointer font-semibold'/>
                </div>
             </div>
        </div>
    );
};

export default Newsletter;