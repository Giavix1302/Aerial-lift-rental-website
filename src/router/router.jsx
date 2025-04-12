import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import DetailItem from '../pages/DetailItem/DetailItem';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ListProduct from '../pages/ListProduct';


function MyRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<DetailItem />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/item" element={<ListProduct />} />
      </Routes>
    </Router>
  );
}

export default MyRouter;