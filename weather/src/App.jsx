import {useState} from 'react'
import axios from 'axios'


  export default function App() {
  
  const [data,setData]=useState({})
  const [location,setlocation] = useState('')
  
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=47c9b1c0ca8d035d73704fdbda8493c1`

    const searchLocation = (event) => {
      if (event.key === 'Enter') {
        axios.get(url).then((response) => {
          setData(response.data)
          console.log(response.data)
        })
        setlocation('')
      }
    }


  
  return (
    <div className='app'>
      <div className="search">
        <input 
        value={location}
        onChange={event=>setlocation(event.target.value)}
        onKeyDown={searchLocation}

        placeholder='enter location'
        type='text'
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location"> 
          <p>{data.name}</p></div>
          <div className="temp">
            <h1>{data.main ? <h1>{data.main.temp}</h1>:null}°C</h1>
          </div> 

          <div className="descriptive">
            {data.weather ? <p>{data.weather[0].main}</p>:null}
          </div>
        </div>
          


{data.name !=undefined &&         
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like}°C</p>:null}
            <p className='bold'></p>
            <p>feels like </p>
          </div>
          <div className="humidity">
            
            <p className='bold'>Humidity</p>
            {data.main ? <p className='bold'>{data.main.humidity}%</p>:null}
          </div>
          <div className="wind">
          {data.wind ? <p className='bold'>{data.wind.speed}</p>:null}            
            <p>wind speed</p>
          </div>
        </div>
  }
      </div>
    </div>
  )
}


