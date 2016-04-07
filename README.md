P6 - Feed-Reader-Testing
===============================
## How to load P6 - Feed-Reader-Testing
Inside project P6 - Feed-Reader-Testing there are 4 folders css, images & js also you will find an index.html and README.md. to lunch the P6 - Feed-Reader-Testing you need to open index.html in one browser.
* /css/
* /fonts/
* /jasmine /
* /js /
* /index.html <-- You need to open this file in any browser.
* /README.md

## How P6 - Feed-Reader-Testing works
Once you lunched the P6 - Feed-Reader-Testing in the browser, you can Click the menu button and you will see in the left side the preloaded links that you can click and see feeds for the selected link.
The content and the title will change for each Link into the menu.

![P6-Feed-Reader-Testing](https://github.com/fernandoawri/P6---Feed-Reader-Testing/blob/master/screenshot.jpg)

### How to validate along with Jasmine JS
1. Inside of the jasmine/spec/ you will find feedreader.js where all the test are defined.
2. There are 4 test suites
3. The 'RSS Feeds' test suit has 3 it functions to check 'allFeeds is defined', 'each Feed has a URL defined and non empty', & 'each Feed has a Name defined and non empty'.
3. The 'The Menu' test suit has 2 it functions to check 'check initially menu is hidden', & 'check whether the menu changes visibility when the menu icon is clicked'.
4. The 'Initial Entries' test suit has one it function 'there is at least a single .entry element within the .feed container.' that depends of the beforeEach function who ensures the loadFeed is complete.
5. The 'New Feed Selection' test suit has 2 it functions that depends of the beforeEach function who ensures the loadFeed is complete and keeps the title and header to verify if the it function 'preliminary content', & 'is new feed loaded' have changed then the afterAll function is called to return to the original feeds.
