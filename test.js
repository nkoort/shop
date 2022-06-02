   let array = [
      {
      bool: false,
      name: 'FALSE 1'
      },
      {
      bool: true,
      name: 'TRUE 2'
      },
      {
         bool: false,
         name: 'FALSE 3'
      },
      {
         bool: true,
         name: 'TRUE 4'
      },
      {
         bool: false,
         name: 'FALSE 5'
      },
   ]

   let arrayObj = {
      name: 'Jon',
      age: '25',
      country: 'UA',
      sity: 'Kyiv',
   }

   let newArray = Object.keys(array).map( n => array[n].name);
   console.log(newArray);

   let newArrayObj = Object.keys(arrayObj).map( n => n);
   console.log(newArrayObj);



  function  funcContai(name) {
      let func = (name) => {
         console.log(this.name)
      }
   }
   
   funcContai('lin')