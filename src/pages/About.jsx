/* eslint-disable react/no-unescaped-entities */
import bs1 from '../assets/mh.png';
import bs2 from '../assets/ph1.jpg';
import bs3 from '../assets/th1.jpg';
import bs4 from '../assets/sm1.jpg';







const About = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-11/12 mx-auto justify-between '>
        <h1 className='text-center items-center text-3xl mb-7'>About Genessis</h1>
        <p className='text-center items-center'>"Witnessing a common struggle among aspiring business owners who possessed brilliant ideas but lacked the essential management skills, Genesis Management Consultancy was born."</p>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div>
          <img className='mt-8 mx-auto' src={bs1} style={{ width: '70%', height: 'auto' }} />
          <h1 className='ms-28 font-semibold mt-5'>Cleo Mutema</h1>
          </div>
          <div>
             <h1 className='mt-12 text-center mb-6 text-xl font-semibold'>GMC co-founder</h1>
             <p className='text-left pb-4'>At Genesis Management constultancy, we understand that the journey of transforming a groundbreaking concept into a thriving enterprise is not without it's challenges. And that business leaders do not always have the solutions to step in. As the expert partner and trusted advisor, armed with the expertise and insights to bridge the gaps that hold business back.</p>
          </div>
        </div>
        <div className=''>
             <h1 className='text-3xl mb-8 text-center'>Our Story</h1>
             <p className='mb-5'>One of the comprehgensive capabilities and deep indstury knowledge, enabling us to tackle the most complex issues faced by businesses and communitties alike. Year after year, our clients list grows, a testament to the trust and confidence placed in us by both returning and new clients.</p>
             <p>We share a deep appreciation for the immense personal knowledge and innovative ideas that entreprenuers bring to the table and recognize that these visionariees derseves the freedom to focus on the core of their businesses, were their passion and unique talents lie. That's why we take upon ourselves the responsibility to handle the essential business management tasks, allowing our clients to captalize on their stregnths and drive innovation. </p>
        </div>
        <div className='text-center mt-8'>
         <h1 className='text-3xl mb-2'>Our Mission</h1>
         <p>Bridging Gaps, Building Business</p>
         <div className='grid md:grid-cols-2 gap-8'>
  <div>
    <img className='mt-8 mx-auto' src={bs3} style={{ width: '80%', height: 'auto' }} />
  </div>
  <div className='hidden sm:block absolute ml-80 mt-32 '>
    <img className='mt-16' src={bs2} style={{ width: '30%', height: 'auto' }} />  
  </div>
  <div className='gap-8 mt-8 text-left'>
    <p className='ms-8'>Our efforts aim to bridge the divide between organizational reality and vision, identifying and eliminating the hurdles that hinder success. By leveraging our expertise in business management, we empower businesses to flourish and make their mark in the world.</p>
    <p className='ms-8 mt-5'>Ultimately, our success lies in the success of the businesses we serve. We measure our achievements by the tangible results our clients achieve - increased profitability, streamlined operations, and sustainable growth.</p>
    <p className='ms-8 mt-5'>We take pride in being the catalyst that propels businesses to new heights, turning their aspirations into remarkable accomplishments.</p>
    <p className='ms-8 mt-5'>We are more than just consultants. We are partners for progress, passionate advocates for business success. Collaborating with business and community leaders for the past 17 years, we have been instrumental in addressing and overcoming their most pressing challenges.</p>
  </div>
</div>
        </div>
           <div className='text-center mt-8'>
              <h1 className='text-3xl mb-2'>Our Goal</h1>
              <p>Make money</p>
              <div className='grid md:grid-cols-2 gap-8'>

             <div className='mt-8 text-left'>
                <p className=''>Our team meticulously analyze your finacial systems to identify and patch any inefficiencies and areas of waste, ensuring that every dollar is retained and utilized effectively.</p>
                <p className='mt-4'>We help navigate organizations through tubulent economic times, providing strategic guidance to keep your business afloat and mantain a steady course towards improved cashflows and sustainable profitability.</p>
                <p className='mt-4'>This is the distilled goal for most organizations, perhaps even yours. And it is a goal that we understand completely.</p>
                <p className='mt-4'>So, if you are ready to experience the expertise of Genesis Management Constultancy firsthand, we invite you to reach us today. Let us discuss your organization's unique challenges and aspirations. Share your vision with us, and together, we will make it happen.</p>

               </div>

               <div>
                    <img className='mt-10 mx-auto' src={bs4} style={{ width: '80%', height: 'auto' }}  />
               </div>

              </div>
              <div>

              </div>
                
           </div>
      </div>
        
    </div>
  );
};

export default About;