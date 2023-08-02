"use client";

import { UserButton } from "@clerk/nextjs";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

import axios from "axios";
import { toast } from "react-hot-toast";
import { useCallback, useState } from "react";

type FormData = {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  github: string;
};

declare global {
  var cloudinary: any;
}

const Admin = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      description: "",
      imageUrl: "",
      url: "",
      github: "",
    },
  });

  const onSubmit = handleSubmit(async (data: any) => {
    try {
      await axios.post("/api/projects", data);
      toast.success("Project added");
    } catch (error) {
      console.log(error);
    }
  });

  const handleUpload = (result: any) => {
    setValue("imageUrl", result.info.secure_url);
  };

  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      <div className="w-full flex justify-center items-center">
        <form
          onSubmit={onSubmit}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6"
        >
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Title
            </label>
            <input
              {...register("title")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Description
            </label>
            <input
              {...register("description")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Url
            </label>
            <input
              {...register("url")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Github
            </label>
            <input
              {...register("github")}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <CldUploadWidget
            onUpload={handleUpload}
            uploadPreset="nxkebcqb"
            options={{
              maxFiles: 1,
            }}
          >
            {({ open }) => {
              return (
                <button
                  onClick={() => open()}
                  className="block bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-4 mb-2"
                >
                  Upload Image
                </button>
              );
            }}
          </CldUploadWidget>

          <input
            onClick={onSubmit}
            type="submit"
            className="block bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-4 mb-2"
          />
        </form>
      </div>
    </div>
  );
};

export default Admin;
