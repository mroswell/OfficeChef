<template>
  <div>
    <h1
      class="mb-4"
    >Kitchen Equipment</h1>
    <!-- The component starts here -->
    <v-text-field
      v-model="search"
      label="Search in equipment"
      class="mb-4"
    />

    <v-layout
      v-masonry
      :gutter="100"
      fit-width="true"
      horizontal-order="true"
      transition-duration="0.3s"
      class="products-grid"
    >
      <!-- v-for category, if it as products -->
      <v-card
        v-masonry-tile
        v-for="(category, index) in items"
        :key="index"
        class="item"
      >
        <template
          v-if="category.products.length"
        >
          <!-- Category name -->
          <v-card-title>
            <h2>{{ category.name }}</h2>
          </v-card-title>

          <v-divider />

          <ul
            class="px-3 py-"
          >
            <li
              v-for="(product, index) in category.products"
              :key="index"
              class="my-2"
            >
              <v-layout
                class="product-item"
                align-center
                wrap
              >
                <v-checkbox
                  :label="product.name"
                  hide-details
                  class="mt-0"
                />

                <v-spacer />

                <div>
                  <!-- Product link with aria-label for accessibility (unique for each link) -->
                  <a
                    v-if="product.link"
                    :href="product.link"
                    :araia-label="`Product page for ${product.name}`"
                    class="mx-2"
                  >
                    <v-icon small>fas fa-link</v-icon>
                    <!-- <span class="ml-2 underline">Product page</span> -->
                  </a>
                  <span class="price-range">{{ product.priceRange }}</span>
                </div>
              </v-layout>
            </li>
          </ul>
        </template>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Equipment',
  data () {
    return {
      search: '',
      categories: {
        0: 'Appliances',
        1: 'Organizing and Storage',
        2: 'Serveware',
        3: 'Cleanup',
        4: 'Tools',
        5: 'Utensils',
        6: 'Drinkware',
        7: 'Dinnerware'
      },
      products: [
        {
          name: 'Air fryer',
          priceRange: '$$$',
          link: 'http://example.com/',
          notes: undefined,
          images: undefined,
          categories: [0]
        },
        {
          name: 'Microwave',
          priceRange: '$$$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [0]
        },
        {
          name: 'Waffle iron',
          priceRange: '$$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [0]
        },
        {
          name: 'Electric steamer',
          priceRange: '$$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [0]
        },
        {
          name: 'Dishwasher',
          priceRange: '$$$$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [0, 3]
        },
        {
          name: 'Refrigerator',
          priceRange: '$$$$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [0]
        },
        {
          name: 'Instant Pot',
          priceRange: '$$$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [0]
        },
        {
          name: 'Mini-blender',
          priceRange: '$$$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [0]
        },
        {
          name: 'Sink',
          priceRange: '$$$$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [0]
        },
        {
          name: 'Dish rack',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [1]
        },
        {
          name: 'Utility cart',
          priceRange: '$$$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [1]
        },
        {
          name: 'Bowls',
          priceRange: '$$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [2]
        },
        {
          name: 'Big salad bowl',
          priceRange: '$$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [2]
        },
        {
          name: 'Pitcher',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [2]
        },
        {
          name: 'Beverage Dispenser',
          priceRange: '$$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [2]
        },
        {
          name: 'Descaling solution',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [3]
        },
        {
          name: 'Trash bags',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [3]
        },
        {
          name: 'Trash can',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [3]
        },
        {
          name: 'Sponge',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [3]
        },
        {
          name: 'Bottle brush',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [3]
        },
        {
          name: 'Soap',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [3]
        },
        {
          name: 'Dish Cloth',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [3]
        },
        {
          name: 'Measuring cups',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [4]
        },
        {
          name: 'Potato express',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [4]
        },
        {
          name: 'Ladle',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [4]
        },
        {
          name: 'Measuring spoons',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [4]
        },
        {
          name: 'Cutting board',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [4]
        },
        {
          name: 'Can Opener',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [4]
        },
        {
          name: 'Slotted Spoon',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [4]
        },
        {
          name: 'Vegetable Peeler',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [4]
        },
        {
          name: 'Instant Pot Mitt',
          priceRange: '$$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [4]
        },
        {
          name: 'Ceramic Knife',
          priceRange: '$$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [4]
        },
        {
          name: 'Chef\'s knife',
          priceRange: '$$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [4]
        },
        {
          name: 'Paring knife',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [4]
        },
        {
          name: 'Serrated knife (for tomatoes)',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [4]
        },
        {
          name: 'Apple/Citrus Wedger',
          priceRange: '$$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [4]
        },
        {
          name: 'Forks, Knives Spoons',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [5]
        },
        {
          name: 'Cups',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [6]
        },
        {
          name: 'Plates',
          priceRange: '$',
          link: undefined,
          notes: undefined,
          images: undefined,
          categories: [7]
        }
      ]
    }
  },
  computed: {
    items () {
      const items = []

      // For each category
      Object.keys(this.categories).forEach((categoryId) => {
        // Create an object with the category name and products
        const obj = {
          name: this.categories[categoryId],
          products: []
        }

        // Filter products to match the ones with the current category
        const products = this.products.filter((product) => {
          // Use array.includes (but parse categoryId to integer)
          const included = product.categories.includes(parseInt(categoryId, 10))
          const searched = product.name.match(new RegExp(this.search, 'i'))

          return included && !!searched
        }) || {}

        // Set products and push the object to items
        obj.products = products
        items.push(obj)
      })

      return items
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    width: 350px;
    margin: 10px;
    transition: none !important;
  }

  a {
    text-decoration: none;
  }

  .underline {
    text-decoration: underline;
  }
</style>

<style lang="scss">
// Default styles and helper classes
* {
  $transparent: rgba(0, 0, 0, 0);

  margin: 0;
  padding: 0;
  border: 0;
  scroll-behavior: smooth;
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  word-break: break-word;
  hyphens: auto;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: $transparent;
}

[v-cloak] {
  display: none;
}

html,
body {
  font-size: 100%;
}

body {
  min-height: 100vh;
  line-height: 1.25;
}

input {
  appearance: none;
}

ul {
  list-style: none;
}

a,
input,
button {
  transition: .25s;
}

.sr-only {
  position: absolute !important;
  top: 0;
  left: -999px;
  width: 1px !important;
  height: 1px !important;
  white-space: nowrap;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
}

.required label::after {
  top: -2px;
  content: '*';
  position: relative;
}

.v-content__wrap {
  display: flex;
  flex-direction: column;
}

.v-ripple__container {
  &,
  & * {
    max-width: none;
  }
}
.theme--light.v-label {
    color: rgba(0,0,0,.90);
}
</style>
