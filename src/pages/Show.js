// retreive data from API

import { useState, useEffect } from 'react'

const Specie = (props) =>{

    const [specie, setSpecie] = useState([]);

		const BASE_URL = "http://localhost:4000/invasivespecies/";

    const getPeople = async () => {
        try {
            const response = await fetch(BASE_URL)
            const allPeople = await response.json()
            setPeople(allPeople)
        }catch(err){
            console.log(err)
        }

    }

    useEffect(()=>{getPeople()}, [])

    console.log(`There are ${people.length} people available to render`)

    return (<h1>People component</h1>)
}

export default People
