import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

export default function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/movie/:id" exact component={Detail} />
      </Router>
    </>
  )
}
