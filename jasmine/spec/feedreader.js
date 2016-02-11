$(function () {

    //RSS Feeds Suite
    describe('RSS Feeds', function () {

        //Checks that allFeeds is defined and is not empty
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //Checks that each feed in allFeeds has a URL defined and is not empty
        it('Urls are defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });

        });

        //Checks that each feed in allFeeds has a name defined and is not empty
        it('Names are defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });

        });
    });

    //Menu Suite
    describe('The Menu', function () {

        //Checks that the menu is hidden by default
        it('is hidden', function () {
            expect($('body')).toHaveClass('menu-hidden');
        });

        //Checks that the menu-hidden class is toggled off
        it(' is visible onClick', function () {
            $('.menu-icon-link').trigger('click');
            expect($('body')).not.toHaveClass('menu-hidden');
        //Checks that the menu-hidden class is toggled on
            $('.menu-icon-link').trigger('click');
            expect($('body')).toHaveClass('menu-hidden');
        });
    });

    //Initial Entries Suite
    describe('Initial Entries', function () {

        //Checks that the data is loaded before proceeding
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        //Checks that loadFeed adds at least one .entry element to the .feed container
        it('are loaded and visible', function (done) {
            var Entries = $(".feed, .entry").length;
            expect(Entries).toBeGreaterThan(0);
            done();
        });
    });

    //New Feed Selection Suite
    describe('New Feed Selection', function () {

        //Initial feed HTML so we can check changes
        var feedHtml;

        //Checks that the data is loaded before proceeding
        beforeEach(function (done) {
            loadFeed(0, function () {
                feedHtml = $('.feed').html();
                done();
            });
        });

        //Checks that the initial feed HTML has changed
        it('is loaded and changes', function (done) {
            loadFeed(1, function() {
                /*expect(feedHtml).not.toEqual($('.feed').html());*/
                expect($('.feed').html()).not.toEqual(feedHtml);
                done();
            });
        });
    });
}());

