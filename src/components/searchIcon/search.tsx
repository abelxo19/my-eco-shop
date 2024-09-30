import { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';

interface SearchInputProps {
  setSearchTerm: (term: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ setSearchTerm }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
        setSearchValue('');
        setSearchTerm(''); 
      }
    };

    if (isExpanded) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isExpanded, setSearchTerm]);

  const handleIconClick = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setSearchTerm(e.target.value);
  };

  return (
    <div className="relative flex items-center px-1 py-1 md:px-3 md:py-2 shadow-md rounded-full">
      <Search
        className="cursor-pointer h-6 w-6 md:h-8 md:w-8 text-[#658C4A]"
        onClick={handleIconClick}
      />
      {isExpanded && (
        <input
          ref={inputRef}
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          className="transition-all duration-300 ease-in-out ml-2 px-6 py-1 rounded-md focus:outline-none md:w-32 lg:w-48"
          placeholder="Search products..."
          autoFocus
        />
      )}
    </div>
  );
};

export default SearchInput;
