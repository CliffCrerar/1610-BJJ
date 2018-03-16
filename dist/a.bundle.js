/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/vendors/imagesloaded/imagesloaded.pkgd.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/vendors/imagesloaded/imagesloaded.pkgd.js":
/*!**************************************************************!*\
  !*** ./src/assets/vendors/imagesloaded/imagesloaded.pkgd.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_LOCAL_MODULE_0__, __WEBPACK_LOCAL_MODULE_0__factory, __WEBPACK_LOCAL_MODULE_0__module;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * imagesLoaded PACKAGED v4.1.2
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

/**
 * EvEmitter v1.0.3
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_LOCAL_MODULE_0__factory = (factory), (__WEBPACK_LOCAL_MODULE_0__module = { id: "ev-emitter/ev-emitter", exports: {}, loaded: false }), __WEBPACK_LOCAL_MODULE_0__ = (typeof __WEBPACK_LOCAL_MODULE_0__factory === 'function' ? (__WEBPACK_LOCAL_MODULE_0__factory.call(__WEBPACK_LOCAL_MODULE_0__module.exports, __webpack_require__, __WEBPACK_LOCAL_MODULE_0__module.exports, __WEBPACK_LOCAL_MODULE_0__module)) : __WEBPACK_LOCAL_MODULE_0__factory), (__WEBPACK_LOCAL_MODULE_0__module.loaded = true), __WEBPACK_LOCAL_MODULE_0__ === undefined && (__WEBPACK_LOCAL_MODULE_0__ = __WEBPACK_LOCAL_MODULE_0__module.exports));
  } else {}

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var i = 0;
  var listener = listeners[i];
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  while ( listener ) {
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
    // get next listener
    i += isOnce ? 0 : 1;
    listener = listeners[i];
  }

  return this;
};

return EvEmitter;

}));

/*!
 * imagesLoaded v4.1.2
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __WEBPACK_LOCAL_MODULE_0__
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter ) {
      return factory( window, EvEmitter );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {



var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0; i < obj.length; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  if ( typeof elem == 'string' ) {
    elem = document.querySelectorAll( elem );
  }

  this.elements = makeArray( elem );
  this.options = extend( {}, this.options );

  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( function() {
    this.check();
  }.bind( this ));
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  return this.img.complete && this.img.naturalWidth !== undefined;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy92ZW5kb3JzL2ltYWdlc2xvYWRlZC9pbWFnZXNsb2FkZWQucGtnZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O29HQ25FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxRQU1IOztBQUVBLENBQUM7Ozs7QUFJRDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0I7QUFDL0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUFBO0FBQ0wsR0FBRyxRQVlIOztBQUVBLENBQUM7O0FBRUQ7O0FBRUE7Ozs7QUFJQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsV0FBVyxpQ0FBaUM7QUFDNUMsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsS0FBSztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxxQkFBcUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDIiwiZmlsZSI6ImEuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2Fzc2V0cy92ZW5kb3JzL2ltYWdlc2xvYWRlZC9pbWFnZXNsb2FkZWQucGtnZC5qc1wiKTtcbiIsIi8qIVxyXG4gKiBpbWFnZXNMb2FkZWQgUEFDS0FHRUQgdjQuMS4yXHJcbiAqIEphdmFTY3JpcHQgaXMgYWxsIGxpa2UgXCJZb3UgaW1hZ2VzIGFyZSBkb25lIHlldCBvciB3aGF0P1wiXHJcbiAqIE1JVCBMaWNlbnNlXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEV2RW1pdHRlciB2MS4wLjNcclxuICogTGlsJyBldmVudCBlbWl0dGVyXHJcbiAqIE1JVCBMaWNlbnNlXHJcbiAqL1xyXG5cclxuLyoganNoaW50IHVudXNlZDogdHJ1ZSwgdW5kZWY6IHRydWUsIHN0cmljdDogdHJ1ZSAqL1xyXG5cclxuKCBmdW5jdGlvbiggZ2xvYmFsLCBmYWN0b3J5ICkge1xyXG4gIC8vIHVuaXZlcnNhbCBtb2R1bGUgZGVmaW5pdGlvblxyXG4gIC8qIGpzaGludCBzdHJpY3Q6IGZhbHNlICovIC8qIGdsb2JhbHMgZGVmaW5lLCBtb2R1bGUsIHdpbmRvdyAqL1xyXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XHJcbiAgICAvLyBBTUQgLSBSZXF1aXJlSlNcclxuICAgIGRlZmluZSggJ2V2LWVtaXR0ZXIvZXYtZW1pdHRlcicsZmFjdG9yeSApO1xyXG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMgKSB7XHJcbiAgICAvLyBDb21tb25KUyAtIEJyb3dzZXJpZnksIFdlYnBhY2tcclxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBCcm93c2VyIGdsb2JhbHNcclxuICAgIGdsb2JhbC5FdkVtaXR0ZXIgPSBmYWN0b3J5KCk7XHJcbiAgfVxyXG5cclxufSggdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCkge1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBFdkVtaXR0ZXIoKSB7fVxyXG5cclxudmFyIHByb3RvID0gRXZFbWl0dGVyLnByb3RvdHlwZTtcclxuXHJcbnByb3RvLm9uID0gZnVuY3Rpb24oIGV2ZW50TmFtZSwgbGlzdGVuZXIgKSB7XHJcbiAgaWYgKCAhZXZlbnROYW1lIHx8ICFsaXN0ZW5lciApIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLy8gc2V0IGV2ZW50cyBoYXNoXHJcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cyA9IHRoaXMuX2V2ZW50cyB8fCB7fTtcclxuICAvLyBzZXQgbGlzdGVuZXJzIGFycmF5XHJcbiAgdmFyIGxpc3RlbmVycyA9IGV2ZW50c1sgZXZlbnROYW1lIF0gPSBldmVudHNbIGV2ZW50TmFtZSBdIHx8IFtdO1xyXG4gIC8vIG9ubHkgYWRkIG9uY2VcclxuICBpZiAoIGxpc3RlbmVycy5pbmRleE9mKCBsaXN0ZW5lciApID09IC0xICkge1xyXG4gICAgbGlzdGVuZXJzLnB1c2goIGxpc3RlbmVyICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbnByb3RvLm9uY2UgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBsaXN0ZW5lciApIHtcclxuICBpZiAoICFldmVudE5hbWUgfHwgIWxpc3RlbmVyICkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvLyBhZGQgZXZlbnRcclxuICB0aGlzLm9uKCBldmVudE5hbWUsIGxpc3RlbmVyICk7XHJcbiAgLy8gc2V0IG9uY2UgZmxhZ1xyXG4gIC8vIHNldCBvbmNlRXZlbnRzIGhhc2hcclxuICB2YXIgb25jZUV2ZW50cyA9IHRoaXMuX29uY2VFdmVudHMgPSB0aGlzLl9vbmNlRXZlbnRzIHx8IHt9O1xyXG4gIC8vIHNldCBvbmNlTGlzdGVuZXJzIG9iamVjdFxyXG4gIHZhciBvbmNlTGlzdGVuZXJzID0gb25jZUV2ZW50c1sgZXZlbnROYW1lIF0gPSBvbmNlRXZlbnRzWyBldmVudE5hbWUgXSB8fCB7fTtcclxuICAvLyBzZXQgZmxhZ1xyXG4gIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF0gPSB0cnVlO1xyXG5cclxuICByZXR1cm4gdGhpcztcclxufTtcclxuXHJcbnByb3RvLm9mZiA9IGZ1bmN0aW9uKCBldmVudE5hbWUsIGxpc3RlbmVyICkge1xyXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcclxuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHZhciBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKCBsaXN0ZW5lciApO1xyXG4gIGlmICggaW5kZXggIT0gLTEgKSB7XHJcbiAgICBsaXN0ZW5lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRoaXM7XHJcbn07XHJcblxyXG5wcm90by5lbWl0RXZlbnQgPSBmdW5jdGlvbiggZXZlbnROYW1lLCBhcmdzICkge1xyXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHMgJiYgdGhpcy5fZXZlbnRzWyBldmVudE5hbWUgXTtcclxuICBpZiAoICFsaXN0ZW5lcnMgfHwgIWxpc3RlbmVycy5sZW5ndGggKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHZhciBpID0gMDtcclxuICB2YXIgbGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XHJcbiAgYXJncyA9IGFyZ3MgfHwgW107XHJcbiAgLy8gb25jZSBzdHVmZlxyXG4gIHZhciBvbmNlTGlzdGVuZXJzID0gdGhpcy5fb25jZUV2ZW50cyAmJiB0aGlzLl9vbmNlRXZlbnRzWyBldmVudE5hbWUgXTtcclxuXHJcbiAgd2hpbGUgKCBsaXN0ZW5lciApIHtcclxuICAgIHZhciBpc09uY2UgPSBvbmNlTGlzdGVuZXJzICYmIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF07XHJcbiAgICBpZiAoIGlzT25jZSApIHtcclxuICAgICAgLy8gcmVtb3ZlIGxpc3RlbmVyXHJcbiAgICAgIC8vIHJlbW92ZSBiZWZvcmUgdHJpZ2dlciB0byBwcmV2ZW50IHJlY3Vyc2lvblxyXG4gICAgICB0aGlzLm9mZiggZXZlbnROYW1lLCBsaXN0ZW5lciApO1xyXG4gICAgICAvLyB1bnNldCBvbmNlIGZsYWdcclxuICAgICAgZGVsZXRlIG9uY2VMaXN0ZW5lcnNbIGxpc3RlbmVyIF07XHJcbiAgICB9XHJcbiAgICAvLyB0cmlnZ2VyIGxpc3RlbmVyXHJcbiAgICBsaXN0ZW5lci5hcHBseSggdGhpcywgYXJncyApO1xyXG4gICAgLy8gZ2V0IG5leHQgbGlzdGVuZXJcclxuICAgIGkgKz0gaXNPbmNlID8gMCA6IDE7XHJcbiAgICBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzO1xyXG59O1xyXG5cclxucmV0dXJuIEV2RW1pdHRlcjtcclxuXHJcbn0pKTtcclxuXHJcbi8qIVxyXG4gKiBpbWFnZXNMb2FkZWQgdjQuMS4yXHJcbiAqIEphdmFTY3JpcHQgaXMgYWxsIGxpa2UgXCJZb3UgaW1hZ2VzIGFyZSBkb25lIHlldCBvciB3aGF0P1wiXHJcbiAqIE1JVCBMaWNlbnNlXHJcbiAqL1xyXG5cclxuKCBmdW5jdGlvbiggd2luZG93LCBmYWN0b3J5ICkgeyAndXNlIHN0cmljdCc7XHJcbiAgLy8gdW5pdmVyc2FsIG1vZHVsZSBkZWZpbml0aW9uXHJcblxyXG4gIC8qZ2xvYmFsIGRlZmluZTogZmFsc2UsIG1vZHVsZTogZmFsc2UsIHJlcXVpcmU6IGZhbHNlICovXHJcblxyXG4gIGlmICggdHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgKSB7XHJcbiAgICAvLyBBTURcclxuICAgIGRlZmluZSggW1xyXG4gICAgICAnZXYtZW1pdHRlci9ldi1lbWl0dGVyJ1xyXG4gICAgXSwgZnVuY3Rpb24oIEV2RW1pdHRlciApIHtcclxuICAgICAgcmV0dXJuIGZhY3RvcnkoIHdpbmRvdywgRXZFbWl0dGVyICk7XHJcbiAgICB9KTtcclxuICB9IGVsc2UgaWYgKCB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzICkge1xyXG4gICAgLy8gQ29tbW9uSlNcclxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShcclxuICAgICAgd2luZG93LFxyXG4gICAgICByZXF1aXJlKCdldi1lbWl0dGVyJylcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIC8vIGJyb3dzZXIgZ2xvYmFsXHJcbiAgICB3aW5kb3cuaW1hZ2VzTG9hZGVkID0gZmFjdG9yeShcclxuICAgICAgd2luZG93LFxyXG4gICAgICB3aW5kb3cuRXZFbWl0dGVyXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn0pKCB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMsXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgZmFjdG9yeSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuZnVuY3Rpb24gZmFjdG9yeSggd2luZG93LCBFdkVtaXR0ZXIgKSB7XHJcblxyXG5cclxuXHJcbnZhciAkID0gd2luZG93LmpRdWVyeTtcclxudmFyIGNvbnNvbGUgPSB3aW5kb3cuY29uc29sZTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhlbHBlcnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbi8vIGV4dGVuZCBvYmplY3RzXHJcbmZ1bmN0aW9uIGV4dGVuZCggYSwgYiApIHtcclxuICBmb3IgKCB2YXIgcHJvcCBpbiBiICkge1xyXG4gICAgYVsgcHJvcCBdID0gYlsgcHJvcCBdO1xyXG4gIH1cclxuICByZXR1cm4gYTtcclxufVxyXG5cclxuLy8gdHVybiBlbGVtZW50IG9yIG5vZGVMaXN0IGludG8gYW4gYXJyYXlcclxuZnVuY3Rpb24gbWFrZUFycmF5KCBvYmogKSB7XHJcbiAgdmFyIGFyeSA9IFtdO1xyXG4gIGlmICggQXJyYXkuaXNBcnJheSggb2JqICkgKSB7XHJcbiAgICAvLyB1c2Ugb2JqZWN0IGlmIGFscmVhZHkgYW4gYXJyYXlcclxuICAgIGFyeSA9IG9iajtcclxuICB9IGVsc2UgaWYgKCB0eXBlb2Ygb2JqLmxlbmd0aCA9PSAnbnVtYmVyJyApIHtcclxuICAgIC8vIGNvbnZlcnQgbm9kZUxpc3QgdG8gYXJyYXlcclxuICAgIGZvciAoIHZhciBpPTA7IGkgPCBvYmoubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgIGFyeS5wdXNoKCBvYmpbaV0gKTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgLy8gYXJyYXkgb2Ygc2luZ2xlIGluZGV4XHJcbiAgICBhcnkucHVzaCggb2JqICk7XHJcbiAgfVxyXG4gIHJldHVybiBhcnk7XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGltYWdlc0xvYWRlZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAvL1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7QXJyYXksIEVsZW1lbnQsIE5vZGVMaXN0LCBTdHJpbmd9IGVsZW1cclxuICogQHBhcmFtIHtPYmplY3Qgb3IgRnVuY3Rpb259IG9wdGlvbnMgLSBpZiBmdW5jdGlvbiwgdXNlIGFzIGNhbGxiYWNrXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQWx3YXlzIC0gY2FsbGJhY2sgZnVuY3Rpb25cclxuICovXHJcbmZ1bmN0aW9uIEltYWdlc0xvYWRlZCggZWxlbSwgb3B0aW9ucywgb25BbHdheXMgKSB7XHJcbiAgLy8gY29lcmNlIEltYWdlc0xvYWRlZCgpIHdpdGhvdXQgbmV3LCB0byBiZSBuZXcgSW1hZ2VzTG9hZGVkKClcclxuICBpZiAoICEoIHRoaXMgaW5zdGFuY2VvZiBJbWFnZXNMb2FkZWQgKSApIHtcclxuICAgIHJldHVybiBuZXcgSW1hZ2VzTG9hZGVkKCBlbGVtLCBvcHRpb25zLCBvbkFsd2F5cyApO1xyXG4gIH1cclxuICAvLyB1c2UgZWxlbSBhcyBzZWxlY3RvciBzdHJpbmdcclxuICBpZiAoIHR5cGVvZiBlbGVtID09ICdzdHJpbmcnICkge1xyXG4gICAgZWxlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoIGVsZW0gKTtcclxuICB9XHJcblxyXG4gIHRoaXMuZWxlbWVudHMgPSBtYWtlQXJyYXkoIGVsZW0gKTtcclxuICB0aGlzLm9wdGlvbnMgPSBleHRlbmQoIHt9LCB0aGlzLm9wdGlvbnMgKTtcclxuXHJcbiAgaWYgKCB0eXBlb2Ygb3B0aW9ucyA9PSAnZnVuY3Rpb24nICkge1xyXG4gICAgb25BbHdheXMgPSBvcHRpb25zO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBleHRlbmQoIHRoaXMub3B0aW9ucywgb3B0aW9ucyApO1xyXG4gIH1cclxuXHJcbiAgaWYgKCBvbkFsd2F5cyApIHtcclxuICAgIHRoaXMub24oICdhbHdheXMnLCBvbkFsd2F5cyApO1xyXG4gIH1cclxuXHJcbiAgdGhpcy5nZXRJbWFnZXMoKTtcclxuXHJcbiAgaWYgKCAkICkge1xyXG4gICAgLy8gYWRkIGpRdWVyeSBEZWZlcnJlZCBvYmplY3RcclxuICAgIHRoaXMuanFEZWZlcnJlZCA9IG5ldyAkLkRlZmVycmVkKCk7XHJcbiAgfVxyXG5cclxuICAvLyBIQUNLIGNoZWNrIGFzeW5jIHRvIGFsbG93IHRpbWUgdG8gYmluZCBsaXN0ZW5lcnNcclxuICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuY2hlY2soKTtcclxuICB9LmJpbmQoIHRoaXMgKSk7XHJcbn1cclxuXHJcbkltYWdlc0xvYWRlZC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKCBFdkVtaXR0ZXIucHJvdG90eXBlICk7XHJcblxyXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLm9wdGlvbnMgPSB7fTtcclxuXHJcbkltYWdlc0xvYWRlZC5wcm90b3R5cGUuZ2V0SW1hZ2VzID0gZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5pbWFnZXMgPSBbXTtcclxuXHJcbiAgLy8gZmlsdGVyICYgZmluZCBpdGVtcyBpZiB3ZSBoYXZlIGFuIGl0ZW0gc2VsZWN0b3JcclxuICB0aGlzLmVsZW1lbnRzLmZvckVhY2goIHRoaXMuYWRkRWxlbWVudEltYWdlcywgdGhpcyApO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7Tm9kZX0gZWxlbWVudFxyXG4gKi9cclxuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5hZGRFbGVtZW50SW1hZ2VzID0gZnVuY3Rpb24oIGVsZW0gKSB7XHJcbiAgLy8gZmlsdGVyIHNpYmxpbmdzXHJcbiAgaWYgKCBlbGVtLm5vZGVOYW1lID09ICdJTUcnICkge1xyXG4gICAgdGhpcy5hZGRJbWFnZSggZWxlbSApO1xyXG4gIH1cclxuICAvLyBnZXQgYmFja2dyb3VuZCBpbWFnZSBvbiBlbGVtZW50XHJcbiAgaWYgKCB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCA9PT0gdHJ1ZSApIHtcclxuICAgIHRoaXMuYWRkRWxlbWVudEJhY2tncm91bmRJbWFnZXMoIGVsZW0gKTtcclxuICB9XHJcblxyXG4gIC8vIGZpbmQgY2hpbGRyZW5cclxuICAvLyBubyBub24tZWxlbWVudCBub2RlcywgIzE0M1xyXG4gIHZhciBub2RlVHlwZSA9IGVsZW0ubm9kZVR5cGU7XHJcbiAgaWYgKCAhbm9kZVR5cGUgfHwgIWVsZW1lbnROb2RlVHlwZXNbIG5vZGVUeXBlIF0gKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHZhciBjaGlsZEltZ3MgPSBlbGVtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpO1xyXG4gIC8vIGNvbmNhdCBjaGlsZEVsZW1zIHRvIGZpbHRlckZvdW5kIGFycmF5XHJcbiAgZm9yICggdmFyIGk9MDsgaSA8IGNoaWxkSW1ncy5sZW5ndGg7IGkrKyApIHtcclxuICAgIHZhciBpbWcgPSBjaGlsZEltZ3NbaV07XHJcbiAgICB0aGlzLmFkZEltYWdlKCBpbWcgKTtcclxuICB9XHJcblxyXG4gIC8vIGdldCBjaGlsZCBiYWNrZ3JvdW5kIGltYWdlc1xyXG4gIGlmICggdHlwZW9mIHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kID09ICdzdHJpbmcnICkge1xyXG4gICAgdmFyIGNoaWxkcmVuID0gZWxlbS5xdWVyeVNlbGVjdG9yQWxsKCB0aGlzLm9wdGlvbnMuYmFja2dyb3VuZCApO1xyXG4gICAgZm9yICggaT0wOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKysgKSB7XHJcbiAgICAgIHZhciBjaGlsZCA9IGNoaWxkcmVuW2ldO1xyXG4gICAgICB0aGlzLmFkZEVsZW1lbnRCYWNrZ3JvdW5kSW1hZ2VzKCBjaGlsZCApO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbnZhciBlbGVtZW50Tm9kZVR5cGVzID0ge1xyXG4gIDE6IHRydWUsXHJcbiAgOTogdHJ1ZSxcclxuICAxMTogdHJ1ZVxyXG59O1xyXG5cclxuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5hZGRFbGVtZW50QmFja2dyb3VuZEltYWdlcyA9IGZ1bmN0aW9uKCBlbGVtICkge1xyXG4gIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoIGVsZW0gKTtcclxuICBpZiAoICFzdHlsZSApIHtcclxuICAgIC8vIEZpcmVmb3ggcmV0dXJucyBudWxsIGlmIGluIGEgaGlkZGVuIGlmcmFtZSBodHRwczovL2J1Z3ppbC5sYS81NDgzOTdcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLy8gZ2V0IHVybCBpbnNpZGUgdXJsKFwiLi4uXCIpXHJcbiAgdmFyIHJlVVJMID0gL3VybFxcKChbJ1wiXSk/KC4qPylcXDFcXCkvZ2k7XHJcbiAgdmFyIG1hdGNoZXMgPSByZVVSTC5leGVjKCBzdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgKTtcclxuICB3aGlsZSAoIG1hdGNoZXMgIT09IG51bGwgKSB7XHJcbiAgICB2YXIgdXJsID0gbWF0Y2hlcyAmJiBtYXRjaGVzWzJdO1xyXG4gICAgaWYgKCB1cmwgKSB7XHJcbiAgICAgIHRoaXMuYWRkQmFja2dyb3VuZCggdXJsLCBlbGVtICk7XHJcbiAgICB9XHJcbiAgICBtYXRjaGVzID0gcmVVUkwuZXhlYyggc3R5bGUuYmFja2dyb3VuZEltYWdlICk7XHJcbiAgfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7SW1hZ2V9IGltZ1xyXG4gKi9cclxuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5hZGRJbWFnZSA9IGZ1bmN0aW9uKCBpbWcgKSB7XHJcbiAgdmFyIGxvYWRpbmdJbWFnZSA9IG5ldyBMb2FkaW5nSW1hZ2UoIGltZyApO1xyXG4gIHRoaXMuaW1hZ2VzLnB1c2goIGxvYWRpbmdJbWFnZSApO1xyXG59O1xyXG5cclxuSW1hZ2VzTG9hZGVkLnByb3RvdHlwZS5hZGRCYWNrZ3JvdW5kID0gZnVuY3Rpb24oIHVybCwgZWxlbSApIHtcclxuICB2YXIgYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKCB1cmwsIGVsZW0gKTtcclxuICB0aGlzLmltYWdlcy5wdXNoKCBiYWNrZ3JvdW5kICk7XHJcbn07XHJcblxyXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgdmFyIF90aGlzID0gdGhpcztcclxuICB0aGlzLnByb2dyZXNzZWRDb3VudCA9IDA7XHJcbiAgdGhpcy5oYXNBbnlCcm9rZW4gPSBmYWxzZTtcclxuICAvLyBjb21wbGV0ZSBpZiBubyBpbWFnZXNcclxuICBpZiAoICF0aGlzLmltYWdlcy5sZW5ndGggKSB7XHJcbiAgICB0aGlzLmNvbXBsZXRlKCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBvblByb2dyZXNzKCBpbWFnZSwgZWxlbSwgbWVzc2FnZSApIHtcclxuICAgIC8vIEhBQ0sgLSBDaHJvbWUgdHJpZ2dlcnMgZXZlbnQgYmVmb3JlIG9iamVjdCBwcm9wZXJ0aWVzIGhhdmUgY2hhbmdlZC4gIzgzXHJcbiAgICBzZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcclxuICAgICAgX3RoaXMucHJvZ3Jlc3MoIGltYWdlLCBlbGVtLCBtZXNzYWdlICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHRoaXMuaW1hZ2VzLmZvckVhY2goIGZ1bmN0aW9uKCBsb2FkaW5nSW1hZ2UgKSB7XHJcbiAgICBsb2FkaW5nSW1hZ2Uub25jZSggJ3Byb2dyZXNzJywgb25Qcm9ncmVzcyApO1xyXG4gICAgbG9hZGluZ0ltYWdlLmNoZWNrKCk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5JbWFnZXNMb2FkZWQucHJvdG90eXBlLnByb2dyZXNzID0gZnVuY3Rpb24oIGltYWdlLCBlbGVtLCBtZXNzYWdlICkge1xyXG4gIHRoaXMucHJvZ3Jlc3NlZENvdW50Kys7XHJcbiAgdGhpcy5oYXNBbnlCcm9rZW4gPSB0aGlzLmhhc0FueUJyb2tlbiB8fCAhaW1hZ2UuaXNMb2FkZWQ7XHJcbiAgLy8gcHJvZ3Jlc3MgZXZlbnRcclxuICB0aGlzLmVtaXRFdmVudCggJ3Byb2dyZXNzJywgWyB0aGlzLCBpbWFnZSwgZWxlbSBdICk7XHJcbiAgaWYgKCB0aGlzLmpxRGVmZXJyZWQgJiYgdGhpcy5qcURlZmVycmVkLm5vdGlmeSApIHtcclxuICAgIHRoaXMuanFEZWZlcnJlZC5ub3RpZnkoIHRoaXMsIGltYWdlICk7XHJcbiAgfVxyXG4gIC8vIGNoZWNrIGlmIGNvbXBsZXRlZFxyXG4gIGlmICggdGhpcy5wcm9ncmVzc2VkQ291bnQgPT0gdGhpcy5pbWFnZXMubGVuZ3RoICkge1xyXG4gICAgdGhpcy5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCB0aGlzLm9wdGlvbnMuZGVidWcgJiYgY29uc29sZSApIHtcclxuICAgIGNvbnNvbGUubG9nKCAncHJvZ3Jlc3M6ICcgKyBtZXNzYWdlLCBpbWFnZSwgZWxlbSApO1xyXG4gIH1cclxufTtcclxuXHJcbkltYWdlc0xvYWRlZC5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcclxuICB2YXIgZXZlbnROYW1lID0gdGhpcy5oYXNBbnlCcm9rZW4gPyAnZmFpbCcgOiAnZG9uZSc7XHJcbiAgdGhpcy5pc0NvbXBsZXRlID0gdHJ1ZTtcclxuICB0aGlzLmVtaXRFdmVudCggZXZlbnROYW1lLCBbIHRoaXMgXSApO1xyXG4gIHRoaXMuZW1pdEV2ZW50KCAnYWx3YXlzJywgWyB0aGlzIF0gKTtcclxuICBpZiAoIHRoaXMuanFEZWZlcnJlZCApIHtcclxuICAgIHZhciBqcU1ldGhvZCA9IHRoaXMuaGFzQW55QnJva2VuID8gJ3JlamVjdCcgOiAncmVzb2x2ZSc7XHJcbiAgICB0aGlzLmpxRGVmZXJyZWRbIGpxTWV0aG9kIF0oIHRoaXMgKTtcclxuICB9XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbmZ1bmN0aW9uIExvYWRpbmdJbWFnZSggaW1nICkge1xyXG4gIHRoaXMuaW1nID0gaW1nO1xyXG59XHJcblxyXG5Mb2FkaW5nSW1hZ2UucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggRXZFbWl0dGVyLnByb3RvdHlwZSApO1xyXG5cclxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5jaGVjayA9IGZ1bmN0aW9uKCkge1xyXG4gIC8vIElmIGNvbXBsZXRlIGlzIHRydWUgYW5kIGJyb3dzZXIgc3VwcG9ydHMgbmF0dXJhbCBzaXplcyxcclxuICAvLyB0cnkgdG8gY2hlY2sgZm9yIGltYWdlIHN0YXR1cyBtYW51YWxseS5cclxuICB2YXIgaXNDb21wbGV0ZSA9IHRoaXMuZ2V0SXNJbWFnZUNvbXBsZXRlKCk7XHJcbiAgaWYgKCBpc0NvbXBsZXRlICkge1xyXG4gICAgLy8gcmVwb3J0IGJhc2VkIG9uIG5hdHVyYWxXaWR0aFxyXG4gICAgdGhpcy5jb25maXJtKCB0aGlzLmltZy5uYXR1cmFsV2lkdGggIT09IDAsICduYXR1cmFsV2lkdGgnICk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvLyBJZiBub25lIG9mIHRoZSBjaGVja3MgYWJvdmUgbWF0Y2hlZCwgc2ltdWxhdGUgbG9hZGluZyBvbiBkZXRhY2hlZCBlbGVtZW50LlxyXG4gIHRoaXMucHJveHlJbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gIHRoaXMucHJveHlJbWFnZS5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcclxuICB0aGlzLnByb3h5SW1hZ2UuYWRkRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xyXG4gIC8vIGJpbmQgdG8gaW1hZ2UgYXMgd2VsbCBmb3IgRmlyZWZveC4gIzE5MVxyXG4gIHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcyApO1xyXG4gIHRoaXMuaW1nLmFkZEV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcclxuICB0aGlzLnByb3h5SW1hZ2Uuc3JjID0gdGhpcy5pbWcuc3JjO1xyXG59O1xyXG5cclxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5nZXRJc0ltYWdlQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gdGhpcy5pbWcuY29tcGxldGUgJiYgdGhpcy5pbWcubmF0dXJhbFdpZHRoICE9PSB1bmRlZmluZWQ7XHJcbn07XHJcblxyXG5Mb2FkaW5nSW1hZ2UucHJvdG90eXBlLmNvbmZpcm0gPSBmdW5jdGlvbiggaXNMb2FkZWQsIG1lc3NhZ2UgKSB7XHJcbiAgdGhpcy5pc0xvYWRlZCA9IGlzTG9hZGVkO1xyXG4gIHRoaXMuZW1pdEV2ZW50KCAncHJvZ3Jlc3MnLCBbIHRoaXMsIHRoaXMuaW1nLCBtZXNzYWdlIF0gKTtcclxufTtcclxuXHJcbi8vIC0tLS0tIGV2ZW50cyAtLS0tLSAvL1xyXG5cclxuLy8gdHJpZ2dlciBzcGVjaWZpZWQgaGFuZGxlciBmb3IgZXZlbnQgdHlwZVxyXG5Mb2FkaW5nSW1hZ2UucHJvdG90eXBlLmhhbmRsZUV2ZW50ID0gZnVuY3Rpb24oIGV2ZW50ICkge1xyXG4gIHZhciBtZXRob2QgPSAnb24nICsgZXZlbnQudHlwZTtcclxuICBpZiAoIHRoaXNbIG1ldGhvZCBdICkge1xyXG4gICAgdGhpc1sgbWV0aG9kIF0oIGV2ZW50ICk7XHJcbiAgfVxyXG59O1xyXG5cclxuTG9hZGluZ0ltYWdlLnByb3RvdHlwZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICB0aGlzLmNvbmZpcm0oIHRydWUsICdvbmxvYWQnICk7XHJcbiAgdGhpcy51bmJpbmRFdmVudHMoKTtcclxufTtcclxuXHJcbkxvYWRpbmdJbWFnZS5wcm90b3R5cGUub25lcnJvciA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuY29uZmlybSggZmFsc2UsICdvbmVycm9yJyApO1xyXG4gIHRoaXMudW5iaW5kRXZlbnRzKCk7XHJcbn07XHJcblxyXG5Mb2FkaW5nSW1hZ2UucHJvdG90eXBlLnVuYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMucHJveHlJbWFnZS5yZW1vdmVFdmVudExpc3RlbmVyKCAnbG9hZCcsIHRoaXMgKTtcclxuICB0aGlzLnByb3h5SW1hZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xyXG4gIHRoaXMuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcyApO1xyXG4gIHRoaXMuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcclxufTtcclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIEJhY2tncm91bmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbmZ1bmN0aW9uIEJhY2tncm91bmQoIHVybCwgZWxlbWVudCApIHtcclxuICB0aGlzLnVybCA9IHVybDtcclxuICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIHRoaXMuaW1nID0gbmV3IEltYWdlKCk7XHJcbn1cclxuXHJcbi8vIGluaGVyaXQgTG9hZGluZ0ltYWdlIHByb3RvdHlwZVxyXG5CYWNrZ3JvdW5kLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoIExvYWRpbmdJbWFnZS5wcm90b3R5cGUgKTtcclxuXHJcbkJhY2tncm91bmQucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCB0aGlzICk7XHJcbiAgdGhpcy5pbWcuYWRkRXZlbnRMaXN0ZW5lciggJ2Vycm9yJywgdGhpcyApO1xyXG4gIHRoaXMuaW1nLnNyYyA9IHRoaXMudXJsO1xyXG4gIC8vIGNoZWNrIGlmIGltYWdlIGlzIGFscmVhZHkgY29tcGxldGVcclxuICB2YXIgaXNDb21wbGV0ZSA9IHRoaXMuZ2V0SXNJbWFnZUNvbXBsZXRlKCk7XHJcbiAgaWYgKCBpc0NvbXBsZXRlICkge1xyXG4gICAgdGhpcy5jb25maXJtKCB0aGlzLmltZy5uYXR1cmFsV2lkdGggIT09IDAsICduYXR1cmFsV2lkdGgnICk7XHJcbiAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xyXG4gIH1cclxufTtcclxuXHJcbkJhY2tncm91bmQucHJvdG90eXBlLnVuYmluZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdsb2FkJywgdGhpcyApO1xyXG4gIHRoaXMuaW1nLnJlbW92ZUV2ZW50TGlzdGVuZXIoICdlcnJvcicsIHRoaXMgKTtcclxufTtcclxuXHJcbkJhY2tncm91bmQucHJvdG90eXBlLmNvbmZpcm0gPSBmdW5jdGlvbiggaXNMb2FkZWQsIG1lc3NhZ2UgKSB7XHJcbiAgdGhpcy5pc0xvYWRlZCA9IGlzTG9hZGVkO1xyXG4gIHRoaXMuZW1pdEV2ZW50KCAncHJvZ3Jlc3MnLCBbIHRoaXMsIHRoaXMuZWxlbWVudCwgbWVzc2FnZSBdICk7XHJcbn07XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBqUXVlcnkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbkltYWdlc0xvYWRlZC5tYWtlSlF1ZXJ5UGx1Z2luID0gZnVuY3Rpb24oIGpRdWVyeSApIHtcclxuICBqUXVlcnkgPSBqUXVlcnkgfHwgd2luZG93LmpRdWVyeTtcclxuICBpZiAoICFqUXVlcnkgKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8vIHNldCBsb2NhbCB2YXJpYWJsZVxyXG4gICQgPSBqUXVlcnk7XHJcbiAgLy8gJCgpLmltYWdlc0xvYWRlZCgpXHJcbiAgJC5mbi5pbWFnZXNMb2FkZWQgPSBmdW5jdGlvbiggb3B0aW9ucywgY2FsbGJhY2sgKSB7XHJcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgSW1hZ2VzTG9hZGVkKCB0aGlzLCBvcHRpb25zLCBjYWxsYmFjayApO1xyXG4gICAgcmV0dXJuIGluc3RhbmNlLmpxRGVmZXJyZWQucHJvbWlzZSggJCh0aGlzKSApO1xyXG4gIH07XHJcbn07XHJcbi8vIHRyeSBtYWtpbmcgcGx1Z2luXHJcbkltYWdlc0xvYWRlZC5tYWtlSlF1ZXJ5UGx1Z2luKCk7XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gLy9cclxuXHJcbnJldHVybiBJbWFnZXNMb2FkZWQ7XHJcblxyXG59KTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=