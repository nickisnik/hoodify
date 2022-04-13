import React, {useState} from 'react'
import './ShoppingCart.css'

const ShoppingCart = ({cartItems, setCartItems}) => {

    const [isEditing, setIsEditing] = useState('');
    const [tempValue, setTempValue] = useState(0);


    const handleClick = (item, change) => {
        const itemIndex = cartItems.indexOf(item);

        if(item.amount === 1 && change === -1) {
            setCartItems((cartItems) => {
                return [
                    ...cartItems.slice(0, itemIndex),
                    ...cartItems.slice(itemIndex + 1)
                ]
            })
            return
        }

        setCartItems((cartItems) => {
            return [
                ...cartItems.slice(0, itemIndex),
                {...item, amount: item.amount + change},
                ...cartItems.slice(itemIndex + 1)
            ]
        })
    }
    const handleChange = (event) => {
        const newAmount = parseInt(event.target.value);

        setTempValue(newAmount);
    }
    const handleClickOut = (item) => {
        const itemIndex = cartItems.indexOf(item);

        if(Number.isNaN(tempValue)) {
            return
        }
        if(tempValue === 0) {
            setCartItems((cartItems) => {
                return [
                    ...cartItems.slice(0, itemIndex),
                    ...cartItems.slice(itemIndex + 1)
                ]
            })
            return
        }

        setCartItems((cartItems) => {
            return [
                ...cartItems.slice(0, itemIndex),
                {...item, amount: tempValue},
                ...cartItems.slice(itemIndex + 1)
            ]
        })
    }
    const showTempValue = (item) => {
        if(isEditing === item.name) {
            //console.log(tempValue)
            if(Number.isNaN(tempValue)) {
                return ''
            }
            return tempValue
        }
        return item.amount
        /* isEditing ? tempValue : item.amount */
    }

    const checkOut = () => {
        console.log(cartItems)
        console.log(total())
    }

    const total = cartItems.reduce((sum, curr) => {
        return sum + (curr.price * curr.amount)
    }, 0)
    

    const shoppingItem = cartItems.map(item => 
        <div className="ShoppingCart__item__container" key={item.name}>
            <span className="ShoppingCart__item__name">{item.name}</span>
            <span onClick={() => {handleClick(item, -1)}}>-</span>
            <div className="ShoppingCart__item__amount__container">
                <input
                    onBlur={() => {
                        handleClickOut(item);
                        setIsEditing('');
                    }}
                    onClick={() => {
                        setIsEditing(item.name);
                        setTempValue(item.amount);
                    }}
                    onChange={(event) => {
                        handleChange(event, item);
                    }}
                    type="text" value={showTempValue(item)} className='ShoppingCart__item__amount' 
                />
            </div>
            <span onClick={() => {handleClick(item, 1)}}>+</span>
        </div>    
    )

  return (
    <div className='ShoppingCart__container'>
        <div className="ShoppingCart__item-list">
            {shoppingItem}
            <span>Your total is: {total}</span>
        </div>
        <button onClick={checkOut}>Check out</button>
    </div>
  )
}

export default ShoppingCart