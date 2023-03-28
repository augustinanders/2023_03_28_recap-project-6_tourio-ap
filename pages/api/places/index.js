import dbConnect from "../../../db/connect";
import Card from "../../../db/models/Card";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const cards = await Card.find();
    return response.status(200).json(cards);
  } else if (request.method === "POST") {
    try {
      const cardData = request.body;
      const card = new Card(cardData);

      await card.save();
      response.status(201).json({ status: "Card created" });
    } catch (error) {
      console.log(error);
      response.status(400).json({ error: error.message });
    }
  }
  return response.status(405).json({ message: "Method not allowed" });
}
