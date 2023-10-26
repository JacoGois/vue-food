<template>
  <button :class="buttonClasses" @click="handleClick">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    success: {
      type: Boolean,
      default: false,
    },
    danger: {
      type: Boolean,
      default: false,
    },
    buttonText: String,
  },
  computed: {
    buttonClasses() {
      return {
        'bg-background text-white': this.primary,
        'bg-vue text-white': this.secondary,
        'bg-green-500 text-white': this.success,
        'bg-red-500 text-white': this.danger,
        'py-4 px-6 font-bold rounded-lg hover:opacity-80 hover:scale-105 transition-transform active:scale-95': true,
      }
    },
  },
  methods: {
    handleClick() {
      console.log('Botão clicado!')
    },
  },
}
</script>