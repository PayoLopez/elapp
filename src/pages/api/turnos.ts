// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Turno } from "@/src/models/turnos";
import { TURNOS_DISPONIBLES } from "@/src/services/_mocks_/turnosMock";
import type { NextApiRequest, NextApiResponse } from "next";


interface Data {
  id: number;
  completed:boolean;
  title:string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Turno[]>
) {
  res.status(200).json(
   TURNOS_DISPONIBLES
  );
}
