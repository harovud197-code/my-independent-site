import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fetch from "node-fetch";

const s3 = new S3Client({
  region: "auto",
  endpoint: "https://e03187bac82d42569911bb6f89c1d844.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: "81e582be6c016e344155106822c60815",
    secretAccessKey: "99e1903c72b2260656a83a0050882772f77c8e9b04291888b1f4864147076628",
  },
});

async function upload() {
  const imageUrl = "https://sc04.alicdn.com/kf/H5b608be5040d418aa192ada3131231ce0.jpg";
  const response = await fetch(imageUrl);
  const buffer = await response.buffer();

  await s3.send(new PutObjectCommand({
    Bucket: "peakmotion-assets",
    Key: "blog-cycling-vs-running-card.jpg",
    Body: buffer,
    ContentType: "image/jpeg",
  }));

  console.log("Upload successful: blog-cycling-vs-running-card.jpg");
}

upload().catch(console.error);
