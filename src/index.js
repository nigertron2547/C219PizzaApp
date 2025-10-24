import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div>
            <h1>Mario's Pizza</h1>
            <PizzaList />
        </div>
    )
}


function PizzaList() {
    const pizzas = [
    {name: "Margherita", toppings: "Cheese, Tomato Sauce",  image: "/starter/pizzas/margherita.jpg"},
    {name: "Prosciutto", toppings: "Tomato, Cheese, Prosciutto", image: "/starter/pizzas/prosciutto.jpg"},
    {name: "Salamino", toppings: "Tomato, Cheese, Pepperoni", image: "/starter/pizzas/salamino.jpg"},
    {name: "Spinaci", toppings: "Tomato, Cheese, Spinach", image: "/starter/pizzas/spinaci.jpg"},
    {name: "Focaccia", toppings: "Flour, Parsley", image: "/starter/pizzas/focaccia.jpg"},
    {name: "Funghi", toppings: "Tomato, Cheese, Mushroom, Onions", image: "/starter/pizzas/funghi.jpg"},


]
    return (
        <div>
            {pizzas.map((pizza) => (
                <div key={pizza.name}>
                    <img src={pizza.image} width="150" />
                    <h2>{pizza.name}</h2>
                    <p>{pizza.toppings}</p>
                    <p>------------------------------</p>
                </div>

            ))}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);