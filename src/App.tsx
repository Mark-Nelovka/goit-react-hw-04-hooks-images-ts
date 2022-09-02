import { useState, useEffect } from "react";
import s from "./App.module.css";
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Searchbar from "./Components/Searchbar/Searchbar";
import fetchApi from "./Components/serviseApi.js/fecthApi";
import LoadMoreButton from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";
import imgNotCorrectly from "../src/images/Упс.jpeg";
import { ThreeDots } from "react-loader-spinner";
import ImageGalleryItem from "./Components/ImageGalleryItem/ImageGalleryItem";
import {searchNameForModal} from './Interfaces/interfaces';

function App() {
  const [imgName, setimgName] = useState("");
  const [imageName, setImageName] = useState({
    id: 0,
    webformatURL: '',
  tags: ''
  });
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("idle");
  const [showModalState, setShowModalState] = useState(false);
  const [idImage, setidImage] = useState(0);

  useEffect(() => {
    if (name !== imgName || page > 1) {
      setStatus("pending");
      setPage(1);
      fetchApi(imgName, page)
        .then((res) => {
          if (imageName === null) {
            setImageName(res);
            setName(imgName);
            setidImage(0);
            setStatus("resolved");
            return;
          }
          if (page === 1) {
            setImageName(res);
            setName(imgName);
            setidImage(0);
            setStatus("resolved");
            return;
          }
          setImageName((prevState: searchNameForModal) => [prevState, ...res]);
          setStatus("resolved");
        })
        .catch((error) => {
          console.log(error)
          setStatus("rejected");
        });
    }
  }, [imgName, page]);

  const loadMore = (e: React.MouseEvent) => {
    e.preventDefault();
    setPage((prevState) => prevState + 1);
  };

  const toggleModal = () => {
    setShowModalState(!showModalState);
  };

  const handleFormSubmit = (painting: string) => {
    setimgName(painting);
  };

  const showModalFunc = (id: number) => {
    setShowModalState(!showModalState);
    setidImage(id);
  };

  return (
    <>
      <Searchbar valueSubmit={handleFormSubmit} />
      <main className={s.App}>
        <ImageGalleryItem searchName={imageName} modal={showModalFunc} />
        {status === "pending" ? (
          <div className={s.loaderWrapper}>
            <ThreeDots color="#00BFFF" height={80} width={80} />
          </div>
        ) : null}
        {status === "resolved" ? <LoadMoreButton onClick={loadMore} /> : null}
        {status === "rejected" ? (
          <>
            <div className={s.containerDontCorrectly}>
              <p>
                <b>{`Картинку с именем ${imgName} не найдено или они закончились`}</b>
              </p>

              <img
                src={imgNotCorrectly}
                alt={"Pictures is not fined"}
                width="400px"
                height="400px"
              />
            </div>
          </>
        ) : (
          ""
        )}
        {showModalState ? (
          <Modal image={imageName} onClose={toggleModal} id={idImage} />
        ) : null}
      </main>
    </>
  );
}

export default App;
