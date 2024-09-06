import Select from 'react-select';

const DropdownIndicator = () => null;

const SelectInput = ({ options, placeholder, onChange, name }) => {
    const formattedOptions = options?.map((option) => ({
        value: option,
        label: option,
    }));

    return (
        <Select
            options={formattedOptions}
            placeholder={placeholder}
            onChange={onChange}
            name={name}
            className=" focus:ring-primary focus:border-primary w-40"
            components={{ DropdownIndicator }}
        />
    );
};

export default SelectInput;
