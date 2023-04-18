import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Date } from '../Components/Date/Date';
import { Title } from '../Components/Title/Title';
import { Button } from '@nextui-org/react';
import { useState } from 'react';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  const [selectedDate,setSelectedDate]= useState();
  
  const handleChange = (evento:any) =>{
    let data = evento.target.value
    setSelectedDate(data);
    
  }

  const handleClick =()=>{
  
    console.log(selectedDate)
  
  }
  
 

  return (
    <div >
   
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
       
      <Date type={'date'} handleChange={handleChange} />
      <Title title={"Seleccione una Fecha"}/>
      
      
        <Link href={`/turnos/${selectedDate}`} className='link'>
          <Button color="success" auto className={styles.button} onClick={handleClick} disabled={!selectedDate} >
              Continuar 
          </Button>
        </Link>
      
      
      </main>
    
    </div>
  )
}
