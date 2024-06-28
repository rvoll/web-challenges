// This file will eventually replace
// the static volume detail pages.

// // Inside of [slug].js recreate the VolumeDetail component
// // which returns the same elements as the static version
// // of the component. Adjust the code so that the content
// // is now based around the slug from the router.query object.

import Image from "next/image";
import Link from "next/link";

export default function VolumeDetail() {
  const volumeIndex = volumes.findIndex(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

  const volume = volumes[volumeIndex];
  const nextVolume = volumes[volumeIndex + 1];
  const previousVolume = volumes[volumeIndex - 1];

  if (!volume) {
    return null;
  }

  const { title, description, cover, books } = volume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={cover}
        alt={`Cover image of ${title}`}
        width={140}
        height={230}
      />
      {previousVolume ? (
        <div>
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous Volume: {previousVolume.title}
          </Link>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}

// ===============================================
//   // ganz grob von Sylvie abgekupfert:

// const { default: VolumeDetail } = require("./the-fellowship-of-the-ring");

// export default function VolumeDetail(s?)
// constconst
// const
// if ()

// return (
// <div>
//     <h1>volume.title</h1>
//     <p>volume.description</p>
// <image></image>
// <h2>
// </h2>
// <ul>

// </ul>
// </div>

// )
