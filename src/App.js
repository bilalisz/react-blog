import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
function App() {

  return(
  <Router>
     <Navbar/>
     <Switch>
       
         <Route exact path='/' component={Home}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/about' component={About}/>
          <Route path='/:post_id' component={Post}/>
     </Switch>
  </Router>
  )
}

export default App;
