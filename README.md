# My Favorite Milwaukee Brew Houses

This NodeJS app provides a minimalistic Google Map of all my favorite brew houses in Milwaukee, WI USA.  I even give a personal review and recommendation just to tempt you into trying my favorites.

You can view the online version of this app on Heroku at [https://milwaukee-brews.herokuapp.com/](https://milwaukee-brews.herokuapp.com/).

## How to Run this App

You can view it online or clone it down to your local machine.  To clone it, do the following:

1. Open up terminal.
2. Navigate to where you want to clone it.
3. Type: `git clone https://github.com/hellofromtonya/milwaukee-brews.git`.
4. Type: `cd milwaukee-brews`
5. Start up your Node server.
6. Open it up in your browser.  Click on any of the markers.

## How it was built

This app is built with:

- [Google Maps API](https://developers.google.com/maps/)
- [KnockoutJS](http://knockoutjs.com/)
- [Yelp Fusion v3 API](https://www.yelp.com/developers/documentation/v3)
- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Font Awesome](http://fontawesome.io/)
- [CSS Normalize](http://necolas.github.io/normalize.css/)
- JavaScript ES6 OOP
- Sass

### Why Node?  

Great question. Yelp's API switched to OAuth 2, which requires a server to act as the proxy between the front-end and Yelp. Okay, we can do that.  So I built a very simple Node web server.

For the Yelp Fusion API, I used the [Yelp Fusion GitHub](https://github.com/Yelp/yelp-fusion/blob/master/fusion/node/sample.js) repository as a baseline and then adapted it for my needs. 

### Why KnockoutJS

Why not? It's lean and simple.  Plus, it was fun to give it a go.

## Credits

- The Yelp Fusion API code is an adaption of the [sample provided by Yelp](https://github.com/Yelp/yelp-fusion/blob/master/fusion/node/sample.js).
- The Google Map styles are provided by [Snazzy Maps](https://snazzymaps.com/style/132/light-gray).
- The sidebar sliding animation is an adaption of ["Off-Canvas Navigation Transitions"](https://tympanus.net/codrops/2013/08/28/transitions-for-off-canvas-navigations/) article by Mary Lou via Codrops.
- The bubbles on the Splash page are an adaption inspired from [Jacob Gibellini's pen](https://codepen.io/jacobgibellini/pen/zrrWWQ?q=boilin%27%20bubbles&limit=all&order=popularity&depth=everything&show_forks=false).

## Disclaimer

I built this app as part of the [Udacity Front-End Web Developer Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) program.

This repository is not for general use, but rather an exercise as part of an education program.

Cheers and &lt;happy coding&gt;,    
Tonya