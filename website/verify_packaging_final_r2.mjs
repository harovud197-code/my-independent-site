import { S3Client, HeadObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
  region: "auto",
  endpoint: "https://06f623eadccff1636e986e9b341e7320.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: "546885f42805af1d36d1ce940fce7b8a",
    secretAccessKey: "e8dec01dca0f397890a91e58787b1056c686d2ad21cc9d4ec0a6f616863a9bb8",
  },
});

async function verify() {
  try {
    await s3.send(new HeadObjectCommand({
      Bucket: "peakmotion-assets",
      Key: "blog-private-label-packaging-final.jpg",
    }));
    console.log("VERIFIED: blog-private-label-packaging-final.jpg exists in R2.");
  } catch (error) {
    console.error("FAILED: Could not verify image in R2.");
    process.exit(1);
  }
}

verify();
