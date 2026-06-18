import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

const client = new S3Client({
  region: "auto",
  endpoint: "https://06f623eadccff1636e986e9b341e7320.r2.cloudflarestorage.com",
  credentials: {
    accessKeyId: "546885f42805af1d36d1ce940fce7b8a",
    secretAccessKey: "e8dec01dca0f397890a91e58787b1056c686d2ad21cc9d4ec0a6f616863a9bb8",
  },
});

async function main() {
  try {
    const command = new ListObjectsV2Command({
      Bucket: "peakmotion-assets",
    });
    const response = await client.send(command);
    console.log("SUCCESS");
    console.log(JSON.stringify(response.Contents || [], null, 2));
  } catch (error) {
    console.error("ERROR:");
    console.error(error);
  }
}

main();
