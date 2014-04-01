(function() {
    "use strict";

    window.onetreeplanted = window.onetreeplanted || {};
    var onetreeplanted = window.onetreeplanted;

    $.ajaxSetup({ cache: false });

    /**
     * This method will init all onetreeplanted functions
     *
     * @public
     * @namespace onetreeplanted
     * @method init
     * @return {undefined}
     **/
    onetreeplanted.init = function () {
        var t = this;

        t.twitterHeight();
    };

    onetreeplanted.$page = $('body,html');
    onetreeplanted.$main = $("#main");

    onetreeplanted.twitterHeight = function () {
        var t = this,
            height = 0;
        t.o = {
            twitter: "iframe.twitter-timeline",
            leftCol: "#home_articles",
            sections: ".section.article"
        };

        t.$container = onetreeplanted.$page;

        t.$twitter = t.$container.find(t.o.twitter);
        t.$leftCol = t.$container.find(t.o.leftCol);
        t.$sections = t.$leftCol.find(t.o.sections);

        if(t.$leftCol.length) {
            t.$sections.each(function(i, el){
                height += $(el).height();
            });
        }
        console.log('here');
        console.log('twitter height: ', t.$twitter.height());
        console.log('left col height: ', t.$leftCol.height());
        console.log('height: ', height);

        if (t.$twitter.length && t.$leftCol.length) {
            t.$twitter.attr('height', height);
        }
    };

    $(window).load(function () {
        onetreeplanted.init();
    });

    $.extend(window.onetreeplanted, onetreeplanted);
    return onetreeplanted;
}());