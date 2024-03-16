// controller.js
import users from "./users.mjs";



function formatUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const formattedUsers = users.map(title => {
        const { name } = title; // Mendapatkan properti name dari objek title
        return { ...title, name: `Mr/Mrs. ${name}`.toUpperCase() };
      });
      resolve(formattedUsers);
    }, 3000); // Menunggu 3 detik
  });
}

// Contoh pemanggilan fungsi formatUser
formatUser()
  .then(formattedUsers => {
    console.log(formattedUsers);
  })
