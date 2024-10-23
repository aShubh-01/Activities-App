import { useGetActivities } from "../custome hooks/getActivites"
import { useNavigate } from "react-router-dom";

export default function Activities () {
    const { activities, loading } = useGetActivities();

    if(loading) return <div className='grid justify-center'>Loading...</div>

    return <div className='grid place-items-center'>
        <div>
            <HeadingCard label='Adventure Activities' />
        </div>
        <div className='overflow-y-auto max-h-screen'>
            {
                activities.map((activity : {
                    id: number,
                    name: string,
                    price: number,
                    location: string
                }) => {
                    return <div  key={activity.id} className='m-2'>
                        <ActivityCard
                            activityId={activity.id}
                            activityName={activity.name}
                            price={activity.price}
                            location={activity.location}
                        />
                    </div>
                })
            }
        </div>
    </div>
}

export const HeadingCard = ({label} : { label: string}) => {
    return <div>
        <h3 className='md:text-[30px] font-bold'>{label}</h3>
    </div>
}

const ActivityCard = ({activityId, activityName, price, location} : {
    activityId: number,
    activityName: string,
    price: number,
    location: string
}) => {

    const navigate = useNavigate();

    function book() {
        localStorage.setItem('activity', JSON.stringify({activityId, activityName, price, location}))
        navigate('/book')
    }

    return <div onClick={book} 
        className='hover:cursor-pointer bg-slate-100 border-[1px] border-black rounded-md shadow-lg md:w-[500px] w-[300px] md:p-2 p-1'>
        <div className='flex justify-between'>
            <strong className='md:text-[25px]'>{activityName}</strong>
            <span className='md:text-[20px]'>{"$" + price}</span>
        </div>
        <p className='md:text-[18px]'>
            {location}
        </p>
    </div>
}