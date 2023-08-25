import Navbar from "../navbar";
import Header from "../header";

export default function Posts() {
    return (
        <main className='h-screen dark:text-font_dark text-primary bg-font_dark font-main font-light dark:bg-primary_dark'>
            <div id="content" className="px-10">
                <Header lang={""} />
                <div>Currently in Progress</div>
            </div>
        </main>
    );
}