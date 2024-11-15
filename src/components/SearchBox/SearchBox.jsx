import { useDispatch, useSelector } from "react-redux";

import s from "./SearchBox.module.css";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeNameFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);

  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      <span>Find contacts by name</span>
      <input
        className={s.field}
        onChange={(e) => {
          dispatch(changeNameFilter(e.target.value));
        }}
        value={filter}
        type="text"
        placeholder="Enter name"
        
      />
    </label>
  );
};

export default SearchBox;