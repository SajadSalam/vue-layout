<template>
  <div>
    <v-card flat class="transparent">
      <v-card-title>
        اعدادات النمط
        <v-spacer></v-spacer>
        <v-btn color="success" x-large @click="$router.go()">
          <v-icon>mdi-swap-vertical-circle</v-icon>
          حفظ
        </v-btn>
      </v-card-title>
    </v-card>
    <v-row>
      <v-col cols="6">
        <v-card>
          <v-card-title>الالوان</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="6">
                <v-card>
                  <v-card-title> اللون الاساسي </v-card-title>
                  <v-card-text>
                    <v-color-picker v-model="colors.primary"></v-color-picker>
                  </v-card-text> </v-card
              ></v-col>
              <v-col cols="6">
                <v-card>
                  <v-card-title> اللون الثانوي </v-card-title>
                  <v-card-text>
                    <v-color-picker v-model="colors.secondary"></v-color-picker>
                  </v-card-text>
                </v-card>
              </v-col>
              <v-col cols="12">
                <div class="d-flex align-center">
                  <h4>لون الخلفية الخلفية</h4>
                  <v-radio-group row class="ml-5" v-model="backType">
                    <v-radio label="تدرج لوني" value="gradient"></v-radio>
                    <v-radio label="اساسي" value="onlyPrimary"></v-radio>
                    <v-radio
                      label="ثانوي"
                      value="onlySecondary"
                    ></v-radio>
                    <v-radio
                      label="مع النمط"
                      value="d"
                    ></v-radio>
                  </v-radio-group>
                </div>
              </v-col>
              <v-col class="px-5" cols="12">
                <v-divider></v-divider>
                <div class="d-flex justify-lg-space-around align-center">
                  <h4>App bar</h4>
                  <v-radio-group row class="ml-5" v-model="appbar">
                    <v-radio label="لايت" value="light"></v-radio>
                    <v-radio label="معتم" value="dark"></v-radio>
                  </v-radio-group>
                  <v-divider vertical></v-divider>
                  <div class="d-flex align-center ml-5">
                    <h4>Drawer | Sidebar</h4>
                    <v-radio-group row class="ml-5" v-model="drawer">
                      <v-radio label="لايت" value="light"></v-radio>
                      <v-radio label="معتم" value="dark"></v-radio>
                    </v-radio-group>
                  </div>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>
            <v-checkbox v-model="backType" value="image"></v-checkbox>
            وضع الخلفية كـ صورة
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-file-input
                  outlined
                  label="رفع صورة"
                  v-model="image"
                ></v-file-input>
              </v-col>
              <v-col cols="12">
                <v-sheet color="white" elevation="1" height="250">
                  <v-img
                    cover
                    height="250"
                    :src="$store.state.style.image"
                  ></v-img>
                </v-sheet>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      colors: this.$store.state.style.colors,
      background: this.$store.state.style.isImage,
      backType: this.$store.state.style.backType,
      appbar: this.$store.state.style.appbar,
      drawer: this.$store.state.style.drawer,
      image: null,
    };
  },
  watch: {
    colors: {
      handler: function (val) {
        //   console.log(val);
        this.$store.commit("style/setColor", {
          key: "colors",
          value: val,
        });
      },
      deep: true,
    },
    backType() {
      this.$store.commit("style/setColor", {
        key: "backType",
        value: this.backType,
      });
    },
    appbar() {
      this.$store.commit("style/setColor", {
        key: "appbar",
        value: this.appbar,
      });
    },
    drawer() {
      this.$store.commit("style/setColor", {
        key: "drawer",
        value: this.drawer,
      });
    },
    image() {
      var reader = new FileReader();
      reader.readAsDataURL(this.image);
      reader.onload = () => {
        this.$store.commit("style/setColor", {
          key: "image",
          value: reader.result,
        });
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    },
  },
};
</script>