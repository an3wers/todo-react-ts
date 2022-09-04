import { FC, ChangeEvent, ChangeEventHandler } from "react";
import { optionsType } from "../../types/types";



interface IFiltersProps {
  options: optionsType[];
  sortValue: string;
  searchValue: string;
  onSort: (value: string) => void;
  onSearch: (value: string) => void
}

const Filters: FC<IFiltersProps> = ({
  options,
  sortValue,
  searchValue,
  onSort,
  onSearch
}) => {
  
    // sort and search
  const handleSort:ChangeEventHandler<HTMLSelectElement> = (event) => {
    onSort(event.target.value)
  }

  return (
    <div className="d-flex mt-5 mb-3">
      <select value={sortValue} onChange={handleSort} className="form-select" aria-label="sort">
        <option disabled value="">Sort</option>
        {options.map(option => {
            return <option key={option.value} value={option.value}>{option.name}</option>
        })}
        
      </select>
      <input className="form-control ms-3" placeholder="Search tasks" type="text" value={searchValue} onChange={(e) =>onSearch(e.target.value)} />
    </div>
  );
};

export default Filters;
