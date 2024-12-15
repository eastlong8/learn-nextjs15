export default async function MovieDetail(
  { params, }:
    Readonly<{
      params: { id: string },
    }>) {
  const { id } = await params;
  return <h1>Movie {id}</h1>
}