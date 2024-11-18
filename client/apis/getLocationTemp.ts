import request from 'superagent'
import { LocationTemp } from '../../models/locationTemp'

export function getLocationTempData(): Promise<LocationTemp[]> {
  return request.get('/api/v1/LocationTemperatureData').then((res) => {
    return res.body
  })
}
