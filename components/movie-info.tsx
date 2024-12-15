import { API_URL } from "../app/constants";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({id}:Readonly<{id: string}>) {
  const movie = await getMovie(id);
  console.log("end fetching");
  return <h6>{JSON.stringify(movie)}</h6>
}