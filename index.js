// index.js
const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();
const upload = multer();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Route de téléchargement de fichiers
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
    const file = req.file;

    if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const response = {
        name: file.originalname,
        type: file.mimetype,
        size: file.size,
    };

    res.json(response);
});

// Lancer le serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Your app is listening on port ${PORT}`);
});
