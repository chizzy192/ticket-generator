
import './style.css'

interface FormInputProps {
  children: React.ReactNode;
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
  error?: string;
}

function FormInput({children, name, type, placeholder, onChange, error} : FormInputProps) {
const errorId = error ? `${name}-error` : undefined;

  return (
  <div className="input-group">
    <label htmlFor={name}>
      <h2>
        {children}
      </h2>
    </label>
    <input 
      type={type} 
      name={name} 
      id={name} 
      placeholder={placeholder} 
      onChange={onChange}
      aria-invalid={error ? "true" : "false"}
      aria-describedby={errorId}
    />
    {error && <p className='error-message' id={errorId} role="alert">
            <svg className="info-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"/>
              <path fill="currentColor" d="M8.004 10.462V7.596ZM8 5.57v-.042Z"/>
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042"/>
          </svg>
            <span>{error}</span>
        </p>}
  </div>

  )
}

export default FormInput
