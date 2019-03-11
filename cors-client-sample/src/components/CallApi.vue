<template>
  <div>
    <button @click="callHello">Call</button>
    <button @click="callCorsHello">Call(cors)</button>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  name: "CallApi",
  methods: {
    async callHello() {
      try {
        const res = await Axios.get(`http://localhost:3000/api/v1/helloworld`);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    },
    async callCorsHello() {
      try {
        const res = await Axios.get(`http://localhost:3000/api/v1/corshelloworld`);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

