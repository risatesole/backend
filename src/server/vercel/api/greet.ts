import type { VercelRequest, VercelResponse } from "@vercel/node";
import greet from "../../../services/greet/greet.js";

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name } = req.body as { name?: string };

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  const greetMessage = greet(name);
  res.status(200).json({ message: greetMessage });
}
