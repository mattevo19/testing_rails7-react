// import ReactWeather from 'react-open-weather';
// import {useWeatherBit} from 'react-open-weather';
// import h from "components/htm_create";

// const Weather = () => {
//   // const { data, isLoading, errorMessage } = useOpenWeather({
//   //   key: '9211950aab3d45caee76becd137e6f66',
//   //   lat: '48.137154',
//   //   lon: '11.576124',
//   //   lang: 'en',
//   //   unit: 'metric', // values are (metric, standard, imperial)
//   // });
//   const { data, isLoading, errorMessage } = useWeatherBit({
//   key: '07c4ba5c08bf4b7da16c23855a342a50',
//   lat: '48.137154',
//   lon: '11.576124',
//   lang: 'en',
//   unit: 'M', // values are (M,S,I)
// });

//   return h`<${ReactWeather}
//       isLoading=${isLoading}
//       errorMessage=${errorMessage}
//       data=${data}
//       lang="en"
//       locationLabel="Munich"
//       unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
//       showForecast
//     />`
//   ;
// };

// export default Weather
