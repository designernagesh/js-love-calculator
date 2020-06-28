  var res = document.getElementById("res");

  var wishes = document.getElementById("wishes");
  
  wishes.style.display = "none";

  const lovePercent = () => {

    let yourName = document.getElementById("yourName").value;      

    console.log(document.getElementById("yourName").value)

    console.log(document.getElementById("yourName"))      

    let partnerName = document.getElementById("partnerName").value;

    let lovePercent = Math.floor(Math.random() * 100)

    let yourNameError = document.getElementById("yourNameError");
    let partnerNameError = document.getElementById("partnerNameError");

    if(yourName == ""){
      yourNameError.innerHTML = "Please, enter your valid name";
    } else if(yourName.length < 2 ){    
      yourNameError.innerHTML = "Name should be minimum 2 characters";
    } else if(!isNaN(yourName)){      
      yourNameError.innerHTML = "Name should not be in numbers";
    }      

    else if(partnerName == ""){
      partnerNameError.innerHTML = "Please, enter your Partner's valid name";
    } else if(partnerName.length < 2 ){
      partnerNameError.innerHTML = "Partner's Name should be minimum 2 characters";      
    } else if(!isNaN(partnerName)){
      partnerNameError.innerHTML = "Partner's Name should not in in numbers";      
    }  

    else{
      yourNameError.style.display = 'none';
      partnerNameError.style.display = 'none';

      res.innerHTML = `${yourName} & ${partnerName}'s Love Percent is: ${lovePercent}%`;
      wishes.style.display = "block";

      document.getElementById("yourName").value = "";
      document.getElementById("partnerName").value = "";
    }    
  }

  function clearForm(){    
    document.getElementById("yourNameError").style.display = 'none';
    document.getElementById("partnerNameError").style.display = 'none';

    document.getElementById("yourName").value = "";
    document.getElementById("partnerName").value = "";

    wishes.style.display = "none";
    res.style.display = 'none';
  }