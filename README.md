# happy-wrapper

A *User friendly* It'sHappy API Wrapper for Node JS

## Installation
``` 
npm i happy-wrapper 
```

## Setup
```js
const happy = require('happy-wrapper')
```

## End Points

> All available End Points as of v1.5.0

```js
happy.gay('url')
happy.simp('url')
happy.godCat('url')
happy.elmo('message 1', 'message 2')
happy.tradeOffer('message 1', 'message 2')
happy.slap('url 1', 'url 2')
happy.ship('url 1', 'url 2')
happy.think('url')
happy.cat('option') //options: fact, image
happy.dog('option') //options: fact, image
happy.axolotl('option') //options: fact, image
happy.eightBall()
happy.meme('option') //options: title, image, link, upvotes, downvotes
happy.joke('option') //options: setup, punchline
happy.morse('option', 'message') //options: encode, decode
happy.weather('state', 'option') //options: city, region, country, condition, temp. Temp returns json
happy.lyrics('title', 'option') //options: id, title, artist, thumbnail, lyrics
happy.randomColor()
```

## Tips

> If the result returns a promise eg: `Promise { <pending> }` do:

```js
let buffer /*You can name this whatever you like*/ = happy.lyrics('lovely', 'artist') //As an example

buffer.then(function (data) {
    return data
})
```

> Image End Points are not working sometimes, what to do?

Be cautious on what links you put in the function! Or if nothing happens, Open an issue in our GitHub.

Or if you know how to fix, simply fork our project, make the changes, and open a pull request.

## Developers

> ItsHappy#3837 - API

> Alconera130#4376 - API Wrapper