import Bs from '../assets/bs4.jpg';

const Hero = () => {
  return (
    <div className="w-full h-full py-16" style={{ background: 'linear-gradient(to top, #071952, #000000)' }}>
      <div className="w-11/12 mx-auto justify-between items-center text-center">
        <div className="grid md:grid-cols-2 gap-9">
          <div>
            <img className='rounded-md' src={Bs} alt="Background" />
          </div>
          <div className="text-left">
            <h1 className="text-white text-5xl">CEOs' choice for growth:<br/>Building new businesses</h1>
            <p className="text-white mt-9">The latest survey on the state of business leaders and investors view this as an opportune moment for companies to build business in their search for value creation.</p>
            <div className="grid grid-cols-3 mt-20 text-white">
              <div>
                <p><span className="text-3xl">15</span>+ Years</p>
              </div>
              <div>
                <p><span className="text-3xl">100</span>+ Clients</p>
              </div>
              <div>
                <p><span className="text-3xl">60</span>+ Companies<br/>formalised</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;