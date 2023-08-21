import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className='text-gray-500 flex-col'>
            <div>Engineering Student at <a href="https://www.utoronto.ca/">University of Toronto</a></div>
            <div>In Toronto, at 15:37</div>
            <div className="h-4"></div>
            <div>
                When not studying, I work on <Link to={`/Projects`}>projects</Link> and do <Link to={`/Creative`}>creative stuff</Link>.
            </div>
            <div className="h-4"></div>
            <div>
                <Link to={`/About`}>- About me</Link>
            </div>
            <div>
                <Link to={`/Posts`}><h2 className="text-2l font-semibold">Posts</h2></Link>
                <Outlet />
            </div>
        </nav>
    );
}