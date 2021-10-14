"use strict";

var clientId = 'kvtjw2jgsg52nbjq7wzegx6o0e119e';
var apiUrl = 'https://api.twitch.tv/helix/streams/?client_Id=' + clientId + '&game=League20%of20%Legends&limits=2';
var xhr = new XMLHttpRequest();
xhr.open("GET", apiUrl, true);
xhr.setRequestHeader('client_Id', clientId);
xhr.send();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    var response = JSON.parse(this.response);
    console.log(response);
  }
};