import logo from './logo.jpeg';
import './App.css';
import './global.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);



function App() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSidebar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = (sectionId) => {
    setIsNavOpen(false);
    scrollToSection(sectionId);
  };

  return (
   <div className = 'container'>


    <div className = "navbar">
            <div className = "evans">
                <h2>Evans</h2>
                </div>
                <div className = "nav">
                    <span className ='clear'><a className = 'link'  onClick={() => handleLinkClick('me')}>Me</a></span>
                    <span className ='clear'><a className = 'link'  onClick={() => handleLinkClick('research')}>Research</a></span>
                    <span className ='clear'><a className = 'link'  onClick={() => handleLinkClick('project')}>Projects</a></span>
                    <span className ='clear'><a className = 'link' onClick={() => handleLinkClick('skills')}>Skills</a></span>
                    <span className ='clear'><a className = 'link' >My Résumé</a></span>
                     <span className ='lear' onClick={toggleSidebar}>
            {isNavOpen ? (
              <FontAwesomeIcon icon= 'fa-solid fa-xmark' />
            ) : (
              <FontAwesomeIcon icon= 'fa-solid fa-bars' />
            )}
          </span>
        </div>
        <div className="sidenav" style={{ display: isNavOpen ? 'flex' : 'none' }}>
          <span onClick={toggleSidebar}>
            {isNavOpen ? (
              <FontAwesomeIcon icon= 'fa-solid fa-xmark' />
            ) : (
              <FontAwesomeIcon icon= 'fa-solid fa-bars' />
            )}
          </span>
                    <span><a className="l" onClick={() => handleLinkClick('me')}>Me</a></span>
          <span><a className="l"  onClick={() => handleLinkClick('research')}>Research</a></span>
          <span><a className="l"  onClick={() => handleLinkClick('project')}>Projects</a></span>
          <span><a className="l"  onClick={() => handleLinkClick('skills')}>Skills</a></span>
          <span><a className="l"  onClick={() => handleLinkClick('')}>My Résumé</a></span>
                    </div>
            </div>
            
                 <div className ='content'>

                  <div className = 'me' id='me'>
                    <div className ='about'>

                      <div className = 'name'>
                        I'm Umezinwa Evans Chukwuebuka
                      </div><br />
                      <div className = 'connect'>
                        CONNECT LET'S DO -
                      </div><br />
                      <div className = 'text'>
                        I'm a versatile individual, I've honed a 
                diverse set of skills and interests. I'm a seasoned full-stack 
                web developer, I'm also a dedicated veterinary medicine student,
                 driven to provide compassionate care and improve the well-being
                  of animals. However, my true passion lies in the field of 
                  artificial intelligence (AI), and I'm particularly interested 
                  in exploring the intersection of AI and various domains through
                   research. I'm deeply fascinated by the advancements in AI and
                    how they can be applied to enhance existing technologies and 
                    create new, innovative solutions. Actively seeking 
                    opportunities to collaborate on cutting-edge AI research 
                    projects, I'm eager to leverage my multifaceted expertise 
                    to push the boundaries of what's possible and contribute to
                     the advancement of this transformative field.
                      </div>
                      <button className='btn' onClick={(e) => scrollToSection('contact', e)}>CONTACT ME</button>

                      </div>

                      <div className='picture'>
                        <img src={ logo } className='image' alt = 'evans-picture' />
                      </div>

                      

                    </div>

                    <div className= 'iconcontact'>
                        <span>
                          <a
                          className='iconlogo'
                          href='https://github.com/Nickosin'
                          target= "_blank"
                          rel = 'noopener' noreferrer>
                            <FontAwesomeIcon icon= 'fa-brands fa-github' />
                            </a>
                        </span>

                        <span>
                          <a
                          className='iconlogo'
                          href='https://wa.me/233506269885'
                          target= "_blank"
                          rel = 'noopener' noreferrer>
                            <FontAwesomeIcon icon= 'fa-brands fa-whatsapp' />
                            </a>
                        </span>

                        <span>
                          <a
                          className='iconlogo'
                          href='https://x.com/UmezinwaE01?t=DyrrcHgmab1AJe_3qLXjWg&s=09'
                          target= "_blank"
                          rel = 'noopener' noreferrer>
                            <FontAwesomeIcon icon= 'fa-brands fa-square-twitter' />
                            </a>
                        </span>

                        <span>
                          <a
                          className='iconlogo'
                          href='mailto:umezinwaevans@gmail.com'
                          target= "_blank"
                          rel = 'noopener' noreferrer>
                            <FontAwesomeIcon icon= 'fa-regular fa-envelope' />
                            </a>
                        </span>

                      </div>

                      <div className = 'research' id = 'research'>
                      <div className = 'researchContent'>
                        <div className = 'researchHeader'>
                          <h2 className = 'header'>RESEARCH INTEREST</h2>
                          <hr />
                          </div>
                          <br />
                          <div className='researchContentt'>
                            <div className='int'><span className= 'head'>Applying AI to Veterinary Medicine:</span>
<span className='intbody'>As a veterinary student, I'm fascinated by the potential of AI to revolutionize animal care and welfare. I believe AI can be leveraged to enhance diagnostic accuracy, streamline clinical workflows, and provide more personalized care for patients. For instance, AI-powered algorithms can analyze medical images, lab results, and other data to identify potential health issues earlier and more accurately. This can be particularly useful in detecting diseases such as cancer, where early detection is crucial for effective treatment. Additionally, AI can help personalize treatment plans by analyzing individual animal characteristics, medical history, and environmental factors. By integrating AI with veterinary medicine, we can improve patient outcomes, reduce costs, and enhance the overall quality of care.</span></div><br /><br />


                  <div className='int'><span className= 'head'>Integrating Hardware and AI Systems:</span>

<span className='intbody'> As a student of veterinary medicine, I've realized that medical devices and equipment often lack the ability to collect, analyze, and respond to real-time data. This is where AI comes in – by integrating AI with hardware systems, we can create more sophisticated, responsive, and effective medical tools. For example, AI-powered devices can collect data on animal vital signs, monitor environmental factors, and provide real-time feedback to veterinarians. This can be particularly useful in emergency situations, where every second counts. Additionally, AI can enable robots to perform tasks such as surgery, patient monitoring, and sample collection, reducing the risk of human error and improving patient outcomes. By integrating AI with hardware, we can create more efficient, effective, and compassionate medical care.</span></div><br /><br />


                  <div className='int'><span className = 'head'>Exploring the Intersection of AI and Web Development:</span>

<span className='intbody'>As a student of veterinary medicine, I've also developed an interest in web development and the potential applications of AI in this field. I believe AI can be used to create innovative solutions for veterinary education, communication, and collaboration. For instance, AI-powered veterinary portals can provide personalized, user-friendly access to medical records, track patient progress, and receive real-time updates. This can be particularly useful for veterinarians and pet owners who need to stay up-to-date with the latest medical information and treatment options. Additionally, AI can help create interactive, immersive learning environments for veterinary students, providing personalized feedback and assessment tools. By combining AI with web development, we can create more effective, efficient, and compassionate veterinary care.</span></div>
                            </div>
                      </div>
                      </div>

                      <div className = 'education' id = 'education'>
                        <div className = 'educationContent'>
                          <div className = 'educationHeader'>
                            <h2 className = 'headerE'>EDUCATION</h2>
                            <hr className = 'hrE' />
                            </div><br />

                            <div className = 'schs'>
                            <div className = 'academic'>
                              <div className = 'school'>
                               <span className='bold'> KWAME NKRUHMAH UNIVERSITY OF SCIENCE AND TECHNOLOGY</span><br />
                     Doctor of Veterinary Medicine <br />
                      2021 - DATE
                              </div>
                              <div className = 'schlink'>
                                <a
                                className = 'linksch'
                                href = 'https://www.knust.edu.gh'
                                target = '_black'
                                rel = 'noopener noreferrer'>
                                  <FontAwesomeIcon icon= 'fa-solid fa-link' />
                                  </a>
                                </div>
                            </div>
                             <div className = 'academic'>
                              <div className = 'school'>
                                <span className='bold'>BLESSED CHILD INT'L SCHOOL</span><br />
                        SHS - General Science - WASSCE<br />
                        2015 - 2018
                              </div>
                              <div className = 'schlink'>
                                <a
                                className = 'linksch'
                                href = ''
                                target = '_black'
                                rel = 'noopener noreferrer'>
                                  <FontAwesomeIcon icon= 'fa-solid fa-link' />
                                  </a>
                                </div>
                            </div>

                            <div className = 'academic'>
                              <div className = 'school'>
                                <span className='bold'> BLESSED CHILD INT'L SCHOOL</span><br />
                        SHS - General Science - B.E.C.E<br />
                        2011 - 2014
                              </div>
                              <div className = 'schlink'>
                                <a
                                className = 'linksch'
                                href = ''
                                target = '_black'
                                rel = 'noopener noreferrer'>
                                  <FontAwesomeIcon icon= 'fa-solid fa-link' />
                                  </a>
                                </div>
                            </div>
                            </div>

                        </div>
                        </div>

                        <div className = 'projects' id='project'>
                          <div className='projectsContent'>
                            <div className='projectHeader'>
                              <h2 className='header'>PROJECTS</h2>
                              <hr />
                            </div><br />

                            <div className='projectName'>
                              <div className='chocolateGlow'>
                                <div className='brandlogo'>
                                  <span><FontAwesomeIcon icon= 'fa-solid fa-basketball' /></span> 
                                  <span>
                                    <a
                                className = 'linksch'
                                href = ''
                                target = '_black'
                                rel = 'noopener noreferrer'>
                                  <FontAwesomeIcon icon= 'fa-solid fa-link' />
                                  </a>
                                  </span>
                                </div>
                                <div className='brandname'>
                                  <h3>Chocolate Glow</h3>
                                </div>
                                <div className='aboutbrand'>
                                  A makeup website where you can get in touch 
                                  with the makeup artist and book a section
                                </div>
                                <div className='softwareused'>
                                  <span><FontAwesomeIcon icon= 'fa-brands fa-react' /></span>
                                  <span><FontAwesomeIcon icon= 'fa-brands fa-node' /></span>
                                  <span><FontAwesomeIcon icon= 'fa-solid fa-feather' /></span>
                                </div>
                              </div>

                              <div className='chocolateGlow'>
                                <div className='brandlogo'>
                                  <span><FontAwesomeIcon icon= 'fa-solid fa-basketball' /></span> 
                                  <span>
                                    <a
                                className = 'linksch'
                                href = ''
                                target = '_black'
                                rel = 'noopener noreferrer'>
                                  <FontAwesomeIcon icon= 'fa-solid fa-link' />
                                  </a>
                                  </span>
                                </div>
                                <div className='brandname'>
                                  <h3>Chocolate Glow</h3>
                                </div>
                                <div className='aboutbrand'>
                                  A makeup website where you can get in touch 
                                  with the makeup artist and book a section
                                </div>
                                <div className='softwareused'>
                                  <span><FontAwesomeIcon icon= 'fa-brands fa-react' /></span>
                                  <span><FontAwesomeIcon icon= 'fa-brands fa-node' /></span>
                                  <span><FontAwesomeIcon icon= 'fa-solid fa-feather' /></span>
                                </div>
                              </div>

                              <div className='chocolateGlow'>
                                <div className='brandlogo'>
                                  <span><FontAwesomeIcon icon= 'fa-solid fa-basketball' /></span> 
                                  <span>
                                    <a
                                className = 'linksch'
                                href = ''
                                target = '_black'
                                rel = 'noopener noreferrer'>
                                  <FontAwesomeIcon icon= 'fa-solid fa-link' />
                                  </a>
                                  </span>
                                </div>
                                <div className='brandname'>
                                  <h3>Chocolate Glow</h3>
                                </div>
                                <div className='aboutbrand'>
                                  A makeup website where you can get in touch 
                                  with the makeup artist and book a section
                                </div>
                                <div className='softwareused'>
                                  <span><FontAwesomeIcon icon= 'fa-brands fa-react' /></span>
                                  <span><FontAwesomeIcon icon= 'fa-brands fa-node' /></span>
                                  <span><FontAwesomeIcon icon= 'fa-solid fa-feather' /></span>
                                </div>
                              </div>

                              <div className='chocolateGlow'>
                                <div className='brandlogo'>
                                  <span><FontAwesomeIcon icon= 'fa-solid fa-basketball' /></span> 
                                  <span>
                                    <a
                                className = 'linksch'
                                href = ''
                                target = '_black'
                                rel = 'noopener noreferrer'>
                                  <FontAwesomeIcon icon= 'fa-solid fa-link' />
                                  </a>
                                  </span>
                                </div>
                                <div className='brandname'>
                                  <h3>Chocolate Glow</h3>
                                </div>
                                <div className='aboutbrand'>
                                  A makeup website where you can get in touch 
                                  with the makeup artist and book a section
                                </div>
                                <div className='softwareused'>
                                  <span><FontAwesomeIcon icon= 'fa-brands fa-react' /></span>
                                  <span><FontAwesomeIcon icon= 'fa-brands fa-node' /></span>
                                  <span><FontAwesomeIcon icon= 'fa-solid fa-feather' /></span>
                                </div>
                              </div>

                            </div>

                          </div>
                        </div>

                        <div className ='skills' id='skills'>
                          <div className='skillscontent'>
                            <div className='header'>
                              <h2 className='headerE'>SKILLS AND STACKS</h2>
                              <hr className='hrE' />
                            </div><br />

                            <div className='stacks'>
                            <div className='end'>
                              <div className='frontheader'>
                                <span></span>
                                <span className='headerF'>FRONTEND</span>
                                <hr />
                              </div>
                              <div className='frontendLan'>
                                <div className='react'>
                                  <span><FontAwesomeIcon icon='fa-brands fa-react' className='endlogo' /></span>
                                  <span>React.JS</span>
                                </div>

                                <div className='bootstrap'>
                                  <span><FontAwesomeIcon icon='fa-brands fa-bootstrap' className='endlogo' /></span>
                                  <span>Bootstrap</span>
                                </div>

                                <div className='html'>
                                  <span><FontAwesomeIcon icon='fa-brands fa-html5' className='endlogo' /></span>
                                  <span>HTML|CSS|JS</span>
                                </div>
                              </div>
                            </div>

                             <div className='end'>
                              <div className='backheader'>
                                <span></span>
                                <span className='headerF'>BACKEND</span>
                                <hr />
                              </div>
                              <div className='backendLan'>
                                <div className='node'>
                                  <span><FontAwesomeIcon icon='fa-brands fa-node' className='endlogo' /></span>
                                  <span>Node.JS</span>
                                </div>

                                <div className='express'>
                                  <span><FontAwesomeIcon icon='fa-solid fa-file-excel' className='endlogo' /></span>
                                  <span>Express.JS</span>
                                </div>
                              </div>
                            </div>

                            <div className='end'>
                              <div className='databaseheader'>
                                <span></span>
                                <span className='headerF'>DATABASE</span>
                                <hr />
                              </div>
                              <div className='databaseLan'>
                                <div className='mongo'>
                                  <span><FontAwesomeIcon icon='fa-solid fa-feather' className='endlogo' /></span>
                                  <span>MongoDB</span>
                                </div>
                              </div>
                            </div>

                            <div className='end'>
                              <div className='uiheader'>
                                <span></span>
                                <span className='headerF'>UI/UX</span>
                                <hr />
                              </div>
                              <div className='uiLan'>
                                <div className='ui-ux'>
                                  <span><FontAwesomeIcon icon='fa-brands fa-photoshop' className='endlogo' /></span>
                                  <span>Photoshop</span>
                                </div>
                              </div>
                            </div>
                            </div>

                          </div>
                        </div> 

                        <div className='contact' id='contact'>
                          <div className='contacticon'>
                            <span>
                          <a
                          className='logolink'
                          href='https://github.com/Nickosin'
                          target= "_blank"
                          rel = 'noopener' noreferrer>
                            <FontAwesomeIcon className='ilogo' icon= 'fa-brands fa-github' />
                            </a>
                        </span>

                        <span>
                          <a
                          className='logolink'
                          href='https://wa.me/233506269885'
                          target= "_blank"
                          rel = 'noopener' noreferrer>
                            <FontAwesomeIcon className='ilogo' icon= 'fa-brands fa-whatsapp' />
                            </a>
                        </span>

                        <span>
                          <a
                          className='logolink'
                          href='https://x.com/UmezinwaE01?t=DyrrcHgmab1AJe_3qLXjWg&s=09'
                          target= "_blank"
                          rel = 'noopener' noreferrer>
                            <FontAwesomeIcon className='ilogo' icon= 'fa-brands fa-square-twitter' />
                            </a>
                        </span>

                        <span>
                          <a
                          className='logolink'
                          href='mailto:umezinwaevans@gmail.com'
                          target= "_blank"
                          rel = 'noopener' noreferrer>
                            <FontAwesomeIcon className='ilogo' icon= 'fa-regular fa-envelope' />
                            </a>
                        </span>
                          </div>
                          <div className='copyright'>
                            <p className='copy'>Copyright © 2025 UMEZINWA EVANS CHUKWUEBUKA</p>
                          </div>
                        </div>

                 </div>
              
            </div>
  );
}

export default App;
