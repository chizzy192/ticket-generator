import './backgroundImage.css';
import squigglyMobile from '../assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg'
import squigglyDesktop from '../assets/images/pattern-squiggly-line-bottom-desktop.svg'
import squigglyLine from '../assets/images/pattern-squiggly-line-top.svg'
function BackgroundImage() {
  return (
    <div className='background-container'>
        <div className="background-image" />
        <div className="background-image-overlay" />
        
        <img src={squigglyMobile} alt="Pattern Squiggly Line Bottom" className='pattern-squiggly-line-bottom-mobile'/>
        <img src={squigglyDesktop} alt="Pattern Squiggly Line Bottom" className='pattern-squiggly-line-bottom-desktop'/>
        <img src={squigglyLine} alt="Pattern Squiggly Line Top" className='pattern-squiggly-line-top'/>
    </div>
    
  )
}

export default BackgroundImage
