(function() {
    'use strict';

    angular
        .module('blocks.exception')
        .factory('exception', exception);

    /* @ngInject */
    function exception($q, $window) {
        var service = {
            catcher: catcher
        };
        return service;

        function catcher(message, e) {

            var newMessage = 'AJAX Error: ' +
                message  + ' ' +
                e.config.method + ' ' +
                e.status + ' ' +
                e.config.url;

            if ($window.atatus) {
                atatus.notify(new Error(newMessage), {
                    config: e.config,
                    status: e.status,
                    user: {
                        id: '751'
                    }
                });
            }

            var thrownDescription;
            if (e.data && e.data.description) {
                thrownDescription = '\n' + e.data.description;
                newMessage = message + thrownDescription;
            }
            e.data.description = newMessage;

        }
    }
})();
