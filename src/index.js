import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Header() {

    return (
        <div>
        <h1 style={{
            color: '#570e7e', 
            fontSize: '48px', 
            textTransform:'uppercase',
            textAlign:'center'}}>
        Pizza Hat</h1>
        <h2 style={{
            color: '#570e7e',
            fontSize: '24px',
            textTransform: 'uppercase',
            textAlign: 'center'
        }}>
            Operating Hours: 10:00 am - 10:00pm</h2>
            <br></br>
        </div>
    )
}
function App() {
    return (
        <div>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Footer() {
    const currentHour = new Date().getHours();
    const isOpen = currentHour >= 10 && currentHour <= 22;
    return (
        <footer style={{
        fontSize: '1.4rem',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: '4rem',}}>
            {isOpen ? "We're currently open" : " Sorry, we're closed"}
            <br></br>
            <br></br>
            {isOpen && <button style={{
                color: 'white',
                fontFamily: 'inherit',
                border: 'none',
                fontSize: '1.4rem',
                fontWeight: 500,
                backgroundColor: '#570e7e',
                padding: '1.4rem 3.2rem',
                cursor: 'pointer',
                TransitionEvent: 'all 0.2s',
            }}>Order</button>}
        </footer>
    )
}

function Menu() {
    return (
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2.4rem'}}>

        <h2 style={{
            display: 'inline-block',
            padding: '10px 20px',
            borderTop: '2px solid purple',
            borderBottom: '2px solid purple',
            fontSize: '2.4rem',
            textTransform: 'uppercase',
            letterSpacing: '3px'
            
        }}>Our Menu</h2>
        <h2>Authentic Italian Cuisine, all from our stone oven.</h2>
        <PizzaList />
        </div>
    )
}
function PizzaList() {
    const pizzas = [
{
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "starter/pizzas/focaccia.jpg",
    soldOut: false,
},
{
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "starter/pizzas/margherita.jpg",
    soldOut: false,
},
{
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "starter/pizzas/spinaci.jpg",
    soldOut: false,
},
{
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "starter/pizzas/funghi.jpg",
    soldOut: false,
},
{
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "starter/pizzas/salamino.jpg",
    soldOut: true,
},
{
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "starter/pizzas/prosciutto.jpg",
    soldOut: false,
},
];
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '2.4rem',
            textAlign: 'center'
        }}>
            {pizzas.map((pizza) => (
                <div key={pizza.name}>
                    <img src={pizza.photoName} width="170" />
                    <h2 style={{textAlign:'center'}}>{pizza.name}</h2>
                    <p style={{textAlign: 'center'}}>{pizza.ingredients}</p>
                    <p style={{textAlign:'center'}}>${pizza.price}</p>
                    <button style={{
                color: 'black',
                fontFamily: 'inherit',
                border: 'none',
                fontSize: '1.4rem',
                fontWeight: 500,
                backgroundColor: '#cfbadbff',
                padding: '1.4rem 3.2rem',
                cursor: 'pointer',
                TransitionEvent: 'all 0.2s',
            }}>Add to Cart</button>
                </div>
            ))}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);