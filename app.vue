<template class="bg-primary">
  <v-container class="d-flex justify-center mt-12">
    <v-card width="540" height="720" color="transparent" flat>
      <div class="calc__theme mb-6">
        <p class="text-h5 font-weight-bold text-white">calc</p>
      </div>

      <div class="calc__screen d-flex justify-end px-8 py-10 mb-6 rounded-lg">
        <h1 class="text-h2 font-weight-bold text-white">5000</h1>
      </div>

      <div class="calc__keypad pa-8 rounded-lg">
        <div class="d-flex justify-space-between">
          <CalcBtnNumber>7</CalcBtnNumber>
          <CalcBtnNumber>8</CalcBtnNumber>
          <CalcBtnNumber>9</CalcBtnNumber>
          <CalcBtnNumber
            bg-color="hsl(225, 21%, 49%)"
            txt-color="white"
            class="text-h5"
          >
            DEL
          </CalcBtnNumber>
        </div>
        <div class="d-flex justify-space-between">
          <CalcBtnNumber>4</CalcBtnNumber>
          <CalcBtnNumber>5</CalcBtnNumber>
          <CalcBtnNumber>6</CalcBtnNumber>
          <CalcBtnNumber>+</CalcBtnNumber>
        </div>
        <div class="d-flex justify-space-between">
          <CalcBtnNumber>1</CalcBtnNumber>
          <CalcBtnNumber>2</CalcBtnNumber>
          <CalcBtnNumber>3</CalcBtnNumber>
          <CalcBtnNumber>-</CalcBtnNumber>
        </div>
        <div class="d-flex justify-space-between">
          <CalcBtnNumber>.</CalcBtnNumber>
          <CalcBtnNumber>0</CalcBtnNumber>
          <CalcBtnNumber>/</CalcBtnNumber>
          <CalcBtnNumber>x</CalcBtnNumber>
        </div>
        <div class="d-flex justify-space-between">
          <v-btn
            width="225"
            height="64"
            class="text-h5 font-weight-bold text-white"
            color="hsl(225, 21%, 49%)"
          >
            RESET
          </v-btn>
          <v-btn
            width="225"
            height="64"
            class="text-h5 font-weight-bold text-white"
            color="hsl(6, 63%, 50%)"
          >
            =
          </v-btn>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<style lang="scss">
body {
  background-color: #3b4663;
}

// .calc__theme {
//   background-color: transparent;
// }

.calc__screen {
  background-color: #182034;
}

.calc__keypad {
  background-color: #232c43;
}
/*
main bg   #3a4764
nut bam toggle bg #232c43
man hinh so screen #182034

*/
</style>
