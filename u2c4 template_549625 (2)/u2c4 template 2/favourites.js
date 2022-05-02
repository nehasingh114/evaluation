// write js code here corresponding to favourites.html
var favourites=JSON.parse(localStorage.getItem("favourites"))
displayitem(favourites)

function displayitem(favourites){
    document.querySelector("tbody").innerHTML=""
    favourites.forEach(function(el,index){

        var tr=document.createElement("tr")
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)


        td1.innerText=el.MatchNumber
        td2.innerText=el.TeamA
        td3.innerText=el.TeamB
        td4.innerText=el.date
        td5.innerText=el.venue
        td6.innerText="Delete"
        td6.style.color="red" 

td6.addEventListener("click",function(){
    deletefunc(index)
})


    })
}
function deletefunc(index){
    favourites.splice(index,1)
localStorage.setItem("favourites",JSON.stringify(favourites))
displayitem(favourites)
}