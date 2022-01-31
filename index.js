const argv = require("yargs").argv;
const modules = require("./contacts.js");

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      modules.listContacts();
      break;

    case "get":
      // ... id
      modules.getContactById(id);
      break;

    case "add":
      // ... name email phone
      modules.addContact(name, email, phone);
      break;

    case "remove":
      // ... id
      modules.removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
