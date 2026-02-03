import './backgroundImage.css';
import squigglyMobile from '../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg'
import squigglyDesktop from '../assets/images/pattern-squiggly-line-bottom-desktop.svg'
import squigglyLine from '../assets/images/pattern-squiggly-line-top.svg'

function BackgroundImage({ children }: { children: React.ReactNode }) {
  return (
    <>
    
    <div className='background-container' aria-hidden="true">
        <div className="background-image" />
        <div className="background-image-overlay" />
        
        <img src={squigglyMobile} alt="" className='pattern-squiggly-line-bottom-mobile'/>
        <img src={squigglyDesktop} alt="" className='pattern-squiggly-line-bottom-desktop'/>
        <img src={squigglyLine} alt="" className='pattern-squiggly-line-top'/>
    </div>
      {children}
    </>
  )
}

export default BackgroundImage
