import "./styles.css";

export default function App() {
  return <Greeting name="Andrea" />;
}

function Greeting({ name }) {
  const isCoach = name === "Andrea" || name === "Jessica";
  const isRebecca = name === "Rebecca";

  return (
    <h1>
      Hey there {isCoach ? "Coach" : isRebecca ? "Rebecca" : "stranger"},
      how&apos;s it going?
    </h1>
  );
}
