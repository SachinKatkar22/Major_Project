import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedYear, setSelectedYear] = useState('All');
  const [yearInput, setYearInput] = useState('');
  const [fileInput, setFileInput] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Fetch images on mount
  const fetchImages = async () => {
    try {
      const res = await axios.get("https://major-project-dgt0.onrender.com/gallery");
      setImages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // Convert image to base64 for upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFileInput(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!fileInput || !yearInput) return alert("Please select a file and enter a year.");
    
    setUploading(true);
    try {
      await axios.post("https://major-project-dgt0.onrender.com/gallery/upload", {
        file: fileInput,
        fileName: `gallery_${Date.now()}.jpg`,
        year: yearInput
      });
      alert("Uploaded successfully!");
      setFileInput(null);
      setYearInput('');
      fetchImages();
    } catch (err) {
      alert("Upload failed.");
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id) => {
    const password = prompt("Enter admin password to delete image:");
    if (!password) return;

    try {
      await axios.delete(`https://major-project-dgt0.onrender.com/gallery/${id}`, {
        data: { password }
      });
      alert("Deleted successfully!");
      fetchImages();
    } catch (err) {
      alert(err.response?.data?.error || "Deletion failed.");
    }
  };

  // Extract unique years for filtering tabs
  const years = ['All', ...new Set(images.map(img => img.year))];
  const filteredImages = selectedYear === 'All' ? images : images.filter(img => img.year === selectedYear);

  return (
    <div className="max-w-7xl mx-auto px-6 py-24 font-sans">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Community Gallery & Memories</h2>

      {/* Upload Form Box */}
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 mb-12 max-w-xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">Upload New Memory</h3>
        <form onSubmit={handleUpload} className="space-y-4">
          <input 
            type="text" 
            placeholder="Enter Year (e.g., 2025)" 
            value={yearInput} 
            onChange={(e) => setYearInput(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg"
            required 
          />
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            required 
          />
          <button 
            type="submit" 
            disabled={uploading}
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {uploading ? "Uploading to ImageKit..." : "Upload Image"}
          </button>
        </form>
      </div>

      {/* Year Filter Tabs */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {years.map(yr => (
          <button
            key={yr}
            onClick={() => setSelectedYear(yr)}
            className={`px-5 py-2 rounded-full font-medium transition ${selectedYear === yr ? 'bg-blue-600 text-white shadow' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {yr}
          </button>
        ))}
      </div>

      {/* Image Grid Display */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map(img => (
          <div key={img._id} className="bg-white rounded-xl shadow overflow-hidden border border-gray-100 relative group">
            <img src={img.imageUrl} alt="Memory" className="w-full h-60 object-cover" />
            <div className="p-4 flex justify-between items-center bg-white">
              <span className="text-sm font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">{img.year}</span>
              <button 
                onClick={() => handleDelete(img._id)}
                className="text-red-500 hover:text-red-700 text-sm font-semibold px-3 py-1 border border-red-200 rounded-lg hover:bg-red-50 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;