import { Link } from 'react-router-dom';
import styles from './Nav.module.scss';
import { Avatar } from '@mui/material';
import { useContext } from 'react';
import { userContext } from '../../contexts/userContext';
import { themeContext } from '../../contexts/themeContext';

const Nav = () => {
  const user = useContext(userContext)
  const theme = useContext(themeContext)

  const click = ()=>{
    console.log(theme?.theme);
    if (theme?.theme){
    theme.theme=theme.theme==='light'?'dark':'light';
    }
  }
  return (
    <nav className={styles.Nav}>
      <button onClick={click}>Switch theme</button>
      {user && <>
        <Avatar src={user.avatar}/>
        <h4>{user.name} ({user.level})</h4>
      </>}
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
