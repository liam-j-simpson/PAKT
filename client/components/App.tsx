import { NavLink, Outlet } from 'react-router-dom'

export function App() {
  return (
    <>
      <header className="pl-16">
        <NavLink to="/">
          <h1 className="transition delay-150 duration-300 ease-in-out hover:blur-sm">
            PAKT
          </h1>
        </NavLink>

        <nav className="pb-8 mb-8 text-[#e7e9de]">
          <NavLink to="/gear" className="mr-4">
            Gear
          </NavLink>
          <NavLink to="/packing" className="mr-4">
            Packing
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}
