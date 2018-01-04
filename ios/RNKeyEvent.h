//
//  RNKeyEvent.h
//  RNKeyEvent
//
//  Created by Kamal Mahyuddin on 1/4/2018.
//  Copyright (c) 2018 Envoy. All rights reserved.
//

#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import "JPSVolumeButtonHandler.h"

@interface RNKeyEvent : RCTEventEmitter <RCTBridgeModule>

@property (assign, nonatomic) BOOL hasListeners;
@property (strong, nonatomic) JPSVolumeButtonHandler *volumeHandler;

@end
