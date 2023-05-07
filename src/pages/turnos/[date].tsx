import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loading } from "@nextui-org/react";
import { buscarTurnos } from "@/src/services/turnos";
import { Modal } from "@/src/Components/Modal/Modaal";

import type { Turno } from "@/src/models/turnos";
import { ClickeableCard } from "@/src/Components/ClickeableCard/ClickeableCard";
import { Switcher, Time } from "@/src/Components/Switcher/Switcher";

export default function Turno() {
  const router = useRouter();

  const fecha = router.query.date;
  const [turnos, setTurnos] = useState<Turno[]>();
  const [filteredTurnos, setFilteredTurnos] = useState<Turno[]>();
  const [selected, setSelected] = useState<Time>("MAÑANA");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const filtered = turnos?.filter((turno) => turno.timeType === selected);
    setFilteredTurnos(filtered);
  }, [selected]);

  const handleModalConfirm = () => {
    console.log("Confirm clicked");
    setModalOpen(false);
  };

  const handleModalCancel = () => {
    console.log("Cancel clicked");
    setModalOpen(false);
  };

  const handleClick = (turno: Turno) => {
    console.log("Hiciste click en el turno: ", turno);
    setModalOpen(true);
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
        (turno) => turno.timeType === selected
      );
      setFilteredTurnos(filtered);
    });
  }, [router.query]);

  return (
    <>
      {!turnos && <Loading />}

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
