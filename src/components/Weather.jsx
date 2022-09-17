import WeatherInfo from './WeatherInfo'
import {useState, useEffect} from 'react'

export default function Weather(){

	const key = '3a56dbefcf624adbb2c11324221709'
	const [city, setCity] = useState("")
	const [weather, setWeather] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getWeather()
	}, [])

	async function getWeather(city = "london"){
		try{
			const request = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`)
			const response = await request.json()
			setLoading(false)
			setWeather(response)
		}catch(error){
			console.log(error)
		}
	}

	const handleChange = (e) => {
		const value = e.target.value;
		if(value !== ''){
			setCity(value)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setWeather(null)
		getWeather(city)
		setCity('')
		setLoading(true)
		

	}

	return (
		<div className="container text-center mt-4 py-4">
			<h1 className="btn btn-light p-2">Weather</h1>
			<form onSubmit={handleSubmit}>
				<div className="form-group d-flex">
					<input type="text" className="form-control"
					placeholder="Type a city"
					value={city} 
					onChange={handleChange} />
					<button className="btn btn-info btn-sm"> 
						Buscar
					</button>
				</div>
			</form>
			<hr/>
			{
				loading ? 
				<div className="spinner-border" role="status">
  					<span className="sr-only">Loading...</span>
				</div> : 
				<WeatherInfo weather={weather}/>
			}
		</div>
	)
}