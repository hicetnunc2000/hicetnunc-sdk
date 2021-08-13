const web3 = require('web3')

module.exports.toHexPad = function (string) { return web3.utils.utf8toHex(string).padEnd(66, '0'); };

module.exports.toHex = (string) => {

        var result = ''
        for (var i = 0; i < string.length; i++) {
            result += string.charCodeAt(i).toString(16)
        }
        return result
}

