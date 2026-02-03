import { useState, useRef } from 'react';
import './style.css';
import upload from '../../assets/images/icon-upload.svg';
import { useFormStore } from '../../store/useFormStore';

function ImageInput() {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isError, setIsError] = useState(false); // State for error styling
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const { updateField, imageError, setImageError } = useFormStore();

    // 1. Handle the file selection
   const handleImageChange = (file?: File) => {
      if (file && file.size <= 500000) { 
          setIsError(false);
          setImageError('');
          updateField('avatar', file);
          
          const reader = new FileReader();
          reader.onloadend = () => {
              setImagePreview(reader.result as string);
          };
          reader.readAsDataURL(file);
      } else if (file) {
          setIsError(true);
      }
    };

    // 2. Clear the image
    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setImagePreview(null);
        updateField('avatar', null);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        handleImageChange(file); // Passing the file directly is cleaner
    };

    return (
        <div className="input-group">
            <label htmlFor="input-file">
                <h2>Upload Avatar</h2>
            </label>
            
            <label htmlFor="input-file" className="drop-area" onDragOver={(e) => e.preventDefault()} onDrop={onDrop}>
                <input 
                    type="file" 
                    accept="image/*" 
                    id="input-file" 
                    hidden 
                    ref={fileInputRef}
                    onChange={(e) => handleImageChange(e.target.files ? e.target.files[0] : undefined)}
                    aria-label="Upload avatar image (JPG or PNG, max 500KB)"
                    aria-describedby="img-info"
                />
                
                <div className="img-view">
                    {!imagePreview ? (
                        /* INITIAL UPLOAD VIEW */
                        <>
                            <div className="upload-icon-div">
                                <img src={upload} alt="uploadImageIcon" className="uploadicon" />
                            </div>
                            <p>Drag and drop or click to upload</p>
                        </>
                    ) : (
                        /* PREVIEW VIEW (The commented part in your code) */
                        <>
                            <div className="avatar-icon-div">
                                <img src={imagePreview} alt="Avatar Preview" className="avataricon" />
                            </div>
                            <div className="img-buttons">
                                <button type="button" onClick={handleRemove}>
                                    Remove Image
                                    <div className='underline'/>
                                </button>
                                <button type="button" onClick={() => fileInputRef.current?.click()}>
                                    Change Image
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </label>

            <p className='info' style={{ color: isError || imageError ? 'rgb(234, 88, 12)' : '' }} id="img-info" role="status">
                <svg className="info-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"/>
                  <path fill="currentColor" d="M8.004 10.462V7.596ZM8 5.57v-.042Z"/>
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042"/>
              </svg>
                <span>{imageError || 'Upload your photo (JPG or PNG, max size: 500KB).'}</span>
            </p>
        </div>
    );
}

export default ImageInput;