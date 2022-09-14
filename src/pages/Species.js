//initialize state and render

import { useEffect, useState } from 'react';

const Species = (props) => {

    const [specie, setSpecie] = useState([]);
    const URL = "https://anrmaps.vermont.gov/arcgis/rest/services/Open_Data/OPENDATA_ANR_ECOLOGIC_SP_NOCACHE_v1/MapServer/174/query?where=1%3D1&outFields=SiteName,InvasiveName,ObservationDate,InfestedArea,PlantDescription,AssessmentDate&outSR=4326&f=json";

    const getSpecies = async () => {
        try {
            const mySpecies = await fetch(URL);
            const allSpecies = mySpecies.json();
            setSpecie(allSpecies)
        } catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        getSpecies();
    }, []);
// return (
//     <h1>Species</h1>
// )
    console.log(`There are ${specie.length} people available to render`)

    const loaded = () => {
        return specie?.map((invader) => {
            return (
                <div key={invader._id}>
                    <h1>{invader.name}</h1>
                    <img src={invader.image} />
                    <h3>{invader.title}</h3>
                </div>
            )
        })
    }

    const loading = () => (
        <>
            <h1>
                Loading...
                <span>
                    <img
                        className="spinner"
                        src="https://freesvg.org/img/1544764567.png"
                    />{" "}
                </span>
            </h1>
        </>
    );

    return specie ? loaded() : loading();

}





export default Species
