export const CmsData = {
  name: 'CmsData',
  props: {
    identifier: {
      required: true,
      type: String,
      default: ''
    },
    type: {
      required: true,
      type: String,
      default: ''
    },
    sync: {
      type: Boolean,
      default: false,
      required: false
    },
  },
  computed: {
    data () : {} {
      return this.$store.getters[`magentocms/get${this.type}`](this.identifier)
    }
  },
  methods: {
    setData () {
      this.$store.dispatch(`magentocms/get${this.type}`, { dataIdentifier: this.identifier })
    }
  }
}

