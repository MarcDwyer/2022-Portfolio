import { useState } from "preact/hooks";
import { JSX } from "preact/jsx-runtime";
import { ThreadType } from "../db-actions/thread-actions.ts";

export type CreateThreadType = Omit<ThreadType, "uuid" | "comments"> & {
  password: string;
};

export default function CreateThreadForm(props: any) {
  console.log({ props });
  const [formData, _setFormData] = useState<CreateThreadType>({
    title: "",
    body: "",
    author: "",
    description: "",
    password: "",
  });

  const setFormData = (changes: Partial<FormData>) => {
    _setFormData({
      ...formData,
      ...changes,
    });
  };

  const handleChange = (
    e: JSX.TargetedEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.currentTarget;
    setFormData({ [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const headers = new Headers();
      headers.set("Content-Type", "application/json");
      const threadResp = await fetch("/api/thread/save", {
        method: "POST",
        body: JSON.stringify(formData),
        headers,
      });
      const savedThread = (await threadResp.json()) as ThreadType;
      const redirect = `${window.location.origin}/thread/${savedThread.uuid}`;
      window.location.href = redirect;
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div class="mt-10 mb-auto mr-auto ml-auto w-3/6 p-5">
      <a
        href="/thread"
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Go back
      </a>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        class="bg-gray-700 shadow-md rounded-md px-8 pt-6 pb-8 mb-4 mt-4"
      >
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="title">
            Title
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Body
          </label>
          <textarea
            class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="body"
            type="text"
            name="body"
            placeholder="What would you like to talk about?"
            value={formData.body}
            onChange={handleChange}
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="author">
            Author
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="author"
            type="text"
            placeholder="Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <div class="mb-4">
          <label class="block text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="text"
            placeholder="Whats the super secret password?"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
