import React, { Fragment } from "react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("failed to fetch Topics");
    }
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <Fragment>
      {topics.map((item) => (
        <div
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
          key={item._id}
        >
          <div>
            <h2 className="font-bold text-2xl">{item?.title}</h2>
            <div>{item?.description}</div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={item?._id} />
            <Link href={`/editTopic/${item?._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default TopicsList;
