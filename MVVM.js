// 基础类 调度

class Complier{
    constructor(el,vm){
        // 判断el属性 是不是一个元素 如果不是元素 那就获取
        this.el = this.isElementNode(el)?el:document.querySelector(el);
        // console.log(this.el);
        // 把当前节点中的元素 获取到 放到内存中
        // 方便所有的数据处理完之后 直接取用
        let fragment = this.node2fragment(this.el);
        // console.log(fragment)
        // 把节点中的内容进行替换

        // 用数据编译模版

        // 把内容再塞到页面中
        this.el.appendChild(fragment);
    }
    // 把节点移动到内存中
    node2fragment(node){
        // 创建一个文档碎片
        let fragment = document.createDocumentFragment();
        // 把所有的对象都放入
        let firstChild;  //声明一个节点 然后循环 拿到一个节点 就把它放到内存里（文档碎片）
        while(firstChild = node.firstChild){
            // appendChild 具有移动性 每拿到一个节点 就保存起来
            fragment.appendChild(firstChild);
        }
        return fragment;

    }
    isElementNode(node){ //是不是元素节点
        return node.nodeTyep === 1;
    }
}

class Vue{
    constructor(options){
        this.$el = options.el;
        this.$data = options.data;

        // 这个根元素 存在 编译模版
        if(this.$el){
            new Complier(this.$el,this);
        }
    }
}
