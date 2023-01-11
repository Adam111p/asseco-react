import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <ul style={{ listStyle: 'none', color: 'white' }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/playlist">Playlist</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav;
