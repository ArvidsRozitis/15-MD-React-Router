import style from "./CharacterCard.module.scss";


type CharacterCardProps = {
    id: number
    image: string,
    status: string,
    species: string,
    name: string,
    location: string,
    episode: string,  
}

export const CharacterCard = ({image, status, species, name, location, episode, id}: CharacterCardProps) => {




  return (
    <div className={style.card} >
      <img
        src={image}
        alt="character picture"
        className={style.picture}
      />
      <div className={style.informationWrapper}>
        <div className={style.textWrapper}>
          <h2 className={style.h2}>{name}</h2>
          <div className={style.status}>
            <div className={style.aliveMeter}></div>
            <span className={style.textAliveAndSpecies}>
              {status} - {species}
            </span>
          </div>
        </div>
        <div className={style.textWrapper}>
          <span className={style.helperText}>
            Last known location
          </span>
          <h3 className={style.h3}>
            {location}
          </h3>
        </div>
        <div className={style.textWrapper}>
          <span className={style.helperText}>
            First seen in episode
          </span>
          <h3 className={style.h3}>
            {episode}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;


