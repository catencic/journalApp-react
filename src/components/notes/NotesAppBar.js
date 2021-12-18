import React from 'react'

import moment from 'moment';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {

     const dispatch = useDispatch();
     const {active} = useSelector(state => state.notes);

     const date = new Date();
     const noteDate = moment(date);
     
    

    const handleSave =()=>{
         dispatch(startSaveNote(active));
        
    }

    const handleFileChange= (e)=>{
    
        const file =  e.target.files;
        if(file){
            dispatch(startUploading(file[0]));
        }
    }

    const handlePictureClick= () => {
      
        document.querySelector('#fileSelector').click();
    }

    return (
        <div className="notes__appbar">
             <span>{noteDate.format('dddd, MMMM Do YYYY')}</span>

             <input
             id="fileSelector"
             type="file"
             name="file"
             style={{display: 'none'}}
             onChange={handleFileChange}
             />

             <div>
                 <button 
                 className="btn"
                 onClick={handlePictureClick}
                 >
                     Picture
                 </button>
                 <button 
                 className="btn"
                 onClick={handleSave}
                 >
                     Save
                 </button>
             </div>
            
        </div>
    )
}
