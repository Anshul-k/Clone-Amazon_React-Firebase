import React from 'react'
import CheckoutProduct from '../Components/CheckoutProduct';
import { useStateValue } from '../Components/StateProvider';
import Subtotal from '../Components/Subtotal';
import './Checkout.css'

function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout__left">

                <img
                    className='checkout__ad'
                    src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
                    alt='Amazon Ads'
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping basket is Empty.</h2>
                        <p>
                            You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
                        </p>
                    </div>
                ) : (
                    <div>
                        <h2 className='checkout__title'>Your Shopping Basket</h2>
                        {/* List of all the products */}
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout