import { Toaster, toast } from 'react-hot-toast';
import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
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
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [totalPage, setTotalPage] = useState(1)


  useEffect(() => {
    if (query === "") return

    async function fetchImages() {
      try {
        setIsLoading(true)
        setErrorMessage(false)

        const { results, total_pages } = await getImages(query, page)

        if (results.length === 0) {
          toast.error('No images found. Please try another search.');
        }

        setImages((prevImages) => [...prevImages, ...results])
        setTotalPage(total_pages)
        setShowBtn(page < total_pages)
      } catch (error) {
        setErrorMessage(true)
        toast.error('Error fetching images. Please try again.')
      }
      finally {
        setIsLoading(false)
      }

    }
    fetchImages()

  }, [query, page])

  function handleSubmit(query) {
    setImages([])
    setPage(1)
    setQuery(query)

  }


  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };


  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isLoading && <Loader />}
      <ImageGallery images={images} selectedImage={selectedImage} modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal} />
      <Toaster />
      <ImageModal />
      {errorMessage && <LoadMessage />}
      {images.length > 0 && showBtn && < LoadMoreBtn onLoadMore={handleLoadMore} />}
    </>
  )
}

export default App
