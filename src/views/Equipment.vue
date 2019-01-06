<template>
  <div>
    <router-link
      to="/"
      class="mb-4"
    >Home</router-link>
    <h1
      class="mb-4"
    >Kitchen equipment</h1>
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
            class="px-3 py-1"
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
                    <span class="ml-2 underline">Product page</span>
                  </a>
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
import products from '@/data/equipment'

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
      products
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

          // If it's a priceRange search, make exact search & stop here
          if (this.search.match(/^\$+$/g)) {
            return included && product.priceRange === this.search
          }

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
    max-width: 100%;
    transition: none !important;
  }

  a {
    text-decoration: none;
  }

  .underline {
    text-decoration: underline;
  }

  // Disable masonry layout on mobile
  @media only screen and (max-width: 770px) {
    .products-grid {
      display: block;
    }

    .item {
      min-width: 0;
      margin-left: 0;
      margin-right: 0;
      transform: none !important;
      position: static !important;
    }
  }
</style>
