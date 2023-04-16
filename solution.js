const areaOrPerimeter = (l , w) => {
    if (l === w) {
        return l * w
    } else {
        return (l + l) + (w + w)
    }
  }

console.log(areaOrPerimeter(3, 3)) // 9
console.log(areaOrPerimeter(6, 10)) // 32


// Alternate Solution

const squareOrRectangle = (l, w) => l === w ? l*w : 2*(l+w)

console.log(squareOrRectangle(3, 3)) // 9
console.log(squareOrRectangle(6, 10)) // 32