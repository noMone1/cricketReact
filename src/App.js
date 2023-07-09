
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import MiddleSection from './components/MiddleSection';
import MatchList from './components/MatchList';

function App() {
  return (
    <div className=""> 
    <div style = {{position:'sticky',top:0,zIndex:1}}>
        <Header />
      </div>
      <ul class="list-group p-0" style={{background:"orange"}} >
        <div style={{display:"flex"}} >
         <li class="list-group-item" style={{background:"orange",color:"white"}} ><b>Home</b></li>
         <li class="list-group-item" style={{background:"orange"}} ><b>In- Play</b></li>
         <li class="list-group-item" style={{background:"orange"}} ><b>Multi Market</b></li>
         </div>
         </ul>
      <div className="container-fluid">
        <div className="row">
        <div className="col-lg-3 col-md-12 hide-on-mobile "  >
        <ul class="list-group"><li class="list-group-item" style={{background:"#480760"}}><h2 style={{color:"white"}}>Sports</h2></li></ul>
         
          <ul class="list-group">
          <li class="list-group-item">Cricket</li>
          </ul>
        </div>
          <div className="col-lg-6 col-md-12 scrollable-content p-0 ">
            <div className="container ">
            <Router>
            <Routes>
                <Route path="/"  element={<MatchList/>} /> {/* Home component */}
                <Route path="/match" element={<MiddleSection/>} /> {/* About component */}
                {/* <Route path="/contact" component={Contact} /> */}
                {/* Add more routes as needed */}
                </Routes>
              </Router>

            </div>
          </div>
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default App;
