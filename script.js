const restaurant = {
  days: {
    mon: {
      open: '10 am',
      close: '10 pm',
    },
    tue: {
      open: '10 am',
      close: '10 pm',
    },
    wed: {
      open: '10 am',
      close: '10 pm',
    },
    thurs: {
      open: '10 am',
      close: '10 pm',
    },
  },

  order({ customerName, mainIndex, open }) {                        // Destructuring object inside a function parameter
    return `${customerName}, ordered ${mainIndex}, at ${open}`; 
  },
};

const {
  days: {
    mon: { open, close },
  },
} = restaurant;
console.log(open, close);

console.log(
  restaurant.order({
    customerName: 'Harshil',
    mainIndex: 2,
    open,
  })
);
