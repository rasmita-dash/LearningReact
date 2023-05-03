import {Image_CDN_URL} from "../utils/constants";

const RestaurantCard=(props)=>{
    // const {restName,cuisine,rating} = props;//Destructuring
    const restaurant = props.restaurant.data;
    console.log(restaurant);
    return(
        <div className="res-card">
            <img className="res-logo" alt="restaurant logo" src={ Image_CDN_URL + props.restaurant.data.cloudinaryImageId }></img> 
            <h3>{props.restaurant.data.name}</h3>
            <h3>{props.restaurant.data.cuisines.join(", ")}</h3>
            <h3>{props.restaurant.data.avgRating}</h3>
        </div>
    )

}

export default RestaurantCard;