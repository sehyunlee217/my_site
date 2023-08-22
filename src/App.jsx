import './index.css';
import Header from './components/header';
import Navbar from './components/navbar';
import Posts from './components/posts';

function App() {

  return (
    <main className='px-10 py-10 font-sans font-light flex-col gap-4'>
      <Header />
      <Navbar />
    </main>
  );
}

export default App;

