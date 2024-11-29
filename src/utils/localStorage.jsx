 const employeesData = [
  {
    id: "EMP001",
    firstName: "Arjun",
    email: "arjun@example.com",
    password: "123",
    taskCounts: {
      new: 1,
      active: 2,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Complete Project Proposal",
        description: "Draft and submit project proposal for client review",
        date: "2024-01-20",
        category: "Documentation",
        priority: "High"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Code Review",
        description: "Review pull requests for frontend components",
        date: "2024-01-21",
        category: "Development",
        priority: "Medium"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Bug Fixes",
        description: "Fix reported bugs in login module",
        date: "2024-01-19",
        category: "Development",
        priority: "Low"
      }
    ]
  },
  {
    id: "EMP002",
    firstName: "Priya",
    email: "priya@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      completed: 1,
      failed: 0,
      new: 3
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database Optimization",
        description: "Optimize database queries for better performance",
        date: "2024-01-22",
          category: "Database",
        priority: "Medium"
      },
      {
        title: "API Documentation",
        description: "Update API documentation with new endpoints",
        date: "2024-01-23",
        category: "Documentation",
        active: true,
        completed: false,
        newTask: false,
        failed: false,
        priority: "Low"
      },
      {
        title: "Security Audit",
        description: "Conduct security audit of authentication system",
        date: "2024-01-24",
        category: "Security",
        active: true,
        completed: false,
        newTask: false,
        failed: false,
        priority: "Low"
      },
      {
        title: "Team Meeting",
        description: "Weekly team sync-up",
        date: "2024-01-25",
        category: "Meetings",
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        priority: "Low"
      }
    ]
  },
  {
    id: "EMP003",
    firstName: "Rahul",
    email: "rahul@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      completed: 0,
      failed: 1,
      new: 1
    },
    tasks: [
      {
        title: "UI Design Review",
        description: "Review and approve new UI designs",
        date: "2024-01-26",
        category: "Design",
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        priority: "Medium"
      },
      {
        title: "Performance Testing",
        description: "Run performance tests on new features",
        date: "2024-01-27",
        category: "Testing",
        active: true,
        completed: false,
        newTask: false,
        failed: false,
        priority: "Low"
      },
      {
        title: "Code Refactoring",
        description: "Refactor authentication module",
        date: "2024-01-28",
        category: "Development",
        active: false,
        completed: false,
        newTask: false,
        failed: true,
        priority: "Low"
      }
    ]
  },
  {
    id: "EMP004",
    firstName: "Anjali",
    email: "anjali@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      completed: 1,
      failed: 0,
      new: 1
    },
    tasks: [
      {
        title: "User Training",
        description: "Conduct training session for new team members",
        date: "2024-01-29",
        category: "Training",
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        priority: "Medium"
      },
      {
        title: "Documentation Review",
        description: "Review technical documentation",
        date: "2024-01-30",
        category: "Documentation",
        active: true,
        completed: false,
        newTask: false,
        failed: false,
        priority: "High"
      },
      {
        title: "Client Meeting",
        description: "Present project progress to client",
        date: "2024-01-31",
        category: "Meetings",
        active: true,
        completed: false,
        newTask: false,
        failed: false,
        priority: "Low"
      },
      {
        title: "Bug Triage",
        description: "Prioritize reported bugs",
        date: "2024-02-01",
        category: "Management",
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        priority: "Low"
      }
    ]
  },
  {
    id: "EMP005",
    firstName: "Vikram",
    email: "vikram@example.com",
    password: "123",
    taskCounts: {
      active: 3,
      completed: 1,
      failed: 0,
      new: 1
    },
    tasks: [
      {
        title: "Feature Implementation",
        description: "Implement new payment gateway",
        date: "2024-02-02",
        category: "Development",
        active: true,
        completed: false,
        newTask: true,
        failed: false,
        priority: "Medium"
      },
      {
        title: "Code Migration",
        description: "Migrate legacy code to new framework",
        date: "2024-02-03",
        category: "Development",
        active: true,
        completed: false,
        newTask: false,
        failed: false,
        priority: "Low"
      },
      {
        title: "Testing Support",
        description: "Support QA team with testing",
        date: "2024-02-04",
        category: "Testing",
        active: true,
        completed: false,
        newTask: false,
        failed: false,
        priority: "High"
      },
      {
        title: "Documentation Update",
        description: "Update system architecture documentation",
        date: "2024-02-05",
        category: "Documentation",
        active: false,
        completed: true,
        newTask: false,
        failed: false,
        priority: "Low"
      }
    ]
  }
];

 const adminData = [
{
  id: "ADMIN001",
  firstName: "Admin",
  email: "admin@example.com",
  password: "123"
}
];

export const setLocalStorageData = () => {
  localStorage.setItem("employees", JSON.stringify(employeesData));
  localStorage.setItem("admin", JSON.stringify(adminData));
};

export const getLocalStorageData = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return {employees, admin};

 
};

