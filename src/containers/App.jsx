import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import Search from'../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import '../assets/styles/App.scss'


const App = () => {
    // const [videos, setVideos] = useState([])

    // useEffect(() => {
    //     fetch(API)
    //     .then(response => response.json())
    //     .then(data => setVideos(data))
    // }, []);

    return (
        <div className="App">
            <Header/>
            <Search/>
            <Categories title="Mi lista">
                <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                </Carousel>
            </Categories>
            <Categories title="Tendencias">
                <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                </Carousel>
            </Categories>
            <Categories title="Originales de Platzi">
                <Carousel>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                <CarouselItem/>
                </Carousel>
            </Categories>
            <Footer/>
        </div>
    )
}

export default App

// https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/

// https://midu.dev/react-hooks-use-effect-funcionalidad-en-el-ciclo-vida-componentes/

// https://midu.dev/react-hooks-use-state-anadiendo-estado-a-nuestro-componente-funcional/
