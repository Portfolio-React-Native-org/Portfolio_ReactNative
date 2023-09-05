import weathergif from '../assets/gifs/weather.gif';
import delivergif from '../assets/gifs/deliver.gif';
import mlgif from '../assets/gifs/Innovation.gif';
import iotgif from '../assets/gifs/IoT.gif';


const description ={
    "project_names": [
      "Deliver Buddy",
      "Weather App",
      "Machine Learning Server",
      "weather Station"
    ],
    // add more than 5 lines to display the project description properly
    // gif should be 300x300
    // 
    "projects": [
      {
        "id": 0,
        "title": "Deliver Buddy",
        "gif": delivergif,
        "description": "3rd year mobile application individual project to develop a system to distribute gas from distributor to consumer.The system was developed with user logins and validations, automated refresh and CRUD operations.",
        "technologies": ["Java", "Android Studio", "Firebase", "Google Maps API"],
        "link": "https://gitlab.com/dilina-c/deliver-buddy"
      },
      {
        "id": 1,
        "title": "Weather App",
        "gif": weathergif,
        "description": "A simple weather app developed using Native android. The app uses OpenWeatherMap API to fetch weather data. The app features a menu to search for cities and a 5-day forecast. shows the current weather, temperature, humidity and wind.",
        "technologies": ["Java", "OpenWeatherMap API","Android Studio", "Firebase"],
        "link": "https://gitlab.com/dilina-c/weather"
      },
      {
        "id": 2,
        "title": "Machine Learning Server",
        "gif": mlgif,
        "description": "A server to run machine learning models. The server is developed using Flask and the models are developed using Tensorflow. Request validation, File retrieval from Firebase and error handling were featured with two endpoints and deployed to fly.io.",
        "technologies": [
          "Python",
          "Flask",
          "Firebase realtime database&SDK",
          "SSH"
        ],
        "link": "https://github.com/dilina-c/machine_learning-server"
      },
      {
        "id": 3,
        "title": "Weather Station",
        "gif": iotgif,
        "description": "A weather station developed using ESP32. Weather station developed for working as a stand-alone device and use low power consumption.Features were offline data recording, Implementing Deep Sleep Mode, logging data to Google Sheets.",
        "technologies": [" C++, ", " ESP32, ", " PlatformIO, ", " Google Sheets API"],
        "link": "https://github.com/dilina-c/weather_station_ESP32"
      }
    ],
    "about_me": "I am an enthusiastic software developer with a strong dedication to continuous learning and a passion for exploring cutting-edge technologies. Currently, I am actively pursuing a degree program in Electronics and Information Technology, further enriching my knowledge and honing my skill-set. I thrive in collaborative environments and have successfully contributed to small and medium-sized teams, comprising diverse members from various countries. I excel at quickly grasping new concepts and staying abreast of the latest trends and advancements in my field. I am highly responsive and believe that effective communication is vital to achieving success when collaborating with teams. While I strive for excellence, I embrace mistakes as opportunities for growth and actively learn from them to prevent future repetition."
  }

  export default description;