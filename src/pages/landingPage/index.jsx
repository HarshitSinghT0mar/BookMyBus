import Input from '../../components/ui/input'
import PrimaryButton from '../../components/ui/button/primaryButton'

const LandingPage = () => {
    return (
        <div className="bg-gradient-to-r from-primary to-primaryDark p-8  text-white h-80 w-full">
            <div className='flex flex-col justify-center items-center h-full'>
            <h1 className="text-4xl font-bold mb-4">Book Your Bus Tickets</h1>
            <p className="text-lg mb-6">Find the best bus routes and book your tickets with ease.</p>
            <form className="flex space-x-4">
                <Input
                    type="text"
                    placeholder="From"
                />
                <Input
                    type="text"
                    placeholder="To"
                />
                <Input
                    type="text"
                    placeholder="dd-mm-yyyy"
                />
                <PrimaryButton
                    className='bg-red-600 max-w-20'
                >
                    Search
                </PrimaryButton>
                </form>
            </div>
        </div>
    )
}

export default LandingPage