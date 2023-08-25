import { Link } from "react-router-dom";
import Navbar from "../navbar";
import Header from "../header";
import { BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss, BiLogoPython, BiLogoNodejs, BiLogoJava } from "react-icons/bi";


export default function About() {

    return (
        <div className="about px-10 pb-10 bg-font_dark dark:bg-primary_dark">
            <Header type={"about"} />
            <div className="flex" >
                <div className="text-primary_dark dark:text-font_dark font-main flex flex-col text-xl gap-5 sm:gap-20 sm:text-2xl sm:flex-row ">
                    <nav className=''>
                        <Navbar />
                    </nav>
                    <div className="flex flex-col gap-5 text-xl sm:text-2xl pr-5 sm:pr-36">
                        <div>
                            I am a second-year industrial engineering student at the University of Toronto,
                            returning this year upon completion of my military service as an interpreter.
                        </div>
                        <div>
                            I share a passion for both the arts and engineering.
                            The different perspectives deriving from these two disciplines
                            complements my ability to think creatively and come up with ideas
                            to solve problems.
                        </div>
                        <div>
                            Currently, I am in the process of learning the tools necessary
                            to solve these problems through my engineering degree and by self-learning.
                        </div>
                        <span>My art and projects are displayed here :
                            <Link className="link" to={`/Creative`}> creative</Link>,
                            <Link className="link" to={`/Projects`}> projects</Link>
                        </span>

                        <div className="font-extrabold font-roboto">Technical Skills</div>
                        <div className="skills-list text-primary dark:text-font_dark flex">
                            <BiLogoReact size={50} className=" hover:text-korean_oak" />
                            <BiLogoJavascript className=" hover:text-korean_umber" size={50} />
                            <BiLogoHtml5 className=" hover:text-korean_orange" size={50} />
                            <BiLogoCss3 className=" hover:text-korean_blue" size={50} />
                            <BiLogoTailwindCss className=" hover:text-korean_lightblue" size={50} />
                            <BiLogoPython className=" hover:text-korean_yellow" size={50} />
                        </div>
                        <div className="font-extrabold font-roboto">Learning Right Now</div>
                        <div className="skills-list text-primary dark:text-font_dark flex">
                            <BiLogoNodejs size={50} className=" hover:text-korean_yellowgreen" />
                            <BiLogoJava size={50} className=" hover:text-korean_orange" />
                        </div>

                        {/* <div className="font-extrabold font-roboto">Education</div> */}
                        <div></div>

                        <div className="flex-col text-base sm:text-xl">
                            <div>
                                github: <a href="https://github.com/sehyunlee217">/sehyunlee217</a>
                            </div>
                            <div>
                                linked-in: <a href="https://www.linkedin.com/in/joe-lee-0953a215a/">/joelee</a>
                            </div>
                            <div>
                                read-cv: <a href="https://read.cv/sehyunlee217">/seunghyunlee</a>
                            </div>
                            <div>
                                email: <a className="hover:cursor-pointer" onClick={(e) => { window.location.href = 'mailto:leeseunghyun217@gmail.com'; }}>leeseunghyun217@gmail.com</a>
                            </div>

                        </div>

                    </div>
                    <div className="flex basis-full"></div>
                </div>
            </div>
        </div >
    );

};

