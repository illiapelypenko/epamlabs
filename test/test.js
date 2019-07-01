const phoneBook = {
  people: [],

  add: (name, phone, email) => {
    phoneBook.people.push({
      name: name,
      phone: phone,
      email: email
    });
  },

  find: query => {}
};

phoneBook.add("Андрій", "8 099 6667778", "as@example.com");
phoneBook.add("Андрій 2", "089 4433444", "as@example.com");
phoneBook.add("Олег", "+38 (077) 777-7-777", "abc7@google.com");

console.log(phoneBook.people);
