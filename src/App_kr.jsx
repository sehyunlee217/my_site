import './index.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Posts from './components/posts';

function App_kr() {

    return (
        <main className='h-screen px-10 py-10 font-sans font-light flex-col gap-4 bg-background dark:bg-primary_dark'>
            <Header lang={"kr"} />
            <Navbar lang={"kr"} />
        </main>
    );
}

export default App_kr;

