function lagreMinside1(){
  console.log("KLIKK");
  /*document.getElementById("programmering").style.backgroundColor="red";
  document.getElementsByTagName("body").style.backgroundColor="black";
  document.getElementById("sideitem1").style.backgroundColor="blue"; */
  /*document.getElementById("programmering").classList.add("blueC");
  onclick="lagreMinside()"
  */
  
  //programmering
if((document.getElementById("mySelect1").selectedIndex==0)){
  document.getElementById("programmering").classList.add("blueC");
document.getElementsByClassName("sideitem1")[0].classList.add("blueC");

}else if((document.getElementById("mySelect1").selectedIndex==1)){
  document.getElementById("programmering").classList.add("redC");
  document.getElementsByClassName("sideitem1")[0].classList.add("redC");

}else if((document.getElementById("mySelect1").selectedIndex==2)){
  document.getElementById("programmering").classList.add("yellowC");
  document.getElementsByClassName("sideitem1")[0].classList.add("yellowC");
}
}
function lagreMinside2(){
//webutvikling
if((document.getElementById("mySelect2").selectedIndex==0)){
  document.getElementById("webutvikling").classList.add("blueC");
document.getElementsByClassName("sideitem2")[0].classList.add("blueC");

}else if((document.getElementById("mySelect2").selectedIndex==1)){
  document.getElementById("webutvikling").classList.add("redC");
  document.getElementsByClassName("sideitem2")[0].classList.add("redC");

}else if((document.getElementById("mySelect2").selectedIndex==2)){
  document.getElementById("webutvikling").classList.add("yellowC");
  document.getElementsByClassName("sideitem2")[0].classList.add("yellowC");
}
}
function lagreMinside3(){
//matte
if((document.getElementById("mySelect3").selectedIndex==0)){
  document.getElementById("matematikk").classList.add("blueC");
document.getElementsByClassName("sideitem3")[0].classList.add("blueC");

}else if((document.getElementById("mySelect3").selectedIndex==1)){
  document.getElementById("webutvikling").classList.add("redC");
  document.getElementsByClassName("sideitem3")[0].classList.add("redC");

}else if((document.getElementById("mySelect3").selectedIndex==2)){
  document.getElementById("matematikk").classList.add("yellowC");
  document.getElementsByClassName("sideitem3")[0].classList.add("yellowC");
}
}

document.getElementById("lagre").addEventListener("click",() =>{
  lagreMinside1();
  lagreMinside2();
  lagreMinside3();
  localStorage.setItem('user', JSON.stringify(user));
});


    /*var textInput = document.getElementById("textareaID").value

      function(displaytext) */

  /*function textSubmit() {

    var t = document.getElementById("textareaID").value;
    document.getElementById("outputtext").innerHTML = t;


    var textInput = document.getElementById("").value;
    
    document.getElementById("displayHer").innerHTML = textInput;
  } */






console.log("heiiiiiaa");

//MIT License

/*Copyright (c) 2018 Ben Buchanan (https://200ok.com.au/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:


The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
//Copyright (c) 2018 Ben Buchanan (https://200ok.com.au/)
//MIT License


//add listener for click på skip-link som setter focus på h1 eller h2 osv - 
    document.getElementById('hopptilmain').addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.getElementById('maincontent');
        target.setAttribute('tabindex', '-1');
        target.focus();
      });
      document.getElementById('hopptilmain').addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.getElementById('article_profil');
        target.setAttribute('tabindex', '-1');
        target.focus();
      });


/*      function myFunction() {
        var element = document.getElementById("myDIV");
        element.className = element.className.replace(/\bmystyle\b/g, "");
      }
Denne koden kan slette en class "mystyle" (etter replace) fra elementet "myDIV" */









