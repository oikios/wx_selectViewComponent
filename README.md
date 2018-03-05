# wx_selectViewComponent
微信下拉选项组件
使用方式：
针对不同的下拉菜单，调用：
<selectViewComponent titles="{{select.types}}" selectData="{{select.selectData}}" bind:clickLabel='clickLabel' wx:if="{{select.selectTitle=='职位'}}"></selectViewComponent>
其中，select定义了筛选相关的对象，例如：
//筛选相关
    select: {
      selectTitleList: ['职位', '城市', '推荐'],  //筛选title数组
      selectTitle: '',  //点击的筛选title
      citys: [],//城市筛选列表
      recommend: [],//推荐列表，其中包括时间，发布来源
      types: [],  //职位类型
      selectData:{}, //筛选项数据
      sectionTitleObject: {
        '职位': 'first_type', '城市': 'city', '时间': 'time_tag', '发布来源': 'source_website'
      },//对应的中英文
      
selectData的数据格式：'select.selectData':{'职位':{'全部':'全部'},'城市':{'全部':'全部'},'时间':{'全部':'全部'},'发布来源':{'全部':'全部'}}，
也就是{'标题':'item':'item'}的形式

citys/recommend/types 的数据格式为：{'name':'城市','value':[],'notShowName':true}  //notShowName判断是否显示组标题，默认false，不显示
