
<template>
    <div id="profile" class="pt-10">
        <div class="grid md:grid-cols-1 lg:grid-cols-2  gap-4 relative z-10">
            <div class="flex justify-center">
                <div class="w-32 h-32 lg:w-48 lg:h-48">
                    <img src="/img/icon.png" class="object-cover rounded-3xl"/>
                </div>
            </div>
            <div class="m-auto">
                <h1 class="font-extrabold text-xl">Sasayabaku</h1>
                <h2 class="text-base">AI & VR Service Architect</h2>
            </div>
            <div class="m-8">
                <ProfileSkills />
            </div>
        </div>     
    </div>
</template>