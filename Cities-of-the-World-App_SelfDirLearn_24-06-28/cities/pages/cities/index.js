// This is where we will show a list of all cities.

// DONE:
// To do that,
// import the cities from our data.js file
import Link from "next/link";

import { cities } from "@/lib/data";

// Once you have the data,
// >>> loop over each city object<<<

// DONE
// and create an li element.
// For now, just display the cities ---??? WHAT?

// LOOP: ....and finally
// from the hint in the chalenge instructions!!!
// Das nächste Mal - guck direkt da nach!!!

import { cities } from "../../lib/data";

export default function Cities() {
  return (
    <>
      <h1>Cities</h1>
      <ul>
        {cities.map((city) => (
          <li key={city.id}>{city.name}</li>
        ))}
      </ul>
    </>
  );
}

// ============================
// LOOP: from my own version of the Basic lotr-App:

// export default function HomePage() {
//   return (
//     <div>
//       <h1>Lord of the Rings</h1>
//       {/* <p>Introduction</p> */}

//       {/* INTRO TEXT imported from !lib/dat.js!!! */}
//       {/* h2: All Volumes
//   ul, li and Link */}
//       <h2>All Volumes</h2>
//       <ul>
//         <li>
//           <link href="">Link_1</link>
//           <link href="">Link_2</link>
//           <link href="">Link_3</link>
//           {/* <link href="">...</link> */}
//         </li>
//       </ul>
//     </div>
//   );
// }

// ============================
// // LOOP from ChatGPT:

// // pages/index.js

// export async function getStaticProps() {
//     // Fetch data from your database
//     const data = await fetchDataFromDatabase();

//     return {
//       props: {
//         items: data, // Pass the data as a prop to the component
//       },
//     };
//   }

//   const Home = ({ items }) => {
//     return (
//       <div>
//         <h1>Items List</h1>
//         <ul>
//           {items.map((item) => (
//             <li key={item.id}>{item.name}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   };

//   // Mock function to simulate data fetching
//   async function fetchDataFromDatabase() {
//     return [
//       { id: 1, name: 'Item 1' },
//       { id: 2, name: 'Item 2' },
//       { id: 3, name: 'Item 3' },
//     ];
//   }
// ============================

// ============================
// // LOOP from Stack overflow:

//     export async function getStaticProps() {
//         const res = await fetch('https://jsonplaceholder.typicode.com/todos')
//         const data = await res.json()

//         return {
//             props: { todos: data }
//         }
//     }
//     //the getStaticProps runs before the component is rendered,
//     // fetches the data, waits for the data and pumps it into the component
//     // so the component can be rendered with the data inside it.

//     const Todos = ({ todos }) => {
//         return (
//             <>
//                 <Head>
//                     <title>To Do List</title>
//                 </Head>
//                 <div>
//                     <h1>To Do List</h1>
//                     {todos.map(todoList => (
//                         <div key={todoList.id}>
//                             <a><h3>
//                             {  todoList.title}

//                             </h3> </a>
//                         </div>
//                     ))}
//                 </div>
//             </>
//         );
//     }

//     export default Todos;

// <!-- end snippet -->
// ============================

//  =========================
// index-js of lotr-app for inspiration:

// import Link from "next/link";
// // import Image from "next/image";

// import { data } from "@/lib/data";
// import { volumes } from "@/lib/data";
// // import { images } from "@/public/images";

// import { Introduction } from "@/pages/Introduction";

// export default function HomePage() {
//   return (
//     <div>
//       <h1>Lord of the Rings</h1>
//       {/* <p>Introduction</p> */}

//       {/* INTRO TEXT imported from !lib/dat.js!!! */}
//       {/* h2: All Volumes
// ul, li and Link */}
//       <h2>All Volumes</h2>
//       <ul>
//         <li>
//           <link href="">Link_1</link>
//           <link href="">Link_2</link>
//           <link href="">Link_3</link>
//           {/* <link href="">...</link> */}
//         </li>
//       </ul>
//     </div>
//   );
// }

// // An unordered list with links to all volumes (ul, li and Link)
// // The link text should be the volume title
// // The link should point to the volume page

// // You can hard code the volumes for now.
// // If you want to make it dynamic, you can use the volumes array
// // from lib/data.js. Use the Link component from Next.js
// // to link to the volume pages.

// // Jess: mit Link Komponente brauchen wir <a> tag nicht mehr!
