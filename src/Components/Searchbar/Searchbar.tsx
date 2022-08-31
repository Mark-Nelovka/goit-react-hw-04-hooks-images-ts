import { useState } from "react";
import s from "./Searchbar.module.css";
import { searchBarProps } from "../../Interfaces/interfaces";
export default function Searchbar({ valueSubmit }: searchBarProps) {
  const [input, setinput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const saveInputValue = event.currentTarget.value;
    setinput(saveInputValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    valueSubmit(input);
    setinput("");
  };

  return (
    <>
      <header className={s.Searchbar}>
        <form onSubmit={handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            onChange={handleInputChange}
            value={input}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
}
