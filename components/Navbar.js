import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  function isActive(route) {
    if (route == router.pathname) {
      return "active";
    } else "";
  }

  return (
    <nav>
      <div className="nav-wrapper #4e342e brown darken-3">
        <Link href="/">
          <a className="brand-logo left">Logo</a>
        </Link>
        <ul id="nav-mobile" className="right ">
          <li className={isActive("/")}>
            <Link href="/">Home</Link>
          </li>
          <li className={isActive("/signin")}>
            <Link href="/signin">SignIn</Link>
          </li>
          <li className={isActive("/signup")}>
            <Link href="/signup">SignUp</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
