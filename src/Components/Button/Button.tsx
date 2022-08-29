import s from "./Button.module.css";
import { buttonLoadMore } from "../../Interfaces/interfaces";
export default function LoadMoreButton({onClick}: buttonLoadMore) {
  const loadMore = (event: React.MouseEvent) => {
    onClick(event);
  };

    return (
      <>
        <button onClick={() => loadMore} className={s.loadMoreBtn} type="submit">
          Load more
        </button>
      </>
    );
}
