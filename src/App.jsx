import { useRef } from 'react';
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import logo from './planet.png';
import './App.css';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import Profile from './components/Profile';

function App() {
  const rocketsLinkRef = useRef(null);
  const missionsLinkRef = useRef(null);
  const profileLinkRef = useRef(null);
  const navigate = (e) => {
    if (e.target.textContent === 'Rockets') {
      rocketsLinkRef.current.classList.add('active');
      missionsLinkRef.current.classList.remove('active');
      profileLinkRef.current.classList.remove('active');
    } else if (e.target.textContent === 'Missions') {
      rocketsLinkRef.current.classList.remove('active');
      missionsLinkRef.current.classList.add('active');
      profileLinkRef.current.classList.remove('active');
    } else {
      rocketsLinkRef.current.classList.remove('active');
      missionsLinkRef.current.classList.remove('active');
      profileLinkRef.current.classList.add('active');
    }
  };

  return (
    <BrowserRouter>
      <header>
        <div className="left-section">
          <img src={logo} alt="logo" className="logo" />
          <h2>Space Travelers&rsquo; Hub</h2>
        </div>
        <nav>
          <ul>
            <li className="active" ref={rocketsLinkRef}>
              <Link to="/" onClick={navigate}>Rockets</Link>
            </li>
            <li ref={missionsLinkRef}>
              <Link to="/missions" onClick={navigate}>Missions</Link>
            </li>
            <li ref={profileLinkRef}>
              <Link to="/profile" onClick={navigate}>My Profile</Link>
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
