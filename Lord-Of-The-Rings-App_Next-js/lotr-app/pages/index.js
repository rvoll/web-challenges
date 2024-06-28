import Link from "next/link";
// import Image from "next/image";

import { data } from "@/lib/data";
import { volumes } from "@/lib/data";
// import { images } from "@/public/images";

import { Introduction } from "@/pages/Introduction";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      {/* <p>Introduction</p> */}

      {/* INTRO TEXT imported from !lib/dat.js!!! */}
      {/* h2: All Volumes
ul, li and Link */}
      <h2>All Volumes</h2>
      <ul>
        <li>
          <link href="">Link_1</link>
          <link href="">Link_2</link>
          <link href="">Link_3</link>
          {/* <link href="">...</link> */}
        </li>
      </ul>
    </div>
  );
}

// An unordered list with links to all volumes (ul, li and Link)
// The link text should be the volume title
// The link should point to the volume page

// You can hard code the volumes for now.
// If you want to make it dynamic, you can use the volumes array
// from lib/data.js. Use the Link component from Next.js
// to link to the volume pages.

// Jess: mit Link Komponente brauchen wir <a> tag nicht mehr!
