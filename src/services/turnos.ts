import { url } from "inspector";
import { Turno } from "../models/turnos";
import { TURNOS_DISPONIBLES } from "./_mocks_/turnosMock";
import axios from "axios";

interface buscarTurnosProps {
  fecha: string | string[];
}

export const buscarTurnos = async ({ fecha }: buscarTurnosProps) => {
  console.log(`Buscando turnos para la fecha: ${fecha}`);

  try {
    const response = await axios.get("/api/turnos");
    const data = response.data;
    console.log(`Ya encontre todos los turnos`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const confirmTurno = async (turno: Turno) => {
  try {
    const response = await axios.patch(`/api/turnos/${turno.id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
