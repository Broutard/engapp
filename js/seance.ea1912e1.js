(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["seance"],{"2c64":function(e,t,i){},"3d86":function(e,t,i){},"5e89":function(e,t,i){var s=i("861d"),n=Math.floor;e.exports=function(e){return!s(e)&&isFinite(e)&&n(e)===e}},"899e":function(e,t,i){e.exports=i.p+"media/error.4678c0c1.mp3"},"8ba4":function(e,t,i){var s=i("23e7"),n=i("5e89");s({target:"Number",stat:!0},{isInteger:n})},"918c":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"text-h6 text-md-h5 text-truncate"},[e._v(e._s(e.session.title))]),i("v-progress-linear",{staticClass:"mb-5",attrs:{value:e.progress}}),i("div",[i(e.session.exercices[e.currentExoIdx].type,{tag:"component",attrs:{exercice:e.session.exercices[e.currentExoIdx]}})],1)],1)},n=[],r=i("5530"),o=i("2f62"),a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"exo qcm"},[i("v-form",[i("v-radio-group",{scopedSlots:e._u([{key:"label",fn:function(){return[i("div",{staticClass:"text-body-1 font-weight-bold"},[e._v(e._s(e.exercice.question))])]},proxy:!0}]),model:{value:e.answers[e.exercice.id],callback:function(t){e.$set(e.answers,e.exercice.id,t)},expression:"answers[exercice.id]"}},e._l(e.exercice.answers,(function(t,s){return i("v-radio",{key:s,attrs:{value:s,disabled:e.showCorrection},scopedSlots:e._u([{key:"label",fn:function(){return[i("div",{class:e.getAnswerStyle(s)},[e._v(e._s(t.label))])]},proxy:!0}],null,!0)})})),1),i("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:e.submit}},[e._v(" "+e._s(this.showCorrection?"Exercice suivant":"Valider")+" ")])],1)],1)},c=[],u=(i("a9e3"),i("8ba4"),{props:{exercice:{required:!0}},data:function(){return{answers:[],showCorrection:!1}},methods:Object(r["a"])({submit:function(e){this.showCorrection?(this.showCorrection=!1,this.incCurrentExo()):(this.showCorrection=!0,this.playSound())},reset:function(e){this.answers=[],this.showCorrection=!1},isCorrect:function(){var e=this.answers[this.exercice.id],t=this.exercice.answers[e];return!(!Number.isInteger(e)||!t.correct)},playSound:function(){this.isCorrect()?new Audio(i("9de3")).play():new Audio(i("899e")).play()},getAnswerStyle:function(e){if(this.showCorrection){var t=this.exercice.answers[e],i=this.answers[this.exercice.id];if(t.correct)return"font-weight-bold green--text";if(Number.isInteger(i)&&i==e&&!0!==this.exercice.answers[i].correct)return"font-weight-bold red--text"}return"font-weight-normal"}},Object(o["c"])(["incCurrentExo"]))}),l=u,d=i("2877"),h=i("6544"),p=i.n(h),f=i("8336"),m=i("4bd4"),v=(i("b0c0"),i("2c64"),i("ba87")),b=i("9d26"),x=i("c37a"),g=i("7e2b"),C=i("a9ad"),w=i("4e82"),y=i("5607"),S=i("2b0e"),V=S["a"].extend({name:"rippleable",directives:{ripple:y["a"]},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),_=i("7560"),O=(i("4de4"),i("45fc"),i("d3b7"),i("25f0"),i("80d2")),I=S["a"].extend({name:"comparable",props:{valueComparator:{type:Function,default:O["h"]}}}),j=i("58df");function k(e){e.preventDefault()}var E=Object(j["a"])(x["a"],V,I).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,i=this.internalValue;return this.isMultiple?!!Array.isArray(i)&&i.some((function(i){return e.valueComparator(i,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,i):Boolean(i):this.valueComparator(i,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var e=x["a"].options.methods.genLabel.call(this);return e?(e.data.on={click:k},e):e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:k},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,i=this.internalValue;if(this.isMultiple){Array.isArray(i)||(i=[]);var s=i.length;i=i.filter((function(i){return!e.valueComparator(i,t)})),i.length===s&&i.push(t)}else i=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(i,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(i,t)?null:t:!i;this.validate(!0,i),this.internalValue=i,this.hasColor=i}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}}),$=i("d9f7"),A=Object(j["a"])(g["a"],C["a"],V,Object(w["a"])("radioGroup"),_["a"]),F=A.extend().extend({name:"v-radio",inheritAttrs:!1,props:{disabled:Boolean,id:String,label:String,name:String,offIcon:{type:String,default:"$radioOff"},onIcon:{type:String,default:"$radioOn"},readonly:Boolean,value:{default:null}},data:function(){return{isFocused:!1}},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({"v-radio--is-disabled":this.isDisabled,"v-radio--is-focused":this.isFocused},this.themeClasses),this.groupClasses)},computedColor:function(){return E.options.computed.computedColor.call(this)},computedIcon:function(){return this.isActive?this.onIcon:this.offIcon},computedId:function(){return x["a"].options.computed.computedId.call(this)},hasLabel:x["a"].options.computed.hasLabel,hasState:function(){return(this.radioGroup||{}).hasState},isDisabled:function(){return this.disabled||!!this.radioGroup&&this.radioGroup.isDisabled},isReadonly:function(){return this.readonly||!!this.radioGroup&&this.radioGroup.isReadonly},computedName:function(){return this.name||!this.radioGroup?this.name:this.radioGroup.name||"radio-".concat(this.radioGroup._uid)},rippleState:function(){return E.options.computed.rippleState.call(this)},validationState:function(){return(this.radioGroup||{}).validationState||this.computedColor}},methods:{genInput:function(e){return E.options.methods.genInput.call(this,"radio",e)},genLabel:function(){return this.hasLabel?this.$createElement(v["a"],{on:{click:k},attrs:{for:this.computedId},props:{color:this.validationState,focused:this.hasState}},Object(O["l"])(this,"label")||this.label):null},genRadio:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(b["a"],this.setTextColor(this.validationState,{props:{dense:this.radioGroup&&this.radioGroup.dense}}),this.computedIcon),this.genInput(Object(r["a"])({name:this.computedName,value:this.value},this.attrs$)),this.genRipple(this.setTextColor(this.rippleState))])},onFocus:function(e){this.isFocused=!0,this.$emit("focus",e)},onBlur:function(e){this.isFocused=!1,this.$emit("blur",e)},onChange:function(){this.isDisabled||this.isReadonly||this.isActive||this.toggle()},onKeydown:function(){}},render:function(e){var t={staticClass:"v-radio",class:this.classes,on:Object($["b"])({click:this.onChange},this.listeners$)};return e("div",t,[this.genRadio(),this.genLabel()])}}),G=(i("ec29"),i("3d86"),i("604c")),B=Object(j["a"])(I,G["a"],x["a"]),q=B.extend({name:"v-radio-group",provide:function(){return{radioGroup:this}},props:{column:{type:Boolean,default:!0},height:{type:[Number,String],default:"auto"},name:String,row:Boolean,value:null},computed:{classes:function(){return Object(r["a"])(Object(r["a"])({},x["a"].options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--radio-group":!0,"v-input--radio-group--column":this.column&&!this.row,"v-input--radio-group--row":this.row})}},methods:{genDefaultSlot:function(){return this.$createElement("div",{staticClass:"v-input--radio-group__input",attrs:{id:this.id,role:"radiogroup","aria-labelledby":this.computedId}},x["a"].options.methods.genDefaultSlot.call(this))},genInputSlot:function(){var e=x["a"].options.methods.genInputSlot.call(this);return delete e.data.on.click,e},genLabel:function(){var e=x["a"].options.methods.genLabel.call(this);return e?(e.data.attrs.id=this.computedId,delete e.data.attrs.for,e.tag="legend",e):null},onClick:G["a"].options.methods.onClick}}),D=Object(d["a"])(l,a,c,!1,null,null,null),L=D.exports;p()(D,{VBtn:f["a"],VForm:m["a"],VRadio:F,VRadioGroup:q});var R=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"exo questions"},[i("v-form",[i("v-text-field",{attrs:{label:e.exercice.question,"success-messages":e.showCorrection&&e.answers[e.exercice.id]==e.exercice.response?e.exercice.response:"","error-messages":e.showCorrection&&e.answers[e.exercice.id]!=e.exercice.response?e.exercice.response:"",readonly:e.showCorrection},model:{value:e.answers[e.exercice.id],callback:function(t){e.$set(e.answers,e.exercice.id,t)},expression:"answers[exercice.id]"}}),i("v-btn",{staticClass:"mt-4",attrs:{color:"primary"},on:{click:e.submit}},[e._v(" "+e._s(this.showCorrection?"Exercice suivant":"Valider")+" ")])],1)],1)},N=[],T={props:{exercice:{required:!0}},data:function(){return{answers:[],showCorrection:!1}},methods:Object(r["a"])({submit:function(e){this.showCorrection?this.incCurrentExo():this.showCorrection=!0}},Object(o["c"])(["incCurrentExo"])),computed:{}},M=T,K=i("8654"),z=Object(d["a"])(M,R,N,!1,null,null,null),J=z.exports;p()(z,{VBtn:f["a"],VForm:m["a"],VTextField:K["a"]});var P=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"exo translate"},[i("v-form",[i("div",{staticClass:"text-h5 font-weight-bold mb-3"},[e._v("Traduis en "+e._s(e.exercice.options.to))]),i("div",{staticClass:"text-body-1 font-weight-bold mb-3"},[e.canSpeech?i("v-icon",{staticClass:"primary--text",on:{click:e.speech}},[e._v("mdi-volume-high")]):e._e(),e._v(' "'+e._s(e.exercice.question)+'" ')],1),i("v-text-field",{attrs:{label:"réponse","success-messages":e.showCorrection&&e.answers[e.exercice.id]==e.exercice.response?e.exercice.response:"","error-messages":e.showCorrection&&e.answers[e.exercice.id]!=e.exercice.response?e.exercice.response:"",readonly:e.showCorrection},model:{value:e.answers[e.exercice.id],callback:function(t){e.$set(e.answers,e.exercice.id,t)},expression:"answers[exercice.id]"}}),i("v-btn",{staticClass:"mt-4",attrs:{color:"primary"},on:{click:e.submit}},[e._v(" "+e._s(this.showCorrection?"Exercice suivant":"Valider")+" ")])],1)],1)},U=[],H=(i("7db0"),i("ac1f"),i("5319"),{props:{exercice:{required:!0}},data:function(){return{answers:[],showCorrection:!1}},methods:Object(r["a"])(Object(r["a"])({submit:function(e){this.showCorrection?this.incCurrentExo():this.showCorrection=!0},speech:function(){var e=new SpeechSynthesisUtterance;e.voice=this.getVoice(),e.volume=1,e.rate=.6,e.pitch=1,e.text=this.exercice.question,e.lang=e.voice.lang.replace("_","-"),console.log(e),speechSynthesis.speak(e)},getVoice:function(){var e=this,t=this.getVoices();return t.find((function(t){return t.lang.substring(0,2)===e.exercice.options.from&&!0===t.localService}))}},Object(o["b"])(["getVoices"])),Object(o["c"])(["incCurrentExo"])),computed:{canSpeech:function(){var e="speechSynthesis"in window&&"SpeechSynthesisUtterance"in window;return!(!e||!this.getVoice())}}}),Q=H,W=i("132d"),X=Object(d["a"])(Q,P,U,!1,null,null,null),Y=X.exports;p()(X,{VBtn:f["a"],VForm:m["a"],VIcon:W["a"],VTextField:K["a"]});var Z={name:"Session",props:{id:{required:!0}},created:function(){this.resetCurrent(),this.setCurrentSession(this.id),this.setCurrentExo(0)},data:function(){return{}},components:{qcm:L,question:J,translate:Y},methods:Object(r["a"])({},Object(o["c"])(["setCurrentSession","setCurrentExo","resetCurrent"])),computed:Object(r["a"])({session:function(){return this.getSession(this.id)},progress:function(){return this.currentExoIdx===this.session.exercices.length&&new Audio(i("c354")).play(),100*this.currentExoIdx/this.session.exercices.length}},Object(o["b"])({getSession:"getSession",currentExoIdx:"getCurrentExoIdx"}))},ee=Z,te=i("8e36"),ie=Object(d["a"])(ee,s,n,!1,null,null,null);t["default"]=ie.exports;p()(ie,{VProgressLinear:te["a"]})},"9de3":function(e,t,i){e.exports=i.p+"media/ok.19cdf115.mp3"},c354:function(e,t,i){e.exports=i.p+"media/finish.2bf45ec9.mp3"},ec29:function(e,t,i){}}]);
//# sourceMappingURL=seance.ea1912e1.js.map