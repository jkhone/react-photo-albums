import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'
import Icon from '../lib/Icon'

function Pic(props) {
    const [pic, setPic] = useState([])
    const [albumId, setAlbumId] = useState([])
    const id = props.match.params.id

    useEffect(() => {
        axios.get(`/pictures/${id}`).then(resp => {
            setPic(resp.data)
            setAlbumId(resp.data.albumId)
        })
    }, [id, albumId])

  return (
      <div>
          <div className='top'>
            <h1>{pic.name}</h1>
            <Link className='home' to=''><div className='home'><Icon icon='home'/></div></Link>
            <Link to={'/albums/' + albumId}><div className='back'><Icon icon='arrow-circle-left'/></div></Link>
          </div>
          <div className='picture'>
            <img src={pic.url} alt=''/>
          </div>
          
      </div>
  )
}

export default Pic