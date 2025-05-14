import React, { useState } from "react";


const BookingForm = (props) => {
   const [date, setDate] = useState("");
   const [time, setTime] = useState("");
   const [guests, setGuests] = useState(1);
   const [occasion, setOccasion] = useState("Birthday");

   const availableTimes = props.availableTimes || [] ;


   const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ date, time, guests, occasion });
   };

   const handleDateChange = (e) => {
      const selectedDate = e.target.value;
      setDate(selectedDate);
      props.onDateChange(new Date(selectedDate)); 
    };


   return (
      <div style={{ maxWidth: "600px", margin: "0 auto" }} className="my-5 shadow bg-light p-4 rounded">
         <form onSubmit={handleSubmit}>
            <div className="mb-3">
               <label htmlFor="res-date" className="form-label">Choose Date</label>
               <input type="date" className="form-control" id="res-date"
                  onChange={handleDateChange}/>
            </div>
            <div className="mb-3">
               <label htmlFor="res-time" className="form-label">Choose time</label>
               <select className="form-select" id="res-time"
                  value={time} onChange={(e) => setTime(e.target.value)}>
                  {availableTimes.map((time) => (
                     <option key={time} value={time}>{time}</option>
                  ))}
               </select>
            </div>
            <div className="mb-3">
               <label htmlFor="guests" className="form-label">Number of Guests</label>
               <input type="number" className="form-control" id="guests" min="1" max="10"
                  value={guests} onChange={(e) => setGuests(e.target.value)} />
            </div>
            <div className="mb-3">
               <label htmlFor="occasion" className="form-label">Occasion</label>
               <select className="form-select" id="occasion"
                  value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Engagement</option>
                  <option>Graduation</option>
                  <option>Other</option>
               </select>
            </div>
            <input type="submit" value="Make Your reservation" className="btn btn-warning" />
         </form>
       
      </div>
   );
};

export default BookingForm;
