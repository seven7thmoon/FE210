function getStreams(queryString, callback){
   const api = 'https://api.twitch.tv/helix/streams';
   const clientID = 'c9ul74v9g2ukrk8r3p8cgd9f1eqhxb'; // Twitch 官網註冊
   const appToken = 'vwhjl385srqr7wxqrl0secydr2kdvu'; // 註冊之後發 POST 取得 app access token
   const request = new XMLHttpRequest();
   request.open('GET', api + queryString, true);
   request.setRequestHeader('Authorization', 'Bearer ' + appToken);
   request.setRequestHeader('Client-Id', clientID);
   request.send();
   request.onload = function(e){
     const results = JSON.parse(request.response).data;
     const page = JSON.parse(request.response).pagination.cursor;
     pages.push(page);
     callback(results);
   }
 }


getData((err,data) =>{
   const streams = data.steams;

   const $row = $('.row');
   for(let stream of streams) {
      $row.append(getColumn(stream));
   }
});


function getColumn(data) { 
   return `
      <div class="col">
         <div class="preview">
            <img src="${data.preview.medium}"/>
         </div>
         <div class="bottom">
            <div class="avatar">
               <img src="${data.channel.logo}"/>
            </div>
            <div class="intro">
               <div class="channel_name">
                  ${data.channel.game_name}
               </div>
               <div class="owner_name">
                  ${data.channel.user_name}
               </div>
            </div>
         </div>
      </div>`;
}