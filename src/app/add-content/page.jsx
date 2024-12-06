"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const AddContent = () => {
  const [page, setPage] = useState("");
  const [videoType, setVideoType] = useState("");
  const [description, setDescription] = useState("");

  const pages = Array.from({ length: 20 }, (_, i) => `Page ${i + 1}`);
  const videoTypes = ["Reel", "Video", "Story", "Photo"];

  const handleUpload = () => {
    alert(`Uploading: ${page}, ${videoType}, ${description}`);
  };

  return (
    <div className="min-h-screen ">
      <div className="container mx-auto md:max-w-lg  p-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Upload Form</h1>
       
        </div>

        <motion.form
          className="bg-white dark:bg-gray-800 shadow-md rounded p-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Select Page */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Select Page
            </label>
            <select
              value={page}
              onChange={(e) => setPage(e.target.value)}
              className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
            >
              <option value="">Select a Page</option>
              {pages.map((pageName, index) => (
                <option key={index} value={pageName}>
                  {pageName}
                </option>
              ))}
            </select>
          </div>

          {/* Select Video Type */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Video Type</label>
            <select
              value={videoType}
              onChange={(e) => setVideoType(e.target.value)}
              className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
            >
              <option value="">Select Video Type</option>
              {videoTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
              placeholder="Enter a description..."
            ></textarea>
          </div>

          {/* Upload Button */}
          <div>
            <motion.button
              onClick={handleUpload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded bg-green-600 text-white font-bold"
              type="button"
            >
              Upload
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default AddContent;
