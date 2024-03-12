/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const users = [
  { name: "Raihan", age: 30, major: "IT" },
  { name: "Afif", age: 25, major: "Engineering" },
  { name: "Asti", age: 28, major: "Business Administration" },
  { name: "Rigel", age: 35, major: "Finance" },
  { name: "Sephia", age: 27, major: "Marketing" }
];

console.log(users);


/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
const all = () => {
  for (const user of users) {
    console.log(`Name: ${user.name}, Age: ${user.age}, Major: ${user.major}`);
  }
};

all();



/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */

const store = (name, age, major) => {
  users.push({ name, age, major });
};

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
const update = (index, newName, newAge, newMajor) => {
  if (index >= 0 && index < users.length) {
    users[index] = { name: newName, age: newAge, major: newMajor };
  } else {
    console.log("Index out of range.");
  }
};

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
const destroy = (index) => {
  if (index >= 0 && index < users.length) {
    users.splice(index, 1);
  } else {
    console.log("Index out of range.");
  }
};

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
