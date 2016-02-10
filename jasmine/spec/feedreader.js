/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it('Urls are defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });

        });

        it('Names are defined', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });

        });
    });

    describe('The Menu', function () {

        it('is hidden', function () {
            expect($('body')).toHaveClass('menu-hidden');
        });

        it(' is visible onClick', function () {
            $('.menu-icon-link').trigger('click');
            expect($('body')).toHaveClass('');

            $('.menu-icon-link').trigger('click');
            expect($('body')).toHaveClass('menu-hidden');
        });
    });
    
    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('are loaded and visible', function (done) {
            var Entries = $(".feed, .entry").length;
            /*expect(Entries).toBeGreaterThan(0);
             OR expect($(".feed, .entry").length).toBeGreaterThan(0);
             */
            /*expect($('a')).toHaveClass('.entry-link');*/
            expect(Entries).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function () {

        var feedHtml;

        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('is loaded and changes', function (done) {
            loadFeed(1);
            expect($('.feed').html()).not.toEqual(feedHtml);
            done();
        });
    });
}());

