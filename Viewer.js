import {db} from './DBController.js'

getPassword()
{
    const passwordText = db.List()
    document.getElementById("passwordLister").innerText = passwordText
}

insertPassword()
{
    db.Input("test", "cleb")
}