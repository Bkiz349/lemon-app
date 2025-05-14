import  { useReducer } from "react";
import BookingForm from "./BookingForm";

// function select random
const seededRandom = function(seed) {
   const m = 2 ** 35 - 31;
   const a = 185852;
   let s = seed % m;
   return function () {
     return (s = (s * a) % m) / m;
   };
 };
 
 const fetchAPI = (date) => {
   let result = [];
   let random = seededRandom(date.getDate());
 
   for (let i = 17; i <= 23; i++) {
     if (random() < 0.5) result.push(i + ":00");
     if (random() < 0.5) result.push(i + ":30");
   }
   return result;
};
const submitAPI = function(formData) {
   return true;
};


const updateTimes = (state, action) => {
   switch (action.type) {
      case "UPDATE_TIMES":
         return action.payload;
      default:
         return state;
   }
}


const BookingPage = () => {
   const [availableTimes, dispatch] = useReducer(updateTimes, []);

   const handleDateChange = (selectedDate) => {
      const times = fetchAPI(selectedDate);
      dispatch({ type: "UPDATE_TIMES", payload: times });
   };
   
   

   return (<div>
 
      <BookingForm availableTimes={availableTimes} onDateChange={handleDateChange} />
         
   </div>);
}
 
export default BookingPage;