/**
 * @author Leviathenn
 */

function main(supported){
    console.log("asdasd")
    chrome.runtime.sendMessage({action: "openPopup"}, (response) => {

    });
}
function unsupported(unsupported){

}
fetch("https://raw.githubusercontent.com/Leviathenn/SecureShark/main/manifests/secureShark.json").then((req)=>{
    
    req.json().then((ssmanifest)=>{
        ssmanifest["unsupported"].forEach((unsupportedd)=>{
            fetch(`https://raw.githubusercontent.com/Leviathenn/SecureShark/manifests/manifest/${unsupportedd}`).then((cwd)=>{
                cwd.json().then((mdv)=>{
                    if(window.location.pathname == mdv["url"]){
                        unsupported(mdv)
                    }
                }) 
            })
        });
        ssmanifest["supported"].forEach((supported)=>{
            fetch(`https://raw.githubusercontent.com/Leviathenn/SecureShark/main/manifests/${supported}.json`).then((cwd)=>{
                cwd.json().then((cnw)=>{
                    if(window.location.pathname == cnw["url"]){
                        main(cnw);
                    }
                })
            })
        })
    })
})