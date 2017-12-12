var form=document.createElement('form');
form.setAttribute('name','login');
form.setAttribute("action","google.com");
document.body.append(form);

var inputAge=document.createElement("input");
inputAge.setAttribute("type", "text");
inputAge.setAttribute("name", "age");
form.append(inputAge);

var inputUsername=document.createElement('input');
inputUsername.setAttribute('type','text');
inputUsername.setAttribute('name', 'username');
form.append(inputUsername);

var inputDate=document.createElement('input');
inputDate.setAttribute('type', 'text');
inputDate.setAttribute('name', 'date');
form.append(inputDate);

var validateBtn=document.createElement('input');
validateBtn.setAttribute('type', 'submit');
validateBtn.setAttribute('value', 'Validate Me');
form.append(validateBtn);

form.addEventListener('submit', ValidateForm);

function ValidateForm () {
	alert(1);
}
