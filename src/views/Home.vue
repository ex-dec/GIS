<template>
	<Navbar />
	<main class="w-full">
	
  <section class="lg:min-h-screen section bg-gradient-to-r from-sky-500 to-indigo-600">
			<Headline />
		</section>

		<section class="section bg-gray-100 flex flex-wrap justify-center md:justify-between gap-3">
			<template v-for="(data, x) in highlights" :key="x">
				<div class="border-b-2 px-2 pb-2 border-sky-600 flex flex-col items-center justify-center py-5">
					<strong class="text-indigo-600 text-xl md:text-2xl">
						{{ data.num }}
					</strong>
					<small class="text-gray-500">
						<i class="text-sm mr-1" :class="data.icon"></i>
						{{ data.title }}
					</small>
				</div>
			</template>
		</section>
	
		<section id="about" class="section bg-gray-100">
			<About />
		</section>

		<section class="section bg-gradient-to-r from-slate-700 to-indigo-900">
			<Footer />
		</section>
		
	</main>
</template>

<script setup>

	import Navbar from '@/components/Navbar.vue'
	import Headline from '@/components/Headline.vue'
	import About from '@/components/About.vue'
	import Footer from '@/components/Footer.vue'

</script>

<style scoped>
	.section {
		@apply w-full px-0 py-12 md:px-16 xl:px-28;
	}
</style>
