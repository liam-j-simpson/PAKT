import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { locationsArray } from '../locations.ts'
import { activitiesArray } from '../activities.ts'
import { clothing } from '../clothing.ts'
import { food } from '../food.ts'
import { gear } from '../gear.ts'

function App() {
  //STATE
  const [location, setLocation] = useState('')
  const [activity, setActivity] = useState('')

  const [startDate, setStartDate] = useState<Date | undefined>()
  const [endDate, setEndDate] = useState<Date | undefined>()

  //FILTERED ITEMS
  let filteredGear = []
  if (activity) {
    filteredGear = gear.filter((i) => i.category === activity)
  }

  const filteredClothing = clothing.filter((i) => i.category === activity)

  let filteredFood = []
  let displayedDuration = ''

  if (startDate && endDate) {
    const timeDifference = endDate.getTime() - startDate.getTime()
    const duration = Math.round(timeDifference / (1000 * 3600 * 24))
    displayedDuration = 'duration: ' + duration + ' nights'

    filteredFood = food.filter((i) => i.tripDuration === duration)
  } else {
    filteredFood = []
  }

  // //EVENT HANDLERS
  const handleLocationChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e,
  ) => {
    setLocation(e.target.value)
  }

  const handleActivityChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e,
  ) => {
    setActivity(e.target.value)
  }

  const handleStartDateChange = (
    newDate: React.SetStateAction<Date | undefined>,
  ) => {
    setStartDate(newDate)
  }
  const handleEndDateChange = (date: Date) => {
    setEndDate(date)
  }

  return (
    <>
      <div>
        <header className="header"></header>
        <main className="flex-container">
          <section className="section-left">
            <h1 className="h1-modak">PAKT</h1>
            <form>
              <div>
                <label>
                  <p>Im travelling to</p>
                  <select value={location} onChange={handleLocationChange}>
                    {locationsArray.map((location, index) => (
                      <option key={index} value={location.name}>
                        {location.name}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div>
                <label>
                  <p>for a</p>
                  <select value={activity} onChange={handleActivityChange}>
                    {activitiesArray.map((activity, index) => (
                      <option key={index} value={activity.name}>
                        {activity.name}
                      </option>
                    ))}
                  </select>
                </label>
                <p>trip.</p>
              </div>

              <p>Ill be there from the</p>
              <DatePicker
                placeholderText="Select start date"
                selected={startDate}
                selectsStart
                onChange={handleStartDateChange}
                dateFormat="dd/MM/yyyy"
                startDate={startDate}
              />
              <p>to the</p>
              <DatePicker
                placeholderText="Select end date"
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                onChange={handleEndDateChange}
                dateFormat="dd/MM/yyyy"
              />
            </form>
          </section>
          {location && (
            <section className="section-right">
              <div className="flex-container">
                {location && (
                  <h1 className="h1-inter">
                    {location} {activity} Trip
                  </h1>
                )}
                <div className="temp-duration-container">
                  {location && <h3>Average Temperature: 15°</h3>}
                  <h3>{displayedDuration}</h3>
                </div>
              </div>
              <div>
                {filteredGear.length > 0 && <h3>Gear</h3>}
                <ul>
                  {filteredGear.length > 0 &&
                    filteredGear.map((gear, index) => (
                      <li key={index}>
                        <p className="pill">{gear.name}</p>
                      </li>
                    ))}
                </ul>
                {filteredClothing.length > 0 && <h3>Clothing</h3>}

                <ul>
                  {filteredClothing.length > 0 &&
                    filteredClothing.map((clothing, index) => (
                      <li key={index}>
                        <p className="pill">{clothing.name}</p>
                      </li>
                    ))}
                </ul>
                {filteredFood.length > 0 && <h3>Food</h3>}
                <ul>
                  {filteredFood.length > 0 &&
                    filteredFood.map((food, index) => (
                      <li key={index}>
                        <p className="pill">{food.name}</p>
                      </li>
                    ))}
                </ul>
              </div>
            </section>
          )}
        </main>
        <footer></footer>
      </div>
    </>
  )
}

export default App
