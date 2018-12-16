let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('input', getFactAjax);

function isNumeric(input){
    var RE = /^-{0,1}\d*\.{0,1}\d+$/;
    return (RE.test(input));
}

function getFactAjax()
{
  let number = numberInput.value;
  //console.log(number);
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://numbersapi.com/'+number, true);
  xhr.onload = function(){
    if(number == '/' || number == '\\')
    {
      fact.style.display = 'none';
      document.body.style.backgroundImage = "url('images/bg.jpg')";
    }
    else if(this.status == 200 && number != '' && isNumeric(number)){
      if(number % 2 == 0)
      {
        document.body.style.backgroundImage = "url('images/even.jpg')";
      }
      else
        {
          document.body.style.backgroundImage = "url('images/odd.jpg')";
        }

      console.log(number);
      fact.style.display = 'block';
      factText.innerText = this.responseText;
    }
    else{
      fact.style.display = 'none';
      document.body.style.backgroundImage = "url('images/bg.jpg')";
    }
  }
  xhr.send();
}
