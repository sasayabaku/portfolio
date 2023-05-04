<script setup lang="ts">
const route = useRoute();
console.log(route.path);

const { data } = await useAsyncData('page-data', () => queryContent(route.path).findOne())
console.log(data);
</script>

<template>
    <main>
        <ContentRenderer>
            <h1 class="text-2xl font-bold text-prim-gray pt-12 ml-8 mr-8">{{ data.title }}</h1>
            <ContentRendererMarkdown class="content-text mt-8 ml-8 mr-8" :value="data" />
        </ContentRenderer>
    </main>
</template>
<style>

.content-text h1 {
    /* color: blue; */
    font-size: 1.4rem;
    margin: 1rem 0;
}

.content-text h2 {
    font-size: 0.8rem;
    margin: 1rem 0;
}

.content-text p {
    font-weight: 200;
    line-height: 2rem;
    margin-bottom: 2.5rem;
}

.content-text ul {
    list-style: circle;
    margin-left: 1rem;
}

</style>

<style scoped>

.title {
    font-weight: 500;
}

</style>