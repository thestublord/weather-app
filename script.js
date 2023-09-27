// Function to simulate hitting the API
async function fetchWeather(location) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulated JSON response from API
    return {
      location: location,
      temperature: Math.random() * 100,
      condition: 'Sunny'
    };
  }
  
  // Function to process API response and return required data
  function processWeatherData(data) {
    return {
      location: data.location,
      temperature: data.temperature.toFixed(2),
      condition: data.condition
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
      
      // Fetch and process data
      const rawData = await fetchWeather(location);
      const processedData = processWeatherData(rawData);
      
      // Hide loading
      loading.classList.add('hidden');
      
      // Display data
      weatherInfo.textContent = `Location: ${processedData.location}, Temperature: ${processedData.temperature}, Condition: ${processedData.condition}`;
      weatherInfo.classList.remove('hidden');
    });
  });
  