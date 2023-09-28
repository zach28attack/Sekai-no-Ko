import Class from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={Class.container}>
      <div className={Class.logo}>
        <ruby>
          世界<rt>せかい</rt>の<rt></rt>子<rt>こ</rt>
        </ruby>
      </div>
    </nav>
  );
}
