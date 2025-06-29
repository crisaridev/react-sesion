//import React from "react"; Apartir de la 16 no se necesita

export default function Header(){
  //Creando objeto de estilos para el componente
  const headerStyle = {
    color: "#edc84b",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: "4.2rem",
    fontWeight: 300,
    //letterSpacing

  }
  return(
    <header>
      <h1 style={headerStyle}>Pizza CH55</h1>
    </header>
  )
}