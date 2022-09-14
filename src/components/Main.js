// Pages are based on URL
// components are children of pages i.e. sidebar, nav, header, footer, etc


import { Routes, Route } from "react-router-dom"
import Species from "../pages/Species"
import Show from "../pages/Show"


const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Species />} />
        <Route path="/invasivespecies/:id" element={<Show />} />
      </Routes>
    </main>
  )
}

export default Main
