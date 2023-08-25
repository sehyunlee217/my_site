import './index.css';
import Header from './components/header';
import Home from './components/pages/home';
// import Posts from './components/posts';

// potential line drawing
{/* <div className="invisible line flex w-1/12 opacity-50">
        <div className="h-screen w-8 sm:visible sm:bg-primary"></div>
        <div className="h-screen w-2 sm:visible sm:bg-font_dark"></div>
        <div className="h-screen w-8 sm:visible sm:bg-korean_oak"></div>
        <div className="h-screen w-6 sm:visible sm:bg-korean_umber"></div>
        <div className="h-screen w-5 sm:visible sm:bg-korean_red"></div>
        <div className="h-screen w-5 sm:visible sm:bg-korean_orange"></div>
        <div className="h-screen w-2 sm:visible sm:bg-font_dark"></div>
        <div className="h-screen w-5 sm:visible sm:bg-korean_orange"></div>
        <div className="h-screen w-5 sm:visible sm:bg-korean_red"></div>
        <div className="h-screen w-6 sm:visible sm:bg-korean_umber"></div>
        <div className="h-screen w-8 sm:visible sm:bg-korean_oak"></div>
        <div className="h-screen w-2 sm:visible sm:bg-font_dark"></div>
        <div className="h-screen w-8 sm:visible sm:bg-primary"></div>
      </div> */}

function App() {

  return (
    <div className='font-main font-light bg-font_dark dark:bg-primary_dark'>
      <div id="content" className="px-10">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;

