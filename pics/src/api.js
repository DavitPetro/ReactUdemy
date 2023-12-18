import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID r4Mj2yXqwPBJv7OGEM2FVqE18NVwxzVxhLbIsJkuuOs'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;