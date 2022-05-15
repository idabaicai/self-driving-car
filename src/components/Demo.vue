<template>
  <div class="canvas">
    <canvas id="car-canvas" ref="carCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Car from '@/utils/car';
const carCanvas = ref<HTMLCanvasElement>(null);
onMounted(() => {
  // carCanvas.value =
  console.log(carCanvas);
  const ctx = carCanvas.value.getContext('2d');
  console.log(Car);

  const car = new Car(100, 200, 10, 20);
});
</script>

<style lang="scss" scoped>
.canvas {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: teal;
  #car-canvas {
    width: 200px;
    height: calc(100% - 2em);
    background-color: #888181;
  }
}
</style>
