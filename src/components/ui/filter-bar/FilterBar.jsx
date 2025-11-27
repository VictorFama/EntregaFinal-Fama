import "./FilterBar.css";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const FiltersBar = ({ categories = [], selectedCategory, onCategoryChange }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <div className="container text-center filters-bar">
      <div className="row justify-content-center">
        <div className="col-6 col-md-4">
          <select
            className={`form-select filter-bar ${dark ? "dark" : "light"}`}
            aria-label="Selector de categoría"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FiltersBar;
