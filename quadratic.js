function calculateY(a, b, c, x) {
    return a * x * x + b * x + c;
}

function calculate() {
    var a = Number($('#a').val());
    var b = Number($('#b').val());
    var c = Number($('#c').val());
    var xmin = Number($('#xmin').val());
    var xmax = Number($('#xmax').val());
    var x = 0;
    var y = 0;
    
    var s = "";
    
    s = "Y = " + a + " x<sup>2</sup> + ";
    s+= b + " x + " + c + "<br/><br/>";
    
    for (x = xmin; x <= xmax; x++) {
        y = calculateY(a, b, c, x);
        s += " X = " + x + " Y = " + y + "<br/>";
    }
    output.innerHTML = s;
}

$('#calculate').click( function() {
     calculate();  
});
