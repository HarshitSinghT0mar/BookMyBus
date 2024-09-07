import { Link } from "react-router-dom";

const PrimaryButton = ({ children, type = 'submit', className = '', onClick = () => { }, isLoading, to = '' }) => {


    if (to) {
        return (<Link to={to} className={`w-full px-4 py-2 text-white bg-primary duration-200 transition-colors rounded-md hover:bg-primaryDark focus:outline-none ${className}`}>
            {children}
        </Link>)
    } else {
        return (
            <button
                onClick={(e) => { e.preventDefault(); onClick(e) }}
                type={type}
                disabled={isLoading}
                to={to}
                className={`w-full px-4 py-2 text-white bg-primary duration-200 transition-colors rounded-md hover:bg-primaryDark focus:outline-none ${className}`}
            >
                {children}
            </button>
        )
    }
}

export default PrimaryButton