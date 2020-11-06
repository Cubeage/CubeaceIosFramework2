//
//  CubeaceSDKManager.h
//  CubeaceSDK
//
//  Created by Cubeage on 2019/4/18.
//  Copyright © 2019 Cubeage. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import "User.h"
#import "AlertMessage.h"
#import "NotificationAction.h"
#import "CCGAssistiveTouchButton.h"

#define NSNotificationLogOutCallBack      @"NSNotificationLogOutCallBack"

NS_ASSUME_NONNULL_BEGIN

typedef void (^LoginCallBack)(User * uerInfo);
typedef void (^LogOutCallBack)(void);
typedef void (^ShareCallBack)(BOOL isSuccess);
typedef void (^SucceessBlock)(BOOL isSuccess , NSString * info);
typedef void (^CheckGuestCallBack)(int callBackStatu);
typedef void (^ProductsInfoCallBack)(NSArray * products);

typedef void (^CompletionCallback)(void);

@interface CubeaceSDKManager : NSObject

@property (nonatomic, strong)CCGAssistiveTouchButton * CCGButton;

@property (nonatomic, strong)NSArray * products;

@property (nonatomic, strong)NSTimer * checkOrderTimer;

@property (nonatomic, strong)NSTimer * redDotTimer;

@property (nonatomic, strong)NSTimer * popTopTipsTimer;

+ (instancetype)sharedInstance;

- (void)initCubeaceSDK:(void (^)(BOOL isInitSDKSuccess, NSString * cubeaceSDKVersion))completion;

- (BOOL)cubeaceSDKApplication:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions;

- (void)cubeaceSDKApplication:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken;

- (void)cubeaceSDKApplication:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo;

- (BOOL)cubeaceSDKApplication:(UIApplication *)application openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options;

//For your app to run on iOS 8 and older, also implement the deprecated
- (BOOL)cubeaceSDKApplication:(UIApplication *)application openURL:(NSURL *)url sourceApplication:(NSString *)sourceApplication annotation:(id)annotation;


- (BOOL)cubeaceSDKApplication:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler;

- (void)cubeaceSDKApplicationDidBecomeActive:(UIApplication *)application;

- (void)cubeaceSDKApplicationDidEnterBackground:(UIApplication *)application;

- (void)cubeaceSDKApplicationWillEnterForeground:(UIApplication *)application;

- (void)cubeaceSDKApplicationWillTerminate:(UIApplication *)application;

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

/**
 *  Link分享接口
 *
 *  @param urlStr   分享的链接
 *  @param completion   分享的回调
 */
- (void)cubeaceSDKShareLinkUrl:(NSString * __nonnull)urlStr CallBack:(ShareCallBack)completion;

/**
*  分享文本＋图片接口
*
*  @param textStr   分享的文本信息
*  @param imageUrlStr   分享的图片链接
*  @param completion   分享的回调
*/
- (void)cubeaceSDKShareText:(NSString * __nullable)textStr ImageURL:(NSString * __nonnull)imageUrlStr CallBack:(ShareCallBack)completion;

/**
*  账号绑定接口
*/
- (void)bindAccountSetting;

/**
*  评分弹框接口
*/
- (void)showRating;

/**
*  登录接口
*
*  @param completion   登录的回调
*/
- (void)loginCallBack:(LoginCallBack)completion;


/**
*  检查是否是游客guest登录的接口
*
*  @param isCheck   是否检查， YES 检查，NO 不检查
*  @param completion  接口回调： 0，需要游戏退出游戏 1，需要游戏不退出游戏2，告知游戏该用户是游客，请游戏弹窗
*/
- (void)checkGuest:(BOOL)isCheck Completion:(CheckGuestCallBack)completion;

/**
 *  内购产品接口
 *
 *  @param itemId   传入游戏内部所需要购买的产品的产品itemId 例如：‘item1’
 *  @param gameOrderNo   传入游戏的订单号 例如：‘gameOrderNo1’，可传入空值nil
 *  @param success   购买成功的回调
 *  @param failure   购买失败的回调
 */
- (void)buyGameItem:(NSString * __nonnull)itemId GameOrderNo:(NSString * __nonnull)gameOrderNo Success:(void (^)(NSDictionary * response))success Failure:(void (^)(NSError *error))failure;

//查漏补单
- (void)checkOrder;

/**
*  自定义事件埋点采集接口
*
*  @param name   事件名称
*  @param parameters   自定义数据参数
*/
- (void)logEventWithName:(NSString * __nonnull)name parameters:(nullable NSDictionary<NSString *, id> *)parameters;

/**
*  自定义用户属性采集接口
*
*  @param propertyStr   属性值
*  @param propertyName   属性名称
*/
- (void)setUserProperty:(NSString * __nonnull)propertyStr forName:(NSString * __nonnull)propertyName;

/**
*  文本拷贝接口
*
*  @param contentStr   文本内容
*/
- (void)copyContent:(NSString * __nonnull)contentStr;

/**
*  获取可购买商品列表信息
*
*  @param completion   列表信息回调
*/
- (void)allProductsIDInfo:(ProductsInfoCallBack) completion;

/**
*  震动效果
*
*/
- (void)vibrationEffect;

/**
*  打开浏览器
*  @param urlString   浏览器加载的URL
*/
- (void)openBrowser:(NSString * __nonnull)urlString;


/**
*  获取设备内存信息
*/
- (NSDictionary *)getSystemMemoryInfo;

/**
*  IOS GameCenter登录
*/
- (void)gameCenterLogin;

/**
*  上传分数给 GameCenter，但是GameCenter必须要先登录
*  @param score   分数值为64位整数。
*/
- (void)saveHighScoreToGameCenter:(NSInteger) score;

/**
*  上传成就，但是GameCenter必须要先登录
*  @param percent   完成的成就百分比。
*/
- (void)uploadAchievmentToGameCenterPercentComplete:(float) percent;

/**
*  添加本地定时推送通知
*  @param noticeId   唯一标识
*  @param title   通知标题
*  @param message   通知内容
*  @param delayTime   延时推送的时间（秒）
*  @param imageURL   图片URL
*  @param repeats   是否重复推送, 如果重复的话时间必须大于60s
*  @param action   通知指定的行为操作
*/
- (void)addNotificationTaskWithID:(NSString *)noticeId Title:(NSString *)title Message:(NSString *)message Delay:(int)delayTime ImageURL:(NSString *)imageURL Repeats:(BOOL)repeats NotificationDoAction:(NotificationAction *)action Completion:(void (^)(BOOL isSuccess))completion;

/**
*  取消某个本地定时推送通知接口
*  @param noticeId   唯一标识
*/
- (void)cancelNotificationTaskWithID:(NSString *)noticeId;

/**
*  取消所有本地定时推送通知接口
*/
- (void)cancelAllNotification;

/**
*  讯息获取接口
*  @param currentLocation  当前所处位置：1 游戏大厅  2 一场游戏后
*  @param completion  讯息接口回调，返回了弹框的信息内容
*/
- (void)popAlertMessageGameLocation:(NSInteger)currentLocation Completion:(void (^)( AlertMessage * __nullable message))completion;

- (NSString *)valueForConfigsKeyName:(NSString * __nonnull)keyName;

- (void)popTopTips:(NSString *)tips;

/**
*  用户头像
*/
- (NSString *)userProfileImage;

/**
*  客服系统
*/
- (void)openCustomerServiceSystem;

@end

NS_ASSUME_NONNULL_END

