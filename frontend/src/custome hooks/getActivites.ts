import { useState, useEffect } from 'react';
import axios from 'axios';
import { backendUrl } from '../config.ts';

export const useGetActivities = () => {
    const [activities, setActivites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios({
            url: `${backendUrl}/list`,
            method: 'GET',
            headers: {
                'Content-Type': "application/json"
            }
        }).then((response) => {
            setActivites(response.data.activities);
            setLoading(false)
        }).catch((err) => {
            console.error(err);
            alert('Unable to get activities')
        })
    }, [])

    return {
        activities,
        loading
    }
}