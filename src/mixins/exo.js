export default {
  props: {
    exercice: {
      required: true,
      type: Object
    },
    showCorrection: {
      required: true,
      type: Boolean
    },
    submit: {
      required: true,
      type: Function
    }
  },
  data() {
    return {
      answer: null,
    }
  },
  methods: {
    isValid() {
      return false
    }
  },
}
