export default async function User({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <>
      <h3 className="text-3xl">Info for user {id}</h3>
    </>
  );
}
