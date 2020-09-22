import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'

const GoogleMap = ({ config, google }) => {
	const handleClick = (markerProps, marker, clickEvent) => {
		config.link && window && window.open(config.link, '_blank')
	}
	const icon = config.icon
		? {
				url: config.icon,
				anchor: new google.maps.Point(32, 32),
				scaledSize: new google.maps.Size(64, 64),
		  }
		: ''
	return (
		<Map
			className={'gmap'}
			google={google}
			zoom={config.zoom}
			initialCenter={{ lat: config.center.lat, lng: config.center.lng }}>
			<Marker
				title={config.title}
				name={config.title}
				position={{ lat: config.center.lat, lng: config.center.lng }}
				icon={icon}
				onClick={handleClick}
			/>
		</Map>
	)
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBZLEliDhUUlSxi5yjNAB8F9-lDYVVAoYM',
})(GoogleMap)
