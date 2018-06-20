/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let routerMode = 'hash';


let env = process.env.NODE_ENV;

let baseUrl = '';
let baseImgPath = '';


if (typeof(env) == 'undefined') {
    if (env === 'production') {
        baseUrl = 'https://qiuplus.cn';
        baseImgPath = '//127.0.0.1:8000/media/user_image/';
    } else {
        baseUrl = '//127.0.0.1:8000';
        baseImgPath = '/media/user_image/';
    }
}
else {
    baseUrl = '//127.0.0.1:8000';
    baseImgPath = '/media/user_image/';
}
console.log(baseUrl);

// baseUrl = '';
// baseImgPath = '/img/';


export {
    baseUrl,
    routerMode,
    baseImgPath
};
