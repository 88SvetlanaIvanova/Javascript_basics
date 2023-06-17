// Array of objects
const todos = [
    {
      id: 1,
      text: 'Take out trash',
      isComplete: false
    },
    {
      id: 2,
      text: 'Dinner with wife',
      isComplete: false
    },
    {
      id: 3,
      text: 'Meeting with boss',
      isComplete: true
    }
  ];

  //map, filter
  const todoCompleted = todos.filter(function(todo){
    return todo.isComplete === true;
  }).map(function(todo){
    return todo.text;
  })

  console.log(todoCompleted);
  
