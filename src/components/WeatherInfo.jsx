
export default function WeatherInfo({weather}){

	return (
		<div className="card">
			<div className="card-header text-left d-flex justify-content-between align-items-center">
				<p className="h5">{`${weather?.current.temp_c}°C`}</p>
				<p className="h5">{weather?.current.condition.text}</p>
				<img src={`http:${weather?.current.condition.icon}`} />
			</div>
			<div className="card-body p-0">
				<iframe src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d62413.19142002789!2d${weather?.location.lon}!3d${weather?.location.lat}8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sni!4v1663379149725!5m2!1ses!2sni`} 
				width="100%" height="450" style={{border: '0'}} allowFullScreen="" loading="lazy" 
				referrerPolicy="no-referrer-when-downgrade">
				</iframe>
			</div>
			<div className="card-footer text-center">
				<p className="h5">{weather?.location.name} - {weather?.location.country}</p>
			</div>
		</div>
	)
}