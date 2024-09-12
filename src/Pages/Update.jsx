import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import ReactQuill from "react-quill"; // WYSIWYG Editor
import "react-quill/dist/quill.snow.css"; // Styles for ReactQuill
import Nav from "../Components/Nav";
import { BallTriangle } from "react-loader-spinner";

const Update = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [content, setContent] = useState(""); // For WYSIWYG editor content
  const [title, setTitle] = useState(""); // Blog title
  const [tags, setTags] = useState([]); // Blog tags
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    id && getBlogDetail();
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, "blogs", id);
    const blogDetail = await getDoc(docRef);
    if (blogDetail.exists()) {
      const blogData = blogDetail.data();
      setBlog(blogData);
      setTitle(blogData.title);
      setContent(blogData.body);
      setTags(blogData.tags || []);
      setLoading(false);
    } else {
      console.log("Blog not found");
    }
  };

  const handleUpdate = async () => {
    try {
      const docRef = doc(db, "blogs", id);
      await updateDoc(docRef, {
        title,
        body: content,
        tags,
      });
      navigate(`/show/${id}`); // Navigate back to the blog post after updating
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  const handleContentChange = (value) => {
    setContent(value); // Update content from WYSIWYG editor
  };

  const handleTagsChange = (e) => {
    setTags(e.target.value.split(",").map((tag) => tag.trim()));
  };

  return (
    <div>
      {loading ? (
        <div className="grid h-screen place-items-center">
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="rgb(37 99 235)"
            ariaLabel="ball-triangle-loading"
            visible={true}
          />
        </div>
      ) : (
        <>
          <Nav />
          <div className="container mx-auto max-w-2xl pt-20">
            <h1 className="text-3xl font-bold text-center">Update Blog</h1>

            <div className="mt-8 space-y-4">
              <div>
                <label htmlFor="title" className="block font-medium">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 p-2"
                  required
                />
              </div>

              <div>
                <label htmlFor="tags" className="block font-medium">
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  id="tags"
                  value={tags.join(", ")}
                  onChange={handleTagsChange}
                  className="w-full rounded-lg border border-gray-300 p-2"
                />
              </div>

              <div>
                <label htmlFor="content" className="block font-medium">
                  Content
                </label>
                <ReactQuill
                  value={content}
                  onChange={handleContentChange}
                  className="w-full h-80 rounded-lg border-gray-300 mb-20"
                />
              </div>

              <button
                onClick={handleUpdate}
                className="mt-10 mb-10 w-full rounded-lg bg-blue-600 px-4 py-2 text-white font-semibold"
              >
                Update Blog
              </button>
            </div>
            <br />
          </div>
        </>
      )}
    </div>
  );
};

export default Update;
