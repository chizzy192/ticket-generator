
import Header from '../../components/header/Header'
import './style.css'
import logo from '../../assets/images/logo-mark.svg'
import avatar from '../../assets/images/image-avatar.jpg'
import githubicon from '../../assets/images/icon-github.svg'
import patternCircle from '../../assets/images/pattern-circle.svg'
import { useFormStore } from '../../store/useFormStore'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const defaultAvatar = avatar;

function HeaderText({fullName = 'Jonatan Krisof', email = 'jonatan@example.com'}: {fullName?: string, email?: string}) {
    return <div className='headerText header-ticket'>
        <h1>
             Congrats, <span className='colored-text'>{fullName+'!'}</span> 
             <div>
              Your ticket is ready.
             </div>
             
        </h1>
        <p className='header-p p-ticket'>
            We've emailed your ticket to <span className='colored-email'>{email}</span> and will send updates in the run up to the event.
        </p>
    </div>
}

function TicketDesign() {
  const navigate = useNavigate();
  const avatar = useFormStore((state) => state.avatar);
  const fullName = useFormStore((state) => state.fullName);
    const [previewUrl, setPreviewUrl] = useState<string>(defaultAvatar);

    useEffect(() => {
        // Check if user has submitted form data
        if (!fullName || !fullName.trim()) {
            navigate('/', { replace: true });
            return;
        }
    }, [navigate, fullName]);

    useEffect(() => {
        if (avatar) {
            const url = URL.createObjectURL(avatar);
            setPreviewUrl(url);
            return () => URL.revokeObjectURL(url);
        }
    }, [avatar]);
    
  return (
    <>
      <Header>
        <HeaderText fullName={useFormStore((state) => state.fullName)} email={useFormStore((state) => state.email)}/>
      </Header>
      <main className='ticket-design-page'>
          <img src={patternCircle} alt="Pattern Circle" className="background-pattern-circle2-ticket"/>
              
          <section className='ticket-section'>

            <div className='ticket-container'>
              {/* 1. The Background Layer */}
              <div className='ticket-img'></div>

              {/* 2. The Content Layers */}
              <figure className='avatar'>
                <img src={previewUrl} alt="Avatar" />
                <figcaption>
                    <h2>{useFormStore((state) => state.fullName)}</h2>
                    <p><img src={githubicon} alt="Github" /> {useFormStore((state) => state.githubUsername)}</p>
                </figcaption>
              </figure>

              <figure className='logo'>
                <img src={logo} alt="Logo" />
                <figcaption>
                    <h2>Coding Conf</h2>
                    <p className='ticket-date'>Jan 31, 2025 &nbsp;/ &nbsp;Austin, TX</p>
                </figcaption>
              </figure>

              <p className='ticket-code'>{useFormStore((state) => state.id || '#06009')}</p>
            </div>
              
              {/* <img src={patternCircle} alt="Pattern Circle" className="background-pattern-circle3-ticket"/> */}
          </section>
      </main>
    </>
  )
}

export default TicketDesign
