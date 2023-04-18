import { TURNOS_DISPONIBLES } from "./_mocks_/turnosMock";

interface buscarTurnosProps{
    fecha:string | string[];
}

export const buscarTurnos = async ({fecha}:buscarTurnosProps) => {
    console.log(`Buscando turnos para la fecha: ${fecha}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(TURNOS_DISPONIBLES);
      }, 5000);
    });
    
};