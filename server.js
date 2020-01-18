var express = require('express');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var cheerio = require('cheerio');
var axios = require('axios');

axios.get('https://www.nytimes.com/').then(response => {

    var $ = cheerio.load(response.data);

    var results = [];

    $('section').find($('.apple'))

    // $('article').each((i, element) => {

    //     var test = $(element).text();
    //     // var link = $(element).parent().parent().attr('href');

    //     results.push(test);
    // })

    console.log(results);

})