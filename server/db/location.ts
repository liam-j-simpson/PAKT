import connection from './connection.ts'

//GET LOCATION BY ID
export async function getLocationById(id: number): Promise<Location[]> {
  const db = connection
  return db('location').where('id', id).select()
}

// export async function getWeatherByIdAndDate(db = connection): Promise<Weather>{
//   return db('location').join('location.location_id','monthly_temperature.location_id').where('id', id)
// }
