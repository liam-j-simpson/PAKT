import { Router } from 'express'
import {
  getActivities,
  createActivity,
  deleteActivity,
  editActivity,
} from '../activity'

const router = Router()

//GET ACTIVITIES BY USERID
router.get('/', async (req, res, next) => {
  try {
    const activities = await getActivities(userId)
  } catch (error) {
    throw new Error()
  }
})

//CREATE ACTIVITY
router.post('/', async (req, res, next) => {
  try {
    const createdActivity = await createActivity(data)
  } catch (error) {}
})

//DELETE ACTIVITY BY USERID
router.patch('/:id', async (req, res, next) => {
  try {
    const editedActivty = await editActivity(data, activityId)
  } catch (error) {}
})

//EDIT ACTIVITY BY USERID
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedActivity = await deleteActivity(activityId)
  } catch (error) {}
})
