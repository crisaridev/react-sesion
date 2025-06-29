/**
 * Componente card debe tener
 * 1. Imagen
 * 2. Una parte con texto donde va a ir su nombre
 * 3. 2 Links, uno a Github y uno a Linkedin.
*/

export default function Card (){
  //Creando objeto de estilos para el componente

  const imageContainer = {
    background: "#3e3e3e",
    width: "100%",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  const imageStyle = {
    height: "300px",
    width: "300px",
    borderRadius: "10px"
  }

  const cardStyle = {
    textAlign: "center",
    border: "1px solid blue",
  }

  const socialNetworks = {
    display: "flex",
    flexDirection: "column",
  }

  const links = {
    color: "black",
  }



  return (
    <div style={cardStyle}>
      <div style={imageContainer}>
        <img style={imageStyle} src="images/cuteCat.jpeg" alt="Cat cute"/>
      </div>
      <h2> Cristian Arias Pineda</h2>
      <div style={socialNetworks}>
      <a style={links} href="https://github.com/crisaridev">Github</a>
      <a style={links} href="https://www.linkedin.com/in/crisaridev/">Linkedin</a>
      </div>
    </div>
  )
}