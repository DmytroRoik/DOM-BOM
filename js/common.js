var form=document.createElement('form');
form.setAttribute('name','login');
form.setAttribute("action","google.com");
document.body.append(form);

	var labelAge=document.createElement('label');
		 labelAge.innerText="Age";	

	var inputAge=document.createElement("input");
		 inputAge.setAttribute("type", "text");
		 inputAge.setAttribute("name", "age");
		labelAge.append(inputAge);


var labelUsername=document.createElement('label');
		 labelUsername.innerText="Name";	
var inputUsername=document.createElement('input');
	 inputUsername.setAttribute('type','text');
	 inputUsername.setAttribute('name', 'username');
	labelUsername.append(inputUsername);
   
var labelDate=document.createElement('label');
		 labelDate.innerText="Date";
var inputDate=document.createElement('input');
	 inputDate.setAttribute('type', 'text');
	 inputDate.setAttribute('name', 'date');
	labelDate.append(inputDate);

var validateBtn=document.createElement('input');
	validateBtn.setAttribute('type', 'submit');
	validateBtn.setAttribute('value', 'Validate Me');

form.append(labelAge);
form.append(labelUsername);
form.append(labelDate);
form.append(validateBtn);

form.addEventListener('submit', ValidateForm);

function ValidateForm () {
	event.preventDefault();
	var age,
	 username,
	 date;
	if(isAgeCorrect(inputAge.value))age=inputAge.value;
	if(isUsernameCorrect(inputUsername.value))username=inputUsername.value;
	
	if(isDateCorrect(inputDate.value))date=inputDate.value;
	else alert('your data is invalid');

	if(age!=undefined&&username!=undefined&&date!=undefined){
		form.reset();
		console.log('mission completed');}
	else alert("data is not correct");
	
}	
function isAgeCorrect(age){

	if(!isNaN(age)&&age>=0){
		console.log(age.includes('e'));
		return !age.includes('e');
	}
	return false;
}
function isUsernameCorrect(username){
	var regex=/^user_/;
	return regex.test(username);
}
function isDateCorrect (date) {
	if(date.length!=10)return false;
	var regex=/([0-9][0-9]\/){2}[0-9]{4}/
	if(regex.test(date)){
		if( (date[0]+date[1])<=31 && (date[3]+date[4])<=12 ) return true;
		else return false;
	}
	else return false;
}

