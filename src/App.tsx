
import BackgroundImage from "./components/BackgroundImage"
import TicketDesign from "./pages/ticketdesign/TicketDesign"
import TicketForm from "./pages/ticketform/TicketForm"
import {BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
        <BackgroundImage/>
        <Routes>
          <Route path="/" element={<TicketForm/>}/>
          <Route path="/ticket" element={<TicketDesign/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
