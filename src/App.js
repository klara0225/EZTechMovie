import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Movies from './components/Movies';
function App() {
  return (
    <Router>
      <Header />
      <Movies />
    </Router>
  );
}

export default App;