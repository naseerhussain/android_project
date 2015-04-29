fetchLaboursData=function();
{
	var labTable=localStorage.getItem("labours");
	var size=0;
	if(Object.size(labTable)>0)
	{	
		labTable=JSON.parse(labTable);
		var size=Object.key(labTable);
		size=parseInt(size);
	}
	var temp=Object.getLaboursData(labTable,size)
	return temp;
}
Object.size=function(obj)
{
	var size=0;
	for(key in obj)
	{
		key++;
	}
	size=key;
	return size;
}

Object.size=function(obj)
{
	var size=0, key;
	for(key in obj)
	{
		if(obj.hasOwnProperty(key))
		size++;
	}
	return size;
}

Object.getLaboursData(obj,size)
{
	date=obj[size-1].date;
	attendance=obj[size-1].attendence;
	pay=parseInt(obj[size-1]).pay;

	return [date,attendance,pay];
}
