import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/client";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.query["slug"];

  if (!slug || typeof slug != "string") {
    res.status(404).json({ message: "slug not found" });
    return;
  }

  const data = await prisma.shortLink.findFirst({
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  if (!data) {
    res.status(404).json({ message: "slug does not exist" });
    return;
  }

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=1000000000, stale-while-revalidate");

  return res.json(data);
}
