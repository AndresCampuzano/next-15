export default async function Home() {
  console.log('Server component');
  const response = await fetch('https://jsonplaceholder.typicode.com/albums');

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();

  return (
    <div>
      <ul>
        {data.map((album: { id: number; title: string }) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>
    </div>
  );
}
