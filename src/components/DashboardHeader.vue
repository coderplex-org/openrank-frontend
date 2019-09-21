<template>
  <v-row justify="space-between">
    <v-col xs="12" md="9">
      <v-container>
        <v-row>
          <v-breadcrumbs :items="breadcrumbItems">
            <template v-slot:divider>
              <v-icon>mdi-forward</v-icon>
            </template>
          </v-breadcrumbs>
        </v-row>
        <v-row>
          <v-col xs="12" md="6">
            <v-tabs centered grow class="d-none d-md-flex">
              <v-tab v-for="(item, index) in tabItems" :key="index" class="mx-auto">
                {{ item.text }}
              </v-tab>
            </v-tabs>
            <v-tabs vertical grow class="d-md-none">
              <fragment v-for="(item, index) in tabItems" :key="index" :style="{width: '100%'}">
                <v-tab class="ml-0">
                  {{ item.text }}
                </v-tab>
              </fragment>
            </v-tabs>
          </v-col>
        </v-row>
      </v-container>
    </v-col>
    <!--      <v-spacer></v-spacer>-->
    <v-col xs="12" md="3" align-self="center">
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
