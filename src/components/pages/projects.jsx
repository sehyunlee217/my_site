import Navbar from "../navbar";
import Header from "../header";

export default function Projects() {
    return (
        <main className='h-screen dark:text-font_dark text-primary bg-font_dark font-main font-light dark:bg-primary_dark'>
            <div id="content" className="px-10">
                <Header lang={""} />
                <div>Currently in Progress</div>
                {/* slider projects */}
                {/* projects 1-4/ @mobile: vertical formating */}
                {/* projects 1-4/ @desktop: horizontal formating */}
            </div>
        </main>
    );
}