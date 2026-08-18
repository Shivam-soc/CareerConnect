import { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

function SearchInput({
  value = "",
  onChange,
  placeholder = "Search...",
  className = "",
  disabled = false,
}) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    setInputValue(e.target.value);

    if (onChange) {
      onChange(e);
    }
  };

  const clearInput = () => {
    setInputValue("");

    if (onChange) {
      onChange({
        target: {
          value: "",
        },
      });
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Search Icon */}

      <FaSearch
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-slate-400
        "
      />

      {/* Input */}

      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        disabled={disabled}
        placeholder={placeholder}
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          py-3
          pl-12
          pr-12
          text-slate-700
          outline-none
          transition-all
          duration-200
          placeholder:text-slate-400
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
          disabled:cursor-not-allowed
          disabled:bg-slate-100
        "
      />

      {/* Clear Button */}

      {inputValue && (
        <button
          type="button"
          onClick={clearInput}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-slate-400
            transition
            hover:text-slate-700
          "
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
}

export default SearchInput;