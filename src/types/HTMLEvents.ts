import {
    ClipboardEventHandler,
    CompositionEventHandler,
    FocusEventHandler,
    FormEventHandler,
    KeyboardEventHandler,
    ReactEventHandler,
    PointerEventHandler,
    UIEventHandler,
    AnimationEventHandler,
    TransitionEventHandler,
    WheelEventHandler,
    MouseEventHandler,
    DragEventHandler,
    TouchEventHandler,
} from 'react';

type FallbackType = Element;
type ConstraintType = Element;

export type ClipboardEvents<T extends ConstraintType = FallbackType> = {
    onCopy?: ClipboardEventHandler<T>;
    onCopyCapture?: ClipboardEventHandler<T>;
    onCut?: ClipboardEventHandler<T>;
    onCutCapture?: ClipboardEventHandler<T>;
    onPaste?: ClipboardEventHandler<T>;
    onPasteCapture?: ClipboardEventHandler<T>;
};

export type CompositionEvents<T extends ConstraintType = FallbackType> = {
    onCompositionEnd?: CompositionEventHandler<T>;
    onCompositionEndCapture?: CompositionEventHandler<T>;
    onCompositionStart?: CompositionEventHandler<T>;
    onCompositionStartCapture?: CompositionEventHandler<T>;
    onCompositionUpdate?: CompositionEventHandler<T>;
    onCompositionUpdateCapture?: CompositionEventHandler<T>;
};

export type FocusEvents<T extends ConstraintType = FallbackType> = {
    onFocus?: FocusEventHandler<T>;
    onFocusCapture?: FocusEventHandler<T>;
    onBlur?: FocusEventHandler<T>;
    onBlurCapture?: FocusEventHandler<T>;
};

export type FormEvents<T extends ConstraintType = FallbackType> = {
    onChange?: FormEventHandler<T>;
    onChangeCapture?: FormEventHandler<T>;
    onBeforeInput?: FormEventHandler<T>;
    onBeforeInputCapture?: FormEventHandler<T>;
    onInput?: FormEventHandler<T>;
    onInputCapture?: FormEventHandler<T>;
    onReset?: FormEventHandler<T>;
    onResetCapture?: FormEventHandler<T>;
    onSubmit?: FormEventHandler<T>;
    onSubmitCapture?: FormEventHandler<T>;
    onInvalid?: FormEventHandler<T>;
    onInvalidCapture?: FormEventHandler<T>;
};

export type ImageEvents<T extends ConstraintType = FallbackType> = {
    onLoad?: ReactEventHandler<T>;
    onLoadCapture?: ReactEventHandler<T>;
    onError?: ReactEventHandler<T>; // also a Media Event
    onErrorCapture?: ReactEventHandler<T>; // also a Media Event
};
export type KeyboardEvents<T extends ConstraintType = FallbackType> = {
    onKeyDown?: KeyboardEventHandler<T>;
    onKeyDownCapture?: KeyboardEventHandler<T>;
    onKeyPress?: KeyboardEventHandler<T>;
    onKeyPressCapture?: KeyboardEventHandler<T>;
    onKeyUp?: KeyboardEventHandler<T>;
    onKeyUpCapture?: KeyboardEventHandler<T>;
};

export type MediaEvents<T extends ConstraintType = FallbackType> = {
    onAbort?: ReactEventHandler<T>;
    onAbortCapture?: ReactEventHandler<T>;
    onCanPlay?: ReactEventHandler<T>;
    onCanPlayCapture?: ReactEventHandler<T>;
    onCanPlayThrough?: ReactEventHandler<T>;
    onCanPlayThroughCapture?: ReactEventHandler<T>;
    onDurationChange?: ReactEventHandler<T>;
    onDurationChangeCapture?: ReactEventHandler<T>;
    onEmptied?: ReactEventHandler<T>;
    onEmptiedCapture?: ReactEventHandler<T>;
    onEncrypted?: ReactEventHandler<T>;
    onEncryptedCapture?: ReactEventHandler<T>;
    onEnded?: ReactEventHandler<T>;
    onEndedCapture?: ReactEventHandler<T>;
    onLoadedData?: ReactEventHandler<T>;
    onLoadedDataCapture?: ReactEventHandler<T>;
    onLoadedMetadata?: ReactEventHandler<T>;
    onLoadedMetadataCapture?: ReactEventHandler<T>;
    onLoadStart?: ReactEventHandler<T>;
    onLoadStartCapture?: ReactEventHandler<T>;
    onPause?: ReactEventHandler<T>;
    onPauseCapture?: ReactEventHandler<T>;
    onPlay?: ReactEventHandler<T>;
    onPlayCapture?: ReactEventHandler<T>;
    onPlaying?: ReactEventHandler<T>;
    onPlayingCapture?: ReactEventHandler<T>;
    onProgress?: ReactEventHandler<T>;
    onProgressCapture?: ReactEventHandler<T>;
    onRateChange?: ReactEventHandler<T>;
    onRateChangeCapture?: ReactEventHandler<T>;
    onSeeked?: ReactEventHandler<T>;
    onSeekedCapture?: ReactEventHandler<T>;
    onSeeking?: ReactEventHandler<T>;
    onSeekingCapture?: ReactEventHandler<T>;
    onStalled?: ReactEventHandler<T>;
    onStalledCapture?: ReactEventHandler<T>;
    onSuspend?: ReactEventHandler<T>;
    onSuspendCapture?: ReactEventHandler<T>;
    onTimeUpdate?: ReactEventHandler<T>;
    onTimeUpdateCapture?: ReactEventHandler<T>;
    onVolumeChange?: ReactEventHandler<T>;
    onVolumeChangeCapture?: ReactEventHandler<T>;
    onWaiting?: ReactEventHandler<T>;
    onWaitingCapture?: ReactEventHandler<T>;
};

export type MouseEvents<T extends ConstraintType = FallbackType> = {
    onAuxClick?: MouseEventHandler<T>;
    onAuxClickCapture?: MouseEventHandler<T>;
    onClick?: MouseEventHandler<T>;
    onClickCapture?: MouseEventHandler<T>;
    onContextMenu?: MouseEventHandler<T>;
    onContextMenuCapture?: MouseEventHandler<T>;
    onDoubleClick?: MouseEventHandler<T>;
    onDoubleClickCapture?: MouseEventHandler<T>;
    onDrag?: DragEventHandler<T>;
    onDragCapture?: DragEventHandler<T>;
    onDragEnd?: DragEventHandler<T>;
    onDragEndCapture?: DragEventHandler<T>;
    onDragEnter?: DragEventHandler<T>;
    onDragEnterCapture?: DragEventHandler<T>;
    onDragExit?: DragEventHandler<T>;
    onDragExitCapture?: DragEventHandler<T>;
    onDragLeave?: DragEventHandler<T>;
    onDragLeaveCapture?: DragEventHandler<T>;
    onDragOver?: DragEventHandler<T>;
    onDragOverCapture?: DragEventHandler<T>;
    onDragStart?: DragEventHandler<T>;
    onDragStartCapture?: DragEventHandler<T>;
    onDrop?: DragEventHandler<T>;
    onDropCapture?: DragEventHandler<T>;
    onMouseDown?: MouseEventHandler<T>;
    onMouseDownCapture?: MouseEventHandler<T>;
    onMouseEnter?: MouseEventHandler<T>;
    onMouseLeave?: MouseEventHandler<T>;
    onMouseMove?: MouseEventHandler<T>;
    onMouseMoveCapture?: MouseEventHandler<T>;
    onMouseOut?: MouseEventHandler<T>;
    onMouseOutCapture?: MouseEventHandler<T>;
    onMouseOver?: MouseEventHandler<T>;
    onMouseOverCapture?: MouseEventHandler<T>;
    onMouseUp?: MouseEventHandler<T>;
    onMouseUpCapture?: MouseEventHandler<T>;
};

export type SelectionEvents<T extends ConstraintType = FallbackType> = {
    onSelect?: ReactEventHandler<T>;
    onSelectCapture?: ReactEventHandler<T>;
};

export type TouchEvents<T extends ConstraintType = FallbackType> = {
    onTouchCancel?: TouchEventHandler<T>;
    onTouchCancelCapture?: TouchEventHandler<T>;
    onTouchEnd?: TouchEventHandler<T>;
    onTouchEndCapture?: TouchEventHandler<T>;
    onTouchMove?: TouchEventHandler<T>;
    onTouchMoveCapture?: TouchEventHandler<T>;
    onTouchStart?: TouchEventHandler<T>;
    onTouchStartCapture?: TouchEventHandler<T>;
};

export type PointerEvents<T extends ConstraintType = FallbackType> = {
    onPointerDown?: PointerEventHandler<T>;
    onPointerDownCapture?: PointerEventHandler<T>;
    onPointerMove?: PointerEventHandler<T>;
    onPointerMoveCapture?: PointerEventHandler<T>;
    onPointerUp?: PointerEventHandler<T>;
    onPointerUpCapture?: PointerEventHandler<T>;
    onPointerCancel?: PointerEventHandler<T>;
    onPointerCancelCapture?: PointerEventHandler<T>;
    onPointerEnter?: PointerEventHandler<T>;
    onPointerEnterCapture?: PointerEventHandler<T>;
    onPointerLeave?: PointerEventHandler<T>;
    onPointerLeaveCapture?: PointerEventHandler<T>;
    onPointerOver?: PointerEventHandler<T>;
    onPointerOverCapture?: PointerEventHandler<T>;
    onPointerOut?: PointerEventHandler<T>;
    onPointerOutCapture?: PointerEventHandler<T>;
    onGotPointerCapture?: PointerEventHandler<T>;
    onGotPointerCaptureCapture?: PointerEventHandler<T>;
    onLostPointerCapture?: PointerEventHandler<T>;
    onLostPointerCaptureCapture?: PointerEventHandler<T>;
};

export type ScrollEvents<T extends ConstraintType = FallbackType> = {
    onScroll?: UIEventHandler<T>;
    onScrollCapture?: UIEventHandler<T>;
};

export type WheelEvents<T extends ConstraintType = FallbackType> = {
    onWheel?: WheelEventHandler<T>;
    onWheelCapture?: WheelEventHandler<T>;
};

export type AnimationEvents<T extends ConstraintType = FallbackType> = {
    onAnimationStart?: AnimationEventHandler<T>;
    onAnimationStartCapture?: AnimationEventHandler<T>;
    onAnimationEnd?: AnimationEventHandler<T>;
    onAnimationEndCapture?: AnimationEventHandler<T>;
    onAnimationIteration?: AnimationEventHandler<T>;
    onAnimationIterationCapture?: AnimationEventHandler<T>;
};

export type TransitionEvents<T extends ConstraintType = FallbackType> = {
    onTransitionEnd?: TransitionEventHandler<T>;
    onTransitionEndCapture?: TransitionEventHandler<T>;
};
