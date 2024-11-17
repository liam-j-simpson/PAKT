import { Router } from 'express'
import * as db from '../db/location.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const location = await db.getLocationTemperatureData()
    console.log(location)

    res.json(location)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
