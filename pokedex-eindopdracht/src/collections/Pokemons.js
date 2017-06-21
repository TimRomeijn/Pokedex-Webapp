import {Collection} from 'backbone';
import Pokemon from '../models/Pokemon';

/**
 * Collection for the Pokemon endpoint with id variable to retrieve pokemon by Id
 *
 * @constructor
 */
const Pokemons = Collection.extend({
    id: '',
    model: Pokemon,
    url: function() {
        return 'https://pokeapi.co/api/v2/pokemon/' + this.id;
    }
});

export default Pokemons;
