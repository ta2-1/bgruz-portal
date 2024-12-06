<template>
	<div class="w-full bg-[#000000] shadow border-slate-50 p-[6px] rounded-[10px]">
		<slot />
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'MbDropdownContainer' });
</script>
