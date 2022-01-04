import './styles/App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Footer from "./components/Footer"


import { BrowserRouter as Router, Route, withRouter, Redirect, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
