import React from 'react'
import './Home.css'
import Product from './Product'
import banner from './images/home_banner.jpg'
import prod1 from './images/amazon_echo_dot.jpg'
import prod2 from './images/nivea.jpg'
import prod3 from './images/watch.jpg'
import prod4 from './images/cycle.jpg'
import prod5 from './images/earphone.jpg'
import prod6 from './images/computer.jpg'

function Home() {
  return (
    <div className='home'>

        <div className='home_container'>
            <img 
                className='home_image'
                src={ banner } 
                alt='bannerimage' />

            <div className='home_row'>
                <Product 
                    id={1}
                    title='Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)'
                    price={2449}
                    image={ prod1 }
                    rating={5}
                    discount={ 38 }
                    /> 
                <Product 
                    id={2}
                    title='NIVEA Waterlily and Oil Shower Gel, 250ml (Pack of 3)'
                    price={337}
                    image={ prod2 }
                    rating={4}
                    discount={ 23 }
                    />   
                <Product 
                    id={3}
                    title="Fire-Boltt Smartwatch Brand Talk 2 Bluetooth Calling Smartwatch"
                    price={1799}
                    image={ prod3 }
                    discount={ 44 }
                    rating={5}
                    />     
            </div>
            

            <div className='home_row'>
                <Product 
                    id={4}
                    title='Firefox Bikes Nexus-D 27.5T MTB Mountain Bike with dics brake I (GREY) | Frame: 17 Inches - Unisex Adult'
                    price={5999}
                    image={ prod4 }
                    discount={ 32 }
                    rating={4}
                    />   
                <Product 
                    id={5}
                    title="Oppo Enco M32 Bluetooth Wireless in Ear Earbuds with Mic,10 Mins Charge - 20Hrs Music Fast Charge, 28Hrs Battery Life,10mm Driver, IP55 Dust & Water Resistant (Black)"
                    price={1599}
                    image={ prod5 }
                    discount={ 50 }
                    rating={3}
                    />  
            </div>

            <div className='home_row'>
                <Product 
                    id={6}
                    title="ASUS Vivo AiO V222, 4 core Intel Pentium Silver J5040, All-in-One Desktop (8GB/256GB SSD/Integrated Graphics/Windows 11/Black/4.8 kg), V222GAK-BA034W"
                    price={29990}
                    image={ prod6 }
                    discount={ 82 }
                    rating={5}
                    />  
            </div>

        </div>
    </div>
  )
}

export default Home