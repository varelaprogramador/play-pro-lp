"use client";
import { VideoModel1 } from "../../components/Video-1";
    // Importar o useSearchParams do next/navigation
    import { useSearchParams } from 'next/navigation';

interface Props {
    params: { nickname: string };
}

export default function Pagina() {



  const searchParams = useSearchParams();
  
  // Obter valores dos parâmetros de consulta
  const titulo = searchParams.get('titulo') || '';
  const subtitulo = searchParams.get('subtitulo') || '';
  const linkVideo = searchParams.get('linkVideo') || '';
  const linkBotao = searchParams.get('linkBotao') || '';
  const controllerVideo=searchParams.get("controllerVideo"||'');
  const pageFundo = searchParams.get('pageFundo') || '';
  const pageCor = searchParams.get('pageCor') || '';
  const btnFundo = searchParams.get('btnFundo') || '';
  const btnCor = searchParams.get('btnCor') || '';

  const control=controllerVideo==="nao"?false:true;

 

    return (
        <main
            className="page-model bg-black min-h-screen min-w-full flex flex-col gap-8 justify-center items-center"
            style={{backgroundColor : pageFundo}}
            
        >
            <div className="flex items-center flex-col">
                <h1 className="text-white text-3xl" style={{color:pageCor}}>
                    {titulo}
                </h1>
                <p className="text-white" style={{color:pageCor}}>
                    {subtitulo}
                </p>
            </div>
            <VideoModel1 videoUrl={linkVideo} controls={control} />
            <a href={linkBotao} target="_blank" rel="noopener noreferrer">
                <button
                    className="btn-model bg-white rounded-md p-2"
                    
                >
                    Acessar Link
                </button>
            </a>
        </main>
    );
}
