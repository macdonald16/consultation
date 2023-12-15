import gh from '../assets/bs4.jpg'

const Agriculture = () => {
    return (
      <div className="w-fit">
        <div className="w-11/12 mx-auto justify-between gap-4">
          <div
            className="grid grid-cols-2 h-25vh p-12 mt-10"
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
          <div className=" pt-8">
          <h1 className=" border-t border-black pt-4">HOW WE HELP CLIENTS</h1>
          <div className="grid grid-cols-4 items-center justify-between gap-8 pt-8">
            <div >
               <h1>Agriculture <br/>Development & Food Security</h1>
               <p className='pt-4'>We help to improve agri-food aystems around around the world by bringing innovative thinking, multi-disciplinary expertise, a nuanced understanding of the private sector, and world-class analytics.</p>
            </div>
            <div>
               <h1>Digital</h1>
               <p className='pt-2'>We Combine the power of our deep-domain expertise in agriculture with thousands of developers, engineers, data architects, and sscientists across the technology spectrum.</p>
            </div>
            <div>
               <h1>Investment</h1>
               <p className='pt-2'>We combine leading-edge investor insights honed by our private equity experts with agricluture-market insights and proprietary tools to help clients with range of their needs.</p>
            </div>
            <div>
               <h1>Marketing & Sales</h1>
               <p className='pt-2'>Archieve commercial excellence through go-to-market strategy, pricing optimization, sales and execution.</p>
            </div>
            
            
            
          </div>
        </div>
        </div>
       
      </div>
    );
  };
  
  export default Agriculture;