import about from "../assets/jl_about.svg";
import { Link } from "react-router-dom";

export default function About() {



    return (
        <>
            <main className='px-10 py-10 h-full font-main font-light flex-col gap-4 text-gray-600 dark:text-slate-200 dark:bg-primary_dark'>
                <header>
                    <h1 className='text-5xl py-2 font-noteworthy'>about</h1>
                </header>
                <div className="h-4"></div>
                <div className="font-light text-xl ">
                    I am a second-year industrial engineering student at University of Toronto,
                    returning this year upon completion of my military service as an interpreter.
                    <div className="h-4"></div>
                    I share a passion for both the arts and engineering.
                    The different perspectives deriving from these two disciplines
                    complements my ability to think creatively and come up with ideas
                    to solve problems.
                    <div className="h-4"></div>
                    Currently, I am in the process of learning the tools necessary
                    to solve these problems through my engineering degree and by self-learning.
                    <div className="h-4"></div>
                    <span>My art and projects are displayed as follows :
                        <Link to={`/Projects`}> projects</Link>,
                        <Link to={`/Creative`}> creative stuff</Link>
                    </span>
                    <div>
                    </div>
                    <div className="h-8"></div>
                </div>
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


            </main>
            <footer></footer>
        </>
    );
}