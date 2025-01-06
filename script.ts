import { writeFileSync } from "node:fs";
import { join } from "node:path";

const BASE_URL = "https://www.kaggle.com";
const API_VERSION_PATH = "api/v1";
const DATASETS_DOWNLOAD_PATH = "datasets/download";
const DATASET_IDENTIFIER = "saurabhshahane/fake-news-classification";

const endpoint = new URL(
	join(API_VERSION_PATH, DATASETS_DOWNLOAD_PATH, DATASET_IDENTIFIER),
	BASE_URL,
).href;

const response = await fetch(endpoint, {
	headers: { "Content-Type": "application/json" },
});

const buffer = await response.arrayBuffer();
const data = new Uint8Array(buffer);

writeFileSync("node_modules/.local/archive.zip", data);
console.log("ZIP file saved!");
