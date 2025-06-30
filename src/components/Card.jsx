/**
 * Componente card debe tener
 * 1. Imagen
 * 2. Una parte con texto donde va a ir su nombre
 * 3. 2 Links, uno a Github y uno a Linkedin.
*/

export default function Card (){
  //Creando objeto de estilos para el componente

  const imageContainer = {
    background: "rgba(255, 255, 255, 0.3)",
    width: "100%",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    boxShadow: "0 4px 8px 0 rgba(5, 4, 4, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  }

  const imageStyle = {
    height: "150px",
    width: "150px",
    marginTop: "45px",
    marginBottom: "45px",
    borderRadius: "100%",
  }

  const descriptionStyle = {
    textAlign: "justify",
    paddingLeft: "10%",
    paddingRight: "10%",
    marginTop: "15px"

  }

  const cardStyle = {
    textAlign: "center",
    border: "1px solid blue",
    width: "25%",
    margin: "0 auto",
    borderRadius: "10px",
    marginTop: "30px"

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
        <img style={imageStyle} src="/src/assets/Profile_Picture.jpg" alt="Profile Picture Cristian Arias Pineda"/>
        <h2> Cristian Arias Pineda</h2>
        <p style={descriptionStyle}> Estoy en constante búsqueda de crecimiento profesional, explorando opciones como convertirme en Java Developer, Automation QA o incluso desarrollador iOS. Me interesa mejorar mi educación financiera, independizarme y llevar una vida más organizada y saludable. Disfruto mucho ver series, películas y jugar videojuegos, y actualmente estoy trabajando en fortalecer mis habilidades en inglés y desarrollo personal.</p>
        <div>
          <img src="/src/assets/mail_icon.webp" alt="mail icon" />
        </div>
      </div>
      <div style={socialNetworks}>
      <a style={links} href="https://github.com/crisaridev">Github</a>
      <a style={links} href="https://www.linkedin.com/in/crisaridev/">Linkedin</a>
      </div>
    </div>
  )
}