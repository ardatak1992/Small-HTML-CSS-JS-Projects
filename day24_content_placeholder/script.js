const card = document.querySelector(".card")


setTimeout(() => {
  card.classList.remove("loading")
  card.innerHTML = `
    <div class="img-container">
        <img src="https://picsum.photos/400/250" alt="" />
      </div>
      <div class="text">
        <h3>Lorem ipsum dolor sit.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          ratione aperiam eveniet molestias itaque nobis.
          
        </p>

        <div class="profile">
          <div class="img-container">
            <img src="https://picsum.photos/50" alt="" />
          </div>
          <div class="profile-info">
            <h4>John Doe</h4>
            <p>Oct 08, 2024</p>
          </div>
        </div>
      </div>
  `
}, 2000)
