
import './style.css'

function FormInput({children, name, type, placeholder} : {children: React.ReactNode, name: string, type: string, placeholder: string}) {
  return (
    <div className="input-group">
        <label htmlFor={name}>
            <h2>
                {children}
            </h2>
        </label>
        <input type={type} name={name} id={name} placeholder={placeholder}/>
    </div>
    
  )
}

export default FormInput
