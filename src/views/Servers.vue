<template>
    <main>
        <div class="serverlist">
            <div class="serverlist-item">
                <h1>Anis Don Demina</h1>
                <p>Influencer</p>
                <img src="../assets/servers/anis1.png" alt="">
                <img src="../assets/servers/anis2.png" alt="">
            </div>
        </div>
        <div class="serverlist">
            <div class="serverlist-item">
                <h1>Mishurba</h1>
                <p>Content creator</p>
                <img src="../assets/servers/mishurba.png" alt="">
            </div>
        </div>
        <div class="serverlist">
            <div class="serverlist-item">
                <h1>Limpandi</h1>
                <p>Twich streamer</p>
                <img src="../assets/servers/limpandi1.png" alt="">
                <img src="../assets/servers/limpandi2.png" alt="">
            </div>
        </div>
        <div class="serverlist">
            <div class="serverlist-item">
                <h1>Olle</h1>
                <p>Community server</p>
                <img src="../assets/servers/olle.png" alt="">
            </div>
        </div>
        <div class="serverlist">
            <div class="serverlist-item">
                <h1>Muskot</h1>
                <p>Twitch streamer</p>
                <img src="../assets/servers/muskot1.png" alt="">
                <img src="../assets/servers/muskot2.png" alt="">
            </div>
        </div>
        <div class="serverlist">
            <div class="serverlist-item">
                <h1>Maxgaming <span style="font-size: 20px">+ Personlig Bot</span></h1>
                <p>Företag - www.maxgaming.se</p>
                <img src="../assets/servers/maxgaming.png" alt="">
            </div>
        </div>
        <div class="serverlist">
            <div class="serverlist-item">
                <h1>Johannes Erlandsson</h1>
                <p>Twitch streamer</p>
                <img src="../assets/servers/je.png" alt="">
            </div>
        </div>
        <div class="serverlist">
            <div class="serverlist-item">
                <h1>Ghost</h1>
                <p>Twitch streamer</p>
                <img src="../assets/servers/ghost.png" alt="">
            </div>
        </div>
    </main>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

main {
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-family: 'Cabin';
}
.serverlist{
    margin: 5rem;
}
.serverlist-item img {
    margin: 1rem;
    width: 200px;
}
.serverlist-item p {
    font-size: 25px;
    font-style: italic;
}
</style>