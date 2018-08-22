<template>
    <div>
        <Header></Header>
        <Home></Home>
    </div>
</template>

<script>
    import Home from './Home.vue'
    import Header from './Header.vue'

    export default {
        name: 'Main',
        components: {
            Home,
            Header
        },
    }
</script>
