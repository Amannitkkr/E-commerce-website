import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './header.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import {Link} from 'react-router-dom'
import {useStateValue} from "./StateProvider"



 function Header() {
     const [{basket}] = useStateValue();
     console.log(basket); 
 
    return (
        <nav className="header">
            <Link to="/home">
                <img className="header_logo" alt="" src="https://tse1.mm.bing.net/th?id=OIP.drh1URyUj_AxtgtkdqD3FQHaCS&pid=Api&P=0&w=504&h=157" />
            </Link>
            <div className="headersearch">
                <input clsaaName="header_searchinput" type="text"/>
                <SearchIcon className="header_searchicon"/>
            </div>    
            
            <div classsName="header_navbar">
                <Link to="/login"  className="header_link" >
                    <div className="header_option">
                        <span className="header_option1">Hello user</span>
                        <span className="header_option2">Sign in</span>
                    </div>
                </Link>      
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <sapn className="header_option1">Orders</sapn>
                        <span  className="header_option2" >Returns</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header_link">
                    <div className="header_basketoption">
                        <ShoppingBasketIcon/>
                        <span className="header_basketcount">{basket?.length}</span>

                    </div>
                </Link> 
            </div>
    
           
           

            
        </nav>

        
    )
}
export default Header
