console.log("hi");
const btn=document.getElementsByClassName("myButton");
var input=document.getElementById("input");
let x=0;
var dCount=0;
var lCount=0;

function myFunction(button){
    const val=button.innerText;
    const input=document.getElementById("input");
    const res=document.getElementById("res");

    if(x==0 ){
        if(val=='X' ||val=='+'||val=='-'||val=='/'||val=='%'|| val=='='){
            errorMsg("Invalid Choice");
            return;
        }
        else if(val=='.'){
            input.innerHTML="0.";
            dCount=1;
            x=x+1;
            return;
        }
        else{
            x=x+1;
        }
    }
    if(input.innerHTML.length>30){
        console.log(input.innerHTML.length);
        errorMsg("Exceeded Limit!");
        if(val==="\u2190"){
            input.innerHTML=input.innerHTML.slice(0,-1);
            res.innerHTML=eval(input.innerHTML);
            errorMsg("");
            return;
        }
        return;
    }
    if(eval(input.innerHTML=="Infinity")){
        return;
    }
    let a=['X','/','-','+','%','*'];

    if(val=="C"){
        input.innerHTML="";
        res.innerHTML="";
        x=0;
        dCount=0;
        errorMsg("");
        return;
    }
    else if (val=='='){
        input.innerHTML=res.innerHTML;
        res.innerHTML="";
        return;
    }
    else if(a.includes(val)){
        errorMsg("");
        dCount=0;
        console.log("Decimal Poins"+dCount)
            if(a.includes(input.innerHTML.slice(-1))||input.innerHTML.slice(-1)=='.'){
                if(val=='X'){
                    input.innerHTML=input.innerHTML.slice(0,-1)+'*';
                    return;
                }
                input.innerHTML=input.innerHTML.slice(0,-1)+val;
                return;
            } 
            else{
                if(val=='X'){
                    input.innerHTML+='*';
                }
                else if(val=='%'){
                    input.innerHTML+="%";
                    calculatePercentage(input,res);
                }
                else{
                    input.innerHTML+=val;
                }
        }
    } 
    else if(val==="\u2190"){
        if(input.innerHTML.length>1&input.innerHTML.length<=31){
            if(input.innerHTML.slice(-1)=="."){
                dCount=0;
                console.log(eval(input.innerHTML));
            }
            input.innerHTML=input.innerHTML.slice(0,-1);
            if(a.includes(input.innerHTML.slice(-1))||eval(input.innerHTML)==Infinity){
               res.innerHTML="";
               return;
            }
            res.innerHTML=eval(input.innerHTML);
        }

        else{
            res.innerHTML="";
            x=0;
            
        }
    }  
    else if(val=='.'){
        dCount=dCount+1;
       
        if(dCount>1){
            errorMsg("Decimal point already exsts!");
            console.log("error");
            return;
        }
        else{
            errorMsg("");
            dCount+=1;
            console.log(dCount);
            if(a.includes(input.innerHTML.slice(-1))|| x==0){
                input.innerHTML=input.innerHTML+"0.";
                x=1;
                return;
            }
            else if(input.innerHTML.slice(-1)==val){
                return;
            }
            errorMsg("");
            input.innerHTML+='.';
        }
        
    }
    else{
        if(input.innerHTML.slice(-1)=='/'){
            console.log("next value can't be zero");
            if(val=='0'||val=='00'){
                errorMsg("Number Can't be divided with zero");
                return;
            }
        }
        errorMsg("");
        input.innerHTML+=val;
        if(eval!="Infinity"){
            res.innerHTML=eval(input.innerHTML);
        }
    }
   
   
}
function calculatePercentage(x,res){
    console.log("Calculating Percentage of"+x.innerHTML);
    var y=x.innerText;
    var regex=/[+\-*]/;
    var parts= y.split(regex);
    console.log(parts);
    if(parts.length!=1){
        var lastPart=parts.pop();
        console.log(lastPart);
        var exp=y.slice(0,y.indexOf(lastPart));
        var symbol=exp.slice(-1);
        exp=eval(exp.slice(0,-1));
        console.log(exp);
        var per=lastPart.slice(0,-1)*exp/100;
        console.log(per);
        console.log(exp+symbol+per);
        res.innerHTML=eval(exp+symbol+per);
    }
    else{
       x.innerHTML=y.slice(0,-1)/100+'*'; 
    }
}
function errorMsg(str){
   document.getElementById('errorMsg').innerHTML=str;
}
function changeTheme(){
    var swi=document.getElementById('Theme').checked;
    console.log("dark");
    var Bgs=document.getElementsByTagName('div');
    for(var i=1;i<Bgs.length-1;i++){
        Bgs[i].classList.toggle('dark-mode');
    }
    
   document.body.classList.toggle("dark-mode");
    var x=document.getElementById('button-group');
    var btns=document.getElementsByTagName('button');
    console.log(btns);
    if(swi){
        x.style.backgroundColor='Black';
        for(var i=0;i<btns.length-1;i++){
            console.log(btns[i]);
            btns[i].classList.toggle('dark-mode');
        }
    }
    else{
        x.style.backgroundColor='whitesmoke';
    }

}
