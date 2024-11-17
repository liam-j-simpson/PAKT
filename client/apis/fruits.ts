import request from 'superagent'
import { LocationTemperatureData } from '../../models/location'

const rootUrl = '/api/v1'

export function getFruits(): Promise<string[]> {
  return request.get(rootUrl + '/fruits').then((res) => {
    return res.body.fruits
  })
}

export function getLocationTemperatureData(): Promise<
  LocationTemperatureData[]
> {
  return request.get('/api/v1/LocationTemperatureData').then((res) => {
    return res.body
  })
}
