class Weather {
    constructor(zip) {
        this.apiKey = "39b50f75fae6ac926b52f2ad94f519e7";
        this.zip = zip
    }

    // Fetch weather from API

    async getWeather() {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?zip=${this.zip},us&appid=${this.apiKey}`
        );

        const responseData = await response.json();

        return responseData;
    }
}

export default Weather;