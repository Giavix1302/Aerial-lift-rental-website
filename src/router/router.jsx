import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import DetailItem from '../pages/DetailItem';

function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<DetailItem />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
      </Routes>
    </Router>
  );
}

export default MyRouter;