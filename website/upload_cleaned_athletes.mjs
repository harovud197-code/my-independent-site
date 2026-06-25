import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const client = new S3Client({
  region: "auto",
  endpoint: "https://06f623eadccff1636e986e9b341e7320.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: "546885f42805af1d36d1ce940fce7b8a",
    secretAccessKey: "e8dec01dca0f397890a91e58787b1056c686d2ad21cc9d4ec0a6f616863a9bb8",
  },
});

const Bucket = "peakmotion-assets";
const localFilePath = path.join(__dirname, "../cleaned-athletes.jpg");
const key = "blog-start-brand-athletes.jpg";

async function uploadLocalImage() {
  console.log(`Reading local file: ${localFilePath}...`);
  if (!fs.existsSync(localFilePath)) {
    throw new Error(`Local file not found at: ${localFilePath}`);
  }
  const buffer = fs.readFileSync(localFilePath);

  console.log(`Uploading to R2 as ${key} (size: ${buffer.length} bytes)...`);
  const uploadCommand = new PutObjectCommand({
    Bucket,
    Key: key,
    Body: buffer,
    ContentType: "image/jpeg",
  });

  await client.send(uploadCommand);
  console.log(`Successfully uploaded ${key} to R2!`);
}

uploadLocalImage().catch((err) => {
  console.error("Upload failed:", err);
  process.exit(1);
});
