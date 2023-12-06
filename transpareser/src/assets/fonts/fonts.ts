
import localFont from "next/font/local";

const voigante = localFont({
    src: "./voigante/voigantedisplay.ttf",
    variable: "--font-voigante"
})

const lovingambros = localFont({
    src: "./loving-ambros/loving-ambros-demo.ttf",
    variable: "--font-loving-ambros"
})

const athenevoyage = localFont({
    src: "./athene-voyage/AtheneVoyage.ttf",
    variable: "--font-athene-voyage"
})

const autography = localFont({
    src: "./autography/Autography.otf",
    variable: "--font-autography"
})

const andisignature = localFont({
    src: "./andi-signature/Andi Signature - Demo.otf",
    variable: "--font-andi-signature"
})

const galabiyah = localFont({
    src:"./galabiyah/galabiyah.ttf",
    variable: "--font-galabiyah"
})

export {voigante, galabiyah, lovingambros, athenevoyage, autography, andisignature};