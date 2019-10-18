



    /*var textInput = document.getElementById("textareaID").value

      function(displaytext) */

  /*function textSubmit() {

    var t = document.getElementById("textareaID").value;
    document.getElementById("outputtext").innerHTML = t;


    var textInput = document.getElementById("").value;
    
    document.getElementById("displayHer").innerHTML = textInput;
  } */

 
  function checkbox1() {
      // Get the checkbox
      var checkBox = document.getElementById("checkbox1");
      // Get the element
      var text = document.getElementById("popupsettings");
      var main = document.getElementsByTagName("main");
    
      // If the checkbox is checked--
      if (checkBox.checked == true){
        text.style.backgroundColor = "black";
        text.style.color = "white";

      } else {
        text.style.backgroundColor = "white";
        text.style.color = "black";
      }
    }




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


/*      function myFunction() {
        var element = document.getElementById("myDIV");
        element.className = element.className.replace(/\bmystyle\b/g, "");
      }
Denne koden kan slette en class "mystyle" (etter replace) fra elementet "myDIV" */

function sizeHideAria(){
    // skaff høyde og bredde  med window.innerWidth
    if (window.innerWidth <= 860) {

        document.getElementById('stickyfooter').setAttribute('aria-hidden', 'false');  //setAttribute
       //document.getElementById('maincontent').style.backgroundColor ="blue";  
       // tester for å sjekke om js funker
    
        document.getElementById('sideitem1').setAttribute('aria-hidden', 'true');    
    
        document.getElementById('sideitem2').setAttribute('aria-hidden', 'true');
    
        document.getElementById('sideitem3').setAttribute('aria-hidden', 'true');
        


        //prøver hardt å flytte search input bare ned til main uten å lage duplikat... :
    

      

       //document.getElementById('maincontent').appendChild(searchElement); 


      /* dette kan flytte elementet searchfield mellom maincontent og target.

      var searchElement = document.getElementById('searchfield');
      var target = document.getElementById('mainheader');
      document.getElementById('maincontent').insertBefore( searchElement, target );
      */
  

      //document.getElementById('topbar').appendChild(searchElement); 
    }

    /*var eElement; // some E DOM instance
    var newFirstElement; //element which should be first in E
    
    eElement.insertBefore(newFirstElement, eElement.firstChild); */

    else if (window.innerWidth > 860) {


      /*dette flytter elementet searchElement til å insertbefore toplist inni parent toplist
      var searchElement = document.getElementById('searchfield');

      var target2 = document.getElementById('ChatMenu');

      document.getElementById('toplist').insertBefore( searchElement, target2 );
      */
     // var searchElement = document.getElementById('searchfield1');

      //document.getElementById('topbar').appendChild(searchElement); 

        document.getElementById('stickyfooter').setAttribute('aria-hidden', 'true');
    
        document.getElementById('maincontent').style.backgroundColor ="white";
    
        document.getElementById('sideitem1').setAttribute('aria-hidden', 'false');
    
        document.getElementById('sideitem2').setAttribute('aria-hidden', 'false');
    
        document.getElementById('sideitem3').setAttribute('aria-hidden', 'false');
    }
    

}
 
// FESTER SVENTLISTENER-FUNKSJONEN TIL window. - RESIZE - altså finner "resize" i DOM - legger på funksjonen over.
window.addEventListener("resize", sizeHideAria);

// kjører bare funksjonen fra her.
sizeHideAria();








