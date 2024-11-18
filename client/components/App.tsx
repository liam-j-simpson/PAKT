import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function App() {
  //STATE
  const [location, setLocation] = useState('')
  const [activity, setActivity] = useState('')

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)

  //DERIVED STATES
  const gear = [
    { name: 'bike', category: 'bikepacking' },
    { name: 'pack', category: 'hiking' },
  ]

  const clothing = [
    { name: 'cycling jacket', category: 'bikepacking' },
    { name: 'cycling helmet', category: 'bikepacking' },
    { name: 'mountaineering helmet', category: 'mountaineering' },
    { name: 'rope', category: 'mountaineering' },
  ]

  const food = [
    { name: '3 dehydrated meals', tripDuration: 2 },
    { name: '3 breakfasts', tripDuration: 2 },
    { name: '3 dinners', tripDuration: 2 },
    { name: '120grams of coffee', tripDuration: 2 },
    { name: '2 dehydrated meals', tripDuration: 1 },
    { name: '2 breakfasts', tripDuration: 1 },
    { name: '2 dinners', tripDuration: 1 },
    { name: '80grams of coffee', tripDuration: 1 },
  ]

  //FILTERED ITEMS
  let filteredGear = []
  if (activity) {
    filteredGear = gear.filter((i) => i.category === activity)
    console.log('filteredGear', filteredGear)
  }

  const filteredClothing = clothing.filter((i) => i.category === activity)
  console.log('filteredClothing', filteredClothing)

  let filteredFood = []
  let duration = 0
  if (startDate && endDate) {
    const timeDifference = endDate.getTime() - startDate.getTime()
    duration = Math.round(timeDifference / (1000 * 3600 * 24))
    console.log('duration', duration)

    filteredFood = food.filter((i) => i.tripDuration === duration)
    console.log('filteredFood', filteredFood)
  } else {
    filteredFood = []
  }

  // //EVENT HANDLERS
  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }

  const handleActivityChange = (e) => {
    setActivity(e.target.value)
  }

  const handleStartDateChange = (newDate) => {
    setStartDate(newDate)
  }

  const handleEndDateChange = (newDate) => {
    setEndDate(newDate)
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
                  <p>Im going to</p>
                  <select value={location} onChange={handleLocationChange}>
                    <option value="Kaitaia">Kaitaia</option>
                    <option value="Whangarei">Whangarei</option>
                    <option value="Auckland">Auckland</option>
                    <option value="Tauranga">Tauranga</option>
                    <option value="Hamilton">Hamilton</option>
                    <option value="Rotorua">Rotorua</option>
                    <option value="Gisborne">Gisborne</option>
                    <option value="Taupo">Taupo</option>
                    <option value="New Plymouth">New Plymouth</option>
                    <option value="Napier">Napier</option>
                    <option value="Whanganui">Whanganui</option>
                    <option value="Palmerston North">Palmerston North</option>
                    <option value="Masterton">Masterton</option>
                    <option value="Wellington">Wellington</option>
                    <option value="Nelson">Nelson</option>
                    <option value="Taranaki">Taranaki</option>
                    <option value="Blenheim">Blenheim</option>
                    <option value="Westport">Westport</option>
                    <option value="Kaikoura">Kaikoura</option>
                    <option value="Hokitika">Hokitika</option>
                    <option value="Christchurch">Christchurch</option>
                    <option value="Mt Cook">Mt Cook</option>
                    <option value="Lake Tekapo">Lake Tekapo</option>
                    <option value="Timaru">Timaru</option>
                    <option value="Milford Sound">Milford Sound</option>
                    <option value="Queenstown">Queenstown</option>
                    <option value="Alexandra">Alexandra</option>
                    <option value="Manapouri">Manapouri</option>
                    <option value="Dunedin">Dunedin</option>
                    <option value="Invercargill">Invercargill</option>
                    <option value="Chatham Islands">Chatham Islands</option>
                  </select>
                </label>
              </div>

              <div>
                <label>
                  <p>for a</p>
                  <select value={activity} onChange={handleActivityChange}>
                    <option value="hiking">Hiking</option>
                    <option value="bikepacking">Bikepacking</option>
                    <option value="mountaineering">Mountaineering</option>
                  </select>
                </label>
                <p>trip.</p>
              </div>

              <p>I'll be there from the</p>
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
          <section className="section-right">
            <div className="flex-container">
              <h1 className="h1-inter">
                {location} {activity}
              </h1>
              <h3>Average Temperature: 15°</h3>
              <h3>Duration: {duration} days</h3>
            </div>
            <div>
              <h3>Gear</h3>
              <ul>
                {filteredGear.length > 0 &&
                  filteredGear.map((gear, index) => (
                    <li key={index}>
                      <p className="pill">{gear.name}</p>
                    </li>
                  ))}
              </ul>

              <h3>Clothing</h3>
              <ul>
                {filteredClothing.map((clothing, index) => (
                  <li key={index}>
                    <p className="pill">{clothing.name}</p>
                  </li>
                ))}
              </ul>

              <h3>Food</h3>
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
        </main>
        <footer></footer>
      </div>
    </>
  )
}

export default App
