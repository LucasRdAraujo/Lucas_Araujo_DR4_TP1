<template>
  <div id="app">
    <b-container fluid>
      <b-row>
        <b-col col lg="8">
          <div v-for="tarefa in tarefas" :key="tarefa.id">
            <b-card
              v-if="tarefa.completa"
              bg-variant="primary"
              text-variant="white"
              :header="`Tarefa número: ${tarefa.id}`"
              class="text-center m-2"
            >
              <b-card-text>{{ tarefa.descricao }}</b-card-text>
              <b-button size="sm" variant="light" @click="deletarAnotacao(tarefa.id)">Excluir</b-button>
            </b-card>

            <b-card
              v-else
              bg-variant="danger"
              text-variant="white"
              :header="`Tarefa número: ${tarefa.id}`"
              class="text-center m-2"
            >
              <b-card-text>{{ tarefa.descricao }}</b-card-text>
              <b-button size="sm" variant="light" @click="deletarAnotacao(tarefa.id)">Excluir</b-button>
            </b-card>
          </div>
        </b-col>
        <b-col>
          <Formulario :tarefas="tarefas" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Formulario from "./components/Fomulario.vue";
import FirebaseStore from "./manager/FirebaseStore";

export default {
  name: "App",
  components: {
    Formulario,
  },
  data() {
    return {
      tarefas: this.pegarAnotacoes(),
    };
  },
  methods: {
    pegarAnotacoes() {
      FirebaseStore.FirebaseStore.pegarAnotacoes((result, response) => {
        if (response) {
          this.tarefas = result;
        }
      });
    },
    deletarAnotacao(id){
      FirebaseStore.FirebaseStore.deletarAnotacao(id.toString(), (response) => {
        if(response){
          this.tarefas = this.tarefas.filter(el => el.id != id);
        }
      })
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
