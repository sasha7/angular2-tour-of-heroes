(function() {

    var HelloWorldComponent = function() {};

    HelloWorldComponent.annotations = [
        new ng.core.Component({
            selector: 'hello-world',
            template: '<h1>Hello Angular2!</h1>'
        })
    ];

    var AppComponent = ng.core.Component({
        selector: 'app',
        template: '<hello-world></hello-world>',
        directives: [HelloWorldComponent]
    }).Class({
        constructor: function() {}
    });

    document.addEventListener("DOMContentLoaded", function() {
        ng.platform.browser.bootstrap(AppComponent);
    });

}());
