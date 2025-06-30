export default function MovieList({movieObject}){
  //Creando objeto de estilos para el componente
  const imageStyle ={
    width : "300px",
    height: "250px",
    objectFit:"fill",
    borderRadius: "100%",
    marginLeft:"50px",
    marginRight: "50px"
  }
  const containerStyle = {
    display: "flex",
  justifyContent: "center",
  marginTop: "40px",
  }
  const cardStyle = {
    display:"flex",
    alignItems: "center"
  }
  const titleStyle = {
    marginBottom: "30px"
  }
  return(
    <>
    <div style={containerStyle}>
    <div style={cardStyle}>
      <img style={imageStyle} src={movieObject.image} alt="..." />
    <div>
      <h4 style={titleStyle}>{movieObject.title}</h4>
      <p>{movieObject.description}</p>
      <p>{movieObject.duration}</p>
      </div>
    </div>
    </div>
    </>
  )
}