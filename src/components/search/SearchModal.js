import React, { useContext, useState } from "react";
import {SearchModalStyles} from "../../styles/search/SearchModalStyles";
import ActionButton from "../buttons/ActionButton";
import { MdClose } from "react-icons/md";
import { SearchModalContext } from "../../context/searchModalContext";
import SearchField from "./SearchField";

const Search = () => {
  const { isSearchModalOpen, closeSearchModal } = useContext(SearchModalContext);
  const [searchQuery,setSearchQuery]=useState();

  const handleOnFocus=()=>{
    console.log("Focused")
  }
  if (!isSearchModalOpen) return null;
  return (
    <SearchModalStyles>
      <div className="modal__container">
        <ActionButton className="close"
        onClick={()=>closeSearchModal()}>
          <MdClose />
        </ActionButton>
        <SearchField value={searchQuery}
        setValue={setSearchQuery}
        onFocus={handleOnFocus}
        ></SearchField>
      </div>
    </SearchModalStyles>
  );
};

export default Search;
