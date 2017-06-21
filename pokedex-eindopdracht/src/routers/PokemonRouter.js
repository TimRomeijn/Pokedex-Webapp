import {Router} from 'backbone';

/**
 * Router for the pokemon,type URL's
 *
 * @constructor
 */
const PokemonRouter = Router.extend({
    routes: {
        'pokemon/:id': 'pokemonAction',
        'type/:id' : 'typeAction'
    },

    /**
     * Route callback, used to trigger global event
     *
   
     */

    //Route action for types
    typeAction: function (id)
    {
        console.log("routed");
        App.events.trigger('newPokemon', {
            id: id
        });
    },

    //Route action for pokemon
    pokemonAction: function (id)
    {
        console.log("<INPUT ID> I SELECT YOU!")
        App.events.trigger('newPokemonDetail', {
            id: id
        });
    }
});

export default PokemonRouter;
