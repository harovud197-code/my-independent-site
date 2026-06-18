import { S3Client, HeadObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client({
  region: "auto",
  endpoint: "https://06f623eadccff1636e986e9b341e7320.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: "546885f42805af1d36d1ce940fce7b8a",
    secretAccessKey: "e8dec01dca0f397890a91e58787b1056c686d2ad21cc9d4ec0a6f616863a9bb8",
  },
});

const Bucket = "peakmotion-assets";
const Key = "manufacturing-hero-runners.jpg";

async function verify() {
  try {
    const command = new HeadObjectCommand({ Bucket, Key });
    const response = await client.send(command);
    console.log(`Successfully verified ${Key} in R2!`);
    console.log(`ContentLength: ${response.ContentLength}`);
    console.log(`ContentType: ${response.ContentType}`);
  } catch (err) {
    console.error(`Error verifying ${Key}:`, err);
    process.exit(1);
  }
}

verify();
