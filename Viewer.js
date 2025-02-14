function GetPassword()
{
    document.getElementById("passwordLister").innerHTML += JSON.stringify(fetch("no-cors", "http://localhost:1500")) + "<br>"
}

function InsertPassword()
{
    return "texto"
}
