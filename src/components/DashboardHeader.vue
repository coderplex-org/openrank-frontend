<template>
  <v-row justify="space-between">
    <v-col cols="4">
      <v-container>
        <v-row>
          <v-breadcrumbs :items="breadcrumbItems">
            <template v-slot:divider>
              <v-icon>mdi-forward</v-icon>
            </template>
          </v-breadcrumbs>
        </v-row>
        <v-row>
          <v-tabs centered grow>
            <v-tab v-for="(item, index) in tabItems" :key="index">
              {{ item.text }}
            </v-tab>
          </v-tabs>
        </v-row>
      </v-container>
    </v-col>
    <!--      <v-spacer></v-spacer>-->
    <v-col cols="2" align-self="center">
      <div>
        <v-btn large block>Go to test</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'DashboardHeader',
  props: {
    breadcrumbItems: Array,
    tabItems: Array,
  },
};
</script>

<style scoped>

</style>
