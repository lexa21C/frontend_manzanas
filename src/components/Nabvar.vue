<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="bg-nav">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Elementos alineados a la izquierda -->
        <b-navbar-nav>
          <b-nav-item href="#" class="ml-auto">Elemento Izquierda</b-nav-item>
        </b-navbar-nav>
        <!-- Elementos alineados a la derecha -->
        <b-navbar-nav class="ml-auto justify-content-end">
          <b-nav-item to="registrar">
            Registrar
          </b-nav-item>
          <b-nav-item to="login">
            Login
          </b-nav-item>
          <b-nav-item class="text-white">Servicios</b-nav-item>

          <b-nav-item-dropdown text="Manzanas" right>
            <b-dropdown-item to="listado-manzanas">Ver</b-dropdown-item>
            <b-dropdown-item to="crear-manzanas">Crear</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Servicios" right>
            <b-dropdown-item to="listado-servicios">Ver</b-dropdown-item>
            <b-dropdown-item to="crear-servicios">Crear</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Establecimientos" right>
            <b-dropdown-item to="listado-establecimientos">Ver</b-dropdown-item>
            <b-dropdown-item to="crear-establecimientos">Crear</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
.bg-nav {
  background-color: #005B8F !important;
}

.text-white {
  color: white !important;
}
</style>
