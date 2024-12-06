"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageForm = () => {
  const [isReferencePage, setIsReferencePage] = useState(false);
  const [formData, setFormData] = useState({
    pageName: "",
    pageId: "",
    shortLivedToken: "",
    appId: "",
    appSecret: "",
    referencePage: "",
  });

  const referencePages = [
    "Reference Page 1",
    "Reference Page 2",
    "Reference Page 3",
    "Reference Page 4",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <div className={`min-h-screen p-6 `}>
      <div className="container mx-auto md:max-w-lg ">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Add New Page</h1>
        </div>

        {/* Form */}
        <motion.form
          className="bg-white dark:bg-gray-800 shadow-md rounded p-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          {/* Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="isReferencePage"
              checked={isReferencePage}
              onChange={() => setIsReferencePage(!isReferencePage)}
              className="mr-2"
            />
            <label htmlFor="isReferencePage" className="text-sm">
              Add Page via Reference Page
            </label>
          </div>

          {/* Common Fields */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Page Name</label>
            <input
              type="text"
              name="pageName"
              value={formData.pageName}
              onChange={handleInputChange}
              className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
              placeholder="Enter Page Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Page ID</label>
            <input
              type="text"
              name="pageId"
              value={formData.pageId}
              onChange={handleInputChange}
              className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
              placeholder="Enter Page ID"
            />
          </div>

          {/* Conditional Fields */}
          <AnimatePresence>
            {isReferencePage ? (
              <motion.div
                key="referenceFields"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Reference Page Select */}
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">
                    Reference Page
                  </label>
                  <select
                    name="referencePage"
                    value={formData.referencePage}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
                  >
                    <option value="" disabled>
                      Select a Reference Page
                    </option>
                    {referencePages.map((page, index) => (
                      <option key={index} value={page}>
                        {page}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>
            ) : (
              <>
                {/* Full Form Fields */}
                <motion.div
                  key="fullFields"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {/* Short Lived Token */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      Short Lived User Token
                    </label>
                    <input
                      type="text"
                      name="shortLivedToken"
                      value={formData.shortLivedToken}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
                      placeholder="Enter Short Lived Token"
                    />
                  </div>

                  {/* App ID */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      App ID
                    </label>
                    <input
                      type="text"
                      name="appId"
                      value={formData.appId}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
                      placeholder="Enter App ID"
                    />
                  </div>

                  {/* App Secret */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">
                      App Secret
                    </label>
                    <input
                      type="text"
                      name="appSecret"
                      value={formData.appSecret}
                      onChange={handleInputChange}
                      className="w-full p-3 rounded border dark:border-gray-700 bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
                      placeholder="Enter App Secret"
                    />
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>

          {/* Submit Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 rounded bg-green-600 text-white font-bold"
          >
            Add Page
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default PageForm;
