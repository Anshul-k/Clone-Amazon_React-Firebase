import React from 'react'
import Product from '../Components/Product'
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <img
                className='home__image'
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                alt=''
            />
            <div className="home__row">
                <Product
                    id="00001"
                    title="Roku Streaming Stick 4K | Streaming Device 4K/HDR/Dolby Vision with Roku Voice Remote and TV Controls"
                    price={38}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71wrIZujPIL._AC_SX425_.jpg"
                />
                <Product
                    id="00002"
                    title="Razer Kraken Gaming Headset: Lightweight Aluminum Frame, Retractable Noise Isolating Microphone, For PC, PS4, PS5, Switch, Xbox One, Xbox Series X & S, Mobile, 3.5 mm Audio Jack - Green"
                    price={44.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71BKQhFzDmL._AC_SX425_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="00003"
                    title="Amazon Basics Small Digital Alarm Clock with LED Display, Nightlight and Battery Backup - 4.5 x 3.5 x 2.4 Inches"
                    price={12.27}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61j17FjPhtL._AC_SX425_.jpg"
                />
                <Product
                    id="00004"
                    title="Fire TV Stick 4K, brilliant 4K streaming quality, TV and smart home controls, free and live TV"
                    price={34.99}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61rQC6AM-6L._AC_SX569_.jpg"
                />
                <Product
                    id="00005"
                    title="Logitech C920x HD Pro Webcam, Full HD 1080p/30fps Video Calling, Clear Stereo Audio, HD Light Correction, Works with Skype, Zoom, FaceTime, Hangouts, PC/Mac/Laptop/Macbook/Tablet - Black"
                    price={68}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71iNwni9TsL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="00006"
                    title='Amazon Fire TV 50" 4-Series 4K UHD smart TV'
                    price={188}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61IZcaEIt4L._AC_SX569_.jpg"
                />
            </div>
        </div>
    )
}

export default Home