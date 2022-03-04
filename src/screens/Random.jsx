import { useState, useEffect } from 'react';
import { Constants } from '../services/constants';


function Random(){
    const [gifs, setGifs] = useState([]);
    const fetchData = async () => {
        try {
          const response = await Constants();
          setGifs(response.data.images.original.url);
        } catch (error) {
          console.log(error);
        }
      }
    console.log(fetchData)

    useEffect(() => {
      fetchData();
    }, [])
    
    return(
        <div>
            <button onClick={fetchData}>Get New Gif</button>
            <br></br>
            <img alt="random gif" src={gifs} />
            <br></br>
        </div>
    )
}
export default Random;