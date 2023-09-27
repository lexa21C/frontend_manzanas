<template>
    <div>
      <b-button @click="mostrarModal">
        <b-icon icon="eye"></b-icon>
      </b-button>
  
      <b-modal id="modal-1" title="Servicio" v-model="modalVisible" ok-title="Guardar" cancel-title="Cancelar" @ok="guardarServicio" @cancel="cancelarModal">
        <b-card class="transparent-card m-3" title="Manzanas cuidadoras">
            <b-card-text>
              <p><strong>Código del servicio:</strong> {{ servicio.codigo }}</p>
              <p><strong>Nombre del servicio:</strong> {{ servicio.nombre }}</p>
              <p><strong>Descripción del servicio:</strong> {{ servicio.descripcion }}</p>
              <p><strong>Fecha del Servicio:</strong> {{ servicio.descripcion }}</p>
              <p><strong>Hora del Servicio:</strong> {{ servicio.descripcion }}</p>

            </b-card-text>   
        </b-card>
      </b-modal>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['idServicios'],
    data() {
      return {
        manzanaActualizada: false, 
        modalVisible: false,
        municipios: null,
        servicio: {
        codigo: '',
        nombre: '',
        descripcion: '',
        fecha:null,
        hora:null,
      },
      };
    },
    methods: {
      mostrarModal() {
        // Cargar los datos de la manzana solo cuando se hace clic en el botón para abrir el modal
        this.cargarDatosManzana();
        this.listarMunicipios()
        this.modalVisible = true;
      },
      async listarMunicipios() {
        // Realiza la solicitud GET a la URL listar_municipios
        await axios.get('listar_municipios')
          .then(response => {
            // Almacena los datos de las municipios en la variable municipios
            this.municipios = response.data;
          })
          .catch(error => {
            console.error('Error al obtener la lista de manzanas:', error);
          });
      },
      cargarDatosManzana() {
        // Realizar una solicitud GET para obtener los datos de la manzana
        axios.get(`/listar_manzana/${this.idManzana}`)
          .then(response => {
            this.manzana.codigo = response.data.mensajes.codigo; 
            this.manzana.nombre = response.data.mensajes.nombre; 
            this.manzana.direccion = response.data.mensajes.direccion;
            this.manzana.localidad = response.data.mensajes.localidad;
            this.manzana.municipio_id = response.data.mensajes.municipio_id;
          })
          .catch(error => {
            console.error('Error al cargar los datos de la manzana:', error);
          });
      },

      cancelarModal() {
        // Cierra el modal sin guardar cambios
        this.modalVisible = false;
      },
    },
  };
  </script>