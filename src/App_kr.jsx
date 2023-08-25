import './index.css';
import Header from './components/header';
import Home from './components/pages/home';
// import Posts from './components/posts';

function App_kr() {

    return (
        <main className='h-screen  bg-font_dark font-main font-light dark:bg-primary_dark'>
            <div id="content" className="px-10">
                <Header lang={"kr"} />
                <Home lang={"kr"} />
            </div>
        </main>
    );
}

export default App_kr;

