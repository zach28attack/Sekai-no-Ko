import Class from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={Class.container}>
      <ol>
        <li className={Class.logo}>
          <ruby>
            世界<rt>せかい</rt>の<rt></rt>子<rt>こ</rt>
          </ruby>
        </li>
        <li className={Class.navItem}>Articles</li>
        <li className={Class.navItem}>Account</li>
      </ol>
    </nav>
  );
}
