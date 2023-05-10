import type { NextApiRequest, NextApiResponse } from "next";
interface Instrumentinterface {
  image: String | Number;
  instrument: String;
  instructor: String;
  time: String;
  pricing: Number;
}

const Instruments: Instrumentinterface[] = [
  {
    image: 67,
    instrument: "Guitar",
    instructor: "mathew Cyrus",
    time: "6 months program",
    pricing: 10000,
  },
  {
    image: "violin",
    instrument: "Violin",
    instructor: "James White",
    time: "6 months program",
    pricing: 10000,
  },
  {
    image: "sax",
    instrument: "Saxophone",
    instructor: "Joe Heathers",
    time: "6 months program",
    pricing: 10000,
  },
  {
    image: "drums",
    instrument: "Drums",
    instructor: "mathew Cyrus",
    time: "6 months program",
    pricing: 10000,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Instrumentinterface[]>
) {
  const { method } = req;
  if (method === "GET") {
    res.status(200).json(Instruments);
  }
}
