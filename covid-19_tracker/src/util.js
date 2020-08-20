export const sortData = (data) => {
  // create a variable/function to sort the data by descendent number of cases
  //first: set the variable to read all the data/array
  const sortedData = [...data];
  //then, set the funciotn
return sortedData.sort((a,b) => (a.cases >b.cases ? -1 : 1))
};

//   sortedData.sort((a, b) => {
//     if (a.cases > b.cases) {
//       return -1;
//     } else {
//       return 1;
//     }
//   });
//   //then, retunr the function result
//   return sortedData;


//once is done, get back to the main and apply the function to the setDataTable();
