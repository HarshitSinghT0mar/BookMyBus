
const PrimaryButton = ({ children, type = 'submit', className = '', onClick = () => { }, isLoading }) => {
    return (
        <button
            onClick={onClick}
            type={type}
            disabled={isLoading}
            className={`w-full px-4 py-2 text-white bg-primary duration-200 transition-colors rounded-md hover:bg-pink-700 focus:outline-none ${className}`}
        >
            {children}
        </button>
    )
}

export default PrimaryButton