var btn = document.querySelector("#btn");
var fullName = document.querySelector("#fullname");
var onlineID = document.getElementById("username");
var img = document.querySelector("#profpic");
var age = document.querySelector("#age");
var email = document.querySelector("#email");
var city = document.querySelector("#city");
var state = document.querySelector("#state");

var url = "https://randomuser.me/api/";



btn.addEventListener("click", function(){
  fetch(url)
  .then(function(response){
    return response.json();
  }).then(function(data){
    var person = makePerson(data);
    console.log(person);
    displayPerson(person);
  }).catch(function(err){
    console.log(err);
  });
});

var makePerson = function(data){
  person = {};
  person.fullname = data.results[0].name.first + " " +
  data.results[0].name.last;
  person.username = data.results[0].login.username;
  person.image = data.results[0].picture.medium;
  person.email = data.results[0].email;
  person.age = data.results[0].dob.age;
  person.city = data.results[0].location.city;
  person.state = data.results[0].location.state;

  return person;
}

var displayPerson = function(person){
  fullName.innerText = person.fullname;
  onlineID.innerText = person.username;
  img.src = person.image;
  age.innerText = person.age;
  email.innerText = person.email;
  city.innerText = person.city;
  state.innerText = person.state;
}
