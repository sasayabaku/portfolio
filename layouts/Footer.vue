<template>
    <div id="footer">
        <div class="topRow">
            <div class="link-icons">
                <img src="~/static/icons/Linkedin-link.svg" />
                <img src="~/static/icons/Qiita-link.svg" />
            </div>
        </div>
        <div class="bottomRow">
            <div class="copyrightDocument">
                <small>&copy; 2020 My Name</small>
            </div>
        </div>
    </div>
</template>

<script lang="js">
export default {
    components: {
    }
}
</script>

<style lang="scss" scoped>
    #footer {
        background-color: #2d2929;
        height: 150px;
    }

    .topRow {
        width: 100%;
        padding: 1rem 0;
        .link-icons {
            padding-right: 3rem;
            text-align: right;
        }
    }

    .bottomRow {
        border-top: 1px solid #A7A6A6;
        margin: 0 2rem;

        .copyrightDocument {
            color: #fff;
        }
    }

</style>