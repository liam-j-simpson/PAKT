import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Dashboard />} />
    <Route path="/gear" element={<Gear />} />
    <Route path="/packing" element={<Packing />} />
  </Route>,
)
