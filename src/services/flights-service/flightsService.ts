import api from '../api';
import { flightData } from '@/interfaces/flightData';

export const getFlights = async (page = 0, size = 10, sort = 'id') => {
    try {
        const response = await api.get(`/flights?page=${page}&size=${size}&sort=${sort}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const deleteFlight = async (flightId: string) => {
    try {
        await api.delete(`/flights/${flightId}`);
    } catch (error) {
        throw error;
    }
};

export const createFlight = async (flightData: flightData) => {
    try {
        await api.post('/flights/create', flightData);
    } catch (error) {
        throw error;
    }
};

