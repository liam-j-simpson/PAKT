import request from 'superagent'

export async function getActivity() {
  try {
    const res = await request.get('/api/v1/activities/')
    return res.body.activities
  } catch (error) {
    console.error(error)
  }
}

export async function createActivity(name: string) {
  try {
    const res = await request.post('/api/v1/activities').send({ name })
    return res.body
  } catch (error) {
    console.error(error)
  }
}

export async function deleteActivity(id: number) {
  try {
    const res = await request.delete(`/api/v1/activities/${id}`)
    return res.body
  } catch (error) {
    console.error(error)
  }
}

export async function editActivity(id: number, data: string) {
  try {
    const res = await request.patch(`/api/v1/activities/${id}`).send({ data })
    return res.body
  } catch (error) {
    console.error(error)
  }
}

export async function getGear(activityId: number, userId: number) {
  try {
    const res = await request
      .get('/api/v1/gear')
      .query({ activityId, userId: 1 })
    console.log('activityId', userId)

    return res.body.gear
  } catch (error) {
    console.error(error)
  }
}
