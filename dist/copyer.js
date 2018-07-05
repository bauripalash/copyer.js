/*
 * Copyer v1.0.0
 * Copyright 2018 XED Technologies & Palash Bauri
 * Released under the MIT License
 * @preserve
 */
function copyer(e){var t=document.getElementById(e);if(document.selection){if(t.nodeName.toLowerCase()==="input"){document.getElementById(e).select();document.execCommand("copy")}else{var o=document.body.createTextRange();o.moveToElementText(document.getElementById(e));o.select();document.execCommand("copy")}}else if(window.getSelection){if(t.nodeName.toLowerCase()==="input"){document.getElementById(e).select();document.execCommand("copy")}else{var o=document.createRange();o.selectNode(document.getElementById(e));window.getSelection().removeAllRanges();window.getSelection().addRange(o);document.execCommand("copy")}}}
