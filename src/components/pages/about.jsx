import { Link } from "react-router-dom";
import Navbar from "../navbar";
import Header from "../header";

export default function About() {

    return (
        <div className="about px-10 dark:bg-primary_dark">
            <Header type={"about"} />
            <div >
                <div className="text-primary_dark dark:text-font_dark font-main flex flex-col text-xl gap-5 sm:gap-20 sm:text-2xl sm:flex-row ">
                    <nav className=''>
                        <Navbar />
                    </nav>
                    <div className="flex flex-col gap-5 text-xl sm:text-2xl pr-5 sm:pr-20 md:pr-32 lg:pr-80">
                        <div>
                            I am a second-year industrial engineering student at University of Toronto,
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

                        <div className="pt-4">Education</div>
                        <div>Skills</div>

                        <div className="flex-col">
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
                </div>
            </div>
        </div>
    );

};

