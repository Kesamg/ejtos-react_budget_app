import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);

  const [isOpen, setIsOpen] = useState(false);

  const setCurrency = (currency) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: currency,
    });
  };

  const currencyLabel = ()=> {
    switch(currency){
      case '$' :
        return '$ Dollar'
      case '£' :
        return '£ Pound'
      case '€' :
        return '€ Euro'
      case '₹' :
        return '₹ Ruppee'
      default:
        return ''
    }
  }

  return (
    <div id="currency-menu" className="dropdown" style={{ cursor: 'pointer' }}>
      <button
        id="currency-menu-button"
        className="btn dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ backgroundColor: '#93E399', color: '#fff' }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Currency {'('}{currencyLabel()}{')'}
      </button>
      <ul className={`custom-menu dropdown-menu ${isOpen ? 'show' : ''} `}>
        <li style={{ backgroundColor: '#93E399'}}>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrency('$')}
          >
           $ Dollar
          </button>
        </li>
        <li style={{ backgroundColor: '#93E399'}}>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrency('£')}
          >
           £ Pound
          </button>
        </li>
        <li style={{ backgroundColor: '#93E399'}}>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrency('€')}
          >
           € Euro
          </button>
        </li>
        <li style={{ backgroundColor: '#93E399'}}>
          <button
            className="dropdown-item"
            type="button"
            onClick={() => setCurrency('₹')}
          >
           ₹ Ruppee
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Currency;