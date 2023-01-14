<template>
    <nav>
        <div>
            <router-link to="/">Hem</router-link>
            <router-link to="/servers">Servrar</router-link>
            <router-link to="/order">Beställ</router-link>
            <!-- <router-link to="/recensioner">Recensioner</router-link> -->
        </div>
    </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lilita+One&family=Quicksand:wght@300&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Wire+One&display=swap');

nav {
    display: flex;
    justify-content: center;
    padding: 2rem;
    font-family: 'Quicksand';
    background-color: #5066b8;
    box-shadow: 1px 1px 5px black;
}

nav div {
    border-bottom: 2px solid white;
}

nav div a {
    margin: 3rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;
    color: white;
}

nav div a:hover {
    transition: .1s ease-in;
    text-shadow: 0px 1px 10px black;
}
</style>