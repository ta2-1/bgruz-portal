<template>
	<div class="auth flex flex-col items-center justify-between h-[100%] px-[30px]">
		<header class="flex justify-between w-full py-[20px]">
			<img
				src="../../assets/logo-purple.svg"
				alt=""
			/>
		</header>
		<div class="w-full max-w-[500px] bg-[#000000] rounded-[16px] p-[30px] md:p-[50px]">
			<slot />
		</div>
		<footer class="py-[20px]">
			<p class="text-slate-500">© Zoy 2022 - {{ new Date().getFullYear() }}</p>
		</footer>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'AuthLayout' });
</script>

<style scoped lang="scss">
.auth {
	background: radial-gradient(49.98% 52.41% at 44.18% 118.79%, rgb(18 30 36) 0, rgb(0 0 0 / 97%)),
		radial-gradient(38.18% 50.85% at 43.11% -7.92%, rgba(50, 138, 245, 0.2) 0, rgb(89 131 190 / 73%)),
		radial-gradient(32.39% 65.68% at 101.26% 36.34%, rgb(11 13 19) 0, rgb(57 98 198 / 47%)),
		radial-gradient(25.84% 56.13% at -7.92% 73.21%, rgb(20 33 39 / 20%) 0, rgba(16, 169, 239, 0)), #f7f7f9;
}
</style>
