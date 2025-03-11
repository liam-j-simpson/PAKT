import { Activity } from 'models/models'
import db from './connection'

//GET ACTIVITIES BY USERID
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

//CREATE ACTIVITY
export async function createActivity(data: Activity, userId: number) {
  try {
    const { id, name } = data
    const createdActivity = await db('activity').insert({
      id,
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

//DELETE ACTIVITY BY USERID
export async function deleteActivity(activityId: number) {
  try {
    const deletedActivity = await db('activity').where({ activityId }).del()
    return deletedActivity
  } catch (error) {
    throw new Error(`Error deleting activity: ${activityId}`)
  }
}

//EDIT ACTIVITY BY USERID
export async function editActivity(data: Activity, activityId: number) {
  try {
    const editedActivty = await db('activity')
      .where({ activityId })
      .update({ data })
    return editedActivty
  } catch (error) {
    throw new Error(`Error editing activity: ${activityId}`)
  }
}
