import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import logo from './planet.png';
import './App.css';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <header>
        <div className="left-section">
          <img src={logo} alt="logo" className="logo" />
          <h2>Space Travelers&rsquo; Hub</h2>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">Rockets</NavLink>
            </li>
            <li>
              <NavLink to="/missions" activeClassName="active">Missions</NavLink>
            </li>
            <li>
              <NavLink to="/profile" activeClassName="active">My Profile</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
