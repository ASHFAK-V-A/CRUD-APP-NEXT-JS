"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";
function RemoveBtn({ id }) {
  const router = useRouter();

  const deleteHandler = async () => {
    const confirmed = confirm("Are you sure want to delete ?");
    if (confirmed) {
      const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };
  return (
    <button className="text-red-400" onClick={deleteHandler}>
      <HiOutlineTrash size={24} />
    </button>
  );
}

export default RemoveBtn;
