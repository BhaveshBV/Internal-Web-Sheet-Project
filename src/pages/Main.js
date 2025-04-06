import {React, useState} from 'react';
import '../style/main.css';

function Main() {

  // State for the checkbox to handle 'Big Coil' state
  const [bigCoil, setBigCoil] = useState(false);

  const handleCheckboxChange = (event) => {
    setBigCoil(event.target.checked);
  };
  return (
    <div className="mainContainer">
        <div className="header">
            Itinerary Detail
        </div>

        <div className="formContainer">
            <form>
                {/* For 1 SQ MM Cables */}
                <h3>
                    1 MM
                    <label id="checkboxLabel">
                    <input  type="checkbox" checked={bigCoil} onChange={handleCheckboxChange} />
                    Big Coil
                    </label>
                </h3>
                
                <div className="inputRow">
                    <div>
                        <label htmlFor="red1">Red</label>
                        <input type="numeric" id="red1" name="red1" placeholder="Red" required />
                    </div>

                    <div>
                        <label htmlFor="yellow1">Yellow</label>
                        <input type="numeric" id="yellow1" name="yellow1" placeholder="ylw." required />
                    </div>

                    <div>
                        <label htmlFor="blue1">Blue</label>
                        <input type="numeric" id="blue1" name="blue1" placeholder="Blue" required />
                    </div>

                    <div>
                        <label htmlFor="black1">Black</label>
                        <input type="numeric" id="black1" name="black1" placeholder="Black" required />
                    </div>
                </div>

                <div className="inputRow">
                    <div>
                        <label htmlFor="green1">Green</label>
                        <input type="numeric" id="green1" name="green1" placeholder="Green" required />
                    </div>
                        
                    <div>
                        <label htmlFor="grey1">Grey</label>
                        <input type="numeric" id="grey1" name="grey1" placeholder="Grey" required />
                    </div>
                        
                    <div>
                        <label htmlFor="white1">White</label>
                        <input type="numeric" id="white1" name="white1" placeholder="White" required />
                    </div>
                </div>

                {/* For 1.5 SQ MM Cables */}
                <h3>
                    1.5 MM
                    <label id="checkboxLabel">
                    <input  type="checkbox" checked={bigCoil} onChange={handleCheckboxChange} />
                    Big Coil
                    </label>
                </h3>

                <div className="inputRow">
                    <div>
                        <label htmlFor="red1_5">Red</label>
                        <input type="numeric" id="red1_5" name="red1_5" placeholder="Red Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="yellow1_5">Yellow</label>
                        <input type="numeric" id="yellow1_5" name="yellow1_5" placeholder="ylw. Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="blue1_5">Blue</label>
                        <input type="numeric" id="blue1_5" name="blue1_5" placeholder="Blue Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="black1_5">Black</label>
                        <input type="numeric" id="black1_5" name="black1_5" placeholder="Black Box Qty." required />
                    </div>

                </div>
                
                
                <div className="inputRow">
                    <div>
                        <label htmlFor="green1_5">Green</label>
                        <input type="numeric" id="green1_5" name="green1_5" placeholder="Green Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="grey1_5">Grey</label>
                        <input type="numeric" id="grey1_5" name="grey1_5" placeholder="Grey Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="white1_5">White</label>
                        <input type="numeric" id="white1_5" name="white1_5" placeholder="White Box Qty." required />
                    </div>

                </div>

            
                {/* For 2.5 SQ MM Cables */}
                <h3>
                    2.5 MM
                    <label id="checkboxLabel">
                    <input  type="checkbox" checked={bigCoil} onChange={handleCheckboxChange} />
                    Big Coil
                    </label>
                </h3>
                 
                <div className="inputRow">
                    <div>
                        <label htmlFor="red2_5">Red</label>
                        <input type="numeric" id="red2_5" name="red2_5" placeholder="Red Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="yellow2_5">Yellow</label>
                        <input type="numeric" id="yellow2_5" name="yellow2_5" placeholder="ylw. Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="blue2_5">Blue</label>
                        <input type="numeric" id="blue2_5" name="blue2_5" placeholder="Blue Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="black2_5">Black</label>
                        <input type="numeric" id="black2_5" name="black2_5" placeholder="Black Box Qty." required />
                    </div>

                </div>
                
                <div className="inputRow">
                    <div>
                        <label htmlFor="green2_5">Green</label>
                        <input type="numeric" id="green2_5" name="green2_5" placeholder="Green Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="grey2_5">Grey</label>
                        <input type="numeric" id="grey2_5" name="grey2_5" placeholder="Grey Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="white2_5">White</label>
                        <input type="numeric" id="white2_5" name="white2_5" placeholder="White Box Qty." required />
                    </div>


                </div>

                {/* For 4 SQ MM Cables */}
                <h3>
                    4 MM
                    <label id="checkboxLabel">
                    <input  type="checkbox" checked={bigCoil} onChange={handleCheckboxChange} />
                    Big Coil
                    </label>
                </h3>
                
                <div className="inputRow">
                    <div>
                        <label htmlFor="red4">Red</label>
                        <input type="numeric" id="red4" name="red4" placeholder="Red Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="yellow4">Yellow</label>
                        <input type="numeric" id="yellow4" name="yellow4" placeholder="ylw. Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="blue4">Blue</label>
                        <input type="numeric" id="blue4" name="blue4" placeholder="Blue Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="black4">Black</label>
                        <input type="numeric" id="black4" name="black4" placeholder="Black Box Qty." required />
                    </div>

                </div>
                
                <div className="inputRow">
                    <div>
                        <label htmlFor="green4">Green</label>
                        <input type="numeric" id="green4" name="green4" placeholder="Green Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="grey4">Grey</label>
                        <input type="numeric" id="grey4" name="grey4" placeholder="Grey Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="white4">White</label>
                        <input type="numeric" id="white4" name="white4" placeholder="White Box Qty." required />
                    </div>


                </div>
                
                {/* For 6 SQ MM Cables */}
                <h3>
                    6 MM
                    <label id="checkboxLabel">
                    <input  type="checkbox" checked={bigCoil} onChange={handleCheckboxChange} />
                    Big Coil
                    </label>
                </h3>
                 
                <div className="inputRow">
                    <div>
                        <label htmlFor="red6">Red</label>
                        <input type="numeric" id="red6" name="red6" placeholder="Red Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="yellow6">Yellow</label>
                        <input type="numeric" id="yellow6" name="yellow6" placeholder="ylw. Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="blue6">Blue</label>
                        <input type="numeric" id="blue6" name="blue6" placeholder="Blue Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="black6">Black</label>
                        <input type="numeric" id="black6" name="black6" placeholder="Black Box Qty." required />
                    </div>

                </div>
                
                <div className="inputRow">
                    <div>
                        <label htmlFor="green6">Green</label>
                        <input type="numeric" id="green6" name="green6" placeholder="Green Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="grey6">Grey</label>
                        <input type="numeric" id="grey6" name="grey6" placeholder="Grey Box Qty." required />
                    </div>

                    <div>
                        <label htmlFor="white6">White</label>
                        <input type="numeric" id="white6" name="white6" placeholder="White Box Qty." required />
                    </div>


                </div>

                

                

                

                

                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
  );
}
export default Main;
