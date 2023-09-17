
window.onload = function () {

    // 获取滑动条所在链接全部元素
    const aAll = document.querySelectorAll('.nav-right a')
    // 获取滑动条
    const move = document.querySelector('nav .nav-right .move')


    // 获取图片容器
    const imageWrap = document.querySelector('.swiper .image')
    console.log(imageWrap);

    // 获取图片
    const imageAll = document.querySelectorAll('.image img')
    // console.log(imageAll);

    // 获取右箭头
    const arrowRight = document.querySelector('.swiper .arrow-right')

    const arrowLeft = document.querySelector('.swiper .arrow-left')


    // 获取小圆点
    const dropAll = document.querySelectorAll('.swiper .drop div')

    // console.log(dropAll);

    // 获取小圆点active状态
    const dropActive = document.querySelector('.swiper .drop .active')


    // 获取第一个图表元素
    const grap1 = document.querySelector('.top-charts')

    const grap2 = document.querySelector('.bottom-charts .bottom-left-charts')

    const grap3 = document.querySelector('.bottom-charts .bottom-right-charts')



    //滑动条随鼠标移动

    aAll[0].addEventListener('mouseenter', function () {
        move.style.left = 0 + 'px'
    })

    aAll[1].addEventListener('mouseenter', function () {
        move.style.left = 95 + 'px'
    })

    aAll[2].addEventListener('mouseenter', function () {
        move.style.left = 95 * 2 + 'px'
    })

    aAll[3].addEventListener('mouseenter', function () {
        move.style.left = 95 * 3 + 'px'
    })

    aAll[4].addEventListener('mouseenter', function () {
        move.style.left = 95 * 4 + 'px'
    })

    // 自动播放轮播图

    // 图片下标
    let index = 0



    let timer = null

    // 轮播图循环播放
    function loop() {
        // console.log(index,'loop');
        if (index < 5 && index >= 0) {
            imageWrap.style.left = -540 * index + 'px'

            // 调用小圆点active状态
            dropActiveFunc(index)


            // 准备进行下张图片播放
            index++
        }

        else {
            // 当 index == 5,即播完最后一张，跳转到第一张
            imageWrap.style.left = 0 + 'px'

            // 存储当前图片索引
            index = Math.abs(parseInt(imageWrap.style.left) / 540)

            // 调用小圆点active状态
            dropActiveFunc(index)

            // 准备进行下张图片播放
            index++
        }
        // console.log(index,'loopEnd');
    }

    // 左箭头
    function loopRev() {

        // 由于上次loop循环会加1以备下次使用
        // 所以-1才是当前播放图片下标
        index--

        // 图片至少为第1张，才能进行上一个图片移动
        if (index > 0) {

            // 图片向右移动，即播放上一张
            imageWrap.style.left = parseInt(imageWrap.style.left) + 540 + 'px'

            // 存储当前播放图片下标
            index = Math.abs(parseInt(imageWrap.style.left) / 540)

            // 调用小圆点active状态
            dropActiveFunc(index)

            // console.log(index,'looprev');

            // 进行下一张播放
            index++
        }

        // 当播放下标为0，即播放第一张图片时
        if (index <= 0) {
            // 当index= 0,即播完第一张，跳转到最后一张
            imageWrap.style.left = (-540) * 4 + 'px'

            // 调用小圆点active状态
            dropActiveFunc(index)

            // 进行下一张播放
            index = 4 + 1
        }
    }

    // 轮播图播放定时器函数
    function loopauto() {

        timer = setInterval(loop, 2000)

    }
    // 首次先自行调用
    loopauto()


    // 点击右箭头
    arrowRight.addEventListener('click', function () {

        clearInterval(timer)
        // 立即执行一次轮播图播放
        loop()
        // 继续自动播放
        loopauto()

    })

    // 点击左箭头
    arrowLeft.addEventListener('click', function () {

        // 清除定时器
        clearInterval(timer)


        // 立即执行一次轮播图播放
        loopRev()
        // // 图片下标+1用于展示即将播放的下一张图片
        // index++
        // 继续自动播放
        loopauto()

    })



    // 点击小圆点立刻播放图片
    function dropClick(indexflag) {
        imageWrap.style.left = -540 * indexflag + 'px'

        // 为下次播放做准备
        index += 1
    }

    // 点击小圆点监听事件
    // dropAll[0].addEventListener('click', function () {
    //     // 清除定时器
    //     clearInterval(timer)
    //     index = 0
    //     dropClick(index)

    //     // 调用小圆点active状态
    //     dropActiveFunc(0)

    //     // 继续自动播放    
    //     loopauto()
    // })

    // dropAll[1].addEventListener('click', function () {
    //     // 清除定时器
    //     clearInterval(timer)
    //     index = 1
    //     dropClick(index)

    //     // 调用小圆点active状态
    //     dropActiveFunc(1)

    //     // 继续自动播放
    //     loopauto()
    // })

    // dropAll[2].addEventListener('click', function () {
    //     // 清除定时器
    //     clearInterval(timer)
    //     index = 2
    //     dropClick(index)

    //     // 调用小圆点active状态
    //     dropActiveFunc(2)

    //     // 继续自动播放
    //     loopauto()
    // })

    // dropAll[3].addEventListener('click', function () {
    //     // 清除定时器
    //     clearInterval(timer)
    //     index = 3
    //     dropClick(index)

    //     // 调用小圆点active状态
    //     dropActiveFunc(3)

    //     // 继续自动播放
    //     loopauto()
    // })

    // dropAll[4].addEventListener('click', function () {
    //     // 清除定时器
    //     clearInterval(timer)
    //     index = 4
    //     dropClick(index)

    //     // 调用小圆点active状态
    //     dropActiveFunc(4)

    //     // 继续自动播放
    //     loopauto()
    // })
 

    // 轮播图 小圆点 点击监听事件
    for (let i = 0; i < dropAll.length; i++) {
        dropAll[i].addEventListener('click', function () {
            // 清除定时器
            clearInterval(timer)
            index = i
            dropClick(index)

            // 调用小圆点active状态
            dropActiveFunc(i)

            // 继续自动播放
            loopauto()
        })
    }


    // 小圆点active状态
    function dropActiveFunc(indexflag) {
        let dropChil = dropAll[indexflag]
        for (let i = 0; i < dropAll.length; i++) {
            dropAll[i].classList.remove("active");
        }
        dropChil.classList.add('active')

    }


    // 鼠标放上停止滑动
    function stopPic() {

        // console.log(parseInt(imageWrap.style.left) / 540);
        // 获取当前播放图片下标
        let indexflag = Math.abs(parseInt(imageWrap.style.left) / 540)
        // console.log(indexflag);
        // 保存当前播放图片下标
        index = indexflag
        // 清除定时器
        clearInterval(timer)
        // console.log('清除');
        // 为下次做准备
        index++
    }

    // 鼠标离开继续滑动
    function continuePic() {
        // 开启计时器
        timer = setInterval(loop, 2000)
        // console.log('继续');

        // index++
    }
    imageWrap.addEventListener('mouseenter',stopPic)
    imageWrap.addEventListener('mouseleave',continuePic)



    // 第一个 折线图
    let mycharts1 = echarts.init(grap1)
    mycharts1.setOption({
        title: {
            text: '曲线图数据展示',
            // 标题居中显示
            left: 'center'
        },
        // x轴
        xAxis: {
            data: ['01/26', '01/28', '01/30', '02/01',
                '02/03', '02/05', '02/07', '02/09', '02/11', '02/13',
                '02/15', '02/17', '02/19', '02/21', '02/23']
        },
        // y轴
        yAxis: {
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            }
        },

        // 配置
        series: [
            {
                // 曲线光滑
                smooth: true,
                itemStyle: {
                    normal: {
                        // 数值
                        label: { show: true }
                    }
                },
                type: "line",
                // 数据
                data: [8972, 6448, 7456, 5824, 8123, 300, 300, 5130, 7463, 1435, 9426, 8187, 8297, 443, 9135],
                // 线颜色
                color: 'blue',
                areaStyle: {
                    color: '5500AD',

                },
            }
        ]
    })

    // 第二个 饼图
    let mycharts2 = echarts.init(grap2)
    mycharts2.setOption({
        title: {
            text: '饼状图数据展示',
            left: 'center'
        },
        series: [
            {
                type: 'pie',
                data: [
                    { value: 20, name: 'Mon' },
                    { value: 20, name: 'Tue' },
                    { value: 20, name: 'Wed' },
                    { value: 120, name: 'Thu' },
                    { value: 50, name: 'Fri' },
                    { value: 40, name: 'Sat' },
                    { value: 60, name: 'Sun' },
                ]
            }
        ]

    })

    // 第三个 柱状图
    let mycharts3 = echarts.init(grap3)
    mycharts3.setOption({
        title:{
            text:'柱状图数据展示',
            left:'center'
        },
        xAxis:{
            data:['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
        },
        yAxis:{
            name:'商品数',
            axisLine: {
                show: true
            },
            axisTick: {
                show: true
            }
        },
        series:[{
            type:'bar',
            data:[9,11,13,10,8,11,6],
            color:'blue'
        }]
    })


    // let month = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    // 请求数据
    // axios({
    //     url:'https://edu.telking.com/api/',
    //     method:'GET',
    //     params:{
    //         type:'Mon'
    //     }
    // }).then(function (res) {
    //     console.log(res);
    // });

    

}

