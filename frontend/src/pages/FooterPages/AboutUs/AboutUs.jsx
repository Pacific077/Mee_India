  import React from 'react'
  import "./AboutUs.css"

import AboutUsCard from './AboutUsCard'

import 'react-responsive-carousel/lib/styles/carousel.min.css';

  const AboutUs = () => {
    return (
      <>
      <div className='aboutUsMaindiv'>
        <div className='aboutUsMaindivFirstHeading'>About Us</div>
        <div className='aboutUsMaindivSecondProfile'>
         <div className='aboutUstitlename'>
            <span style={{color :"green"}}>Mee</span>
            <span>India</span>
          </div>  
        </div>
        <div className='aboutUsfirstdivcontainer'>
            <div className='aboutUsfirstDivSubContainer1' >
              <div className='aboutUsfirstdivecontainer1_firstdiv'>
                  <div className='aboutUsstoryheading'>Our story</div>
                  <div className='aboutUscarddiv'>
                 
                    <AboutUsCard/>
                    <AboutUsCard/>
                    <AboutUsCard/>
                    <AboutUsCard/>

                  </div>
              </div>
              <div className='aboutUsfirstdivecontainer1_seconddiv'>
                <div className='aboutUsfirstdivecontainer1_seconddivHeading'>what people are saying about us..</div>
                <div className='aboutUsfirstdivecontainer1_seconddivContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptas corrupti neque in enim dolorem velit voluptate itaque excepturi minima ad modi unde ex dolor eveniet, cumque quaerat quos fugit.</div>
              </div>
            </div>
            {/* <div className='firstDivSubContainer2'>
              <div className='firstDivSubContainer2_firstdiv' >hello</div>
            </div> */}
        </div>
        <div className = "aboutUsSecondDivContainer">
            <div className='aboutUssecondDivContainerHeading'>About Us</div>
            <div className='aboutUssecondDivContainerContent'>MeeIndia Limited is India's No. 1 Local Search engine that provides local search related services to users across India through multiple platforms such as website, mobile website, Apps (Android, iOS), over the telephone (voice, pan India number 8888888888) and text (SMS). Justdial has also initiated ‘Search Plus’ services for its users. These services aim at making several day-to-day tasks conveniently actionable and accessible to users through one App. By doing so, it has transitioned from being purely a provider of local search and related information to being an enabler of such transactions. Justdial has also launched JD Omni, an end-to-end business management solution for SMEs, through which it intends to transition thousands of SMEs to efficiently run their business online and have adequate online presence via their own website and mobile site. Apart from this, it also launched JD Pay, a unique solution for quick digital payments for its users and vendors, and JD Social, its official social sharing platform to provide curated content on latest happenings to users. The organisation also aims to make communication between users and businesses seamless through its Real Time Chat Messenger.
            </div>
            <div className='aboutUssecondDivContainerHeading'>About Us</div>
            <div className='aboutUssecondDivContainerContent'>MeeIndia Limited is India's No. 1 Local Search engine that provides local search related services to users across India through multiple platforms such as website, mobile website, Apps (Android, iOS), over the telephone (voice, pan India number 8888888888) and text (SMS). Justdial has also initiated ‘Search Plus’ services for its users. These services aim at making several day-to-day tasks conveniently actionable and accessible to users through one App. By doing so, it has transitioned from being purely a provider of local search and related information to being an enabler of such transactions. Justdial has also launched JD Omni, an end-to-end business management solution for SMEs, through which it intends to transition thousands of SMEs to efficiently run their business online and have adequate online presence via their own website and mobile site. Apart from this, it also launched JD Pay, a unique solution for quick digital payments for its users and vendors, and JD Social, its official social sharing platform to provide curated content on latest happenings to users. The organisation also aims to make communication between users and businesses seamless through its Real Time Chat Messenger.</div>
            <div className='aboutUssecondDivContainerHeading'>About Us</div>
            <div className='aboutUssecondDivContainerContent'>MeeIndia Limited is India's No. 1 Local Search engine that provides local search related services to users across India through multiple platforms such as website, mobile website, Apps (Android, iOS), over the telephone (voice, pan India number 8888888888) and text (SMS). Justdial has also initiated ‘Search Plus’ services for its users. These services aim at making several day-to-day tasks conveniently actionable and accessible to users through one App. By doing so, it has transitioned from being purely a provider of local search and related information to being an enabler of such transactions. Justdial has also launched JD Omni, an end-to-end business management solution for SMEs, through which it intends to transition thousands of SMEs to efficiently run their business online and have adequate online presence via their own website and mobile site. Apart from this, it also launched JD Pay, a unique solution for quick digital payments for its users and vendors, and JD Social, its official social sharing platform to provide curated content on latest happenings to users. The organisation also aims to make communication between users and businesses seamless through its Real Time Chat Messenger.</div>
            <div className='aboutUssecondDivContainerHeading'>About Us</div>
            <div className='aboutUssecondDivContainerContent'>MeeIndia Limited is India's No. 1 Local Search engine that provides local search related services to users across India through multiple platforms such as website, mobile website, Apps (Android, iOS), over the telephone (voice, pan India number 8888888888) and text (SMS). Justdial has also initiated ‘Search Plus’ services for its users. These services aim at making several day-to-day tasks conveniently actionable and accessible to users through one App. By doing so, it has transitioned from being purely a provider of local search and related information to being an enabler of such transactions. Justdial has also launched JD Omni, an end-to-end business management solution for SMEs, through which it intends to transition thousands of SMEs to efficiently run their business online and have adequate online presence via their own website and mobile site. Apart from this, it also launched JD Pay, a unique solution for quick digital payments for its users and vendors, and JD Social, its official social sharing platform to provide curated content on latest happenings to users. The organisation also aims to make communication between users and businesses seamless through its Real Time Chat Messenger.</div>
        </div>
        {/* <div className='aboutusFooter'><Footer/></div> */}
      </div>
      
      </>
    )
  }

  export default AboutUs
