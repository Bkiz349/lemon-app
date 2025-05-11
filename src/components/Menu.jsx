import { Link } from 'react-router-dom';
import salad from '../Assets/greekSalad.jpg';
// import lemonDessert from '../Assets/lemon.jpeg'
import bruschetta from '../Assets/pizza.jpeg'

const Menu = () => {
   return (
     <section className="specials-section my-5">
         <div className="container my-5">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center m-5">
               <h2 className="fw-bold mb-3 mb-md-0">This week's specials!</h2>
               <Link to="/" className="btn btn-warning fw-bold me-5">Online Menu</Link>
            </div>

            <div className="row g-4">
                     {/* Card 1 */}
                     <div className="col-md-1"></div>
               <div className="col-md-3">
                  <div className="card h-100 shadow-sm bg-light">
                     <img src={salad} alt="Greek Salad" className="card-img-top rounded-top" />
                     <div className="card-body d-flex flex-column">
                        <div className="d-flex justify-content-between fw-bold mb-2">
                           <span>Greek salad</span>
                           <span className="text-danger">$12.99</span>
                        </div>
                        <p className="card-text text-muted">
                           The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese...
                        </p>
                        <Link to="/order" className="mt-auto text-dark fw-bold text-decoration-none">
                           Order a delivery <span className="ms-2">🛵</span>
                        </Link>
                     </div>
                  </div>
               </div>

               {/* Card 2 */}
               <div className="col-md-3">
                  <div className="card h-100 shadow-sm bg-light">
                     <img src={bruschetta} alt="Bruschetta" className="card-img-top rounded-top" />
                     <div className="card-body d-flex flex-column">
                        <div className="d-flex justify-content-between fw-bold mb-2">
                           <span>Bruschetta</span>
                           <span className="text-danger">$5.99</span>
                        </div>
                        <p className="card-text text-muted">
                           Our Bruschetta is made from grilled bread that has been smeared with garlic...
                        </p>
                        <Link to="/order" className="mt-auto text-dark fw-bold text-decoration-none">
                           Order a delivery <span className="ms-2">🛵</span>
                        </Link>
                     </div>
                  </div>
               </div>

               {/* Card 3 */}
               <div className="col-md-3">
                  <div className="card h-100 shadow-sm bg-light">
                     <img src={bruschetta} alt="Lemon Dessert" className="card-img-top rounded-top" />
                     <div className="card-body d-flex flex-column">
                        <div className="d-flex justify-content-between fw-bold mb-2">
                           <span>Lemon Dessert</span>
                           <span className="text-danger">$5.00</span>
                        </div>
                        <p className="card-text text-muted">
                           This comes straight from grandma's recipe book, every last ingredient has been sourced...
                        </p>
                        <Link to="/order" className="mt-auto text-dark fw-bold text-decoration-none">
                           Order a delivery <span className="ms-2">🛵</span>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

 );
}
 
export default Menu;