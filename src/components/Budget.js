import React, { useState } from 'react';

const Budget = () => {
  const [budget, setBudget] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleBudgetSubmit = (e) => {
    e.preventDefault();
    setBudget(parseFloat(inputValue));
    setInputValue('');
  };

  return (
    <div>
      <h2>Budget: ${budget.toFixed(2)}</h2>
      <form onSubmit={handleBudgetSubmit}>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter budget"
        />
        <button type="submit">Set Budget</button>
      </form>
    </div>
  );
};

export default Budget;
