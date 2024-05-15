class Shapes {
    constructor() {
        this.color = 'black'; // Default color for shapes
    }

    setColor(color) {
        this.color = color;
    }

    // Common method for rendering shapes
    render() {
        // This method can be overridden by child classes
        return '';
    }
}

class Circle extends Shapes {
    constructor() {
        super(); // Call the constructor of the parent class
        this.color = 'black';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<circle cx="25" cy="75" r="20" fill="${this.color}" />`;
    }
}

class Triangle extends Shapes {
    constructor() {
        super();
        this.color = 'black';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

class Square extends Shapes {
    constructor() {
        super();
        this.color = 'black';
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<rect x="10" y="10" width="30" height="30" fill="${this.color}" />`;
    }
}

// Export all classes
module.exports = { Shapes, Circle, Triangle, Square };