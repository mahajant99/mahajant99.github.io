function cart1()
{
  var number1 = parseInt(document.getElementById("Number1").value);

  var operation1 = document.getElementById("operation1").value;
   
  if( operation1=="Intel Core i9-12900K" )
  {
    document.getElementById("output1").innerHTML = "Processor: " + number1 + "  piece(s) of Intel Core i9-12900K"
    document.getElementById("output2").innerHTML = " added to cart!!"
  }
  else if ( operation1=="Intel Core i7-11700F" )
  {
    document.getElementById("output1").innerHTML = "Processor: " + number1 + "  piece(s) of Intel Core i7-11700F"
	  document.getElementById("output2").innerHTML = " added to cart!!"
  }
  else if ( operation1=="Intel Core i5-12600K" )
  {
    document.getElementById("output1").innerHTML = "Processor: " + number1 + "  piece(s) of Intel Core i5-12600K"
	  document.getElementById("output2").innerHTML = " added to cart!!"
  }
  else if ( operation1=="AMD Ryzen 9 5950X" )
  {
    document.getElementById("output1").innerHTML = "Processor: " + number1 + "  piece(s) of AMD Ryzen 9 5950X"
	  document.getElementById("output2").innerHTML = " added to cart!!"
  }
  else if ( operation1=="AMD Ryzen 7 5800X" )
  {
    document.getElementById("output1").innerHTML = "Processor: " + number1 + "  piece(s) of AMD Ryzen 7 5800X"
	  document.getElementById("output2").innerHTML = " added to cart!!"
  }
  else if ( operation1=="AMD Ryzen 5 5600X" )
  {
    document.getElementById("output1").innerHTML = "Processor: " + number1 + "  piece(s) of AMD Ryzen 5 5600X"
	  document.getElementById("output2").innerHTML = " added to cart!!"
  }
  else
  {
    document.getElementById("output1").innerHTML = "Processor: NaN"
  }
}

function cart2()
{
  var number2 = parseInt(document.getElementById("Number2").value);

  var operation2 = document.getElementById("operation2").value;
   
  if( operation2=="Nvidia RTX 3090" )
  {
    document.getElementById("output3").innerHTML = "Graphic Card: " + number2 + "  piece(s) of Nvidia RTX 3090"
	  document.getElementById("output4").innerHTML = " added to cart!!"
  }
  else if ( operation2=="Nvidia RTX 3080" )
  {
    document.getElementById("output3").innerHTML = "Graphic Card: " + number2 + "  piece(s) of Nvidia RTX 3080"
	  document.getElementById("output4").innerHTML = " added to cart!!"
  }
  else if ( operation2=="Nvidia RTX 3070" )
  {
    document.getElementById("output3").innerHTML = "Graphic Card: " + number2 + "  piece(s) of Nvidia RTX 3070"
	  document.getElementById("output4").innerHTML = " added to cart!!"
  }
  else if ( operation2=="Nvidia RTX 3060" )
  {
    document.getElementById("output3").innerHTML = "Graphic Card: " + number2 + "  piece(s) of Nvidia RTX 3060"
	  document.getElementById("output4").innerHTML = " added to cart!!"
  }
  else if ( operation2=="Nvidia RTX 2080 Super" )
  {
    document.getElementById("output3").innerHTML = "Graphic Card: " + number2 + "  piece(s) of Nvidia RTX 2080 Super"
	  document.getElementById("output4").innerHTML = " added to cart!!"
  }
  else if ( operation2=="Nvidia RTX 2070 Super" )
  {
    document.getElementById("output3").innerHTML = "Graphic Card: " + number2 + "  piece(s) of Nvidia RTX 2070 Super"
	  document.getElementById("output4").innerHTML = " added to cart!!"
  }
  else
  {
    document.getElementById("output3").innerHTML = "Graphic Card: NaN"
  }
}

function cart3()
{
  var number3 = parseInt(document.getElementById("Number3").value);

  var operation3 = document.getElementById("operation3").value;
   
  if( operation3=="Logitech G PRO Mechanical" )
  {
    document.getElementById("output5").innerHTML = "Keyboard: " + number3 + "  piece(s) of Logitech G PRO Mechanical"
	  document.getElementById("output6").innerHTML = " added to cart!!"
  }
  else if ( operation3=="CORSAIR K70 RGB" )
  {
    document.getElementById("output5").innerHTML = "Keyboard: " + number3 + "  piece(s) of CORSAIR K70 RGB"
	  document.getElementById("output6").innerHTML = " added to cart!!"
  }
  else if ( operation3=="Razer BlackWidow V3" )
  {
    document.getElementById("output5").innerHTML = "Keyboard: " + number3 + "  piece(s) of Razer BlackWidow V3"
	  document.getElementById("output6").innerHTML = " added to cart!!"
  }
  else
  {
    document.getElementById("output5").innerHTML = "Keyboard: NaN"
  }
}

function cart4()
{
  var number4 = parseInt(document.getElementById("Number4").value);

  var operation4 = document.getElementById("operation4").value;
   
  if( operation4=="Redragon M602" )
  {
    document.getElementById("output7").innerHTML = "Mouse: " + number4 + "  piece(s) of Redragon M602"
    document.getElementById("output8").innerHTML = " added to cart!!"
  }
  else if ( operation4=="Razer Basilisk V3" )
  {
    document.getElementById("output7").innerHTML = "Mouse: " + number4 + "  piece(s) of Razer Basilisk V3"
    document.getElementById("output8").innerHTML = " added to cart!!"
  }
  else if ( operation4=="Logitech G502" )
  {
    document.getElementById("output7").innerHTML = "Mouse: " + number4 + "  piece(s) of Logitech G502"
    document.getElementById("output8").innerHTML = " added to cart!!"
  }
  else
  {
    document.getElementById("output7").innerHTML = "Mouse: NaN"
  }
}

function check()
{
  var today = new Date();
  var date = today.getFullYear()+"/"+(today.getMonth()+1)+"/"+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  
  var number1 = parseInt(document.getElementById("Number1").value);
  var number2 = parseInt(document.getElementById("Number2").value);
  var number3 = parseInt(document.getElementById("Number3").value);
  var number4 = parseInt(document.getElementById("Number4").value);

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var number = parseInt(document.getElementById("number").value);
  var address = document.getElementById("address").value;

  alert("GraphicTech Billing \n \n" + 
		"Date: " + date + ", Time: " + time + "\n \n" + 
		"Name: " + name + "\n" + 
		"Email ID: " + email + "\n" + 
		"Phone Number: " + number + "\n" + 
		"Address: " + address + "\n \n" + 
		"Processors Booked: " + number1 + " " + operation1.value + "\n" + 
		"Graphic Card Booked: " + number2 + " " + operation2.value + "\n" + 
		"Keyboard Booked: " + number3 + " " + operation3.value + "\n" + 
		"Mouse Booked: " + number4 + " " + operation4.value);
}
