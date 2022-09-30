var intial_no1="";
var intial_no2="";
var intial_no="";
var scnd_no=0;
var result_final=0;
var value_for_if="";

function btn7(){
    intial_no=intial_no+"7";
    //alert(intial_no);
    document.getElementById("result").innerHTML=intial_no;
}
function btn8(){
    intial_no=intial_no+"8";
    //alert(intial_no);
    document.getElementById("result").innerHTML=intial_no;
}
function btn9(){
    intial_no=intial_no+"9";
    //alert(intial_no);
    document.getElementById("result").innerHTML=intial_no;
}
function btnplus(){
     intial_no1=parseFloat(intial_no);
     document.getElementById("result").innerHTML="0";
     //alert(intial_nof);
     intial_no="";
     value_for_if="+";
}


function btn4(){
    intial_no=intial_no+"4";
    //alert(intial_no);
    document.getElementById("result").innerHTML=intial_no;
}
function btn5(){
    intial_no=intial_no+"5";
    //alert(intial_no);
    document.getElementById("result").innerHTML=intial_no;
}
function btn6(){
    intial_no=intial_no+"6";
    //alert(intial_no);
    document.getElementById("result").innerHTML=intial_no;
}
function btnsub(){
    intial_no1=parseFloat(intial_no);
    document.getElementById("result").innerHTML="0";
    intial_no="";
    //alert(intial_nof);
    value_for_if="-";
}


function btn1(){
    intial_no=intial_no+"1";
    //alert(intial_no);
    document.getElementById("result").innerHTML=intial_no;
}
function btn2(){
    intial_no=intial_no+"2";
    //alert(intial_no);
    document.getElementById("result").innerHTML=intial_no;
}
function btn3(){
    intial_no=intial_no+"3";
    //alert(intial_no);
    document.getElementById("result").innerHTML=intial_no;
}
function btndiv(){
    intial_no1=parseFloat(intial_no);
    document.getElementById("result").innerHTML="0";
    intial_no="";
    //alert(intial_nof);
    value_for_if="/";
}

function btn0(){
    intial_no=intial_no+"0";
    //alert(intial_no);
    document.getElementById("result").innerHTML=intial_no;
}
function btnmulti(){
    intial_no1=parseFloat(intial_no);
    document.getElementById("result").innerHTML="0";
    intial_no="";
    value_for_if="x";
    //alert(intial_no1);
}
function btnequal(){
    intial_no2=parseFloat(intial_no);
    //alert(intial_no2);
    if(value_for_if=="+"){
        result_final=intial_no1+intial_no2;
        document.getElementById("result").innerHTML=result_final;
    }
    else if(value_for_if=="-"){
        result_final=intial_no1-intial_no2;
        document.getElementById("result").innerHTML=result_final;
    }
    else if(value_for_if=="/"){
        result_final=intial_no1/intial_no2;
        document.getElementById("result").innerHTML=result_final;
    }
    else if(value_for_if=="x"){
        result_final=intial_no1*intial_no2;
        document.getElementById("result").innerHTML=result_final;
    }
}
function btnclear(){
    intial_no1="";
    intial_no2="";
    intial_no="";
    result_final="";
    document.getElementById("result").innerHTML="0";
}


