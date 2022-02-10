import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Submenu from './components/Submenu';
import Sidebar from './components/Sidebar';

const App = () => {

  return (
    <>
      <Navbar />
      <Sidebar />
      <Main />
      <Submenu />
    </>
  );
}

export default App;
