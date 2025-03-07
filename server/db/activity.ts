import db from './connection'

//GET ACTIVITES BY USERID
export async function getActivities(userId) {
  try {
    const activities = await db('activity').where('user_id', userId)
    return activities
  } catch (error) {
    throw new Error(
      `Error getting activities associated to userId: ${userId}, ${error}`,
    )
  }
}

//CREATE ACTIVITY BY USERID

//DELETE ACTIVITY BY USERID

//EDIT ACTIVITY BY USERID
