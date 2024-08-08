import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      <div className="app__card-grid">
        {USERS.map((user) => {
          <Card key={user.id} user={user.user} />;
        })}
      </div>
    </main>
  );
}

// return (
//   <div className="app">
//     {fruits.map((fruit) => {
//       return (
//         <div key={fruit.id}>
//           <Card name={fruit.name} color={fruit.color} />
//         </div>
//       );
//     })}
//   </div>
// );
// }

// SECOND TRY:

// <div className="app__card-grid">
// {USERS.map((user) => {
//   return (
//     <div key={user.id}>
//       <Card name={user.name} roles={user.roles} about={user.about} />
//     </div>
//   );
// })}

// {/* <Card user={USERS[0]} /> */}
// </div>

// FIRST TRY

// // Use Array.map to create a card for each user
// // in the USERS array. Make sure to add a unique key to each card.

// export default function App() {
//   return (
//     <main className="app">
//       <Title text="ClientBoard" />
//       <div className="app__card-grid">
//       {USERS.map(({ id, name, roles, about }) => (<Card key={id} name={name} roles={roles} about={about} />)
//       }
//         {/* <Card user={USERS[0]} /> */}
//       </div>
//     </main>
//   )}

// {/* {entries.map(({ id, date, motto, notes }) => ( */}
// {/* <Entry key={id} date={date} motto={motto} notes={notes} /> */}
// {/* ))} */}
