import React, { useEffect } from "react";
import style from '../setting/Setting.module.scss';
import axios from 'axios';

// import { Http} from '@angular/http';



const Setting=()=>{
    useEffect(async()=>{
        const url='http://185.126.200.99.8000/api/v1/login';
        axios.post(url).then((response)=>{
            console.log(res.data)
        })
    })
    
    return(
        <div className={style.container}>
            hello world
        </div>
    )
}

export default Setting;