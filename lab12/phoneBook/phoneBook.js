const phoneBook = {
  people: [],

  add: (name, phone, email) => {
    phoneBook.people.push({
      name: name,
      phone: phone,
      email: email
    });
  },

  find: query => {
    let finded = document.createElement("h2");
    finded.innerText = `Finded: `;
    document.querySelector("body").appendChild(finded);
    if (query) {
      phoneBook.people.forEach(man => {
        for (value of Object.values(man)) {
          if (value.includes(query)) {
            let output = document.createElement("p");
            output.innerText = `${man.name}, ${man.phone}, ${man.email}`;
            document.querySelector("body").appendChild(output);
          }
        }
      });
    } else {
      phoneBook.people.forEach(man => {
        let output = document.createElement("p");
        output.innerText = `${man.name}, ${man.phone}, ${man.email}`;
        document.querySelector("body").appendChild(output);
      });
    }
  },

  remove: query => {
    let removed = document.createElement("h2");
    removed.innerText = `Removed: `;
    document.querySelector("body").appendChild(removed);
    let amount = 0;
    for (let i = 0; i < phoneBook.people.length; i++) {
      if (phoneBook.people[i].name === query) {
        phoneBook.people.splice(i, 1);
        amount++;
        i--;
      }
    }
    let output = document.createElement("p");
    output.innerText = `${amount}`;
    document.querySelector("body").appendChild(output);
  },

  showTable: () => {
    let tableName = document.createElement("h2");
    tableName.innerText = `Table: `;
    document.querySelector("body").appendChild(tableName);

    let table = document.createElement("table");
    document.querySelector("body").appendChild(table);

    let tbody = document.createElement("tbody");
    table.appendChild(tbody);

    table.style.borderCollapse = "collapse";

    phoneBook.people.forEach(man => {
      let tr = document.createElement("tr");
      let tdName = document.createElement("td");
      let tdPhone = document.createElement("td");
      let tdEmail = document.createElement("td");
      tdName.innerText = `${man.name}`;
      tdName.style.border = `1px #000 solid`;
      tdPhone.innerText = `${man.phone}`;
      tdPhone.style.border = `1px #000 solid`;
      tdEmail.innerText = `${man.email}`;
      tdEmail.style.border = `1px #000 solid`;
      tbody.appendChild(tr);
      tr.appendChild(tdName);
      tr.appendChild(tdPhone);
      tr.appendChild(tdEmail);
    });
  }
};
