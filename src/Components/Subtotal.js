import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider'
import './Subtotal.css'

function Subtotal() {

    const [{ basket }] = useStateValue();
    console.log(getBasketTotal(basket));

    return (
        <div className='subtotal'>
            {/* Price */}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} {basket.length > 1 ? "items" : "item"}): <strong>{`${value}`}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button className=''>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal