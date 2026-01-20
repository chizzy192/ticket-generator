import './ticketform.css'
import Header from '../../components/header/Header'
import FormInput from '../../components/formInput/FormInput'
import ImageInput from '../../components/imageInput/ImageInput'
import patternCircle from '../../assets/images/pattern-circle.svg'

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
    return (
    <main>
        <img src={patternCircle} alt="Pattern Circle" className="background-pattern-circle"/>
        <img src={patternCircle} alt="Pattern Circle" className="background-pattern-circle2"/>
        
            
        <section>
            <Header>
                <HeaderText/>
            </Header>
        </section>

        <section>
            <form action="">
                <ImageInput/>
                <FormInput name="fullName" type="text" placeholder=''>Full Name</FormInput>
                <FormInput name="email" type="email" placeholder='example@gmail.com'>Email Address</FormInput>
                <FormInput type='text' name="githubsername" placeholder='@yourusername'>
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
