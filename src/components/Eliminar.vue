<template>
    <div>
      <b-button @click="showConfirmationDialog">
        <b-icon icon="trash"></b-icon>
      </b-button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      showConfirmationDialog() {
        this.$swal({
          title: '¿Estás seguro?',
          text: '¿Realmente quieres eliminar este elemento?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Sí, eliminar',
          cancelButtonText: 'Cancelar',
        }).then((result) => {
          if (result.isConfirmed) {
            this.$emit('confirmed'); // Emitir un evento al componente padre si se confirma la eliminación
          }
        });
      },
    },
  };
  </script>
  