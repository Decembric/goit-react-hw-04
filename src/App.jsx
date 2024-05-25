import { Toaster } from 'react-hot-toast';
import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import { useEffect } from 'react'

import { getImages } from "./apiRequest"
import ImageGallery from './components/ImageGallery/ImageGallery'
import ImageModal from './components/ImageModal/ImageModal'
import Loader from './components/Loader/Loader'
import LoadMessage from './components/LoadMessage/LoadMessage'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';



function App() {
  const [images, setImages] = useState([])
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [page, setPage] = useState(1)



  useEffect(() => {
    if (query === "") return

    async function fetchImages() {
      try {
        setIsLoading(true)

        const fetchImages = await getImages(query, page)

        setImages((prevImages) => [...prevImages, ...fetchImages])

      } catch (error) {
        setErrorMessage(true)
      }
      finally {
        setIsLoading(false)
      }

    }
    fetchImages()

  }, [query, page])

  function handleSubmit(query) {
    setImages([])
    setQuery(query)
  }

  const handleLoadMore = () => {
    setPage(page + 1)
  }

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      <ImageGallery images={images} />
      <Toaster />
      <ImageModal />
      {errorMessage && <LoadMessage />}
      {images.length > 0 && <LoadMoreBtn onLoadMore={handleLoadMore} />}
    </>
  )
}

export default App
