// Main.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/main.css';

const sizes = ['1', '1_5', '2_5', '4', '6'];
const colors = ['red', 'yellow', 'blue', 'black', 'green', 'grey', 'white'];

function Main_Copy() {
  const [formData, setFormData] = useState({});
  const [coilStates, setCoilStates] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (size) => (e) => {
    setCoilStates(prev => ({ ...prev, [size]: e.target.checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const printData = [];

    sizes.forEach(size => {
      const entries = colors.map(color => {
        const fieldName = `${color}${size}`;
        const val = formData[fieldName];
        return val ? { color: capitalize(color), value: val } : null;
      }).filter(Boolean);

      if (entries.length) {
        printData.push({
          size: size.replace('_', '.'),
          bigCoil: coilStates[size] || false,
          values: entries,
        });
      }
    });

    // Navigate to printable page passing printData in location state
    navigate('/print', { state: { printData } });
  };

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <div className="mainContainer">
      <div className="header">Itinerary Detail</div>

      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          {sizes.map(size => (
            <div key={size}>
              <h3>
                {size.replace('_', '.')} MM
                <label id="checkboxLabel">
                  <input
                    type="checkbox"
                    checked={coilStates[size] || false}
                    onChange={handleCheckboxChange(size)}
                  />
                  Big Coil
                </label>
              </h3>

              <div className="inputRow">
                {colors.map(color => (
                  <div key={`${color}${size}`}>
                    <label htmlFor={`${color}${size}`}>{capitalize(color)}</label>
                    <input
                      type="number"
                      id={`${color}${size}`}
                      name={`${color}${size}`}
                      placeholder={`${capitalize(color)} Box Qty.`}
                      onChange={handleChange}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Main_Copy;
