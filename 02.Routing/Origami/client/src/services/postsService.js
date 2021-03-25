import api from './api.js';

export const getAll = (limit = 0) => {
    let url = limit === 0
        ? `${api.posts}`
        : `${api.posts}?_sort=id&_order=desc&_limit=${limit}`

    return fetch(url)
        .then(res => res.json())
        .catch(err => console.error(err));
}