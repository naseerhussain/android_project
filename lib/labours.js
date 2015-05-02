function laboursPay(date, attendance, pay){
	var labTable = localStorage.getItem("labours") || {};
	var whoName = localStorage.getItem("whoName");
	var size = 0;
	if(Object.size(labTable) > 0)
	{
		labTable = JSON.parse(labTable);
		size = Object.key(labTable);
		size = parseInt(size);
		console.log("parse JSON");
		console.log(labTable);
	}
	labTable[size+1] = {
			    "date":date,
			    "attendance":attendance,
			    "pay":pay,
			    "whoName":whoName
		     	   };
	console.log(labTable);
	labTable = JSON.stringify(labTable);
	console.log(labTable);
	localStorage.setItem("labours",labTable);

}
	
Object.key=function(obj)
{
	var size=0;
	for(key in obj)
	{
		size=key;
	}
	return size;
}
	
Object.size=function(obj)
{
	var size = 0, key;
	for(key in obj)
	{
		if(obj.hasOwnProperty(key))
		size++;
	}
	return size;
}
	
	
	
	
