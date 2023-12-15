import { BsFacebook, BsTwitterX, BsWhatsapp } from 'react-icons/bs';
import gh from '../assets/logo 5.png';

const Footer = () => {
  return (
    <div className='w-full h-full mt-10'>
      <div className='w-11/12 mx-auto'>
        <div className='grid grid-cols-3 items-center bg-[#071952] text-white'>
          <div className='flex justify-center'>
            <hr className='border-gray-500 my-4 w-2/3' />
          </div>
          <div className='flex justify-center items-center'>
            <img src={gh} style={{ width: '20%', height: 'auto' }} alt='Logo' />
          </div>
          <div className='flex justify-center'>
            <hr className='border-gray-500 my-4 w-2/3' />
          </div>
          <div className='text-center'>
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
            <p>ABOUT</p>
          </div>
          <div className='flex justify-center items-center gap-10 mb-5'>
            <BsTwitterX className='text-xl' />
            <BsFacebook className='text-xl' />
            <BsWhatsapp className='text-xl'/>
          </div>
          <div className='text-center'>
            <p>HOME</p>
            <p>CONTACT</p>
            <p>NEWSLETTER</p>
          </div>
          <div className='flex justify-center items-center'>
            
          </div>
          <div className='flex justify-center items-center'>
            <hr className=' border-gray-500 my-4 w-10 rotate-90 mt-2' />
          </div>
          <div className='text-center'>
          </div>
          <div className='text-center'>
          </div>
          <div className='mt-3'>
         
            <p className='flex justify-center gap-3 mt-5 text-center'><span><span className='text-xl '>©</span>  2023 Genesis Management Constultancy</span></p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;