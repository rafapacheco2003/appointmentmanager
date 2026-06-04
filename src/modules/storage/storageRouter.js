const express = require('express');
const router = express.Router();
const upload = require('../../middlewares/uploadMiddleware');
const { upload: uploadController } = require('./storageController');

router.post(
    '/upload',
    upload.single('image'),
    uploadController
);

module.exports = router;