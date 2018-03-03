// templates/selectViewComponent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      titles:{
        type:Array,
        value:[],
      },
      selectData:{
        type:Object,
        value:{}
      },
      isHaveConfirm:{
        type:Boolean,
        value:false
      },
      isHaveReset:{
        type: Boolean,
        value: false
      },
      numberPerRow:{
        type:Number,
        value:4,  //默认是4
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
   labelWidth:0, //标签的最短宽度
  },

  attached:function () {
    let numberPerRow = this.data.numberPerRow;
    //获取屏幕宽度，计算label的最短宽度
    let screenWidth = wx.getSystemInfoSync().windowWidth;
    this.setData({ labelWidth: (screenWidth - 15*(numberPerRow+1)) /numberPerRow - 20 -2});  //减20是因为有左右内边距10，减2是因为有2像素的小差别，可以通过再wxml上看出来  
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickLabel:function(e){
      this.triggerEvent('clickLabel',{label:e.currentTarget.dataset.label});
    },
    confirmAction:function(){
      this.triggerEvent('confirmAction');
    },
    resetAction:function() {
      this.triggerEvent('resetAction');
    }
  }
})
