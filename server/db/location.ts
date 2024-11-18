import connection from './connection.ts'
import { LocationTemp } from '../../models/locationTemp.ts'

export async function getLocationAverageTemp(): Promise<LocationTemp[]> {
  const location = await connection('location')
    .join('average_temp', 'location.id', 'average_temp.location_id')
    .select(
      'average_temp.id',
      'average_temp.location_id as locationId',
      'average_temp.month',
      'average_temp.average_temp as averageTemp',
      'location.location_name as locationName',
    )

  return location as LocationTemp[]
}
