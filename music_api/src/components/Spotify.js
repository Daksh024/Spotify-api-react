const client_id='a095b760fd304570bd1586ff9bdde955';
const redirect_uri='http://localhost:3000';
let access_token;

const Spotify = {
    getAccessToken(){
        if(access_token){
            return access_token;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresInMatch){
            access_token=accessTokenMatch[1];
            const expireIn = Number(expiresInMatch[1]);
            window.setTimeout(() => (
                access_token=''
            ), expireIn*1000);
            window.history.pushState('Access Token',null,'/');
            return access_token;
        }
        else{
            const accessURL = `https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=${redirect_uri}`;
            window.location = accessURL;
        }
    },
    search(term){
        const access_token = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,{
            headers:{
                Authorization: `Bearer ${access_token}`
            }
        }
        )
        .then(response => {return response.json();})
        // .then(jsonres => {return response.json();})
        .then(jsonres => {
            if(!jsonres.tracks){
                return []
            }
            return jsonres.tracks.items.map(track =>({
                id: track.id,
                name:track.name,
                artist:track.artist,
                album:track.album.name,
                uri:track.uri
            }));
        });
    }
}

export default Spotify;