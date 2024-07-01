<script lang="ts" setup>
import { icons } from '@iconify-json/carbon';
import { getIconData, iconToSVG, replaceIDs } from '@iconify/utils';

const props = withDefaults(
  defineProps<{
    name: string;
    height?: string;
  }>(),
  {
    name: 'carbon:send-alt-filled',
    height: '20px',
  },
);

// Get content for icon
const iconData = ref(getIconData(icons, props.name));

const CustomIcon = computed(() => {
  if (!iconData) {
    console.error(`Icon "${props.name}" is missing`);
    return null;
  }

  // Use it to render icon
  const renderData = iconToSVG(iconData.value!, { height: props.height });

  return h('svg', {
    innerHTML: replaceIDs(renderData.body),
    ...renderData.attributes,
  });
});
</script>

<template>
  <component :is="CustomIcon" />
</template>
