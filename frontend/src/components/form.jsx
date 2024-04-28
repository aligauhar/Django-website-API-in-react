import { useState } from 'react';
import axios from 'axios';

const FormFrontend = () => {
  const [user_scenario, set_user_scenario] = useState('');
  const [response, setResponse] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send GET request to backend API
      const response = await axios.get(`http://54.183.204.221:80/Fetch_API_Data?user_scenario=${encodeURIComponent(user_scenario)}`);
      
      // Handle response
      setResponse(response.data);
      setErrorMessage(''); // Clear error message on successful response
    } catch (error) {
      console.error('Error sending Scenario:', error);
      setErrorMessage('Error sending Scenario. Please try again.');
    }
  };

  const handleChange = (e) => {
    set_user_scenario(e.target.value); // Update user_scenario state on input change
  };

  return (
    <div className="container mt-3 col-12 form-main-div">
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="user_scenario_input_label">Input Scenario: </label>
            <input
              className="user_scenario_input"
              type="text"
              value={user_scenario}
              onChange={handleChange} 
            />
            <button className='user_scenario_button' type="submit">Find Law </button>
          </div>
          <div>
          <label className="user_scenario_input_label"><h4>API Response: </h4> </label>
          <div>
          <div>
          </div>
          <div>
          <label className="user_scenario_input_label"><b>Relevant Act: </b> </label>
          <label className="user_scenario_input_label">{response.relevant_act}</label>
          </div>
          <div>
          <label className="user_scenario_input_label"><b>Relevant Section: </b> </label>
          <label className="user_scenario_input_label">{response.relevant_section}</label>
          </div>
          <div>
          <label className="user_scenario_input_label"><b>Relevant Sub Section: </b> </label>
          <label className="user_scenario_input_label">{response.Subsectionlist}</label>
          </div>
          
          </div>
            
          </div>
        </form>
      </div>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default FormFrontend;
