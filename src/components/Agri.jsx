import gh from '../assets/bs4.jpg';

const Agri = () => {
  return (
    <div className="">
      <div className="w-11/12 mx-auto justify-between">
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h1 className='mb-5'>Land Acquisition</h1>
            <img src={gh} style={{width: '100%', height:'75%'}} />
          </div>
          <div>
          <p className='mt-10'>
              From land acquisition and lease organization to navigating complex
              regulatory frameworks, our team of highly skilled consultants is
              equipped to handle all aspects of your land management needs. With
              a deep understanding of the unique challenges and opportunities
              within the agriculture sector, we provide tailored strategies and
              innovative solutions to help you unlock the full potential of your
              land assets.
            </p> 
          </div>
          <div>
            <h1 className='mb-5'>Finacial Solutions123</h1>
            <p> We offer unparalleled consulting services to help agricultural business optimize their finacial perfomance and achieve sustnaible growth. Our dedicated team of finacial experts understands finacial complex of industry and provide tailored solutions from finacial planning and risk management to investment strategies and capital allocation, we work closely with you to develop  comprehensive finacial strategies that drive value and mitigate risks. </p>
            
          </div>
          <div>
          <img src={gh} style={{width: '100%', height:'75%'}} />
          </div>
          <div>
            <h1 className='mb-5'>Strategy</h1>
            <img src={gh} style={{width: '100%', height:'75%'}} />
          </div>
          <div>
          <p className='mt-10'>
              From land acquisition and lease organization to navigating complex
              regulatory frameworks, our team of highly skilled consultants is
              equipped to handle all aspects of your land management needs. With
              a deep understanding of the unique challenges and opportunities
              within the agriculture sector, we provide tailored strategies and
              innovative solutions to help you unlock the full potential of your
              land assets.
            </p> 
          </div>

        </div>
      </div>
    </div>
  );
};

export default Agri;