"use client";
import { Play } from 'lucide-react';
import React from 'react';
import ReactPlayer from 'react-player';

interface VideoProps {
  videoUrl: string;
  controls: boolean;
}

export function VideoModel1({ videoUrl,controls }: VideoProps) {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Previne a renderização no servidor
  }

  const customPlayButton = (
    <button className=" bg-white w-32 h-24 rounded-md flex justify-center items-center opacity-[1] ">
        <Play size={30}>

        </Play>
    </button>
  );

  return (
    <div className='w-full flex justify-center items-center container-video'>
      <ReactPlayer
        url={videoUrl}
        playing={true}
        controls={controls}
        light={true}
        playIcon={customPlayButton}
      />
    </div>
  );
}
