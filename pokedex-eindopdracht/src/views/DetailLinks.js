import {View} from 'backbone';
import PokemonRouter from '../routers/PokemonRouter';

/**
 * Object representing the DetailLinks element
 *
 * @constructor
 */
const DetailLinks = View.extend({
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

        console.log("click detail");

        //Get target the retrieve data properties
        let target = e.currentTarget;
        let url = 'pokemon/' + target.dataset['id'];

        //Use trigger & replace to update URL and make the router listen to change
        this.router.navigate(url, {trigger: true, replace: true});
    }
});

export default DetailLinks;
