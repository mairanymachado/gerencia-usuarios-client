import axios from 'axios';

const url = 'https://reqres.in/api/users?page=1&per_page=12';

export default {
    getAllUsuarios: (limit, callback) => {
        axios.get(url).then((result) => {
            if (callback) {
                callback(result);
            }
        })
    }
}