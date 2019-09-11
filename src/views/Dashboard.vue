<template>
  <v-row>
    <v-col cols="3">

    </v-col>
    <v-col cols="6">
      <DataListContainer />
    </v-col>
    <v-col cols="3">

    </v-col>
  </v-row>
</template>

<script>
import { DataListContainer } from '../components';

export default {
  components: {
    DataListContainer,
  },
};
</script>
