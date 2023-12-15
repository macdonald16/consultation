import bs from '../assets/bg2.jpg';


const Feature = () => {
  return (
    <div className='w-full h-full py-16 '>
      <div className='w-11/12 mx-auto justify-between text-left'>
        <h1 className=''>FEATURE INSIGHTS</h1>
        <div className="grid md:grid-cols-3 gap-5">
          <div className=''>
            <img className='mb-2' src={bs} alt='Feature Image' />
            <h1 className='text-3xl font-semibold '>PwC at COP28: Working together to help drive climate and nature action</h1>
            <p className=''>Join our COP28 webcast as we work to advance collaboration and practical solutions for the climate and nature crises</p>
          </div>
          <div>
            <img src={bs} alt='Feature Image' className='mb-2 w-50 h-50' />
            <h1 className='text-3xl font-semibold '>PwC at COP28: Working together to help drive climate and nature action</h1>
            <p className=''>Join our COP28 webcast as we work to advance collaboration and practical solutions for the climate and nature crises</p>
          </div>
          <div>
            <img src={bs} alt='Feature Image' className='mb-2' />
            <h1 className='text-3xl font-semibold '>PwC at COP28: Working together to help drive climate and nature action</h1>
            <p className='mb-5'>Join our COP28 webcast as we work to advance collaboration and practical solutions for the climate and nature crises</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Feature;