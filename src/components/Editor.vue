<template>
    <section>
        <h2>Editor</h2>
        <div class="md-layout">
            <div class="md-layout-item">
                <md-card>
                    <md-card-header>
                        <md-card-header-text>
                        <div class="md-title">Editor</div>
                        </md-card-header-text>
                    </md-card-header>

                    <md-field>
                        <md-textarea @input="onInputMarkdown($event)"></md-textarea>
                    </md-field>
                    <md-card-actions>
                        <md-button>Preview</md-button>
                    </md-card-actions>
                </md-card>
            </div>
            <div class="md-layout-item">
                <md-card>
                    <md-card-header>
                        <md-card-header-text>
                        <div class="md-title">Preview</div>
                        </md-card-header-text>
                    </md-card-header>
                    {{markdown}}
                </md-card>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  data () {
    return {
      markdown: null
    }
  },
  methods: {
    onInputMarkdown (inputValue) {
      this.markdown = inputValue
    }
  }
}
</script>
