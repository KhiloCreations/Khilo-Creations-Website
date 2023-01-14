<template>

<main>
    <div>
        <h1>Khilo Creations</h1>
        <h2>Vi skapar Discord servrar efter dina önskemål</h2>
        <div class="buttons">
            <router-link to="info-privat">Privatperson</router-link>
            <router-link to="info-business">Företag</router-link>
        </div>
    </div>
</main>

</template>

<script>
export default {

}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&display=swap');

main {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

main div h1, h2 {
    font-family: 'Lobster Two';
    font-weight: 700;
    -webkit-text-stroke: 1px black;
}

main div h1 {
    font-size: 100px;
    margin: 0;
}

main div h2 {
    font-size: 45px;
}

main div .buttons {
    display: flex;
    justify-content: center;
}


main div .buttons a {
    padding: 1.3rem;
    width: 10rem;
    margin: 1rem;
    font-size: 20px;
    border-radius: 10px;
    background-color: #5066b8;
    color: white;
    text-decoration: none;
    transition: .2s ease-out;
}

main div a:hover {
    background-color: pink;
    color: black;
    transition: .2s ease-in;
}
</style>