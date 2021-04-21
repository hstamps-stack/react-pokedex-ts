import { Link } from "react-router-dom";
import { setTypeColor } from "../services";

interface PokemonProps {
  pokemon: Pokemon[];
}

const ListPokemonDetails: React.FC<PokemonProps> = ({ pokemon }) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <ul className="list-group">
            {pokemon.map((poke, index) => {
              return (
                <li
                  className="list-group-item d-flex justify-content-around align-items-center"
                  key={index}
                >
                  {/* section img pulled to left */}
                  <img src={poke.img} alt={poke.name} />
                  <div className="poke-info">
                    <h2>
                      <Link to={`/pokemon/${poke.name.toLowerCase()}`}>
                        {poke.name}
                      </Link>
                    </h2>
                    <div>
                      <small>Height: {poke.height}</small>
                      <br />
                      <small>Weight: {poke.weight}</small>
                      <br />
                      <small>Type:</small> <br />
                      {poke.type.map((pokieType, i) => {
                        return (
                          <small
                            className="badge badge-pill text-white mx-1"
                            style={{ backgroundColor: setTypeColor(pokieType) }}
                            key={i}
                          >
                            {pokieType}
                          </small>
                        );
                      })}
                      <br />
                      <small>Weakness:</small> <br />
                      {poke.weaknesses.map((pokieType, i) => {
                        return (
                          <small
                            className="badge badge-pill text-white mx-1"
                            style={{ backgroundColor: setTypeColor(pokieType) }}
                            key={i}
                          >
                            {pokieType}
                          </small>
                        );
                      })}
                      <br />
                    </div>
                  </div>
                  {/* section pokemon name that is wrapped in a link */}
                  {/* section for details under the pokemon name */}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListPokemonDetails;
