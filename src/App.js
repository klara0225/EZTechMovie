import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';
import About from './components/About';
import Cart from './components/Cart';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MovieGrid />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
