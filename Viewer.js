
async function GetPassword()
{
    document.getElementById("passwordLister").innerHTML += await fetch("no-cors", "http://localhost:1500")
    //.then(res => res.json()).then(data => console.log(data))
    
}

function InsertPassword()
{
    return "texto"
}
