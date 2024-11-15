const expect = require('chai').expect;

function sum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}
describe('#sum()', function () {
    
    it('should correctly sum an array of positive numbers', function () {
        expect(sum([1, 2, 3, 4, 5])).to.equal(15);
    });

    it('should correctly sum an array of negative numbers', function () {
        expect(sum([-1, -2, -3, -4, -5])).to.equal(-15);
    });

    it('should correctly sum an array of mixed positive and negative numbers', function () {
        expect(sum([1, -2, 3, -4, 5])).to.equal(3);
   });

    it('should return 0 for an empty array', function () {
        expect(sum([])).to.equal(0);
    });

    it('should return the number itself for an array with one element', function () {
        expect(sum([10])).to.equal(10);
    });
});

