//
//  AlertMessage.h
//  CubeaceSDK
//
//  Created by Cubeace on 2020/3/30.
//  Copyright © 2020 Cubeage. All rights reserved.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface AlertMessage : NSObject

+ (instancetype)sharedInstance;

@property (nonatomic, copy)NSString  * title;
@property (nonatomic, copy)NSString  * content;

@property (nonatomic, copy)NSString  * leftButtonContent;
@property (nonatomic, assign)NSInteger   leftButtonType;
@property (nonatomic, assign)NSInteger   leftButtonAction;

@property (nonatomic, copy)NSString  * rightButtonContent;
@property (nonatomic, assign)NSInteger   rightButtonType;
@property (nonatomic, assign)NSInteger   rightButtonAction;

@property (nonatomic, copy)NSString  * appDownloadURL;
@property (nonatomic, assign)NSInteger   recommendGameId;

- (void)leftButtonOnClick;
- (void)rightButtonOnClick;

@end

NS_ASSUME_NONNULL_END
