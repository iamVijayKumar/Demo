console.log("hi");
const btn=document.getElementsByClassName("myButton");
var input=document.getElementById("input");
let x=0;
var dCount=0;
function myFunction(button){
    const val=button.innerText;
    const input=document.getElementById("input");
    const res=document.getElementById("res");

    if(x==0 ){
        if(val=='X' ||val=='+'||val=='-'||val=='/'||val=='%'){
            errorMsg("Invalid Choice");
            alert("Invalid Choice");
            window.location.reload();
        }
        else if(val=='.'){
            input.innerHTML="0.";
            dCount=1;
            console.log(dCount);
            x=x+1;
            return;
        }
        else{
            x=x+1;
        }
    }
    let a=['X','/','-','+','%','*'];

    if(val=="C"){
        input.innerHTML="";
        res.innerHTML="";
        x=0;
        dCount=0;
        return;
    }
    else if (val=='='){
        input.innerHTML=res.innerHTML;
        res.innerHTML="Calculated";
        return;
    }
    else if(a.includes(val)){
        dCount=0;
        console.log("Decimal Poins"+dCount)
            if(a.includes(input.innerHTML.slice(-1))){
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
        if(input.innerHTML.length>1){
            input.innerHTML=input.innerHTML.slice(0,-1);
            res.innerHTML=eval(input.innerHTML);
        }
        else{
            console.log(input.innerHTML);
            input.innerHTML=input.innerHTML.slice(0,-1);
            res.innerHTML="";
            
        }
    }  
    else if(val=='.'){
        dCount=dCount+1;
        console.log("Decimal Points"+dCount);
        if(dCount>1){
            console.log("error");
            return;
        }
        else{
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
            input.innerHTML+='.';
        }
        
    }
    else{
        if(input.innerHTML.slice(-1)=='/'){
            console.log("next value can't be zero");
            if(val=='0'||val=='00'){
                alert("A number Can't be divided with zero");
                return;
            }
        }
        input.innerHTML+=val;
        console.log(input.innerHTML);
        console.log(eval(input.innerHTML));
        res.innerHTML=eval(input.innerHTML); 
    }  
   
    if(input.innerHTML.length>40){
        alert("Exceeded limit");
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
