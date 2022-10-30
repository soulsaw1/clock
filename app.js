const secondHand=document.querySelector(".second-time")
const minsHand=document.querySelector(".first-hour")
const hourHand=document.querySelector(".hour")

function setDate(){
        const now = new Date();
        const seconds=now.getSeconds()
        const secondDig=((seconds /60)*360)+90;
        secondHand.style.transform=`rotate(${secondDig}deg)`;

        const mins=now.getMinutes()
        const minsDig=((mins /60)*360)+90;
        minsHand.style.transform=`rotate(${minsDig}deg)`;

        const hours=now.getHours()
        const hourDig=((hours /60)*360)+90;
        hourHand.style.transform=`rotate(${hourDig}deg)`;

      }
    
      setInterval(setDate, 1000);
    
      setDate();
