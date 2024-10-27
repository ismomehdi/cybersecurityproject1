"use client";
import { useState } from "react";
import { getPicture } from "./actions";

export default function PictureForm() {
  const [imageSrc, setImageSrc] = useState(null);

  const handleSubmit = async () => {
    if (imageSrc) {
      setImageSrc(null);
      return;
    }

    try {
      const pic = await getPicture(
        "https://d.newsweek.com/en/full/1673553/rudy-giuliani.webp?w=1120&f=b91bcb8b92bd42ff90e8a9dafcb477d3"
      );
      setImageSrc(URL.createObjectURL(pic));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      action={handleSubmit}
      className="flex flex-col items-center py-16 w-full gap-16"
    >
      <button className="bg-blue-400 hover:bg-blue-300 text-white font-thin py-2 px-4 rounded w-full max-w-xs">
        click here to display a picture :D
      </button>
      {imageSrc && <img src={imageSrc} className="rounded-3xl size-96" />}
    </form>
  );
}
