
class Utilities {

    async sleep (ms) {
        await browser.pause(ms);
    };

    async randomNumeric(min, max){
        const num = Math.floor(Math.random() * (+max - +min) + +min); 
        return await num.toString();
    };
}


module.exports = new Utilities();