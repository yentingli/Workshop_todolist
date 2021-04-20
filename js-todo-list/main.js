// TO DO
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('ul').addEventListener('click', (e) =>{
    e.target.classList.toggle("checked")
    
    let li_span = document.querySelectorAll('li>span')
    console.log(li_span.len)
    
    for (i = 0; i < li_span.length; ++i) {
      if (li_span[i].classList.contains("checked")){
        li_span[i].parentNode.remove()
      }
    }

    // if (li_span.classList.contains("checked")){
    //   console.log(li_span.parentNode)
    //   // li_span.parentNode.remove()
    // }
    

  })
})