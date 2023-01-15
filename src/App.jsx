import Logo from './assets/Images/Logo.png'
import './App.css';
import { Card, Footer } from './Components'

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
