import { Link, useNavigate } from 'react-router'
import CartProvider from '../providers/CartProvider'

function NavBar ({categories, getProdsInCart}) {
  
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/cart')
  }

  return (
    <div className="navbar bg-base-100 shadow-sm p-5">
         <div className="navbar-start">
           <div className="dropdown">
             <div tabIndex={0} role="button" className="ml-3 btn btn-outline btn-primary">
               categories
             </div>
             <ul
               tabIndex="-1"
               className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
               {categories.map(category => <li key={category}><Link to={`/category/${category}`}>{category}</Link></li>)}
             </ul>
           </div>
         </div>
         <div className="navbar-center">
           <Link to='/' className="btn btn-ghost text-xl">Card-Cart</Link>
         </div>
         <div className="navbar-end">
           <button className="btn btn-ghost btn-circle">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> </svg>
           </button>
           <button className="btn btn-ghost btn-circle" onClick={handleNavigate}>
             <div className="indicator">
               <svg viewBox="0 0 24 24" className='h-5 w-5' fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#d12323"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
               <span className="badge badge-xs badge-primary indicator-item">
                {getProdsInCart()}
               </span>
             </div>
           </button>
         </div>
       </div>
     )
   }

export default NavBar
