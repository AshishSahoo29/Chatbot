import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Component/Home';
import Login from './Component/Login';
import Registration from './Component/Register';
import Dashboard from './Component/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/db" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
