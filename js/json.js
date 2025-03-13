import sanger from "../json/sanger.json" with { "type": "json"}

const sangliste = document.querySelector("#sangliste")
sanger.forEach(sang => {
    sangliste.innerHTML += `<li>${sang.tittel} - ${sang.artist}</li>`
})

console.log(sanger)


document.querySelectorAll('.song-card').forEach(card => {
    card.addEventListener('click', function() {
        
        const wrapper = this.parentElement;
        
        document.querySelectorAll('.song-wrapper').forEach(otherWrapper => {
            if (otherWrapper !== wrapper) {
                otherWrapper.classList.remove('active');
            }
        });
        
        
        wrapper.classList.toggle('active');
    });
});