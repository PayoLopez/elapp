import { Turno } from "@/src/models/turnos";
import { TURNOS_DISPONIBLES } from "@/src/services/_mocks_/turnosMock";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "PATCH" && req.query.id) {
    const id = parseInt(req.query.id as string);
    console.log("Se ha recibido una solicitud para MODIFICAR el turno: ", id);
    console.log("Modificando el turno pedido...");

    const turnoEncontrado = TURNOS_DISPONIBLES.find((turno) => turno.id === id);
    if (turnoEncontrado) {
      turnoEncontrado.completed = true;
      res.status(200).json(turnoEncontrado);
    } else {
      res.status(400).json({ detail: "No encontré el turno solicitado" });
    }
  }
}
