// the ISSTracker component features a coords state,
// a getISSCoords function and a useEffect to fetch data on interval.

// TASK 1: Fetching on load:

// Comment out all unnecessary code:

// the coords state,
// the getISSCoords function,
// the useEffect,
// for now:
// the onRefresh prop passed to the Controls component
// (you will adapt this in a minute).

// === >>> I'll start with Task 2 and do Task 1 (above) as I go along. <<< ====

// Implement fetching of the same data with SWR.

// a) DONE: SWR is already installed, so you just have to import it.

// =================================================================
// ====================================================
// NEXT:

// b) NOT YET DONE: Handle the isLoading and error states provided by SWR as well. ("handle"?)
// >>> see Handout, p. 3

// => Can be copied from the Handout but - Where does it go? And
// what does "character" in the handout stand for?
// >>> (1) Read the handout properly! (eventually also the Global State Handout)
//     (2) look at the demo for inspiration!

// AFTER THIS:
// Make sure data is defined before working with it.
// Remember to adapt the fetcher function to create a proper error state as explained in the SWR docs.
// Note: SWR needs you to destructure a data object, but the Map and Controls component need longitude and latitude as separate props; how can you simply pass the coordinates from data without changing the Map/index.js and Controls/index.js files? (Hint: there are several ways to do this!)
// ✨ You should now see the exact position of the ISS again when refreshing the page!

import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

// from Handout:

// function Character() {
//   const { data } = useSWR("https://swapi.dev/api/people/1", fetcher);

//   // render data
//   return <div>Hello {data.name}!</div>; // Hello Luke Skywalker!
// }

export default function ISSTracker() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setCoords({ longitude: data.longitude, latitude: data.latitude });
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      getISSCoords();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
