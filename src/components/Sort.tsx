import React from "react";

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

const categories = ["Wszystkie", "Śniadanie", "Obiad", "Kolacja"];

const Sort: React.FC<CategoryFilterProps> = ({ selected, onSelect }) => {
  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`filter-button ${selected === cat ? "active" : ""}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Sort;
