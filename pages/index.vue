<script setup>
const runtimeConfig = useRuntimeConfig();

console.log(runtimeConfig.public.githubToken);
</script>
<template>
    <div class="mx-auto">
        <!-- <div class="grid grid-cols-6 gap-4 relative z-10">            
        </div> -->
        <Profile />
    </div>
</template>