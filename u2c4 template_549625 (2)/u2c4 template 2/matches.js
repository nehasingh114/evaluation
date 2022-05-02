// write js code here corresponding to matches.html
document.querySelector("#filterVenue").addEventListener("change", sortbyvenue)

function sortbyvenue() {
    var selected = document.querySelector("#filterVenue").value
    if (selected == "none") {
        window.location.href = "matches.html"
    }
    else {
        var filterdata = arrdata.filter(function (elem) {
            return elem.venue == selected;
        })
        display(filterdata)
    }

}
var matches=JSON.parse(localStorage.getItem("schedule") )
    var fav= JSON.parse(localStorage.getItem("favourites"))||[]
    display(matches)
    function display(matches){
    matches.forEach(function(el){

    
    var tr=document.createElement("tr")
     var td1= document.createElement("td");
     var td2= document.createElement("td");
     var td3= document.createElement("td");
     var td4= document.createElement("td");
     var td5= document.createElement("td");
     var td6= document.createElement("td");
   

     tr.append(td1,td2,td3,td4,td5,td6)
     document.querySelector("tbody").append(tr)


     td1.innerText=el.MatchNumber
     td2.innerText=el.TeamA
     td3.innerText=el.TeamB
     td4.innerText=el.date
     td5.innerText=el.venue
     td6.innerText="favourite"
     td6.style.color="green"


     td6.addEventListener("click",function(){
         Favourite(el)
     })
   })

   
   function Favourite(el){
     fav.push(el)
     localStorage.setItem("favourites",JSON.stringify(fav))
     window.location.href="favourites.html"  
   }
}