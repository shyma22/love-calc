let per=Math.floor(Math.random()*100);
const love=document.getElementById("love")
const submit=document.getElementById("submit");
const para=document.getElementById("para");
submit.addEventListener("click",()=>{
    if(document.getElementById("fname").value==="" || document.getElementById("fname").value===""){
        love.textContent="Kindly inscribe thy names within the empty space"
        } 
        else{
            love.textContent=`Thy heart's numerical score: ${per}%`
            if(per<=20){
                para.textContent="It pains me to say fair maiden/knight ,that your love doth not seem to be destined for greatness.."
                }
                else if(per>20 && per <=50){
                    para.textContent="Verily,your love is a canvas, awaiting the brushstrokes of devotion and affection.."
                }
                else if(per>50 && per<=90){
                    para.textContent="Your love doth shine like a radiant star, lighting the way through life's journey.."
                }
                else{
                 para.textContent="Your love doth trascend the stars, a celestial bond that shall never break.."
                }
        }
})
