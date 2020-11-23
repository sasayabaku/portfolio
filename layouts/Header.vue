<template>
    <div class="header">
        <nav class="menu">
            <span class="menu-item"><nuxt-link to='/'>Home</nuxt-link></span>
            <span class="menu-item"><nuxt-link to='inspire'>Blog</nuxt-link></span>
            <span class="menu-item"><nuxt-link to='inspire'>Gallary</nuxt-link></span>
        </nav>
    </div>
</template>

<style lang="scss" scoped>

    a {
        text-decoration: none;
        color: #333;
    }

    .header {
        padding: 0;
        height: 100%;
        position: fixed;
        background-color: rgba(255, 255, 255, 0.7);
    }

    .menu {
        position:relative;
        text-align: right;
        margin-right: 10rem;
        top: 50%;
        transform: translateY(-50%);
    }

    .menu-item {
        &::after {
            content: "";
            position: absolute;
            width: 0%;
            height: 3px;
            background: #e4286d;
            transition: 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            margin: 15.5px 0;
            right: 0;
            top: 5px;
            border-radius: 100px;
        }

        &:hover::after {
            width: 100%;
            left: 0;
        }

        list-style-type: none;
        display: inline;
        position: relative;
        margin: 15px;
        text-transform: capitalize;
        color: #333;
        letter-spacing: 1px;
        font-weight: 500;
    }


</style>