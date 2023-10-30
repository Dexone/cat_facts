import './style.css'
import axios from 'axios'
const button = document.getElementById("buttons")
window.onload = function fact(){
  axios.get('https://catfact.ninja/fact').then((res)=>{
  const fact = String(res.data.fact)
  document.querySelector("#text").innerHTML = fact
    const pic = "https://placekitten.com/" + Math.floor(Math.random() * (700 - 600) +600)
    document.querySelector("#image").src = pic
  })
  }
button.onclick = function fact(){
axios.get('https://catfact.ninja/fact').then((res)=>{
const fact = String(res.data.fact)
document.querySelector("#text").innerHTML = fact
  const pic = "https://placekitten.com/" + Math.floor(Math.random() * (700 - 600) +600)
  document.querySelector("#image").src = pic
})
}
