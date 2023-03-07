import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const max_budget = 20000;

const Budget = () => {
  const { budget, expenses, currency, dispatch } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
}, 0);

  const onChangeBudget = (event) => {
    const budgetValue = Number(event.target.value);


    if (budgetValue < totalExpenses) {
      alert(
        "You cannot reduce the budget value lower than the spending"
      );
    } else {
      if (budgetValue > max_budget) {
        alert('Please enter a value less than ' + max_budget);
        return;
      }

      dispatch({
        type: 'SET_BUDGET',
        payload: budgetValue,
      });
    }
  };

    return (
        <div className='alert alert-secondary'>

        <div style={{ whiteSpace: 'nowrap' }}>
        <label htmlFor="budget"> Budget: <span>{currency}</span> </label>
            <input
            required="required"
            type="number"
            id="budget"
            step="10"
            min="1" 
            max="20000"
            value={budget}
             //Simple Validation to only accept number value 
             onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
                }
            }}
            onChange={onChangeBudget}
            ></input>
        </div>
        </div>
    );
};
export default Budget;
