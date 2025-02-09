const question1 = {
    _id: "64b9f1e96e1a4f74b678c001",
    question: "What is the capital of France?",
    options: [
      { id: 1, option: "Berlin" },
      { id: 2, option: "Paris" },
      { id: 3, option: "Madrid" },
      { id: 4, option: "Rome" }
    ],
    correctOption: "Paris",
    mark: 5,
    createdAt: "2024-01-20T12:34:56Z",
    updatedAt: "2024-01-21T08:21:34Z",
    __v: 0
  };
  
  const question2 = {
    _id: "64b9f1e96e1a4f74b678c002",
    question: "Which planet is known as the Red Planet?",
    options: [
      { id: 1, option: "Earth" },
      { id: 2, option: "Mars" },
      { id: 3, option: "Jupiter" },
      { id: 4, option: "Saturn" }
    ],
    correctOption: "Mars",
    mark: 3,
    createdAt: "2024-02-15T09:17:32Z",
    updatedAt: "2024-02-15T09:17:32Z",
    __v: 0
  };
  
  const question3 = {
    _id: "64b9f1e96e1a4f74b678c003",
    question: "What is the largest mammal?",
    options: [
      { id: 1, option: "Elephant" },
      { id: 2, option: "Blue Whale" },
      { id: 3, option: "Giraffe" },
      { id: 4, option: "Shark" }
    ],
    correctOption: "Blue Whale",
    mark: 4,
    createdAt: "2024-03-10T07:45:28Z",
    updatedAt: "2024-03-11T15:14:52Z",
    __v: 0
  };
  
  const question4 = {
    _id: "64b9f1e96e1a4f74b678c004",
    question: "Which element has the chemical symbol 'O'?",
    options: [
      { id: 1, option: "Oxygen" },
      { id: 2, option: "Gold" },
      { id: 3, option: "Silver" },
      { id: 4, option: "Iron" }
    ],
    correctOption: "Oxygen",
    mark: 2,
    createdAt: "2024-04-01T11:23:47Z",
    updatedAt: "2024-04-01T11:23:47Z",
    __v: 0
  };
  
  const question5 = {
    _id: "64b9f1e96e1a4f74b678c005",
    question: "What is the boiling point of water in Celsius?",
    options: [
      { id: 1, option: "90°C" },
      { id: 2, option: "100°C" },
      { id: 3, option: "120°C" },
      { id: 4, option: "80°C" }
    ],
    correctOption: "100°C",
    mark: 3,
    createdAt: "2024-05-05T05:12:22Z",
    updatedAt: "2024-05-06T10:04:10Z",
    __v: 0
  };
  

  const question6 = {
    _id : "64db2d1be4c1e6ae45cf44f2",
    question: "What is the capital of France?",
    options: [
      { id: 1, option: "Berlin" },
      { id: 2, option: "Paris" },
      { id: 3, option: "Madrid" },
      { id: 4, option: "Rome" }
    ],
    correctOption: "Paris",
    mark: 5
  };
  
  const question7 = {
    _id : "64db2d2ae4c1e6ae45cf44f3",
    question: "Which planet is known as the Red Planet?",
    options: [
      { id: 1, option: "Earth" },
      { id: 2, option: "Mars" },
      { id: 3, option: "Jupiter" },
      { id: 4, option: "Venus" }
    ],
    correctOption: "Mars",
    mark: 5
  };
  
  export const exam = {
    title: "Geography and Astronomy Quiz",
    creator: "64db19f4e4c0f5ae97cf44f1", // example ObjectId of the user who created the exam
    startDate:JSON.stringify( new Date("2024-11-15T10:00:00Z")),
    endDate: JSON.stringify(new Date("2024-11-15T11:00:00Z")),
    final: true,
    subject: "General Knowledge",
    comment: "This is the final exam for the semester.",
    questions: [
      question1, // ObjectId of question1
      question2, // ObjectId of question2
      question3, // ObjectId of question1
      question4,
      question5, // ObjectId of question1
      question6,
      question7,
      question5, // ObjectId of question1
      question6,
      question7
    ]
  };
  

  export const questions= [
    question1, // ObjectId of question1
    question2, // ObjectId of question2
    question3, // ObjectId of question1
    question4,
    question5, // ObjectId of question1
    question6,
    question7,
    question5, // ObjectId of question1
    question6,
    question7
  ]