
import chef from '../Assets/restaurantfood.jpg'
import { Link } from 'react-router-dom';
import Menu from './Menu';

const chef_style = {
  maxWidth: "250px",
  width: "100%",
  height: "270px",
  position: "relative", 
  top: "25px",
};

const Header = () => {
   return (
      <section className="hero text-white position-relative" style={{ backgroundColor: "rgb(1, 43, 29)"}}>
      <div className="container">
         <div className="row ">
            <div className="col-md-4 offset-md-1  p-4">
               <h2 className='text-warning m-0'>Little Lemon </h2>
               <h4 className='text-white'>Chicago</h4> 
               <p>We are a family owned Mediterraneon restaurant, focused on traditional recipes served with a modern twist</p>
               <Link to='/reservations' className="btn btn-warning rounded">Reserve a table</Link>
            </div>
            <div className="col-md-4 offset-md-2">
               <img src={chef} alt="little lemon chef" className='img-fluid rounded-3' style={chef_style} />
            </div>
         </div>
         </div>
      </section>
   )
}


const Hero = () => {
   return ( <>
      <Header />
      <Menu />
      </>
   );
}
 
export default Hero;