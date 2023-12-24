import { PlusOutlined, SearchOutlined } from "@ant-design/icons";

const SearchModal = ({ onClose }) => {
  
  return (
    <div className="searchModal__out" onClick={() => onClose()}>
      <div className="search__modal" onClick={(a) => a.stopPropagation()}>
        <div className="search__modal__inputs">
          <input
            type="text"
            placeholder="Search"
          />
          <button className="modal__search__btn">
            <SearchOutlined />
          </button>
          <button className="search__modal__button" onClick={() => onClose()}>
            <PlusOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
