export default function Link({ children }) {
  return (
    <a
      src="children.src"
      className="navigation__link"
      href={children.href}
      alt={children.alt}
    >
      {children}
    </a>
  );
}

// The Link component returns an <a> element with className="navigation__link"
// and receives the props
// href which is passed to the href attribute of the <a> tag and
// children passed between the opening and closing <a> tags.
