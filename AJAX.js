document.querySelector('.images').addEventListener('click', () => {
    const xhr = new XMLHttpRequest()
    let url=`https://jsonplaceholder.typicode.com/photos?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-09`
    xhr.open('GET', url)
    xhr.onreadystatechange = () => {
        if(xhr.status === 200 && xhr.readyState === 4) {
            const response = JSON.parse(xhr.responseText)

            let output = ''
            for(let i=0; i < 4; i++) {
                output += `
                <div style="margin:auto; padding:auto">
                <img style="width:300px;height:200px;" src=${response[i].url}/>                
                </div>
                `
            }
            console.log(output);
document.querySelector('#galler').innerHTML=output
            }
        }
    xhr.send()
    })