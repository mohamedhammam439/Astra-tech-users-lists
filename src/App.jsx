
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from './components/UserList';
import UserDetail from './components/UserDetails';
import './App.css'
const App = () => {
  return (
    <Router>
      <div>
        <h1>Users-List-App</h1>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
