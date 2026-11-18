let miniblokel = document.querySelector(".mini-blok");
let minixel = document.querySelector(".mini-x");
let minimenux = document.querySelector(".mini-menu-x");
let minimenulogo = document.querySelector(".mini-menu-logo");




function menuochil() {
    miniblokel.style.display = "flex";
}

function menuyopil(){
    miniblokel.style.display = "none";
}



let kuntunimgel = document.querySelector(".kun-tun-img")

function tunkun(){
    if(kuntunimgel.alt == "kun"){
        kuntunimgel.alt = "tun";
        kuntunimgel.src = "./img/tun.png";
        minimenulogo.src = "./img/mini-menu-kun.png";
        minimenux.src = "./img/xx-kun.png";
        document.documentElement.style.setProperty("--text" , "#282525");
        document.documentElement.style.setProperty("--tun-kun" , "#fff");
        document.documentElement.style.setProperty("--textp" , "#5D5656");
        document.documentElement.style.setProperty("--oyinchoq" , "#fff");
        document.documentElement.style.setProperty("--nuqta" , "#5D5656");
        document.documentElement.style.setProperty("--good" , "#DC3845");
        document.documentElement.style.setProperty("--tugma" , "#282525");
        
    }
    else{
        kuntunimgel.alt = "kun";
        kuntunimgel.src = "./img/kun.png";
        minimenulogo.src = "./img/mini-menu.png";
        minimenux.src = "./img/xx.png";
        document.documentElement.style.setProperty("--text" , "#F3F2F2");
        document.documentElement.style.setProperty("--tun-kun" , "#251819");
        document.documentElement.style.setProperty("--textp" , "#C2BDBD");
        document.documentElement.style.setProperty("--oyinchoq" , "#2F2223");
        document.documentElement.style.setProperty("--nuqta" , "#2F2223");
        document.documentElement.style.setProperty("--good" , "#2F2223");
        document.documentElement.style.setProperty("--tugma" , "#DC3845");
    }
}
