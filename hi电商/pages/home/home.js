// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navbar: ['今日推荐', '时尚', '国际', '美妆', '母婴', '居家'],
        currentTab: 0,
        indicator: true,
        autoplay: true,
        interval: 3000, // 自动切换动画的时长
        duration: 1000, // 滑动动画时长
        isHideLoadMore: false, // loading
        imgUrls: [
            'https://a4.vimage1.com/upload/flow/2017/10/20/117/15084947982974.jpg',
            'https://a2.vimage1.com/upload/flow/2017/11/07/73/15100619325212.jpg',
            'https://b.vimage1.com/upload/mst/2017/11/04/139/23b96f0e89abed2d9415e848fc3715ff_604x290_80.jpg'
        ],
        goodsHotItems: [{
                goodId: 0,
                name: '天然植物唇膏2.4g',
                url: 'bill',
                imageurl: 'https://a3.vimage1.com/upload/merchandise/pdc/272/707/8870197248301707272/2/6922446703595-5_360x456_90.jpg',
                newprice: "32.00",
                oldprice: "59.00",
            },
            {
                goodId: 1,
                name: '流光水彩唇膏升级版 3.5g',
                url: 'bill',
                imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/03/8/4fb444e7-3417-4f4a-b5a1-7f1d884c610f_218x274_70.jpg',
                newprice: "89.00",
                oldprice: "99.00",
            },
            {
                goodId: 2,
                name: '卡姿兰蜗牛氧气泡泡面膜',
                url: 'bill',
                imageurl: 'https:////a3.vimage1.com/upload/merchandise/pdcvis/2017/08/24/167/28c3726f-dfdd-4a59-89ac-b79ea8e24f40_218x274_70.jpg',
                newprice: "139.00",
                oldprice: "159.00",
            },
            {
                goodId: 3,
                name: '特效润肤露',
                url: 'bill',
                imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg',
                newprice: "30.00",
                oldprice: "80.00",
            },
            {
                goodId: 4,
                name: '御泥坊 | 美白嫩肤泥浆...',
                url: 'bill',
                imageurl: 'https://a4.vimage1.com/upload/merchandise/pdcvis/2017/11/03/98/f34a6c251abf45e5ba60a645f13c7757-5.jpg',
                newprice: "79.00",
                oldprice: "80.00",
            }, {
                goodId: 5,
                name: '日本资生堂洗颜',
                url: 'bill',
                imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg',
                newprice: "30.00",
                oldprice: "80.00",
            }, {
                goodId: 6,
                name: '玉兰油 | 水感透白光塑钻...',
                url: 'bill',
                imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/05/19/2/e5de903ab5ba4a6492f3574469fdfca9-5.jpg',
                newprice: "145.00",
                oldprice: "324.00",
            }
        ],
        goodsWelfareItems: []
       
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {
       
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {
        console.log("加载更多");
        setTimeout(()=>{
            this.setData({
                isHideLoadMore: true,
                goodsWelfareItems: [
                    {
                    goodId: 0,
                    name: '泊尔崖蜜蜜光面膜（5片盒装）',
                    url: 'bill',
                    imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/142/fb2960bf8e074d029c24315279289c19-5_218x274_70.jpg',
                    newprice: "86",
                    oldprice: "88",
                },
                {
                    goodId: 1,
                    name: '透无瑕矿物养护两用粉饼#03',
                    url: 'bill',
                    imageurl: 'https://a4.vimage1.com/upload/merchandise/pdcvis/2017/08/21/27/4b24e2a629644877866d3da755f6a36e-5_218x274_70.jpg',
                    newprice: "147.00",
                    oldprice: "150.00",
                },
                {
                    goodId: 2,
                    name: '川水水光面膜（5片盒装）',
                    url: 'bill',
                    imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/21/86/7891361fdab348a1bc91aeca31fc77b1-5_218x274_70.jpg',
                    newprice: "86.00",
                    oldprice: "88.00",
                },
                {
                    goodId: 3,
                    name: '蜜三色渐变咬唇膏3.2g 03蜜橙动心恋',
                    url: 'bill',
                    imageurl: 'http://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/21/176/c3b9453a4d7f46c6a8fe78705f77352b-5_218x274_70.jpg',
                    newprice: "97.00",
                    oldprice: "99.00",
                },
                {
                    goodId: 4,
                    name: '时焕颜亮采套装',
                    url: 'bill',
                    imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/08/21/93/69a6bc1c11eb4be184b7dffb43b8565b-5_218x274_70.jpg',
                    newprice: "398.00",
                    oldprice: "459.00",
                }, {
                    goodId: 5,
                    name: '雪域眼霜套装',
                    url: 'bill',
                    imageurl: 'https://a4.vimage1.com/upload/merchandise/pdcvis/2017/08/23/127/53409c86f74647af915bc379427b97c2-5_218x274_70.jpg',
                    newprice: "238.00",
                    oldprice: "358.00",
                }, {
                    goodId: 6,
                    name: '凝时鲜颜冰肌水套装',
                    url: 'bill',
                    imageurl: 'https://a2.vimage1.com/upload/merchandise/pdcvis/2017/11/13/95/fb6c3d0c1f304b449dadb1f0100c1205-5_218x274_70.jpg',
                    newprice: "248.00",
                    oldprice: "348.00",
                }, {
                    goodId: 7,
                    name: '雪润皙白精选三件套',
                    url: 'bill',
                    imageurl: 'https://a3.vimage1.com/upload/merchandise/pdcvis/2017/08/30/184/a5000156098940b5a05a0e696535ac20-5_218x274_70.jpg',
                    newprice: "348.00",
                    oldprice: "396.00",
                }
                ]
            })
        }, 500)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    },
    /**
     * 切换当前选中类目
     */
    navbarTap(e) {
        console.log(e);
        this.setData({
            currentTab: e.currentTarget.dataset.idx
        })
    }
})