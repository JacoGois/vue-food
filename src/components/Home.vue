<template>
  <div>
    <div class="flex flex-col md:grid grid-cols-[70%_30%] gap-4 w-full">
      <div class=" flex flex-col gap-6 w-full mt-7">
        <h2 class="text-4xl md:text-6xl font-bold">Discovery your food now</h2>
        <p>
          Let your taste buds wander and savor a world of flavors.
          It's time to uncover your next unforgettable meal.
          <span class="hidden sm:flex">
            Embark on a culinary journey where every bite tells a story and every flavor is a chapter waiting
            to be explored. From the tantalizing spices of the East to the savory richness of European classics.
          </span>
        </p>

        <div class="w-full flex md:hidden items-center py-3">
          <img src="@/assets/hamburguer.png">
        </div>
        
        <div class=" mt-4 flex items-center gap-10">
          <div class="flex flex-col">
            <span class="text-gray-600 text-xs line-through italic ">$10.00</span>
            <p class="font-semibold text-3xl">$8.00</p>
          </div>
          <Button primary buttonText="Buy Now" />
        </div>
      </div>

      <div class="hidden w-full md:flex items-center py-3">
        <img src="@/assets/hamburguer.png">
      </div>
    </div>
    <div class="w-full">
      <div class="flex items-center gap-4 py-7">
        <Avatar />
        <div class="font-bold">
          <p class="text-lg">Chef Jacquin</p>
          <p class="tex-xs font-semibold">Master Chef</p>
        </div>
      </div>
      <div class="hidden md:flex rounded-l-[2.2rem] px-12 h-32 bg-background absolute bottom-8 right-0  items-center text-white whitespace-nowrap gap-10">
        <p class="flex flex-col w-full">
          <span class="text-sm">Calories</span>
          <span class="font-semibold">226 kcal</span>
        </p>
        <p class="flex flex-col w-full">
          <span class="text-sm">Fat</span>
          <span class="font-semibold">12.4 grams</span>
        </p>
        <p class="flex flex-col w-full">
          <span class="text-sm">Protein</span>
          <span class="font-semibold">11,3 gram</span>
        </p>
      </div>

    </div>
  </div>
</template>

<script>
import Button from './Button.vue'
import Avatar from './Avatar.vue'

  export default {
    name: 'Home',
    components: {
      Button,
      Avatar
    }
  }

</script>