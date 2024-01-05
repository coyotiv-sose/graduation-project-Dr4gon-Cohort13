doctorList = [
  { doctorName: 'Peter', type: 'Chiropracter' }, // new Doctor('Peter', 'Chiropracter')
  { doctorName: 'Sam', type: 'Osteopath' }, // new Doctor('Sam', 'Osteopath')
]; // array of doctors

console.log(doctorList.doctorName);

// To search a doctor with a name
// Go through the list of doctors
function searchDoctor(name) {
  for (let i = 0; i < doctorList.length; i++) {
    // Compare my search name "Sam" with the doctor's name
    if (doctorList[i].doctorName === name) {
      console.log('I found the doctor ' + name);
      // If the names are the same, return the doctor
      return doctorList[i];
    }
  }
}

console.log('Show result of search1:' + searchDoctor('Sam').doctorName);
console.log('Show result of search2:' + searchDoctor('Peter').doctorName);
