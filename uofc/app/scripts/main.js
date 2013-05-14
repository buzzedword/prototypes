require.config({
    shim: {
        'foundation/foundation.min': {
            deps: ['jquery']
        }
    },

    paths: {
        jquery: 'vendor/jquery.min'
    }
});

require([
    'foundation/foundation.min',
    'app'
], function() {
    var app = arguments[arguments.length -1];
    // use app here
    $(document).foundation();
    console.log(app);
});
