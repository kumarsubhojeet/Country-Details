import React from "react";

export default function ContryDetails(props) {
  const { cdata,lang } = props;
  return (
    <div>
     {
         cdata.map(det=>(
            <div
            class="modal fade bd-example-modal-lg"
            tabindex="-1"
            role="dialog"
            aria-labelledby="myLargeModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-lg">

              <div class="modal_content">
                 
                  <div className="details_contry">
                      
                      <div className="img">
                          <img src={det.flag} className="det_img" alt="Error" />
                      </div>

                      <div className="cont_details">
                      
                          <h1 style={{fontWeight: '700'}}>{det.name}</h1>
                          <hr />
                          <h3>Capital- {det.capital}</h3>
                          <h3>Region- {det.region}</h3>
                          <h3>SubRegion- {det.subregion}</h3>
                          <h3>Pop- {det.population}</h3>
                          <hr />
                          
                        
                      </div>
                  
                  
                  </div>
                 <div className="border_lang">
                 
                 <div className="border">
                 <h1 style={{fontWeight: '500',color:' #515a5a  '}}>Borders</h1>
                        {
                              det.borders.map(border=>(
                                  <>
                                  <h3>{!border? <p>No-Borders</p>: border }</h3>
                                  </>
                              ))
                          }
                    </div>

                    <div className="border">
                 <h1 style={{fontWeight: '500',color:' #515a5a '}}>languages</h1>
                        {
                              det.languages.map(lang=>(
                                  <>
                                  <h3>{lang.name}</h3>
                                  </>
                              ))
                          }
                    </div>
                 </div>
                 
                 <div className="close_btnn">
                 <div className="close_btn">
             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" style={{fontSize:'30px' , color:'red' , fontWeight:'800'}}>&times;</span>
        </button>
             </div>
                 </div>
              </div>
            </div>
          </div>
         ))
     }
    </div>
  );
}
