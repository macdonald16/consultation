import leader1 from '../assets/leader1.jpg';
import { BsTwitterX } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { MdCall } from "react-icons/md";

const Advertisememt = () => {
  return (
    <div className="">
      <div className="w-11/12 mx-auto justify-between items-center bg-gray-100 h-25vh">
        <div className="m-10">
          <div className="grid md:grid-cols-2 pt-16 gap-8 px-8 ">
            <div>
              <h1 className='text-xl font-semibold'>The Leadership Agenda</h1>
              <p className="py-8 ">
                Sharp, actionable Insights curated to help global leaders build trust and deliver sustained outcomes.  
              </p>
              <p>Explore our latest content on the global issues affecting organisations today from ESG to value creation, technology and cyber to workforce transformation.</p>
              <div className='flex gap-10 mt-10'>
              <BsTwitterX className='text-xl' />
              <BsFacebook className='text-xl' />
              <MdCall className='text-xl' />
              </div>
            </div>
            <div>
              <img src={leader1} alt="/" style={{ width: '100%', height: '75%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertisememt;