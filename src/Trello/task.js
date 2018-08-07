const tasks = {
  todo: [
    {
      name: "Task A",
      createdAt: new Date(),
      description: "ABCDEF"
    },
    {
      name: "Task B",
      createdAt: new Date(),
      description: "ABCDEF"
    },
    {
      name: "Task C",
      createdAt: new Date(),
      description: "ABCDEF"
    }
  ],
  inprogress: [
    {
      name: "Task A",
      createdAt: new Date(),
      description: "ABCDEF"
    },
    {
      name: "Task B",
      createdAt: new Date(),
      description: "ABCDEF"
    },
    {
      name: "Task C",
      createdAt: new Date(),
      description: "ABCDEF"
    }
  ],
  done: [
    {
      name: "Task A",
      createdAt: new Date(),
      description: "ABCDEF"
    },

    {
      name: "Task B",
      createdAt: new Date(),
      description: "ABCDEF"
    },
    {
      name: "Task C",
      createdAt: new Date(),
      description: "ABCDEF"
    }
  ]
};

const mapName = {
  todo: "To Do List",
  inprogress: "In Progress",
  done: "Done"
};
export { tasks, mapName };
