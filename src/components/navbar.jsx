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

function Clock({ time, location }) {
    if (location === "America/Toronto") {
        return (
            <span className="">Located in <b>Toronto, Canada</b>, at {time.tz("America/Toronto").format("h:mm:s A")}.</span>
        );
    }
    else if (location === "Asia/Seoul") {
        return (
            <span className="">Home belongs to <b>Seoul, Korea</b>, currently at {time.tz("Asia/Seoul").format("MMMM Do, h:mm:s A")}</span>
        );
    }
}

export default function Navbar() {
    const time = useTime();

    return (
        <nav className='text-gray-600 flex-col'>
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