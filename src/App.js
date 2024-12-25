import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CourseDetails from './pages/CourseDetails.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer.jsx';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/course/:id"
          element={<ProtectedRoute element={<CourseDetails />} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
