function gethist(){
	return document.getElementById("hvalue").innerText;
}
function printhist(n){
	document.getElementById("hvalue").innerText=n;
}
function getoutput(){
	return document.getElementById("ovalue").innerText;
}
function printoutput(n){
	if(n=="-"){
		document.getElementById("ovalue").innerText="";
	}
	else if(n==""){
		document.getElementById("ovalue").innerText=n;
	}
	else{
		document.getElementById("ovalue").innerText=getFormattedNumber(n);
	}
}
function getFormattedNumber(num){
	var n=Number(num);
	var value=n.toLocaleString("en");
	return value;
}
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id == "clear")
		{
			printhist("");
			printoutput("");
		}
		else if(this.id =="backspace")
		{
			var output=reverseNumberFormat(getoutput()).toString();
			if(output){
				output=output.substr(0,output.length -1);
				output=Number(output);
				printoutput(output);
			}
		}
		else{
			var output=getoutput();
			var hist=gethist();
			if(output!=""){
				output=reverseNumberFormat(output);
				hist=hist+output;
				if(this.id=="=")
				{
					var result =eval(hist);
					printoutput(result);
					printhist("");
				}
				else
				{
					hist=hist+this.id;
					printhist(hist);
					printoutput("");
				}
			}
			
		}
		
});
}
var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getoutput());
		output=output + this.id;
		printoutput(output);
	});
}