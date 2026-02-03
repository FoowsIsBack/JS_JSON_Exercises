const student = {
  id: 1,
  name: "Kiryll Dave Bangcoyo",
  course: "BSIT",
  age: 20
};

console.log("ID:", student.id);
console.log("Name:", student.name);
console.log("Course:", student.course);
console.log("Age:", student.age );
console.log("==================");

function showStudent() {
  document.getElementById("output").innerHTML =
    "ID: " + student.id + "<br>" +
    "Name: " + student.name + "<br>" +
    "Course: " + student.course + "<br>" +
    "Age: " + student.age;
}

const student1 = [
  {
    id: 1,
    name: "Kiryll Dave Bangcoyo"
  },
  {
    id: 2,
    name: "Domasig Anthony"
  },
  {
    id: 3,
    name: "Raph Malinao"
  }
];

function showStudent1() {
  let output = "";
  student1.forEach(student => {
    output += "ID: " + student.id + "<br>" +
              "Name: " + student.name + "<br><br>";
    console.log("ID:", student.id, "| Name:", student.name);
  });
  document.getElementById("output1").innerHTML = output;
}

function convertStudent() {
  const jsonString = JSON.stringify(student);
  console.log("JSON String:", jsonString);

  const parsedStudent = JSON.parse(jsonString);
  console.log("Parsed Object:", parsedStudent);

  console.log("Student's Name after parsing:", parsedStudent.name);

  document.getElementById("output3").innerHTML =
    "Student's Name after parsing: " + parsedStudent.name;
}

function storingStudent() {
  const student = {
    id: 1,
    name: "Kiryll Dave Bangcoyo",
    course: "BSIT",
    age: 20
  };

  const storedData = JSON.stringify(student);
  console.log("Stored JSON String:", storedData);

  const parsedStudent = JSON.parse(storedData);
  console.log("Parsed JSON Object:", parsedStudent);

  let output = "";
  for (let key in parsedStudent) {
    output += key + ": " + parsedStudent[key] + "<br>";
    console.log(key + ": " + parsedStudent[key]);
  }

  document.getElementById("output4").innerHTML = output;
}

function product() {
const products = [
  {
    productName: "Laptop",
    price: 15000,
    quantity: 1
  },
  {
    productName: "Mouse",
    price: 300,
    quantity: 1
  },
  {
    productName: "Keyboard",
    price: 1000,
    quantity: 1
  }
];

  let output = "";
  
  products.forEach(p => {
    const totalValue = p.price * p.quantity;

    output += "Product Name: " + p.productName + "<br>";
    output += "Total Value: " + totalValue + "<br><br>";

    console.log("Product Name:", p.productName, "| Total Value:", totalValue);
  });

  document.getElementById("output5").innerHTML = output;
}

function loopName() {
  const grades = {};

  const subjects = ["English", "Math", "Science"];

  subjects.forEach(subject => {
    grades[subject] = Math.floor(Math.random() * 26) + 75;
  });

  let output = "";
  for (let subject in grades) {
    output += subject + ": " + grades[subject] + "<br>";
    console.log(subject + ": " + grades[subject]);
  }

  document.getElementById("output6").innerHTML = output;
}