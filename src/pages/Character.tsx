import style from "../components/CharacterCard/CharacterCard.module.scss"
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams, } from "react-router-dom";

export const Character = () => {

    const { id }: any = useParams()
    const { data, status } = useQuery({
      queryKey: ["character"],
      queryFn: () => getCharacterData(id)
    })
    console.log(data)
    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error </p>;

    return (
      // <h1>{data.name}</h1>

      <div className={style.card}>
        <img
          src={data.image}
          alt="character picture"
          className={style.picture}
        />
        <div className={style.informationWrapper}>
          <div className={style.textWrapper}>
            <h2 className={style.h2}>{data.name}</h2>
            <div className={style.status}>
              <div className={style.aliveMeter}></div>
              <span className={style.textAliveAndSpecies}>
                {data.status} - {data.spiecies}
              </span>
            </div>
          </div>
          <div className={style.textWrapper}>
            <span className={style.helperText}>
              Last known location
            </span>
            <h3 className={style.h3}>
              {data.location.name}
            </h3>
          </div>
          <div className={style.textWrapper}>
            <span className={style.helperText}>
              First seen in episode
            </span>
            <h3 className={style.h3}>
              {data.episode[0]}
            </h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default Character;

  const getCharacterData = (id: string) => {
    return axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(res => res.data);
  };