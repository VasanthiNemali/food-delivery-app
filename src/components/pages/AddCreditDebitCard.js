import React from 'react'

export const AddCreditDebitCard = () => {
  return (
    <div>
        <h1>Add Credit or Debit Card</h1>
        <form>
        <label>Name on Card</label>
            <input type='text' ></input>
            <label>Card Number</label>
            <input type='number' ></input>
            <label>Exp.Date</label>
            <input type='date'></input>
            <label>Security Code</label>
            <input type='number' ></input>
            <label>Zip Code</label>
            <input type='number' ></input>
            <button type='submit'>Add Card</button>

        </form>
    </div>
  )
}
