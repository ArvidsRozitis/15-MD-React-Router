import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import { Link } from "react-router-dom";

type CharacterType = {
  id: number;
  name: string;
  species: string;
  episode: string[];
  status: string;
  image: string;
  location: {
    name: string;
    url: string;
  };
};

export const Characters = () => {
  const charactersQuery = useQuery({
    queryKey: ["characters"],
    queryFn: getCharacterData,
  });
  // const episodeQuery = useQuery({
  //   queryKey: ["episodes"],
  //   queryFn: getEpisodeData,
  // });

  if (charactersQuery.isLoading) return <h1>Loading...</h1>;
  if (charactersQuery.isError) {
    return <pre>{charactersQuery.isError}</pre>;
  }

  console.log(charactersQuery.data);

  return (
    <div className="App">
      {charactersQuery.data.map((character: CharacterType) => (
        <Link className="cardlink" key={Math.random()} to={`/characters/${character.id}`}>
          <CharacterCard
            id={character.id}
            image={character.image}
            status={character.status}
            species={character.species}
            name={character.name}
            location={character.location.name}
            episode={character.episode[0]}
          />
        </Link>
      ))}
    </div>
  );
};

export default Characters;

const getCharacterData = () => {
  return axios
    .get("https://rickandmortyapi.com/api/character")
    .then((res) => res.data.results);
};

// const getEpisodeData = () => {
//   return axios
//     .get("https://rickandmortyapi.com/api/episode/")
//     .then(res => res.data);
// };
