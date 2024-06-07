import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

export default function App() {
  // VON PHILLIP:
  //  console.log(USERS);
  //
  //  WAS IST HIER DAS PROBLEM wenn ich das unter div schreibe????
  // {USERS.map(({ id, name, roles, about }) => (
  //   <user key={id} id={id} name={name} />
  // ))}

  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        <Card user={USERS[0]} />
        <Card user={USERS[1]} />
      </div>
    </main>
  );
}
