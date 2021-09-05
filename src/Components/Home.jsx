import React,{useState} from 'react'
import axios from 'axios'
import Data from '../Components/Data'
import { BackTop } from 'antd';

export default function Home() {

    const style = {
        height: 40,
        width: 40,
        lineHeight: '40px',
        borderRadius: 50,
        backgroundColor: '#d83423',
        color: '#fff',
        textAlign: 'center',
        fontSize: 14,
      };

    const [details , setdetails] = useState([])
    const [contries , setcont] = useState()

    const APICAll = async()=>{
        try {
            const res = await axios.get(`https://restcountries.eu/rest/v2/region/${contries}`)
        setdetails(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    // useEffect(() => {
    //    APICAll();
    // }, [])


    return (
        <div>
            <div className="home_main">
                <div className="header">
                    <h1>World Info.</h1>
                    
                    <div className="select_bar">
                    <div class="input-group mb-3">
  <div class="input-group-prepend">
    <button class="input-group-text" onClick={APICAll} for="inputGroupSelect01">Choose</button>
  </div>
  <select class="custom-select" value={contries} onChange={(e)=>setcont(e.target.value)}
   id="inputGroupSelect01">
    <option selected>Select Continenes... </option>
    <option value="Asia">Asia</option>
    <option value="Africa">Africa</option>
    <option value="Americas">Americas</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
</div>
                    </div>

                    <p style={{color:'#fff'}}>Double Click to Get Details...</p>
                </div>

                <Data details={details} />

                <BackTop>
      <div style={style}><i class="fas fa-angle-up"></i></div>
    </BackTop>
                
            </div>
        </div>
    )
}
