/**
 * @author Leviathenn
 */

function main(supported){
    console.log("asdasd")
    chrome.runtime.sendMessage({type:'unsupported'})
}

fetch("https://raw.githubusercontent.com/Leviathenn/SecureShark/main/manifests/secureShark.json").then((req)=>{
    req.json().then((ssmanifest)=>{
        ssmanifest["supported"].forEach((supported)=>{
            fetch(`https://raw.githubusercontent.com/Leviathenn/SecureShark/main/manifests/${supported}.json`).then((cwd)=>{
                if(window.location.pathname == supported["url"]){
                    main(supported);
                }
            })
        })
    })
})