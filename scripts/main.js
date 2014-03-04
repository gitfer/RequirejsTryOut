require.config({
    paths: {
            modObject: 'libs/moduleAsAnObject',
            modFunction: 'libs/moduleAsAFunction'
        }
});
require(['modFunction'], function(moduloIban){
	console.log(moduloIban());
});
