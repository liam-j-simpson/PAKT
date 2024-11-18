export interface Location {
  id: number
  locationId: number
  locationName: string
}

export interface MonthlyTemp {
  id: number
  locationId: number
  month: string
  averageTemp: number
}

export interface LocationTemp extends MonthlyTemp {
  locationName: string
}
