import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Faqs from './pages/Faqs';
import Home from './pages/Home';
import Store from './pages/Store';
import Header from './components/Header'
import Footer from './components/Footer'


// git push -u origin jordam-trybetunes

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/store" element={<Store />} />
          <Route exact path="/faqs" element={<Faqs />} />
          <Route exact path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    );
  }
}

export default App;
