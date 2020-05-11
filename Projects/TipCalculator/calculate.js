const transactions = JSON.parse(localStorage.getItem("transactions"))||[];
const MAX_TRANSACTIONS = 10;


//Calculating tip
function calculate(){
    
    var total = document.getElementById("total").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var pplsplit = document.getElementById("pplsplit").value;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = time+' '+date;
    
    console.log(dateTime);
    
    //Checking for input
    if(total === "" || serviceQuality == 0){
        alert("You must enter values for calculation");
        return;
    }
    if(pplsplit === ""|| pplsplit <= 1){
        pplsplit = 1;
        document.getElementById("perPerson").style.display = "none";
    }
    else{
        document.getElementById("perPerson").style.display= "block";
    }
    var toTip = (total * serviceQuality);
    toTip = Math.round(toTip*100)/100;
    toTip = toTip.toFixed(2);
    
    document.getElementById("tipAmt").style.display="block";
    document.getElementById('tip').innerHTML=toTip;
    const trans = {
        
        total: total,
        tip: toTip,
        date: dateTime,
    };
    transactions.push(trans);
    transactions.splice(MAX_TRANSACTIONS);
    
    
    localStorage.setItem("transactions", JSON.stringify(transactions));
    console.log(transactions);
    const transactionsList = document.getElementById("transactionsList");
    const transList = JSON.parse(localStorage.getItem("transactions"))|| [];

    transactionsList.innerHTML = transList
    .map((trans) => {
      return `<li class="high-score">Total: $${trans.total} Tip: $${trans.tip} Date: ${trans.date}</li>`;
    })
    .join("");
}



document.getElementById("tipAmt").style.display ="none";


//call function
document.getElementById("calculate").onclick = function(){
    calculate();
  
}