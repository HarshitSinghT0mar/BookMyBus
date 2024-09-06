const Input = ({ label, type, name, value, onChange, placeholder, required = false }) => {
console.log({value});

  return  (
        <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700">{label}</label>
            <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                className="block text-xs w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
}
export default Input;