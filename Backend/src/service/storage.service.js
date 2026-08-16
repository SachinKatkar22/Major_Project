// routes/galleryRoutes.js
import express from 'express';
import ImageKit from 'imagekit';
import Gallery from '../models/galleryModel.js';

const router = express.Router();

// Initialize ImageKit (configure with your credentials)
const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

// Get all images
router.get('/', async (req, res) => {
  try {
    const images = await Gallery.find().sort({ createdAt: -1 });
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Upload image endpoint
router.post('/upload', async (req, res) => {
  try {
    const { file, fileName, year } = req.body; // Expecting base64 file string from frontend
    
    const uploadResponse = await imagekit.upload({
      file: file,
      fileName: fileName,
      folder: "/emn-gallery"
    });

    const newImage = new Gallery({
      year,
      imageUrl: uploadResponse.url,
      fileId: uploadResponse.fileId
    });

    await newImage.save();
    res.status(201).json({ message: "Image uploaded successfully", data: newImage });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete image endpoint with password check
router.delete('/:id', async (req, res) => {
  try {
    const { password } = req.body;
    if (password !== "832969") {
      return res.status(401).json({ error: "Incorrect password!" });
    }

    const imageDoc = await Gallery.findById(req.params.id);
    if (!imageDoc) return res.status(404).json({ error: "Image not found" });

    // Delete from ImageKit storage
    await imagekit.deleteFile(imageDoc.fileId);

    // Delete from MongoDB collection
    await Gallery.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;