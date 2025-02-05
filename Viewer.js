
function GetPassword()
{
    let passwordText = "teste"
    //document.getElementById("passwordLister").innerHTML += InsertPassword() + "<br>"
    document.getElementById("passwordLister").innerHTML += fetch("no-cors", "http://localhost:1500")
        .then(res => res.json()).then(data => console.log(data))
    
}

function InsertPassword()
{
    return "texto"
}
