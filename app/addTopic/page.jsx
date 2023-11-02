"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
function Page() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const submitHandler = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      if (!title || !description) {
        alert("Please fill in the empty fields");
        return;
      }
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={submitHandler}>
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        value={title}
        placeholder="Topic Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border border-slate-500 px-8 py-2"
        type="text"
        value={description}
        placeholder="Topic Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="bg-green-600 text-white py-3 px-6 w-fit">
        Add Topic
      </button>
    </form>
  );
}

export default Page;
