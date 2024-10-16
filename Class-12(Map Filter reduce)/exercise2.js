const cart = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 },
    { name: 'Headphones', price: 200 },
  ];

  let total = cart.reduce(function(acc , item){
      acc = acc+item.price
      return acc
  } ,0)

  console.log(total)