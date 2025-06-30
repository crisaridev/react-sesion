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
    height: "40%",
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
    objectFit: "cover"
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
    height:"600px",
    backgroundColor: "#ffaeae",
    margin: "0 auto",
    borderRadius: "10px",
    marginTop: "30px",
    minWidth: "500px"

  }
  const emailStyle = {
  height: "40px",
  width: "40px",
  }

  const emailContainerStyle = {
    display: "flex",
    width: "100%",
    paddingLeft:"10%",
    marginTop: "20px",
    alignItems: "center"
  }
  const linkStyle = {
    textDecoration: "none",
  }



  const socialNetworks = {
    // display: "flex",
    // flexDirection: "column",
  }

  const links = {

  }



  return (
    <div style={cardStyle}>
      <div style={imageContainer}>
        <img style={imageStyle} src="/images/Profile_Picture.jpg" alt="Profile Picture Cristian Arias Pineda"/>
        <h2> Cristian Arias Pineda</h2>
        <p style={descriptionStyle}> Estoy en constante búsqueda de crecimiento profesional, explorando opciones como convertirme en Java Developer, Automation QA o incluso desarrollador iOS. Me interesa mejorar mi educación financiera, independizarme y llevar una vida más organizada y saludable. Disfruto mucho ver series, películas y jugar videojuegos, y actualmente estoy trabajando en fortalecer mis habilidades en inglés y desarrollo personal.</p>
        <div style={emailContainerStyle}>
          <img style={emailStyle} src="/images/mail_icon.webp" alt="mail icon" />
          <a style={linkStyle} href="mailto:ariascristian2207@gmail.com">ariascristian2207@gmail.com</a>
          <div style={socialNetworks}>
            <a style={links} href="https://github.com/crisaridev">Github</a>
            <a style={links} href="https://www.linkedin.com/in/crisaridev/">Linkedin</a>
          </div>
        </div>
      </div>
    </div>
  )
}