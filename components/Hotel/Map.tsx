import React, { useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

export default function Map() {

    useEffect(() => {
            mapboxgl.accessToken = 'pk.eyJ1IjoiZGV2b2xlZ292aWNoIiwiYSI6ImNsbDBqNzJpcDF1YTczY216ZDEwdXhkd2IifQ.YS24fRbk-I43rMr9q2v0fQ'
            const mapInstance = new mapboxgl.Map({
              container: 'map-container',
              style: 'mapbox://styles/mapbox/streets/v1',
              center: [25.2048, 55.2708],
              zoom: 10
            })
        
        
        
            return () => {
                mapInstance.remove()
            }
    }, [])


  return (
    <div>Map</div>
  )
}
