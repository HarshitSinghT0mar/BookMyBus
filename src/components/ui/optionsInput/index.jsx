import { useState } from 'react';

const OptionsInput = ({ options, placeholder, label }) => {
    const [search, setSearch] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setShowDropdown(true);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowDropdown(false);
        setSearch(''); // Clear search after selecting
    };

    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="relative">
            <input
                type="text"
                value={selectedOption || search}
                onChange={handleSearchChange}
                onFocus={() => setShowDropdown(true)}
                placeholder={placeholder}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
            {showDropdown && filteredOptions.length > 0 && (
                <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                    {filteredOptions.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OptionsInput;
