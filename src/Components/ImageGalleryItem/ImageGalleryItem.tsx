import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";
import ItemsCard from "../ImageGallery/ImageGallery";
import { FetchItemsProps } from "../../Interfaces/interfaces";
export default function FetchItems({ searchName, modal }: FetchItemsProps) {
  const showModal = (e: React.MouseEvent) => {
    const id = Number((e.target as HTMLElement).id);
    modal(id);
  };

  return (
    <>
      <ItemsCard>
        {searchName &&
          searchName.map(({ id, webformatURL, tags }) => {
           
            return (
              <li className={s.item} key={id}>
                <img
                  width="300px"
                  height="250px"
                  onClick={showModal}
                  id={id}
                  src={webformatURL}
                  alt={tags}
                />
              </li>
            );
          })}
      </ItemsCard>
    </>
  );
}

FetchItems.propTypes = {
  name: PropTypes.string,
  page: PropTypes.number,
  status: PropTypes.string,
  showModal: PropTypes.bool,
};
