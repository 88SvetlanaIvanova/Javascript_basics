// 12j, 12k
    const arrowfunction = (value1, value2) => { return value1 * value2; };

    //console.log(arrowfunction(2,3));
    //console.log(arrowfunction(7,10));

    //12l Create a function countPositive(nums) that takes an array of numbers
    // and returns how many numbers in the array are greater than zero. Create a function using .forEach() instead of loop.

    function countPositive(nums) {
      let positive = 0;
      nums.forEach(num => {
        if (num > 0) {
          positive++;
        }
      });
      return positive;
    };
    const nums1 = [1, 0, 3, -3];
    console.log(countPositive(nums1));

    //12m

    function addNum(array, num) {
      return array.map(value =>
        value + num);
    }
    const arr1 = [1, 2, 3];
    const arr2 = [-2, -1, 0, 99]
    console.log(addNum(arr2, 2));


    //12n Create a function removeEgg(foods)that takes an array of strings and returns an array where the string 'egg' is removed. Create this function using .filter() instead of a loop
    function removeEgg(foods) {
      return foods.filter(food => food !== 'egg');
    };
    const foodList = ['egg','apple', 'egg', 'banana', 'egg', 'orange', 'ham'];
    console.log(removeEgg(foodList));

//12o  Create a function removeEgg(foods)that takes an array of strings and returns an array where the first two string 'egg' is removed from the array. Create this function using .filter() instead of a loop
    function removeEgg2(foods) {
      let count = 0;
      return foods.filter(food => {
        if(food === 'egg'){
          count++;
        }
        return food !== 'egg' || count > 2;
      });
    };
    const foodList2 = ['egg', 'apple', 'egg', 'banana', 'egg', 'orange'];
    console.log(removeEgg2(foodList)); 
/*  return food !== 'egg' || count > 2;       To summarize:

If the current element is not equal to 'egg', it is automatically included in the filtered array.
If the current element is equal to 'egg' and the count of 'egg' occurrences is greater than 2, it is also included in the filtered array.
*/
