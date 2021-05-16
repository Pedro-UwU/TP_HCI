<template>
  <v-card class="my-2 image">
    <v-img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
           height="100%"
           width="100%"
           class="align-end"
    >
      <v-container class="bottom-image align-content-center">
        <v-card-actions style="color: white">
          <a @click="$router.push(`/check?RId=${routine.id}`)" class="text-style">
            <h3 v-text="routine.name"></h3>
          </a>
          <v-spacer></v-spacer>
          <v-btn
              @click="changeFav()"
                 icon color="white">

            <v-icon v-if=Boolean(faved)>mdi-heart</v-icon>
            <v-icon v-else>mdi-heart-outline</v-icon>
          </v-btn>
        </v-card-actions>
        <v-rating
            color="white"
            background-color="white"
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            half-icon="mdi-star-half-full"
            half-increments
            length="5"
            size="20"
            :value="this.routine.averageRating"
            @input="rateRoutine($event)"
            align="center"
        ></v-rating>
      </v-container>
    </v-img>
  </v-card>
</template>

<script>
import {FavouriteApi} from "../js/FavouriteApi";
import {ReviewApi} from "../js/ReviewApi";
import {RoutineApi} from "../js/RoutineApi";

export default {
  name: "RoutineCard",
  props: {
    routine: Object,
  },
  data: () => ({
    faved: null,
    rating: null,
    routineIn: null
  }),
  methods: {
    changeFav() {
      if (this.faved === false) {
        FavouriteApi.postFav(this.routine.id).then(() => {
          this.faved = true;
        }).catch(e => {
          if (e.code == 2) {
            this.faved = false;
          }
        });
      } else {
        FavouriteApi.deleteFav(this.routine.id).then(() => {
          this.faved = false;
        }).catch( e => {
          if (e.code == 2) {
            this.faved = true;
          }
        })
      }
    },
    rateRoutine(rate) {
      ReviewApi.postReview(parseInt(rate),this.routine.id).then(() => {
        RoutineApi.getRoutine(this.routine.id).then((v) => {
          this.routineIn = v
          this.rating = this.routineIn.averageRating;
        })
      })
    },
    isFaved(){
      FavouriteApi.postFav(this.routine.id).then(() => {
        FavouriteApi.deleteFav(this.routine.id).then(() => {
          this.faved = false;
        }).catch(e => {
          if (e.code === 2) {
            this.faved = false;
          } else {
            console.log(e.code)
          }
        })
      }).catch(e => {
        if (e.code === 2) {
          this.faved = true;
        } else {
          console.log(e.code)
        }
      })
    }
  },
  mounted() {
    FavouriteApi.postFav(this.routine.id).then(() => {
      FavouriteApi.deleteFav(this.routine.id).then(() => {
        this.faved = false;
      }).catch(e => {
        if (e.code === 2) {
          this.faved = false;
        } else {
          console.log(e.code)
        }
      })
    }).catch(e => {
      if (e.code === 2) {
        this.faved = true;
      } else {
        console.log(e.code)
      }
    })
    this.rating = this.routine.averageRating;
    this.routineIn = this.routine
  },
  watch: {
    routine() {
      FavouriteApi.postFav(this.routine.id).then(() => {
        FavouriteApi.deleteFav(this.routine.id).then(() => {
          this.faved = false;
        }).catch(e => {
          if (e.code === 2) {
            this.faved = false;
          } else {
            console.log(e.code)
          }
        })
      }).catch(e => {
        if (e.code === 2) {
          this.faved = true;
        } else {
          console.log(e.code)
        }
      })
    }
  }
}
</script>

<style scoped>
.bottom-image {
  background: #141D26;
  opacity: 80%;
  height: 100px;
}
.image {
  border-radius: 20px !important;
  width: 250px;
  height: 250px;
}
.text-style {
  text-decoration: underline;
  color: white;
  display: block;
  text-align: center;
}
</style>