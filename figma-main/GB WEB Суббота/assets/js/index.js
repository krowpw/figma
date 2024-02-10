let work = document.getElementById('work');
let education = document.getElementById('education');
let list = document.querySelector('.profile-about_profile-list')

console.log(work, education, list);

function Click() {
    console.log('нажали')
}

work.onclick = function(){
    console.log("нажали на work")
    list.innerHTML = "";
    list.insertAdjacentHTML("afterbegin", 
    `<article class="profile-item">
    <h5>гитлер</h5>
    <div class="profile-item_bottom">
      <h5>Здарова, ГЕЙмеры</h5>
      <div class="profile-item__date">
        <img src="./assets/img/icons/calendar.svg" alt="">

        <h6>Всем Иисуса</h6>
      </div>
    </div>
  </article>`)
};
education.onclick = () => {
    console.log("нажали на education")
    list.innerHTML = "";
    list.insertAdjacentHTML("afterbegin", 
    `<article class="profile-item">
    <h5>卐НЕМЕЦКАЯ СОВА卐</h5>
    <div class="profile-item_bottom">
      <h5>ТЫ УМРЕШЬ В МУКАХ ТЫ УМРЕШЬ В МУКАХ</h5>
      <div class="profile-item__date">
        <img src="./assets/img/icons/calendar.svg" alt="">

        <h6>БОБЫ ЗВОНЯТ</h6>
      </div>
    </div>
  </article>`)
};
