"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mem";
exports.ids = ["vendor-chunks/mem"];
exports.modules = {

/***/ "(ssr)/./node_modules/mem/dist/index.js":
/*!****************************************!*\
  !*** ./node_modules/mem/dist/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mimicFn = __webpack_require__(/*! mimic-fn */ \"(ssr)/./node_modules/mimic-fn/index.js\");\nconst mapAgeCleaner = __webpack_require__(/*! map-age-cleaner */ \"(ssr)/./node_modules/map-age-cleaner/dist/index.js\");\nconst decoratorInstanceMap = new WeakMap();\nconst cacheStore = new WeakMap();\n/**\n[Memoize](https://en.wikipedia.org/wiki/Memoization) functions - An optimization used to speed up consecutive function calls by caching the result of calls with identical input.\n\n@param fn - Function to be memoized.\n\n@example\n```\nimport mem = require('mem');\n\nlet i = 0;\nconst counter = () => ++i;\nconst memoized = mem(counter);\n\nmemoized('foo');\n//=> 1\n\n// Cached as it's the same arguments\nmemoized('foo');\n//=> 1\n\n// Not cached anymore as the arguments changed\nmemoized('bar');\n//=> 2\n\nmemoized('bar');\n//=> 2\n```\n*/\nconst mem = (fn, { cacheKey, cache = new Map(), maxAge } = {}) => {\n    if (typeof maxAge === 'number') {\n        // TODO: Drop after https://github.com/SamVerschueren/map-age-cleaner/issues/5\n        // @ts-expect-error\n        mapAgeCleaner(cache);\n    }\n    const memoized = function (...arguments_) {\n        const key = cacheKey ? cacheKey(arguments_) : arguments_[0];\n        const cacheItem = cache.get(key);\n        if (cacheItem) {\n            return cacheItem.data;\n        }\n        const result = fn.apply(this, arguments_);\n        cache.set(key, {\n            data: result,\n            maxAge: maxAge ? Date.now() + maxAge : Number.POSITIVE_INFINITY\n        });\n        return result;\n    };\n    mimicFn(memoized, fn, {\n        ignoreNonConfigurable: true\n    });\n    cacheStore.set(memoized, cache);\n    return memoized;\n};\n/**\n@returns A [decorator](https://github.com/tc39/proposal-decorators) to memoize class methods or static class methods.\n\n@example\n```\nimport mem = require('mem');\n\nclass Example {\n    index = 0\n\n    @mem.decorator()\n    counter() {\n        return ++this.index;\n    }\n}\n\nclass ExampleWithOptions {\n    index = 0\n\n    @mem.decorator({maxAge: 1000})\n    counter() {\n        return ++this.index;\n    }\n}\n```\n*/\nmem.decorator = (options = {}) => (target, propertyKey, descriptor) => {\n    const input = target[propertyKey];\n    if (typeof input !== 'function') {\n        throw new TypeError('The decorated value must be a function');\n    }\n    delete descriptor.value;\n    delete descriptor.writable;\n    descriptor.get = function () {\n        if (!decoratorInstanceMap.has(this)) {\n            const value = mem(input, options);\n            decoratorInstanceMap.set(this, value);\n            return value;\n        }\n        return decoratorInstanceMap.get(this);\n    };\n};\n/**\nClear all cached data of a memoized function.\n\n@param fn - Memoized function.\n*/\nmem.clear = (fn) => {\n    const cache = cacheStore.get(fn);\n    if (!cache) {\n        throw new TypeError('Can\\'t clear a function that was not memoized!');\n    }\n    if (typeof cache.clear !== 'function') {\n        throw new TypeError('The cache Map can\\'t be cleared!');\n    }\n    cache.clear();\n};\nmodule.exports = mem;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvbWVtL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYixnQkFBZ0IsbUJBQU8sQ0FBQyx3REFBVTtBQUNsQyxzQkFBc0IsbUJBQU8sQ0FBQywyRUFBaUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsc0NBQXNDLElBQUk7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixhQUFhO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC8uL25vZGVfbW9kdWxlcy9tZW0vZGlzdC9pbmRleC5qcz8wNmJhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IG1pbWljRm4gPSByZXF1aXJlKFwibWltaWMtZm5cIik7XG5jb25zdCBtYXBBZ2VDbGVhbmVyID0gcmVxdWlyZShcIm1hcC1hZ2UtY2xlYW5lclwiKTtcbmNvbnN0IGRlY29yYXRvckluc3RhbmNlTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IGNhY2hlU3RvcmUgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG5bTWVtb2l6ZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWVtb2l6YXRpb24pIGZ1bmN0aW9ucyAtIEFuIG9wdGltaXphdGlvbiB1c2VkIHRvIHNwZWVkIHVwIGNvbnNlY3V0aXZlIGZ1bmN0aW9uIGNhbGxzIGJ5IGNhY2hpbmcgdGhlIHJlc3VsdCBvZiBjYWxscyB3aXRoIGlkZW50aWNhbCBpbnB1dC5cblxuQHBhcmFtIGZuIC0gRnVuY3Rpb24gdG8gYmUgbWVtb2l6ZWQuXG5cbkBleGFtcGxlXG5gYGBcbmltcG9ydCBtZW0gPSByZXF1aXJlKCdtZW0nKTtcblxubGV0IGkgPSAwO1xuY29uc3QgY291bnRlciA9ICgpID0+ICsraTtcbmNvbnN0IG1lbW9pemVkID0gbWVtKGNvdW50ZXIpO1xuXG5tZW1vaXplZCgnZm9vJyk7XG4vLz0+IDFcblxuLy8gQ2FjaGVkIGFzIGl0J3MgdGhlIHNhbWUgYXJndW1lbnRzXG5tZW1vaXplZCgnZm9vJyk7XG4vLz0+IDFcblxuLy8gTm90IGNhY2hlZCBhbnltb3JlIGFzIHRoZSBhcmd1bWVudHMgY2hhbmdlZFxubWVtb2l6ZWQoJ2JhcicpO1xuLy89PiAyXG5cbm1lbW9pemVkKCdiYXInKTtcbi8vPT4gMlxuYGBgXG4qL1xuY29uc3QgbWVtID0gKGZuLCB7IGNhY2hlS2V5LCBjYWNoZSA9IG5ldyBNYXAoKSwgbWF4QWdlIH0gPSB7fSkgPT4ge1xuICAgIGlmICh0eXBlb2YgbWF4QWdlID09PSAnbnVtYmVyJykge1xuICAgICAgICAvLyBUT0RPOiBEcm9wIGFmdGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9TYW1WZXJzY2h1ZXJlbi9tYXAtYWdlLWNsZWFuZXIvaXNzdWVzLzVcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICBtYXBBZ2VDbGVhbmVyKGNhY2hlKTtcbiAgICB9XG4gICAgY29uc3QgbWVtb2l6ZWQgPSBmdW5jdGlvbiAoLi4uYXJndW1lbnRzXykge1xuICAgICAgICBjb25zdCBrZXkgPSBjYWNoZUtleSA/IGNhY2hlS2V5KGFyZ3VtZW50c18pIDogYXJndW1lbnRzX1swXTtcbiAgICAgICAgY29uc3QgY2FjaGVJdGVtID0gY2FjaGUuZ2V0KGtleSk7XG4gICAgICAgIGlmIChjYWNoZUl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZUl0ZW0uZGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXN1bHQgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHNfKTtcbiAgICAgICAgY2FjaGUuc2V0KGtleSwge1xuICAgICAgICAgICAgZGF0YTogcmVzdWx0LFxuICAgICAgICAgICAgbWF4QWdlOiBtYXhBZ2UgPyBEYXRlLm5vdygpICsgbWF4QWdlIDogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgbWltaWNGbihtZW1vaXplZCwgZm4sIHtcbiAgICAgICAgaWdub3JlTm9uQ29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgY2FjaGVTdG9yZS5zZXQobWVtb2l6ZWQsIGNhY2hlKTtcbiAgICByZXR1cm4gbWVtb2l6ZWQ7XG59O1xuLyoqXG5AcmV0dXJucyBBIFtkZWNvcmF0b3JdKGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWRlY29yYXRvcnMpIHRvIG1lbW9pemUgY2xhc3MgbWV0aG9kcyBvciBzdGF0aWMgY2xhc3MgbWV0aG9kcy5cblxuQGV4YW1wbGVcbmBgYFxuaW1wb3J0IG1lbSA9IHJlcXVpcmUoJ21lbScpO1xuXG5jbGFzcyBFeGFtcGxlIHtcbiAgICBpbmRleCA9IDBcblxuICAgIEBtZW0uZGVjb3JhdG9yKClcbiAgICBjb3VudGVyKCkge1xuICAgICAgICByZXR1cm4gKyt0aGlzLmluZGV4O1xuICAgIH1cbn1cblxuY2xhc3MgRXhhbXBsZVdpdGhPcHRpb25zIHtcbiAgICBpbmRleCA9IDBcblxuICAgIEBtZW0uZGVjb3JhdG9yKHttYXhBZ2U6IDEwMDB9KVxuICAgIGNvdW50ZXIoKSB7XG4gICAgICAgIHJldHVybiArK3RoaXMuaW5kZXg7XG4gICAgfVxufVxuYGBgXG4qL1xubWVtLmRlY29yYXRvciA9IChvcHRpb25zID0ge30pID0+ICh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSA9PiB7XG4gICAgY29uc3QgaW5wdXQgPSB0YXJnZXRbcHJvcGVydHlLZXldO1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGRlY29yYXRlZCB2YWx1ZSBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICB9XG4gICAgZGVsZXRlIGRlc2NyaXB0b3IudmFsdWU7XG4gICAgZGVsZXRlIGRlc2NyaXB0b3Iud3JpdGFibGU7XG4gICAgZGVzY3JpcHRvci5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghZGVjb3JhdG9ySW5zdGFuY2VNYXAuaGFzKHRoaXMpKSB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IG1lbShpbnB1dCwgb3B0aW9ucyk7XG4gICAgICAgICAgICBkZWNvcmF0b3JJbnN0YW5jZU1hcC5zZXQodGhpcywgdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWNvcmF0b3JJbnN0YW5jZU1hcC5nZXQodGhpcyk7XG4gICAgfTtcbn07XG4vKipcbkNsZWFyIGFsbCBjYWNoZWQgZGF0YSBvZiBhIG1lbW9pemVkIGZ1bmN0aW9uLlxuXG5AcGFyYW0gZm4gLSBNZW1vaXplZCBmdW5jdGlvbi5cbiovXG5tZW0uY2xlYXIgPSAoZm4pID0+IHtcbiAgICBjb25zdCBjYWNoZSA9IGNhY2hlU3RvcmUuZ2V0KGZuKTtcbiAgICBpZiAoIWNhY2hlKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NhblxcJ3QgY2xlYXIgYSBmdW5jdGlvbiB0aGF0IHdhcyBub3QgbWVtb2l6ZWQhJyk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY2FjaGUuY2xlYXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGNhY2hlIE1hcCBjYW5cXCd0IGJlIGNsZWFyZWQhJyk7XG4gICAgfVxuICAgIGNhY2hlLmNsZWFyKCk7XG59O1xubW9kdWxlLmV4cG9ydHMgPSBtZW07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/mem/dist/index.js\n");

/***/ })

};
;