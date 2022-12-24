import Logo from './Images/Logo.png'
import './App.css';
import Card from './Card';
import Footer from './Footer';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <div className="head">
        <img src={Logo} alt="img"
        />
         </div>
         <div className='zak'>
        <b>Follow.Fb./Tw./In.</b>
       </div>
     <b> <i>$239.00</i></b>
     
      <Card />
      <Footer />
    </div>
  );
}

export default App;
