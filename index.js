let distance= 3000;
let feet,city, gratuity;

console.log("hello");


function scuberGreetingForFeet(feet){


if (feet <= 400){


      return  'This one is on me!';
}
else if (feet <= 2500 && feet > 2000){
     
      return 'I will gladly take your thirty bucks.';
}
else if (feet > 2500)
  return  'No can do.';

}

function ternaryCheckCity(city){
if (city == 'NYC')
  return 'Ok, sounds good.'
else 
  return "No go.";
}

function switchOnCharmFromTip(tip){
  if (tip == 'thanks for everything')
    return "Bye.";
  else if (tip =="not as generous")
    return "Thank you.";
  else if (tip == 'generous')
    return "Thank you so much.";
}
