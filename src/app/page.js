'use client'
import Image from "next/image";
import estilos from "./page.module.css";
import Barbearia from '../../public/barbearia.png'
import Banner from '../../public/banner.jpg';
import { useState } from "react";
import { BsSun } from "react-icons/bs";

import { RxMoon } from "react-icons/rx";


export default function Home() {
  const [alterarTema, setAlterarTema] = useState(false)

  function MudarTema(){
    setAlterarTema(!alterarTema)
  }


  return (
    <div className={alterarTema ? estilos.dark_mode : estilos.light_mode}>
    
      <header className={estilos.header}>

        <Image width={100} src={Barbearia}/>
       
        <button className={estilos.button} onClick={MudarTema}>{alterarTema ?  (
            <>
              <BsSun color="gold" />
              <span>Light</span>
            </>
          ) : (
            <>
              <RxMoon color="blue" />
              <span>Dark</span>
            </>
          )}</button>
      </header>

      <main className={estilos.container_main}>
      <Image className={estilos.Imagem_home}  src={Banner}/>
      <section className={estilos.section}>
      
      <h1>Bem-vindo a Barber shop</h1>
      <h4>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</h4>
      <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>

      <p className={estilos.kelly}> S. Kelly</p>

      </section>
    </main>
    </div>
  );
}
