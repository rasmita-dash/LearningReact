import React from "react";
import  ReactDOM from "react-dom";

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://images-platform.99static.com/v84irzbNBd5aawXGKXfH4SEjcn0=/0x0:960x960/500x500/top/smart/99designs-contests-attachments/117/117132/attachment_117132760"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}
const restaurants=[
    {
        restName: "Meghana Foods",
        cuisine:"Biryani, South Indian, North Indian",
        rating:"4.4"
    },
    {
        restName: "Birbal Biryani",
        cuisine:"Biryani, South Indian, North Indian",
        rating:"4.7"
    },
    {
        restName: "Hyderabadi Spice",
        cuisine:"Biryani, South Indian, North Indian",
        rating:"5"
    },
    {
        restName: "Kapoor's Cafe",
        cuisine:"Biryani, South Indian, North Indian",
        rating:"4.7"
    },
    {
        restName: "Punjabi Nawabi",
        cuisine:"Biryani, South Indian, North Indian",
        rating:"4.4"
    },
    {
        restName: "Basmati",
        cuisine:"Biryani, South Indian, North Indian",
        rating:"4.8"
    },
    {
        restName: "ChulahChowki Da Dhaba",
        cuisine:"Biryani, South Indian, North Indian",
        rating:"3.4"
    },
    {
        restName: "Bharatiya Jalpan",
        cuisine:"Biryani, South Indian, North Indian",
        rating:"4.8"
    },
    {
        restName: "Sarjapur Social",
        cuisine:"Biryani, South Indian, North Indian",
        rating:"4.2"
    },
    {
        restName: "Nukkad Punjabi",
        cuisine:"Biryani, South Indian, North Indian",
        rating:"4.1"
    },
]
// const RestaurantCard=({restName,cuisine,rating}) =>{} . -> destructure on the fly
const RestaurantCard=(props)=>{
    // const {restName,cuisine,rating} = props;//Destructuring
    return(
        <div className="res-card">
            <img className="res-logo" alt="restaurant logo" src="https://b.zmtcdn.com/data/dish_photos/f8a/20042ceab67859cbc6a7de58e4cabf8a.jpg"></img>
            <h3>{props.restaurant.restName}</h3>
            <h3>{props.restaurant.cuisine}</h3>
            <h3>{props.restaurant.rating}</h3>
        </div>
    )

}

const Body=()=>{
    return(
        <div className="body">
            <div className="Search">Search</div>
            <div className="res-container">
                {restaurants.map((res)=> (
                <RestaurantCard key={index} restaurant={res}/>))}
            </div>
        </div>
    )
}

const AppLayout=()=>{
    return <div className="app">
        <Header/>
        <Body/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);