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

export default function Header({ lang }) {
    if (lang === "kr") {
        return (
            <header className="grid grid-rows-2  text-primary dark:text-slate-200">
                <h1 className='text-6xl py-2 font-noteworthy'>s.h.l</h1>

                <div className="flex font-kr_reg justify-between items-center">
                    <div className='name text-4xl tracking-wide font-extrabold text-primary dark:text-slate-200 decoration-dotted'>
                        이승현
                    </div>
                    <div>
                        <div className="lang_switch font-main">
                            <Link to={`/kr`}>한국어</Link> / <Link to={`/`}>ENG</Link>
                        </div>
                    </div>
                </div>
            </header>

        );
    }
    else {
        return (
            <header className="grid grid-rows-2 text-primary dark:text-slate-200">
                <h1 className='text-6xl py-2 font-noteworthy'>s.h.l</h1>

                <div className="flex justify-between items-center font-roboto">
                    <div className='name text-4xl text-primary dark:text-slate-200'>
                        <Name primary={"Joe Lee"} secondary={"Seunghyun Lee"} />
                    </div>
                    <div>
                        <div className="lang_switch font-main">
                            <Link to={`/kr`}>한국어</Link> / <Link to={`/`}>ENG</Link>
                        </div>
                    </div>
                </div>
            </header>

        );
    }

}