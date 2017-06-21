import {View} from 'backbone';
import _ from 'underscore';
import TypeLinks from '../views/TypeLinks';
import Pokemons from '../collections/Pokemons';

/**
 * Object for pokemondetail
 *
 * @constructor
 */
const PokemonListView = View.extend({
    templatePokemonDetail: '',
    templateError: '',

    initialize: function ()
    {
    
        //The templates that will be used
        this.templatePokemonDetail = _.template(this.$('#template-pokemon-detail').html());
        this.templateError = _.template(this.$('#template-error').html());

        //Listen to global events for change of new Pokemon detail
        App.events.on('newPokemonDetail', this.loadPokemon, this);
    },

    /**
     * Wrapper function to load the Pokemon through the collection
     *
     * @param data
     */
    loadPokemon: function (data)
    {
    
        this.collection.id = data.id;
        this.collection.fetch({
            success: (collection) => this.loadPokemonSuccessHandler(collection),
            error: (collection, response) => this.loadPokemonErrorHandler(collection, response),
            data: {
                name: data.name
            }
        });
    },

    /**
     * Success Handler will add HTML of pokemon to this $el
     *
     * @param collection
     */
    loadPokemonSuccessHandler: function (collection)
    {
        this.$el.html(this.templatePokemonDetail({pokemons: collection.models}));
        App.events.trigger('removePokemonList', {});
        document.getElementById("pokemon-detail").style.zIndex = 15;
    },

    /**
     * On error, show error message in this $el
     *
     * @param collection
     * @param response
     */
    loadPokemonErrorHandler: function (collection, response)
    {
        this.$el.html(this.templateError({message: response.responseJSON.error}));
    }
});

export default PokemonListView;