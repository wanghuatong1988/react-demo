//import React from 'react';

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return '(' + this.x + this.y + ')';
  }

}

class ColorPoint extends Point {
	constructor(x,y,c) {
		super(x,y);
		this.c = c;
	}
	toString() {
		return '(' + this.x + this.y + this.c + ')';
	}
}

export default new ColorPoint(2,3,4);

