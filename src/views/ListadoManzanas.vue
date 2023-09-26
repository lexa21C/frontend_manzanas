<template>
  <div class="container ">
    <div class="row m-10">

    </div>
    <div class="row text-center ">
      <h1>Listado de Servicios</h1>
    </div>
    <div>
      <b-input-group size="sm" class="mb-2">
        <b-input-group-prepend is-text>
          <b-icon icon="search"></b-icon>
        </b-input-group-prepend>
        <b-form-input type="search" placeholder="Buscar manzanas"></b-form-input>
      </b-input-group>
    </div>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Manzana</th>
          <th scope="col">Servicios</th>
          <th scope="col">acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>nombre</td>
          <td>
            <button class="btn btn-outline-secondary">Registrar</button>
            <b-button class="m-1" variant="outline-primary">
              <b-icon icon="eye"></b-icon>
              <span v-if="showText === 'eye'">Ver</span>
            </b-button>
          </td>
          <td>
            <b-button
              class="m-1"
              variant="outline-primary"
              @mouseover="showText = 'eye'"
              @mouseleave="showText = ''"
            >
              <b-icon icon="eye"></b-icon>
              <span v-if="showText === 'eye'">Ver</span>
            </b-button>
            <b-button
              class="m-1"
              variant="outline-warning"
              @mouseover="showText = 'pencil'"
              @mouseleave="showText = ''"
            >
              <b-icon icon="pencil-square"></b-icon>
              <span v-if="showText === 'pencil'">Editar</span>
            </b-button>
            <b-button
              class="m-1"
              variant="outline-danger"
              @mouseover="showText = 'trash'"
              @mouseleave="showText = ''"
            >
              <b-icon icon="trash"></b-icon>
              <span v-if="showText === 'trash'">Borrar</span>
            </b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showText: '', // Variable para controlar el texto a mostrar
    };
  },
};
</script>

