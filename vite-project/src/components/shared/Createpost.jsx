import { useState } from "react";
import { client } from "../lib/index";

const Createpost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [image, setImage] = useState(null);

  // const handleFileChange = (e) => {
  //   if (e.target.files && e.target.files[0]) {
  //     setImage(URL.createObjectURL(e.target.files[0]));
  //   }
  // };
  const fetchPosts = async () => {
    try {
      const access_token = localStorage.getItem("access")
      const response = await client.post(`/api/article`,
        {
          title: title,
          content: content,
        },
        {
          headers: {Authorization:`Bearer ${access_token}`}
        },
        
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="max-w-md fixed mx-auto p-8 bg-white  rounded-xl  shadow-sm">
      <h1 className="text-2xl font-semibold mb-4 text-center">Create New Post</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full rounded-md px-2 text-center mt-6 py-1 mb-4 outline-none"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        className="w-full text-center rounded-md px-2 py-1 mb-4 outline-none"
      />
      <label className="flex justify-center items-center border border-blue-500 rounded-md py-2 mb-4 cursor-pointer hover:bg-gray-50">
        <span className="text-blue-500">Select from computer</span>
        <input
          type="file"
          accept="image/*,video/*"
          // onChange={handleFileChange}
          className="hidden"
        />
      </label>

      <button
        onClick={fetchPosts}
        className="w-full bg-blue-400 text-white py-2 rounded-md hover:bg-blue-500"
      >
        Post
      </button>
    </section>
  );
};
export default Createpost;
