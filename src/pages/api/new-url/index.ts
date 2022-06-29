import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { url, slug } = req.body;
  console.log(req.body);

  if (!url || typeof url !== "string") {
    res.status(404).json({ message: "provide a url pls" });
    return;
  }

  try {
    const url1 = new URL(url);
    const validURL = url1.protocol === "http:" || url1.protocol === "https:";
    if (!validURL) {
      throw new Error();
    }
  } catch (error) {
    return res.status(400).json({ message: "Invalid Link" });
  }

  if (!slug || typeof slug !== "string") {
    res.status(404).json({ message: "provide a path to your link pls" });
    return;
  }

  const data = await prisma.shortLink.findFirst({
    where: {
      slug: {
        equals: slug,
      },
    },
  });
  console.log("data?? ", data);

  if (data) {
    res.status(400).json({ message: "short link already exists" });
    return;
  }

  prisma.shortLink
    .create({
      data: {
        url: url,
        slug: slug,
      },
    })
    .then(() => {
      res.status(200).json({ message: "short link generated" });
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};
