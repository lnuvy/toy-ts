import React, { useState } from "react";
import { InputStyles, InputWrap } from "./Styles";

const MainSearchBar = () => {
  const [query, setQuery] = useState("");

  const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(value);
  };

  return (
    <InputWrap>
      <InputStyles value={query} onChange={handleChangeQuery} placeholder="Find a project..." />
    </InputWrap>
  );
};

export default MainSearchBar;
