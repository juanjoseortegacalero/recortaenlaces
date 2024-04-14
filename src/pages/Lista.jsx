import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios';

export default function Lista(){
    const [urls, setUrl] = useState([])
    useEffect( ()=>{
        getUrls()
    },[])

    const [last, setlastUrl] = useState([])
    useEffect( ()=>{
        lastUrl()
    },[])

    //procedimineto para mostrar todos los enlaces
    const getUrls = async () => {
        const res = await axios.get('/verEnlace')
        setUrl(res.data)
    }

    const lastUrl = async () => {
        const res = await axios.get('/ultimoEnlace')
        setlastUrl(res.data)
    }

    return(
        <div>
        <div className="tables">
            <div>
            <h3>Último URL acortado</h3>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='tableTheadBg'>
                            <tr>
                                <th>URL Completo</th>
                                <th>URL Acortado</th>
                                <th>Visitas</th>
                            </tr>
                        </thead>
                        <tbody>
        <% shortUrls.forEach(shortUrl => { %>
          <tr>
            <td><a href="<%= shortUrl.full %>"><%= shortUrl.full %></a></td>
            <td><a href="<%= shortUrl.short %>"><%= shortUrl.short %></a></td>
            <td><%= shortUrl.clicks %></td>
          </tr>
        <% }) %>
      </tbody>
                    </table>
                </div>    
            </div>
        </div>
    </div>
    </div>
    )
}
