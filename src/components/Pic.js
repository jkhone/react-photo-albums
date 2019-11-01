import React, { useState, useEffect } from "react"
import axios from 'axios'
import { Link } from 'react-router-dom'

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
          <h1>{pic.name}</h1>
          <div className='picture'>
            <img src={pic.url} alt=''/>
          </div>
          <Link to={'/albums/' + albumId}><div className='back'>&larr;</div></Link>
          <Link to=''><div className='home'>&larr;</div></Link>
      </div>
  )
}

export default Pic