$(function() {

    describe('RSS Feeds', function() {
        // 6.- Edit the allFeeds variable in ./js/app.js to make the provided test fail and see how Jasmine visualizes this failure in your application.
        // 7.- Return the allFeeds variable to a passing state.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // 8.- Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
        it('each Feed has a URL defined and non empty', function() {
          for (var i = 0; i < allFeeds.length; i++) {
            expect(allFeeds[i].url).toBeDefined();
            expect(allFeeds[i].url).toBeTruthy();
          }
        });

        // 9.- Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
        it('each Feed has a Name defined and non empty', function() {
          for (var i = 0; i < allFeeds.length; i++) {
            expect(allFeeds[i].name).toBeDefined();
            expect(allFeeds[i].name).toBeTruthy();
          }
        });
    });

    // 10.- Write a new test suite named "The menu".
    describe('The Menu', function() {

      // 11.- Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
      it('check initially menu is hidden', function(){
        expect($('body').hasClass('menu-hidden')).toBe(true);
      })
      // 12.- Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
      it('check whether the menu changes visibility when the menu icon is clicked', function(){
        $('.menu-icon-link').trigger('click');
        expect($('body').hasClass('menu-hidden')).toBe(false);
        $('.menu-icon-link').trigger('click');
        expect($('body').hasClass('menu-hidden')).toBe(true);
       });
    });



    // 13.- Write a test suite named "Initial Entries".
    describe('Initial Entries', function() {

      // 14.- Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
      beforeEach(function(done){
          loadFeed(0,done);
      });
      it("there is at least a single .entry element within the .feed container.", function(done){
          expect($('.feed').children().length).not.toBe(0);
          done();
      });

    });

    // 15.- Write a test suite named "New Feed Selection".
    describe('New Feed Selection', function() {
      var titleEntry;
      var headerFeeds;
      // 16.- Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
      beforeEach(function(done) {
        loadFeed(0, function() {
          titleEntry = $('.feed .entry h2').html();
          headerFeeds = $('h1.header-title').html();
          loadFeed(1, function() {
              done();
          });
        });
      });

      it('preliminary content', function(done) {
          expect($(".feed .entry h2").html()).not.toBe(titleEntry);
          done();
      });

      it('is new feed loaded', function(done) {
          expect($("h1.header-title").html()).not.toBe(headerFeeds);
          done();
      });
      
      afterAll(function(done) {
          loadFeed(0, done);
      });

    });

}());
