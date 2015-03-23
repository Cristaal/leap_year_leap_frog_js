describe('leapYear', function() {
  it("is false if there are no numbers input in the field", function() {
    expect(leapYear(NaN)).to.equal("error");
  });

  it("is false if the inputted number is negative", function() {
    expect(leapYear(-4)).to.equal("error");
  })

  it("is false for a year that is not divisible by 4", function() {
    expect(leapYear(1999)).to.equal(false);
  });

  it("is true for most years divisible by 4", function() {
    expect(leapYear(2012)).to.equal(true);
  });

  it("is false for most years divisible by 100", function() {
    expect(leapYear(1900)).to.equal(false);
  });

  it("is true if the year is divisible by 400", function() {
    expect(leapYear(2000)).to.equal(true);
  });
});
