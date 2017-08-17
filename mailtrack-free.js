// ==UserScript==
// @name         Mailtrack Free
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Free use of MailTrack
// @author       Sebastian Breit
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(removeAds, 1000);
})();

function removeAds(){
    var i;

    clickAllElementsByClass("mt-remove");
    clickAllElementsByClass("close");


    /*var eee = document.getElementsByClassName("mt-tool-email-notification");
    for(i=0; i<eee.length;i++){
        var elem = eee[i].getElementsByClassName("J-Z-I-Jp");
        for(var j=0;j<elem.length;j++){
            elem[j].click();
        }
    }*/
}

function clickAllElementsByClass(daClass){
    var ttt = document.getElementsByClassName(daClass);
    for(i=0; i<ttt.length;i++){
        ttt[i].click();
    }
}
