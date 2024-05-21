
import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import { useEffect } from 'react'
import axios from 'axios'
import ImageGallery from './components/ImageGallery/ImageGallery'



function App() {
  const [images, setImages] = useState([])



  useEffect(() => {

    async function fetchImages() {
      const { data } = await axios.get(`https://api.unsplash.com/search/photos?client_id=5nAhYfgdLBZBbd44An99fi5_47kds_YhXWW6_yj3JZo&query=${query}`)

      setImages(data.results)

    }
    fetchImages()
  }, [images])

  function handleSubmit(query) {
    console.log(query)
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
    </>
  )
}

export default App
