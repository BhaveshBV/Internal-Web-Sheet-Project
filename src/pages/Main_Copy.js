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

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   const numValue = value === '' ? '' : Number(value);
  //   if (value === '' || !isNaN(numValue)) {
  //     setFormData(prev => ({ ...prev, [name]: numValue }));
  //   }
  // };
  

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
          size: size.replace('_', '.') + " MM",
          bigCoil: coilStates[size] || false,
          values: entries,
        });
      }
    });

    if (formData["cat6"]) {
      printData.push({
        size: "CAT 6 Cable",
        bigCoil: false,
        values: [{ color: "", value:formData["cat6"] + " Meter" }],
      })
    };
    
    if (formData["channel"]) {
      printData.push({
        size: "Channel Cable",
        bigCoil: false,
        values: [{ color: "", value:formData["channel"]  + " Meter"}],
      })
    };

    if (formData["fiber"]) {
      printData.push({
        size: "Fiber Optic Cable",
        bigCoil: false,
        values: [{ color: "", value:formData["fiber"] + " Meter" }],
      })
    };

    if (formData["taperole"]) {
      printData.push({
        size: "Tape Role",
        bigCoil: false,
        values: [{ color: "", value:formData["taperole"]  }],
      })
    };
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
          <h3>
            CAT 6
          </h3>
          <div>
            <label htmlFor="cat6"></label>
            <input className = 'inputRow' type="number" id='cat6' name='cat6'placeholder='In Meters' onChange={handleChange}
            />
          </div>

          <h3>
            Channel Cable
          </h3>
          <div>
            <label htmlFor="channel"></label>
            <input className = 'inputRow' type="number" id='channel' name='channel'placeholder='In Meters' onChange={handleChange}
            />
          </div>

          <h3>
            Fiber Optic Cable
          </h3>
          <div>
            <label htmlFor="fiber"></label>
            <input className = 'inputRow' type="number" id='fiber' name='fiber'placeholder='In Meters' onChange={handleChange}
            />
          </div>

          <h3>
            Tape Roles
          </h3>
          <div>
            <label htmlFor="taperole"></label>
            <input className = 'inputRow' type="number" id='taperole' name='taperole' placeholder='In numbers' onChange={handleChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Main_Copy;
