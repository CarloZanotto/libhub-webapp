<template>
  <v-card>
    <v-card-title>
      <span class="headline">Retrieve Book Info</span>
    </v-card-title>
    <v-card-text>
      <v-form ref="form" v-model="valid" lazy-validation style="height: 100%">
        <v-container fill-height>
          <v-row align="center" xs>
            <v-col>
              <v-file-input
                counter
                :show-size="true"
                label="Image of the Book's barcode"
                id="BarcodeImage"
                required
              >
              </v-file-input>
            </v-col>
            <v-col>
              <v-btn @click="get" class="mr-4" color="#ff1744"
                >Process Image</v-btn
              >
            </v-col>
          </v-row>

          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="ISBN"
                id="ISBN"
                :rules="ISBN_Rules"
                label="ISBN"
                required
              ></v-text-field>
            </v-col>
            <v-col align="left">
              <v-btn
                color="#ff1744"
                :loading="loading"
                class="mr-4"
                @click="retrieveInfo"
              >
                Retrieve info
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-alert
              dense
              outlined
              type="error"
              class="my-1"
              v-if="errormessage !== ''"
            >
              <strong>{{ errormessage }}</strong>
            </v-alert>
          </v-row>

          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="title"
                id="title"
                placeholder="title"
                label="title"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="authors"
                id="authors"
                placeholder="authors"
                label="authors"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="publisher"
                id="publisher"
                placeholder="publisher"
                label="publisher"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="publicationYear"
                id="publicationYear"
                placeholder="publicationYear"
                label="publicationYear"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="language"
                id="language"
                placeholder="language"
                label="language"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-text-field
                v-model="edition"
                id="edition"
                placeholder="edition"
                label="edition"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-select
                v-model="ubication"
                id="ubication"
                :items="ubications"
                label="Ubication"
              ></v-select>
            </v-col>
          </v-row>
          <v-row align="center">
            <v-col>
              <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
              >
                Insert
              </v-btn>
              <v-btn color="error" class="mr-4" @click="reset">
                Reset Form
              </v-btn>
            </v-col>
          </v-row>
          <v-row> </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { postLibrariesLidBooks } from "@/services/api/libraries/books/index.js";
import { getUbications } from "@/services/api/libraries/schema/ubications/index.js";
import {
  retrieveBookInfo,
  getISBN_from_image,
} from "@/services/api/isbn/index.js";

const ISBN_regex = /^(?:ISBN(?:-1[03])?:? )?(?=[0-9X]{10}$|(?=(?:[0-9]+[- ]){3})[- 0-9X]{13}$|97[89][0-9]{10}$|(?=(?:[0-9]+[- ]){4})[- 0-9]{17}$)(?:97[89][- ]?)?[0-9]{1,5}[- ]?[0-9]+[- ]?[0-9]+[- ]?[0-9X]$/;

export default {
  name: "BookInsertForm",
  props: ["lid"],
  data() {
    return {
      valid: true,
      loading: false,
      another_loading: false,
      errormessage: "",
      ubications: [],
      ISBN: "",
      title: "",
      edition: "",
      publisher: "",
      publicationYear: "",
      language: "",
      condition: "",
      ubication: "",
      labels: [],
      authors: [],
      notes: "",
      ISBN_Rules: [(value) => ISBN_regex.test(value) || "wrong input format"],
    };
  },
  methods: {
    async validate() {
      this.$refs.form.validate();
      this.$store.commit("hide_InsertBookForm_Dialog");
      if (!this.another_loading) {
        try {
          this.another_loading = true;
          const user = this.$store.getters.getUser;
          const id = await postLibrariesLidBooks(
            user._id,
            this.$route.params.lid,
            this.createPostBook,
            localStorage.getItem("accessToken")
          );
          this.$store.commit("addBookToBooks", this.createBook(id));
        } catch (error) {
          this.$store.commit("setErrorMessage", error);
          this.$router.push("/error_page");
        } finally {
          this.another_loading = false;
        }
      }
    },
    createBook(id) {
      return {
        _id: id,
        LibraryId: this.$route.params.lid,
        pictures: [],
        ...this.createPostBook,
      };
    },
    reset() {
      this.$refs.form.reset();
    },
    async retrieveInfo() {
      this.$refs.form.validate();
      if (this.$refs.form.$el["ISBN"].value) {
        this.loading = true;
        try {
          const res = await retrieveBookInfo(this.$refs.form.$el["ISBN"].value);

          this.title = res["title"];
          this.authors = res["authors"];
          this.language = res["language"];
          this.edition = res["edition"];
          this.publisher = res["publisher"];
          this.publicationYear = res["publicationYear"];

          this.errormessage = "";
        } catch (error) {
          this.errormessage = "Nonexistent ISBN";
        } finally {
          this.loading = false;
        }
      }
    },
    async get() {
      if (
        this.$refs.form.$el["BarcodeImage"].files[0] &&
        this.$refs.form.$el["BarcodeImage"].files[0].type.startsWith("image")
      ) {
        try {
          this.ISBN = await getISBN_from_image(
            window.URL.createObjectURL(
              this.$refs.form.$el["BarcodeImage"].files[0]
            )
          );
        } catch (error) {
          alert("ISBN not detected");
        }
      } else {
        alert("file must be an image");
      }
    },
  },
  computed: {
    createPostBook() {
      return {
        isbn: this.ISBN || null,
        title: this.title || null,
        authors: this.authors,
        publisher: this.publisher || null,
        publicationYear: this.publicationYear || null,
        edition: this.edition || null,
        condition: this.condition || null,
        ubication: this.ubication || null,
        labels: this.labels,
        notes: this.notes || null,
      };
    },
  },
  async mounted() {
    const user = this.$store.getters.getUser;
    this.ubications = await getUbications(
      user._id,
      this.$route.params.lid,
      localStorage.getItem("accessToken")
    );
  },
};
</script>
