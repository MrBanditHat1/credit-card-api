import './App.scss';
import BuyPage from './buyPage.js';
import Payment from './payment.js';
import Confirmation from './confirmation.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path="/" element={<BuyPage />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path ='/payment' element={<Payment />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
