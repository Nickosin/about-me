import logo from './logo.jpeg';
import './App.css';
import './global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);



function App() {

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
   <div className = 'container'>


    <div className = "navbar">
            <div className = "evans">
                <h2>Evans</h2>
                </div>
                <div className = "nav">
                    <span><a className = 'link' href = "#" onClick={(e) => scrollToSection('me', e)}>Me</a></span>
                    <span><a className = 'link' href = "#" onClick={(e) => scrollToSection('research', e)}>Research</a></span>
                    <span><a className = 'link' href = "#" onClick={(e) => scrollToSection('project', e)}>Projects</a></span>
                    <span><a className = 'link' href = "#" onClick={(e) => scrollToSection('skills', e)}>Skills</a></span>
                    <span><a className = 'link' href = "#">My Résumé</a></span>
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
                          href=''
                          target= "_blank"
                          rel = 'noopener' noreferrer>
                            <FontAwesomeIcon icon= 'fa-brands fa-square-twitter' />
                            </a>
                        </span>

                        <span>
                          <a
                          className='iconlogo'
                          href='umezinwaevans@gmail.com'
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
<span className='intbody'>Given your background in both veterinary medicine and AI,
 you could explore how advancements in artificial intelligence 
 can be leveraged to enhance veterinary care and animal well-being.
  This could include using AI-powered diagnostic tools, automated monitoring systems, 
  or personalized treatment recommendations.</span></div><br /><br />


                  <div className='int'><span className= 'head'>Integrating Hardware and AI Systems:</span>

<span className='intbody'>As a skilled hardware engineer and someone passionate about AI, 
you could investigate ways to integrate hardware and AI technologies to create
 innovative, intelligent systems. This could involve developing IoT (Internet of Things)
  devices, robotics, or embedded systems that utilize AI algorithms for enhanced 
  functionality and decision-making.</span></div><br /><br />


                  <div className='int'><span className = 'head'>Exploring the Intersection of AI and Web Development:</span>

<span className='intbody'>Combining your expertise in full-stack web development and your interest in AI, 
you could explore how AI can be leveraged to enhance the user experience, 
improve web application performance, or automate certain web development tasks. 
This could include using AI for personalized content recommendations, automated testing, 
or intelligent content generation.</span></div>
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
                                href = ''
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
                          href=''
                          target= "_blank"
                          rel = 'noopener' noreferrer>
                            <FontAwesomeIcon className='ilogo' icon= 'fa-brands fa-square-twitter' />
                            </a>
                        </span>

                        <span>
                          <a
                          className='logolink'
                          href='umezinwaevans@gmail.com'
                          target= "_blank"
                          rel = 'noopener' noreferrer>
                            <FontAwesomeIcon className='ilogo' icon= 'fa-regular fa-envelope' />
                            </a>
                        </span>
                          </div>
                          <div className='copyright'>
                            <p className='copy'>Copyright @ 2025 UMEZINWA EVANS CHUKWUEBUKA</p>
                          </div>
                        </div>

                 </div>
              
            </div>
  );
}

export default App;
