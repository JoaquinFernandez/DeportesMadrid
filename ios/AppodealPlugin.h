//
//  AppodealPlugin.h
//
//
//  Created by Denis on 26.05.16.
//
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import "React/RCTBridge.h"
#import "React/RCTEventDispatcher.h"
#import <Appodeal/Appodeal.h>

@interface AppodealPlugin : NSObject <RCTBridgeModule, AppodealBannerDelegate, AppodealInterstitialDelegate, AppodealRewardedVideoDelegate, AppodealNonSkippableVideoDelegate, AppodealSkippableVideoDelegate>

@end
