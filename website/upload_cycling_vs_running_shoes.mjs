import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fetch from "node-fetch";

const s3 = new S3Client({
  region: "auto",
  endpoint: "https://06f623eadccff1636e986e9b341e7320.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: "546885f42805af1d36d1ce940fce7b8a",
    secretAccessKey: "e8dec01dca0f397890a91e58787b1056c686d2ad21cc9d4ec0a6f616863a9bb8",
  },
});

async function upload() {
  const imageUrl = "https://sc04.alicdn.com/kf/Ha7c7fbd23e9449c5b1b8e5d6567ad6e95.jpg";
  const response = await fetch(imageUrl);
  const buffer = await response.buffer();

  await s3.send(new PutObjectCommand({
    Bucket: "peakmotion-assets",
    Key: "blog-cycling-vs-running-shoes.jpg",
    Body: buffer,
    ContentType: "image/jpeg",
  }));

  console.log("Upload successful: blog-cycling-vs-running-shoes.jpg");
}

upload().catch(console.error);
