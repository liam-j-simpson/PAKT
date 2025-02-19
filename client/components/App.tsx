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
        <header className="place-items-center">
          <h1 className="text-red-100">PAKT</h1>
        </header>
        <main>
          <section className="bg-[#38473E] rounded-[5vw] place-items-center">
            <form className="grid grid-cols-9">
              <p>Im travelling to</p>
              <div>
                <select
                  value={location}
                  onChange={handleLocationChange}
                  aria-label="location"
                  className="rounded-full bg-[#FFCB10] text-[#38473E]"
                >
                  {locationsArray.map((location, index) => (
                    <option key={index} value={location.name}>
                      {location.name}
                    </option>
                  ))}
                </select>
              </div>

              <p>for a</p>
              <div>
                <select
                  value={activity}
                  onChange={handleActivityChange}
                  className="rounded-full bg-[#FFCB10] text-[#38473E]"
                >
                  {activitiesArray.map((activity, index) => (
                    <option key={index} value={activity.name}>
                      {activity.name}
                    </option>
                  ))}
                </select>
              </div>
              <p>trip.</p>

              <p>Ill be there from the</p>
              <DatePicker
                placeholderText="Select start date"
                selected={startDate}
                selectsStart
                onChange={handleStartDateChange}
                dateFormat="dd/MM/yyyy"
                startDate={startDate}
                className="rounded-full bg-[#FFCB10] text-[#38473E]"
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
                className="rounded-full bg-[#FFCB10] text-[#38473E]"
              />
            </form>
          </section>

          {location && (
            <section className="bg-[#38473E] rounded-[5vw]">
              <div className="flex">
                {location && (
                  <div className="justify-start">
                    <p>
                      {location} {activity} Trip
                    </p>
                  </div>
                )}

                {location && (
                  <div className="justify-end">
                    <p> Average Temperature: 15°</p>
                  </div>
                )}
                <div className="justify-end">
                  <p>{displayedDuration}</p>
                </div>
              </div>

              <div>
                {filteredGear.length > 0 && <h3>Gear</h3>}
                <ul className="flex">
                  {filteredGear.length > 0 &&
                    filteredGear.map((gear, index) => (
                      <li key={index}>
                        <p className="rounded-full bg-[#FFCB10] text-[#38473E]">
                          {gear.name}
                        </p>
                      </li>
                    ))}
                </ul>
                {filteredClothing.length > 0 && <h3>Clothing</h3>}

                <ul className="flex">
                  {filteredClothing.length > 0 &&
                    filteredClothing.map((clothing, index) => (
                      <li key={index}>
                        <p className="rounded-full bg-[#FFCB10] text-[#38473E]">
                          {clothing.name}
                        </p>
                      </li>
                    ))}
                </ul>
                {filteredFood.length > 0 && <h3>Food</h3>}
                <ul className="flex">
                  {filteredFood.length > 0 &&
                    filteredFood.map((food, index) => (
                      <li className="pr-6" key={index}>
                        <p className="rounded-full bg-[#FFCB10] text-[#38473E]">
                          {food.name}
                        </p>
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
