let userName = prompt('Enter Your Full Name')
let userSplit = userName.split(' ')
let userMap = userSplit.map((x) => x.charAt(0).toUpperCase() )
document.write(userMap.toString());
