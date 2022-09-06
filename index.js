document.getElementById('install').addEventListener('click',async  ()=>{
    console.log("click here ")
        document.getElementById('spin-loading').style.display = 'block'
        const response = await fetch('http://127.0.0.1:5000/runscript', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value: 'runn'
            })
        })
    if(response){
        document.getElementById('spin-loading').style.display = 'none'
    }


})

