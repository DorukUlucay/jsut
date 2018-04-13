Assert = {
    Equal: function(expected, actual) {
        var assertname = this.Equal.caller.name;
        if (expected !== actual) {
            return this.returnResult(assertname, false, expected, actual);
        } else {
            return this.returnResult(assertname, true, expected, actual);
        }
    },
    IsTrue: function(actual) {
        var assertname = this.IsTrue.caller.name;
        if (!actual) {
            return this.returnResult(assertname, false, true, actual);
        } else {
            return this.returnResult(assertname, true, true, actual);
        }
    },
    IsFalse: function(actual) {
        var assertname = this.IsFalse.caller.name;
        if (actual) {
            return this.returnResult(assertname, false, false, actual);
        } else {
            return this.returnResult(assertname, true, false, actual);
        }
    },
    returnResult: function(name, result, expected, actual) {
        return {
            name: name,
            result: result,
            expected: expected,
            actual: actual
        }
    }
}