import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import moment from "moment";
import { tz } from "moment-timezone";

function useTime() {
    const [time, setTime] = useState(moment());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment());
        }, 1000);
        return () => clearInterval(interval);
    });
    return time;
}

// .tz("America/Toronto").format("MMMM Do, h:mm:ss A")

function Clock({ time, location, lang }) {
    if (lang === "kr") {
        if (location === "America/Toronto") {
            return (
                <span className=""><b>토론토</b>에 거주하며, 현지 시간은 {time.tz("America/Toronto").format("h:mm:ss A")}.</span>
            );
        }
        else if (location === "Asia/Seoul") {
            return (
                <span className="">집은 <b>서울</b>이며, <b>서울</b>은 현재 {time.tz("Asia/Seoul").format(" h:mm:ss A")}.</span>
            );
        }
    }
    else {
        if (location === "America/Toronto") {
            return (
                <span className="">Located in <b>Toronto, Canada</b>, at {time.tz("America/Toronto").format("h:mm:ss A")}.</span>
            );
        }
        else if (location === "Asia/Seoul") {
            return (
                <span className="">Home belongs to <b>Seoul, Korea</b>, currently at {time.tz("Asia/Seoul").format("MMMM Do, h:mm:ss A")}.</span>
            );
        }
    }
}

export default function Navbar({ lang }) {
    const time = useTime();

    if (lang === "kr") {
        return (
            <nav className='text-gray-600 font-kr_reg flex-col text-2xl dark:text-slate-200'>
                <div className="">안녕하세요, 토론토 대학교 산업공학과 학생입니다.</div>
                <div className="time-container flex-col">
                    <Clock time={time} lang={"kr"} location={"America/Toronto"} />
                    <span> </span>
                    <Clock time={time} lang={"kr"} location={"Asia/Seoul"} />
                </div>
                <div className="flex-col">
                    <div>
                        <Link to={`/About`}>about</Link>
                    </div>
                    <div>
                        <Link to={`/Projects`}>projects</Link>
                    </div>
                    <div>
                        <Link to={`/Creative`}>creative stuff</Link>
                    </div>
                </div>
            </nav>
        );
    }
    else {
        return (
            <nav className='text-gray-600 flex-col text-2xl dark:text-slate-200'>
                <div>Studying engineering at University of Toronto</div>
                <div className="time-container flex-col">
                    <Clock time={time} location={"America/Toronto"} />
                    <span> </span>
                    <Clock time={time} location={"Asia/Seoul"} />
                </div>
                <div className="flex-col">
                    <div>
                        <Link to={`/About`}>about</Link>
                    </div>
                    <div>
                        <Link to={`/Projects`}>projects</Link>
                    </div>
                    <div>
                        <Link to={`/Creative`}>creative stuff</Link>
                    </div>
                </div>
            </nav>
        );
    }

}