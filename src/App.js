
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
      <div className="container-fluid">
        <div className="row">
        <div className="col-lg-3 col-md-12 hide-on-mobile "  >
          <h2>Left Section</h2>
          <p>This content is displayed in all screen sizes.</p>
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
