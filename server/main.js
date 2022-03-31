import "/imports/api/tasksMethods";
import "/imports/api/tasksPublications";
import { TasksCollection } from "/imports/db/TasksCollection";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";

const SEED_USERNAME = "meteorite";
const SEED_PASSWORD = "password";

const insertTask = ({ text }, user) =>
  TasksCollection.insert({
    text,
    userId: user._id,
    createdAt: new Date(),
  });

const user = Accounts.findUserByUsername(SEED_USERNAME);

Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    [
      { text: "First Task" },
      { text: "Second Task" },
      { text: "Third Task" },
      { text: "Fourth Task" },
      { text: "Fifth Task" },
      { text: "Sixth Task" },
      { text: "Seventh Task" },
    ].forEach((task) => insertTask(task, user));
  }

  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
});
