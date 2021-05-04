<template>
  <v-card class="image">
    <v-img :src=src height="250px" width="250" class="align-end">
      <div class="bottom-image" align="center">
        <v-card-actions style="color: white">
          <h3 v-text=title></h3>
          <v-spacer></v-spacer>
          <v-btn @click="()  => {
                if (fav==='true') {
                  fav='false';
                } else
                  fav='true';
                }"
                 icon color="white">
            <v-icon v-if="fav==='true'">mdi-heart</v-icon>
            <v-icon v-else>mdi-heart-outline</v-icon>
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
            :value=stars
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
    stars: String,
    fav: String
  },
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