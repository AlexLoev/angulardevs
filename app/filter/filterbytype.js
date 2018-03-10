//отдельный фильтр по типам покемонов, т.к. у одного покемона может быть несколько типов, пришлось делать свою обработку в контроллере
angular.module('myApp.view1')
.filter('filterbytype', function() {
    return function(input, param) {
        if (param) {
            let i=0
            let filteredpokemons = [];
            input.forEach(pokemon => {
                let typeid = pokemon.type.findIndex(elem => elem===param);
                // alert(`${pokemon.name} ${typeid}`);
                if (typeid != -1) {
                    filteredpokemons.push(pokemon);
                };
                i++
            });
            return filteredpokemons
        } else {
            return input
        }
    }
})