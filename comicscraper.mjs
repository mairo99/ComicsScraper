import * as cheerio from 'cheerio';
var url= `https://www.smbc-comics.com`
for (var i=1;i<11;i++){
    console.log('Koomiks ' + i);
   let response = await fetch(url); response = await response.text();
    const $= cheerio.load(response);
    let img = $('#cc-comicbody img#cc-comic');
    console.log(img.attr('src'));
    console.log(img.attr('title'));
    let next= $('a.cc-prev[rel="prev"]');
    url=next.attr('href'); 
    await(1000);
}
