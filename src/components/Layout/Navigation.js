import { Link } from 'react-router-dom';

import classes from './Navigation.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Strangers Things</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to='/auth'>Login</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
