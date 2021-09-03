const fetch = require('node-fetch')
const baseurl = 'https://api.itshappy.ga/v2/'

module.exports.gay = async function (url) {
    if (!url) throw new Error("API Error: Invalid usage for 'gay'")
    let image = `${baseurl}image/gay?image=${url}`

    return image
}

module.exports.simp = async function (url) {
    if (!url) throw new Error("API Error: Invalid usage for 'simp'")
    let image = `${baseurl}image/simp?image=${url}`

    return image
}

module.exports.godCat = async function (url) {
    if (!url) throw new Error("API Error: Invalid usage for 'godCat'")
    let image = `${basurl}image/gotcat?image=${url}`
}

module.exports.petGif = async function (url) {
    if (!url) throw new Error("APi Error: Invali1d usage for 'petGif'")
    let image = `${baseurl}image/petgif?image=${url}`
    
    return image
}

module.exports.elmo = async function (message1, message2) {
    if (!message1) throw new Error("API Error: Too few arguments for 'elmo'")
    if (!message2) throw new Error("API Error: Too few arguments for 'elmo'")

    if (message1.length > 10) throw new Error("API Error: Argument must not be above 10 characters for 'elmo'")
    if (message2.length > 10) throw new Error("API Error: Argument must not be above 10 characters for 'elmo'")

    let image = `${baseurl}image/elmo?right=${encodeURIComponent(message2)}&left=${encodeURIComponent(message1)}`

    return image
}

module.exports.tradeOffer = async function (message1, message2) {
    if (!message1) throw new Error("API Error: Too few arguments for 'tradeOffer'")
    if (!message2) throw new Error("API Error: Too few arguments for 'tradeOffer'")

    if (message1.length > 10) throw new Error("API Error: Argument must not be above 10 characters for 'tradeOffer'")
    if (message2.length > 10) throw new Error("API Error: Argument must not be above 10 characters for 'tradeOffer'")

    let image = `${baseurl}image/tradeoffer?offer1=${encodeURIComponent(message1)}&offer2=${encodeURIComponent(message2)}`

    return image
}

module.exports.slap = async function (url1, url2) {
    if (!url1) throw new Error("API Error: Too few arguments for 'slap'")
    if (!url2) throw new Error("APi Error: Too few arguments for 'slap'")

    let image = `${baseurl}image/slap?image1=${url1}&image2=${url2}`

    return image
}

module.exports.ship = async function (url1, url2) {
    if (!url1) throw new Error("API Error: Too few arguments for 'ship'")
    if (!url2) throw new Error("APi Error: Too few arguments for 'ship'")

    let image = `${baseurl}image/ship?image1=${url1}&image2=${url2}`

    return image
}

module.exports.think = async function (url) {
    if (!url) throw new Error("API Error: Invalid usage for 'think'")
    let image = `${baseurl}image/think?image=${url}`

    return image
}

module.exports.cat = async function (option) {
    if (option.toLowerCase() === 'fact') {
        
        let url = `${baseurl}animal/cat`
        let res = await fetch(url)

        res = await res.json()
        res = res.fact

        return res

    } else if (option.toLowerCase() === 'image') {

        let url = `${baseurl}animal/cat`
        let res = await fetch(url)

        res = await res.json()
        res = res.image

        return res

    } else {
        throw new Error("API Error: Invalid option for 'cat' (fact, image)")
    }
}

module.exports.dog = async function (option) {
    if (option.toLowerCase() === 'fact') {
        
        let url = `${baseurl}animal/dog`
        let res = await fetch(url)

        res = await res.json()
        res = res.fact

        return res

    } else if (option.toLowerCase() === 'image') {

        let url = `${baseurl}animal/dog`
        let res = await fetch(url)

        res = await res.json()
        res = res.image

        return res

    } else {
        throw new Error("API Error: Invalid option for 'dog' (fact, image)")
    }
}

module.exports.axolotl = async function (option) {
    if (option.toLowerCase() === 'fact') {
        
        let url = `${baseurl}animal/axolotl`
        let res = await fetch(url)

        res = await res.json()
        res = res.fact

        return res

    } else if (option.toLowerCase() === 'image') {

        let url = `${baseurl}animal/axolotl`
        let res = await fetch(url)

        res = await res.json()
        res = res.image

        return res

    } else {
        throw new Error("API Error: Invalid option for 'axolotl' (fact, image)")
    }
}

module.exports.eightBall = async function () {
    let url = `${baseurl}fun/eightball`
    let res = await fetch(url)

    res = await res.json()
    res = res.reply

    return res
}

module.exports.meme = async function (option) {
    if (option.toLowerCase() === 'title') {

        let url = `${baseurl}fun/meme`
        let res = await fetch(url)
    
        res = await res.json()
        res = res.title
    
        return res

    } else if (option.toLowerCase() === 'image') {

        let url = `${baseurl}fun/meme`
        let res = await fetch(url)
    
        res = await res.json()
        res = res.image
    
        return res

    } else if (option.toLowerCase() === 'upvotes') {

        let url = `${baseurl}fun/meme`
        let res = await fetch(url)
    
        res = await res.json()
        res = res.upvotes
    
        return res

    } else if (option.toLowerCase() === 'downvotes') {

        let url = `${baseurl}fun/meme`
        let res = await fetch(url)

        res = await res.json()
        res = res.downvotes

        return res

    } else if (option.toLowerCase() === 'link') {

        let url = `${baseurl}fun/meme`
        let res = await fetch(url)

        res = await res.json()
        res = res.link

        return res

    } else {
        throw new Error("API Error: Invalid option in 'meme' (title, image, link, upvotes, downvotes)")
    }
}

module.exports.joke = async function (option) {
    if (option.toLowerCase() === 'setup') {

        let url = `${baseurl}fun/joke`
        let res = await fetch(url)

        res = await res.json()
        res = res.setup

        return res

    } else if (option.toLowerCase() === 'punchline') {

        let url = `${baseurl}fun/joke`
        let res = await fetch(url)

        res = await res.json()
        res = res.punchLine

        return res

    } else {
        throw new Error("API Error: Invalid option in 'joke' (setup, punchline)")
    }
}

module.exports.morse = async function (option, message) {
    if (option.toLowerCase() === 'encode') {

        if (!message) throw new Error("API Error: Invalid usage for 'morse'")

        let url = `${baseurl}utility/morse/encode?message=${encodeURIComponent(message)}`
        let res = await fetch(url)

        res = await res.json()
        res = res.morse

        return res

    } else if (option.toLowercase() === 'decode') {

        if (!message) throw new Error("API Error: Invalid usage for 'morse'")

        let url = `${baseurl}utility/morse/decode?message=${encodeURIComponent(message)}`
        let res = await fetch(url)

        res = await res.json()
        res = res.morse

        return res

    } else {
        throw new Error("API Error: Invalid option for 'morse' (encode, decode)")
    }
}

module.exports.weather = async function (state, option) {
    if (!state) throw new Error("API Error: Invalid usage for 'morse'")

    let url = `${baseurl}utility/weather?location=${encodeURIComponent(state)}`
    let res = await fetch(url)

    res = await res.json()
    if (res.error) throw new Error("API Error: Invalid state in 'weather'")

    res = res[option]
    if (!res) throw new Error("API Error: Invalid option in 'weather'")

    return res
}

module.exports.lyrics = async function (title, option = 'lyrics') {
    let url = `${baseurl}utility/lyrics?title=${encodeURIComponent(title)}`
    let res = await fetch(url)

    res = await res.json()
    if (res.error) throw new Error("API Error: Invalid state in 'weather'")

    res = res[option]
    if (!res) throw new Error("API Error: Invalid option in 'lyrics'")

    return res
}

module.exports.randomColor = async function () {
    let url = `${baseurl}utility/randomcolor`
    let res = fetch(url)
        .then(result => result.json())
        .then(result =>  res = result)

    return res
}
