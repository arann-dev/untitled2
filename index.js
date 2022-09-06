var request = require('request-promise');


document.getElementById('install').addEventListener('click',()=>{
    var options = {
            method: 'POST',
            uri:"http://127.0.0.1:5000/runscript",
            form:{value: 'runn'}
        }
        request(options)

})

