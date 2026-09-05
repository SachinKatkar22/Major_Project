
const Gallery = require("../models/galleryModel");
const ImageKit = require('imagekit');
// ... keep the rest of your gallery functions the same


const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});


async function image(req,res) {
    try {
        const images = await Gallery.find().sort({ createdAt: -1 });
        res.status(200).json(images);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

async function uploadimg(req,res) {
     try {
    const { file, fileName, year } = req.body;
    
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
}

async function deletimg(req,res) {
    try {
    const { password } = req.body;
    if (password !== "832969") {
      return res.status(401).json({ error: "Incorrect password!" });
    }

    const imageDoc = await Gallery.findById(req.params.id);
    if (!imageDoc) return res.status(404).json({ error: "Image not found" });

    await imagekit.deleteFile(imageDoc.fileId);
    await Gallery.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports={image,uploadimg,deletimg}