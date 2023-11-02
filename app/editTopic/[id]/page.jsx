import EditTopicform from "@/app/components/EditTopicform";
import React from "react";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }
    return res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

async function page({ params }) {
  const { id } = params;

  const { topics } = await getTopicById(id);

  if (topics) {
    const { title, description } = topics[0];
    return (
      <div>
        <EditTopicform id={id} title={title} description={description} />
      </div>
    );
  } else {
    return <div>Error: Failed to fetch topic</div>;
  }
}

export default page;
