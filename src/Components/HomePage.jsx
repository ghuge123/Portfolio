import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import React, { useEffect } from "react";
//import "./home.css";
import { texts, animateText } from "./home";

export default function HomePage() {
  useEffect(() => {
    const element = document.getElementById("child");
    animateText(element, texts);
  }, []);

  return (
    <>
      <div className="content">
        <div className="flex pl-64 pb-[4.6rem] items-center">
          <div>
            <p className="text-5xl font-bold mb-2">Hi There,</p>
            <p className="text-5xl font-bold mb-3">
              I'm Dipak <span className="text-orange-500">Ghuge</span>
            </p>
            <p className="font-bold text-lg mb-3 parent">
              I Am Into <span className="text-orange-800" id="child"></span>
            </p>
            <div className="flex items-center">
              <button
                className="border rounded-xl text-sm w-28 bg-indigo-950 text-white pt-1.5 pb-1.5 pl-1 text-center hover:bg-indigo-800"
                aria-label="Scroll to About Me"
              >
                About Me <ArrowDownwardIcon fontSize="small" />
              </button>
              <button className="border rounded-xl text-sm bg-indigo-950 text-white pt-1.5 pb-1.5 pl-1 ml-1 w-28 text-center hover:bg-indigo-800" >
                <a href="src/assets/Dipak_Resume.pdf" download="Dipak_Resume.pdf">My Resume</a>   
              <ArrowOutwardIcon fontSize="small" /></button>
            </div>

            <div className="flex mt-4">
              <a
                href="https://www.linkedin.com/in/dipak-ghuge-85231b259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-950 hover:text-cyan-700 ml-2"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://m.facebook.com/dipak.ghuge.3597789/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-950 hover:text-cyan-700 ml-2"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/dipak.ghuge_14?igsh=eGprc24wdDU5eW5u"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-950 hover:text-cyan-700 ml-2"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://github.com/ghuge123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-950 hover:text-cyan-700 ml-2"
              >
                <GitHubIcon />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-950 hover:text-cyan-700 ml-2"
              >
                <TelegramIcon />
              </a>
            </div>
          </div>
          <div className="ml-40">
            <img
              className="border w-[30vw] h-[65vh] rounded-full object-cover shadow"
              src="./img.jpg"
              alt="Dipak Ghuge"
            />
          </div>
          
        </div>
      </div>
    </>
  );
}
