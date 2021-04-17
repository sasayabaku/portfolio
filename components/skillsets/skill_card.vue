<template>
    <div class="card">
        <div class="title">
            {{ content.title }}
        </div>
        <div class="main_sentence">
            {{ content.main_sentence }}
        </div>
        <div class="things">
            <div class="subheader">
                Things:
            </div>
            <ul class="item_list">
                <li v-for=" thing in content.things">{{ thing }}</li>
            </ul>
        </div>
        <div class="tools">
            <div class="subheader">
                Tools:
            </div>
            <ul class="item_list">
                <li v-for=" item in content.tools ">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        content: Object
    }
}
</script>

<style lang="scss" scoped>

    ul {
        list-style: none;
    }

    .card {
        display: block;
        position: relative;
        border-radius: 10px;
        box-shadow: 1px 1px 30px rgba($color: #000000, $alpha: 0.2);
        padding: 1.5rem;
        background-color: rgba($color: #fff, $alpha: 0.2);

        .title {
            font-weight: 600;
            font-size: 1.4rem;
        }

        .main_sentence {
            margin: 1rem 0 1.5rem 0;
        }

        .subheader {
            color: #e4286d;
        }

        .tools {
            padding-top: 1rem;
        }
    }

    .item_list {
        color: #626A7F;
        margin: 0.8rem 0;
        
        li {
            margin-bottom: 0.5rem;
        }
    }
</style>