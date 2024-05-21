import React, { useState } from "react";

const Help = () => {
  const [issueType, setIssueType] = useState("");
  const [productIssue, setProductIssue] = useState("");
  const [description, setDescription] = useState("");
  const [productURL, setProductURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      issueType,
      productIssue,
      description,
      productURL,
    };

    // Send form data to your email address
    fetch("https://formspree.io/f/mqbjgvzo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log("Form submitted successfully");
        // Reset form fields
        setIssueType("");
        setProductIssue("");
        setDescription("");
        setProductURL("");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-100">
      <div className="flex items-center mb-8">
        <div className="p-3 bg-blue-500 rounded-full text-white mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.794-1.906 3.25-4.25 3.25-1.497 0-2.812-.746-3.543-1.886M6.75 12a.75.75 0 000-1.5m3.75 1.5a.75.75 0 000-1.5m3.75 1.5a.75.75 0 000-1.5"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Report an Issue</h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md max-w-md w-full"
      >
        <div className="mb-4">
          <label
            htmlFor="issueType"
            className="block text-gray-700 font-bold mb-2"
          >
            Issue Type
          </label>
          <select
            id="issueType"
            value={issueType}
            onChange={(e) => setIssueType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select an issue type</option>
            <option value="productReport">Product Report</option>
            <option value="technicalIssue">Technical Issue</option>
            <option value="refundProblem">Refund Problem</option>
          </select>
        </div>
        {issueType === "productReport" && (
          <>
            <div className="mb-4">
              <label
                htmlFor="productURL"
                className="block text-gray-700 font-bold mb-2"
              >
                Product URL
              </label>
              <input
                type="text"
                id="productURL"
                value={productURL}
                onChange={(e) => setProductURL(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="productIssue"
                className="block text-gray-700 font-bold mb-2"
              >
                Product Issue
              </label>
              <select
                id="productIssue"
                value={productIssue}
                onChange={(e) => setProductIssue(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a product issue</option>
                <option value="scam">Scam</option>
                <option value="fraud">Fraud</option>
                <option value="didntDeliver">Didn't Deliver</option>
                <option value="other">Other</option>
              </select>
            </div>
          </>
        )}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Help;
