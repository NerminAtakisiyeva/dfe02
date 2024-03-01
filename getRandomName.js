const getRandomName = (len, ext = 'txt') => {
    let name = ''
    for(let i=0; i<len; i++) {
        const asciiIndex = 97 + (Math.random()*26)
        const herf = String.fromCharCode(asciiIndex)
        name += herf
    }
    return name + '.' + ext
}
export default getRandomName