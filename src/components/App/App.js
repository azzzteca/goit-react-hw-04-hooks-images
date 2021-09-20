import { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import { SearchBar } from '../SearchBar/SearchBar.jsx';
import { ImageGallery } from '../ImageGallery/ImageGallery.jsx';
import { Button } from '../Button/Button.jsx';
import { Modal } from '../Modal/Modal.jsx';
import s from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const [image, setImage] = useState(null);
  const [page, setPage] = useState(1);
  const [imageList, setImageList] = useState([]);
  const [modalIsShown, setModalIsShown] = useState(false);
  const [hiSrcImageUrl, setHiSrcImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!image) return;

    setLoading(true);

    fetch(
      `https://pixabay.com/api/?key=22659093-928fc585fa86297f1703a77f0&q=${image}&orientation=horizontal&page=${page}&per_page=12`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        if (data.hits.length === 0) {
          throw new Error();
        }

        setImageList(state => [...state, ...data.hits]);
      })
      .catch(error => {
        toast.error('Please input correct picture name');
      })
      .finally(setLoading(false));

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [image, page]);

  const handleSearchImages = evt => {
    evt.preventDefault();

    if (evt.target.elements.inputSearch.value === '') {
      return toast('Please input picture name');
    }

    setImage(evt.target.elements.inputSearch.value);
    setImageList([]);
    setPage(1);

    evt.target.reset();
  };

  const handleOnLoadMore = evt => {
    setPage(prevState => prevState + 1);
  };

  const handleShowImageInModal = evt => {
    evt.preventDefault();
    setHiSrcImageUrl(evt.target.lowsrc);
    setModalIsShown(true);
  };

  const handleCloseModal = () => {
    setModalIsShown(false);
  };

  return (
    <div className={s.App}>
      <SearchBar onSearchImages={handleSearchImages} />
      <ImageGallery
        imageList={imageList}
        onShowImageInModal={handleShowImageInModal}
      />

      {loading && (
        <div className={s.Loader}>
          <Loader type="ThreeDots" color="#00BFFF" height={50} width={50} />
        </div>
      )}

      {imageList.length !== 0 && <Button onLoadMore={handleOnLoadMore} />}

      {modalIsShown && (
        <Modal url={hiSrcImageUrl} closeModal={handleCloseModal} />
      )}
      <ToastContainer />
    </div>
  );
}
