import { API_URL } from "../app/constants";

async function getVideos(id: string) {
  console.log(`Fetching videos: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  throw new Error("something borke....");
  // const response = await fetch(`${API_URL}/${id}/videos`);
  // return response.json();
}

export default async function MovieVideos({id}:Readonly<{id: string}>) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>
}