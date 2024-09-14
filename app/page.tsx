"use client";
import Image from "next/image";
import ToggleButton from "./components/Toggle";
import { ArrowDown, ArrowRight, ArrowUp } from "lucide-react";
import { useState } from "react";



export default function Home() {
  const [optionAdvanced,setOptionAdvanced]=useState(false);
  function ViewOptionsAdvanced(){
    setOptionAdvanced(!optionAdvanced);
    if(optionAdvanced==true){

    }
    
  }
  return (
    <main className={`page  light-theme min-h-screen min-w-full flex flex-col`}>
      <section className=" h-20 flex justify-end items-center pr-5 bg-transparent ">
        
        <ToggleButton></ToggleButton>
        
      </section>
      <section className="flex flex-col items-center justify-center min-h-screen pb-6">
        <div>
          <h1 className="logo">Play Pro <span className="enfase">LP</span></h1>
        </div>
        <div id="box-form">
          <form className=" create-lp">
          <label>
              Logo
            </label>
            <input type="file">
            </input>
            <label>
              Titulo da página
            </label>
            <input  type="text">
            </input>
            <label>
              Subtitulo
            </label>
            <input type="text">
            </input>
            <label>
              Link do iframe do video
            </label>
            <input type="text">
            </input>
            <label>
              Link do botão
            </label>
            <input type="text"></input>
            <button id="expand-form" className="flex items-center justify-center gap-2 " onClick={(e)=>{
              e.preventDefault();
              ViewOptionsAdvanced()}}>Veja mais opções {optionAdvanced==true?<ArrowUp size={15}></ArrowUp>:<ArrowDown size={15}></ArrowDown>}</button>
              
              {optionAdvanced==true?
              
              <div className="flex flex-col gap-4 w-full">
                <p>Estilo da Página</p>
                <label>
              Cor de fundo:
            </label>
            <input placeholder="#HEX" type="text">
            </input>
            <label>
              Cor do Texto:
            </label>
            <input placeholder="#HEX" type="text"></input>
            <p>Estilo do botão</p>
                <label>
              Cor de fundo:
            </label>
            <input placeholder="#HEX" type="text">
            </input>
            <label>
              Cor do Texto:
            </label>
            <input placeholder="#HEX" type="text"></input>
                </div>
                
                :""}
            
          </form>
        </div>
        <button className="btn-criar">Criar Site <ArrowRight size={15}></ArrowRight></button>
      </section>
    </main>
  );
}
