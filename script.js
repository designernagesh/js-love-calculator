let btnLovePercent = document.querySelector('.btnLovePercent'),
    btnClearForm = document.querySelector('.btnClearForm'),    
    yourNameError = document.querySelector(".yourNameError"),    
    partnerNameError = document.querySelector(".partnerNameError"),    
    result = document.querySelector(".result"),
    wishes = document.querySelector(".wishes");

    result.style.display = 'none';
    wishes.style.display = 'none'; 

    btnLovePercent.addEventListener('click', () => {
      yourName  = document.getElementById('yourName').value;
      partnerName = document.getElementById('partnerName').value;

      yourNameError.style.display = 'none';
      partnerNameError.style.display = 'none';      

      if( yourName == "" || yourName.length < 2){
        yourNameError.style.display = 'block';
        yourNameError.innerHTML = 'Please, fill Your Name with least of 2 characters.';
      }
      else if( !isNaN(yourName) ){
        yourNameError.style.display = 'block';
        yourNameError.innerHTML = 'Your Name should not be in Numbers.';
      }

      else if( partnerName == "" || partnerName.length < 2 ){
        partnerNameError.style.display = 'block';
        partnerNameError.innerHTML = 'Please, fill the Partner Name with least of 2 characters.';
      }
      else if ( !isNaN(partnerName) ){
        partnerNameError.style.display = 'block';
        partnerNameError.innerHTML = 'Partner Name should not be in Numbers.';
      }

      else{
        let lovePercent = Math.floor(Math.random() * 100);
        result.style.display = "block";
        wishes.style.display = "block";
        result.innerHTML = `${yourName} & ${partnerName}'s Love Percent is: ${lovePercent}%`;
      }
    });

  btnClearForm.addEventListener('click', () => {
    alert();
    document.querySelector(".yourNameError").style.display = 'none';
    document.querySelector(".partnerNameError").style.display = 'none';

    document.getElementById("yourName").value = "";
    document.getElementById("partnerName").value = "";

    wishes.style.display = "none";
    result.style.display = 'none';
  })