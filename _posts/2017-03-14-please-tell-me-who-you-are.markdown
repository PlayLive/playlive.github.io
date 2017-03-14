---
layout: post
title:  "Github commit 出现错误 ***please tell me who your are"
date:   2017-03-14 10:16
categories: Github
tags: Github
excerpt: please tell me who your are
---

* 解决办法

1. 打开终端执行
``` shell
    git config --global -e
```

2. 修改页面中参数

    按 i 进行修改操作，光标移动到name和email修改位你自己的

   name=yourname
   email=youremail@163.com
3. 保存

    按Esc  输入  :wq  保存

    再次commit 问题就解决啦
