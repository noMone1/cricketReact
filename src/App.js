import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import MiddleSection from './components/MiddleSection';
function App() {
  return (
    <div className="">
      <Header />
      <div className="container-fluid">
        <div className="row">
        <div className="col-lg-3 col-md-12 hide-on-mobile ">
          <h2>Left Section</h2>
          <p>This content is displayed in all screen sizes.</p>
        </div>
          <div className="col-lg-6 col-md-12 scrollable-content p-0 " >
            <div className="container">
            <MiddleSection />
            </div>
          </div>
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default App;
