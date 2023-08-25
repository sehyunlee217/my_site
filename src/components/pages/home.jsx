import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Clock from "../clock";
import About from "./about";
import Navbar from "../navbar";

export default function Home({ lang }) {
    let navDescription;
    if (lang === "kr") {
        navDescription =
            <div className="flex flex-col gap-2 mt-0">
                <div className="">토론토 대학교 산업공학과.</div>
                <div className="">웹개발, 최적화, 데이터분석을 배우고 있습니다.</div>
                <div>
                    <Clock lang={"kr"} location={"America/Toronto"} />
                </div>
                <div>
                    <Clock lang={"kr"} location={"Asia/Seoul"} />
                </div>
            </div>;
    }
    else {
        navDescription =
            <div className="flex flex-col gap-2 mt-0">
                <div>Second-year Industrial engineering student.</div>
                <div>Learning web development, optimization, and data analytics.</div>
                <div>
                    <Clock location={"America/Toronto"} />
                </div>
                <div>
                    <Clock location={"Asia/Seoul"} />
                </div>
            </div>;
    }

    return (
        <nav className='h-full  text-primary_dark dark:text-font_dark font-main flex flex-col text-xl gap-5 sm:gap-20 sm:text-2xl sm:flex-row '>
            <Navbar />
            {navDescription}
        </nav>
    );
}



