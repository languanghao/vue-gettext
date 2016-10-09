# vue-gettext
Add localization to vue template

# Usage

    import VueGettext from 'vue-gettext';
    
    // register a global gettext method for translate.
    window.gettext = (input)=> localizationDict[input];
    
    Vue.use(VueGettext);
   
# In component.vue

    <template>
      <div>{{ _('Hello world') }}</div>
    </template>
