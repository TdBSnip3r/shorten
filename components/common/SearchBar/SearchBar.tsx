'use client';
import React from 'react';
import SearchIcon from './SearchIcon';
import XCircleIcon from './XCircleIcon';

interface SearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const SearchBar = ({ searchValue, setSearchValue }: SearchBarProps) => {

  const handleClear = () => {
    setSearchValue('');
  };

  return (
    <div className="relative w-full">
      <div className="relative">
        <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon className="h-5 w-5 text-white" aria-hidden="true" />
        </span>
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full rounded-full border border-white bg-transparent py-2 pl-10 pr-10 text-sm text-white focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
        />
        {searchValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <XCircleIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
