import { Router } from 'express'

import * as db from '../db/location.ts'

const router = Router()

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    console.log(id)
    const location = await db.getLocationById(id)

    res.json(location)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})


router.get('/:id/:date', async (req, res) => {
  try {
    const {id} = req.params
    
  }
} )

export default router
