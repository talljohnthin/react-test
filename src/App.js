import { useState } from 'react'
import Table from "./Table"
import Total from "./Total"
import './style.css'

const products = [
    {
        productId: '1',
        productName: 'Milo',
        cost: 8
    },
    {
        productId: '2',
        productName: 'Sugar',
        cost: 10
    },
    {
        productId: '3',
        productName: 'Milk',
        cost: 20
    }
]

const  App = () => {
    const [search, setSearch] = useState('')
    const [currentProduct, setCurrentProduct] = useState('')
    const [qty, setQty] = useState(0)
    const [orders, setOrders] = useState([])

    const handleSearch = () => {
        if(search) {
            const filteredProducts = products.filter(product => product.productId === search)
            if(filteredProducts.length) {
                setCurrentProduct(filteredProducts[0])
            }
        }
    }

    const handleAddToCart = () => {
        const inCart = orders.filter(order => order.productId === currentProduct.productId)
        if(inCart.length > 0) {
            alert('Item is already in the cart, please remove it and then add it again')
            return
        }

        if(qty <= 0) {
            alert('Please add a valid quantity')
            return
        }

        if(search) {
            const order = {
                ...currentProduct,
                qty,
                amount: qty * currentProduct.cost
            }
            setOrders([...orders, order])
        }
    }

    const handleRemoveProduct = id => {
        if(id) {
         const latestOrders =  orders.filter(order => order.productId !== id)
         setOrders(latestOrders)
        }
    }

  return (
    <div className="App">
      <div className="group__search">
            <input name="search" placeholder="Search Product ID" value={search} onChange={(e)=> setSearch(e.target.value)}/>
            <button onClick={handleSearch}> Search Button</button>
      </div>

      <div className="group__search__result">
        <div className="group">
            <div>Product id</div>
            <input name="product-id" disabled value={ currentProduct && currentProduct.productId } />
        </div>

        <div className="group">
            <div>Product name</div>
            <input name="product-name" disabled value={ currentProduct && currentProduct.productName} />
        </div>

        <div className="group">
            <div>Cost</div>
            <input name="product-cost" disabled value={ currentProduct && currentProduct.cost} />
        </div>

        <div className="group">
            <div>Qty</div>
            <input name="product-cost" type="number"  value={ qty } onChange={(e) => setQty(e.target.value)} />
        </div>
      </div>

      <div className="group__addToCart">
        <button onClick={handleAddToCart}>add to cart</button>
      </div>

        <Table orders={orders} removeProduct={handleRemoveProduct} />

        <Total orders={orders} />

    </div>
  );

}

export default App;
