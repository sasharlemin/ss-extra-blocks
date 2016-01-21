(function() {
    'use strict';

    angular
        .module('blocks.analytics')
        .factory('analytics', analytics);

    analytics.$inject = ['$analytics'];

    /* @ngInject */
    function analytics($analytics) {
        var service = {
            trackEvents: trackEvents
        };

        return service;

        function trackEvents(event, category, value) {

            value = typeof value !== 'undefined' ?  value : 0;
            $analytics.eventTrack(event, {category: category, label: category, value: value});
        }
    }
}());
