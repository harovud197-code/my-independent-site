import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({
  region: "auto",
  endpoint: "https://06f623eadccff1636e986e9b341e7320.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: "546885f42805af1d36d1ce940fce7b8a",
    secretAccessKey: "e8dec01dca0f397890a91e58787b1056c686d2ad21cc9d4ec0a6f616863a9bb8",
  },
});

const Bucket = "peakmotion-assets";

const img = {
  url: "https://sc02.alicdn.com/kf/H21a962320f834816ac0348bf18041e62E.jpg",
  key: "manufacturing-knitting-machines.jpg",
  contentType: "image/jpeg"
};

async function uploadImage({ url, key, contentType }) {
  console.log(`Fetching ${url}...`);
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`);
  }
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  console.log(`Uploading to R2 as ${key} (size: ${buffer.length} bytes)...`);
  const uploadCommand = new PutObjectCommand({
    Bucket,
    Key: key,
    Body: buffer,
    ContentType: contentType,
  });

  await client.send(uploadCommand);
  console.log(`Successfully uploaded ${key}!`);
}

async function main() {
  try {
    await uploadImage(img);
    console.log("Upload complete!");
  } catch (err) {
    console.error(`Error uploading ${img.key}:`, err);
    process.exit(1);
  }
}

main();
