import contact from '../assets/contact2.png';
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from 'react-icons/ai';

const Contact = () => {
  return (
    <div className="w-full h-full">
      <div className="w-3/4 justify-between mx-auto ">
        <div className="grid md:grid-cols-2 gap-28">
          <div>
            <h1 className="text-3xl pt-4 mt-4">Get In Touch</h1>
            <p className='py-4' >We are here for you! How can we help?</p>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block">Name:</label>
                <input type="text" id="name" name="name" className="w-full border border-gray-300 rounded-md py-2 px-4" />
              </div>
            
              <div className="mb-4">
                <label htmlFor="email" className="block">Email:</label>
                <input type="email" id="email" name="email" className="w-full border border-gray-300 rounded-md py-2 px-4" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block">Message:</label>
                <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md py-2 px-4"></textarea>
              </div>
              <button type="submit" className="bg-[#071952] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </form>
          </div>
          <div className='py-8'>
            <img className='mx-auto' src={contact} alt="/" />
            <div className="flex items-center mt-4 ">
              <AiOutlineMail size={35} className="mr-2 text-blue-500 border border-black rounded-full px-2 py-2" />
              <p>example@example.com</p>
            </div>
            <div className="flex items-center mt-2  ">
              <AiOutlinePhone size={35} className="mr-2 text-blue-500 border border-black rounded-full px-2 py-2" />
              <p>+1 123-456-7890</p>
            </div>
            <div className="flex items-center mt-2  ">
              <AiOutlineEnvironment size={35} className="mr-2 text-blue-500 border border-black rounded-full px-2 py-2 " />
              <p>123 Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;