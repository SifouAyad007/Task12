import './App.css';
import { Routes , Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import Services from './pages/Services';
import Products from './pages/Products';
import Aboutus from './pages/Aboutus';
import Portfolio from './pages/Portfolio';
import Faq from './pages/Faq';
import Contacts from './pages/Contacts';
import MakeRequest from './pages/MakeRequest';
import Calculations from './pages/Calculations';
import Nav from './components/Nav';


function App() {
  return (
    <div>

<Nav/>
<Routes>
    <Route path="/" element= {<MainPage/>}></Route>
    <Route path="/services" element= {<Services/>}></Route>
    <Route path="/products" element= {<Products/>}></Route>
    <Route path="/aboutus" element= {<Aboutus/>}></Route>
    <Route path="/portfolio" element= {<Portfolio/>}></Route>
    <Route path="/FAQ" element= {<Faq/>}></Route>
    <Route path="/contacts" element= {<Contacts/>}></Route>
    <Route path="/make-request" element= {<MakeRequest/>}></Route>
    <Route path="/calculations" element= {<Calculations/>}></Route>
</Routes>
      
    </div>
  );
}

export default App;
