export default async function MovieDetail(
  { params, }:
    Readonly<{
      params: { id: string },
    }>) {
  const resolvedParams = await Promise.resolve(params);
  const { id } = resolvedParams;
  return <h1>Movie {id}</h1>
}