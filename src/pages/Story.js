import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import axios from 'axios'
import fileDownload from 'js-file-download'
import {generateZip, generateZipFromCloud} from '../components/GenerateZip';
import { useCookies } from 'react-cookie'

import Download from '../static/download.png'

export const zipUrl = []

export default function Story() {
  const {id} = useParams() ;
  const [cookies] = useCookies(['token']);
  const { loading, error, data } = useFetch(`http://localhost:1337/api/stories/${id}?populate=Media`, cookies.token);

  if (loading) return <p>Loading...</p>

  const handleclick = (url, media) => {
    console.log(url)
    axios.get(url, {
      responseType: 'blob',
    })
    .then((response) => {

      fileDownload(response.data, media)
    })
  }

  return (
    <div  className="story-card">
          <div className="rating">{data.data.id}</div>
          <h2>{data.data.attributes.Title}</h2>
          <small>published: {data.data.attributes.Date}</small>
          <p>{data.data.attributes.Description}</p>

          <div className='img-wrapper'>
            {data.data.attributes.Media.data.map( (img, index) => {
              
              img.attributes.mime.includes('video')
                  ?
                    zipUrl.push(`http://localhost:1337${img.attributes.url}`)
                  :
                    zipUrl.push(`http://localhost:1337${img.attributes.url}`);
                  
              return(
                <div className='img-container' key={img.id}>
                  {img.attributes.mime.includes('video')
                  ?
                    <video 
                    className='img'
                    controls 
                    src={`http://localhost:1337${img.attributes.url}`}
                    />
                  :
                    <img 
                    className='img'
                    src={`http://localhost:1337${img.attributes.url}`}
                    />
                  }
                  
                  <img 
                    src={Download} 
                    className='download-icon'
                    onClick={() => 
                      {img.attributes.mime.includes('video')
                      ?
                        (handleclick(`http://localhost:1337${data.data.attributes.Media.data[index].attributes.url}`,
                        `video.webm`))
                      :
                        (handleclick(`http://localhost:1337${data.data.attributes.Media.data[index].attributes.url}`,
                        `${data.data.attributes.Media.data[index].attributes.alternativeText}`))
                      }
                    }/>
                </div>
              )
            })}
          </div>
          
          {/* <a href={url} download={'media.jpg'} target={'blank'}> */}
          <div className='button-container'>
            <button 
              className='download'
              // onClick={() => 
              //   {handleclick
              //     (`http://localhost:1337${data.data.attributes.media.data[0].attributes.formats.thumbnail.url}`,
              //      "media.jpg")}}
              onClick={generateZipFromCloud}
              >Dowload Media
            </button>
          </div>
          {/* </a> */}
      </div>
  ) 
}
