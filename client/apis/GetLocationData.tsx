import request from 'superagent'
import dotenv from 'dotenv'
import { useEffect, useState } from 'react'

export function GetLocationData() {
  dotenv.config()
  const [data, setData] = useState(null)

  const getLocationTempData = async () => {
    try {
      const key = process.env.WEATHER_API_URL
      const response = await request.get(
        `http://api.weatherapi.com/v1/future.json?key=${key}&q=Tauranga&dt=2025-07-30`,
      )

      setData(response.body.forecast.forecastday[0].avgtemp_c)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getLocationTempData()
  }, [])

  return (
    <div>
      <h1>HELLO</h1>
      {data && <h1>{data}</h1>}
    </div>
  )
}
