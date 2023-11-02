"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
function EditTopicform({ id, title, description }) {
  console.log("this is titile", title);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ newTitle, newDescription }),
      });
      if (!res.ok) {
        throw new Error("Failed to create a topic");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="flex flex-col gap-3" onClick={submitHandler}>
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button className="bg-green-600 text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
}

export default EditTopicform;
