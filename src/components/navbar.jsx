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
            <div className="font-normal">{time.tz("America/Toronto").format("MMMM Do, h:mm:ss A")}</div>
        );
    }
    else if (location === "Asia/Seoul") {
        return (
            <div className="font-normal">{time.tz("Asia/Seoul").format("MMMM Do, h:mm:ss A")}</div>
        );
    }
}

export default function Navbar() {
    const time = useTime();

    return (
        <nav className='text-gray-500 flex-col'>
            <div>Engineering Student at University of Toronto</div>
            <div className="time-container flex-col">
                <p>Currently located in <b>Toronto 🇨🇦</b>, at</p>
                <Clock time={time} location={"America/Toronto"} />
                <div className="h-2"></div>
                <div>But from <b>Seoul 🇰🇷</b>, at</div>
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