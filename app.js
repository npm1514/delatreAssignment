var shButton = document.getElementsByClassName('show-hide-button');
var onlineUsers = document.getElementsByClassName('online-users');

shButton[0].addEventListener('click', function(e){
  if(shButton[0].classList.value.indexOf('show-hide-button_show') != -1){
    onlineUsers[0].classList.value = "online-users online-users_active";
    shButton[0].classList.value = "show-hide-button show-hide-button_hide";
    shButton[0].innerText = "Hide Players";
  } else {
    onlineUsers[0].classList.value = "online-users online-users_inactive";
    shButton[0].classList.value = "show-hide-button show-hide-button_show";
    shButton[0].innerText = "Show Players";
  }
});

(function(){
  fetch('http://nflarrest.com/api/v1/player')
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    createList(data)
  });
})();

function createList(data){
  var listOfPlayers = data.map(function(player){
    var listWrapper = document.getElementsByClassName('online-users__list-of-users');
    var div = document.createElement('div');
    div.className = "player-card";
    div.innerHTML = `
      <div class="player-name">${player.Name}</div>
      <div class="player-position">Position: ${player.Position}</div>
      <div class="player-team">Team: ${player.Team} ${player.Team_name}</div>
      <div class="player-arrest-count">Arrest Count<br/><span class="player-arrest-count__span">${player.arrest_count}</span></div>
    `;
    listWrapper[0].appendChild(div);
  });


}
