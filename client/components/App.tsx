import { useState } from 'react'

function App() {
  //STATE
  const [Location, setLocation] = useState('')
  const [Duration, setDuration] = useState('')
  const [Activity, setActivity] = useState('')

  //DERIVED STATES

  const filteredGear = {}

  const filteredClothing = {}

  const filteredFood = {}

  //EVENT HANDLERS
  const handleLocationChange = () => {}

  const handleDurationChange = () => {}

  const handleActivityChange = () => {}

  return (
    <>
      <div>
        <header className="header"></header>
        <main className="flex-container">
          <section className="section-left">
            <h1 className="h1-modak">PAKT</h1>
            <form>
              <p>Im going to</p>
              <input placeholder="Taranaki"></input>
              <p>on the</p>
              <input placeholder="4th-8th November"></input>
              <p>for a</p>
              <input placeholder="hiking trip"></input>
            </form>
          </section>
          <section className="section-right">
            <div className="flex-container">
              <h1 className="h1-inter">Location, Activity</h1>
              <h3>Average Temperature: 15°</h3>
            </div>
            <div>
              <h3>Gear</h3>
              <p className="pill">
                Backpack, Stove, Tent, Sleeping Bag, Sleeping Mat, Headtorch
              </p>
              <h3>Clothing</h3>
              <p className="pill">Jacket</p>
              <p className="pill">
                {' '}
                Hat, Midlayer, Thermal Baselayer - Top, Thermal Baselayer -
                Bottom, Shoes
              </p>
              <h3>Food</h3>
              <p className="pill">
                Dehydrated Food, Breakfast, Coffee/Tea, Lunch, Water
              </p>
            </div>
          </section>
        </main>
        <footer></footer>
      </div>
    </>
  )
}

export default App
