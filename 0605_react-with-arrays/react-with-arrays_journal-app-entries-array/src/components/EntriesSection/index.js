import "./EntriesSection.css";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
// import { Fragment } from "react";
// import Divider from "../Divider";

// last Question LEFT to DO:
//
// (If you are using this template:
// How can you render a <Divider /> component between each entry?
// Don't break the flexbox layout (a Fragment might help) - DONE.)
//
// >>> Avoid having a divider below the last or above the first entry
//
// >>> I must use Fragment and Divider in the ENTRY component!
// Go there...

export default function EntriesSection() {
  const entries = [
    {
      id: 1000,
      date: "Feb 5, 2025",
      motto: "We are in a state of chaos",
      notes:
        "Today I learned about React State. It was fun! I can't wait to learn more.",
    },
    {
      id: 999,
      date: "Feb 4, 2025",
      motto: "Props, Props, Props",
      notes:
        "Today I learned about React Props. Mad props to everyone who understands this!",
    },
    {
      id: 998,
      date: "Feb 3, 2025",
      motto: "How to nest components online fast",
      notes:
        "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    },
    {
      id: 997,
      date: "Feb 2, 2025",
      motto: "I'm a React Developer",
      notes: "My React-ion when I learned about React: 😍",
    },
  ];

  return (
    <>
      <section className="entries-section">
        <Tabs>
          <Tab active>
            All Entries <Badge isActive>3</Badge>
          </Tab>
          <Tab>
            Favorites <Badge>1</Badge>
          </Tab>
        </Tabs>
        <div className="entries-section__entries">
          {entries.map(({ id, date, motto, notes }) => (
            <Entry key={id} date={date} motto={motto} notes={notes} />
          ))}
          {/* von Sabeth: */}
          {/* Hiermit funktioniert es mit Dividers nur _zwischen_ den Einträgen. */}
          {/* {entries.map((entry, index) => {
            return (
              <Fragment key={entry.id}>
                <Entry
                  date={entry.date}
                  motto={entry.motto}
                  notes={entry.notes}
                />
                {index < entries.length - 1 && <Divider />}
              </Fragment>
            );
          })} */}
          {/*  */}
        </div>
        {/* <Divider /> */}
      </section>
    </>
  );
}

// {{ id } === 997 ? "" : <Divider />}
