import ListCharacterComponent from "@/components/home/ListCharacterComponent";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeCharacterComponent = () => {
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character").then((res) => {
            // const data = data.results.map((character) => ({
            //     name: character.origin.name,
            //     url: character.origin.url,
            // }));
            setCharacter(res.data.results);
        });
    }, []);

    return (
        <>
            <div className="card-wrapper">
                {character.map((element) => (
                    <div key={element.id}>
                        <ListCharacterComponent {...element} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default HomeCharacterComponent;
