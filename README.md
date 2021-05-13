# SourceCode
🚗深层次解析vue实现原理，进阶vue，通过手写基本实现方式，来更深层次的了解vue



### 语法讲解

1. node.nodeType 

    输出该节点的类型，用来区分不同类型的节点

    [文档链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType)

    ```
    var ele = document.getElementById("app");
    console.log(ele)
    console.log(ele.nodeTyep)

    ```

2. Element.attributes 

    属性返回该元素所有属性节点的一个实时集合。该集合是一个 NamedNodeMap 对象，不是一个数组，所以它没有 数组 的方法，其包含的 属性 节点的索引顺序随浏览器不同而不同。更确切地说，attributes 是字符串形式的名/值对，每一对名/值对对应一个属性节点

    [文档链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attributes)


3. document.createDocumentFragment()

    DocumentFragments 是DOM节点。它们不是主DOM树的一部分。通常的用例是创建文档片段，将元素附加到文档片段，然后将文档片段附加到DOM树。在DOM树中，文档片段被其所有的子元素所代替。

    因为文档片段存在于内存中，并不在DOM树中，所以将子元素插入到文档片段时不会引起页面回流（对元素位置和几何上的计算）。因此，使用文档片段通常会带来更好的性能。

    [文档链接](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createDocumentFragment)


4. class constructor

    使用class定义类，必须有constructor构造函数，传递参数，返回实例对象；如果没有定义，会自动创建
    默认定义类的时候使用严格模式,不用添加

    
    · super
        当子类,父类都有构造方法,需要使用super,调用父类的构造方法

    · extends
        子类与父类进行关系绑定，关联到一起，子类继承父类方法和变量