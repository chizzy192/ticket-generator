import './ticketform.css'
import Header from '../../components/header/Header'
import FormInput from '../../components/formInput/FormInput'
import ImageInput from '../../components/imageInput/ImageInput'
import patternCircle from '../../assets/images/pattern-circle.svg'
import { useFormStore } from '../../store/useFormStore'
import { useNavigate } from 'react-router-dom'

function HeaderText() {
    return <div className='headerText'>
        <h1>
            Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <p className='header-p'>
            Secure your spot at next year's biggest coding conference.
        </p>
    </div>
}


function TicketForm() {
  const navigate = useNavigate();
  const { updateField, setEmailError, setFullNameError, setImageError, emailError } = useFormStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const state = useFormStore.getState();
        const trimmedFullName = state.fullName.trim();
        const trimmedEmail = state.email.trim();
        let hasErrors = false;

        // Validate full name
        if (!trimmedFullName) {
            setFullNameError("Full Name is required");
            hasErrors = true;
        } else {
            setFullNameError('');
        }
        
        // Validate email
        if (!trimmedEmail) {
            setEmailError("Email is required");
            hasErrors = true;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(trimmedEmail)) {
                setEmailError("Please enter a valid email address");
                hasErrors = true;
            } else {
                setEmailError('');
            }
        }

        // Validate image
        if (!state.avatar) {
            setImageError("Upload your photo (JPG or PNG, max size: 500KB).");
            hasErrors = true;
        } else {
            setImageError('');
        }

        if (hasErrors) {
            return;
        }

        // Generate unique ID in format #01609
        const randomNum = Math.floor(Math.random() * 100000);
        const uniqueId = `#${randomNum.toString().padStart(5, '0')}`;
        updateField('id', uniqueId);
        navigate('/ticket', { replace: true });
    };
  
    return (
    <main className='ticket-form-page'>
      <img src={patternCircle} alt="Pattern Circle" className="background-pattern-circle"/>
      <img src={patternCircle} alt="Pattern Circle" className="background-pattern-circle2"/>
      
          
      <section>
        <Header>
          <HeaderText/>
        </Header>
      </section>

      <section>
        <form action="" onSubmit={handleSubmit}>
          <ImageInput/>
          <FormInput 
            name="fullName" 
            type="text" 
            placeholder='' 
            onChange={(e) => updateField('fullName', e.target.value.trim())}
          >
            Full Name
          </FormInput>

          <FormInput 
            name="email" 
            type="email" 
            placeholder='example@gmail.com' 
            onChange={(e) => {updateField('email', e.target.value); setEmailError('');}} 
            error={emailError}
          >
            Email Address
          </FormInput>
          <FormInput 
            type='text' 
            name="githubUsername" 
            placeholder='@yourusername' 
            onChange={(e) => updateField('githubUsername', e.target.value)}
          >
            GitHub UserName
          </FormInput>
          <button type='submit' className='submit-btn'>
            Generate My Ticket
          </button>
        </form>
      </section>
    </main>
    )
}

export default TicketForm
