<template>
    <main>
        <div>
            <h1>
                Vill du beställa en Discord server?
                <br>
                Kontakta mig via min Gmail, Discord DMs, eller via min Discord server!
            </h1>
            <div>
                <p><img src="../assets/icons/gmail.png" alt="">Gmail: khilocreations@gmail.com</p>
                <p><img src="../assets/icons/discord.png" alt="">Discord: Khilo#0001</p>
                <p><img src="../assets/icons/discordserver.png" alt="">Discord Server:<a href="https://discord.gg/tjg623Yd9Z">https://discord.gg/tjg623Yd9Z</a></p>
            </div>
        </div>
    </main>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

main {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Josefin Sans';
}
main div h1 {
    font-size: 40px;
}
main div div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
}
main div div p {
    display: flex;
    align-items: center;
}
main div div p img {
    margin-right: 5px;
    width: 30px;
}
main div div a {
    margin-left: 10px;
    color: white;
}
main div div a:hover {
    color: blue;
}
</style>