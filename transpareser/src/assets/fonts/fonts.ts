import Voigante from "next/font/local";
import LovingAmbros from "next/font/local";

const voigante = Voigante({
    src: "./voigante/voigantedisplay.ttf",
    variable: "--font-voigante"
})

const lovingambros = LovingAmbros({
    src: "./loving-ambros/loving-ambros-demo.ttf",
    variable: "--font-loving-ambros"
})

export {voigante, lovingambros};