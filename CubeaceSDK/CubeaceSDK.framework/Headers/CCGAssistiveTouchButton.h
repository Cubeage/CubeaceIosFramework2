//
//  CCGAssistiveTouchButton.h
//  CrazyCudeGameDemo
//
//  Created by Cubeage on 2019/4/15.
//  Copyright © 2019 Cubeage. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

typedef void(^ChildBtnOnClick)(NSInteger index);

@interface CCGAssistiveTouchButton : UIButton

- (instancetype)initWithFrame:(CGRect)frame addWindow:(UIWindow *)window ChildBtnOnClick:(ChildBtnOnClick)clickEvent;

- (void)popTopTipsTitle:(NSString *)contentStr;

- (void)refreshButtonIconImageWithIndexs:(NSArray *)redDotIndexsArray;

- (void)refreshButtonTitle;

- (void)removeButton;

@end

NS_ASSUME_NONNULL_END
