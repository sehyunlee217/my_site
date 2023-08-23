import './index.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Posts from './components/posts';

function App() {

  return (
    <main className='h-screen px-10 py-10 font-main font-light flex-col gap-4 dark:bg-primary_dark'>
      <Header />
      <Navbar />
    </main>
  );
}

export default App;

