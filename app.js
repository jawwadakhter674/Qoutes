
const getQoutes =async ()=>{
    var qoute= document.getElementById('qoute')
    var api='https://type.fit/api/quotes';
    var btn = document.getElementById('btn')

    const data = await fetch(api);
    const objData = await data.json()
    // console.log(objData[0].author)
    let number=0;

    btn.addEventListener('click',()=>{
        number++
        qoute.innerHTML=` 
        <i class="fas fa-quote-left"></i>
        <p>${objData[number].text}</p>
        <a href="">${objData[number].author}</a>
    `
    })



    qoute.innerHTML=` 
    <i class="fas fa-quote-left"></i>
    <p>${objData[number].text}</p>
    <a href="">${objData[number].author}</a>
`


   
}


getQoutes()