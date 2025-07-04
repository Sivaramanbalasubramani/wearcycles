const express = require('express');
const multer = require('multer');
const AWS = require('aws-sdk');
const app = express();
const port = 3000;

// Set up AWS Rekognition
const rekognition = new AWS.Rekognition({
  region: 'us-west-1', // Replace with your AWS region
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const upload = multer();

app.post('/check-quality', upload.single('image'), async (req, res) => {
  try {
    const params = {
      Image: {
        Bytes: req.file.buffer,
      },
      Attributes: ['ALL']
    };

    const result = await rekognition.detectLabels(params).promise();

    // Process result and create a quality message
    let qualityMessage = 'Image meets quality standards.';
    const highConfidenceLabels = result.Labels.filter(label => label.Confidence > 80);

    if (highConfidenceLabels.length === 0) {
      qualityMessage = 'Image quality might be low; please check.';
    }

    res.json({ message: qualityMessage });
  } catch (error) {
    res.status(500).json({ message: 'Error analyzing image quality', error });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
