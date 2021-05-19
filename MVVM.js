// 基础类 调度

class Observer{  //实现数据劫持
    constructor(data){
        console.log(data)
        this.observer(data);
    }
    observer(data){
        // 如果是对象才观察
        if(data && typeof data == 'object'){
            for(let key in data){
                this.defineReactive(data,key,data[key]);
            }
        }
    }
    defineReactive(obj,key,value){
        this.observer(value);
        Object.defineProperty(obj,key,{
            get(){
                return value;
            },
            set:(newVal)=>{
                if(newVal != value){
                    this.observer(newVal);
                    value = newVal;
                }
               
            }
        })
    }
}


class Complier{
    constructor(el,vm){
        // 判断el属性 是不是一个元素 如果不是元素 那就获取
        this.el = this.isElementNode(el)?el:document.querySelector(el);
        // console.log(this.el);
        // 把当前节点中的元素 获取到 放到内存中
        // 方便所有的数据处理完之后 直接取用
        this.vm = vm;
        let fragment = this.node2fragment(this.el);
        // console.log(fragment)
        // 把节点中的内容进行替换

        // 用数据编译模版
        this.complie(fragment);
        // 把内容再塞到页面中
        this.el.appendChild(fragment);
    }
    isDirective(attrName){
        return attrName.startsWith('v-');
    }
    // 编译元素
    complieElement(node){
        // console.log(node)
        // 类数组
        let attributes = node.attributes;
        // console.log(attributes);
        [...attributes].forEach(attr => {
            // type="text" v-modle="school.name"
            // console.log(attr)
           let {name,value:expr} = attr;
            // console.log(name,value)
            // 判断是不是指令
            if(this.isDirective(name)){
                console.log(node)
                let [,directive] =  name.split('-');
                // 需要调用不同的指令来处理
                ComplieUtil[directive](node,expr,this.vm);
            }

        });
    }
    // 编译文本
    complieText(node){  //判断当前文本中的接待你是否包含{{}}
       let content =  node.textContent;
    //    console.log(content)
       if(/\{\{.+?}\}/.test(content)){
           console.log(content);
        //    找到所有文本
            ComplieUtil['text'](node,content,this.vm);

       }

    }

    // 核心的编译方法
    complie(node){ //编译内存中的dom 节点
        // 循环字节点 
        let childNodes = node.childNodes;
        // console.log(childrenNodes);
        // 判断是元素 还是文本
        [...childNodes].forEach(child=>{
            // console.log(this.isElementNode(child))
            if(this.isElementNode(child)){
                console.log('elemdnt',child)
                // 元素 -- 判断是否有 v-model
                this.complieElement(child);
                // 如果是元素的话 需要再去遍历自己的子节点
                this.complie(child)
            }else{
                // console.log('text',child)
                // 文本 -- 判断是否有 {{}}
                this.complieText(child);
            }
        })
    }
    // 把节点移动到内存中
    node2fragment(node){
        // 创建一个文档碎片
        let fragment = document.createDocumentFragment();
        // 把所有的对象都放入
        let firstChild;  //声明一个节点 然后循环 拿到一个节点 就把它放到内存里（文档碎片）
        while(firstChild = node.firstChild){
            // console.log(firstChild)
            // appendChild 具有移动性 每拿到一个节点 就保存起来
            fragment.appendChild(firstChild);
        }
        return fragment;

    }
    isElementNode(node){ //是不是元素节点
        return node.nodeType == 1;
    }
}

// 公共编译工具
ComplieUtil = {  
    // 根据表达式取到对应的数据
    getVal(vm,expr){ //vm.$data  
        return expr.split('.').reduce((data,current)=>{
            return data[current];
        },vm.$data);

    },
    model(node,expr,vm){ //node 是节点  expr 是表达式  vm 是当前实例
        let fn = this.updater['modeUpdater'];
        let value = this.getVal(vm,expr);
        fn(node,value);
    },
    html(){

    },
    text(node,expr,vm){
        let fn = this.updater['textUpdater'];
        let content = expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            return this.getVal(vm,args[1]);
        });
        fn(node,content);
    },
    updater:{
        // 把数据插到对应的节点
        modeUpdater(node,value){
            node.value = value;
        },
        htmlUpdater(){

        },
        textUpdater(node,value){
            node.textContent = value;
        },
    }
}

class Vue{
    constructor(options){
        this.$el = options.el;
        this.$data = options.data;

        // 这个根元素 存在 编译模版
        if(this.$el){

            // 把数据全部转化成 object.defineProperty 来定义
            new Observer(this.$data)

            console.log(this.$data)

            new Complier(this.$el,this);
        }
    }
}
