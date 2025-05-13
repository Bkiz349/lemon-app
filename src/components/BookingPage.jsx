import React, { useReducer } from "react";
import BookingForm from "./BookingForm";

const updateState = (state, action) => {
   switch (action.type) {
      case "UPDATE_TIMES":
         return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
      default:
         return state;
   }
}

const initialTimes = async () => {
   // return  [ "17:00", "18:00", "19:00", "20:00", "21:00", "22:00" ] 
   const times = await fetch("https://raw.githubusercontent.com/courseraap/capstone/main/api.js")
   if (times) {
      const data = await times.json();
      return data;
   }
   
   
   
}


const BookingPage = () => {
   const [availableTimes, dispatch] = useReducer(updateState, [], initialTimes);

   return (<div>
     <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
   </div>);
}
 
export default BookingPage;