fetch("https://hackclub.com/_next/data/T13kD8SWUrCga_9bc9P5j/arcade/shop.json")
    .then((response) => response.json())
    .then((json) => console.log(json));