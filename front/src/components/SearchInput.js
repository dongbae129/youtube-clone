import React, { useState, useCallback } from "react";
import { Input } from "antd";

const { Search } = Input;
function SearchInput({ refresh }) {
  const [search, setSearch] = useState("");

  const onChangeSearch = useCallback(
    (e) => {
      setSearch(e.target.value);
      refresh(e.target.value);
    },
    [refresh]
  );
  return (
    <div style={{ width: 200 }}>
      <Search onChange={onChangeSearch} />
    </div>
  );
}

export default SearchInput;
