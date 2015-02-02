'use strict';

angular.module('ngBootstrapMaterial', []).directive('materialInput', function() {
    return {
        compile: function(elem, attr, tr) {
          $.material.input("#" + attr.id);
        }
    };
}).directive('materialRipple', function() {
    return {
        compile: function(elem, attr, tr) {
          $.material.ripples("#" + attr.id);
        }
    };
}).directive('materialCheckbox', function() {
    return {
        compile: function(elem, attr, tr) {
          $.material.checkbox("#" + attr.id);
        }
    };
}).directive('materialRadio', function() {
    return {
        compile: function(elem, attr, tr) {
          $.material.radio("#" + attr.id);
        }
    };
});