<template>
  <div class="form">
    <label>Crie sua anotação:</label>
    <b-form-textarea
      placeholder="Descrição"
      v-model="descricao"
      rows="8"
    ></b-form-textarea>
    <b-form-checkbox
      ref="checkbox"
      style="width: 100%; user-select: none;" 
      name="check-button" 
      v-model="completa"
      switch>
      Está completa?
    </b-form-checkbox>
    <b-button squared style="width: 100%;" @click="setarAnotacao()" variant="success">Enviar</b-button>
  </div>
</template>

<script>
import FirebaseStore from '../manager/FirebaseStore'

export default {
  name: "Formulario",
  props: {
    tarefas: Array
  },
  data: function(){
    return {
      id: Math.round((new Date().getTime() / 1000)),
      descricao: '',
      completa: false
    }
  },
  methods: {
    setarAnotacao(){
      FirebaseStore.FirebaseStore.setarAnotacao(this.id, this.descricao, this.completa, (response) => {
        if(response){
          this.tarefas.push({ id: this.id, descricao: this.descricao, completa: this.completa });
          this.descricao = '';
          this.completa = false;
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
