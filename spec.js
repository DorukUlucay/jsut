function Factorial4_must_equal_to_24() {
    var act = Maths.factorial(4);
    return Assert.Equal(act, 24);
}

function Factorial0_must_equal_to_1() {
    var act = Maths.factorial(0);
    return Assert.Equal(act, 1);
}

function isPrime_must_return_false_when_given_9() {
    var act = Maths.isPrime(9);
    return Assert.IsFalse(act);
}