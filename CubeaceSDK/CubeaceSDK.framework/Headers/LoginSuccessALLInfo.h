//
//  LoginSuccessUserInfo.h
//  CubeaceSDK
//
//  Created by Cubeace on 2020/3/24.
//  Copyright © 2020 Cubeage. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface LoginSuccessALLInfo : NSObject

+ (instancetype)sharedInstance;

@property (nonatomic, copy)NSString                 *accessTokenStr;
@property (nonatomic, copy)NSString                 *accountNameStr;
@property (nonatomic, copy)NSString                 *accountScoreStr;
@property (nonatomic, copy)NSString                 *avatarStr;
@property (nonatomic, copy)NSString                 *defaultGameUserIdStr;
@property (nonatomic, copy)NSString                 *emailStr;
@property (nonatomic, copy)NSArray                  *gameUserIds;
@property (nonatomic, copy)NSString                 *isGuestStr;
@property (nonatomic, copy)NSString                 *isNewUserStr;
@property (nonatomic, copy)NSString                 *languageTypeStr;
@property (nonatomic, copy)NSString                 *payTokenStr;
@property (nonatomic, copy)NSString                 *phoneStr;
@property (nonatomic, copy)NSString                 *refreshTokenStr;
@property (nonatomic, copy)NSString                 *signInTokenStr;
@property (nonatomic, copy)NSString                 *userIdStr;
@property (nonatomic, copy)NSString                 *userNameStr;

@property (nonatomic, copy)NSString                 *userloginSuccessDate; //用户登录成功的时间戳

@property (nonatomic, copy)NSArray                  *gameMessageList; //訊息列表

@property (nonatomic, assign)BOOL                   isLogin; //是否已登录

@end

NS_ASSUME_NONNULL_END
