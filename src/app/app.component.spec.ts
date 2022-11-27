describe('Calculator', () => {
  it('Adding two numbers', () => {
    // arrange
    const calc = new Calculator();
    // Act
    const total = calc.addTwoNumbers(5, 6);

    // Assert
    expect(total).toBe(11);
  });
});

export class Calculator {
  addTwoNumbers(a: number, b: number): number {
    return a + b;
  }
}

