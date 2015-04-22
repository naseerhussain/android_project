function signup(who, name, userId, pwd, confirmPwd, contr_id){

	var test = localStorage.getItem(who) || {};
	if(Object.size(test) > 0){
		test = JSON.parse(test);
		console.log("parse json");
		console.log(test);
	}
	
	if(checkUser(who, userId, test)){
			alert("UserId already present");
	}else{
		if(who == "siteengineer"){

			test[userId] = {"name":name,
					  "pwd":pwd,
					  "contr_id":contr_id
				 	};
			console.log(test);
			test = JSON.stringify(test);
			console.log(test);
			localStorage.setItem(who,test);
		}else{

			test[userId] = {"name":name,
                                          "pwd":pwd
                                       };    
                        console.log(test);
                        test = JSON.stringify(test);
                        console.log(test);
                        localStorage.setItem(who,test);
		
		}
	}
}

function checkUser(who, userId, test){
	var key;
	for (key in test){
		if(key == userId){
			console.log("same user , true");
			return true;
		}
	}
	console.log("not same user");
	return false;
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

