// Function to fetch weather data using Weather API
async function fetchWeather(location) {
    const apiKey = 'dea82afc531e483d88b84731232609';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    
    return await response.json();
  }
  
  // Function to process API response and return required data
  function processWeatherData(data) {
    return {
      location: data.location.name,
      temperature: data.current.temp_c, // Temperature in Celsius
      condition: data.current.condition.text
    };
  }
  
  // Set up form listener
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weather-form');
    const loading = document.getElementById('loading');
    const weatherInfo = document.getElementById('weather-info');
    
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Show loading
      loading.classList.remove('hidden');
      
      const location = document.getElementById('location-input').value;
      
      try {
        // Fetch and process data
        const rawData = await fetchWeather(location);
        const processedData = processWeatherData(rawData);
        
        // Hide loading
        loading.classList.add('hidden');
        
        // Display data
        weatherInfo.textContent = `Location: ${processedData.location}, Temperature: ${processedData.temperature}°C, Condition: ${processedData.condition}`;
        weatherInfo.classList.remove('hidden');
      } catch (error) {
        // Hide loading and show error
        loading.classList.add('hidden');
        weatherInfo.textContent = 'Failed to fetch weather data';
        weatherInfo.classList.remove('hidden');
      }
    });
  });
  