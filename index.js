var katzDeli=[]

function takeANumber(katzDeliLine,name){
  katzDeli.push(name)

  return `Welcome, ${name}. You are ${katzDeli[name]+1} in line.`
}
