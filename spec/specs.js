describe('leapYear', function() {
  it("is false for a year that is not divisible by 4", function() {
    expect(leapYear(1999)).to.equal(false);
  });

  it("is true for most years divisible by 4", function() {
    expect(leapYear(2012)).to.equal(true);
  });

  it("is false for most years divisible by 100", function() {
    expect(leapYear(1900)).to.equal(false);
  });
});
