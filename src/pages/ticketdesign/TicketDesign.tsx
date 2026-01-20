
import Header from '../../components/header/Header'
import './style.css'
import ticket from '../../assets/images/pattern-ticket.svg'
import logo from '../../assets/images/logo-mark.svg'
function HeaderText() {
    return <div className='headerText header-ticket'>
        <h1>
             Congrats, <span className='colored-text'>Jonatan Kristof!</span> Your ticket is ready.
        </h1>
        <p className='header-p p-ticket'>
            We've emailed your ticket to <span className='colored-email'>jonatan@gmail.com</span> and will send updates in the run up to the event.
        </p>
    </div>
}

function TicketDesign() {
  return (
    <main>
        <section>
            <Header>
                <HeaderText/>
            </Header>
        </section>
        <section className=''>
            {/* <img src={ticket} alt="" className='ticket-img'/> */}
            <div className='ticket'>
                <div className='logo'>
                    <img src={logo} alt="" />
                    <h2>
                        Coding Conf
                    </h2>
                </div>
            </div>
        </section>
    </main>
  )
}

export default TicketDesign
