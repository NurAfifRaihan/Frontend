/**
 * TODO 2.
 * Import variable users dari file data/users.js
 */
import users from "../models/users.js";

/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 3.
 * Buat function formatUser: Format nama user.
 * Fungsi membutuhkan waktu 3 detik.
 * Hint:
 * - Gunakan method map untuk format user.
 * - Gunakan promise untuk handle asynchronous.
 */
function formatUser(title) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const formattedName = users.map(function(users){
        return { ...users, name: `${title} ${users.name}⁠`}
        
      });
      resolve(formattedName);
    }, 3000); // Menunggu 3 detik
  });
}

/**
 * TODO 4.
 * Buat function findByName: Mencari 1 user by name.
 * Fungsi membutuhkan waktu 2 detik.
 * Hint:
 * - Gunakan method find untuk mencari 1 user.
 * - Gunakan promise untuk handle asynchronous.
 */
function findByName(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const findByName = users.find(function(user) {
        return user.name = `${name}`;
      });
      resolve(findByName);
    }, 2000); // Menunggu 2 detik
  });
}



/**
 * SARAN TODO3 - TODO5.
 * Tulis dulu solusi tanpa penggunaan promise.
 * Setelah itu refactor dengan menambahkan promise.
 */

/**
 * TODO 5.
 * Buat function filterByMajor: Mencari semua user by major.
 * Fungsi membutuhkan waktu 4 detik.
 * Hint:
 * - Gunakan method filter untuk mencari semua user.
 * - Gunakan promise untuk handle asynchronous.
 */

function filterByMajor(major) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredByMajor = users.filter(function(user){
        return user.major === `${major}` ;
      });
      resolve(filteredByMajor);
    }, 4000); // Menunggu 4 detik
  });
}



/**
 * TODO 6.
 * Export fungsi: formatUser, findByName, filterByMajor
 */
// CODE HERE
export {formatUser, findByName, filterByMajor};