export interface Location {
  id: number
  locationId: number
  locationName: string
}

export interface MonthlyTemperature {
  id: number
  locationId: number,
  month: string,
  averageTemp: number
}


export interface LocationTemperatureData extends MonthlyTemperature{
  locationName: string
  
}