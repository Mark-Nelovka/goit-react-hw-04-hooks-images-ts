import s from "./ImageGallery.module.css";
export default function itemsCard({ children }: any) {
  return <ul className={s.itemsList}>{children}</ul>;
}
