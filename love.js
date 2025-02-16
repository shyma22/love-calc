let per=Math.floor(Math.random()*100);
const love=document.getElementById("love")
const submit=document.getElementById("submit");
const para=document.getElementById("para");
submit.addEventListener("click",()=>{
    if(document.getElementById("fname").value==="" || document.getElementById("sname").value===""){
        love.textContent="Kindly inscribe thy names within the empty space"
        } 
        else if(document.getElementById("fname").value===document.getElementById("sname").value){
            love.textContent=`Thy heart's numerical score: 100%`;
            para.textContent="Hark! Thou hast attained perfection in self-love!"
        }
        else{
            love.textContent=`Thy heart's numerical score: ${per}%`
            if(per<=20){
                para.textContent="It pains me to say fair maiden/knight ,that your love doth not seem to be destined for greatness.."
                }
                else if(per>20 && per <=30){
                    para.textContent="Verily,your love is a canvas, awaiting the brushstrokes of devotion and affection.."
                }
                else if(per>30 && per <=50){
                    para.textContent="Thy love doth flicker,yet 'tis not lost.Nurture it well, and 'twill grow to a passion most true!"
                }
                else if(per>50 && per<=90){
                    para.textContent="Your love doth shine like a radiant star, lighting the way through life's journey.."
                }
                else{
                 para.textContent="Your love doth trascend the stars, a celestial bond that shall never break.."
                }
        }
})


