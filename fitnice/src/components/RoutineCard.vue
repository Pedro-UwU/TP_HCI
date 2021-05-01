<template>
  <v-card class="image">
    <v-img :src=src height="250px" width="250" class="align-end">
      <div class="bottom-image" align="center">
        <v-card-actions style="color: white">
          <h3 v-text=title></h3>
          <v-spacer></v-spacer>
          <v-btn icon color="white">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-card-actions>
        <v-rating
            color="white"
            background-color="white"
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            half-icon="mdi-star-half-full"
            hover
            half-increments
            length="5"
            size="20"
            value="3"
        ></v-rating>
      </div>
    </v-img>
  </v-card>
</template>

<script>
export default {
  name: "RoutineCard",
  props: {
    title: String,
    src: String,
  }
}
</script>

<style scoped>
.bottom-image {
  background: #141D26;
  opacity: 80%;

}
.image {
  border-radius: 20px !important;
  width: 250px;
  height: 250px;
}
</style>