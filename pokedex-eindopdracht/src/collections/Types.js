import {Collection} from 'backbone';
import Type from '../models/Type';

/**
 * Collection for the Type endpoint with id variable to retrieve types by Id
 *
 * @constructor
 */
const Types = Collection.extend({
    id: '',
    model: Type,
    url: function() {
       return 'https://pokeapi.co/api/v2/type/' + this.id;
    } 
});

export default Types;