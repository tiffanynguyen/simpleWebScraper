var request = require('request');
var cheerio = require('cheerio');
var readlineSync = require('readline-sync');

var urlScrape = readlineSync.question('What book website do you want to scrape? ');

request({
    url: urlScrape,
}, function (error, response, body) {
    if (!error) {
        var $ = cheerio.load(body);
        $('.js-subbuzz__title-text').filter(function () {
            var data = $(this);
            var bookTitle = data.text()
            console.log(bookTitle);
        })
    } else {
        console.log('Error with request!')
    }
});


