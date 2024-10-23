import { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import { HeadingCard } from './Activities';
import { backendUrl } from '../config';

export default function Booking () {
    return <div className='grid place-items-center'>
        <div><HeadingCard label='Book Your Adventure'/></div>
        <div><BookActivityForm /></div>
    </div>
}

const BookActivityForm = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [date, setDate] = useState<string>('');
    const activity = JSON.parse(localStorage.getItem('activity') ?? "")

    useEffect(() => {
        console.log('name ', name)
        console.log('email ', email)
        console.log('date ', date)
    }, [name, email, date])

    const bookActivity = useCallback(async ({name, email, date} : {
        name: string,
        email: string,
        date: string
    }) => {
        await axios({
            url: `${backendUrl}/book/${activity.activityId}`,
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            data: {
                name: name,
                email: email,
                date: date
            }
        }).then((response) => {
            console.log(response);
            if(response.status == 200) alert('Activity Booked!')
        }).catch((err) => {
            console.error(err);
            alert('Unable to book activity')
        })
    }, []);

    return <div>
        <ActivityHeading activityName={activity.activityName} location={activity.location}/>
        <form className='p-1 bg-slate-300 border-[2px] border-black border-t-0 rounded-b-md' 
            onSubmit={(event) => {
                event.preventDefault();
                bookActivity({name, email, date});
            }}
        >
            <div>
                <InputField label='Name' placeholder='Enter your fullname' type='text' onChangeHandler={setName}/>
                <InputField label='Email' placeholder='Eg. abc@gmail.com' type='email' onChangeHandler={setEmail}/>
                <InputField label='Date' placeholder='DD-MM-YYYY' type='text' onChangeHandler={setDate}/>
            </div>
            <div className='grid placee-items-center'>
                <button type='submit' className='md:text-[20px] text-center rounded-md font-semibold text-white bg-black p-2'>
                    Book Activity - {'$'+activity.price}
                </button>
            </div>
        </form>
    </div>
}

const ActivityHeading = ({activityName, location} : {
    activityName: string,
    location: string
}) => {
    return <div className='p-[1px] md:px-[100px] px-[100px] grid text-center bg-slate-200 border-[2px] border-b-[1px] border-black rounded-t-[10px]'>
        <strong className='md:text-[25px] text-[20px]'>{activityName}</strong>
        <span className='md:text-[18px] text-[15px]'><i>{"at " + location}</i></span>
    </div>
}

const InputField = ({label, placeholder, type, onChangeHandler} : {
    label: string,
    placeholder: string
    type: string,
    onChangeHandler: (data: string) => void
}) => {
    return <div className='m-1 p-[1px] flex justify-between'>
        <span className='md:text-[20px]'>{label}</span>
        <span>
            <input 
                className='md:w-[350px] md:text-[18px] w-[250px] text-[15px] border-black border-[2px] focus:outline-none rounded-[4px] p-[1px] pl-1'
                placeholder={placeholder}
                type={type}
                onChange={(event) => {
                    onChangeHandler(event.target.value)
                }}
            />
        </span>
    </div>
}