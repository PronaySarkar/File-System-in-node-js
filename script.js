const fs = require("fs");

// ============= Creating a new file ==================

// fs.writeFile("abc.txt","hello I am Pronay",function(err){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("File saved!");
//     }
// });

// ============= Reading a file ==================

// fs.readFile("abc.txt","utf8",function(err,data){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// ============= Appending in a file =================

// fs.appendFile("abc.txt","\nI am learning Node.js",function(err){
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Data appended successfully!");
//     }
// });

// ============= Renaming a file =================

// fs.rename("abc.txt", "hey.txt", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File renamed successfully!");
//   }
// });

// ============= Deleting a file =================

// fs.unlink("hey.txt", function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File deleted successfully!");
//     }
// });


// ============= Creating a directory =================

// fs.mkdir("lolo", function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Directory created successfully!");
//     }
// });

// ============= Deleting a directory =================

// fs.rm("lolo",{recursive:true}, function (err) {   
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Directory deleted successfully!");
//     }
// });
// // recursive mode is used for deleting files or directories which are inside the lolo directory