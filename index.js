import {
  DeviceEventEmitter,
  NativeEventEmitter,
  NativeModules,
  Platform,
} from 'react-native'
const { RNKeyEvent } = NativeModules

class KeyEvent {
  constructor(emitter) {
    this.emitter = emitter
  }

  onKeyDownListener(cb) {
    this.removeKeyDownListener()
    this.listenerKeyDown = this.emitter.addListener('onKeyDown', cb)
  }

  removeKeyDownListener() {
    if (this.listenerKeyDown) {
      this.listenerKeyDown.remove()
      this.listenerKeyDown = null
    }
  }

  onKeyUpListener(cb) {
    this.removeKeyUpListener()
    this.listenerKeyUp = this.emitter.addListener('onKeyUp', cb)
  }

  removeKeyUpListener() {
    if (this.listenerKeyUp) {
      this.listenerKeyUp.remove()
      this.listenerKeyUp = null
    }
  }

  onKeyMultipleListener(cb) {
    this.removeKeyMultipleListener()
    this.listenerKeyMultiple = this.emitter.addListener('onKeyMultiple', cb)
  }

  removeKeyMultipleListener() {
    if (this.listenerKeyMultiple) {
      this.listenerKeyMultiple.remove()
      this.listenerKeyMultiple = null
    }
  }
}

export const eventEmitter =
  Platform.OS === 'ios'
    ? new NativeEventEmitter(RNKeyEvent)
    : DeviceEventEmitter
export default new KeyEvent(eventEmitter)
