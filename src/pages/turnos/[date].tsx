import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loading } from "@nextui-org/react";
import { buscarTurnos, confirmTurno } from "@/src/services/turnos";
import { Modal } from "@/src/Components/Modal/Modaal";

import type { Turno } from "@/src/models/turnos";
import { ClickeableCard } from "@/src/Components/ClickeableCard/ClickeableCard";
import { Switcher, Time } from "@/src/Components/Switcher/Switcher";
import { Title } from "@/src/Components/Title/Title";

export default function Turno() {
  const router = useRouter();
  const fecha = router.query.date;

  const [turnos, setTurnos] = useState<Turno[]>();
  const [filteredTurnos, setFilteredTurnos] = useState<Turno[]>();
  const [selected, setSelected] = useState<Time>("MAÑANA");
  const [modalOpen, setModalOpen] = useState(false);
  const [mostrarFecha, setMostrarFecha] = useState<string>("");
  const [turnoSeleccionado, setTurnoSeleccionado] = useState<Turno>();

  useEffect(() => {
    if (fecha) {
      console.log(fecha);
      setMostrarFecha(fecha as string);
    }
  }, [fecha]);

  useEffect(() => {
    const filtered = turnos?.filter((turno) => turno.timeType === selected);
    setFilteredTurnos(filtered);
  }, [selected]);

  const handleModalConfirm = () => {
    
    console.log("Confirm clicked with turno:", turnoSeleccionado);
    confirmTurno(turnoSeleccionado as Turno).then((turnoConfirmed) => {
      if (!filteredTurnos) {
        return;
      }
      const filteredTurnosCopy = [...filteredTurnos];
      let indexTurno = filteredTurnosCopy?.findIndex(
        (turno) => turno.id === turnoConfirmed.id
      );
      if (!indexTurno) {
        return;
      }
      filteredTurnosCopy[indexTurno] = turnoConfirmed;
      setFilteredTurnos(filteredTurnosCopy);
    });
    setModalOpen(false);
    setTurnoSeleccionado(undefined);
  };

  const handleModalCancel = () => {
    console.log("Cancel clicked");
    setModalOpen(false);
  };

  const handleClick = (turno: Turno) => {
    console.log("Hiciste click en el turno: ", turno);
    setModalOpen(true);
    console.log("Seteando turno seleccionado: ", turno);
    setTurnoSeleccionado(turno);
  };

  useEffect(() => {
    if (!fecha) {
      console.log("todavia no leo la fecha");
      return;
    }
    console.log("ya encontre la fecha: ", fecha);
    buscarTurnos({ fecha }).then((turnosData) => {
      setTurnos(turnosData);
      const filtered = turnosData.filter(
        (turno: Turno) => turno.timeType === selected
      );
      setFilteredTurnos(filtered);
    });
  }, [router.query]);

  return (
    <>
      {!turnos && <Loading />}
      {mostrarFecha && (
        <Title title={`Turnos disponibles para el ${mostrarFecha}`} />
      )}

      {filteredTurnos && (
        <>
          <Switcher
            handleSwitch={(time) => {
              setSelected(time);
            }}
            selected={selected}
          />
          {filteredTurnos.map((turno) => {
            return (
              <ClickeableCard
                handleClick={() => handleClick(turno)}
                status={turno.completed ? "FULL" : "EMPTY"}
                title={`Turno de la: ${turno.timeType} desde: ${turno.start_time} hasta: ${turno.end_time}`}
                key={turno.id}
              />
            );
          })}
          <Modal
            open={modalOpen}
            handleConfirm={handleModalConfirm}
            handleCancel={handleModalCancel}
            title="Confirmar turno"
            content="Esta dispuesto que explote su computadora luego de tocar el boton Agree?"
          />
        </>
      )}
    </>
  );
}
