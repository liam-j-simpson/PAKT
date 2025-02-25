import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { locationsArray } from '../data/locations.ts'
import { activitiesArray } from '../data/activities.ts'
import { clothing } from '../data/clothing.ts'
import { food } from '../data/food.ts'
import { gear } from '../data/gear.ts'
import request from 'superagent'

function App() {
  //STATE
  const [data, setData] = useState()
  const [location, setLocation] = useState('')
  const [activity, setActivity] = useState('')
  const [startDate, setStartDate] = useState<Date | null>()
  const [endDate, setEndDate] = useState<Date | null>()
  const [duration, setDuration] = useState(0)

  // WEATHER API CALL
  const formattedDate = startDate?.toISOString().split('T')[0]
  const URL = `http://api.weatherapi.com/v1/future.json?key=26e378532cea480584f64853252102&q=${location}&dt=${formattedDate}`

  useEffect(() => {
    const fetchData = async (URL: string) => {
      const response = await request.get(URL)
      setData(JSON.parse(response.text))
    }
    location && formattedDate && fetchData(URL)
  }, [location, URL, formattedDate])
  // if start date is within 14 days the forecast api needs to be called instead of the future api

  //FILTERED ITEMS

  const filteredGear = gear.filter((i) => i.category === activity)
  const filteredClothing = clothing.filter((i) => i.category === activity)
  const filteredFood = food.filter((i) => i.tripDuration === duration)

  useEffect(() => {
    const duration = async () => {
      const timeDifference =
        endDate && startDate && endDate.getTime() - startDate.getTime()
      timeDifference &&
        setDuration(Math.round(timeDifference / (1000 * 3600 * 24)))
    }
    duration()
  }, [endDate, startDate])

  // //EVENT HANDLERS
  const handleLocationChange: React.ChangeEventHandler<HTMLSelectElement> = (
    e,
  ) => {
    setLocation(e.target.value)
  }

  const handleActivityChange: React.ChangeEventHandler<
    HTMLSelectElement
  > = async (e) => {
    setActivity(e.target.value)
  }

  return (
    <>
      <header className="pl-16">
        <h1 className="transition delay-150 duration-300 ease-in-out hover:blur-sm">
          PAKT
        </h1>
      </header>
      <main className="mx-8 mb-8">
        <div className="bg-[#38473E] rounded-[20px]">
          <p className="p-8 mb-8 text-[#e7e9de]">
            Designed to streamline the packing process for the busy adventurer.{' '}
            <br />
            PAKT helps you get started with fast templated gear lists catered to
            the weather conditions and length of your trip.
            <br />
            Tell us about your trip below to get started.
          </p>
        </div>

        <div className="bg-[#38473E] rounded-[20px]">
          <form className="grid grid-cols-2 lg:grid-cols-4 p-8 mb-8">
            <p className="mr-1">Location:</p>

            <select
              value={location}
              onChange={handleLocationChange}
              aria-label="location"
              className="bg-[#38473E] text-[#e7e9de] mr-8 mb-4 outline rounded-[20px]"
            >
              {locationsArray.map((location, index) => (
                <option key={index} value={location.name}>
                  {location.name}
                </option>
              ))}
            </select>

            <p className="mr-1 mb-4">Activity:</p>
            <select
              value={activity}
              onChange={handleActivityChange}
              className="bg-[#38473E] text-[#e7e9de] mr-8 outline rounded-[20px] mb-4"
            >
              {activitiesArray.map((activity, index) => (
                <option key={index} value={activity.name}>
                  {activity.name}
                </option>
              ))}
            </select>

            <p className="mr-2">Start Date:</p>
            <DatePicker
              placeholderText="Select start date"
              selected={startDate}
              selectsStart
              onChange={(date: Date | null) => setStartDate(date)}
              dateFormat="dd/MM/yyyy"
              // startDate={startDate}
              className="bg-[#38473E] text-[#e7e9de] outline rounded-[20px] mb-4"
            />
            <p className="mr-2">End Date:</p>
            <DatePicker
              placeholderText="Select end date"
              selected={endDate}
              selectsEnd
              startDate={startDate}
              minDate={startDate}
              onChange={(date: Date | null) => setEndDate(date)}
              dateFormat="dd/MM/yyyy"
              className="bg-[#38473E] text-[#e7e9de] outline rounded-[20px] mb-4"
            />
          </form>
        </div>

        {location && (
          <div className="p-8 bg-[#38473E] rounded-[20px]">
            <div>
              {location && (
                <>
                  <div className="flex justify-between flex-wrap">
                    <div>
                      <h2>
                        {location} {activity} Trip
                      </h2>
                    </div>

                    <div>
                      <p>
                        {data &&
                          `Average Temperature: ${data.forecast.forecastday[0].day.avgtemp_c} °C`}
                      </p>
                      <p>
                        {duration > 0
                          ? 'Duration: ' +
                            duration +
                            (duration > 1 ? ' nights' : ' night')
                          : 'Day trip'}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div>
              {filteredGear.length > 0 && <h3 className="pb-2 pt-4">Gear</h3>}
              <ul className="flex flex-wrap">
                {filteredGear.length > 0 &&
                  filteredGear.map((gear, index) => (
                    <li key={index}>
                      <h4 className="rounded-full px-4 mr-2 my-1.5 bg-[#e7e9de] text-[#38473E]">
                        {gear.name}
                      </h4>
                    </li>
                  ))}
              </ul>
              {filteredClothing.length > 0 && (
                <h3 className="pb-2 pt-8">Clothing</h3>
              )}

              <ul className="flex flex-wrap">
                {filteredClothing.length > 0 &&
                  filteredClothing.map((clothing, index) => (
                    <li key={index}>
                      <h4 className="rounded-full px-4 mr-2 my-1.5 bg-[#e7e9de] text-[#38473E]">
                        {clothing.name}
                      </h4>
                    </li>
                  ))}
              </ul>
              {filteredFood.length > 0 && <h3 className="pb-2 pt-8">Food</h3>}
              <ul className="flex flex-wrap">
                {filteredFood.length > 0 &&
                  filteredFood.map((food, index) => (
                    <li key={index}>
                      <h4 className="rounded-full px-4 mr-2 my-1.5 bg-[#e7e9de] text-[#38473E]">
                        {food.name}
                      </h4>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </main>
    </>
  )
}

export default App
