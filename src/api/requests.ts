import axios from 'axios'

const FIRST_API_URL = 'https://jsonplaceholder.typicode.com'
const SECOND_API_URL = 'https://fakerapi.it/api/v1';

/* axios.defaults.withCredentials = true;
axios.defaults.baseURL = FIRST_API_URL;
axios.defaults.headers.common = {
    Authorization: `Bearer ${localStorage.getItem('token')}`
}; */
/*
export const getPosts = async () => {
    try {
        const res = await axios({
            url: `/posts/101`,
            method: "GET",
            params: { offset: 0, limit: 10 },
        });
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log(error.response?.data?.errText, 'error');
        } else if (error instanceof Error) {
            console.log(error.message)
        }
    }
};

export const postPosts = async () => {
    const res = await axios.post(`/posts`,
        {
            body: 'asd',
            title: ''
        }, { params: { offset: 0 } })
};

export const deletePosts = async () => {
    const res = await axios.delete(`/posts/1`);
};

const firstApiAxios = axios.create({
    baseURL: FIRST_API_URL,
    headers: {
        Authorization: 'Bearer asdssg',
    },
    withCredentials: true
},
})

firstApiAxios.interceptors.response.use(
    (res) => { cosole.log(res.status, 'int res'); return res; },
    (error) => {
        if (axios.isAxiosError(error)) {
            if (error.status === 401 && token) {
                const { data } = axios.post('url/auth', { refreshToken: token });
                localStorage.set(data, 'token')
            }
        }
    }
) */