//
//  RNKeyEvent.m
//  RNKeyEvent
//
//  Created by Kamal Mahyuddin on 1/4/2018.
//  Copyright (c) 2018 Envoy. All rights reserved.
//

#import "RNKeyEvent.h"

@implementation RNKeyEvent

- (void)emitOnKeyUpEvent:(NSNumber *)keyCode
{
    if (self.hasListeners) {
        [self sendEventWithName:@"onKeyUp" body:@{@"keyCode": keyCode}];
    }
}

- (instancetype)init
{
    self = [super init];
    if (self) {
        __weak typeof(self) weakSelf = self;
        self.volumeHandler = [JPSVolumeButtonHandler volumeButtonHandlerWithUpBlock:^{
            [weakSelf emitOnKeyUpEvent:[NSNumber numberWithInt:24]];
        } downBlock:^{
            [weakSelf emitOnKeyUpEvent:[NSNumber numberWithInt:25]];
        }];
    }
    return self;
}

- (NSArray<NSString *> *)supportedEvents
{
    return @[@"onKeyUp"];
}

RCT_EXPORT_MODULE();

- (void)startObserving {
    self.hasListeners = YES;
    [self.volumeHandler startHandler:YES];
}

- (void)stopObserving {
    self.hasListeners = NO;
    [self.volumeHandler stopHandler];
}

+ (BOOL)requiresMainQueueSetup
{
    return YES;
}

@end

