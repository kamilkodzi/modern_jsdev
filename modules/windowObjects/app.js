//at to this point we was learning basis. Cours guid tells now we ride ;)
//WINDOW METHOD ? OBJECT ? PROPERTIES

// window.console.log(123);

//alert
// window.alert("sdsdsd");

//promt

// const input = prompt();
// alert(input);

// //COMFIRM
// if(confirm("Are you sure?")){
//     console.log("she said yes!! uuhg");
// }else
// {
//     console.log("She canceled it :p");
// }

let val;
let val2;
//OUter height wnd width
val=window.outerHeight;
val2=window.outerWidth;
val=val+" "+val2;


//INNER HEIGHT AND WIDTH
val=window.innerHeight;
val2=window.innerWidth;



//SCROLL POINT
val = window.scrollY;
val = window.scrollX;

//LOCATION Object

val=window.location;
val=window.location.hostname;
val=window.location.href;
val2=window.location.search; //www.host.pl?id=7&name=kamil


//REDIRECT
// window.location.href="http://google.com";

//RELOAD PAGE
// window.location.reload();


//History Object
// window.history.go(-1);

// val= window.history;

// Navigator objec
val = window.navigator;

val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val= window.navigator.language;


console.log(val);