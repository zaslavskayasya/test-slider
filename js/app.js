var mySlider = new AnyImageComparisonSlider(document.getElementById('com'),{

    // or 'vertical'
    orientation: 'vertical',
    
    // initial position
    initialPosition: 0.00,
    
    // slider width
    width: '100%',
    
    // background color
    backgroundColor: 'none',
    
    // manually compare images with click and drag
    onPointerDown: false,
    
    // custom cursor on hover
    cursor: 'ew-resize',
    
    // customize the dividing line
    dividingLine: 'solid 1px rgba(255, 255, 255, .5)',
    
    // you can enter values from 0 to 100 to control the easing
    followEasingFactor: 0,
    
    // enable interactive 
    interactive: true,
    
    // config automatic animation
    autoautoAnimation: true,
    autoAnimationSpeed: 2,
    autoAnimationPause: 0.3,
    autoAnimationEasing: 'inOutCubic',
    
    // useful for multiple instances
    controlOthers: false,
    controlledByOthers: false,
    controlledByOthersReverse: false,
    
    // slider group name
    group: '',
    
    // synchronize your sliders
    groupSync: false,
    
    // or 'eager'
    loading: 'lazy',
    
    // offset in pixels
    viewportOffset: '100px',
    
    // whether your slider should only be active/rendered if it is in the viewport
    sleepMode: true,
    
    // callback
    onReady: function(){}
    
    });