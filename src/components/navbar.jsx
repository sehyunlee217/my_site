import { Link } from "react-router-dom";

export default function Navbar({ type }) {
    if (type === "about") {
        return (
            <div id="nav" className="text-base text-primary dark:text-font_dark font-roboto  font-extrabold flex gap-4 mt-0 justify-between sm:text-2xl sm:gap-2 sm:flex-col sm:justify-start">
                <div>
                    <Link to={`/About/kr`}>about</Link>
                </div>
                <span className="sm:hidden">/</span>
                <div>
                    <Link to={`/Posts`}>posts</Link>
                </div>
                <span className="sm:hidden">/</span>
                <div>
                    <Link to={`/Creative`}>creative</Link>
                </div>
                <span className="sm:hidden">/</span>
                <div>
                    <Link to={`/Projects`}>projects</Link>
                </div>
            </div>
        );
    }
    else {
        return (
            <div id="nav" className="text-base text-primary dark:text-font_dark font-roboto  font-extrabold flex gap-4 mt-0 justify-between sm:text-2xl sm:gap-2 sm:flex-col sm:justify-start">
                <div>
                    <Link to={`/About`}>about</Link>
                </div>
                <span className="sm:hidden">/</span>
                <div>
                    <Link to={`/Posts`}>posts</Link>
                </div>
                <span className="sm:hidden">/</span>
                <div>
                    <Link to={`/Creative`}>creative</Link>
                </div>
                <span className="sm:hidden">/</span>
                <div>
                    <Link to={`/Projects`}>projects</Link>
                </div>
            </div>
        );
    }

}



