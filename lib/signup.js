function signup(who, name, userId, pwd, confirmPwd, contr_id){

	var test = localStorage.getItem(who) || {};
	if(Object.size(test) > 0){
		test = JSON.parse(test);
	}
	
	if(checkUser(who, userId, test)){
			alert("UserId already present");
	}else{  
		if(pwd == confirmPwd)
		{
			if(who == "siteengineer"){

				test[userId] = {"name":name,
						 "pwd":pwd,
						 "contr_id":contr_id
						};
				test = JSON.stringify(test);
				localStorage.setItem(who,test);
			}else{

				 test[userId] = {"name":name,
						 "pwd":pwd
						 };    
				 test = JSON.stringify(test);
				 localStorage.setItem(who,test);
		
		    	}
			return true;
		}else{
		    alert("Password and Confirm doesn't match");
		}
	}
}

function checkUser(who, userId, test){
	var key;
	for (key in test){
		if(key == userId){
			return true;
		}
	}
	return false;
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

