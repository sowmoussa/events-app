import Link from "next/link";
import classes from './main-header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Events App</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
