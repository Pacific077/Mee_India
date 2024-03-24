  import React from 'react'
  import "./AboutUs.css"
import Footer from '../../../components/Footer/Footer'
import AboutUsCard from './AboutUsCard'

  const AboutUs = () => {
    return (
      <>
      <div className='maindiv'>
        <div className='firstheading'>About Us Website Page Concept - Blog & Testimonials Section</div>
        <div className='secondprofile'>
         <div className='titlename'>
            <span style={{color :"green"}}>Mee</span>
            <span>India</span>
          </div>  
        </div>
        <div className='firstdivcontainer'>
            <div className='firstDivSubContainer1' >
              <div className='firstdivecontainer1_firstdiv'>
                  <div className='storyheading'>Our story</div>
                  <div className='carddiv'>
                    <AboutUsCard/>
                    <AboutUsCard/>
                    <AboutUsCard/>
                  </div>
              </div>
              <div className='firstdivecontainer1_seconddiv'>
                    what people are saying about us..
              </div>
            </div>
            {/* <div className='firstDivSubContainer2'>
              <div className='firstDivSubContainer2_firstdiv' >hello</div>
            </div> */}
        </div>
        <div className = "SecondDivContainer">
            <div className='secondDivContainerHeading'>About Us</div>
            <div className='secondDivContainerContent'>MeeIndia Limited is India's No. 1 Local Search engine that provides local search related services to users across India through multiple platforms such as website, mobile website, Apps (Android, iOS), over the telephone (voice, pan India number 8888888888) and text (SMS). Justdial has also initiated ‘Search Plus’ services for its users. These services aim at making several day-to-day tasks conveniently actionable and accessible to users through one App. By doing so, it has transitioned from being purely a provider of local search and related information to being an enabler of such transactions. Justdial has also launched JD Omni, an end-to-end business management solution for SMEs, through which it intends to transition thousands of SMEs to efficiently run their business online and have adequate online presence via their own website and mobile site. Apart from this, it also launched JD Pay, a unique solution for quick digital payments for its users and vendors, and JD Social, its official social sharing platform to provide curated content on latest happenings to users. The organisation also aims to make communication between users and businesses seamless through its Real Time Chat Messenger.
            </div>
            <div className='secondDivContainerHeading'>About Us</div>
            <div className='secondDivContainerContent'>MeeIndia Limited is India's No. 1 Local Search engine that provides local search related services to users across India through multiple platforms such as website, mobile website, Apps (Android, iOS), over the telephone (voice, pan India number 8888888888) and text (SMS). Justdial has also initiated ‘Search Plus’ services for its users. These services aim at making several day-to-day tasks conveniently actionable and accessible to users through one App. By doing so, it has transitioned from being purely a provider of local search and related information to being an enabler of such transactions. Justdial has also launched JD Omni, an end-to-end business management solution for SMEs, through which it intends to transition thousands of SMEs to efficiently run their business online and have adequate online presence via their own website and mobile site. Apart from this, it also launched JD Pay, a unique solution for quick digital payments for its users and vendors, and JD Social, its official social sharing platform to provide curated content on latest happenings to users. The organisation also aims to make communication between users and businesses seamless through its Real Time Chat Messenger.</div>
            <div className='secondDivContainerHeading'>About Us</div>
            <div className='secondDivContainerContent'>MeeIndia Limited is India's No. 1 Local Search engine that provides local search related services to users across India through multiple platforms such as website, mobile website, Apps (Android, iOS), over the telephone (voice, pan India number 8888888888) and text (SMS). Justdial has also initiated ‘Search Plus’ services for its users. These services aim at making several day-to-day tasks conveniently actionable and accessible to users through one App. By doing so, it has transitioned from being purely a provider of local search and related information to being an enabler of such transactions. Justdial has also launched JD Omni, an end-to-end business management solution for SMEs, through which it intends to transition thousands of SMEs to efficiently run their business online and have adequate online presence via their own website and mobile site. Apart from this, it also launched JD Pay, a unique solution for quick digital payments for its users and vendors, and JD Social, its official social sharing platform to provide curated content on latest happenings to users. The organisation also aims to make communication between users and businesses seamless through its Real Time Chat Messenger.</div>
            <div className='secondDivContainerHeading'>About Us</div>
            <div className='secondDivContainerContent'>MeeIndia Limited is India's No. 1 Local Search engine that provides local search related services to users across India through multiple platforms such as website, mobile website, Apps (Android, iOS), over the telephone (voice, pan India number 8888888888) and text (SMS). Justdial has also initiated ‘Search Plus’ services for its users. These services aim at making several day-to-day tasks conveniently actionable and accessible to users through one App. By doing so, it has transitioned from being purely a provider of local search and related information to being an enabler of such transactions. Justdial has also launched JD Omni, an end-to-end business management solution for SMEs, through which it intends to transition thousands of SMEs to efficiently run their business online and have adequate online presence via their own website and mobile site. Apart from this, it also launched JD Pay, a unique solution for quick digital payments for its users and vendors, and JD Social, its official social sharing platform to provide curated content on latest happenings to users. The organisation also aims to make communication between users and businesses seamless through its Real Time Chat Messenger.</div>
        </div>
        {/* <div className='aboutusFooter'><Footer/></div> */}
      </div>
      
      </>
    )
  }

  export default AboutUs
