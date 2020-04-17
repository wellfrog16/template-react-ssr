import instance from '@/helper/axios';

const axios = instance({ baseURL: 'https://jsonplaceholder.typicode.com' });

const base = '';

interface IData {
    userId: string;
    id: number;
    title: string;
    completed: boolean;
}

// any何用
const detail = () => axios.get<any, IData>(`${base}/todos/1`);

export default {
    detail,
};
