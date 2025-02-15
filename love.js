let per=Math.floor(Math.random()*100);
const love=document.getElementById("love")
const submit=document.getElementById("submit");
submit.addEventListener("click",()=>{
    if(document.getElementById("fname").value==="" && document.getElementById("fname").value===""){
        love.textContent="girl fill the nameess"
        } 
        else{
            love.textContent=`your love percantage ${per}%`
        }
})
if(document.getElementById("fname").value!=="" && document.getElementById("fname").value!==""){
love.textContent=`the love between you guys is ${per}`
}
