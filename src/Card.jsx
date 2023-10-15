import './App.scss';

  function Card ({pokemon, evolution, lastPokemon}) {




    return (
      <div className="containerCard">
        <div className="titleCard">
        <h3>{pokemon.name}</h3>
        </div>
        <img
        src={pokemon.imgSrc}
        alt="Carapuce"
        className="card-img"
      />
      <h4>{pokemon.level}</h4>
      <div className='description'>
        <ul>
          <li>
          <li>{pokemon.attaque}</li>
          <li>{pokemon.attaque2}</li>
          </li>
          <li>
          <li>{pokemon.force}</li>
          <li>{pokemon.force1}</li>
          </li>
        </ul>
      </div>
      {lastPokemon ? null : (<button className='Button1' onClick={evolution}>Evolution</button>
      )}
      </div>
    
    )
  }

  export default Card;