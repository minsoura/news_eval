<template>
  <button type="button" class="btn btn-primary" autocomplate="off" data-loading-text="jquery with bootstrap" @click="clickBtn">hello</button>
</template>

<script>
  export default {
    name: 'jQueryApp',
	methods: {
      clickBtn (event) {
        $(event.target).button('loadinga');

        setTimeout(function() {
          $(event.target).button('reset')
        }, 10000);
      }
	}
  }
</script>
