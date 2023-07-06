/* eslint-disable @typescript-eslint/ban-types */

import { useState } from "react";
import "./styles.css";

type SearchBarProps = {
  onSearch: Function;
};

export function SearchBar({ onSearch }: SearchBarProps) {
  const [text, setText] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    onSearch(text);
  }

  function handleChange(event: any) {
    setText(event.target.value);
  }

  function handleResetClick() {
    setText("");
    onSearch(text);
  }

  return (
    <form className="dsc-search-bar" onSubmit={handleSubmit}>
      <button type="submit">🔎︎</button>
      <input
        value={text}
        onChange={handleChange}
        type="text"
        placeholder="Nome do produto"
      />
      <button onClick={handleResetClick}>X</button>
    </form>
  );
}
