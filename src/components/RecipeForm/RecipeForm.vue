<template>
  <div class="recipe-form">
    <p>
      Introduce below the quantity for each ingredient you have and we will
      calculate how many Pasta Carbonara meals you can cook!
    </p>
    <form class="recipe-form__form">
      <label for="recipe-eggs">Eggs</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="eggs"
        id="recipe-eggs"
        value="0"
        v-model="recipeForm.eggs"
      />
      <label for="recipe-pasta">Pasta</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="pasta"
        id="recipe-pasta"
        value="0"
        v-model="recipeForm.pasta"
      />
      <label for="recipe-butter">Butter</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="butter"
        id="recipe-butter"
        value="0"
        v-model="recipeForm.butter"
      />
      <label for="recipe-milk">Milk</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="milk"
        id="recipe-milk"
        value="0"
        v-model="recipeForm.milk"
      />
      <label for="recipe-oil">Oil</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="oil"
        id="recipe-oil"
        value="0"
        v-model="recipeForm.oil"
      />
      <label for="recipe-bacon">Bacon</label>
      <input
        class="recipe-form__form-input"
        type="number"
        name="bacon"
        id="recipe-bacon"
        value="0"
        v-model="recipeForm.bacon"
      />
      <button type="submit" @click="calculate">Calculate</button>
    </form>
  </div>
</template>
<style lang="scss">
@import './RecipeForm.scss';
</style>
<script>
export default {
  name: 'RecipeForm',
  data() {
    return {
      meals: 0,
      recipeForm: {
        bacon: 0,
        butter: 0,
        eggs: 0,
        milk: 0,
        oil: 0,
        pasta: 0,
      },
    };
  },
  props: {
    ingredients: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    calculate(event) {
      event.preventDefault();
      
      const keys = Object.keys(this.ingredients);
      const occurences = keys.reduce((acc, key) => {
        const numOfTimes = parseInt(this.recipeForm[key] / this.ingredients[key], 10);
        return { ...acc, [key]: numOfTimes }; 
      }, {})

      // The total number of meals you can is equal to the item with the least number of occurence
      const totalNumOfMeals = Math.min(...Object.values(occurences));
      alert(`You can make ${totalNumOfMeals} Carbonara meals`);
      this.$router.push({ name: 'Formula', params: this.ingredients })
    },
  },
};
</script>
