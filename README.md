大标题（下方4个====对应一级标题）
====
中标题（下方4个----对应二级标题）
----
# 一级标题
一个 #
***
## 二级标题
二个 ##
***
### 三级标题
三个 ###
***
#### 四级标题
四个 ####
***
##### 五级标题
五个 #####
***
###### 六级标题
六个 ######
***
### 单行文本
`使用方法：`前面两个tab<br>
`例子：`<br>

        我是单行文本
***
### 普通文本
`使用方法：`前面无tab<br>
`例子：`<br>
普通文本
***
### 普通文本换行
`使用方法：`换行使用(`<br>`)<br>
`例子：`<br>
普通文本换行<br>
我是普通文本换行后的文本<br>
普通文本(斜体\*斜体内容\*)<br>
*我是斜体普通文本*<br>
普通文本(粗体\*\*粗体内容\*\*)<br>
**我是粗体普通文本**
***
### 多行文本
`使用方法：`多个单行文本组成<br>
`例子：`<br>

        多行文本（其实就是多个单行文本）<br>
        多行文本（其实就是多个单行文本）<br>
        多行文本（其实就是多个单行文本）<br>
***
### 高亮文本(单个``)
`使用方法：`\`\`包裹需要高亮的内容<br>
`例子：`<br>
我的内容是`高亮`的了~
***
### 高亮文本(多个``` ```)
`使用方法：`\`\`\`(内容)\`\`\`包裹需要高亮的内容,会保留格式<br>
`例子：`<br>
```
    我是三个点
    我是三个点·
```
***
### 文字超链接
`使用方法：`\[要显示的文字\](链接地址 "悬停展示内容")<br>
`例子：`<br>
[git中文地址](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%85%B3%E4%BA%8E%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6 "https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%85%B3%E4%BA%8E%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6")
***
### 插入图片
`使用方法：`\!\[标示信息\]\(图片链接 "悬停展示内容"\)<br>
`例子：`<br>
![baidu](https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=783d11acbf315c6043956ce9b58aac2e/1c950a7b02087bf49212ea50f1d3572c10dfcf89.jpg "若未展示说明图片地址失效了")
***
### 插入符号（无序列表）
`使用方法：`\* 后面要有一个空格<br>
`例子：`<br>
* git好学么：不好学
* 那你学么：学
`高级使用方法：` 层级列表，从第二个 \* 起，每个 \* 加一个tab<br>
`例子：`<br>
* git好学么：不好学
    * 那你学么：学
***
### 插入符号（有序列表）
`使用方法：`1. 2. 后面要有一个空格<br>
`例子：`<br>
1. git好学么：不好学
2. 那你学么：学<br>
`高级使用方法：` 层级列表，从第二个起，每个数字前面加一个tab,再从1开始<br>
`例子：`<br>
1. git好学么：不好学
    1. 那你学么：学
***
### 引用用法
`使用方法：`\> 一个表示缩进一级,通常单个使用标示引用<br>
`例子：`<br>
>project
>>src
>>>index.html
***
### 复选框
`使用方法：`\- \[\]:表示未选中;\- \[x\]:表示选中;<br>
`例子：`<br>
- [x] 已完成git的学习
    - [x] 已完成readme.md的学习
- [ ] 未完成全栈的学习
***
### 流程图
`使用方法：`<br>
```
    前面要加：graph TD 标示;
    []:矩形
    ():圆角
    {}:菱形
    A[A] -->B(B)
    B --> C{C}
    C -->|1| D[D]
    C -->|2| E[E]
    C -->|3| F[F]
```
`例子：`<br>

graph TD
    A[asd] -->B(asd)
    B -->C{asd}
    C -->|asd| D[asd]
    C -->|asd| E[sd]
    C -->|asd| F[asd]
