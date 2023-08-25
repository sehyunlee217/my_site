import { useState } from "react";
import logo from "../assets/jl_logo.svg";
import { Link } from "react-router-dom";

function Name({ primary, secondary }) {
    const [showName, setshowName] = useState(primary);

    return (
        <span className="cursor-pointer" onMouseEnter={() => { setshowName(secondary); }}
            onMouseLeave={() => { setshowName(primary); }}>
            {showName}
        </span>
    );

}

export default function Header({ lang, type }) {
    let headerText;
    let switchAddress = { en: "/", kr: "/kr" };

    if (lang === "kr") {
        headerText = (
            <div className='font-kr_reg text-5xl pt-3 sm:pt-5'>
                <Link to={`/kr`}>이승현</Link>
            </div>
        );
    }
    else {
        headerText = (
            <div className="font-noteworthy">
                <Link to={`/`}>
                    <Name primary={"s.h.l"} secondary={"seung.hyun.lee"} />
                </Link>
            </div>
        );
    }

    if (type === "about") {
        switchAddress = {
            en: "/About", kr: "/About/kr"
        };
    }

    if (type === "creative") {
        switchAddress = {
            en: "/Creative", kr: "/Creative"
        };
    }

    return (
        <header className="text-primary dark:text-font_dark flex justify-between pt-10 pb-5">
            <div>
                <div className='name text-5xl sm:text-6xl'>{headerText}</div>
            </div>
            <div className="no-wavy font-main flex justify-center items-end gap-3">
                <Link className="block" to={switchAddress.kr}>
                    <div>한</div>
                    <div>국</div>
                    <div>어</div>
                </Link>
                <Link className="block" to={switchAddress.en}>
                    <div>E</div>
                    <div>N</div>
                    <div>G</div>
                </Link>
            </div>
        </header>

    );

}