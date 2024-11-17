import connection from './connection.ts'
import { LocationTemperatureData } from '../../models/location.ts'

export async function getLocationTemperatureData(): Promise<
  LocationTemperatureData[]
> {
  const location = await connection('location')
    .join(
      'monthly_temperature',
      'location.id',
      'monthly_temperature.location_id',
    )
    .select(
      'monthly_temperature.id',
      'monthly_temperature.location_id as locationId',
      'monthly_temperature.month',
      'monthly_temperature.average_temp as averageTemp',
      'location.location_name as locationName',
    )

  return location as LocationTemperatureData[]
}

// export async function getEventsByDay(day: number): Promise<Event[]> {
//   const events = await connection('events')
//     .join('locations', 'events.location_id', 'locations.id')
//     .where('events.day', day)
//     .select(
//       'events.id',
//       'events.day',
//       'events.time',
//       'events.name as eventName',
//       'events.description',
//       'locations.name as locationName',
//     )

//   return events
// }
