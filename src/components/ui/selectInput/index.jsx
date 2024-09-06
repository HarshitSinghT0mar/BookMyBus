import Select from 'react-select';

const DropdownIndicator = () => null;

const SelectInput = ({ options, placeholder, onChange, value }) => {
    const formattedOptions = options.map((option) => ({
        value: option,
        label: option,
    }));

    return (
        <Select
            options={formattedOptions}
            placeholder={placeholder}
            onChange={onChange}
            value={formattedOptions.find(opt => opt.value === value)}
            className=" focus:ring-primary focus:border-primary w-40"
            components={{ DropdownIndicator }}
        />
    );
};

export default SelectInput;
