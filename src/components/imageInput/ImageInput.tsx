import './style.css'
import upload from '../../assets/images/icon-upload.svg'

function ImageInput() {
  return (
    <div className="input-group">
        <label htmlFor="input-file">
            <h2>
                Upload Avatar
            </h2>
        </label>
              <label htmlFor="input-file" id="drop-area" >

                
            <input type="file" accept="image/*" id="input-file" hidden required />
            <div id="img-view">
                <div className="upload-icon-div">
                    <img src={upload} alt="uploadImageIcon" className="uploadicon" />
                </div>
                <p>
                    Drag and drop or click to upload
                </p>

                {/* <div className="avatar-icon-div">
                    <img src='' alt="uploadImageIcon" className="avataricon" />
                </div>
                <div className="img-buttons">
                    <button>
                        Remove Image
                        <div className='underline'/>
                    </button>
                    <button>
                        Change Image
                    </button>
                </div> */}
            </div>
            </label>
            <p className='info'>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path stroke="rgb(100, 116, 139)" stroke-linecap="round" stroke-linejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"/><path fill="#D1D0D5" d="M8.004 10.462V7.596ZM8 5.57v-.042Z"/><path stroke="#D1D0D5" stroke-linecap="round" stroke-linejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042"/></svg>
                <span>
                    Upload your photo (JPG or PNG, max size: 500KB).
                </span>
                
            </p>
    </div>
  )
}

export default ImageInput

// Drag and drop or click to upload
//   Upload your photo (JPG or PNG, max size: 500KB).