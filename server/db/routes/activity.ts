import { Router } from 'express'
import {
  getActivities,
  createActivity,
  deleteActivity,
  editActivity,
} from '../activity'

const router = Router()

//GET ACTIVITIES BY USERID
router.get('/', async (_req, res, next) => {
  try {
    const activities = await getActivities(1)
    res.json({ activities })
  } catch (error) {
    next(error)
  }
})

//CREATE ACTIVITY BY USERID
router.post('/', async (req, res, next) => {
  try {
    const { name } = req.body
    await createActivity(name, 1)
    res.sendStatus(201)
  } catch (error) {
    next(error)
  }
})

//PATCH ACTIVITY BY ACTIVITYID AND USERID
router.patch('/:id', async (req, res, next) => {
  try {
    const activityId = Number(req.params.id)
    const name = req.body

    await editActivity(name, activityId, 1)
    res.sendStatus(200)
  } catch (error) {
    next(error)
  }
})

//DELETE ACTIVITY BY ACTIVITYID AND USERID
router.delete('/:id', async (req, res, next) => {
  try {
    const activityId = Number(req.params.id)
    await deleteActivity(activityId, 1)
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
})

export default router
