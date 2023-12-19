
import gh from '../assets/bs4.jpg'
import Agri from '../components/Agri';


const Agriculture = () => {
    return (
      <div className="w-fit">
        <div className="w-11/12 mx-auto justify-between gap-4">
          <div
            className="grid md:grid-cols-2 h-25vh p-12 mt-10"
            style={{ background: 'linear-gradient(to top, #071952, #000000)' }}
          >
            <div className="">
              <h1 className="text-5xl text-white mb-5 pt-10">Agriculture</h1>
              <p className="text-white pt-11">
                Helping agriculture and food companies and organisations navigate
                <br /> disruptive trends and technologies, including shaping the
                broader,<br /> food system.
              </p>
            </div>
            <div>
              <img src={gh} style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
          <div className="pt-8">
            <h1 className="border-t border-black pt-4">HOW WE HELP CLIENTS </h1>
            <div className="grid lg:grid-cols-4 items-center justify-between gap-8 pt-8">
              <div className="bg-match-height hover:shadow-xl py-8 px-4">
                <h1 className="text-xl hover:underline hover:text-blue-800">
                  Agriculture Development & <br /> Food Security
                </h1>
                <p className="pt-2 px-4 py-2">
                  We help to improve agri-food systems around around the world by bringing innovative thinking, multi-disciplinary expertise, a nuanced understanding of the private sector, and world-class analytics.
                </p>
              </div>
              <div className=" hover:shadow-xl ">
                <h1 className="text-xl hover:underline hover:text-blue-800 px-4 py-2">
                  Digital
                </h1>
                <p className="pt-2 px-4 py-2">
                  We Combine the power of our deep-domain expertise in agriculture with thousands of developers, engineers, data architects, and scientists across the technology spectrum.
                </p>
              </div>
              <div className=" hover:shadow-xl ">
                <h1 className="text-xl hover:underline hover:text-blue-800 px-4 py-2">
                  Investment
                </h1>
                <p className="pt-2 px-4 py-2">
                  We combine leading-edge investor insights honed by our private equity experts with agriculture-market insights and proprietary tools to help clients with range of their needs.
                </p>
              </div>
              <div className="bg-match-height hover:shadow-xl py-8 px-4">
                <h1 className="text-xl hover:underline hover:text-blue-800">
                  Marketing & Sales
                </h1>
                <p className="pt-8 px-4 py-2">
                  Achieve commercial excellence through go-to-market strategy, pricing optimization, sales and execution.
                </p>
              </div>
              
            </div>
                 <Agri/>
            </div>
          </div>
        </div>
    );
  };
  
  export default Agriculture;