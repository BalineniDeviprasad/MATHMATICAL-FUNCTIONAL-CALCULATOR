<script>
// Javascript program to Add two complex numbers
	
	// User Defined Complex class
	class Complex
	{
		// Constructor to accept
		// real and imaginary part
		constructor(tempReal, tempImaginary)
		{
			this.real = tempReal;
			this.imaginary = tempImaginary;
		}
	}
	
	// Defining addComp() method
	// for adding two complex number
	function addComp(C1,C2)
	{
		// creating temporary variable
		let temp = new Complex();

		// adding real part of complex numbers
		temp.real = C1.real + C2.real;

		// adding Imaginary part of complex numbers
		temp.imaginary = C1.imaginary + C2.imaginary;

		// returning the sum
		return temp;
	}
	
	
	// printing first complex number
	document.write("Complex number 1 : "
						+ C1.real + " + i"
						+ C1.imaginary+"<br>");

	

	// printing second complex number
	document.write("Complex number 2 : "
						+ C2.real + " + i"
						+ C2.imaginary+"<br>");

	// for Storing the sum
	let var sum = C1+C2;
	// calling addComp() method
	sum = addComp(C1, C2);

	// printing the sum
	document.write("Sum of complex number : "
						+ C3.real + " + i"
						+ C3.imaginary+"<br>");
	

</script>
