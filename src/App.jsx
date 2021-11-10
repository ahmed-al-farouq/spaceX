import { useRef } from 'react';
import { Provider } from 'react-redux';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
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
import store from './redux/reduxConfig';

function App() {
  const menuIconRef = useRef();
  const closeIconRef = useRef();
  const menuRef = useRef();
  const handelMenu = () => {
    menuIconRef.current.classList.toggle('d-none');
    closeIconRef.current.classList.toggle('d-none');
    menuRef.current.classList.toggle('open');
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <header>
          <div className="left-section">
            <img src={logo} alt="logo" className="logo" />
            <h2>Space Travelers&rsquo; Hub</h2>
          </div>
          <div
            className="menu-icon"
            ref={menuIconRef}
          >
            <GiHamburgerMenu onClick={handelMenu} />
          </div>
          <div className="close-icon d-none" ref={closeIconRef}>
            <IoClose onClick={handelMenu} />
          </div>
          <nav ref={menuRef}>
            <ul>
              <li>
                <NavLink onClick={handelMenu} to="/" activeclassname="active">Rockets</NavLink>
              </li>
              <li>
                <NavLink onClick={handelMenu} to="/missions" activeclassname="active">Missions</NavLink>
              </li>
              <li>
                <NavLink onClick={handelMenu} to="/profile" activeclassname="active">My Profile</NavLink>
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
    </Provider>
  );
}

export default App;
