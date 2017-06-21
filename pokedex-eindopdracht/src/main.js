import _ from 'underscore';
import {Events} from 'backbone';
import Pokemons from './collections/Pokemons';
import Types from './collections/Types';
import PokemonListView from './views/PokemonListView';
import TypeLinks from './views/TypeLinks';

(function ()
{
    let setGlobalVariables = function ()
    {
        window.App = {};
        App.events = _.clone(Events);
    };

    /**
     * Run after dom is ready and append the objects to the HTML, set the root URL for routing
     */
    let init = function ()
    {
        setGlobalVariables();

        let typesCollection = new Types();
        new TypeLinks({el: '#type-select'});
        new PokemonListView({el: '#pokemon-view', collection: typesCollection});

        Backbone.history.start({pushState: true, root: '/pokedex-eindopdracht/'});

    };

    window.addEventListener('load', init);
})();
