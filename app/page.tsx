"use client";
import { useState } from "react";
import { ArrowDown, ArrowUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import ToggleButton from "./components/Toggle";

export default function Home() {
  const [optionAdvanced, setOptionAdvanced] = useState(false);
  const [pageFundo, setPageFundo] = useState('#FFFFFF');
  const [pageCor, setPageCor] = useState('#000000');
  const [btnFundo, setBtnFundo] = useState('#FFFFFF');
  const [btnCor, setBtnCor] = useState('#000000');

  // Toggle advanced options
  function ViewOptionsAdvanced() {
    setOptionAdvanced(!optionAdvanced);
  }

  function criarUrl() {
    const form = document.getElementById('config-site') as HTMLFormElement;
    const formData = new FormData(form);

    // Convert FormData to URL query string
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      if (value) {
        params.append(key, value.toString());
      }
    });
    console.log(params.toString());

    // Example of how to redirect to a new URL with the query string
    const queryString = params.toString();
    window.location.href = `/lps/pagina?${queryString}`;
  }

  return (
    <main className="page light-theme min-h-screen min-w-full flex flex-col">
      <section className="h-20 flex justify-end items-center pr-5 bg-transparent">
        <ToggleButton></ToggleButton>
      </section>

      <section className="flex flex-col items-center justify-center min-h-screen pb-6 ">
        <div className="pb-10">
          <h1 className="logo">Play Pro <span className="enfase">LP</span></h1>
        </div>

        <div id="box-form">
          <form id="config-site" className="create-lp">
            <label htmlFor="titulo">Título da página</label>
            <input
              type="text"
              name="titulo"
              required
            />

            <label htmlFor="subtitulo">Subtítulo</label>
            <input
              type="text"
              name="subtitulo"
              required
            />

            <label htmlFor="linkVideo">Link do vídeo</label>
            <input
              type="text"
              name="linkVideo"
              required
              value={"https://vimeo.com/184374359?share=copy"}
            />
            <label htmlFor="controller-video">Controle do Vídeo</label>
            <p className="text-sm text-gray-500">Marque sim para aparecer a opção de passar o video</p>
            <select
              id="controller-video"
              name="controllerVideo"
              className="border rounded p-2"
            > <option value="nao">Não</option>
              <option value="sim">Sim</option>
             
            </select>

            <label htmlFor="linkBotao">Link do botão</label>
            <input
              type="text"
              name="linkBotao"
              required
            />

            <button
              id="expand-form"
              className="flex items-center justify-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                ViewOptionsAdvanced();
              }}
            >
              Veja mais opções {optionAdvanced ? <ArrowUp size={15} /> : <ArrowDown size={15} />}
            </button>

            {optionAdvanced && (
              <div className="flex flex-col gap-4 w-full">
                <p>Estilo da Página</p>

                <label htmlFor="pageFundo">Cor de fundo:</label>
                <input
                  placeholder="#HEX"
                  type="text"
                  name="pageFundo"
                  value={pageFundo}
                  onChange={(e) => setPageFundo(e.target.value)}
                />
                <div
                  className=" prev-color h-2 w-full"
                  style={{ backgroundColor: pageFundo }}
                ></div>

                <label htmlFor="pageCor">Cor do Texto:</label>
                <input
                  placeholder="#HEX"
                  type="text"
                  name="pageCor"
                  value={pageCor}
                  onChange={(e) => setPageCor(e.target.value)}
                />
                <div
                  className=" prev-color h-2 w-full"
                  style={{ backgroundColor: pageCor }}
                ></div>

                <p>Estilo do botão</p>

                <label htmlFor="btnFundo">Cor de fundo:</label>
                <input
                  placeholder="#HEX"
                  type="text"
                  name="btnFundo"
                  value={btnFundo}
                  onChange={(e) => setBtnFundo(e.target.value)}
                />
                <div
                  className="prev-color h-2 w-full"
                  style={{ backgroundColor: btnFundo }}
                ></div>

                <label htmlFor="btnCor">Cor do Texto:</label>
                <input
                  placeholder="#HEX"
                  type="text"
                  name="btnCor"
                  value={btnCor}
                  onChange={(e) => setBtnCor(e.target.value)}
                />
                <div
                  className="prev-color h-2 w-full"
                  style={{ backgroundColor: btnCor }}
                ></div>
              </div>
            )}
          </form>
        </div>

        <button onClick={criarUrl} className="btn-criar">
          Criar Site <ArrowRight size={15} />
        </button>
      </section>
    </main>
  );
}
