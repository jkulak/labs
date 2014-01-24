$(function(){
    var object = {};
    var proxy = {};

    // Add Events to object
    _.extend(object, Backbone.Events);
    object.name = "Obiekcik";

    object.on('twoja:stara', function(msg) {
        alert('ts ' + msg + ' - this: ' + this.name);    
    });
    $('#runme').click(function() {
        object.trigger("twoja:stara", this, this);
    });

    
    var proxy = {};
    _.extend(proxy, Backbone.Events);

    var elem1 = {};
    _.extend(elem1, Backbone.Events);

    var elem2 = {};
    _.extend(elem2, Backbone.Events);

    proxy.on("all", function(eventName) {
        elem1.trigger(eventName);
        elem2.trigger(eventName);
    });

    elem1.on('subtitles:downloaded', function() {
        alert('elem1 subtitles:downloaded');
    });

    elem2.on('subtitles:downloaded', function() {
        alert('elem2 subtitles:downloaded');
    });

    proxy.trigger('allx', "subtitles:downloaded");

    elem1.listenTo(elem2, "change", function () {
        alert("elem1 is saying that elem2 got changes!");
    });

    elem2.on("change", function () {
        //actually do nothing;
    })

    // elem2.trigger("change");


    
});