export default function Footer({showOpenMessage = true}){
  const paragraphStyle = {
    marginTop: "50px",
    textAlign: "center"
  }
  return(
    <footer>
      { showOpenMessage && <p>Estamos abiertos</p>}
      <p style={paragraphStyle}>Made with ❤️ by Crisaridev</p>
    </footer>
  )
}