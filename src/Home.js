import React from 'react'
import './Home.css'
import Products from './Products'



function Home() {
    return (
        < div className="home">
            <img className="home_image" alt="home" src="https://tse2.mm.bing.net/th?id=OIP.SRUh-fJfUPq5S91IO4RG5gHaEK&pid=Api&P=0&w=325&h=183" />
            
           
           <div className="home_row">
           <Products
            id={12345}
            title="this is my product"
            price={11.56}
            rating={5}
            image="https://tse3.mm.bing.net/th?id=OIP.J4DhkBdpGNUu-Gg-78tbKgHaH2&pid=Api&P=0&w=300&h=300"
            />
             <Products
            id={12345}
            title="this is my product"
            price={11.56}
            rating={5}
            image="https://tse3.mm.bing.net/th?id=OIP.J4DhkBdpGNUu-Gg-78tbKgHaH2&pid=Api&P=0&w=300&h=300"
            />

           </div>
           <div className="home_row">
           <Products
            id={12345}
            title="this is my product"
            price={11.56}
            rating={5}
            image="https://tse3.mm.bing.net/th?id=OIP.J4DhkBdpGNUu-Gg-78tbKgHaH2&pid=Api&P=0&w=300&h=300"
            />
             <Products
            id={12345}
            title="this is my product"
            price={11.56}
            rating={5}
            image="https://tse3.mm.bing.net/th?id=OIP.J4DhkBdpGNUu-Gg-78tbKgHaH2&pid=Api&P=0&w=300&h=300"
            />
             <Products
            id={12345}
            title="this is my product"
            price={11.56}
            rating={5}
            image="https://tse3.mm.bing.net/th?id=OIP.J4DhkBdpGNUu-Gg-78tbKgHaH2&pid=Api&P=0&w=300&h=300"
            />

           </div>
           <div>
           <Products
            id={12345}
            title="Our Product"
            price={11.56}
            rating={5}
            image="https://tse3.mm.bing.net/th?id=OIP.J4DhkBdpGNUu-Gg-78tbKgHaH2&pid=Api&P=0&w=300&h=300"
            />
           </div>
                
                

            
           
           
            
        </div>
    )
}
export default Home
