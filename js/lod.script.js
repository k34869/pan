function getQueryVariable(variable){var query=window.location.search.substring(1);var vars=query.split("&");for(var i=0;i<vars.length;i++){var pair=vars[i].split("=");if(pair[0]==variable){return pair[1]}}return(false)}url_var=decodeURI(getQueryVariable("s")).replace(/\+/g,' ');function searchOn(){document.getElementById("text").style.display="inline-block";document.getElementsByClassName("tsCloose")[0].style.display="inline-block";document.getElementsByClassName("fa-search")[0].style.display="none";document.getElementsByClassName("fa-adjust")[0].style.display="none";setTimeout(function(){document.getElementById("text").style.opacity=1;document.getElementsByClassName("tsCloose")[0].style.opacity=1},.1)}function searchOff(){document.getElementsByClassName("tsCloose")[0].style.opacity=0;document.getElementById("text").style.opacity=0;setTimeout(function(){document.getElementsByClassName("tsCloose")[0].style.display="none";document.getElementById("text").style.display="none"},150);setTimeout(function(){document.getElementsByClassName("fa-search")[0].style.display="inline";document.getElementsByClassName("fa-adjust")[0].style.display="inline"},150)}function getCookie(c_name){if(document.cookie.length>0){c_start=document.cookie.indexOf(c_name+"=");if(c_start!=-1){c_start=c_start+c_name.length+1;c_end=document.cookie.indexOf(";",c_start);if(c_end==-1){c_end=document.cookie.length}return unescape(document.cookie.substring(c_start,c_end))}}return""}function Setcookie(name,value){var expdate=new Date();expdate.setTime(expdate.getTime()+30*60*1000);document.cookie=name+"="+value+";expires="+expdate.toGMTString()+";path=/"}var temp=0;function onCss(){var cookies=getCookie("onCss");if(cookies=="https://cdn.jsdelivr.net/gh/k34869/zhu/css/style.min.css"){temp=1}if(temp==0){document.getElementById("onCss").href="https://cdn.jsdelivr.net/gh/k34869/zhu/css/style.min.css";temp=1;Setcookie("onCss","https://cdn.jsdelivr.net/gh/k34869/zhu/css/style.min.css")}else{document.getElementById("onCss").href="https://cdn.jsdelivr.net/gh/k34869/zhu/css/styleNight.min.css";temp=0;Setcookie("onCss","https://cdn.jsdelivr.net/gh/k34869/zhu/css/styleNight.min.css")}}var cookies=getCookie("onCss");