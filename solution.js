const areaOrPerimeter = (l , w) => {
    if (l === w) {
        return l * w
    } else {
        return (l + l) + (w + w)
    }
  }

console.log(areaOrPerimeter(6, 10))
