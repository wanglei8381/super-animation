#super-animation
 <h5>动画算法</h5>
##Install
npm install super-animation
##Use
<pre>
var animation = require('super-animation');
var val = animation.quad.easeIn(0,10,50-10,100);
</pre>
##Api
<ul>
<li>animate</li>
<li>quad</li>
<li>cubic</li>
<li>quart</li>
<li>quint</li>
<li>sine</li>
<li>expo</li>
<li>circ</li>
<li>elastic</li>
<li>back</li>
<li>bounce</li>
<li>
    以上对象的方法easeIn,easeOut,easeInOut<br>
    easeIn,easeOut,easeInOut通用参数<br>
    agr1: current time（当前时间）<br>
    agr2: beginning value（初始值）<br>
    agr3: change in value（变化量）<br>
    agr4: duration（持续时间）<br>
</li>
</ul>
<img src="https://img.wuage.com/147635054616625算法.png">