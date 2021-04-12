/**
 * This is an auto-generated code by Monaca JS/CSS Components.
 * Please do not edit by hand.
 */

/*** <GENERATED> ***//*** <Start:monaca-jquery> ***/
/*** <Start:monaca-jquery LoadJs:"components/monaca-jquery/jquery.js"> ***/
/*!
 * jQuery JavaScript Library v2.0.3
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:30Z
 */
(function( window, undefined ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//"use strict";
var
	// A central reference to the root jQuery(document)
	rootjQuery,

	// The deferred used on DOM ready
	readyList,

	// Support: IE9
	// For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
	core_strundefined = typeof undefined,

	// Use the correct document accordingly with window argument (sandbox)
	location = window.location,
	document = window.document,
	docElem = document.documentElement,

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// [[Class]] -> type pairs
	class2type = {},

	// List of deleted data cache ids, so we can reuse them
	core_deletedIds = [],

	core_version = "2.0.3",

	// Save a reference to some core methods
	core_concat = core_deletedIds.concat,
	core_push = core_deletedIds.push,
	core_slice = core_deletedIds.slice,
	core_indexOf = core_deletedIds.indexOf,
	core_toString = class2type.toString,
	core_hasOwn = class2type.hasOwnProperty,
	core_trim = core_version.trim,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Used for matching numbers
	core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

	// Used for splitting on whitespace
	core_rnotwhite = /\S+/g,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	},

	// The ready event handler and self cleanup method
	completed = function() {
		document.removeEventListener( "DOMContentLoaded", completed, false );
		window.removeEventListener( "load", completed, false );
		jQuery.ready();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// scripts is true for back-compat
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return rootjQuery.ready( selector );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	},

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return core_slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num == null ?

			// Return a 'clean' array
			this.toArray() :

			// Return just the object
			( num < 0 ? this[ this.length + num ] : this[ num ] );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	ready: function( fn ) {
		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	},

	slice: function() {
		return this.pushStack( core_slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: core_push,
	sort: [].sort,
	splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( length === i ) {
		target = this;
		--i;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),

	noConflict: function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	},

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.trigger ) {
			jQuery( document ).trigger("ready").off("ready");
		}
	},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		return !isNaN( parseFloat(obj) ) && isFinite( obj );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return String( obj );
		}
		// Support: Safari <= 5.1 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ core_toString.call(obj) ] || "object" :
			typeof obj;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		// Support: Firefox <20
		// The try/catch suppresses exceptions thrown when attempting to access
		// the "constructor" property of certain host objects, ie. |window.location|
		// https://bugzilla.mozilla.org/show_bug.cgi?id=814622
		try {
			if ( obj.constructor &&
					!core_hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
		} catch ( e ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	error: function( msg ) {
		throw new Error( msg );
	},

	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	parseHTML: function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[1] ) ];
		}

		parsed = jQuery.buildFragment( [ data ], context, scripts );

		if ( scripts ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	},

	parseJSON: JSON.parse,

	// Cross-browser xml parsing
	parseXML: function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			tmp = new DOMParser();
			xml = tmp.parseFromString( data , "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	},

	noop: function() {},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
				indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	trim: function( text ) {
		return text == null ? "" : core_trim.call( text );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				core_push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : core_indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var l = second.length,
			i = first.length,
			j = 0;

		if ( typeof l === "number" ) {
			for ( ; j < l; j++ ) {
				first[ i++ ] = second[ j ];
			}
		} else {
			while ( second[j] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, inv ) {
		var retVal,
			ret = [],
			i = 0,
			length = elems.length;
		inv = !!inv;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			retVal = !!callback( elems[ i ], i );
			if ( inv !== retVal ) {
				ret.push( elems[ i ] );
			}
		}

		return ret;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret[ ret.length ] = value;
				}
			}
		}

		// Flatten any nested arrays
		return core_concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = core_slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[0], key ) : emptyGet;
	},

	now: Date.now,

	// A method for quickly swapping in/out CSS properties to get correct calculations.
	// Note: this method belongs to the css module but it's needed here for the support module.
	// If support gets modularized, this method should be moved back to the css module.
	swap: function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	}
});

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// we once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
	var length = obj.length,
		type = jQuery.type( obj );

	if ( jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || type !== "function" &&
		( length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj );
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);
/*!
 * Sizzle CSS Selector Engine v1.9.4-pre
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-06-03
 */
(function( window, undefined ) {

var i,
	support,
	cachedruns,
	Expr,
	getText,
	isXML,
	compile,
	outermostContext,
	sortInput,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + -(new Date()),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	hasDuplicate = false,
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}
		return 0;
	},

	// General-purpose constants
	strundefined = typeof undefined,
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf if we can't use a native one
	indexOf = arr.indexOf || function( elem ) {
		var i = 0,
			len = this.length;
		for ( ; i < len; i++ ) {
			if ( this[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
		"*(?:([*^$|!~]?=)" + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

	// Prefer arguments quoted,
	//   then not containing pseudos/brackets,
	//   then attribute selectors/non-parenthetical expressions,
	//   then anything else
	// These preferences are here to reduce the number of selectors
	//   needing tokenize in the PSEUDO preFilter
	pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rsibling = new RegExp( whitespace + "*[+~]" ),
	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			// BMP codepoint
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];

	if ( !selector || typeof selector !== "string" ) {
		return results;
	}

	if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
		return [];
	}

	if ( documentIsHTML && !seed ) {

		// Shortcuts
		if ( (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName && context.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType === 9 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && context.parentNode || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key += " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Detect xml
 * @param {Element|Object} elem An element or a document
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var doc = node ? node.ownerDocument || node : preferredDoc,
		parent = doc.defaultView;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;

	// Support tests
	documentIsHTML = !isXML( doc );

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent.attachEvent && parent !== parent.top ) {
		parent.attachEvent( "onbeforeunload", function() {
			setDocument();
		});
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Check if getElementsByClassName can be trusted
	support.getElementsByClassName = assert(function( div ) {
		div.innerHTML = "<div class='a'></div><div class='a i'></div>";

		// Support: Safari<4
		// Catch class over-caching
		div.firstChild.className = "i";
		// Support: Opera<10
		// Catch gEBCN failure to find non-leading classes
		return div.getElementsByClassName("i").length === 2;
	});

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== strundefined && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [m] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== strundefined ) {
				return context.getElementsByTagName( tag );
			}
		} :
		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== strundefined && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			div.innerHTML = "<select><option selected=''></option></select>";

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}
		});

		assert(function( div ) {

			// Support: Opera 10-12/IE8
			// ^= $= *= and empty values
			// Should not select anything
			// Support: Windows 8 Native Apps
			// The type attribute is restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "t", "" );

			if ( div.querySelectorAll("[t^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = rnative.test( docElem.contains ) || docElem.compareDocumentPosition ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = docElem.compareDocumentPosition ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b );

		if ( compare ) {
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === doc || contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === doc || contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		}

		// Not directly comparable, sort on existence of method
		return a.compareDocumentPosition ? -1 : 1;
	} :
	function( a, b ) {
		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;

		// Parentless nodes are either documents or disconnected
		} else if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch(e) {}
	}

	return Sizzle( expr, document, null, [elem] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val === undefined ?
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null :
		val;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		for ( ; (node = elem[i]); i++ ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (see #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[5] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] && match[4] !== undefined ) {
				match[2] = match[4];

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf.call( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
			//   not comment, processing instructions, or others
			// Thanks to Diego Perini for the nodeName shortcut
			//   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			// IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
			// use getAttribute instead to test this case
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( tokens = [] );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var data, cache, outerCache,
				dirkey = dirruns + " " + doneName;

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {
							if ( (data = cache[1]) === true || data === cachedruns ) {
								return data === true;
							}
						} else {
							cache = outerCache[ dir ] = [ dirkey ];
							cache[1] = matcher( elem, context, xml ) || cachedruns;
							if ( cache[1] === true ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	// A counter to specify which element is currently being matched
	var matcherCachedRuns = 0,
		bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, expandContext ) {
			var elem, j, matcher,
				setMatched = [],
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				outermost = expandContext != null,
				contextBackup = outermostContext,
				// We must always have either seed elements or context
				elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);

			if ( outermost ) {
				outermostContext = context !== document && context;
				cachedruns = matcherCachedRuns;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			for ( ; (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
						cachedruns = ++matcherCachedRuns;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !group ) {
			group = tokenize( selector );
		}
		i = group.length;
		while ( i-- ) {
			cached = matcherFromTokens( group[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	}
	return cached;
};

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function select( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		match = tokenize( selector );

	if ( !seed ) {
		// Try to minimize operations if there is only one group
		if ( match.length === 1 ) {

			// Take a shortcut and set the context if the root selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
				}
				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && context.parentNode || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}
	}

	// Compile and execute a filtering function
	// Provide `match` to avoid retokenization if we modified the selector above
	compile( selector, match )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector )
	);
	return results;
}

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return (val = elem.getAttributeNode( name )) && val.specified ?
				val.value :
				elem[ name ] === true ? name.toLowerCase() : null;
		}
	});
}

jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})( window );
// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};
jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var action = tuple[ 0 ],
								fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = core_slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
					if( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});
jQuery.support = (function( support ) {
	var input = document.createElement("input"),
		fragment = document.createDocumentFragment(),
		div = document.createElement("div"),
		select = document.createElement("select"),
		opt = select.appendChild( document.createElement("option") );

	// Finish early in limited environments
	if ( !input.type ) {
		return support;
	}

	input.type = "checkbox";

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// Check the default checkbox/radio value ("" on old WebKit; "on" elsewhere)
	support.checkOn = input.value !== "";

	// Must access the parent to make an option select properly
	// Support: IE9, IE10
	support.optSelected = opt.selected;

	// Will be defined later
	support.reliableMarginRight = true;
	support.boxSizingReliable = true;
	support.pixelPosition = false;

	// Make sure checked status is properly cloned
	// Support: IE9, IE10
	input.checked = true;
	support.noCloneChecked = input.cloneNode( true ).checked;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Check if an input maintains its value after becoming a radio
	// Support: IE9, IE10
	input = document.createElement("input");
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";

	// #11217 - WebKit loses check when the name is after the checked attribute
	input.setAttribute( "checked", "t" );
	input.setAttribute( "name", "t" );

	fragment.appendChild( input );

	// Support: Safari 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: Firefox, Chrome, Safari
	// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
	support.focusinBubbles = "onfocusin" in window;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	// Run tests that need a body at doc ready
	jQuery(function() {
		var container, marginDiv,
			// Support: Firefox, Android 2.3 (Prefixed box-sizing versions).
			divReset = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
			body = document.getElementsByTagName("body")[ 0 ];

		if ( !body ) {
			// Return for frameset docs that don't have a body
			return;
		}

		container = document.createElement("div");
		container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

		// Check box-sizing and margin behavior.
		body.appendChild( container ).appendChild( div );
		div.innerHTML = "";
		// Support: Firefox, Android 2.3 (Prefixed box-sizing versions).
		div.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%";

		// Workaround failing boxSizing test due to offsetWidth returning wrong value
		// with some non-1 values of body zoom, ticket #13543
		jQuery.swap( body, body.style.zoom != null ? { zoom: 1 } : {}, function() {
			support.boxSizing = div.offsetWidth === 4;
		});

		// Use window.getComputedStyle because jsdom on node.js will break without it.
		if ( window.getComputedStyle ) {
			support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
			support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

			// Support: Android 2.3
			// Check if div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container. (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			marginDiv = div.appendChild( document.createElement("div") );
			marginDiv.style.cssText = div.style.cssText = divReset;
			marginDiv.style.marginRight = marginDiv.style.width = "0";
			div.style.width = "1px";

			support.reliableMarginRight =
				!parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
		}

		body.removeChild( container );
	});

	return support;
})( {} );

/*
	Implementation Summary

	1. Enforce API surface and semantic compatibility with 1.9.x branch
	2. Improve the module's maintainability by reducing the storage
		paths to a single mechanism.
	3. Use the same single mechanism to support "private" and "user" data.
	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	5. Avoid exposing implementation details on user objects (eg. expando properties)
	6. Provide a clear path for implementation upgrade to WeakMap in 2014
*/
var data_user, data_priv,
	rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	rmultiDash = /([A-Z])/g;

function Data() {
	// Support: Android < 4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Math.random();
}

Data.uid = 1;

Data.accepts = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType ?
		owner.nodeType === 1 || owner.nodeType === 9 : true;
};

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android < 4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( core_rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};

// These may be used throughout the jQuery core codebase
data_user = new Data();
data_priv = new Data();


jQuery.extend({
	acceptData: Data.accepts,

	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var attrs, name,
			elem = this[ 0 ],
			i = 0,
			data = null;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					attrs = elem.attributes;
					for ( ; i < attrs.length; i++ ) {
						name = attrs[ i ].name;

						if ( name.indexOf( "data-" ) === 0 ) {
							name = jQuery.camelCase( name.slice(5) );
							dataAttr( elem, name, data[ name ] );
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return jQuery.access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? JSON.parse( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}
jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object, or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	delay: function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = setTimeout( next, time );
			hooks.stop = function() {
				clearTimeout( timeout );
			};
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var nodeHook, boolHook,
	rclass = /[\t\r\n\f]/g,
	rreturn = /\r/g,
	rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	attr: function( name, value ) {
		return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	},

	prop: function( name, value ) {
		return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	},

	addClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}
					elem.className = jQuery.trim( cur );

				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j,
			i = 0,
			len = this.length,
			proceed = arguments.length === 0 || typeof value === "string" && value;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( core_rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}
					elem.className = value ? jQuery.trim( cur ) : "";
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( core_rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === core_strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	},

	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// handle most common string cases
					ret.replace(rreturn, "") :
					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map(val, function ( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				// attributes.value is undefined in Blackberry 4.7 but
				// uses .value. See #6932
				var val = elem.attributes.value;
				return !val || val.specified ? elem.value : elem.text;
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( jQuery(option).val(), values ) >= 0) ) {
						optionSet = true;
					}
				}

				// force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	},

	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === core_strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( core_rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
					// Setting the type on a radio button after the value resets the value in IE6-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = jQuery.expr.attrHandle[ name ] || jQuery.find.attr;

	jQuery.expr.attrHandle[ name ] = function( elem, name, isXML ) {
		var fn = jQuery.expr.attrHandle[ name ],
			ret = isXML ?
				undefined :
				/* jshint eqeqeq: false */
				// Temporarily disable this handler to check existence
				(jQuery.expr.attrHandle[ name ] = undefined) !=
					getter( elem, name, isXML ) ?

					name.toLowerCase() :
					null;

		// Restore handler
		jQuery.expr.attrHandle[ name ] = fn;

		return ret;
	};
});

// Support: IE9+
// Selectedness for an option in an optgroup can be inaccurate
if ( !jQuery.support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !jQuery.support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			// Support: Webkit
			// "" is returned instead of "on" if a value isn't specified
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});
var rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};
			// Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( core_rnotwhite ) || [""];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = core_hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = core_hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
				event.preventDefault();
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = core_slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or
				// 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome < 28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = ( src.defaultPrevented ||
			src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		this.isImmediatePropagationStopped = returnTrue;
		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Create "bubbling" focus and blur events
// Support: Firefox, Chrome, Safari
if ( !jQuery.support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler while someone wants focusin/focusout
		var attaches = 0,
			handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				if ( attaches++ === 0 ) {
					document.addEventListener( orig, handler, true );
				}
			},
			teardown: function() {
				if ( --attaches === 0 ) {
					document.removeEventListener( orig, handler, true );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});
var isSimple = /^.[^:#\[\.,]*$/,
	rparentsprev = /^(?:parents|prev(?:Until|All))/,
	rneedsContext = jQuery.expr.match.needsContext,
	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},

	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},

	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},

	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = ( rneedsContext.test( selectors ) || typeof selectors !== "string" ) ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					cur = matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return core_indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return core_indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		var set = typeof selector === "string" ?
				jQuery( selector, context ) :
				jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
			all = jQuery.merge( this.get(), set );

		return this.pushStack( jQuery.unique(all) );
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}

	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});

jQuery.extend({
	filter: function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			}));
	},

	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( isSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( core_indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}
var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE 9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE 9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

jQuery.fn.extend({
	text: function( value ) {
		return jQuery.access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append( ( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value ) );
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	// keepData is for internal use only--do not document
	remove: function( selector, keepData ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function () {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return jQuery.access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var
			// Snapshot the DOM in case .domManip sweeps something relevant into its fragment
			args = jQuery.map( this, function( elem ) {
				return [ elem.nextSibling, elem.parentNode ];
			}),
			i = 0;

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			var next = args[ i++ ],
				parent = args[ i++ ];

			if ( parent ) {
				// Don't use the snapshot next if it has moved (#13810)
				if ( next && next.parentNode !== parent ) {
					next = this.nextSibling;
				}
				jQuery( this ).remove();
				parent.insertBefore( elem, next );
			}
		// Allow new content to include elements from the context set
		}, true );

		// Force removal if there was no new content (e.g., from empty arguments)
		return i ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback, allowIntersection ) {

		// Flatten any nested arrays
		args = core_concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback, allowIntersection );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, !allowIntersection && this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because core_push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Hope ajax is available...
								jQuery._evalUrl( node.src );
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because core_push.apply(_, arraylike) throws
			core_push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Support: IE >= 9
		// Fix Cloning issues
		if ( !jQuery.support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			i = 0,
			l = elems.length,
			fragment = context.createDocumentFragment(),
			nodes = [];

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit
					// jQuery.merge because core_push.apply(_, arraylike) throws
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || ["", ""] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit
					// jQuery.merge because core_push.apply(_, arraylike) throws
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Fixes #12346
					// Support: Webkit, IE
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, events, type, key, j,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( Data.accepts( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					events = Object.keys( data.events || {} );
					if ( events.length ) {
						for ( j = 0; (type = events[j]) !== undefined; j++ ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	},

	_evalUrl: function( url ) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	}
});

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType === 1 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var l = elems.length,
		i = 0;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}


function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Support: IE >= 9
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}
jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});
var curCSS, iframe,
	// swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rmargin = /^margin/,
	rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
	rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
	elemdisplay = { BODY: "block" },

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: 0,
		fontWeight: 400
	},

	cssExpand = [ "Top", "Right", "Bottom", "Left" ],
	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt(0).toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function isHidden( elem, el ) {
	// isHidden might be called from jQuery#filter function;
	// in that case, element will be second argument
	elem = el || elem;
	return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
}

// NOTE: we've included the "window" in window.getComputedStyle
// because jsdom on node.js will break without it.
function getStyles( elem ) {
	return window.getComputedStyle( elem, null );
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
			}
		} else {

			if ( !values[ index ] ) {
				hidden = isHidden( elem );

				if ( display && display !== "none" || !hidden ) {
					data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css(elem, "display") );
				}
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.fn.extend({
	css: function( name, value ) {
		return jQuery.access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});

jQuery.extend({
	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {
					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		// normalize float css property
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {
		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// convert relative number strings (+= or -=) to relative numbers. #7345
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that NaN and null values aren't set. See: #7116
			if ( value == null || type === "number" && isNaN( value ) ) {
				return;
			}

			// If a number was passed in, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Fixes #8908, it can be done more correctly by specifying setters in cssHooks,
			// but it would mean to define eight (for every problematic property) identical functions
			if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

curCSS = function( elem, name, _computed ) {
	var width, minWidth, maxWidth,
		computed = _computed || getStyles( elem ),

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,
		style = elem.style;

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: Safari 5.1
		// A tribute to the "awesome hack by Dean Edwards"
		// Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret;
};


function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

// Try to determine the default display value of an element
function css_defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {
			// Use the already-created iframe if possible
			iframe = ( iframe ||
				jQuery("<iframe frameborder='0' width='0' height='0'/>")
				.css( "cssText", "display:block !important" )
			).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
			doc.write("<!doctype html><html><body>");
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}

// Called ONLY from within css_defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
		display = jQuery.css( elem[0], "display" );
	elem.remove();
	return display;
}

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {
				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
jQuery(function() {
	// Support: Android 2.3
	if ( !jQuery.support.reliableMarginRight ) {
		jQuery.cssHooks.marginRight = {
			get: function( elem, computed ) {
				if ( computed ) {
					// Support: Android 2.3
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// Work around by temporarily setting element display to inline-block
					return jQuery.swap( elem, { "display": "inline-block" },
						curCSS, [ elem, "marginRight" ] );
				}
			}
		};
	}

	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
		jQuery.each( [ "top", "left" ], function( i, prop ) {
			jQuery.cssHooks[ prop ] = {
				get: function( elem, computed ) {
					if ( computed ) {
						computed = curCSS( elem, prop );
						// if curCSS returns percentage, fallback to offset
						return rnumnonpx.test( computed ) ?
							jQuery( elem ).position()[ prop ] + "px" :
							computed;
					}
				}
			};
		});
	}

});

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.hidden = function( elem ) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
	};

	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
}

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});
var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function(){
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function(){
			var type = this.type;
			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !manipulation_rcheckableType.test( type ) );
		})
		.map(function( i, elem ){
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ){
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});

//Serialize an array of form elements or a set of
//key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}
jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});
var
	// Document location
	ajaxLocParts,
	ajaxLocation,

	ajax_nonce = jQuery.now(),

	ajax_rquery = /\?/,
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

	// Keep a copy of the old load method
	_load = jQuery.fn.load,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
	ajaxLocation = location.href;
} catch( e ) {
	// Use the href attribute of an A element
	// since IE will modify it given document.location
	ajaxLocation = document.createElement( "a" );
	ajaxLocation.href = "";
	ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = url.slice( off );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
	jQuery.fn[ type ] = function( fn ){
		return this.on( type, fn );
	};
});

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		fireGlobals = s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}
// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});
var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});
jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrSupported = jQuery.ajaxSettings.xhr(),
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	// Support: IE9
	// We need to keep track of outbound xhr and abort them manually
	// because IE is not smart enough to do it all by itself
	xhrId = 0,
	xhrCallbacks = {};

if ( window.ActiveXObject ) {
	jQuery( window ).on( "unload", function() {
		for( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
		xhrCallbacks = undefined;
	});
}

jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
jQuery.support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;
	// Cross domain only allowed if supported through XMLHttpRequest
	if ( jQuery.support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i, id,
					xhr = options.xhr();
				xhr.open( options.type, options.url, options.async, options.username, options.password );
				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}
				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}
				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}
				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}
				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;
							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file protocol always yields status 0, assume 404
									xhr.status || 404,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// #11426: When requesting binary data, IE9 will throw an exception
									// on any attempt to access responseText
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};
				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");
				// Create the abort callback
				callback = xhrCallbacks[( id = xhrId++ )] = callback("abort");
				// Do send the request
				// This may raise an exception which is actually
				// handled in jQuery.ajax (so no try/catch here)
				xhr.send( options.hasContent && options.data || null );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});
var fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*
					// Use a string for doubling factor so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur()
				// And breaking the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		}]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// we're done with this property
			return tween;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		if ( jQuery.css( elem, "display" ) === "inline" &&
				jQuery.css( elem, "float" ) === "none" ) {

			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}


	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}
	}
}

function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		});
	}
});

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth? 1 : 0;
	for( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p*Math.PI ) / 2;
	}
};

jQuery.timers = [];
jQuery.fx = Tween.prototype.init;
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	if ( timer() && jQuery.timers.push( timer ) ) {
		jQuery.fx.start();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};

// Back Compat <1.8 extension point
jQuery.fx.step = {};

if ( jQuery.expr && jQuery.expr.filters ) {
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep(jQuery.timers, function( fn ) {
			return elem === fn.elem;
		}).length;
	};
}
jQuery.fn.offset = function( options ) {
	if ( arguments.length ) {
		return options === undefined ?
			this :
			this.each(function( i ) {
				jQuery.offset.setOffset( this, options, i );
			});
	}

	var docElem, win,
		elem = this[ 0 ],
		box = { top: 0, left: 0 },
		doc = elem && elem.ownerDocument;

	if ( !doc ) {
		return;
	}

	docElem = doc.documentElement;

	// Make sure it's not a disconnected DOM node
	if ( !jQuery.contains( docElem, elem ) ) {
		return box;
	}

	// If we don't have gBCR, just use 0,0 rather than error
	// BlackBerry 5, iOS 3 (original iPhone)
	if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
		box = elem.getBoundingClientRect();
	}
	win = getWindow( doc );
	return {
		top: box.top + win.pageYOffset - docElem.clientTop,
		left: box.left + win.pageXOffset - docElem.clientLeft
	};
};

jQuery.offset = {

	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) && ( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};


jQuery.fn.extend({

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// We assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});


// Create scrollLeft and scrollTop methods
jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return jQuery.access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return jQuery.access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});
// Limit scope pollution from any deprecated API
// (function() {

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;

// })();
if ( typeof module === "object" && module && typeof module.exports === "object" ) {
	// Expose jQuery as module.exports in loaders that implement the Node
	// module pattern (including browserify). Do not create the global, since
	// the user will be storing it themselves locally, and globals are frowned
	// upon in the Node module world.
	module.exports = jQuery;
} else {
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	if ( typeof define === "function" && define.amd ) {
		define( "jquery", [], function () { return jQuery; } );
	}
}

// If there is a window object, that at least has a document property,
// define jQuery and $ identifiers
if ( typeof window === "object" && typeof window.document === "object" ) {
	window.jQuery = window.$ = jQuery;
}

})( window );

;
/*** <End:monaca-jquery LoadJs:"components/monaca-jquery/jquery.js"> ***/
/*** <End:monaca-jquery> ***/



/*** <Start:monaca-cordova-loader> ***/
/*** <Start:monaca-cordova-loader LoadJs:"components/monaca-cordova-loader/cordova-loader.js"> ***/
(function(){
  function getDeviceObjectForPreview() {
    var raw_values = window.location.search.substring(1).split('&');
    var values = {};
    var device = { platform: "" };

    if (raw_values) {
      for (var key in raw_values) {
        var tmp = raw_values[key].split('=');
        values[tmp[0]] = decodeURIComponent(tmp[1]);
      }
      device.platform = values.platform;
    }

    return device;
  }

  if (location && typeof location.href === "string" && /^https:\/\/preview-.+monaca\.(local||mobi)/.test(location.href)) {
    window.device = getDeviceObjectForPreview();
  }

  if (
      (navigator.userAgent.match(/Android/i))
      || (navigator.userAgent.match(/iPhone|iPad|iPod/i))
      || (navigator.userAgent.match(/Macintosh; Intel Mac OS X/i) && location.protocol.match(/^https?:/) === null)
  ) {

    if (typeof location.href === "string") {
      var cordovaJsUrl = location.protocol + "//" + location.hostname + "/";
      var relativePath = "";
      if (location.href.indexOf('/www') !== -1) {
        relativePath = location.href.split("/www")[1];
        var paths = relativePath.split("/");
        cordovaJsUrl = "";
        for (var i = 0; i < paths.length - 2; i++) {
          cordovaJsUrl += "../";
        }
      }
      document.write("<script src=\"" + cordovaJsUrl+ "cordova.js" + "\"></script>");
    }
  } else if ( (navigator.userAgent.match(/MSIE\s10.0/) && navigator.userAgent.match(/Windows\sNT\s6.2/)) || navigator.userAgent.match(/MSAppHost/)) {
    var elm = document.createElement('script');
    elm.setAttribute("src", "cordova.js");
    document.getElementsByTagName("head")[0].appendChild(elm);
  };
})();

;
/*** <End:monaca-cordova-loader LoadJs:"components/monaca-cordova-loader/cordova-loader.js"> ***/
/*** <End:monaca-cordova-loader> ***/

/*** <Start:monaca-core-utils> ***/
/*** <Start:monaca-core-utils LoadJs:"components/monaca-core-utils/monaca-core-utils.js"> ***/
/**
 * Monaca Core Utility Library
 * This library requires cordova.js
 *
 * @version 2.1.0
 * @author  Asial Corporation
 */
window.monaca = window.monaca || {};

(function() {
    /*
     * monaca api queue.
     */
    monaca.apiQueue = monaca.apiQueue || {};
    monaca.apiQueue.paramsArray = [];
    monaca.apiQueue.exec = function(a,b,c,d,e){
        if (!monaca.isDeviceReady) {
            monaca.apiQueue.paramsArray.push([a,b,c,d,e]);
        } else {
            window.cordova.exec(a,b,c,d,e);
        }
    };
    monaca.apiQueue.next = function(){
        var params = monaca.apiQueue.paramsArray.shift();
        if (params) {
            window.cordova.exec(
                function(r) {
                  if (typeof params[0] === 'function') params[0](r);
                  monaca.apiQueue.next();
                },
                function(r) {
                  if (typeof params[1] === 'function') params[1](r);
                  monaca.apiQueue.next();
                },
                params[2],
                params[3],
                params[4]
            );
        }
    };

    monaca.isDeviceReady = monaca.isDeviceReady || false;
    document.addEventListener('deviceready', function(){
        window.monaca.isDeviceReady = true;
        monaca.apiQueue.next();
    }, false);

    /**
     * Check User-Agent
     */
    var isAndroid = !!(navigator.userAgent.match(/Android/i));
    var isIOS     = !!(
        (navigator.userAgent.match(/iPhone|iPad|iPod/i))
        || (navigator.userAgent.match(/Macintosh; Intel Mac OS X/i) && location.protocol.match(/^https?:/) === null) // iOS 13.0 iPad 9.7 inch
    );
    monaca.isAndroid = isAndroid;
    monaca.isIOS     = isIOS;

    /**
     * Obtain style property
     */
    monaca.retrieveUIStyle = function() {
        var argsArray = [].slice.apply(arguments);
        monaca.apiQueue.exec(arguments[arguments.length-1], null, "mobi.monaca.nativecomponent", "retrieve", argsArray);
    };

    /**
     * Update style property
     */
    monaca.updateUIStyle = function(id, name, value) {
        if (typeof id == "string") {
            var argsArray = [].slice.apply(arguments);
            monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", "update", argsArray);
        } else {
            for (var i = 0; i < id.length; i++) {
                monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", "update", [id[i], name, value]);
            }
        }
    };

    if (isAndroid) {
        monaca.retrieveUIStyle = function(id, name, success, failure) {
            monaca.apiQueue.exec(
                function(style) { success(style[name]); } || function() { },
                failure || function() { },
                "mobi.monaca.nativecomponent",
                "retrieve",
                [id]
            );
        };

        monaca.updateUIStyle = function(id, name, value, success, failure) {
            var style = {};
            style[name] = value;

            monaca.apiQueue.exec(
                success || function() { },
                failure || function() { },
                "mobi.monaca.nativecomponent",
                "update",
                [id, style]
            );
        };
    }

    /**
     * Spinner handling
     */
    monaca.showSpinner = function (options) {
        options = options || {};
        var src = options.src ? options.src : null;
        var frames = options.frames != null ? options.frames : null;
        var interval = options.interval != null ? options.interval : null;
        var backgroundColor = options.backgroundColor ? options.backgroundColor : null;
        var backgroundOpacity = options.backgroundOpacity != null ? options.backgroundOpacity : null;
        var title = options.title ? options.title : null;
        var titleColor = options.titleColor ? options.titleColor : null;
        var titleFontScale = options.titleFontScale != null ? options.titleFontScale : null;
        monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'showSpinner', [ src, frames, interval, backgroundColor, backgroundOpacity, title, titleColor, titleFontScale, null ]);
    };

    monaca.hideSpinner = function(){
        monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'hideSpinner', []);
    };

    monaca.updateSpinnerTitle = function(newTitle){
        if (!newTitle) newTitle = "";
        monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'updateSpinnerTitle', [ newTitle ]);
    };

    var transitionPluginName = "Transit";

    /**
     * Open new page.
     */
    monaca.pushPage = function(path, options, param) {
        options = options || {};
        var animation = null;
        switch (options.animation) {
        case "lift":
          animation = "modal"; break;
        case "slide":
        case "slideLeft":
          animation = "push"; break;
        case "slideRight":
          animation = "slideRight"; break;
        default:
          animation = "push";
        }
        monaca.apiQueue.exec(null, null, transitionPluginName, animation, [path, options, param]);
    };
    /**
     * Close current page.
     */
    monaca.popPage = function(options) {
        options = options || {};
        var name = options.animation == 'lift' ? 'dismiss' : 'pop';
        monaca.apiQueue.exec(null, null, transitionPluginName, name, [options]);
    };

    /**
     * Open in browser.
     */
    monaca.invokeBrowser = function(url) {
        monaca.apiQueue.exec(null, null, transitionPluginName, "browse", [url]);
    };

    /**
     * Load in current page.
     */
    monaca.load = function(path, options, param) {
        monaca.apiQueue.exec(null, null, transitionPluginName, "link", [path, options, param]);
    };

    /**
     * return to top page.
     */
    monaca.home = function(options) {
        options = options || {};
        monaca.apiQueue.exec(null, null, transitionPluginName, "home", [options]);
    };

    /**
     * Clear stack
     */
    monaca.clearPageStack = function(clearAll) {
        clearAll = clearAll || false;
        monaca.apiQueue.exec(null, null, transitionPluginName, "clearPageStack", [clearAll]);
    };

    window.monaca.splashScreen = window.monaca.splashScreen || {};
    var splashScreenPluginName = "MonacaSplashScreen";

    /**
     * hide SplashScreen.
     */
    monaca.splashScreen.hide = function() {
        if (isAndroid) {
            monaca.apiQueue.exec(null, null, splashScreenPluginName, "hide", []);
        } else {
            navigator.splashscreen.hide();
        }
    };

    // Set monaca.baseUrl
    if (typeof location.href !== "string") {
        console.warn("Cannot find base url");
        monaca.baseUrl = null;
    } else {
        monaca.baseUrl = location.href.split("/www/")[0] + "/www/";
    }

    /**
     * Get device ID
     */
    monaca.getDeviceId = function(callback) {
        monaca.apiQueue.exec(function(result) { callback(result.deviceId); }, null, "Monaca", "getRuntimeConfiguration", []);
    };

    monaca.getRuntimeConfiguration = function(success,failure) {
        monaca.apiQueue.exec( success , failure , "Monaca" , "getRuntimeConfiguration" , []);
    };

    monaca.isMonacaDebuggerChecked = false;
    monaca.isMonacaDebugger = null;

    monaca.getRuntimeConfiguration( function(result) {
        monaca.isMonacaDebuggerChecked = true;
        monaca.isMonacaDebugger = !! result.isMonacaDebugger;
    });


})();

/**
 * iOS Status Bar Plugin
 *
 * @author Asial Corporation
 * @date   2014/1/15
 */
window.StatusBar = window.StatusBar || {};

(function() {

  /*
    hideStatusBar
    support : iOS6,iOS7
  */
  StatusBar.hideStatusBar = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'hideStatusBar', []);
  }

  /*
    showStatusBar
    support : iOS6,iOS7
  */
  StatusBar.showStatusBar = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'showStatusBar', []);
  }

  /*
    statusBarStyleDefault
    support : iOS6,iOS7
  */
  StatusBar.statusBarStyleDefault = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleDefault', []);
  }

  /*
    statusBarStyleLightContent
    support : iOS7
  */
  StatusBar.statusBarStyleLightContent = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleLightContent', []);
  }

  /*
    statusBarStyleBlackOpaque
    support : iOS6
  */
  StatusBar.statusBarStyleBlackOpaque = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleBlackOpaque', []);
  }

  /*
    statusBarStyleBlackTranslucent
    support : iOS6
  */
  StatusBar.statusBarStyleBlackTranslucent = function() {
    monaca.apiQueue.exec(null, null, "mobi.monaca.nativecomponent", 'statusBarStyleBlackTranslucent', []);
  }

})();

/**
 * Monaca Cloud Functions
 *  Version 1.5.0
 *
 * @author Masahiro TANAKA <info@monaca.mobi>
 * @date   2013/03/17
 */
window.monaca = window.monaca || {};
window.monaca.cloud = window.monaca.cloud || {};

(function() {
    /**
     * Push Notification
     */
    monaca.cloud.Push = {};
    monaca.cloud.Push.callback = null;
    monaca.cloud.Push.callbackData = null;

    monaca.cloud.Push.send = function(data) {
        if (typeof monaca.cloud.Push.callback === "function") {
            monaca.cloud.Push.callback(data);
        } else {
            monaca.cloud.Push.callbackData = data;
        }
    };
    monaca.cloud.Push.setHandler = function(fn) {
        if (typeof fn !== "function") {
            console.warn("Push callback must be a function");
        } else {
            monaca.cloud.Push.callback = fn;
            if (monaca.cloud.Push.callbackData) {
                monaca.cloud.Push.callback(monaca.cloud.Push.callbackData);
                monaca.cloud.Push.callbackData = null;
            }
        }
    };

})();


/*
 * cloud
 */
(function(root) {
  var original$ = root.$;
  var originalZepto = root.Zepto;

  /* Zepto 1.1.3 - zepto event ajax deferred callbacks - zeptojs.com/license */
  var Zepto=function(){function k(t){return null==t?String(t):j[T.call(t)]||"object"}function $(t){return"function"==k(t)}function L(t){return null!=t&&t==t.window}function D(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function F(t){return"object"==k(t)}function Z(t){return F(t)&&!L(t)&&Object.getPrototypeOf(t)==Object.prototype}function M(t){return"number"==typeof t.length}function R(t){return s.call(t,function(t){return null!=t})}function _(t){return t.length>0?n.fn.concat.apply([],t):t}function q(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function W(t){return t in f?f[t]:f[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function z(t,e){return"number"!=typeof e||c[q(t)]?e:e+"px"}function H(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),u[t]=n),u[t]}function V(t){return"children"in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function I(n,i,r){for(e in i)r&&(Z(i[e])||A(i[e]))?(Z(i[e])&&!Z(n[e])&&(n[e]={}),A(i[e])&&!A(n[e])&&(n[e]=[]),I(n[e],i[e],r)):i[e]!==t&&(n[e]=i[e])}function B(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return $(e)?e.call(t,n,i):e}function U(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function X(e,n){var i=e.className,r=i&&i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){var e;try{return t?"true"==t||("false"==t?!1:"null"==t?null:/^0/.test(t)||isNaN(e=Number(t))?/^[\[\{]/.test(t)?n.parseJSON(t):t:e):t}catch(i){return t}}function G(t,e){e(t);for(var n in t.childNodes)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},l=/^\s*<(\w+|!)[^>]*>/,h=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,p=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=["val","css","html","text","data","width","height","offset"],v=["after","prepend","before","append"],y=a.createElement("table"),x=a.createElement("tr"),b={tr:a.createElement("tbody"),tbody:y,thead:y,tfoot:y,td:x,th:x,"*":a.createElement("div")},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},T=j.toString,S={},O=a.createElement("div"),P={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},A=Array.isArray||function(t){return t instanceof Array};return S.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=O).appendChild(t),i=~S.qsa(r,e).indexOf(t),o&&O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},S.fragment=function(e,i,r){var s,u,f;return h.test(e)&&(s=n(a.createElement(RegExp.$1))),s||(e.replace&&(e=e.replace(p,"<$1></$2>")),i===t&&(i=l.test(e)&&RegExp.$1),i in b||(i="*"),f=b[i],f.innerHTML=""+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),Z(r)&&(u=n(s),n.each(r,function(t,e){g.indexOf(t)>-1?u[t](e):u.attr(t,e)})),s},S.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||"",t},S.isZ=function(t){return t instanceof S.Z},S.init=function(e,i){var r;if(!e)return S.Z();if("string"==typeof e)if(e=e.trim(),"<"==e[0]&&l.test(e))r=S.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(a,e)}else{if($(e))return n(a).ready(e);if(S.isZ(e))return e;if(A(e))r=R(e);else if(F(e))r=[e],e=null;else if(l.test(e))r=S.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=S.qsa(a,e)}}return S.Z(r,e)},n=function(t,e){return S.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){I(t,n,e)}),t},S.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],s=i||r?e.slice(1):e,a=E.test(s);return D(t)&&a&&i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:o.call(a&&!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=function(t,e){return t!==e&&t.contains(e)},n.type=k,n.isFunction=$,n.isWindow=L,n.isArray=A,n.isPlainObject=Z,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?"":String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(M(t))for(r=0;r<t.length;r++)n=e(t[r],r),null!=n&&i.push(n);else for(o in t)n=e(t[o],o),null!=n&&i.push(n);return _(i)},n.each=function(t,e){var n,i;if(M(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&&(n.parseJSON=JSON.parse),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){j["[object "+e+"]"]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&&a.body?t(n):a.addEventListener("DOMContentLoaded",function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e>=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return $(t)?this.not(this.not(t)):n(s.call(this,function(e){return S.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length>0&&S.matches(this[0],t)},not:function(e){var i=[];if($(e)&&e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r="string"==typeof e?this.filter(e):M(e)&&$(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)<0&&i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return F(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!F(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&&!F(t)?t:n(t)},find:function(t){var e,i=this;return e="object"==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(S.qsa(this[0],t)):this.map(function(){return S.qsa(this,t)})},closest:function(t,e){var i=this[0],r=!1;for("object"==typeof t&&(r=n(t));i&&!(r?r.indexOf(i)>=0:S.matches(i,t));)i=i!==e&&!D(i)&&i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length>0;)i=n.map(i,function(t){return(t=t.parentNode)&&!D(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return B(e,t)},parent:function(t){return B(N(this.pluck("parentNode")),t)},children:function(t){return B(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return B(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=H(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=$(t);if(this[0]&&!e)var i=n(t).get(0),r=i.parentNode||this.length>1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=$(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var i=n(this);(e===t?"none"==i.css("display"):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return n(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0===arguments.length?this.length>0?this[0].innerHTML:null:this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))})},text:function(e){return 0===arguments.length?this.length>0?this[0].textContent:null:this.each(function(){this.textContent=e===t?"":""+e})},attr:function(n,i){var r;return"string"==typeof n&&i===t?0==this.length||1!==this[0].nodeType?t:"value"==n&&"INPUT"==this[0].nodeName?this.val():!(r=this[0].getAttribute(n))&&n in this[0]?this[0][n]:r:this.each(function(t){if(1===this.nodeType)if(F(n))for(e in n)U(this,e,n[e]);else U(this,n,J(this,i,t,this.getAttribute(n)))})},removeAttr:function(t){return this.each(function(){1===this.nodeType&&U(this,t)})},prop:function(e,n){return e=P[e]||e,n===t?this[0]&&this[0][e]:this.each(function(t){this[e]=J(this,n,t,this[e])})},data:function(e,n){var i=this.attr("data-"+e.replace(m,"-$1").toLowerCase(),n);return null!==i?Y(i):t},val:function(t){return 0===arguments.length?this[0]&&(this[0].multiple?n(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value):this.each(function(e){this.value=J(this,t,e,this.value)})},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};"static"==i.css("position")&&(s.position="relative"),i.css(s)});if(0==this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length<2){var r=this[0],o=getComputedStyle(r,"");if(!r)return;if("string"==typeof t)return r.style[C(t)]||o.getPropertyValue(t);if(A(t)){var s={};return n.each(A(t)?t:[t],function(t,e){s[e]=r.style[C(e)]||o.getPropertyValue(e)}),s}}var a="";if("string"==k(t))i||0===i?a=q(t)+":"+z(t,i):this.each(function(){this.style.removeProperty(q(t))});else for(e in t)t[e]||0===t[e]?a+=q(e)+":"+z(e,t[e])+";":this.each(function(){this.style.removeProperty(q(e))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(X(t))},W(t)):!1},addClass:function(t){return t?this.each(function(e){i=[];var r=X(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&&X(this,r+(r?" ":"")+i.join(" "))}):this},removeClass:function(e){return this.each(function(n){return e===t?X(this,""):(i=X(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(W(t)," ")}),void X(this,i.trim()))})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,X(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n="scrollTop"in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n="scrollLeft"in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css("margin-top"))||0,i.left-=parseFloat(n(t).css("margin-left"))||0,r.top+=parseFloat(n(e[0]).css("border-top-width"))||0,r.left+=parseFloat(n(e[0]).css("border-left-width"))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&&!d.test(t.nodeName)&&"static"==n(t).css("position");)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,["width","height"].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?L(s)?s["inner"+i]:D(s)?s.documentElement["scroll"+i]:(o=this.offset())&&o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=k(e),"object"==t||"array"==t||null==e?e:S.fragment(e)}),s=this.length>1;return r.length<1?this:this.each(function(t,a){o=i?a:a.parentNode,a=0==e?a.nextSibling:1==e?a.firstChild:2==e?a:null,r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();G(o.insertBefore(t,a),function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+"To":"insert"+(e?"Before":"After")]=function(e){return n(e)[t](this),this}}),S.Z.prototype=n.fn,S.uniq=N,S.deserializeValue=Y,n.zepto=S,n}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!r.test(t.ns)||n&&l(t.fn)!==l(n)||i&&t.sel!=i)})}function p(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function d(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function m(t,e){return t.del&&!u&&t.e in f||!!e}function g(t){return c[t]||u&&f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if("ready"==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&&(r=function(e){var n=e.relatedTarget;return!n||n!==this&&!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&&(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),"addEventListener"in e&&e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||"").split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],"removeEventListener"in t&&t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&&(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&&r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:"returnValue"in i?i.returnValue===!1:i.getPreventDefault&&i.getPreventDefault())&&(e.isDefaultPrevented=x)),e}function T(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return"string"==typeof t},s={},a={},u="onfocusin"in window,f={focus:"focusin",blur:"focusout"},c={mouseenter:"mouseover",mouseleave:"mouseout"};a.click=a.mousedown=a.mouseup=a.mousemove="MouseEvents",t.event={add:v,remove:y},t.proxy=function(e,n){if(r(e)){var i=function(){return e.apply(n,arguments)};return i._zid=l(e),i}if(o(n))return t.proxy(e[n],e);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&&!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&&(u=a,a=n),u===!1&&(u=b),h.each(function(n,r){f&&(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&&(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&&o!==r?(n=t.extend(T(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&&!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&&(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=T(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.trigger(e)}}),["focus","blur"].forEach(function(e){t.fn[e]=function(t){return t?this.bind(e,t):this.each(function(){try{this[e]()}catch(t){}}),this}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function l(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function h(t,e,i,r){return t.global?l(e||n,i,r):void 0}function p(e){e.global&&0===t.active++&&h(e,null,"ajaxStart")}function d(e){e.global&&!--t.active&&h(e,null,"ajaxStop")}function m(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||h(e,n,"ajaxBeforeSend",[t,e])===!1?!1:void h(e,n,"ajaxSend",[t,e])}function g(t,e,n,i){var r=n.context,o="success";n.success.call(r,t,o,e),i&&i.resolveWith(r,[t,o,e]),h(n,r,"ajaxSuccess",[e,n,t]),y(o,e,n)}function v(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&&r.rejectWith(o,[n,e,t]),h(i,o,"ajaxError",[n,i,t||e]),y(e,n,i)}function y(t,e,n){var i=n.context;n.complete.call(i,e,t),h(n,i,"ajaxComplete",[e,n]),d(n)}function x(){}function b(t){return t&&(t=t.split(";",2)[0]),t&&(t==f?"html":t==u?"json":s.test(t)?"script":a.test(t)&&"xml")||"text"}function w(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function E(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()||(e.url=w(e.url,e.data),e.data=void 0)}function j(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function S(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(a||"object"==o||"array"==o?n:"")+"]"),!r&&s?e.add(u.name,u.value):"array"==o||!i&&"object"==o?S(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u="application/json",f="text/html",c=/^\s*$/;t.active=0,t.ajaxJSONP=function(i,r){if(!("type"in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||"jsonp"+ ++e,a=n.createElement("script"),u=window[s],c=function(e){t(a).triggerHandler("error",e||"abort")},l={abort:c};return r&&r.promise(l),t(a).on("load error",function(e,n){clearTimeout(h),t(a).off().remove(),"error"!=e.type&&f?g(f[0],l,i,r):v(null,n||"error",l,i,r),window[s]=u,f&&t.isFunction(u)&&u(f[0]),u=f=void 0}),m(l,i)===!1?(c("abort"),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,"?$1="+s),n.head.appendChild(a),i.timeout>0&&(h=setTimeout(function(){c("timeout")},i.timeout)),l)},t.ajaxSettings={type:"GET",beforeSend:x,success:x,error:x,complete:x,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:u,xml:"application/xml, text/xml",html:f,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var n=t.extend({},e||{}),o=t.Deferred&&t.Deferred();for(i in t.ajaxSettings)void 0===n[i]&&(n[i]=t.ajaxSettings[i]);p(n),n.crossDomain||(n.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(n.url)&&RegExp.$2!=window.location.host),n.url||(n.url=window.location.toString()),E(n),n.cache===!1&&(n.url=w(n.url,"_="+Date.now()));var s=n.dataType,a=/\?.+=\?/.test(n.url);if("jsonp"==s||a)return a||(n.url=w(n.url,n.jsonp?n.jsonp+"=?":n.jsonp===!1?"":"callback=?")),t.ajaxJSONP(n,o);var j,u=n.accepts[s],f={},l=function(t,e){f[t.toLowerCase()]=[t,e]},h=/^([\w-]+:)\/\//.test(n.url)?RegExp.$1:window.location.protocol,d=n.xhr(),y=d.setRequestHeader;if(o&&o.promise(d),n.crossDomain||l("X-Requested-With","XMLHttpRequest"),l("Accept",u||"*/*"),(u=n.mimeType||u)&&(u.indexOf(",")>-1&&(u=u.split(",",2)[0]),d.overrideMimeType&&d.overrideMimeType(u)),(n.contentType||n.contentType!==!1&&n.data&&"GET"!=n.type.toUpperCase())&&l("Content-Type",n.contentType||"application/x-www-form-urlencoded"),n.headers)for(r in n.headers)l(r,n.headers[r]);if(d.setRequestHeader=l,d.onreadystatechange=function(){if(4==d.readyState){d.onreadystatechange=x,clearTimeout(j);var e,i=!1;if(d.status>=200&&d.status<300||304==d.status||0==d.status&&"file:"==h){s=s||b(n.mimeType||d.getResponseHeader("content-type")),e=d.responseText;try{"script"==s?(1,eval)(e):"xml"==s?e=d.responseXML:"json"==s&&(e=c.test(e)?null:t.parseJSON(e))}catch(r){i=r}i?v(i,"parsererror",d,n,o):g(e,d,n,o)}else v(d.statusText||null,d.status?"error":"abort",d,n,o)}},m(d,n)===!1)return d.abort(),v(null,"abort",d,n,o),d;if(n.xhrFields)for(r in n.xhrFields)d[r]=n.xhrFields[r];var T="async"in n?n.async:!0;d.open(n.type,n.url,T,n.username,n.password);for(r in f)y.apply(d,f[r]);return n.timeout>0&&(j=setTimeout(function(){d.onreadystatechange=x,d.abort(),v(null,"timeout",d,n,o)},n.timeout)),d.send(n.data?n.data:null),d},t.get=function(){return t.ajax(j.apply(null,arguments))},t.post=function(){var e=j.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=j.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=j(e,n,i),f=u.success;return s.length>1&&(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t("<div>").html(e.replace(o,"")).find(a):e),f&&f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(t,e){var n=[];return n.add=function(t,e){this.push(T(t)+"="+T(e))},S(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(t){function n(e){var i=[["resolve","done",t.Callbacks({once:1,memory:1}),"resolved"],["reject","fail",t.Callbacks({once:1,memory:1}),"rejected"],["notify","progress",t.Callbacks({memory:1})]],r="pending",o={state:function(){return r},always:function(){return s.done(arguments).fail(arguments),this},then:function(){var e=arguments;return n(function(n){t.each(i,function(i,r){var a=t.isFunction(e[i])&&e[i];s[r[1]](function(){var e=a&&a.apply(this,arguments);if(e&&t.isFunction(e.promise))e.promise().done(n.resolve).fail(n.reject).progress(n.notify);else{var i=this===o?n.promise():this,s=a?[e]:arguments;n[r[0]+"With"](i,s)}})}),e=null}).promise()},promise:function(e){return null!=e?t.extend(e,o):o}},s={};return t.each(i,function(t,e){var n=e[2],a=e[3];o[e[1]]=n.add,a&&n.add(function(){r=a},i[1^t][2].disable,i[2][2].lock),s[e[0]]=function(){return s[e[0]+"With"](this===s?o:this,arguments),this},s[e[0]+"With"]=n.fireWith}),o.promise(s),e&&e.call(s,s),s}var e=Array.prototype.slice;t.when=function(i){var f,c,l,r=e.call(arguments),o=r.length,s=0,a=1!==o||i&&t.isFunction(i.promise)?o:0,u=1===a?i:n(),h=function(t,n,i){return function(r){n[t]=this,i[t]=arguments.length>1?e.call(arguments):r,i===f?u.notifyWith(n,i):--a||u.resolveWith(n,i)}};if(o>1)for(f=new Array(o),c=new Array(o),l=new Array(o);o>s;++s)r[s]&&t.isFunction(r[s].promise)?r[s].promise().done(h(s,l,r)).fail(u.reject).progress(h(s,c,f)):--a;return a||u.resolveWith(l,r),u.promise()},t.Deferred=n}(Zepto),function(t){t.Callbacks=function(e){e=t.extend({},e);var n,i,r,o,s,a,u=[],f=!e.once&&[],c=function(t){for(n=e.memory&&t,i=!0,a=o||0,o=0,s=u.length,r=!0;u&&s>a;++a)if(u[a].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}r=!1,u&&(f?f.length&&c(f.shift()):n?u.length=0:l.disable())},l={add:function(){if(u){var i=u.length,a=function(n){t.each(n,function(t,n){"function"==typeof n?e.unique&&l.has(n)||u.push(n):n&&n.length&&"string"!=typeof n&&a(n)})};a(arguments),r?s=u.length:n&&(o=i,c(n))}return this},remove:function(){return u&&t.each(arguments,function(e,n){for(var i;(i=t.inArray(n,u,i))>-1;)u.splice(i,1),r&&(s>=i&&--s,a>=i&&--a)}),this},has:function(e){return!(!u||!(e?t.inArray(e,u)>-1:u.length))},empty:function(){return s=u.length=0,this},disable:function(){return u=f=n=void 0,this},disabled:function(){return!u},lock:function(){return f=void 0,n||l.disable(),this},locked:function(){return!f},fireWith:function(t,e){return!u||i&&!f||(e=e||[],e=[t,e.slice?e.slice():e],r?f.push(e):c(e)),this},fire:function(){return l.fireWith(this,arguments)},fired:function(){return!!i}};return l}}(Zepto);

  root.$ = original$;
  root.Zepto = originalZepto;
  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};

  monaca.cloud.timeout = 30000;
  monaca.cloud.url = '%%%CLOUD_HOST%%%';
  monaca.cloud.backendId = '%%%BACKEND_ID%%%';
  monaca.cloud.apiKey = '%%%BACKEND_API_KEY%%%';
  monaca.cloud.deviceId = null;
  monaca.cloud.postQueue = [];

  /**
   * @property {jQuery} .
   */
  monaca.cloud.$ = Zepto;

  var MonacaCloudError = (function() {
    function MonacaCloudError(code, message, data) {
      if (typeof data === "undefined") {
        data = {};
      }
      this.code = code;
      this.message = message;
      this.data = data;
    }
    return MonacaCloudError;
  })();

  /**
   * @class
   */
  monaca.cloud.Error = function(code, message, data) {
    return new MonacaCloudError(code, message, data);
  };

  /**
   * @param {Number} msec .
   */
  monaca.cloud.setTimeout = function(msec) {
    this.timeout = msec;
  };

  // Get device id
  document.addEventListener("deviceready", function() {

    cordova.exec(function(result) {
        monaca.cloud.deviceId = new String(result.deviceId);
        monaca.cloud.url = new String(result.url);
        monaca.cloud.backendId = new String(result.backendId);
        monaca.cloud.apiKey = new String(result.apiKey);

        // execute and clear postQueue
        for (var i = 0; i < monaca.cloud.postQueue.length; i++) {
          monaca.cloud._doPost.apply(monaca.cloud, monaca.cloud.postQueue[i]);
        }
        monaca.cloud.postQueue = [];
      }, function(error) {
        console.error(error);
      },

      "Monaca",
      "getRuntimeConfiguration", []
    );

  }, false);

  // Others
  monaca.cloud._post = function(method, params, dfd, ajaxOptions, beforeSuccess) {
    if (monaca.cloud.deviceId == null) {
      monaca.cloud.postQueue.push([method, params, dfd, ajaxOptions, beforeSuccess]);
    } else {
      monaca.cloud._doPost(method, params, dfd, ajaxOptions, beforeSuccess);
    }
  };

  monaca.cloud._doPost = function(method, params, dfd, ajaxOptions, beforeSuccess) {
    var $ = monaca.cloud.$;

    if (typeof(ajaxOptions) === 'undefined') ajaxOptions = {};
    if ((typeof(method) === 'undefined') && (typeof(params) === 'undefined')) {
      throw new Error('Invalid arguments');
    }

    params['__api_key'] = monaca.cloud.apiKey;
    params['__device'] = monaca.cloud.deviceId;
    var sid = monaca.cloud._getSessionId();
    if (sid.length > 0) {
      params['__session'] = sid;
    }
    var data = JSON.stringify({
      jsonrpc: '2.0',
      method: method,
      params: params,
      id: '1'
    });

    var o = $.extend(true, {
      url: this.url + this.backendId,
      data: data,
      dataType: 'json',
      type: 'POST',
      timeout: this.timeout,
      success: function(jsonResponse, status, xhr) {
        var sessionHeader = xhr.getResponseHeader('X-Set-Monaca-Cloud-Session');
        if (sessionHeader) {
          monaca.cloud._setSessionId(sessionHeader);
        }

        if (typeof(jsonResponse.error) !== 'undefined') {
          // has error code
          dfd.reject(jsonResponse.error);
        } else {
          // success
          if (typeof(jsonResponse.result.loginToken) !== 'undefined') {
            localStorage.monacaCloudLoginToken = jsonResponse.result.loginToken;
          }
          if (typeof(beforeSuccess) !== 'undefined') {
            beforeSuccess(jsonResponse, status, xhr, dfd);
          }
          dfd.resolve(jsonResponse.result);
        }
      },
      error: function(xhr, status) {
        switch (status) {
          case 'timeout':
            var err = monaca.cloud.Error(-11, 'Connection timeout');
            break;
          case 'parsererror':
            var err = monaca.cloud.Error(-12, 'Invalid response');
            break;
          default:
            var err = monaca.cloud.Error(-13, 'Invalid status code');
        }
        dfd.reject(err);
      }
    }, ajaxOptions);

    $.ajax(o);
  };

  var _sessionId = '';

  monaca.cloud._getSessionId = function() {
    return _sessionId;
  };

  monaca.cloud._setSessionId = function(id) {
    if (typeof id != 'string') {
      id = '';
    }
    _sessionId = id;
  };

})(window);
/*
 * CollectionItem
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  MonacaCloudCollectionItem = (function() {

    function MonacaCloudCollectionItem(item, collection) {

      /**
       * @property {String} .
       */
      this._id = item._id;

      /**
       * @property {String} .
       */
      this._ownerUserOid = item._ownerUserOid;

      /**
       * @property {Date} .
       */
      this._createdAt = new Date(item._createdAt);

      /**
       * @property {Date} .
       */
      this._updatedAt = new Date(item._updatedAt);

      /**
       * @property {MonacaCloudCollection} .
       */
      this._collection = collection;


      for (var key in item) {
        if (key.substr(0, 1) != '_') {
          this[key] = item[key];
        }
      }
    }

    MonacaCloudCollectionItem.prototype = {

      /**
       * @return {$.Promise} .
       */
      update: function() {
        var dfd = new $.Deferred();
        var col = this._collection;
        var data = {};

        for (var key in this) {
          if (key.indexOf('_') !== 0) {
            data[key] = this[key];
          }
        }

        monaca.cloud._post('Collection.update', {
          collectionName: col.name,
          itemOid: this._id,
          data: data,
        }, dfd, {});

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      getPermission: function() {
        var dfd = new $.Deferred();
        var col = this._collection;

        monaca.cloud._post('Collection.getPermission', {
          collectionName: col.name,
          itemOid: this._id
        }, dfd, {});

        return dfd.promise();
      },

      /**
       * @param {Object} permission .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      updatePermission: function(permission, options) {
        var dfd = new $.Deferred();
        var col = this._collection;

        if (typeof(options) === 'undefined') {
          options = {};
        }

        monaca.cloud._post('Collection.updatePermission', {
          collectionName: col.name,
          criteria: '_id == ?',
          bindParams: [this._id],
          permission: permission,
          options: options
        }, dfd, {});

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      remove: function() {
        var dfd = new $.Deferred();
        var col = this._collection;

        monaca.cloud._post('Collection.delete', {
          collectionName: col.name,
          itemOid: this._id,
        }, dfd, {});

        return dfd.promise();
      },

      'delete': function() {
        return this.remove();
      }

    };


    return MonacaCloudCollectionItem;
  })();

  monaca.cloud.CollectionItem = function(item, collection) {
    return new MonacaCloudCollectionItem(item, collection);
  };

})(window);
/*
 * Collection
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  MonacaCloudCollection = (function() {

    function MonacaCloudCollection(name) {
      this.name = name;
    }

    MonacaCloudCollection.prototype = {

      /**
       * @param {Object|Array} items .
       * @return {Array} result .
       */
      _makeCollectionItem: function(items) {
        var result = [];

        if (items instanceof Array) {
          for (var i = 0; i < items.length; i++) {
            result[i] = monaca.cloud.CollectionItem(items[i], this);
          }
        } else {
          result = monaca.cloud.CollectionItem(items, this);
        }

        return result;
      },

      /**
       * @param {Criteria|Array} criteria .
       */
      _validateCriteria: function(criteria) {
        if ((typeof(criteria) === 'undefined') || (typeof(criteria) === 'null')) {
          criteria = monaca.cloud.Criteria('');
        } else if (typeof(criteria) === 'string') {
          criteria = monaca.cloud.Criteria(criteria);
        }

        return criteria;
      },

      /**
       * @param {Object|Array} orderBy .
       * @param {Object} options .
       */
      _validateOptions: function(orderBy, options) {
        //if orderBy is hash, consider it as "options"
        if ((typeof(orderBy) === 'object') && (typeof(orderBy.length) === 'undefined')) {
          options = orderBy;
          if (typeof(options.orderBy) !== 'undefined') {
            orderBy = orderBy.orderBy;
          } else {
            orderBy = null;
          }
        }

        if (orderBy === '') {
          orderBy = null;
        }

        return {
          orderBy: orderBy,
          options: options
        };
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      find: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            e.result.items = self._makeCollectionItem(e.result.items);
            dfd.resolve(e.result);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      findMine: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        var userOid = monaca.cloud.User._oid;

        if (criteria.query != '') {
          criteria.query = '(' + criteria.query + ') && ';
        }
        if (userOid != null) {
          criteria.query += '(_ownerUserOid == ?)';
          criteria.bindParams.push(userOid);
        } else {
          criteria.query += '(_ownerDeviceOid == ?)';
          criteria.bindParams.push(monaca.cloud.deviceId);
        }

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            e.result.items = self._makeCollectionItem(e.result.items);
            dfd.resolve(e.result);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      findOne: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            var result = (e.result.totalItems > 0) ? self._makeCollectionItem(e.result.items[0]) : null;
            dfd.resolve(result);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {String|Array} [orderBy] .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      findOneMine: function(criteria, orderBy, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);
        var o = self._validateOptions(orderBy, options);

        var userOid = monaca.cloud.User._oid;

        if (criteria.query != '') {
          criteria.query = '(' + criteria.query + ') && ';
        }
        if (userOid != null) {
          criteria.query += '(_ownerUserOid == ?)';
          criteria.bindParams.push(userOid);
        } else {
          criteria.query += '(_ownerDeviceOid == ?)';
          criteria.bindParams.push(monaca.cloud.deviceId);
        }

        monaca.cloud._post('Collection.find', {
            collectionName: this.name,
            criteria: criteria.query,
            bindParams: criteria.bindParams,
            orderBy: o.orderBy,
            options: o.options
          }, dfd, {},
          function(e, status, xhr, dfd) {
            var result = (e.result.totalItems > 0) ? self._makeCollectionItem(e.result.items[0]) : null;
            dfd.resolve(result);
          });

        return dfd.promise();
      },

      /**
       * @param {Object} item .
       * @param {Object} [permission] .
       * @return {$.Promise} .
       */
      insert: function(item, permission) {
        var self = this;
        var dfd = new $.Deferred();

        if (typeof(permission) === 'undefined') {
          permission = {};
        }

        monaca.cloud._post('Collection.insert', {
            collectionName: this.name,
            item: item,
            permission: permission
          }, dfd, {},
          function(e, status, xhr, dfd) {
            var item = self._makeCollectionItem(e.result.item);
            dfd.resolve(item);
          });

        return dfd.promise();
      },

      /**
       * @param {Criteria|String} criteria .
       * @param {Object} permission .
       * @param {Object} [options] .
       * @return {$.Promise} .
       */
      updatePermission: function(criteria, permission, options) {
        var self = this;
        var dfd = new $.Deferred();

        criteria = self._validateCriteria(criteria);

        monaca.cloud._post('Collection.updatePermission', {
          collectionName: this.name,
          criteria: criteria.query,
          bindParams: criteria.bindParams,
          permission: permission,
          options: options
        }, dfd, {});

        return dfd.promise();
      }
    };

    return MonacaCloudCollection;
  })();


  monaca.cloud.Collection = function(name) {
    return new MonacaCloudCollection(name);
  };

})(window);
/*
 * Criteria
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  MonacaCloudCriteria = (function() {

    function MonacaCloudCriteria(query, bindParams) {
      this.query = query;
      this.bindParams = (typeof(bindParams) !== 'undefined') ? bindParams : [];
    }

    return MonacaCloudCriteria;
  })();


  monaca.cloud.Criteria = function(query, bindParams) {
    return new MonacaCloudCriteria(query, bindParams);
  };

})(window);
/*
 * Device
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  monaca.cloud.Device = {

    /**
     * @param {String} name .
     * @return {$.Promise} .
     */
    getProperty: function(name) {
      var dfd = new $.Deferred();

      monaca.cloud._post('Device.getProperties', {
          names: [name]
        }, dfd, {},
        function(e, status, xhr, dfd) {
          dfd.resolve(e.result.properties[name]);
        }
      );

      return dfd.promise();
    },

    /**
     * @param {Array} names .
     * @return {$.Promise} .
     */
    getProperties: function(names) {
      var dfd = new $.Deferred();

      monaca.cloud._post('Device.getProperties', {
          names: names
        }, dfd, {},
        function(e, status, xhr, dfd) {
          dfd.resolve(e.result.properties);
        }
      );

      return dfd.promise();
    },

    /**
     * @param {String} name .
     * @param {String} value .
     * @return {$.Promise} .
     */
    saveProperty: function(name, value) {
      var dfd = new $.Deferred();
      var param = {};

      if ((typeof(name) !== 'undefined') && (typeof(value) !== 'undefined')) {
        param = {
          properties: {}
        };
        param.properties[name] = value;
      }

      monaca.cloud._post('Device.saveProperties', param, dfd);

      return dfd.promise();
    },

    /**
     * @param {Object} properties .
     * @return {$.Promise} .
     */
    saveProperties: function(properties) {
      var dfd = new $.Deferred();
      var param = {};

      if (typeof(properties) !== 'undefined') param.properties = properties;
      monaca.cloud._post('Device.saveProperties', param, dfd);

      return dfd.promise();
    }

  };

})(window);
/*
 * Mailer
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  monaca.cloud.Mailer = {

    /**
     * @param {String} userOid .
     * @param {String} templateName .
     * @param {Object} substituteParams .
     * @param {Object} [options] .
     * @return {$.Promise} .
     */
    sendMail: function(userOid, templateName, substituteParams, options) {
      var dfd = new $.Deferred();

      if (typeof(options) === 'undefined') {
        options = {};
      }

      monaca.cloud._post('Mailer.sendMail', {
        userOid: userOid,
        templateName: templateName,
        substituteParams: substituteParams,
        options: options
      }, dfd);

      return dfd.promise();
    }
  };

})(window);
/*
 * User
 */
(function(root) {

  var monaca = root.monaca = root.monaca || {};
  monaca.cloud = monaca.cloud || {};
  var $ = monaca.cloud.$;

  /**
   * @class
   */
  monaca.cloud.User = (function() {


    return {

      _oid: null,

      /**
       * @return {Boolean} .
       */
      isAuthenticated: function() {
        return (this._oid === null) ? false : true;
      },


      /**
       * @param {String} username .
       * @param {String} password .
       * @param {Object} [properties] .
       * @return {$.Promise} .
       */
      register: function(username, password, properties) {
        var dfd = new $.Deferred();
        var self = this;

        if (typeof(properties) === 'undefined') properties = {};

        monaca.cloud._post('User.register', {
            username: username,
            password: password,
            properties: properties
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );


        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {Object} properties .
       * @return {$.Promise} .
       */
      validate: function(username, properties) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.validate', {
          username: username,
          properties: properties
        }, dfd);

        return dfd.promise();
      },

      /**
       * @param {String} password .
       * @return {$.Promise} .
       */
      unregister: function(password) {
        var self = this,
          dfd = new $.Deferred();

        monaca.cloud._post('User.unregister', {
            password: password
          }, dfd, {},
          function() {
            self._oid = null;
            monaca.cloud._setSessionId('');
            localStorage.removeItem('monacaCloudLoginToken');
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {String} password .
       * @return {$.Promise} .
       */
      login: function(username, password) {
        var self = this,
          dfd = new $.Deferred();

        monaca.cloud._post('User.login', {
            username: username,
            password: password
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      autoLogin: function() {
        var dfd = new $.Deferred();
        var token = localStorage.monacaCloudLoginToken || '';
        var self = this;

        monaca.cloud._post('User.autoLogin', {
            loginToken: token
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );

        return dfd.promise();
      },

      /**
       * @return {$.Promise} .
       */
      logout: function() {
        var self = this,
          dfd = new $.Deferred();

        monaca.cloud._post('User.logout', {}, dfd, {},
          function() {
            self._oid = null;
            monaca.cloud._setSessionId('');
            localStorage.removeItem('monacaCloudLoginToken');
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} oldPassword .
       * @param {String} newPassword .
       * @return {$.Promise} .
       */
      updatePassword: function(oldPassword, newPassword) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.updatePassword', {
          oldPassword: oldPassword,
          newPassword: newPassword
        }, dfd);

        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {Object} options .
       * @return {$.Promise} .
       */
      sendPasswordResetToken: function(username, options) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.sendPasswordResetToken', {
          username: username,
          options: options
        }, dfd);

        return dfd.promise();
      },

      /**
       * @param {String} username .
       * @param {String} newPassword .
       * @param {String} token .
       * @return {$.Promise} .
       */
      resetPasswordAndLogin: function(username, newPassword, token) {
        var dfd = new $.Deferred();
        var self = this;

        monaca.cloud._post('User.resetPasswordAndLogin', {
            username: username,
            newPassword: newPassword,
            token: token
          }, dfd, {},
          function(jsonResponse) {
            self._oid = jsonResponse.result.user._id;
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} name .
       * @return {$.Promise} .
       */
      getProperty: function(name) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.getProperties', {
            names: [name]
          }, dfd, {},
          function(e, status, xhr, dfd) {
            dfd.resolve(e.result.properties[name]);
          }
        );

        return dfd.promise();
      },

      /**
       * @param {Array} names .
       * @return {$.Promise} .
       */
      getProperties: function(names) {
        var dfd = new $.Deferred();

        monaca.cloud._post('User.getProperties', {
            names: names
          }, dfd, {},
          function(e, status, xhr, dfd) {
            dfd.resolve(e.result.properties);
          }
        );

        return dfd.promise();
      },

      /**
       * @param {String} name .
       * @param {String} value .
       * @return {$.Promise} .
       */
      saveProperty: function(name, value) {
        var dfd = new $.Deferred();
        var param = {};

        if (typeof(name) !== 'undefined') {
          param = {
            properties: {}
          };
          param.properties[name] = value;
        }

        monaca.cloud._post('User.saveProperties', param, dfd);

        return dfd.promise();
      },

      /**
       * @param {Object} properties .
       * @return {$.Promise} .
       */
      saveProperties: function(properties) {
        var dfd = new $.Deferred();
        var param = {};

        if (typeof(properties) !== 'undefined') param.properties = properties;
        monaca.cloud._post('User.saveProperties', param, dfd);

        return dfd.promise();
      }

    };
  })();

})(window);

;
/*** <End:monaca-core-utils LoadJs:"components/monaca-core-utils/monaca-core-utils.js"> ***/
/*** <End:monaca-core-utils> ***/

/*** <Start:monaca-onsenui> ***/
/*** <Start:monaca-onsenui LoadJs:"components/monaca-onsenui/js/onsenui.min.js"> ***/
/* onsenui v2.10.10 - 2019-07-29 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ons=e()}(this,function(){"use strict";function t(t){kt.set(t,!0)}function e(t){var e=wt.get(t,[])||[];wt.delete(t),e.forEach(function(t){return t()})}function n(n){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(void 0===kt&&(kt=new WeakMap,wt=new WeakMap),function(t,e){wt.has(t)||wt.set(t,[]),wt.get(t).push(e)}(n,i),function(e){return e.childNodes.length>0&&t(e),kt.has(e)}(n))e(n);else{new MutationObserver(function(i){t(n),e(n)}).observe(n,{childList:!0,characterData:!0}),setImmediate(function(){t(n),e(n)})}}function i(t){t._destroy instanceof Function?t._destroy():t.remove()}function o(t,e){return e={exports:{}},t(e,e.exports),e.exports}function r(t){var e=gi.has(t),n=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(t);return!e&&n}function a(t){var e=t.isConnected;if(void 0!==e)return e;for(var n=t;n&&!(n.__CE_isImportDocument||n instanceof Document);)n=n.parentNode||(window.ShadowRoot&&n instanceof ShadowRoot?n.host:void 0);return!(!n||!(n.__CE_isImportDocument||n instanceof Document))}function s(t,e){for(var n=e;n&&n!==t&&!n.nextSibling;)n=n.parentNode;return n&&n!==t?n.nextSibling:null}function l(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Set,i=t;i;){if(i.nodeType===Node.ELEMENT_NODE){var o=i;e(o);var r=o.localName;if("link"===r&&"import"===o.getAttribute("rel")){var a=o.import;if(a instanceof Node&&!n.has(a)){n.add(a);for(var u=a.firstChild;u;u=u.nextSibling)l(u,e,n)}i=s(t,o);continue}if("template"===r){i=s(t,o);continue}var c=o.__CE_shadowRoot;if(c)for(var h=c.firstChild;h;h=h.nextSibling)l(h,e,n)}i=function(t,e){return e.firstChild?e.firstChild:s(t,e)}(t,i)}}function u(t,e,n){t[e]=n}var c={},h=function(){var t=window.getComputedStyle(document.documentElement,""),e=(Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/)||""===t.OLink&&["","o"])[1];return function(t){return"-"+e+"-"+Q.hyphenate(t)}}(),d=function(t,e){return Object.keys(e).forEach(function(n){n in t.style?t.style[n]=e[n]:h(n)in t.style?t.style[h(n)]=e[n]:Q.warn("No such style property: "+n)}),t};d.clear=function(t){for(var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"").split(/\s+/).reduce(function(t,e){return t.concat([Q.hyphenate(e),h(e)])},[]),n=[],i=t.style.length-1;i>=0;i--)!function(i){var o=t.style[i];(0===e.length||e.some(function(t){return 0===o.indexOf(t)}))&&n.push(o)}(i);n.forEach(function(e){return t.style[e]=""}),""===t.getAttribute("style")&&t.removeAttribute("style")};var f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},g=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),m=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},v=function t(e,n,i){null===e&&(e=Function.prototype);var o=Object.getOwnPropertyDescriptor(e,n);if(void 0===o){var r=Object.getPrototypeOf(e);return null===r?void 0:t(r,n,i)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(i)},b=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},y=function(t,e){var n={};for(var i in t)e.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},k=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},w=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},E=window.HTMLElement,C=new(function(){function t(){p(this,t),this._selectedPlatform=null,this._ignorePlatformSelect=!1}return g(t,[{key:"select",value:function(t){"string"==typeof t&&(this._selectedPlatform=t.trim().toLowerCase())}},{key:"_getSelectedPlatform",value:function(){return this._ignorePlatformSelect?null:this._selectedPlatform}},{key:"_runOnActualPlatform",value:function(t){this._ignorePlatformSelect=!0;var e=t();return this._ignorePlatformSelect=!1,e}},{key:"isWebView",value:function(){if("loading"===document.readyState||"uninitialized"==document.readyState)throw new Error("isWebView() method is available after dom contents loaded.");return!!(window.cordova||window.phonegap||window.PhoneGap)}},{key:"isIPhone",value:function(){return/iPhone/i.test(navigator.userAgent)}},{key:"isIPhoneX",value:function(){return this.isIPhone()&&(375===window.screen.width&&812===window.screen.height||812===window.screen.width&&375===window.screen.height||414===window.screen.width&&896===window.screen.height||896===window.screen.width&&414===window.screen.height)}},{key:"isIPad",value:function(){return/iPad/i.test(navigator.userAgent)}},{key:"isIPod",value:function(){return/iPod/i.test(navigator.userAgent)}},{key:"isIOS",value:function(t){return!t&&this._getSelectedPlatform()?"ios"===this._getSelectedPlatform():"object"!==("undefined"==typeof device?"undefined":f(device))||/browser/i.test(device.platform)?/iPhone|iPad|iPod/i.test(navigator.userAgent):/iOS/i.test(device.platform)}},{key:"isIOS7above",value:function(){if("object"===("undefined"==typeof device?"undefined":f(device))&&!/browser/i.test(device.platform))return/iOS/i.test(device.platform)&&parseInt(device.version.split(".")[0])>=7;if(/iPhone|iPad|iPod/i.test(navigator.userAgent)){var t=(navigator.userAgent.match(/\b[0-9]+_[0-9]+(?:_[0-9]+)?\b/)||[""])[0].replace(/_/g,".");return parseInt(t.split(".")[0])>=7}return!1}},{key:"isIOSSafari",value:function(){var t=window.navigator,e=t.userAgent;return!(!this.isIOS()||-1===e.indexOf("Safari")||-1===e.indexOf("Version")||t.standalone)}},{key:"isWKWebView",value:function(){var t=/constructor/i.test(E);return!(!(this.isIOS()&&window.webkit&&window.webkit.messageHandlers&&window.indexedDB)||t)}},{key:"isUIWebView",value:function(){return!(!this.isIOS()||this.isIOSSafari()||this.isWKWebView())}},{key:"isAndroidPhone",value:function(){return/Android/i.test(navigator.userAgent)&&/Mobile/i.test(navigator.userAgent)}},{key:"isAndroidTablet",value:function(){return/Android/i.test(navigator.userAgent)&&!/Mobile/i.test(navigator.userAgent)}},{key:"isAndroid",value:function(t){return!t&&this._getSelectedPlatform()?"android"===this._getSelectedPlatform():/Android/i.test("object"!==("undefined"==typeof device?"undefined":f(device))||/browser/i.test(device.platform)?navigator.userAgent:device.platform)}},{key:"isWP",value:function(t){return!t&&this._getSelectedPlatform()?"wp"===this._getSelectedPlatform():"object"!==("undefined"==typeof device?"undefined":f(device))||/browser/i.test(device.platform)?/Windows Phone|IEMobile|WPDesktop/i.test(navigator.userAgent):/Win32NT|WinCE/i.test(device.platform)}},{key:"isBlackBerry",value:function(t){return!t&&this._getSelectedPlatform()?"blackberry"===this._getSelectedPlatform():"object"!==("undefined"==typeof device?"undefined":f(device))||/browser/i.test(device.platform)?/BlackBerry|RIM Tablet OS|BB10/i.test(navigator.userAgent):/BlackBerry/i.test(device.platform)}},{key:"isOpera",value:function(t){return!t&&this._getSelectedPlatform()?"opera"===this._getSelectedPlatform():!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0}},{key:"isFirefox",value:function(t){return!t&&this._getSelectedPlatform()?"firefox"===this._getSelectedPlatform():"undefined"!=typeof InstallTrigger}},{key:"isSafari",value:function(t){return!t&&this._getSelectedPlatform()?"safari"===this._getSelectedPlatform():Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||"[object SafariRemoteNotification]"===(!window["safari"]||safari.pushNotification).toString()}},{key:"isChrome",value:function(t){return!t&&this._getSelectedPlatform()?"chrome"===this._getSelectedPlatform():!(!window.chrome||window.opera||navigator.userAgent.indexOf(" OPR/")>=0||navigator.userAgent.indexOf(" Edge/")>=0)}},{key:"isIE",value:function(t){return!t&&this._getSelectedPlatform()?"ie"===this._getSelectedPlatform():!!document.documentMode}},{key:"isEdge",value:function(t){return!t&&this._getSelectedPlatform()?"edge"===this._getSelectedPlatform():navigator.userAgent.indexOf(" Edge/")>=0}},{key:"getMobileOS",value:function(){return this.isAndroid()?"android":this.isIOS()?"ios":this.isWP()?"wp":"other"}},{key:"getIOSDevice",value:function(){return this.isIPhone()?"iphone":this.isIPad()?"ipad":this.isIPod()?"ipod":"na"}}]),t}()),A=function(t){return Q.throw("In PageAttributeExpression: "+t)},S={_variables:{},defineVariable:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];"string"!=typeof t?A("Variable name must be a string"):"string"!=typeof e&&"function"!=typeof e?A("Variable value must be a string or a function"):this._variables.hasOwnProperty(t)&&!n&&A('"'+t+'" is already defined'),this._variables[t]=e},getVariable:function(t){return this._variables.hasOwnProperty(t)?this._variables[t]:null},removeVariable:function(t){delete this._variables[t]},getAllVariables:function(){return this._variables},_parsePart:function(t){var e=void 0,n=!1,i=0,o=[];0===t.length&&A("Unable to parse empty string");for(var r=0;r<t.length;r++)if("$"===(e=t.charAt(r))&&"{"===t.charAt(r+1)){n&&A("Nested interpolation not supported");t.substring(i,r).length>0&&o.push(t.substring(i,r)),i=r,n=!0}else if("}"===e){n||A("} must be preceeded by ${");t.substring(i,r+1).length>0&&o.push(t.substring(i,r+1)),i=r+1,n=!1}return n&&A("Unterminated interpolation"),o.push(t.substring(i,t.length)),o},_replaceToken:function(t){var e=t.match(/^\${(.*?)}$/);if(!e)return t;var n=e[1].trim(),i=this.getVariable(n);if(null!==i){if("string"==typeof i)return i;var o=i();return"string"!=typeof o&&A("Must return a string"),o}A('Variable "'+n+'" does not exist')},_replaceTokens:function(t){return t.map(this._replaceToken.bind(this))},_parseExpression:function(t){return t.split(",").map(function(t){return t.trim()}).map(this._parsePart.bind(this)).map(this._replaceTokens.bind(this)).map(function(t){return t.join("")})},evaluate:function(t){return t?this._parseExpression(t):[]}};S.defineVariable("mobileOS",C.getMobileOS()),S.defineVariable("iOSDevice",C.getIOSDevice()),S.defineVariable("runtime",function(){return C.isWebView()?"cordova":"browser"});var P={};P.config={autoStatusBarFill:!0,animationsDisabled:!1,warningsDisabled:!1},P.nullElement=window.document.createElement("div"),P.isEnabledAutoStatusBarFill=function(){return!!P.config.autoStatusBarFill},P.normalizePageHTML=function(t){return(""+t).trim()},P.waitDOMContentLoaded=function(t){if("loading"===window.document.readyState||"uninitialized"==window.document.readyState){window.document.addEventListener("DOMContentLoaded",function e(){t(),window.document.removeEventListener("DOMContentLoaded",e)})}else setImmediate(t)},P.autoStatusBarFill=function(t){var e=function e(){P.shouldFillStatusBar()&&t(),document.removeEventListener("deviceready",e)};"object"===("undefined"==typeof device?"undefined":f(device))?document.addEventListener("deviceready",e):-1===["complete","interactive"].indexOf(document.readyState)?P.waitDOMContentLoaded(e):e()},P.shouldFillStatusBar=function(){return P.isEnabledAutoStatusBarFill()&&(C.isWebView()&&C.isIOS7above()&&!C.isIPhoneX()||document.body.querySelector(".ons-status-bar-mock.ios"))},P.templateStore={_storage:{},get:function(t){return P.templateStore._storage[t]||null},set:function(t,e){P.templateStore._storage[t]=e}},window.document.addEventListener("_templateloaded",function(t){"ons-template"===t.target.nodeName.toLowerCase()&&P.templateStore.set(t.templateId,t.template)},!1),P.waitDOMContentLoaded(function(){function t(t){for(var e=window.document.querySelectorAll(t),n=0;n<e.length;n++)P.templateStore.set(e[n].getAttribute("id"),e[n].textContent||e[n].content)}t('script[type="text/ons-template"]'),t('script[type="text/template"]'),t('script[type="text/ng-template"]'),t("template")}),P.getTemplateHTMLAsync=function(t){return new Promise(function(e,n){P.waitDOMContentLoaded(function(){var i=P.templateStore.get(t);if(i){if(i instanceof DocumentFragment)return e(i);var o="string"==typeof i?i:i[1];return e(P.normalizePageHTML(o))}var r=window.document.getElementById(t);if(r){var a=r.textContent||r.content;return e(a)}var s=new XMLHttpRequest;s.open("GET",t,!0),s.onload=function(){var i=s.responseText;if(s.status>=400&&s.status<600)n(i);else{var o=Q.createFragment(i);Q.arrayFrom(o.querySelectorAll("script")).forEach(function(t){var e=document.createElement("script");e.type=t.type||"text/javascript",e.appendChild(document.createTextNode(t.text||t.textContent||t.innerHTML)),t.parentNode.replaceChild(e,t)}),P.templateStore.set(t,o),e(o)}},s.onerror=function(){Q.throw("Page template not found: "+t)},s.send(null)})})},P.getPageHTMLAsync=function(t){var e=S.evaluate(t);return function t(n){return"string"!=typeof n?Promise.reject("Must specify a page."):P.getTemplateHTMLAsync(n).catch(function(n){return 0===e.length?Promise.reject(n):t(e.shift())})}(e.shift())};var O=function(){function t(e){p(this,t),this._animators=e.animators,this._baseClass=e.baseClass,this._baseClassName=e.baseClassName||e.baseClass.name,this._animation=e.defaultAnimation||"default",this._animationOptions=e.defaultAnimationOptions||{},this._animators[this._animation]||Q.throw("No such animation: "+this._animation)}return g(t,[{key:"setAnimationOptions",value:function(t){this._animationOptions=t}},{key:"newAnimator",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1],n=null;if(t.animation instanceof this._baseClass)return t.animation;var i=null;if("string"==typeof t.animation&&(i=this._animators[t.animation]),!i&&e)n=e;else{i=i||this._animators[this._animation];var o=Q.extend({},this._animationOptions,t.animationOptions||{},P.config.animationsDisabled?{duration:0,delay:0}:{});"function"==typeof(n=new i(o))&&(n=new n(o))}return n instanceof this._baseClass||Q.throw('"animator" is not an instance of '+this._baseClassName),n}}],[{key:"parseAnimationOptionsString",value:function(t){try{if("string"==typeof t){var e=Q.animationOptionsParse(t);if("object"===(void 0===e?"undefined":f(e))&&null!==e)return e;console.error('"animation-options" attribute must be a JSON object string: '+t)}return{}}catch(e){return console.error('"animation-options" attribute must be a JSON object string: '+t),{}}}}]),t}(),x=!0,T={quiet:"material--flat",light:"material--flat",outline:"material--flat",cta:"","large--quiet":"material--flat large","large--cta":"large",noborder:"",tappable:""},L={};L.android=function(t){var e=t.tagName.toLowerCase();if(!Q.hasModifier(t,"material")){var n=(t.getAttribute("modifier")||"").trim().split(/\s+/).map(function(t){return T.hasOwnProperty(t)?T[t]:t});n.unshift("material"),t.setAttribute("modifier",n.join(" ").trim())}-1===["ons-alert-dialog-button","ons-toolbar-button","ons-back-button","ons-button","ons-list-item","ons-fab","ons-speed-dial","ons-speed-dial-item","ons-tab"].indexOf(e)||t.hasAttribute("ripple")||t.querySelector("ons-ripple")||("ons-list-item"===e?t.hasAttribute("tappable")&&(t.setAttribute("ripple",""),t.removeAttribute("tappable")):t.setAttribute("ripple",""))},L.ios=function(t){Q.removeModifier(t,"material")&&(Q.removeModifier(t,"material--flat")&&Q.addModifier(t,Q.removeModifier(t,"large")?"large--quiet":"quiet"),t.getAttribute("modifier")||t.removeAttribute("modifier")),t.hasAttribute("ripple")&&("ons-list-item"===t.tagName.toLowerCase()&&t.setAttribute("tappable",""),t.removeAttribute("ripple"))};var M={android:!0},D=function(t,e){if(x&&!t.hasAttribute("disable-auto-styling")){var n=C.getMobileOS();if(L.hasOwnProperty(n)&&(M.hasOwnProperty(n)||e))return n}return null},I=function(t,e,n){return D(e,n)?t.split(/\s+/).map(function(t){return T.hasOwnProperty(t)?T[t]:t}).join(" "):t},N={isEnabled:function(){return x},enable:function(){return x=!0},disable:function(){return x=!1},prepare:function(t,e){var n=D(t,e);n&&L[n](t)},mapModifier:I,getPlatform:D,restoreModifier:function(t){if("android"===D(t)){var e=t.getAttribute("modifier")||"",n=I(e,t);if(/(^|\s+)material($|\s+)/i.test(e)||(n="material "+n),n!==e)return t.setAttribute("modifier",n.trim()),!0}return!1}},B=function(){function t(){p(this,t)}return g(t,null,[{key:"diff",value:function(e,n){function i(e){var n={};return t.split(e).forEach(function(t){return n[t]=t}),n}e=i((""+e).trim()),n=i((""+n).trim());var o=Object.keys(e).reduce(function(t,e){return n[e]||t.push(e),t},[]);return{added:Object.keys(n).reduce(function(t,n){return e[n]||t.push(n),t},[]),removed:o}}},{key:"applyDiffToClassList",value:function(t,e,n){t.added.map(function(t){return n.replace(/\*/g,t)}).forEach(function(t){return t.split(/\s+/).forEach(function(t){return e.add(t)})}),t.removed.map(function(t){return n.replace(/\*/g,t)}).forEach(function(t){return t.split(/\s+/).forEach(function(t){return e.remove(t)})})}},{key:"applyDiffToElement",value:function(e,n,i){Object.keys(i).forEach(function(o){for(var r=!o||Q.match(n,o)?[n]:Array.prototype.filter.call(n.querySelectorAll(o),function(t){return!Q.findParent(t,n.tagName,function(t){return t===n})}),a=0;a<r.length;a++)t.applyDiffToClassList(e,r[a].classList,i[o])})}},{key:"onModifierChanged",value:function(e,n,i,o){t.applyDiffToElement(t.diff(e,n),i,o),N.restoreModifier(i)}},{key:"refresh",value:function(e,n){t.applyDiffToElement(t.diff("",e.getAttribute("modifier")||""),e,n)}},{key:"initModifier",value:function(e,n){var i=e.getAttribute("modifier");"string"==typeof i&&t.applyDiffToElement({removed:[],added:t.split(i)},e,n)}},{key:"split",value:function(t){return"string"!=typeof t?[]:t.trim().split(/ +/).filter(function(t){return""!==t})}},{key:"addModifier",value:function(e,n){if(e.hasAttribute("modifier")){var i=t.split(e.getAttribute("modifier"));-1==i.indexOf(n)&&(i.push(n),e.setAttribute("modifier",i.join(" ")))}else e.setAttribute("modifier",n)}},{key:"removeModifier",value:function(e,n){if(e.hasAttribute("modifier")){var i=t.split(e.getAttribute("modifier")),o=i.indexOf(n);-1!==o&&(i.splice(o,1),e.setAttribute("modifier",i.join(" ")))}}}]),t}(),j={_ready:!1,_domContentLoaded:!1,_onDOMContentLoaded:function(){j._domContentLoaded=!0,C.isWebView()?window.document.addEventListener("deviceready",function(){j._ready=!0},!1):j._ready=!0},addBackButtonListener:function(t){if(!this._domContentLoaded)throw new Error("This method is available after DOMContentLoaded");this._ready?window.document.addEventListener("backbutton",t,!1):window.document.addEventListener("deviceready",function(){window.document.addEventListener("backbutton",t,!1)})},removeBackButtonListener:function(t){if(!this._domContentLoaded)throw new Error("This method is available after DOMContentLoaded");this._ready?window.document.removeEventListener("backbutton",t,!1):window.document.addEventListener("deviceready",function(){window.document.removeEventListener("backbutton",t,!1)})}};window.addEventListener("DOMContentLoaded",function(){return j._onDOMContentLoaded()},!1);var H={_store:{},_genId:function(){var t=0;return function(){return t++}}(),set:function(t,e){t.dataset.deviceBackButtonHandlerId&&this.remove(t);var n=t.dataset.deviceBackButtonHandlerId=H._genId();this._store[n]=e},remove:function(t){t.dataset.deviceBackButtonHandlerId&&(delete this._store[t.dataset.deviceBackButtonHandlerId],delete t.dataset.deviceBackButtonHandlerId)},get:function(t){if(t.dataset.deviceBackButtonHandlerId){var e=t.dataset.deviceBackButtonHandlerId;if(!this._store[e])throw new Error;return this._store[e]}},has:function(t){if(!t.dataset)return!1;var e=t.dataset.deviceBackButtonHandlerId;return!!this._store[e]}},R=new(function(){function t(){p(this,t),this._isEnabled=!1,this._boundCallback=this._callback.bind(this)}return g(t,[{key:"enable",value:function(){this._isEnabled||(j.addBackButtonListener(this._boundCallback),this._isEnabled=!0)}},{key:"disable",value:function(){this._isEnabled&&(j.removeBackButtonListener(this._boundCallback),this._isEnabled=!1)}},{key:"fireDeviceBackButtonEvent",value:function(){var t=document.createEvent("Event");t.initEvent("backbutton",!0,!0),document.dispatchEvent(t)}},{key:"_callback",value:function(){this._dispatchDeviceBackButtonEvent()}},{key:"createHandler",value:function(t,e){if(!(t instanceof HTMLElement))throw new Error("element must be an instance of HTMLElement");if(!(e instanceof Function))throw new Error("callback must be an instance of Function");var n={_callback:e,_element:t,disable:function(){H.remove(t)},setListener:function(t){this._callback=t},enable:function(){H.set(t,this)},isEnabled:function(){return H.get(t)===this},destroy:function(){H.remove(t),this._callback=this._element=null}};return n.enable(),n}},{key:"_dispatchDeviceBackButtonEvent",value:function(){function t(e){return{_element:e,callParentHandler:function(){for(var e=this._element.parentNode;e;){if(i=H.get(e))return i._callback(t(e));e=e.parentNode}}}}var e=this._captureTree(),n=this._findHandlerLeafElement(e),i=H.get(n);i._callback(t(n))}},{key:"_captureTree",value:function(){function t(e){var n={element:e,children:Array.prototype.concat.apply([],function(t){for(var e=[],n=0;n<t.length;n++)e.push(t[n]);return e}(e.children).map(function(e){if("none"===e.style.display||!1===e._isShown)return[];if(0===e.children.length&&!H.has(e))return[];var n=t(e);return 0!==n.children.length||H.has(n.element)?[n]:[]}))};if(!H.has(n.element))for(var i=0;i<n.children.length;i++){var o=n.children[i];if(H.has(o.element))return o}return n}return t(document.body)}},{key:"_findHandlerLeafElement",value:function(t){function e(t){return 0===t.children.length?t.element:1===t.children.length?e(t.children[0]):t.children.map(function(t){return t.element}).reduce(function(t,e){if(!t)return e;var n=parseInt(window.getComputedStyle(t,"").zIndex,10),i=parseInt(window.getComputedStyle(e,"").zIndex,10);if(!isNaN(n)&&!isNaN(i))return n>i?t:e;throw new Error("Capturing backbutton-handler is failure.")},null)}return e(t)}}]),t}());P.AnimatorFactory=O,P.ModifierUtil=B,P.dbbDispatcher=R;var F=function(t,e){return t.substr(0,e.length)===e},q=function(t,e){return t.substr(t.length-e.length,e.length)===e},z=function(t){return t.slice(1,-1)},V=function(t){return F(t,"{")&&q(t,"}")},W=function(t){return F(t,"[")&&q(t,"]")},U=function(t){return F(t,"'")&&q(t,"'")||F(t,'"')&&q(t,'"')},X=function(t,e,n){throw new Error("Unexpected token '"+t+"' at position "+(n.length-e.length-1)+" in string: '"+n+"'")},Y=function(t,e,n){return"true"===t||"false"===t?"true"===t:U(t)?z(t):isNaN(t)?V(t)?$(z(t)):W(t)?K(z(t)):void X(t,e,n):+t},G=function(t){var e=(t=t.trim()).length;if(":"===t[0]||","===t[0])e=1;else if("{"===t[0]||"["===t[0]){for(var n=t.charCodeAt(0),i=1,o=1;o<t.length;o++)if(t.charCodeAt(o)===n)i++;else if(t.charCodeAt(o)===n+2&&0==--i){e=o+1;break}}else if("'"===t[0]||'"'===t[0]){for(var r=1;r<t.length;r++)if(t[r]===t[0]){e=r+1;break}}else for(var a=1;a<t.length;a++)if(-1!==[" ",",",":"].indexOf(t[a])){e=a;break}return t.slice(0,e)},$=function(t){for(var e=t=t.trim(),n={},i=!0,o=void 0,r=void 0,a=void 0;t.length>0;)if(r=a,a=G(t),t=t.slice(a.length,t.length).trim(),":"===a&&(!i||!r||","===r)||","===a&&i||":"!==a&&","!==a&&r&&","!==r&&":"!==r)X(a,t,e);else if(":"===a&&i&&r){if(r=U(r)?z(r):r,!function(t){return/^[A-Z_$][A-Z0-9_$]*$/i.test(t)}(r))throw new Error("Invalid key token '"+r+"' at position 0 in string: '"+e+"'");o=r,i=!1}else","===a&&!i&&r&&(n[o]=Y(r,t,e),i=!0);return a&&(n[o]=Y(a,t,e)),n},K=function(t){for(var e=t=t.trim(),n=[],i=void 0,o=void 0;t.length>0;)i=o,o=G(t),t=t.slice(o.length,t.length).trim(),","!==o||i&&","!==i?","===o&&n.push(Y(i,t,e)):X(o,t,e);return o&&(","!==o?n.push(Y(o,t,e)):X(o,t,e)),n},Q={},J="[Onsen UI]";Q.globals={fabOffset:0,errorPrefix:J,supportsPassive:!1},C._runOnActualPlatform(function(){Q.globals.actualMobileOS=C.getMobileOS(),Q.globals.isUIWebView=C.isUIWebView(),Q.globals.isWKWebView=C.isWKWebView()});try{var Z=Object.defineProperty({},"passive",{get:function(){Q.globals.supportsPassive=!0}});window.addEventListener("testPassive",null,Z),window.removeEventListener("testPassive",null,Z)}catch(t){}Q.addEventListener=function(t,e,n,i,o){t.addEventListener(e,n,Q.globals.supportsPassive?i:(i||{}).capture)},Q.removeEventListener=function(t,e,n,i,o){t.removeEventListener(e,n,Q.globals.supportsPassive?i:(i||{}).capture)},Q.prepareQuery=function(t){return t instanceof Function?t:function(e){return Q.match(e,t)}},Q.match=function(t,e){return(t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector).call(t,e)},Q.findChild=function(t,e){for(var n=Q.prepareQuery(e),i=0;i<t.childNodes.length;i++){var o=t.childNodes[i];if(o.nodeType===Node.ELEMENT_NODE&&n(o))return o}return null},Q.findParent=function(t,e,n){for(var i=Q.prepareQuery(e),o=t.parentNode;;){if(!o||o===document||o instanceof DocumentFragment||n&&n(o))return null;if(i(o))return o;o=o.parentNode}},Q.isAttached=function(t){return document.body.contains(t)},Q.hasAnyComponentAsParent=function(t){for(;t&&document.documentElement!==t;)if((t=t.parentNode)&&t.nodeName.toLowerCase().match(/(ons-navigator|ons-tabbar|ons-modal)/))return!0;return!1},Q.getAllChildNodes=function(t){var e;return(e=[t]).concat.apply(e,w(Array.from(t.children).map(function(t){return Q.getAllChildNodes(t)})))},Q.isPageControl=function(t){return t.nodeName.match(/^ons-(navigator|splitter|tabbar|page)$/i)},Q.propagateAction=function(t,e){for(var n=0;n<t.childNodes.length;n++){var i=t.childNodes[n];i[e]instanceof Function?i[e]():Q.propagateAction(i,e)}},Q.camelize=function(t){return t.toLowerCase().replace(/-([a-z])/g,function(t,e){return e.toUpperCase()})},Q.hyphenate=function(t){return t.replace(/([a-zA-Z])([A-Z])/g,"$1-$2").toLowerCase()},Q.create=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.split("."),i=document.createElement(n.shift()||"div");return n.length&&(i.className=n.join(" ")),d(i,e),i},Q.createElement=function(t){var e=document.createElement("div");t instanceof DocumentFragment?e.appendChild(document.importNode(t,!0)):e.innerHTML=t.trim(),e.children.length>1&&Q.throw("HTML template must contain a single root element");var n=e.children[0];return e.children[0].remove(),n},Q.createFragment=function(t){var e=document.createElement("template");return e.innerHTML=t,document.importNode(e.content,!0)},Q.extend=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];for(var o=0;o<n.length;o++)if(n[o])for(var r=Object.keys(n[o]),a=0;a<r.length;a++){var s=r[a];t[s]=n[o][s]}return t},Q.arrayFrom=function(t){return Array.prototype.slice.apply(t)},Q.parseJSONObjectSafely=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{var n=JSON.parse(""+t);if("object"===(void 0===n?"undefined":f(n))&&null!==n)return n}catch(t){return e}return e},Q.findFromPath=function(t){t=t.split(".");for(var e,n=window;e=t.shift();)n=n[e];return n},Q.getTopPage=function(t){return t&&("ons-page"===t.tagName.toLowerCase()?t:t.topPage)||null},Q.findToolbarPage=function(t){var e=Q.getTopPage(t);if(e){if(e._canAnimateToolbar())return e;for(var n=0;n<e._contentElement.children.length;n++){var i=Q.getTopPage(e._contentElement.children[n]);if(i&&!/ons-tabbar/i.test(e._contentElement.children[n].tagName))return Q.findToolbarPage(i)}}return null},Q.triggerElementEvent=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});return Object.keys(n).forEach(function(t){i[t]=n[t]}),t.dispatchEvent(i),i},Q.hasModifier=function(t,e){return!!t.hasAttribute("modifier")&&RegExp("(^|\\s+)"+e+"($|\\s+)","i").test(t.getAttribute("modifier"))},Q.addModifier=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.autoStyle&&(e=N.mapModifier(e,t,n.forceAutoStyle)),!Q.hasModifier(t,e)&&(t.setAttribute("modifier",((t.getAttribute("modifier")||"")+" "+e).trim()),!0)},Q.removeModifier=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(n.autoStyle&&(e=N.mapModifier(e,t,n.forceAutoStyle)),!t.getAttribute("modifier")||!Q.hasModifier(t,e))return!1;var i=t.getAttribute("modifier").split(/\s+/).filter(function(t){return t&&t!==e});return i.length?t.setAttribute("modifier",i.join(" ")):t.removeAttribute("modifier"),!0},Q.toggleModifier=function(){var t=arguments.length>2?arguments.length<=2?void 0:arguments[2]:{},e="boolean"==typeof t?t:t.force;("boolean"==typeof e?e:!Q.hasModifier.apply(Q,arguments))?Q.addModifier.apply(Q,arguments):Q.removeModifier.apply(Q,arguments)},Q.restoreClass=function(t,e,n){e.split(/\s+/).forEach(function(e){return""!==e&&!t.classList.contains(e)&&t.classList.add(e)}),t.hasAttribute("modifier")&&B.refresh(t,n)},Q.updateParentPosition=function(t){!t._parentUpdated&&t.parentElement&&("static"===window.getComputedStyle(t.parentElement).getPropertyValue("position")&&(t.parentElement.style.position="relative"),t._parentUpdated=!0)},Q.toggleAttribute=function(t,e,n){n?t.setAttribute(e,"boolean"==typeof n?"":n):t.removeAttribute(e)},Q.bindListeners=function(t,e){e.forEach(function(e){var n=e.replace(/^_[a-z]/,"_bound"+e[1].toUpperCase());t[n]=t[n]||t[e].bind(t)})},Q.each=function(t,e){return Object.keys(t).forEach(function(n){return e(n,t[n])})},Q.updateRipple=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};void 0===e&&(e=t.hasAttribute("ripple"));var i=Q.findChild(t,"ons-ripple");if(e){if(!i){var o=document.createElement("ons-ripple");Object.keys(n).forEach(function(t){return o.setAttribute(t,n[t])}),t.insertBefore(o,t.firstChild)}}else i&&i.remove()},Q.animationOptionsParse=function(t){if(t=t.trim(),V(t))return $(z(t));if(W(t))return K(z(t));throw new Error("Provided string must be object or array like: "+t)},Q.isInteger=function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t},Q.defer=function(){var t={};return t.promise=new Promise(function(e,n){t.resolve=e,t.reject=n}),t},Q.warn=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];if(!P.config.warningsDisabled){var i;(i=console).warn.apply(i,[J].concat(e))}},Q.throw=function(t){throw new Error(J+" "+t)},Q.throwAbstract=function(){return Q.throw("Cannot instantiate abstract class")},Q.throwMember=function(){return Q.throw("Class member must be implemented")},Q.throwPageLoader=function(){return Q.throw("First parameter should be an instance of PageLoader")},Q.throwAnimator=function(t){return Q.throw('"Animator" param must inherit '+t+"Animator")};var tt=function(t){return t.cancelable&&t.preventDefault()};Q.iosPreventScroll=function(t){if("ios"===Q.globals.actualMobileOS){t.on("touchmove",tt),t.on("dragend",function e(n){t.off("touchmove",tt),t.off("dragend",e)})}},Q.iosPageScrollFix=function(t){"ios"===Q.globals.actualMobileOS&&(document.body.classList.toggle("ons-ios-scroll",t),Q.globals.isUIWebView&&!P.config.forceUIWebViewScrollFix||document.body.classList.toggle("ons-ios-scroll-fix",t))},Q.iosMaskScrollFix=function(t,e){if(Q.globals.isUIWebView){t[(e?"add":"remove")+"EventListener"]("touchmove",tt,!1)}},Q.isValidGesture=function(t){return void 0!==t.gesture&&(t.gesture.distance<=15||t.gesture.deltaTime<=100)},Q.checkMissingImport=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(t){c[t]||Q.throw("Ons"+t+" is required but was not imported (Custom Elements)")})};var et={};et.capitalize=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},et.buildTransitionValue=function(t){t.property=t.property||"all",t.duration=t.duration||.4,t.timing=t.timing||"linear";return t.property.split(/ +/).map(function(e){return e+" "+t.duration+"s "+t.timing}).join(", ")},et.onceOnTransitionEnd=function(t,e){if(!t)return function(){};var n=function(n){t==n.target&&(n.stopPropagation(),i(),e())},i=function(){et._transitionEndEvents.forEach(function(e){t.removeEventListener(e,n,!1)})};return et._transitionEndEvents.forEach(function(e){t.addEventListener(e,n,!1)}),i},et._transitionEndEvents="ontransitionend"in window?["transitionend"]:"onwebkittransitionend"in window?["webkitTransitionEnd"]:"webkit"===et.vendorPrefix||"o"===et.vendorPrefix||"moz"===et.vendorPrefix||"ms"===et.vendorPrefix?[et.vendorPrefix+"TransitionEnd","transitionend"]:[],et._cssPropertyDict=function(){for(var t=window.getComputedStyle(document.documentElement,""),e={},n="A".charCodeAt(0),i="z".charCodeAt(0),o=0;o<t.length;o++){var r=t[o].replace(/^[-]+/,"").replace(/[-][a-z]/g,function(t){return t.substr(1).toUpperCase()}).replace(/^moz/,"Moz");n<=r.charCodeAt(0)&&i>=r.charCodeAt(0)&&"cssText"!==r&&"parentText"!==r&&(e[r]=!0)}return e}(),et.hasCssProperty=function(t){return t in et._cssPropertyDict},et.vendorPrefix=function(){var t=window.getComputedStyle(document.documentElement,"");return(Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/)||""===t.OLink&&["","o"])[1]}(),et.forceLayoutAtOnce=function(t,e){this.batchImmediate(function(){t.forEach(function(t){t.offsetHeight}),e()})},et.batchImmediate=function(){var t=[];return function(e){0===t.length&&setImmediate(function(){var e=t.slice(0);t=[],e.forEach(function(t){t()})}),t.push(e)}}(),et.batchAnimationFrame=function(){var t=[],e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,1e3/60)};return function(n){0===t.length&&e(function(){var e=t.slice(0);t=[],e.forEach(function(t){t()})}),t.push(n)}}(),et.transitionPropertyName=function(){if(et.hasCssProperty("transitionDuration"))return"transition";if(et.hasCssProperty(et.vendorPrefix+"TransitionDuration"))return et.vendorPrefix+"Transition";throw new Error("Invalid state")}();var nt=function t(e,n){if(!(this instanceof t))return new t(e,n);if(e instanceof HTMLElement)this.elements=[e];else{if("[object Array]"!==Object.prototype.toString.call(e))throw new Error("First argument must be an array or an instance of HTMLElement.");this.elements=e}this.defaults=n,this.transitionQueue=[],this.lastStyleAttributeDict=[]};nt.prototype={transitionQueue:void 0,elements:void 0,defaults:void 0,play:function(t){return"function"==typeof t&&this.transitionQueue.push(function(e){t(),e()}),this.startAnimation(),this},default:function(t,e,n){function i(t,e,n){return void 0!==t.duration&&(e=t.duration),void 0!==t.timing&&(n=t.timing),{css:t.css||t,duration:e,timing:n}}return this.saveStyle().queue(i(t,0,this.defaults.timing)).wait(void 0===n?this.defaults.delay:n).queue(i(e,this.defaults.duration,this.defaults.timing)).restoreStyle()},queue:function(t,e){var n=this.transitionQueue;if(t&&e&&(e.css=t,t=new nt.Transition(e)),t instanceof Function||t instanceof nt.Transition||(t=new nt.Transition(t.css?t:{css:t})),t instanceof Function)n.push(t);else{if(!(t instanceof nt.Transition))throw new Error("Invalid arguments");n.push(t.build())}return this},wait:function(t){return t>0&&this.transitionQueue.push(function(e){setTimeout(e,1e3*t)}),this},saveStyle:function(){return this.transitionQueue.push(function(t){this.elements.forEach(function(t,e){for(var n=this.lastStyleAttributeDict[e]={},i=0;i<t.style.length;i++)n[t.style[i]]=t.style[t.style[i]]}.bind(this)),t()}.bind(this)),this},restoreStyle:function(t){var e=this;if((t=t||{}).transition&&!t.duration)throw new Error('"options.duration" is required when "options.transition" is enabled.');var n=et.transitionPropertyName;if(t.transition||t.duration&&t.duration>0){var i=t.transition||"all "+t.duration+"s "+(t.timing||"linear");this.transitionQueue.push(function(o){var r,a=this.elements,s=function(){a.forEach(function(t){t.style[n]=""})},l=et.onceOnTransitionEnd(a[0],function(){clearTimeout(r),s(),o()});r=setTimeout(function(){l(),s(),o()},1e3*t.duration*1.4),a.forEach(function(t,o){var r=e.lastStyleAttributeDict[o];if(!r)throw new Error("restoreStyle(): The style is not saved. Invoke saveStyle() before.");e.lastStyleAttributeDict[o]=void 0;for(var a,s=0,l=t.style.length;s<l;s++)a=t.style[s],void 0===r[a]&&(r[a]="");t.style[n]=i,Object.keys(r).forEach(function(e){e!==n&&(t.style[e]=r[e])}),t.style[n]=i})})}else this.transitionQueue.push(function(t){e.elements.forEach(function(t,i){t.style[n]="none";var o=e.lastStyleAttributeDict[i];if(!o)throw new Error("restoreStyle(): The style is not saved. Invoke saveStyle() before.");e.lastStyleAttributeDict[i]=void 0;for(var r=0;r<t.style.length;r++)t.style[r],void 0===o[t.style[r]]&&(o[t.style[r]]="");Object.keys(o).forEach(function(e){t.style[e]=o[e]})}),t()});return this},startAnimation:function(){return this._dequeueTransition(),this},_dequeueTransition:function(){var t=this.transitionQueue.shift();if(this._currentTransition)throw new Error("Current transition exists.");this._currentTransition=t;var e=this,n=!1;t&&t.call(this,function(){if(n)throw new Error("Invalid state: This callback is called twice.");n=!0,e._currentTransition=void 0,e._dequeueTransition()})}},nt.runAll=function(){for(var t=0;t<arguments.length;t++)arguments[t].play()},(nt.Transition=function(t){this.options=t||{},this.options.duration=this.options.duration||0,this.options.timing=this.options.timing||"linear",this.options.css=this.options.css||{},this.options.property=this.options.property||"all"}).prototype={build:function(){if(0===Object.keys(this.options.css).length)throw new Error("options.css is required.");var t=function(t){var e={};return Object.keys(t).forEach(function(n){var i=t[n];if(et.hasCssProperty(n))e[n]=i;else{var o=et.vendorPrefix+et.capitalize(n);et.hasCssProperty(o)?e[o]=i:(e[o]=i,e[n]=i)}}),e}(this.options.css);if(this.options.duration>0){var e=et.buildTransitionValue(this.options),n=this;return function(i){var o,r=this.elements,a=1e3*n.options.duration*1.4,s=et.onceOnTransitionEnd(r[0],function(){clearTimeout(o),i()});o=setTimeout(function(){s(),i()},a),r.forEach(function(n){n.style[et.transitionPropertyName]=e,Object.keys(t).forEach(function(e){n.style[e]=t[e]})})}}if(this.options.duration<=0)return function(e){var n=this.elements;n.forEach(function(e){e.style[et.transitionPropertyName]="",Object.keys(t).forEach(function(n){e.style[n]=t[n]})}),n.length>0?et.forceLayoutAtOnce(n,function(){et.batchAnimationFrame(e)}):et.batchAnimationFrame(e)}}};var it,ot,rt,at,st=function t(e,n){return new t.Instance(e,n||{})};st.defaults={behavior:{touchAction:"pan-y",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},st.DOCUMENT=document,st.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,st.HAS_TOUCHEVENTS="ontouchstart"in window,st.IS_MOBILE=/mobile|tablet|ip(ad|hone|od)|android|silk/i.test(navigator.userAgent),st.NO_MOUSEEVENTS=st.HAS_TOUCHEVENTS&&st.IS_MOBILE||st.HAS_POINTEREVENTS,st.CALCULATE_INTERVAL=25;var lt={},ut=st.DIRECTION_DOWN="down",ct=st.DIRECTION_LEFT="left",ht=st.DIRECTION_UP="up",dt=st.DIRECTION_RIGHT="right",ft=st.POINTER_MOUSE="mouse",pt=st.POINTER_TOUCH="touch",gt=st.POINTER_PEN="pen",mt=st.EVENT_START="start",_t=st.EVENT_MOVE="move",vt=st.EVENT_END="end",bt=st.EVENT_RELEASE="release",yt=st.EVENT_TOUCH="touch";st.READY=!1,st.plugins=st.plugins||{},st.gestures=st.gestures||{},ot=st.utils={extend:function(t,e,n){for(var i in e)!e.hasOwnProperty(i)||void 0!==t[i]&&n||(t[i]=e[i]);return t},on:function(t,e,n,i){Q.addEventListener(t,e,n,i,!0)},off:function(t,e,n,i){Q.removeEventListener(t,e,n,i,!0)},each:function(t,e,n){var i,o;if("forEach"in t)t.forEach(e,n);else if(void 0!==t.length){for(i=0,o=t.length;i<o;i++)if(!1===e.call(n,t[i],i,t))return}else for(i in t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))return},inStr:function(t,e){return t.indexOf(e)>-1},inArray:function(t,e,n){if(n){for(var i=0,o=t.length;i<o;i++)if(Object.keys(e).every(function(n){return t[i][n]===e[n]}))return i;return-1}if(t.indexOf)return t.indexOf(e);for(var i=0,o=t.length;i<o;i++)if(t[i]===e)return i;return-1},toArray:function(t){return Array.prototype.slice.call(t,0)},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){var e=[],n=[],i=[],o=[],r=Math.min,a=Math.max;return 1===t.length?{pageX:t[0].pageX,pageY:t[0].pageY,clientX:t[0].clientX,clientY:t[0].clientY}:(ot.each(t,function(t){e.push(t.pageX),n.push(t.pageY),i.push(t.clientX),o.push(t.clientY)}),{pageX:(r.apply(Math,e)+a.apply(Math,e))/2,pageY:(r.apply(Math,n)+a.apply(Math,n))/2,clientX:(r.apply(Math,i)+a.apply(Math,i))/2,clientY:(r.apply(Math,o)+a.apply(Math,o))/2})},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.clientX-t.clientX,i=e.clientY-t.clientY;return 180*Math.atan2(i,n)/Math.PI},getDirection:function(t,e){return Math.abs(t.clientX-e.clientX)>=Math.abs(t.clientY-e.clientY)?t.clientX-e.clientX>0?ct:dt:t.clientY-e.clientY>0?ht:ut},getDistance:function(t,e){var n=e.clientX-t.clientX,i=e.clientY-t.clientY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==ht||t==ut},setPrefixedCss:function(t,e,n,i){var o=["","Webkit","Moz","O","ms"];e=ot.toCamelCase(e);for(var r=0;r<o.length;r++){var a=e;if(o[r]&&(a=o[r]+a.slice(0,1).toUpperCase()+a.slice(1)),a in t.style){t.style[a]=(null===i||i)&&n||"";break}}},toggleBehavior:function(t,e,n){if(e&&t&&t.style){ot.each(e,function(e,i){ot.setPrefixedCss(t,i,e,n)});var i=n&&function(){return!1};"none"==e.userSelect&&(t.onselectstart=i),"none"==e.userDrag&&(t.ondragstart=i)}},toCamelCase:function(t){return t.replace(/[_-]([a-z])/g,function(t){return t[1].toUpperCase()})}},it=st.event={preventMouseEvents:!1,started:!1,shouldDetect:!1,on:function(t,e,n,i,o){var r=e.split(" ");ot.each(r,function(e){ot.on(t,e,n,i),o&&o(e)})},off:function(t,e,n,i,o){var r=e.split(" ");ot.each(r,function(e){ot.off(t,e,n,i),o&&o(e)})},onTouch:function(t,e,n,i){var o=this,r=function(i){var r,a=i.type.toLowerCase(),s=st.HAS_POINTEREVENTS,l=ot.inStr(a,"mouse");l&&o.preventMouseEvents||(l&&e==mt&&0===i.button?(o.preventMouseEvents=!1,o.shouldDetect=!0):s&&e==mt?o.shouldDetect=1===i.buttons||at.matchType(pt,i):l||e!=mt||(o.preventMouseEvents=!0,o.shouldDetect=!0),s&&e!=vt&&at.updatePointer(e,i),o.shouldDetect&&(r=o.doDetect.call(o,i,e,t,n)),r==vt&&(o.preventMouseEvents=!1,o.shouldDetect=!1,at.reset()),s&&e==vt&&at.updatePointer(e,i))};return this.on(t,lt[e],r,i),r},doDetect:function(t,e,n,i){var o=this.getTouchList(t,e),r=o.length,a=e,s=o.trigger,l=r;e==mt?s=yt:e==vt&&(s=bt,l=o.length-(t.changedTouches?t.changedTouches.length:1)),l>0&&this.started&&(a=_t),this.started=!0;var u=this.collectEventData(n,a,o,t);return e!=vt&&i.call(rt,u),s&&(u.changedLength=l,u.eventType=s,i.call(rt,u),u.eventType=a,delete u.changedLength),a==vt&&(i.call(rt,u),this.started=!1),a},determineEventTypes:function(){var t;return t=st.HAS_POINTEREVENTS?window.PointerEvent?["pointerdown","pointermove","pointerup pointercancel lostpointercapture"]:["MSPointerDown","MSPointerMove","MSPointerUp MSPointerCancel MSLostPointerCapture"]:st.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],lt[mt]=t[0],lt[_t]=t[1],lt[vt]=t[2],lt},getTouchList:function(t,e){if(st.HAS_POINTEREVENTS)return at.getTouchList();if(t.touches){if(e==_t)return t.touches;var n=[],i=[].concat(ot.toArray(t.touches),ot.toArray(t.changedTouches)),o=[];return ot.each(i,function(t){-1===ot.inArray(n,t.identifier)&&o.push(t),n.push(t.identifier)}),o}return t.identifier=1,[t]},collectEventData:function(t,e,n,i){var o=pt;return ot.inStr(i.type,"mouse")||at.matchType(ft,i)?o=ft:at.matchType(gt,i)&&(o=gt),{center:ot.getCenter(n),timeStamp:Date.now(),target:i.target,touches:n,eventType:e,pointerType:o,srcEvent:i,preventDefault:function(){var t=this.srcEvent;t.preventManipulation&&t.preventManipulation(),t.preventDefault&&t.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return rt.stopDetect()}}}},at=st.PointerEvent={pointers:{},getTouchList:function(){var t=[];return ot.each(this.pointers,function(e){t.push(e)}),t},updatePointer:function(t,e){t==vt||t!=vt&&1!==e.buttons?delete this.pointers[e.pointerId]:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e)},matchType:function(t,e){if(!e.pointerType)return!1;var n=e.pointerType,i={};return i[ft]=n===(e.MSPOINTER_TYPE_MOUSE||ft),i[pt]=n===(e.MSPOINTER_TYPE_TOUCH||pt),i[gt]=n===(e.MSPOINTER_TYPE_PEN||gt),i[t]},reset:function(){this.pointers={}}},rt=st.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:ot.extend({},e),lastEvent:!1,lastCalcEvent:!1,futureCalcEvent:!1,lastCalcData:{},name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);var e=this.current.inst,n=e.options;return ot.each(this.gestures,function(i){!this.stopped&&e.enabled&&n[i.name]&&i.handler.call(i,t,e)},this),this.current&&(this.current.lastEvent=t),t.eventType==vt&&this.stopDetect(),t}},stopDetect:function(){this.previous=ot.extend({},this.current),this.current=null,this.stopped=!0},getCalculatedData:function(t,e,n,i,o){var r=this.current,a=!1,s=r.lastCalcEvent,l=r.lastCalcData;s&&t.timeStamp-s.timeStamp>st.CALCULATE_INTERVAL&&(e=s.center,n=t.timeStamp-s.timeStamp,i=t.center.clientX-s.center.clientX,o=t.center.clientY-s.center.clientY,a=!0),t.eventType!=yt&&t.eventType!=bt||(r.futureCalcEvent=t),r.lastCalcEvent&&!a||(l.velocity=ot.getVelocity(n,i,o),l.angle=ot.getAngle(e,t.center),l.direction=ot.getDirection(e,t.center),r.lastCalcEvent=r.futureCalcEvent||t,r.futureCalcEvent=t),t.velocityX=l.velocity.x,t.velocityY=l.velocity.y,t.interimAngle=l.angle,t.interimDirection=l.direction},extendEventData:function(t){var e=this.current,n=e.startEvent,i=e.lastEvent||n;t.eventType!=yt&&t.eventType!=bt||(n.touches=[],ot.each(t.touches,function(t){n.touches.push({clientX:t.clientX,clientY:t.clientY})}));var o=t.timeStamp-n.timeStamp,r=t.center.clientX-n.center.clientX,a=t.center.clientY-n.center.clientY;return this.getCalculatedData(t,i.center,o,r,a),ot.extend(t,{startEvent:n,deltaTime:o,deltaX:r,deltaY:a,distance:ot.getDistance(n.center,t.center),angle:ot.getAngle(n.center,t.center),direction:ot.getDirection(n.center,t.center),scale:ot.getScale(n.touches,t.touches),rotation:ot.getRotation(n.touches,t.touches)}),t},register:function(t){var e=t.defaults||{};return void 0===e[t.name]&&(e[t.name]=!0),ot.extend(st.defaults,e,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},st.Instance=function(t,e){var n=this,i=e&&e.passive?{passive:!0}:void 0;!function(t){st.READY||(it.determineEventTypes(),ot.each(st.gestures,function(t){rt.register(t)}),it.onTouch(st.DOCUMENT,_t,rt.detect,t),it.onTouch(st.DOCUMENT,vt,rt.detect,t),st.READY=!0)}(i),this.element=t,this.enabled=!0,ot.each(e,function(t,n){delete e[n],e[ot.toCamelCase(n)]=t}),this.options=ot.extend(ot.extend({},st.defaults),e||{}),this.options.listenerOptions=i,this.options.behavior&&ot.toggleBehavior(this.element,this.options.behavior,!0),this.eventStartHandler=it.onTouch(t,mt,function(t){n.enabled&&t.eventType==mt?rt.startDetect(n,t):t.eventType==yt&&rt.detect(t)},i),this.eventHandlers=[]},st.Instance.prototype={on:function(t,e,n){var i=this;return it.on(i.element,t,e,Q.extend({},i.options.listenerOptions,n),function(t){i.eventHandlers.push({gesture:t,handler:e})}),i},off:function(t,e,n){var i=this;return it.off(i.element,t,e,Q.extend({},i.options.listenerOptions,n),function(t){var n=ot.inArray(i.eventHandlers,{gesture:t,handler:e},!0);n>=0&&i.eventHandlers.splice(n,1)}),i},trigger:function(t,e){e||(e={});var n=st.DOCUMENT.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e;var i=this.element;return ot.hasParent(e.target,i)&&(i=e.target),i.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this},dispose:function(){var t,e;for(ot.toggleBehavior(this.element,this.options.behavior,!1),t=-1;e=this.eventHandlers[++t];)ot.off(this.element,e.gesture,e.handler);return this.eventHandlers=[],it.off(this.element,lt[mt],this.eventStartHandler),null}},function(t){var e=!1;st.gestures.Drag={name:t,index:50,handler:function(n,i){var o=rt.current;if(!(i.options.dragMaxTouches>0&&n.touches.length>i.options.dragMaxTouches))switch(n.eventType){case mt:e=!1;break;case _t:if(n.distance<i.options.dragMinDistance&&o.name!=t)return;var r=o.startEvent.center;if(o.name!=t&&(o.name=t,i.options.dragDistanceCorrection&&n.distance>0)){var a=Math.abs(i.options.dragMinDistance/n.distance);r.pageX+=n.deltaX*a,r.pageY+=n.deltaY*a,r.clientX+=n.deltaX*a,r.clientY+=n.deltaY*a,n=rt.extendEventData(n)}(o.lastEvent.dragLockToAxis||i.options.dragLockToAxis&&i.options.dragLockMinDistance<=n.distance)&&(n.dragLockToAxis=!0);var s=o.lastEvent.direction;n.dragLockToAxis&&s!==n.direction&&(ot.isVertical(s)?n.direction=n.deltaY<0?ht:ut:n.direction=n.deltaX<0?ct:dt),e||(i.trigger(t+"start",n),e=!0),i.trigger(t,n),i.trigger(t+n.direction,n);var l=ot.isVertical(n.direction);(i.options.dragBlockVertical&&l||i.options.dragBlockHorizontal&&!l)&&n.preventDefault();break;case bt:e&&n.changedLength<=i.options.dragMaxTouches&&(i.trigger(t+"end",n),e=!1);break;case vt:e=!1}},defaults:{dragMinDistance:10,dragDistanceCorrection:!0,dragMaxTouches:1,dragBlockHorizontal:!1,dragBlockVertical:!1,dragLockToAxis:!1,dragLockMinDistance:25}}}("drag"),st.gestures.Gesture={name:"gesture",index:1337,handler:function(t,e){e.trigger(this.name,t)}},function(t){var e;st.gestures.Hold={name:t,index:10,defaults:{holdTimeout:500,holdThreshold:2},handler:function(n,i){var o=i.options,r=rt.current;switch(n.eventType){case mt:clearTimeout(e),r.name=t,e=setTimeout(function(){r&&r.name==t&&i.trigger(t,n)},o.holdTimeout);break;case _t:n.distance>o.holdThreshold&&clearTimeout(e);break;case bt:clearTimeout(e)}}}}("hold"),st.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==bt&&e.trigger(this.name,t)}},st.gestures.Swipe={name:"swipe",index:40,defaults:{swipeMinTouches:1,swipeMaxTouches:1,swipeVelocityX:.6,swipeVelocityY:.6},handler:function(t,e){if(t.eventType==bt){var n=t.touches.length,i=e.options;if(n<i.swipeMinTouches||n>i.swipeMaxTouches)return;(t.velocityX>i.swipeVelocityX||t.velocityY>i.swipeVelocityY)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},function(t){var e=!1;st.gestures.Tap={name:t,index:100,handler:function(n,i){var o,r,a=i.options,s=rt.current,l=rt.previous;switch(n.eventType){case mt:e=!1;break;case _t:e=e||n.distance>a.tapMaxDistance;break;case vt:!ot.inStr(n.srcEvent.type,"cancel")&&n.deltaTime<a.tapMaxTime&&!e&&(o=l&&l.lastEvent&&n.timeStamp-l.lastEvent.timeStamp,r=!1,l&&l.name==t&&o&&o<a.doubleTapInterval&&n.distance<a.doubleTapDistance&&(i.trigger("doubletap",n),r=!0),r&&!a.tapAlways||(s.name=t,i.trigger(s.name,n)))}},defaults:{tapMaxTime:250,tapMaxDistance:10,tapAlways:!0,doubleTapDistance:20,doubleTapInterval:300}}}("tap"),st.gestures.Touch={name:"touch",index:-1/0,defaults:{preventDefault:!1,preventMouse:!1},handler:function(t,e){e.options.preventMouse&&t.pointerType==ft?t.stopDetect():(e.options.preventDefault&&t.preventDefault(),t.eventType==yt&&e.trigger("touch",t))}},function(t){var e=!1;st.gestures.Transform={name:t,index:45,defaults:{transformMinScale:.01,transformMinRotation:1},handler:function(n,i){switch(n.eventType){case mt:e=!1;break;case _t:if(n.touches.length<2)return;var o=Math.abs(1-n.scale),r=Math.abs(n.rotation);if(o<i.options.transformMinScale&&r<i.options.transformMinRotation)return;rt.current.name=t,e||(i.trigger(t+"start",n),e=!0),i.trigger(t,n),r>i.options.transformMinRotation&&i.trigger("rotate",n),o>i.options.transformMinScale&&(i.trigger("pinch",n),i.trigger("pinch"+(n.scale<1?"in":"out"),n));break;case bt:e&&n.changedLength<2&&(i.trigger(t+"end",n),e=!1)}}}}("transform");var kt=void 0,wt=void 0,Et=new(function(){function t(){p(this,t),this.queue=[]}return g(t,[{key:"add",value:function(t,e){var n=this;this.queue.push(t),1===this.queue.length&&setImmediate(this.queue[0]),e.then(function(){n.queue.shift(),n.queue.length>0&&setTimeout(n.queue[0],1e3/30)})}}]),t}()),Ct=function(t,e){["id","class","animation"].forEach(function(n){return e.hasOwnProperty(n)&&t.setAttribute(n,e[n])}),e.modifier&&Q.addModifier(t,e.modifier)},At=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e=_({},e),"string"==typeof t?e.message=t:e=t,e&&(e.message||e.messageHTML)||Q.throw("Notifications must contain a message"),(e.hasOwnProperty("buttonLabels")||e.hasOwnProperty("buttonLabel"))&&(e.buttonLabels=e.buttonLabels||e.buttonLabel,Array.isArray(e.buttonLabels)||(e.buttonLabels=[e.buttonLabels||""])),Q.extend({compile:function(t){return t},callback:function(t){return t},animation:"default",cancelable:!1,primaryButtonIndex:(e.buttonLabels||n.buttonLabels||[]).length-1},n,e)},St={};St._createAlertDialog=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return new Promise(function(t){var i=At.apply(void 0,e);Q.checkMissingImport("AlertDialog","AlertDialogButton");var o="";i.isPrompt&&(o='\n      <input\n        class="text-input text-input--underbar"\n        type="'+(i.inputType||"text")+'"\n        placeholder="'+(i.placeholder||"")+'"\n        value="'+(i.defaultValue||"")+'"\n        style="width: 100%; margin-top: 10px;"\n      />\n    ');var r="";i.buttonLabels.forEach(function(t,e){r+='\n      <ons-alert-dialog-button\n        class="\n          '+(e===i.primaryButtonIndex?" alert-dialog-button--primal":"")+"\n          "+(i.buttonLabels.length<=2?" alert-dialog-button--rowfooter":"")+'\n        "\n        style="position: relative;">\n        '+t+"\n      </ons-alert-dialog-button>\n    "});var a={},s=function(){a.dialog.onDialogCancel&&a.dialog.removeEventListener("dialog-cancel",a.dialog.onDialogCancel),Object.keys(a).forEach(function(t){return delete a[t]}),a=null,i.destroy instanceof Function&&i.destroy()};a.dialog=document.createElement("ons-alert-dialog"),a.dialog.innerHTML='\n    <div class="alert-dialog-mask"\n      style="\n        '+(i.maskColor?"background-color: "+i.maskColor:"")+'\n      "></div>\n    <div class="alert-dialog">\n      <div class="alert-dialog-container">\n        <div class="alert-dialog-title">\n          '+(i.title||"")+'\n        </div>\n        <div class="alert-dialog-content">\n          '+(i.message||i.messageHTML)+"\n          "+o+'\n        </div>\n        <div class="\n          alert-dialog-footer\n          '+(i.buttonLabels.length<=2?" alert-dialog-footer--rowfooter":"")+'\n        ">\n          '+r+"\n        </div>\n      </div>\n    </div>\n  ",n(a.dialog),Ct(a.dialog,i),i.isPrompt&&i.submitOnEnter&&(a.input=a.dialog.querySelector(".text-input"),a.input.onkeypress=function(e){13===e.keyCode&&a.dialog.hide().then(function(){if(a){var e=a.input.value;s(),i.callback(e),t(e)}})}),a.footer=a.dialog.querySelector(".alert-dialog-footer"),Q.arrayFrom(a.dialog.querySelectorAll(".alert-dialog-button")).forEach(function(e,n){e.onclick=function(){a.dialog.hide().then(function(){if(a){var e=n;i.isPrompt&&(e=n===i.primaryButtonIndex?a.input.value:null),a.dialog.remove(),s(),i.callback(e),t(e)}})},a.footer.appendChild(e)}),i.cancelable&&(a.dialog.cancelable=!0,a.dialog.onDialogCancel=function(){setImmediate(function(){a.dialog.remove(),s()});var e=i.isPrompt?null:-1;i.callback(e),t(e)},a.dialog.addEventListener("dialog-cancel",a.dialog.onDialogCancel,!1)),document.body.appendChild(a.dialog),i.compile(a.dialog),setImmediate(function(){a.dialog.show().then(function(){if(a.input&&i.isPrompt&&i.autofocus){var t=a.input.value.length;a.input.focus(),a.input.setSelectionRange(t,t)}})})})},St.alert=function(t,e){return St._createAlertDialog(t,e,{buttonLabels:["OK"],title:"Alert"})},St.confirm=function(t,e){return St._createAlertDialog(t,e,{buttonLabels:["Cancel","OK"],title:"Confirm"})},St.prompt=function(t,e){return St._createAlertDialog(t,e,{buttonLabels:["OK"],title:"Alert",isPrompt:!0,autofocus:!0,submitOnEnter:!0})},St.toast=function(t,e){var n=new Promise(function(i){Q.checkMissingImport("Toast"),e=At(t,e,{timeout:0,force:!1});var o=Q.createElement("\n      <ons-toast>\n        "+e.message+"\n        "+(e.buttonLabels?"<button>"+e.buttonLabels[0]+"</button>":"")+"\n      </ons-toast>\n    ");Ct(o,e);var r=function(t){o&&o.hide().then(function(){o&&(o.remove(),o=null,e.callback(t),i(t))})};e.buttonLabels&&(Q.findChild(o._toast,"button").onclick=function(){return r(0)}),document.body.appendChild(o),e.compile(o);var a=function(){o.parentElement&&o.show(e).then(function(){e.timeout&&setTimeout(function(){return r(-1)},e.timeout)})};setImmediate(function(){return e.force?a():Et.add(a,n)})});return n};var Pt=function(){};Pt.prototype={on:function(t,e){this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(e)},once:function(t,e){var n=this;this.on(t,function i(){return n.off(t,i),e.apply(null,arguments)})},off:function(t,e){this._events=this._events||{},t in this._events!=!1&&(this._events[t]=this._events[t].filter(function(t){return!!e&&e!==t}))},emit:function(t){if(this._events=this._events||{},t in this._events!=!1)for(var e=0;e<this._events[t].length;e++)this._events[t][e].apply(this,Array.prototype.slice.call(arguments,1))}},Pt.mixin=function(t){for(var e=["on","once","off","emit"],n=0;n<e.length;n++)"function"==typeof t?t.prototype[e[n]]=Pt.prototype[e[n]]:t[e[n]]=Pt.prototype[e[n]]},window.MicroEvent=Pt;var Ot=function(){var t={_isPortrait:!1,isPortrait:function(){return this._isPortrait()},isLandscape:function(){return!this.isPortrait()},_init:function(){return document.addEventListener("DOMContentLoaded",this._onDOMContentLoaded.bind(this),!1),"orientation"in window?window.addEventListener("orientationchange",this._onOrientationChange.bind(this),!1):window.addEventListener("resize",this._onResize.bind(this),!1),this._isPortrait=function(){return window.innerHeight>window.innerWidth},this},_onDOMContentLoaded:function(){this._installIsPortraitImplementation(),this.emit("change",{isPortrait:this.isPortrait()})},_installIsPortraitImplementation:function(){var t=window.innerWidth<window.innerHeight;"orientation"in window?window.orientation%180==0?this._isPortrait=function(){return 0===Math.abs(window.orientation%180)?t:!t}:this._isPortrait=function(){return 90===Math.abs(window.orientation%180)?t:!t}:this._isPortrait=function(){return window.innerHeight>window.innerWidth}},_onOrientationChange:function(){var t=this,e=this._isPortrait(),n=0,i=setInterval(function(){n++;var o=window.innerWidth,r=window.innerHeight;e&&o<=r||!e&&o>=r?(t.emit("change",{isPortrait:e}),clearInterval(i)):50===n&&(t.emit("change",{isPortrait:e}),clearInterval(i))},20)},_onResize:function(){this.emit("change",{isPortrait:this.isPortrait()})}};return Pt.mixin(t),t}()._init(),xt={add:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return n.forEach(function(e){return Q.addModifier(t,e)})},remove:function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];return n.forEach(function(e){return Q.removeModifier(t,e)})},contains:Q.hasModifier,toggle:Q.toggleModifier},Tt=new Pt;Tt._visible=!1;var Lt=function(){Tt._visible=!0,Tt.emit("show")},Mt=function(){Tt._visible=!1,Tt.emit("hide")},Dt=function(){Q.warn("ons-keyboard: Cordova Keyboard plugin is not present.")};document.addEventListener("deviceready",function(){("undefined"!=typeof Keyboard?(Keyboard.onshow=Lt,Keyboard.onhide=Mt,Tt.emit("init",{visible:Keyboard.isVisible}),!0):void 0!==cordova.plugins&&void 0!==cordova.plugins.Keyboard&&(window.addEventListener("native.keyboardshow",Lt),window.addEventListener("native.keyboardhide",Mt),Tt.emit("init",{visible:cordova.plugins.Keyboard.isVisible}),!0))||((document.querySelector("[ons-keyboard-active]")||document.querySelector("[ons-keyboard-inactive]"))&&Dt(),Tt.on=Dt)});var It=function(){var t=0;return function(){return t++}}(),Nt=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p(this,t),this._lockList=[],this._waitList=[],this._log=e.log||function(){}}return g(t,[{key:"lock",value:function(){var t=this,e=function e(){t._unlock(e)};return e.id=It(),this._lockList.push(e),this._log("lock: "+e.id),e}},{key:"_unlock",value:function(t){var e=this._lockList.indexOf(t);if(-1===e)throw new Error("This function is not registered in the lock list.");this._lockList.splice(e,1),this._log("unlock: "+t.id),this._tryToFreeWaitList()}},{key:"_tryToFreeWaitList",value:function(){for(;!this.isLocked()&&this._waitList.length>0;)this._waitList.shift()()}},{key:"waitUnlock",value:function(t){if(!(t instanceof Function))throw new Error("The callback param must be a function.");this.isLocked()?this._waitList.push(t):t()}},{key:"isLocked",value:function(){return this._lockList.length>0}}]),t}(),Bt=function(){function t(e,n){p(this,t),this._loader=e instanceof Function?e:function(t,e){var n=t.page,i=t.parent;t.params,P.getPageHTMLAsync(n).then(function(t){var n=Q.createElement(t);i.appendChild(n),e(n)})},this._unloader=n instanceof Function?n:i}return g(t,[{key:"load",value:function(t,e){var n=t.page,i=t.parent,o=t.params,r=void 0===o?{}:o;this._loader({page:n,parent:i,params:r},function(t){if(!(t instanceof Element))throw Error("pageElement must be an instance of Element.");e(t)})}},{key:"unload",value:function(t){if(!(t instanceof Element))throw Error("pageElement must be an instance of Element.");this._unloader(t)}},{key:"internalLoader",set:function(t){if(!(t instanceof Function))throw Error("First parameter must be an instance of Function");this._loader=t},get:function(){return this._loader}}]),t}(),jt=new Bt,Ht=new Bt(function(t,e){var n=t.page,i=t.parent,o=(t.params,Q.createElement(n.trim()));i.appendChild(o),e(o)},i),Rt={animit:nt,defaultPageLoader:jt,elements:c,GestureDetector:st,modifier:xt,notification:St,orientation:Ot,pageAttributeExpression:S,PageLoader:Bt,platform:C,softwareKeyboard:Tt,_autoStyle:N,_internal:P,_readyLock:new Nt,_util:Q};Rt.platform.select((window.location.search.match(/platform=([\w-]+)/)||[])[1]),function(){var t=Rt._readyLock.lock();window.addEventListener("DOMContentLoaded",function(){Rt.isWebView()?window.document.addEventListener("deviceready",t,!1):t()},!1)}();var Ft=function(t){return Q.throw("This method must be called "+(t?"after":"before")+" ons.isReady() is true")};Rt.isReady=function(){return!Rt._readyLock.isLocked()},Rt.isWebView=Rt.platform.isWebView,Rt.ready=function(t){Rt.isReady()?t():Rt._readyLock.waitUnlock(t)},Rt.setDefaultDeviceBackButtonListener=function(t){Rt.isReady()||Ft(!0),Rt._defaultDeviceBackButtonHandler.setListener(t)},Rt.disableDeviceBackButtonHandler=function(){Rt.isReady()||Ft(!0),P.dbbDispatcher.disable()},Rt.enableDeviceBackButtonHandler=function(){Rt.isReady()||Ft(!0),P.dbbDispatcher.enable()},Rt.fireDeviceBackButtonEvent=function(){P.dbbDispatcher.fireDeviceBackButtonEvent()},Rt.enableAutoStatusBarFill=function(){Rt.isReady()&&Ft(!1),P.config.autoStatusBarFill=!0},Rt.disableAutoStatusBarFill=function(){Rt.isReady()&&Ft(!1),P.config.autoStatusBarFill=!1},Rt.mockStatusBar=function(){Rt.isReady()&&Ft(!1);var t=function(){if(!document.body.children[0]||!document.body.children[0].classList.contains("ons-status-bar-mock")){var t=C.isAndroid(),e=function(t){return'<i class="'+t.split("-")[0]+" "+t+'"></i>'},n=t?e("zmdi-twitter")+" "+e("zmdi-google-play"):"No SIM "+e("fa-wifi"),i=t?"":"12:28 PM",o=t?e("zmdi-network")+" "+e("zmdi-wifi")+" "+e("zmdi-battery")+" 12:28 PM":"80% "+e("fa-battery-three-quarters");document.body.insertBefore(Q.createElement('<div class="ons-status-bar-mock '+(t?"android":"ios")+'"><div>'+n+"</div><div>"+i+"</div><div>"+o+"</div></div>"),document.body.firstChild)}};document.body?t():P.waitDOMContentLoaded(t)},Rt.disableAnimations=function(){P.config.animationsDisabled=!0},Rt.enableAnimations=function(){P.config.animationsDisabled=!1},Rt._disableWarnings=function(){P.config.warningsDisabled=!0},Rt._enableWarnings=function(){P.config.warningsDisabled=!1},Rt.disableAutoStyling=N.disable,Rt.enableAutoStyling=N.enable,Rt.disableIconAutoPrefix=function(){Q.checkMissingImport("Icon"),c.Icon.setAutoPrefix(!1)},Rt.forceUIWebViewScrollFix=function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];P.config.forceUIWebViewScrollFix=t},Rt.forcePlatformStyling=function(t){Rt.enableAutoStyling(),Rt.platform.select(t||"ios"),Rt._util.arrayFrom(document.querySelectorAll("*")).forEach(function(t){"ons-if"===t.tagName.toLowerCase()?t._platformUpdate():t.tagName.match(/^ons-/i)&&(N.prepare(t,!0),"ons-tabbar"===t.tagName.toLowerCase()&&t._updatePosition())})},Rt.preload=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Promise.all((t instanceof Array?t:[t]).map(function(t){return"string"!=typeof t&&Q.throw("Expected string arguments but got "+(void 0===t?"undefined":f(t))),P.getTemplateHTMLAsync(t)}))},Rt.createElement=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(t){var n=Rt._util.createElement(t);if(n.remove(),e.append){(e.append instanceof HTMLElement?e.append:document.body).insertBefore(n,e.insertBefore||null),e.link instanceof Function&&e.link(n)}return n};return"<"===(t=t.trim()).charAt(0)?n(t):P.getPageHTMLAsync(t).then(n)},Rt.createPopover=Rt.createDialog=Rt.createAlertDialog=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Rt.createElement(t,_({append:!0},e))},Rt.openActionSheet=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise(function(e){Q.checkMissingImport("ActionSheet"),function(t){var e=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Function";return Q.throw('"options.'+t+'" must be an instance of '+e)},n=function(e){return Object.hasOwnProperty.call(t,e)},i=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Function;return t[e]instanceof n},o="buttons",r="callback",a="compile",s="destroy";(!n(o)||!i(o,Array))&&e(o,"Array"),n(r)&&!i(r)&&e(r),n(a)&&!i(a)&&e(a),n(s)&&!i(s)&&e(s)}(t);var n=Q.createElement("\n    <ons-action-sheet\n      "+(t.title?'title="'+t.title+'"':"")+"\n      "+(t.cancelable?"cancelable":"")+"\n      "+(t.modifier?'modifier="'+t.modifier+'"':"")+"\n      "+(t.maskColor?'mask-color="'+t.maskColor+'"':"")+"\n      "+(t.id?'id="'+t.id+'"':"")+"\n      "+(t.class?'class="'+t.class+'"':"")+'\n    >\n      <div class="action-sheet"></div>\n    </ons-action-sheet>\n  '),i=function i(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;n&&(t.destroy&&t.destroy(n),n.removeEventListener("dialog-cancel",i,!1),n.remove(),n=null,t.callback&&t.callback(r),e(r))};n.addEventListener("dialog-cancel",i,!1);var o=document.createDocumentFragment();t.buttons.forEach(function(e,r){var a="string"==typeof e?{label:e}:_({},e);t.destructive===r&&(a.modifier=(a.modifier||"")+" destructive");var s=Q.createElement("\n      <ons-action-sheet-button\n        "+(a.icon?'icon="'+a.icon+'"':"")+"\n        "+(a.modifier?'modifier="'+a.modifier+'"':"")+"\n      >\n        "+a.label+"\n      </ons-action-sheet-button>\n    ");s.onclick=function(t){return n.hide().then(function(){return i(t,r)})},o.appendChild(s)}),Q.findChild(n,".action-sheet").appendChild(o),document.body.appendChild(n),t.compile&&t.compile(el.dialog),setImmediate(function(){return n.show({animation:t.animation,animationOptions:t.animationOptions})})})},Rt.resolveLoadingPlaceholder=function(t,e){var n=Rt._util.arrayFrom(window.document.querySelectorAll("[ons-loading-placeholder]"));0===n.length&&Q.throw("No ons-loading-placeholder exists"),n.filter(function(t){return!t.getAttribute("page")}).forEach(function(n){n.setAttribute("ons-loading-placeholder",t),Rt._resolveLoadingPlaceholder(n,t,e)})},Rt._setupLoadingPlaceHolders=function(){Rt.ready(function(){Rt._util.arrayFrom(window.document.querySelectorAll("[ons-loading-placeholder]")).forEach(function(t){var e=t.getAttribute("ons-loading-placeholder");"string"==typeof e&&Rt._resolveLoadingPlaceholder(t,e)})})},Rt._resolveLoadingPlaceholder=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(t,e){return e()};e&&Rt.createElement(e).then(function(e){e.style.display="none",t.appendChild(e),n(e,function(){for(;t.firstChild&&t.firstChild!==e;)t.removeChild(t.firstChild);e.style.display=""})}).catch(function(t){return Promise.reject("Unabled to resolve placeholder: "+t)})};var qt="currentScript"in document?function(){return document.currentScript}:function(){return document.scripts[document.scripts.length-1]};Rt.getScriptPage=function(){return qt()&&/ons-page/i.test(qt().parentElement.tagName)&&qt().parentElement||null};var zt=o(function(t){!function(){function e(t,n){var o;if(n=n||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=n.touchBoundary||10,this.layer=t,this.tapDelay=n.tapDelay||200,this.tapTimeout=n.tapTimeout||700,!e.notNeeded(t)){for(var r=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],a=0,s=r.length;a<s;a++)this[r[a]]=function(t,e){return function(){return t.apply(e,arguments)}}(this[r[a]],this);i&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var o=Node.prototype.removeEventListener;"click"===e?o.call(t,e,n.hijacked||n,i):o.call(t,e,n,i)},t.addEventListener=function(e,n,i){var o=Node.prototype.addEventListener;"click"===e?o.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):o.call(t,e,n,i)}),"function"==typeof t.onclick&&(o=t.onclick,t.addEventListener("click",function(t){o(t)},!1),t.onclick=null)}}var n=navigator.userAgent.indexOf("Windows Phone")>=0,i=navigator.userAgent.indexOf("Android")>0&&!n,o=/iP(ad|hone|od)/.test(navigator.userAgent)&&!n,r=o&&/OS 4_\d(_\d)?/.test(navigator.userAgent),a=o&&/OS [6-7]_\d/.test(navigator.userAgent),s=navigator.userAgent.indexOf("BB10")>0,l=["email","number","password","search","tel","text","url"];e.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(o&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},e.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!i;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},e.prototype.sendClick=function(t,e){var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],(n=document.createEvent("MouseEvents")).initMouseEvent(this.determineEventType(t),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},e.prototype.determineEventType=function(t){return i&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},e.prototype.focus=function(t){var e;o&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type&&"email"!==t.type&&"number"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},e.prototype.updateScrollParent=function(t){var e,n;if(!(e=t.fastClickScrollParent)||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},e.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},e.prototype.isTextField=function(t){return"textarea"===t.tagName.toLowerCase()||-1!==l.indexOf(t.type)},e.prototype.onTouchStart=function(t){var e,n;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],e.isContentEditable)return!0;if(o){if(e===document.activeElement&&this.isTextField(e))return!0;if(!r){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.timeStamp-this.lastClickTime>-1&&t.preventDefault(),!0},e.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n},e.prototype.onTouchMove=function(t){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0)},e.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},e.prototype.onTouchEnd=function(t){var e,n,s,l,u,c=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay&&t.timeStamp-this.lastClickTime>-1)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,a&&(u=t.changedTouches[0],(c=document.elementFromPoint(u.pageX-window.pageXOffset,u.pageY-window.pageYOffset)||c).fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(s=c.tagName.toLowerCase())){if(e=this.findControl(c)){if(this.focus(c),i)return!1;c=e}}else if(this.needsFocus(c))return t.timeStamp-n>100||o&&window.top!==window&&"input"===s?(this.targetElement=null,!1):(this.focus(c),this.sendClick(c,t),r&&"select"===s||(this.targetElement=null,t.preventDefault()),!1);return!(!o||r||!(l=c.fastClickScrollParent)||l.fastClickLastScrollTop===l.scrollTop)||(this.needsClick(c)||(t.preventDefault(),this.sendClick(c,t)),!1)},e.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},e.prototype.onMouse=function(t){return!this.targetElement||(!!t.forwardedTouchEvent||(!t.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1))))},e.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail||((e=this.onMouse(t))||(this.targetElement=null),e)},e.prototype.destroy=function(){var t=this.layer;i&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},e.notNeeded=function(t){var e,n,o;if(void 0===window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!i)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(s&&(o=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1]>=10&&o[2]>=3&&(e=document.querySelector("meta[name=viewport]"))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction||(!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]>=27&&(e=document.querySelector("meta[name=viewport]"))&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))||"none"===t.style.touchAction||"manipulation"===t.style.touchAction)},e.attach=function(t,n){return new e(t,n)},t.exports?(t.exports=e.attach,t.exports.FastClick=e):window.FastClick=e}()}).FastClick;window.customElements&&(window.customElements.forcePolyfill=!0);var Vt=o(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),Wt=o(function(t){var e=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=e)}),Ut=(Wt.version,function(t){return"object"===(void 0===t?"undefined":f(t))?null!==t:"function"==typeof t}),Xt=function(t){if(!Ut(t))throw TypeError(t+" is not an object!");return t},Yt=function(t){try{return!!t()}catch(t){return!0}},Gt=!Yt(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),$t=Vt.document,Kt=Ut($t)&&Ut($t.createElement),Qt=function(t){return Kt?$t.createElement(t):{}},Jt=!Gt&&!Yt(function(){return 7!=Object.defineProperty(Qt("div"),"a",{get:function(){return 7}}).a}),Zt=function(t,e){if(!Ut(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!Ut(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!Ut(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!Ut(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")},te=Object.defineProperty,ee={f:Gt?Object.defineProperty:function(t,e,n){if(Xt(t),e=Zt(e,!0),Xt(n),Jt)try{return te(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},ne=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},ie=Gt?function(t,e,n){return ee.f(t,e,ne(1,n))}:function(t,e,n){return t[e]=n,t},oe={}.hasOwnProperty,re=function(t,e){return oe.call(t,e)},ae=0,se=Math.random(),le=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++ae+se).toString(36))},ue=o(function(t){var e=le("src"),n=Function.toString,i=(""+n).split("toString");Wt.inspectSource=function(t){return n.call(t)},(t.exports=function(t,n,o,r){var a="function"==typeof o;a&&(re(o,"name")||ie(o,"name",n)),t[n]!==o&&(a&&(re(o,e)||ie(o,e,t[n]?""+t[n]:i.join(String(n)))),t===Vt?t[n]=o:r?t[n]?t[n]=o:ie(t,n,o):(delete t[n],ie(t,n,o)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[e]||n.call(this)})}),ce=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t},he=function(t,e,n){if(ce(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,o){return t.call(e,n,i,o)}}return function(){return t.apply(e,arguments)}},de=function t(e,n,i){var o,r,a,s,l=e&t.F,u=e&t.G,c=e&t.P,h=e&t.B,d=u?Vt:e&t.S?Vt[n]||(Vt[n]={}):(Vt[n]||{}).prototype,f=u?Wt:Wt[n]||(Wt[n]={}),p=f.prototype||(f.prototype={});u&&(i=n);for(o in i)a=((r=!l&&d&&void 0!==d[o])?d:i)[o],s=h&&r?he(a,Vt):c&&"function"==typeof a?he(Function.call,a):a,d&&ue(d,o,a,e&t.U),f[o]!=a&&ie(f,o,s),c&&p[o]!=a&&(p[o]=a)};Vt.core=Wt,de.F=1,de.G=2,de.S=4,de.P=8,de.B=16,de.W=32,de.U=64,de.R=128;var fe=de,pe={f:{}.propertyIsEnumerable},ge={}.toString,me=function(t){return ge.call(t).slice(8,-1)},_e=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==me(t)?t.split(""):Object(t)},ve=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t},be=function(t){return _e(ve(t))},ye=Object.getOwnPropertyDescriptor,ke={f:Gt?ye:function(t,e){if(t=be(t),e=Zt(e,!0),Jt)try{return ye(t,e)}catch(t){}if(re(t,e))return ne(!pe.f.call(t,e),t[e])}},we=function(t,e){if(Xt(t),!Ut(e)&&null!==e)throw TypeError(e+": can't set as prototype!")},Ee={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{(n=he(Function.call,ke.f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,i){return we(t,i),e?t.__proto__=i:n(t,i),t}}({},!1):void 0),check:we};fe(fe.S,"Object",{setPrototypeOf:Ee.set});Wt.Object.setPrototypeOf;var Ce=Vt["__core-js_shared__"]||(Vt["__core-js_shared__"]={}),Ae=function(t){return Ce[t]||(Ce[t]={})},Se=o(function(t){var e=Ae("wks"),n=Vt.Symbol,i="function"==typeof n;(t.exports=function(t){return e[t]||(e[t]=i&&n[t]||(i?n:le)("Symbol."+t))}).store=e}),Pe=Se("toStringTag"),Oe="Arguments"==me(function(){return arguments}()),xe=function(t){var e,n,i;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),Pe))?n:Oe?me(e):"Object"==(i=me(e))&&"function"==typeof e.callee?"Arguments":i},Te={};Te[Se("toStringTag")]="z",Te+""!="[object z]"&&ue(Object.prototype,"toString",function(){return"[object "+xe(this)+"]"},!0);var Le=Math.ceil,Me=Math.floor,De=function(t){return isNaN(t=+t)?0:(t>0?Me:Le)(t)},Ie={},Ne=Math.min,Be=function(t){return t>0?Ne(De(t),9007199254740991):0},je=Math.max,He=Math.min,Re=Ae("keys"),Fe=function(t){return Re[t]||(Re[t]=le(t))},qe=function(t){return function(e,n,i){var o,r=be(e),a=Be(r.length),s=function(t,e){return(t=De(t))<0?je(t+e,0):He(t,e)}(i,a);if(t&&n!=n){for(;a>s;)if((o=r[s++])!=o)return!0}else for(;a>s;s++)if((t||s in r)&&r[s]===n)return t||s||0;return!t&&-1}}(!1),ze=Fe("IE_PROTO"),Ve="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),We=Object.keys||function(t){return function(t,e){var n,i=be(t),o=0,r=[];for(n in i)n!=ze&&re(i,n)&&r.push(n);for(;e.length>o;)re(i,n=e[o++])&&(~qe(r,n)||r.push(n));return r}(t,Ve)},Ue=Gt?Object.defineProperties:function(t,e){Xt(t);for(var n,i=We(e),o=i.length,r=0;o>r;)ee.f(t,n=i[r++],e[n]);return t},Xe=Vt.document,Ye=Xe&&Xe.documentElement,Ge=Fe("IE_PROTO"),$e=function(){},Ke=function(){var t,e=Qt("iframe"),n=Ve.length;for(e.style.display="none",Ye.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),Ke=t.F;n--;)delete Ke.prototype[Ve[n]];return Ke()},Qe=Object.create||function(t,e){var n;return null!==t?($e.prototype=Xt(t),n=new $e,$e.prototype=null,n[Ge]=t):n=Ke(),void 0===e?n:Ue(n,e)},Je=ee.f,Ze=Se("toStringTag"),tn=function(t,e,n){t&&!re(t=n?t:t.prototype,Ze)&&Je(t,Ze,{configurable:!0,value:e})},en={};ie(en,Se("iterator"),function(){return this});var nn=function(t,e,n){t.prototype=Qe(en,{next:ne(1,n)}),tn(t,e+" Iterator")},on=function(t){return Object(ve(t))},rn=Fe("IE_PROTO"),an=Object.prototype,sn=Object.getPrototypeOf||function(t){return t=on(t),re(t,rn)?t[rn]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?an:null},ln=Se("iterator"),un=!([].keys&&"next"in[].keys()),cn=function(){return this},hn=function(t,e,n,i,o,r,a){nn(n,e,i);var s,l,u,c=function(t){if(!un&&t in p)return p[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},h=e+" Iterator",d="values"==o,f=!1,p=t.prototype,g=p[ln]||p["@@iterator"]||o&&p[o],m=g||c(o),_=o?d?c("entries"):m:void 0,v="Array"==e?p.entries||g:g;if(v&&(u=sn(v.call(new t)))!==Object.prototype&&u.next&&(tn(u,h,!0),re(u,ln)||ie(u,ln,cn)),d&&g&&"values"!==g.name&&(f=!0,m=function(){return g.call(this)}),(un||f||!p[ln])&&ie(p,ln,m),Ie[e]=m,Ie[h]=cn,o)if(s={values:d?m:c("values"),keys:r?m:c("keys"),entries:_},a)for(l in s)l in p||ue(p,l,s[l]);else fe(fe.P+fe.F*(un||f),e,s);return s},dn=function(t){return function(e,n){var i,o,r=String(ve(e)),a=De(n),s=r.length;return a<0||a>=s?t?"":void 0:(i=r.charCodeAt(a))<55296||i>56319||a+1===s||(o=r.charCodeAt(a+1))<56320||o>57343?t?r.charAt(a):i:t?r.slice(a,a+2):o-56320+(i-55296<<10)+65536}}(!0);hn(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=dn(e,n),this._i+=t.length,{value:t,done:!1})});var fn=Se("unscopables"),pn=Array.prototype;void 0==pn[fn]&&ie(pn,fn,{});var gn=function(t){pn[fn][t]=!0},mn=function(t,e){return{value:e,done:!!t}},_n=hn(Array,"Array",function(t,e){this._t=be(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,mn(1)):"keys"==e?mn(0,n):"values"==e?mn(0,t[n]):mn(0,[n,t[n]])},"values");Ie.Arguments=Ie.Array,gn("keys"),gn("values"),gn("entries");for(var vn=Se("iterator"),bn=Se("toStringTag"),yn=Ie.Array,kn={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},wn=We(kn),En=0;En<wn.length;En++){var Cn,An=wn[En],Sn=kn[An],Pn=Vt[An],On=Pn&&Pn.prototype;if(On&&(On[vn]||ie(On,vn,yn),On[bn]||ie(On,bn,An),Ie[An]=yn,Sn))for(Cn in _n)On[Cn]||ue(On,Cn,_n[Cn],!0)}var xn=function(t,e,n){for(var i in e)ue(t,i,e[i],n);return t},Tn=function(t,e,n,i){if(!(t instanceof e)||void 0!==i&&i in t)throw TypeError(n+": incorrect invocation!");return t},Ln=function(t,e,n,i){try{return i?e(Xt(n)[0],n[1]):e(n)}catch(e){var o=t.return;throw void 0!==o&&Xt(o.call(t)),e}},Mn=Se("iterator"),Dn=Array.prototype,In=function(t){return void 0!==t&&(Ie.Array===t||Dn[Mn]===t)},Nn=Se("iterator"),Bn=Wt.getIteratorMethod=function(t){if(void 0!=t)return t[Nn]||t["@@iterator"]||Ie[xe(t)]},jn=o(function(t){var e={},n={},i=t.exports=function(t,i,o,r,a){var s,l,u,c,h=a?function(){return t}:Bn(t),d=he(o,r,i?2:1),f=0;if("function"!=typeof h)throw TypeError(t+" is not iterable!");if(In(h)){for(s=Be(t.length);s>f;f++)if((c=i?d(Xt(l=t[f])[0],l[1]):d(t[f]))===e||c===n)return c}else for(u=h.call(t);!(l=u.next()).done;)if((c=Ln(u,d,l.value,i))===e||c===n)return c};i.BREAK=e,i.RETURN=n}),Hn=Se("species"),Rn=o(function(t){var e=le("meta"),n=ee.f,i=0,o=Object.isExtensible||function(){return!0},r=!Yt(function(){return o(Object.preventExtensions({}))}),a=function(t){n(t,e,{value:{i:"O"+ ++i,w:{}}})},s=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!Ut(t))return"symbol"==(void 0===t?"undefined":f(t))?t:("string"==typeof t?"S":"P")+t;if(!re(t,e)){if(!o(t))return"F";if(!n)return"E";a(t)}return t[e].i},getWeak:function(t,n){if(!re(t,e)){if(!o(t))return!0;if(!n)return!1;a(t)}return t[e].w},onFreeze:function(t){return r&&s.NEED&&o(t)&&!re(t,e)&&a(t),t}}}),Fn=(Rn.KEY,Rn.NEED,Rn.fastKey,Rn.getWeak,Rn.onFreeze,function(t,e){if(!Ut(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}),qn=ee.f,zn=Rn.fastKey,Vn=Gt?"_s":"size",Wn=function(t,e){var n,i=zn(e);if("F"!==i)return t._i[i];for(n=t._f;n;n=n.n)if(n.k==e)return n},Un={getConstructor:function(t,e,n,i){var o=t(function(t,r){Tn(t,o,e,"_i"),t._t=e,t._i=Qe(null),t._f=void 0,t._l=void 0,t[Vn]=0,void 0!=r&&jn(r,n,t[i],t)});return xn(o.prototype,{clear:function(){for(var t=Fn(this,e),n=t._i,i=t._f;i;i=i.n)i.r=!0,i.p&&(i.p=i.p.n=void 0),delete n[i.i];t._f=t._l=void 0,t[Vn]=0},delete:function(t){var n=Fn(this,e),i=Wn(n,t);if(i){var o=i.n,r=i.p;delete n._i[i.i],i.r=!0,r&&(r.n=o),o&&(o.p=r),n._f==i&&(n._f=o),n._l==i&&(n._l=r),n[Vn]--}return!!i},forEach:function(t){Fn(this,e);for(var n,i=he(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(i(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!Wn(Fn(this,e),t)}}),Gt&&qn(o.prototype,"size",{get:function(){return Fn(this,e)[Vn]}}),o},def:function(t,e,n){var i,o,r=Wn(t,e);return r?r.v=n:(t._l=r={i:o=zn(e,!0),k:e,v:n,p:i=t._l,n:void 0,r:!1},t._f||(t._f=r),i&&(i.n=r),t[Vn]++,"F"!==o&&(t._i[o]=r)),t},getEntry:Wn,setStrong:function(t,e,n){hn(t,e,function(t,n){this._t=Fn(t,e),this._k=n,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?"keys"==t?mn(0,e.k):"values"==t?mn(0,e.v):mn(0,[e.k,e.v]):(this._t=void 0,mn(1))},n?"entries":"values",!n,!0),function(t){var e=Vt[t];Gt&&e&&!e[Hn]&&ee.f(e,Hn,{configurable:!0,get:function(){return this}})}(e)}},Xn=Se("iterator"),Yn=!1;try{[7][Xn]().return=function(){Yn=!0}}catch(t){}var Gn=function(t,e){if(!e&&!Yn)return!1;var n=!1;try{var i=[7],o=i[Xn]();o.next=function(){return{done:n=!0}},i[Xn]=function(){return o},t(i)}catch(t){}return n},$n=Ee.set,Kn=function(t,e,n,i,o,r){var a=Vt[t],s=a,l=o?"set":"add",u=s&&s.prototype,c={},h=function(t){var e=u[t];ue(u,t,"delete"==t?function(t){return!(r&&!Ut(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(r&&!Ut(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return r&&!Ut(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,n){return e.call(this,0===t?0:t,n),this})};if("function"==typeof s&&(r||u.forEach&&!Yt(function(){(new s).entries().next()}))){var d=new s,f=d[l](r?{}:-0,1)!=d,p=Yt(function(){d.has(1)}),g=Gn(function(t){new s(t)}),m=!r&&Yt(function(){for(var t=new s,e=5;e--;)t[l](e,e);return!t.has(-0)});g||((s=e(function(e,n){Tn(e,s,t);var i=function(t,e,n){var i,o=e.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&Ut(i)&&$n&&$n(t,i),t}(new a,e,s);return void 0!=n&&jn(n,o,i[l],i),i})).prototype=u,u.constructor=s),(p||m)&&(h("delete"),h("has"),o&&h("get")),(m||f)&&h(l),r&&u.clear&&delete u.clear}else s=i.getConstructor(e,t,o,l),xn(s.prototype,n),Rn.NEED=!0;return tn(s,t),c[t]=s,fe(fe.G+fe.W+fe.F*(s!=a),c),r||i.setStrong(s,t,o),s},Qn=(Kn("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return Un.def(Fn(this,"Set"),t=0===t?0:t,t)}},Un),function(t){return function(){if(xe(this)!=t)throw TypeError(t+"#toJSON isn't generic");return function(t,e){var n=[];return jn(t,!1,n.push,n,e),n}(this)}});fe(fe.P+fe.R,"Set",{toJSON:Qn("Set")});var Jn=function(t){fe(fe.S,t,{of:function(){for(var t=arguments.length,e=Array(t);t--;)e[t]=arguments[t];return new this(e)}})};Jn("Set");var Zn=function(t){fe(fe.S,t,{from:function(t){var e,n,i,o,r=arguments[1];return ce(this),(e=void 0!==r)&&ce(r),void 0==t?new this:(n=[],e?(i=0,o=he(r,arguments[2],2),jn(t,!1,function(t){n.push(o(t,i++))})):jn(t,!1,n.push,n),new this(n))}})};Zn("Set");Wt.Set,Kn("Map",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{get:function(t){var e=Un.getEntry(Fn(this,"Map"),t);return e&&e.v},set:function(t,e){return Un.def(Fn(this,"Map"),0===t?0:t,e)}},Un,!0);fe(fe.P+fe.R,"Map",{toJSON:Qn("Map")}),Jn("Map"),Zn("Map");Wt.Map;var ti=Array.isArray||function(t){return"Array"==me(t)},ei=Se("species"),ni=function(t,e){var n=1==t,i=2==t,o=3==t,r=4==t,a=6==t,s=5==t||a,l=e||function(t,e){return new(function(t){var e;return ti(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!ti(e.prototype)||(e=void 0),Ut(e)&&null===(e=e[ei])&&(e=void 0)),void 0===e?Array:e}(t))(e)};return function(e,u,c){for(var h,d,f=on(e),p=_e(f),g=he(u,c,3),m=Be(p.length),_=0,v=n?l(e,m):i?l(e,0):void 0;m>_;_++)if((s||_ in p)&&(h=p[_],d=g(h,_,f),t))if(n)v[_]=d;else if(d)switch(t){case 3:return!0;case 5:return h;case 6:return _;case 2:v.push(h)}else if(r)return!1;return a?-1:o||r?r:v}},ii={f:Object.getOwnPropertySymbols},oi=Object.assign,ri=!oi||Yt(function(){var t={},e={},n=Symbol(),i="abcdefghijklmnopqrst";return t[n]=7,i.split("").forEach(function(t){e[t]=t}),7!=oi({},t)[n]||Object.keys(oi({},e)).join("")!=i})?function(t,e){for(var n=on(t),i=arguments.length,o=1,r=ii.f,a=pe.f;i>o;)for(var s,l=_e(arguments[o++]),u=r?We(l).concat(r(l)):We(l),c=u.length,h=0;c>h;)a.call(l,s=u[h++])&&(n[s]=l[s]);return n}:oi,ai=Rn.getWeak,si=ni(5),li=ni(6),ui=0,ci=function(t){return t._l||(t._l=new hi)},hi=function(){this.a=[]},di=function(t,e){return si(t.a,function(t){return t[0]===e})};hi.prototype={get:function(t){var e=di(this,t);if(e)return e[1]},has:function(t){return!!di(this,t)},set:function(t,e){var n=di(this,t);n?n[1]=e:this.a.push([t,e])},delete:function(t){var e=li(this.a,function(e){return e[0]===t});return~e&&this.a.splice(e,1),!!~e}};var fi={getConstructor:function(t,e,n,i){var o=t(function(t,r){Tn(t,o,e,"_i"),t._t=e,t._i=ui++,t._l=void 0,void 0!=r&&jn(r,n,t[i],t)});return xn(o.prototype,{delete:function(t){if(!Ut(t))return!1;var n=ai(t);return!0===n?ci(Fn(this,e)).delete(t):n&&re(n,this._i)&&delete n[this._i]},has:function(t){if(!Ut(t))return!1;var n=ai(t);return!0===n?ci(Fn(this,e)).has(t):n&&re(n,this._i)}}),o},def:function(t,e,n){var i=ai(Xt(e),!0);return!0===i?ci(t).set(e,n):i[t._i]=n,t},ufstore:ci};o(function(t){var e,n=ni(0),i=Rn.getWeak,o=Object.isExtensible,r=fi.ufstore,a={},s=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},l={get:function(t){if(Ut(t)){var e=i(t);return!0===e?r(Fn(this,"WeakMap")).get(t):e?e[this._i]:void 0}},set:function(t,e){return fi.def(Fn(this,"WeakMap"),t,e)}},u=t.exports=Kn("WeakMap",s,l,fi,!0,!0);Yt(function(){return 7!=(new u).set((Object.freeze||Object)(a),7).get(a)})&&(e=fi.getConstructor(s,"WeakMap"),ri(e.prototype,l),Rn.NEED=!0,n(["delete","has","get","set"],function(t){var n=u.prototype,i=n[t];ue(n,t,function(n,r){if(Ut(n)&&!o(n)){this._f||(this._f=new e);var a=this._f[t](n,r);return"set"==t?this:a}return i.call(this,n,r)})}))});Jn("WeakMap"),Zn("WeakMap");Wt.WeakMap;var pi=function(t,e,n){e in t?ee.f(t,e,ne(0,n)):t[e]=n};fe(fe.S+fe.F*!Gn(function(t){}),"Array",{from:function(t){var e,n,i,o,r=on(t),a="function"==typeof this?this:Array,s=arguments.length,l=s>1?arguments[1]:void 0,u=void 0!==l,c=0,h=Bn(r);if(u&&(l=he(l,s>2?arguments[2]:void 0,2)),void 0==h||a==Array&&In(h))for(n=new a(e=Be(r.length));e>c;c++)pi(n,c,u?l(r[c],c):r[c]);else for(o=h.call(r),n=new a;!(i=o.next()).done;c++)pi(n,c,u?Ln(o,l,[i.value,c],!0):i.value);return n.length=c,n}});Wt.Array.from;var gi=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]),mi={custom:1,failed:2},_i=function(){function t(){p(this,t),this._localNameToDefinition=new Map,this._constructorToDefinition=new Map,this._patches=[],this._hasPatches=!1}return g(t,[{key:"setDefinition",value:function(t,e){this._localNameToDefinition.set(t,e),this._constructorToDefinition.set(e.constructor,e)}},{key:"localNameToDefinition",value:function(t){return this._localNameToDefinition.get(t)}},{key:"constructorToDefinition",value:function(t){return this._constructorToDefinition.get(t)}},{key:"addPatch",value:function(t){this._hasPatches=!0,this._patches.push(t)}},{key:"patchTree",value:function(t){var e=this;this._hasPatches&&l(t,function(t){return e.patch(t)})}},{key:"patch",value:function(t){if(this._hasPatches&&!t.__CE_patched){t.__CE_patched=!0;for(var e=0;e<this._patches.length;e++)this._patches[e](t)}}},{key:"connectTree",value:function(t){var e=[];l(t,function(t){return e.push(t)});for(var n=0;n<e.length;n++){var i=e[n];i.__CE_state===mi.custom?a(i)&&this.connectedCallback(i):this.upgradeElement(i)}}},{key:"disconnectTree",value:function(t){var e=[];l(t,function(t){return e.push(t)});for(var n=0;n<e.length;n++){var i=e[n];i.__CE_state===mi.custom&&this.disconnectedCallback(i)}}},{key:"patchAndUpgradeTree",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Set,i=[];if(l(t,function(t){if("link"===t.localName&&"import"===t.getAttribute("rel")){var o=t.import;o instanceof Node&&"complete"===o.readyState?(o.__CE_isImportDocument=!0,o.__CE_hasRegistry=!0):t.addEventListener("load",function(){var i=t.import;i.__CE_documentLoadHandled||(i.__CE_documentLoadHandled=!0,i.__CE_isImportDocument=!0,i.__CE_hasRegistry=!0,n.delete(i),e.patchAndUpgradeTree(i,n))})}else i.push(t)},n),this._hasPatches)for(var o=0;o<i.length;o++)this.patch(i[o]);for(var r=0;r<i.length;r++)this.upgradeElement(i[r])}},{key:"upgradeElement",value:function(t){if(void 0===t.__CE_state){var e=this.localNameToDefinition(t.localName);if(e){e.constructionStack.push(t);var n=e.constructor;try{try{if(new n!==t)throw new Error("The custom element constructor did not produce the element being upgraded.")}finally{e.constructionStack.pop()}}catch(e){throw t.__CE_state=mi.failed,e}if(t.__CE_state=mi.custom,t.__CE_definition=e,e.attributeChangedCallback)for(var i=e.observedAttributes,o=0;o<i.length;o++){var r=i[o],s=t.getAttribute(r);null!==s&&this.attributeChangedCallback(t,r,null,s,null)}a(t)&&this.connectedCallback(t)}}}},{key:"connectedCallback",value:function(t){var e=t.__CE_definition;e.connectedCallback&&e.connectedCallback.call(t),t.__CE_isConnectedCallbackCalled=!0}},{key:"disconnectedCallback",value:function(t){t.__CE_isConnectedCallbackCalled||this.connectedCallback(t);var e=t.__CE_definition;e.disconnectedCallback&&e.disconnectedCallback.call(t),t.__CE_isConnectedCallbackCalled=void 0}},{key:"attributeChangedCallback",value:function(t,e,n,i,o){var r=t.__CE_definition;r.attributeChangedCallback&&r.observedAttributes.indexOf(e)>-1&&r.attributeChangedCallback.call(t,e,n,i,o)}}]),t}(),vi=function(){function t(e,n){p(this,t),this._internals=e,this._document=n,this._observer=void 0,this._internals.patchAndUpgradeTree(this._document),"loading"===this._document.readyState&&(this._observer=new MutationObserver(this._handleMutations.bind(this)),this._observer.observe(this._document,{childList:!0,subtree:!0}))}return g(t,[{key:"disconnect",value:function(){this._observer&&this._observer.disconnect()}},{key:"_handleMutations",value:function(t){var e=this._document.readyState;"interactive"!==e&&"complete"!==e||this.disconnect();for(var n=0;n<t.length;n++)for(var i=t[n].addedNodes,o=0;o<i.length;o++){var r=i[o];this._internals.patchAndUpgradeTree(r)}}}]),t}(),bi=function(){function t(){var e=this;p(this,t),this._value=void 0,this._resolve=void 0,this._promise=new Promise(function(t){e._resolve=t,e._value&&t(e._value)})}return g(t,[{key:"resolve",value:function(t){if(this._value)throw new Error("Already resolved.");this._value=t,this._resolve&&this._resolve(t)}},{key:"toPromise",value:function(){return this._promise}}]),t}(),yi=function(){function t(e){p(this,t),this._elementDefinitionIsRunning=!1,this._internals=e,this._whenDefinedDeferred=new Map,this._flushCallback=function(t){return t()},this._flushPending=!1,this._unflushedLocalNames=[],this._documentConstructionObserver=new vi(e,document)}return g(t,[{key:"define",value:function(t,e){var n=this;if(!(e instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!r(t))throw new SyntaxError("The element name '"+t+"' is not valid.");if(this._internals.localNameToDefinition(t))throw new Error("A custom element with name '"+t+"' has already been defined.");if(this._elementDefinitionIsRunning)throw new Error("A custom element is already being defined.");this._elementDefinitionIsRunning=!0;var i=void 0,o=void 0,a=void 0,s=void 0,l=void 0;try{var u=function(t){var e=c[t];if(void 0!==e&&!(e instanceof Function))throw new Error("The '"+t+"' callback must be a function.");return e},c=e.prototype;if(!(c instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");i=u("connectedCallback"),o=u("disconnectedCallback"),a=u("adoptedCallback"),s=u("attributeChangedCallback"),l=e.observedAttributes||[]}catch(t){return}finally{this._elementDefinitionIsRunning=!1}var h={localName:t,constructor:e,connectedCallback:i,disconnectedCallback:o,adoptedCallback:a,attributeChangedCallback:s,observedAttributes:l,constructionStack:[]};this._internals.setDefinition(t,h),this._unflushedLocalNames.push(t),this._flushPending||(this._flushPending=!0,this._flushCallback(function(){return n._flush()}))}},{key:"_flush",value:function(){if(!1!==this._flushPending)for(this._flushPending=!1,this._internals.patchAndUpgradeTree(document);this._unflushedLocalNames.length>0;){var t=this._unflushedLocalNames.shift(),e=this._whenDefinedDeferred.get(t);e&&e.resolve(void 0)}}},{key:"get",value:function(t){var e=this._internals.localNameToDefinition(t);if(e)return e.constructor}},{key:"whenDefined",value:function(t){if(!r(t))return Promise.reject(new SyntaxError("'"+t+"' is not a valid custom element name."));var e=this._whenDefinedDeferred.get(t);if(e)return e.toPromise();var n=new bi;this._whenDefinedDeferred.set(t,n);return this._internals.localNameToDefinition(t)&&-1===this._unflushedLocalNames.indexOf(t)&&n.resolve(void 0),n.toPromise()}},{key:"polyfillWrapFlushCallback",value:function(t){this._documentConstructionObserver.disconnect();var e=this._flushCallback;this._flushCallback=function(n){return t(function(){return e(n)})}}}]),t}();window.CustomElementRegistry=yi,yi.prototype.define=yi.prototype.define,yi.prototype.get=yi.prototype.get,yi.prototype.whenDefined=yi.prototype.whenDefined,yi.prototype.polyfillWrapFlushCallback=yi.prototype.polyfillWrapFlushCallback;var ki={Document_createElement:window.Document.prototype.createElement,Document_createElementNS:window.Document.prototype.createElementNS,Document_importNode:window.Document.prototype.importNode,Document_prepend:window.Document.prototype.prepend,Document_append:window.Document.prototype.append,Node_cloneNode:window.Node.prototype.cloneNode,Node_appendChild:window.Node.prototype.appendChild,Node_insertBefore:window.Node.prototype.insertBefore,Node_removeChild:window.Node.prototype.removeChild,Node_replaceChild:window.Node.prototype.replaceChild,Node_textContent:Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),Element_attachShadow:window.Element.prototype.attachShadow,Element_innerHTML:Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Element_getAttribute:window.Element.prototype.getAttribute,Element_setAttribute:window.Element.prototype.setAttribute,Element_removeAttribute:window.Element.prototype.removeAttribute,Element_getAttributeNS:window.Element.prototype.getAttributeNS,Element_setAttributeNS:window.Element.prototype.setAttributeNS,Element_removeAttributeNS:window.Element.prototype.removeAttributeNS,Element_insertAdjacentElement:window.Element.prototype.insertAdjacentElement,Element_prepend:window.Element.prototype.prepend,Element_append:window.Element.prototype.append,Element_before:window.Element.prototype.before,Element_after:window.Element.prototype.after,Element_replaceWith:window.Element.prototype.replaceWith,Element_remove:window.Element.prototype.remove,HTMLElement:window.HTMLElement,HTMLElement_innerHTML:Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),HTMLElement_insertAdjacentElement:window.HTMLElement.prototype.insertAdjacentElement},wi=new function t(){p(this,t)},Ei=function(t,e,n){e.prepend=function(){for(var e=arguments.length,i=Array(e),o=0;o<e;o++)i[o]=arguments[o];var r=i.filter(function(t){return t instanceof Node&&a(t)});n.prepend.apply(this,i);for(var s=0;s<r.length;s++)t.disconnectTree(r[s]);if(a(this))for(var l=0;l<i.length;l++){var u=i[l];u instanceof Element&&t.connectTree(u)}},e.append=function(){for(var e=arguments.length,i=Array(e),o=0;o<e;o++)i[o]=arguments[o];var r=i.filter(function(t){return t instanceof Node&&a(t)});n.append.apply(this,i);for(var s=0;s<r.length;s++)t.disconnectTree(r[s]);if(a(this))for(var l=0;l<i.length;l++){var u=i[l];u instanceof Element&&t.connectTree(u)}}},Ci=window.customElements;if(!Ci||Ci.forcePolyfill||"function"!=typeof Ci.define||"function"!=typeof Ci.get){var Ai=new _i;!function(t){window.HTMLElement=function(){function e(){var e=this.constructor,n=t.constructorToDefinition(e);if(!n)throw new Error("The custom element being constructed was not registered with `customElements`.");var i=n.constructionStack;if(0===i.length){var o=ki.Document_createElement.call(document,n.localName);return Object.setPrototypeOf(o,e.prototype),o.__CE_state=mi.custom,o.__CE_definition=n,t.patch(o),o}var r=i.length-1,a=i[r];if(a===wi)throw new Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");return i[r]=wi,Object.setPrototypeOf(a,e.prototype),t.patch(a),a}return e.prototype=ki.HTMLElement.prototype,e}()}(Ai),function(t){u(Document.prototype,"createElement",function(e){if(this.__CE_hasRegistry){var n=t.localNameToDefinition(e);if(n)return new n.constructor}var i=ki.Document_createElement.call(this,e);return t.patch(i),i}),u(Document.prototype,"importNode",function(e,n){var i=ki.Document_importNode.call(this,e,n);return this.__CE_hasRegistry?t.patchAndUpgradeTree(i):t.patchTree(i),i});u(Document.prototype,"createElementNS",function(e,n){if(this.__CE_hasRegistry&&(null===e||"http://www.w3.org/1999/xhtml"===e)){var i=t.localNameToDefinition(n);if(i)return new i.constructor}var o=ki.Document_createElementNS.call(this,e,n);return t.patch(o),o}),Ei(t,Document.prototype,{prepend:ki.Document_prepend,append:ki.Document_append})}(Ai),function(t){function e(e,n){Object.defineProperty(e,"textContent",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(e){if(this.nodeType!==Node.TEXT_NODE){var i=void 0;if(this.firstChild){var o=this.childNodes,r=o.length;if(r>0&&a(this)){i=new Array(r);for(var s=0;s<r;s++)i[s]=o[s]}}if(n.set.call(this,e),i)for(var l=0;l<i.length;l++)t.disconnectTree(i[l])}else n.set.call(this,e)}})}u(Node.prototype,"insertBefore",function(e,n){if(e instanceof DocumentFragment){var i=Array.prototype.slice.apply(e.childNodes),o=ki.Node_insertBefore.call(this,e,n);if(a(this))for(var r=0;r<i.length;r++)t.connectTree(i[r]);return o}var s=a(e),l=ki.Node_insertBefore.call(this,e,n);return s&&t.disconnectTree(e),a(this)&&t.connectTree(e),l}),u(Node.prototype,"appendChild",function(e){if(e instanceof DocumentFragment){var n=Array.prototype.slice.apply(e.childNodes),i=ki.Node_appendChild.call(this,e);if(a(this))for(var o=0;o<n.length;o++)t.connectTree(n[o]);return i}var r=a(e),s=ki.Node_appendChild.call(this,e);return r&&t.disconnectTree(e),a(this)&&t.connectTree(e),s}),u(Node.prototype,"cloneNode",function(e){var n=ki.Node_cloneNode.call(this,e);return this.ownerDocument.__CE_hasRegistry?t.patchAndUpgradeTree(n):t.patchTree(n),n}),u(Node.prototype,"removeChild",function(e){var n=a(e),i=ki.Node_removeChild.call(this,e);return n&&t.disconnectTree(e),i}),u(Node.prototype,"replaceChild",function(e,n){if(e instanceof DocumentFragment){var i=Array.prototype.slice.apply(e.childNodes),o=ki.Node_replaceChild.call(this,e,n);if(a(this)){t.disconnectTree(n);for(var r=0;r<i.length;r++)t.connectTree(i[r])}return o}var s=a(e),l=ki.Node_replaceChild.call(this,e,n),u=a(this);return u&&t.disconnectTree(n),s&&t.disconnectTree(e),u&&t.connectTree(e),l}),ki.Node_textContent&&ki.Node_textContent.get?e(Node.prototype,ki.Node_textContent):t.addPatch(function(t){e(t,{enumerable:!0,configurable:!0,get:function(){for(var t=[],e=0;e<this.childNodes.length;e++)t.push(this.childNodes[e].textContent);return t.join("")},set:function(t){for(;this.firstChild;)ki.Node_removeChild.call(this,this.firstChild);ki.Node_appendChild.call(this,document.createTextNode(t))}})})}(Ai),function(t){function e(e,n){Object.defineProperty(e,"innerHTML",{enumerable:n.enumerable,configurable:!0,get:n.get,set:function(e){var i=this,o=void 0;if(a(this)&&(o=[],l(this,function(t){t!==i&&o.push(t)})),n.set.call(this,e),o)for(var r=0;r<o.length;r++){var s=o[r];s.__CE_state===mi.custom&&t.disconnectedCallback(s)}return this.ownerDocument.__CE_hasRegistry?t.patchAndUpgradeTree(this):t.patchTree(this),e}})}function n(e,n){u(e,"insertAdjacentElement",function(e,i){var o=a(i),r=n.call(this,e,i);return o&&t.disconnectTree(i),a(r)&&t.connectTree(i),r})}if(ki.Element_attachShadow?u(Element.prototype,"attachShadow",function(t){var e=ki.Element_attachShadow.call(this,t);return this.__CE_shadowRoot=e,e}):console.warn("Custom Elements: `Element#attachShadow` was not patched."),ki.Element_innerHTML&&ki.Element_innerHTML.get)e(Element.prototype,ki.Element_innerHTML);else if(ki.HTMLElement_innerHTML&&ki.HTMLElement_innerHTML.get)e(HTMLElement.prototype,ki.HTMLElement_innerHTML);else{var i=ki.Document_createElement.call(document,"div");t.addPatch(function(t){e(t,{enumerable:!0,configurable:!0,get:function(){return ki.Node_cloneNode.call(this,!0).innerHTML},set:function(t){var e="template"===this.localName?this.content:this;for(i.innerHTML=t;e.childNodes.length>0;)ki.Node_removeChild.call(e,e.childNodes[0]);for(;i.childNodes.length>0;)ki.Node_appendChild.call(e,i.childNodes[0])}})})}u(Element.prototype,"setAttribute",function(e,n){if(this.__CE_state!==mi.custom)return ki.Element_setAttribute.call(this,e,n);var i=ki.Element_getAttribute.call(this,e);ki.Element_setAttribute.call(this,e,n),n=ki.Element_getAttribute.call(this,e),t.attributeChangedCallback(this,e,i,n,null)}),u(Element.prototype,"setAttributeNS",function(e,n,i){if(this.__CE_state!==mi.custom)return ki.Element_setAttributeNS.call(this,e,n,i);var o=ki.Element_getAttributeNS.call(this,e,n);ki.Element_setAttributeNS.call(this,e,n,i),i=ki.Element_getAttributeNS.call(this,e,n),t.attributeChangedCallback(this,n,o,i,e)}),u(Element.prototype,"removeAttribute",function(e){if(this.__CE_state!==mi.custom)return ki.Element_removeAttribute.call(this,e);var n=ki.Element_getAttribute.call(this,e);ki.Element_removeAttribute.call(this,e),null!==n&&t.attributeChangedCallback(this,e,n,null,null)}),u(Element.prototype,"removeAttributeNS",function(e,n){if(this.__CE_state!==mi.custom)return ki.Element_removeAttributeNS.call(this,e,n);var i=ki.Element_getAttributeNS.call(this,e,n);ki.Element_removeAttributeNS.call(this,e,n);var o=ki.Element_getAttributeNS.call(this,e,n);i!==o&&t.attributeChangedCallback(this,n,i,o,e)}),ki.HTMLElement_insertAdjacentElement?n(HTMLElement.prototype,ki.HTMLElement_insertAdjacentElement):ki.Element_insertAdjacentElement?n(Element.prototype,ki.Element_insertAdjacentElement):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."),Ei(t,Element.prototype,{prepend:ki.Element_prepend,append:ki.Element_append}),function(t,e,n){e.before=function(){for(var e=arguments.length,i=Array(e),o=0;o<e;o++)i[o]=arguments[o];var r=i.filter(function(t){return t instanceof Node&&a(t)});n.before.apply(this,i);for(var s=0;s<r.length;s++)t.disconnectTree(r[s]);if(a(this))for(var l=0;l<i.length;l++){var u=i[l];u instanceof Element&&t.connectTree(u)}},e.after=function(){for(var e=arguments.length,i=Array(e),o=0;o<e;o++)i[o]=arguments[o];var r=i.filter(function(t){return t instanceof Node&&a(t)});n.after.apply(this,i);for(var s=0;s<r.length;s++)t.disconnectTree(r[s]);if(a(this))for(var l=0;l<i.length;l++){var u=i[l];u instanceof Element&&t.connectTree(u)}},e.replaceWith=function(){for(var e=arguments.length,i=Array(e),o=0;o<e;o++)i[o]=arguments[o];var r=i.filter(function(t){return t instanceof Node&&a(t)}),s=a(this);n.replaceWith.apply(this,i);for(var l=0;l<r.length;l++)t.disconnectTree(r[l]);if(s){t.disconnectTree(this);for(var u=0;u<i.length;u++){var c=i[u];c instanceof Element&&t.connectTree(c)}}},e.remove=function(){var e=a(this);n.remove.call(this),e&&t.disconnectTree(this)}}(t,Element.prototype,{before:ki.Element_before,after:ki.Element_after,replaceWith:ki.Element_replaceWith,remove:ki.Element_remove})}(Ai),document.__CE_hasRegistry=!0;var Si=new yi(Ai);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:Si})}!function(t){function e(){d=!1;var t=f;f=[],t.sort(function(t,e){return t.uid_-e.uid_});var n=!1;t.forEach(function(t){var e=t.takeRecords();!function(t){t.nodes_.forEach(function(e){var n=u.get(e);n&&n.forEach(function(e){e.observer===t&&e.removeTransientObservers()})})}(t),e.length&&(t.callback_(e,t),n=!0)}),n&&e()}function n(t,e){for(var n=t;n;n=n.parentNode){var i=u.get(n);if(i)for(var o=0;o<i.length;o++){var r=i[o],a=r.options;if(n===t||a.subtree){var s=e(a);s&&r.enqueue(s)}}}}function i(t){this.callback_=t,this.nodes_=[],this.records_=[],this.uid_=++p}function o(t,e){this.type=t,this.target=e,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function r(t,e){return g=new o(t,e)}function a(t){return m||(m=function(t){var e=new o(t.type,t.target);return e.addedNodes=t.addedNodes.slice(),e.removedNodes=t.removedNodes.slice(),e.previousSibling=t.previousSibling,e.nextSibling=t.nextSibling,e.attributeName=t.attributeName,e.attributeNamespace=t.attributeNamespace,e.oldValue=t.oldValue,e}(g),m.oldValue=t,m)}function s(t,e,n){this.observer=t,this.target=e,this.options=n,this.transientObservedNodes=[]}if(!t.JsMutationObserver){var l,u=new WeakMap;if(/Trident|Edge/.test(navigator.userAgent))l=setTimeout;else if(window.setImmediate)l=window.setImmediate;else{var c=[],h=String(Math.random());window.addEventListener("message",function(t){if(t.data===h){var e=c;c=[],e.forEach(function(t){t()})}}),l=function(t){c.push(t),window.postMessage(h,"*")}}var d=!1,f=[],p=0;i.prototype={observe:function(t,e){if(t=function(t){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(t)||t}(t),!e.childList&&!e.attributes&&!e.characterData||e.attributeOldValue&&!e.attributes||e.attributeFilter&&e.attributeFilter.length&&!e.attributes||e.characterDataOldValue&&!e.characterData)throw new SyntaxError;var n=u.get(t);n||u.set(t,n=[]);for(var i,o=0;o<n.length;o++)if(n[o].observer===this){(i=n[o]).removeListeners(),i.options=e;break}i||(i=new s(this,t,e),n.push(i),this.nodes_.push(t)),i.addListeners()},disconnect:function(){this.nodes_.forEach(function(t){for(var e=u.get(t),n=0;n<e.length;n++){var i=e[n];if(i.observer===this){i.removeListeners(),e.splice(n,1);break}}},this),this.records_=[]},takeRecords:function(){var t=this.records_;return this.records_=[],t}};var g,m;s.prototype={enqueue:function(t){var n=this.observer.records_,i=n.length;if(n.length>0){var o=function(t,e){return t===e?t:m&&function(t){return t===m||t===g}(t)?m:null}(n[i-1],t);if(o)return void(n[i-1]=o)}else!function(t){f.push(t),d||(d=!0,l(e))}(this.observer);n[i]=t},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(t){var e=this.options;e.attributes&&t.addEventListener("DOMAttrModified",this,!0),e.characterData&&t.addEventListener("DOMCharacterDataModified",this,!0),e.childList&&t.addEventListener("DOMNodeInserted",this,!0),(e.childList||e.subtree)&&t.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(t){var e=this.options;e.attributes&&t.removeEventListener("DOMAttrModified",this,!0),e.characterData&&t.removeEventListener("DOMCharacterDataModified",this,!0),e.childList&&t.removeEventListener("DOMNodeInserted",this,!0),(e.childList||e.subtree)&&t.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(t){if(t!==this.target){this.addListeners_(t),this.transientObservedNodes.push(t);var e=u.get(t);e||u.set(t,e=[]),e.push(this)}},removeTransientObservers:function(){var t=this.transientObservedNodes;this.transientObservedNodes=[],t.forEach(function(t){this.removeListeners_(t);for(var e=u.get(t),n=0;n<e.length;n++)if(e[n]===this){e.splice(n,1);break}},this)},handleEvent:function(t){switch(t.stopImmediatePropagation(),t.type){case"DOMAttrModified":var e=t.attrName,i=t.relatedNode.namespaceURI,o=t.target;(s=new r("attributes",o)).attributeName=e,s.attributeNamespace=i;l=t.attrChange===MutationEvent.ADDITION?null:t.prevValue;n(o,function(t){if(t.attributes&&(!t.attributeFilter||!t.attributeFilter.length||-1!==t.attributeFilter.indexOf(e)||-1!==t.attributeFilter.indexOf(i)))return t.attributeOldValue?a(l):s});break;case"DOMCharacterDataModified":var s=r("characterData",o=t.target),l=t.prevValue;n(o,function(t){if(t.characterData)return t.characterDataOldValue?a(l):s});break;case"DOMNodeRemoved":this.addTransientObserver(t.target);case"DOMNodeInserted":var u,c,h=t.target;"DOMNodeInserted"===t.type?(u=[h],c=[]):(u=[],c=[h]);var d=h.previousSibling,f=h.nextSibling;(s=r("childList",t.target.parentNode)).addedNodes=u,s.removedNodes=c,s.previousSibling=d,s.nextSibling=f,n(t.relatedNode,function(t){if(t.childList)return s})}g=m=void 0}},t.JsMutationObserver=i,t.MutationObserver||(t.MutationObserver=i,i._isPolyfilled=!0)}}(self),function(t,e){function n(t){return l[s]=i.apply(e,t),s++}function i(t){var n=[].slice.call(arguments,1);return function(){"function"==typeof t?t.apply(e,n):new Function(""+t)()}}function o(t){if(u)setTimeout(i(o,t),0);else{var e=l[t];if(e){u=!0;try{e()}finally{r(t),u=!1}}}}function r(t){delete l[t]}if(!t.setImmediate){var a,s=1,l={},u=!1,c=t.document,h=Object.getPrototypeOf&&Object.getPrototypeOf(t);h=h&&h.setTimeout?h:t,"[object process]"==={}.toString.call(t.process)?a=function(){var t=n(arguments);return process.nextTick(i(o,t)),t}:function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",i=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&o(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",i,!1):t.attachEvent("onmessage",i),a=function(){var i=n(arguments);return t.postMessage(e+i,"*"),i}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){o(t.data)},a=function(){var e=n(arguments);return t.port2.postMessage(e),e}}():c&&"onreadystatechange"in c.createElement("script")?function(){var t=c.documentElement;a=function(){var e=n(arguments),i=c.createElement("script");return i.onreadystatechange=function(){o(e),i.onreadystatechange=null,t.removeChild(i),i=null},t.appendChild(i),e}}():a=function(){var t=n(arguments);return setTimeout(i(o,t),0),t},h.setImmediate=a,h.clearImmediate=r}}(self),function(){var t={ensureViewportElement:function(){var t=document.querySelector("meta[name=viewport]");return t||((t=document.createElement("meta")).name="viewport",document.head.appendChild(t)),t},setup:function(){var e=t.ensureViewportElement();e&&(e.hasAttribute("content")||e.setAttribute("content","width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no"))}};window.Viewport=t}();var Pi=function(t){function e(){return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this))}return b(e,t),e}(function(){if("function"!=typeof HTMLElement){var t=function(){};return t.prototype=document.createElement("div"),t}return HTMLElement}()),Oi=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));for(t.template=t.innerHTML;t.firstChild;)t.removeChild(t.firstChild);return t}return b(e,Pi),g(e,[{key:"connectedCallback",value:function(){this.parentNode&&this.parentNode!==document.body&&Q.warn("ons-template (id = "+this.getAttribute("id")+") must be located just under document.body"+(this.parentNode.outerHTML?":\n\n"+this.parentNode.outerHTML:"."));var t=new CustomEvent("_templateloaded",{bubbles:!0,cancelable:!0});t.template=this.template,t.templateId=this.getAttribute("id"),this.dispatchEvent(t)}}]),e}();c.Template=Oi,customElements.define("ons-template",Oi);var xi=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n(t,function(){if(null!==C._getSelectedPlatform())t._platformUpdate();else if(!t._isAllowedPlatform()){for(;t.childNodes[0];)t.childNodes[0].remove();t._platformUpdate()}}),t._onOrientationChange(),t}return b(e,Pi),g(e,[{key:"connectedCallback",value:function(){Ot.on("change",this._onOrientationChange.bind(this))}},{key:"attributeChangedCallback",value:function(t){"orientation"===t&&this._onOrientationChange()}},{key:"disconnectedCallback",value:function(){Ot.off("change",this._onOrientationChange)}},{key:"_platformUpdate",value:function(){this.style.display=this._isAllowedPlatform()?"":"none"}},{key:"_isAllowedPlatform",value:function(){return!this.getAttribute("platform")||this.getAttribute("platform").split(/\s+/).indexOf(C.getMobileOS())>=0}},{key:"_onOrientationChange",value:function(){if(this.hasAttribute("orientation")&&this._isAllowedPlatform()){var t=this.getAttribute("orientation").toLowerCase(),e=Ot.isPortrait()?"portrait":"landscape";this.style.display=t===e?"":"none"}}}],[{key:"observedAttributes",get:function(){return["orientation"]}}]),e}();c.If=xi,customElements.define("ons-if",xi);var Ti=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};p(this,t),this.timing=e.timing||"linear",this.duration=e.duration||0,this.delay=e.delay||0,this.def={timing:this.timing,duration:this.duration,delay:this.delay}}return g(t,null,[{key:"extend",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this,n=function(){e.apply(this,arguments),Q.extend(this,t)};return n.prototype=this.prototype,n}}]),t}(),Li={};Li.isIPhoneXPortraitPatchActive=function(){return null!=document.documentElement.getAttribute("onsflag-iphonex-portrait")&&window.innerWidth<window.innerHeight},Li.isIPhoneXLandscapePatchActive=function(){return null!=document.documentElement.getAttribute("onsflag-iphonex-landscape")&&window.innerWidth>=window.innerHeight},Li.getSafeAreaLengths=function(){return Li.isIPhoneXPortraitPatchActive()?{top:44,right:0,bottom:34,left:0}:Li.isIPhoneXLandscapePatchActive()?{top:0,right:44,bottom:21,left:44}:{top:0,right:0,bottom:0,left:0}},Li.getSafeAreaDOMRect=function(){var t=void 0;return t=Li.isIPhoneXPortraitPatchActive()?{x:0,y:44,width:window.innerWidth,height:window.innerHeight-78}:Li.isIPhoneXLandscapePatchActive()?{x:44,y:0,width:window.innerWidth-88,height:window.innerHeight-21}:{x:0,y:0,width:window.innerWidth,height:window.innerHeight},_({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})};var Mi=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"linear":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.2:a;return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}))}return b(e,Ti),g(e,[{key:"show",value:function(t,e){e()}},{key:"hide",value:function(t,e){e()}}]),e}(),Di=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"ease":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.4:a;p(this,e);var l=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}));return l.maskTiming="linear",l.maskDuration=.2,l}return b(e,Mi),g(e,[{key:"show",value:function(t,e){nt.runAll(nt(t._mask).queue({opacity:0}).wait(this.delay).queue({opacity:1},{duration:this.maskDuration,timing:this.maskTiming}),nt(t._sheet,this.def).default({transform:"translate3d(0, 80%, 0)",opacity:0},{transform:"translate3d(0, 0, 0)",opacity:1}).queue(function(t){e&&e(),t()}))}},{key:"hide",value:function(t,e){nt.runAll(nt(t._mask).queue({opacity:1}).wait(this.delay).queue({opacity:0},{duration:this.maskDuration,timing:this.maskTiming}),nt(t._sheet,this.def).default({transform:"translate3d(0, 0, 0)",opacity:1},{transform:"translate3d(0, 80%, 0)",opacity:0}).queue(function(t){e&&e(),t()}))}}]),e}(),Ii=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"ease":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.3:a;p(this,e);var l=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}));return l.maskTiming="linear",l.maskDuration=.2,Li.isIPhoneXPortraitPatchActive()?l.liftAmount="calc(100% + 48px)":Li.isIPhoneXLandscapePatchActive()?l.liftAmount="calc(100% + 33px)":l.liftAmount=document.body.clientHeight/2-1+"px",l}return b(e,Mi),g(e,[{key:"show",value:function(t,e){nt.runAll(nt(t._mask).queue({opacity:0}).wait(this.delay).queue({opacity:1},{duration:this.maskDuration,timing:this.maskTiming}),nt(t._sheet,this.def).default({transform:"translate3d(0, "+this.liftAmount+", 0)"},{transform:"translate3d(0, 0, 0)"}).queue(function(t){e&&e(),t()}))}},{key:"hide",value:function(t,e){nt.runAll(nt(t._mask).queue({opacity:1}).wait(this.delay).queue({opacity:0},{duration:this.maskDuration,timing:this.maskTiming}),nt(t._sheet,this.def).default({transform:"translate3d(0, 0, 0)"},{transform:"translate3d(0, "+this.liftAmount+", 0)"}).queue(function(t){e&&e(),t()}))}}]),e}(),Ni=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.constructor===e&&Q.throwAbstract(),t._visible=!1,t._doorLock=new Nt,t._cancel=t._cancel.bind(t),t._selfCamelName=Q.camelize(t.tagName.slice(4)),t._defaultDBB=function(e){return t.cancelable?t._cancel():e.callParentHandler()},t._animatorFactory=t._updateAnimatorFactory(),t}return b(e,Pi),g(e,[{key:"_updateAnimatorFactory",value:function(){Q.throwMember()}},{key:"_toggleStyle",value:function(t){this.style.display=t?"block":"none"}},{key:"_scheme",get:function(){Q.throwMember()}}]),g(e,[{key:"_cancel",value:function(){var t=this;this.cancelable&&!this._running&&(this._running=!0,this.hide().then(function(){t._running=!1,Q.triggerElementEvent(t,"dialog-cancel")},function(){return t._running=!1}))}},{key:"show",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this._setVisible.apply(this,[!0].concat(e))}},{key:"hide",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this._setVisible.apply(this,[!1].concat(e))}},{key:"toggle",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this._setVisible.apply(this,[!this.visible].concat(e))}},{key:"_setVisible",value:function(t){var e,i=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t?"show":"hide";(o=_({},o)).animationOptions=Q.extend(o.animationOptions||{},O.parseAnimationOptionsString(this.getAttribute("animation-options")));var a=!1;return Q.triggerElementEvent(this,"pre"+r,(e={},m(e,this._selfCamelName,this),m(e,"cancel",function(){return a=!0}),e)),a?Promise.reject("Canceled in pre"+r+" event."):new Promise(function(e){i._doorLock.waitUnlock(function(){var a=i._doorLock.lock(),s=i._animatorFactory.newAnimator(o);t&&i._toggleStyle(!0,o),i._visible=t,Q.iosPageScrollFix(t),n(i,function(){s[r](i,function(){!t&&i._toggleStyle(!1,o),a(),Q.propagateAction(i,"_"+r),Q.triggerElementEvent(i,"post"+r,m({},i._selfCamelName,i)),o.callback instanceof Function&&o.callback(i),e(i)})})})})}},{key:"_updateMask",value:function(){var t=this;n(this,function(){t._mask&&t.getAttribute("mask-color")&&(t._mask.style.backgroundColor=t.getAttribute("mask-color"))})}},{key:"connectedCallback",value:function(){var t=this;"function"==typeof this._defaultDBB&&(this.onDeviceBackButton=this._defaultDBB.bind(this)),n(this,function(){t._mask&&(t._mask.addEventListener("click",t._cancel,!1),Q.iosMaskScrollFix(t._mask,!0))})}},{key:"disconnectedCallback",value:function(){this._backButtonHandler&&(this._backButtonHandler.destroy(),this._backButtonHandler=null),this._mask&&(this._mask.removeEventListener("click",this._cancel,!1),Q.iosMaskScrollFix(this._mask,!1))}},{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"modifier":B.onModifierChanged(e,n,this,this._scheme);break;case"animation":this._animatorFactory=this._updateAnimatorFactory();break;case"mask-color":this._updateMask()}}},{key:"onDeviceBackButton",get:function(){return this._backButtonHandler},set:function(t){this._backButtonHandler&&this._backButtonHandler.destroy(),this._backButtonHandler=R.createHandler(this,t)}},{key:"visible",get:function(){return this._visible}},{key:"disabled",set:function(t){return Q.toggleAttribute(this,"disabled",t)},get:function(){return this.hasAttribute("disabled")}},{key:"cancelable",set:function(t){return Q.toggleAttribute(this,"cancelable",t)},get:function(){return this.hasAttribute("cancelable")}}],[{key:"observedAttributes",get:function(){return["modifier","animation","mask-color"]}},{key:"events",get:function(){return["preshow","postshow","prehide","posthide","dialog-cancel"]}}]),e}(),Bi={".action-sheet":"action-sheet--*",".action-sheet-mask":"action-sheet-mask--*",".action-sheet-title":"action-sheet-title--*"},ji={default:function(){return C.isAndroid()?Di:Ii},none:Mi},Hi=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n(t,function(){return t._compile()}),t}return b(e,Ni),g(e,[{key:"_updateAnimatorFactory",value:function(){return new O({animators:ji,baseClass:Mi,baseClassName:"ActionSheetAnimator",defaultAnimation:this.getAttribute("animation")})}},{key:"_compile",value:function(){if(N.prepare(this),this.style.display="none",this.style.zIndex=10001,!this._sheet){var t=document.createElement("div");for(t.classList.add("action-sheet");this.firstChild;)t.appendChild(this.firstChild);this.appendChild(t)}if(!this._title&&this.hasAttribute("title")){var e=document.createElement("div");e.innerHTML=this.getAttribute("title"),e.classList.add("action-sheet-title"),this._sheet.insertBefore(e,this._sheet.firstChild)}if(!this._mask){var n=document.createElement("div");n.classList.add("action-sheet-mask"),this.insertBefore(n,this.firstChild)}this._sheet.style.zIndex=20001,this._mask.style.zIndex=2e4,B.initModifier(this,this._scheme)}},{key:"_updateTitle",value:function(){this._title&&(this._title.innerHTML=this.getAttribute("title"))}},{key:"attributeChangedCallback",value:function(t,n,i){"title"===t?this._updateTitle():v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"attributeChangedCallback",this).call(this,t,n,i)}},{key:"_scheme",get:function(){return Bi}},{key:"_mask",get:function(){return Q.findChild(this,".action-sheet-mask")}},{key:"_sheet",get:function(){return Q.findChild(this,".action-sheet")}},{key:"_title",get:function(){return this.querySelector(".action-sheet-title")}}],[{key:"registerAnimator",value:function(t,e){e.prototype instanceof Mi||Q.throwAnimator("ActionSheet"),ji[t]=e}},{key:"observedAttributes",get:function(){return[].concat(w(v(e.__proto__||Object.getPrototypeOf(e),"observedAttributes",this)),["title"])}},{key:"animators",get:function(){return ji}},{key:"ActionSheetAnimator",get:function(){return Mi}}]),e}();c.ActionSheet=Hi,customElements.define("ons-action-sheet",Hi);var Ri=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.constructor===e&&Q.throwAbstract(),n(t,function(){return t._compile()}),t}return b(e,Pi),g(e,[{key:"_scheme",get:function(){Q.throwMember()}},{key:"_defaultClassName",get:function(){Q.throwMember()}},{key:"_rippleOpt",get:function(){return[this]}}]),g(e,[{key:"_compile",value:function(){if(N.prepare(this),this.classList.add(this._defaultClassName),!this._icon&&this.hasAttribute("icon")){Q.checkMissingImport("Icon");var t=Q.createElement('<ons-icon icon="'+this.getAttribute("icon")+'"></ons-icon>');t.classList.add(this._defaultClassName.replace("button","icon")),this.insertBefore(t,this.firstChild)}this._updateRipple(),B.initModifier(this,this._scheme)}},{key:"_updateIcon",value:function(){this._icon&&this._icon.setAttribute("icon",this.getAttribute("icon"))}},{key:"_updateRipple",value:function(){this._rippleOpt&&Q.updateRipple.apply(Q,w(this._rippleOpt))}},{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"class":Q.restoreClass(this,this._defaultClassName,this._scheme);break;case"modifier":B.onModifierChanged(e,n,this,this._scheme);break;case"icon":this._updateIcon();break;case"ripple":this.classList.contains(this._defaultClassName)&&this._updateRipple()}}},{key:"disabled",set:function(t){return Q.toggleAttribute(this,"disabled",t)},get:function(){return this.hasAttribute("disabled")}},{key:"_icon",get:function(){return Q.findChild(this,"ons-icon")}}],[{key:"observedAttributes",get:function(){return["modifier","class","icon","ripple"]}}]),e}(),Fi=function(t){function e(){return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,Ri),g(e,[{key:"_scheme",get:function(){return{"":"action-sheet-button--*",".action-sheet-icon":"action-sheet-icon--*"}}},{key:"_defaultClassName",get:function(){return"action-sheet-button"}},{key:"_rippleOpt",get:function(){}}]),e}();c.ActionSheetButton=Fi,customElements.define("ons-action-sheet-button",Fi);var qi=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"linear":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.2:a;return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}))}return b(e,Ti),g(e,[{key:"show",value:function(t,e){e()}},{key:"hide",value:function(t,e){e()}}]),e}(),zi=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"cubic-bezier(.1, .7, .4, 1)":n,o=t.duration,r=void 0===o?.2:o,a=t.delay,s=void 0===a?0:a;return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{duration:r,timing:i,delay:s}))}return b(e,qi),g(e,[{key:"show",value:function(t,e){e=e||function(){},nt.runAll(nt(t._mask,this.def).default({opacity:0},{opacity:1}),nt(t._dialog,this.def).default({transform:"translate3d(-50%, -50%, 0) scale3d(.9, .9, 1)",opacity:0},{transform:"translate3d(-50%, -50%, 0) scale3d(1, 1, 1)",opacity:1}).queue(function(t){e(),t()}))}},{key:"hide",value:function(t,e){e=e||function(){},nt.runAll(nt(t._mask,this.def).default({opacity:1},{opacity:0}),nt(t._dialog,this.def).default({transform:"translate3d(-50%, -50%, 0) scale3d(1, 1, 1)",opacity:1},{transform:"translate3d(-50%, -50%, 0) scale3d(.9, .9, 1)",opacity:0}).queue(function(t){e(),t()}))}}]),e}(),Vi=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"cubic-bezier(.1, .7, .4, 1)":n,o=t.duration,r=void 0===o?.2:o,a=t.delay,s=void 0===a?0:a;return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{duration:r,timing:i,delay:s}))}return b(e,qi),g(e,[{key:"show",value:function(t,e){e=e||function(){},nt.runAll(nt(t._mask,this.def).default({opacity:0},{opacity:1}),nt(t._dialog,this.def).default({transform:"translate3d(-50%, -50%, 0) scale3d(1.3, 1.3, 1)",opacity:0},{transform:"translate3d(-50%, -50%, 0) scale3d(1, 1, 1)",opacity:1}).queue(function(t){e(),t()}))}},{key:"hide",value:function(t,e){e=e||function(){},nt.runAll(nt(t._mask,this.def).default({opacity:1},{opacity:0}),nt(t._dialog,this.def).default({opacity:1},{opacity:0}).queue(function(t){e(),t()}))}}]),e}(),Wi={".alert-dialog":"alert-dialog--*",".alert-dialog-container":"alert-dialog-container--*",".alert-dialog-title":"alert-dialog-title--*",".alert-dialog-content":"alert-dialog-content--*",".alert-dialog-footer":"alert-dialog-footer--*",".alert-dialog-footer--rowfooter":"alert-dialog-footer--rowfooter--*",".alert-dialog-button--rowfooter":"alert-dialog-button--rowfooter--*",".alert-dialog-button--primal":"alert-dialog-button--primal--*",".alert-dialog-button":"alert-dialog-button--*","ons-alert-dialog-button":"alert-dialog-button--*",".alert-dialog-mask":"alert-dialog-mask--*",".text-input":"text-input--*"},Ui={none:qi,default:function(){return C.isAndroid()?zi:Vi},fade:function(){return C.isAndroid()?zi:Vi}},Xi=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n(t,function(){return t._compile()}),t}return b(e,Ni),g(e,[{key:"_updateAnimatorFactory",value:function(){return new O({animators:Ui,baseClass:qi,baseClassName:"AlertDialogAnimator",defaultAnimation:this.getAttribute("animation")})}},{key:"_compile",value:function(){N.prepare(this),this.style.display="none",this.style.zIndex=10001;var t=document.createDocumentFragment();if(!this._mask&&!this._dialog)for(;this.firstChild;)t.appendChild(this.firstChild);if(!this._mask){var e=document.createElement("div");e.classList.add("alert-dialog-mask"),this.insertBefore(e,this.children[0])}if(!this._dialog){var n=document.createElement("div");n.classList.add("alert-dialog"),this.insertBefore(n,null)}if(!Q.findChild(this._dialog,".alert-dialog-container")){var i=document.createElement("div");i.classList.add("alert-dialog-container"),this._dialog.appendChild(i)}this._dialog.children[0].appendChild(t),this._dialog.style.zIndex=20001,this._mask.style.zIndex=2e4,B.initModifier(this,this._scheme)}},{key:"_scheme",get:function(){return Wi}},{key:"_mask",get:function(){return Q.findChild(this,".alert-dialog-mask")}},{key:"_dialog",get:function(){return Q.findChild(this,".alert-dialog")}},{key:"_titleElement",get:function(){return Q.findChild(this._dialog.children[0],".alert-dialog-title")}},{key:"_contentElement",get:function(){return Q.findChild(this._dialog.children[0],".alert-dialog-content")}}],[{key:"registerAnimator",value:function(t,e){e.prototype instanceof qi||Q.throwAnimator("AlertDialog"),Ui[t]=e}},{key:"animators",get:function(){return Ui}},{key:"AlertDialogAnimator",get:function(){return qi}}]),e}();c.AlertDialog=Xi,customElements.define("ons-alert-dialog",Xi);var Yi=function(t){function e(){return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,Ri),g(e,[{key:"_scheme",get:function(){return{"":"alert-dialog-button--*"}}},{key:"_defaultClassName",get:function(){return"alert-dialog-button"}},{key:"_rippleOpt",get:function(){return[this,void 0,{modifier:"light-gray"}]}}]),e}();c.AlertDialogButton=Yi,customElements.define("ons-alert-dialog-button",Yi);var Gi={"":"back-button--*",".back-button__icon":"back-button--*__icon",".back-button__label":"back-button--*__label"},$i=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n(t,function(){t._compile()}),t._options={},t._boundOnClick=t._onClick.bind(t),t}return b(e,Pi),g(e,[{key:"_updateIcon",value:function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q.findChild(this,".back-button__icon")).innerHTML="android"===N.getPlatform(this)||Q.hasModifier(this,"material")?'<?xml version="1.0" encoding="UTF-8"?>\n<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <title>md-back-button-icon</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id="toolbar-back-button" stroke="none" stroke-width="1" fill-rule="evenodd">\n        <g id="android" transform="translate(-32.000000, -32.000000)" fill-rule="nonzero">\n            <polygon id="md-back-button-icon" points="48 39 35.83 39 41.42 33.41 40 32 32 40 40 48 41.41 46.59 35.83 41 48 41"></polygon>\n        </g>\n    </g>\n</svg>\n':'<?xml version="1.0" encoding="UTF-8"?>\n<svg width="13px" height="21px" viewBox="0 0 13 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    <title>ios-back-button-icon</title>\n    <desc>Created with Sketch.</desc>\n    <defs></defs>\n    <g id="toolbar-back-button" stroke="none" stroke-width="1" fill-rule="evenodd">\n        <g id="ios" transform="translate(-34.000000, -30.000000)">\n            <polygon id="ios-back-button-icon" points="34 40.5 44.5 30 46.5 32 38 40.5 46.5 49 44.5 51"></polygon>\n        </g>\n    </g>\n</svg>\n'}},{key:"_compile",value:function(){if(N.prepare(this),this.classList.add("back-button"),!Q.findChild(this,".back-button__label")){for(var t=Q.create("span.back-button__label");this.childNodes[0];)t.appendChild(this.childNodes[0]);this.appendChild(t)}if(!Q.findChild(this,".back-button__icon")){var e=Q.create("span.back-button__icon");this._updateIcon(e),this.insertBefore(e,this.children[0])}Q.updateRipple(this,void 0,{center:"",size:"contain",background:"transparent"}),B.initModifier(this,Gi)}},{key:"_onClick",value:function(){if(this.onClick)this.onClick.apply(this);else{var t=Q.findParent(this,"ons-navigator");t&&t.popPage(this.options)}}},{key:"connectedCallback",value:function(){this.addEventListener("click",this._boundOnClick,!1)}},{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"class":Q.restoreClass(this,"back-button",Gi);break;case"modifier":B.onModifierChanged(e,n,this,Gi)&&this._updateIcon()}}},{key:"disconnectedCallback",value:function(){this.removeEventListener("click",this._boundOnClick,!1)}},{key:"show",value:function(){this.style.display="inline-block"}},{key:"hide",value:function(){this.style.display="none"}},{key:"options",get:function(){return this._options},set:function(t){this._options=t}}],[{key:"observedAttributes",get:function(){return["modifier","class"]}}]),e}();c.BackButton=$i,customElements.define("ons-back-button",$i);var Ki="bottom-bar",Qi={"":"bottom-bar--*"},Ji=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.classList.add(Ki),B.initModifier(t,Qi),t}return b(e,Pi),g(e,[{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"class":Q.restoreClass(this,Ki,Qi);break;case"modifier":B.onModifierChanged(e,n,this,Qi)}}}],[{key:"observedAttributes",get:function(){return["modifier","class"]}}]),e}();c.BottomToolbar=Ji,customElements.define("ons-bottom-toolbar",Ji);var Zi=function(t){function e(){return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,Ri),g(e,[{key:"_scheme",get:function(){return{"":"button--*"}}},{key:"_defaultClassName",get:function(){return"button"}}]),e}();c.Button=Zi,customElements.define("ons-button",Zi);var to={"":"card--*",".card__title":"card--*__title",".card__content":"card--*__content"},eo=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n(t,function(){t._compile()}),t}return b(e,Pi),g(e,[{key:"_compile",value:function(){for(var t=0;t<this.children.length;t++){var e=this.children[t];e.classList.contains("title")?e.classList.add("card__title"):e.classList.contains("content")&&e.classList.add("card__content")}N.prepare(this),this.classList.add("card"),B.initModifier(this,to)}},{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"class":Q.restoreClass(this,"card",to);break;case"modifier":B.onModifierChanged(e,n,this,to)}}}],[{key:"observedAttributes",get:function(){return["modifier","class"]}}]),e}();c.Card=eo,customElements.define("ons-card",eo);var no={"":"carousel-item--*"},io=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.style.width="100%",B.initModifier(t,no),t}return b(e,Pi),g(e,[{key:"attributeChangedCallback",value:function(t,e,n){if("modifier"===t)return B.onModifierChanged(e,n,this,no)}}],[{key:"observedAttributes",get:function(){return["modifier"]}}]),e}();c.CarouselItem=io,customElements.define("ons-carousel-item",io);var oo={vertical:{axis:"Y",size:"Height",dir:["up","down"],t3d:["0px, ","px, 0px"]},horizontal:{axis:"X",size:"Width",dir:["left","right"],t3d:["","px, 0px, 0px"]}},ro=function(){function t(e){var n=this;p(this,t);"getInitialIndex getBubbleWidth isVertical isOverScrollable isCentered\n    isAutoScrollable refreshHook preChangeHook postChangeHook overScrollHook".split(/\s+/).forEach(function(t){return n[t]=e[t]||function(){return!1}}),this.getElement=e.getElement,this.scrollHook=e.scrollHook,this.itemSize=e.itemSize||"100%",this.getAutoScrollRatio=function(){var t=e.getAutoScrollRatio&&e.getAutoScrollRatio.apply(e,arguments);return((t="number"==typeof t&&t==t?t:.5)<0||t>1)&&Q.throw("Invalid auto-scroll-ratio "+t+". Must be between 0 and 1"),t},this.shouldBlock="other"===Q.globals.actualMobileOS,this.onDragStart=this.onDragStart.bind(this),this.onDrag=this.onDrag.bind(this),this.onDragEnd=this.onDragEnd.bind(this),this.onResize=this.onResize.bind(this),this._shouldFixScroll="ios"===Q.globals.actualMobileOS}return g(t,[{key:"init",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.swipeable,i=e.autoRefresh;this.initialized=!0,this.target=this.getElement().children[0],this.blocker=this.getElement().children[1],this.target&&this.blocker||Q.throw('Expected "target" and "blocker" elements to exist before initializing Swiper'),this.shouldBlock||(this.blocker.style.display="none"),this.getElement().classList.add("ons-swiper"),this.target.classList.add("ons-swiper-target"),this.blocker.classList.add("ons-swiper-blocker"),this._gestureDetector=new st(this.getElement(),{dragMinDistance:1,dragLockToAxis:!0,passive:!this._shouldFixScroll}),this._mutationObserver=new MutationObserver(function(){return t.refresh()}),this.updateSwipeable(n),this.updateAutoRefresh(i),this._scroll=this._offset=this._lastActiveIndex=0,this._updateLayout(),this._setupInitialIndex(),setImmediate(function(){return t.initialized&&t._setupInitialIndex()}),window===window.parent&&0!==this.offsetHeight||window.requestAnimationFrame(function(){return t.initialized&&t.onResize()})}},{key:"dispose",value:function(){this.initialized=!1,this.updateSwipeable(!1),this.updateAutoRefresh(!1),this._gestureDetector&&this._gestureDetector.dispose(),this.target=this.blocker=this._gestureDetector=this._mutationObserver=null,this.setupResize(!1)}},{key:"onResize",value:function(){var t=this._scroll/this.targetSize;this._reset(),this.setActiveIndex(t),this.refresh()}},{key:"_calculateItemSize",value:function(){var t=this.itemSize.match(/^(\d+)(px|%)/);t||Q.throw("Invalid state: swiper's size unit must be '%' or 'px'");var e=parseInt(t[1],10);return"%"===t[2]?Math.round(e/100*this.targetSize):e}},{key:"_setupInitialIndex",value:function(){this._reset(),this._lastActiveIndex=Math.max(Math.min(Number(this.getInitialIndex()),this.itemCount),0),this._scroll=this._offset+this.itemNumSize*this._lastActiveIndex,this._scrollTo(this._scroll)}},{key:"_setSwiping",value:function(t){this.target.classList.toggle("swiping",t)}},{key:"setActiveIndex",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._setSwiping(!0),t=Math.max(0,Math.min(t,this.itemCount-1));var i=Math.max(0,Math.min(this.maxScroll,this._offset+this.itemNumSize*t));if(C.isUIWebView()){var o=function(t){return Array.prototype.concat.apply([],t)}(Q.arrayFrom(this.target.children).map(function(t){return Q.arrayFrom(t.children).filter(function(t){return t.classList.contains("page__content")})})),r=new Map;return new Promise(function(t){o.forEach(function(t){r.set(t,t.getAttribute("class")),t.classList.add("page__content--suppress-layer-creation")}),requestAnimationFrame(t)}).then(function(){return e._changeTo(i,n)}).then(function(){return new Promise(function(t){o.forEach(function(t){t.setAttribute("class",r.get(t))}),requestAnimationFrame(t)})})}return this._changeTo(i,n)}},{key:"getActiveIndex",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._scroll;t-=this._offset;var e=this.itemCount,n=this.itemNumSize;if(0===this.itemNumSize||!Q.isInteger(t))return this._lastActiveIndex;if(t<=0)return 0;for(var i=0;i<e;i++)if(n*i<=t&&n*(i+1)>t)return i;return e-1}},{key:"setupResize",value:function(t){window[(t?"add":"remove")+"EventListener"]("resize",this.onResize,!0)}},{key:"show",value:function(){var t=this;this.setupResize(!0),this.onResize(),setTimeout(function(){return t.target&&t.target.classList.add("active")},1e3/60)}},{key:"hide",value:function(){this.setupResize(!1),this.target.classList.remove("active")}},{key:"updateSwipeable",value:function(t){if(this._gestureDetector){var e=t?"on":"off";this._gestureDetector[e]("drag",this.onDrag),this._gestureDetector[e]("dragstart",this.onDragStart),this._gestureDetector[e]("dragend",this.onDragEnd)}}},{key:"updateAutoRefresh",value:function(t){this._mutationObserver&&(t?this._mutationObserver.observe(this.target,{childList:!0}):this._mutationObserver.disconnect())}},{key:"updateItemSize",value:function(t){this.itemSize=t||"100%",this.refresh()}},{key:"toggleBlocker",value:function(t){this.blocker.style.pointerEvents=t?"auto":"none"}},{key:"_canConsumeGesture",value:function(t){var e=t.direction,n=0===this._scroll&&!this.isOverScrollable(),i=this._scroll===this.maxScroll&&!this.isOverScrollable();return this.isVertical()?"down"===e&&!n||"up"===e&&!i:"right"===e&&!n||"left"===e&&!i}},{key:"onDragStart",value:function(t){var e=this;if(this._ignoreDrag=t.consumed||!Q.isValidGesture(t),!this._ignoreDrag){var n=t.consume;if(t.consume=function(){n&&n(),e._ignoreDrag=!0},this._canConsumeGesture(t.gesture)){var i=t.gesture.center&&t.gesture.center.clientX||0,o=this.getBubbleWidth()||0,r=function(){n&&n(),t.consumed=!0,e._started=!0,e.shouldBlock&&e.toggleBlocker(!0),e._setSwiping(!0),Q.iosPreventScroll(e._gestureDetector)};i<o||i>this.targetSize-o?setImmediate(function(){return!e._ignoreDrag&&r()}):r()}}}},{key:"onDrag",value:function(t){t.gesture&&!this._ignoreDrag&&this._started&&(this._continued=!0,t.stopPropagation(),this._scrollTo(this._scroll-this._getDelta(t),{throttle:!0}))}},{key:"onDragEnd",value:function(t){if(this._started=!1,t.gesture&&!this._ignoreDrag&&this._continued){this._continued=!1,t.stopPropagation();var e=this._scroll-this._getDelta(t),n=this._normalizeScroll(e);e===n?this._startMomentumScroll(e,t):this._killOverScroll(n),this.shouldBlock&&this.toggleBlocker(!1)}else this._ignoreDrag=!0}},{key:"_startMomentumScroll",value:function(t,e){var n=this._getVelocity(e),i=e.gesture.interimDirection===this.dM.dir[this._getDelta(e)<0?0:1],o=this._getAutoScroll(t,n,i),r=Math.abs(o-t)/(n+.01)/1e3;r=Math.min(.25,Math.max(.1,r)),this._changeTo(o,{swipe:!0,animationOptions:{duration:r,timing:"cubic-bezier(.4, .7, .5, 1)"}})}},{key:"_killOverScroll",value:function(t){var e=this;this._scroll=t;var n=this.dM.dir[Number(t>0)],i=function(){return e._changeTo(t,{animationOptions:{duration:.4,timing:"cubic-bezier(.1, .4, .1, 1)"}})};this.overScrollHook({direction:n,killOverScroll:i})||i()}},{key:"_changeTo",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i={activeIndex:this.getActiveIndex(t),lastActiveIndex:this._lastActiveIndex,swipe:n.swipe||!1},o=i.activeIndex!==i.lastActiveIndex,r=!!o&&this.preChangeHook(i);return this._scroll=r?this._offset+i.lastActiveIndex*this.itemNumSize:t,this._lastActiveIndex=r?i.lastActiveIndex:i.activeIndex,this._scrollTo(this._scroll,n).then(function(){if(t!==e._scroll||r){if(n.reject)return e._setSwiping(!1),Promise.reject("Canceled")}else e._setSwiping(!1),o&&e.postChangeHook(i)})}},{key:"_scrollTo",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(n.throttle){if(t<0)t=this.isOverScrollable()?Math.round(.35*t):0;else{var i=this.maxScroll;i<t&&(t=this.isOverScrollable()?i+Math.round(.35*(t-i)):i)}}var o="none"===n.animation?{}:n.animationOptions;return this.scrollHook&&this.itemNumSize>0&&this.scrollHook((t/this.itemNumSize).toFixed(2),n.animationOptions||{}),new Promise(function(n){return nt(e.target).queue({transform:e._getTransform(t)},o).play(n)})}},{key:"_getAutoScroll",value:function(t,e,n){var i=this.maxScroll,o=this._offset,r=this.itemNumSize;if(!this.isAutoScrollable())return Math.max(0,Math.min(i,t));for(var a=[],s=o;s<i;s+=r)a.push(s);a.push(i);var l=(a=a.sort(function(e,n){return Math.abs(e-t)-Math.abs(n-t)}).filter(function(t,e){return!e||t!==a[e-1]}))[0],u=this._lastActiveIndex*r+o,c=Math.abs(t-u)/r;return c<=this.getAutoScrollRatio(n,e,r)?l=u:c<1&&a[0]===u&&a.length>1&&(l=a[1]),Math.max(0,Math.min(i,l))}},{key:"_reset",value:function(){this._targetSize=this._itemNumSize=void 0}},{key:"_normalizeScroll",value:function(t){return Math.max(Math.min(t,this.maxScroll),0)}},{key:"refresh",value:function(){if(this._reset(),this._updateLayout(),Q.isInteger(this._scroll)){var t=this._normalizeScroll(this._scroll);t!==this._scroll?this._killOverScroll(t):this._changeTo(t)}else this._setupInitialIndex();this.refreshHook()}},{key:"_getDelta",value:function(t){return t.gesture["delta"+this.dM.axis]}},{key:"_getVelocity",value:function(t){return t.gesture["velocity"+this.dM.axis]}},{key:"_getTransform",value:function(t){return"translate3d("+this.dM.t3d[0]+-t+this.dM.t3d[1]+")"}},{key:"_updateLayout",value:function(){this.dM=oo[this.isVertical()?"vertical":"horizontal"],this.target.classList.toggle("ons-swiper-target--vertical",this.isVertical());for(var t=this.target.children[0];t;t=t.nextElementSibling)t.style[this.dM.size.toLowerCase()]=this.itemSize;this.isCentered()&&(this._offset=(this.targetSize-this.itemNumSize)/-2||0)}},{key:"itemCount",get:function(){return this.target.children.length}},{key:"itemNumSize",get:function(){return"number"==typeof this._itemNumSize&&this._itemNumSize==this._itemNumSize||(this._itemNumSize=this._calculateItemSize()),this._itemNumSize}},{key:"maxScroll",get:function(){var t=this.itemCount*this.itemNumSize-this.targetSize;return Math.ceil(t<0?0:t)}},{key:"targetSize",get:function(){return this._targetSize||(this._targetSize=this.target["offset"+this.dM.size]),this._targetSize}}]),t}(),ao=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n(t,function(){return t._compile()}),t}return b(e,Pi),g(e,[{key:"_compile",value:function(){var t=this.children[0]&&"ONS-CAROUSEL-ITEM"!==this.children[0].tagName&&this.children[0]||document.createElement("div");if(!t.parentNode){for(;this.firstChild;)t.appendChild(this.firstChild);this.appendChild(t)}!this.children[1]&&this.appendChild(document.createElement("div")),this.appendChild=this.appendChild.bind(t),this.insertBefore=this.insertBefore.bind(t)}},{key:"connectedCallback",value:function(){var t=this;this._swiper||(this._swiper=new ro({getElement:function(){return t},getInitialIndex:function(){return t.getAttribute("initial-index")},getAutoScrollRatio:function(){return t.autoScrollRatio},isVertical:function(){return t.vertical},isOverScrollable:function(){return t.overscrollable},isCentered:function(){return t.centered},isAutoScrollable:function(){return t.autoScroll},itemSize:this.itemSize,overScrollHook:this._onOverScroll.bind(this),preChangeHook:this._onChange.bind(this,"prechange"),postChangeHook:this._onChange.bind(this,"postchange"),refreshHook:this._onRefresh.bind(this),scrollHook:function(){return t._onSwipe&&t._onSwipe.apply(t,arguments)}}),n(this,function(){return t._swiper.init({swipeable:t.hasAttribute("swipeable"),autoRefresh:t.hasAttribute("auto-refresh")})}))}},{key:"disconnectedCallback",value:function(){this._swiper&&this._swiper.initialized&&(this._swiper.dispose(),this._swiper=null)}},{key:"attributeChangedCallback",value:function(t,e,n){if(this._swiper)switch(t){case"swipeable":this._swiper.updateSwipeable(this.hasAttribute("swipeable"));break;case"auto-refresh":this._swiper.updateAutoRefresh(this.hasAttribute("auto-refresh"));break;case"item-height":this.vertical&&this._swiper.updateItemSize(this.itemSize);break;case"item-width":this.vertical||this._swiper.updateItemSize(this.itemSize);break;case"direction":this._swiper.refresh()}}},{key:"_show",value:function(){this._swiper.show()}},{key:"_hide",value:function(){this._swiper.hide()}},{key:"_onOverScroll",value:function(t){var e=t.direction,n=t.killOverScroll,i=!1;return Q.triggerElementEvent(this,"overscroll",{carousel:this,activeIndex:this.getActiveIndex(),direction:e,waitToReturn:function(t){i=!0,t.then(n)}}),i}},{key:"_onChange",value:function(t,e){var n=e.activeIndex,i=e.lastActiveIndex;Q.triggerElementEvent(this,t,{carousel:this,activeIndex:n,lastActiveIndex:i})}},{key:"_onRefresh",value:function(){Q.triggerElementEvent(this,"refresh",{carousel:this})}},{key:"setActiveIndex",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return n=_({animation:this.getAttribute("animation"),animationOptions:this.hasAttribute("animation-options")?Q.animationOptionsParse(this.getAttribute("animation-options")):{duration:.3,timing:"cubic-bezier(.4, .7, .5, 1)"}},n),this._swiper.setActiveIndex(t,n).then(function(){return n.callback instanceof Function&&n.callback(e),Promise.resolve(e)})}},{key:"getActiveIndex",value:function(){return this._swiper.getActiveIndex()}},{key:"next",value:function(t){return this.setActiveIndex(this.getActiveIndex()+1,t)}},{key:"prev",value:function(t){return this.setActiveIndex(this.getActiveIndex()-1,t)}},{key:"first",value:function(t){return this.setActiveIndex(0,t)}},{key:"last",value:function(t){this.setActiveIndex(Math.max(this.itemCount-1,0),t)}},{key:"refresh",value:function(){this._swiper.refresh()}},{key:"itemCount",get:function(){return this._swiper.itemCount}},{key:"swipeable",get:function(){return this.hasAttribute("swipeable")},set:function(t){return Q.toggleAttribute(this,"swipeable",t)}},{key:"onSwipe",get:function(){return this._onSwipe},set:function(t){!t||t instanceof Function||Q.throw('"onSwipe" must be a function'),this._onSwipe=t}},{key:"autoScroll",get:function(){return this.hasAttribute("auto-scroll")},set:function(t){return Q.toggleAttribute(this,"auto-scroll",t)}},{key:"vertical",get:function(){return"vertical"===this.getAttribute("direction")}},{key:"itemSize",get:function(){var t=(this.getAttribute("item-"+(this.vertical?"height":"width"))||"").trim();return t.match(/^\d+(px|%)$/)?t:"100%"}},{key:"autoScrollRatio",get:function(){return parseFloat(this.getAttribute("auto-scroll-ratio"))},set:function(t){this.setAttribute("auto-scroll-ratio",t)}},{key:"disabled",get:function(){return this.hasAttribute("disabled")},set:function(t){return Q.toggleAttribute(this,"disabled",t)}},{key:"overscrollable",get:function(){return this.hasAttribute("overscrollable")},set:function(t){return Q.toggleAttribute(this,"overscrollable",t)}},{key:"centered",get:function(){return this.hasAttribute("centered")},set:function(t){return Q.toggleAttribute(this,"centered",t)}}],[{key:"observedAttributes",get:function(){return["swipeable","auto-refresh","direction","item-height","item-width"]}},{key:"events",get:function(){return["postchange","refresh","overscroll"]}}]),e}();c.Carousel=ao,customElements.define("ons-carousel",ao);var so=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.getAttribute("width")&&t._updateWidth(),t}return b(e,Pi),g(e,[{key:"attributeChangedCallback",value:function(t,e,n){"width"===t&&this._updateWidth()}},{key:"_updateWidth",value:function(){var t=this.getAttribute("width");t?(t=t.trim().match(/^\d+$/)?t+"%":t,d(this,{flex:"0 0 "+t,maxWidth:t})):d.clear(this,"flex maxWidth")}}],[{key:"observedAttributes",get:function(){return["width"]}}]),e}();c.Col=so,customElements.define("ons-col",so);var lo=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"linear":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.2:a;return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}))}return b(e,Ti),g(e,[{key:"show",value:function(t,e){e()}},{key:"hide",value:function(t,e){e()}}]),e}(),uo=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"ease-in-out":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.3:a;return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}))}return b(e,lo),g(e,[{key:"show",value:function(t,e){e=e||function(){},nt.runAll(nt(t._mask,this.def).default({opacity:0},{opacity:1}),nt(t._dialog,this.def).default({transform:"translate3d(-50%, -60%, 0)",opacity:0},{transform:"translate3d(-50%, -50%, 0)",opacity:1}).queue(function(t){e(),t()}))}},{key:"hide",value:function(t,e){e=e||function(){},nt.runAll(nt(t._mask,this.def).default({opacity:1},{opacity:0}),nt(t._dialog,this.def).default({transform:"translate3d(-50%, -50%, 0)",opacity:1},{transform:"translate3d(-50%, -60%, 0)",opacity:0}).queue(function(t){e(),t()}))}}]),e}(),co=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"ease-in-out":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.2:a;p(this,e);var l=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}));return l.bodyHeight=document.body.clientHeight,l}return b(e,lo),g(e,[{key:"show",value:function(t,e){e=e||function(){},nt.runAll(nt(t._mask,this.def).default({opacity:0},{opacity:1}),nt(t._dialog,this.def).default({transform:"translate3d(-50%, "+(this.bodyHeight/2-1)+"px, 0)"},{transform:"translate3d(-50%, -50%, 0)"}).queue(function(t){e(),t()}))}},{key:"hide",value:function(t,e){e=e||function(){},nt.runAll(nt(t._mask,this.def).default({opacity:1},{opacity:0}),nt(t._dialog,this.def).default({transform:"translate3d(-50%, -50%, 0)"},{transform:"translate3d(-50%, "+(this.bodyHeight/2-1)+"px, 0)"}).queue(function(t){e(),t()}))}}]),e}(),ho={".dialog":"dialog--*",".dialog-container":"dialog-container--*",".dialog-mask":"dialog-mask--*"},fo={default:function(){return C.isAndroid()?uo:co},slide:function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"cubic-bezier(.1, .7, .4, 1)":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.2:a;p(this,e);var l=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}));return l.bodyHeight=document.body.clientHeight,l}return b(e,lo),g(e,[{key:"show",value:function(t,e){e=e||function(){},nt.runAll(nt(t._mask,this.def).default({opacity:0},{opacity:1}),nt(t._dialog,this.def).default({transform:"translate3d(-50%, "+(-this.bodyHeight/2+1-t._dialog.clientHeight)+"px, 0)"},{transform:"translate3d(-50%, -50%, 0)"}).queue(function(t){e(),t()}))}},{key:"hide",value:function(t,e){e=e||function(){},nt.runAll(nt(t._mask,this.def).default({opacity:1},{opacity:0}),nt(t._dialog,this.def).default({transform:"translate3d(-50%, -50%, 0)"},{transform:"translate3d(-50%, "+(-this.bodyHeight/2+1-t._dialog.clientHeight)+"px, 0)"}).queue(function(t){e(),t()}))}}]),e}(),none:lo},po=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n(t,function(){return t._compile()}),t}return b(e,Ni),g(e,[{key:"_updateAnimatorFactory",value:function(){return new O({animators:fo,baseClass:lo,baseClassName:"DialogAnimator",defaultAnimation:this.getAttribute("animation")})}},{key:"_compile",value:function(){if(N.prepare(this),this.style.display="none",this.style.zIndex=10001,!this._dialog){var t=document.createElement("div");t.classList.add("dialog");var e=document.createElement("div");for(e.classList.add("dialog-container");this.firstChild;)e.appendChild(this.firstChild);t.appendChild(e),this.appendChild(t)}if(!this._mask){var n=document.createElement("div");n.classList.add("dialog-mask"),this.insertBefore(n,this.firstChild)}this._dialog.style.zIndex=20001,this._mask.style.zIndex=2e4,this.setAttribute("status-bar-fill",""),B.initModifier(this,this._scheme)}},{key:"_scheme",get:function(){return ho}},{key:"_mask",get:function(){return Q.findChild(this,".dialog-mask")}},{key:"_dialog",get:function(){return Q.findChild(this,".dialog")}}],[{key:"registerAnimator",value:function(t,e){e.prototype instanceof lo||Q.throwAnimator("Dialog"),fo[t]=e}},{key:"animators",get:function(){return fo}},{key:"DialogAnimator",get:function(){return lo}}]),e}();c.Dialog=po,customElements.define("ons-dialog",po);var go="fab",mo={"":"fab--*",".fab__icon":"fab--*__icon"},_o=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._hide(),t.classList.add(go),n(t,function(){t._compile()}),t}return b(e,Pi),g(e,[{key:"_compile",value:function(){if(N.prepare(this),!Q.findChild(this,".fab__icon")){var t=document.createElement("span");t.classList.add("fab__icon"),Q.arrayFrom(this.childNodes).forEach(function(e){e.tagName&&"ons-ripple"===e.tagName.toLowerCase()||t.appendChild(e)}),this.appendChild(t)}this._updateRipple(),B.initModifier(this,mo),this._updatePosition()}},{key:"connectedCallback",value:function(){var t=this;setImmediate(function(){return t._show()})}},{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"class":Q.restoreClass(this,go,mo);break;case"modifier":B.onModifierChanged(e,n,this,mo);break;case"ripple":this._updateRipple();break;case"position":this._updatePosition()}}},{key:"_show",value:function(){this._manuallyHidden||this._toggle(!0)}},{key:"_hide",value:function(){var t=this;setImmediate(function(){return t._toggle(!1)})}},{key:"_updateRipple",value:function(){Q.updateRipple(this)}},{key:"_updatePosition",value:function(){var t=this.getAttribute("position");switch(this.classList.remove("fab--top__left","fab--bottom__right","fab--bottom__left","fab--top__right","fab--top__center","fab--bottom__center"),t){case"top right":case"right top":this.classList.add("fab--top__right");break;case"top left":case"left top":this.classList.add("fab--top__left");break;case"bottom right":case"right bottom":this.classList.add("fab--bottom__right");break;case"bottom left":case"left bottom":this.classList.add("fab--bottom__left");break;case"center top":case"top center":this.classList.add("fab--top__center");break;case"center bottom":case"bottom center":this.classList.add("fab--bottom__center")}}},{key:"show",value:function(){this.toggle(!0)}},{key:"hide",value:function(){this.toggle(!1)}},{key:"toggle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.visible;this._manuallyHidden=!t,this._toggle(t)}},{key:"_toggle",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!this.visible,e=(this.getAttribute("position")||"").indexOf("bottom")>=0?"translate3d(0px, -"+(Q.globals.fabOffset||0)+"px, 0px)":"";d(this,{transform:e+" scale("+Number(t)+")"})}},{key:"disabled",set:function(t){return Q.toggleAttribute(this,"disabled",t)},get:function(){return this.hasAttribute("disabled")}},{key:"visible",get:function(){return-1===this.style.transform.indexOf("scale(0)")&&"none"!==this.style.display}}],[{key:"observedAttributes",get:function(){return["modifier","ripple","position","class"]}}]),e}();c.Fab=_o,customElements.define("ons-fab",_o);var vo=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._gestureDetector=new st(t,{passive:!0}),t}return b(e,Pi),e}();c.GestureDetector=vo,customElements.define("ons-gesture-detector",vo);var bo="fa",yo=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n(t,function(){t._compile()}),t}return b(e,Pi),g(e,[{key:"attributeChangedCallback",value:function(t,e,n){this._cleanClassAttribute("icon"===t?e:this.getAttribute("icon"),"modifier"===t?e:void 0),this._update()}},{key:"_compile",value:function(){N.prepare(this),this._update()}},{key:"_update",value:function(){var t=this,e=this._buildClassAndStyle(this._parseAttr("icon"),this._parseAttr("size")),n=e.classList,i=e.style;Q.extend(this.style,i),n.forEach(function(e){return t.classList.add(e)})}},{key:"_parseAttr",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.getAttribute("modifier")||"",n=(this.getAttribute(t)||t||"").split(/\s*,\s*/),i=n[0],o=n[1];return o=(o||"").split(/\s*:\s*/),(e&&RegExp("(^|\\s+)"+o[0]+"($|\\s+)","i").test(e)?o[1]:i)||""}},{key:"_cleanClassAttribute",value:function(t,e){var n=this,i=this._prefixIcon(this._parseAttr(t,e)),o=i.className,r=i.prefix,a=o!==r?"|"+r+"$|"+r+"-":"|"+o+"$"||"",s=new RegExp("^(fa$|fa-|ion-|zmdi$|zmdi-|ons-icon--"+a+")");Q.arrayFrom(this.classList).filter(function(t){return s.test(t)}).forEach(function(t){return n.classList.remove(t)})}},{key:"_prefixIcon",value:function(t){var e=bo+(bo?"-":"")+t;return{className:e,prefix:e.split("-")[0]}}},{key:"_buildClassAndStyle",value:function(t,e){var n=["ons-icon"],i={};if(0===t.indexOf("ion-"))n.push(t),n.push("ons-icon--ion");else if(0===t.indexOf("fa-"))n.push(t),this.classList.contains("far")||this.classList.contains("fab")||this.classList.contains("fal")||n.push("fa");else if(0===t.indexOf("md-"))n.push("zmdi"),n.push("zmdi-"+t.split(/-(.+)?/)[1]);else{var o=this._prefixIcon(t),r=o.className,a=o.prefix;a&&n.push(a),r&&n.push(r)}return e.match(/^[1-5]x|lg$/)?(n.push("ons-icon--"+e),this.style.removeProperty("font-size")):i.fontSize=e,{classList:n,style:i}}}],[{key:"setAutoPrefix",value:function(t){bo=t?"string"==typeof t&&t||"fa":""}},{key:"observedAttributes",get:function(){return["icon","size","modifier","class"]}}]),e}();c.Icon=yo,customElements.define("ons-icon",yo);var ko=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;p(this,t),"object"===(void 0===e?"undefined":f(e))&&null!==e||Q.throw('"delegate" parameter must be an object'),this._userDelegate=e,n instanceof Element||null===n||Q.throw('"templateElement" parameter must be an instance of Element or null'),this._templateElement=n}return g(t,[{key:"hasRenderFunction",value:function(){return this._userDelegate._render instanceof Function}},{key:"_render",value:function(){this._userDelegate._render.apply(this._userDelegate,arguments)}},{key:"loadItemElement",value:function(t,e){if(this._userDelegate.loadItemElement instanceof Function)this._userDelegate.loadItemElement(t,e);else{var n=this._userDelegate.createItemContent(t,this._templateElement);n instanceof Element||Q.throw('"createItemContent" must return an instance of Element'),e({element:n})}}},{key:"countItems",value:function(){var t=this._userDelegate.countItems();return"number"!=typeof t&&Q.throw('"countItems" must return a number'),t}},{key:"updateItem",value:function(t,e){this._userDelegate.updateItemContent instanceof Function&&this._userDelegate.updateItemContent(t,e)}},{key:"calculateItemHeight",value:function(t){if(this._userDelegate.calculateItemHeight instanceof Function){var e=this._userDelegate.calculateItemHeight(t);return"number"!=typeof e&&Q.throw('"calculateItemHeight" must return a number'),e}return 0}},{key:"destroyItem",value:function(t,e){this._userDelegate.destroyItem instanceof Function&&this._userDelegate.destroyItem(t,e)}},{key:"destroy",value:function(){this._userDelegate.destroy instanceof Function&&this._userDelegate.destroy(),this._userDelegate=this._templateElement=null}},{key:"itemHeight",get:function(){return this._userDelegate.itemHeight}}]),t}(),wo=function(){function t(e,n){p(this,t),n instanceof ko||Q.throw('"delegate" parameter must be an instance of LazyRepeatDelegate'),this._wrapperElement=e,this._delegate=n,this._insertIndex=this._wrapperElement.children[0]&&"ONS-LAZY-REPEAT"===this._wrapperElement.children[0].tagName?1:0,"ons-list"===e.tagName.toLowerCase()&&e.classList.add("lazy-list"),this._pageContent=this._findPageContentElement(e),this._pageContent||Q.throw("LazyRepeat must be descendant of a Page element"),this.lastScrollTop=this._pageContent.scrollTop,this.padding=0,this._topPositions=[0],this._renderedItems={},this._delegate.itemHeight||this._delegate.calculateItemHeight(0)||(this._unknownItemHeight=!0),this._addEventListeners(),this._onChange()}return g(t,[{key:"_findPageContentElement",value:function(t){var e=Q.findParent(t,".page__content");if(e)return e;var n=Q.findParent(t,"ons-page");if(n){var i=Q.findChild(n,".content");if(i)return i}return null}},{key:"_checkItemHeight",value:function(t){var e=this;this._delegate.loadItemElement(0,function(n){e._unknownItemHeight||Q.throw("Invalid state"),e._wrapperElement.appendChild(n.element);var i=function(){e._delegate.destroyItem(0,n),n.element&&n.element.remove(),delete e._unknownItemHeight,t()};e._itemHeight=n.element.offsetHeight,e._itemHeight>0?i():(e._wrapperElement.style.visibility="hidden",n.element.style.visibility="hidden",setImmediate(function(){e._itemHeight=n.element.offsetHeight,0==e._itemHeight&&Q.throw('Invalid state: "itemHeight" must be greater than zero'),e._wrapperElement.style.visibility="",i()}))})}},{key:"_countItems",value:function(){return this._delegate.countItems()}},{key:"_getItemHeight",value:function(t){return this._renderedItems.hasOwnProperty(t)?(this._renderedItems[t].hasOwnProperty("height")||(this._renderedItems[t].height=this._renderedItems[t].element.offsetHeight),this._renderedItems[t].height):this._topPositions[t+1]&&this._topPositions[t]?this._topPositions[t+1]-this._topPositions[t]:this.staticItemHeight||this._delegate.calculateItemHeight(t)}},{key:"_calculateRenderedHeight",value:function(){var t=this;return Object.keys(this._renderedItems).reduce(function(e,n){return e+t._getItemHeight(+n)},0)}},{key:"_onChange",value:function(){this._render()}},{key:"_lastItemRendered",value:function(){return Math.max.apply(Math,w(Object.keys(this._renderedItems)))}},{key:"_firstItemRendered",value:function(){return Math.min.apply(Math,w(Object.keys(this._renderedItems)))}},{key:"refresh",value:function(){var t={forceScrollDown:!0},e=this._firstItemRendered();Q.isInteger(e)&&(this._wrapperElement.style.height=this._topPositions[e]+this._calculateRenderedHeight()+"px",this.padding=this._topPositions[e],t.forceFirstIndex=e),this._removeAllElements(),this._render(t),this._wrapperElement.style.height="inherit"}},{key:"_render",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.forceScrollDown,i=void 0!==n&&n,o=e.forceFirstIndex,r=e.forceLastIndex;if(this._unknownItemHeight)return this._checkItemHeight(this._render.bind(this,arguments[0]));var a=!i&&this.lastScrollTop>this._pageContent.scrollTop;this.lastScrollTop=this._pageContent.scrollTop;for(var s={},l=this._wrapperElement.getBoundingClientRect().top,u=4*window.innerHeight-l,c=this._countItems(),h=o||Math.max(0,this._calculateStartIndex(l)-30),d=h,f=this._topPositions[d];d<c&&f<u;d++)d>=this._topPositions.length&&(this._topPositions.length+=100),this._topPositions[d]=f,f+=this._getItemHeight(d);if(this._delegate.hasRenderFunction&&this._delegate.hasRenderFunction())return this._delegate._render(h,d,function(){t.padding=t._topPositions[h]});if(a)for(var p=d-1;p>=h;p--)s[p]=!0,this._renderElement(p,a);else for(var g=r||Math.max.apply(Math,[d-1].concat(w(Object.keys(this._renderedItems)))),m=h;m<=g;m++)s[m]=!0,this._renderElement(m,a);Object.keys(this._renderedItems).forEach(function(e){return s[e]||t._removeElement(e,a)})}},{key:"_renderElement",value:function(t,e){var n=this,i=this._renderedItems[t];i?this._delegate.updateItem(t,i):this._delegate.loadItemElement(t,function(i){e?(n._wrapperElement.insertBefore(i.element,n._wrapperElement.children[n._insertIndex]),n.padding=n._topPositions[t],i.height=n._topPositions[t+1]-n._topPositions[t]):n._wrapperElement.appendChild(i.element),n._renderedItems[t]=i})}},{key:"_removeElement",value:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t=+t;var n=this._renderedItems[t];this._delegate.destroyItem(t,n),e?this._topPositions[t+1]=void 0:this.padding=this.padding+this._getItemHeight(t),n.element.parentElement&&n.element.parentElement.removeChild(n.element),delete this._renderedItems[t]}},{key:"_removeAllElements",value:function(){var t=this;Object.keys(this._renderedItems).forEach(function(e){return t._removeElement(e)})}},{key:"_recalculateTopPositions",value:function(t,e){for(var n=t;n<=e;n++)this._topPositions[n+1]=this._topPositions[n]+this._getItemHeight(n)}},{key:"_calculateStartIndex",value:function(t){var e=this._firstItemRendered(),n=this._lastItemRendered();this._recalculateTopPositions(e,n);for(var i=0,o=this._countItems()-1;;){var r=Math.floor((i+o)/2),a=t+this._topPositions[r];if(o<i)return 0;if(a<=0&&a+this._getItemHeight(r)>0)return r;isNaN(a)||a>=0?o=r-1:i=r+1}}},{key:"_debounce",value:function(t,e,n){var i=void 0;return function(){var o=this,r=arguments,a=n&&!i;clearTimeout(i),a?t.apply(this,arguments):i=setTimeout(function(){i=null,t.apply(o,r)},e)}}},{key:"_doubleFireOnTouchend",value:function(){this._render(),this._debounce(this._render.bind(this),100)}},{key:"_addEventListeners",value:function(){Q.bindListeners(this,["_onChange","_doubleFireOnTouchend"]),C.isIOS()&&(this._boundOnChange=this._debounce(this._boundOnChange,30)),this._pageContent.addEventListener("scroll",this._boundOnChange,!0),C.isIOS()&&(Q.addEventListener(this._pageContent,"touchmove",this._boundOnChange,{capture:!0,passive:!0}),this._pageContent.addEventListener("touchend",this._boundDoubleFireOnTouchend,!0)),window.document.addEventListener("resize",this._boundOnChange,!0)}},{key:"_removeEventListeners",value:function(){this._pageContent.removeEventListener("scroll",this._boundOnChange,!0),C.isIOS()&&(Q.removeEventListener(this._pageContent,"touchmove",this._boundOnChange,{capture:!0,passive:!0}),this._pageContent.removeEventListener("touchend",this._boundDoubleFireOnTouchend,!0)),window.document.removeEventListener("resize",this._boundOnChange,!0)}},{key:"destroy",value:function(){this._removeAllElements(),this._delegate.destroy(),this._parentElement=this._delegate=this._renderedItems=null,this._removeEventListeners()}},{key:"padding",get:function(){return parseInt(this._wrapperElement.style.paddingTop,10)},set:function(t){this._wrapperElement.style.paddingTop=t+"px"}},{key:"staticItemHeight",get:function(){return this._delegate.itemHeight||this._itemHeight}}]),t}(),Eo=function(t){function e(){return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,Pi),g(e,[{key:"connectedCallback",value:function(){this.hasAttribute("delegate")&&(this.delegate=window[this.getAttribute("delegate")])}},{key:"refresh",value:function(){this._lazyRepeatProvider&&this._lazyRepeatProvider.refresh()}},{key:"attributeChangedCallback",value:function(t,e,n){}},{key:"disconnectedCallback",value:function(){this._lazyRepeatProvider&&(this._lazyRepeatProvider.destroy(),this._lazyRepeatProvider=null)}},{key:"delegate",set:function(t){this._lazyRepeatProvider&&this._lazyRepeatProvider.destroy(),!this._templateElement&&this.children[0]&&(this._templateElement=this.removeChild(this.children[0]));var e=new ko(t,this._templateElement||null);this._lazyRepeatProvider=new wo(this.parentElement,e)},get:function(){Q.throw("No delegate getter")}}]),e}();P.LazyRepeatDelegate=ko,P.LazyRepeatProvider=wo,c.LazyRepeat=Eo,customElements.define("ons-lazy-repeat",Eo);var Co={"":"list-header--*"},Ao=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._compile(),t}return b(e,Pi),g(e,[{key:"_compile",value:function(){N.prepare(this),this.classList.add("list-header"),B.initModifier(this,Co)}},{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"class":Q.restoreClass(this,"list-header",Co);break;case"modifier":B.onModifierChanged(e,n,this,Co)}}}],[{key:"observedAttributes",get:function(){return["modifier","class"]}}]),e}();c.ListHeader=Ao,customElements.define("ons-list-header",Ao);var So={"":"list-title--*"},Po=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._compile(),t}return b(e,Pi),g(e,[{key:"_compile",value:function(){N.prepare(this),this.classList.add("list-title"),B.initModifier(this,So)}},{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"class":Q.restoreClass(this,"list-title",So);break;case"modifier":B.onModifierChanged(e,n,this,So)}}}],[{key:"observedAttributes",get:function(){return["modifier","class"]}}]),e}();c.ListTitle=Po,customElements.define("ons-list-title",Po);var Oo=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"linear":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.2:a;return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}))}return b(e,Ti),g(e,[{key:"showExpansion",value:function(t,e){e()}},{key:"hideExpansion",value:function(t,e){e()}}]),e}(),xo={".list-item":"list-item--*",".list-item__left":"list-item--*__left",".list-item__center":"list-item--*__center",".list-item__right":"list-item--*__right",".list-item__label":"list-item--*__label",".list-item__title":"list-item--*__title",".list-item__subtitle":"list-item--*__subtitle",".list-item__thumbnail":"list-item--*__thumbnail",".list-item__icon":"list-item--*__icon"},To={default:function(t){function e(){return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,Oo),g(e,[{key:"showExpansion",value:function(t,e){this._animateExpansion(t,!0,e)}},{key:"hideExpansion",value:function(t,e){this._animateExpansion(t,!1,e)}},{key:"_animateExpansion",value:function(t,e,n){var i,o=t.expandableContent.style.height,r=t.expandableContent.style.display;t.expandableContent.style.height="auto",t.expandableContent.style.display="block";var a=window.getComputedStyle(t.expandableContent),s=[{height:0,paddingTop:0,paddingBottom:0},{height:a.height,paddingTop:a.paddingTop,paddingBottom:a.paddingBottom}],l=[{transform:"rotate(45deg)"},{transform:"rotate(225deg)"}];if(t.expandableContent.style.height=o,(i=nt(t.expandableContent,{duration:this.duration,property:"height padding-top padding-bottom"})).default.apply(i,w(e?s:s.reverse())).play(function(){t.expandableContent.style.display=r,n&&n()}),t.expandChevron){var u;(u=nt(t.expandChevron,{duration:this.duration,property:"transform"})).default.apply(u,w(e?l:l.reverse())).play()}}}]),e}(),none:Oo},Lo=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));t._animatorFactory=t._updateAnimatorFactory(),t.toggleExpansion=t.toggleExpansion.bind(t);var i=/^ons-(?!col$|row$|if$)/i;return t._shouldIgnoreTap=function(t){return t.hasAttribute("prevent-tap")||i.test(t.tagName)},t.show=t.showExpansion,t.hide=t.hideExpansion,n(t,function(){t._compile()}),t}return b(e,Pi),g(e,[{key:"_compile",value:function(){N.prepare(this),this.classList.add("list-item");var t=void 0,e=void 0,n=[];Array.from(this.childNodes).forEach(function(i){i.nodeType!==Node.ELEMENT_NODE?n.push(i):i.classList.contains("top")?t=i:i.classList.contains("expandable-content")?e=i:n.push(i),"ONS-RIPPLE"!==i.nodeName&&i.remove()});var i=void 0,o=void 0,r=void 0,a=[];if((n=t?Array.from(t.childNodes):n).forEach(function(t){t.nodeType!==Node.ELEMENT_NODE?a.push(t):t.classList.contains("left")?i=t:t.classList.contains("right")?o=t:t.classList.contains("center")?r=t:a.push(t)}),this.hasAttribute("expandable")){if(this.classList.add("list-item--expandable"),t||(t=document.createElement("div")).classList.add("top"),t.classList.add("list-item__top"),this.appendChild(t),this._top=t,e&&(e.classList.add("list-item__expandable-content"),this.appendChild(e)),!o){(o=document.createElement("div")).classList.add("list-item__right","right");var s=document.createElement("span");s.classList.add("list-item__expand-chevron"),o.appendChild(s)}}else t=this;r||((r=document.createElement("div")).classList.add("center"),a.forEach(function(t){return r.appendChild(t)})),r.classList.add("list-item__center"),t.appendChild(r),i&&(i.classList.add("list-item__left"),t.appendChild(i)),o&&(o.classList.add("list-item__right"),t.appendChild(o)),Q.updateRipple(this),B.initModifier(this,xo)}},{key:"showExpansion",value:function(){var t=this;if(this.hasAttribute("expandable")&&!this._expanding){this.expanded=!0,this._expanding=!0;this._animatorFactory.newAnimator().showExpansion(this,function(){t.classList.add("expanded"),t._expanding=!1})}}},{key:"hideExpansion",value:function(){var t=this;if(this.hasAttribute("expandable")&&!this._expanding){this.expanded=!1,this._expanding=!0;this._animatorFactory.newAnimator().hideExpansion(this,function(){t.classList.remove("expanded"),t._expanding=!1})}}},{key:"toggleExpansion",value:function(){this.classList.contains("expanded")?this.hideExpansion():this.showExpansion(),this.dispatchEvent(new Event("expansion"))}},{key:"_updateAnimatorFactory",value:function(){return new O({animators:To,baseClass:Oo,baseClassName:"ListItemAnimator",defaultAnimation:this.getAttribute("animation")||"default"})}},{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"class":Q.restoreClass(this,"list-item",xo);break;case"modifier":B.onModifierChanged(e,n,this,xo);break;case"ripple":Q.updateRipple(this);break;case"animation":this._animatorFactory=this._updateAnimatorFactory()}}},{key:"connectedCallback",value:function(){var t=this;n(this,function(){t._setupListeners(!0),t._originalBackgroundColor=t.style.backgroundColor,t.tapped=!1})}},{key:"disconnectedCallback",value:function(){this._setupListeners(!1)}},{key:"_setupListeners",value:function(t){var e=(t?"add":"remove")+"EventListener";Q[e](this,"touchstart",this._onTouch,{passive:!0}),Q[e](this,"touchmove",this._onRelease,{passive:!0}),this[e]("touchcancel",this._onRelease),this[e]("touchend",this._onRelease),this[e]("touchleave",this._onRelease),this[e]("drag",this._onDrag),this[e]("mousedown",this._onTouch),this[e]("mouseup",this._onRelease),this[e]("mouseout",this._onRelease),this._top&&this._top[e]("click",this.toggleExpansion)}},{key:"_onDrag",value:function(t){var e=t.gesture;this.hasAttribute("lock-on-drag")&&["left","right"].indexOf(e.direction)>-1&&e.preventDefault()}},{key:"_onTouch",value:function(t){var e=this;if(!(this.tapped||this!==t.target&&(this._shouldIgnoreTap(t.target)||Q.findParent(t.target,this._shouldIgnoreTap,function(t){return t===e})))){this.tapped=!0;var n={transition:"background-color 0.0s linear 0.02s, box-shadow 0.0s linear 0.02s"};this.hasAttribute("tappable")&&(this.style.backgroundColor&&(this._originalBackgroundColor=this.style.backgroundColor),n.backgroundColor=this.getAttribute("tap-background-color")||"#d9d9d9",n.boxShadow="0px -1px 0px 0px "+n.backgroundColor),d(this,n)}}},{key:"_onRelease",value:function(){this.tapped=!1,this.style.backgroundColor=this._originalBackgroundColor||"",d.clear(this,"transition boxShadow")}},{key:"expandableContent",get:function(){return this.querySelector(".list-item__expandable-content")}},{key:"expandChevron",get:function(){return this.querySelector(".list-item__expand-chevron")}}],[{key:"observedAttributes",get:function(){return["modifier","class","ripple","animation"]}}]),e}();c.ListItem=Lo,customElements.define("ons-list-item",Lo);var Mo={"":"list--*"},Do=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._compile(),t}return b(e,Pi),g(e,[{key:"_compile",value:function(){N.prepare(this),this.classList.add("list"),B.initModifier(this,Mo)}},{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"class":Q.restoreClass(this,"list",Mo);break;case"modifier":B.onModifierChanged(e,n,this,Mo)}}}],[{key:"observedAttributes",get:function(){return["modifier","class"]}}]),e}();c.List=Do,customElements.define("ons-list",Do);var Io=["autocapitalize","autocomplete","autocorrect","autofocus","disabled","inputmode","max","maxlength","min","minlength","name","pattern","placeholder","readonly","required","size","step","validator","value"],No=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.constructor===e&&Q.throwAbstract(),n(t,function(){return t._compile()}),t._boundDelegateEvent=t._delegateEvent.bind(t),t}return b(e,Pi),g(e,[{key:"_update",value:function(){}},{key:"_scheme",get:function(){Q.throwMember()}},{key:"_template",get:function(){Q.throwMember()}},{key:"type",get:function(){Q.throwMember()}}]),g(e,[{key:"_compile",value:function(){N.prepare(this),this._defaultClassName&&this.classList.add(this._defaultClassName),0===this.children.length&&(this.appendChild(Q.createFragment(this._template)),this._setInputId(),this._updateBoundAttributes(),B.initModifier(this,this._scheme))}},{key:"_updateBoundAttributes",value:function(){var t=this;Io.forEach(function(e){t.hasAttribute(e)?t._input.setAttribute(e,t.getAttribute(e)):t._input.removeAttribute(e)}),this._update()}},{key:"_delegateEvent",value:function(t){var e=new CustomEvent(t.type,{bubbles:!1,cancelable:!0});return this.dispatchEvent(e)}},{key:"_setInputId",value:function(){this.hasAttribute("input-id")&&(this._input.id=this.getAttribute("input-id"))}},{key:"connectedCallback",value:function(){var t=this;n(this,function(){t._input.addEventListener("focus",t._boundDelegateEvent),t._input.addEventListener("blur",t._boundDelegateEvent)})}},{key:"disconnectedCallback",value:function(){var t=this;n(this,function(){t._input.removeEventListener("focus",t._boundDelegateEvent),t._input.removeEventListener("blur",t._boundDelegateEvent)})}},{key:"attributeChangedCallback",value:function(t,e,i){var o=this;switch(t){case"modifier":n(this,function(){return B.onModifierChanged(e,i,o,o._scheme)});break;case"input-id":n(this,function(){return o._setInputId()});break;case"class":Q.restoreClass(this,this._defaultClassName,this._scheme)}Io.indexOf(t)>=0&&n(this,function(){return o._updateBoundAttributes()})}},{key:"_defaultClassName",get:function(){return""}},{key:"_input",get:function(){return this.querySelector("input")}},{key:"value",get:function(){return null===this._input?this.getAttribute("value"):this._input.value},set:function(t){var e=this;n(this,function(){t instanceof Date&&(t=t.toISOString().substring(0,10)),e._input.value=t,e._update()})}},{key:"disabled",set:function(t){return Q.toggleAttribute(this,"disabled",t)},get:function(){return this.hasAttribute("disabled")}}],[{key:"observedAttributes",get:function(){return["modifier","input-id","class"].concat(Io)}}]),e}(),Bo={".text-input":"text-input--*",".text-input__label":"text-input--*__label"},jo=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._boundOnInput=t._update.bind(t),t._boundOnFocusin=t._update.bind(t),t}return b(e,No),g(e,[{key:"_update",value:function(){this._updateLabel(),this._updateLabelClass()}},{key:"_updateLabel",value:function(){var t=this.getAttribute("placeholder")||"";void 0!==this._helper.textContent?this._helper.textContent=t:this._helper.innerText=t}},{key:"_updateLabelClass",value:function(){""===this.value?this._helper.classList.remove("text-input--material__label--active"):this._helper.classList.add("text-input--material__label--active")}},{key:"connectedCallback",value:function(){var t=this;v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this),n(this,function(){t._input.addEventListener("input",t._boundOnInput),t._input.addEventListener("focusin",t._boundOnFocusin)});var i=this.getAttribute("type");["checkbox","radio"].indexOf(i)>=0&&Q.warn('Warn: <ons-input type="'+i+'"> is deprecated since v2.4.0. Use <ons-'+i+"> instead.")}},{key:"disconnectedCallback",value:function(){var t=this;v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"disconnectedCallback",this).call(this),n(this,function(){t._input.removeEventListener("input",t._boundOnInput),t._input.removeEventListener("focusin",t._boundOnFocusin)})}},{key:"attributeChangedCallback",value:function(t,i,o){var r=this;switch(t){case"type":n(this,function(){return r._input.setAttribute("type",r.type)});break;default:v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"attributeChangedCallback",this).call(this,t,i,o)}}},{key:"_scheme",get:function(){return Bo}},{key:"_template",get:function(){return'\n      <input type="'+this.type+'" class="text-input">\n      <span class="text-input__label"></span>\n    '}},{key:"type",get:function(){var t=this.getAttribute("type");return["checkbox","radio"].indexOf(t)<0&&t||"text"}},{key:"_helper",get:function(){return this.querySelector("span")}}],[{key:"observedAttributes",get:function(){return[].concat(w(v(e.__proto__||Object.getPrototypeOf(e),"observedAttributes",this)),["type"])}}]),e}();c.Input=jo,customElements.define("ons-input",jo);var Ho=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t.constructor===e&&util.throwAbstract(),n(t,function(){t.attributeChangedCallback("checked",null,t.getAttribute("checked"))}),t}return b(e,No),g(e,[{key:"attributeChangedCallback",value:function(t,n,i){switch(t){case"checked":this.checked=null!==i;break;default:v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"attributeChangedCallback",this).call(this,t,n,i)}}},{key:"_template",get:function(){return'\n      <input type="'+this.type+'" class="'+this._defaultClassName+'__input">\n      <span class="'+this._defaultClassName+'__checkmark"></span>\n    '}},{key:"_helper",get:function(){return this.querySelector("span")}},{key:"checked",get:function(){return this._input.checked},set:function(t){var e=this;n(this,function(){e._input.checked=t})}}],[{key:"observedAttributes",get:function(){return[].concat(w(v(e.__proto__||Object.getPrototypeOf(e),"observedAttributes",this)),["checked"])}}]),e}(),Ro={".checkbox":"checkbox--*",".checkbox__input":"checkbox--*__input",".checkbox__checkmark":"checkbox--*__checkmark"},Fo=function(t){function e(){return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,Ho),g(e,[{key:"_scheme",get:function(){return Ro}},{key:"_defaultClassName",get:function(){return"checkbox"}},{key:"type",get:function(){return"checkbox"}}]),e}();c.Checkbox=Fo,customElements.define("ons-checkbox",Fo);var qo={".radio-button":"radio-button--*",".radio-button__input":"radio-button--*__input",".radio-button__checkmark":"radio-button--*__checkmark"},zo=function(t){function e(){return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,Ho),g(e,[{key:"_scheme",get:function(){return qo}},{key:"_defaultClassName",get:function(){return"radio-button"}},{key:"type",get:function(){return"radio"}}]),e}();c.Radio=zo,customElements.define("ons-radio",zo);var Vo={".search-input":"search-input--*"},Wo=function(t){function e(){return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,No),g(e,[{key:"_scheme",get:function(){return Vo}},{key:"_template",get:function(){return'\n      <input type="'+this.type+'" class="search-input">\n    '}},{key:"type",get:function(){return"search"}}]),e}();c.SearchInput=Wo,customElements.define("ons-search-input",Wo);var Uo=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"linear":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.2:a;return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}))}return b(e,Ti),g(e,[{key:"show",value:function(t,e){e()}},{key:"hide",value:function(t,e){e()}}]),e}(),Xo=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"linear":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.3:a;return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}))}return b(e,Uo),g(e,[{key:"show",value:function(t,e){e=e||function(){},nt(t,this.def).default({opacity:0},{opacity:1}).queue(function(t){e(),t()}).play()}},{key:"hide",value:function(t,e){e=e||function(){},nt(t,this.def).default({opacity:1},{opacity:0}).queue(function(t){e(),t()}).play()}}]),e}(),Yo=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"cubic-bezier( .1, .7, .1, 1)":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.4:a;return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}))}return b(e,Uo),g(e,[{key:"show",value:function(t,e){e=e||function(){},nt(t,this.def).default({transform:"translate3d(0, 100%, 0)"},{transform:"translate3d(0, 0, 0)"}).queue(function(t){e(),t()}).play()}},{key:"hide",value:function(t,e){e=e||function(){},nt(t,this.def).default({transform:"translate3d(0, 0, 0)"},{transform:"translate3d(0, 100%, 0)"}).queue(function(t){e(),t()}).play()}}]),e}(),Go={"":"modal--*",modal__content:"modal--*__content"},$o={default:Uo,fade:Xo,lift:Yo,none:Uo},Ko=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._defaultDBB=function(){},n(t,function(){return t._compile()}),t}return b(e,Ni),g(e,[{key:"_updateAnimatorFactory",value:function(){return new O({animators:$o,baseClass:Uo,baseClassName:"ModalAnimator",defaultAnimation:this.getAttribute("animation")})}},{key:"_compile",value:function(){if(this.style.display="none",this.style.zIndex=10001,this.classList.add("modal"),!Q.findChild(this,".modal__content")){var t=document.createElement("div");for(t.classList.add("modal__content");this.childNodes[0];){var e=this.childNodes[0];this.removeChild(e),t.insertBefore(e,null)}this.appendChild(t)}B.initModifier(this,this._scheme)}},{key:"_toggleStyle",value:function(t){this.style.display=t?"table":"none"}},{key:"connectedCallback",value:function(){v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this)}},{key:"disconnectedCallback",value:function(){v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"disconnectedCallback",this).call(this)}},{key:"attributeChangedCallback",value:function(t,n,i){"class"===t?Q.restoreClass(this,"modal",Go):v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"attributeChangedCallback",this).call(this,t,n,i)}},{key:"_scheme",get:function(){return Go}}],[{key:"registerAnimator",value:function(t,e){e.prototype instanceof Uo||Q.throwAnimator("Modal"),$o[t]=e}},{key:"observedAttributes",get:function(){return[].concat(w(v(e.__proto__||Object.getPrototypeOf(e),"observedAttributes",this)),["class"])}},{key:"animators",get:function(){return $o}},{key:"ModalAnimator",get:function(){return Uo}}]),e}();c.Modal=Ko,customElements.define("ons-modal",Ko);var Qo=function(){function t(e){var n=this;p(this,t),"element ignoreSwipe isInitialState onDragCallback swipeMax swipeMin swipeMid".split(/\s+/).forEach(function(t){return n[t]=e[t]}),this.elementHandler=e.elementHandler||e.element,this.getThreshold=e.getThreshold||function(){return.5},this.getSide=e.getSide||function(){return"left"},this.handleGesture=this.handleGesture.bind(this),this._shouldFixScroll="ios"===Q.globals.actualMobileOS}return g(t,[{key:"update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.element.hasAttribute("swipeable");this.gestureDetector||(this.gestureDetector=new st(this.elementHandler,{dragMinDistance:1,passive:!this._shouldFixScroll}));var e=t?"on":"off";this.gestureDetector[e]("drag dragstart dragend",this.handleGesture)}},{key:"handleGesture",value:function(t){t.gesture&&("dragstart"===t.type?this.onDragStart(t):this._ignoreDrag||("dragend"===t.type?this.onDragEnd(t):this.onDrag(t)))}},{key:"onDragStart",value:function(t){var e=this;this._ignoreDrag=t.consumed||!Q.isValidGesture(t)||this.ignoreSwipe(t,"left"===e.getSide()?t.gesture.center.clientX:window.innerWidth-t.gesture.center.clientX),this._ignoreDrag||(t.consume&&t.consume(),t.consumed=!0,this._width=function(t){var e=[parseInt(t,10),/px/.test(t)],n=e[0];return e[1]?n:Math.round(document.body.offsetWidth*n/100)}(this.element.style.width||"100%"),this._startDistance=this._distance=this.isInitialState instanceof Function&&!this.isInitialState()?this._width:0,Q.iosPreventScroll(this.gestureDetector))}},{key:"onDrag",value:function(t){t.stopPropagation();var e="left"===this.getSide()?t.gesture.deltaX:-t.gesture.deltaX,n=Math.max(0,Math.min(this._width,this._startDistance+e));n!==this._distance&&(this._distance=n,this.swipeMid(this._distance,this._width))}},{key:"onDragEnd",value:function(t){t.stopPropagation();var e=t.gesture.interimDirection;this.getSide()!==e&&this._distance>this._width*this.getThreshold()?this.swipeMax():this.swipeMin()}},{key:"dispose",value:function(){this.gestureDetector&&this.gestureDetector.dispose(),this.gestureDetector=this.element=this.elementHandler=null}}]),t}(),Jo=function(t){function e(t){return p(this,e),t=Q.extend({timing:"linear",duration:"0.4",delay:"0"},t||{}),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return b(e,Ti),g(e,[{key:"push",value:function(t,e,n){n()}},{key:"pop",value:function(t,e,n){n()}},{key:"block",value:function(t){var e=Q.createElement('\n      <div style="position: absolute; background-color: transparent; width: 100%; height: 100%; z-index: 100000"></div>\n    ');return t.parentNode.appendChild(e),function(){return e.remove()}}}]),e}(),Zo=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.durationRestore,i=void 0===n?.1:n,o=t.durationSwipe,r=void 0===o?.15:o,a=t.timingSwipe,s=void 0===a?"linear":a,l=y(t,["durationRestore","durationSwipe","timingSwipe"]);p(this,e);var u=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,_({},l)));return u.constructor===e&&Q.throwAbstract(),u.durationRestore=i,u.durationSwipe=r,u.timingSwipe=s,u.optSwipe={timing:s,duration:r},u.optRestore={timing:s,duration:i},u.swipeShadow=Q.createElement('<div style="position: absolute; height: 100%; width: 12px; right: 100%; top: 0; bottom: 0; z-index: -1;background: linear-gradient(to right, transparent 0, rgba(0,0,0,.04) 40%, rgba(0,0,0,.12) 80%, rgba(0,0,0,.16) 100%);"></div>'),u.isDragStart=!0,u}return b(e,Jo),g(e,null,[{key:"swipeable",get:function(){return!0}}]),g(e,[{key:"_decompose",value:function(){Q.throwMember()}},{key:"_shouldAnimateToolbar",value:function(){Q.throwMember()}},{key:"_calculateDelta",value:function(){Q.throwMember()}},{key:"_dragStartSetup",value:function(t,n){this.isDragStart=!1,this.unblock=v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"block",this).call(this,n),t.parentElement.insertBefore(this.backgroundMask,t),this.target={enter:Q.findToolbarPage(t)||t,leave:Q.findToolbarPage(n)||n},this.decomp={enter:this._decompose(this.target.enter),leave:this._decompose(this.target.leave)},this.delta=this._calculateDelta(n,this.decomp.leave),this.shouldAnimateToolbar=this._shouldAnimateToolbar(this.target.enter,this.target.leave),this.shouldAnimateToolbar?(this.swipeShadow.style.top=this.decomp.leave.toolbar.offsetHeight+"px",this.target.leave.appendChild(this.swipeShadow),this._saveStyle(this.target.enter,this.target.leave)):(n.appendChild(this.swipeShadow),this._saveStyle(t,n)),n.classList.add("overflow-visible"),this.overflowElement=n,this.decomp.leave.content.classList.add("content-swiping")}},{key:"translate",value:function(t,e,n,i){this.isSwiping=!0,"none"===n.style.display&&(n.style.display=""),this.isDragStart&&(this.maxWidth=e,this._dragStartSetup(n,i));var o=(t-e)/e;this.shouldAnimateToolbar?nt.runAll(nt([this.decomp.enter.content,this.decomp.enter.bottomToolbar,this.decomp.enter.background]).queue({transform:"translate3d("+25*o+"%, 0, 0)",opacity:1+10*o/100}),nt(this.decomp.enter.toolbarCenter).queue({transform:"translate3d("+this.delta.title*o+"px, 0, 0)",opacity:1+o}),nt(this.decomp.enter.backButtonLabel).queue({opacity:1+10*o/100,transform:"translate3d("+this.delta.label*o+"px, 0, 0)"}),nt(this.decomp.enter.other).queue({opacity:1+o}),nt([this.decomp.leave.content,this.decomp.leave.bottomToolbar,this.decomp.leave.background,this.swipeShadow]).queue({transform:"translate3d("+t+"px, 0, 0)"}),nt(this.decomp.leave.toolbar).queue({opacity:-1*o}),nt(this.decomp.leave.toolbarCenter).queue({transform:"translate3d("+125*(1+o)+"%, 0, 0)"}),nt(this.decomp.leave.backButtonLabel).queue({opacity:-1*o,transform:"translate3d("+this.delta.title*(1+o)+"px, 0, 0)"}),nt(this.swipeShadow).queue({opacity:-1*o})):nt.runAll(nt(i).queue({transform:"translate3d("+t+"px, 0, 0)"}),nt(n).queue({transform:"translate3d("+25*o+"%, 0, 0)",opacity:1+10*o/100}),nt(this.swipeShadow).queue({opacity:-1*o}))}},{key:"restore",value:function(t,e,n){var i=this;this.isDragStart||(this.shouldAnimateToolbar?nt.runAll(nt([this.decomp.enter.content,this.decomp.enter.bottomToolbar,this.decomp.enter.background]).queue({transform:"translate3d(-25%, 0, 0)",opacity:.9},this.optRestore),nt(this.decomp.enter.toolbarCenter).queue({transform:"translate3d(-"+this.delta.title+"px, 0, 0)",transition:"opacity "+this.durationRestore+"s linear, transform "+this.durationRestore+"s "+this.timingSwipe,opacity:0}),nt(this.decomp.enter.backButtonLabel).queue({transform:"translate3d(-"+this.delta.label+"px, 0, 0)"},this.optRestore),nt(this.decomp.enter.other).queue({opacity:0},this.optRestore),nt([this.decomp.leave.content,this.decomp.leave.bottomToolbar,this.decomp.leave.background,this.swipeShadow]).queue({transform:"translate3d(0, 0, 0)"},this.optRestore),nt(this.decomp.leave.toolbar).queue({opacity:1},this.optRestore),nt(this.decomp.leave.toolbarCenter).queue({transform:"translate3d(0, 0, 0)"},this.optRestore),nt(this.decomp.leave.backButtonLabel).queue({opacity:1,transform:"translate3d(0, 0, 0)",transition:"opacity "+this.durationRestore+"s linear, transform "+this.durationRestore+"s "+this.timingSwipe}),nt(this.swipeShadow).queue({opacity:0},this.optRestore).queue(function(e){i._reset(i.target.enter,i.target.leave),t.style.display="none",n&&n(),e()})):nt.runAll(nt(t).queue({transform:"translate3D(-25%, 0, 0)",opacity:.9},this.optRestore),nt(e).queue({transform:"translate3D(0, 0, 0)"},this.optRestore).queue(function(o){i._reset(t,e),t.style.display="none",n&&n(),o()})))}},{key:"popSwipe",value:function(t,e,n){var i=this;this.isDragStart||(this.shouldAnimateToolbar?nt.runAll(nt([this.decomp.enter.content,this.decomp.enter.bottomToolbar,this.decomp.enter.background]).queue({transform:"translate3d(0, 0, 0)",opacity:1},this.optSwipe),nt(this.decomp.enter.toolbarCenter).queue({transform:"translate3d(0, 0, 0)",transition:"opacity "+this.durationSwipe+"s linear, transform "+this.durationSwipe+"s "+this.timingSwipe,opacity:1}),nt(this.decomp.enter.backButtonLabel).queue({transform:"translate3d(0, 0, 0)"},this.optSwipe),nt(this.decomp.enter.other).queue({opacity:1},this.optSwipe),nt([this.decomp.leave.content,this.decomp.leave.bottomToolbar,this.decomp.leave.background]).queue({transform:"translate3d(100%, 0, 0)"},this.optSwipe),nt(this.decomp.leave.toolbar).queue({opacity:0},this.optSwipe),nt(this.decomp.leave.toolbarCenter).queue({transform:"translate3d(125%, 0, 0)"},this.optSwipe),nt(this.decomp.leave.backButtonLabel).queue({opacity:0,transform:"translate3d("+this.delta.title+"px, 0, 0)",transition:"opacity "+this.durationSwipe+"s linear, transform "+this.durationSwipe+"s "+this.timingSwipe}),nt(this.swipeShadow).queue({opacity:0,transform:"translate3d("+this.maxWidth+"px, 0, 0)"},this.optSwipe).queue(function(t){i._reset(i.target.enter,i.target.leave),n&&n(),t()})):nt.runAll(nt(t).queue({transform:"translate3D(0, 0, 0)",opacity:1},this.optSwipe),nt(e).queue({transform:"translate3D(100%, 0, 0)"},this.optSwipe).queue(function(o){i._reset(t,e),n&&n(),o()})))}},{key:"_saveStyle",value:function(){var t=this;this._savedStyle=new WeakMap;for(var e=function(e){return t._savedStyle.set(e,e.getAttribute("style"))},n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];i.forEach(e),Object.keys(this.decomp).forEach(function(n){Object.keys(t.decomp[n]).forEach(function(i){(t.decomp[n][i]instanceof Array?t.decomp[n][i]:[t.decomp[n][i]]).forEach(e)})})}},{key:"_restoreStyle",value:function(){for(var t=this,e=function(e){null===t._savedStyle.get(e)?e.removeAttribute("style"):e.setAttribute("style",t._savedStyle.get(e)),t._savedStyle.delete(e)},n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];i.forEach(e),Object.keys(this.decomp).forEach(function(n){Object.keys(t.decomp[n]).forEach(function(i){(t.decomp[n][i]instanceof Array?t.decomp[n][i]:[t.decomp[n][i]]).forEach(e)})})}},{key:"_reset",value:function(){this.isSwiping=!1,this._savedStyle&&this._restoreStyle.apply(this,arguments),this.unblock&&this.unblock(),this.swipeShadow.remove(),this.backgroundMask.remove(),this.overflowElement.classList.remove("overflow-visible"),this.decomp.leave.content.classList.remove("content-swiping"),this.decomp=this.target=this.overflowElement=this._savedStyle=null,this.isDragStart=!0}}]),e}(),tr=function(){return"translate3d("+(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)+", "+(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0)+", "+(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)+")"},er=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"cubic-bezier(0.3, .4, 0, .9)":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.4:a,l=y(t,["timing","delay","duration"]);p(this,e);var u=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,_({timing:i,delay:r,duration:s},l)));return u.backgroundMask=Q.createElement('<div style="position: absolute; width: 100%; height: 100%;background-color: black; z-index: 2"></div>'),u}return b(e,Zo),g(e,[{key:"_decompose",value:function(t){var e=t._getToolbarElement(),n=e._getToolbarLeftItemsElement(),i=e._getToolbarRightItemsElement(),o=function(t){for(var e=[],n=0;n<t.length;n++)"ons-back-button"!==t[n].nodeName.toLowerCase()&&e.push(t[n]);return e},r=[].concat(0===n.children.length?n:o(n.children)).concat(0===i.children.length?i:o(i.children));return{toolbarCenter:e._getToolbarCenterItemsElement(),backButtonIcon:e._getToolbarBackButtonIconElement(),backButtonLabel:e._getToolbarBackButtonLabelElement(),other:r,content:t._getContentElement(),background:t._getBackgroundElement(),toolbar:e,bottomToolbar:t._getBottomToolbarElement()}}},{key:"_shouldAnimateToolbar",value:function(t,e){var n=t._canAnimateToolbar()&&e._canAnimateToolbar(),i=t._getToolbarElement(),o=e._getToolbarElement(),r=i.hasAttribute("static")||o.hasAttribute("static"),a=Q.hasModifier(i,"material")||Q.hasModifier(o,"material"),s=Q.hasModifier(i,"transparent")||Q.hasModifier(o,"transparent");return n&&!r&&!a&&!s}},{key:"_calculateDelta",value:function(t,e){var n=void 0,i=void 0,o=t.getBoundingClientRect();if(e.backButtonLabel.classList.contains("back-button__label")){var r=e.backButtonLabel.getBoundingClientRect();n=Math.round(o.width/2-r.width/2-r.left)}else n=Math.round(o.width/2*.6);return e.backButtonIcon.classList.contains("back-button__icon")&&(i=e.backButtonIcon.getBoundingClientRect().right-2),{title:n,label:i}}},{key:"push",value:function(t,i,o){var r=this;this.backgroundMask.remove(),i.parentNode.insertBefore(this.backgroundMask,i);var a=v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"block",this).call(this,t);n(t,function(){var e=Q.findToolbarPage(t)||t,n=Q.findToolbarPage(i)||i,s=r._decompose(e),l=r._decompose(n),u=r._calculateDelta(i,s);r._shouldAnimateToolbar(e,n)?nt.runAll(nt([s.content,s.bottomToolbar,s.background],r.def).default({transform:tr("100%")},{transform:tr()}),nt(s.toolbar,r.def).default({opacity:0},{opacity:1}),nt(s.toolbarCenter,r.def).default({transform:tr("125%"),opacity:1},{transform:tr(),opacity:1}),nt(s.backButtonLabel,r.def).default({transform:tr(u.title+"px"),opacity:0},{transform:tr(),opacity:1,transition:"opacity "+r.duration+"s linear, transform "+r.duration+"s "+r.timing}),nt(s.other,r.def).default({opacity:0},{css:{opacity:1},timing:"linear"}),nt([l.content,l.bottomToolbar,l.background],r.def).default({transform:tr(),opacity:1},{transform:tr("-25%"),opacity:.9}).queue(function(t){r.backgroundMask.remove(),a(),o(),t()}),nt(l.toolbarCenter,r.def).default({transform:tr(),opacity:1},{transform:tr("-"+u.title+"px"),opacity:0,transition:"opacity "+r.duration+"s linear, transform "+r.duration+"s "+r.timing}),nt(l.backButtonLabel,r.def).default({transform:tr(),opacity:1},{transform:tr("-"+u.label+"px"),opacity:0}),nt(l.other,r.def).default({opacity:1},{css:{opacity:0},timing:"linear"})):nt.runAll(nt(t,r.def).default({transform:tr("100%")},{transform:tr()}),nt(i,r.def).default({transform:tr(),opacity:1},{transform:tr("-25%"),opacity:.9}).queue(function(t){r.backgroundMask.remove(),a(),o(),t()}))})}},{key:"pop",value:function(t,n,i){var o=this;if(this.isSwiping)return this.popSwipe(t,n,i);this.backgroundMask.remove(),t.parentNode.insertBefore(this.backgroundMask,t);var r=v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"block",this).call(this,t),a=Q.findToolbarPage(t)||t,s=Q.findToolbarPage(n)||n,l=this._decompose(a),u=this._decompose(s),c=this._calculateDelta(n,u);this._shouldAnimateToolbar(a,s)?nt.runAll(nt([l.content,l.bottomToolbar,l.background],this.def).default({transform:tr("-25%"),opacity:.9},{transform:tr(),opacity:1}),nt(l.toolbarCenter,this.def).default({transform:tr("-"+c.title+"px"),opacity:0},{transform:tr(),opacity:1,transition:"opacity "+this.duration+"s linear, transform "+this.duration+"s "+this.timing}),nt(l.backButtonLabel,this.def).default({transform:tr("-"+c.label+"px")},{transform:tr()}),nt(l.other,this.def).default({opacity:0},{css:{opacity:1},timing:"linear"}),nt([u.content,u.bottomToolbar,u.background],this.def).default({transform:tr()},{transform:tr("100%")}).wait(0).queue(function(t){o.backgroundMask.remove(),r(),i(),t()}),nt(u.toolbar,this.def).default({opacity:1},{opacity:0}),nt(u.toolbarCenter,this.def).default({transform:tr()},{transform:tr("125%")}),nt(u.backButtonLabel,this.def).default({transform:tr(),opacity:1},{transform:tr(c.title+"px"),opacity:0,transition:"opacity "+this.duration+"s linear, transform "+this.duration+"s "+this.timing})):nt.runAll(nt(t,this.def).default({transform:tr("-25%"),opacity:.9},{transform:tr(),opacity:1}),nt(n,this.def).default({transform:tr()},{transform:tr("100%")}).queue(function(t){o.backgroundMask.remove(),r(),i(),t()}))}}]),e}(),nr=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"cubic-bezier(.1, .7, .1, 1)":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.4:a;p(this,e);var l=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}));return l.backgroundMask=Q.createElement('<div style="position: absolute; width: 100%; height: 100%;background: linear-gradient(black, white);"></div>'),l}return b(e,Jo),g(e,[{key:"push",value:function(t,n,i){var o=this;this.backgroundMask.remove(),n.parentNode.insertBefore(this.backgroundMask,n);var r=v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"block",this).call(this,t);nt.runAll(nt(t,this.def).default({transform:"translate3D(0, 100%, 0)"},{transform:"translate3D(0, 0, 0)"}),nt(n,this.def).default({transform:"translate3D(0, 0, 0)",opacity:1},{transform:"translate3D(0, -10%, 0)",opacity:.9}).queue(function(t){o.backgroundMask.remove(),r(),i(),t()}))}},{key:"pop",value:function(t,n,i){var o=this;this.backgroundMask.remove(),t.parentNode.insertBefore(this.backgroundMask,t);var r=v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"block",this).call(this,t);nt.runAll(nt(t,this.def).default({transform:"translate3D(0, -43px, 0)",opacity:.9},{transform:"translate3D(0, 0, 0)",opacity:1}).queue(function(t){o.backgroundMask.remove(),r(),i(),t()}),nt(n,this.def).default({transform:"translate3D(0, 0, 0)"},{transform:"translate3D(0, 100%, 0)"}))}}]),e}(),ir="translate3d(0, 0, 0)",or=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"linear":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.4:a;return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}))}return b(e,Jo),g(e,[{key:"push",value:function(t,n,i){var o=v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"block",this).call(this,t);nt.runAll(nt(t,this.def).default({transform:ir,opacity:0},{transform:ir,opacity:1}).queue(function(t){o(),i(),t()}))}},{key:"pop",value:function(t,n,i){var o=v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"block",this).call(this,t);nt.runAll(nt(n,this.def).default({transform:ir,opacity:1},{transform:ir,opacity:0}).queue(function(t){o(),i(),t()}))}}]),e}(),rr=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"cubic-bezier(.1, .7, .4, 1)":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.3:a;p(this,e);var l=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}));return l.blackMaskOpacity=.4,l.backgroundMask=Q.createElement('<div style="position: absolute; width: 100%; height: 100%; z-index: 2;background-color: black; opacity: 0;"></div>'),l}return b(e,Jo),g(e,[{key:"push",value:function(t,n,i){var o=this;this.backgroundMask.remove(),n.parentElement.insertBefore(this.backgroundMask,n.nextSibling);var r=v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"block",this).call(this,t);nt.runAll(nt(this.backgroundMask,this.def).default({transform:"translate3d(0, 0, 0)",opacity:0},{opacity:this.blackMaskOpacity}).queue(function(t){o.backgroundMask.remove(),t()}),nt(t,this.def).default({transform:"translate3d(100%, 0, 0)"},{transform:"translate3d(0, 0, 0)"}),nt(n,this.def).default({transform:"translate3d(0, 0, 0)"},{transform:"translate3d(-45%, 0, 0)"}).queue(function(t){r(),i(),t()}))}},{key:"pop",value:function(t,n,i){var o=this;this.backgroundMask.remove(),t.parentNode.insertBefore(this.backgroundMask,t.nextSibling);var r=v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"block",this).call(this,t);nt.runAll(nt(this.backgroundMask,this.def).default({transform:"translate3d(0, 0, 0)",opacity:this.blackMaskOpacity},{opacity:0}).queue(function(t){o.backgroundMask.remove(),t()}),nt(t,this.def).default({transform:"translate3d(-45%, 0, 0)",opacity:.9},{transform:"translate3d(0, 0, 0)",opacity:1}),nt(n,this.def).default({transform:"translate3d(0, 0, 0)"},{transform:"translate3d(100%, 0, 0)"}).queue(function(t){r(),i(),t()}))}}]),e}(),ar=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"cubic-bezier(.1, .7, .1, 1)":n,o=t.delay,r=void 0===o?.05:o,a=t.duration,s=void 0===a?.4:a;p(this,e);var l=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}));return l.backgroundMask=Q.createElement('<div style="position: absolute; width: 100%; height: 100%;background-color: black;"></div>'),l}return b(e,Jo),g(e,[{key:"push",value:function(t,n,i){var o=this;this.backgroundMask.remove(),n.parentNode.insertBefore(this.backgroundMask,n);var r=v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"block",this).call(this,t),a=nt(this.backgroundMask).wait(this.delay+this.duration).queue(function(t){o.backgroundMask.remove(),t()});nt.runAll(a,nt(t,this.def).default({transform:"translate3d(0, 100%, 0)"},{transform:"translate3d(0, 0, 0)"}),nt(n,this.def).default({opacity:1},{opacity:.4}).queue(function(t){r(),i(),t()}))}},{key:"pop",value:function(t,n,i){var o=this;this.backgroundMask.remove(),t.parentNode.insertBefore(this.backgroundMask,t);var r=v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"block",this).call(this,t);nt.runAll(nt(this.backgroundMask).wait(this.delay+this.duration).queue(function(t){o.backgroundMask.remove(),t()}),nt(t,this.def).default({opacity:.4},{opacity:1}).queue(function(t){r(),i(),t()}),nt(n,this.def).default({transform:"translate3d(0, 0, 0)"},{transform:"translate3d(0, 100%, 0)"}))}}]),e}(),sr=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"cubic-bezier(0.4, 0, 0.2, 1)":n,o=t.timingPop,r=void 0===o?"cubic-bezier(0.4, 0, 1, 1)":o,a=t.delay,s=void 0===a?0:a,l=t.duration,u=void 0===l?.2:l;p(this,e);var c=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:s,duration:u}));return c.timingPop=r,c}return b(e,Jo),g(e,[{key:"push",value:function(t,n,i){var o=v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"block",this).call(this,t);nt.runAll(nt(t,this.def).default({transform:"translate3D(0, 42px, 0)",opacity:0},{transform:"translate3D(0, 0, 0)",opacity:1}).queue(function(t){o(),i(),t()}))}},{key:"pop",value:function(t,n,i){var o=v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"block",this).call(this,t);nt.runAll(nt(n,this.def).default({transform:"translate3D(0, 0, 0)",opacity:1},{css:{transform:"translate3D(0, 38px, 0)",opacity:0},timing:this.timingPop}).queue(function(t){o(),i(),t()}))}}]),e}(),lr=function(t){function e(t){return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return b(e,Jo),g(e,[{key:"push",value:function(t,e,n){n()}},{key:"pop",value:function(t,e,n){n()}}]),e}(),ur={default:function(){return C.isAndroid()?sr:er},slide:function(){return C.isAndroid()?rr:er},lift:function(){return C.isAndroid()?ar:nr},fade:function(){return C.isAndroid()?sr:or},"slide-ios":er,"slide-md":rr,"lift-ios":nr,"lift-md":ar,"fade-ios":or,"fade-md":sr,none:lr},cr={ready:function(t,e){e()}},hr=function(t){return"ONS-PAGE"!==t.nodeName&&Q.throw("Only page elements can be children of navigator")},dr=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._isRunning=!1,t._initialized=!1,t._pageLoader=jt,t._pageMap=new WeakMap,t._updateAnimatorFactory(),t}return b(e,Pi),g(e,[{key:"animatorFactory",get:function(){return this._animatorFactory}}]),g(e,[{key:"_getPageTarget",value:function(){return this._page||this.getAttribute("page")}},{key:"connectedCallback",value:function(){var t=this;if(this.onDeviceBackButton=this._onDeviceBackButton.bind(this),!C.isAndroid()||"force"===this.getAttribute("swipeable")){var e=void 0;this._swipe=new Qo({element:this,getThreshold:function(){return Math.max(.2,parseFloat(t.getAttribute("swipe-threshold"))||0)},swipeMax:function(){t._onSwipe&&t._onSwipe(1,{duration:e.durationSwipe,timing:e.timingSwipe}),t[t.swipeMax?"swipeMax":"popPage"]({animator:e}),e=null},swipeMid:function(n,i){t._onSwipe&&t._onSwipe(n/i),e.translate(n,i,t.topPage.previousElementSibling,t.topPage)},swipeMin:function(){t._onSwipe&&t._onSwipe(0,{duration:e.durationRestore,timing:e.timingSwipe}),e.restore(t.topPage.previousElementSibling,t.topPage),e=null},ignoreSwipe:function(n,i){if(!t._isRunning&&t.children.length>1){var o=parseInt(t.getAttribute("swipe-target-width")||25,10);if("right"===n.gesture.direction&&o>i){var r=function(t){return/ons-back-button/i.test(t.tagName)};if(!r(n.target)&&!Q.findParent(n.target,r,function(t){return/ons-page/i.test(t.tagName)})){var a=(t.topPage.pushedOptions||{}).animation||t.animatorFactory._animation,s=ur[a]instanceof Function?ur[a].call():ur[a];if(void 0!==s&&s.swipeable)return e=new s,!1}}}return!0}}),this.attributeChangedCallback("swipeable")}if(!this._initialized){this._initialized=!0;var i=Q.defer();this.loaded=i.promise,cr.ready(this,function(){var e=!Q.hasAnyComponentAsParent(t),o={animation:"none",show:e};if(0===t.pages.length&&t._getPageTarget())t.pushPage(t._getPageTarget(),o).then(function(){return i.resolve()});else if(t.pages.length>0){for(var r=0;r<t.pages.length;r++)hr(t.pages[r]);t.topPage&&n(t.topPage,function(){return setTimeout(function(){i.resolve(),e&&t.topPage._show(),t._updateLastPageBackButton()},0)})}else n(t,function(){0===t.pages.length&&t._getPageTarget()?t.pushPage(t._getPageTarget(),o).then(function(){return i.resolve()}):i.resolve()})})}}},{key:"_updateAnimatorFactory",value:function(){this._animatorFactory=new O({animators:ur,baseClass:Jo,baseClassName:"NavigatorAnimator",defaultAnimation:this.getAttribute("animation")})}},{key:"disconnectedCallback",value:function(){this._backButtonHandler.destroy(),this._backButtonHandler=null,this._swipe&&this._swipe.dispose(),this._swipe=null}},{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"animation":this._updateAnimatorFactory();break;case"swipeable":this._swipe&&this._swipe.update()}}},{key:"popPage",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e=this._preparePageAndOptions(null,e).options,Q.isInteger(e.times)&&e.times>1&&this._removePages(e.times);return this._popPage(e,function(){return new Promise(function(e){t._pageLoader.unload(t.pages[t.pages.length-1]),e()})})}},{key:"_popPage",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return Promise.resolve()};if(this._isRunning)return Promise.reject("popPage is already running.");if(this.pages.length<=1)return Promise.reject("ons-navigator's page stack is empty.");if(this._emitPrePopEvent())return Promise.reject("Canceled in prepop event.");var i=this.pages.length;return this._isRunning=!0,this.pages[i-2].updateBackButton(i-2>0),new Promise(function(o){var r=e.pages[i-1],a=e.pages[i-2];(t=Q.extend({},e.options||{},r.pushedOptions||{},t)).data&&(a.data=Q.extend({},a.data||{},t.data||{}));r._hide(),a.style.display="";(t.animator||e._animatorFactory.newAnimator(t)).pop(e.pages[i-2],e.pages[i-1],function(){n().then(function(){e._isRunning=!1,a._show(),Q.triggerElementEvent(e,"postpop",{leavePage:r,enterPage:a,navigator:e}),t.callback&&t.callback(a),o(a)})})}).catch(function(){return e._isRunning=!1})}},{key:"pushPage",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this._preparePageAndOptions(t,n);t=i.page;var o=function(i){hr(i),e._pageMap.set(i,t),(i=Q.extend(i,{data:n.data})).style.visibility="hidden"};return(n=i.options).pageHTML?this._pushPage(n,function(){return new Promise(function(t){Ht.load({page:n.pageHTML,parent:e,params:n.data},function(e){o(e),t()})})}):this._pushPage(n,function(){return new Promise(function(i){e._pageLoader.load({page:t,parent:e,params:n.data},function(t){o(t),i()})})})}},{key:"_pushPage",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return Promise.resolve()};if(this._isRunning)return Promise.reject("pushPage is already running.");if(this._emitPrePushEvent())return Promise.reject("Canceled in prepush event.");this._isRunning=!0;var i=O.parseAnimationOptionsString(this.getAttribute("animation-options"));e=Q.extend({},this.options||{},{animationOptions:i},e);var o=this._animatorFactory.newAnimator(e);return n().then(function(){var n=t.pages.length,i=t.pages[n-1],r=e.leavePage||t.pages[n-2];return hr(i),i.updateBackButton(n>(e._replacePage?2:1)),i.pushedOptions=Q.extend({},i.pushedOptions||{},e||{}),i.data=Q.extend({},i.data||{},e.data||{}),i.unload=i.unload||e.unload,new Promise(function(n){var a=function(){t._isRunning=!1,!1!==e.show&&setImmediate(function(){return i._show()}),Q.triggerElementEvent(t,"postpush",{leavePage:r,enterPage:i,navigator:t}),r&&(r.style.display="none"),e.callback&&e.callback(i),n(i)};i.style.visibility="",r?(r._hide(),o.push(i,r,a)):a()})}).catch(function(e){throw t._isRunning=!1,e})}},{key:"replacePage",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.pushPage(t,n).then(function(t){return e.pages.length>1&&e._pageLoader.unload(e.pages[e.pages.length-2]),e._updateLastPageBackButton(),Promise.resolve(t)})}},{key:"insertPage",value:function(t,e){var n=this,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=this._preparePageAndOptions(e,i);if(e=o.page,i=o.options,(t=this._normalizeIndex(t))>=this.pages.length)return this.pushPage(e,i);e="string"==typeof i.pageHTML?i.pageHTML:e;var r="string"==typeof i.pageHTML?Ht:this._pageLoader;return new Promise(function(o){r.load({page:e,parent:n},function(r){hr(r),n._pageMap.set(r,e),r=Q.extend(r,{data:i.data,pushedOptions:i}),i.animationOptions=Q.extend({},O.parseAnimationOptionsString(n.getAttribute("animation-options")),i.animationOptions||{}),r.style.display="none",n.insertBefore(r,n.pages[t]),n.topPage.updateBackButton(!0),setTimeout(function(){r=null,o(n.pages[t])},1e3/60)})})}},{key:"removePage",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(t=this._normalizeIndex(t))<this.pages.length-1?new Promise(function(n){var i=e.pages[t],o=e.topPage;e._pageMap.delete(i),e._pageLoader.unload(i),1===e.pages.length&&e.topPage.updateBackButton(!1),n(o)}):this.popPage(n)}},{key:"resetToPage",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this._preparePageAndOptions(t,n);if(t=i.page,(n=i.options).animator||n.animation||n.pop||(n.animation="none"),n.page||n.pageHTML||!this._getPageTarget()||(t=n.page=this._getPageTarget()),n.pop)return this._removePages(),this.insertPage(0,t,{data:n.data}).then(function(){return e.popPage(n)});var o=n.callback;return n.callback=function(t){e._removePages(),t.updateBackButton(!1),o&&o(t)},this.pushPage(t,n)}},{key:"bringPageTop",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};-1===["number","string"].indexOf(void 0===t?"undefined":f(t))&&Q.throw("First argument must be a page name or the index of an existing page. You supplied "+t);var n="number"==typeof t?this._normalizeIndex(t):this._lastIndexOfPage(t),i=this.pages[n];if(n<0)return this.pushPage(t,e);return e=this._preparePageAndOptions(i,e).options,n===this.pages.length-1?Promise.resolve(i):(i||Q.throw("Failed to find item "+t),this._isRunning?Promise.reject("pushPage is already running."):this._emitPrePushEvent()?Promise.reject("Canceled in prepush event."):(i.style.display="",i.style.visibility="hidden",i.parentNode.appendChild(i),this._pushPage(e)))}},{key:"_preparePageAndOptions",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"object"!=(void 0===e?"undefined":f(e))&&Q.throw("options must be an object. You supplied "+e),null!==t&&void 0!==t||!e.page||(t=e.page),e=Q.extend({},this.options||{},e,{page:t}),{page:t,options:e}}},{key:"_removePages",value:function(t){var e=this.pages,n=void 0===t?0:e.length-t;n=n<0?1:n;for(var i=e.length-2;i>=n;i--)this._pageMap.delete(e[i]),this._pageLoader.unload(e[i])}},{key:"_updateLastPageBackButton",value:function(){var t=this.pages.length-1;t>=0&&this.pages[t].updateBackButton(t>0)}},{key:"_normalizeIndex",value:function(t){return t>=0?t:Math.abs(this.pages.length+t)%this.pages.length}},{key:"_onDeviceBackButton",value:function(t){this.pages.length>1?this.popPage():t.callParentHandler()}},{key:"_lastIndexOfPage",value:function(t){var e=void 0;for(e=this.pages.length-1;e>=0&&t!==this._pageMap.get(this.pages[e]);e--);return e}},{key:"_emitPreEvent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=!1;return Q.triggerElementEvent(this,"pre"+t,Q.extend({navigator:this,currentPage:this.pages[this.pages.length-1],cancel:function(){return n=!0}},e)),n}},{key:"_emitPrePushEvent",value:function(){return this._emitPreEvent("push")}},{key:"_emitPrePopEvent",value:function(){var t=this.pages.length;return this._emitPreEvent("pop",{leavePage:this.pages[t-1],enterPage:this.pages[t-2]})}},{key:"_createPageElement",value:function(t){var e=Q.createElement(P.normalizePageHTML(t));return hr(e),e}},{key:"_show",value:function(){var t=this;this.loaded.then(function(){return t.topPage&&t.topPage._show()})}},{key:"_hide",value:function(){this.topPage&&this.topPage._hide()}},{key:"_destroy",value:function(){for(var t=this.pages.length-1;t>=0;t--)this._pageLoader.unload(this.pages[t]);this.remove()}},{key:"pageLoader",get:function(){return this._pageLoader},set:function(t){t instanceof Bt||Q.throwPageLoader(),this._pageLoader=t}},{key:"page",get:function(){return this._page},set:function(t){this._page=t}},{key:"onDeviceBackButton",get:function(){return this._backButtonHandler},set:function(t){this._backButtonHandler&&this._backButtonHandler.destroy(),this._backButtonHandler=R.createHandler(this,t)}},{key:"topPage",get:function(){for(var t=this.lastElementChild;t&&"ONS-PAGE"!==t.tagName;)t=t.previousElementSibling;return t}},{key:"pages",get:function(){return Q.arrayFrom(this.children).filter(function(t){return"ONS-PAGE"===t.tagName})}},{key:"onSwipe",get:function(){return this._onSwipe},set:function(t){!t||t instanceof Function||Q.throw('"onSwipe" must be a function'),this._onSwipe=t}},{key:"options",get:function(){return this._options},set:function(t){this._options=t}},{key:"_isRunning",set:function(t){this.setAttribute("_is-running",t?"true":"false")},get:function(){return JSON.parse(this.getAttribute("_is-running"))}}],[{key:"registerAnimator",value:function(t,e){e.prototype instanceof Jo||Q.throwAnimator("Navigator"),ur[t]=e}},{key:"observedAttributes",get:function(){return["animation","swipeable"]}},{key:"animators",get:function(){return ur}},{key:"NavigatorAnimator",get:function(){return Jo}},{key:"events",get:function(){return["prepush","postpush","prepop","postpop"]}},{key:"rewritables",get:function(){return cr}}]),e}();c.Navigator=dr,customElements.define("ons-navigator",dr);var fr={"":"toolbar--*",".toolbar__left":"toolbar--*__left",".toolbar__center":"toolbar--*__center",".toolbar__right":"toolbar--*__right"},pr=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n(t,function(){t._compile()}),t}return b(e,Pi),g(e,[{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"class":Q.restoreClass(this,"toolbar",fr);break;case"modifier":B.onModifierChanged(e,n,this,fr)}}},{key:"setVisibility",value:function(t){var e=this;n(this,function(){if(e.style.display=t?"":"none",e.parentNode){var n=Q.findChild(e.parentNode,".page__background");n&&(n.style.top=t?null:0);var i=Q.findChild(e.parentNode,".page__content");i&&(i.style.top=t?null:0)}})}},{key:"show",value:function(){this.setVisibility(!0)}},{key:"hide",value:function(){this.setVisibility(!1)}},{key:"_getToolbarLeftItemsElement",value:function(){return this.querySelector(".left")||P.nullElement}},{key:"_getToolbarCenterItemsElement",value:function(){return this.querySelector(".center")||P.nullElement}},{key:"_getToolbarRightItemsElement",value:function(){return this.querySelector(".right")||P.nullElement}},{key:"_getToolbarBackButtonLabelElement",value:function(){return this.querySelector("ons-back-button .back-button__label")||P.nullElement}},{key:"_getToolbarBackButtonIconElement",value:function(){return this.querySelector("ons-back-button .back-button__icon")||P.nullElement}},{key:"_compile",value:function(){N.prepare(this),this.classList.add("toolbar"),this._ensureToolbarItemElements(),B.initModifier(this,fr)}},{key:"_ensureToolbarItemElements",value:function(){for(var t=this.childNodes.length-1;t>=0;t--)1!=this.childNodes[t].nodeType&&this.removeChild(this.childNodes[t]);var e=this._ensureToolbarElement("center");if(e.classList.add("toolbar__title"),1!==this.children.length||!this.children[0].classList.contains("center")){var n=this._ensureToolbarElement("left"),i=this._ensureToolbarElement("right");this.children[0]===n&&this.children[1]===e&&this.children[2]===i||(this.appendChild(n),this.appendChild(e),this.appendChild(i))}}},{key:"_ensureToolbarElement",value:function(t){if(Q.findChild(this,".toolbar__"+t)){var e=Q.findChild(this,".toolbar__"+t);return e.classList.add(t),e}var n=Q.findChild(this,"."+t)||Q.create("."+t);return n.classList.add("toolbar__"+t),n}}],[{key:"observedAttributes",get:function(){return["modifier","class"]}}]),e}();c.Toolbar=pr,customElements.define("ons-toolbar",pr);var gr="page",mr={"":"page--*",".page__content":"page--*__content",".page__background":"page--*__background"},_r=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._deriveHooks(),t._defaultClassName=gr,t.classList.add(gr),t._initialized=!1,n(t,function(){t._compile(),t._isShown=!1,t._contentElement=t._getContentElement(),t._backgroundElement=t._getBackgroundElement()}),t}return b(e,Pi),g(e,[{key:"_compile",value:function(){var t=this;N.prepare(this);var e=Q.findChild(this,"ons-toolbar"),n=Q.findChild(this,".page__background")||Q.findChild(this,".background")||document.createElement("div");n.classList.add("page__background"),this.insertBefore(n,!e&&this.firstChild||e&&e.nextSibling);var i=Q.findChild(this,".page__content")||Q.findChild(this,".content")||document.createElement("div");i.classList.add("page__content"),i.parentElement||Q.arrayFrom(this.childNodes).forEach(function(e){(1!==e.nodeType||t._elementShouldBeMoved(e))&&i.appendChild(e)}),this._tryToFillStatusBar(i),this.insertBefore(i,n.nextSibling),e&&Q.hasModifier(e,"transparent")||1!==i.children.length||!Q.isPageControl(i.children[0])||(this._defaultClassName+=" page--wrapper",this.attributeChangedCallback("class"));Q.findChild(this,"ons-bottom-toolbar")&&(this._defaultClassName+=" page-with-bottom-toolbar",this.attributeChangedCallback("class")),B.initModifier(this,mr)}},{key:"_elementShouldBeMoved",value:function(t){if(t.classList.contains("page__background"))return!1;var e=t.tagName.toLowerCase();if("ons-fab"===e)return!t.hasAttribute("position");return t.hasAttribute("inline")||-1===["script","ons-toolbar","ons-bottom-toolbar","ons-modal","ons-speed-dial","ons-dialog","ons-alert-dialog","ons-popover","ons-action-sheet"].indexOf(e)}},{key:"_tryToFillStatusBar",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._contentElement;P.autoStatusBarFill(function(){Q.toggleAttribute(t,"status-bar-fill",!Q.findParent(t,function(t){return t.hasAttribute("status-bar-fill")})&&(t._canAnimateToolbar(e)||!Q.findChild(e,Q.isPageControl)))})}},{key:"_canAnimateToolbar",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._contentElement;return!!Q.findChild(this,"ons-toolbar")||!!Q.findChild(t,function(t){return Q.match(t,"ons-toolbar")&&!t.hasAttribute("inline")})}},{key:"connectedCallback",value:function(){var t=this;Q.isAttached(this)&&n(this,function(){t._tryToFillStatusBar(),t.hasAttribute("on-infinite-scroll")&&t.attributeChangedCallback("on-infinite-scroll",null,t.getAttribute("on-infinite-scroll")),t._initialized||(t._initialized=!0,setImmediate(function(){t.onInit&&t.onInit(),Q.triggerElementEvent(t,"init")}),Q.hasAnyComponentAsParent(t)||setImmediate(function(){return t._show()}))})}},{key:"updateBackButton",value:function(t){this.backButton&&(t?this.backButton.show():this.backButton.hide())}},{key:"_onScroll",value:function(){var t=this,e=this._contentElement,n=(e.scrollTop+e.clientHeight)/e.scrollHeight>=this._infiniteScrollLimit;this._onInfiniteScroll&&!this._loadingContent&&n&&(this._loadingContent=!0,this._onInfiniteScroll(function(){return t._loadingContent=!1}))}},{key:"_getContentElement",value:function(){var t=Q.findChild(this,".page__content");if(t)return t;Q.throw('Fail to get ".page__content" element')}},{key:"_getBackgroundElement",value:function(){var t=Q.findChild(this,".page__background");if(t)return t;Q.throw('Fail to get ".page__background" element')}},{key:"_getBottomToolbarElement",value:function(){return Q.findChild(this,"ons-bottom-toolbar")||P.nullElement}},{key:"_getToolbarElement",value:function(){return Q.findChild(this,"ons-toolbar")||document.createElement("ons-toolbar")}},{key:"attributeChangedCallback",value:function(t,e,n){var i=this;switch(t){case"class":Q.restoreClass(this,this._defaultClassName,mr);break;case"modifier":B.onModifierChanged(e,n,this,mr);break;case"on-infinite-scroll":this.onInfiniteScroll=null===n?null:function(t){var e=Q.findFromPath(n);i.onInfiniteScroll=e,e(t)}}}},{key:"_show",value:function(){!this._isShown&&Q.isAttached(this)&&(this._isShown=!0,this.setAttribute("shown",""),this.onShow&&this.onShow(),Q.triggerElementEvent(this,"show"),Q.propagateAction(this,"_show"))}},{key:"_hide",value:function(){this._isShown&&(this._isShown=!1,this.removeAttribute("shown"),this.onHide&&this.onHide(),Q.triggerElementEvent(this,"hide"),Q.propagateAction(this,"_hide"))}},{key:"_destroy",value:function(){this._hide(),this.onDestroy&&this.onDestroy(),Q.triggerElementEvent(this,"destroy"),this.onDeviceBackButton&&this.onDeviceBackButton.destroy(),Q.propagateAction(this,"_destroy"),this.remove()}},{key:"_deriveHooks",value:function(){var t=this;this.constructor.events.forEach(function(e){var n="on"+e.charAt(0).toUpperCase()+e.slice(1);Object.defineProperty(t,n,{configurable:!0,enumerable:!0,get:function(){return t["_"+n]},set:function(e){e instanceof Function||Q.throw('"'+n+'" hook must be a function'),t["_"+n]=e.bind(t)}})})}},{key:"name",set:function(t){this.setAttribute("name",t)},get:function(){return this.getAttribute("name")}},{key:"backButton",get:function(){return this.querySelector("ons-back-button")}},{key:"onInfiniteScroll",set:function(t){var e=this;!t||t instanceof Function||Q.throw('"onInfiniteScroll" must be function or null'),n(this,function(){t?e._onInfiniteScroll||(e._infiniteScrollLimit=.9,e._boundOnScroll=e._onScroll.bind(e),setImmediate(function(){return e._contentElement.addEventListener("scroll",e._boundOnScroll)})):e._contentElement.removeEventListener("scroll",e._boundOnScroll),e._onInfiniteScroll=t})},get:function(){return this._onInfiniteScroll}},{key:"onDeviceBackButton",get:function(){return this._backButtonHandler},set:function(t){this._backButtonHandler&&this._backButtonHandler.destroy(),this._backButtonHandler=R.createHandler(this,t)}},{key:"scrollTop",get:function(){return this._contentElement.scrollTop},set:function(t){this._contentElement.scrollTop=t}}],[{key:"observedAttributes",get:function(){return["modifier","on-infinite-scroll","class"]}},{key:"events",get:function(){return["init","show","hide","destroy"]}}]),e}();c.Page=_r,customElements.define("ons-page",_r);var vr=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"cubic-bezier(.1, .7, .4, 1)":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.2:a;return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}))}return b(e,Ti),g(e,[{key:"show",value:function(t,e){e()}},{key:"hide",value:function(t,e){e()}},{key:"_animate",value:function(t,e){var n=e.from,i=e.to,o=e.options,r=e.callback,a=e.restore,s=void 0!==a&&a,l=e.animation;return o=Q.extend({},this.options,o),l&&(n=l.from,i=l.to),l=nt(t),s&&(l=l.saveStyle()),l=l.queue(n).wait(this.delay).queue({css:i,duration:this.duration,timing:this.timing}),s&&(l=l.restoreStyle()),r&&(l=l.queue(function(t){r(),t()})),l}},{key:"_animateAll",value:function(t,e){var n=this;Object.keys(e).forEach(function(i){return n._animate(t[i],e[i]).play()})}}]),e}(),br={out:{from:{opacity:1},to:{opacity:0}},in:{from:{opacity:0},to:{opacity:1}}},yr=function(t){function e(){return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,vr),g(e,[{key:"show",value:function(t,e){this._animateAll(t,{_mask:br.in,_popover:{animation:br.in,restore:!0,callback:e}})}},{key:"hide",value:function(t,e){this._animateAll(t,{_mask:br.out,_popover:{animation:br.out,restore:!0,callback:e}})}}]),e}(),kr=function(t){function e(){return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,yr),g(e,[{key:"show",value:function(t,e){this._animateAll(t,{_mask:br.in,_popover:{from:{transform:"scale3d(1.3, 1.3, 1.0)",opacity:0},to:{transform:"scale3d(1.0, 1.0,  1.0)",opacity:1},restore:!0,callback:e}})}}]),e}(),wr={".popover":"popover--*",".popover-mask":"popover-mask--*",".popover__content":"popover--*__content",".popover__arrow":"popover--*__arrow"},Er={default:function(){return C.isAndroid()?yr:kr},none:vr,"fade-ios":kr,"fade-md":yr},Cr={up:"bottom",left:"right",down:"top",right:"left"},Ar=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._boundOnChange=t._onChange.bind(t),n(t,function(){t._compile(),t.style.display="none"}),t}return b(e,Ni),g(e,[{key:"_updateAnimatorFactory",value:function(){return new O({animators:Er,baseClass:vr,baseClassName:"PopoverAnimator",defaultAnimation:this.getAttribute("animation")||"default"})}},{key:"_toggleStyle",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t?(this.style.display="block",this._currentTarget=e.target,this._positionPopover(e.target)):(this.style.display="none",this._clearStyles())}},{key:"_positionPopover",value:function(t){var e=this._radius,n=this._content,i=this._margin,o=Li.getSafeAreaLengths(),r=Li.getSafeAreaDOMRect(),a=t.getBoundingClientRect(),s=Q.hasModifier(this,"material"),l=s&&this.hasAttribute("cover-target"),u=(Q.findParent(this,"ons-page")||document.body).getBoundingClientRect(),c={top:Math.max(u.top,r.top),left:Math.max(u.left,r.left),bottom:Math.min(u.bottom,r.bottom),right:Math.min(u.right,r.right)},h={top:a.top-(c.top+i),left:a.left-(c.left+i),bottom:c.bottom-i-a.bottom,right:c.right-i-a.right},d={top:a.top+Math.round(a.height/2)-(c.top+i),left:a.left+Math.round(a.width/2)-(c.left+i),bottom:c.bottom-i-a.bottom+Math.round(a.height/2),right:c.right-i-a.right+Math.round(a.width/2)},f=this._calculateDirections(h),p=f.vertical,g=f.primary,m=f.secondary;this._currentDirection=g,Q.addModifier(this,g);var _=p?"width":"height",v=function(t){return{width:parseInt(t.getPropertyValue("width"),10),height:parseInt(t.getPropertyValue("height"),10)}}(window.getComputedStyle(n)),b=l?0:(p?a.height:a.width)+(s?0:14),y=Math.max(o[g]+i,o[g]+i+h[g]+b),k=Math.max(o[m]+i,o[m]+i+d[m]-v[_]/2);this._popover.style[g]=y+"px",this._popover.style[m]=k+"px",this._arrow.style[m]=Math.max(e,o[m]+i+d[m]-k)+"px"}},{key:"_calculateDirections",value:function(t){var e=(this.getAttribute("direction")||"up down left right").split(/\s+/).map(function(t){return Cr[t]}).sort(function(e,n){return t[e]-t[n]})[0],n="top"==e||"bottom"==e,i=void 0;return i=n?t.left<t.right?"left":"right":t.top<t.bottom?"top":"bottom",{vertical:n,primary:e,secondary:i}}},{key:"_clearStyles",value:function(){var t=this;this._currentDirection=null,["top","bottom","left","right"].forEach(function(e){t._arrow.style[e]=t._content.style[e]=t._popover.style[e]="",Q.removeModifier(t,e)})}},{key:"_onChange",value:function(){var t=this;setImmediate(function(){t._currentTarget&&t._positionPopover(t._currentTarget)})}},{key:"_compile",value:function(){if(N.prepare(this),!this._popover||!this._mask){if(this._popover&&this._content){if(!this._mask){var t=document.createElement("div");t.classList.add("popover-mask"),this.insertBefore(t,this.firstChild)}if(!this._arrow){var e=document.createElement("div");e.classList.add("popover__arrow"),this._popover.appendChild(e)}}else{for(var n=Q.createFragment('\n        <div class="popover-mask"></div>\n        <div class="popover">\n          <div class="popover__content"></div>\n          <div class="popover__arrow"></div>\n        </div>\n      '),i=n.querySelector(".popover__content");this.childNodes[0];)i.appendChild(this.childNodes[0]);this.appendChild(n)}this.hasAttribute("style")&&(this._popover.setAttribute("style",this.getAttribute("style")),this.removeAttribute("style")),B.initModifier(this,this._scheme)}}},{key:"show",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof(n=!t||"object"!==(void 0===t?"undefined":f(t))||t instanceof Event||t instanceof HTMLElement?_({},n,{target:t}):_({},t)).target?n.target=document.querySelector(n.target):n.target instanceof Event&&(n.target=n.target.target),n.target instanceof HTMLElement||Q.throw("Invalid target type or undefined"),v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"show",this).call(this,n)}},{key:"connectedCallback",value:function(){var t=this;v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"connectedCallback",this).call(this),window.addEventListener("resize",this._boundOnChange,!1),this._margin=this._margin||parseInt(window.getComputedStyle(this).getPropertyValue("top")),this._margin=this._margin||6,n(this,function(){t._radius=parseInt(window.getComputedStyle(t._content).getPropertyValue("border-top-left-radius"))})}},{key:"disconnectedCallback",value:function(){v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"disconnectedCallback",this).call(this),window.removeEventListener("resize",this._boundOnChange,!1)}},{key:"attributeChangedCallback",value:function(t,n,i){if("direction"===t)return this._boundOnChange();"modifier"===t&&this._currentDirection&&Q.addModifier(this,this._currentDirection),v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"attributeChangedCallback",this).call(this,t,n,i)}},{key:"_scheme",get:function(){return wr}},{key:"_mask",get:function(){return Q.findChild(this,".popover-mask")}},{key:"_popover",get:function(){return Q.findChild(this,".popover")}},{key:"_content",get:function(){return Q.findChild(this._popover,".popover__content")}},{key:"_arrow",get:function(){return Q.findChild(this._popover,".popover__arrow")}}],[{key:"registerAnimator",value:function(t,e){e.prototype instanceof vr||Q.throwAnimator("Popover"),Er[t]=e}},{key:"observedAttributes",get:function(){return[].concat(w(v(e.__proto__||Object.getPrototypeOf(e),"observedAttributes",this)),["direction"])}},{key:"animators",get:function(){return Er}},{key:"PopoverAnimator",get:function(){return vr}}]),e}();c.Popover=Ar,customElements.define("ons-popover",Ar);var Sr={".progress-bar":"progress-bar--*",".progress-bar__primary":"progress-bar--*__primary",".progress-bar__secondary":"progress-bar--*__secondary"},Pr=Q.createElement('\n  <div class="progress-bar">\n    <div class="progress-bar__secondary"></div>\n    <div class="progress-bar__primary"></div>\n  </div>\n'),Or="indeterminate",xr=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n(t,function(){return t._compile()}),t}return b(e,Pi),g(e,[{key:"_compile",value:function(){this._isCompiled()?this._template=Q.findChild(this,".progress-bar"):this._template=Pr.cloneNode(!0),this._primary=Q.findChild(this._template,".progress-bar__primary"),this._secondary=Q.findChild(this._template,".progress-bar__secondary"),this._updateDeterminate(),this._updateValue(),this.appendChild(this._template),N.prepare(this),B.initModifier(this,Sr)}},{key:"_isCompiled",value:function(){if(!Q.findChild(this,".progress-bar"))return!1;var t=Q.findChild(this,".progress-bar");return!!Q.findChild(t,".progress-bar__secondary")&&!!Q.findChild(t,".progress-bar__primary")}},{key:"attributeChangedCallback",value:function(t,e,n){"modifier"===t?(B.onModifierChanged(e,n,this,Sr),this.hasAttribute(Or)&&this._updateDeterminate()):"value"===t||"secondary-value"===t?this._updateValue():t===Or&&this._updateDeterminate()}},{key:"_updateDeterminate",value:function(){var t=this;n(this,function(){return Q.toggleModifier(t,Or,{force:t.hasAttribute(Or)})})}},{key:"_updateValue",value:function(){var t=this;n(this,function(){t._primary.style.width=t.hasAttribute("value")?t.getAttribute("value")+"%":"0%",t._secondary.style.width=t.hasAttribute("secondary-value")?t.getAttribute("secondary-value")+"%":"0%"})}},{key:"value",set:function(t){("number"!=typeof t||t<0||t>100)&&Q.throw("Invalid value"),this.setAttribute("value",Math.floor(t))},get:function(){return parseInt(this.getAttribute("value")||"0")}},{key:"secondaryValue",set:function(t){("number"!=typeof t||t<0||t>100)&&Q.throw("Invalid value"),this.setAttribute("secondary-value",Math.floor(t))},get:function(){return parseInt(this.getAttribute("secondary-value")||"0")}},{key:"indeterminate",set:function(t){t?this.setAttribute(Or,""):this.removeAttribute(Or)},get:function(){return this.hasAttribute(Or)}}],[{key:"observedAttributes",get:function(){return["modifier","value","secondary-value",Or]}}]),e}();c.ProgressBar=xr,customElements.define("ons-progress-bar",xr);var Tr={".progress-circular":"progress-circular--*",".progress-circular__background":"progress-circular--*__background",".progress-circular__primary":"progress-circular--*__primary",".progress-circular__secondary":"progress-circular--*__secondary"},Lr=Q.createElement('\n  <svg class="progress-circular">\n    <circle class="progress-circular__background" />\n    <circle class="progress-circular__secondary" cx="50%" cy="50%" r="40%" />\n    <circle class="progress-circular__primary" cx="50%" cy="50%" r="40%" />\n  </svg>\n'),Mr="indeterminate",Dr=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n(t,function(){return t._compile()}),t}return b(e,Pi),g(e,[{key:"attributeChangedCallback",value:function(t,e,n){"modifier"===t?(B.onModifierChanged(e,n,this,Tr),this.hasAttribute(Mr)&&this._updateDeterminate()):"value"===t||"secondary-value"===t?this._updateValue():t===Mr&&this._updateDeterminate()}},{key:"_updateDeterminate",value:function(){var t=this;n(this,function(){return Q.toggleModifier(t,Mr,{force:t.hasAttribute(Mr)})})}},{key:"_updateValue",value:function(){var t=this;this.hasAttribute("value")&&n(this,function(){var e=Math.ceil(251.32*t.getAttribute("value")*.01);t._primary.style["stroke-dasharray"]=e+"%, 251.32%"}),this.hasAttribute("secondary-value")?n(this,function(){var e=Math.ceil(251.32*t.getAttribute("secondary-value")*.01);t._secondary.style.display=null,t._secondary.style["stroke-dasharray"]=e+"%, 251.32%"}):n(this,function(){t._secondary.style.display="none"})}},{key:"_compile",value:function(){this._isCompiled()?this._template=Q.findChild(this,".progress-circular"):this._template=Lr.cloneNode(!0),this._primary=Q.findChild(this._template,".progress-circular__primary"),this._secondary=Q.findChild(this._template,".progress-circular__secondary"),this._updateDeterminate(),this._updateValue(),this.appendChild(this._template),N.prepare(this),B.initModifier(this,Tr)}},{key:"_isCompiled",value:function(){if(!Q.findChild(this,".progress-circular"))return!1;var t=Q.findChild(this,".progress-circular");return!!Q.findChild(t,".progress-circular__secondary")&&!!Q.findChild(t,".progress-circular__primary")}},{key:"value",set:function(t){("number"!=typeof t||t<0||t>100)&&Q.throw("Invalid value"),this.setAttribute("value",Math.floor(t))},get:function(){return parseInt(this.getAttribute("value")||"0")}},{key:"secondaryValue",set:function(t){("number"!=typeof t||t<0||t>100)&&Q.throw("Invalid value"),this.setAttribute("secondary-value",Math.floor(t))},get:function(){return parseInt(this.getAttribute("secondary-value")||"0")}},{key:"indeterminate",set:function(t){t?this.setAttribute(Mr,""):this.removeAttribute(Mr)},get:function(){return this.hasAttribute(Mr)}}],[{key:"observedAttributes",get:function(){return["modifier","value","secondary-value",Mr]}}]),e}();c.ProgressCircular=Dr,customElements.define("ons-progress-circular",Dr);var Ir="initial",Nr=function(t,e){return Q.throw('"'+t+'" must be '+e)},Br=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._shouldFixScroll=Q.globals.isUIWebView,t._onDrag=t._onDrag.bind(t),t._onDragStart=t._onDragStart.bind(t),t._onDragEnd=t._onDragEnd.bind(t),t._onScroll=t._onScroll.bind(t),t._setState(Ir,!0),t._hide(),t}return b(e,Pi),g(e,[{key:"_setStyle",value:function(){var t=this.height+"px";d(this,{height:t,lineHeight:t}),""===this.style.display&&this._show()}},{key:"_onScroll",value:function(t){var e=this._pageElement;e.scrollTop<0&&(e.scrollTop=0)}},{key:"_canConsumeGesture",value:function(t){return"up"===t.direction||"down"===t.direction}},{key:"_onDragStart",value:function(t){var e=this;if(t.gesture&&!this.disabled){var n=t.gesture.center.clientY+this._pageElement.scrollTop,i=window.innerHeight,o=this._shouldFixScroll?.8:1;if(this._ignoreDrag=t.consumed||n>i*o,!this._ignoreDrag){var r=t.consume;t.consume=function(){r&&r(),e._ignoreDrag=!0,e._hide()},this._canConsumeGesture(t.gesture)&&(r&&r(),t.consumed=!0,this._show())}this._startScroll=this._pageElement.scrollTop}}},{key:"_onDrag",value:function(t){var e=this;if(t.gesture&&!this.disabled&&!this._ignoreDrag&&this._canConsumeGesture(t.gesture)){"none"===this.style.display&&this._show(),t.stopPropagation();var n=t.gesture.center.clientY+this._pageElement.scrollTop,i=window.innerHeight;this._shouldFixScroll&&(this._pageElement.scrollTop=this._startScroll-t.gesture.deltaY,("up"!==t.gesture.interimDirection||n<=.5*i)&&t.gesture.preventDefault());var o=Math.max(t.gesture.deltaY-this._startScroll,0);if(o!==this._currentTranslation){var r=this.thresholdHeight;r>0&&o>=r?(t.gesture.stopDetect(),setImmediate(function(){return e._finish()})):o>=this.height?this._setState("preaction"):this._setState(Ir),this._translateTo(o)}}}},{key:"_onDragEnd",value:function(t){if(t.gesture&&!this.disabled&&!this._ignoreDrag&&(t.stopPropagation(),this._currentTranslation>0)){this._currentTranslation>this.height?this._finish():this._translateTo(0,{animate:!0})}}},{key:"_finish",value:function(){var t=this;this._setState("action"),this._translateTo(this.height,{animate:!0});(this.onAction||function(t){return t()})(function(){t._translateTo(0,{animate:!0}),t._setState(Ir)})}},{key:"_setState",value:function(t,e){var n=this.state;this.setAttribute("state",t),e||n===this.state||Q.triggerElementEvent(this,"changestate",{pullHook:this,state:t,lastState:n})}},{key:"_show",value:function(){var t=this;setImmediate(function(){t.style.display="",t._pageElement&&(t._pageElement.style.marginTop="-"+t.height+"px")})}},{key:"_hide",value:function(){this.style.display="none",this._pageElement&&(this._pageElement.style.marginTop="")}},{key:"_translateTo",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(0!=this._currentTranslation||0!=t){this._currentTranslation=t;var n=e.animate?{duration:.3,timing:"cubic-bezier(.1, .7, .1, 1)"}:{};this._onPull&&this._onPull((t/this.height).toFixed(2),n);var i=this.hasAttribute("fixed-content")?this:this._pageElement;nt(i).queue({transform:"translate3d(0px, "+t+"px, 0px)"},n).play(function(){0===t&&d.clear(i,"transition transform"),e.callback instanceof Function&&e.callback()})}}},{key:"_disableDragLock",value:function(){this._dragLockDisabled=!0,this._setupListeners(!0)}},{key:"_setupListeners",value:function(t){var e=this,n=function(t){return e._pageElement[t+"EventListener"]("scroll",e._onScroll,!1)},i=function(t){var n={passive:!0};e._gestureDetector[t]("drag",e._onDrag,n),e._gestureDetector[t]("dragstart",e._onDragStart,n),e._gestureDetector[t]("dragend",e._onDragEnd,n)};this._gestureDetector&&(i("off"),this._gestureDetector.dispose(),this._gestureDetector=null),n("remove"),t&&(this._gestureDetector=new st(this._pageElement,{dragMinDistance:1,dragDistanceCorrection:!1,dragLockToAxis:!this._dragLockDisabled,passive:!this._shouldFixScroll}),i("on"),n("add"))}},{key:"connectedCallback",value:function(){this._currentTranslation=0,this._pageElement=this.parentNode,this._setupListeners(!0),this._setStyle()}},{key:"disconnectedCallback",value:function(){this._hide(),this._setupListeners(!1)}},{key:"attributeChangedCallback",value:function(t,e,n){"height"===t&&this._pageElement&&this._setStyle()}},{key:"onAction",get:function(){return this._onAction},set:function(t){!t||t instanceof Function||Nr("onAction","function or null"),this._onAction=t}},{key:"onPull",get:function(){return this._onPull},set:function(t){!t||t instanceof Function||Nr("onPull","function or null"),this._onPull=t}},{key:"height",set:function(t){Q.isInteger(t)||Nr("height","integer"),this.setAttribute("height",t+"px")},get:function(){return parseInt(this.getAttribute("height")||"64",10)}},{key:"thresholdHeight",set:function(t){Q.isInteger(t)||Nr("thresholdHeight","integer"),this.setAttribute("threshold-height",t+"px")},get:function(){return parseInt(this.getAttribute("threshold-height")||"96",10)}},{key:"state",get:function(){return this.getAttribute("state")}},{key:"pullDistance",get:function(){return this._currentTranslation}},{key:"disabled",set:function(t){return Q.toggleAttribute(this,"disabled",t)},get:function(){return this.hasAttribute("disabled")}}],[{key:"observedAttributes",get:function(){return["height"]}},{key:"events",get:function(){return["changestate"]}}]),e}();c.PullHook=Br,customElements.define("ons-pull-hook",Br);var jr={"":"range--*",".range__input":"range--*__input",".range__focus-ring":"range--*__focus-ring"},Hr=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._onMouseDown=t._onMouseDown.bind(t),t._onMouseUp=t._onMouseUp.bind(t),t._onTouchStart=t._onTouchStart.bind(t),t._onTouchEnd=t._onTouchEnd.bind(t),t._onInput=t._update.bind(t),t._onDragstart=t._onDragstart.bind(t),t._onDragend=t._onDragend.bind(t),t}return b(e,No),g(e,[{key:"_compile",value:function(){v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"_compile",this).call(this),this._updateDisabled(this.hasAttribute("disabled"))}},{key:"_update",value:function(){var t=this._input,e=this._focusRing;t.style.backgroundSize=100*this._ratio+"% 2px",e.value=this.value,""===t.min&&"0"===t.value||t.min===t.value?t.setAttribute("_zero",""):t.removeAttribute("_zero"),["min","max"].forEach(function(n){return e[n]=t[n]})}},{key:"_onMouseDown",value:function(t){var e=this;this._input.classList.add("range__input--active"),setImmediate(function(){return e._input.focus()})}},{key:"_onTouchStart",value:function(t){this._onMouseDown()}},{key:"_onMouseUp",value:function(t){this._input.classList.remove("range__input--active")}},{key:"_onTouchEnd",value:function(t){this._onMouseUp(t)}},{key:"_onDragstart",value:function(t){t.consumed=!0,t.gesture.stopPropagation(),this._input.classList.add("range__input--active"),this.addEventListener("drag",this._onDrag)}},{key:"_onDrag",value:function(t){t.stopPropagation()}},{key:"_onDragend",value:function(t){this._input.classList.remove("range__input--active"),this.removeEventListener("drag",this._onDrag)}},{key:"attributeChangedCallback",value:function(t,n,i){"disabled"===t&&this._updateDisabled(i),v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"attributeChangedCallback",this).call(this,t,n,i)}},{key:"_updateDisabled",value:function(t){t?this.classList.add("range--disabled"):this.classList.remove("range--disabled")}},{key:"connectedCallback",value:function(){this._setupListeners(!0)}},{key:"disconnectedCallback",value:function(){this._setupListeners(!1)}},{key:"_setupListeners",value:function(t){var e=(t?"add":"remove")+"EventListener";Q[e](this,"touchstart",this._onTouchStart,{passive:!0}),this[e]("mousedown",this._onMouseDown),this[e]("mouseup",this._onMouseUp),this[e]("touchend",this._onTouchEnd),this[e]("dragstart",this._onDragstart),this[e]("dragend",this._onDragend),this[e]("input",this._onInput)}},{key:"_scheme",get:function(){return jr}},{key:"_template",get:function(){return'\n      <input type="'+this.type+'" class="'+this._defaultClassName+'__input">\n      <input type="range" class="range__focus-ring" tabIndex="-1">\n    '}},{key:"_defaultClassName",get:function(){return"range"}},{key:"type",get:function(){return"range"}},{key:"_focusRing",get:function(){return this.children[1]}},{key:"_ratio",get:function(){var t=""===this._input.min?0:parseInt(this._input.min),e=""===this._input.max?100:parseInt(this._input.max);return(this.value-t)/(e-t)}}],[{key:"observedAttributes",get:function(){return["disabled"].concat(w(No.observedAttributes))}}]),e}();c.Range=Hr,customElements.define("ons-range",Hr);var Rr=function(){function t(){p(this,t),this._queue=[],this._index=0}return g(t,[{key:"animate",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:200,i=(new Date).getTime(),o={},r=!1,a=!1,s=!1,l=Object.keys(e),u={stop:function(){var c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s&&clearTimeout(s);var h=Math.min(1,((new Date).getTime()-i)/n);return l.forEach(function(n){t.style[n]=(1-h)*o[n]+h*e[n]+("opacity"==n?"":"px")}),t.style.transitionDuration="0s",c.stopNext?a=!1:r||(r=!0,a&&a()),u},then:function(t){return a=t,r&&a&&a(),u},speed:function(a){if(P.config.animationsDisabled&&(a=0),!r){s&&clearTimeout(s);var c=((new Date).getTime()-i)/n,h=a*(1-c);l.forEach(function(n){t.style[n]=(1-c)*o[n]+c*e[n]+("opacity"==n?"":"px")}),function(){var e=window.getComputedStyle(t);l.forEach(e.getPropertyValue.bind(e)),e=t.offsetHeight}(),i=t.speedUpTime,n=h,t.style.transitionDuration=n/1e3+"s",l.forEach(function(n){t.style[n]=e[n]+("opacity"==n?"":"px")}),s=setTimeout(u.stop,h)}return u},finish:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50,e=((new Date).getTime()-i)/n;return u.speed(t/(1-e)),u}};if(t.hasAttribute("disabled")||r||P.config.animationsDisabled)return u;var c=window.getComputedStyle(t);return l.forEach(function(t){var e=parseFloat(c.getPropertyValue(t));o[t]=isNaN(e)?0:e}),r||(t.style.transitionProperty=l.join(","),t.style.transitionDuration=n/1e3+"s",l.forEach(function(n){t.style[n]=e[n]+("opacity"==n?"":"px")})),s=setTimeout(u.stop,n),this._onStopAnimations(t,u.stop),u}}]),g(t,[{key:"_onStopAnimations",value:function(t,e){var n=this._queue,i=this._index++;n[t]=n[t]||[],n[t][i]=function(o){return delete n[t][i],n[t]&&0==n[t].length&&delete n[t],e(o)}}},{key:"stopAnimations",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Array.isArray(t))return t.forEach(function(t){e.stopAnimations(t,n)});(this._queue[t]||[]).forEach(function(t){t(n||{})})}},{key:"stopAll",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.stopAnimations(Object.keys(this._queue),t)}},{key:"fade",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;return this.animate(t,{opacity:0},e)}}]),t}(),Fr={"":"ripple--*",".ripple__wave":"ripple--*__wave",".ripple__background":"ripple--*__background"},qr=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._onTap=t._onTap.bind(t),t._onHold=t._onHold.bind(t),t._onDragStart=t._onDragStart.bind(t),t._onRelease=t._onRelease.bind(t),n(t,function(){return t._compile()}),t._animator=new Rr,["color","center","start-radius","background","modifier"].forEach(function(e){t.attributeChangedCallback(e,null,t.getAttribute(e))}),t}return b(e,Pi),g(e,[{key:"_compile",value:function(){this.classList.add("ripple"),this._wave=this.getElementsByClassName("ripple__wave")[0],this._background=this.getElementsByClassName("ripple__background")[0],this._background&&this._wave||(this._wave=Q.create(".ripple__wave"),this._background=Q.create(".ripple__background"),this.appendChild(this._wave),this.appendChild(this._background)),B.initModifier(this,Fr)}},{key:"_getEffectSize",value:function(){if(this.hasAttribute("size")){var t=this.getAttribute("size");if(-1!==["cover","contain"].indexOf(t))return t}return"cover"}},{key:"_calculateCoords",value:function(t){var e=void 0,n=void 0,i=void 0,o=void 0,r=void 0,a=this.getBoundingClientRect(),s=this._getEffectSize(),l=function(){return Q.throw("Ripple invalid state")};return this._center?(e=a.width/2,n=a.height/2,"cover"===s?r=Math.sqrt(e*e+n*n):"contain"===s?r=Math.min(e,n):l()):(e=("number"==typeof t.clientX?t.clientX:t.changedTouches[0].clientX)-a.left,n=("number"==typeof t.clientY?t.clientY:t.changedTouches[0].clientY)-a.top,i=Math.max(n,a.height-n),o=Math.max(e,a.width-e),"cover"===s?r=Math.sqrt(i*i+o*o):"contain"===s?r=Math.min(Math.round(i/2),Math.round(o/2)):l()),{x:e,y:n,r:r}}},{key:"_rippleAnimation",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,n=this._animator,i=this._wave,o=this._background,r=this._minR,a=this._calculateCoords(t),s=a.x,l=a.y,u=a.r;return n.stopAll({stopNext:1}),n.animate(o,{opacity:1},e),Q.extend(i.style,{opacity:1,top:l-r+"px",left:s-r+"px",width:2*r+"px",height:2*r+"px"}),n.animate(i,{top:l-u,left:s-u,height:2*u,width:2*u},e)}},{key:"_updateParent",value:function(){if(!this._parentUpdated&&this.parentNode){"static"===window.getComputedStyle(this.parentNode).getPropertyValue("position")&&(this.parentNode.style.position="relative"),this._parentUpdated=!0}}},{key:"_onTap",value:function(t){var e=this;this.disabled||t.ripple||(t.ripple=!0,this._updateParent(),this._rippleAnimation(t.gesture.srcEvent).then(function(){e._animator.fade(e._wave),e._animator.fade(e._background)}))}},{key:"_onHold",value:function(t){this.disabled||t.ripple||(t.ripple=!0,this._updateParent(),this._holding=this._rippleAnimation(t.gesture.srcEvent,2e3),document.addEventListener("release",this._onRelease))}},{key:"_onRelease",value:function(t){var e=this;this._holding&&!t.ripple&&(t.ripple=!0,this._holding.speed(300).then(function(){e._animator.stopAll({stopNext:!0}),e._animator.fade(e._wave),e._animator.fade(e._background)}),this._holding=!1),document.removeEventListener("release",this._onRelease)}},{key:"_onDragStart",value:function(t){if(this._holding)return this._onRelease(t);-1!=["left","right"].indexOf(t.gesture.direction)&&this._onTap(t)}},{key:"connectedCallback",value:function(){this._parentNode=this.parentNode,P.config.animationsDisabled?this.disabled=!0:(this._parentNode.addEventListener("tap",this._onTap),this._parentNode.addEventListener("hold",this._onHold),this._parentNode.addEventListener("dragstart",this._onDragStart))}},{key:"disconnectedCallback",value:function(){var t=this._parentNode||this.parentNode;t.removeEventListener("tap",this._onTap),t.removeEventListener("hold",this._onHold),t.removeEventListener("dragstart",this._onDragStart)}},{key:"attributeChangedCallback",value:function(t,e,i){var o=this;switch(t){case"class":Q.restoreClass(this,"ripple",Fr);break;case"modifier":B.onModifierChanged(e,i,this,Fr);break;case"start-radius":this._minR=Math.max(0,parseFloat(i)||0);break;case"color":i&&n(this,function(){o._wave.style.background=i,o.hasAttribute("background")||(o._background.style.background=i)});break;case"background":(i||e)&&("none"===i?n(this,function(){o._background.setAttribute("disabled","disabled"),o._background.style.background="transparent"}):n(this,function(){o._background.hasAttribute("disabled")&&o._background.removeAttribute("disabled"),o._background.style.background=i}));break;case"center":"center"===t&&(this._center=null!=i&&"false"!=i)}}},{key:"disabled",set:function(t){return Q.toggleAttribute(this,"disabled",t)},get:function(){return this.hasAttribute("disabled")}}],[{key:"observedAttributes",get:function(){return["start-radius","color","background","center","class","modifier"]}}]),e}();c.Ripple=qr,customElements.define("ons-ripple",qr);var zr=function(t){function e(){return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,Pi),e}();c.Row=zr,customElements.define("ons-row",zr);var Vr={"":"segment--*",".segment__item":"segment--*__item",".segment__input":"segment--*__input",".segment__button":"segment--*__button"},Wr=function(){var t=0;return function(){return"ons-segment-gen-"+t++}}(),Ur=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._segmentId=Wr(),t._tabbar=null,t._onChange=t._onChange.bind(t),t._onTabbarPreChange=t._onTabbarPreChange.bind(t),n(t,function(){t._compile(),setImmediate(function(){return t._lastActiveIndex=t._tabbar?t._tabbar.getActiveTabIndex():t.getActiveButtonIndex()})}),t}return b(e,Pi),g(e,[{key:"_compile",value:function(){N.prepare(this),this.classList.add("segment");for(var t=this.children.length-1;t>=0;t--){var e=this.children[t];e.classList.add("segment__item");var n=Q.findChild(e,".segment__input")||Q.create("input.segment__input");n.type="radio",n.value=t,n.name=n.name||this._segmentId,n.checked=!this.hasAttribute("tabbar-id")&&t===(parseInt(this.getAttribute("active-index"))||0);var i=Q.findChild(e,".segment__button")||Q.create(".segment__button");if(i.parentElement!==e)for(;e.firstChild;)i.appendChild(e.firstChild);e.appendChild(n),e.appendChild(i)}B.initModifier(this,Vr)}},{key:"connectedCallback",value:function(){var t=this;n(this,function(){if(t.hasAttribute("tabbar-id")){var e=Q.findParent(t,"ons-page");t._tabbar=e&&e.querySelector("#"+t.getAttribute("tabbar-id")),t._tabbar&&"ONS-TABBAR"===t._tabbar.tagName||Q.throw("No tabbar with id "+t.getAttribute("tabbar-id")+" was found."),t._tabbar.setAttribute("hide-tabs",""),setImmediate(function(){return t._setChecked(t._tabbar.getActiveTabIndex())}),t._tabbar.addEventListener("prechange",t._onTabbarPreChange)}}),this.addEventListener("change",this._onChange)}},{key:"disconnectedCallback",value:function(){var t=this;n(this,function(){t._tabbar&&(t._tabbar.removeEventListener("prechange",t._onTabbarPreChange),t._tabbar=null)}),this.removeEventListener("change",this._onChange)}},{key:"_setChecked",value:function(t){this.children[t].firstElementChild.checked=!0}},{key:"setActiveButton",value:function(t,e){return this._tabbar?this._tabbar.setActiveTab(t,e):(this._setChecked(t),this._postChange(t),Promise.resolve(t))}},{key:"getActiveButtonIndex",value:function(){for(var t=this.children.length-1;t>=0;t--)if(this.children[t].firstElementChild.checked)return t;return-1}},{key:"_onChange",value:function(t){t.stopPropagation(),this._tabbar?this._tabbar.setActiveTab(this.getActiveButtonIndex(),{reject:!1}):this._postChange(this.getActiveButtonIndex())}},{key:"_onTabbarPreChange",value:function(t){var e=this;setImmediate(function(){t.detail.canceled||(e._setChecked(t.index),e._postChange(t.index))})}},{key:"_postChange",value:function(t){Q.triggerElementEvent(this,"postchange",{index:t,activeIndex:t,lastActiveIndex:this._lastActiveIndex,segmentItem:this.children[t]}),this._lastActiveIndex=t}},{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"class":Q.restoreClass(this,"segment",Vr);break;case"modifier":B.onModifierChanged(e,n,this,Vr)}}},{key:"disabled",set:function(t){return Q.toggleAttribute(this,"disabled",t)},get:function(){return this.hasAttribute("disabled")}}],[{key:"observedAttributes",get:function(){return["class","modifier"]}},{key:"events",get:function(){return["postchange"]}}]),e}();c.Segment=Ur,customElements.define("ons-segment",Ur);var Xr={"":"select-* select--*",".select-input":"select-input--*"},Yr=["autofocus","disabled","form","multiple","name","required","size"],Gr=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n(t,function(){return t._compile()}),t._deriveGetters(),t}return b(e,Pi),g(e,[{key:"attributeChangedCallback",value:function(t,e,i){var o=this;switch(t){case"class":Q.restoreClass(this,"select",Xr);break;case"modifier":B.onModifierChanged(e,i,this,Xr)}Yr.indexOf(t)>=0&&n(this,function(){return o._updateBoundAttributes()})}},{key:"_updateBoundAttributes",value:function(){var t=this;Yr.forEach(function(e){t.hasAttribute(e)?t._select.setAttribute(e,t.getAttribute(e)):t._select.removeAttribute(e)})}},{key:"_compile",value:function(){N.prepare(this),this.classList.add("select");var t=this._select||document.createElement("select");!t.id&&this.hasAttribute("select-id")&&(t.id=this.getAttribute("select-id")),t.classList.add("select-input"),this._select||(Q.arrayFrom(this.childNodes).forEach(function(e){return t.appendChild(e)}),this.appendChild(t)),B.initModifier(this,Xr)}},{key:"_deriveGetters",value:function(){var t=this;["disabled","length","multiple","name","options","selectedIndex","size","value","form","type"].forEach(function(e){Object.defineProperty(t,e,{configurable:!0,enumerable:!0,get:function(){return t._select[e]},set:-1===["form","type"].indexOf(e)?function(i){return n(t,function(){return t._select[e]=i})}:void 0})})}},{key:"add",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;this._select.add(t,e)}},{key:"remove",value:function(t){this._select.remove(t)}},{key:"_select",get:function(){return this.querySelector("select")}}],[{key:"observedAttributes",get:function(){return["modifier","class"].concat(Yr)}}]),e}();c.Select=Gr,customElements.define("ons-select",Gr);var $r={"":"fab--* speed-dial__item--*"},Kr=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._compile(),t._boundOnClick=t._onClick.bind(t),t}return b(e,Pi),g(e,[{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"class":Q.restoreClass(this,"fab fab--mini speed-dial__item",$r);break;case"modifier":B.onModifierChanged(e,n,this,$r),Q.addModifier(this,"mini");break;case"ripple":this._updateRipple()}}},{key:"connectedCallback",value:function(){this.addEventListener("click",this._boundOnClick,!1)}},{key:"disconnectedCallback",value:function(){this.removeEventListener("click",this._boundOnClick,!1)}},{key:"_updateRipple",value:function(){Q.updateRipple(this)}},{key:"_onClick",value:function(t){t.stopPropagation()}},{key:"_compile",value:function(){var t=this;N.prepare(this),"fab fab--mini speed-dial__item".split(/\s+/).forEach(function(e){return t.classList.add(e)}),Q.addModifier(this,"mini"),this._updateRipple(),B.initModifier(this,$r)}}],[{key:"observedAttributes",get:function(){return["modifier","ripple","class"]}}]),e}();c.SpeedDialItem=Kr,customElements.define("ons-speed-dial-item",Kr);var Qr={"":"speed-dial--*"},Jr=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n(t,function(){t._compile()}),t._itemShown=!1,t._boundOnClick=t._onClick.bind(t),t}return b(e,Pi),g(e,[{key:"_compile",value:function(){this.classList.add("speed-dial"),N.prepare(this),this._updateRipple(),B.initModifier(this,Qr),this.hasAttribute("direction")?this._updateDirection(this.getAttribute("direction")):this._updateDirection("up"),this._updatePosition()}},{key:"attributeChangedCallback",value:function(t,e,i){var o=this;switch(t){case"class":Q.restoreClass(this,"speed-dial",Qr);break;case"modifier":B.onModifierChanged(e,i,this,Qr);break;case"ripple":n(this,function(){return o._updateRipple()});break;case"direction":n(this,function(){return o._updateDirection(i)});break;case"position":n(this,function(){return o._updatePosition()})}}},{key:"connectedCallback",value:function(){this.addEventListener("click",this._boundOnClick,!1)}},{key:"disconnectedCallback",value:function(){this.removeEventListener("click",this._boundOnClick,!1)}},{key:"_onClick",value:function(t){return this.onClick?(this.onClick.apply(this),Promise.resolve()):!this.disabled&&this.visible?this.toggleItems():void 0}},{key:"_show",value:function(){return this.inline?Promise.resolve():this.show()}},{key:"_hide",value:function(){var t=this;return new Promise(function(e){t.inline?e():setImmediate(function(){return t.hide().then(e)})})}},{key:"_updateRipple",value:function(){this._fab&&(this.hasAttribute("ripple")?this._fab.setAttribute("ripple",""):this._fab.removeAttribute("ripple"))}},{key:"_updateDirection",value:function(t){for(var e=this.items,n=0;n<e.length;n++)d(e[n],{transitionDelay:25*n+"ms",bottom:"auto",right:"auto",top:"auto",left:"auto"});switch(t){case"up":for(var i=0;i<e.length;i++)e[i].style.bottom=72+56*i+"px",e[i].style.right="8px";break;case"down":for(var o=0;o<e.length;o++)e[o].style.top=72+56*o+"px",e[o].style.left="8px";break;case"left":for(var r=0;r<e.length;r++)e[r].style.top="8px",e[r].style.right=72+56*r+"px";break;case"right":for(var a=0;a<e.length;a++)e[a].style.top="8px",e[a].style.left=72+56*a+"px";break;default:Q.throw("Argument must be one of up, down, left or right.")}}},{key:"_updatePosition",value:function(){var t=this.getAttribute("position");switch(this.classList.remove("fab--top__left","fab--bottom__right","fab--bottom__left","fab--top__right","fab--top__center","fab--bottom__center"),t){case"top right":case"right top":this.classList.add("fab--top__right");break;case"top left":case"left top":this.classList.add("fab--top__left");break;case"bottom right":case"right bottom":this.classList.add("fab--bottom__right");break;case"bottom left":case"left bottom":this.classList.add("fab--bottom__left");break;case"center top":case"top center":this.classList.add("fab--top__center");break;case"center bottom":case"bottom center":this.classList.add("fab--bottom__center")}}},{key:"_getTranslate",value:function(){return(this.getAttribute("position")||"").indexOf("bottom")>=0?"translate3d(0px, -"+(Q.globals.fabOffset||0)+"px, 0px) ":""}},{key:"show",value:function(){return this._fab.show(),d(this,{transform:this._getTranslate}),Promise.resolve()}},{key:"hide",value:function(){var t=this;return this.hideItems().then(function(){return t._fab.hide()})}},{key:"showItems",value:function(){this.hasAttribute("direction")?this._updateDirection(this.getAttribute("direction")):this._updateDirection("up");var t=0;if(!this._itemShown){for(var e=this.items,n=0;n<e.length;n++){var i=25*n;t+=i,d(e[n],{transform:"scale(1)",transitionDelay:i+"ms"})}t+=50,this._itemShown=!0,Q.triggerElementEvent(this,"open")}var o=Q.defer();return setTimeout(o.resolve,t),o.promise}},{key:"hideItems",value:function(){var t=0;if(this._itemShown){for(var e=this.items,n=0;n<e.length;n++){var i=25*(e.length-n);t+=i,d(e[n],{transform:"scale(0)",transitionDelay:i+"ms"})}t+=50,this._itemShown=!1,Q.triggerElementEvent(this,"close")}var o=Q.defer();return setTimeout(o.resolve,t),o.promise}},{key:"isOpen",value:function(){return this._itemShown}},{key:"toggle",value:function(){return this.visible?this.hide():this.show()}},{key:"toggleItems",value:function(){return this.isOpen()?this.hideItems():this.showItems()}},{key:"items",get:function(){return Q.arrayFrom(this.querySelectorAll("ons-speed-dial-item"))}},{key:"_fab",get:function(){return Q.findChild(this,"ons-fab")}},{key:"disabled",set:function(t){return t&&this.hideItems(),Q.arrayFrom(this.children).forEach(function(e){Q.match(e,".fab")&&Q.toggleAttribute(e,"disabled",t)}),Q.toggleAttribute(this,"disabled",t)},get:function(){return this.hasAttribute("disabled")}},{key:"inline",get:function(){return this.hasAttribute("inline")}},{key:"visible",get:function(){return this._fab.visible&&"none"!==this.style.display}}],[{key:"observedAttributes",get:function(){return["class","modifier","ripple","direction","position"]}},{key:"events",get:function(){return["open","close"]}}]),e}();c.SpeedDial=Jr,customElements.define("ons-speed-dial",Jr);var Zr={ready:function(t,e){setImmediate(e)}},ta=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._page=null,t._pageLoader=jt,n(t,function(){Zr.ready(t,function(){var e=t._getPageTarget();e&&t.load(e)})}),t}return b(e,Pi),g(e,[{key:"connectedCallback",value:function(){Q.match(this.parentNode,"ons-splitter")||Q.throw('"ons-splitter-content" must have "ons-splitter" as parent')}},{key:"_getPageTarget",value:function(){return this._page||this.getAttribute("page")}},{key:"disconnectedCallback",value:function(){}},{key:"attributeChangedCallback",value:function(t,e,n){}},{key:"load",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._page=t;var i=n.callback||function(){};return new Promise(function(n){var o=e._content||null;e._pageLoader.load({page:t,parent:e},function(t){o&&(e._pageLoader.unload(o),o=null),setImmediate(function(){return e._show()}),i(t),n(t)})})}},{key:"_show",value:function(){this._content&&this._content._show()}},{key:"_hide",value:function(){this._content&&this._content._hide()}},{key:"_destroy",value:function(){this._content&&this._pageLoader.unload(this._content),this.remove()}},{key:"page",get:function(){return this._page},set:function(t){this._page=t}},{key:"_content",get:function(){return this.children[0]}},{key:"pageLoader",get:function(){return this._pageLoader},set:function(t){t instanceof Bt||Q.throwPageLoader(),this._pageLoader=t}}],[{key:"observedAttributes",get:function(){return[]}},{key:"rewritables",get:function(){return Zr}}]),e}();c.SplitterContent=ta,customElements.define("ons-splitter-content",ta);var ea=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._boundOnClick=t._onClick.bind(t),n(t,function(){t.parentNode._sides.every(function(t){return"split"===t.mode})&&t.setAttribute("style","display: none !important")}),t}return b(e,Pi),g(e,[{key:"_onClick",value:function(t){this.onClick instanceof Function?this.onClick():Q.match(this.parentNode,"ons-splitter")&&this.parentNode._sides.forEach(function(t){return t.close("left").catch(function(){})}),t.stopPropagation()}},{key:"attributeChangedCallback",value:function(t,e,n){}},{key:"connectedCallback",value:function(){this.addEventListener("click",this._boundOnClick),Q.iosMaskScrollFix(this,!0)}},{key:"disconnectedCallback",value:function(){this.removeEventListener("click",this._boundOnClick),Q.iosMaskScrollFix(this,!1)}}],[{key:"observedAttributes",get:function(){return[]}}]),e}();c.SplitterMask=ea,customElements.define("ons-splitter-mask",ea);var na=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"cubic-bezier(.1, .7, .1, 1)":n,o=t.duration,r=void 0===o?.3:o,a=t.delay,s=void 0===a?0:a;return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,duration:r,delay:s}))}return b(e,Ti),g(e,[{key:"updateOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Q.extend(this,{timing:this.timing,duration:this.duration,delay:this.delay},t)}},{key:"activate",value:function(t){var e=this,i=t.parentNode;n(i,function(){e._side=t,e._oppositeSide=i.right!==t&&i.right||i.left!==t&&i.left,e._content=i.content,e._mask=i.mask})}},{key:"deactivate",value:function(){this.clearTransition(),this._mask&&this.clearMask(),this._content=this._side=this._oppositeSide=this._mask=null}},{key:"clearTransition",value:function(){var t=this;"side mask content".split(/\s+/).forEach(function(e){return t["_"+e]&&d.clear(t["_"+e],"transform transition")})}},{key:"clearMask",value:function(){this._oppositeSide&&"split"!==this._oppositeSide.mode&&this._oppositeSide.isOpen||(this._mask.style.opacity="",this._mask.style.display="none")}},{key:"translate",value:function(t){}},{key:"open",value:function(t){t()}},{key:"close",value:function(t){t()}},{key:"minus",get:function(){return"right"===this._side.side?"-":""}}]),e}(),ia=function(t){function e(){return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,na),g(e,[{key:"translate",value:function(t){this._mask.style.display="block",nt(this._side).queue({transform:"translate3d("+(this.minus+t)+"px, 0, 0)"}).play()}},{key:"open",value:function(t){nt.runAll(nt(this._side).wait(this.delay).queue({transform:"translate3d("+this.minus+"100%, 0, 0)"},this.def).queue(function(e){e(),t&&t()}),nt(this._mask).wait(this.delay).queue({display:"block"}).queue({opacity:"1"},{duration:this.duration,timing:"linear"}))}},{key:"close",value:function(t){nt.runAll(nt(this._side).wait(this.delay).queue({transform:"translate3d(0, 0, 0)"},this.def).queue(function(e){t&&t(),e()}),nt(this._mask).wait(this.delay).queue({opacity:"0"},{duration:this.duration,timing:"linear"}).queue({display:"none"}))}}]),e}(),oa={default:ia,overlay:ia,push:function(t){function e(){return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,na),g(e,[{key:"_getSlidingElements",value:function(){var t=[this._side,this._content];return this._oppositeSide&&"split"===this._oppositeSide.mode&&t.push(this._oppositeSide),t}},{key:"translate",value:function(t){this._slidingElements||(this._slidingElements=this._getSlidingElements()),this._mask.style.display="block",nt(this._slidingElements).queue({transform:"translate3d("+(this.minus+t)+"px, 0, 0)"}).play()}},{key:"open",value:function(t){var e=this,n=this._side.offsetWidth;this._slidingElements=this._getSlidingElements(),nt.runAll(nt(this._slidingElements).wait(this.delay).queue({transform:"translate3d("+(this.minus+n)+"px, 0, 0)"},this.def).queue(function(n){e._slidingElements=null,n(),t&&t()}),nt(this._mask).wait(this.delay).queue({display:"block"}))}},{key:"close",value:function(t){var n=this;this._slidingElements=this._getSlidingElements(),nt.runAll(nt(this._slidingElements).wait(this.delay).queue({transform:"translate3d(0, 0, 0)"},this.def).queue(function(i){n._slidingElements=null,v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"clearTransition",n).call(n),t&&t(),i()}),nt(this._mask).wait(this.delay).queue({display:"none"}))}}]),e}(),reveal:function(t){function e(){return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,na),g(e,[{key:"_getSlidingElements",value:function(){var t=[this._content,this._mask];return this._oppositeSide&&"split"===this._oppositeSide.mode&&t.push(this._oppositeSide),t}},{key:"activate",value:function(t){v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"activate",this).call(this,t),"collapse"===t.mode&&this._setStyles(t)}},{key:"deactivate",value:function(){this._side&&this._unsetStyles(this._side),v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"deactivate",this).call(this)}},{key:"_setStyles",value:function(t){d(t,{left:"right"===t.side?"auto":0,right:"right"===t.side?0:"auto",zIndex:0,backgroundColor:"black",transform:this._generateBehindPageStyle(0).container.transform,display:"none"});var e=t.parentElement;n(e,function(){return e.content&&d(e.content,{boxShadow:"0 0 12px 0 rgba(0, 0, 0, 0.2)"})})}},{key:"_unsetStyles",value:function(t){d.clear(t,"left right zIndex backgroundColor display"),t._content&&(t._content.style.opacity=""),this._oppositeSide&&"split"!==this._oppositeSide.mode||t.parentElement.content&&d.clear(t.parentElement.content,"boxShadow")}},{key:"_generateBehindPageStyle",value:function(t){var e=this.maxWidth,n=(t-e)/e*10;return{content:{opacity:1+(n=isNaN(n)?0:Math.max(Math.min(n,0),-10))/100},container:{transform:"translate3d("+(this.minus?-1:1)*n+"%, 0, 0)"}}}},{key:"translate",value:function(t){this._side.style.display="",this._side.style.zIndex=1,this.maxWidth=this.maxWidth||this._getMaxWidth();var e=this._generateBehindPageStyle(Math.min(t,this.maxWidth));this._slidingElements||(this._slidingElements=this._getSlidingElements()),this._mask.style.display="block",nt.runAll(nt(this._slidingElements).queue({transform:"translate3d("+(this.minus+t)+"px, 0, 0)"}),nt(this._side._content).queue(e.content),nt(this._side).queue(e.container))}},{key:"open",value:function(t){var e=this;this._side.style.display="",this._side.style.zIndex=1,this.maxWidth=this.maxWidth||this._getMaxWidth();var n=this._generateBehindPageStyle(this.maxWidth);this._slidingElements=this._getSlidingElements(),setTimeout(function(){nt.runAll(nt(e._slidingElements).wait(e.delay).queue({transform:"translate3d("+(e.minus+e.maxWidth)+"px, 0, 0)"},e.def),nt(e._mask).wait(e.delay).queue({display:"block"}),nt(e._side._content).wait(e.delay).queue(n.content,e.def),nt(e._side).wait(e.delay).queue(n.container,e.def).queue(function(n){e._slidingElements=null,n(),t&&t()}))},1e3/60)}},{key:"close",value:function(t){var e=this,n=this._generateBehindPageStyle(0);this._slidingElements=this._getSlidingElements(),nt.runAll(nt(this._slidingElements).wait(this.delay).queue({transform:"translate3d(0, 0, 0)"},this.def),nt(this._mask).wait(this.delay).queue({display:"none"}),nt(this._side._content).wait(this.delay).queue(n.content,this.def),nt(this._side).wait(this.delay).queue(n.container,this.def).queue(function(n){e._slidingElements=null,e._side.style.zIndex=0,e._side.style.display="none",e._side._content.style.opacity="",t&&t(),n()}))}},{key:"_getMaxWidth",value:function(){return this._side.offsetWidth}}]),e}()},ra=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._onModeChange=t._onModeChange.bind(t),n(t,function(){!t.mask&&t.appendChild(document.createElement("ons-splitter-mask")),t._layout()}),t}return b(e,Pi),g(e,[{key:"_getSide",value:function(t){return Q.findChild(this,function(e){return Q.match(e,"ons-splitter-side")&&e.getAttribute("side")===t})}},{key:"_onDeviceBackButton",value:function(t){this._sides.some(function(t){return!!t.isOpen&&t.close()})||t.callParentHandler()}},{key:"_onModeChange",value:function(t){var e=this;t.target.parentNode&&n(this,function(){e._layout()})}},{key:"_layout",value:function(){var t=this;this._sides.forEach(function(e){t.content&&(t.content.style[e.side]="split"===e.mode?e.style.width:0)})}},{key:"left",get:function(){return this._getSide("left")}},{key:"right",get:function(){return this._getSide("right")}},{key:"side",get:function(){return Q.findChild(this,"ons-splitter-side")}},{key:"_sides",get:function(){return[this.left,this.right].filter(function(t){return t})}},{key:"content",get:function(){return Q.findChild(this,"ons-splitter-content")}},{key:"topPage",get:function(){return this.content._content}},{key:"mask",get:function(){return Q.findChild(this,"ons-splitter-mask")}},{key:"onDeviceBackButton",get:function(){return this._backButtonHandler},set:function(t){this._backButtonHandler&&this._backButtonHandler.destroy(),this._backButtonHandler=R.createHandler(this,t)}}]),g(e,[{key:"connectedCallback",value:function(){this.onDeviceBackButton=this._onDeviceBackButton.bind(this),this.addEventListener("modechange",this._onModeChange,!1)}},{key:"disconnectedCallback",value:function(){this._backButtonHandler.destroy(),this._backButtonHandler=null,this.removeEventListener("modechange",this._onModeChange,!1)}},{key:"attributeChangedCallback",value:function(t,e,n){}},{key:"_show",value:function(){Q.propagateAction(this,"_show")}},{key:"_hide",value:function(){Q.propagateAction(this,"_hide")}},{key:"_destroy",value:function(){Q.propagateAction(this,"_destroy"),this.remove()}}],[{key:"registerAnimator",value:function(t,e){e instanceof SplitterAnimator||Q.throwAnimator("Splitter"),oa[t]=e}},{key:"SplitterAnimator",get:function(){return SplitterAnimator}},{key:"animators",get:function(){return oa}}]),e}();c.Splitter=ra,customElements.define("ons-splitter",ra);var aa="closed",sa={ready:function(t,e){setImmediate(e)}},la=function(){function t(e,n){p(this,t),this._element=e,this._onChange=this._onChange.bind(this),n&&this.changeTarget(n)}return g(t,[{key:"changeTarget",value:function(t){this.disable(),this._target=t,t&&(this._orientation=-1!==["portrait","landscape"].indexOf(t),this.activate())}},{key:"_match",value:function(t){return this._orientation?this._target===(t.isPortrait?"portrait":"landscape"):t.matches}},{key:"_onChange",value:function(t){this._element._updateMode(this._match(t)?"collapse":"split")}},{key:"activate",value:function(){this._orientation?(Ot.on("change",this._onChange),this._onChange({isPortrait:Ot.isPortrait()})):(this._queryResult=window.matchMedia(this._target),this._queryResult.addListener(this._onChange),this._onChange(this._queryResult))}},{key:"disable",value:function(){this._orientation?Ot.off("change",this._onChange):this._queryResult&&(this._queryResult.removeListener(this._onChange),this._queryResult=null)}}]),t}(),ua=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._page=null,t._state=aa,t._lock=new Nt,t._pageLoader=jt,t._collapseDetection=new la(t),t._animatorFactory=new O({animators:ra.animators,baseClass:na,baseClassName:"SplitterAnimator",defaultAnimation:t.getAttribute("animation")}),n(t,function(){t.attributeChangedCallback("width"),t.hasAttribute("side")||t.setAttribute("side","left"),sa.ready(t,function(){var e=t._page||t.getAttribute("page");e&&t.load(e)})}),t}return b(e,Pi),g(e,[{key:"connectedCallback",value:function(){var t=this;Q.match(this.parentNode,"ons-splitter")||Q.throw("Parent must be an ons-splitter element"),this._swipe=new Qo({element:this,elementHandler:this.parentElement,swipeMax:function(){t._onSwipe&&t._onSwipe(1,t._animationOpt),t.open()},swipeMid:function(e,n){t._onSwipe&&t._onSwipe(e/n),t._animator.translate(e)},swipeMin:function(){t._onSwipe&&t._onSwipe(0,t._animationOpt),t.close()},getThreshold:function(){return Math.max(0,Math.min(1,parseFloat(t.getAttribute("open-threshold"))||.3))},getSide:function(){return t.side},isInitialState:function(){var e=t._state===aa;return t._state="changing",e},ignoreSwipe:function(e,n){var i=t.isOpen,o=Math.max(0,parseInt(t.getAttribute("swipe-target-width"),10)||0);return"split"===t._mode||t._lock.isLocked()||t._isOtherSideOpen()||!function(e){return"left"===t.side?"left"===e&&i||"right"===e&&!i:"left"===e&&!i||"right"===e&&i}(e.gesture.direction)||!i&&0!==o&&n>o}}),this.attributeChangedCallback("swipeable"),n(this,function(){t.constructor.observedAttributes.forEach(function(e){return t.attributeChangedCallback(e,null,t.getAttribute(e))})})}},{key:"disconnectedCallback",value:function(){this._swipe&&this._swipe.dispose(),this._animator=this._animationOpt=this._swipe=null}},{key:"attributeChangedCallback",value:function(t,e,n){switch(t){case"swipeable":this._swipe&&this._swipe.update();break;case"width":n=this.getAttribute("width"),this.style.width=/^\d+(px|%)$/.test(n)?n:"80%";break;default:this[Q.camelize("_update-"+t)](n)}}},{key:"_emitEvent",value:function(t){if("pre"!==t.slice(0,3))return Q.triggerElementEvent(this,t,{side:this});var e=!1;return Q.triggerElementEvent(this,t,{side:this,cancel:function(){return e=!0}}),e}},{key:"_isOtherSideOpen",value:function(){var t=this;return!!Q.findChild(this.parentElement,function(e){return e instanceof t.constructor&&e!==t&&"collapse"===e._mode&&e.isOpen})}},{key:"_updateCollapse",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getAttribute("collapse");return null===t||"split"===t?(this._collapseDetection.disable(),this._updateMode("split")):""===t||"collapse"===t?(this._collapseDetection.disable(),this._updateMode("collapse")):void this._collapseDetection.changeTarget(t)}},{key:"_updateMode",value:function(t){t!==this._mode&&(this._mode=t,this.setAttribute("mode",t),"split"===t?(this._animator&&this._animator.deactivate(),this._state=aa):(this._animator&&this._animator.activate(this),"open"===this._state&&this._animator.open()),Q.triggerElementEvent(this,"modechange",{side:this,mode:t}))}},{key:"_updateAnimation",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getAttribute("animation");this.parentNode&&(this._animator&&this._animator.deactivate(),this._animator=this._animatorFactory.newAnimator({animation:t}),this._animator.activate(this),this._animationOpt={timing:this._animator.duration,duration:this._animator.duration})}},{key:"_updateAnimationOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getAttribute("animation-options");this._animator.updateOptions(O.parseAnimationOptionsString(t))}},{key:"open",value:function(t){return this.toggle(t,!0)}},{key:"close",value:function(t){return this.toggle(t,!1)}},{key:"toggle",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments[1],i="boolean"==typeof n?n:!this.isOpen,o=i?"open":"close",r=i?"open":aa;if("split"===this._mode)return Promise.resolve(!1);if(this._state===r)return Promise.resolve(this);if(this._lock.isLocked())return Promise.reject("Another splitter-side action is already running.");if(i&&this._isOtherSideOpen())return Promise.reject("Another menu is already open.");if(this._emitEvent("pre"+o))return Promise.reject("Canceled in pre"+o+" event.");var a=this._lock.lock();return this._state="changing",e.animation&&this._updateAnimation(e.animation),new Promise(function(n){t._animator[o](function(){Q.iosPageScrollFix(i),t._state=r,a(),t._emitEvent("post"+o),e.callback instanceof Function&&e.callback(t),n(t)})})}},{key:"load",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._page=t;var i=n.callback||function(){};return new Promise(function(n){var o=e._content||null;e._pageLoader.load({page:t,parent:e},function(t){o&&(e._pageLoader.unload(o),o=null),setImmediate(function(){return e._show()}),i(t),n(t)})})}},{key:"_show",value:function(){this._content&&this._content._show()}},{key:"_hide",value:function(){this._content&&this._content._hide()}},{key:"_destroy",value:function(){this._content&&this._pageLoader.unload(this._content),this.remove()}},{key:"side",get:function(){return"right"===this.getAttribute("side")?"right":"left"}},{key:"page",get:function(){return this._page},set:function(t){this._page=t}},{key:"_content",get:function(){return this.children[0]}},{key:"pageLoader",get:function(){return this._pageLoader},set:function(t){t instanceof Bt||Q.throwPageLoader(),this._pageLoader=t}},{key:"mode",get:function(){return this._mode}},{key:"onSwipe",get:function(){return this._onSwipe},set:function(t){!t||t instanceof Function||Q.throw('"onSwipe" must be a function'),this._onSwipe=t}},{key:"isOpen",get:function(){return"collapse"===this._mode&&this._state!==aa}}],[{key:"observedAttributes",get:function(){return["animation","width","collapse","swipeable","animation-options"]}},{key:"events",get:function(){return["preopen","postopen","preclose","postclose","modechange"]}},{key:"rewritables",get:function(){return sa}}]),e}();c.SplitterSide=ua,customElements.define("ons-splitter-side",ua);var ca={"":"switch--*",".switch__input":"switch--*__input",".switch__handle":"switch--*__handle",".switch__toggle":"switch--*__toggle"},ha={ios:[1,21],material:[0,16]},da=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return n(t,function(){t.attributeChangedCallback("modifier",null,t.getAttribute("modifier"))}),t._onChange=t._onChange.bind(t),t._onRelease=t._onRelease.bind(t),t._lastTimeStamp=0,t}return b(e,Ho),g(e,[{key:"_getPosition",value:function(t){var e=this._locations;return Math.min(e[1],Math.max(e[0],this._startX+t.gesture.deltaX))}},{key:"_emitChangeEvent",value:function(){Q.triggerElementEvent(this,"change",{value:this.checked,switch:this,isInteractive:!0})}},{key:"_onChange",value:function(t){t&&t.stopPropagation&&t.stopPropagation(),this._emitChangeEvent()}},{key:"_onClick",value:function(t){(t.target.classList.contains(this.defaultElementClass+"__touch")||t.timeStamp-this._lastTimeStamp<50)&&t.preventDefault(),this._lastTimeStamp=t.timeStamp}},{key:"_onHold",value:function(t){this.disabled||(B.addModifier(this,"active"),document.addEventListener("release",this._onRelease))}},{key:"_onDragStart",value:function(t){this.disabled||-1===["left","right"].indexOf(t.gesture.direction)?B.removeModifier(this,"active"):(t.consumed=!0,B.addModifier(this,"active"),this._startX=this._locations[this.checked?1:0],this.addEventListener("drag",this._onDrag),document.addEventListener("release",this._onRelease))}},{key:"_onDrag",value:function(t){t.stopPropagation(),this._handle.style.left=this._getPosition(t)+"px"}},{key:"_onRelease",value:function(t){var e=this._locations,n=this._getPosition(t),i=this.checked;this.checked=n>=(e[0]+e[1])/2,this.checked!==i&&this._emitChangeEvent(),this.removeEventListener("drag",this._onDrag),document.removeEventListener("release",this._onRelease),this._handle.style.left="",B.removeModifier(this,"active")}},{key:"click",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.disabled||(this.checked=!this.checked,this._emitChangeEvent(),this._lastTimeStamp=t.timeStamp||0)}},{key:"connectedCallback",value:function(){var t=this;n(this,function(){t._input.addEventListener("change",t._onChange)}),this.addEventListener("dragstart",this._onDragStart),this.addEventListener("hold",this._onHold),this.addEventListener("tap",this.click),this.addEventListener("click",this._onClick),this._gestureDetector=new st(this,{dragMinDistance:1,holdTimeout:251,passive:!0})}},{key:"disconnectedCallback",value:function(){var t=this;n(this,function(){t._input.removeEventListener("change",t._onChange)}),this.removeEventListener("dragstart",this._onDragStart),this.removeEventListener("hold",this._onHold),this.removeEventListener("tap",this.click),this.removeEventListener("click",this._onClick),this._gestureDetector&&this._gestureDetector.dispose()}},{key:"attributeChangedCallback",value:function(t,n,i){if("modifier"===t){var o=-1!==(i||"").indexOf("material");this._locations=ha[o?"material":"ios"]}v(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"attributeChangedCallback",this).call(this,t,n,i)}},{key:"_scheme",get:function(){return ca}},{key:"_defaultClassName",get:function(){return"switch"}},{key:"_template",get:function(){return'\n      <input type="'+this.type+'" class="'+this._defaultClassName+'__input">\n      <div class="'+this._defaultClassName+'__toggle">\n        <div class="'+this._defaultClassName+'__handle">\n          <div class="'+this._defaultClassName+'__touch"></div>\n        </div>\n      </div>\n    '}},{key:"type",get:function(){return"checkbox"}},{key:"_handle",get:function(){return this.querySelector("."+this._defaultClassName+"__handle")}},{key:"checkbox",get:function(){return this._input}}],[{key:"observedAttributes",get:function(){return[].concat(w(v(e.__proto__||Object.getPrototypeOf(e),"observedAttributes",this)),["modifier"])}}]),e}();c.Switch=da,customElements.define("ons-switch",da);var fa={".tabbar__content":"tabbar--*__content",".tabbar__border":"tabbar--*__border",".tabbar":"tabbar--*"},pa={ready:function(t,e){e()}},ga=function(t,e,n){return(1-n)*t+n*e},ma=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._loadInactive=Q.defer(),n(t,function(){return t._compile()}),t}return b(e,Pi),g(e,[{key:"connectedCallback",value:function(){var t=this;this._swiper||(this._swiper=new ro({getElement:function(){return t._contentElement},getInitialIndex:function(){return t.getAttribute("activeIndex")||t.getAttribute("active-index")},getAutoScrollRatio:this._getAutoScrollRatio.bind(this),getBubbleWidth:function(){return parseInt(t.getAttribute("ignore-edge-width")||25,10)},isAutoScrollable:function(){return!0},preChangeHook:this._onPreChange.bind(this),postChangeHook:this._onPostChange.bind(this),refreshHook:this._onRefresh.bind(this),scrollHook:this._onScroll.bind(this)}),n(this,function(){t._tabbarBorder=Q.findChild(t._tabbarElement,".tabbar__border"),t._swiper.init({swipeable:t.hasAttribute("swipeable")})})),n(this,function(){t._updatePosition(),Q.findParent(t,"ons-page",function(t){return t===document.body})||t._show()})}},{key:"disconnectedCallback",value:function(){this._swiper&&this._swiper.initialized&&(this._swiper.dispose(),this._swiper=null,this._tabbarBorder=null,this._tabsRect=null)}},{key:"_normalizeEvent",value:function(t){return _({},t,{index:t.activeIndex,tabItem:this.tabs[t.activeIndex]})}},{key:"_onPostChange",value:function(t){t=this._normalizeEvent(t),Q.triggerElementEvent(this,"postchange",t);var e=t.tabItem.pageElement;e&&e._show()}},{key:"_onPreChange",value:function(t){if(t=this._normalizeEvent(t),t.cancel=function(){return t.canceled=!0},Q.triggerElementEvent(this,"prechange",t),!t.canceled){var e=t,n=e.activeIndex,i=e.lastActiveIndex,o=this.tabs;if(o[n].setActive(!0),i>=0){var r=o[i];r.setActive(!1),r.pageElement&&r.pageElement._hide()}}return t.canceled}},{key:"_onScroll",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._tabbarBorder)if(this._tabbarBorder.style.transition="all "+(e.duration||0)+"s "+(e.timing||""),this._autogrow&&this._tabsRect.length>0){var n=Math.floor(t),i=Math.ceil(t),o=t%1;this._tabbarBorder.style.width=ga(this._tabsRect[n].width,this._tabsRect[i].width,o)+"px",this._tabbarBorder.style.transform="translate3d("+ga(this._tabsRect[n].left,this._tabsRect[i].left,o)+"px, 0, 0)"}else this._tabbarBorder.style.transform="translate3d("+100*t+"%, 0, 0)";this._onSwipe&&this._onSwipe(t,e)}},{key:"_onRefresh",value:function(){if(this._autogrow=Q.hasModifier(this,"autogrow"),this._tabsRect=this.tabs.map(function(t){return t.getBoundingClientRect()}),this._tabbarBorder){this._tabbarBorder.style.display=this.hasAttribute("tab-border")||Q.hasModifier(this,"material")?"block":"none";var t=this.getActiveTabIndex();this._tabsRect.length>0&&t>=0&&(this._tabbarBorder.style.width=this._tabsRect[t].width+"px")}}},{key:"_getAutoScrollRatio",value:function(t,e,n){var i=n/300*(t?-1:1);return Math.min(1,Math.max(0,.6+e*i))}},{key:"_compile",value:function(){N.prepare(this);var t=this._contentElement||Q.create(".tabbar__content");t.classList.add("ons-tabbar__content");var e=this._tabbarElement||Q.create(".tabbar");if(e.classList.add("ons-tabbar__footer"),!e.parentNode)for(;this.firstChild;)e.appendChild(this.firstChild);var n=Number(this.getAttribute("activeIndex"));e.children.length>n&&!Q.findChild(e,"[active]")&&e.children[n].setAttribute("active",""),this._tabbarBorder=Q.findChild(e,".tabbar__border")||Q.create(".tabbar__border"),e.appendChild(this._tabbarBorder),e.classList.add("ons-swiper-tabbar"),!t.children[0]&&t.appendChild(document.createElement("div")),!t.children[1]&&t.appendChild(document.createElement("div")),t.appendChild=t.appendChild.bind(t.children[0]),t.insertBefore=t.insertBefore.bind(t.children[0]),this.appendChild(t),this.appendChild(e),B.initModifier(this,fa)}},{key:"_updatePosition",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getAttribute("position"),i=this._top="top"===e||"auto"===e&&Q.hasModifier(this,"material"),o=i?Q.addModifier:Q.removeModifier;o(this,"top");var r=Q.findParent(this,"ons-page");r&&n(r,function(){var e=0;r.children[0]&&Q.match(r.children[0],"ons-toolbar")&&(o(r.children[0],"noshadow"),e=1);var n=r._getContentElement(),a=window.getComputedStyle(r._getContentElement(),null);t.style.top=i?parseInt(a.getPropertyValue("padding-top"),10)-e+"px":"",n.style.top=a.top,n.style.top=""}),P.autoStatusBarFill(function(){var e=Q.findParent(t,function(t){return t.hasAttribute("status-bar-fill")});Q.toggleAttribute(t,"status-bar-fill",i&&!e)})}},{key:"setActiveTab",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=this.getActiveTabIndex(),o=this.tabs[i],r=this.tabs[t];if(!r)return Promise.reject("Specified index does not match any tab.");if(t===i)return Q.triggerElementEvent(this,"reactive",{index:t,activeIndex:t,tabItem:r}),Promise.resolve(r.pageElement);var a=r.pageElement;return(a?Promise.resolve(a):r.loaded).then(function(i){return e._swiper.setActiveIndex(t,_({reject:!0},n,{animation:o&&i?n.animation||e.getAttribute("animation"):"none",animationOptions:Q.extend({duration:.3,timing:"cubic-bezier(.4, .7, .5, 1)"},e.hasAttribute("animation-options")?Q.animationOptionsParse(e.getAttribute("animation-options")):{},n.animationOptions||{})})).then(function(){return n.callback instanceof Function&&n.callback(i),i})})}},{key:"setTabbarVisibility",value:function(t){var e=this;n(this,function(){e._contentElement.style[e._top?"top":"bottom"]=t?"":"0px",e._tabbarElement.style.display=t?"":"none",t&&e._onRefresh()})}},{key:"show",value:function(){this.setTabbarVisibility(!0)}},{key:"hide",value:function(){this.setTabbarVisibility(!1)}},{key:"getActiveTabIndex",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.tabs,e=0;e<t.length;e++)if(t[e]&&"ONS-TAB"===t[e].tagName&&t[e].isActive())return e;return-1}},{key:"_show",value:function(){var t=this;this._swiper.show(),setImmediate(function(){var e=t.tabs,n=t.getActiveTabIndex(e);t._loadInactive.resolve(),e.length>0&&n>=0&&e[n].loaded.then(function(t){return t&&setImmediate(function(){return t._show()})})})}},{key:"_hide",value:function(){this._swiper.hide();var t=this.topPage;t&&t._hide()}},{key:"_destroy",value:function(){this.tabs.forEach(function(t){return t.remove()}),this.remove()}},{key:"attributeChangedCallback",value:function(t,e,n){if("modifier"===t){B.onModifierChanged(e,n,this,fa);var i=function(t){return/(^|\s+)top($|\s+)/i.test(t)};i(e)!==i(n)&&this._updatePosition()}else"position"===t?Q.isAttached(this)&&this._updatePosition():"swipeable"===t?this._swiper&&this._swiper.updateSwipeable(this.hasAttribute("swipeable")):"hide-tabs"===t&&this.setTabbarVisibility(!this.hasAttribute("hide-tabs")||"false"===n)}},{key:"_tabbarElement",get:function(){return Q.findChild(this,".tabbar")}},{key:"_contentElement",get:function(){return Q.findChild(this,".tabbar__content")}},{key:"_targetElement",get:function(){var t=this._contentElement;return t&&t.children[0]||null}},{key:"topPage",get:function(){var t=this.tabs,e=this.getActiveTabIndex();return t[e]?t[e].pageElement||this.pages[0]||null:null}},{key:"pages",get:function(){return Q.arrayFrom(this._targetElement.children)}},{key:"tabs",get:function(){return Array.prototype.filter.call(this._tabbarElement.children,function(t){return"ONS-TAB"===t.tagName})}},{key:"visible",get:function(){return"none"!==this._tabbarElement.style.display}},{key:"swipeable",get:function(){return this.hasAttribute("swipeable")},set:function(t){return Q.toggleAttribute(this,"swipeable",t)}},{key:"onSwipe",get:function(){return this._onSwipe},set:function(t){!t||t instanceof Function||Q.throw('"onSwipe" must be a function'),this._onSwipe=t}}],[{key:"observedAttributes",get:function(){return["modifier","position","swipeable","tab-border","hide-tabs"]}},{key:"rewritables",get:function(){return pa}},{key:"events",get:function(){return["prechange","postchange","reactive"]}}]),e}();c.Tabbar=ma,customElements.define("ons-tabbar",ma);var _a={"":"tabbar--*__item",".tabbar__button":"tabbar--*__button"},va=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return["label","icon","badge"].some(t.hasAttribute.bind(t))?t._compile():n(t,function(){return t._compile()}),t._pageLoader=jt,t._onClick=t._onClick.bind(t),t}return b(e,Pi),g(e,[{key:"_compile",value:function(){if(N.prepare(this),this.classList.add("tabbar__item"),!this._button){for(var t=Q.create("button.tabbar__button");this.childNodes[0];)t.appendChild(this.childNodes[0]);var e=Q.create("input",{display:"none"});e.type="radio",this.appendChild(e),this.appendChild(t),this._updateButtonContent(),B.initModifier(this,_a),this._updateRipple()}}},{key:"_updateRipple",value:function(){this._button&&Q.updateRipple(this._button,this.hasAttribute("ripple"))}},{key:"_updateButtonContent",value:function(){var t=this,e=this._button,n=this._icon;if(this.hasAttribute("icon")){var i=(n=n||Q.createElement('<div class="tabbar__icon"><ons-icon></ons-icon></div>')).children[0],o=function(e){return function(){return i.attributeChangedCallback("icon",e,t.getAttribute("icon"))}}(i.getAttribute("icon"));i.setAttribute("icon",this.getAttribute(this.isActive()?"active-icon":"icon")),n.parentElement!==e&&e.insertBefore(n,e.firstChild),i.attributeChangedCallback instanceof Function?o():setImmediate(function(){return i.attributeChangedCallback instanceof Function&&o()})}else n&&n.remove();["label","badge"].forEach(function(n,i){var o=t.querySelector(".tabbar__"+n);t.hasAttribute(n)?((o=o||Q.create(".tabbar__"+n+("badge"===n?" notification":""))).textContent=t.getAttribute(n),o.parentElement!==e&&e.appendChild(o)):o&&o.remove()})}},{key:"_onClick",value:function(){this.onClick instanceof Function?this.onClick():this._tabbar.setActiveTab(this.index,{reject:!1})}},{key:"setActive",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._input.checked=t,this.classList.toggle("active",t),Q.toggleAttribute(this,"active",t),this.hasAttribute("icon")&&this.hasAttribute("active-icon")&&this._icon.children[0].setAttribute("icon",this.getAttribute(t?"active-icon":"icon"))}},{key:"_loadPageElement",value:function(t,e){var n=this;return this._hasLoaded=!0,new Promise(function(i){n._pageLoader.load({parent:t,page:e},function(e){t.replaceChild(e,t.children[n.index]),n._loadedPage=e,i(e)})})}},{key:"isActive",value:function(){return this.classList.contains("active")}},{key:"disconnectedCallback",value:function(){this.removeEventListener("click",this._onClick,!1),this._loadedPage&&(this._hasLoaded=!1,this.loaded=null)}},{key:"connectedCallback",value:function(){var t=this;if(this.addEventListener("click",this._onClick,!1),Q.isAttached(this)&&!this.loaded){var e=Q.defer();this.loaded=e.promise,n(this,function(){var n=t.index,i=t._tabbar;i||Q.throw("Tab elements must be children of Tabbar"),i.hasAttribute("modifier")&&Q.addModifier(t,i.getAttribute("modifier")),t._hasLoaded||(t.hasAttribute("active")&&(t.setActive(!0),i.setAttribute("activeIndex",n)),n===i.tabs.length-1&&(i._onRefresh(),setImmediate(function(){return i._onRefresh()})),ma.rewritables.ready(i,function(){var o=t.page||t.getAttribute("page");if(!t.pageElement&&o){var r=i._targetElement,a=Q.create("div",{height:"100%",width:"100%",visibility:"hidden"});r.insertBefore(a,r.children[n]);var s=function(){return t._loadPageElement(r,o).then(e.resolve)};return t.isActive()?s():i._loadInactive.promise.then(s)}return e.resolve(t.pageElement)}))})}}},{key:"attributeChangedCallback",value:function(t,e,i){var o=this;switch(t){case"class":Q.restoreClass(this,"tabbar__item",_a);break;case"modifier":n(this,function(){return B.onModifierChanged(e,i,o,_a)});break;case"ripple":n(this,function(){return o._updateRipple()});break;case"icon":case"label":case"badge":n(this,function(){return o._updateButtonContent()});break;case"page":this.page=i||""}}},{key:"pageLoader",set:function(t){t instanceof Bt||Q.throwPageLoader(),this._pageLoader=t},get:function(){return this._pageLoader}},{key:"_input",get:function(){return Q.findChild(this,"input")}},{key:"_button",get:function(){return Q.findChild(this,".tabbar__button")}},{key:"_icon",get:function(){return this.querySelector(".tabbar__icon")}},{key:"_tabbar",get:function(){return Q.findParent(this,"ons-tabbar")}},{key:"index",get:function(){return Array.prototype.indexOf.call(this.parentElement.children,this)}},{key:"pageElement",get:function(){if(this._loadedPage)return this._loadedPage;var t=this._tabbar;return t.pages.length===t.tabs.length?t.pages[this.index]:null}}],[{key:"observedAttributes",get:function(){return["modifier","ripple","icon","label","page","badge","class"]}}]),e}();c.Tab=va,customElements.define("ons-tab",va);var ba=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"linear":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.2:a;return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}))}return b(e,Ti),g(e,[{key:"show",value:function(t,e){e()}},{key:"hide",value:function(t,e){e()}}]),e}(),ya=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"linear":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.3:a;return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}))}return b(e,ba),g(e,[{key:"show",value:function(t,e){e=e||function(){},nt(t,this.def).default({opacity:0},{opacity:1}).queue(function(t){e(),t()}).play()}},{key:"hide",value:function(t,e){e=e||function(){},nt(t,this.def).default({opacity:1},{opacity:0}).queue(function(t){e(),t()}).play()}}]),e}(),ka=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"ease":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.25:a;p(this,e);var l=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}));return l.messageDelay=.4*l.duration+l.delay,C.isAndroid()?l.ascension=48:Li.isIPhoneXPortraitPatchActive()?l.ascension=98:Li.isIPhoneXLandscapePatchActive()?l.ascension=85:l.ascension=64,l}return b(e,ba),g(e,[{key:"show",value:function(t,e){t=t._toast,Q.globals.fabOffset=this.ascension,nt.runAll(nt(t,this.def).default({transform:"translate3d(0, "+this.ascension+"px, 0)"},{transform:"translate3d(0, 0, 0)"}).queue(function(t){e&&e(),t()}),nt(this._getFabs()).wait(this.delay).queue({transform:"translate3d(0, -"+this.ascension+"px, 0) scale(1)"},this.def),nt(Q.arrayFrom(t.children),this.def).default({opacity:0},{opacity:1}))}},{key:"hide",value:function(t,e){t=t._toast,Q.globals.fabOffset=0,nt.runAll(nt(t,this.def).default({transform:"translate3d(0, 0, 0)"},{transform:"translate3d(0, "+this.ascension+"px, 0)"}).queue(function(t){e&&e(),t()}),nt(this._getFabs(),this.def).wait(this.delay).queue({transform:"translate3d(0, 0, 0) scale(1)"},this.def),nt(Q.arrayFrom(t.children),this.def).default({opacity:1},{opacity:0}))}},{key:"_getFabs",value:function(){return Q.arrayFrom(document.querySelectorAll("ons-fab[position~=bottom], ons-speed-dial[position~=bottom]")).filter(function(t){return t.visible})}}]),e}(),wa=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"ease":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.35:a;p(this,e);var l=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}));return l.bodyHeight=document.body.clientHeight,Li.isIPhoneXPortraitPatchActive()?l.liftAmount="calc(100% + 34px)":Li.isIPhoneXLandscapePatchActive()?l.liftAmount="calc(100% + 21px)":l.liftAmount="100%",l}return b(e,ba),g(e,[{key:"show",value:function(t,e){t=t._toast,nt.runAll(nt(t,this.def).default({transform:"translate3d(0, "+this.liftAmount+", 0)",opacity:0},{transform:"translate3d(0, 0, 0)",opacity:1}).queue(function(t){e&&e(),t()}))}},{key:"hide",value:function(t,e){t=t._toast,nt.runAll(nt(t,this.def).default({transform:"translate3d(0, 0, 0)",opacity:1},{transform:"translate3d(0, "+this.liftAmount+", 0)",opacity:0}).queue(function(t){e&&e(),t()}))}},{key:"_updatePosition",value:function(t){0===parseInt(t.style.top,10)&&(t.style.top=t.style.bottom="")}}]),e}(),Ea=function(t){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.timing,i=void 0===n?"ease":n,o=t.delay,r=void 0===o?0:o,a=t.duration,s=void 0===a?.35:a;p(this,e);var l=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,{timing:i,delay:r,duration:s}));return Li.isIPhoneXPortraitPatchActive()?l.fallAmount="calc(-100% - 44px)":l.fallAmount="-100%",l}return b(e,ba),g(e,[{key:"show",value:function(t,e){t=t._toast,this._updatePosition(t),nt.runAll(nt(t,this.def).default({transform:"translate3d(0, "+this.fallAmount+", 0)",opacity:0},{transform:"translate3d(0, 0, 0)",opacity:1}).queue(function(t){e&&e(),t()}))}},{key:"hide",value:function(t,e){var n=this;t=t._toast,this._updatePosition(t),nt.runAll(nt(t,this.def).default({transform:"translate3d(0, 0, 0)",opacity:1},{transform:"translate3d(0, "+this.fallAmount+", 0)",opacity:0}).queue(function(i){n._updatePosition(t,!0),e&&e(),i()}))}},{key:"_updatePosition",value:function(t,e){var n=void 0;n=Li.isIPhoneXPortraitPatchActive()?"44px":"0",t.style.top!==n&&(t.style.top=n,t.style.bottom="initial")}}]),e}(),Ca={".toast":"toast--*",".toast__message":"toast--*__message",".toast__button":"toast--*__button"},Aa={default:C.isAndroid()?ka:wa,fade:ya,ascend:ka,lift:wa,fall:Ea,none:ba},Sa=function(t){function e(){p(this,e);var t=k(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return t._defaultDBB=null,n(t,function(){return t._compile()}),t}return b(e,Ni),g(e,[{key:"_updateAnimatorFactory",value:function(){return this._toast&&(this._toast.style.top=this._toast.style.bottom=""),new O({animators:Aa,baseClass:ba,baseClassName:"ToastAnimator",defaultAnimation:this.getAttribute("animation")})}},{key:"_compile",value:function(){N.prepare(this),this.style.display="none",this.style.zIndex=1e4;var t=Q.findChild(this,".toast");if(!t)for((t=document.createElement("div")).classList.add("toast");this.childNodes[0];)t.appendChild(this.childNodes[0]);var e=Q.findChild(t,".toast__button");if(e||(e=Q.findChild(t,function(t){return Q.match(t,".button")||Q.match(t,"button")}))&&(e.classList.remove("button"),e.classList.add("toast__button"),t.appendChild(e)),!Q.findChild(t,".toast__message")){var n=Q.findChild(t,".message");if(!n){n=document.createElement("div");for(var i=t.childNodes.length-1;i>=0;i--)t.childNodes[i]!==e&&n.insertBefore(t.childNodes[i],n.firstChild)}n.classList.add("toast__message"),t.insertBefore(n,t.firstChild)}t.parentNode!==this&&this.appendChild(t),B.initModifier(this,this._scheme)}},{key:"_scheme",get:function(){return Ca}},{key:"_toast",get:function(){return Q.findChild(this,".toast")}}],[{key:"registerAnimator",value:function(t,e){e.prototype instanceof ba||Q.throw('"Animator" param must inherit OnsToastElement.ToastAnimator'),Aa[t]=e}},{key:"animators",get:function(){return Aa}},{key:"ToastAnimator",get:function(){return ba}}]),e}();c.Toast=Sa,customElements.define("ons-toast",Sa);var Pa=function(t){function e(){return p(this,e),k(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return b(e,Ri),g(e,[{key:"_scheme",get:function(){return{"":"toolbar-button--*"}}},{key:"_defaultClassName",get:function(){return"toolbar-button"}},{key:"_rippleOpt",get:function(){return[this,void 0,{center:"",size:"contain",background:"transparent"}]}}]),e}();return c.ToolbarButton=Pa,customElements.define("ons-toolbar-button",Pa),function(t){window._onsLoaded&&t._util.warn("Onsen UI is loaded more than once."),window._onsLoaded=!0,window.addEventListener("load",function(){t.fastClick=zt.attach(document.body);var e="touch-action"in document.body.style;t.platform._runOnActualPlatform(function(){t.platform.isAndroid()?t.fastClick.destroy():t.platform.isIOS()&&e&&(t.platform.isIOSSafari()||t.platform.isWKWebView())&&t.fastClick.destroy()})},!1),t.ready(function(){t.enableDeviceBackButtonHandler(),t._defaultDeviceBackButtonHandler=t._internal.dbbDispatcher.createHandler(window.document.body,function(){Object.hasOwnProperty.call(navigator,"app")?navigator.app.exitApp():console.warn("Could not close the app. Is 'cordova.js' included?\nError: 'window.navigator.app' is undefined.")}),document.body._gestureDetector=new t.GestureDetector(document.body,{passive:!0}),t.platform.isWebView()||document.body.addEventListener("keydown",function(e){27===e.keyCode&&t.fireDeviceBackButtonEvent()}),t._setupLoadingPlaceHolders()}),Viewport.setup()}(Rt),window._superSecretOns=Rt,Rt});
;
/*** <End:monaca-onsenui LoadJs:"components/monaca-onsenui/js/onsenui.min.js"> ***/
/*** <End:monaca-onsenui> ***/

