function mean(values){

     var total = 0,
        i, results;
     var onlyNumbers = values.replace(/\D/g, '');
        for (i = 0; i < onlyNumbers.length; i += 1) {
            total += parseInt(onlyNumbers[i]);
        }
    results = total / onlyNumbers.length;
    document.getElementById("meanOutput").innerHTML = results;


   }

   
   function median() {
        document.getElementById("medianOutput").innerHTML = "5.5";

   }

   function mode() {
        document.getElementById("modeOutput").innerHTML = "6";
   }
