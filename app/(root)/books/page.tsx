export default async function Books() {
    const response = await fetch('http://localhost:3000/api/books');

    const books = await response.json();

    return (
        <main>
            <h1 className={'text-3xl'}>Books</h1>
            <ul>
                {books.map((book: { id: number; title: string; author: string }) => (
                    <li key={book.id}>
                        <h2>{book.title}</h2>
                        <p>{book.author}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}