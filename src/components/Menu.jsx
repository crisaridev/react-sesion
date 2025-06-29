import Pizza from "./Pizza"
import {useState, useEffect} from "react";
export default function Menu() {
  const [pizzas, setPizzas] = useState([
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "images/pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "images/pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "images/pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "images/pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "images/pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "images/pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ])

//funcion para actualizar estado
useEffect(() =>{
  const data = localStorage.getItem("pizzas");//devuelve datos o null recordar que es un valor falsy
  if (data) setPizzas(JSON.parse(data));
},[])

//Fijar los datos o actualizarlos
useEffect(() => localStorage.setItem("pizzas", JSON.stringify(pizzas)),[pizzas]);
//funcion para borrar las pizzas
const deletePizza = (pizzaName) => setPizzas(prev => prev.filter((pizza) => pizza.name !== pizzaName));


  return (
    <main className="menu">
      <h2>Our menu</h2>
      {/* Usar Operador ternario */}
      {pizzas.length > 0 ?
        // esta <> </> se conoce como fragment, y no se renderiza en la aplicacion. No sirve como contenedor padre pero sin
        //ser renderizado en el html
        (<>
          <p>
            Authentic Italian cousine. 6 creatives to choose from. All from our stone oven, all organic all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => {
              console.log(pizza);
              return (
                <Pizza key={pizza.name} pizzaObject ={pizza} onDelete = {deletePizza}/>
              );
            })}
          </ul>
        </>) : (
          <p>We're still working on our menu, Please come back later.</p>
        )}
    </main>
  );
}