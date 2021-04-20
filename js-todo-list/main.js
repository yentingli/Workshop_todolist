document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('ul').addEventListener('click', (e) =>{
    // feature1
    e.target.classList.toggle("checked")
    
    // feature2
    let li_span = document.querySelectorAll('li>span')
    
    for (i = 0; i < li_span.length; ++i) {
      if (li_span[i].classList.contains("checked")){
        li_span[i].parentNode.remove()
        return null
      }
    }
    
  })

  // feature3
  document.querySelector('#addBtn').addEventListener('click', (e) =>{
    task_text = e.target.previousElementSibling.value
    let task_list = document.querySelector('ul')
    const task_li = document.createElement("li")
    task_li.innerHTML = task_text+ '<span class="close">x</span>'
    task_list.insertAdjacentElement('afterbegin', task_li)
    e.target.previousElementSibling.value = ''
  })
})