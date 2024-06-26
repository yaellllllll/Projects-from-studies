import React, { useState } from 'react';
import axios from 'axios';

const TreatPage = () => {
  const [cityName, setCityName] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('YOUR_SERVER_ENDPOINT', { city: cityName });
      console.log('City name sent to server:', cityName);
      console.log('Server response:', response.data); // Handle server response as needed
    } catch (error) {
      console.error('Error sending city name to server:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCityName(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter City Name:
          <input
            type="text"
            value={cityName}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Send to Server</button>
      </form>
    </div>
  );
};

export default TreatPage;
