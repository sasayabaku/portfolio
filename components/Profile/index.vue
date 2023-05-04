<template>
    <div id="profile" class="pt-10">
        <div class="grid md:grid-cols-1 lg:grid-cols-2  gap-4 relative z-10 lg:mx-40">
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
        <div class="m-8 lg:m-16">
            <h2 class="text-2xl font-bold text-prim-gray">Skiils</h2>
            <ul class="horizontal-list">
                <li class="item m-8"><ProfileSkills /></li>
                <li class="item m-8"><ProfileSkillsweb /></li>
                <li class="item m-8"><ProfileSkillsml /></li>
            </ul>
        </div> 
        <div class="m-8 lg:m-16">
            <h2 class="text-2xl font-bold text-prim-gray">Related Works</h2>
            <ul class="pt-4 grid md:grid-cols-1 lg:grid-cols-3  gap-4">
                <li class="m-4">
                    <NuxtLink :to="`/works/design_web_vr`">
                        <Works 
                            title="Design WebVR Product"
                            description="LightWeight VR Ecommerce."
                            :bgimg="`url(/content/design_webvr_product.jpeg)`"
                        />
                    </NuxtLink>
                </li> 
                <li class="m-4">
                    <NuxtLink :to="`/works/3d_model_engineer`">
                        <Works 
                            title="3D Model Engineer"
                            description="XR Commerce Strategic Planning."
                            :bgimg="`url(/content/3d_model_engineer.png)`"
                        />
                    </NuxtLink>
                </li> 
                <li class="m-4">
                    <NuxtLink :to="`/works/maas_data_scientist`">
                        <Works 
                            title="MaaS Data Scientist"
                            description="Data Analysis with Transportation Marketing."
                        />
                    </NuxtLink>
                </li> 
            </ul>
            <br />
            <div class="orig-button">
                <button>More Info</button>
            </div>
        </div>
        <div class="m-8 lg:m-16">
            <h2 class="text-2xl font-bold text-prim-gray">Contributions</h2>
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

.orig-button {
    display: flex;
    justify-content: center;    
}
.orig-button button {
    padding: 0.25rem 1.75rem;
    color: #626869;
    border: solid 1px #626869;
    border-radius: 0.3rem;
}

</style>