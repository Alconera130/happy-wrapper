const fetch = require('node-fetch')

module.exports.isOnline = async function () {
    let res = await fetch('https://api.itshappy.ga')
    res = res.status

    if (res === 200) {
        return true
    } else {
        return false
    }
}