Linux是一套免费使用和自由传播的类Unix操作系统，是一个基于[POSIX](https://baike.baidu.com/item/%E5%8F%AF%E7%A7%BB%E6%A4%8D%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F%E6%8E%A5%E5%8F%A3)和UNIX的多用户、多任务、支持多线程和多CPU的操作系统。它能运行主要的UNIX工具软件、应用程序和网络协议。支持32位和64位硬件。Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的多用户网络操作系统。

<img src="https://gitee.com/k34869/imges/raw/master/博客图片/X4x!0^7sAAeR.png" alt="linux" style="zoom:80%;" />

Linux的前身是Unix( 诞生于贝尔实验室，起初命名为 __UNICS__ ) ，早在Linux出现之前的二十年（1970年代）

## 发展历史

1965年**贝尔实验室Bell**、**麻省理工学院MIT**、**奇异公司GE**，发起了 <a href="https://baike.baidu.com/item/multics/10409946">Multics</a> 计划，其目标是开发一种交互式的具有多道程序处理能力的**分时操作系统**。

![unix](https://gitee.com/k34869/imges/raw/master/博客图片/dZFQtjzPoM*R.jpg)

1969年 由于资金不足、计划进度等问题，贝尔研究室则选择退出Multics计划，但是原计划的人员中有一位 <a href="https://baike.baidu.com/item/Ken%20Thompson/3441433">Ken Thompson（肯·汤姆森）</a>
1969年8月，这哥们趁老婆不在家自己用4周时间使用**汇编语言**在DEC PDP-7这台机器上写了一个核心程序，汤姆森将Multics计划中的系统简化了，最后叫**Unics**（还不叫Unix）

![kl](https://gitee.com/k34869/imges/raw/master/timeic/PEUdG2p8SrhP.jpg)

1971年，肯·汤姆森的同事丹尼斯·里奇发明了<a href="https://baike.baidu.com/item/c%E8%AF%AD%E8%A8%80/105958?fr=kg_general">C语言</a>，之后之后 1973年 Unix系统的绝大部分的源代码用C语言重写，这为提高Unix系统的可移植性打下了基础。

1977年**柏克莱大学**的 [bill joy](https://baike.baidu.com/item/%E5%A8%81%E5%BB%89%C2%B7%E7%BA%B3%E5%B0%94%E9%80%8A%C2%B7%E4%B9%94%E4%BC%8A/10735666) 对Unix代码进行修改后命名为Berkeley Software Distribution（ <a href="https://baike.baidu.com/item/BSD/3794498">BSD</a> ）用于教学。
由于 <a href="https://baike.baidu.com/item/%E7%BE%8E%E5%9B%BD%E7%94%B5%E8%AF%9D%E7%94%B5%E6%8A%A5%E5%85%AC%E5%8F%B8/3454291">AT&T</a> 禁止大学使用Unix源代码进行教学，柏克莱大学的 <a href="https://baike.baidu.com/item/Anderw%20S.Tanenbaum/9473136">Tanenbaum</a>（坦嫩鲍姆）教授极为不满，一怒之下编写了个类似的系统，取名 <a href="https://baike.baidu.com/item/Minix/7106045">Minix</a> ——mini-Uinix的意思。这个操作系统非常简单，代码只有12000行，它的出现导致了另外一个神级操作系统的诞生。

1984年<a href="https://baike.baidu.com/item/%E7%90%86%E6%9F%A5%E5%BE%B7%C2%B7%E9%A9%AC%E4%BF%AE%C2%B7%E6%96%AF%E6%89%98%E6%9B%BC/2122303?fromtitle=Richard%20Matthew%20Stallman&fromid=11164798&fr=aladdin">Richard Mathew Stallman</a>（史托曼）发起 <a href="https://baike.baidu.com/item/GNU%E8%AE%A1%E5%88%92/981157">GNU计划</a>，计划目的时：建立一个自由、开放的 Unix 操作系统。于是他不仅宣传让同事使用此内核程序，自己还开始编写C语言的编译器也就是 **gcc**

1990年，GNU计划已经开发出的软件包括了一个功能强大的文字编辑器Emacs、C语言编译器GCC以及大部分UNIX系统的程序库和工具。唯一依然没有完成的重要组件，就是操作系统的内核（称为HURD）。

__GNU开发的几个重要软件：__

- <a href="https://baike.baidu.com/item/emacs/2044183">Emacs</a> 代码编辑器工具
- GNU C （ <a href="https://baike.baidu.com/item/GCC/17570">GCC</a> ）
- GNU C Library （ <a href="https://baike.baidu.com/item/glibc/10058561">glibc</a> ）
- <a href="https://baike.baidu.com/item/bash/6367661">Bash</a> shell

后来的很多软件都可以通过这些基础程序开发。

### Linux正式诞生！

<img src="https://gitee.com/k34869/imges/raw/master/博客图片/7ufNr2WD!5kX.jpg" alt="Linus" style="zoom: 45%;" />

1991年 芬兰 **赫尔辛基大学**的学生**Linus Torvalds**在操作系统课程上学习了Minix，并将其运行386机器上，之后他使用GNU开源工具写了一个兼容Unix的核心程序（Linux）并在GPL条款下发布。Linux之后在网上广泛流传，许多程序员参与了开发与修改。

1992年，Linux与其他GNU软件结合，完全自由的操作系统正式诞生。该操作系统往往被称为“**GNU/Linux**”或简称Linux。

> PS：GNU（GNU‘S Not Unix / gnu不是Unix），在程序中是无限循环意思。

### 开源软件的特点

- 使用的自由
	绝大多数来源软件免费
- 研究的自由
	可以获得软件源代码
- 散布及改良的自由
	可以自由传播、改良甚至销售

### 关于 Linux Logo 的由来

<img src="https://gitee.com/k34869/imges/raw/master/timeic/uI51jndgpW1z.jpg" alt="linux_logo" title="linux_logo" width="40%" style="border-radius:50%" />

关于 Linux Logo 的由来是一个很有意思的话题，它是一只企鹅。

为什么选择企鹅，而不是选择狮子、老虎或者小白兔？有人说因为李纳斯•托瓦兹是芬兰人，所以选择企鹅，有人说因为其他动物图案都被用光了，李纳斯•托瓦兹只好选择企鹅。我更愿意相信以下说法，企鹅是南极洲的标志性动物，根据国际公约，南极洲为全人类共同所有，不属于世界上的任何国家，可国家都无权将南极洲纳入其版图。Linux 选择企鹅图案作为 Logo，其含义是：开放源代码的 Linux 为全人类共同所有，可公司无权将其私有。

## 应用领域

### **Linux作为企业级服务器的应用**

<img src="https://gitee.com/k34869/imges/raw/master/timeic/fgxtTquFbq91.jpg" alt="Linus" style="zoom: 45%;" />

Linux作为[企业级服务器](https://baike.baidu.com/item/%E4%BC%81%E4%B8%9A%E7%BA%A7%E6%9C%8D%E5%8A%A1%E5%99%A8/484587)的应用十分广泛，利用Linux系统可以为企业构架WWW服务器、数据库服务器、负载均衡服务器、邮件服务器、DNS服务器、代理服务器(透明网关)、路由器等，不但使企业降低了运营成本，同时还获得了Linux系统带来的高稳定性和高可靠性。

随着Linux在服务器领域的广泛应用，从近几年的发展来看，该系统已经渗透到了电信、金融、政府、教育、银行、石油等各个行业，同时各大硬件厂商也相继支持Linux操作系统。这一切都在表明，Linux在服务器市场的前景是光明的。同时，大型、超大型互联网企业(百度、新浪、淘宝等)都在使用Linux系统作为其服务器端的程序运行平台，全球及国内排名前十的网站服务器使用的几乎都是Linux系统，Linux已经逐步渗透到各个领域的企业里。

### **嵌入式Linux系统应用领域**

由于Linux系统开放源代码，功能强大、可靠、稳定性强、灵活，而且具有极大的伸缩性，再加上它广泛支持大量的微处理器体系结构、硬件设备、图形支持和通信协议，因此，在[嵌入式](https://baike.baidu.com/item/%E5%B5%8C%E5%85%A5%E5%BC%8F%E7%B3%BB%E7%BB%9F/186978)应用的领域里，从因特网设备(路由器、交换机、防火墙、负载均衡器等)到专用的控制系统(自动售货机、手机、PDA、各种家用电器等)，Linux操作系统都有很广阔的应用市场。特别是经过这几年的发展，它已经成功地跻身于主流嵌入式开发平台。例如，在智能手机领域，Android Linux已经在智能手机开发平台牢牢地占据了一席之地。

<img src="https://gitee.com/k34869/imges/raw/master/timeic/@moHSvzbdlsP.jpg" alt="Android" style="zoom: 33%;" />

### **个人桌面Linux应用领域**

所谓个人桌面系统，其实就是我们在办公室使用的个人计算机系统， 例如： Windows XP、Windows 7、MAC等。Linux系统在这方面的支持也已经非常好了，完全可以满足日常的办公及家用需求，例如：

- 浏览器上网浏览(例如：[Firefox](https://baike.baidu.com/item/Mozilla%20Firefox/3504923)浏览器)。

- 办公室软件([OpenOffice](https://baike.baidu.com/item/OpenOffice/7384410)，兼容微软Office软件)处理数据。

- 收发电子邮件(例如：ThunderBird 软件)。

- 实时通信(例如：QQ 等)。

- 文字编辑(例如：vi、vim、emac)。

- 多媒体应用。

虽然Linux个人桌面系统的支持已经很广泛了，但是在当前的桌面市场份额还远远无法与Windows系统竞争，这其中的障碍可能不在于Linux桌面系统产品本身，而在于用户的使用观念、操作习惯和应用技能，以及曾经在Windows上开发的软件的移植问题。

<a href="http://coolshell.cn/articles/2322.html" alt="Unix传奇@coolshell.cn" title="Unix传奇@coolshell.cn">http://coolshell.cn/articles/2322.html</a>