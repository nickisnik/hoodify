import React from 'react'

const ShoppingItemsList = ({handleAddItem}) => {
    const itemList = [
        {name: "T-Shirt Men's White", price: 7.99, amount: 1, imgURL: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'},
        {name: "Hoodie Men's Grey", price: 19.99, amount: 1, imgURL: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'},
        {name: "Ring Gold-coated", price: 6.99, amount: 1, imgURL: 'https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80'},
        {name: "Jeans Women's Blue", price: 24.99, amount: 1, imgURL: 'https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80'},
        {name: "T-Shirt Women's Dark Grey", price: 7.99, amount: 1, imgURL: 'https://images.unsplash.com/photo-1608883819098-4cae10773e98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1895&q=80'}
    ];


    const items = itemList.map(item => {
        return (
        <div className="ShoppingItem">
            <img className='ShoppingItem__img' src={item.imgURL}/>
            <div className="ShoppingItem__details">
            <header>{item.name}</header>
            <span>£{item.price}</span>
            </div>
            
            <button className='ShoppingItem__btn' onClick={() => handleAddItem(item)}>+</button>
        </div>
        )
    })


  return (
    <div className='ShoppingItemsList'>
        {items}
    </div>
  )
}

export default ShoppingItemsList