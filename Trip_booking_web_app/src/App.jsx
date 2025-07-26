import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import TripDetailsPage from './pages/TripDetailsPage';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/trip/:id" element={<TripDetailsPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;