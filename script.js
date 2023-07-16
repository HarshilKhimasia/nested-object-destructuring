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
};

const {
  days: {
    mon: { open, close },
  },
} = restaurant;
console.log(open, close);
