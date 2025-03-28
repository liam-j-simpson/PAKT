import { Activity } from 'models/models'
import db from './connection'

//GET ACTIVITIES BY USERID (USERID HARD CODED UNTIL AUTHENTICATION IMPLEMENTED)
export async function getActivities(userId: number) {
  try {
    const activities = await db('activity').where('user_id', userId).select()
    return activities
  } catch (error) {
    throw new Error(
      `Error getting activities associated to userId: ${userId}. ${error}`,
    )
  }
}

//CREATE ACTIVITY BY USERID (USERID HARD CODED UNTIL AUTHENTICATION IMPLEMENTED)
export async function createActivity(data: Activity, userId: number) {
  try {
    const { name } = data
    const createdActivity = await db('activity').insert({
      name,
      user_id: userId,
    })
    return createdActivity
  } catch (error) {
    throw new Error(
      `Error adding activity with data: ${data}, associated to userId: ${userId}. ${error}.`,
    )
  }
}

//DELETE ACTIVITY BY ACTIVITYID AND USERID (USERID HARD CODED UNTIL AUTHENTICATION IMPLEMENTED)
export async function deleteActivity(activityId: number, userId: number) {
  try {
    const deletedActivity = await db('activity')
      .where({ id: activityId, user_id: userId })
      .del()
    return deletedActivity
  } catch (error) {
    throw new Error(`Error deleting activity: ${activityId}`)
  }
}

//EDIT ACTIVITY BY ACTIVITYID AND USERID (USERID HARD CODED UNTIL AUTHENTICATION IMPLEMENTED)
export async function editActivity(
  data: Activity,
  activityId: number,
  userId: number,
) {
  try {
    const editedActivty = await db('activity')
      .where({ id: activityId, user_id: userId })
      .update(data)
    return editedActivty
  } catch (error) {
    throw new Error(`Error editing activity: ${activityId}`)
  }
}
