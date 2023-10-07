import { useSelector, useDispatch } from "react-redux";
import {setFilter, getFilter} from '../../redux/slice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onChangeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

return (
    <label>
      <input
        type="text"
        name={filter}
        value={filter}
        onChange={onChangeFilter}
        placeholder="Find contacts by name"
      />
    </label>
  );
}