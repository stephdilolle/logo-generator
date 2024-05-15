const { Triangle, Circle, Square } = require('./shapes.js');

// Test triangle 
test('Triangle render method generates correct SVG string with specified color', () => {
    const shape = new Triangle();
    shape.setColor("blue");
    const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
    
    expect(shape.render()).toEqual(expectedSVG);
});

// Test circle
test('Circle render method generates correct SVG string with specified color', () => {
    const shape = new Circle();
    shape.setColor("pink");
    const expectedSVG = '<circle cx="25" cy="75" r="20" fill="pink" />';
    
    expect(shape.render()).toEqual(expectedSVG);
});

// Test square
test('Square render method generates correct SVG string with specified color', () => {
    const shape = new Square();
    shape.setColor("orange");
    const expectedSVG = '<rect x="10" y="10" width="30" height="30" fill="orange" />';
    
    expect(shape.render()).toEqual(expectedSVG);
});