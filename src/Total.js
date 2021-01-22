import { useState, useEffect } from 'react'
import './total.css'

  function formatNumber(num) {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

function Total({ orders }) {
    const [change, setChange] = useState(0)
     const [cash, setCash] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {

        function getTotalAmount () {
            let total = 0;
            orders.forEach(element => {
                total += element.amount
            });
            setTotalAmount(total)
        }

        if(orders.length) {
            getTotalAmount()
        }
    },[orders])

    const handleCash = (e) => {
        setCash(e.target.value)
        setChange(totalAmount - e.target.value)
    }

    return <>
    <div className="group__total">
        <div className="group">
            Total Amount :
            <input name="change" disabled value={formatNumber(totalAmount)}/>
        </div>

        <div className="group change">
            Cash :
            <input name="change" onChange={handleCash} value={cash}/>
        </div>

        <div className="group">
            Change:
            <input name="change" disabled value={formatNumber(change)}/>
        </div>
    </div>

    </>
}

export default Total
