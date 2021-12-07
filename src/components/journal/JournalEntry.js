import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            
          <div 
                className="journal__entry-picture"
                style={{ 
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/5f9a9dec5bafe87eb4bbcf9f/1-nubes-en-el-cielo_1.jpg)'
                }}
          >
            

          </div>


          <div className="journal__entry-body">
               <p className="journal__entry-title">
                   Un nuevo dia
               </p>
               <p className="journal__entry-content">
                   Elit dolor irure do non fugiat sunt consequat do.
               </p>
          </div>

          <div className="journal__entry-date-box">
              <span>Monday</span>
              <h4>28</h4>

          </div>


        </div>
    )
}
