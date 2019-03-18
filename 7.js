let employeeData = [
  {
    name: 'Jim Belgin',
    age: 60,
    coder: true,
    salary: 1000,
    subordinates: [
      'Mike',
      'Liz'
    ]
  },
  {
    name: 'Mike',
    coder: false,
    salary: 500,
    salary: 1400,
    age: 23,   
  },
  {
    name: 'Liz',
    coder: true,
    salary: 777,
    age: 20,
  },
  {
    name: 'Rosey',
    age: 42,
    subordinates: [
      "Annie",
      "Sam"
    ]
  },
  {
    name: 'Chris',
    age: 52,
    coder: true,
    salary: 200,
    subordinates: [
      "Jim Belgin",
      "Rosey"
    ]
  },
  {
    name: 'Annie',
    age: 30,
    coder: false,
    us: true,
  },
  {
    name: 'Sam',
    age: 25,
    coder: true,
    us: false,
  },
];

class Employee {
  constructor(name, age){
    this.name = name;
    this.age = age;

  }
}

class Manager extends Employee {
  constructor(name, age, subordinates) {
    super(name, age)
    this.subordinates = subordinates ? subordinates : [];
  }
}

//part1 - Build a tree consisting of Employee and Manager nodes. 
// Extend the manager class by adding a subordinates property 
// containing an array of all subordinate emloyees and managers

//tell them not to mutate the input

function buildTree(employees) {
  const bossObject = {};
  employees.forEach(emp => {
    if(emp.subordinates){
      if (bossObject[emp.name] !== false) {
        bossObject[emp.name] = true;
      }
      emp.subordinates.forEach(sub => bossObject[sub] = false);
    } else {
      bossObject[emp.name] = false;
    }
  });
  const bossName = Object.keys(bossObject).find(el => bossObject[el]);
  const boss = employees.find(el => el.name === bossName);
  function tree(node) {
    if (node.subordinates) {
      return new Manager(node.name, node.age, node.subordinates.map(subName => employees.find(item => item.name === subName)).map(tree))
    }
    return new Employee(node.name, node.age);
  }
  return tree(boss);
};

console.log('buildTree', buildTree(employeeData));


// should make leaf nodes employees, other managers
// should build a multi-level tree

//Part 2.1 Find the average age of all employees who are not managers

function averageEmployeeAge(employeeData){
  const root = buildTree(employeeData);
  function countAge(node){
    if (node.subordinates){
      return node.subordinates.reduce((acc, el) => {
        return acc + countAge(el)
      }, 0);
    }
    return node.age;
  }
  function countEmp(node){
    if (node.subordinates){
      return node.subordinates.reduce((acc, el) => {
        return acc + countEmp(el)
      }, 0);
    }
    return 1;
  }
  return countAge(root)/countEmp(root);
}

console.log('averageEmployeeAge', averageEmployeeAge(employeeData));

//Part 2.2 Find average age of all middle managers (have subordinates but are also subordinated)

function averageMiddleManagerAge(employeeData){
  const root = buildTree(employeeData);
  function countAge(node){
    if (node.subordinates){
      return node.subordinates.reduce((acc, el) => {
        return acc + countAge(el)
      }, node.age);
    }
    return node.age;
  }
  function countEmp(node){
    if (node.subordinates){
      return node.subordinates.reduce((acc, el) => {
        return acc + countEmp(el)
      }, 1);
    }
    return 0;
  }
  return (countAge(root)-root.age)/(countEmp(root)-1);
}

console.log('averageMiddleManagerAge', averageMiddleManagerAge(employeeData));


//Part 3 Return an Promised array of Employees who are coders sorted by salary from low to high. Omit coder if salary unavailable.
//Don't call buildTree. The test client expects all coders to be Employee objects, not Managers.

function codersArray(data) {
  // const emp = data.filter(el => el.coder && el.salary && !el.subordinates).sort((a, b) => a.salary - b.salary);
  // return emp.map(el => new Promise((res) => res(new Employee(el))));
}

console.log('codersArray', codersArray(employeeData));