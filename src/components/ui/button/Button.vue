<script setup>
import { computed, useAttrs } from "vue";
import { Primitive } from "reka-ui";
import { cn } from "@/lib/utils";
import { buttonVariants } from ".";

const props = defineProps({
  variant: { type: null, required: false },
  size: { type: null, required: false },
  class: { type: null, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false, default: "button" },
});

const attrs = useAttrs();
const emit = defineEmits(["click"]);
const delegatedAttrs = computed(() => {
  const { onClick, onClickCapture, ...rest } = attrs;
  return rest;
});
</script>

<template>
  <Primitive
    data-slot="button"
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
    v-bind="delegatedAttrs"
    @click="emit('click', $event)"
  >
    <slot />
  </Primitive>
</template>
