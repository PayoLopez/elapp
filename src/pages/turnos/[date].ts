import { useRouter } from "next/router"
import { useEffect } from 'react';
import { buscarTurnos } from "@/src/services/turnos";

export default function Turno (){

    const router = useRouter();
    
    const fecha =router.query.date;
    
    
    useEffect(() => {
        if(!fecha){return};
        
        buscarTurnos({fecha}).then((turnos)=> {console.log(turnos)});
    },[]);
   


    return(`hola soy la page dinamica: ${router.query.date}`);

};