import { Gear } from 'models/models'
import { useGetGear } from './hooks/useGetGear'

export function ActivityCard({ activityName, activityId, userId }) {
  const { data, error, isPending, isError } = useGetGear(activityId, userId)

  if (isPending) {
    ;<h3>Loading...</h3>
  }
  if (isError) {
    ;<h3>{`${error}`}</h3>
  }
  if (data) {
    return (
      <>
        <h2>
          {activityName} {activityId}
        </h2>
        <ul>
          {data.map((element: Gear, index: number) => (
            <li key={index}>
              <p>{element.gearName}</p>
            </li>
          ))}
        </ul>
      </>
    )
  }
}
