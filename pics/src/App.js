// Unsplash Access Key: r4Mj2yXqwPBJv7OGEM2FVqE18NVwxzVxhLbIsJkuuOs
import { useState } from 'react';
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImages from './api';


function App() {
    const [images, setImages] = useState([])

    const handleSubmit = async (term) => {
        const result = await searchImages(term)

        setImages(result)
    }
    return ( 
    <div>
        <SearchBar onSubmit={handleSubmit}/>
        <ImageList images = {images}/>
    </div>
    )
}

export default App;