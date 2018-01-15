var currentDate=new Date();

Date.prototype.showDate = function() {
 var day=this.getDate(),
     month=this.getMonth(),
     year=this.getFullYear();
  if(day<10)day="0"+day;
  if(month<9)month="0"+(++month);
  return day+"/"+month+"/"+year;
};

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
  inputUsername.setAttribute('placeholder', 'user_');
  inputUsername.setAttribute('type','text');
  inputUsername.setAttribute('name', 'username');
  labelUsername.append(inputUsername);

var labelDate=document.createElement('label');
  labelDate.innerText="Date";
var inputDate=document.createElement('input');
  inputDate.setAttribute('placeholder', 'dd/mm/yyyy');
  inputDate.setAttribute('type', 'text');
  inputDate.setAttribute('name', 'date');
  inputDate.value=currentDate.showDate();
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
  var errors=[];
  if(isAgeCorrect(inputAge.value))age=inputAge.value;
  else errors.push('age');

  if(isUsernameCorrect(inputUsername.value))username=inputUsername.value;
  else errors.push('username');

  if(isDateCorrect(inputDate.value))date=inputDate.value;
  else errors.push('date');

  if(age!=undefined&&username!=undefined&&date!=undefined){
    form.reset();
    alert('mission completed');
  }
  else alert("Some values are incorrect: "+errors.join(','));

}
function isAgeCorrect(age){
  if(age&&!isNaN(age)&&age>=0){
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
