import books from '@/app/api/db';

export async function PUT(
  request: Request,
  context: {
    params: {
      id: string;
    };
  }
) {
  const book = await request.json();
  const id = parseInt(context.params.id);

  const index = books.findIndex((book) => book.id === id);
  books[index] = book;

  return Response.json(book);
}

export async function DELETE(
  _request: Request,
  context: {
    params: {
      id: string;
    };
  }
) {
  const id = parseInt(context.params.id);
  const index = books.findIndex((book) => book.id === id);
  books.splice(index, 1);

  return Response.json({ id });
}
