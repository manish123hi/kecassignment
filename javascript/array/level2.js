const arr = ['kaylin', 'ram', 'gopal', 'ankit']

const userDetails = {
    'kaylin': 'khanal',
    'alisha': 'rauniyar',
    'ayush': 'rai',
    'gopal': 'tharu'
}
const m = arr.map((item)=>{
    if (userDetails[item])
      return item+' '+userDetails[item]
  }).filter(item=>item)
  console.log(m)

// expected output :
// ['kaylin khanal', 'gopal tharu']
//HIT: MAP IN ARR
//syntax:
// arr.map((item)=>{
    //yedi  userDetails[item] return
// })