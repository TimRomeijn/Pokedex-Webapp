import {View} from 'backbone';
import _ from 'underscore';
import TypeLinks from '../views/TypeLinks';
import DetailLinks from '../views/DetailLinks';
import Pokemons from '../collections/Pokemons';
import PokemonDetail from '../views/PokemonDetail';

/**
 * Object for pokemonlistview
 *
 * @constructor
 */
const PokemonListView = View.extend({
    templateTypes: '',
    templateError: '',

    initialize: function ()
    {
        console.log("fdf");
        //The templates that will be used
        this.templateTypes = _.template(this.$('#template-types').html());
        this.templateError = _.template(this.$('#template-error').html());

        //Listen to global events for change of new Pokemon list
        App.events.on('newPokemon', this.loadTypes, this);
        App.events.on('removePokemonList', this.removePokemonList, this);
    },

    /**
     * Wrapper function to load the Pokemons through the collection
     *
     * @param data
     */

    removePokemonList: function () {
        this.$el.html('');
    }, 

    loadTypes: function (data)
    {
        console.log("start loading");
        this.collection.id = data.id;
        this.collection.fetch({
            success: (collection) => this.loadPokemonsSuccessHandler(collection),
            error: (collection, response) => this.loadPokemonsErrorHandler(collection, response),
            data: {
                name: data.name
            }
        });
    },

    /**
     * Success Handler will add HTML of pokemons to this $el
     *
     * @param collection
     */
    loadPokemonsSuccessHandler: function (collection)
    {
        console.log("succes loaded pokemans");
    
        this.$el.html(this.templateTypes({types: collection.models}));

        let pokemonCollection = new Pokemons;
        new DetailLinks({el: '.detail-links'});
        new PokemonDetail({el: '#pokemon-detail', collection: pokemonCollection});
        document.getElementById("pokemon-view").style.zIndex = 15;
    },

    /**
     * On error, show error message in this $el
     *
     * @param collection
     * @param response
     */
    loadPokemonsErrorHandler: function (collection, response)
    {
        console.log(response);

        console.log("error");
        this.$el.html(this.templateError({message: response.responseJSON.error}));
    }
});

export default PokemonListView;