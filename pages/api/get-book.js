import Prisma from "@prisma/client";
const prisma = new Prisma.PrismaClient();

async function handler(req, res) {
  const bookId = req.body.id;
  const book = await prisma.books.findUnique({
    where: { id: parseInt(bookId, 10) },
  });

  if (!book) {
    return res.json({ error: "Error with the database occurred." });
  }

  res.status(200).json(book);
}

export default handler;
