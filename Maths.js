//sample lib to be tested

Maths = {
	//works fine
    factorial: function(n) {
        if (n < 2) {
            return 1;
        }
        return n * this.factorial(n - 1);
    },

	//untestable
    fib: function(first, second, max) {
        if (second < max) {
            console.log(first);
            console.log(second);
            this.fib(first + second, second + second + first, max);
        }
    },

	//works wrong
    isPrime: function(n) {
        if (n % 2 == 0) {
            return false;
        }
        return true;
    }
}
