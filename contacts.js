const { nanoid } = require("nanoid");
const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");
// TODO: задокументировать каждую функцию
const listContacts = function () {
  // ...твой код
  fs.readFile(contactsPath)
    .then((data) => console.table(JSON.parse(data)))
    .catch((err) => console.log(err.message));
};

// listContacts();

const getContactById = function (contactId) {
  fs.readFile(contactsPath)
    .then((data) => JSON.parse(data))
    .then((data) => data.filter((item) => Number(item.id) === contactId))
    .then((data) => console.table(data))
    .catch((err) => console.log(err.message));
};

const removeContact = function (contactId) {
  // ...твой код
  fs.readFile(contactsPath)
    .then((data) => JSON.parse(data))
    .then((data) => {
      const newData = data.filter((item) => Number(item.id) !== contactId);
      fs.writeFile(contactsPath, JSON.stringify(newData));
      return listContacts();
    })
    .catch((err) => console.log(err.message));
};

const addContact = function (name, email, phone) {
  // ...твой код
  fs.readFile(contactsPath)
    .then((data) => JSON.parse(data))
    .then((res) => {
      const strPhone = phone.toString();
      const newData = [
        ...res,
        {
          id: nanoid(),
          name,
          email,
          phone: `(${strPhone.slice(0, 3)}) ${strPhone.slice(
            3,
            6
          )}-${strPhone.slice(6)}`,
        },
      ];
      fs.writeFile(contactsPath, JSON.stringify(newData));
      return listContacts();
    })
    .catch((err) => console.log(err.message));
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
