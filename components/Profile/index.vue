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
        </div>
        <div class="mt-12 m-8 grid grid-cols-3 text-sm text-base" id="content-switch">
            <div class="col-span-1">
                <button>Skills</button>
            </div>
            <div class="col-span-1">
                <button>Career</button>
            </div>
            <div class="col-span-1">
                <button>Portfolio</button>
            </div>
        </div>
        <div class="m-8">
            <h2 class="text-2xl font-bold text-prim-gray">Skiils</h2>
            <ul class="horizontal-list">
                <li class="item m-8"><ProfileSkills /></li>
                <li class="item m-8"><ProfileSkillsweb /></li>
                <li class="item m-8"><ProfileSkillsml /></li>
            </ul>
        </div> 
    </div>
</template>

<style lang="css" scoped>
ul.horizontal-list {
    overflow-x: auto;
    white-space: nowrap;
}

li.item {
    display: inline-block;
    vertical-align: top;
    width: 80%;
    max-width: 400px;
}

#content-switch {
    /* color: #626869; */
}

#content-switch div button {
    border: 0.5px solid #626869;
    border-radius: 0.265rem;
    padding: 0.15rem 0.5rem;
}

</style>