import Input from '../../components/ui/input'
import PrimaryButton from '../../components/ui/button/primaryButton'
import { CITIES } from '../../data/cities'
import SelectInput from '../../components/ui/selectInput'
import { useLandingPageController } from './landingPage.controller'
import BusDetailsCard from '../../components/busDetailsCard'
import { documentsToRoutes } from '../../constants/constant.data'

const LandingPage = () => {
    const { currentRouteData, handleRouteChange, selectJourneyDate, journeyDate, searchRoutes } = useLandingPageController()

    return (
        <>
            <div className="bg-gradient-to-r from-primary to-primaryDark p-8  h-72 w-full">
                <div className='flex flex-col justify-center items-center h-full'>
                    <div className='mb-6 text-white'>
                        <h1 className="text-4xl font-bold mb-4">Book Your Bus Tickets</h1>
                        <p className="text-lg">Find the best bus routes and book your tickets with ease.</p>
                    </div>
                    <form className="flex space-x-4 ">
                        <SelectInput
                            options={CITIES}
                            placeholder="From"
                            name='source'
                            onChange={handleRouteChange}
                        />
                        <SelectInput
                            options={CITIES}
                            placeholder="To"
                            name='destination'
                            onChange={handleRouteChange}
                        />
                        <Input
                            type="date"
                            placeholder="dd-mm-yyyy"
                            name='journeyDate'
                            onChange={selectJourneyDate}
                            value={journeyDate}
                        />
                        <PrimaryButton
                            className='bg-red-600 max-w-28 hover:bg-red-700 px-0 py-0'
                            onClick={searchRoutes}
                        >
                            <span className="text-xs">{`Search`}</span>
                        </PrimaryButton>
                    </form>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-6 mt-4 p-4'>
                {currentRouteData?.buses?.map((bus) => {
                    return <BusDetailsCard key={bus?.busId} {...bus} />
                })}
            </div>
        </>
    )
}

export default LandingPage