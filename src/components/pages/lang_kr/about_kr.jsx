import { Link } from "react-router-dom";
import Navbar from "../../navbar";
import Header from "../../header";
import { BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoCss3, BiLogoTailwindCss, BiLogoPython, BiLogoNodejs, BiLogoJava } from "react-icons/bi";

export default function About() {

    return (
        <div className="px-10 pb-10 bg-font_dark dark:bg-primary_dark h-screen">
            <Header type={"about"} lang={"kr"} />
            <div >
                <div className="text-primary_dark dark:text-font_dark font-main flex flex-col text-xl gap-5 sm:gap-20 sm:text-2xl sm:flex-row ">
                    <nav className=''>
                        <Navbar lang={"kr"} />
                    </nav>
                    <div className="flex flex-col gap-5 text-xl sm:text-2xl pr-5 sm:pr-36">
                        <div>
                            안녕하세요, 저는 현재 토론토 대학교에서 산업공학과를 전공하고 있습니다.
                        </div>
                        <div>
                            저는 공학, 그리고 미술이라는 서로 다른 분야에 관심이 있습니다.
                            세상을 해석하는 방법이 완전히 다른 두 과목이지만,
                            서로 다른 관점에서 문제를 해석할 수 있는 점을 이용해
                            창의적인 문제 해결 방법을 제시할 수 있는 능력이 저만의 장점이라고 생각합니다.
                        </div>
                        <div>
                            추가로, 문제를 해결하기 위해 필요한 도구와 지식을 독학, 그리고 산업공학을 공부하면서 배우고 있습니다.
                        </div>
                        <span>미술과 프로젝트는 여기서 볼 수 있습니다:
                            <Link to={`/Creative`}> 미술</Link>,
                            <Link to={`/Projects`}> 프로젝트</Link>
                        </span>
                        <div className="font-extrabold">프로그래밍 언어</div>
                        <div className="skills-list text-primary dark:text-font_dark flex">
                            <BiLogoReact size={50} className=" hover:text-korean_oak" />
                            <BiLogoJavascript className=" hover:text-korean_umber" size={50} />
                            <BiLogoHtml5 className=" hover:text-korean_orange" size={50} />
                            <BiLogoCss3 className=" hover:text-korean_blue" size={50} />
                            <BiLogoTailwindCss className=" hover:text-korean_lightblue" size={50} />
                            <BiLogoPython className=" hover:text-korean_yellow" size={50} />
                        </div>
                        <div className="font-extrabold">현재 배우는 중</div>
                        <div className="skills-list text-primary dark:text-font_dark flex">
                            <BiLogoNodejs size={50} className=" hover:text-korean_yellowgreen" />
                            <BiLogoJava size={50} className=" hover:text-korean_orange" />
                        </div>

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
        </div>
    );

};

