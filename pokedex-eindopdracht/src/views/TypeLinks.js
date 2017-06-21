import {View} from 'backbone';
import PokemonRouter from '../routers/PokemonRouter';

/**
 * Object representing the TypeLinks element
 *
 * @constructor
 */
const TypeLinks = View.extend({
    router: null,

    events: {
        'click a': 'clickHandler'
    },

    initialize: function ()
    {
        //Initialize the pokemonrouter
        this.router = new PokemonRouter();
    },

    /**
     * Click handler for links, retrieve data attributes and navigate router
     *
     * @param e
     */
    clickHandler: function (e)
    {
        e.preventDefault();

        //Get target the retrieve data properties
        let target = e.currentTarget;
        let url = 'type/' + target.dataset['id'];

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, {trigger: true, replace: true});
    }
});

export default TypeLinks;
