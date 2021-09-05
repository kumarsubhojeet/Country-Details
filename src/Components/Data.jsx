import React,{useState} from "react";
import axios from "axios";
import ContryDetails from '../Components/ContryDetails'

export default function Data(props) {
  const { details } = props;

  const [cdata , setcdata] = useState([])
  const [lang , setlang] = useState([])
  return (
    <div>
      <div className="container-fluid">
        <div className="container">
        <div className="row">
                    {
                        details.map(cont=>(
                            <div className="col-md-4">
                          
                          <div className="card"
                          data-toggle="modal" data-target=".bd-example-modal-xl"
                          onClick={async function(){
                              try {
                                  const res = await axios.get(`https://restcountries.eu/rest/v2/name/${cont.name}?fullText=true`)
                                  setcdata(res.data);
                                  
                              } catch (error) {
                                  console.log(error);
                              }
                          }}
                          style={{margin:'5px auto' , textAlign:'center'}}>
                                <div className="card-img">
                                    <img src={cont.flag} className="flags" alt="Error" />
                                </div>

                                <div className="card-body">
                                   <h4>{cont.name}</h4>
                                </div>
                            </div>

                            </div>
                            
                        ))
                    }
                </div>
        </div>
      </div>

      <ContryDetails cdata={cdata} lang={lang} />
    </div>
  );
}
