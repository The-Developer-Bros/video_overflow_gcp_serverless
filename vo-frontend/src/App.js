import './styles/App.css';
import NavBar from "./components/Navbar"
import Body from "./components/Body"
import Footer from "./components/Footer"


// import { BrowserRouter as Router, Route, withRouter, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Body />
      <Footer />    
    </div>
  );
}

export default App;
