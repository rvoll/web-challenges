import "../styles.css";

export default function NavLink({ children }) {
  return (
    <>
      <a className="navigation__link" href={children}>
        {children}
      </a>
    </>
  );
}
