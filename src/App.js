import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Certifique-se de importar os componentes corretos
import Home from './pages/Home'; 
import Contact from './pages/Contact';
import Company from './pages/Company';
import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container';
import NewProject from './pages/NewProject';
import Projects from './pages/Projects';
import Project from './pages/Project';
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
            <Container customClass="min-height">
              <Route exact path='/'>
                    <Home />
              </Route>

              <Route  path='/projects'>
                    <Projects />
              </Route>
              
              <Route  path='/contact'>
                    <Contact />
              </Route>
              <Route  path='/company'>
                    <Company />
              </Route>
              <Route  path='/newprojects'>
                    <NewProject />
              </Route>
              <Route  path='/project/:id'>
                    <Project />
              </Route>
            </Container>
        </Switch>
      </Router>
    </div>
  );
}

export default App;