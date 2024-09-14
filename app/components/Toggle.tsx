"use client";
import { Moon, Sun } from "lucide-react";
import {useState } from "react";

function AlterTheme(tema: string) {
    const temaColor = document.querySelector(".page");
    if(temaColor){
        temaColor.classList.remove("dark-theme","light-theme");
        temaColor.classList.add(tema);
    }
    
    console.log(`Alterando para o tema: ${tema}`);
}

export default function ToggleButton() {

    const [theme, setTheme] = useState("light-theme");
    const handleToggleTheme = (tema: string) => {
        setTheme(tema);
        AlterTheme(tema); 
    };

    return (
        <div className="box-toggle fixed">

            <button id="light-mode"  onClick={() => handleToggleTheme("light-theme")}>
                <Sun />
            </button>

            <button id="dark-mode" onClick={() => handleToggleTheme("dark-theme")}>
                <Moon />
            </button>
        </div>
    );
}
