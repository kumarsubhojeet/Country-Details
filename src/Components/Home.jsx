import React,{useState,useEffect} from 'react'
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

    const APICAll = async()=>{
        try {
            const res = await axios.get(`https://restcountries.eu/rest/v2/region/Asia`)
        setdetails(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
       APICAll();
    }, [])


    return (
        <div>
            <div className="home_main">
                <div className="header">
                    <h1>Countries Of Asia</h1>
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
