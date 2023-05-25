<template>
    <div>
        <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
            <div class="text-center">
                <p class="text-4xl font-semibold text-purple-600">{{ error.statusCode }}</p>
                <h1 class="mt-4 text-lg font-bold tracking-tight text-gray-900 sm:text-2xl">Oppsie</h1>
                <p class="mt-6 text-base leading-7 text-gray-600">{{ error.message }}</p>
            </div>

            <NuxtLink to="/" class="mt-8">
                <span class="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm">
                    <span aria-hidden="true">&larr;</span> Go back home
                </span>
            </NuxtLink>
        </main>
    </div>
</template>

<script setup>
defineProps(['error'])
</script>

<style scoped>

</style>