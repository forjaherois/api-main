import Circle from './enviorement-test';

test('Should calculate the area of circle', () => {
    const circle = new Circle(2);
    expect(circle.getArea()).toBe(1.566370614359172);
});
