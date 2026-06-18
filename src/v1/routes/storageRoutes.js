const express = require('express');
const router = express.Router();
const upload = require('../../modules/storage/middlewares/uploadMiddleware');
const { upload: uploadController } = require('../../modules/storage/controllers/storageController');

router.post(
    '/upload',
    upload.single('image'),
    uploadController
);

module.exports = router;
