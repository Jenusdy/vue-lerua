<template>
  <div>
    <v-tabs
      v-model="tab"
      align-with-title
      fixed-tabs
      background-color="indigo"
      dark
    >
      <v-tabs-slider color="indigo"></v-tabs-slider>
      <v-tab v-for="item in items" :key="item">
        {{ item | tabTitle }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item">
        <v-card flat>
          <v-data-table
            :headers="headers"
            :items="dataSource"
            :items-per-page="5"
            class="elevation-1"
          >
            <template v-slot:item.aksi="{ item }">
              <v-chip dark>
                {{ item.no }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
export default {
  filters: {
    tabTitle: function (string) {
      return string.split("-").join(" ");
    },
  },
  computed: {
    dataSource() {
      const data = [];
      for (let index = 0; index < 100; index++) {
        data.push({
          no: index + 1,
          suratTugas: `BPS/003/2021-${index + 1}`,
          workflow: "Ketua Tim",
          laporan: "Laporan",
          satker: "Satker",
          tahun: 2021,
        });
      }
      return data;
    },
  },
  data() {
    return {
      tab: null,
      items: ["perlu-persetujuan", "naskah-penugasan-wilayah", "semua-berkas"],
      headers: [
        {
          text: "No",
          align: "start",
          value: "no",
        },
        { text: "Surat Tugas", value: "suratTugas" },
        { text: "Workflow", value: "workflow" },
        { text: "Laporan", value: "laporan" },
        { text: "Satker", value: "satker" },
        { text: "Tahun", value: "tahun" },
        { text: "Aksi", value: "aksi" },
      ],
    };
  },
};
</script>