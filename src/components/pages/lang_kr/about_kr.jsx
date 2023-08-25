import { Link } from "react-router-dom";
import Navbar from "../../navbar";
import Header from "../../header";

export default function About() {

    return (
        <div className="px-10  bg-font_dark dark:bg-primary_dark h-screen">
            <Header type={"about"} lang={"kr"} />
            <div >
                <div className="text-primary_dark dark:text-font_dark font-main flex flex-col text-xl gap-5 sm:gap-20 sm:text-2xl sm:flex-row ">
                    <nav className=''>
                        <Navbar />
                    </nav>
                    <div className="flex flex-col gap-5 text-xl sm:text-2xl pr-5 sm:pr-20 md:pr-32 lg:pr-80">
                        <div>
                            안녕하세요, 저는 현재 토론토 대학교에서 산업공학과를 공부하고 있습니다.
                        </div>
                        <div>
                            저는 공학, 그리고 미술이라는 서로 다른 분야에 관심이 있습니다.
                            세상을 해석하는 방법이 완전히 다른 두 과목이지만,
                            서로 다른 관점에서 문제를 해석할 수 있는 점을 이용해
                            창의적인 문제 해결 방법을 제시할 수 있는 능력이 저만의 장점이라고 생각합니다.
                        </div>
                        <div>
                            추가로, 문제를 해결하기 위해 필요한 도구와 지식을 독학으로, 그리고 산업공학을 공부하면서 배우고 있습니다.
                        </div>
                        <span>제 프로젝트와 미술는 링크에 제공되어 있습니다:
                            <Link to={`/Projects`}> 프로젝트</Link>,
                            <Link to={`/Creative`}> 미술</Link>
                        </span>

                        <div className="pt-4">Education</div>
                        <div className="h-8"></div>
                        <div>Skills</div>
                        <div className="h-8"></div>

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

