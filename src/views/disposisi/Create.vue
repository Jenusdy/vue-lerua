<template>
  <div id="disposisi-create">
    <v-form>
      <v-card>
        <v-container>
          <v-card-title> Disposisi</v-card-title>
          <v-row>
            <v-col cols="2" md="2">
              <v-subheader>Nomor Surat Penugasan</v-subheader>
            </v-col>
            <v-col cols="4" md="4">
              <v-text-field
                required
                label="No"
                v-model="no_surat"
                :error-messages="nomorSuratError"
              ></v-text-field>
            </v-col>
            <v-col cols="2" md="2">
              <v-subheader>Tanggal Penugasan</v-subheader>
            </v-col>
            <v-col cols="4" md="4">
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="tanggal"
                    label="Format (YYYY-MM-DD)"
                    prepend-icon="mdi-calendar"
                    :error-messages="tanggalError"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    @input="$v.tanggal.$touch()"
                    @click:clear="date = null"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="tanggal" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="menu = false">
                    Cancel
                  </v-btn>
                  <v-btn text color="primary" @click="$refs.menu.save(date)">
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="2" md="2">
              <v-subheader>Jenis Laporan</v-subheader>
            </v-col>
            <v-col cols="4" md="4">
              <v-autocomplete
                dense
                filled
                v-model="jenis_laporan"
                label="Jenis Laporan"
                :search-input.sync="documentCategorySearch"
                :items="documentTypesOptions"
                :error-messages="jenisLaporanError"
                item-text="label"
                item-value="value"
                placeholder="Start typing to search"
              ></v-autocomplete>
            </v-col>
            <v-col cols="2" md="2">
              <v-subheader>Upload File</v-subheader>
            </v-col>
            <v-col cols="4" md="4">
              <v-file-input
                show-size
                label="File Input"
                :error-messages="fileError"
                v-model="file"
              ></v-file-input>
            </v-col>
            <v-col cols="2" md="2">
              <v-subheader>Satker</v-subheader>
            </v-col>
            <v-col cols="4" md="4">
              <v-autocomplete
                dense
                filled
                label="Satuan Kerja"
                v-model="satker"
                :search-input.sync="satkerSearch"
                :items="satkerTypesOptions"
                :error-messages="satkerError"
                item-text="label"
                item-value="value"
                placeholder="Ketik untuk mencari satker"
              ></v-autocomplete>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12">
              <center>
                <v-btn class="mr-4" depressed color="primary" type="submit" @click="submit">
                  Simpan, Gan
                </v-btn>
                <v-btn depressed color="error" type="submit" @click="clear">
                  Clear
                </v-btn>
              </center>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-form>
  </div>
</template>

<script>
// import { save } from "../../services/document";
import { getAutoCompleteDocumentCategory } from "../../services/documentCategory";
import { getAutoCompleteSatker } from "../../services/satker";
import { VueOfflineMixin } from "vue-offline";
import { validationMixin } from "vuelidate";
import { required, maxLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin,VueOfflineMixin],
  validations: {
    document_id: { required },
    no_surat: { required, maxLength: maxLength(10) },
    tanggal: { required },
    satker: { required },
    jenis_laporan: { required },
    file: { required },
  },
  data: () => ({
    documentTypes: [],
    documentCategorySearch: null,
    satkerTypes: [],
    satkerSearch: null,
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: null,
    document_id: null,
    no_surat: null,
    tanggal: null,
    satker: null,
    jenis_laporan: null,
    file: null,
  }),
  computed: {
    documentTypesOptions() {
      return this.documentTypes;
    },
    satkerTypesOptions() {
      return this.satkerTypes;
    },
    tanggalError() {
      const errors = [];
      if (!this.$v.tanggal.$dirty) return errors;
      !this.$v.tanggal.required && errors.push("Tanggal harus diisi!");
      return errors;
    },
    nomorSuratError() {
      const errors = [];
      if (!this.$v.no_surat.$dirty) return errors;
      !this.$v.no_surat.required && errors.push("Nomor surat harus diisi");
      return errors;
    },
    jenisLaporanError() {
      const errors = [];
      if (!this.$v.jenis_laporan.$dirty) return errors;
      !this.$v.jenis_laporan.required && errors.push("Jenis Laporan harus diisi");
      return errors;
    },
    satkerError() {
      const errors = [];
      if (!this.$v.satker.$dirty) return errors;
      !this.$v.satker.required && errors.push("Satker harus diisi");
      return errors;
    },
    fileError() {
      const errors = [];
      if (!this.$v.file.$dirty) return errors;
      !this.$v.file.required && errors.push("File harus diisi");
      return errors;
    },
  },
  watch: {
    async documentCategorySearch(val) {
      await getAutoCompleteDocumentCategory(val)
        .then((res) => {
          this.documentTypes = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async satkerSearch(val) {
      await getAutoCompleteSatker(val)
        .then((res) => {
          this.satkerTypes = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  methods: {
    submit() {
      if(this.isOnline){
        this.$v.$touch();
      }else{
        alert("You are offline");
      }
    },
    clear() {
      this.$v.$reset();
      this.no_surat = '';
      this.tanggal = '';
      this.jenis_laporan = '';
      this.file = null;
      this.satker = '';
    },
  },
};
</script>