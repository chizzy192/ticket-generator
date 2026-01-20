import logofull from '../../assets/images/logo-full.svg'
import './header.css'

function Header({ children }: { children?: React.ReactNode }) {
  return (
    <header>
      <img src={logofull} alt="Conference Ticket Generator Logo" className='logofull' />
      {children}
    </header>
  )
}

export default Header
