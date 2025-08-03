import "./chunk-PYDT66WE.js";
import "./chunk-AQLPJ7RI.js";
import {
  DefaultAmplify
} from "./chunk-5K47WSF5.js";
import {
  autoSignIn,
  confirmResetPassword,
  confirmSignIn,
  confirmSignUp,
  confirmUserAttribute,
  fetchUserAttributes,
  getCurrentUser,
  resendSignUpCode,
  resetPassword,
  sendUserAttributeVerificationCode,
  signIn,
  signInWithRedirect,
  signOut,
  signUp
} from "./chunk-NE3RA3M4.js";
import "./chunk-7GV6XWTQ.js";
import "./chunk-LGTHMNIU.js";
import {
  AiAction,
  AmplifyErrorCode,
  AuthAction,
  Category,
  ConsoleLogger,
  GeoAction,
  Hub,
  I18n,
  InAppMessagingAction,
  StorageAction,
  setCustomUserAgent
} from "./chunk-ZK2US4EJ.js";
import {
  CommonModule,
  KeyValuePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-XTZTLPCP.js";
import "./chunk-EEUQ22Y5.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  EventEmitter,
  HostBinding,
  Injectable,
  Input,
  NgModule,
  Output,
  TemplateRef,
  ViewEncapsulation,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VMVLY3ZP.js";
import {
  Subject
} from "./chunk-WSWCQNWL.js";
import {
  __async,
  __commonJS,
  __export,
  __objRest,
  __spreadProps,
  __spreadValues,
  __toESM
} from "./chunk-4MWRP73S.js";

// node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// node_modules/lodash/eq.js
var require_eq = __commonJS({
  "node_modules/lodash/eq.js"(exports, module) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module.exports = listCacheGet;
  }
});

// node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// node_modules/lodash/_root.js
var require_root = __commonJS({
  "node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "node_modules/lodash/isObject.js"(exports, module) {
    function isObject2(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject2;
  }
});

// node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject2 = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction3(value) {
      if (!isObject2(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction3;
  }
});

// node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction3 = require_isFunction();
    var isMasked = require_isMasked();
    var isObject2 = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    function baseIsNative(value) {
      if (!isObject2(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction3(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "node_modules/lodash/_getValue.js"(exports, module) {
    function getValue2(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue2;
  }
});

// node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue2 = require_getValue();
    function getNative(object, key) {
      var value = getValue2(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map2 = getNative(root, "Map");
    module.exports = Map2;
  }
});

// node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  }
});

// node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map2 || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map2 = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "node_modules/lodash/_setCacheAdd.js"(exports, module) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "node_modules/lodash/_setCacheHas.js"(exports, module) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});

// node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "node_modules/lodash/_arraySome.js"(exports, module) {
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "node_modules/lodash/_cacheHas.js"(exports, module) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "node_modules/lodash/_equalArrays.js"(exports, module) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});

// node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module.exports = Uint8Array2;
  }
});

// node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var Uint8Array2 = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "node_modules/lodash/isArray.js"(exports, module) {
    var isArray3 = Array.isArray;
    module.exports = isArray3;
  }
});

// node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray3 = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray3(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer ? Buffer.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
    }
    module.exports = isIndex;
  }
});

// node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray3 = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray3(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction3 = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction3(value);
    }
    module.exports = isArrayLike;
  }
});

// node_modules/lodash/keys.js
var require_keys = __commonJS({
  "node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module.exports = DataView;
  }
});

// node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Set2 = getNative(root, "Set");
    module.exports = Set2;
  }
});

// node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap = getNative(root, "WeakMap");
    module.exports = WeakMap;
  }
});

// node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "node_modules/lodash/_getTag.js"(exports, module) {
    var DataView = require_DataView();
    var Map2 = require_Map();
    var Promise2 = require_Promise();
    var Set2 = require_Set();
    var WeakMap = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map2);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set2);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray3 = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray3(object), othIsArr = isArray3(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "node_modules/lodash/_baseIsEqual.js"(exports, module) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "node_modules/lodash/_baseIsMatch.js"(exports, module) {
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  }
});

// node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "node_modules/lodash/_isStrictComparable.js"(exports, module) {
    var isObject2 = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject2(value);
    }
    module.exports = isStrictComparable;
  }
});

// node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "node_modules/lodash/_getMatchData.js"(exports, module) {
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    module.exports = getMatchData;
  }
});

// node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    module.exports = matchesStrictComparable;
  }
});

// node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "node_modules/lodash/_baseMatches.js"(exports, module) {
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    module.exports = baseMatches;
  }
});

// node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "node_modules/lodash/_isKey.js"(exports, module) {
    var isArray3 = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray3(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  }
});

// node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "node_modules/lodash/memoize.js"(exports, module) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});

// node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});

// node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "node_modules/lodash/_stringToPath.js"(exports, module) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray3 = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray3(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});

// node_modules/lodash/toString.js
var require_toString = __commonJS({
  "node_modules/lodash/toString.js"(exports, module) {
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString;
  }
});

// node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "node_modules/lodash/_castPath.js"(exports, module) {
    var isArray3 = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray3(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module.exports = castPath;
  }
});

// node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "node_modules/lodash/_toKey.js"(exports, module) {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});

// node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path2) {
      path2 = castPath(path2, object);
      var index = 0, length = path2.length;
      while (object != null && index < length) {
        object = object[toKey(path2[index++])];
      }
      return index && index == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// node_modules/lodash/get.js
var require_get = __commonJS({
  "node_modules/lodash/get.js"(exports, module) {
    var baseGet = require_baseGet();
    function get(object, path2, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path2);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get;
  }
});

// node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "node_modules/lodash/_baseHasIn.js"(exports, module) {
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    module.exports = baseHasIn;
  }
});

// node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "node_modules/lodash/_hasPath.js"(exports, module) {
    var castPath = require_castPath();
    var isArguments = require_isArguments();
    var isArray3 = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey = require_toKey();
    function hasPath(object, path2, hasFunc) {
      path2 = castPath(path2, object);
      var index = -1, length = path2.length, result = false;
      while (++index < length) {
        var key = toKey(path2[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray3(object) || isArguments(object));
    }
    module.exports = hasPath;
  }
});

// node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "node_modules/lodash/hasIn.js"(exports, module) {
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object, path2) {
      return object != null && hasPath(object, path2, baseHasIn);
    }
    module.exports = hasIn;
  }
});

// node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    var get = require_get();
    var hasIn = require_hasIn();
    var isKey = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path2, srcValue) {
      if (isKey(path2) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path2), srcValue);
      }
      return function(object) {
        var objValue = get(object, path2);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path2) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// node_modules/lodash/identity.js
var require_identity = __commonJS({
  "node_modules/lodash/identity.js"(exports, module) {
    function identity(value) {
      return value;
    }
    module.exports = identity;
  }
});

// node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "node_modules/lodash/_baseProperty.js"(exports, module) {
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = baseProperty;
  }
});

// node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "node_modules/lodash/_basePropertyDeep.js"(exports, module) {
    var baseGet = require_baseGet();
    function basePropertyDeep(path2) {
      return function(object) {
        return baseGet(object, path2);
      };
    }
    module.exports = basePropertyDeep;
  }
});

// node_modules/lodash/property.js
var require_property = __commonJS({
  "node_modules/lodash/property.js"(exports, module) {
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey = require_isKey();
    var toKey = require_toKey();
    function property(path2) {
      return isKey(path2) ? baseProperty(toKey(path2)) : basePropertyDeep(path2);
    }
    module.exports = property;
  }
});

// node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "node_modules/lodash/_baseIteratee.js"(exports, module) {
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity = require_identity();
    var isArray3 = require_isArray();
    var property = require_property();
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == "object") {
        return isArray3(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }
    module.exports = baseIteratee;
  }
});

// node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/lodash/_defineProperty.js"(exports, module) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module.exports = defineProperty;
  }
});

// node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "node_modules/lodash/_baseAssignValue.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module.exports = baseAssignValue;
  }
});

// node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "node_modules/lodash/_assignValue.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignValue;
  }
});

// node_modules/lodash/_baseSet.js
var require_baseSet = __commonJS({
  "node_modules/lodash/_baseSet.js"(exports, module) {
    var assignValue = require_assignValue();
    var castPath = require_castPath();
    var isIndex = require_isIndex();
    var isObject2 = require_isObject();
    var toKey = require_toKey();
    function baseSet(object, path2, value, customizer) {
      if (!isObject2(object)) {
        return object;
      }
      path2 = castPath(path2, object);
      var index = -1, length = path2.length, lastIndex = length - 1, nested = object;
      while (nested != null && ++index < length) {
        var key = toKey(path2[index]), newValue = value;
        if (key === "__proto__" || key === "constructor" || key === "prototype") {
          return object;
        }
        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : void 0;
          if (newValue === void 0) {
            newValue = isObject2(objValue) ? objValue : isIndex(path2[index + 1]) ? [] : {};
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }
    module.exports = baseSet;
  }
});

// node_modules/lodash/_basePickBy.js
var require_basePickBy = __commonJS({
  "node_modules/lodash/_basePickBy.js"(exports, module) {
    var baseGet = require_baseGet();
    var baseSet = require_baseSet();
    var castPath = require_castPath();
    function basePickBy(object, paths, predicate) {
      var index = -1, length = paths.length, result = {};
      while (++index < length) {
        var path2 = paths[index], value = baseGet(object, path2);
        if (predicate(value, path2)) {
          baseSet(result, castPath(path2, object), value);
        }
      }
      return result;
    }
    module.exports = basePickBy;
  }
});

// node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "node_modules/lodash/_getPrototype.js"(exports, module) {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
  }
});

// node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "node_modules/lodash/_getSymbolsIn.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };
    module.exports = getSymbolsIn;
  }
});

// node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "node_modules/lodash/_nativeKeysIn.js"(exports, module) {
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = nativeKeysIn;
  }
});

// node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "node_modules/lodash/_baseKeysIn.js"(exports, module) {
    var isObject2 = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject2(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeysIn;
  }
});

// node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "node_modules/lodash/keysIn.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module.exports = keysIn;
  }
});

// node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "node_modules/lodash/_getAllKeysIn.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    module.exports = getAllKeysIn;
  }
});

// node_modules/lodash/pickBy.js
var require_pickBy = __commonJS({
  "node_modules/lodash/pickBy.js"(exports, module) {
    var arrayMap = require_arrayMap();
    var baseIteratee = require_baseIteratee();
    var basePickBy = require_basePickBy();
    var getAllKeysIn = require_getAllKeysIn();
    function pickBy2(object, predicate) {
      if (object == null) {
        return {};
      }
      var props = arrayMap(getAllKeysIn(object), function(prop) {
        return [prop];
      });
      predicate = baseIteratee(predicate);
      return basePickBy(object, props, function(value, path2) {
        return predicate(value, path2[0]);
      });
    }
    module.exports = pickBy2;
  }
});

// node_modules/lodash/_assignMergeValue.js
var require_assignMergeValue = __commonJS({
  "node_modules/lodash/_assignMergeValue.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    function assignMergeValue(object, key, value) {
      if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignMergeValue;
  }
});

// node_modules/lodash/_createBaseFor.js
var require_createBaseFor = __commonJS({
  "node_modules/lodash/_createBaseFor.js"(exports, module) {
    function createBaseFor(fromRight) {
      return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while (length--) {
          var key = props[fromRight ? length : ++index];
          if (iteratee(iterable[key], key, iterable) === false) {
            break;
          }
        }
        return object;
      };
    }
    module.exports = createBaseFor;
  }
});

// node_modules/lodash/_baseFor.js
var require_baseFor = __commonJS({
  "node_modules/lodash/_baseFor.js"(exports, module) {
    var createBaseFor = require_createBaseFor();
    var baseFor = createBaseFor();
    module.exports = baseFor;
  }
});

// node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "node_modules/lodash/_cloneBuffer.js"(exports, module) {
    var root = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer = moduleExports ? root.Buffer : void 0;
    var allocUnsafe = Buffer ? Buffer.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module.exports = cloneBuffer;
  }
});

// node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "node_modules/lodash/_cloneArrayBuffer.js"(exports, module) {
    var Uint8Array2 = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    module.exports = cloneArrayBuffer;
  }
});

// node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "node_modules/lodash/_cloneTypedArray.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module.exports = cloneTypedArray;
  }
});

// node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "node_modules/lodash/_copyArray.js"(exports, module) {
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    module.exports = copyArray;
  }
});

// node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "node_modules/lodash/_baseCreate.js"(exports, module) {
    var isObject2 = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = /* @__PURE__ */ function() {
      function object() {
      }
      return function(proto) {
        if (!isObject2(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    module.exports = baseCreate;
  }
});

// node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "node_modules/lodash/_initCloneObject.js"(exports, module) {
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    module.exports = initCloneObject;
  }
});

// node_modules/lodash/isArrayLikeObject.js
var require_isArrayLikeObject = __commonJS({
  "node_modules/lodash/isArrayLikeObject.js"(exports, module) {
    var isArrayLike = require_isArrayLike();
    var isObjectLike = require_isObjectLike();
    function isArrayLikeObject(value) {
      return isObjectLike(value) && isArrayLike(value);
    }
    module.exports = isArrayLikeObject;
  }
});

// node_modules/lodash/isPlainObject.js
var require_isPlainObject = __commonJS({
  "node_modules/lodash/isPlainObject.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var getPrototype = require_getPrototype();
    var isObjectLike = require_isObjectLike();
    var objectTag = "[object Object]";
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module.exports = isPlainObject;
  }
});

// node_modules/lodash/_safeGet.js
var require_safeGet = __commonJS({
  "node_modules/lodash/_safeGet.js"(exports, module) {
    function safeGet(object, key) {
      if (key === "constructor" && typeof object[key] === "function") {
        return;
      }
      if (key == "__proto__") {
        return;
      }
      return object[key];
    }
    module.exports = safeGet;
  }
});

// node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "node_modules/lodash/_copyObject.js"(exports, module) {
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    module.exports = copyObject;
  }
});

// node_modules/lodash/toPlainObject.js
var require_toPlainObject = __commonJS({
  "node_modules/lodash/toPlainObject.js"(exports, module) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function toPlainObject(value) {
      return copyObject(value, keysIn(value));
    }
    module.exports = toPlainObject;
  }
});

// node_modules/lodash/_baseMergeDeep.js
var require_baseMergeDeep = __commonJS({
  "node_modules/lodash/_baseMergeDeep.js"(exports, module) {
    var assignMergeValue = require_assignMergeValue();
    var cloneBuffer = require_cloneBuffer();
    var cloneTypedArray = require_cloneTypedArray();
    var copyArray = require_copyArray();
    var initCloneObject = require_initCloneObject();
    var isArguments = require_isArguments();
    var isArray3 = require_isArray();
    var isArrayLikeObject = require_isArrayLikeObject();
    var isBuffer = require_isBuffer();
    var isFunction3 = require_isFunction();
    var isObject2 = require_isObject();
    var isPlainObject = require_isPlainObject();
    var isTypedArray = require_isTypedArray();
    var safeGet = require_safeGet();
    var toPlainObject = require_toPlainObject();
    function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
      var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
      if (stacked) {
        assignMergeValue(object, key, stacked);
        return;
      }
      var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
      var isCommon = newValue === void 0;
      if (isCommon) {
        var isArr = isArray3(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
        newValue = srcValue;
        if (isArr || isBuff || isTyped) {
          if (isArray3(objValue)) {
            newValue = objValue;
          } else if (isArrayLikeObject(objValue)) {
            newValue = copyArray(objValue);
          } else if (isBuff) {
            isCommon = false;
            newValue = cloneBuffer(srcValue, true);
          } else if (isTyped) {
            isCommon = false;
            newValue = cloneTypedArray(srcValue, true);
          } else {
            newValue = [];
          }
        } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
          newValue = objValue;
          if (isArguments(objValue)) {
            newValue = toPlainObject(objValue);
          } else if (!isObject2(objValue) || isFunction3(objValue)) {
            newValue = initCloneObject(srcValue);
          }
        } else {
          isCommon = false;
        }
      }
      if (isCommon) {
        stack.set(srcValue, newValue);
        mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
        stack["delete"](srcValue);
      }
      assignMergeValue(object, key, newValue);
    }
    module.exports = baseMergeDeep;
  }
});

// node_modules/lodash/_baseMerge.js
var require_baseMerge = __commonJS({
  "node_modules/lodash/_baseMerge.js"(exports, module) {
    var Stack = require_Stack();
    var assignMergeValue = require_assignMergeValue();
    var baseFor = require_baseFor();
    var baseMergeDeep = require_baseMergeDeep();
    var isObject2 = require_isObject();
    var keysIn = require_keysIn();
    var safeGet = require_safeGet();
    function baseMerge(object, source, srcIndex, customizer, stack) {
      if (object === source) {
        return;
      }
      baseFor(source, function(srcValue, key) {
        stack || (stack = new Stack());
        if (isObject2(srcValue)) {
          baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
        } else {
          var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
          if (newValue === void 0) {
            newValue = srcValue;
          }
          assignMergeValue(object, key, newValue);
        }
      }, keysIn);
    }
    module.exports = baseMerge;
  }
});

// node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "node_modules/lodash/_apply.js"(exports, module) {
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    module.exports = apply;
  }
});

// node_modules/lodash/_overRest.js
var require_overRest = __commonJS({
  "node_modules/lodash/_overRest.js"(exports, module) {
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start3, transform) {
      start3 = nativeMax(start3 === void 0 ? func.length - 1 : start3, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start3, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start3 + index];
        }
        index = -1;
        var otherArgs = Array(start3 + 1);
        while (++index < start3) {
          otherArgs[index] = args[index];
        }
        otherArgs[start3] = transform(array);
        return apply(func, this, otherArgs);
      };
    }
    module.exports = overRest;
  }
});

// node_modules/lodash/constant.js
var require_constant = __commonJS({
  "node_modules/lodash/constant.js"(exports, module) {
    function constant(value) {
      return function() {
        return value;
      };
    }
    module.exports = constant;
  }
});

// node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  "node_modules/lodash/_baseSetToString.js"(exports, module) {
    var constant = require_constant();
    var defineProperty = require_defineProperty();
    var identity = require_identity();
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    module.exports = baseSetToString;
  }
});

// node_modules/lodash/_shortOut.js
var require_shortOut = __commonJS({
  "node_modules/lodash/_shortOut.js"(exports, module) {
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    module.exports = shortOut;
  }
});

// node_modules/lodash/_setToString.js
var require_setToString = __commonJS({
  "node_modules/lodash/_setToString.js"(exports, module) {
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module.exports = setToString;
  }
});

// node_modules/lodash/_baseRest.js
var require_baseRest = __commonJS({
  "node_modules/lodash/_baseRest.js"(exports, module) {
    var identity = require_identity();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function baseRest(func, start3) {
      return setToString(overRest(func, start3, identity), func + "");
    }
    module.exports = baseRest;
  }
});

// node_modules/lodash/_isIterateeCall.js
var require_isIterateeCall = __commonJS({
  "node_modules/lodash/_isIterateeCall.js"(exports, module) {
    var eq = require_eq();
    var isArrayLike = require_isArrayLike();
    var isIndex = require_isIndex();
    var isObject2 = require_isObject();
    function isIterateeCall(value, index, object) {
      if (!isObject2(object)) {
        return false;
      }
      var type = typeof index;
      if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
        return eq(object[index], value);
      }
      return false;
    }
    module.exports = isIterateeCall;
  }
});

// node_modules/lodash/_createAssigner.js
var require_createAssigner = __commonJS({
  "node_modules/lodash/_createAssigner.js"(exports, module) {
    var baseRest = require_baseRest();
    var isIterateeCall = require_isIterateeCall();
    function createAssigner(assigner) {
      return baseRest(function(object, sources) {
        var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard = length > 2 ? sources[2] : void 0;
        customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          customizer = length < 3 ? void 0 : customizer;
          length = 1;
        }
        object = Object(object);
        while (++index < length) {
          var source = sources[index];
          if (source) {
            assigner(object, source, index, customizer);
          }
        }
        return object;
      });
    }
    module.exports = createAssigner;
  }
});

// node_modules/lodash/merge.js
var require_merge = __commonJS({
  "node_modules/lodash/merge.js"(exports, module) {
    var baseMerge = require_baseMerge();
    var createAssigner = require_createAssigner();
    var merge2 = createAssigner(function(object, source, srcIndex) {
      baseMerge(object, source, srcIndex);
    });
    module.exports = merge2;
  }
});

// node_modules/lodash/_arrayReduce.js
var require_arrayReduce = __commonJS({
  "node_modules/lodash/_arrayReduce.js"(exports, module) {
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    module.exports = arrayReduce;
  }
});

// node_modules/lodash/_basePropertyOf.js
var require_basePropertyOf = __commonJS({
  "node_modules/lodash/_basePropertyOf.js"(exports, module) {
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = basePropertyOf;
  }
});

// node_modules/lodash/_deburrLetter.js
var require_deburrLetter = __commonJS({
  "node_modules/lodash/_deburrLetter.js"(exports, module) {
    var basePropertyOf = require_basePropertyOf();
    var deburredLetters = {
      // Latin-1 Supplement block.
      "À": "A",
      "Á": "A",
      "Â": "A",
      "Ã": "A",
      "Ä": "A",
      "Å": "A",
      "à": "a",
      "á": "a",
      "â": "a",
      "ã": "a",
      "ä": "a",
      "å": "a",
      "Ç": "C",
      "ç": "c",
      "Ð": "D",
      "ð": "d",
      "È": "E",
      "É": "E",
      "Ê": "E",
      "Ë": "E",
      "è": "e",
      "é": "e",
      "ê": "e",
      "ë": "e",
      "Ì": "I",
      "Í": "I",
      "Î": "I",
      "Ï": "I",
      "ì": "i",
      "í": "i",
      "î": "i",
      "ï": "i",
      "Ñ": "N",
      "ñ": "n",
      "Ò": "O",
      "Ó": "O",
      "Ô": "O",
      "Õ": "O",
      "Ö": "O",
      "Ø": "O",
      "ò": "o",
      "ó": "o",
      "ô": "o",
      "õ": "o",
      "ö": "o",
      "ø": "o",
      "Ù": "U",
      "Ú": "U",
      "Û": "U",
      "Ü": "U",
      "ù": "u",
      "ú": "u",
      "û": "u",
      "ü": "u",
      "Ý": "Y",
      "ý": "y",
      "ÿ": "y",
      "Æ": "Ae",
      "æ": "ae",
      "Þ": "Th",
      "þ": "th",
      "ß": "ss",
      // Latin Extended-A block.
      "Ā": "A",
      "Ă": "A",
      "Ą": "A",
      "ā": "a",
      "ă": "a",
      "ą": "a",
      "Ć": "C",
      "Ĉ": "C",
      "Ċ": "C",
      "Č": "C",
      "ć": "c",
      "ĉ": "c",
      "ċ": "c",
      "č": "c",
      "Ď": "D",
      "Đ": "D",
      "ď": "d",
      "đ": "d",
      "Ē": "E",
      "Ĕ": "E",
      "Ė": "E",
      "Ę": "E",
      "Ě": "E",
      "ē": "e",
      "ĕ": "e",
      "ė": "e",
      "ę": "e",
      "ě": "e",
      "Ĝ": "G",
      "Ğ": "G",
      "Ġ": "G",
      "Ģ": "G",
      "ĝ": "g",
      "ğ": "g",
      "ġ": "g",
      "ģ": "g",
      "Ĥ": "H",
      "Ħ": "H",
      "ĥ": "h",
      "ħ": "h",
      "Ĩ": "I",
      "Ī": "I",
      "Ĭ": "I",
      "Į": "I",
      "İ": "I",
      "ĩ": "i",
      "ī": "i",
      "ĭ": "i",
      "į": "i",
      "ı": "i",
      "Ĵ": "J",
      "ĵ": "j",
      "Ķ": "K",
      "ķ": "k",
      "ĸ": "k",
      "Ĺ": "L",
      "Ļ": "L",
      "Ľ": "L",
      "Ŀ": "L",
      "Ł": "L",
      "ĺ": "l",
      "ļ": "l",
      "ľ": "l",
      "ŀ": "l",
      "ł": "l",
      "Ń": "N",
      "Ņ": "N",
      "Ň": "N",
      "Ŋ": "N",
      "ń": "n",
      "ņ": "n",
      "ň": "n",
      "ŋ": "n",
      "Ō": "O",
      "Ŏ": "O",
      "Ő": "O",
      "ō": "o",
      "ŏ": "o",
      "ő": "o",
      "Ŕ": "R",
      "Ŗ": "R",
      "Ř": "R",
      "ŕ": "r",
      "ŗ": "r",
      "ř": "r",
      "Ś": "S",
      "Ŝ": "S",
      "Ş": "S",
      "Š": "S",
      "ś": "s",
      "ŝ": "s",
      "ş": "s",
      "š": "s",
      "Ţ": "T",
      "Ť": "T",
      "Ŧ": "T",
      "ţ": "t",
      "ť": "t",
      "ŧ": "t",
      "Ũ": "U",
      "Ū": "U",
      "Ŭ": "U",
      "Ů": "U",
      "Ű": "U",
      "Ų": "U",
      "ũ": "u",
      "ū": "u",
      "ŭ": "u",
      "ů": "u",
      "ű": "u",
      "ų": "u",
      "Ŵ": "W",
      "ŵ": "w",
      "Ŷ": "Y",
      "ŷ": "y",
      "Ÿ": "Y",
      "Ź": "Z",
      "Ż": "Z",
      "Ž": "Z",
      "ź": "z",
      "ż": "z",
      "ž": "z",
      "Ĳ": "IJ",
      "ĳ": "ij",
      "Œ": "Oe",
      "œ": "oe",
      "ŉ": "'n",
      "ſ": "s"
    };
    var deburrLetter = basePropertyOf(deburredLetters);
    module.exports = deburrLetter;
  }
});

// node_modules/lodash/deburr.js
var require_deburr = __commonJS({
  "node_modules/lodash/deburr.js"(exports, module) {
    var deburrLetter = require_deburrLetter();
    var toString = require_toString();
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsCombo = "[" + rsComboRange + "]";
    var reComboMark = RegExp(rsCombo, "g");
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
    }
    module.exports = deburr;
  }
});

// node_modules/lodash/_asciiWords.js
var require_asciiWords = __commonJS({
  "node_modules/lodash/_asciiWords.js"(exports, module) {
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    module.exports = asciiWords;
  }
});

// node_modules/lodash/_hasUnicodeWord.js
var require_hasUnicodeWord = __commonJS({
  "node_modules/lodash/_hasUnicodeWord.js"(exports, module) {
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    module.exports = hasUnicodeWord;
  }
});

// node_modules/lodash/_unicodeWords.js
var require_unicodeWords = __commonJS({
  "node_modules/lodash/_unicodeWords.js"(exports, module) {
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f";
    var reComboHalfMarksRange = "\\ufe20-\\ufe2f";
    var rsComboSymbolsRange = "\\u20d0-\\u20ff";
    var rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;
    var rsDingbatRange = "\\u2700-\\u27bf";
    var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
    var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
    var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
    var rsPunctuationRange = "\\u2000-\\u206f";
    var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
    var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['’]";
    var rsBreak = "[" + rsBreakRange + "]";
    var rsCombo = "[" + rsComboRange + "]";
    var rsDigits = "\\d+";
    var rsDingbat = "[" + rsDingbatRange + "]";
    var rsLower = "[" + rsLowerRange + "]";
    var rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsUpper = "[" + rsUpperRange + "]";
    var rsZWJ = "\\u200d";
    var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")";
    var rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")";
    var rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
    var rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])";
    var rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
    var reUnicodeWord = RegExp([rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")", rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")", rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower, rsUpper + "+" + rsOptContrUpper, rsOrdUpper, rsOrdLower, rsDigits, rsEmoji].join("|"), "g");
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    module.exports = unicodeWords;
  }
});

// node_modules/lodash/words.js
var require_words = __commonJS({
  "node_modules/lodash/words.js"(exports, module) {
    var asciiWords = require_asciiWords();
    var hasUnicodeWord = require_hasUnicodeWord();
    var toString = require_toString();
    var unicodeWords = require_unicodeWords();
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? void 0 : pattern;
      if (pattern === void 0) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }
    module.exports = words;
  }
});

// node_modules/lodash/_createCompounder.js
var require_createCompounder = __commonJS({
  "node_modules/lodash/_createCompounder.js"(exports, module) {
    var arrayReduce = require_arrayReduce();
    var deburr = require_deburr();
    var words = require_words();
    var rsApos = "['’]";
    var reApos = RegExp(rsApos, "g");
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
      };
    }
    module.exports = createCompounder;
  }
});

// node_modules/lodash/kebabCase.js
var require_kebabCase = __commonJS({
  "node_modules/lodash/kebabCase.js"(exports, module) {
    var createCompounder = require_createCompounder();
    var kebabCase2 = createCompounder(function(result, word, index) {
      return result + (index ? "-" : "") + word.toLowerCase();
    });
    module.exports = kebabCase2;
  }
});

// node_modules/qrcode/lib/can-promise.js
var require_can_promise = __commonJS({
  "node_modules/qrcode/lib/can-promise.js"(exports, module) {
    module.exports = function() {
      return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
    };
  }
});

// node_modules/qrcode/lib/core/utils.js
var require_utils = __commonJS({
  "node_modules/qrcode/lib/core/utils.js"(exports) {
    var toSJISFunction;
    var CODEWORDS_COUNT = [
      0,
      // Not used
      26,
      44,
      70,
      100,
      134,
      172,
      196,
      242,
      292,
      346,
      404,
      466,
      532,
      581,
      655,
      733,
      815,
      901,
      991,
      1085,
      1156,
      1258,
      1364,
      1474,
      1588,
      1706,
      1828,
      1921,
      2051,
      2185,
      2323,
      2465,
      2611,
      2761,
      2876,
      3034,
      3196,
      3362,
      3532,
      3706
    ];
    exports.getSymbolSize = function getSymbolSize(version) {
      if (!version) throw new Error('"version" cannot be null or undefined');
      if (version < 1 || version > 40) throw new Error('"version" should be in range from 1 to 40');
      return version * 4 + 17;
    };
    exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version) {
      return CODEWORDS_COUNT[version];
    };
    exports.getBCHDigit = function(data) {
      let digit = 0;
      while (data !== 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    };
    exports.setToSJISFunction = function setToSJISFunction(f) {
      if (typeof f !== "function") {
        throw new Error('"toSJISFunc" is not a valid function.');
      }
      toSJISFunction = f;
    };
    exports.isKanjiModeEnabled = function() {
      return typeof toSJISFunction !== "undefined";
    };
    exports.toSJIS = function toSJIS(kanji) {
      return toSJISFunction(kanji);
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-level.js
var require_error_correction_level = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
    exports.L = {
      bit: 1
    };
    exports.M = {
      bit: 0
    };
    exports.Q = {
      bit: 3
    };
    exports.H = {
      bit: 2
    };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "l":
        case "low":
          return exports.L;
        case "m":
        case "medium":
          return exports.M;
        case "q":
        case "quartile":
          return exports.Q;
        case "h":
        case "high":
          return exports.H;
        default:
          throw new Error("Unknown EC Level: " + string);
      }
    }
    exports.isValid = function isValid(level) {
      return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
    };
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/bit-buffer.js
var require_bit_buffer = __commonJS({
  "node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
    function BitBuffer() {
      this.buffer = [];
      this.length = 0;
    }
    BitBuffer.prototype = {
      get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
      },
      put: function(num, length) {
        for (let i = 0; i < length; i++) {
          this.putBit((num >>> length - i - 1 & 1) === 1);
        }
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }
        if (bit) {
          this.buffer[bufIndex] |= 128 >>> this.length % 8;
        }
        this.length++;
      }
    };
    module.exports = BitBuffer;
  }
});

// node_modules/qrcode/lib/core/bit-matrix.js
var require_bit_matrix = __commonJS({
  "node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
    function BitMatrix(size) {
      if (!size || size < 1) {
        throw new Error("BitMatrix size must be defined and greater than 0");
      }
      this.size = size;
      this.data = new Uint8Array(size * size);
      this.reservedBit = new Uint8Array(size * size);
    }
    BitMatrix.prototype.set = function(row, col, value, reserved) {
      const index = row * this.size + col;
      this.data[index] = value;
      if (reserved) this.reservedBit[index] = true;
    };
    BitMatrix.prototype.get = function(row, col) {
      return this.data[row * this.size + col];
    };
    BitMatrix.prototype.xor = function(row, col, value) {
      this.data[row * this.size + col] ^= value;
    };
    BitMatrix.prototype.isReserved = function(row, col) {
      return this.reservedBit[row * this.size + col];
    };
    module.exports = BitMatrix;
  }
});

// node_modules/qrcode/lib/core/alignment-pattern.js
var require_alignment_pattern = __commonJS({
  "node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
    var getSymbolSize = require_utils().getSymbolSize;
    exports.getRowColCoords = function getRowColCoords(version) {
      if (version === 1) return [];
      const posCount = Math.floor(version / 7) + 2;
      const size = getSymbolSize(version);
      const intervals = size === 145 ? 26 : Math.ceil((size - 13) / (2 * posCount - 2)) * 2;
      const positions = [size - 7];
      for (let i = 1; i < posCount - 1; i++) {
        positions[i] = positions[i - 1] - intervals;
      }
      positions.push(6);
      return positions.reverse();
    };
    exports.getPositions = function getPositions(version) {
      const coords = [];
      const pos = exports.getRowColCoords(version);
      const posLength = pos.length;
      for (let i = 0; i < posLength; i++) {
        for (let j = 0; j < posLength; j++) {
          if (i === 0 && j === 0 || // top-left
          i === 0 && j === posLength - 1 || // bottom-left
          i === posLength - 1 && j === 0) {
            continue;
          }
          coords.push([pos[i], pos[j]]);
        }
      }
      return coords;
    };
  }
});

// node_modules/qrcode/lib/core/finder-pattern.js
var require_finder_pattern = __commonJS({
  "node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
    var getSymbolSize = require_utils().getSymbolSize;
    var FINDER_PATTERN_SIZE = 7;
    exports.getPositions = function getPositions(version) {
      const size = getSymbolSize(version);
      return [
        // top-left
        [0, 0],
        // top-right
        [size - FINDER_PATTERN_SIZE, 0],
        // bottom-left
        [0, size - FINDER_PATTERN_SIZE]
      ];
    };
  }
});

// node_modules/qrcode/lib/core/mask-pattern.js
var require_mask_pattern = __commonJS({
  "node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
    exports.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    exports.isValid = function isValid(mask) {
      return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    exports.from = function from(value) {
      return exports.isValid(value) ? parseInt(value, 10) : void 0;
    };
    exports.getPenaltyN1 = function getPenaltyN1(data) {
      const size = data.size;
      let points = 0;
      let sameCountCol = 0;
      let sameCountRow = 0;
      let lastCol = null;
      let lastRow = null;
      for (let row = 0; row < size; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (let col = 0; col < size; col++) {
          let module2 = data.get(row, col);
          if (module2 === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module2;
            sameCountCol = 1;
          }
          module2 = data.get(col, row);
          if (module2 === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module2;
            sameCountRow = 1;
          }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
      }
      return points;
    };
    exports.getPenaltyN2 = function getPenaltyN2(data) {
      const size = data.size;
      let points = 0;
      for (let row = 0; row < size - 1; row++) {
        for (let col = 0; col < size - 1; col++) {
          const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
          if (last === 4 || last === 0) points++;
        }
      }
      return points * PenaltyScores.N2;
    };
    exports.getPenaltyN3 = function getPenaltyN3(data) {
      const size = data.size;
      let points = 0;
      let bitsCol = 0;
      let bitsRow = 0;
      for (let row = 0; row < size; row++) {
        bitsCol = bitsRow = 0;
        for (let col = 0; col < size; col++) {
          bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
          bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
        }
      }
      return points * PenaltyScores.N3;
    };
    exports.getPenaltyN4 = function getPenaltyN4(data) {
      let darkCount = 0;
      const modulesCount = data.data.length;
      for (let i = 0; i < modulesCount; i++) darkCount += data.data[i];
      const k = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k * PenaltyScores.N4;
    };
    function getMaskAt(maskPattern, i, j) {
      switch (maskPattern) {
        case exports.Patterns.PATTERN000:
          return (i + j) % 2 === 0;
        case exports.Patterns.PATTERN001:
          return i % 2 === 0;
        case exports.Patterns.PATTERN010:
          return j % 3 === 0;
        case exports.Patterns.PATTERN011:
          return (i + j) % 3 === 0;
        case exports.Patterns.PATTERN100:
          return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
          return i * j % 2 + i * j % 3 === 0;
        case exports.Patterns.PATTERN110:
          return (i * j % 2 + i * j % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
          return (i * j % 3 + (i + j) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    }
    exports.applyMask = function applyMask(pattern, data) {
      const size = data.size;
      for (let col = 0; col < size; col++) {
        for (let row = 0; row < size; row++) {
          if (data.isReserved(row, col)) continue;
          data.xor(row, col, getMaskAt(pattern, row, col));
        }
      }
    };
    exports.getBestMask = function getBestMask(data, setupFormatFunc) {
      const numPatterns = Object.keys(exports.Patterns).length;
      let bestPattern = 0;
      let lowerPenalty = Infinity;
      for (let p = 0; p < numPatterns; p++) {
        setupFormatFunc(p);
        exports.applyMask(p, data);
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        exports.applyMask(p, data);
        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p;
        }
      }
      return bestPattern;
    };
  }
});

// node_modules/qrcode/lib/core/error-correction-code.js
var require_error_correction_code = __commonJS({
  "node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
    var ECLevel = require_error_correction_level();
    var EC_BLOCKS_TABLE = [
      // L  M  Q  H
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      1,
      2,
      2,
      4,
      1,
      2,
      4,
      4,
      2,
      4,
      4,
      4,
      2,
      4,
      6,
      5,
      2,
      4,
      6,
      6,
      2,
      5,
      8,
      8,
      4,
      5,
      8,
      8,
      4,
      5,
      8,
      11,
      4,
      8,
      10,
      11,
      4,
      9,
      12,
      16,
      4,
      9,
      16,
      16,
      6,
      10,
      12,
      18,
      6,
      10,
      17,
      16,
      6,
      11,
      16,
      19,
      6,
      13,
      18,
      21,
      7,
      14,
      21,
      25,
      8,
      16,
      20,
      25,
      8,
      17,
      23,
      25,
      9,
      17,
      23,
      34,
      9,
      18,
      25,
      30,
      10,
      20,
      27,
      32,
      12,
      21,
      29,
      35,
      12,
      23,
      34,
      37,
      12,
      25,
      34,
      40,
      13,
      26,
      35,
      42,
      14,
      28,
      38,
      45,
      15,
      29,
      40,
      48,
      16,
      31,
      43,
      51,
      17,
      33,
      45,
      54,
      18,
      35,
      48,
      57,
      19,
      37,
      51,
      60,
      19,
      38,
      53,
      63,
      20,
      40,
      56,
      66,
      21,
      43,
      59,
      70,
      22,
      45,
      62,
      74,
      24,
      47,
      65,
      77,
      25,
      49,
      68,
      81
    ];
    var EC_CODEWORDS_TABLE = [
      // L  M  Q  H
      7,
      10,
      13,
      17,
      10,
      16,
      22,
      28,
      15,
      26,
      36,
      44,
      20,
      36,
      52,
      64,
      26,
      48,
      72,
      88,
      36,
      64,
      96,
      112,
      40,
      72,
      108,
      130,
      48,
      88,
      132,
      156,
      60,
      110,
      160,
      192,
      72,
      130,
      192,
      224,
      80,
      150,
      224,
      264,
      96,
      176,
      260,
      308,
      104,
      198,
      288,
      352,
      120,
      216,
      320,
      384,
      132,
      240,
      360,
      432,
      144,
      280,
      408,
      480,
      168,
      308,
      448,
      532,
      180,
      338,
      504,
      588,
      196,
      364,
      546,
      650,
      224,
      416,
      600,
      700,
      224,
      442,
      644,
      750,
      252,
      476,
      690,
      816,
      270,
      504,
      750,
      900,
      300,
      560,
      810,
      960,
      312,
      588,
      870,
      1050,
      336,
      644,
      952,
      1110,
      360,
      700,
      1020,
      1200,
      390,
      728,
      1050,
      1260,
      420,
      784,
      1140,
      1350,
      450,
      812,
      1200,
      1440,
      480,
      868,
      1290,
      1530,
      510,
      924,
      1350,
      1620,
      540,
      980,
      1440,
      1710,
      570,
      1036,
      1530,
      1800,
      570,
      1064,
      1590,
      1890,
      600,
      1120,
      1680,
      1980,
      630,
      1204,
      1770,
      2100,
      660,
      1260,
      1860,
      2220,
      720,
      1316,
      1950,
      2310,
      750,
      1372,
      2040,
      2430
    ];
    exports.getBlocksCount = function getBlocksCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_BLOCKS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
    exports.getTotalCodewordsCount = function getTotalCodewordsCount(version, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 0];
        case ECLevel.M:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 2];
        case ECLevel.H:
          return EC_CODEWORDS_TABLE[(version - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
  }
});

// node_modules/qrcode/lib/core/galois-field.js
var require_galois_field = __commonJS({
  "node_modules/qrcode/lib/core/galois-field.js"(exports) {
    var EXP_TABLE = new Uint8Array(512);
    var LOG_TABLE = new Uint8Array(256);
    (function initTables() {
      let x = 1;
      for (let i = 0; i < 255; i++) {
        EXP_TABLE[i] = x;
        LOG_TABLE[x] = i;
        x <<= 1;
        if (x & 256) {
          x ^= 285;
        }
      }
      for (let i = 255; i < 512; i++) {
        EXP_TABLE[i] = EXP_TABLE[i - 255];
      }
    })();
    exports.log = function log3(n) {
      if (n < 1) throw new Error("log(" + n + ")");
      return LOG_TABLE[n];
    };
    exports.exp = function exp(n) {
      return EXP_TABLE[n];
    };
    exports.mul = function mul(x, y) {
      if (x === 0 || y === 0) return 0;
      return EXP_TABLE[LOG_TABLE[x] + LOG_TABLE[y]];
    };
  }
});

// node_modules/qrcode/lib/core/polynomial.js
var require_polynomial = __commonJS({
  "node_modules/qrcode/lib/core/polynomial.js"(exports) {
    var GF = require_galois_field();
    exports.mul = function mul(p1, p2) {
      const coeff = new Uint8Array(p1.length + p2.length - 1);
      for (let i = 0; i < p1.length; i++) {
        for (let j = 0; j < p2.length; j++) {
          coeff[i + j] ^= GF.mul(p1[i], p2[j]);
        }
      }
      return coeff;
    };
    exports.mod = function mod(divident, divisor) {
      let result = new Uint8Array(divident);
      while (result.length - divisor.length >= 0) {
        const coeff = result[0];
        for (let i = 0; i < divisor.length; i++) {
          result[i] ^= GF.mul(divisor[i], coeff);
        }
        let offset = 0;
        while (offset < result.length && result[offset] === 0) offset++;
        result = result.slice(offset);
      }
      return result;
    };
    exports.generateECPolynomial = function generateECPolynomial(degree) {
      let poly = new Uint8Array([1]);
      for (let i = 0; i < degree; i++) {
        poly = exports.mul(poly, new Uint8Array([1, GF.exp(i)]));
      }
      return poly;
    };
  }
});

// node_modules/qrcode/lib/core/reed-solomon-encoder.js
var require_reed_solomon_encoder = __commonJS({
  "node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
    var Polynomial = require_polynomial();
    function ReedSolomonEncoder(degree) {
      this.genPoly = void 0;
      this.degree = degree;
      if (this.degree) this.initialize(this.degree);
    }
    ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
      this.degree = degree;
      this.genPoly = Polynomial.generateECPolynomial(this.degree);
    };
    ReedSolomonEncoder.prototype.encode = function encode(data) {
      if (!this.genPoly) {
        throw new Error("Encoder not initialized");
      }
      const paddedData = new Uint8Array(data.length + this.degree);
      paddedData.set(data);
      const remainder = Polynomial.mod(paddedData, this.genPoly);
      const start3 = this.degree - remainder.length;
      if (start3 > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start3);
        return buff;
      }
      return remainder;
    };
    module.exports = ReedSolomonEncoder;
  }
});

// node_modules/qrcode/lib/core/version-check.js
var require_version_check = __commonJS({
  "node_modules/qrcode/lib/core/version-check.js"(exports) {
    exports.isValid = function isValid(version) {
      return !isNaN(version) && version >= 1 && version <= 40;
    };
  }
});

// node_modules/qrcode/lib/core/regex.js
var require_regex = __commonJS({
  "node_modules/qrcode/lib/core/regex.js"(exports) {
    var numeric = "[0-9]+";
    var alphanumeric = "[A-Z $%*+\\-./:]+";
    var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    kanji = kanji.replace(/u/g, "\\u");
    var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
    exports.KANJI = new RegExp(kanji, "g");
    exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    exports.BYTE = new RegExp(byte, "g");
    exports.NUMERIC = new RegExp(numeric, "g");
    exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
    var TEST_KANJI = new RegExp("^" + kanji + "$");
    var TEST_NUMERIC = new RegExp("^" + numeric + "$");
    var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    exports.testKanji = function testKanji(str) {
      return TEST_KANJI.test(str);
    };
    exports.testNumeric = function testNumeric(str) {
      return TEST_NUMERIC.test(str);
    };
    exports.testAlphanumeric = function testAlphanumeric(str) {
      return TEST_ALPHANUMERIC.test(str);
    };
  }
});

// node_modules/qrcode/lib/core/mode.js
var require_mode = __commonJS({
  "node_modules/qrcode/lib/core/mode.js"(exports) {
    var VersionCheck = require_version_check();
    var Regex = require_regex();
    exports.NUMERIC = {
      id: "Numeric",
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    exports.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    exports.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    exports.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    exports.MIXED = {
      bit: -1
    };
    exports.getCharCountIndicator = function getCharCountIndicator(mode, version) {
      if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid version: " + version);
      }
      if (version >= 1 && version < 10) return mode.ccBits[0];
      else if (version < 27) return mode.ccBits[1];
      return mode.ccBits[2];
    };
    exports.getBestModeForData = function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
      else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
      else if (Regex.testKanji(dataStr)) return exports.KANJI;
      else return exports.BYTE;
    };
    exports.toString = function toString(mode) {
      if (mode && mode.id) return mode.id;
      throw new Error("Invalid mode");
    };
    exports.isValid = function isValid(mode) {
      return mode && mode.bit && mode.ccBits;
    };
    function fromString(string) {
      if (typeof string !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string.toLowerCase();
      switch (lcStr) {
        case "numeric":
          return exports.NUMERIC;
        case "alphanumeric":
          return exports.ALPHANUMERIC;
        case "kanji":
          return exports.KANJI;
        case "byte":
          return exports.BYTE;
        default:
          throw new Error("Unknown mode: " + string);
      }
    }
    exports.from = function from(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString(value);
      } catch (e) {
        return defaultValue;
      }
    };
  }
});

// node_modules/qrcode/lib/core/version.js
var require_version = __commonJS({
  "node_modules/qrcode/lib/core/version.js"(exports) {
    var Utils = require_utils();
    var ECCode = require_error_correction_code();
    var ECLevel = require_error_correction_level();
    var Mode = require_mode();
    var VersionCheck = require_version_check();
    var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    var G18_BCH = Utils.getBCHDigit(G18);
    function getBestVersionForDataLength(mode, length, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    function getReservedBitsCount(mode, version) {
      return Mode.getCharCountIndicator(mode, version) + 4;
    }
    function getTotalBitsFromDataArray(segments, version) {
      let totalBits = 0;
      segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version);
        totalBits += reservedBits + data.getBitsLength();
      });
      return totalBits;
    }
    function getBestVersionForMixedData(segments, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        const length = getTotalBitsFromDataArray(segments, currentVersion);
        if (length <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    exports.from = function from(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }
      return defaultValue;
    };
    exports.getCapacity = function getCapacity(version, errorCorrectionLevel, mode) {
      if (!VersionCheck.isValid(version)) {
        throw new Error("Invalid QR Code version");
      }
      if (typeof mode === "undefined") mode = Mode.BYTE;
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode === Mode.MIXED) return dataTotalCodewordsBits;
      const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version);
      switch (mode) {
        case Mode.NUMERIC:
          return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
          return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    };
    exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
      let seg;
      const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
      if (Array.isArray(data)) {
        if (data.length > 1) {
          return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
          return 1;
        }
        seg = data[0];
      } else {
        seg = data;
      }
      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    exports.getEncodedBits = function getEncodedBits(version) {
      if (!VersionCheck.isValid(version) || version < 7) {
        throw new Error("Invalid QR Code version");
      }
      let d = version << 12;
      while (Utils.getBCHDigit(d) - G18_BCH >= 0) {
        d ^= G18 << Utils.getBCHDigit(d) - G18_BCH;
      }
      return version << 12 | d;
    };
  }
});

// node_modules/qrcode/lib/core/format-info.js
var require_format_info = __commonJS({
  "node_modules/qrcode/lib/core/format-info.js"(exports) {
    var Utils = require_utils();
    var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
    var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
    var G15_BCH = Utils.getBCHDigit(G15);
    exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
      const data = errorCorrectionLevel.bit << 3 | mask;
      let d = data << 10;
      while (Utils.getBCHDigit(d) - G15_BCH >= 0) {
        d ^= G15 << Utils.getBCHDigit(d) - G15_BCH;
      }
      return (data << 10 | d) ^ G15_MASK;
    };
  }
});

// node_modules/qrcode/lib/core/numeric-data.js
var require_numeric_data = __commonJS({
  "node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
    var Mode = require_mode();
    function NumericData(data) {
      this.mode = Mode.NUMERIC;
      this.data = data.toString();
    }
    NumericData.getBitsLength = function getBitsLength(length) {
      return 10 * Math.floor(length / 3) + (length % 3 ? length % 3 * 3 + 1 : 0);
    };
    NumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    NumericData.prototype.getBitsLength = function getBitsLength() {
      return NumericData.getBitsLength(this.data.length);
    };
    NumericData.prototype.write = function write(bitBuffer) {
      let i, group, value;
      for (i = 0; i + 3 <= this.data.length; i += 3) {
        group = this.data.substr(i, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
      }
      const remainingNum = this.data.length - i;
      if (remainingNum > 0) {
        group = this.data.substr(i);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
      }
    };
    module.exports = NumericData;
  }
});

// node_modules/qrcode/lib/core/alphanumeric-data.js
var require_alphanumeric_data = __commonJS({
  "node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
    var Mode = require_mode();
    var ALPHA_NUM_CHARS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
    function AlphanumericData(data) {
      this.mode = Mode.ALPHANUMERIC;
      this.data = data;
    }
    AlphanumericData.getBitsLength = function getBitsLength(length) {
      return 11 * Math.floor(length / 2) + 6 * (length % 2);
    };
    AlphanumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    AlphanumericData.prototype.getBitsLength = function getBitsLength() {
      return AlphanumericData.getBitsLength(this.data.length);
    };
    AlphanumericData.prototype.write = function write(bitBuffer) {
      let i;
      for (i = 0; i + 2 <= this.data.length; i += 2) {
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i]) * 45;
        value += ALPHA_NUM_CHARS.indexOf(this.data[i + 1]);
        bitBuffer.put(value, 11);
      }
      if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i]), 6);
      }
    };
    module.exports = AlphanumericData;
  }
});

// node_modules/encode-utf8/index.js
var require_encode_utf8 = __commonJS({
  "node_modules/encode-utf8/index.js"(exports, module) {
    "use strict";
    module.exports = function encodeUtf8(input2) {
      var result = [];
      var size = input2.length;
      for (var index = 0; index < size; index++) {
        var point = input2.charCodeAt(index);
        if (point >= 55296 && point <= 56319 && size > index + 1) {
          var second = input2.charCodeAt(index + 1);
          if (second >= 56320 && second <= 57343) {
            point = (point - 55296) * 1024 + second - 56320 + 65536;
            index += 1;
          }
        }
        if (point < 128) {
          result.push(point);
          continue;
        }
        if (point < 2048) {
          result.push(point >> 6 | 192);
          result.push(point & 63 | 128);
          continue;
        }
        if (point < 55296 || point >= 57344 && point < 65536) {
          result.push(point >> 12 | 224);
          result.push(point >> 6 & 63 | 128);
          result.push(point & 63 | 128);
          continue;
        }
        if (point >= 65536 && point <= 1114111) {
          result.push(point >> 18 | 240);
          result.push(point >> 12 & 63 | 128);
          result.push(point >> 6 & 63 | 128);
          result.push(point & 63 | 128);
          continue;
        }
        result.push(239, 191, 189);
      }
      return new Uint8Array(result).buffer;
    };
  }
});

// node_modules/qrcode/lib/core/byte-data.js
var require_byte_data = __commonJS({
  "node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
    var encodeUtf8 = require_encode_utf8();
    var Mode = require_mode();
    function ByteData(data) {
      this.mode = Mode.BYTE;
      this.data = new Uint8Array(encodeUtf8(data));
    }
    ByteData.getBitsLength = function getBitsLength(length) {
      return length * 8;
    };
    ByteData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    ByteData.prototype.getBitsLength = function getBitsLength() {
      return ByteData.getBitsLength(this.data.length);
    };
    ByteData.prototype.write = function(bitBuffer) {
      for (let i = 0, l = this.data.length; i < l; i++) {
        bitBuffer.put(this.data[i], 8);
      }
    };
    module.exports = ByteData;
  }
});

// node_modules/qrcode/lib/core/kanji-data.js
var require_kanji_data = __commonJS({
  "node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
    var Mode = require_mode();
    var Utils = require_utils();
    function KanjiData(data) {
      this.mode = Mode.KANJI;
      this.data = data;
    }
    KanjiData.getBitsLength = function getBitsLength(length) {
      return length * 13;
    };
    KanjiData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    KanjiData.prototype.getBitsLength = function getBitsLength() {
      return KanjiData.getBitsLength(this.data.length);
    };
    KanjiData.prototype.write = function(bitBuffer) {
      let i;
      for (i = 0; i < this.data.length; i++) {
        let value = Utils.toSJIS(this.data[i]);
        if (value >= 33088 && value <= 40956) {
          value -= 33088;
        } else if (value >= 57408 && value <= 60351) {
          value -= 49472;
        } else {
          throw new Error("Invalid SJIS character: " + this.data[i] + "\nMake sure your charset is UTF-8");
        }
        value = (value >>> 8 & 255) * 192 + (value & 255);
        bitBuffer.put(value, 13);
      }
    };
    module.exports = KanjiData;
  }
});

// node_modules/dijkstrajs/dijkstra.js
var require_dijkstra = __commonJS({
  "node_modules/dijkstrajs/dijkstra.js"(exports, module) {
    "use strict";
    var dijkstra = {
      single_source_shortest_paths: function(graph, s, d) {
        var predecessors = {};
        var costs = {};
        costs[s] = 0;
        var open = dijkstra.PriorityQueue.make();
        open.push(s, 0);
        var closest, u, v, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while (!open.empty()) {
          closest = open.pop();
          u = closest.value;
          cost_of_s_to_u = closest.cost;
          adjacent_nodes = graph[u] || {};
          for (v in adjacent_nodes) {
            if (adjacent_nodes.hasOwnProperty(v)) {
              cost_of_e = adjacent_nodes[v];
              cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
              cost_of_s_to_v = costs[v];
              first_visit = typeof costs[v] === "undefined";
              if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                costs[v] = cost_of_s_to_u_plus_cost_of_e;
                open.push(v, cost_of_s_to_u_plus_cost_of_e);
                predecessors[v] = u;
              }
            }
          }
        }
        if (typeof d !== "undefined" && typeof costs[d] === "undefined") {
          var msg = ["Could not find a path from ", s, " to ", d, "."].join("");
          throw new Error(msg);
        }
        return predecessors;
      },
      extract_shortest_path_from_predecessor_list: function(predecessors, d) {
        var nodes = [];
        var u = d;
        var predecessor;
        while (u) {
          nodes.push(u);
          predecessor = predecessors[u];
          u = predecessors[u];
        }
        nodes.reverse();
        return nodes;
      },
      find_path: function(graph, s, d) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s, d);
        return dijkstra.extract_shortest_path_from_predecessor_list(predecessors, d);
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(opts) {
          var T = dijkstra.PriorityQueue, t2 = {}, key;
          opts = opts || {};
          for (key in T) {
            if (T.hasOwnProperty(key)) {
              t2[key] = T[key];
            }
          }
          t2.queue = [];
          t2.sorter = opts.sorter || T.default_sorter;
          return t2;
        },
        default_sorter: function(a, b) {
          return a.cost - b.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(value, cost) {
          var item = {
            value,
            cost
          };
          this.queue.push(item);
          this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    if (typeof module !== "undefined") {
      module.exports = dijkstra;
    }
  }
});

// node_modules/qrcode/lib/core/segments.js
var require_segments = __commonJS({
  "node_modules/qrcode/lib/core/segments.js"(exports) {
    var Mode = require_mode();
    var NumericData = require_numeric_data();
    var AlphanumericData = require_alphanumeric_data();
    var ByteData = require_byte_data();
    var KanjiData = require_kanji_data();
    var Regex = require_regex();
    var Utils = require_utils();
    var dijkstra = require_dijkstra();
    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    function getSegments(regex, mode, str) {
      const segments = [];
      let result;
      while ((result = regex.exec(str)) !== null) {
        segments.push({
          data: result[0],
          index: result.index,
          mode,
          length: result[0].length
        });
      }
      return segments;
    }
    function getSegmentsFromString(dataStr) {
      const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
      const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
      let byteSegs;
      let kanjiSegs;
      if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
      }
      const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function(s1, s2) {
        return s1.index - s2.index;
      }).map(function(obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    function getSegmentBitsLength(length, mode) {
      switch (mode) {
        case Mode.NUMERIC:
          return NumericData.getBitsLength(length);
        case Mode.ALPHANUMERIC:
          return AlphanumericData.getBitsLength(length);
        case Mode.KANJI:
          return KanjiData.getBitsLength(length);
        case Mode.BYTE:
          return ByteData.getBitsLength(length);
      }
    }
    function mergeSegments(segs) {
      return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }
        acc.push(curr);
        return acc;
      }, []);
    }
    function buildNodes(segs) {
      const nodes = [];
      for (let i = 0; i < segs.length; i++) {
        const seg = segs[i];
        switch (seg.mode) {
          case Mode.NUMERIC:
            nodes.push([seg, {
              data: seg.data,
              mode: Mode.ALPHANUMERIC,
              length: seg.length
            }, {
              data: seg.data,
              mode: Mode.BYTE,
              length: seg.length
            }]);
            break;
          case Mode.ALPHANUMERIC:
            nodes.push([seg, {
              data: seg.data,
              mode: Mode.BYTE,
              length: seg.length
            }]);
            break;
          case Mode.KANJI:
            nodes.push([seg, {
              data: seg.data,
              mode: Mode.BYTE,
              length: getStringByteLength(seg.data)
            }]);
            break;
          case Mode.BYTE:
            nodes.push([{
              data: seg.data,
              mode: Mode.BYTE,
              length: getStringByteLength(seg.data)
            }]);
        }
      }
      return nodes;
    }
    function buildGraph(nodes, version) {
      const table2 = {};
      const graph = {
        start: {}
      };
      let prevNodeIds = ["start"];
      for (let i = 0; i < nodes.length; i++) {
        const nodeGroup = nodes[i];
        const currentNodeIds = [];
        for (let j = 0; j < nodeGroup.length; j++) {
          const node = nodeGroup[j];
          const key = "" + i + j;
          currentNodeIds.push(key);
          table2[key] = {
            node,
            lastCount: 0
          };
          graph[key] = {};
          for (let n = 0; n < prevNodeIds.length; n++) {
            const prevNodeId = prevNodeIds[n];
            if (table2[prevNodeId] && table2[prevNodeId].node.mode === node.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table2[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table2[prevNodeId].lastCount, node.mode);
              table2[prevNodeId].lastCount += node.length;
            } else {
              if (table2[prevNodeId]) table2[prevNodeId].lastCount = node.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version);
            }
          }
        }
        prevNodeIds = currentNodeIds;
      }
      for (let n = 0; n < prevNodeIds.length; n++) {
        graph[prevNodeIds[n]].end = 0;
      }
      return {
        map: graph,
        table: table2
      };
    }
    function buildSingleSegment(data, modesHint) {
      let mode;
      const bestMode = Mode.getBestModeForData(data);
      mode = Mode.from(modesHint, bestMode);
      if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
      }
      if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
      }
      switch (mode) {
        case Mode.NUMERIC:
          return new NumericData(data);
        case Mode.ALPHANUMERIC:
          return new AlphanumericData(data);
        case Mode.KANJI:
          return new KanjiData(data);
        case Mode.BYTE:
          return new ByteData(data);
      }
    }
    exports.fromArray = function fromArray(array) {
      return array.reduce(function(acc, seg) {
        if (typeof seg === "string") {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
      }, []);
    };
    exports.fromString = function fromString(data, version) {
      const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
      const nodes = buildNodes(segs);
      const graph = buildGraph(nodes, version);
      const path2 = dijkstra.find_path(graph.map, "start", "end");
      const optimizedSegs = [];
      for (let i = 1; i < path2.length - 1; i++) {
        optimizedSegs.push(graph.table[path2[i]].node);
      }
      return exports.fromArray(mergeSegments(optimizedSegs));
    };
    exports.rawSplit = function rawSplit(data) {
      return exports.fromArray(getSegmentsFromString(data, Utils.isKanjiModeEnabled()));
    };
  }
});

// node_modules/qrcode/lib/core/qrcode.js
var require_qrcode = __commonJS({
  "node_modules/qrcode/lib/core/qrcode.js"(exports) {
    var Utils = require_utils();
    var ECLevel = require_error_correction_level();
    var BitBuffer = require_bit_buffer();
    var BitMatrix = require_bit_matrix();
    var AlignmentPattern = require_alignment_pattern();
    var FinderPattern = require_finder_pattern();
    var MaskPattern = require_mask_pattern();
    var ECCode = require_error_correction_code();
    var ReedSolomonEncoder = require_reed_solomon_encoder();
    var Version = require_version();
    var FormatInfo = require_format_info();
    var Mode = require_mode();
    var Segments = require_segments();
    function setupFinderPattern(matrix, version) {
      const size = matrix.size;
      const pos = FinderPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -1; r <= 7; r++) {
          if (row + r <= -1 || size <= row + r) continue;
          for (let c = -1; c <= 7; c++) {
            if (col + c <= -1 || size <= col + c) continue;
            if (r >= 0 && r <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (r === 0 || r === 6) || r >= 2 && r <= 4 && c >= 2 && c <= 4) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupTimingPattern(matrix) {
      const size = matrix.size;
      for (let r = 8; r < size - 8; r++) {
        const value = r % 2 === 0;
        matrix.set(r, 6, value, true);
        matrix.set(6, r, value, true);
      }
    }
    function setupAlignmentPattern(matrix, version) {
      const pos = AlignmentPattern.getPositions(version);
      for (let i = 0; i < pos.length; i++) {
        const row = pos[i][0];
        const col = pos[i][1];
        for (let r = -2; r <= 2; r++) {
          for (let c = -2; c <= 2; c++) {
            if (r === -2 || r === 2 || c === -2 || c === 2 || r === 0 && c === 0) {
              matrix.set(row + r, col + c, true, true);
            } else {
              matrix.set(row + r, col + c, false, true);
            }
          }
        }
      }
    }
    function setupVersionInfo(matrix, version) {
      const size = matrix.size;
      const bits = Version.getEncodedBits(version);
      let row, col, mod;
      for (let i = 0; i < 18; i++) {
        row = Math.floor(i / 3);
        col = i % 3 + size - 8 - 3;
        mod = (bits >> i & 1) === 1;
        matrix.set(row, col, mod, true);
        matrix.set(col, row, mod, true);
      }
    }
    function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
      const size = matrix.size;
      const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
      let i, mod;
      for (i = 0; i < 15; i++) {
        mod = (bits >> i & 1) === 1;
        if (i < 6) {
          matrix.set(i, 8, mod, true);
        } else if (i < 8) {
          matrix.set(i + 1, 8, mod, true);
        } else {
          matrix.set(size - 15 + i, 8, mod, true);
        }
        if (i < 8) {
          matrix.set(8, size - i - 1, mod, true);
        } else if (i < 9) {
          matrix.set(8, 15 - i - 1 + 1, mod, true);
        } else {
          matrix.set(8, 15 - i - 1, mod, true);
        }
      }
      matrix.set(size - 8, 8, 1, true);
    }
    function setupData(matrix, data) {
      const size = matrix.size;
      let inc = -1;
      let row = size - 1;
      let bitIndex = 7;
      let byteIndex = 0;
      for (let col = size - 1; col > 0; col -= 2) {
        if (col === 6) col--;
        while (true) {
          for (let c = 0; c < 2; c++) {
            if (!matrix.isReserved(row, col - c)) {
              let dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) === 1;
              }
              matrix.set(row, col - c, dark);
              bitIndex--;
              if (bitIndex === -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || size <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
    function createData(version, errorCorrectionLevel, segments) {
      const buffer = new BitBuffer();
      segments.forEach(function(data) {
        buffer.put(data.mode.bit, 4);
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version));
        data.write(buffer);
      });
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(0);
      }
      const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
      for (let i = 0; i < remainingByte; i++) {
        buffer.put(i % 2 ? 17 : 236, 8);
      }
      return createCodewords(buffer, version, errorCorrectionLevel);
    }
    function createCodewords(bitBuffer, version, errorCorrectionLevel) {
      const totalCodewords = Utils.getSymbolTotalCodewords(version);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version, errorCorrectionLevel);
      const dataTotalCodewords = totalCodewords - ecTotalCodewords;
      const ecTotalBlocks = ECCode.getBlocksCount(version, errorCorrectionLevel);
      const blocksInGroup2 = totalCodewords % ecTotalBlocks;
      const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
      const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
      const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
      const rs = new ReedSolomonEncoder(ecCount);
      let offset = 0;
      const dcData = new Array(ecTotalBlocks);
      const ecData = new Array(ecTotalBlocks);
      let maxDataSize = 0;
      const buffer = new Uint8Array(bitBuffer.buffer);
      for (let b = 0; b < ecTotalBlocks; b++) {
        const dataSize = b < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        dcData[b] = buffer.slice(offset, offset + dataSize);
        ecData[b] = rs.encode(dcData[b]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
      }
      const data = new Uint8Array(totalCodewords);
      let index = 0;
      let i, r;
      for (i = 0; i < maxDataSize; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          if (i < dcData[r].length) {
            data[index++] = dcData[r][i];
          }
        }
      }
      for (i = 0; i < ecCount; i++) {
        for (r = 0; r < ecTotalBlocks; r++) {
          data[index++] = ecData[r][i];
        }
      }
      return data;
    }
    function createSymbol(data, version, errorCorrectionLevel, maskPattern) {
      let segments;
      if (Array.isArray(data)) {
        segments = Segments.fromArray(data);
      } else if (typeof data === "string") {
        let estimatedVersion = version;
        if (!estimatedVersion) {
          const rawSegments = Segments.rawSplit(data);
          estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        segments = Segments.fromString(data, estimatedVersion || 40);
      } else {
        throw new Error("Invalid data");
      }
      const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
      if (!bestVersion) {
        throw new Error("The amount of data is too big to be stored in a QR Code");
      }
      if (!version) {
        version = bestVersion;
      } else if (version < bestVersion) {
        throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n");
      }
      const dataBits = createData(version, errorCorrectionLevel, segments);
      const moduleCount = Utils.getSymbolSize(version);
      const modules = new BitMatrix(moduleCount);
      setupFinderPattern(modules, version);
      setupTimingPattern(modules);
      setupAlignmentPattern(modules, version);
      setupFormatInfo(modules, errorCorrectionLevel, 0);
      if (version >= 7) {
        setupVersionInfo(modules, version);
      }
      setupData(modules, dataBits);
      if (isNaN(maskPattern)) {
        maskPattern = MaskPattern.getBestMask(modules, setupFormatInfo.bind(null, modules, errorCorrectionLevel));
      }
      MaskPattern.applyMask(maskPattern, modules);
      setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
      return {
        modules,
        version,
        errorCorrectionLevel,
        maskPattern,
        segments
      };
    }
    exports.create = function create(data, options) {
      if (typeof data === "undefined" || data === "") {
        throw new Error("No input text");
      }
      let errorCorrectionLevel = ECLevel.M;
      let version;
      let mask;
      if (typeof options !== "undefined") {
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
          Utils.setToSJISFunction(options.toSJISFunc);
        }
      }
      return createSymbol(data, version, errorCorrectionLevel, mask);
    };
  }
});

// node_modules/qrcode/lib/renderer/utils.js
var require_utils2 = __commonJS({
  "node_modules/qrcode/lib/renderer/utils.js"(exports) {
    function hex2rgba(hex) {
      if (typeof hex === "number") {
        hex = hex.toString();
      }
      if (typeof hex !== "string") {
        throw new Error("Color should be defined as hex string");
      }
      let hexCode = hex.slice().replace("#", "").split("");
      if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error("Invalid hex color: " + hex);
      }
      if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c) {
          return [c, c];
        }));
      }
      if (hexCode.length === 6) hexCode.push("F", "F");
      const hexValue = parseInt(hexCode.join(""), 16);
      return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
      };
    }
    exports.getOptions = function getOptions(options) {
      if (!options) options = {};
      if (!options.color) options.color = {};
      const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
      const width = options.width && options.width >= 21 ? options.width : void 0;
      const scale = options.scale || 4;
      return {
        width,
        scale: width ? 4 : scale,
        margin,
        color: {
          dark: hex2rgba(options.color.dark || "#000000ff"),
          light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
      };
    };
    exports.getScale = function getScale(qrSize, opts) {
      return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
    };
    exports.getImageWidth = function getImageWidth(qrSize, opts) {
      const scale = exports.getScale(qrSize, opts);
      return Math.floor((qrSize + opts.margin * 2) * scale);
    };
    exports.qrToImageData = function qrToImageData(imgData, qr, opts) {
      const size = qr.modules.size;
      const data = qr.modules.data;
      const scale = exports.getScale(size, opts);
      const symbolSize = Math.floor((size + opts.margin * 2) * scale);
      const scaledMargin = opts.margin * scale;
      const palette = [opts.color.light, opts.color.dark];
      for (let i = 0; i < symbolSize; i++) {
        for (let j = 0; j < symbolSize; j++) {
          let posDst = (i * symbolSize + j) * 4;
          let pxColor = opts.color.light;
          if (i >= scaledMargin && j >= scaledMargin && i < symbolSize - scaledMargin && j < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i - scaledMargin) / scale);
            const jSrc = Math.floor((j - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size + jSrc] ? 1 : 0];
          }
          imgData[posDst++] = pxColor.r;
          imgData[posDst++] = pxColor.g;
          imgData[posDst++] = pxColor.b;
          imgData[posDst] = pxColor.a;
        }
      }
    };
  }
});

// node_modules/qrcode/lib/renderer/canvas.js
var require_canvas = __commonJS({
  "node_modules/qrcode/lib/renderer/canvas.js"(exports) {
    var Utils = require_utils2();
    function clearCanvas(ctx, canvas, size) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!canvas.style) canvas.style = {};
      canvas.height = size;
      canvas.width = size;
      canvas.style.height = size + "px";
      canvas.style.width = size + "px";
    }
    function getCanvasElement() {
      try {
        return document.createElement("canvas");
      } catch (e) {
        throw new Error("You need to specify a canvas element");
      }
    }
    exports.render = function render(qrData, canvas, options) {
      let opts = options;
      let canvasEl = canvas;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!canvas) {
        canvasEl = getCanvasElement();
      }
      opts = Utils.getOptions(opts);
      const size = Utils.getImageWidth(qrData.modules.size, opts);
      const ctx = canvasEl.getContext("2d");
      const image2 = ctx.createImageData(size, size);
      Utils.qrToImageData(image2.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size);
      ctx.putImageData(image2, 0, 0);
      return canvasEl;
    };
    exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
      let opts = options;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!opts) opts = {};
      const canvasEl = exports.render(qrData, canvas, opts);
      const type = opts.type || "image/png";
      const rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type, rendererOpts.quality);
    };
  }
});

// node_modules/qrcode/lib/renderer/svg-tag.js
var require_svg_tag = __commonJS({
  "node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
    var Utils = require_utils2();
    function getColorAttrib(color, attrib) {
      const alpha = color.a / 255;
      const str = attrib + '="' + color.hex + '"';
      return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
    }
    function svgCmd(cmd, x, y) {
      let str = cmd + x;
      if (typeof y !== "undefined") str += " " + y;
      return str;
    }
    function qrToPath(data, size, margin) {
      let path2 = "";
      let moveBy = 0;
      let newRow = false;
      let lineLength = 0;
      for (let i = 0; i < data.length; i++) {
        const col = Math.floor(i % size);
        const row = Math.floor(i / size);
        if (!col && !newRow) newRow = true;
        if (data[i]) {
          lineLength++;
          if (!(i > 0 && col > 0 && data[i - 1])) {
            path2 += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
            moveBy = 0;
            newRow = false;
          }
          if (!(col + 1 < size && data[i + 1])) {
            path2 += svgCmd("h", lineLength);
            lineLength = 0;
          }
        } else {
          moveBy++;
        }
      }
      return path2;
    }
    exports.render = function render(qrData, options, cb) {
      const opts = Utils.getOptions(options);
      const size = qrData.modules.size;
      const data = qrData.modules.data;
      const qrcodesize = size + opts.margin * 2;
      const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
      const path2 = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size, opts.margin) + '"/>';
      const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
      const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
      const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path2 + "</svg>\n";
      if (typeof cb === "function") {
        cb(null, svgTag);
      }
      return svgTag;
    };
  }
});

// node_modules/qrcode/lib/browser.js
var require_browser = __commonJS({
  "node_modules/qrcode/lib/browser.js"(exports) {
    var canPromise = require_can_promise();
    var QRCode2 = require_qrcode();
    var CanvasRenderer = require_canvas();
    var SvgRenderer = require_svg_tag();
    function renderCanvas(renderFunc, canvas, text2, opts, cb) {
      const args = [].slice.call(arguments, 1);
      const argsNum = args.length;
      const isLastArgCb = typeof args[argsNum - 1] === "function";
      if (!isLastArgCb && !canPromise()) {
        throw new Error("Callback required as last argument");
      }
      if (isLastArgCb) {
        if (argsNum < 2) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 2) {
          cb = text2;
          text2 = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 3) {
          if (canvas.getContext && typeof cb === "undefined") {
            cb = opts;
            opts = void 0;
          } else {
            cb = opts;
            opts = text2;
            text2 = canvas;
            canvas = void 0;
          }
        }
      } else {
        if (argsNum < 1) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 1) {
          text2 = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 2 && !canvas.getContext) {
          opts = text2;
          text2 = canvas;
          canvas = void 0;
        }
        return new Promise(function(resolve, reject) {
          try {
            const data = QRCode2.create(text2, opts);
            resolve(renderFunc(data, canvas, opts));
          } catch (e) {
            reject(e);
          }
        });
      }
      try {
        const data = QRCode2.create(text2, opts);
        cb(null, renderFunc(data, canvas, opts));
      } catch (e) {
        cb(e);
      }
    }
    exports.create = QRCode2.create;
    exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
    exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
    exports.toString = renderCanvas.bind(null, function(data, _, opts) {
      return SvgRenderer.render(data, opts);
    });
  }
});

// node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/actor.mjs
var getActorState = (state) => {
  return state.context.actorRef?.getSnapshot();
};
var getActorContext = (state) => {
  return getActorState(state)?.context;
};

// node_modules/@aws-amplify/ui/dist/esm/utils/setUserAgent/constants.mjs
var AI_INPUT_BASE = {
  category: Category.AI,
  apis: [AiAction.CreateConversation, AiAction.DeleteConversation, AiAction.ListConversations, AiAction.UpdateConversation, AiAction.OnMessage, AiAction.SendMessage, AiAction.Generation]
};
var ACCOUNT_SETTINGS_INPUT_BASE = {
  apis: [AuthAction.DeleteUser, AuthAction.UpdatePassword],
  category: Category.Auth
};
var AUTHENTICATOR_INPUT_BASE = {
  apis: [AuthAction.SignUp, AuthAction.ConfirmSignUp, AuthAction.ResendSignUpCode, AuthAction.SignIn, AuthAction.ConfirmSignIn, AuthAction.FetchUserAttributes, AuthAction.SignOut, AuthAction.ResetPassword, AuthAction.ConfirmResetPassword, AuthAction.SignInWithRedirect],
  category: Category.Auth
};
var FILE_UPLOADER_BASE_INPUT = {
  apis: [StorageAction.UploadData],
  category: Category.Storage
};
var IN_APP_MESSAGING_INPUT_BASE = {
  apis: [InAppMessagingAction.NotifyMessageInteraction],
  category: Category.InAppMessaging
};
var LOCATION_SEARCH_INPUT_BASE = {
  category: Category.Geo,
  apis: [GeoAction.SearchByText, GeoAction.SearchForSuggestions, GeoAction.SearchByPlaceId]
};
var MAP_VIEW_INPUT_BASE = {
  category: Category.Geo,
  apis: []
};
var STORAGE_MANAGER_INPUT_BASE = {
  apis: [StorageAction.UploadData],
  category: Category.Storage
};
var STORAGE_BROWSER_INPUT_BASE = {
  apis: [StorageAction.UploadData, StorageAction.Copy, StorageAction.GetUrl, StorageAction.List, StorageAction.Remove, StorageAction.GetDataAccess, StorageAction.ListCallerAccessGrants],
  category: Category.Storage
};

// node_modules/@aws-amplify/ui/dist/esm/utils/utils.mjs
function isObject(value) {
  return value != null && !Array.isArray(value) && typeof value === "object";
}
function isString(value) {
  return typeof value === "string" || typeof value === "object" && Object.prototype.toString.call(value) === "[object String]";
}
function isMap(value) {
  return isObject(value) && Object.prototype.toString.call(value) === "[object Map]";
}
function isSet(value) {
  return isObject(value) && Object.prototype.toString.call(value) === "[object Set]";
}
function isEmpty(value) {
  if (value === null || value === void 0) return true;
  if (isObject(value) && (isMap(value) || isSet(value))) {
    return !value.size;
  }
  if (isObject(value) && (isString(value) || Array.isArray(value))) {
    return !value.length;
  }
  for (const key in value) {
    if (has(value, key)) {
      return false;
    }
  }
  return true;
}
function isEmptyObject(value) {
  return isObject(value) && isEmpty(value);
}
function has(value, key) {
  return value != null && Object.prototype.hasOwnProperty.call(value, key);
}
function isFunction(value) {
  return typeof value === "function";
}
function noop(..._) {
  return;
}

// node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/defaultAuthHubHandler.mjs
var defaultAuthHubHandler = ({
  payload
}, service, options) => {
  const {
    data,
    event: event2
  } = payload;
  const {
    send: send3
  } = service;
  const {
    onSignIn,
    onSignOut
  } = options ?? {};
  switch (event2) {
    case "signedIn": {
      if (isFunction(onSignIn)) {
        onSignIn(payload);
      }
      break;
    }
    case "signInWithRedirect": {
      send3("SIGN_IN_WITH_REDIRECT");
      break;
    }
    case "signedOut": {
      if (isFunction(onSignOut)) {
        onSignOut();
      }
      send3("SIGN_OUT");
      break;
    }
    case "tokenRefresh_failure": {
      if (data?.error?.name === AmplifyErrorCode.NetworkError) {
        return;
      }
      send3("SIGN_OUT");
      break;
    }
  }
};
var listenToAuthHub = (service, handler = defaultAuthHubHandler) => {
  const eventHandler = (data) => handler(data, service);
  return Hub.listen("auth", eventHandler, "authenticator-hub-handler");
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/country-dial-codes.mjs
var countryDialCodes = ["+1", "+7", "+20", "+27", "+30", "+31", "+32", "+33", "+34", "+36", "+39", "+40", "+41", "+43", "+44", "+45", "+46", "+47", "+48", "+49", "+51", "+52", "+53", "+54", "+55", "+56", "+57", "+58", "+60", "+61", "+62", "+63", "+64", "+65", "+66", "+81", "+82", "+84", "+86", "+90", "+91", "+92", "+93", "+94", "+95", "+98", "+212", "+213", "+216", "+218", "+220", "+221", "+222", "+223", "+224", "+225", "+226", "+227", "+228", "+229", "+230", "+231", "+232", "+233", "+234", "+235", "+236", "+237", "+238", "+239", "+240", "+241", "+242", "+243", "+244", "+245", "+246", "+248", "+249", "+250", "+251", "+252", "+253", "+254", "+255", "+256", "+257", "+258", "+260", "+261", "+262", "+263", "+264", "+265", "+266", "+267", "+268", "+269", "+290", "+291", "+297", "+298", "+299", "+345", "+350", "+351", "+352", "+353", "+354", "+355", "+356", "+357", "+358", "+359", "+370", "+371", "+372", "+373", "+374", "+375", "+376", "+377", "+378", "+379", "+380", "+381", "+382", "+385", "+386", "+387", "+389", "+420", "+421", "+423", "+500", "+501", "+502", "+503", "+504", "+505", "+506", "+507", "+508", "+509", "+537", "+590", "+591", "+593", "+594", "+595", "+596", "+597", "+598", "+599", "+670", "+672", "+673", "+674", "+675", "+676", "+677", "+678", "+679", "+680", "+681", "+682", "+683", "+685", "+686", "+687", "+688", "+689", "+690", "+691", "+692", "+850", "+852", "+853", "+855", "+856", "+872", "+880", "+886", "+960", "+961", "+962", "+963", "+964", "+965", "+966", "+967", "+968", "+970", "+971", "+972", "+973", "+974", "+975", "+976", "+977", "+992", "+993", "+994", "+995", "+996", "+998"];

// node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/constants.mjs
var defaultFormFieldOptions = {
  birthdate: {
    label: "Birthdate",
    placeholder: "Enter your Birthdate",
    type: "date",
    autocomplete: "bday",
    isRequired: true
  },
  confirmation_code: {
    label: "Confirmation Code",
    placeholder: "Enter your Confirmation Code",
    type: "text",
    autocomplete: "one-time-code",
    isRequired: true
  },
  confirm_password: {
    label: "Confirm Password",
    placeholder: "Please confirm your Password",
    type: "password",
    autocomplete: "new-password",
    isRequired: true
  },
  email: {
    label: "Email",
    placeholder: "Enter your Email",
    type: "email",
    autocomplete: "username",
    isRequired: true
  },
  family_name: {
    label: "Family Name",
    placeholder: "Enter your Family Name",
    type: "text",
    autocomplete: "family-name",
    isRequired: true
  },
  given_name: {
    label: "Given Name",
    placeholder: "Enter your Given Name",
    type: "text",
    autocomplete: "given-name",
    isRequired: true
  },
  middle_name: {
    label: "Middle Name",
    placeholder: "Enter your Middle Name",
    type: "text",
    autocomplete: "additional-name",
    isRequired: true
  },
  name: {
    label: "Name",
    placeholder: "Enter your Name",
    type: "text",
    autocomplete: "name",
    isRequired: true
  },
  nickname: {
    label: "Nickname",
    placeholder: "Enter your Nickname",
    type: "text",
    autocomplete: "tel",
    isRequired: true
  },
  password: {
    label: "Password",
    placeholder: "Enter your Password",
    type: "password",
    autocomplete: "new-password",
    isRequired: true
  },
  phone_number: {
    label: "Phone Number",
    placeholder: "Enter your Phone Number",
    type: "tel",
    autocomplete: "tel",
    dialCode: "+1",
    dialCodeList: countryDialCodes,
    isRequired: true
  },
  preferred_username: {
    label: "Preferred Username",
    placeholder: "Enter your Preferred Username",
    type: "text",
    isRequired: true
  },
  profile: {
    label: "Profile",
    placeholder: "Add your Profile",
    type: "url",
    autocomplete: "url",
    isRequired: true
  },
  website: {
    label: "Website",
    placeholder: "Add your Website",
    type: "url",
    autocomplete: "url",
    isRequired: true
  },
  username: {
    label: "Username",
    placeholder: "Enter your Username",
    type: "text",
    autocomplete: "username",
    isRequired: true
  }
};
var ALLOWED_SPECIAL_CHARACTERS = ["^", "$", "*", ".", "[", "]", "{", "}", "(", ")", "?", '"', "!", "@", "#", "%", "&", "/", "\\", ",", ">", "<", "'", ":", ";", "|", "_", "~", "`", "=", "+", "-", " "];

// node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/getRoute.mjs
var getRoute = (state, actorState) => {
  if (actorState?.matches("federatedSignIn")) {
    if (state.matches("signUpActor")) {
      return "signUp";
    }
    if (state.matches("signInActor")) {
      return "signIn";
    }
  }
  switch (true) {
    case state.matches("idle"):
      return "idle";
    case state.matches("setup"):
      return "setup";
    case state.matches("signOut"):
      return "signOut";
    case state.matches("authenticated"):
      return "authenticated";
    case actorState?.matches("confirmSignUp"):
    case actorState?.matches("resendSignUpCode"):
      return "confirmSignUp";
    case actorState?.matches("confirmSignIn"):
      return "confirmSignIn";
    case actorState?.matches("setupTotp.edit"):
    case actorState?.matches("setupTotp.submit"):
      return "setupTotp";
    case actorState?.matches("signIn"):
      return "signIn";
    case actorState?.matches("signUp"):
    case actorState?.matches("autoSignIn"):
      return "signUp";
    case actorState?.matches("forceChangePassword"):
      return "forceNewPassword";
    case actorState?.matches("forgotPassword"):
      return "forgotPassword";
    case actorState?.matches("confirmResetPassword"):
      return "confirmResetPassword";
    case actorState?.matches("selectUserAttributes"):
      return "verifyUser";
    case actorState?.matches("confirmVerifyUserAttribute"):
      return "confirmVerifyUser";
    case actorState?.matches("setupEmail"):
      return "setupEmail";
    case actorState?.matches("selectMfaType"):
      return "selectMfaType";
    case state.matches("getCurrentUser"):
    case actorState?.matches("fetchUserAttributes"):
      return "transition";
    default:
      return null;
  }
};

// node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/facade.mjs
var getSendEventAliases = (send3) => {
  const sendToMachine = (type) => {
    return (data) => send3({
      type,
      data
    });
  };
  return {
    initializeMachine: sendToMachine("INIT"),
    resendCode: sendToMachine("RESEND"),
    signOut: sendToMachine("SIGN_OUT"),
    submitForm: sendToMachine("SUBMIT"),
    updateForm: sendToMachine("CHANGE"),
    updateBlur: sendToMachine("BLUR"),
    // Actions that don't immediately invoke a service but instead transition to a screen
    // are prefixed with `to*`
    toFederatedSignIn: sendToMachine("FEDERATED_SIGN_IN"),
    toForgotPassword: sendToMachine("FORGOT_PASSWORD"),
    toSignIn: sendToMachine("SIGN_IN"),
    toSignUp: sendToMachine("SIGN_UP"),
    skipVerification: sendToMachine("SKIP")
  };
};
var getServiceContextFacade = (state) => {
  const actorContext = getActorContext(state) ?? {};
  const {
    allowedMfaTypes,
    challengeName,
    codeDeliveryDetails,
    remoteError: error3,
    validationError: validationErrors,
    totpSecretCode = null,
    unverifiedUserAttributes,
    username
  } = actorContext;
  const {
    socialProviders = []
  } = state.context?.config ?? {};
  const user = actorContext?.user ?? state.context?.user;
  const hasValidationErrors = !!(validationErrors && Object.keys(validationErrors).length > 0);
  const actorState = getActorState(state);
  const isPending = state.hasTag("pending") || actorState?.hasTag("pending");
  const route = getRoute(state, actorState);
  const authStatus = ((route2) => {
    switch (route2) {
      case "idle":
      case "setup":
        return "configuring";
      case "authenticated":
        return "authenticated";
      default:
        return "unauthenticated";
    }
  })(route);
  const facade = {
    allowedMfaTypes,
    authStatus,
    challengeName,
    codeDeliveryDetails,
    error: error3,
    hasValidationErrors,
    isPending,
    route,
    socialProviders,
    totpSecretCode,
    unverifiedUserAttributes,
    user,
    username,
    validationErrors
    // @v6-migration-note
    // While most of the properties
    // on `AuthenticatorServiceContextFacade` can resolve to `undefined`, updating
    // the interface requires material changes in consumers (namely `useAuthenticator`)
    // which will have implications on the UI layer as typeguards and non-null checks
    // are required to pass type checking. As the `Authenticator` is behaving as expected
    // with the `AuthenticatorServiceContextFacade` interface, prefer to cast
  };
  return facade;
};
var getServiceFacade = ({
  send: send3,
  state
}) => {
  const sendEventAliases = getSendEventAliases(send3);
  const serviceContext = getServiceContextFacade(state);
  return __spreadValues(__spreadValues({}, sendEventAliases), serviceContext);
};

// node_modules/@aws-amplify/ui/dist/esm/types/authenticator/user.mjs
var FederatedIdentityProviders;
(function(FederatedIdentityProviders2) {
  FederatedIdentityProviders2["Apple"] = "Apple";
  FederatedIdentityProviders2["Amazon"] = "Amazon";
  FederatedIdentityProviders2["Facebook"] = "Facebook";
  FederatedIdentityProviders2["Google"] = "Google";
})(FederatedIdentityProviders || (FederatedIdentityProviders = {}));
var UnverifiedContactMethodType;
(function(UnverifiedContactMethodType2) {
  UnverifiedContactMethodType2["Email"] = "email";
  UnverifiedContactMethodType2["PhoneNumber"] = "phone_number";
})(UnverifiedContactMethodType || (UnverifiedContactMethodType = {}));

// node_modules/@aws-amplify/ui/dist/esm/types/authenticator/attributes.mjs
var signUpFieldsWithDefault = ["birthdate", "email", "family_name", "given_name", "middle_name", "name", "nickname", "phone_number", "preferred_username", "profile", "website"];
var LoginMechanismArray = ["username", "email", "phone_number"];
var authFieldsWithDefaults = [...LoginMechanismArray, ...signUpFieldsWithDefault, "confirmation_code", "password", "confirm_password"];
var isAuthFieldsWithDefaults = (field2) => {
  return authFieldsWithDefaults.includes(field2);
};

// node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/form.mjs
var getFormDataFromEvent = (event2) => {
  const formData = new FormData(event2.target);
  return Object.fromEntries(formData);
};
var isAuthFieldWithDefaults = (field2) => {
  return authFieldsWithDefaults.includes(field2);
};
var isArray = (val) => {
  return Array.isArray(val);
};
var getErrors = (errors) => {
  if (!errors) return null;
  if (isArray(errors)) {
    return errors;
  } else {
    return [errors];
  }
};

// node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/utils.mjs
var censorAllButFirstAndLast = (value) => {
  const split = value.trim().split("");
  for (let i = 0; i < split.length; i++) {
    if (i > 0 && i < split.length - 1) {
      split[i] = "*";
    }
  }
  return split.join("");
};
var censorPhoneNumber = (val) => {
  if (val.length < 4) {
    return val;
  }
  const split = val.split("");
  for (let i = 0; i < split.length - 4; i++) {
    split[i] = "*";
  }
  return split.join("");
};
var censorEmail = (val) => {
  const splitEmail = val.split("@");
  const censoredName = censorAllButFirstAndLast(splitEmail[0]);
  return `${censoredName}@${splitEmail[1]}`;
};
var censorContactMethod = (type, value) => {
  return type === "Phone Number" ? censorPhoneNumber(value) : censorEmail(value);
};
var hasSpecialChars = (password) => ALLOWED_SPECIAL_CHARACTERS.some((char) => password.includes(char));
var getTotpCodeURL = (issuer, username, secret) => encodeURI(`otpauth://totp/${issuer}:${username}?secret=${secret}&issuer=${issuer}`);
function trimValues(values, ...ignored) {
  return Object.entries(values).reduce((acc, [name, value]) => __spreadProps(__spreadValues({}, acc), {
    [name]: ignored.includes(name) ? value : value?.trim()
  }), {});
}

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/de.mjs
var deDict = {
  "Account recovery requires verified contact information": "Zurücksetzen des Accounts benötigt einen verifizierten Account",
  "Add your Profile": "Ihr Profil hinzufügen",
  "Add your Website": "Ihre Website hinzufügen",
  "Authenticator App (TOTP)": "Authentifikator-App (TOTP)",
  "Back to Sign In": "Zurück zur Anmeldung",
  "Change Password": "Passwort ändern",
  Changing: "Ändern von",
  Code: "Code",
  "Confirm Email Code": "E-Mail-Code bestätigen",
  "Confirm Password": "Passwort bestätigen",
  "Please confirm your Password": "Bitte bestätigen Sie Ihr Passwort",
  "Confirm Sign Up": "Registrierung bestätigen",
  "Confirm SMS Code": "SMS-Code bestätigen",
  "Confirm TOTP Code": "TOTP-Code bestätigen",
  Confirm: "Bestätigen",
  "Confirmation Code": "Bestätigungs-Code",
  Confirming: "Wird bestätigt",
  "Create a new account": "Einen neuen Account erstellen",
  "Create Account": "Account erstellen",
  "Creating Account": "Account wird erstellt",
  "Dismiss alert": "Warnung verwerfen",
  Email: "E-Mail",
  "Email Message": "E-Mail-Nachricht",
  "Enter your Birthdate": "Geben Sie Ihr Geburtsdatum ein",
  "Enter your code": "Geben Sie Ihren Code ein",
  "Enter your Confirmation Code": "Geben Sie Ihren Bestätigungs-Code ein",
  "Enter your Email": "Geben Sie Ihre E-Mail ein",
  "Enter your Family Name": "Geben Sie Ihren Nachnamen ein",
  "Enter your Given Name": "Geben Sie Ihren Vornamen ein",
  "Enter your Middle Name": "Geben Sie Ihren zweiten Vornamen ein",
  "Enter your Name": "Geben Sie Ihren Namen ein",
  "Enter your Nickname": "Geben Sie Ihren Spitznamen ein",
  "Enter your Password": "Geben Sie Ihr Passwort ein",
  "Enter your password": "Geben Sie Ihr Passwort ein",
  "Enter your email": "Geben Sie Ihre E-Mail ein",
  "Enter your phone number": "Geben Sie Ihre Telefonnummer ein",
  "Enter your Preferred Username": "Geben Sie Ihren bevorzugten Benutzernamen ein",
  "Enter your username": "Geben Sie Ihren Benutzernamen ein",
  "Forgot password?": "Passwort vergessen?",
  "Forgot your password?": "Passwort vergessen? ",
  "Hide password": "Passwort verbergen",
  "It may take a minute to arrive": "Es kann eine Minute dauern, bis er ankommt",
  Loading: "Wird geladen",
  "Multi-Factor Authentication": "Multifaktor-Authentifizierung",
  "Multi-Factor Authentication Setup": "Einrichtung der Multifaktor-Authentifizierung",
  "New password": "Neues Passwort",
  or: "oder",
  Password: "Passwort",
  "Phone Number": "Telefonnummer",
  "Resend Code": "Code erneut senden",
  "Reset your Password": "Zurücksetzen des Passworts",
  "Reset your password": "Zurücksetzen des passworts",
  "Select MFA Type": "MFA-Typ auswählen",
  "Send code": "Code senden",
  "Send Code": "Code senden",
  Sending: "Wird gesendet",
  "Setup Email": "E-Mail einrichten",
  "Setup TOTP": "TOTP einrichten",
  "Show password": "Passwort anzeigen",
  "Sign in to your account": "Melden Sie sich mit Ihrem Account an",
  "Sign In with Amazon": "Mit Amazon anmelden",
  "Sign In with Apple": "Mit Apple anmelden",
  "Sign In with Facebook": "Mit Facebook anmelden",
  "Sign In with Google": "Mit Google anmelden",
  "Sign in": "Anmelden",
  "Sign In": "Anmelden",
  "Signing in": "Wird angemeldet",
  Skip: "Überspringen",
  Submit: "Abschicken",
  Submitting: "Wird gesendet",
  "Text Message (SMS)": "Textnachricht (SMS)",
  Username: "Benutzername",
  "Verify Contact": "Kontakt verifizieren",
  Verify: "Verifizieren",
  "We Emailed You": "E-Mail wurde versendet",
  "We Sent A Code": "Wir haben einen Code gesendet",
  "We Texted You": "Wir haben Ihnen eine SMS gesendet",
  "Your code is on the way. To log in, enter the code we emailed to": "Ihr Bestätigungscode ist unterwegs. Um sich einzuloggen geben Sie den Code ein, den wir per E-Mail verschickt haben",
  "Your code is on the way. To log in, enter the code we sent you": "Ihr Code ist unterwegs. Um sich anzumelden, geben Sie den Code ein, den wir Ihnen gesendet haben",
  "Your code is on the way. To log in, enter the code we texted to": "Ihr Bestätigungscode ist unterwegs. Um sich einzuloggen geben Sie den Code ein, den wir per SMS verschickt haben",
  // Additional translations provided by customers
  "An account with the given email already exists.": "Ein Account mit dieser E-Mail existiert bereits.",
  "Confirm a Code": "Code bestätigen",
  "Confirm Sign In": "Anmeldung bestätigen",
  "Create account": "Hier registrieren",
  "Sign Up with Facebook": "Mit Facebook registrieren",
  "Sign Up with Google": "Mit Google registrieren",
  "Forgot Password": "Passwort vergessen",
  "Have an account? ": "Schon registriert? ",
  "Incorrect username or password": "Falscher Benutzername oder falsches Passwort",
  "Invalid password format": "Ungültiges Passwort-Format",
  "Invalid phone number format": `Ungültiges Telefonummern-Format. Benutze eine Nummer im Format: +12345678900`,
  "It may take a minute to arrive.": "Es könnte eine Minute dauern, bis der Code eintrifft.",
  "Lost your code? ": "Code verloren? ",
  "New Password": "Neues Passwort",
  "No account? ": "Kein Account? ",
  "Password attempts exceeded": "Die maximale Anzahl der fehlerhaften Anmeldeversuche wurde erreicht",
  "Reset password": "Passwort zurücksetzen",
  "Reset Password": "Passwort Zurücksetzen",
  "Sign Out": "Abmelden",
  "Sign Up": "Registrieren",
  "User already exists": "Dieser Benutzer existiert bereits",
  "User does not exist": "Dieser Benutzer existiert nicht",
  "Username cannot be empty": "Benutzername darf nicht leer sein"
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/en.mjs
var enDict = {
  "Account recovery requires verified contact information": "Account recovery requires verified contact information",
  "Add your Profile": "Add your Profile",
  "Add your Website": "Add your Website",
  "Authenticator App (TOTP)": "Authenticator App (TOTP)",
  "Back to Sign In": "Back to Sign In",
  "Change Password": "Change Password",
  Changing: "Changing",
  Code: "Code",
  "Confirm Email Code": "Confirm Email Code",
  "Confirm Password": "Confirm Password",
  "Confirm Sign Up": "Confirm Sign Up",
  "Confirm SMS Code": "Confirm SMS Code",
  "Confirm MFA Code": "Confirm MFA Code",
  "Confirm TOTP Code": "Confirm TOTP Code",
  Confirm: "Confirm",
  "Confirmation Code": "Confirmation Code",
  Confirming: "Confirming",
  "Create a new account": "Create a new account",
  "Create Account": "Create Account",
  "Creating Account": "Creating Account",
  "Dismiss alert": "Dismiss alert",
  Email: "Email",
  "Email Message": "Email Message",
  "Enter your Birthdate": "Enter your Birthdate",
  "Enter your code": "Enter your code",
  "Enter your Confirmation Code": "Enter your Confirmation Code",
  "Enter your Email": "Enter your Email",
  "Enter your Family Name": "Enter your Family Name",
  "Enter your Given Name": "Enter your Given Name",
  "Enter your Middle Name": "Enter your Middle Name",
  "Enter your Name": "Enter your Name",
  "Enter your Nickname": "Enter your Nickname",
  "Enter your Password": "Enter your Password",
  "Enter your phone number": "Enter your phone number",
  "Enter your Preferred Username": "Enter your Preferred Username",
  "Enter your username": "Enter your username",
  "Forgot password?": "Forgot password?",
  "Forgot your password?": "Forgot your password?",
  "Hide password": "Hide password",
  "It may take a minute to arrive": "It may take a minute to arrive",
  Loading: "Loading",
  "Multi-Factor Authentication": "Multi-Factor Authentication",
  "Multi-Factor Authentication Setup": "Multi-Factor Authentication Setup",
  "New password": "New password",
  or: "or",
  Password: "Password",
  "Phone Number": "Phone Number",
  "Please confirm your Password": "Please confirm your Password",
  "Resend Code": "Resend Code",
  "Reset your password": "Reset your password",
  "Reset your Password": "Reset your Password",
  "Select MFA Type": "Select MFA Type",
  "Send code": "Send code",
  "Send Code": "Send Code",
  Sending: "Sending",
  "Setup Email": "Setup Email",
  "Setup TOTP": "Setup TOTP",
  "Show password": "Show password",
  "Sign in to your account": "Sign in to your account",
  "Sign In with Amazon": "Sign In with Amazon",
  "Sign In with Apple": "Sign In with Apple",
  "Sign In with Facebook": "Sign In with Facebook",
  "Sign In with Google": "Sign In with Google",
  "Sign in": "Sign in",
  "Sign In": "Sign In",
  "Signing in": "Signing in",
  Skip: "Skip",
  Submit: "Submit",
  Submitting: "Submitting",
  "Text Message (SMS)": "Text Message (SMS)",
  Username: "Username",
  "Verify Contact": "Verify Contact",
  Verify: "Verify",
  "We Emailed You": "We Emailed You",
  "We Sent A Code": "We Sent A Code",
  "We Texted You": "We Texted You",
  "Your code is on the way. To log in, enter the code we emailed to": "Your code is on the way. To log in, enter the code we emailed to",
  "Your code is on the way. To log in, enter the code we sent you": "Your code is on the way. To log in, enter the code we sent you",
  "Your code is on the way. To log in, enter the code we texted to": "Your code is on the way. To log in, enter the code we texted to"
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/es.mjs
var esDict = {
  "Account recovery requires verified contact information": "La recuperación de la cuenta requiere información de contacto verificada",
  "Authenticator App (TOTP)": "Aplicación de autenticación (TOTP)",
  "Back to Sign In": "Volver a inicio de sesión",
  "Change Password": "Cambiar contraseña",
  Changing: "Cambiando",
  Code: "Código",
  "Code *": "Código *",
  "Confirm Email Code": "Confirmar el código de correo electrónico",
  "Confirm Password": "Confirmar contraseña",
  "Confirm Sign Up": "Confirmar registro",
  "Confirm SMS Code": "Confirmar el código de SMS",
  "Confirm TOTP Code": "Confirmar código TOTP",
  Confirm: "Confirmar",
  "Confirmation Code": "Código de confirmación",
  Confirming: "Confirmando",
  "Create a new account": "Crear una cuenta nueva",
  "Create Account": "Crear cuenta",
  "Creating Account": "Creando cuenta",
  "Dismiss alert": "Descartar alerta",
  Email: "Email",
  "Email Message": "Mensaje de correo electrónico",
  "Enter your code": "Ingrese el código",
  "Enter your Email": "Escriba su Email",
  "Enter your email": "Escriba su email",
  "Enter your Password": "Escriba su Contraseña",
  "Enter your phone number": "Ingrese el número de teléfono",
  "Enter your username": "Ingrese el nombre de usuario",
  "Forgot your password?": "¿Olvidó su contraseña?",
  "Hide password": "Ocultar contraseña",
  "It may take a minute to arrive": "Es posible que tarde un minuto en llegar",
  Loading: "Cargando",
  "Multi-Factor Authentication": "Autenticación multifactor",
  "Multi-Factor Authentication Setup": "Configuración de autenticación multifactor",
  "New password": "Nueva contraseña",
  or: "o",
  Password: "Contraseña",
  "Phone Number": "Número de teléfono",
  "Resend Code": "Reenviar código",
  "Reset your password": "Restablecer su contraseña",
  "Reset your Password": "Restablecer su Contraseña",
  "Select MFA Type": "Seleccionar el tipo de MFA",
  "Send code": "Enviar código",
  "Send Code": "Enviar código",
  Sending: "Enviando",
  "Setup Email": "Configurar correo electrónico",
  "Setup TOTP": "Configurar TOTP",
  "Show password": "Mostrar contraseña",
  "Sign in to your account": "Iniciar sesión en tu cuenta",
  "Sign In with Amazon": "Iniciar Sesión con Amazon",
  "Sign In with Apple": "Iniciar Sesión con Apple",
  "Sign In with Facebook": "Iniciar Sesión con Facebook",
  "Sign In with Google": "Iniciar Sesión con Google",
  "Sign in": "Iniciar sesión",
  "Sign In": "Iniciar Sesión",
  "Signing in": "Iniciando sesión",
  Skip: "Omitir",
  Submit: "Enviar",
  Submitting: "Enviando",
  "Text Message (SMS)": "Mensaje de texto (SMS)",
  Username: "Nombre de usuario",
  "Verify Contact": "Verificar contacto",
  Verify: "Verificar",
  "We Emailed You": "Le hemos enviado un correo electrónico",
  "We Sent A Code": "Hemos enviado un código",
  "We Texted You": "Le hemos enviado un mensaje de texto",
  "Your code is on the way. To log in, enter the code we emailed to": "El código está en camino. Para iniciar sesión, escriba el código que hemos enviado por correo electrónico a",
  "Your code is on the way. To log in, enter the code we sent you": "El código está en camino. Para iniciar sesión, escriba el código que le hemos enviado",
  "Your code is on the way. To log in, enter the code we texted to": "El código está en camino. Para iniciar sesión, escriba el código que hemos enviado por mensaje de texto a",
  // Additional translations provided by customers
  "An account with the given email already exists.": "Ya existe una cuenta con el correo ingresado.",
  "Confirm a Code": "Confirmar un código",
  "Confirm Sign In": "Confirmar inicio de sesión",
  "Forgot Password": "Olvidé mi contraseña",
  "Incorrect username or password.": "Nombre de usuario o contraseña incorrecta",
  "Enter your Family Name": "Escriba su apellido",
  "Enter your Given Name": "Escriba su nombre",
  "Given Name": "Nombre",
  "Family Name": "Apellido",
  "Reset Password": "Restablecer contraseña",
  "Please confirm your Password": "Confirme su contraseña",
  "Invalid password format": "Formato de contraseña inválido",
  "Invalid phone number format": "Formato de número de teléfono inválido",
  "Loading...": "Cargando...",
  "New Password": "Nueva contraseña",
  "Resend a Code": "Reenviar un código",
  "Sign Out": "Cerrar sesión",
  "Sign Up with Amazon": "Crear cuenta con Amazon",
  "Sign Up with Apple": "Crear cuenta con Apple",
  "Sign Up with Facebook": "Crear cuenta con Facebook",
  "Sign Up with Google": "Crear cuenta con Google",
  "Sign Up": "Crear cuenta",
  "User already exists": "El usuario ya existe",
  "User does not exist": "El usuario no existe",
  "Username/client id combination not found.": "El usuario no existe",
  "Username cannot be empty": "El nombre de usuario no puede estar vacío",
  "Your passwords must match": "Las contraseñas deben coincidir",
  "Password must have at least 8 characters": "La contraseña debe tener al menos 8 caracteres",
  "Password did not conform with policy: Password must have uppercase characters": "La contraseña debe tener al menos un carácter en mayúscula",
  "Password did not conform with policy: Password must have numeric characters": "La contraseña debe tener al menos un carácter numérico",
  "Password did not conform with policy: Password must have symbol characters": "La contraseña debe tener al menos un símbolo",
  "Password did not conform with policy: Password must have lowercase characters": "La contraseña debe tener al menos un carácter en minúsculas",
  "Invalid verification code provided, please try again.": "Código de verificación no válido, inténtelo de nuevo.",
  "Attempt limit exceeded, please try after some time.": "Número máximo de intentos excedido, por favor inténtelo de nuevo más tarde.",
  "A network error has occurred.": "Se ha producido un error de red."
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/fr.mjs
var frDict = {
  "Account recovery requires verified contact information": "La récupération du compte nécessite des informations de contact vérifiées",
  "Authenticator App (TOTP)": "Application d’authentification (TOTP)",
  "Back to Sign In": "Retour à la connexion",
  "Change Password": "Modifier le mot de passe",
  Changing: "Modification en cours",
  Code: "Code",
  "Confirm Email Code": "Confirmer le code e-mail",
  "Confirm Password": "Confirmez le mot de passe",
  "Confirm Sign Up": "Confirmer l'inscription",
  "Confirm SMS Code": "Confirmer le code SMS",
  "Confirm TOTP Code": "Confirmer le code TOTP",
  Confirm: "Confirmer",
  "Confirmation Code": "Code de confirmation",
  Confirming: "Confirmation",
  "Create a new account": "Créer un nouveau compte",
  "Create Account": "Créer un compte",
  "Creating Account": `Création d'un compte`,
  "Dismiss alert": `Supprimer l'alerte`,
  Email: "Email",
  "Email Message": "Message de l’e-mail",
  "Enter your code": "Saisissez cotre code de confirmation",
  "Enter your Email": "Saisissez votre adresse e-mail",
  "Enter your email": "Saisissez votre adresse e-mail",
  "Enter your phone number": "Saisissez votre numéro de téléphone",
  "Enter your username": "Saisissez votre nom d'utilisateur",
  "Forgot your password?": "Mot de passe oublié ? ",
  "Hide password": "Masquer le mot de passe",
  "It may take a minute to arrive": "Cela peut prendre une minute",
  Loading: "Chargement en cours",
  "Multi-Factor Authentication": "Authentification multifactorielle",
  "Multi-Factor Authentication Setup": "Configuration de l’authentification multifactorielle",
  "New password": "Nouveau mot de passe",
  or: "ou",
  Password: "Mot de passe",
  "Phone Number": "Numéro de téléphone",
  "Resend Code": "Renvoyer le code",
  "Reset your Password": "Réinitialiser votre mot de passe",
  "Reset your password": "Réinitialisez votre mot de passe",
  "Select MFA Type": "Sélectionner le type de MFA",
  "Send code": "Envoyer le code",
  "Send Code": "M'envoyer un code",
  Sending: "Envoi en cours",
  "Setup Email": "E-mail de configuration",
  "Setup TOTP": "Configuration de TOTP",
  "Show password": "Afficher le mot de passe",
  "Sign in to your account": "Connexion à votre compte",
  "Sign In with Amazon": "Se connecter avec Amazon",
  "Sign In with Apple": "Se connecter avec Apple",
  "Sign In with Facebook": "Se connecter avec Facebook",
  "Sign In with Google": "Se connecter avec Google",
  "Sign in": "Se connecter",
  "Sign In": "Se connecter",
  "Signing in": "Connexion en cours",
  Skip: "Passer",
  Submit: "Soumettre",
  Submitting: "Envoi en cours",
  "Text Message (SMS)": "Message texte (SMS)",
  Username: "Nom d'utilisateur",
  "Verify Contact": "Vérifier le contact",
  Verify: "Vérifier",
  "We Sent A Code": "Nous avons envoyé un code",
  "We Texted You": "Nous vous avons envoyé un SMS",
  "Your code is on the way. To log in, enter the code we sent you": `Votre code est en cours d'envoi. Pour vous connecter, saisissez le code que nous vous avons envoyé`,
  // Additional translations provided by customers
  "Add your Profile": "Ajoutez votre profil",
  "Add your Website": "Ajoutez votre site web",
  "An account with the given email already exists.": "Un utilisateur avec cette adresse email existe déjà.",
  Birthdate: "Date de naissance",
  Change: "Modifier",
  "Confirm a Code": "Confirmer un code",
  "Confirm Sign In": "Confirmer la connexion",
  "Create account": "Créer un compte",
  "Enter your Birthdate": "Saisissez votre date de naissance",
  "Enter your Confirmation Code": "Saisissez votre code de confirmation",
  "Enter your Family Name": "Saisissez votre nom de famille",
  "Enter your Given Name": "Saisissez votre prénom",
  "Enter your Middle Name": "Saisissez votre deuxième prénom",
  "Enter your Name": "Saisissez votre nom",
  "Enter your Nickname": "Saisissez votre surnom",
  "Enter your Password": "Saisissez votre mot de passe",
  "Enter your Phone Number": "Saisissez votre numéro de téléphone",
  "Enter your Preferred Username": "Saisissez votre nom d'utilisateur",
  "Enter your password": "Saisissez votre mot de passe",
  "Given Name": "Prénom",
  "Family Name": "Nom de famille",
  "Forgot Password": "Mot de passe oublié",
  "Forgot Password?": "Mot de passe oublié ?",
  "Incorrect username or password.": "Identifiant ou mot de passe incorrect.",
  "Have an account? ": "Déjà un compte ? ",
  Hello: "Bonjour",
  "Incorrect username or password": "Identifiant ou mot de passe incorrect",
  "Invalid password format": "Format de mot de passe invalide",
  "Invalid phone number format": `Format de numéro de téléphone invalide. Veuillez utiliser un format +12345678900`,
  "Loading...": "Chargement...",
  "Lost your code? ": "Vous avez perdu votre code ? ",
  "Network error": "Erreur réseau",
  "New Password": "Nouveau mot de passe",
  Name: "Nom",
  "No account? ": "Pas de compte ? ",
  "Please confirm your Password": "Confirmez votre mot de passe",
  "Preferred Username": "Nom d'utilisateur préféré",
  Profile: "Profil",
  "Resend a Code": "Renvoyer un code",
  "Reset password": "Réinitialiser le mot de passe",
  "Reset Password": "Réinitialiser le mot de passe",
  Send: "Envoyer",
  "Sign In with AWS": "Se connecter avec AWS",
  "Sign Out": "Déconnexion",
  "Sign Up": "S'inscrire",
  SMS: "SMS",
  "User already exists": "L'utilisateur existe déjà",
  "User does not exist": "L'utilisateur n'existe pas",
  "Username cannot be empty": "Le nom d'utilisateur doit être renseigné",
  "Username/client id combination not found.": "L'utilisateur n'existe pas",
  "We Emailed You": "Nous vous avons envoyé un code",
  "Your code is on the way. To log in, enter the code we emailed to": "Votre code est en route. Pour vous connecter entrez le code reçu sur cette adresse email",
  "Your code is on the way. To log in, enter the code we texted to": "Votre code est en route. Pour vous connecter entrez le code reçu sur ce numéro de téléphone",
  "Your passwords must match": "Vos mots de passe doivent être identiques",
  "It may take a minute to arrive.": "Cela peut prendre quelques minutes.",
  Website: "Site web",
  "Password must have at least 8 characters": "Le mot de passe doit comporter au moins 8 caractères",
  "Password did not conform with policy: Password must have uppercase characters": "Le mot de passe doit comporter des caractères majuscules",
  "Password did not conform with policy: Password must have numeric characters": "Le mot de passe doit comporter des caractères numériques",
  "Password did not conform with policy: Password must have symbol characters": "Le mot de passe doit comporter des symboles",
  "Password did not conform with policy: Password must have lowercase characters": "Le mot de passe doit comporter des caractères minuscules",
  "Invalid verification code provided, please try again.": "Code de vérification invalide, veuillez réessayer.",
  "Attempt limit exceeded, please try after some time.": "Nombre maximum de tentatives dépassé, veuillez réessayer plus tard.",
  "A network error has occurred.": "Une erreur de réseau s'est produite."
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/it.mjs
var itDict = {
  "Account recovery requires verified contact information": "Il ripristino dell'account richiede informazioni di contatto verificate",
  "Authenticator App (TOTP)": "App di autenticazione (TOTP)",
  "Back to Sign In": "Torna alla schermata di accesso",
  "Change Password": "Cambia la password",
  Changing: "Modifica in corso",
  Code: "Codice",
  "Confirm Email Code": "Conferma codice e-mail",
  "Confirm Password": "Conferma la password",
  "Confirm Sign Up": "Conferma registrazione",
  "Confirm SMS Code": "Conferma codice SMS",
  "Confirm TOTP Code": "Conferma codice TOTP",
  Confirm: "Conferma",
  "Confirmation Code": "Codice di verifica",
  Confirming: "Conferma in corso",
  "Create a new account": "Crea un nuovo account",
  "Create Account": "Crea Account",
  "Creating Account": "Creazione account in corso",
  "Dismiss alert": `Ignora l'avviso`,
  Email: "Email",
  "Email Message": "Messaggio e-mail",
  "Enter your code": "Inserisci il tuo codice",
  "Enter your Email": "Inserisci la tua e-mail",
  "Enter your phone number": 'Inserisci il tuo numero di telefono"',
  "Enter your username": "Inserisci il tuo nome utente",
  "Forgot your password?": "Password dimenticata?",
  "Hide password": "Nascondi password",
  "It may take a minute to arrive": "L'arrivo potrebbe richiedere qualche minuto",
  Loading: "Caricamento in corso",
  "Multi-Factor Authentication": "Autenticazione a più fattori",
  "Multi-Factor Authentication Setup": "Configurazione dell'autenticazione a più fattori",
  "New password": "Nuova password",
  or: "oppure",
  Password: "Password",
  "Phone Number": "Numero di telefono",
  "Resend Code": "Invia nuovamente il codice",
  "Reset your Password": "Reimposta la tua Password",
  "Reset your password": "Reimposta la tua password",
  "Select MFA Type": "Seleziona il tipo di MFA",
  "Send code": "Invia codice",
  "Send Code": "Invia codice",
  Sending: "Invio in corso",
  "Setup Email": "Configura l'e-mail",
  "Setup TOTP": "Configura TOTP",
  "Show password": "Mostra password",
  "Sign in to your account": "Accedi al tuo account",
  "Sign In with Amazon": "Accedi con Amazon",
  "Sign In with Apple": "Accedi con Apple",
  "Sign In with Facebook": "Accedi con Facebook",
  "Sign In with Google": "Accedi con Google",
  "Sign in": "Accedi",
  "Sign In": "Accedi",
  "Signing in": "Accesso in corso",
  Skip: "Salta",
  Submit: "Invia",
  Submitting: "Invio in corso",
  "Text Message (SMS)": "Messaggio di testo (SMS)",
  Username: "Nome utente",
  "Verify Contact": "Verifica contatto",
  Verify: "Verifica",
  "We Emailed You": "Ti abbiamo inviato un'e-mail",
  "We Sent A Code": "Ti abbiamo inviato un codice",
  "We Texted You": "Ti abbiamo inviato un SMS",
  "Your code is on the way. To log in, enter the code we emailed to": "Il codice è in arrivo. Per effettuare l'accesso, immetti il codice che ti abbiamo inviato via e-mail",
  "Your code is on the way. To log in, enter the code we sent you": "Il codice è in arrivo. Per accedere, immetti il codice che ti abbiamo inviato",
  "Your code is on the way. To log in, enter the code we texted to": "Il codice è in arrivo. Per accedere, immetti il codice che abbiamo inviato tramite SMS",
  // Additional translations provided by customers
  "An account with the given email already exists.": "Questa email è già utilizzata da un altro account.",
  "Confirm a Code": "Conferma un codice",
  "Confirm Sign In": "Conferma l'accesso",
  "Create account": "Crea account",
  "Enter your password": "Inserisci la tua password",
  "Forgot Password?": "Password dimenticata?",
  "Have an account? ": "Già registrato?",
  "Incorrect username or password": "Nome utente o password errati",
  "Invalid password format": "Formato della password non valido",
  "Invalid phone number format": "Formato del numero di telefono non valido",
  "Lost your code?": "Codice smarrito?",
  "New Password": "Nuova password",
  "No account? ": "Non hai un account?",
  "Password attempts exceeded": "Il numero massimo di tentativi di accesso falliti è stato raggiunto",
  "Reset password": "Reimposta password",
  "Sign Out": "Esci",
  "Sign Up": "Registrati",
  "User already exists": "Utente già esistente",
  "User does not exist": "Utente inesistente",
  "Username cannot be empty": "Il nome utente non può essere vuoto"
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/ja.mjs
var jaDict = {
  "Account recovery requires verified contact information": "アカウントの復旧には確認済みの連絡先が必要です",
  "Authenticator App (TOTP)": "認証アプリ (TOTP)",
  "Back to Sign In": "サインインに戻る",
  "Change Password": "パスワードを変える ",
  Changing: "変更中",
  Code: "コード",
  "Confirm Email Code": "E メールコードを確認",
  "Confirm Password": "パスワードの確認",
  "Confirm Sign Up": "登録する",
  "Confirm SMS Code": "SMS コードを確認",
  "Confirm TOTP Code": "TOTP コードを確認",
  Confirm: "確定",
  "Confirmation Code": "確認コード",
  Confirming: "確認中",
  "Create a new account": "新しいアカウントを作る",
  "Create Account": "アカウントを作る",
  "Creating Account": "アカウントの作成中",
  "Dismiss alert": "アラートを閉じる",
  Email: "メールアドレス",
  "Email Message": "E メールメッセージ",
  "Enter your code": "コードを入力",
  "Enter your Email": "メールアドレスを入力",
  "Enter your phone number": "電話番号を入力",
  "Enter your username": "ユーザー名を入力 ",
  "Enter your Username": "ユーザー名を入力 ",
  "Forgot your password?": "パスワードを忘れましたか？ ",
  "Hide password": "パスワードを非表示",
  "It may take a minute to arrive": "到着するまでに 1 分かかることがあります",
  Loading: "ロード中",
  "Multi-Factor Authentication": "多要素認証",
  "Multi-Factor Authentication Setup": "多要素認証のセットアップ",
  "New password": "新しいパスワード",
  or: "又は",
  Password: "パスワード ",
  "Phone Number": "電話番号",
  "Resend Code": "コードを再送信",
  "Reset your Password": "パスワードをリセット",
  "Reset your password": "パスワードをリセットする",
  "Select MFA Type": "MFA タイプを選択",
  "Send code": "コードを送信",
  "Send Code": "コードを送信",
  Sending: "送信中",
  "Setup Email": "E メールをセットアップ",
  "Setup TOTP": "TOTP をセットアップ",
  "Show password": "パスワードを表示",
  "Sign in to your account": "アカウントにサインイン ",
  "Sign In with Amazon": "Amazonでサインイン",
  "Sign In with Apple": "Apple でサインイン",
  "Sign In with Facebook": "Facebookでサインイン",
  "Sign In with Google": "Googleでサインイン",
  "Sign In": "サインイン ",
  "Sign in": "サインイン",
  "Signing in": "サインイン中",
  Skip: "スキップ",
  Submit: "送信",
  Submitting: "送信中",
  "Text Message (SMS)": "テキストメッセージ (SMS)",
  Username: "ユーザー名 ",
  "Verify Contact": "連絡先を確認",
  Verify: "確認",
  "We Sent A Code": "コードが送信されました",
  "We Texted You": "テキストが送信されました",
  "Your code is on the way. To log in, enter the code we sent you": "コードが途中です。ログインするには、送信したコードを入力してください",
  // Additional translations provided by customers
  "An account with the given email already exists.": "入力されたメールアドレスのアカウントが既に存在します",
  "Confirm a Code": "コードを確認",
  "Confirm Sign In": "サインインする",
  "Create account": "アカウントを作る ",
  "Enter your password": "パスワードを入力 ",
  "Enter your Password": "パスワードを入力",
  "Please confirm your Password": "パスワードを入力",
  "Forgot Password": "パスワードを忘れた ",
  "Have an account? ": "アカウントを持っていますか？",
  "Incorrect username or password": "ユーザー名かパスワードが異なります ",
  "Invalid password format": "パスワードの形式が無効です ",
  "Invalid phone number format": "不正な電話番号の形式です。\n+12345678900 の形式で入力してください",
  "It may take a minute to arrive.": "コードを受信するまで数分かかる場合があります。",
  "Lost your code? ": "コードを失くしましたか？",
  "New Password": "新しいパスワード",
  "No account? ": "アカウントが無いとき ",
  "Password attempts exceeded": "サインインの試行回数が上限に達しました",
  "Reset password": "パスワードをリセット ",
  "Reset Password": "パスワードをリセット",
  "Sign Out": "サインアウト ",
  "Sign Up": "登録 ",
  "User already exists": "既にユーザーが存在しています ",
  "User does not exist": "ユーザーが存在しません ",
  "Username cannot be empty": "ユーザー名は入力必須です",
  "We Emailed You": "コードを送信しました",
  "Your code is on the way. To log in, enter the code we emailed to": "ログインするには、メールに記載されたコードを入力してください。送信先:",
  "Your code is on the way. To log in, enter the code we texted to": "ログインするには、テキストメッセージに記載されたコードを入力してください。送信先:"
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/kr.mjs
var krDict = {
  "Account recovery requires verified contact information": "계정 복구를 위해 연락처 확인이 필요합니다",
  "Authenticator App (TOTP)": "인증 앱(TOTP)",
  "Back to Sign In": "로그인으로 돌아가기",
  "Change Password": "비밀번호 변경하기",
  Changing: "변경중",
  Code: "코드",
  "Confirm Email Code": "이메일 코드 확인",
  "Confirm Password": "비밀번호 재확인",
  "Confirm Sign Up": "회원가입 확인",
  "Confirm SMS Code": "휴대폰 본인 확인",
  "Confirm TOTP Code": "TOTP 인증번호 확인",
  Confirm: "확인",
  "Confirmation Code": "인증번호",
  Confirming: "확인중",
  "Create a new account": "회원가입",
  "Create Account": "회원가입",
  "Creating Account": "회원가입중",
  "Dismiss alert": "알림 무시",
  Email: "이메일",
  "Email Message": "이메일 메시지",
  "Enter your Birthdate": "생년월일 입력",
  "Enter your code": "인증번호를 입력해주세요",
  "Enter your Confirmation Code": "확인 코드 입력",
  "Enter your Email": "이메일 입력",
  "Enter your Family Name": "성 입력",
  "Enter your Given Name": "사용장 이름 입력",
  "Enter your Name": "이름 입력",
  "Enter your Nickname": "닉네임 입력",
  "Enter your Password": "비밀번호 입력",
  "Enter your phone number": "전화번호 입력",
  "Enter your Preferred Username": "선호하는 아이디 입력",
  "Enter your username": "아이디를 입력해주세요",
  "Forgot password?": "비밀번호를 잊으셨나요?",
  "Hide password": "비밀번호 숨기기",
  "It may take a minute to arrive": "도착하는 데 1분 정도 걸릴 수 있습니다",
  Loading: "로딩중",
  "Multi-Factor Authentication": "다중 인증",
  "Multi-Factor Authentication Setup": "다중 인증 설정",
  "New password": "새 비밀번호",
  or: "또는",
  Password: "비밀번호",
  "Phone Number": "전화번호",
  "Please confirm your Password": "비밀번호를 확인해 주세요.",
  "Resend Code": "인증번호 재전송",
  "Reset your password": "비밀번호 재설정",
  "Reset your Password": "비밀번호 재설정",
  "Select MFA Type": "MFA 유형 선택",
  "Send code": "인증코드 보내기",
  "Send Code": "코드 전송",
  Sending: "전송중",
  "Setup Email": "이메일 설정",
  "Setup TOTP": "TOTP 설정하기",
  "Show password": "비밀번호 보이기",
  "Sign in to your account": "로그인",
  "Sign In with Amazon": "Amazon 로그인",
  "Sign In with Apple": "Apple 로그인",
  "Sign In with Facebook": "Facebook 로그인",
  "Sign In with Google": "Google 로그인",
  "Sign in": "로그인",
  "Sign In": "로그인",
  "Signing in": "로그인중",
  Skip: "다음에 하기",
  Submit: "확인",
  Submitting: "확인중",
  "Text Message (SMS)": "문자 메시지(SMS)",
  Username: "아이디",
  "Verify Contact": "연락처 확인",
  Verify: "인증",
  "We Emailed You": "이메일을 보냄",
  "We Sent A Code": "코드를 보냄",
  "We Texted You": "문자 메시지를 보냄",
  "Your code is on the way. To log in, enter the code we emailed to": "코드가 전송 중입니다. 로그인하려면 이메일로 전송한 코드를 입력하세요",
  "Your code is on the way. To log in, enter the code we sent you": "코드가 전송 중입니다. 로그인하려면 전송한 코드를 입력하세요",
  "Your code is on the way. To log in, enter the code we texted to": "코드가 전송 중입니다. 로그인하려면 문자 메시지로 전송한 코드를 입력하세요",
  // Additional translations provided by customers
  Birthdate: "생년월일",
  "Family Name": "성",
  "Forgot your password?": "비밀번호를 잊으셨나요?",
  "Given Name": "이름",
  Name: "성함",
  Nickname: "닉네임",
  "Preferred Username": "닉네임",
  Profile: "프로필",
  "Reset Password": "비밀번호 재설정",
  Website: "웹사이트"
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/nb.mjs
var nbDict = {
  "Account recovery requires verified contact information": "Gjenoppretting av konto krever verifisert kontaktinformajson",
  "Add your Profile": "Legg til profilen din",
  "Add your Website": "Legg til nettsiden din",
  "Authenticator App (TOTP)": "Autentiseringsapp (TOTP)",
  "Back to Sign In": "Tilbake til innlogging",
  "Change Password": "Bytt passord",
  Changing: "Endre",
  Code: "Kode",
  "Confirm Email Code": "Bekreft e-postkode",
  "Confirm Password": "Bekreft passordet",
  "Confirm Sign Up": "Bekreft registrering",
  "Confirm SMS Code": "Bekreft SMS-kode",
  "Confirm TOTP Code": "Bekreft TOTP-kode",
  Confirm: "Bekreft",
  "Confirmation Code": "Bekreftelseskode",
  Confirming: "Bekrefter",
  "Create a new account": "Opprett en ny konto",
  "Create Account": "Opprett konto",
  "Creating Account": "Oppretter konto",
  "Dismiss alert": "Avvis varsel",
  Email: "E-post",
  "Email Message": "E-postmelding",
  "Enter your Birthdate": "Skriv inn fødselsdatoen din",
  "Enter your code": "Skriv inn koden din",
  "Enter your Confirmation Code": "Skriv inn bekreftelseskoden din",
  "Enter your Email": "Skriv inn e-postadressen din",
  "Enter your Family Name": "Skriv inn etternavnet ditt",
  "Enter your Given Name": "Skriv inn fornavnet ditt",
  "Enter your Middle Name": "Skriv inn mellomnavnet ditt",
  "Enter your Name": "Skriv inn navnet ditt",
  "Enter your Nickname": "Skriv inn kallenavnet ditt",
  "Enter your Password": "Skriv inn passordet ditt",
  "Enter your phone number": "Skriv inn telefonnummeret ditt",
  "Enter your Preferred Username": "Skriv inn det foretrukne brukernavnet ditt",
  "Enter your username": "Skriv inn brukernavnet ditt",
  "Forgot password?": "Glemt passord?",
  "Forgot your password?": "Glemt passordet ditt?",
  "Hide password": "Skjul passordet",
  "It may take a minute to arrive": "Det kan ta et minutt for å komme frem",
  Loading: "Laster inn",
  "Multi-Factor Authentication": "Flerfaktorautentisering",
  "Multi-Factor Authentication Setup": "Oppsett av flerfaktorautentisering",
  "New password": "Nytt passord",
  or: "eller",
  Password: "Passord",
  "Phone Number": "Telefonnummer",
  "Please confirm your Password": "Vennligst bekreft passordet ditt",
  "Resend Code": "Send koden på nytt",
  "Reset your password": "Nullstill passordet ditt",
  "Reset your Password": "Nullstill passordet ditt",
  "Select MFA Type": "Velg MFA-type",
  "Send code": "Send kode",
  "Send Code": "Send kode",
  Sending: "Sender",
  "Setup Email": "Konfigurer e-post",
  "Setup TOTP": "Konfigurer TOTP",
  "Show password": "Vis passordet",
  "Sign in to your account": "Logg inn på kontoen din",
  "Sign In with Amazon": "Logg inn med Amazon",
  "Sign In with Apple": "Logg inn med Apple",
  "Sign In with Facebook": "Logg inn med Facebook",
  "Sign In with Google": "Logg inn med Google",
  "Sign in": "Logg inn",
  "Sign In": "Logg inn",
  "Signing in": "Logger inn",
  Skip: "Hopp over",
  Submit: "Send inn",
  Submitting: "Sender inn",
  "Text Message (SMS)": "Tekstmelding (SMS)",
  Username: "Brukernavn",
  "Verify Contact": "Bekreft kontakt",
  Verify: "Bekreft",
  "We Emailed You": "Vi sendte deg en e-post",
  "We Sent A Code": "Vi sendte en kode",
  "We Texted You": "Vi sendte deg en tekstmelding",
  "Your code is on the way. To log in, enter the code we emailed to": "Koden din er på vei. For å logge inn, skriv inn koden vi sendte e-post til",
  "Your code is on the way. To log in, enter the code we sent you": "Koden din er på vei. For å logge inn, skriv inn koden vi sendte deg",
  "Your code is on the way. To log in, enter the code we texted to": "Koden din er på vei. For å logge inn, skriv inn koden vi sendte tekstmelding til",
  // Additional translations provided by customers
  "An account with the given email already exists.": "Det finnes allerede en konto med denne e-postadressen",
  "Confirm a Code": "Bekreft koden",
  "Confirm Sign In": "Bekreft innlogging",
  "Create account": "Opprett konto",
  "Enter your password": "Skriv inn passordet ditt",
  "Forgot Password": "Glemt passordet",
  "Have an account? ": "Har en konto allerede? ",
  "Incorrect username or password": "Feil brukernavn eller passord",
  "Invalid password format": "Ugyldig passordformat",
  "Invalid phone number format": "Ugyldig telefonnummerformat",
  "Lost your code? ": "Mistet koden? ",
  "New Password": "Nytt passord",
  "No account? ": "Ingen konto? ",
  "Password attempts exceeded": "For mange mislykkede passordforsøk",
  "Reset password": "Nullstill passord",
  "Sign Out": "Logg ut",
  "Sign Up": "Registrering",
  "User already exists": "Brukeren finnes allerede",
  "User does not exist": "Brukeren finnes ikke",
  "Username cannot be empty": "Brukernavnet kan ikke være tomt"
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/nl.mjs
var nlDict = {
  "Account recovery requires verified contact information": "Accountherstel vereist geverifieerde contactgegevens",
  "Authenticator App (TOTP)": "Authenticator-app (TOTP)",
  "Back to Sign In": "Terug naar inloggen",
  "Change Password": "Wachtwoord wijzigen",
  Changing: "Wordt aangepast",
  Code: "Code",
  "Confirm Email Code": "E-mailcode bevestigen",
  "Confirm Password": "Bevestig Wachtwoord",
  "Confirm Sign Up": "Bevestig inschrijving",
  "Confirm SMS Code": "Bevestig SMS Code",
  "Confirm TOTP Code": "Bevestig TOTP Code",
  Confirm: "Bevestig",
  "Confirmation Code": "Bevestigingscode",
  Confirming: "Bevestigen",
  "Create a new account": "Nieuw account aanmaken",
  "Create Account": "Account aanmaken",
  "Creating Account": "Account wordt aangemaakt",
  "Dismiss alert": "Waarschuwing sluiten",
  Email: "E-mail",
  "Email Message": "E-mailbericht",
  "Enter your code": "Vul je code in",
  "Enter your Email": "Vul je e-mail in",
  "Enter your Password": "Vul je wachtwoord in",
  "Enter your phone number": "Vul je telefoonnummer in",
  "Enter your username": "Vul je gebruikersnaam in",
  "Enter your Username": "Vul je gebruikersnaam in",
  "Forgot your password?": "Wachtwoord vergeten? ",
  "Hide password": "Verberg wachtwoord",
  "It may take a minute to arrive": "Het kan even duren voordat deze aankomt",
  Loading: "Laden",
  "Multi-Factor Authentication": "Multi-Factor Authentication",
  "Multi-Factor Authentication Setup": "Multi-Factor Authentication instellen",
  "New password": "Nieuw wachtwoord",
  "New Password": "Nieuw Wachtwoord",
  or: "of",
  Password: "Wachtwoord",
  "Phone Number": "Telefoonnummer",
  "Please confirm your Password": "Bevestig je wachtwoord",
  "Resend Code": "Verstuur code nogmaals",
  "Reset Password": "Wachtwoord resetten",
  "Reset your password": "Reset je wachtwoord",
  "Reset your Password": "Wachtwoord resetten",
  "Select MFA Type": "MFA-type kiezen",
  "Send code": "Verstuur code",
  "Send Code": "Verstuur Code",
  Sending: "Versturen",
  "Setup Email": "E-mailadres instellen",
  "Setup TOTP": "TOTP Instellingen",
  "Show password": "Toon wachtwoord",
  "Sign in to your account": "Inloggen op je account",
  "Sign In with Amazon": "Inloggen met Amazon",
  "Sign In with Apple": "Inloggen met Apple",
  "Sign In with Facebook": "Inloggen met Facebook",
  "Sign In with Google": "Inloggen met Google",
  "Sign in": "Inloggen",
  "Sign In": "Inloggen",
  "Signing in": "Inloggen",
  Skip: "Overslaan",
  Submit: "Versturen",
  Submitting: "Wordt verstuurd",
  "Text Message (SMS)": "Tekstbericht (sms)",
  Username: "Gebruikersnaam",
  "Verify Contact": "Verifieer Contact",
  Verify: "Verifieer",
  "We Emailed You": "We hebben u een e-mail gestuurd",
  "We Sent A Code": "We hebben een code gestuurd",
  "We Texted You": "We hebben u een sms gestuurd",
  "Your code is on the way. To log in, enter the code we emailed to": "Uw code is onderweg. Om in te loggen, voer de code in die we gemaild hebben naar",
  "Your code is on the way. To log in, enter the code we sent you": "Uw code is onderweg. Om in te loggen, voer de code in die we u hebben gestuurd",
  "Your code is on the way. To log in, enter the code we texted to": "Uw code is onderweg. Om in te loggen, voer de code in die we hebben gestuurd naar",
  "Your passwords must match": "Je wachtwoorden moeten overeenkomen"
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/pl.mjs
var plDict = {
  "Account recovery requires verified contact information": "Odzyskanie konta wymaga zweryfikowanych danych kontaktowych",
  "Authenticator App (TOTP)": "Aplikacja uwierzytelniania (TOTP)",
  "Back to Sign In": "Powrót do logowania",
  "Change Password": "Zmień hasło",
  Changing: "Zmienianie",
  Code: "Kod",
  "Confirm Email Code": "Potwierdź kod e-mail",
  "Confirm Password": "Potwierdź Hasło",
  "Confirm Sign Up": "Potwierdź rejestrację",
  "Confirm SMS Code": "Potwierdź kod SMS",
  "Confirm TOTP Code": "Potwierdź hasło jednorazowe",
  Confirm: "Potwierdź",
  "Confirmation Code": "Kod potwierdzenia",
  Confirming: "Potwierdzanie",
  "Create a new account": "Utwórz nowe konto",
  "Create Account": "Utwórz konto",
  "Creating Account": "Tworzenie konta",
  "Dismiss alert": "Odrzuć alert",
  Email: "E-mail",
  "Email Message": "Wiadomość e-mail",
  "Enter your code": "Wprowadź swój kod",
  "Enter your Email": "Wpisz swój adres e-mail",
  "Enter your phone number": "Wpisz swój numer telefonu",
  "Enter your username": "Wprowadź swoją nazwę użytkownika",
  "Forgot your password?": "Zapomniałeś hasła? ",
  "Hide password": "Ukryj hasło",
  "It may take a minute to arrive": "Może to chwilę potrwać",
  Loading: "Ładowanie",
  "Multi-Factor Authentication": "Uwierzytelnianie wieloskładnikowe",
  "Multi-Factor Authentication Setup": "Konfigurowanie uwierzytelniania wieloskładnikowego",
  "New password": "Nowe hasło",
  or: "albo",
  Password: "Hasło",
  "Phone Number": "Numer telefonu",
  "Resend Code": "Wyślij kod ponownie",
  "Reset your password": "Zresetuj swoje hasło",
  "Reset your Password": "Zresetuj swoje hasło",
  "Select MFA Type": "Wybierz typ MFA",
  "Send code": "Wyślij kod",
  "Send Code": "Zresetuj hasło",
  Sending: "Wysyłanie",
  "Setup Email": "Konfiguracja poczty e-mail",
  "Setup TOTP": "Konfiguruj TOTP",
  "Show password": "Pokaż hasło",
  "Sign in to your account": "Zaloguj się na swoje konto",
  "Sign In with Amazon": "Zaloguj z Amazon",
  "Sign In with Apple": "Zaloguj z Apple",
  "Sign In with Facebook": "Zaloguj z Facebook",
  "Sign In with Google": "Zaloguj z Google",
  "Sign In": "Logowanie",
  "Sign in": "Zaloguj",
  "Signing in": "Logowanie",
  Skip: "Pomiń",
  Submit: "Wyślij",
  Submitting: "Wysyłanie",
  "Text Message (SMS)": "Wiadomość tekstowa (SMS)",
  Username: "Nazwa użytkownika",
  "Verify Contact": "Weryfikacja danych kontaktowych",
  Verify: "Zweryfikuj",
  // Additional translations provided by customers
  Birthdate: "Data urodzenia",
  "Family Name": "Nazwisko",
  "Given Name": "Pierwsze imię",
  "Middle Name": "Drugie imię",
  Name: "Imię i nazwisko",
  Nickname: "Pseudonim",
  "Preferred Username": "Preferowana nazwa użytkownika",
  Profile: "Profil",
  Website: "Strona internetowa",
  "We Emailed You": "Wysłaliśmy Ci wiadomość e-mail",
  "We Sent A Code": "Wysłaliśmy kod",
  "We Texted You": "Wysłaliśmy Ci wiadomość SMS",
  "Your code is on the way. To log in, enter the code we emailed to": "Twój kod został wysłany. Aby się zalogować, wprowadź kod wysłany na adres e-mail",
  "Your code is on the way. To log in, enter the code we sent you": "Twój kod został wysłany. Aby się zalogować, wprowadź wysłany do Ciebie kod",
  "Your code is on the way. To log in, enter the code we texted to": "Twój kod został wysłany. Aby się zalogować, wprowadź kod wysłany do Ciebie w wiadomości SMS pod numer"
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/pt.mjs
var ptDict = {
  "Account recovery requires verified contact information": "A recuperação da conta requer informações de contato verificadas",
  "Authenticator App (TOTP)": "Aplicativo autenticador (TOTP)",
  "Add your Profile": "Adicione seu Perfil",
  "Add your Website": "Adicione seu Website",
  "Back to Sign In": "Voltar para Entrar",
  "Change Password": "Mudar senha",
  Changing: "Mudando",
  Code: "Código",
  "Confirm Email Code": "Confirmar código de e-mail",
  "Confirm Password": "Confirme a Senha",
  "Confirm Sign Up": "Confirmar inscrição",
  "Confirm SMS Code": "Confirme o código SMS",
  "Confirm MFA Code": "Confirme o código MFA",
  "Confirm TOTP Code": "Confirme o código TOTP",
  Confirm: "confirme",
  "Confirmation Code": "Código de confirmação",
  Confirming: "Confirmando",
  "Create a new account": "Criar uma nova conta",
  "Create Account": "Criar Conta",
  "Creating Account": "Criando conta",
  "Dismiss alert": "Descartar alerta",
  Email: "O email",
  "Email Message": "Mensagem de e-mail",
  "Enter your Birthdate": "Digite sua Data de Nascimento",
  "Enter your code": "Insira seu código",
  "Enter your Confirmation Code": "Digite seu código de confirmação",
  "Enter your Email": "Digite seu e-mail",
  "Enter your Family Name": "Digite seu Sobrenome",
  "Enter your Given Name": "Digite seu Primeiro Nome",
  "Enter your Middle Name": "Digite seu Nome do Meio",
  "Enter your Name": "Digite seu Nome",
  "Enter your Nickname": "Digite seu Apelido",
  "Enter your Password": "Digite sua senha",
  "Enter your phone number": "Digite seu número de telefone",
  "Enter your Preferred Username": "Digite seu nome de usuário preferido",
  "Enter your username": "Digite seu nome de usuário",
  "Forgot password?": "Esqueceu a senha?",
  "Forgot your password?": "Esqueceu sua senha?",
  "Hide password": "Esconder a senha",
  "It may take a minute to arrive": "Pode levar um minuto para chegar",
  Loading: "Carregando",
  "Multi-Factor Authentication": "Autenticação multifator",
  "Multi-Factor Authentication Setup": "Configuração da autenticação multifator",
  "New password": "Nova Senha",
  or: "ou",
  Password: "Senha",
  "Phone Number": "Número de telefone",
  "Please confirm your Password": "Por favor confirme sua Senha",
  "Resend Code": "Reenviar código",
  "Reset your password": "Redefina sua senha",
  "Reset your Password": "Redefina sua senha",
  "Select MFA Type": "Selecionar tipo de MFA",
  "Send code": "Enviar código",
  "Send Code": "Enviar código",
  Sending: "Enviando",
  "Setup Email": "Configurar e-mail",
  "Setup TOTP": "Configurar TOTP",
  "Show password": "Mostrar senha",
  "Sign in to your account": "Faça login em sua conta",
  "Sign In with Amazon": "Entrar com a Amazon",
  "Sign In with Apple": "Entrar com a Apple",
  "Sign In with Facebook": "Entrar com o Facebook",
  "Sign In with Google": "Faça login no Google",
  "Sign in": "Entrar",
  "Sign In": "Entrar",
  "Signing in": "Entrando",
  Skip: "Pular",
  Submit: "Enviar",
  Submitting: "Enviando",
  "Text Message (SMS)": "Mensagem de texto (SMS)",
  Username: "Nome do usuário",
  "Verify Contact": "Verificar contato",
  Verify: "Verificar",
  "We Emailed You": "Enviamos um e-mail para você",
  "We Sent A Code": "Enviamos um código",
  "We Texted You": "Enviamos um SMS para você",
  "Your code is on the way. To log in, enter the code we emailed to": "Seu código está a caminho. Para fazer login, insira o código para o qual enviamos um e-mail",
  "Your code is on the way. To log in, enter the code we sent you": "Seu código está a caminho. Para fazer login, insira o código que enviamos para você",
  "Your code is on the way. To log in, enter the code we texted to": "Seu código está a caminho. Para fazer login, insira o código para o qual enviamos uma mensagem de texto",
  // Additional translations provided by customers
  "An account with the given email already exists.": "Já existe uma conta com o email utilizado.",
  "Confirm a Code": "Confirmar um Código",
  "Confirm Sign In": "Confirmar Início de Sessão",
  "Forgot Password": "Esqueci Minha Senha",
  "Incorrect username or password.": "Nome de usuário ou senha incorreta",
  "Invalid password format": "Formato de senha inválido",
  "Invalid phone number format": "Formato de número de telefone inválido",
  "Loading...": "Carregando...",
  "New Password": "Nova Senha",
  "Resend a Code": "Reenviar um Código",
  "Sign Out": "Sair",
  "Sign Up with Amazon": "Criar Conta com a Amazon",
  "Sign Up with Apple": "Criar Conta com a Apple",
  "Sign Up with Facebook": "Criar Conta com o Facebook",
  "Sign Up with Google": "Criar Conta com o Google",
  "Sign Up": "Criar Conta",
  "User already exists": "Usuário já existe",
  "User does not exist": "Usuário não existe",
  "Username cannot be empty": "Nome de usuário não pode estar vazio",
  "Your passwords must match": "Suas senhas devem ser iguais"
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/zh.mjs
var zhDict = {
  "Account recovery requires verified contact information": "账户恢复需要验证过的联系方式",
  "Authenticator App (TOTP)": "Authenticator 应用程序（TOTP）",
  "Back to Sign In": "回到登录",
  "Change Password": "更改密码",
  Changing: "正在修改",
  Code: "确认码",
  "Confirm Email Code": "确认电子邮件代码",
  "Confirm Password": "确认密码",
  "Confirm Sign Up": "确认注册",
  "Confirm SMS Code": "确认短信验证码",
  "Confirm TOTP Code": "确认 TOTP 代码",
  Confirm: "确认",
  "Confirmation Code": "确认码",
  Confirming: "正在确认",
  "Create a new account": "创建新账户",
  "Create Account": "创建账户",
  "Creating Account": "正在创建账户",
  "Dismiss alert": "关闭警报",
  Email: "邮箱",
  "Email Message": "电子邮件消息",
  "Enter your code": "输入验证码",
  "Enter your Email": "输入电子邮件",
  "Enter your Password": "输入密码",
  "Enter your phone number": "输入电话号码",
  "Enter your username": "输入用户名",
  "Forgot your password?": "忘记密码了？",
  "Hide password": "隐藏密码",
  "It may take a minute to arrive": "可能需要一分钟才能到达",
  Loading: "正在加载",
  "Multi-Factor Authentication": "多重身份验证",
  "Multi-Factor Authentication Setup": "多重身份验证设置",
  "New password": "新密码",
  or: "或者",
  Password: "密码",
  "Phone Number": "电话",
  "Please confirm your Password": "请再次输入密码",
  "Resend Code": "重发验证码",
  "Reset your password": "重置密码",
  "Reset your Password": "重置密码",
  "Select MFA Type": "选择 MFA 类型",
  "Send Code": "发送确认码",
  "Send code": "发送验证码",
  Sending: "正在发送",
  "Setup Email": "设置电子邮件",
  "Setup TOTP": "设置 TOTP",
  "Show password": "显示密码",
  "Sign in to your account": "登录账户",
  "Sign In with Amazon": "通过 Amazon 登录",
  "Sign In with Apple": "通过 Apple 登录",
  "Sign In with Facebook": "通过 Facebook 登录",
  "Sign In with Google": "通过 Google 登录",
  "Sign in": "登录",
  "Sign In": "登录",
  "Signing in": "正在登录",
  Skip: "跳过",
  Submit: "提交",
  Submitting: "正在提交",
  "Text Message (SMS)": "短信（SMS）",
  Username: "用户名",
  "Verify Contact": "验证联系方式",
  Verify: "验证",
  "We Emailed You": "我们给您发送了电子邮件",
  "We Sent A Code": "我们发送了代码",
  "We Texted You": "我们给您发送了短信",
  "Your code is on the way. To log in, enter the code we emailed to": "您的代码正在发送中。要登录，请输入我们通过电子邮件发送给以下人员的代码：",
  "Your code is on the way. To log in, enter the code we sent you": "您的代码正在发送中。要登录，请输入我们发送给您的代码",
  "Your code is on the way. To log in, enter the code we texted to": "您的代码正在发送中。要登录，请输入我们通过短信发送给以下人员的代码：",
  // Additional translations provided by customers
  "Confirm a Code": "确认码",
  "Confirm Sign In": "确认登录",
  "Forgot Password": "忘记密码",
  "Incorrect username or password": "用户名或密码错误",
  "Invalid password format": "密码格式错误",
  "Invalid phone number format": "电话格式错误，请使用格式 +12345678900",
  "New Password": "新密码",
  "Resend a Code": "重发确认码",
  "Sign Out": "退出",
  "Sign Up": "注册",
  "User already exists": "用户已经存在",
  "User does not exist": "用户不存在"
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/sv.mjs
var svDict = {
  "Account recovery requires verified contact information": "För att återställa kontot behöver du ett verifierat konto",
  "Authenticator App (TOTP)": "Autentiseringsapp (TOTP)",
  "Back to Sign In": "Tillbaka till inloggningen",
  "Change Password": "Byt lösenord",
  Changing: "Ändra",
  Code: "Kod",
  "Confirm Email Code": "Bekräfta e-postkod",
  "Confirm Password": "Bekräfta lösenord",
  "Confirm Sign Up": "Bekräfta registrering",
  "Confirm SMS Code": "Bekräfta SMS-kod",
  "Confirm TOTP Code": "Bekräfta TOTP-kod",
  Confirm: "Bekräfta",
  "Confirmation Code": "Verifikationskod",
  Confirming: "Bekräftar",
  "Create a new account": "Skapa ett nytt konto",
  "Create Account": "Skapa konto",
  "Creating Account": "Skapar konto",
  "Dismiss alert": "Avvisa varning",
  Email: "E-post",
  "Email Message": "E-postmeddelande",
  "Enter your code": "Skriv din kod",
  "Enter your Email": "Ange din e-post",
  "Enter your phone number": "Ange ditt telefonnummer",
  "Enter your username": "Ange ditt användarnamn",
  "Forgot your password?": "Glömt ditt lösenord? ",
  "Hide password": "Dölj lösenord",
  "It may take a minute to arrive": "Det kan ta en minut att komma fram",
  Loading: "Laddar",
  "Multi-Factor Authentication": "Multifaktorautentisering",
  "Multi-Factor Authentication Setup": "Konfigurering av multifaktorautentisering",
  "New password": "Nytt lösenord",
  or: "eller",
  Password: "Lösenord",
  "Phone Number": "Telefonnummer",
  "Resend Code": "Skicka koden igen",
  "Reset your password": "Återställ ditt lösenord",
  "Reset your Password": "Återställ ditt lösenord",
  "Select MFA Type": "Välj MFA-typ",
  "Send code": "Skicka kod",
  "Send Code": "Skicka kod",
  Sending: "Skickar",
  "Setup Email": "Konfigurera e-post",
  "Setup TOTP": "Konfigurera TOTP",
  "Show password": "Visa lösenord",
  "Sign in to your account": "Logga in till ditt konto",
  "Sign In with Amazon": "Logga in med Amazon",
  "Sign In with Apple": "Logga in med Apple",
  "Sign In with Facebook": "Logga in med Facebook",
  "Sign In with Google": "Logga in med Google",
  "Sign in": "Logga in",
  "Sign In": "Logga in",
  "Signing in": "Loggar in",
  Skip: "Hoppa över",
  Submit: "Skicka",
  Submitting: "Skickar in",
  "Text Message (SMS)": "Textmeddelande (SMS)",
  Username: "Användarnamn",
  "Verify Contact": "Verifiera kontakt",
  Verify: "Verifiera",
  "We Sent A Code": "Vi skickade en kod",
  "We Texted You": "Vi sms:ade dig",
  "Your code is on the way. To log in, enter the code we emailed to": "Din kod är på väg. För att logga in, ange koden vi mejlade till",
  "Your code is on the way. To log in, enter the code we sent you": "Din kod är på väg. För att logga in, ange koden vi skickade till dig",
  "Your code is on the way. To log in, enter the code we texted to": "Din kod är på väg. För att logga in, ange koden vi sms:ade till",
  // Additional translations provided by customers
  "An account with the given email already exists.": "Det finns redan ett konto med denna e-postadress",
  "Confirm a Code": "Bekräfta koden",
  "Confirm Sign In": "Bekräfta inloggning",
  "Create account": "Skapa konto",
  "Enter your Password": "Ange ditt lösenord",
  "Forgot Password?": "Glömt lösenord?",
  "Have an account? ": "Redan registrerad? ",
  "Incorrect username or password": "Felaktigt användarnamn eller lösenord",
  "Invalid password format": "Ogiltigt lösenordsformat",
  "Invalid phone number format": `Ogiltigt format för telefonnummer`,
  "Lost your code? ": "Förlorat koden? ",
  "New Password": "Nytt lösenord",
  "No account? ": "Inget konto? ",
  "Password attempts exceeded": "Maximalt antal felaktiga inloggningsförsök har uppnåtts",
  "Reset Password": "Återställ lösenord",
  "Sign Out": "Logga ut",
  "Sign Up": "Registrering",
  "User already exists": "Användaren finns redan",
  "User does not exist": "Användaren finns inte",
  "Username cannot be empty": "Användarnamnet kan inte vara tomt",
  "We Emailed You": "Vi har skickat e-post till dig",
  "Please confirm your Password": "Bekräfta ditt lösenord"
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/id.mjs
var idDict = {
  "Account recovery requires verified contact information": "Pemulihan akun memerlukan informasi kontak terverifikasi",
  "Authenticator App (TOTP)": "Aplikasi Pengauntentikasi (TOTP)",
  "Back to Sign In": "Kembali ke Masuk",
  "Change Password": "Ubah kata sandi",
  Changing: "Mengubah",
  Code: "Kode",
  "Confirm Email Code": "Konfirmasi Kode Email",
  "Confirm Password": "Konfirmasi kata sandi",
  "Confirm Sign Up": "Konfirmasi Pendaftaran",
  "Confirm SMS Code": "Konfirmasi Kode SMS",
  "Confirm TOTP Code": "Konfirmasi Kode TOTP",
  Confirm: "Konfirmasi",
  "Confirmation Code": "Kode Konfirmasi",
  Confirming: "Mengkonfirmasi",
  "Create a new account": "Buat akun baru",
  "Create Account": "Buat Akun",
  "Creating Account": "Membuat Akun",
  "Dismiss alert": "Hentikan pemberitahuan",
  Email: "Email",
  "Email Message": "Pesan Email",
  "Enter your code": "Masukkan kode anda",
  "Enter your Email": "Masukkan email anda",
  "Enter your phone number": "Masukkan nomor telepon anda",
  "Enter your username": "Masukkan nama akun anda",
  "Forgot your password?": "Lupa kata sandi? ",
  "Hide password": "Sembunyikan kata sandi",
  "It may take a minute to arrive": "Mungkin perlu waktu satu menit untuk tiba",
  Loading: "Memuat",
  "Multi-Factor Authentication": "Autentikasi Multifaktor",
  "Multi-Factor Authentication Setup": "Pengaturan Autentikasi Multifaktor",
  "New password": "Kata sandi baru",
  or: "atau",
  Password: "Kata sandi",
  "Phone Number": "Nomor telepon",
  "Resend Code": "Kirim ulang kodenya",
  "Reset your Password": "Reset Kata Sandi",
  "Reset your password": "Ubah kata sandi anda",
  "Select MFA Type": "Pilih tipe MFA",
  "Send code": "Kirim kode",
  "Send Code": "Kirim Kode",
  Sending: "Mengirim",
  "Setup Email": "Atur Email",
  "Setup TOTP": "Siapkan TOTP",
  "Show password": "Tampilkan kata sandi",
  "Sign in to your account": "Masuk akun anda",
  "Sign In with Amazon": "Masuk dengan Amazon",
  "Sign In with Apple": "Masuk dengan Apple",
  "Sign In with Facebook": "Masuk dengan Facebook",
  "Sign In with Google": "Masuk dengan Google",
  "Sign in": "Masuk",
  "Sign In": "Masuk",
  "Signing in": "Memasuki",
  Skip: "Lewati",
  Submit: "Ajukan",
  Submitting: "Mengajukan",
  "Text Message (SMS)": "Pesan Teks (SMS)",
  Username: "Nama akun",
  "Verify Contact": "Verifikasi Kontak",
  Verify: "Verifikasi",
  "We Sent A Code": "Kami Mengirim Kode",
  "We Texted You": "Kami mengirim SMS kepada Anda",
  "Your code is on the way. To log in, enter the code we sent you": "Kode Anda segera hadir. Untuk masuk, masukkan kode yang kami kirimkan kepada Anda",
  // Additional translations provided by customers
  "An account with the given email already exists.": "Akun dengan email tersebut sudah terdaftar.",
  "Attempt limit exceeded, please try after some time.": "Batas percobaan terlampaui, mohon coba lagi setelah beberapa waktu.",
  "Cannot reset password for the user as there is no registered/verified email or phone_number": "Tidak dapat mengatur ulang kata sandi karena tidak ada email terdaftar / terverifikasi atau nomor telepon",
  Change: "Ubah",
  "Confirm a Code": "Konfirmasi kode",
  "Create account": "Buat akun",
  "Enter your password": "Masukkan kata sandi anda",
  "Forgot Password": "Lupa kata sandi",
  "Have an account? ": "Sudah punya akun? ",
  Hello: "Halo",
  "Incorrect username or password.": "Nama akun atau kata sandi salah.",
  "Invalid phone number format": "Nomor telepon tidak sesuai dengan format.",
  "Invalid verification code provided, please try again.": "Kode verifikasi tidak sesuai, mohon coba lagi.",
  "It may take a minute to arrive.": "Mungkin perlu beberapa waktu untuk tiba.",
  "Lost your code? ": "Kode anda hilang?",
  Name: "Nama",
  "Network error": "Galat jaringan",
  "No account? ": "Tidak ada akun?",
  "Password did not conform with policy: Password not long enough": "Kata sandi tidak sesuai dengan aturan: Kata sandi kurang panjang",
  "Resend a Code": "Renvoyer un code",
  "Reset password": "Ubah kata sandi anda",
  Send: "Kirim",
  "Sign In with AWS": "Masuk dengan AWS",
  "Sign Up with Amazon": "Daftar dengan Amazon",
  "Sign Up with AWS": "Daftar dengan AWS",
  "Sign Up with Facebook": "Daftar dengan Facebook",
  "Sign Up with Google": "Daftar dengan Google",
  SMS: "SMS",
  "User already exists": "Akun sudah terdaftar",
  "User does not exist.": "Akun tidak terdaftar.",
  "User is disabled.": "Akun dinonaktifkan.",
  "Username cannot be empty": "Nama akun tidak boleh kosong",
  "Username/client id combination not found.": "Nama akun atau id tidak ditemukan.",
  "We Emailed You": "Kami mengirimkanmu email",
  "Your code is on the way. To log in, enter the code we emailed to": "Kode anda dalam pengiriman. Untuk masuk, masukkan kode yang kami emailkan ke",
  "Your code is on the way. To log in, enter the code we texted to": "Kode anda dalam pengiriman. Untuk masuk, masukkan kode yang kami tuliskan ke",
  "Your passwords must match": "Kata sandi harus sama"
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/tr.mjs
var trDict = {
  "Account recovery requires verified contact information": "Hesap kurtarma, doğrulanmış iletişim bilgilerini gerektirir",
  "Authenticator App (TOTP)": "Kimlik Doğrulayıcı Uygulaması (TOTP)",
  "Add your Profile": "Profilinizi ekleyin",
  "Add your Website": "Web sitenizi ekleyin",
  "Back to Sign In": "Oturum Açmaya Geri Dön",
  "Change Password": "Şifreyi Değiştir",
  Changing: "Değiştiriliyor",
  Code: "Kod",
  "Confirm Email Code": "E-posta Kodunu Onayla",
  "Confirm Password": "Şifreyi Doğrula",
  "Confirm Sign Up": "Kayıt İşlemini Doğrula",
  "Confirm SMS Code": "SMS Kodunu Doğrula",
  "Confirm MFA Code": "Çoklu Faktörlü Doğrulama Kodunu Doğrula",
  "Confirm TOTP Code": "Tek Kullanımlık Şifreyi Doğrula",
  Confirm: "Doğrula",
  "Confirmation Code": "Doğrulama Kodu",
  Confirming: "Doğrulanıyor",
  "Create a new account": "Yeni bir hesap oluştur",
  "Create Account": "Hesap Oluştur",
  "Creating Account": "Hesap Oluşturuluyor",
  "Dismiss alert": "Uyarıyı reddet",
  Email: "E-posta",
  "Email Message": "E-posta Mesajı",
  "Enter your Birthdate": "Doğum gününüzü girin",
  "Enter your code": "Kodu girin",
  "Enter your Confirmation Code": "Doğrulama Kodunuzu Girin",
  "Enter your Email": "E-posta adresinizi girin",
  "Enter your email": "E-posta adresinizi girin",
  "Enter your Family Name": "Ad Soyadınızı girin",
  "Enter your Given Name": "Adınızı girin",
  "Enter your Middle Name": "Soyadınızı girin",
  "Enter your Name": "Adınızı girin",
  "Enter your Nickname": "Takma adınızı girin",
  "Enter your Password": "Şifrenizi girin",
  "Enter your phone number": "Telefon numaranızı girin",
  "Enter your Preferred Username": "Tercih ettiğiniz kullanıcı adınızı girin",
  "Enter your username": "Kullanıcı adınızı girin",
  "Forgot Password?": "Şifrenizi Mi Unuttunuz?",
  "Forgot password?": "Şifrenizi mi unuttunuz?",
  "Forgot your password?": "Şifrenizi mi unuttunuz?",
  "Hide password": "Şifreyi gizle",
  "It may take a minute to arrive": "Kodun gelmesi bir dakika sürebilir",
  Loading: "Yükleniyor",
  "Multi-Factor Authentication": "Çok Faktörlü Kimlik Doğrulama",
  "Multi-Factor Authentication Setup": "Çok Faktörlü Kimlik Doğrulama Kurulumu",
  "New password": "Yeni şifre",
  or: "veya",
  Password: "Şifre",
  "Phone Number": "Telefon Numarası",
  "Please confirm your Password": "Lütfen şifrenizi doğrulayın",
  "Resend Code": "Kodu Yeniden Gönder",
  "Reset your password": "Şifrenizi sıfırlayın",
  "Reset your Password": "Şifrenizi Sıfırlayın",
  "Reset Password": "Şifreyi Sıfırla",
  "Select MFA Type": "MFA türünü seçin",
  "Send code": "Kod gönder",
  "Send Code": "Kod Gönder",
  Sending: "Gönderiliyor",
  "Setup Email": "E-postayı ayarla",
  "Setup TOTP": "Tek kullanımlık şifre kurulumu yap",
  "Show password": "Şifreyi göster",
  "Sign in to your account": "Hesabınızda oturum açın",
  "Sign In with Amazon": "Amazon ile Oturum Aç",
  "Sign In with Apple": "Apple ile Oturum Aç",
  "Sign In with Facebook": "Facebook ile Oturum Aç",
  "Sign In with Google": "Google ile Oturum Aç",
  "Sign in": "Oturum aç",
  "Sign In": "Oturum Aç",
  "Sign Up with Facebook": "Facebook ile Kayıt Ol",
  "Sign Up with Google": "Google ile Kayıt Ol",
  "Signing in": "Oturum açılıyor",
  Skip: "Atla",
  Submit: "Gönder",
  Submitting: "Gönderiliyor",
  "Text Message (SMS)": "Kısa Mesaj (SMS)",
  Username: "Kullanıcı adı",
  "Verify Contact": "Kişiyi Doğrula",
  Verify: "Doğrula",
  "We Emailed You": "Size E-posta Gönderdik",
  "We Sent A Code": "Bir Kod Gönderdik",
  "We Texted You": "Size Mesaj Gönderdik",
  "Your code is on the way. To log in, enter the code we emailed to": "Kodunuz yolda. Oturum açmak için, gönderdiğimiz e-postadaki kodu girin",
  "Your code is on the way. To log in, enter the code we sent you": "Kodunuz yolda. Oturum açmak için, size gönderdiğimiz kodu girin",
  "Your code is on the way. To log in, enter the code we texted to": "Kodunuz yolda. Oturum açmak için, gönderdiğimiz mesajdaki kodu girin",
  // Additional translations provided by customers
  "An account with the given email already exists.": "Bu e-postaya ait zaten bir hesap var.",
  "Confirm Sign In": "Oturum Açmayı Doğrula",
  "Have an account? ": "Hesabınız var mı? ",
  "Incorrect username or password": "Yanlış kullanıcı adı ya da şifre",
  "Invalid password format": "Geçersiz parola formatı",
  "Invalid phone number format": "Geçersiz telefon numarası formatı",
  "Lost your code? ": "Kodu mu kaybettiniz? ",
  "No account? ": "Hesabınız yok mu? ",
  "Password attempts exceeded": "Maksimum oturum açma girişimi aşıldı",
  "Sign Out": "Çıkış yap",
  "Sign Up": "Kayıt Ol",
  "User already exists": "Bu kullanıcı zaten var",
  "User does not exist": "Böyle bir kullanıcı mevcut değil",
  "Username cannot be empty": "Kullanıcı adı boş olamaz"
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/ru.mjs
var ruDict = {
  "Account recovery requires verified contact information": "Восстановление учетной записи требует проверки контактной информации",
  "Authenticator App (TOTP)": "Приложение для аутентификации (TOTP)",
  "Back to Sign In": "Назад, чтобы войти",
  "Change Password": "изменять пароль",
  Changing: "Изменение",
  Code: "Код",
  "Confirm Email Code": "Подтвердите код электронной почты",
  "Confirm Password": "Подтверждение пароля",
  "Confirm Sign Up": "Подтверждение зарегистрироваться",
  "Confirm SMS Code": "Подтверждение CMC-Код",
  "Confirm TOTP Code": "Подтверждение TOTP-Код",
  Confirm: "Подтверждать",
  "Confirmation Code": "код подтверждения",
  Confirming: "подтверждение",
  "Create a new account": "Создавать новую учетную запись",
  "Create Account": "Создать учетную запись",
  "Creating Account": "создание учетная запись",
  "Dismiss alert": "Закрыть оповещение",
  Email: "электронная почта",
  "Email Message": "Сообщение по электронной почте",
  "Enter your code": "ввести ваш Код",
  "Enter your Email": "ввести ваш электронная почта",
  "Enter your phone number": "ввести ваш номер телефона",
  "Enter your username": "ввести ваш имя пользователя",
  "Forgot your password?": "Забыли ваш пароль?",
  "Hide password": "Скрывать пароль",
  "It may take a minute to arrive": "Доставка может занять некоторое время",
  Loading: "Загрузка",
  "Multi-Factor Authentication": "Многофакторная аутентификация",
  "Multi-Factor Authentication Setup": "Настройка многофакторной аутентификации",
  "New password": "Новый пароль",
  or: "или",
  Password: "Пароль",
  "Phone Number": "Номер телефона",
  "Resend Code": "Отправь еще раз Код",
  "Reset your password": "сброс ваш пароль",
  "Reset your Password": "сброс ваш Пароль",
  "Select MFA Type": "Выберите тип МФА",
  "Send code": "Отправлять Код",
  "Send Code": "Отправлять Код",
  Sending: "отправка",
  "Setup Email": "Настроить электронную почту",
  "Setup TOTP": "Настраивать TOTP",
  "Show password": "Показывать пароль",
  "Sign in to your account": "знак в свой аккаунт",
  "Sign In with Amazon": "знак в с Amazon",
  "Sign In with Apple": "знак в с Apple",
  "Sign In with Facebook": "знак в с Facebook",
  "Sign In with Google": "знак в с Google",
  "Sign in": "знак в",
  "Sign In": "знак в",
  "Signing in": "подписание в",
  Skip: "Пропускать",
  Submit: "Представлять на рассмотрение",
  Submitting: "Представив",
  "Text Message (SMS)": "Текстовое сообщение (SMS)",
  Username: "Имя пользователя",
  "Verify Contact": "Проверить контакт",
  Verify: "Проверить",
  "We Emailed You": "Мы отправили вам электронное письмо",
  "We Sent A Code": "Мы отправили код",
  "We Texted You": "Мы отправили вам текстовое сообщение",
  "Your code is on the way. To log in, enter the code we emailed to": "Ваш код отправлен. Чтобы войти в систему, введите код, который мы отправили по электронной почте",
  "Your code is on the way. To log in, enter the code we sent you": "Ваш код отправлен. Чтобы войти в систему, введите код, который мы послали вам",
  "Your code is on the way. To log in, enter the code we texted to": "Ваш код отправлен. Чтобы войти в систему, введите код, который мы отправили текстовым сообщением"
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/he.mjs
var heDict = {
  "Account recovery requires verified contact information": "שחזור לקוח דורש עוד מידע",
  "Authenticator App (TOTP)": "אפליקציית אימות (TOTP)",
  "Back to Sign In": "חזור להרשמה",
  "Change Password": "עדכון סיסמא",
  Changing: "מעדכן",
  Code: "קוד",
  "Confirm Email Code": "אמת קוד אימייל",
  "Confirm Password": "אשר סיסמא",
  "Confirm Sign Up": "אשר הרשמה",
  "Confirm SMS Code": "אשר sms קוד",
  "Confirm TOTP Code": "אשר totp קוד",
  Confirm: "אישור",
  "Confirmation Code": "אישור קוד",
  Confirming: "מאשר",
  "Create a new account": "צור משתמש חדש",
  "Create Account": "צור משתמש",
  "Creating Account": "יצירת משתמש",
  "Dismiss alert": "הסר התראה",
  Email: "אימייל",
  "Email Message": "הודעת אימייל",
  "Enter your code": "הכנס את הקוד",
  "Enter your Email": "הכנס את המייל שלך",
  "Enter your phone number": "הכנס את מספר הטלפון שלך",
  "Enter your username": "הכנס את שם המתמש שלך",
  "Forgot your password?": "שכחת סיסמא ?",
  "Hide password": "הסתר סיסמא",
  Loading: "טוען",
  "Multi-Factor Authentication": "אימות רב-גורמי",
  "Multi-Factor Authentication Setup": "הגדרת אימות רב-גורמי",
  "New password": "סיסמא חדשה",
  or: "אוֹ",
  Password: "סיסמא",
  "Phone Number": "מספר טלפון",
  "Resend Code": "שלח קוד שוב",
  "Reset your password": "אפס סיסמא",
  "Reset your Password": "אפס סיסמא",
  "Select MFA Type": "בחר סוג אימות רב-גורמי",
  "Send code": "שלח קוד",
  "Send Code": "שלח קוד",
  Sending: "שולח",
  "Setup Email": "הגדר אימייל",
  "Setup TOTP": "Setup TOTP",
  "Show password": "הצג סיסמא",
  "Sign in to your account": "התחבר לחשבון שלך",
  "Sign In with Amazon": "Sign In with Amazon",
  "Sign In with Apple": "Sign In with Apple",
  "Sign In with Facebook": "Sign In with Facebook",
  "Sign In with Google": "Sign In with Google",
  "Sign in": "התחבר",
  "Sign In": "התחבר",
  "Signing in": "מתחבר",
  Skip: "דלג",
  Submit: "שלח",
  Submitting: "שולח",
  "Text Message (SMS)": "הודעת טקסט (SMS)",
  Username: "שם משתמש",
  "Verify Contact": "אמת איש קשר",
  Verify: "אמת"
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/ua.mjs
var uaDict = {
  "Account recovery requires verified contact information": "Відновлення облікового запису потребує контактної інформації",
  "Authenticator App (TOTP)": "Додаток автентифікації (TOTP)",
  "Back to Sign In": "Назад на сторінку входу",
  "Change Password": "Змінити пароль",
  Changing: "Змінюємо",
  Code: "Код",
  "Confirm Email Code": "Підтвердити код електронної пошти",
  "Confirm Password": "Підтвердіть пароль",
  "Confirm Sign Up": "Підтвердіть реєстрацію",
  "Confirm SMS Code": "Підтвердіть SMS код",
  "Confirm TOTP Code": "Підтвердіть TOTP код",
  Confirm: "Підтвердити",
  "Confirmation Code": "Код підтвердження",
  Confirming: "Підтверджуємо",
  "Create a new account": "Зареєструватися",
  "Create Account": "Зареєструватися",
  "Creating Account": "Реєструємо",
  "Dismiss alert": "Відхилити сповіщення",
  Email: "Email",
  "Email Message": "Повідомлення електронної пошти",
  "Enter your code": "Введіть код",
  "Enter your Email": "Введіть ваш email",
  "Enter your phone number": "Введіть ваш номер телефону",
  "Enter your username": "Введіть ваше імʼя користувача",
  "Forgot password?": "Забули пароль?",
  "Forgot your password?": "Забули ваш пароль?",
  "Hide password": "Сховати пароль",
  "It may take a minute to arrive": "Доставка може тривати хвилину",
  Loading: "Загружаємо",
  "Multi-Factor Authentication": "Багатофакторна автентифікація",
  "Multi-Factor Authentication Setup": "Налаштування багатофакторної автентифікації",
  "New password": "Новий пароль",
  or: "або",
  Password: "Пароль",
  "Phone Number": "Номер Телефону",
  "Resend Code": "Відправити код повторно",
  "Reset your password": "Скинути пароль",
  "Reset your Password": "Скинути пароль",
  "Select MFA Type": "Виберіть тип MFA",
  "Send code": "Відправити код",
  "Send Code": "Відправити код",
  Sending: "Відправляємо",
  "Setup Email": "Налаштувати електронну пошту",
  "Setup TOTP": "Налаштувати TOTP",
  "Show password": "Показати пароль",
  "Sign in to your account": "Увійти у ваш обліковий запис",
  "Sign In with Amazon": "Увійти з Amazon",
  "Sign In with Apple": "Увійти з Apple",
  "Sign In with Facebook": "Увійти з Facebook",
  "Sign In with Google": "Увійти з Google",
  "Sign in": "Увійти",
  "Sign In": "Увійти",
  "Signing in": "Входимо",
  Skip: "Пропустити",
  Submit: "Відправити",
  Submitting: "Відправляємо",
  "Text Message (SMS)": "Текстове повідомлення (SMS)",
  Username: "Імʼя користувача",
  "Verify Contact": "Підтвердити Контакт",
  Verify: "Підтвердити",
  "We Emailed You": "Ми відправили вам Email",
  "We Sent A Code": "Ми відправили код",
  "We Texted You": "Ми відправили вам текстове повідомлення",
  "Your code is on the way. To log in, enter the code we emailed to": "Ваш код вже в дорозі. Щоб увійти, введіть код, що ми відправили вам на Email",
  "Your code is on the way. To log in, enter the code we sent you": "Ваш код вже в дорозі. Щоб увійти, введіть код, що ми вам відправили",
  "Your code is on the way. To log in, enter the code we texted to": "Ваш код вже в дорозі. Щоб увійти, введіть код, що ми відправили вам текстовим повідомленням",
  // Additional translations
  "An account with the given email already exists.": "Обліковий запис з цим Email вже існує.",
  "Confirm a Code": "Підтвердіть код",
  "Confirm Sign In": "Підтвердіть вхід",
  "Forgot Password": "Забули пароль",
  "Incorrect username or password.": "Невірне імʼя користувача або пароль",
  "Invalid password format": "Невірний формат паролю",
  "Invalid phone number format": "Невірний формат номеру телефону",
  "Loading...": "Загружаємо...",
  "New Password": "Новий пароль",
  "Resend a Code": "Відправити код повторно",
  "Reset Password": "Скинути пароль",
  "Sign Out": "Вийти",
  "Sign Up with Amazon": "Зареєструватися з Amazon",
  "Sign Up with Apple": "Зареєструватися з Apple",
  "Sign Up with Facebook": "Зареєструватися з Facebook",
  "Sign Up with Google": "Зареєструватися з Google",
  "Sign Up": "Зареєструватися",
  "User already exists": "Користувач вже існує",
  "User does not exist": "Такий користувач не існує",
  "Username cannot be empty": "Імʼя користувача не може бути пустим",
  "Your passwords must match": "Паролі мають збігатися"
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/th.mjs
var thDict = {
  "Account recovery requires verified contact information": "การกู้คืนบัญชีต้องมีข้อมูลติดต่อที่ได้รับการยืนยันแล้ว",
  "Add your Profile": "เพิ่มโปรไฟล์ของคุณ",
  "Add your Website": "เพิ่มเว็บไซต์ของคุณ",
  "Authenticator App (TOTP)": "แอปพลิเคชันยืนยันตัวตน (TOTP)",
  "Back to Sign In": "กลับไปที่การเข้าสู่ระบบ",
  "Change Password": "เปลี่ยนรหัสผ่าน",
  Changing: "กำลังเปลี่ยน",
  Code: "รหัส",
  "Confirm Email Code": "ยืนยันรหัสอีเมล",
  "Confirm Password": "ยืนยันรหัสผ่าน",
  "Please confirm your Password": "กรุณายืนยันรหัสผ่านของคุณ",
  "Confirm Sign Up": "ยืนยันการลงทะเบียน",
  "Confirm SMS Code": "ยืนยันรหัส SMS",
  "Confirm MFA Code": "ยืนยันรหัส MFA",
  "Confirm TOTP Code": "ยืนยันรหัส TOTP",
  Confirm: "ยืนยัน",
  "Confirmation Code": "รหัสยืนยัน",
  Confirming: "กำลังยืนยัน",
  "Create a new account": "สร้างบัญชีใหม่",
  "Create Account": "สร้างบัญชี",
  "Creating Account": "กำลังสร้างบัญชี",
  "Dismiss alert": "ปิดการแจ้งเตือน",
  Email: "อีเมล",
  "Email Message": "ข้อความอีเมล",
  "Enter your Birthdate": "กรอกวันเกิดของคุณ",
  "Enter your code": "กรอกรหัสของคุณ",
  "Enter your Confirmation Code": "กรอกรหัสยืนยันของคุณ",
  "Enter your Email": "กรอกอีเมลของคุณ",
  "Enter your Family Name": "กรอกนามสกุลของคุณ",
  "Enter your Given Name": "กรอกชื่อของคุณ",
  "Enter your Middle Name": "กรอกชื่อกลางของคุณ",
  "Enter your Name": "กรอกชื่อของคุณ",
  "Enter your Nickname": "กรอกชื่อเล่นของคุณ",
  "Enter your Password": "กรอกรหัสผ่านของคุณ",
  "Enter your email": "กรอกอีเมลของคุณ",
  "Enter your phone number": "กรอกหมายเลขโทรศัพท์ของคุณ",
  "Enter your Preferred Username": "กรอกชื่อผู้ใช้ที่ต้องการ",
  "Enter your username": "กรอกชื่อผู้ใช้ของคุณ",
  "Forgot password?": "ลืมรหัสผ่าน?",
  "Forgot your password?": "ลืมรหัสผ่านใช่หรือไม่?",
  "Hide password": "ซ่อนรหัสผ่าน",
  "It may take a minute to arrive": "อาจใช้เวลาสักครู่",
  Loading: "กำลังโหลด",
  "Multi-Factor Authentication": "การยืนยันตัวตนหลายขั้นตอน",
  "Multi-Factor Authentication Setup": "ตั้งค่าการยืนยันตัวตนแบบหลายขั้นตอน",
  "New password": "รหัสผ่านใหม่",
  or: "หรือ",
  Password: "รหัสผ่าน",
  "Phone Number": "หมายเลขโทรศัพท์",
  "Resend Code": "ส่งรหัสอีกครั้ง",
  "Reset your Password": "รีเซ็ตรหัสผ่านของคุณ",
  "Reset your password": "รีเซ็ตรหัสผ่านของคุณ",
  "Select MFA Type": "เลือกประเภท MFA",
  "Send code": "ส่งรหัส",
  "Send Code": "ส่งรหัส",
  Sending: "กำลังส่ง",
  "Setup Email": "ตั้งค่าอีเมล",
  "Setup TOTP": "ตั้งค่า TOTP",
  "Show password": "แสดงรหัสผ่าน",
  "Sign in to your account": "เข้าสู่ระบบบัญชีของคุณ",
  "Sign In with Amazon": "เข้าสู่ระบบด้วย Amazon",
  "Sign In with Apple": "เข้าสู่ระบบด้วย Apple",
  "Sign In with Facebook": "เข้าสู่ระบบด้วย Facebook",
  "Sign In with Google": "เข้าสู่ระบบด้วย Google",
  "Sign in": "เข้าสู่ระบบ",
  "Sign In": "เข้าสู่ระบบ",
  "Signing in": "กำลังเข้าสู่ระบบ",
  Skip: "ข้าม",
  Submit: "ส่ง",
  Submitting: "กำลังส่ง",
  "Text Message (SMS)": "ข้อความตัวอักษร (SMS)",
  Username: "ชื่อผู้ใช้",
  "Verify Contact": "ยืนยันการติดต่อ",
  Verify: "ยืนยัน",
  "We Emailed You": "เราได้ส่งอีเมลถึงคุณแล้ว",
  "We Sent A Code": "เราได้ส่งรหัสแล้ว",
  "We Texted You": "เราได้ส่ง SMS ถึงคุณแล้ว",
  "Your code is on the way. To log in, enter the code we emailed to": "รหัสของคุณกำลังมา เพื่อเข้าสู่ระบบ กรุณากรอกรหัสที่เราส่งไปยังอีเมล",
  "Your code is on the way. To log in, enter the code we sent you": "รหัสของคุณกำลังมา เพื่อเข้าสู่ระบบ กรุณากรอกรหัสที่เราส่งให้คุณ",
  "Your code is on the way. To log in, enter the code we texted to": "รหัสของคุณกำลังมา เพื่อเข้าสู่ระบบ กรุณากรอกรหัสที่เราส่งไปยัง SMS",
  // Additional translations
  "An account with the given email already exists.": "บัญชีที่ใช้อีเมลนี้มีอยู่แล้ว",
  "Confirm a Code": "ยืนยันรหัส",
  "Confirm Sign In": "ยืนยันการเข้าสู่ระบบ",
  "Create account": "สร้างบัญชี",
  "Sign Up with Facebook": "ลงทะเบียนด้วย Facebook",
  "Sign Up with Google": "ลงทะเบียนด้วย Google",
  "Sign Up with Apple": "ลงทะเบียนด้วย Apple",
  "Sign Up with Line": "ลงทะเบียนด้วย Line",
  "Forgot Password": "ลืมรหัสผ่าน",
  "Have an account? ": "มีบัญชีอยู่แล้ว? ",
  "Incorrect username or password": "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง",
  "Invalid password format": "รูปแบบรหัสผ่านไม่ถูกต้อง",
  "It may take a minute to arrive.": "อาจใช้เวลาสักครู่ในการมาถึง",
  "Lost your code? ": "หารหัสไม่เจอ? ",
  "New Password": "รหัสผ่านใหม่",
  "No account? ": "ไม่มีบัญชี? ",
  "Password attempts exceeded": "เกินจำนวนครั้งที่อนุญาตให้ใส่รหัสผ่าน",
  "Reset password": "รีเซ็ตรหัสผ่าน",
  "Reset Password": "รีเซ็ตรหัสผ่าน",
  "Sign Out": "ออกจากระบบ",
  "Sign Up": "ลงทะเบียน",
  "User already exists": "ผู้ใช้นี้มีอยู่แล้ว",
  "User does not exist": "ไม่มีผู้ใช้นี้",
  "Username cannot be empty": "ต้องใส่ชื่อผู้ใช้งาน"
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/authenticator/defaultTexts.mjs
var defaultTexts = {
  ADD_PROFILE: "Add your Profile",
  ADD_WEBSITE: "Add your Website",
  BACK_SIGN_IN: "Back to Sign In",
  BIRTHDATE: "Birthdate",
  CHANGE_PASSWORD: "Change Password",
  CHANGING_PASSWORD: "Changing",
  CODE: "Code",
  CODE_ARRIVAL: "It may take a minute to arrive",
  CODE_EMAILED: "Your code is on the way. To log in, enter the code we emailed to",
  CODE_SENT: "Your code is on the way. To log in, enter the code we sent you",
  CODE_TEXTED: "Your code is on the way. To log in, enter the code we texted to",
  CONFIRM_PASSWORD: "Confirm Password",
  CONFIRM_PASSWORD_PLACEHOLDER: "Please confirm your Password",
  CONFIRM_RESET_PASSWORD_HEADING: "Reset your Password",
  CONFIRM_SIGNUP_HEADING: "Confirm Sign Up",
  CONFIRM_SMS: "Confirm SMS Code",
  CONFIRM_EMAIL: "Confirm Email Code",
  // If challenge name is not returned
  CONFIRM_MFA_DEFAULT: "Confirm MFA Code",
  CONFIRM_TOTP: "Confirm TOTP Code",
  CONFIRM: "Confirm",
  CONFIRMATION_CODE: "Confirmation Code",
  CONFIRMING: "Confirming",
  CREATE_ACCOUNT: "Create Account",
  CREATING_ACCOUNT: "Creating Account",
  EMAIL_ADDRESS: "Email",
  EMAIL_OTP: "Email Message",
  ENTER_BIRTHDATE: "Enter your Birthdate",
  ENTER_CODE: "Enter your code",
  ENTER_CONFIRMATION_CODE: "Enter your Confirmation Code",
  ENTER_EMAIL: "Enter your Email",
  ENTER_FAMILY_NAME: "Enter your Family Name",
  ENTER_GIVEN_NAME: "Enter your Given Name",
  ENTER_MIDDLE_NAME: "Enter your Middle Name",
  ENTER_NAME: "Enter your Name",
  ENTER_NICK_NAME: "Enter your Nickname",
  ENTER_PASSWORD: "Enter your Password",
  ENTER_PHONE_NUMBER: "Enter your Phone Number",
  ENTER_PREFERRED_USERNAME: "Enter your Preferred Username",
  ENTER_USERNAME: "Enter your username",
  FAMILY_NAME: "Family Name",
  GIVEN_NAME: "Given Name",
  FORGOT_PASSWORD: "Forgot Password?",
  FORGOT_YOUR_PASSWORD: "Forgot your password?",
  HIDE_PASSWORD: "Hide password",
  LOADING: "Loading",
  LOGIN_NAME: "Username",
  MIDDLE_NAME: "Middle Name",
  MFA_SETUP_SELECTION: "Multi-Factor Authentication Setup",
  MFA_SELECTION: "Multi-Factor Authentication",
  NAME: "Name",
  NICKNAME: "Nickname",
  NEW_PASSWORD: "New password",
  OR: "or",
  PASSWORD: "Password",
  PHONE_NUMBER: "Phone Number",
  PREFERRED_USERNAME: "Preferred Username",
  PROFILE: "Profile",
  RESEND_CODE: "Resend Code",
  RESET_PASSWORD_HEADING: "Reset your password",
  RESET_PASSWORD: "Reset Password",
  SEND_CODE: "Send code",
  SENDING: "Sending",
  SELECT_MFA_TYPE: "Select MFA Type",
  SETUP_EMAIL: "Setup Email",
  SETUP_TOTP: "Setup TOTP",
  SHOW_PASSWORD: "Show password",
  SIGN_IN_BUTTON: "Sign in",
  SIGN_IN_TAB: "Sign In",
  SIGN_IN_WITH_AMAZON: "Sign In with Amazon",
  SIGN_IN_WITH_APPLE: "Sign In with Apple",
  SIGN_IN_WITH_FACEBOOK: "Sign In with Facebook",
  SIGN_IN_WITH_GOOGLE: "Sign In with Google",
  SIGN_IN: "Sign in to your account",
  SIGN_UP_BUTTON: "Create a new account",
  SIGNING_IN_BUTTON: "Signing in",
  SKIP: "Skip",
  SMS_MFA: "Text Message (SMS)",
  SUBMIT: "Submit",
  SUBMITTING: "Submitting",
  SOFTWARE_TOKEN_MFA: "Authenticator App (TOTP)",
  UPPERCASE_COPY: "COPY",
  VERIFY_CONTACT: "Verify Contact",
  VERIFY_HEADING: "Account recovery requires verified contact information",
  VERIFY: "Verify",
  WE_EMAILED: "We Emailed You",
  WE_SENT_CODE: "We Sent A Code",
  WE_TEXTED: "We Texted You",
  WEBSITE: "Website"
};

// node_modules/@aws-amplify/ui/dist/esm/i18n/dictionaries/index.mjs
var deDict2 = __spreadValues({}, deDict);
var enDict2 = __spreadValues({}, enDict);
var esDict2 = __spreadValues({}, esDict);
var frDict2 = __spreadValues({}, frDict);
var itDict2 = __spreadValues({}, itDict);
var jaDict2 = __spreadValues({}, jaDict);
var krDict2 = __spreadValues({}, krDict);
var nbDict2 = __spreadValues({}, nbDict);
var nlDict2 = __spreadValues({}, nlDict);
var plDict2 = __spreadValues({}, plDict);
var ptDict2 = __spreadValues({}, ptDict);
var zhDict2 = __spreadValues({}, zhDict);
var svDict2 = __spreadValues({}, svDict);
var idDict2 = __spreadValues({}, idDict);
var trDict2 = __spreadValues({}, trDict);
var ruDict2 = __spreadValues({}, ruDict);
var heDict2 = __spreadValues({}, heDict);
var uaDict2 = __spreadValues({}, uaDict);
var thDict2 = __spreadValues({}, thDict);
var defaultTexts2 = __spreadValues({}, defaultTexts);

// node_modules/@aws-amplify/ui/dist/esm/i18n/translations.mjs
var DefaultTexts = __spreadValues({}, defaultTexts2);
function translate(phrase) {
  return I18n.get(phrase);
}
var translations = {
  de: deDict2,
  en: enDict2,
  es: esDict2,
  fr: frDict2,
  id: idDict2,
  it: itDict2,
  ja: jaDict2,
  // TODO: remove kr in next major release
  kr: krDict2,
  ko: krDict2,
  nb: nbDict2,
  nl: nlDict2,
  pl: plDict2,
  pt: ptDict2,
  zh: zhDict2,
  sv: svDict2,
  tr: trDict2,
  ru: ruDict2,
  he: heDict2,
  ua: uaDict2,
  th: thDict2
};

// node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/formFields/utils.mjs
var getPrimaryAlias = (state) => {
  const loginMechanisms = state?.context.config?.loginMechanisms;
  const [primaryAlias] = loginMechanisms ?? ["username"];
  return primaryAlias;
};
var applyTranslation = (formFields) => {
  const newFormFields = __spreadValues({}, formFields);
  for (const [name, options] of Object.entries(formFields)) {
    const {
      label,
      placeholder: placeholder2
    } = options;
    newFormFields[name] = __spreadProps(__spreadValues({}, options), {
      label: label ? translate(label) : void 0,
      placeholder: placeholder2 ? translate(placeholder2) : void 0
    });
  }
  return newFormFields;
};
var sortFormFields = (formFields) => {
  return Object.entries(formFields).sort((a, b) => {
    const orderA = a[1].order || Number.MAX_VALUE;
    const orderB = b[1].order || Number.MAX_VALUE;
    return orderA - orderB;
  }).filter((formFieldEntry) => formFieldEntry[1] !== void 0);
};

// node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/formFields/defaults.mjs
var DEFAULT_COUNTRY_CODE = "+1";
var getDefaultFormField = (fieldName) => {
  let options = defaultFormFieldOptions[fieldName];
  const {
    type
  } = options;
  if (type === "tel") {
    options = __spreadProps(__spreadValues({}, options), {
      dialCode: DEFAULT_COUNTRY_CODE
    });
  }
  return options;
};
var getAliasDefaultFormField = (state) => {
  const primaryAlias = getPrimaryAlias(state);
  return __spreadProps(__spreadValues({}, getDefaultFormField(primaryAlias)), {
    autocomplete: "username"
  });
};
var getConfirmationCodeFormFields = (_) => ({
  confirmation_code: __spreadProps(__spreadValues({}, getDefaultFormField("confirmation_code")), {
    label: "Code *",
    placeholder: "Code"
  })
});
var getSignInFormFields = (state) => ({
  username: __spreadValues({}, getAliasDefaultFormField(state)),
  password: __spreadProps(__spreadValues({}, getDefaultFormField("password")), {
    autocomplete: "current-password"
  })
});
var getSignUpFormFields = (state) => {
  const {
    loginMechanisms,
    signUpAttributes
  } = state.context.config;
  const primaryAlias = getPrimaryAlias(state);
  const fieldNames = Array.from(/* @__PURE__ */ new Set([...loginMechanisms, "password", "confirm_password", ...signUpAttributes]));
  const formField = {};
  for (const fieldName of fieldNames) {
    if (isAuthFieldWithDefaults(fieldName)) {
      const fieldAttrs = fieldName === primaryAlias ? getAliasDefaultFormField(state) : getDefaultFormField(fieldName);
      formField[fieldName] = __spreadValues({}, fieldAttrs);
    } else {
      console.debug(`Authenticator does not have a default implementation for ${fieldName}. Customize SignUp FormFields to add your own.`);
    }
  }
  return formField;
};
var getConfirmSignUpFormFields = (_) => ({
  confirmation_code: __spreadProps(__spreadValues({}, getDefaultFormField("confirmation_code")), {
    placeholder: "Enter your code"
  })
});
var getForgotPasswordFormFields = (state) => {
  const primaryAlias = getPrimaryAlias(state);
  const {
    label
  } = defaultFormFieldOptions[primaryAlias];
  return {
    username: __spreadProps(__spreadValues({}, getAliasDefaultFormField(state)), {
      label: `Enter your ${label.toLowerCase()}`,
      placeholder: `Enter your ${label.toLowerCase()}`
    })
  };
};
var getConfirmResetPasswordFormFields = (state) => __spreadProps(__spreadValues({}, getConfirmationCodeFormFields()), {
  password: __spreadProps(__spreadValues({}, getDefaultFormField("password")), {
    label: "New Password",
    placeholder: "New Password"
  }),
  confirm_password: __spreadProps(__spreadValues({}, getDefaultFormField("confirm_password")), {
    label: "Confirm Password",
    placeholder: "Confirm Password"
  })
});
var getForceNewPasswordFormFields = (state) => {
  const actorState = getActorState(state);
  const {
    missingAttributes
  } = actorState.context;
  const fieldNames = Array.from(/* @__PURE__ */ new Set(["password", "confirm_password", ...missingAttributes ?? []]));
  const formField = {};
  for (const fieldName of fieldNames) {
    if (isAuthFieldWithDefaults(fieldName)) {
      formField[fieldName] = __spreadValues({}, getDefaultFormField(fieldName));
    } else {
      console.debug(`Authenticator does not have a default implementation for ${fieldName}. Customize ForceNewPassword FormFields to add your own.`);
    }
  }
  return formField;
};
var getSetupEmailFormFields = (_) => ({
  email: getDefaultFormField("email")
});
var defaultFormFieldsGetters = {
  signIn: getSignInFormFields,
  signUp: getSignUpFormFields,
  confirmSignUp: getConfirmSignUpFormFields,
  confirmSignIn: getConfirmationCodeFormFields,
  forceNewPassword: getForceNewPasswordFormFields,
  forgotPassword: getForgotPasswordFormFields,
  confirmResetPassword: getConfirmResetPasswordFormFields,
  confirmVerifyUser: getConfirmationCodeFormFields,
  setupEmail: getSetupEmailFormFields,
  setupTotp: getConfirmationCodeFormFields
};

// node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/formFields/formFields.mjs
var getDefaultFormFields = (route, state) => {
  const formFieldGetter = defaultFormFieldsGetters[route];
  return formFieldGetter(state);
};
var getCustomFormFields = (route, state) => {
  const customFormFields = getActorContext(state)?.formFields?.[route];
  if (!customFormFields || Object.keys(customFormFields).length === 0) {
    return {};
  }
  return Object.entries(customFormFields).reduce((acc, [fieldName, customOptions]) => {
    if ((route === "signIn" || route === "forgotPassword") && fieldName === "username") {
      const defaultOptions2 = getAliasDefaultFormField(state);
      const mergedOptions = __spreadValues(__spreadValues({}, defaultOptions2), customOptions);
      return __spreadProps(__spreadValues({}, acc), {
        [fieldName]: mergedOptions
      });
    } else if (isAuthFieldsWithDefaults(fieldName)) {
      const defaultOptions2 = defaultFormFieldOptions[fieldName];
      const mergedOptions = __spreadValues(__spreadValues({}, defaultOptions2), customOptions);
      return __spreadProps(__spreadValues({}, acc), {
        [fieldName]: mergedOptions
      });
    } else {
      return __spreadProps(__spreadValues({}, acc), {
        [fieldName]: customOptions
      });
    }
  }, {});
};
var getFormFields = (route, state) => {
  const defaultFormFields = getDefaultFormFields(route, state);
  const customFormFields = getCustomFormFields(route, state);
  const formFields = __spreadValues(__spreadValues({}, defaultFormFields), customFormFields);
  delete formFields["QR"];
  return applyTranslation(formFields);
};
var removeOrderKeys = (formFields) => formFields.map((field2) => {
  const key = field2[0];
  const values = __spreadProps(__spreadValues({}, field2[1]), {
    order: void 0
  });
  return [key, values];
});
var getSortedFormFields = (route, state) => {
  const formFields = getFormFields(route, state);
  return removeOrderKeys(sortFormFields(formFields));
};

// node_modules/@aws-amplify/ui/dist/esm/helpers/authenticator/textUtil.mjs
var getChallengeText = (challengeName) => {
  switch (challengeName) {
    case "EMAIL_OTP":
      return translate(DefaultTexts.CONFIRM_EMAIL);
    case "SMS_MFA":
      return translate(DefaultTexts.CONFIRM_SMS);
    case "SOFTWARE_TOKEN_MFA":
      return translate(DefaultTexts.CONFIRM_TOTP);
    default:
      return translate(DefaultTexts.CONFIRM_MFA_DEFAULT);
  }
};
var getDeliveryMessageText = (codeDeliveryDetails) => {
  const {
    DeliveryMedium,
    Destination
  } = codeDeliveryDetails ?? {};
  const isEmailMessage = DeliveryMedium === "EMAIL";
  const isTextMessage = DeliveryMedium === "SMS";
  const arrivalMessage = translate(DefaultTexts.CODE_ARRIVAL);
  if (!(isEmailMessage || isTextMessage)) {
    return `${translate(DefaultTexts.CODE_SENT)}. ${arrivalMessage}.`;
  }
  const instructionMessage = isEmailMessage ? translate(DefaultTexts.CODE_EMAILED) : translate(DefaultTexts.CODE_TEXTED);
  return `${instructionMessage} ${Destination}. ${arrivalMessage}.`;
};
var getDeliveryMethodText = (codeDeliveryDetails) => {
  const {
    DeliveryMedium
  } = codeDeliveryDetails ?? {};
  const isEmailMessage = DeliveryMedium === "EMAIL";
  const isTextMessage = DeliveryMedium === "SMS";
  if (!isEmailMessage && isTextMessage) {
    return translate(DefaultTexts.WE_SENT_CODE);
  }
  return isEmailMessage ? translate(DefaultTexts.WE_EMAILED) : translate(DefaultTexts.WE_TEXTED);
};
var providerNameMap = {
  amazon: "Amazon",
  apple: "Apple",
  facebook: "Facebook",
  google: "Google"
};
var getSignInWithFederationText = (route, provider) => {
  const isSignIn = route === "signIn";
  return translate(`Sign ${isSignIn ? "In" : "Up"} with ${providerNameMap[provider]}`);
};
var getSelectMfaTypeByChallengeName = (challengeName) => {
  if (challengeName === "MFA_SETUP") {
    return translate(DefaultTexts.MFA_SETUP_SELECTION);
  }
  return translate(DefaultTexts.MFA_SELECTION);
};
var getMfaTypeLabelByValue = (mfaType) => {
  switch (mfaType) {
    case "EMAIL":
      return translate(defaultTexts2.EMAIL_OTP);
    case "SMS":
      return translate(defaultTexts2.SMS_MFA);
    case "TOTP":
      return translate(defaultTexts2.SOFTWARE_TOKEN_MFA);
    default:
      return translate(mfaType);
  }
};
var authenticatorTextUtil = {
  /** Shared */
  getBackToSignInText: () => translate(DefaultTexts.BACK_SIGN_IN),
  getChangePasswordText: () => translate(DefaultTexts.CHANGE_PASSWORD),
  getChangingText: () => translate(DefaultTexts.CHANGING_PASSWORD),
  getConfirmText: () => translate(DefaultTexts.CONFIRM),
  getConfirmingText: () => translate(DefaultTexts.CONFIRMING),
  getCopyText: () => translate(DefaultTexts.UPPERCASE_COPY),
  getHidePasswordText: () => translate(DefaultTexts.HIDE_PASSWORD),
  getLoadingText: () => translate(DefaultTexts.LOADING),
  getOrText: () => translate(DefaultTexts.OR),
  getResendCodeText: () => translate(DefaultTexts.RESEND_CODE),
  getSendCodeText: () => translate(DefaultTexts.SEND_CODE),
  getSendingText: () => translate(DefaultTexts.SENDING),
  getShowPasswordText: () => translate(DefaultTexts.SHOW_PASSWORD),
  getSubmitText: () => translate(DefaultTexts.SUBMIT),
  getSubmittingText: () => translate(DefaultTexts.SUBMITTING),
  /** SignInSignUpTabs */
  getSignInTabText: () => translate(DefaultTexts.SIGN_IN_TAB),
  getSignUpTabText: () => translate(DefaultTexts.CREATE_ACCOUNT),
  /** SignIn */
  getForgotPasswordText: (shortVersion) => translate(shortVersion ? DefaultTexts.FORGOT_PASSWORD : DefaultTexts.FORGOT_YOUR_PASSWORD),
  getSigningInText: () => translate(DefaultTexts.SIGNING_IN_BUTTON),
  getSignInText: () => translate(DefaultTexts.SIGN_IN_BUTTON),
  /** SignUp */
  getCreatingAccountText: () => translate(DefaultTexts.CREATING_ACCOUNT),
  getCreateAccountText: () => translate(DefaultTexts.CREATE_ACCOUNT),
  /** ConfirmSignUp */
  getDeliveryMessageText,
  getDeliveryMethodText,
  /** ConfirmSignIn */
  getChallengeText,
  /** ForgotPassword */
  getResetYourPasswordText: () => translate(DefaultTexts.RESET_PASSWORD),
  /** SetupEmail */
  getSetupEmailText: () => translate(DefaultTexts.SETUP_EMAIL),
  /** SetupTotp */
  getSetupTotpText: () => translate(DefaultTexts.SETUP_TOTP),
  // TODO: add defaultText for below
  getSetupTotpInstructionsText: () => translate("Copy and paste the secret key below into an authenticator app and then enter the code in the text field below."),
  // TODO: add defaultText for "COPIED"
  getCopiedText: () => translate("COPIED"),
  /** FederatedSignIn */
  getSignInWithFederationText,
  /** SelectMfaType */
  getMfaTypeLabelByValue,
  getSelectMfaTypeByChallengeName,
  getSelectMfaTypeText: () => translate(DefaultTexts.SELECT_MFA_TYPE),
  /** VerifyUser */
  getSkipText: () => translate(DefaultTexts.SKIP),
  getVerifyText: () => translate(DefaultTexts.VERIFY),
  getVerifyContactText: () => translate(DefaultTexts.VERIFY_CONTACT),
  getAccountRecoveryInfoText: () => translate(DefaultTexts.VERIFY_HEADING),
  /** Validations */
  // TODO: add defaultText
  getInvalidEmailText: () => translate("Please enter a valid email"),
  // TODO: add defaultText
  getRequiredFieldText: () => translate("This field is required")
};

// node_modules/@aws-amplify/ui/dist/esm/helpers/utils.mjs
var getLogger = (category) => new ConsoleLogger(`AmplifyUI:${category}`);

// node_modules/@aws-amplify/ui/dist/esm/helpers/accountSettings/utils.mjs
var logger = getLogger("Auth");

// node_modules/xstate/es/actions.js
var actions_exports = {};
__export(actions_exports, {
  actionTypes: () => actionTypes_exports,
  after: () => after2,
  assign: () => assign2,
  cancel: () => cancel2,
  choose: () => choose2,
  done: () => done,
  doneInvoke: () => doneInvoke,
  error: () => error2,
  escalate: () => escalate,
  forwardTo: () => forwardTo,
  getActionFunction: () => getActionFunction,
  initEvent: () => initEvent,
  isActionObject: () => isActionObject,
  log: () => log2,
  pure: () => pure2,
  raise: () => raise2,
  resolveActions: () => resolveActions,
  resolveLog: () => resolveLog,
  resolveRaise: () => resolveRaise,
  resolveSend: () => resolveSend,
  resolveStop: () => resolveStop,
  respond: () => respond,
  send: () => send2,
  sendParent: () => sendParent,
  sendTo: () => sendTo,
  sendUpdate: () => sendUpdate,
  start: () => start2,
  stop: () => stop2,
  toActionObject: () => toActionObject,
  toActionObjects: () => toActionObjects,
  toActivityDefinition: () => toActivityDefinition
});

// node_modules/xstate/es/_virtual/_tslib.js
var __assign = function() {
  __assign = Object.assign || function __assign2(t2) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t2[p] = s[p];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t2 = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t2[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t2[p[i]] = s[p[i]];
  }
  return t2;
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error3) {
    e = {
      error: error3
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

// node_modules/xstate/es/types.js
var ActionTypes;
(function(ActionTypes2) {
  ActionTypes2["Start"] = "xstate.start";
  ActionTypes2["Stop"] = "xstate.stop";
  ActionTypes2["Raise"] = "xstate.raise";
  ActionTypes2["Send"] = "xstate.send";
  ActionTypes2["Cancel"] = "xstate.cancel";
  ActionTypes2["NullEvent"] = "";
  ActionTypes2["Assign"] = "xstate.assign";
  ActionTypes2["After"] = "xstate.after";
  ActionTypes2["DoneState"] = "done.state";
  ActionTypes2["DoneInvoke"] = "done.invoke";
  ActionTypes2["Log"] = "xstate.log";
  ActionTypes2["Init"] = "xstate.init";
  ActionTypes2["Invoke"] = "xstate.invoke";
  ActionTypes2["ErrorExecution"] = "error.execution";
  ActionTypes2["ErrorCommunication"] = "error.communication";
  ActionTypes2["ErrorPlatform"] = "error.platform";
  ActionTypes2["ErrorCustom"] = "xstate.error";
  ActionTypes2["Update"] = "xstate.update";
  ActionTypes2["Pure"] = "xstate.pure";
  ActionTypes2["Choose"] = "xstate.choose";
})(ActionTypes || (ActionTypes = {}));
var SpecialTargets;
(function(SpecialTargets2) {
  SpecialTargets2["Parent"] = "#_parent";
  SpecialTargets2["Internal"] = "#_internal";
})(SpecialTargets || (SpecialTargets = {}));

// node_modules/xstate/es/actionTypes.js
var actionTypes_exports = {};
__export(actionTypes_exports, {
  after: () => after,
  assign: () => assign,
  cancel: () => cancel,
  choose: () => choose,
  doneState: () => doneState,
  error: () => error,
  errorExecution: () => errorExecution,
  errorPlatform: () => errorPlatform,
  init: () => init,
  invoke: () => invoke,
  log: () => log,
  nullEvent: () => nullEvent,
  pure: () => pure,
  raise: () => raise,
  send: () => send,
  start: () => start,
  stop: () => stop,
  update: () => update
});
var start = ActionTypes.Start;
var stop = ActionTypes.Stop;
var raise = ActionTypes.Raise;
var send = ActionTypes.Send;
var cancel = ActionTypes.Cancel;
var nullEvent = ActionTypes.NullEvent;
var assign = ActionTypes.Assign;
var after = ActionTypes.After;
var doneState = ActionTypes.DoneState;
var log = ActionTypes.Log;
var init = ActionTypes.Init;
var invoke = ActionTypes.Invoke;
var errorExecution = ActionTypes.ErrorExecution;
var errorPlatform = ActionTypes.ErrorPlatform;
var error = ActionTypes.ErrorCustom;
var update = ActionTypes.Update;
var choose = ActionTypes.Choose;
var pure = ActionTypes.Pure;

// node_modules/xstate/es/constants.js
var STATE_DELIMITER = ".";
var EMPTY_ACTIVITY_MAP = {};
var DEFAULT_GUARD_TYPE = "xstate.guard";
var TARGETLESS_KEY = "";

// node_modules/xstate/es/environment.js
var IS_PRODUCTION = false;

// node_modules/xstate/es/utils.js
var _a;
function matchesState(parentStateId, childStateId, delimiter) {
  if (delimiter === void 0) {
    delimiter = STATE_DELIMITER;
  }
  var parentStateValue = toStateValue(parentStateId, delimiter);
  var childStateValue = toStateValue(childStateId, delimiter);
  if (isString2(childStateValue)) {
    if (isString2(parentStateValue)) {
      return childStateValue === parentStateValue;
    }
    return false;
  }
  if (isString2(parentStateValue)) {
    return parentStateValue in childStateValue;
  }
  return Object.keys(parentStateValue).every(function(key) {
    if (!(key in childStateValue)) {
      return false;
    }
    return matchesState(parentStateValue[key], childStateValue[key]);
  });
}
function getEventType(event2) {
  try {
    return isString2(event2) || typeof event2 === "number" ? "".concat(event2) : event2.type;
  } catch (e) {
    throw new Error("Events must be strings or objects with a string event.type property.");
  }
}
function toStatePath(stateId, delimiter) {
  try {
    if (isArray2(stateId)) {
      return stateId;
    }
    return stateId.toString().split(delimiter);
  } catch (e) {
    throw new Error("'".concat(stateId, "' is not a valid state path."));
  }
}
function isStateLike(state) {
  return typeof state === "object" && "value" in state && "context" in state && "event" in state && "_event" in state;
}
function toStateValue(stateValue, delimiter) {
  if (isStateLike(stateValue)) {
    return stateValue.value;
  }
  if (isArray2(stateValue)) {
    return pathToStateValue(stateValue);
  }
  if (typeof stateValue !== "string") {
    return stateValue;
  }
  var statePath = toStatePath(stateValue, delimiter);
  return pathToStateValue(statePath);
}
function pathToStateValue(statePath) {
  if (statePath.length === 1) {
    return statePath[0];
  }
  var value = {};
  var marker = value;
  for (var i = 0; i < statePath.length - 1; i++) {
    if (i === statePath.length - 2) {
      marker[statePath[i]] = statePath[i + 1];
    } else {
      marker[statePath[i]] = {};
      marker = marker[statePath[i]];
    }
  }
  return value;
}
function mapValues(collection2, iteratee) {
  var result = {};
  var collectionKeys = Object.keys(collection2);
  for (var i = 0; i < collectionKeys.length; i++) {
    var key = collectionKeys[i];
    result[key] = iteratee(collection2[key], key, collection2, i);
  }
  return result;
}
function mapFilterValues(collection2, iteratee, predicate) {
  var e_1, _a2;
  var result = {};
  try {
    for (var _b = __values(Object.keys(collection2)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var item = collection2[key];
      if (!predicate(item)) {
        continue;
      }
      result[key] = iteratee(item, key, collection2);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return result;
}
var path = function(props) {
  return function(object) {
    var e_2, _a2;
    var result = object;
    try {
      for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
        var prop = props_1_1.value;
        result = result[prop];
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (props_1_1 && !props_1_1.done && (_a2 = props_1.return)) _a2.call(props_1);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    return result;
  };
};
function nestedPath(props, accessorProp) {
  return function(object) {
    var e_3, _a2;
    var result = object;
    try {
      for (var props_2 = __values(props), props_2_1 = props_2.next(); !props_2_1.done; props_2_1 = props_2.next()) {
        var prop = props_2_1.value;
        result = result[accessorProp][prop];
      }
    } catch (e_3_1) {
      e_3 = {
        error: e_3_1
      };
    } finally {
      try {
        if (props_2_1 && !props_2_1.done && (_a2 = props_2.return)) _a2.call(props_2);
      } finally {
        if (e_3) throw e_3.error;
      }
    }
    return result;
  };
}
function toStatePaths(stateValue) {
  if (!stateValue) {
    return [[]];
  }
  if (isString2(stateValue)) {
    return [[stateValue]];
  }
  var result = flatten(Object.keys(stateValue).map(function(key) {
    var subStateValue = stateValue[key];
    if (typeof subStateValue !== "string" && (!subStateValue || !Object.keys(subStateValue).length)) {
      return [[key]];
    }
    return toStatePaths(stateValue[key]).map(function(subPath) {
      return [key].concat(subPath);
    });
  }));
  return result;
}
function flatten(array) {
  var _a2;
  return (_a2 = []).concat.apply(_a2, __spreadArray([], __read(array), false));
}
function toArrayStrict(value) {
  if (isArray2(value)) {
    return value;
  }
  return [value];
}
function toArray(value) {
  if (value === void 0) {
    return [];
  }
  return toArrayStrict(value);
}
function mapContext(mapper, context, _event) {
  var e_5, _a2;
  if (isFunction2(mapper)) {
    return mapper(context, _event.data);
  }
  var result = {};
  try {
    for (var _b = __values(Object.keys(mapper)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var subMapper = mapper[key];
      if (isFunction2(subMapper)) {
        result[key] = subMapper(context, _event.data);
      } else {
        result[key] = subMapper;
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
    } finally {
      if (e_5) throw e_5.error;
    }
  }
  return result;
}
function isBuiltInEvent(eventType) {
  return /^(done|error)\./.test(eventType);
}
function isPromiseLike(value) {
  if (value instanceof Promise) {
    return true;
  }
  if (value !== null && (isFunction2(value) || typeof value === "object") && isFunction2(value.then)) {
    return true;
  }
  return false;
}
function isBehavior(value) {
  return value !== null && typeof value === "object" && "transition" in value && typeof value.transition === "function";
}
function partition(items, predicate) {
  var e_6, _a2;
  var _b = __read([[], []], 2), truthy = _b[0], falsy = _b[1];
  try {
    for (var items_1 = __values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
      var item = items_1_1.value;
      if (predicate(item)) {
        truthy.push(item);
      } else {
        falsy.push(item);
      }
    }
  } catch (e_6_1) {
    e_6 = {
      error: e_6_1
    };
  } finally {
    try {
      if (items_1_1 && !items_1_1.done && (_a2 = items_1.return)) _a2.call(items_1);
    } finally {
      if (e_6) throw e_6.error;
    }
  }
  return [truthy, falsy];
}
function updateHistoryStates(hist, stateValue) {
  return mapValues(hist.states, function(subHist, key) {
    if (!subHist) {
      return void 0;
    }
    var subStateValue = (isString2(stateValue) ? void 0 : stateValue[key]) || (subHist ? subHist.current : void 0);
    if (!subStateValue) {
      return void 0;
    }
    return {
      current: subStateValue,
      states: updateHistoryStates(subHist, subStateValue)
    };
  });
}
function updateHistoryValue(hist, stateValue) {
  return {
    current: stateValue,
    states: updateHistoryStates(hist, stateValue)
  };
}
function updateContext(context, _event, assignActions, state) {
  if (!IS_PRODUCTION) {
    warn(!!context, "Attempting to update undefined context");
  }
  var updatedContext = context ? assignActions.reduce(function(acc, assignAction) {
    var e_7, _a2;
    var assignment = assignAction.assignment;
    var meta = {
      state,
      action: assignAction,
      _event
    };
    var partialUpdate = {};
    if (isFunction2(assignment)) {
      partialUpdate = assignment(acc, _event.data, meta);
    } else {
      try {
        for (var _b = __values(Object.keys(assignment)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          var propAssignment = assignment[key];
          partialUpdate[key] = isFunction2(propAssignment) ? propAssignment(acc, _event.data, meta) : propAssignment;
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_7) throw e_7.error;
        }
      }
    }
    return Object.assign({}, acc, partialUpdate);
  }, context) : context;
  return updatedContext;
}
var warn = function() {
};
if (!IS_PRODUCTION) {
  warn = function(condition, message2) {
    var error3 = condition instanceof Error ? condition : void 0;
    if (!error3 && condition) {
      return;
    }
    if (console !== void 0) {
      var args = ["Warning: ".concat(message2)];
      if (error3) {
        args.push(error3);
      }
      console.warn.apply(console, args);
    }
  };
}
function isArray2(value) {
  return Array.isArray(value);
}
function isFunction2(value) {
  return typeof value === "function";
}
function isString2(value) {
  return typeof value === "string";
}
function toGuard(condition, guardMap) {
  if (!condition) {
    return void 0;
  }
  if (isString2(condition)) {
    return {
      type: DEFAULT_GUARD_TYPE,
      name: condition,
      predicate: guardMap ? guardMap[condition] : void 0
    };
  }
  if (isFunction2(condition)) {
    return {
      type: DEFAULT_GUARD_TYPE,
      name: condition.name,
      predicate: condition
    };
  }
  return condition;
}
function isObservable(value) {
  try {
    return "subscribe" in value && isFunction2(value.subscribe);
  } catch (e) {
    return false;
  }
}
var symbolObservable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var interopSymbols = (_a = {}, _a[symbolObservable] = function() {
  return this;
}, _a[Symbol.observable] = function() {
  return this;
}, _a);
function isMachine(value) {
  return !!value && "__xstatenode" in value;
}
function isActor(value) {
  return !!value && typeof value.send === "function";
}
var uniqueId = /* @__PURE__ */ function() {
  var currentId = 0;
  return function() {
    currentId++;
    return currentId.toString(16);
  };
}();
function toEventObject(event2, payload) {
  if (isString2(event2) || typeof event2 === "number") {
    return __assign({
      type: event2
    }, payload);
  }
  return event2;
}
function toSCXMLEvent(event2, scxmlEvent) {
  if (!isString2(event2) && "$$type" in event2 && event2.$$type === "scxml") {
    return event2;
  }
  var eventObject = toEventObject(event2);
  return __assign({
    name: eventObject.type,
    data: eventObject,
    $$type: "scxml",
    type: "external"
  }, scxmlEvent);
}
function toTransitionConfigArray(event2, configLike) {
  var transitions = toArrayStrict(configLike).map(function(transitionLike) {
    if (typeof transitionLike === "undefined" || typeof transitionLike === "string" || isMachine(transitionLike)) {
      return {
        target: transitionLike,
        event: event2
      };
    }
    return __assign(__assign({}, transitionLike), {
      event: event2
    });
  });
  return transitions;
}
function normalizeTarget(target) {
  if (target === void 0 || target === TARGETLESS_KEY) {
    return void 0;
  }
  return toArray(target);
}
function reportUnhandledExceptionOnInvocation(originalError, currentError, id) {
  if (!IS_PRODUCTION) {
    var originalStackTrace = originalError.stack ? " Stacktrace was '".concat(originalError.stack, "'") : "";
    if (originalError === currentError) {
      console.error("Missing onError handler for invocation '".concat(id, "', error was '").concat(originalError, "'.").concat(originalStackTrace));
    } else {
      var stackTrace = currentError.stack ? " Stacktrace was '".concat(currentError.stack, "'") : "";
      console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(id, "'. ") + "Original error: '".concat(originalError, "'. ").concat(originalStackTrace, " Current error is '").concat(currentError, "'.").concat(stackTrace));
    }
  }
}
function evaluateGuard(machine, guard, context, _event, state) {
  var guards = machine.options.guards;
  var guardMeta = {
    state,
    cond: guard,
    _event
  };
  if (guard.type === DEFAULT_GUARD_TYPE) {
    return ((guards === null || guards === void 0 ? void 0 : guards[guard.name]) || guard.predicate)(context, _event.data, guardMeta);
  }
  var condFn = guards === null || guards === void 0 ? void 0 : guards[guard.type];
  if (!condFn) {
    throw new Error("Guard '".concat(guard.type, "' is not implemented on machine '").concat(machine.id, "'."));
  }
  return condFn(context, _event.data, guardMeta);
}
function toInvokeSource(src) {
  if (typeof src === "string") {
    return {
      type: src
    };
  }
  return src;
}
function toObserver(nextHandler, errorHandler, completionHandler) {
  var noop2 = function() {
  };
  var isObserver = typeof nextHandler === "object";
  var self2 = isObserver ? nextHandler : null;
  return {
    next: ((isObserver ? nextHandler.next : nextHandler) || noop2).bind(self2),
    error: ((isObserver ? nextHandler.error : errorHandler) || noop2).bind(self2),
    complete: ((isObserver ? nextHandler.complete : completionHandler) || noop2).bind(self2)
  };
}
function createInvokeId(stateNodeId, index) {
  return "".concat(stateNodeId, ":invocation[").concat(index, "]");
}
function isRaisableAction(action) {
  return (action.type === raise || action.type === send && action.to === SpecialTargets.Internal) && typeof action.delay !== "number";
}

// node_modules/xstate/es/actions.js
var initEvent = toSCXMLEvent({
  type: init
});
function getActionFunction(actionType, actionFunctionMap) {
  return actionFunctionMap ? actionFunctionMap[actionType] || void 0 : void 0;
}
function toActionObject(action, actionFunctionMap) {
  var actionObject;
  if (isString2(action) || typeof action === "number") {
    var exec = getActionFunction(action, actionFunctionMap);
    if (isFunction2(exec)) {
      actionObject = {
        type: action,
        exec
      };
    } else if (exec) {
      actionObject = exec;
    } else {
      actionObject = {
        type: action,
        exec: void 0
      };
    }
  } else if (isFunction2(action)) {
    actionObject = {
      // Convert action to string if unnamed
      type: action.name || action.toString(),
      exec: action
    };
  } else {
    var exec = getActionFunction(action.type, actionFunctionMap);
    if (isFunction2(exec)) {
      actionObject = __assign(__assign({}, action), {
        exec
      });
    } else if (exec) {
      var actionType = exec.type || action.type;
      actionObject = __assign(__assign(__assign({}, exec), action), {
        type: actionType
      });
    } else {
      actionObject = action;
    }
  }
  return actionObject;
}
var toActionObjects = function(action, actionFunctionMap) {
  if (!action) {
    return [];
  }
  var actions = isArray2(action) ? action : [action];
  return actions.map(function(subAction) {
    return toActionObject(subAction, actionFunctionMap);
  });
};
function toActivityDefinition(action) {
  var actionObject = toActionObject(action);
  return __assign(__assign({
    id: isString2(action) ? action : actionObject.id
  }, actionObject), {
    type: actionObject.type
  });
}
function raise2(event2, options) {
  return {
    type: raise,
    event: typeof event2 === "function" ? event2 : toEventObject(event2),
    delay: options ? options.delay : void 0,
    id: options === null || options === void 0 ? void 0 : options.id
  };
}
function resolveRaise(action, ctx, _event, delaysMap) {
  var meta = {
    _event
  };
  var resolvedEvent = toSCXMLEvent(isFunction2(action.event) ? action.event(ctx, _event.data, meta) : action.event);
  var resolvedDelay;
  if (isString2(action.delay)) {
    var configDelay = delaysMap && delaysMap[action.delay];
    resolvedDelay = isFunction2(configDelay) ? configDelay(ctx, _event.data, meta) : configDelay;
  } else {
    resolvedDelay = isFunction2(action.delay) ? action.delay(ctx, _event.data, meta) : action.delay;
  }
  return __assign(__assign({}, action), {
    type: raise,
    _event: resolvedEvent,
    delay: resolvedDelay
  });
}
function send2(event2, options) {
  return {
    to: options ? options.to : void 0,
    type: send,
    event: isFunction2(event2) ? event2 : toEventObject(event2),
    delay: options ? options.delay : void 0,
    // TODO: don't auto-generate IDs here like that
    // there is too big chance of the ID collision
    id: options && options.id !== void 0 ? options.id : isFunction2(event2) ? event2.name : getEventType(event2)
  };
}
function resolveSend(action, ctx, _event, delaysMap) {
  var meta = {
    _event
  };
  var resolvedEvent = toSCXMLEvent(isFunction2(action.event) ? action.event(ctx, _event.data, meta) : action.event);
  var resolvedDelay;
  if (isString2(action.delay)) {
    var configDelay = delaysMap && delaysMap[action.delay];
    resolvedDelay = isFunction2(configDelay) ? configDelay(ctx, _event.data, meta) : configDelay;
  } else {
    resolvedDelay = isFunction2(action.delay) ? action.delay(ctx, _event.data, meta) : action.delay;
  }
  var resolvedTarget = isFunction2(action.to) ? action.to(ctx, _event.data, meta) : action.to;
  return __assign(__assign({}, action), {
    to: resolvedTarget,
    _event: resolvedEvent,
    event: resolvedEvent.data,
    delay: resolvedDelay
  });
}
function sendParent(event2, options) {
  return send2(event2, __assign(__assign({}, options), {
    to: SpecialTargets.Parent
  }));
}
function sendTo(actor, event2, options) {
  return send2(event2, __assign(__assign({}, options), {
    to: actor
  }));
}
function sendUpdate() {
  return sendParent(update);
}
function respond(event2, options) {
  return send2(event2, __assign(__assign({}, options), {
    to: function(_, __, _a2) {
      var _event = _a2._event;
      return _event.origin;
    }
  }));
}
var defaultLogExpr = function(context, event2) {
  return {
    context,
    event: event2
  };
};
function log2(expr, label) {
  if (expr === void 0) {
    expr = defaultLogExpr;
  }
  return {
    type: log,
    label,
    expr
  };
}
var resolveLog = function(action, ctx, _event) {
  return __assign(__assign({}, action), {
    value: isString2(action.expr) ? action.expr : action.expr(ctx, _event.data, {
      _event
    })
  });
};
var cancel2 = function(sendId) {
  return {
    type: cancel,
    sendId
  };
};
function start2(activity) {
  var activityDef = toActivityDefinition(activity);
  return {
    type: ActionTypes.Start,
    activity: activityDef,
    exec: void 0
  };
}
function stop2(actorRef) {
  var activity = isFunction2(actorRef) ? actorRef : toActivityDefinition(actorRef);
  return {
    type: ActionTypes.Stop,
    activity,
    exec: void 0
  };
}
function resolveStop(action, context, _event) {
  var actorRefOrString = isFunction2(action.activity) ? action.activity(context, _event.data) : action.activity;
  var resolvedActorRef = typeof actorRefOrString === "string" ? {
    id: actorRefOrString
  } : actorRefOrString;
  var actionObject = {
    type: ActionTypes.Stop,
    activity: resolvedActorRef
  };
  return actionObject;
}
var assign2 = function(assignment) {
  return {
    type: assign,
    assignment
  };
};
function isActionObject(action) {
  return typeof action === "object" && "type" in action;
}
function after2(delayRef, id) {
  var idSuffix = id ? "#".concat(id) : "";
  return "".concat(ActionTypes.After, "(").concat(delayRef, ")").concat(idSuffix);
}
function done(id, data) {
  var type = "".concat(ActionTypes.DoneState, ".").concat(id);
  var eventObject = {
    type,
    data
  };
  eventObject.toString = function() {
    return type;
  };
  return eventObject;
}
function doneInvoke(id, data) {
  var type = "".concat(ActionTypes.DoneInvoke, ".").concat(id);
  var eventObject = {
    type,
    data
  };
  eventObject.toString = function() {
    return type;
  };
  return eventObject;
}
function error2(id, data) {
  var type = "".concat(ActionTypes.ErrorPlatform, ".").concat(id);
  var eventObject = {
    type,
    data
  };
  eventObject.toString = function() {
    return type;
  };
  return eventObject;
}
function pure2(getActions) {
  return {
    type: ActionTypes.Pure,
    get: getActions
  };
}
function forwardTo(target, options) {
  if (!IS_PRODUCTION && (!target || typeof target === "function")) {
    var originalTarget_1 = target;
    target = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var resolvedTarget = typeof originalTarget_1 === "function" ? originalTarget_1.apply(void 0, __spreadArray([], __read(args), false)) : originalTarget_1;
      if (!resolvedTarget) {
        throw new Error("Attempted to forward event to undefined actor. This risks an infinite loop in the sender.");
      }
      return resolvedTarget;
    };
  }
  return send2(function(_, event2) {
    return event2;
  }, __assign(__assign({}, options), {
    to: target
  }));
}
function escalate(errorData, options) {
  return sendParent(function(context, event2, meta) {
    return {
      type: error,
      data: isFunction2(errorData) ? errorData(context, event2, meta) : errorData
    };
  }, __assign(__assign({}, options), {
    to: SpecialTargets.Parent
  }));
}
function choose2(conds) {
  return {
    type: ActionTypes.Choose,
    conds
  };
}
var pluckAssigns = function(actionBlocks) {
  var e_1, _a2;
  var assignActions = [];
  try {
    for (var actionBlocks_1 = __values(actionBlocks), actionBlocks_1_1 = actionBlocks_1.next(); !actionBlocks_1_1.done; actionBlocks_1_1 = actionBlocks_1.next()) {
      var block = actionBlocks_1_1.value;
      var i = 0;
      while (i < block.actions.length) {
        if (block.actions[i].type === assign) {
          assignActions.push(block.actions[i]);
          block.actions.splice(i, 1);
          continue;
        }
        i++;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (actionBlocks_1_1 && !actionBlocks_1_1.done && (_a2 = actionBlocks_1.return)) _a2.call(actionBlocks_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  return assignActions;
};
function resolveActions(machine, currentState, currentContext, _event, actionBlocks, predictableExec, preserveActionOrder) {
  if (preserveActionOrder === void 0) {
    preserveActionOrder = false;
  }
  var assignActions = preserveActionOrder ? [] : pluckAssigns(actionBlocks);
  var updatedContext = assignActions.length ? updateContext(currentContext, _event, assignActions, currentState) : currentContext;
  var preservedContexts = preserveActionOrder ? [currentContext] : void 0;
  var deferredToBlockEnd = [];
  function handleAction(blockType, actionObject) {
    var _a2;
    switch (actionObject.type) {
      case raise: {
        var raisedAction = resolveRaise(actionObject, updatedContext, _event, machine.options.delays);
        if (predictableExec && typeof raisedAction.delay === "number") {
          predictableExec(raisedAction, updatedContext, _event);
        }
        return raisedAction;
      }
      case send:
        var sendAction = resolveSend(actionObject, updatedContext, _event, machine.options.delays);
        if (!IS_PRODUCTION) {
          var configuredDelay = actionObject.delay;
          warn(
            !isString2(configuredDelay) || typeof sendAction.delay === "number",
            // tslint:disable-next-line:max-line-length
            "No delay reference for delay expression '".concat(configuredDelay, "' was found on machine '").concat(machine.id, "'")
          );
        }
        if (predictableExec && sendAction.to !== SpecialTargets.Internal) {
          if (blockType === "entry") {
            deferredToBlockEnd.push(sendAction);
          } else {
            predictableExec(sendAction, updatedContext, _event);
          }
        }
        return sendAction;
      case log: {
        var resolved = resolveLog(actionObject, updatedContext, _event);
        predictableExec === null || predictableExec === void 0 ? void 0 : predictableExec(resolved, updatedContext, _event);
        return resolved;
      }
      case choose: {
        var chooseAction = actionObject;
        var matchedActions = (_a2 = chooseAction.conds.find(function(condition) {
          var guard = toGuard(condition.cond, machine.options.guards);
          return !guard || evaluateGuard(machine, guard, updatedContext, _event, !predictableExec ? currentState : void 0);
        })) === null || _a2 === void 0 ? void 0 : _a2.actions;
        if (!matchedActions) {
          return [];
        }
        var _b = __read(resolveActions(machine, currentState, updatedContext, _event, [{
          type: blockType,
          actions: toActionObjects(toArray(matchedActions), machine.options.actions)
        }], predictableExec, preserveActionOrder), 2), resolvedActionsFromChoose = _b[0], resolvedContextFromChoose = _b[1];
        updatedContext = resolvedContextFromChoose;
        preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
        return resolvedActionsFromChoose;
      }
      case pure: {
        var matchedActions = actionObject.get(updatedContext, _event.data);
        if (!matchedActions) {
          return [];
        }
        var _c = __read(resolveActions(machine, currentState, updatedContext, _event, [{
          type: blockType,
          actions: toActionObjects(toArray(matchedActions), machine.options.actions)
        }], predictableExec, preserveActionOrder), 2), resolvedActionsFromPure = _c[0], resolvedContext = _c[1];
        updatedContext = resolvedContext;
        preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
        return resolvedActionsFromPure;
      }
      case stop: {
        var resolved = resolveStop(actionObject, updatedContext, _event);
        predictableExec === null || predictableExec === void 0 ? void 0 : predictableExec(resolved, currentContext, _event);
        return resolved;
      }
      case assign: {
        updatedContext = updateContext(updatedContext, _event, [actionObject], !predictableExec ? currentState : void 0);
        preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
        break;
      }
      default:
        var resolvedActionObject = toActionObject(actionObject, machine.options.actions);
        var exec_1 = resolvedActionObject.exec;
        if (predictableExec) {
          predictableExec(resolvedActionObject, updatedContext, _event);
        } else if (exec_1 && preservedContexts) {
          var contextIndex_1 = preservedContexts.length - 1;
          var wrapped = __assign(__assign({}, resolvedActionObject), {
            exec: function(_ctx) {
              var args = [];
              for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
              }
              exec_1.apply(void 0, __spreadArray([preservedContexts[contextIndex_1]], __read(args), false));
            }
          });
          resolvedActionObject = wrapped;
        }
        return resolvedActionObject;
    }
  }
  function processBlock(block) {
    var e_2, _a2;
    var resolvedActions2 = [];
    try {
      for (var _b = __values(block.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
        var action = _c.value;
        var resolved = handleAction(block.type, action);
        if (resolved) {
          resolvedActions2 = resolvedActions2.concat(resolved);
        }
      }
    } catch (e_2_1) {
      e_2 = {
        error: e_2_1
      };
    } finally {
      try {
        if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
      } finally {
        if (e_2) throw e_2.error;
      }
    }
    deferredToBlockEnd.forEach(function(action2) {
      predictableExec(action2, updatedContext, _event);
    });
    deferredToBlockEnd.length = 0;
    return resolvedActions2;
  }
  var resolvedActions = flatten(actionBlocks.map(processBlock));
  return [resolvedActions, updatedContext];
}

// node_modules/xstate/es/serviceScope.js
var serviceStack = [];
var provide = function(service, fn) {
  serviceStack.push(service);
  var result = fn(service);
  serviceStack.pop();
  return result;
};
var consume = function(fn) {
  return fn(serviceStack[serviceStack.length - 1]);
};

// node_modules/xstate/es/Actor.js
function createNullActor(id) {
  var _a2;
  return _a2 = {
    id,
    send: function() {
      return void 0;
    },
    subscribe: function() {
      return {
        unsubscribe: function() {
          return void 0;
        }
      };
    },
    getSnapshot: function() {
      return void 0;
    },
    toJSON: function() {
      return {
        id
      };
    }
  }, _a2[symbolObservable] = function() {
    return this;
  }, _a2;
}
function createInvocableActor(invokeDefinition, machine, context, _event) {
  var _a2;
  var invokeSrc = toInvokeSource(invokeDefinition.src);
  var serviceCreator = (_a2 = machine === null || machine === void 0 ? void 0 : machine.options.services) === null || _a2 === void 0 ? void 0 : _a2[invokeSrc.type];
  var resolvedData = invokeDefinition.data ? mapContext(invokeDefinition.data, context, _event) : void 0;
  var tempActor = serviceCreator ? createDeferredActor(serviceCreator, invokeDefinition.id, resolvedData) : createNullActor(invokeDefinition.id);
  tempActor.meta = invokeDefinition;
  return tempActor;
}
function createDeferredActor(entity, id, data) {
  var tempActor = createNullActor(id);
  tempActor.deferred = true;
  if (isMachine(entity)) {
    var initialState_1 = tempActor.state = provide(void 0, function() {
      return (data ? entity.withContext(data) : entity).initialState;
    });
    tempActor.getSnapshot = function() {
      return initialState_1;
    };
  }
  return tempActor;
}
function isActor2(item) {
  try {
    return typeof item.send === "function";
  } catch (e) {
    return false;
  }
}
function isSpawnedActor(item) {
  return isActor2(item) && "id" in item;
}
function toActorRef(actorRefLike) {
  var _a2;
  return __assign((_a2 = {
    subscribe: function() {
      return {
        unsubscribe: function() {
          return void 0;
        }
      };
    },
    id: "anonymous",
    getSnapshot: function() {
      return void 0;
    }
  }, _a2[symbolObservable] = function() {
    return this;
  }, _a2), actorRefLike);
}

// node_modules/xstate/es/stateUtils.js
var isLeafNode = function(stateNode) {
  return stateNode.type === "atomic" || stateNode.type === "final";
};
function getAllChildren(stateNode) {
  return Object.keys(stateNode.states).map(function(key) {
    return stateNode.states[key];
  });
}
function getChildren(stateNode) {
  return getAllChildren(stateNode).filter(function(sn) {
    return sn.type !== "history";
  });
}
function getAllStateNodes(stateNode) {
  var stateNodes = [stateNode];
  if (isLeafNode(stateNode)) {
    return stateNodes;
  }
  return stateNodes.concat(flatten(getChildren(stateNode).map(getAllStateNodes)));
}
function getConfiguration(prevStateNodes, stateNodes) {
  var e_1, _a2, e_2, _b, e_3, _c, e_4, _d;
  var prevConfiguration = new Set(prevStateNodes);
  var prevAdjList = getAdjList(prevConfiguration);
  var configuration = new Set(stateNodes);
  try {
    for (var configuration_1 = __values(configuration), configuration_1_1 = configuration_1.next(); !configuration_1_1.done; configuration_1_1 = configuration_1.next()) {
      var s = configuration_1_1.value;
      var m = s.parent;
      while (m && !configuration.has(m)) {
        configuration.add(m);
        m = m.parent;
      }
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (configuration_1_1 && !configuration_1_1.done && (_a2 = configuration_1.return)) _a2.call(configuration_1);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
  var adjList = getAdjList(configuration);
  try {
    for (var configuration_2 = __values(configuration), configuration_2_1 = configuration_2.next(); !configuration_2_1.done; configuration_2_1 = configuration_2.next()) {
      var s = configuration_2_1.value;
      if (s.type === "compound" && (!adjList.get(s) || !adjList.get(s).length)) {
        if (prevAdjList.get(s)) {
          prevAdjList.get(s).forEach(function(sn) {
            return configuration.add(sn);
          });
        } else {
          s.initialStateNodes.forEach(function(sn) {
            return configuration.add(sn);
          });
        }
      } else {
        if (s.type === "parallel") {
          try {
            for (var _e = (e_3 = void 0, __values(getChildren(s))), _f = _e.next(); !_f.done; _f = _e.next()) {
              var child = _f.value;
              if (!configuration.has(child)) {
                configuration.add(child);
                if (prevAdjList.get(child)) {
                  prevAdjList.get(child).forEach(function(sn) {
                    return configuration.add(sn);
                  });
                } else {
                  child.initialStateNodes.forEach(function(sn) {
                    return configuration.add(sn);
                  });
                }
              }
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (_f && !_f.done && (_c = _e.return)) _c.call(_e);
            } finally {
              if (e_3) throw e_3.error;
            }
          }
        }
      }
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (configuration_2_1 && !configuration_2_1.done && (_b = configuration_2.return)) _b.call(configuration_2);
    } finally {
      if (e_2) throw e_2.error;
    }
  }
  try {
    for (var configuration_3 = __values(configuration), configuration_3_1 = configuration_3.next(); !configuration_3_1.done; configuration_3_1 = configuration_3.next()) {
      var s = configuration_3_1.value;
      var m = s.parent;
      while (m && !configuration.has(m)) {
        configuration.add(m);
        m = m.parent;
      }
    }
  } catch (e_4_1) {
    e_4 = {
      error: e_4_1
    };
  } finally {
    try {
      if (configuration_3_1 && !configuration_3_1.done && (_d = configuration_3.return)) _d.call(configuration_3);
    } finally {
      if (e_4) throw e_4.error;
    }
  }
  return configuration;
}
function getValueFromAdj(baseNode, adjList) {
  var childStateNodes = adjList.get(baseNode);
  if (!childStateNodes) {
    return {};
  }
  if (baseNode.type === "compound") {
    var childStateNode = childStateNodes[0];
    if (childStateNode) {
      if (isLeafNode(childStateNode)) {
        return childStateNode.key;
      }
    } else {
      return {};
    }
  }
  var stateValue = {};
  childStateNodes.forEach(function(csn) {
    stateValue[csn.key] = getValueFromAdj(csn, adjList);
  });
  return stateValue;
}
function getAdjList(configuration) {
  var e_5, _a2;
  var adjList = /* @__PURE__ */ new Map();
  try {
    for (var configuration_4 = __values(configuration), configuration_4_1 = configuration_4.next(); !configuration_4_1.done; configuration_4_1 = configuration_4.next()) {
      var s = configuration_4_1.value;
      if (!adjList.has(s)) {
        adjList.set(s, []);
      }
      if (s.parent) {
        if (!adjList.has(s.parent)) {
          adjList.set(s.parent, []);
        }
        adjList.get(s.parent).push(s);
      }
    }
  } catch (e_5_1) {
    e_5 = {
      error: e_5_1
    };
  } finally {
    try {
      if (configuration_4_1 && !configuration_4_1.done && (_a2 = configuration_4.return)) _a2.call(configuration_4);
    } finally {
      if (e_5) throw e_5.error;
    }
  }
  return adjList;
}
function getValue(rootNode, configuration) {
  var config = getConfiguration([rootNode], configuration);
  return getValueFromAdj(rootNode, getAdjList(config));
}
function has2(iterable, item) {
  if (Array.isArray(iterable)) {
    return iterable.some(function(member) {
      return member === item;
    });
  }
  if (iterable instanceof Set) {
    return iterable.has(item);
  }
  return false;
}
function nextEvents(configuration) {
  return __spreadArray([], __read(new Set(flatten(__spreadArray([], __read(configuration.map(function(sn) {
    return sn.ownEvents;
  })), false)))), false);
}
function isInFinalState(configuration, stateNode) {
  if (stateNode.type === "compound") {
    return getChildren(stateNode).some(function(s) {
      return s.type === "final" && has2(configuration, s);
    });
  }
  if (stateNode.type === "parallel") {
    return getChildren(stateNode).every(function(sn) {
      return isInFinalState(configuration, sn);
    });
  }
  return false;
}
function getMeta(configuration) {
  if (configuration === void 0) {
    configuration = [];
  }
  return configuration.reduce(function(acc, stateNode) {
    if (stateNode.meta !== void 0) {
      acc[stateNode.id] = stateNode.meta;
    }
    return acc;
  }, {});
}
function getTagsFromConfiguration(configuration) {
  return new Set(flatten(configuration.map(function(sn) {
    return sn.tags;
  })));
}

// node_modules/xstate/es/State.js
function stateValuesEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (a === void 0 || b === void 0) {
    return false;
  }
  if (isString2(a) || isString2(b)) {
    return a === b;
  }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  return aKeys.length === bKeys.length && aKeys.every(function(key) {
    return stateValuesEqual(a[key], b[key]);
  });
}
function isStateConfig(state) {
  if (typeof state !== "object" || state === null) {
    return false;
  }
  return "value" in state && "_event" in state;
}
function bindActionToState(action, state) {
  var exec = action.exec;
  var boundAction = __assign(__assign({}, action), {
    exec: exec !== void 0 ? function() {
      return exec(state.context, state.event, {
        action,
        state,
        _event: state._event
      });
    } : void 0
  });
  return boundAction;
}
var State = (
  /** @class */
  function() {
    function State2(config) {
      var _this = this;
      var _a2;
      this.actions = [];
      this.activities = EMPTY_ACTIVITY_MAP;
      this.meta = {};
      this.events = [];
      this.value = config.value;
      this.context = config.context;
      this._event = config._event;
      this._sessionid = config._sessionid;
      this.event = this._event.data;
      this.historyValue = config.historyValue;
      this.history = config.history;
      this.actions = config.actions || [];
      this.activities = config.activities || EMPTY_ACTIVITY_MAP;
      this.meta = getMeta(config.configuration);
      this.events = config.events || [];
      this.matches = this.matches.bind(this);
      this.toStrings = this.toStrings.bind(this);
      this.configuration = config.configuration;
      this.transitions = config.transitions;
      this.children = config.children;
      this.done = !!config.done;
      this.tags = (_a2 = Array.isArray(config.tags) ? new Set(config.tags) : config.tags) !== null && _a2 !== void 0 ? _a2 : /* @__PURE__ */ new Set();
      this.machine = config.machine;
      Object.defineProperty(this, "nextEvents", {
        get: function() {
          return nextEvents(_this.configuration);
        }
      });
    }
    State2.from = function(stateValue, context) {
      if (stateValue instanceof State2) {
        if (stateValue.context !== context) {
          return new State2({
            value: stateValue.value,
            context,
            _event: stateValue._event,
            _sessionid: null,
            historyValue: stateValue.historyValue,
            history: stateValue.history,
            actions: [],
            activities: stateValue.activities,
            meta: {},
            events: [],
            configuration: [],
            transitions: [],
            children: {}
          });
        }
        return stateValue;
      }
      var _event = initEvent;
      return new State2({
        value: stateValue,
        context,
        _event,
        _sessionid: null,
        historyValue: void 0,
        history: void 0,
        actions: [],
        activities: void 0,
        meta: void 0,
        events: [],
        configuration: [],
        transitions: [],
        children: {}
      });
    };
    State2.create = function(config) {
      return new State2(config);
    };
    State2.inert = function(stateValue, context) {
      if (stateValue instanceof State2) {
        if (!stateValue.actions.length) {
          return stateValue;
        }
        var _event = initEvent;
        return new State2({
          value: stateValue.value,
          context,
          _event,
          _sessionid: null,
          historyValue: stateValue.historyValue,
          history: stateValue.history,
          activities: stateValue.activities,
          configuration: stateValue.configuration,
          transitions: [],
          children: {}
        });
      }
      return State2.from(stateValue, context);
    };
    State2.prototype.toStrings = function(stateValue, delimiter) {
      var _this = this;
      if (stateValue === void 0) {
        stateValue = this.value;
      }
      if (delimiter === void 0) {
        delimiter = ".";
      }
      if (isString2(stateValue)) {
        return [stateValue];
      }
      var valueKeys = Object.keys(stateValue);
      return valueKeys.concat.apply(valueKeys, __spreadArray([], __read(valueKeys.map(function(key) {
        return _this.toStrings(stateValue[key], delimiter).map(function(s) {
          return key + delimiter + s;
        });
      })), false));
    };
    State2.prototype.toJSON = function() {
      var _a2 = this;
      _a2.configuration;
      _a2.transitions;
      var tags = _a2.tags;
      _a2.machine;
      var jsonValues = __rest(_a2, ["configuration", "transitions", "tags", "machine"]);
      return __assign(__assign({}, jsonValues), {
        tags: Array.from(tags)
      });
    };
    State2.prototype.matches = function(parentStateValue) {
      return matchesState(parentStateValue, this.value);
    };
    State2.prototype.hasTag = function(tag) {
      return this.tags.has(tag);
    };
    State2.prototype.can = function(event2) {
      var _a2;
      if (IS_PRODUCTION) {
        warn(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
      }
      var transitionData = (_a2 = this.machine) === null || _a2 === void 0 ? void 0 : _a2.getTransitionData(this, event2);
      return !!(transitionData === null || transitionData === void 0 ? void 0 : transitionData.transitions.length) && // Check that at least one transition is not forbidden
      transitionData.transitions.some(function(t2) {
        return t2.target !== void 0 || t2.actions.length;
      });
    };
    return State2;
  }()
);

// node_modules/xstate/es/scheduler.js
var defaultOptions = {
  deferEvents: false
};
var Scheduler = (
  /** @class */
  function() {
    function Scheduler2(options) {
      this.processingEvent = false;
      this.queue = [];
      this.initialized = false;
      this.options = __assign(__assign({}, defaultOptions), options);
    }
    Scheduler2.prototype.initialize = function(callback) {
      this.initialized = true;
      if (callback) {
        if (!this.options.deferEvents) {
          this.schedule(callback);
          return;
        }
        this.process(callback);
      }
      this.flushEvents();
    };
    Scheduler2.prototype.schedule = function(task) {
      if (!this.initialized || this.processingEvent) {
        this.queue.push(task);
        return;
      }
      if (this.queue.length !== 0) {
        throw new Error("Event queue should be empty when it is not processing events");
      }
      this.process(task);
      this.flushEvents();
    };
    Scheduler2.prototype.clear = function() {
      this.queue = [];
    };
    Scheduler2.prototype.flushEvents = function() {
      var nextCallback = this.queue.shift();
      while (nextCallback) {
        this.process(nextCallback);
        nextCallback = this.queue.shift();
      }
    };
    Scheduler2.prototype.process = function(callback) {
      this.processingEvent = true;
      try {
        callback();
      } catch (e) {
        this.clear();
        throw e;
      } finally {
        this.processingEvent = false;
      }
    };
    return Scheduler2;
  }()
);

// node_modules/xstate/es/registry.js
var children = /* @__PURE__ */ new Map();
var sessionIdIndex = 0;
var registry = {
  bookId: function() {
    return "x:".concat(sessionIdIndex++);
  },
  register: function(id, actor) {
    children.set(id, actor);
    return id;
  },
  get: function(id) {
    return children.get(id);
  },
  free: function(id) {
    children.delete(id);
  }
};

// node_modules/xstate/es/devTools.js
function getGlobal() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  if (!IS_PRODUCTION) {
    console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues");
  }
}
function getDevTools() {
  var global2 = getGlobal();
  if (global2 && "__xstate__" in global2) {
    return global2.__xstate__;
  }
  return void 0;
}
function registerService(service) {
  if (!getGlobal()) {
    return;
  }
  var devTools = getDevTools();
  if (devTools) {
    devTools.register(service);
  }
}

// node_modules/xstate/es/behaviors.js
function spawnBehavior(behavior, options) {
  if (options === void 0) {
    options = {};
  }
  var state = behavior.initialState;
  var observers = /* @__PURE__ */ new Set();
  var mailbox = [];
  var flushing = false;
  var flush = function() {
    if (flushing) {
      return;
    }
    flushing = true;
    while (mailbox.length > 0) {
      var event_1 = mailbox.shift();
      state = behavior.transition(state, event_1, actorCtx);
      observers.forEach(function(observer) {
        return observer.next(state);
      });
    }
    flushing = false;
  };
  var actor = toActorRef({
    id: options.id,
    send: function(event2) {
      mailbox.push(event2);
      flush();
    },
    getSnapshot: function() {
      return state;
    },
    subscribe: function(next, handleError, complete) {
      var observer = toObserver(next, handleError, complete);
      observers.add(observer);
      observer.next(state);
      return {
        unsubscribe: function() {
          observers.delete(observer);
        }
      };
    }
  });
  var actorCtx = {
    parent: options.parent,
    self: actor,
    id: options.id || "anonymous",
    observers
  };
  state = behavior.start ? behavior.start(actorCtx) : state;
  return actor;
}

// node_modules/xstate/es/interpreter.js
var DEFAULT_SPAWN_OPTIONS = {
  sync: false,
  autoForward: false
};
var InterpreterStatus;
(function(InterpreterStatus2) {
  InterpreterStatus2[InterpreterStatus2["NotStarted"] = 0] = "NotStarted";
  InterpreterStatus2[InterpreterStatus2["Running"] = 1] = "Running";
  InterpreterStatus2[InterpreterStatus2["Stopped"] = 2] = "Stopped";
})(InterpreterStatus || (InterpreterStatus = {}));
var Interpreter = (
  /** @class */
  function() {
    function Interpreter2(machine, options) {
      if (options === void 0) {
        options = Interpreter2.defaultOptions;
      }
      var _this = this;
      this.machine = machine;
      this.delayedEventsMap = {};
      this.listeners = /* @__PURE__ */ new Set();
      this.contextListeners = /* @__PURE__ */ new Set();
      this.stopListeners = /* @__PURE__ */ new Set();
      this.doneListeners = /* @__PURE__ */ new Set();
      this.eventListeners = /* @__PURE__ */ new Set();
      this.sendListeners = /* @__PURE__ */ new Set();
      this.initialized = false;
      this.status = InterpreterStatus.NotStarted;
      this.children = /* @__PURE__ */ new Map();
      this.forwardTo = /* @__PURE__ */ new Set();
      this._outgoingQueue = [];
      this.init = this.start;
      this.send = function(event2, payload) {
        if (isArray2(event2)) {
          _this.batch(event2);
          return _this.state;
        }
        var _event = toSCXMLEvent(toEventObject(event2, payload));
        if (_this.status === InterpreterStatus.Stopped) {
          if (!IS_PRODUCTION) {
            warn(false, 'Event "'.concat(_event.name, '" was sent to stopped service "').concat(_this.machine.id, '". This service has already reached its final state, and will not transition.\nEvent: ').concat(JSON.stringify(_event.data)));
          }
          return _this.state;
        }
        if (_this.status !== InterpreterStatus.Running && !_this.options.deferEvents) {
          throw new Error('Event "'.concat(_event.name, '" was sent to uninitialized service "').concat(
            _this.machine.id,
            '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: '
          ).concat(JSON.stringify(_event.data)));
        }
        _this.scheduler.schedule(function() {
          _this.forward(_event);
          var nextState = _this._nextState(_event);
          _this.update(nextState, _event);
        });
        return _this._state;
      };
      this.sendTo = function(event2, to, immediate) {
        var isParent = _this.parent && (to === SpecialTargets.Parent || _this.parent.id === to);
        var target = isParent ? _this.parent : isString2(to) ? to === SpecialTargets.Internal ? _this : _this.children.get(to) || registry.get(to) : isActor(to) ? to : void 0;
        if (!target) {
          if (!isParent) {
            throw new Error("Unable to send event to child '".concat(to, "' from service '").concat(_this.id, "'."));
          }
          if (!IS_PRODUCTION) {
            warn(false, "Service '".concat(_this.id, "' has no parent: unable to send event ").concat(event2.type));
          }
          return;
        }
        if ("machine" in target) {
          if (_this.status !== InterpreterStatus.Stopped || _this.parent !== target || // we need to send events to the parent from exit handlers of a machine that reached its final state
          _this.state.done) {
            var scxmlEvent = __assign(__assign({}, event2), {
              name: event2.name === error ? "".concat(error2(_this.id)) : event2.name,
              origin: _this.sessionId
            });
            if (!immediate && _this.machine.config.predictableActionArguments) {
              _this._outgoingQueue.push([target, scxmlEvent]);
            } else {
              target.send(scxmlEvent);
            }
          }
        } else {
          if (!immediate && _this.machine.config.predictableActionArguments) {
            _this._outgoingQueue.push([target, event2.data]);
          } else {
            target.send(event2.data);
          }
        }
      };
      this._exec = function(action, context, _event, actionFunctionMap) {
        if (actionFunctionMap === void 0) {
          actionFunctionMap = _this.machine.options.actions;
        }
        var actionOrExec = action.exec || getActionFunction(action.type, actionFunctionMap);
        var exec = isFunction2(actionOrExec) ? actionOrExec : actionOrExec ? actionOrExec.exec : action.exec;
        if (exec) {
          try {
            return exec(context, _event.data, !_this.machine.config.predictableActionArguments ? {
              action,
              state: _this.state,
              _event
            } : {
              action,
              _event
            });
          } catch (err) {
            if (_this.parent) {
              _this.parent.send({
                type: "xstate.error",
                data: err
              });
            }
            throw err;
          }
        }
        switch (action.type) {
          case raise: {
            var sendAction_1 = action;
            _this.defer(sendAction_1);
            break;
          }
          case send:
            var sendAction = action;
            if (typeof sendAction.delay === "number") {
              _this.defer(sendAction);
              return;
            } else {
              if (sendAction.to) {
                _this.sendTo(sendAction._event, sendAction.to, _event === initEvent);
              } else {
                _this.send(sendAction._event);
              }
            }
            break;
          case cancel:
            _this.cancel(action.sendId);
            break;
          case start: {
            if (_this.status !== InterpreterStatus.Running) {
              return;
            }
            var activity = action.activity;
            if (
              // in v4 with `predictableActionArguments` invokes are called eagerly when the `this.state` still points to the previous state
              !_this.machine.config.predictableActionArguments && !_this.state.activities[activity.id || activity.type]
            ) {
              break;
            }
            if (activity.type === ActionTypes.Invoke) {
              var invokeSource = toInvokeSource(activity.src);
              var serviceCreator = _this.machine.options.services ? _this.machine.options.services[invokeSource.type] : void 0;
              var id2 = activity.id, data = activity.data;
              if (!IS_PRODUCTION) {
                warn(
                  !("forward" in activity),
                  // tslint:disable-next-line:max-line-length
                  "`forward` property is deprecated (found in invocation of '".concat(activity.src, "' in in machine '").concat(_this.machine.id, "'). ") + "Please use `autoForward` instead."
                );
              }
              var autoForward = "autoForward" in activity ? activity.autoForward : !!activity.forward;
              if (!serviceCreator) {
                if (!IS_PRODUCTION) {
                  warn(false, "No service found for invocation '".concat(activity.src, "' in machine '").concat(_this.machine.id, "'."));
                }
                return;
              }
              var resolvedData = data ? mapContext(data, context, _event) : void 0;
              if (typeof serviceCreator === "string") {
                return;
              }
              var source = isFunction2(serviceCreator) ? serviceCreator(context, _event.data, {
                data: resolvedData,
                src: invokeSource,
                meta: activity.meta
              }) : serviceCreator;
              if (!source) {
                return;
              }
              var options2 = void 0;
              if (isMachine(source)) {
                source = resolvedData ? source.withContext(resolvedData) : source;
                options2 = {
                  autoForward
                };
              }
              _this.spawn(source, id2, options2);
            } else {
              _this.spawnActivity(activity);
            }
            break;
          }
          case stop: {
            _this.stopChild(action.activity.id);
            break;
          }
          case log:
            var _a2 = action, label = _a2.label, value = _a2.value;
            if (label) {
              _this.logger(label, value);
            } else {
              _this.logger(value);
            }
            break;
          default:
            if (!IS_PRODUCTION) {
              warn(false, "No implementation found for action type '".concat(action.type, "'"));
            }
            break;
        }
      };
      var resolvedOptions = __assign(__assign({}, Interpreter2.defaultOptions), options);
      var clock = resolvedOptions.clock, logger3 = resolvedOptions.logger, parent = resolvedOptions.parent, id = resolvedOptions.id;
      var resolvedId = id !== void 0 ? id : machine.id;
      this.id = resolvedId;
      this.logger = logger3;
      this.clock = clock;
      this.parent = parent;
      this.options = resolvedOptions;
      this.scheduler = new Scheduler({
        deferEvents: this.options.deferEvents
      });
      this.sessionId = registry.bookId();
    }
    Object.defineProperty(Interpreter2.prototype, "initialState", {
      get: function() {
        var _this = this;
        if (this._initialState) {
          return this._initialState;
        }
        return provide(this, function() {
          _this._initialState = _this.machine.initialState;
          return _this._initialState;
        });
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(Interpreter2.prototype, "state", {
      /**
       * @deprecated Use `.getSnapshot()` instead.
       */
      get: function() {
        if (!IS_PRODUCTION) {
          warn(this.status !== InterpreterStatus.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first."));
        }
        return this._state;
      },
      enumerable: false,
      configurable: true
    });
    Interpreter2.prototype.execute = function(state, actionsConfig) {
      var e_1, _a2;
      try {
        for (var _b = __values(state.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
          var action = _c.value;
          this.exec(action, state, actionsConfig);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    };
    Interpreter2.prototype.update = function(state, _event) {
      var e_2, _a2, e_3, _b, e_4, _c, e_5, _d;
      var _this = this;
      state._sessionid = this.sessionId;
      this._state = state;
      if ((!this.machine.config.predictableActionArguments || // this is currently required to execute initial actions as the `initialState` gets cached
      // we can't just recompute it (and execute actions while doing so) because we try to preserve identity of actors created within initial assigns
      _event === initEvent) && this.options.execute) {
        this.execute(this.state);
      } else {
        var item = void 0;
        while (item = this._outgoingQueue.shift()) {
          item[0].send(item[1]);
        }
      }
      this.children.forEach(function(child) {
        _this.state.children[child.id] = child;
      });
      if (this.devTools) {
        this.devTools.send(_event.data, state);
      }
      if (state.event) {
        try {
          for (var _e = __values(this.eventListeners), _f = _e.next(); !_f.done; _f = _e.next()) {
            var listener = _f.value;
            listener(state.event);
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_f && !_f.done && (_a2 = _e.return)) _a2.call(_e);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
      }
      try {
        for (var _g = __values(this.listeners), _h = _g.next(); !_h.done; _h = _g.next()) {
          var listener = _h.value;
          listener(state, state.event);
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      try {
        for (var _j = __values(this.contextListeners), _k = _j.next(); !_k.done; _k = _j.next()) {
          var contextListener = _k.value;
          contextListener(this.state.context, this.state.history ? this.state.history.context : void 0);
        }
      } catch (e_4_1) {
        e_4 = {
          error: e_4_1
        };
      } finally {
        try {
          if (_k && !_k.done && (_c = _j.return)) _c.call(_j);
        } finally {
          if (e_4) throw e_4.error;
        }
      }
      if (this.state.done) {
        var finalChildStateNode = state.configuration.find(function(sn) {
          return sn.type === "final" && sn.parent === _this.machine;
        });
        var doneData = finalChildStateNode && finalChildStateNode.doneData ? mapContext(finalChildStateNode.doneData, state.context, _event) : void 0;
        this._doneEvent = doneInvoke(this.id, doneData);
        try {
          for (var _l = __values(this.doneListeners), _m = _l.next(); !_m.done; _m = _l.next()) {
            var listener = _m.value;
            listener(this._doneEvent);
          }
        } catch (e_5_1) {
          e_5 = {
            error: e_5_1
          };
        } finally {
          try {
            if (_m && !_m.done && (_d = _l.return)) _d.call(_l);
          } finally {
            if (e_5) throw e_5.error;
          }
        }
        this._stop();
        this._stopChildren();
        registry.free(this.sessionId);
      }
    };
    Interpreter2.prototype.onTransition = function(listener) {
      this.listeners.add(listener);
      if (this.status === InterpreterStatus.Running) {
        listener(this.state, this.state.event);
      }
      return this;
    };
    Interpreter2.prototype.subscribe = function(nextListenerOrObserver, _, completeListener) {
      var _this = this;
      var observer = toObserver(nextListenerOrObserver, _, completeListener);
      this.listeners.add(observer.next);
      if (this.status !== InterpreterStatus.NotStarted) {
        observer.next(this.state);
      }
      var completeOnce = function() {
        _this.doneListeners.delete(completeOnce);
        _this.stopListeners.delete(completeOnce);
        observer.complete();
      };
      if (this.status === InterpreterStatus.Stopped) {
        observer.complete();
      } else {
        this.onDone(completeOnce);
        this.onStop(completeOnce);
      }
      return {
        unsubscribe: function() {
          _this.listeners.delete(observer.next);
          _this.doneListeners.delete(completeOnce);
          _this.stopListeners.delete(completeOnce);
        }
      };
    };
    Interpreter2.prototype.onEvent = function(listener) {
      this.eventListeners.add(listener);
      return this;
    };
    Interpreter2.prototype.onSend = function(listener) {
      this.sendListeners.add(listener);
      return this;
    };
    Interpreter2.prototype.onChange = function(listener) {
      this.contextListeners.add(listener);
      return this;
    };
    Interpreter2.prototype.onStop = function(listener) {
      this.stopListeners.add(listener);
      return this;
    };
    Interpreter2.prototype.onDone = function(listener) {
      if (this.status === InterpreterStatus.Stopped && this._doneEvent) {
        listener(this._doneEvent);
      } else {
        this.doneListeners.add(listener);
      }
      return this;
    };
    Interpreter2.prototype.off = function(listener) {
      this.listeners.delete(listener);
      this.eventListeners.delete(listener);
      this.sendListeners.delete(listener);
      this.stopListeners.delete(listener);
      this.doneListeners.delete(listener);
      this.contextListeners.delete(listener);
      return this;
    };
    Interpreter2.prototype.start = function(initialState) {
      var _this = this;
      if (this.status === InterpreterStatus.Running) {
        return this;
      }
      this.machine._init();
      registry.register(this.sessionId, this);
      this.initialized = true;
      this.status = InterpreterStatus.Running;
      var resolvedState = initialState === void 0 ? this.initialState : provide(this, function() {
        return isStateConfig(initialState) ? _this.machine.resolveState(initialState) : _this.machine.resolveState(State.from(initialState, _this.machine.context));
      });
      if (this.options.devTools) {
        this.attachDev();
      }
      this.scheduler.initialize(function() {
        _this.update(resolvedState, initEvent);
      });
      return this;
    };
    Interpreter2.prototype._stopChildren = function() {
      this.children.forEach(function(child) {
        if (isFunction2(child.stop)) {
          child.stop();
        }
      });
      this.children.clear();
    };
    Interpreter2.prototype._stop = function() {
      var e_6, _a2, e_7, _b, e_8, _c, e_9, _d, e_10, _e;
      try {
        for (var _f = __values(this.listeners), _g = _f.next(); !_g.done; _g = _f.next()) {
          var listener = _g.value;
          this.listeners.delete(listener);
        }
      } catch (e_6_1) {
        e_6 = {
          error: e_6_1
        };
      } finally {
        try {
          if (_g && !_g.done && (_a2 = _f.return)) _a2.call(_f);
        } finally {
          if (e_6) throw e_6.error;
        }
      }
      try {
        for (var _h = __values(this.stopListeners), _j = _h.next(); !_j.done; _j = _h.next()) {
          var listener = _j.value;
          listener();
          this.stopListeners.delete(listener);
        }
      } catch (e_7_1) {
        e_7 = {
          error: e_7_1
        };
      } finally {
        try {
          if (_j && !_j.done && (_b = _h.return)) _b.call(_h);
        } finally {
          if (e_7) throw e_7.error;
        }
      }
      try {
        for (var _k = __values(this.contextListeners), _l = _k.next(); !_l.done; _l = _k.next()) {
          var listener = _l.value;
          this.contextListeners.delete(listener);
        }
      } catch (e_8_1) {
        e_8 = {
          error: e_8_1
        };
      } finally {
        try {
          if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
        } finally {
          if (e_8) throw e_8.error;
        }
      }
      try {
        for (var _m = __values(this.doneListeners), _o = _m.next(); !_o.done; _o = _m.next()) {
          var listener = _o.value;
          this.doneListeners.delete(listener);
        }
      } catch (e_9_1) {
        e_9 = {
          error: e_9_1
        };
      } finally {
        try {
          if (_o && !_o.done && (_d = _m.return)) _d.call(_m);
        } finally {
          if (e_9) throw e_9.error;
        }
      }
      if (!this.initialized) {
        return this;
      }
      this.initialized = false;
      this.status = InterpreterStatus.Stopped;
      this._initialState = void 0;
      try {
        for (var _p = __values(Object.keys(this.delayedEventsMap)), _q = _p.next(); !_q.done; _q = _p.next()) {
          var key = _q.value;
          this.clock.clearTimeout(this.delayedEventsMap[key]);
        }
      } catch (e_10_1) {
        e_10 = {
          error: e_10_1
        };
      } finally {
        try {
          if (_q && !_q.done && (_e = _p.return)) _e.call(_p);
        } finally {
          if (e_10) throw e_10.error;
        }
      }
      this.scheduler.clear();
      this.scheduler = new Scheduler({
        deferEvents: this.options.deferEvents
      });
    };
    Interpreter2.prototype.stop = function() {
      var _this = this;
      var scheduler = this.scheduler;
      this._stop();
      scheduler.schedule(function() {
        var _a2;
        if ((_a2 = _this._state) === null || _a2 === void 0 ? void 0 : _a2.done) {
          return;
        }
        var _event = toSCXMLEvent({
          type: "xstate.stop"
        });
        var nextState = provide(_this, function() {
          var exitActions = flatten(__spreadArray([], __read(_this.state.configuration), false).sort(function(a, b) {
            return b.order - a.order;
          }).map(function(stateNode) {
            return toActionObjects(stateNode.onExit, _this.machine.options.actions);
          }));
          var _a3 = __read(resolveActions(_this.machine, _this.state, _this.state.context, _event, [{
            type: "exit",
            actions: exitActions
          }], _this.machine.config.predictableActionArguments ? _this._exec : void 0, _this.machine.config.predictableActionArguments || _this.machine.config.preserveActionOrder), 2), resolvedActions = _a3[0], updatedContext = _a3[1];
          var newState = new State({
            value: _this.state.value,
            context: updatedContext,
            _event,
            _sessionid: _this.sessionId,
            historyValue: void 0,
            history: _this.state,
            actions: resolvedActions.filter(function(action) {
              return !isRaisableAction(action);
            }),
            activities: {},
            events: [],
            configuration: [],
            transitions: [],
            children: {},
            done: _this.state.done,
            tags: _this.state.tags,
            machine: _this.machine
          });
          newState.changed = true;
          return newState;
        });
        _this.update(nextState, _event);
        _this._stopChildren();
        registry.free(_this.sessionId);
      });
      return this;
    };
    Interpreter2.prototype.batch = function(events) {
      var _this = this;
      if (this.status === InterpreterStatus.NotStarted && this.options.deferEvents) {
        if (!IS_PRODUCTION) {
          warn(false, "".concat(events.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '" and are deferred. Make sure .start() is called for this service.\nEvent: ').concat(JSON.stringify(event)));
        }
      } else if (this.status !== InterpreterStatus.Running) {
        throw new Error(
          // tslint:disable-next-line:max-line-length
          "".concat(events.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.')
        );
      }
      if (!events.length) {
        return;
      }
      var exec = !!this.machine.config.predictableActionArguments && this._exec;
      this.scheduler.schedule(function() {
        var e_11, _a2;
        var nextState = _this.state;
        var batchChanged = false;
        var batchedActions = [];
        var _loop_1 = function(event_12) {
          var _event = toSCXMLEvent(event_12);
          _this.forward(_event);
          nextState = provide(_this, function() {
            return _this.machine.transition(nextState, _event, void 0, exec || void 0);
          });
          batchedActions.push.apply(batchedActions, __spreadArray([], __read(_this.machine.config.predictableActionArguments ? nextState.actions : nextState.actions.map(function(a) {
            return bindActionToState(a, nextState);
          })), false));
          batchChanged = batchChanged || !!nextState.changed;
        };
        try {
          for (var events_1 = __values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
            var event_1 = events_1_1.value;
            _loop_1(event_1);
          }
        } catch (e_11_1) {
          e_11 = {
            error: e_11_1
          };
        } finally {
          try {
            if (events_1_1 && !events_1_1.done && (_a2 = events_1.return)) _a2.call(events_1);
          } finally {
            if (e_11) throw e_11.error;
          }
        }
        nextState.changed = batchChanged;
        nextState.actions = batchedActions;
        _this.update(nextState, toSCXMLEvent(events[events.length - 1]));
      });
    };
    Interpreter2.prototype.sender = function(event2) {
      return this.send.bind(this, event2);
    };
    Interpreter2.prototype._nextState = function(event2, exec) {
      var _this = this;
      if (exec === void 0) {
        exec = !!this.machine.config.predictableActionArguments && this._exec;
      }
      var _event = toSCXMLEvent(event2);
      if (_event.name.indexOf(errorPlatform) === 0 && !this.state.nextEvents.some(function(nextEvent) {
        return nextEvent.indexOf(errorPlatform) === 0;
      })) {
        throw _event.data.data;
      }
      var nextState = provide(this, function() {
        return _this.machine.transition(_this.state, _event, void 0, exec || void 0);
      });
      return nextState;
    };
    Interpreter2.prototype.nextState = function(event2) {
      return this._nextState(event2, false);
    };
    Interpreter2.prototype.forward = function(event2) {
      var e_12, _a2;
      try {
        for (var _b = __values(this.forwardTo), _c = _b.next(); !_c.done; _c = _b.next()) {
          var id = _c.value;
          var child = this.children.get(id);
          if (!child) {
            throw new Error("Unable to forward event '".concat(event2, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(id, "'."));
          }
          child.send(event2);
        }
      } catch (e_12_1) {
        e_12 = {
          error: e_12_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_12) throw e_12.error;
        }
      }
    };
    Interpreter2.prototype.defer = function(sendAction) {
      var _this = this;
      var timerId = this.clock.setTimeout(function() {
        if ("to" in sendAction && sendAction.to) {
          _this.sendTo(sendAction._event, sendAction.to, true);
        } else {
          _this.send(sendAction._event);
        }
      }, sendAction.delay);
      if (sendAction.id) {
        this.delayedEventsMap[sendAction.id] = timerId;
      }
    };
    Interpreter2.prototype.cancel = function(sendId) {
      this.clock.clearTimeout(this.delayedEventsMap[sendId]);
      delete this.delayedEventsMap[sendId];
    };
    Interpreter2.prototype.exec = function(action, state, actionFunctionMap) {
      if (actionFunctionMap === void 0) {
        actionFunctionMap = this.machine.options.actions;
      }
      this._exec(action, state.context, state._event, actionFunctionMap);
    };
    Interpreter2.prototype.removeChild = function(childId) {
      var _a2;
      this.children.delete(childId);
      this.forwardTo.delete(childId);
      (_a2 = this.state) === null || _a2 === void 0 ? true : delete _a2.children[childId];
    };
    Interpreter2.prototype.stopChild = function(childId) {
      var child = this.children.get(childId);
      if (!child) {
        return;
      }
      this.removeChild(childId);
      if (isFunction2(child.stop)) {
        child.stop();
      }
    };
    Interpreter2.prototype.spawn = function(entity, name, options) {
      if (this.status !== InterpreterStatus.Running) {
        return createDeferredActor(entity, name);
      }
      if (isPromiseLike(entity)) {
        return this.spawnPromise(Promise.resolve(entity), name);
      } else if (isFunction2(entity)) {
        return this.spawnCallback(entity, name);
      } else if (isSpawnedActor(entity)) {
        return this.spawnActor(entity, name);
      } else if (isObservable(entity)) {
        return this.spawnObservable(entity, name);
      } else if (isMachine(entity)) {
        return this.spawnMachine(entity, __assign(__assign({}, options), {
          id: name
        }));
      } else if (isBehavior(entity)) {
        return this.spawnBehavior(entity, name);
      } else {
        throw new Error('Unable to spawn entity "'.concat(name, '" of type "').concat(typeof entity, '".'));
      }
    };
    Interpreter2.prototype.spawnMachine = function(machine, options) {
      var _this = this;
      if (options === void 0) {
        options = {};
      }
      var childService = new Interpreter2(machine, __assign(__assign({}, this.options), {
        parent: this,
        id: options.id || machine.id
      }));
      var resolvedOptions = __assign(__assign({}, DEFAULT_SPAWN_OPTIONS), options);
      if (resolvedOptions.sync) {
        childService.onTransition(function(state) {
          _this.send(update, {
            state,
            id: childService.id
          });
        });
      }
      var actor = childService;
      this.children.set(childService.id, actor);
      if (resolvedOptions.autoForward) {
        this.forwardTo.add(childService.id);
      }
      childService.onDone(function(doneEvent) {
        _this.removeChild(childService.id);
        _this.send(toSCXMLEvent(doneEvent, {
          origin: childService.id
        }));
      }).start();
      return actor;
    };
    Interpreter2.prototype.spawnBehavior = function(behavior, id) {
      var actorRef = spawnBehavior(behavior, {
        id,
        parent: this
      });
      this.children.set(id, actorRef);
      return actorRef;
    };
    Interpreter2.prototype.spawnPromise = function(promise, id) {
      var _a2;
      var _this = this;
      var canceled = false;
      var resolvedData;
      promise.then(function(response) {
        if (!canceled) {
          resolvedData = response;
          _this.removeChild(id);
          _this.send(toSCXMLEvent(doneInvoke(id, response), {
            origin: id
          }));
        }
      }, function(errorData) {
        if (!canceled) {
          _this.removeChild(id);
          var errorEvent = error2(id, errorData);
          try {
            _this.send(toSCXMLEvent(errorEvent, {
              origin: id
            }));
          } catch (error3) {
            reportUnhandledExceptionOnInvocation(errorData, error3, id);
            if (_this.devTools) {
              _this.devTools.send(errorEvent, _this.state);
            }
            if (_this.machine.strict) {
              _this.stop();
            }
          }
        }
      });
      var actor = (_a2 = {
        id,
        send: function() {
          return void 0;
        },
        subscribe: function(next, handleError, complete) {
          var observer = toObserver(next, handleError, complete);
          var unsubscribed = false;
          promise.then(function(response) {
            if (unsubscribed) {
              return;
            }
            observer.next(response);
            if (unsubscribed) {
              return;
            }
            observer.complete();
          }, function(err) {
            if (unsubscribed) {
              return;
            }
            observer.error(err);
          });
          return {
            unsubscribe: function() {
              return unsubscribed = true;
            }
          };
        },
        stop: function() {
          canceled = true;
        },
        toJSON: function() {
          return {
            id
          };
        },
        getSnapshot: function() {
          return resolvedData;
        }
      }, _a2[symbolObservable] = function() {
        return this;
      }, _a2);
      this.children.set(id, actor);
      return actor;
    };
    Interpreter2.prototype.spawnCallback = function(callback, id) {
      var _a2;
      var _this = this;
      var canceled = false;
      var receivers = /* @__PURE__ */ new Set();
      var listeners = /* @__PURE__ */ new Set();
      var emitted;
      var receive = function(e) {
        emitted = e;
        listeners.forEach(function(listener) {
          return listener(e);
        });
        if (canceled) {
          return;
        }
        _this.send(toSCXMLEvent(e, {
          origin: id
        }));
      };
      var callbackStop;
      try {
        callbackStop = callback(receive, function(newListener) {
          receivers.add(newListener);
        });
      } catch (err) {
        this.send(error2(id, err));
      }
      if (isPromiseLike(callbackStop)) {
        return this.spawnPromise(callbackStop, id);
      }
      var actor = (_a2 = {
        id,
        send: function(event2) {
          return receivers.forEach(function(receiver) {
            return receiver(event2);
          });
        },
        subscribe: function(next) {
          var observer = toObserver(next);
          listeners.add(observer.next);
          return {
            unsubscribe: function() {
              listeners.delete(observer.next);
            }
          };
        },
        stop: function() {
          canceled = true;
          if (isFunction2(callbackStop)) {
            callbackStop();
          }
        },
        toJSON: function() {
          return {
            id
          };
        },
        getSnapshot: function() {
          return emitted;
        }
      }, _a2[symbolObservable] = function() {
        return this;
      }, _a2);
      this.children.set(id, actor);
      return actor;
    };
    Interpreter2.prototype.spawnObservable = function(source, id) {
      var _a2;
      var _this = this;
      var emitted;
      var subscription = source.subscribe(function(value) {
        emitted = value;
        _this.send(toSCXMLEvent(value, {
          origin: id
        }));
      }, function(err) {
        _this.removeChild(id);
        _this.send(toSCXMLEvent(error2(id, err), {
          origin: id
        }));
      }, function() {
        _this.removeChild(id);
        _this.send(toSCXMLEvent(doneInvoke(id), {
          origin: id
        }));
      });
      var actor = (_a2 = {
        id,
        send: function() {
          return void 0;
        },
        subscribe: function(next, handleError, complete) {
          return source.subscribe(next, handleError, complete);
        },
        stop: function() {
          return subscription.unsubscribe();
        },
        getSnapshot: function() {
          return emitted;
        },
        toJSON: function() {
          return {
            id
          };
        }
      }, _a2[symbolObservable] = function() {
        return this;
      }, _a2);
      this.children.set(id, actor);
      return actor;
    };
    Interpreter2.prototype.spawnActor = function(actor, name) {
      this.children.set(name, actor);
      return actor;
    };
    Interpreter2.prototype.spawnActivity = function(activity) {
      var implementation = this.machine.options && this.machine.options.activities ? this.machine.options.activities[activity.type] : void 0;
      if (!implementation) {
        if (!IS_PRODUCTION) {
          warn(false, "No implementation found for activity '".concat(activity.type, "'"));
        }
        return;
      }
      var dispose = implementation(this.state.context, activity);
      this.spawnEffect(activity.id, dispose);
    };
    Interpreter2.prototype.spawnEffect = function(id, dispose) {
      var _a2;
      this.children.set(id, (_a2 = {
        id,
        send: function() {
          return void 0;
        },
        subscribe: function() {
          return {
            unsubscribe: function() {
              return void 0;
            }
          };
        },
        stop: dispose || void 0,
        getSnapshot: function() {
          return void 0;
        },
        toJSON: function() {
          return {
            id
          };
        }
      }, _a2[symbolObservable] = function() {
        return this;
      }, _a2));
    };
    Interpreter2.prototype.attachDev = function() {
      var global2 = getGlobal();
      if (this.options.devTools && global2) {
        if (global2.__REDUX_DEVTOOLS_EXTENSION__) {
          var devToolsOptions = typeof this.options.devTools === "object" ? this.options.devTools : void 0;
          this.devTools = global2.__REDUX_DEVTOOLS_EXTENSION__.connect(__assign(__assign({
            name: this.id,
            autoPause: true,
            stateSanitizer: function(state) {
              return {
                value: state.value,
                context: state.context,
                actions: state.actions
              };
            }
          }, devToolsOptions), {
            features: __assign({
              jump: false,
              skip: false
            }, devToolsOptions ? devToolsOptions.features : void 0)
          }), this.machine);
          this.devTools.init(this.state);
        }
        registerService(this);
      }
    };
    Interpreter2.prototype.toJSON = function() {
      return {
        id: this.id
      };
    };
    Interpreter2.prototype[symbolObservable] = function() {
      return this;
    };
    Interpreter2.prototype.getSnapshot = function() {
      if (this.status === InterpreterStatus.NotStarted) {
        return this.initialState;
      }
      return this._state;
    };
    Interpreter2.defaultOptions = {
      execute: true,
      deferEvents: true,
      clock: {
        setTimeout: function(fn, ms) {
          return setTimeout(fn, ms);
        },
        clearTimeout: function(id) {
          return clearTimeout(id);
        }
      },
      logger: console.log.bind(console),
      devTools: false
    };
    Interpreter2.interpret = interpret;
    return Interpreter2;
  }()
);
var resolveSpawnOptions = function(nameOrOptions) {
  if (isString2(nameOrOptions)) {
    return __assign(__assign({}, DEFAULT_SPAWN_OPTIONS), {
      name: nameOrOptions
    });
  }
  return __assign(__assign(__assign({}, DEFAULT_SPAWN_OPTIONS), {
    name: uniqueId()
  }), nameOrOptions);
};
function spawn(entity, nameOrOptions) {
  var resolvedOptions = resolveSpawnOptions(nameOrOptions);
  return consume(function(service) {
    if (!IS_PRODUCTION) {
      var isLazyEntity = isMachine(entity) || isFunction2(entity);
      warn(!!service || isLazyEntity, 'Attempted to spawn an Actor (ID: "'.concat(isMachine(entity) ? entity.id : "undefined", '") outside of a service. This will have no effect.'));
    }
    if (service) {
      return service.spawn(entity, resolvedOptions.name, resolvedOptions);
    } else {
      return createDeferredActor(entity, resolvedOptions.name);
    }
  });
}
function interpret(machine, options) {
  var interpreter = new Interpreter(machine, options);
  return interpreter;
}

// node_modules/xstate/es/invokeUtils.js
function toInvokeSource2(src) {
  if (typeof src === "string") {
    var simpleSrc = {
      type: src
    };
    simpleSrc.toString = function() {
      return src;
    };
    return simpleSrc;
  }
  return src;
}
function toInvokeDefinition(invokeConfig) {
  return __assign(__assign({
    type: invoke
  }, invokeConfig), {
    toJSON: function() {
      invokeConfig.onDone;
      invokeConfig.onError;
      var invokeDef = __rest(invokeConfig, ["onDone", "onError"]);
      return __assign(__assign({}, invokeDef), {
        type: invoke,
        src: toInvokeSource2(invokeConfig.src)
      });
    }
  });
}

// node_modules/xstate/es/StateNode.js
var NULL_EVENT = "";
var STATE_IDENTIFIER = "#";
var WILDCARD = "*";
var EMPTY_OBJECT = {};
var isStateId = function(str) {
  return str[0] === STATE_IDENTIFIER;
};
var createDefaultOptions = function() {
  return {
    actions: {},
    guards: {},
    services: {},
    activities: {},
    delays: {}
  };
};
var validateArrayifiedTransitions = function(stateNode, event2, transitions) {
  var hasNonLastUnguardedTarget = transitions.slice(0, -1).some(function(transition) {
    return !("cond" in transition) && !("in" in transition) && (isString2(transition.target) || isMachine(transition.target));
  });
  var eventText = event2 === NULL_EVENT ? "the transient event" : "event '".concat(event2, "'");
  warn(!hasNonLastUnguardedTarget, "One or more transitions for ".concat(eventText, " on state '").concat(stateNode.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
};
var StateNode = (
  /** @class */
  function() {
    function StateNode2(config, options, _context, _stateInfo) {
      if (_context === void 0) {
        _context = "context" in config ? config.context : void 0;
      }
      var _this = this;
      var _a2;
      this.config = config;
      this._context = _context;
      this.order = -1;
      this.__xstatenode = true;
      this.__cache = {
        events: void 0,
        relativeValue: /* @__PURE__ */ new Map(),
        initialStateValue: void 0,
        initialState: void 0,
        on: void 0,
        transitions: void 0,
        candidates: {},
        delayedTransitions: void 0
      };
      this.idMap = {};
      this.tags = [];
      this.options = Object.assign(createDefaultOptions(), options);
      this.parent = _stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.parent;
      this.key = this.config.key || (_stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.key) || this.config.id || "(machine)";
      this.machine = this.parent ? this.parent.machine : this;
      this.path = this.parent ? this.parent.path.concat(this.key) : [];
      this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : STATE_DELIMITER);
      this.id = this.config.id || __spreadArray([this.machine.key], __read(this.path), false).join(this.delimiter);
      this.version = this.parent ? this.parent.version : this.config.version;
      this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic");
      this.schema = this.parent ? this.machine.schema : (_a2 = this.config.schema) !== null && _a2 !== void 0 ? _a2 : {};
      this.description = this.config.description;
      if (!IS_PRODUCTION) {
        warn(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead."));
      }
      this.initial = this.config.initial;
      this.states = this.config.states ? mapValues(this.config.states, function(stateConfig, key) {
        var _a3;
        var stateNode = new StateNode2(stateConfig, {}, void 0, {
          parent: _this,
          key
        });
        Object.assign(_this.idMap, __assign((_a3 = {}, _a3[stateNode.id] = stateNode, _a3), stateNode.idMap));
        return stateNode;
      }) : EMPTY_OBJECT;
      var order = 0;
      function dfs(stateNode) {
        var e_1, _a3;
        stateNode.order = order++;
        try {
          for (var _b = __values(getAllChildren(stateNode)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var child = _c.value;
            dfs(child);
          }
        } catch (e_1_1) {
          e_1 = {
            error: e_1_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a3 = _b.return)) _a3.call(_b);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
      }
      dfs(this);
      this.history = this.config.history === true ? "shallow" : this.config.history || false;
      this._transient = !!this.config.always || (!this.config.on ? false : Array.isArray(this.config.on) ? this.config.on.some(function(_a3) {
        var event2 = _a3.event;
        return event2 === NULL_EVENT;
      }) : NULL_EVENT in this.config.on);
      this.strict = !!this.config.strict;
      this.onEntry = toArray(this.config.entry || this.config.onEntry).map(function(action) {
        return toActionObject(action);
      });
      this.onExit = toArray(this.config.exit || this.config.onExit).map(function(action) {
        return toActionObject(action);
      });
      this.meta = this.config.meta;
      this.doneData = this.type === "final" ? this.config.data : void 0;
      this.invoke = toArray(this.config.invoke).map(function(invokeConfig, i) {
        var _a3, _b;
        if (isMachine(invokeConfig)) {
          var invokeId = createInvokeId(_this.id, i);
          _this.machine.options.services = __assign((_a3 = {}, _a3[invokeId] = invokeConfig, _a3), _this.machine.options.services);
          return toInvokeDefinition({
            src: invokeId,
            id: invokeId
          });
        } else if (isString2(invokeConfig.src)) {
          var invokeId = invokeConfig.id || createInvokeId(_this.id, i);
          return toInvokeDefinition(__assign(__assign({}, invokeConfig), {
            id: invokeId,
            src: invokeConfig.src
          }));
        } else if (isMachine(invokeConfig.src) || isFunction2(invokeConfig.src)) {
          var invokeId = invokeConfig.id || createInvokeId(_this.id, i);
          _this.machine.options.services = __assign((_b = {}, _b[invokeId] = invokeConfig.src, _b), _this.machine.options.services);
          return toInvokeDefinition(__assign(__assign({
            id: invokeId
          }, invokeConfig), {
            src: invokeId
          }));
        } else {
          var invokeSource = invokeConfig.src;
          return toInvokeDefinition(__assign(__assign({
            id: createInvokeId(_this.id, i)
          }, invokeConfig), {
            src: invokeSource
          }));
        }
      });
      this.activities = toArray(this.config.activities).concat(this.invoke).map(function(activity) {
        return toActivityDefinition(activity);
      });
      this.transition = this.transition.bind(this);
      this.tags = toArray(this.config.tags);
    }
    StateNode2.prototype._init = function() {
      if (this.__cache.transitions) {
        return;
      }
      getAllStateNodes(this).forEach(function(stateNode) {
        return stateNode.on;
      });
    };
    StateNode2.prototype.withConfig = function(options, context) {
      var _a2 = this.options, actions = _a2.actions, activities = _a2.activities, guards = _a2.guards, services = _a2.services, delays = _a2.delays;
      return new StateNode2(this.config, {
        actions: __assign(__assign({}, actions), options.actions),
        activities: __assign(__assign({}, activities), options.activities),
        guards: __assign(__assign({}, guards), options.guards),
        services: __assign(__assign({}, services), options.services),
        delays: __assign(__assign({}, delays), options.delays)
      }, context !== null && context !== void 0 ? context : this.context);
    };
    StateNode2.prototype.withContext = function(context) {
      return new StateNode2(this.config, this.options, context);
    };
    Object.defineProperty(StateNode2.prototype, "context", {
      get: function() {
        return isFunction2(this._context) ? this._context() : this._context;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateNode2.prototype, "definition", {
      /**
       * The well-structured state node definition.
       */
      get: function() {
        return {
          id: this.id,
          key: this.key,
          version: this.version,
          context: this.context,
          type: this.type,
          initial: this.initial,
          history: this.history,
          states: mapValues(this.states, function(state) {
            return state.definition;
          }),
          on: this.on,
          transitions: this.transitions,
          entry: this.onEntry,
          exit: this.onExit,
          activities: this.activities || [],
          meta: this.meta,
          order: this.order || -1,
          data: this.doneData,
          invoke: this.invoke,
          description: this.description,
          tags: this.tags
        };
      },
      enumerable: false,
      configurable: true
    });
    StateNode2.prototype.toJSON = function() {
      return this.definition;
    };
    Object.defineProperty(StateNode2.prototype, "on", {
      /**
       * The mapping of events to transitions.
       */
      get: function() {
        if (this.__cache.on) {
          return this.__cache.on;
        }
        var transitions = this.transitions;
        return this.__cache.on = transitions.reduce(function(map, transition) {
          map[transition.eventType] = map[transition.eventType] || [];
          map[transition.eventType].push(transition);
          return map;
        }, {});
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateNode2.prototype, "after", {
      get: function() {
        return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateNode2.prototype, "transitions", {
      /**
       * All the transitions that can be taken from this state node.
       */
      get: function() {
        return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
      },
      enumerable: false,
      configurable: true
    });
    StateNode2.prototype.getCandidates = function(eventName) {
      if (this.__cache.candidates[eventName]) {
        return this.__cache.candidates[eventName];
      }
      var transient = eventName === NULL_EVENT;
      var candidates = this.transitions.filter(function(transition) {
        var sameEventType = transition.eventType === eventName;
        return transient ? sameEventType : sameEventType || transition.eventType === WILDCARD;
      });
      this.__cache.candidates[eventName] = candidates;
      return candidates;
    };
    StateNode2.prototype.getDelayedTransitions = function() {
      var _this = this;
      var afterConfig = this.config.after;
      if (!afterConfig) {
        return [];
      }
      var mutateEntryExit = function(delay, i) {
        var delayRef = isFunction2(delay) ? "".concat(_this.id, ":delay[").concat(i, "]") : delay;
        var eventType = after2(delayRef, _this.id);
        _this.onEntry.push(send2(eventType, {
          delay
        }));
        _this.onExit.push(cancel2(eventType));
        return eventType;
      };
      var delayedTransitions = isArray2(afterConfig) ? afterConfig.map(function(transition, i) {
        var eventType = mutateEntryExit(transition.delay, i);
        return __assign(__assign({}, transition), {
          event: eventType
        });
      }) : flatten(Object.keys(afterConfig).map(function(delay, i) {
        var configTransition = afterConfig[delay];
        var resolvedTransition = isString2(configTransition) ? {
          target: configTransition
        } : configTransition;
        var resolvedDelay = !isNaN(+delay) ? +delay : delay;
        var eventType = mutateEntryExit(resolvedDelay, i);
        return toArray(resolvedTransition).map(function(transition) {
          return __assign(__assign({}, transition), {
            event: eventType,
            delay: resolvedDelay
          });
        });
      }));
      return delayedTransitions.map(function(delayedTransition) {
        var delay = delayedTransition.delay;
        return __assign(__assign({}, _this.formatTransition(delayedTransition)), {
          delay
        });
      });
    };
    StateNode2.prototype.getStateNodes = function(state) {
      var _a2;
      var _this = this;
      if (!state) {
        return [];
      }
      var stateValue = state instanceof State ? state.value : toStateValue(state, this.delimiter);
      if (isString2(stateValue)) {
        var initialStateValue = this.getStateNode(stateValue).initial;
        return initialStateValue !== void 0 ? this.getStateNodes((_a2 = {}, _a2[stateValue] = initialStateValue, _a2)) : [this, this.states[stateValue]];
      }
      var subStateKeys = Object.keys(stateValue);
      var subStateNodes = [this];
      subStateNodes.push.apply(subStateNodes, __spreadArray([], __read(flatten(subStateKeys.map(function(subStateKey) {
        return _this.getStateNode(subStateKey).getStateNodes(stateValue[subStateKey]);
      }))), false));
      return subStateNodes;
    };
    StateNode2.prototype.handles = function(event2) {
      var eventType = getEventType(event2);
      return this.events.includes(eventType);
    };
    StateNode2.prototype.resolveState = function(state) {
      var stateFromConfig = state instanceof State ? state : State.create(state);
      var configuration = Array.from(getConfiguration([], this.getStateNodes(stateFromConfig.value)));
      return new State(__assign(__assign({}, stateFromConfig), {
        value: this.resolve(stateFromConfig.value),
        configuration,
        done: isInFinalState(configuration, this),
        tags: getTagsFromConfiguration(configuration),
        machine: this.machine
      }));
    };
    StateNode2.prototype.transitionLeafNode = function(stateValue, state, _event) {
      var stateNode = this.getStateNode(stateValue);
      var next = stateNode.next(state, _event);
      if (!next || !next.transitions.length) {
        return this.next(state, _event);
      }
      return next;
    };
    StateNode2.prototype.transitionCompoundNode = function(stateValue, state, _event) {
      var subStateKeys = Object.keys(stateValue);
      var stateNode = this.getStateNode(subStateKeys[0]);
      var next = stateNode._transition(stateValue[subStateKeys[0]], state, _event);
      if (!next || !next.transitions.length) {
        return this.next(state, _event);
      }
      return next;
    };
    StateNode2.prototype.transitionParallelNode = function(stateValue, state, _event) {
      var e_2, _a2;
      var transitionMap = {};
      try {
        for (var _b = __values(Object.keys(stateValue)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var subStateKey = _c.value;
          var subStateValue = stateValue[subStateKey];
          if (!subStateValue) {
            continue;
          }
          var subStateNode = this.getStateNode(subStateKey);
          var next = subStateNode._transition(subStateValue, state, _event);
          if (next) {
            transitionMap[subStateKey] = next;
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
      var stateTransitions = Object.keys(transitionMap).map(function(key) {
        return transitionMap[key];
      });
      var enabledTransitions = flatten(stateTransitions.map(function(st) {
        return st.transitions;
      }));
      var willTransition = stateTransitions.some(function(st) {
        return st.transitions.length > 0;
      });
      if (!willTransition) {
        return this.next(state, _event);
      }
      var configuration = flatten(Object.keys(transitionMap).map(function(key) {
        return transitionMap[key].configuration;
      }));
      return {
        transitions: enabledTransitions,
        exitSet: flatten(stateTransitions.map(function(t2) {
          return t2.exitSet;
        })),
        configuration,
        source: state,
        actions: flatten(Object.keys(transitionMap).map(function(key) {
          return transitionMap[key].actions;
        }))
      };
    };
    StateNode2.prototype._transition = function(stateValue, state, _event) {
      if (isString2(stateValue)) {
        return this.transitionLeafNode(stateValue, state, _event);
      }
      if (Object.keys(stateValue).length === 1) {
        return this.transitionCompoundNode(stateValue, state, _event);
      }
      return this.transitionParallelNode(stateValue, state, _event);
    };
    StateNode2.prototype.getTransitionData = function(state, event2) {
      return this._transition(state.value, state, toSCXMLEvent(event2));
    };
    StateNode2.prototype.next = function(state, _event) {
      var e_3, _a2;
      var _this = this;
      var eventName = _event.name;
      var actions = [];
      var nextStateNodes = [];
      var selectedTransition;
      try {
        for (var _b = __values(this.getCandidates(eventName)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var candidate = _c.value;
          var cond = candidate.cond, stateIn = candidate.in;
          var resolvedContext = state.context;
          var isInState = stateIn ? isString2(stateIn) && isStateId(stateIn) ? (
            // Check if in state by ID
            state.matches(toStateValue(this.getStateNodeById(stateIn).path, this.delimiter))
          ) : (
            // Check if in state by relative grandparent
            matchesState(toStateValue(stateIn, this.delimiter), path(this.path.slice(0, -2))(state.value))
          ) : true;
          var guardPassed = false;
          try {
            guardPassed = !cond || evaluateGuard(this.machine, cond, resolvedContext, _event, state);
          } catch (err) {
            throw new Error("Unable to evaluate guard '".concat(cond.name || cond.type, "' in transition for event '").concat(eventName, "' in state node '").concat(this.id, "':\n").concat(err.message));
          }
          if (guardPassed && isInState) {
            if (candidate.target !== void 0) {
              nextStateNodes = candidate.target;
            }
            actions.push.apply(actions, __spreadArray([], __read(candidate.actions), false));
            selectedTransition = candidate;
            break;
          }
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return)) _a2.call(_b);
        } finally {
          if (e_3) throw e_3.error;
        }
      }
      if (!selectedTransition) {
        return void 0;
      }
      if (!nextStateNodes.length) {
        return {
          transitions: [selectedTransition],
          exitSet: [],
          configuration: state.value ? [this] : [],
          source: state,
          actions
        };
      }
      var allNextStateNodes = flatten(nextStateNodes.map(function(stateNode) {
        return _this.getRelativeStateNodes(stateNode, state.historyValue);
      }));
      var isInternal = !!selectedTransition.internal;
      return {
        transitions: [selectedTransition],
        exitSet: isInternal ? [] : flatten(nextStateNodes.map(function(targetNode) {
          return _this.getPotentiallyReenteringNodes(targetNode);
        })),
        configuration: allNextStateNodes,
        source: state,
        actions
      };
    };
    StateNode2.prototype.getPotentiallyReenteringNodes = function(targetNode) {
      if (this.order < targetNode.order) {
        return [this];
      }
      var nodes = [];
      var marker = this;
      var possibleAncestor = targetNode;
      while (marker && marker !== possibleAncestor) {
        nodes.push(marker);
        marker = marker.parent;
      }
      if (marker !== possibleAncestor) {
        return [];
      }
      nodes.push(possibleAncestor);
      return nodes;
    };
    StateNode2.prototype.getActions = function(resolvedConfig, isDone, transition, currentContext, _event, prevState, predictableExec) {
      var e_4, _a2, e_5, _b;
      var _this = this;
      var prevConfig = prevState ? getConfiguration([], this.getStateNodes(prevState.value)) : [];
      var entrySet = /* @__PURE__ */ new Set();
      try {
        for (var _c = __values(Array.from(resolvedConfig).sort(function(a, b) {
          return a.order - b.order;
        })), _d = _c.next(); !_d.done; _d = _c.next()) {
          var sn = _d.value;
          if (!has2(prevConfig, sn) || has2(transition.exitSet, sn) || sn.parent && entrySet.has(sn.parent)) {
            entrySet.add(sn);
          }
        }
      } catch (e_4_1) {
        e_4 = {
          error: e_4_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_a2 = _c.return)) _a2.call(_c);
        } finally {
          if (e_4) throw e_4.error;
        }
      }
      try {
        for (var prevConfig_1 = __values(prevConfig), prevConfig_1_1 = prevConfig_1.next(); !prevConfig_1_1.done; prevConfig_1_1 = prevConfig_1.next()) {
          var sn = prevConfig_1_1.value;
          if (!has2(resolvedConfig, sn) || has2(transition.exitSet, sn.parent)) {
            transition.exitSet.push(sn);
          }
        }
      } catch (e_5_1) {
        e_5 = {
          error: e_5_1
        };
      } finally {
        try {
          if (prevConfig_1_1 && !prevConfig_1_1.done && (_b = prevConfig_1.return)) _b.call(prevConfig_1);
        } finally {
          if (e_5) throw e_5.error;
        }
      }
      transition.exitSet.sort(function(a, b) {
        return b.order - a.order;
      });
      var entryStates = Array.from(entrySet).sort(function(a, b) {
        return a.order - b.order;
      });
      var exitStates = new Set(transition.exitSet);
      var doneEvents = flatten(entryStates.map(function(sn2) {
        var events = [];
        if (sn2.type !== "final") {
          return events;
        }
        var parent = sn2.parent;
        if (!parent.parent) {
          return events;
        }
        events.push(
          done(sn2.id, sn2.doneData),
          // TODO: deprecate - final states should not emit done events for their own state.
          done(parent.id, sn2.doneData ? mapContext(sn2.doneData, currentContext, _event) : void 0)
        );
        var grandparent = parent.parent;
        if (grandparent.type === "parallel") {
          if (getChildren(grandparent).every(function(parentNode) {
            return isInFinalState(transition.configuration, parentNode);
          })) {
            events.push(done(grandparent.id));
          }
        }
        return events;
      }));
      var entryActions = entryStates.map(function(stateNode) {
        var entryActions2 = stateNode.onEntry;
        var invokeActions = stateNode.activities.map(function(activity) {
          return start2(activity);
        });
        return {
          type: "entry",
          actions: toActionObjects(predictableExec ? __spreadArray(__spreadArray([], __read(entryActions2), false), __read(invokeActions), false) : __spreadArray(__spreadArray([], __read(invokeActions), false), __read(entryActions2), false), _this.machine.options.actions)
        };
      }).concat({
        type: "state_done",
        actions: doneEvents.map(function(event2) {
          return raise2(event2);
        })
      });
      var exitActions = Array.from(exitStates).map(function(stateNode) {
        return {
          type: "exit",
          actions: toActionObjects(__spreadArray(__spreadArray([], __read(stateNode.onExit), false), __read(stateNode.activities.map(function(activity) {
            return stop2(activity);
          })), false), _this.machine.options.actions)
        };
      });
      var actions = exitActions.concat({
        type: "transition",
        actions: toActionObjects(transition.actions, this.machine.options.actions)
      }).concat(entryActions);
      if (isDone) {
        var stopActions = toActionObjects(flatten(__spreadArray([], __read(resolvedConfig), false).sort(function(a, b) {
          return b.order - a.order;
        }).map(function(stateNode) {
          return stateNode.onExit;
        })), this.machine.options.actions).filter(function(action) {
          return !isRaisableAction(action);
        });
        return actions.concat({
          type: "stop",
          actions: stopActions
        });
      }
      return actions;
    };
    StateNode2.prototype.transition = function(state, event2, context, exec) {
      if (state === void 0) {
        state = this.initialState;
      }
      var _event = toSCXMLEvent(event2);
      var currentState;
      if (state instanceof State) {
        currentState = context === void 0 ? state : this.resolveState(State.from(state, context));
      } else {
        var resolvedStateValue = isString2(state) ? this.resolve(pathToStateValue(this.getResolvedPath(state))) : this.resolve(state);
        var resolvedContext = context !== null && context !== void 0 ? context : this.machine.context;
        currentState = this.resolveState(State.from(resolvedStateValue, resolvedContext));
      }
      if (!IS_PRODUCTION && _event.name === WILDCARD) {
        throw new Error("An event cannot have the wildcard type ('".concat(WILDCARD, "')"));
      }
      if (this.strict) {
        if (!this.events.includes(_event.name) && !isBuiltInEvent(_event.name)) {
          throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(_event.name, "'"));
        }
      }
      var stateTransition = this._transition(currentState.value, currentState, _event) || {
        transitions: [],
        configuration: [],
        exitSet: [],
        source: currentState,
        actions: []
      };
      var prevConfig = getConfiguration([], this.getStateNodes(currentState.value));
      var resolvedConfig = stateTransition.configuration.length ? getConfiguration(prevConfig, stateTransition.configuration) : prevConfig;
      stateTransition.configuration = __spreadArray([], __read(resolvedConfig), false);
      return this.resolveTransition(stateTransition, currentState, currentState.context, exec, _event);
    };
    StateNode2.prototype.resolveRaisedTransition = function(state, _event, originalEvent, predictableExec) {
      var _a2;
      var currentActions = state.actions;
      state = this.transition(state, _event, void 0, predictableExec);
      state._event = originalEvent;
      state.event = originalEvent.data;
      (_a2 = state.actions).unshift.apply(_a2, __spreadArray([], __read(currentActions), false));
      return state;
    };
    StateNode2.prototype.resolveTransition = function(stateTransition, currentState, context, predictableExec, _event) {
      var e_6, _a2, e_7, _b;
      var _this = this;
      if (_event === void 0) {
        _event = initEvent;
      }
      var configuration = stateTransition.configuration;
      var willTransition = !currentState || stateTransition.transitions.length > 0;
      var resolvedConfiguration = willTransition ? stateTransition.configuration : currentState ? currentState.configuration : [];
      var isDone = isInFinalState(resolvedConfiguration, this);
      var resolvedStateValue = willTransition ? getValue(this.machine, configuration) : void 0;
      var historyValue = currentState ? currentState.historyValue ? currentState.historyValue : stateTransition.source ? this.machine.historyValue(currentState.value) : void 0 : void 0;
      var actionBlocks = this.getActions(new Set(resolvedConfiguration), isDone, stateTransition, context, _event, currentState, predictableExec);
      var activities = currentState ? __assign({}, currentState.activities) : {};
      try {
        for (var actionBlocks_1 = __values(actionBlocks), actionBlocks_1_1 = actionBlocks_1.next(); !actionBlocks_1_1.done; actionBlocks_1_1 = actionBlocks_1.next()) {
          var block = actionBlocks_1_1.value;
          try {
            for (var _c = (e_7 = void 0, __values(block.actions)), _d = _c.next(); !_d.done; _d = _c.next()) {
              var action = _d.value;
              if (action.type === start) {
                activities[action.activity.id || action.activity.type] = action;
              } else if (action.type === stop) {
                activities[action.activity.id || action.activity.type] = false;
              }
            }
          } catch (e_7_1) {
            e_7 = {
              error: e_7_1
            };
          } finally {
            try {
              if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            } finally {
              if (e_7) throw e_7.error;
            }
          }
        }
      } catch (e_6_1) {
        e_6 = {
          error: e_6_1
        };
      } finally {
        try {
          if (actionBlocks_1_1 && !actionBlocks_1_1.done && (_a2 = actionBlocks_1.return)) _a2.call(actionBlocks_1);
        } finally {
          if (e_6) throw e_6.error;
        }
      }
      var _e = __read(resolveActions(this, currentState, context, _event, actionBlocks, predictableExec, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), resolvedActions = _e[0], updatedContext = _e[1];
      var _f = __read(partition(resolvedActions, isRaisableAction), 2), raisedEvents = _f[0], nonRaisedActions = _f[1];
      var invokeActions = resolvedActions.filter(function(action2) {
        var _a3;
        return action2.type === start && ((_a3 = action2.activity) === null || _a3 === void 0 ? void 0 : _a3.type) === invoke;
      });
      var children2 = invokeActions.reduce(function(acc, action2) {
        acc[action2.activity.id] = createInvocableActor(action2.activity, _this.machine, updatedContext, _event);
        return acc;
      }, currentState ? __assign({}, currentState.children) : {});
      var nextState = new State({
        value: resolvedStateValue || currentState.value,
        context: updatedContext,
        _event,
        // Persist _sessionid between states
        _sessionid: currentState ? currentState._sessionid : null,
        historyValue: resolvedStateValue ? historyValue ? updateHistoryValue(historyValue, resolvedStateValue) : void 0 : currentState ? currentState.historyValue : void 0,
        history: !resolvedStateValue || stateTransition.source ? currentState : void 0,
        actions: resolvedStateValue ? nonRaisedActions : [],
        activities: resolvedStateValue ? activities : currentState ? currentState.activities : {},
        events: [],
        configuration: resolvedConfiguration,
        transitions: stateTransition.transitions,
        children: children2,
        done: isDone,
        tags: getTagsFromConfiguration(resolvedConfiguration),
        machine: this
      });
      var didUpdateContext = context !== updatedContext;
      nextState.changed = _event.name === update || didUpdateContext;
      var history = nextState.history;
      if (history) {
        delete history.history;
      }
      var hasAlwaysTransitions = !isDone && (this._transient || configuration.some(function(stateNode) {
        return stateNode._transient;
      }));
      if (!willTransition && (!hasAlwaysTransitions || _event.name === NULL_EVENT)) {
        return nextState;
      }
      var maybeNextState = nextState;
      if (!isDone) {
        if (hasAlwaysTransitions) {
          maybeNextState = this.resolveRaisedTransition(maybeNextState, {
            type: nullEvent
          }, _event, predictableExec);
        }
        while (raisedEvents.length) {
          var raisedEvent = raisedEvents.shift();
          maybeNextState = this.resolveRaisedTransition(maybeNextState, raisedEvent._event, _event, predictableExec);
        }
      }
      var changed = maybeNextState.changed || (history ? !!maybeNextState.actions.length || didUpdateContext || typeof history.value !== typeof maybeNextState.value || !stateValuesEqual(maybeNextState.value, history.value) : void 0);
      maybeNextState.changed = changed;
      maybeNextState.history = history;
      return maybeNextState;
    };
    StateNode2.prototype.getStateNode = function(stateKey) {
      if (isStateId(stateKey)) {
        return this.machine.getStateNodeById(stateKey);
      }
      if (!this.states) {
        throw new Error("Unable to retrieve child state '".concat(stateKey, "' from '").concat(this.id, "'; no child states exist."));
      }
      var result = this.states[stateKey];
      if (!result) {
        throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
      }
      return result;
    };
    StateNode2.prototype.getStateNodeById = function(stateId) {
      var resolvedStateId = isStateId(stateId) ? stateId.slice(STATE_IDENTIFIER.length) : stateId;
      if (resolvedStateId === this.id) {
        return this;
      }
      var stateNode = this.machine.idMap[resolvedStateId];
      if (!stateNode) {
        throw new Error("Child state node '#".concat(resolvedStateId, "' does not exist on machine '").concat(this.id, "'"));
      }
      return stateNode;
    };
    StateNode2.prototype.getStateNodeByPath = function(statePath) {
      if (typeof statePath === "string" && isStateId(statePath)) {
        try {
          return this.getStateNodeById(statePath.slice(1));
        } catch (e) {
        }
      }
      var arrayStatePath = toStatePath(statePath, this.delimiter).slice();
      var currentStateNode = this;
      while (arrayStatePath.length) {
        var key = arrayStatePath.shift();
        if (!key.length) {
          break;
        }
        currentStateNode = currentStateNode.getStateNode(key);
      }
      return currentStateNode;
    };
    StateNode2.prototype.resolve = function(stateValue) {
      var _a2;
      var _this = this;
      if (!stateValue) {
        return this.initialStateValue || EMPTY_OBJECT;
      }
      switch (this.type) {
        case "parallel":
          return mapValues(this.initialStateValue, function(subStateValue, subStateKey) {
            return subStateValue ? _this.getStateNode(subStateKey).resolve(stateValue[subStateKey] || subStateValue) : EMPTY_OBJECT;
          });
        case "compound":
          if (isString2(stateValue)) {
            var subStateNode = this.getStateNode(stateValue);
            if (subStateNode.type === "parallel" || subStateNode.type === "compound") {
              return _a2 = {}, _a2[stateValue] = subStateNode.initialStateValue, _a2;
            }
            return stateValue;
          }
          if (!Object.keys(stateValue).length) {
            return this.initialStateValue || {};
          }
          return mapValues(stateValue, function(subStateValue, subStateKey) {
            return subStateValue ? _this.getStateNode(subStateKey).resolve(subStateValue) : EMPTY_OBJECT;
          });
        default:
          return stateValue || EMPTY_OBJECT;
      }
    };
    StateNode2.prototype.getResolvedPath = function(stateIdentifier) {
      if (isStateId(stateIdentifier)) {
        var stateNode = this.machine.idMap[stateIdentifier.slice(STATE_IDENTIFIER.length)];
        if (!stateNode) {
          throw new Error("Unable to find state node '".concat(stateIdentifier, "'"));
        }
        return stateNode.path;
      }
      return toStatePath(stateIdentifier, this.delimiter);
    };
    Object.defineProperty(StateNode2.prototype, "initialStateValue", {
      get: function() {
        var _a2;
        if (this.__cache.initialStateValue) {
          return this.__cache.initialStateValue;
        }
        var initialStateValue;
        if (this.type === "parallel") {
          initialStateValue = mapFilterValues(this.states, function(state) {
            return state.initialStateValue || EMPTY_OBJECT;
          }, function(stateNode) {
            return !(stateNode.type === "history");
          });
        } else if (this.initial !== void 0) {
          if (!this.states[this.initial]) {
            throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
          }
          initialStateValue = isLeafNode(this.states[this.initial]) ? this.initial : (_a2 = {}, _a2[this.initial] = this.states[this.initial].initialStateValue, _a2);
        } else {
          initialStateValue = {};
        }
        this.__cache.initialStateValue = initialStateValue;
        return this.__cache.initialStateValue;
      },
      enumerable: false,
      configurable: true
    });
    StateNode2.prototype.getInitialState = function(stateValue, context) {
      this._init();
      var configuration = this.getStateNodes(stateValue);
      return this.resolveTransition({
        configuration,
        exitSet: [],
        transitions: [],
        source: void 0,
        actions: []
      }, void 0, context !== null && context !== void 0 ? context : this.machine.context, void 0);
    };
    Object.defineProperty(StateNode2.prototype, "initialState", {
      /**
       * The initial State instance, which includes all actions to be executed from
       * entering the initial state.
       */
      get: function() {
        var initialStateValue = this.initialStateValue;
        if (!initialStateValue) {
          throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
        }
        return this.getInitialState(initialStateValue);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateNode2.prototype, "target", {
      /**
       * The target state value of the history state node, if it exists. This represents the
       * default state value to transition to if no history value exists yet.
       */
      get: function() {
        var target;
        if (this.type === "history") {
          var historyConfig = this.config;
          if (isString2(historyConfig.target)) {
            target = isStateId(historyConfig.target) ? pathToStateValue(this.machine.getStateNodeById(historyConfig.target).path.slice(this.path.length - 1)) : historyConfig.target;
          } else {
            target = historyConfig.target;
          }
        }
        return target;
      },
      enumerable: false,
      configurable: true
    });
    StateNode2.prototype.getRelativeStateNodes = function(relativeStateId, historyValue, resolve) {
      if (resolve === void 0) {
        resolve = true;
      }
      return resolve ? relativeStateId.type === "history" ? relativeStateId.resolveHistory(historyValue) : relativeStateId.initialStateNodes : [relativeStateId];
    };
    Object.defineProperty(StateNode2.prototype, "initialStateNodes", {
      get: function() {
        var _this = this;
        if (isLeafNode(this)) {
          return [this];
        }
        if (this.type === "compound" && !this.initial) {
          if (!IS_PRODUCTION) {
            warn(false, "Compound state node '".concat(this.id, "' has no initial state."));
          }
          return [this];
        }
        var initialStateNodePaths = toStatePaths(this.initialStateValue);
        return flatten(initialStateNodePaths.map(function(initialPath) {
          return _this.getFromRelativePath(initialPath);
        }));
      },
      enumerable: false,
      configurable: true
    });
    StateNode2.prototype.getFromRelativePath = function(relativePath) {
      if (!relativePath.length) {
        return [this];
      }
      var _a2 = __read(relativePath), stateKey = _a2[0], childStatePath = _a2.slice(1);
      if (!this.states) {
        throw new Error("Cannot retrieve subPath '".concat(stateKey, "' from node with no states"));
      }
      var childStateNode = this.getStateNode(stateKey);
      if (childStateNode.type === "history") {
        return childStateNode.resolveHistory();
      }
      if (!this.states[stateKey]) {
        throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
      }
      return this.states[stateKey].getFromRelativePath(childStatePath);
    };
    StateNode2.prototype.historyValue = function(relativeStateValue) {
      if (!Object.keys(this.states).length) {
        return void 0;
      }
      return {
        current: relativeStateValue || this.initialStateValue,
        states: mapFilterValues(this.states, function(stateNode, key) {
          if (!relativeStateValue) {
            return stateNode.historyValue();
          }
          var subStateValue = isString2(relativeStateValue) ? void 0 : relativeStateValue[key];
          return stateNode.historyValue(subStateValue || stateNode.initialStateValue);
        }, function(stateNode) {
          return !stateNode.history;
        })
      };
    };
    StateNode2.prototype.resolveHistory = function(historyValue) {
      var _this = this;
      if (this.type !== "history") {
        return [this];
      }
      var parent = this.parent;
      if (!historyValue) {
        var historyTarget = this.target;
        return historyTarget ? flatten(toStatePaths(historyTarget).map(function(relativeChildPath) {
          return parent.getFromRelativePath(relativeChildPath);
        })) : parent.initialStateNodes;
      }
      var subHistoryValue = nestedPath(parent.path, "states")(historyValue).current;
      if (isString2(subHistoryValue)) {
        return [parent.getStateNode(subHistoryValue)];
      }
      return flatten(toStatePaths(subHistoryValue).map(function(subStatePath) {
        return _this.history === "deep" ? parent.getFromRelativePath(subStatePath) : [parent.states[subStatePath[0]]];
      }));
    };
    Object.defineProperty(StateNode2.prototype, "stateIds", {
      /**
       * All the state node IDs of this state node and its descendant state nodes.
       */
      get: function() {
        var _this = this;
        var childStateIds = flatten(Object.keys(this.states).map(function(stateKey) {
          return _this.states[stateKey].stateIds;
        }));
        return [this.id].concat(childStateIds);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateNode2.prototype, "events", {
      /**
       * All the event types accepted by this state node and its descendants.
       */
      get: function() {
        var e_8, _a2, e_9, _b;
        if (this.__cache.events) {
          return this.__cache.events;
        }
        var states = this.states;
        var events = new Set(this.ownEvents);
        if (states) {
          try {
            for (var _c = __values(Object.keys(states)), _d = _c.next(); !_d.done; _d = _c.next()) {
              var stateId = _d.value;
              var state = states[stateId];
              if (state.states) {
                try {
                  for (var _e = (e_9 = void 0, __values(state.events)), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var event_1 = _f.value;
                    events.add("".concat(event_1));
                  }
                } catch (e_9_1) {
                  e_9 = {
                    error: e_9_1
                  };
                } finally {
                  try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                  } finally {
                    if (e_9) throw e_9.error;
                  }
                }
              }
            }
          } catch (e_8_1) {
            e_8 = {
              error: e_8_1
            };
          } finally {
            try {
              if (_d && !_d.done && (_a2 = _c.return)) _a2.call(_c);
            } finally {
              if (e_8) throw e_8.error;
            }
          }
        }
        return this.__cache.events = Array.from(events);
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(StateNode2.prototype, "ownEvents", {
      /**
       * All the events that have transitions directly from this state node.
       *
       * Excludes any inert events.
       */
      get: function() {
        var events = new Set(this.transitions.filter(function(transition) {
          return !(!transition.target && !transition.actions.length && transition.internal);
        }).map(function(transition) {
          return transition.eventType;
        }));
        return Array.from(events);
      },
      enumerable: false,
      configurable: true
    });
    StateNode2.prototype.resolveTarget = function(_target) {
      var _this = this;
      if (_target === void 0) {
        return void 0;
      }
      return _target.map(function(target) {
        if (!isString2(target)) {
          return target;
        }
        var isInternalTarget = target[0] === _this.delimiter;
        if (isInternalTarget && !_this.parent) {
          return _this.getStateNodeByPath(target.slice(1));
        }
        var resolvedTarget = isInternalTarget ? _this.key + target : target;
        if (_this.parent) {
          try {
            var targetStateNode = _this.parent.getStateNodeByPath(resolvedTarget);
            return targetStateNode;
          } catch (err) {
            throw new Error("Invalid transition definition for state node '".concat(_this.id, "':\n").concat(err.message));
          }
        } else {
          return _this.getStateNodeByPath(resolvedTarget);
        }
      });
    };
    StateNode2.prototype.formatTransition = function(transitionConfig) {
      var _this = this;
      var normalizedTarget = normalizeTarget(transitionConfig.target);
      var internal = "internal" in transitionConfig ? transitionConfig.internal : normalizedTarget ? normalizedTarget.some(function(_target) {
        return isString2(_target) && _target[0] === _this.delimiter;
      }) : true;
      var guards = this.machine.options.guards;
      var target = this.resolveTarget(normalizedTarget);
      var transition = __assign(__assign({}, transitionConfig), {
        actions: toActionObjects(toArray(transitionConfig.actions)),
        cond: toGuard(transitionConfig.cond, guards),
        target,
        source: this,
        internal,
        eventType: transitionConfig.event,
        toJSON: function() {
          return __assign(__assign({}, transition), {
            target: transition.target ? transition.target.map(function(t2) {
              return "#".concat(t2.id);
            }) : void 0,
            source: "#".concat(_this.id)
          });
        }
      });
      return transition;
    };
    StateNode2.prototype.formatTransitions = function() {
      var e_10, _a2;
      var _this = this;
      var onConfig;
      if (!this.config.on) {
        onConfig = [];
      } else if (Array.isArray(this.config.on)) {
        onConfig = this.config.on;
      } else {
        var _b = this.config.on, _c = WILDCARD, _d = _b[_c], wildcardConfigs = _d === void 0 ? [] : _d, strictTransitionConfigs_1 = __rest(_b, [typeof _c === "symbol" ? _c : _c + ""]);
        onConfig = flatten(Object.keys(strictTransitionConfigs_1).map(function(key) {
          if (!IS_PRODUCTION && key === NULL_EVENT) {
            warn(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(_this.id, '".'));
          }
          var transitionConfigArray = toTransitionConfigArray(key, strictTransitionConfigs_1[key]);
          if (!IS_PRODUCTION) {
            validateArrayifiedTransitions(_this, key, transitionConfigArray);
          }
          return transitionConfigArray;
        }).concat(toTransitionConfigArray(WILDCARD, wildcardConfigs)));
      }
      var eventlessConfig = this.config.always ? toTransitionConfigArray("", this.config.always) : [];
      var doneConfig = this.config.onDone ? toTransitionConfigArray(String(done(this.id)), this.config.onDone) : [];
      if (!IS_PRODUCTION) {
        warn(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
      }
      var invokeConfig = flatten(this.invoke.map(function(invokeDef) {
        var settleTransitions = [];
        if (invokeDef.onDone) {
          settleTransitions.push.apply(settleTransitions, __spreadArray([], __read(toTransitionConfigArray(String(doneInvoke(invokeDef.id)), invokeDef.onDone)), false));
        }
        if (invokeDef.onError) {
          settleTransitions.push.apply(settleTransitions, __spreadArray([], __read(toTransitionConfigArray(String(error2(invokeDef.id)), invokeDef.onError)), false));
        }
        return settleTransitions;
      }));
      var delayedTransitions = this.after;
      var formattedTransitions = flatten(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], __read(doneConfig), false), __read(invokeConfig), false), __read(onConfig), false), __read(eventlessConfig), false).map(function(transitionConfig) {
        return toArray(transitionConfig).map(function(transition) {
          return _this.formatTransition(transition);
        });
      }));
      try {
        for (var delayedTransitions_1 = __values(delayedTransitions), delayedTransitions_1_1 = delayedTransitions_1.next(); !delayedTransitions_1_1.done; delayedTransitions_1_1 = delayedTransitions_1.next()) {
          var delayedTransition = delayedTransitions_1_1.value;
          formattedTransitions.push(delayedTransition);
        }
      } catch (e_10_1) {
        e_10 = {
          error: e_10_1
        };
      } finally {
        try {
          if (delayedTransitions_1_1 && !delayedTransitions_1_1.done && (_a2 = delayedTransitions_1.return)) _a2.call(delayedTransitions_1);
        } finally {
          if (e_10) throw e_10.error;
        }
      }
      return formattedTransitions;
    };
    return StateNode2;
  }()
);

// node_modules/xstate/es/Machine.js
var warned = false;
function createMachine(config, options) {
  if (!IS_PRODUCTION && !("predictableActionArguments" in config) && !warned) {
    warned = true;
    console.warn("It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html");
  }
  return new StateNode(config, options);
}

// node_modules/xstate/es/index.js
var assign3 = assign2;
var sendUpdate2 = sendUpdate;
var forwardTo2 = forwardTo;

// node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/utils.mjs
var import_pickBy = __toESM(require_pickBy(), 1);
var DEFAULT_AUTO_SIGN_IN = true;
var EMPTY_STRING = "";
var sanitizePhoneNumber = (dialCode, phoneNumber) => `${dialCode}${phoneNumber}`.replace(/[^A-Z0-9+]/gi, "");
var selectUserAttributes = (_, key) => {
  switch (key) {
    case "address":
    case "birthdate":
    case "email":
    case "family_name":
    case "gender":
    case "given_name":
    case "locale":
    case "middle_name":
    case "name":
    case "nickname":
    case "phone_number":
    case "picture":
    case "preferred_username":
    case "profile":
    case "updated_at":
    case "website":
    case "zoneinfo":
      return true;
    // Otherwise, it's a custom attribute
    default:
      return key.startsWith("custom:");
  }
};
var getUserAttributes = (formValues) => {
  const _a2 = (0, import_pickBy.default)(formValues, selectUserAttributes), {
    phone_number
  } = _a2, userAttributes = __objRest(_a2, [
    "phone_number"
  ]);
  if (isString(phone_number) && phone_number !== EMPTY_STRING) {
    const {
      country_code
    } = formValues;
    return __spreadProps(__spreadValues({}, userAttributes), {
      phone_number: sanitizePhoneNumber(country_code, phone_number)
    });
  }
  return userAttributes;
};
var getSignUpInput = (username, formValues, loginMechanism) => {
  const _a2 = formValues, {
    password
  } = _a2, values = __objRest(_a2, [
    "password"
  ]);
  const attributes = getUserAttributes(values);
  const options = {
    autoSignIn: DEFAULT_AUTO_SIGN_IN,
    userAttributes: __spreadValues({}, loginMechanism === "phone_number" ? __spreadProps(__spreadValues({}, attributes), {
      phone_number: username
    }) : attributes)
  };
  return {
    username,
    password,
    options
  };
};
var getUsernameSignUp = ({
  formValues,
  loginMechanisms
}) => {
  const loginMechanism = loginMechanisms[0];
  if (loginMechanism === "phone_number") {
    const {
      country_code,
      phone_number
    } = formValues;
    return sanitizePhoneNumber(country_code, phone_number);
  }
  return formValues[loginMechanism];
};

// node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actions.mjs
var {
  assign: assign4
} = actions_exports;
var clearActorDoneData = assign4({
  actorDoneData: void 0
});
var clearChallengeName = assign4({
  challengeName: void 0
});
var clearMissingAttributes = assign4({
  missingAttributes: void 0
});
var clearError = assign4({
  remoteError: void 0
});
var clearFormValues = assign4({
  formValues: {}
});
var clearTouched = assign4({
  touched: {}
});
var clearUser = assign4({
  user: void 0
});
var clearValidationError = assign4({
  validationError: {}
});
var setTotpSecretCode = assign4({
  totpSecretCode: (_, {
    data
  }) => {
    const {
      sharedSecret
    } = data.nextStep?.totpSetupDetails ?? {};
    return sharedSecret;
  }
});
var setAllowedMfaTypes = assign4({
  allowedMfaTypes: (_, {
    data
  }) => {
    return data.nextStep?.allowedMFATypes;
  }
});
var setSignInStep = assign4({
  step: "SIGN_IN"
});
var setShouldVerifyUserAttributeStep = assign4({
  step: "SHOULD_CONFIRM_USER_ATTRIBUTE"
});
var setConfirmAttributeCompleteStep = assign4({
  step: "CONFIRM_ATTRIBUTE_COMPLETE"
});
var setChallengeName = assign4({
  challengeName: (_, {
    data
  }) => {
    const {
      signInStep
    } = data.nextStep;
    switch (signInStep) {
      case "CONFIRM_SIGN_IN_WITH_SMS_CODE":
        return "SMS_MFA";
      case "CONFIRM_SIGN_IN_WITH_TOTP_CODE":
        return "SOFTWARE_TOKEN_MFA";
      case "CONFIRM_SIGN_IN_WITH_EMAIL_CODE":
        return "EMAIL_OTP";
      case "CONTINUE_SIGN_IN_WITH_MFA_SETUP_SELECTION":
      case "CONTINUE_SIGN_IN_WITH_EMAIL_SETUP":
      case "CONTINUE_SIGN_IN_WITH_TOTP_SETUP":
        return "MFA_SETUP";
      case "CONTINUE_SIGN_IN_WITH_MFA_SELECTION":
        return "SELECT_MFA_TYPE";
      default:
        return void 0;
    }
  }
});
var setUsernameForgotPassword = assign4({
  username: ({
    formValues,
    loginMechanisms
  }) => {
    const loginMechanism = loginMechanisms[0];
    const {
      username,
      country_code
    } = formValues;
    if (loginMechanism === "phone_number") {
      return sanitizePhoneNumber(country_code, username);
    }
    return username;
  }
});
var setUsernameSignUp = assign4({
  username: getUsernameSignUp
});
var setUsernameSignIn = assign4({
  username: ({
    formValues,
    loginMechanisms
  }) => {
    const loginMechanism = loginMechanisms[0];
    const {
      username,
      country_code
    } = formValues;
    if (loginMechanism === "phone_number") {
      return sanitizePhoneNumber(country_code, username);
    }
    return username;
  }
});
var setNextSignInStep = assign4({
  step: (_, {
    data
  }) => data.nextStep.signInStep === "DONE" ? "SIGN_IN_COMPLETE" : data.nextStep.signInStep
});
var setNextSignUpStep = assign4({
  step: (_, {
    data
  }) => data.nextStep.signUpStep === "DONE" ? "SIGN_UP_COMPLETE" : data.nextStep.signUpStep
});
var setNextResetPasswordStep = assign4({
  step: (_, {
    data
  }) => data.nextStep.resetPasswordStep === "DONE" ? "RESET_PASSWORD_COMPLETE" : data.nextStep.resetPasswordStep
});
var setMissingAttributes = assign4({
  missingAttributes: (_, {
    data
  }) => data.nextStep?.missingAttributes
});
var setFieldErrors = assign4({
  validationError: (_, {
    data
  }) => data
});
var setRemoteError = assign4({
  remoteError: (_, {
    data
  }) => {
    if (data.name === "NoUserPoolError") {
      return `Configuration error (see console) – please contact the administrator`;
    }
    return data?.message || data;
  }
});
var setUser = assign4({
  user: (_, {
    data
  }) => data
});
var resolveCodeDeliveryDetails = (details) => ({
  Destination: details.destination,
  DeliveryMedium: details.deliveryMedium,
  AttributeName: details.attributName
});
var setCodeDeliveryDetails = assign4({
  codeDeliveryDetails: (_, {
    data
  }) => {
    if (data?.nextStep?.codeDeliveryDetails) {
      return resolveCodeDeliveryDetails(data.nextStep.codeDeliveryDetails);
    }
    return resolveCodeDeliveryDetails(data);
  }
});
var handleInput = assign4({
  formValues: (context, {
    data
  }) => {
    const {
      name,
      value
    } = data;
    return __spreadProps(__spreadValues({}, context["formValues"]), {
      [name]: value
    });
  }
});
var handleSubmit = assign4({
  formValues: (context, {
    data
  }) => (
    // do not trim password
    trimValues(__spreadValues(__spreadValues({}, context["formValues"]), data), "password")
  )
});
var handleBlur = assign4({
  touched: (context, {
    data
  }) => __spreadProps(__spreadValues({}, context["touched"]), {
    [data.name]: true
  })
});
var setUnverifiedUserAttributes = assign4({
  unverifiedUserAttributes: (_, {
    data
  }) => {
    const {
      email,
      phone_number
    } = data;
    const unverifiedUserAttributes = __spreadValues(__spreadValues({}, email && {
      email
    }), phone_number && {
      phone_number
    });
    return unverifiedUserAttributes;
  }
});
var clearSelectedUserAttribute = assign4({
  selectedUserAttribute: void 0
});
var setSelectedUserAttribute = assign4({
  selectedUserAttribute: (context) => context.formValues?.unverifiedAttr
});
var setConfirmSignUpSignUpStep = assign4({
  step: "CONFIRM_SIGN_UP"
});
var ACTIONS = {
  clearActorDoneData,
  clearChallengeName,
  clearError,
  clearFormValues,
  clearMissingAttributes,
  clearSelectedUserAttribute,
  clearTouched,
  clearUser,
  clearValidationError,
  handleBlur,
  handleInput,
  handleSubmit,
  setAllowedMfaTypes,
  setChallengeName,
  setCodeDeliveryDetails,
  setFieldErrors,
  setMissingAttributes,
  setNextResetPasswordStep,
  setNextSignInStep,
  setNextSignUpStep,
  setRemoteError,
  setConfirmAttributeCompleteStep,
  setConfirmSignUpSignUpStep,
  setShouldVerifyUserAttributeStep,
  setSelectedUserAttribute,
  setSignInStep,
  setTotpSecretCode,
  setUser,
  setUnverifiedUserAttributes,
  setUsernameForgotPassword,
  setUsernameSignIn,
  setUsernameSignUp
};

// node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/guards.mjs
var SIGN_IN_STEP_MFA_CONFIRMATION = ["CONFIRM_SIGN_IN_WITH_SMS_CODE", "CONFIRM_SIGN_IN_WITH_TOTP_CODE", "CONFIRM_SIGN_IN_WITH_EMAIL_CODE"];
var shouldConfirmSignInWithNewPassword = (_, {
  data
}) => data?.nextStep.signInStep === "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED";
var shouldResetPasswordFromSignIn = (_, {
  data
}) => data?.nextStep?.signInStep === "RESET_PASSWORD";
var shouldConfirmSignUpFromSignIn = (_, {
  data
}) => data?.nextStep.signInStep === "CONFIRM_SIGN_UP";
var shouldAutoSignIn = (_, {
  data
}) => data?.nextStep.signUpStep === "COMPLETE_AUTO_SIGN_IN";
var hasCompletedSignIn = (_, {
  data
}) => data?.nextStep.signInStep === "DONE";
var hasCompletedSignUp = (_, {
  data
}) => data?.nextStep.signUpStep === "DONE";
var hasCompletedResetPassword = (_, {
  data
}) => data?.nextStep.resetPasswordStep === "DONE";
var hasCompletedAttributeConfirmation = (_, {
  data
}) => data?.step === "CONFIRM_ATTRIBUTE_COMPLETE";
var isConfirmUserAttributeStep = (_, {
  data
}) => data?.step === "CONFIRM_ATTRIBUTE_WITH_CODE";
var isShouldConfirmUserAttributeStep = (_, {
  data
}) => data?.step === "SHOULD_CONFIRM_USER_ATTRIBUTE";
var isResetPasswordStep = (_, {
  data
}) => data?.step === "RESET_PASSWORD";
var isConfirmSignUpStep = (_, {
  data
}) => data?.step === "CONFIRM_SIGN_UP";
var shouldConfirmSignIn = ({
  step
}) => SIGN_IN_STEP_MFA_CONFIRMATION.includes(step);
var shouldSetupTotp = ({
  step
}) => step === "CONTINUE_SIGN_IN_WITH_TOTP_SETUP";
var shouldSetupEmail = ({
  step
}) => step === "CONTINUE_SIGN_IN_WITH_EMAIL_SETUP";
var shouldSelectMfaType = ({
  step
}) => ["CONTINUE_SIGN_IN_WITH_MFA_SELECTION", "CONTINUE_SIGN_IN_WITH_MFA_SETUP_SELECTION"].includes(step);
var shouldResetPassword = ({
  step
}) => step === "RESET_PASSWORD";
var shouldConfirmResetPassword = ({
  step
}) => step === "CONFIRM_RESET_PASSWORD_WITH_CODE";
var shouldConfirmSignUp = ({
  step
}) => step === "CONFIRM_SIGN_UP";
var shouldVerifyAttribute = (_, {
  data
}) => {
  const {
    email,
    phone_number,
    phone_number_verified,
    email_verified
  } = data;
  if (!email && !phone_number) return false;
  const emailNotVerified = email_verified === void 0 || email_verified === "false";
  const phoneNotVerified = phone_number_verified === void 0 || phone_number_verified === "false";
  return emailNotVerified && phoneNotVerified;
};
var isUserAlreadyConfirmed = (_, {
  data
}) => data.message === "User is already confirmed.";
var GUARDS = {
  hasCompletedAttributeConfirmation,
  hasCompletedResetPassword,
  hasCompletedSignIn,
  hasCompletedSignUp,
  isConfirmSignUpStep,
  isConfirmUserAttributeStep,
  isResetPasswordStep,
  isShouldConfirmUserAttributeStep,
  isUserAlreadyConfirmed,
  shouldAutoSignIn,
  shouldConfirmResetPassword,
  shouldConfirmSignIn,
  shouldConfirmSignInWithNewPassword,
  shouldConfirmSignUp,
  shouldConfirmSignUpFromSignIn,
  shouldResetPassword,
  shouldResetPasswordFromSignIn,
  shouldSetupTotp,
  shouldSetupEmail,
  shouldSelectMfaType,
  shouldVerifyAttribute
};

// node_modules/@aws-amplify/ui/dist/esm/validators/index.mjs
var import_merge = __toESM(require_merge(), 1);
var runValidators = (formData, touchData, passwordSettings, validators) => __async(null, null, function* () {
  const errors = yield Promise.all(validators.map((validator) => validator(formData, touchData, passwordSettings)));
  const mergedError = (0, import_merge.default)({}, ...errors);
  if (isEmpty(mergedError)) {
    return Promise.resolve();
  } else {
    return Promise.reject(mergedError);
  }
});

// node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/defaultServices.mjs
var DEFAULT_COGNITO_PASSWORD_MIN_LENGTH = 8;
var isInvalidUserAtributes = (userAttributes) => Array.isArray(userAttributes);
var parseUserAttributes = (userAttributes) => {
  if (!userAttributes) {
    return void 0;
  }
  if (isInvalidUserAtributes(userAttributes)) {
    return Object.entries(userAttributes).map(([_, value]) => Object.keys(value)[0]);
  }
  return Object.keys(userAttributes);
};
var defaultServices = {
  getAmplifyConfig() {
    return __async(this, null, function* () {
      const result = DefaultAmplify.getConfig();
      const cliConfig = result.Auth?.Cognito;
      const {
        loginWith,
        userAttributes
      } = result.Auth?.Cognito ?? {};
      const parsedLoginMechanisms = loginWith ? Object.entries(loginWith).filter(([key, _value]) => key !== "oauth").filter(([_key, value]) => !!value).map((keyValueArray) => {
        return keyValueArray[0] === "phone" ? "phone_number" : keyValueArray[0];
      }) : void 0;
      const parsedSignupAttributes = parseUserAttributes(userAttributes);
      const parsedSocialProviders = loginWith?.oauth?.providers ? loginWith.oauth.providers?.map((provider) => provider.toString().toLowerCase()) : void 0;
      return __spreadProps(__spreadValues({}, cliConfig), {
        loginMechanisms: parsedLoginMechanisms,
        signUpAttributes: parsedSignupAttributes,
        socialProviders: parsedSocialProviders
      });
    });
  },
  getCurrentUser,
  handleSignIn: signIn,
  handleSignUp: signUp,
  handleConfirmSignIn: confirmSignIn,
  handleConfirmSignUp: confirmSignUp,
  handleForgotPasswordSubmit: confirmResetPassword,
  handleForgotPassword: resetPassword,
  handleResendSignUpCode: resendSignUpCode,
  // Validation hooks for overriding
  validateCustomSignUp(_, __) {
    return __async(this, null, function* () {
    });
  },
  validateFormPassword(formData, touchData, passwordSettings) {
    return __async(this, null, function* () {
      const {
        password
      } = formData;
      const {
        password: touched_password
      } = touchData;
      if (!touched_password || !passwordSettings) return null;
      const password_complexity = [];
      const policyMinLength = passwordSettings.minLength ?? DEFAULT_COGNITO_PASSWORD_MIN_LENGTH;
      if (password.length < policyMinLength) {
        password_complexity.push(`Password must have at least ${policyMinLength} characters`);
      }
      if (passwordSettings.requireLowercase && !/[a-z]/.test(password)) password_complexity.push("Password must have lower case letters");
      if (passwordSettings.requireUppercase && !/[A-Z]/.test(password)) password_complexity.push("Password must have upper case letters");
      if (passwordSettings.requireNumbers && !/[0-9]/.test(password)) password_complexity.push("Password must have numbers");
      if (passwordSettings.requireSpecialCharacters && !hasSpecialChars(password)) password_complexity.push("Password must have special characters");
      return password_complexity.length !== 0 ? {
        password: password_complexity
      } : null;
    });
  },
  validateConfirmPassword(formData, touchData) {
    return __async(this, null, function* () {
      const {
        password,
        confirm_password
      } = formData;
      const {
        confirm_password: touched_confirm_password,
        password: touched_password
      } = touchData;
      if (!password && !confirm_password) {
        return null;
      } else if ((password || confirm_password) && password !== confirm_password && (touched_confirm_password && touched_password || password?.length >= 6 && confirm_password?.length >= 6)) {
        return {
          confirm_password: "Your passwords must match"
        };
      }
    });
  },
  validatePreferredUsername(_, __) {
    return __async(this, null, function* () {
    });
  }
};

// node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/forgotPassword.mjs
function forgotPasswordActor({
  services
}) {
  return createMachine({
    id: "forgotPasswordActor",
    initial: "init",
    predictableActionArguments: true,
    states: {
      init: {
        always: [{
          cond: "shouldResetPassword",
          target: "confirmResetPassword"
        }, {
          cond: "shouldConfirmResetPassword",
          target: "confirmResetPassword"
        }, {
          target: "forgotPassword"
        }]
      },
      forgotPassword: {
        initial: "edit",
        entry: "sendUpdate",
        exit: ["clearError", "clearTouched"],
        states: {
          edit: {
            entry: "sendUpdate",
            on: {
              SUBMIT: {
                actions: "handleSubmit",
                target: "submit"
              },
              CHANGE: {
                actions: "handleInput"
              },
              BLUR: {
                actions: "handleBlur"
              }
            }
          },
          submit: {
            tags: "pending",
            entry: ["sendUpdate", "clearError", "setUsernameForgotPassword"],
            invoke: {
              src: "handleResetPassword",
              onDone: {
                actions: ["setCodeDeliveryDetails", "setNextResetPasswordStep"],
                target: "#forgotPasswordActor.confirmResetPassword"
              },
              onError: {
                actions: "setRemoteError",
                target: "edit"
              }
            }
          }
        }
      },
      confirmResetPassword: {
        type: "parallel",
        exit: ["clearFormValues", "clearError", "clearTouched"],
        states: {
          validation: {
            initial: "pending",
            states: {
              pending: {
                invoke: {
                  src: "validateFields",
                  onDone: {
                    target: "valid",
                    actions: "clearValidationError"
                  },
                  onError: {
                    target: "invalid",
                    actions: "setFieldErrors"
                  }
                }
              },
              valid: {
                entry: "sendUpdate"
              },
              invalid: {
                entry: "sendUpdate"
              }
            },
            on: {
              CHANGE: {
                actions: "handleInput",
                target: ".pending"
              },
              BLUR: {
                actions: "handleBlur",
                target: ".pending"
              }
            }
          },
          submission: {
            initial: "idle",
            states: {
              idle: {
                entry: "sendUpdate",
                on: {
                  SUBMIT: {
                    actions: "handleSubmit",
                    target: "validate"
                  },
                  RESEND: "resendCode",
                  CHANGE: {
                    actions: "handleInput"
                  },
                  BLUR: {
                    actions: "handleBlur"
                  }
                }
              },
              validate: {
                entry: "sendUpdate",
                invoke: {
                  src: "validateFields",
                  onDone: {
                    target: "pending",
                    actions: "clearValidationError"
                  },
                  onError: {
                    target: "idle",
                    actions: "setFieldErrors"
                  }
                }
              },
              resendCode: {
                tags: "pending",
                entry: ["clearError", "sendUpdate"],
                invoke: {
                  src: "handleResetPassword",
                  onDone: {
                    target: "idle"
                  },
                  onError: {
                    actions: "setRemoteError",
                    target: "idle"
                  }
                }
              },
              pending: {
                tags: "pending",
                entry: ["clearError", "sendUpdate"],
                invoke: {
                  src: "handleConfirmResetPassword",
                  onDone: [{
                    cond: "hasCompletedResetPassword",
                    actions: "setNextResetPasswordStep",
                    target: "#forgotPasswordActor.resolved"
                  }, {
                    actions: "setSignInStep",
                    target: "#forgotPasswordActor.resolved"
                  }],
                  onError: {
                    actions: "setRemoteError",
                    target: "idle"
                  }
                }
              }
            }
          }
        }
      },
      resolved: {
        type: "final",
        data: ({
          step
        }) => ({
          step
        })
      }
    }
  }, {
    // sendUpdate is a HOC
    actions: __spreadProps(__spreadValues({}, ACTIONS), {
      sendUpdate: sendUpdate2()
    }),
    guards: GUARDS,
    services: {
      handleResetPassword({
        username
      }) {
        return services.handleForgotPassword({
          username
        });
      },
      handleConfirmResetPassword({
        formValues,
        username
      }) {
        const {
          confirmation_code: confirmationCode,
          password: newPassword
        } = formValues;
        return services.handleForgotPasswordSubmit({
          confirmationCode,
          newPassword,
          username
        });
      },
      validateFields(context) {
        return runValidators(context.formValues, context.touched, context.passwordSettings, [defaultServices.validateFormPassword, defaultServices.validateConfirmPassword]);
      }
    }
  });
}

// node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/utils.mjs
var getFederatedSignInState = (target) => ({
  entry: ["sendUpdate", "clearError"],
  invoke: {
    src: "signInWithRedirect",
    onDone: {
      target
    },
    onError: {
      actions: "setRemoteError",
      target
    }
  }
});
var getConfirmSignInFormValuesKey = (signInStep) => {
  if (["CONTINUE_SIGN_IN_WITH_MFA_SELECTION", "CONTINUE_SIGN_IN_WITH_MFA_SETUP_SELECTION"].includes(signInStep)) {
    return "mfa_type";
  }
  if (signInStep === "CONTINUE_SIGN_IN_WITH_EMAIL_SETUP") {
    return "email";
  }
  return "confirmation_code";
};

// node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/signIn.mjs
var handleSignInResponse = {
  onDone: [{
    cond: "hasCompletedSignIn",
    actions: "setNextSignInStep",
    target: "#signInActor.fetchUserAttributes"
  }, {
    cond: "shouldConfirmSignInWithNewPassword",
    actions: ["setMissingAttributes", "setNextSignInStep"],
    target: "#signInActor.forceChangePassword"
  }, {
    cond: "shouldResetPasswordFromSignIn",
    actions: "setNextSignInStep",
    target: "#signInActor.resetPassword"
  }, {
    cond: "shouldConfirmSignUpFromSignIn",
    actions: "setNextSignInStep",
    target: "#signInActor.resendSignUpCode"
  }, {
    actions: ["setChallengeName", "setMissingAttributes", "setNextSignInStep", "setTotpSecretCode", "setAllowedMfaTypes"],
    target: "#signInActor.init"
  }],
  onError: {
    actions: "setRemoteError",
    target: "edit"
  }
};
var handleFetchUserAttributesResponse = {
  onDone: [{
    cond: "shouldVerifyAttribute",
    actions: ["setShouldVerifyUserAttributeStep", "setUnverifiedUserAttributes"],
    target: "#signInActor.resolved"
  }, {
    actions: "setConfirmAttributeCompleteStep",
    target: "#signInActor.resolved"
  }],
  onError: {
    actions: "setConfirmAttributeCompleteStep",
    target: "#signInActor.resolved"
  }
};
var getDefaultConfirmSignInState = (exit) => ({
  initial: "edit",
  exit,
  states: {
    edit: {
      entry: "sendUpdate",
      on: {
        SUBMIT: {
          actions: "handleSubmit",
          target: "submit"
        },
        SIGN_IN: "#signInActor.signIn",
        CHANGE: {
          actions: "handleInput"
        }
      }
    },
    submit: {
      tags: "pending",
      entry: ["sendUpdate", "clearError"],
      invoke: __spreadValues({
        src: "confirmSignIn"
      }, handleSignInResponse)
    }
  }
});
function signInActor({
  services
}) {
  return createMachine({
    id: "signInActor",
    initial: "init",
    predictableActionArguments: true,
    states: {
      init: {
        always: [{
          cond: "shouldConfirmSignIn",
          target: "confirmSignIn"
        }, {
          cond: "shouldSetupTotp",
          target: "setupTotp"
        }, {
          cond: "shouldSetupEmail",
          target: "setupEmail"
        }, {
          cond: "shouldSelectMfaType",
          target: "selectMfaType"
        }, {
          cond: ({
            step
          }) => step === "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED",
          actions: "setActorDoneData",
          target: "forceChangePassword"
        }, {
          target: "signIn"
        }]
      },
      federatedSignIn: getFederatedSignInState("signIn"),
      fetchUserAttributes: {
        invoke: __spreadValues({
          src: "fetchUserAttributes"
        }, handleFetchUserAttributesResponse)
      },
      resendSignUpCode: {
        invoke: {
          src: "handleResendSignUpCode",
          onDone: {
            actions: "setCodeDeliveryDetails",
            target: "#signInActor.resolved"
          },
          onError: {
            actions: "setRemoteError",
            target: "#signInActor.signIn"
          }
        }
      },
      resetPassword: {
        invoke: {
          src: "resetPassword",
          onDone: [{
            actions: "setCodeDeliveryDetails",
            target: "#signInActor.resolved"
          }],
          onError: {
            actions: ["setRemoteError", "sendUpdate"]
          }
        }
      },
      signIn: {
        initial: "edit",
        exit: "clearTouched",
        states: {
          edit: {
            entry: "sendUpdate",
            on: {
              CHANGE: {
                actions: "handleInput"
              },
              FEDERATED_SIGN_IN: {
                target: "#signInActor.federatedSignIn"
              },
              SUBMIT: {
                actions: "handleSubmit",
                target: "submit"
              }
            }
          },
          submit: {
            tags: "pending",
            entry: ["clearError", "sendUpdate", "setUsernameSignIn"],
            exit: "clearFormValues",
            invoke: __spreadValues({
              src: "handleSignIn"
            }, handleSignInResponse)
          }
        }
      },
      confirmSignIn: getDefaultConfirmSignInState(["clearChallengeName", "clearFormValues", "clearError", "clearTouched"]),
      forceChangePassword: {
        entry: "sendUpdate",
        type: "parallel",
        exit: ["clearFormValues", "clearError", "clearTouched"],
        states: {
          validation: {
            initial: "pending",
            states: {
              pending: {
                invoke: {
                  src: "validateFields",
                  onDone: {
                    target: "valid",
                    actions: "clearValidationError"
                  },
                  onError: {
                    target: "invalid",
                    actions: "setFieldErrors"
                  }
                }
              },
              valid: {
                entry: "sendUpdate"
              },
              invalid: {
                entry: "sendUpdate"
              }
            },
            on: {
              SIGN_IN: {
                actions: "setSignInStep",
                target: "#signInActor.resolved"
              },
              CHANGE: {
                actions: "handleInput",
                target: ".pending"
              },
              BLUR: {
                actions: "handleBlur",
                target: ".pending"
              }
            }
          },
          submit: {
            initial: "edit",
            entry: "clearError",
            states: {
              edit: {
                entry: "sendUpdate",
                on: {
                  SUBMIT: {
                    actions: "handleSubmit",
                    target: "validate"
                  }
                }
              },
              validate: {
                entry: "sendUpdate",
                invoke: {
                  src: "validateFields",
                  onDone: {
                    actions: "clearValidationError",
                    target: "pending"
                  },
                  onError: {
                    actions: "setFieldErrors",
                    target: "edit"
                  }
                }
              },
              pending: {
                tags: "pending",
                entry: ["sendUpdate", "clearError"],
                invoke: __spreadValues({
                  src: "handleForceChangePassword"
                }, handleSignInResponse)
              }
            }
          }
        }
      },
      setupTotp: getDefaultConfirmSignInState(["clearFormValues", "clearError", "clearTouched"]),
      setupEmail: getDefaultConfirmSignInState(["clearFormValues", "clearError", "clearTouched"]),
      selectMfaType: getDefaultConfirmSignInState(["clearFormValues", "clearError", "clearTouched"]),
      resolved: {
        type: "final",
        data: (context) => ({
          codeDeliveryDetails: context.codeDeliveryDetails,
          remoteError: context.remoteError,
          step: context.step,
          unverifiedUserAttributes: context.unverifiedUserAttributes,
          username: context.username
        })
      }
    }
  }, {
    // sendUpdate is a HOC
    actions: __spreadProps(__spreadValues({}, ACTIONS), {
      sendUpdate: sendUpdate2()
    }),
    guards: GUARDS,
    services: {
      fetchUserAttributes() {
        return __async(this, null, function* () {
          return fetchUserAttributes();
        });
      },
      resetPassword({
        username
      }) {
        return resetPassword({
          username
        });
      },
      handleResendSignUpCode({
        username
      }) {
        return services.handleResendSignUpCode({
          username
        });
      },
      handleSignIn({
        formValues,
        username
      }) {
        const {
          password
        } = formValues;
        return services.handleSignIn({
          username,
          password
        });
      },
      confirmSignIn({
        formValues,
        step
      }) {
        const formValuesKey = getConfirmSignInFormValuesKey(step);
        const {
          [formValuesKey]: challengeResponse
        } = formValues;
        return services.handleConfirmSignIn({
          challengeResponse
        });
      },
      handleForceChangePassword(_0) {
        return __async(this, arguments, function* ({
          formValues
        }) {
          let _a3 = formValues, {
            password: challengeResponse,
            phone_number,
            country_code,
            confirm_password: confirm_password
          } = _a3, userAttributes = __objRest(_a3, [
            "password",
            "phone_number",
            "country_code",
            // destructure and toss UI confirm_password field
            // to prevent error from sending to confirmSignIn
            "confirm_password"
          ]);
          let phoneNumberWithCountryCode;
          if (phone_number) {
            phoneNumberWithCountryCode = `${country_code}${phone_number}`.replace(/[^A-Z0-9+]/gi, "");
            userAttributes = __spreadProps(__spreadValues({}, userAttributes), {
              phone_number: phoneNumberWithCountryCode
            });
          }
          const input2 = {
            challengeResponse,
            options: {
              userAttributes
            }
          };
          return confirmSignIn(input2);
        });
      },
      signInWithRedirect(_, {
        data
      }) {
        return signInWithRedirect(data);
      },
      validateFields(context) {
        return __async(this, null, function* () {
          return runValidators(context.formValues, context.touched, context.passwordSettings, [defaultServices.validateFormPassword, defaultServices.validateConfirmPassword]);
        });
      }
    }
  });
}

// node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/signUp.mjs
var handleResetPasswordResponse = {
  onDone: [{
    actions: "setCodeDeliveryDetails",
    target: "#signUpActor.resolved"
  }],
  onError: {
    actions: ["setRemoteError", "sendUpdate"]
  }
};
var handleAutoSignInResponse = {
  onDone: [{
    cond: "hasCompletedSignIn",
    actions: "setNextSignInStep",
    target: "#signUpActor.fetchUserAttributes"
  }, {
    cond: "shouldConfirmSignInWithNewPassword",
    actions: "setNextSignInStep",
    target: "#signUpActor.resolved"
  }, {
    cond: "shouldResetPasswordFromSignIn",
    actions: "setNextSignInStep",
    target: "#signUpActor.resetPassword"
  }, {
    cond: "shouldConfirmSignUpFromSignIn",
    actions: "setNextSignInStep",
    target: "#signUpActor.resendSignUpCode"
  }, {
    actions: ["setNextSignInStep", "setChallengeName", "setMissingAttributes", "setTotpSecretCode", "setAllowedMfaTypes"],
    target: "#signUpActor.resolved"
  }],
  onError: {
    actions: "setRemoteError",
    target: "#signUpActor.resolved"
  }
};
var handleFetchUserAttributesResponse2 = {
  onDone: [{
    cond: "shouldVerifyAttribute",
    actions: ["setShouldVerifyUserAttributeStep", "setUnverifiedUserAttributes"],
    target: "#signUpActor.resolved"
  }, {
    actions: "setConfirmAttributeCompleteStep",
    target: "#signUpActor.resolved"
  }],
  onError: {
    actions: "setConfirmAttributeCompleteStep",
    target: "#signUpActor.resolved"
  }
};
function signUpActor({
  services
}) {
  return createMachine({
    id: "signUpActor",
    initial: "init",
    predictableActionArguments: true,
    states: {
      init: {
        always: [{
          cond: "shouldConfirmSignUp",
          target: "confirmSignUp"
        }, {
          target: "signUp"
        }]
      },
      autoSignIn: {
        tags: "pending",
        invoke: __spreadValues({
          src: "autoSignIn"
        }, handleAutoSignInResponse)
      },
      fetchUserAttributes: {
        invoke: __spreadValues({
          src: "fetchUserAttributes"
        }, handleFetchUserAttributesResponse2)
      },
      federatedSignIn: getFederatedSignInState("signUp"),
      resetPassword: {
        invoke: __spreadValues({
          src: "resetPassword"
        }, handleResetPasswordResponse)
      },
      resendSignUpCode: {
        tags: "pending",
        entry: "sendUpdate",
        exit: "sendUpdate",
        invoke: {
          src: "resendSignUpCode",
          onDone: {
            actions: ["setCodeDeliveryDetails", "sendUpdate"],
            target: "#signUpActor.confirmSignUp"
          },
          onError: [{
            cond: "isUserAlreadyConfirmed",
            target: "#signUpActor.resolved"
          }, {
            actions: ["setRemoteError", "sendUpdate"]
          }]
        }
      },
      signUp: {
        type: "parallel",
        exit: "clearTouched",
        on: {
          FEDERATED_SIGN_IN: {
            target: "federatedSignIn"
          }
        },
        states: {
          validation: {
            initial: "pending",
            states: {
              pending: {
                invoke: {
                  src: "validateSignUp",
                  onDone: {
                    actions: "clearValidationError",
                    target: "valid"
                  },
                  onError: {
                    actions: "setFieldErrors",
                    target: "invalid"
                  }
                }
              },
              valid: {
                entry: "sendUpdate"
              },
              invalid: {
                entry: "sendUpdate"
              }
            },
            on: {
              BLUR: {
                actions: "handleBlur",
                target: ".pending"
              },
              CHANGE: {
                actions: "handleInput",
                target: ".pending"
              }
            }
          },
          submission: {
            initial: "idle",
            states: {
              idle: {
                entry: ["sendUpdate"],
                on: {
                  SUBMIT: {
                    actions: "handleSubmit",
                    target: "validate"
                  }
                }
              },
              validate: {
                entry: "sendUpdate",
                invoke: {
                  src: "validateSignUp",
                  onDone: {
                    target: "handleSignUp",
                    actions: "clearValidationError"
                  },
                  onError: {
                    actions: "setFieldErrors",
                    target: "idle"
                  }
                }
              },
              handleSignUp: {
                tags: "pending",
                entry: ["setUsernameSignUp", "clearError"],
                exit: "sendUpdate",
                invoke: {
                  src: "handleSignUp",
                  onDone: [{
                    cond: "hasCompletedSignUp",
                    actions: "setNextSignUpStep",
                    target: "#signUpActor.resolved"
                  }, {
                    cond: "shouldAutoSignIn",
                    actions: "setNextSignUpStep",
                    target: "#signUpActor.autoSignIn"
                  }, {
                    actions: ["setCodeDeliveryDetails", "setNextSignUpStep"],
                    target: "#signUpActor.init"
                  }],
                  onError: {
                    actions: ["sendUpdate", "setRemoteError"],
                    target: "idle"
                  }
                }
              }
            }
          }
        }
      },
      confirmSignUp: {
        initial: "edit",
        entry: "sendUpdate",
        states: {
          edit: {
            on: {
              SUBMIT: {
                actions: "handleSubmit",
                target: "submit"
              },
              CHANGE: {
                actions: "handleInput"
              },
              BLUR: {
                actions: "handleBlur"
              },
              RESEND: "#signUpActor.resendSignUpCode"
            }
          },
          submit: {
            tags: "pending",
            entry: ["clearError", "sendUpdate"],
            invoke: {
              src: "confirmSignUp",
              onDone: [{
                cond: "shouldAutoSignIn",
                actions: ["setNextSignUpStep", "clearFormValues"],
                target: "#signUpActor.autoSignIn"
              }, {
                actions: "setNextSignUpStep",
                target: "#signUpActor.init"
              }],
              onError: {
                actions: ["setRemoteError", "sendUpdate"],
                target: "edit"
              }
            }
          }
        }
      },
      resolved: {
        type: "final",
        data: (context) => ({
          challengeName: context.challengeName,
          missingAttributes: context.missingAttributes,
          remoteError: context.remoteError,
          step: context.step,
          totpSecretCode: context.totpSecretCode,
          username: context.username,
          unverifiedUserAttributes: context.unverifiedUserAttributes,
          allowedMfaTypes: context.allowedMfaTypes
        })
      }
    }
  }, {
    // sendUpdate is a HOC
    actions: __spreadProps(__spreadValues({}, ACTIONS), {
      sendUpdate: sendUpdate2()
    }),
    guards: GUARDS,
    services: {
      autoSignIn() {
        return autoSignIn();
      },
      fetchUserAttributes() {
        return __async(this, null, function* () {
          return fetchUserAttributes();
        });
      },
      confirmSignUp({
        formValues,
        username
      }) {
        const {
          confirmation_code: confirmationCode
        } = formValues;
        const input2 = {
          username,
          confirmationCode
        };
        return services.handleConfirmSignUp(input2);
      },
      resendSignUpCode({
        username
      }) {
        return services.handleResendSignUpCode({
          username
        });
      },
      signInWithRedirect(_, {
        data
      }) {
        return signInWithRedirect(data);
      },
      handleSignUp(context) {
        const {
          formValues,
          loginMechanisms,
          username
        } = context;
        const loginMechanism = loginMechanisms[0];
        const input2 = getSignUpInput(username, formValues, loginMechanism);
        return services.handleSignUp(input2);
      },
      validateSignUp(context) {
        return __async(this, null, function* () {
          return runValidators(context.formValues, context.touched, context.passwordSettings, [
            // Validation of password
            services.validateFormPassword,
            // Validation for default form fields
            services.validateConfirmPassword,
            services.validatePreferredUsername,
            // Validation for any custom Sign Up fields
            services.validateCustomSignUp
          ]);
        });
      }
    }
  });
}

// node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/signOut.mjs
var signOutActor = () => {
  return createMachine({
    initial: "pending",
    id: "signOutActor",
    predictableActionArguments: true,
    states: {
      pending: {
        tags: "pending",
        invoke: {
          src: "signOut",
          onDone: "resolved",
          onError: "rejected"
        }
      },
      resolved: {
        type: "final"
      },
      rejected: {
        type: "final"
      }
    }
  }, {
    services: {
      signOut: () => signOut()
    }
  });
};

// node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/actors/verifyUserAttributes.mjs
function verifyUserAttributesActor() {
  return createMachine({
    id: "verifyUserAttributesActor",
    initial: "selectUserAttributes",
    predictableActionArguments: true,
    states: {
      selectUserAttributes: {
        initial: "edit",
        exit: ["clearError", "clearTouched", "sendUpdate"],
        states: {
          edit: {
            entry: "sendUpdate",
            on: {
              SUBMIT: {
                actions: "handleSubmit",
                target: "submit"
              },
              SKIP: {
                target: "#verifyUserAttributesActor.resolved"
              },
              CHANGE: {
                actions: "handleInput"
              }
            }
          },
          submit: {
            tags: "pending",
            entry: ["clearError", "sendUpdate"],
            invoke: {
              src: "sendUserAttributeVerificationCode",
              onDone: {
                actions: ["setSelectedUserAttribute", "setCodeDeliveryDetails"],
                target: "#verifyUserAttributesActor.confirmVerifyUserAttribute"
              },
              onError: {
                actions: "setRemoteError",
                target: "edit"
              }
            }
          }
        }
      },
      confirmVerifyUserAttribute: {
        initial: "edit",
        exit: ["clearError", "clearFormValues", "clearTouched"],
        states: {
          edit: {
            entry: "sendUpdate",
            on: {
              SUBMIT: {
                actions: "handleSubmit",
                target: "submit"
              },
              SKIP: "#verifyUserAttributesActor.resolved",
              CHANGE: {
                actions: "handleInput"
              }
            }
          },
          submit: {
            tags: "pending",
            entry: ["clearError", "sendUpdate"],
            invoke: {
              src: "confirmVerifyUserAttribute",
              onDone: {
                actions: ["setConfirmAttributeCompleteStep", "clearSelectedUserAttribute"],
                target: "#verifyUserAttributesActor.resolved"
              },
              onError: {
                actions: "setRemoteError",
                target: "edit"
              }
            }
          }
        }
      },
      resolved: {
        type: "final",
        data: ({
          step
        }) => ({
          step
        })
      }
    }
  }, {
    // sendUpdate is a HOC
    actions: __spreadProps(__spreadValues({}, ACTIONS), {
      sendUpdate: sendUpdate2()
    }),
    services: {
      sendUserAttributeVerificationCode({
        formValues: {
          unverifiedAttr
        }
      }) {
        const input2 = {
          userAttributeKey: unverifiedAttr
        };
        return sendUserAttributeVerificationCode(input2);
      },
      confirmVerifyUserAttribute(_0) {
        return __async(this, arguments, function* ({
          formValues: {
            confirmation_code: confirmationCode
          },
          selectedUserAttribute
        }) {
          const input2 = {
            confirmationCode,
            userAttributeKey: selectedUserAttribute
          };
          return confirmUserAttribute(input2);
        });
      },
      validateFields(context) {
        return __async(this, null, function* () {
          return runValidators(context.formValues, context.touched, context.passwordSettings, [defaultServices.validateFormPassword, defaultServices.validateConfirmPassword]);
        });
      }
    }
  });
}

// node_modules/@aws-amplify/ui/dist/esm/machines/authenticator/index.mjs
var getActorContext2 = (context, defaultStep) => __spreadProps(__spreadValues({}, context.actorDoneData), {
  step: context?.actorDoneData?.step ?? defaultStep,
  // initialize empty objects on actor start
  formValues: {},
  touched: {},
  validationError: {},
  // values included on `context.config` that should be available in actors
  formFields: context.config?.formFields,
  loginMechanisms: context.config?.loginMechanisms,
  passwordSettings: context.config?.passwordSettings,
  signUpAttributes: context.config?.signUpAttributes,
  socialProviders: context.config?.socialProviders
});
var {
  choose: choose3,
  stop: stop3
} = actions_exports;
var stopActor = (machineId) => stop3(machineId);
var LEGACY_WAIT_CONFIG = {
  on: {
    INIT: {
      actions: "configure",
      target: "getConfig"
    },
    SIGN_OUT: "#authenticator.signOut"
  }
};
var NEXT_WAIT_CONFIG = {
  always: {
    actions: "configure",
    target: "getConfig"
  }
};
function createAuthenticatorMachine(options) {
  const _a2 = options ?? {}, {
    useNextWaitConfig
  } = _a2, overrideConfigServices = __objRest(_a2, [
    "useNextWaitConfig"
  ]);
  const initConfig = useNextWaitConfig ? NEXT_WAIT_CONFIG : LEGACY_WAIT_CONFIG;
  return createMachine({
    id: "authenticator",
    initial: "idle",
    context: {
      user: void 0,
      config: {},
      services: defaultServices,
      actorRef: void 0,
      hasSetup: false
    },
    predictableActionArguments: true,
    states: {
      // See: https://xstate.js.org/docs/guides/communication.html#invoking-promises
      idle: {
        invoke: {
          src: "handleGetCurrentUser",
          onDone: {
            actions: "setUser",
            target: "setup"
          },
          onError: {
            target: "setup"
          }
        }
      },
      setup: {
        initial: "initConfig",
        states: {
          initConfig,
          getConfig: {
            invoke: {
              src: "getAmplifyConfig",
              onDone: [{
                actions: ["applyAmplifyConfig", "setHasSetup"],
                cond: "hasUser",
                target: "#authenticator.authenticated"
              }, {
                actions: ["applyAmplifyConfig", "setHasSetup"],
                target: "goToInitialState"
              }]
            }
          },
          goToInitialState: {
            always: [{
              cond: "isInitialStateSignUp",
              target: "#authenticator.signUpActor"
            }, {
              cond: "isInitialStateResetPassword",
              target: "#authenticator.forgotPasswordActor"
            }, {
              target: "#authenticator.signInActor"
            }]
          }
        }
      },
      getCurrentUser: {
        invoke: {
          src: "handleGetCurrentUser",
          onDone: {
            actions: "setUser",
            target: "#authenticator.authenticated"
          },
          onError: {
            target: "#authenticator.setup"
          }
        }
      },
      signInActor: {
        initial: "spawnActor",
        states: {
          spawnActor: {
            always: {
              actions: "spawnSignInActor",
              target: "runActor"
            }
          },
          runActor: {
            entry: "clearActorDoneData",
            exit: stopActor("signInActor")
          }
        },
        on: {
          FORGOT_PASSWORD: "forgotPasswordActor",
          SIGN_IN: "signInActor",
          SIGN_UP: "signUpActor",
          "done.invoke.signInActor": [{
            cond: "hasCompletedAttributeConfirmation",
            target: "#authenticator.getCurrentUser"
          }, {
            cond: "isShouldConfirmUserAttributeStep",
            actions: "setActorDoneData",
            target: "#authenticator.verifyUserAttributesActor"
          }, {
            cond: "isResetPasswordStep",
            actions: "setActorDoneData",
            target: "#authenticator.forgotPasswordActor"
          }, {
            cond: "isConfirmSignUpStep",
            actions: "setActorDoneData",
            target: "#authenticator.signUpActor"
          }]
        }
      },
      signUpActor: {
        initial: "spawnActor",
        states: {
          spawnActor: {
            always: {
              actions: "spawnSignUpActor",
              target: "runActor"
            }
          },
          runActor: {
            entry: "clearActorDoneData",
            exit: stopActor("signUpActor")
          }
        },
        on: {
          SIGN_IN: "signInActor",
          "done.invoke.signUpActor": [{
            cond: "hasCompletedAttributeConfirmation",
            target: "#authenticator.getCurrentUser"
          }, {
            cond: "isShouldConfirmUserAttributeStep",
            actions: "setActorDoneData",
            target: "#authenticator.verifyUserAttributesActor"
          }, {
            cond: "isConfirmUserAttributeStep",
            target: "#authenticator.verifyUserAttributesActor"
          }, {
            actions: "setActorDoneData",
            target: "#authenticator.signInActor"
          }]
        }
      },
      forgotPasswordActor: {
        initial: "spawnActor",
        states: {
          spawnActor: {
            always: {
              actions: "spawnForgotPasswordActor",
              target: "runActor"
            }
          },
          runActor: {
            entry: "clearActorDoneData",
            exit: stopActor("forgotPasswordActor")
          }
        },
        on: {
          SIGN_IN: "signInActor",
          "done.invoke.forgotPasswordActor": [{
            target: "#authenticator.signInActor"
          }]
        }
      },
      verifyUserAttributesActor: {
        initial: "spawnActor",
        states: {
          spawnActor: {
            always: {
              actions: "spawnVerifyUserAttributesActor",
              target: "runActor"
            }
          },
          runActor: {
            entry: "clearActorDoneData",
            exit: stopActor("verifyUserAttributesActor")
          }
        },
        on: {
          "done.invoke.verifyUserAttributesActor": [{
            actions: "setActorDoneData",
            target: "#authenticator.getCurrentUser"
          }]
        }
      },
      authenticated: {
        initial: "idle",
        states: {
          idle: {
            on: {
              TOKEN_REFRESH: "refreshUser"
            }
          },
          refreshUser: {
            invoke: {
              src: "#authenticator.getCurrentUser",
              onDone: {
                actions: "setUser",
                target: "idle"
              },
              onError: {
                target: "#authenticator.signOut"
              }
            }
          }
        },
        on: {
          SIGN_OUT: "signOut"
        }
      },
      signOut: {
        initial: "spawnActor",
        states: {
          spawnActor: {
            always: {
              actions: "spawnSignOutActor",
              target: "runActor"
            }
          },
          runActor: {
            entry: "clearActorDoneData",
            exit: stopActor("signOutActor")
          }
        },
        on: {
          "done.invoke.signOutActor": {
            actions: "clearUser",
            target: "setup.getConfig"
          }
        }
      }
    },
    on: {
      SIGN_IN_WITH_REDIRECT: {
        target: "#authenticator.getCurrentUser"
      },
      CHANGE: {
        actions: "forwardToActor"
      },
      BLUR: {
        actions: "forwardToActor"
      },
      SUBMIT: {
        actions: "forwardToActor"
      },
      FEDERATED_SIGN_IN: {
        actions: "forwardToActor"
      },
      RESEND: {
        actions: "forwardToActor"
      },
      SIGN_IN: {
        actions: "forwardToActor"
      },
      SKIP: {
        actions: "forwardToActor"
      }
    }
  }, {
    actions: __spreadProps(__spreadValues({}, ACTIONS), {
      forwardToActor: choose3([{
        cond: "hasActor",
        actions: forwardTo2(({
          actorRef
        }) => actorRef)
      }]),
      setActorDoneData: assign3({
        actorDoneData: (_, event2) => ({
          challengeName: event2.data.challengeName,
          codeDeliveryDetails: event2.data.codeDeliveryDetails,
          missingAttributes: event2.data.missingAttributes,
          remoteError: event2.data.remoteError,
          username: event2.data.username,
          step: event2.data.step,
          totpSecretCode: event2.data.totpSecretCode,
          unverifiedUserAttributes: event2.data.unverifiedUserAttributes,
          allowedMfaTypes: event2.data.allowedMfaTypes
        })
      }),
      applyAmplifyConfig: assign3({
        config(context, {
          data: cliConfig
        }) {
          const {
            loginMechanisms = cliConfig.loginMechanisms ?? [],
            signUpAttributes = cliConfig.signUpAttributes ?? [],
            socialProviders = cliConfig.socialProviders ?? [],
            initialState,
            formFields: _formFields,
            passwordSettings = cliConfig.passwordFormat ?? {}
          } = context.config;
          if (loginMechanisms.length === 0) {
            loginMechanisms.push("username");
          }
          const formFields = convertFormFields(_formFields) ?? {};
          return {
            formFields,
            initialState,
            loginMechanisms,
            passwordSettings,
            signUpAttributes,
            socialProviders
          };
        }
      }),
      spawnSignInActor: assign3({
        actorRef: (context, _) => {
          const {
            services
          } = context;
          const actor = signInActor({
            services
          }).withContext(getActorContext2(context, "SIGN_IN"));
          return spawn(actor, {
            name: "signInActor"
          });
        }
      }),
      spawnSignUpActor: assign3({
        actorRef: (context, _) => {
          const {
            services
          } = context;
          const actor = signUpActor({
            services
          }).withContext(getActorContext2(context, "SIGN_UP"));
          return spawn(actor, {
            name: "signUpActor"
          });
        }
      }),
      spawnForgotPasswordActor: assign3({
        actorRef: (context, _) => {
          const {
            services
          } = context;
          const actor = forgotPasswordActor({
            services
          }).withContext(getActorContext2(context, "FORGOT_PASSWORD"));
          return spawn(actor, {
            name: "forgotPasswordActor"
          });
        }
      }),
      spawnVerifyUserAttributesActor: assign3({
        actorRef: (context) => {
          const actor = verifyUserAttributesActor().withContext(getActorContext2(context));
          return spawn(actor, {
            name: "verifyUserAttributesActor"
          });
        }
      }),
      spawnSignOutActor: assign3({
        actorRef: (context) => {
          const actor = signOutActor().withContext({
            user: context?.user
          });
          return spawn(actor, {
            name: "signOutActor"
          });
        }
      }),
      configure: assign3((_, event2) => {
        const _a3 = !isEmptyObject(overrideConfigServices) ? overrideConfigServices : event2.data ?? {}, {
          services: customServices
        } = _a3, config = __objRest(_a3, [
          "services"
        ]);
        return {
          services: __spreadValues(__spreadValues({}, defaultServices), customServices),
          config
        };
      }),
      setHasSetup: assign3({
        hasSetup: true
      })
    }),
    guards: __spreadProps(__spreadValues({}, GUARDS), {
      hasActor: ({
        actorRef
      }) => !!actorRef,
      isInitialStateSignUp: ({
        config
      }) => config.initialState === "signUp",
      isInitialStateResetPassword: ({
        config
      }) => config.initialState === "forgotPassword",
      shouldSetup: ({
        hasSetup
      }) => !hasSetup,
      hasUser: ({
        user
      }) => {
        return !!user;
      }
    }),
    services: {
      getAmplifyConfig: ({
        services
      }) => services.getAmplifyConfig(),
      handleGetCurrentUser: ({
        services
      }) => services.getCurrentUser()
    }
  });
}
function convertFormFields(formFields) {
  if (formFields) {
    Object.keys(formFields).forEach((component) => {
      Object.keys(formFields[component]).forEach((inputName) => {
        let ff = formFields[component][inputName];
        ff.required = ff.isRequired;
      });
    });
  }
  return formFields;
}

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/borderWidths.mjs
var borderWidths = {
  small: {
    value: "1px"
  },
  medium: {
    value: "2px"
  },
  large: {
    value: "3px"
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/colors.mjs
var colors = {
  red: {
    10: {
      value: "hsl(0, 75%, 95%)"
    },
    20: {
      value: "hsl(0, 75%, 85%)"
    },
    40: {
      value: "hsl(0, 75%, 75%)"
    },
    60: {
      value: "hsl(0, 50%, 50%)"
    },
    80: {
      value: "hsl(0, 95%, 30%)"
    },
    90: {
      value: "hsl(0, 100%, 20%)"
    },
    100: {
      value: "hsl(0, 100%, 15%)"
    }
  },
  orange: {
    10: {
      value: "hsl(30, 75%, 95%)"
    },
    20: {
      value: "hsl(30, 75%, 85%)"
    },
    40: {
      value: "hsl(30, 75%, 75%)"
    },
    60: {
      value: "hsl(30, 50%, 50%)"
    },
    80: {
      value: "hsl(30, 95%, 30%)"
    },
    90: {
      value: "hsl(30, 100%, 20%)"
    },
    100: {
      value: "hsl(30, 100%, 15%)"
    }
  },
  yellow: {
    10: {
      value: "hsl(60, 75%, 95%)"
    },
    20: {
      value: "hsl(60, 75%, 85%)"
    },
    40: {
      value: "hsl(60, 75%, 75%)"
    },
    60: {
      value: "hsl(60, 50%, 50%)"
    },
    80: {
      value: "hsl(60, 95%, 30%)"
    },
    90: {
      value: "hsl(60, 100%, 20%)"
    },
    100: {
      value: "hsl(60, 100%, 15%)"
    }
  },
  green: {
    10: {
      value: "hsl(130, 60%, 95%)"
    },
    20: {
      value: "hsl(130, 60%, 90%)"
    },
    40: {
      value: "hsl(130, 44%, 63%)"
    },
    60: {
      value: "hsl(130, 43%, 46%)"
    },
    80: {
      value: "hsl(130, 33%, 37%)"
    },
    90: {
      value: "hsl(130, 27%, 29%)"
    },
    100: {
      value: "hsl(130, 22%, 23%)"
    }
  },
  teal: {
    10: {
      value: "hsl(190, 75%, 95%)"
    },
    20: {
      value: "hsl(190, 75%, 85%)"
    },
    40: {
      value: "hsl(190, 70%, 70%)"
    },
    60: {
      value: "hsl(190, 50%, 50%)"
    },
    80: {
      value: "hsl(190, 95%, 30%)"
    },
    90: {
      value: "hsl(190, 100%, 20%)"
    },
    100: {
      value: "hsl(190, 100%, 15%)"
    }
  },
  blue: {
    10: {
      value: "hsl(220, 95%, 95%)"
    },
    20: {
      value: "hsl(220, 85%, 85%)"
    },
    40: {
      value: "hsl(220, 70%, 70%)"
    },
    60: {
      value: "hsl(220, 50%, 50%)"
    },
    80: {
      value: "hsl(220, 95%, 30%)"
    },
    90: {
      value: "hsl(220, 100%, 20%)"
    },
    100: {
      value: "hsl(220, 100%, 15%)"
    }
  },
  purple: {
    10: {
      value: "hsl(300, 95%, 95%)"
    },
    20: {
      value: "hsl(300, 85%, 85%)"
    },
    40: {
      value: "hsl(300, 70%, 70%)"
    },
    60: {
      value: "hsl(300, 50%, 50%)"
    },
    80: {
      value: "hsl(300, 95%, 30%)"
    },
    90: {
      value: "hsl(300, 100%, 20%)"
    },
    100: {
      value: "hsl(300, 100%, 15%)"
    }
  },
  pink: {
    10: {
      value: "hsl(340, 95%, 95%)"
    },
    20: {
      value: "hsl(340, 90%, 85%)"
    },
    40: {
      value: "hsl(340, 70%, 70%)"
    },
    60: {
      value: "hsl(340, 50%, 50%)"
    },
    80: {
      value: "hsl(340, 95%, 30%)"
    },
    90: {
      value: "hsl(340, 100%, 20%)"
    },
    100: {
      value: "hsl(340, 100%, 15%)"
    }
  },
  neutral: {
    10: {
      value: "hsl(210, 5%, 98%)"
    },
    20: {
      value: "hsl(210, 5%, 94%)"
    },
    40: {
      value: "hsl(210, 5%, 87%)"
    },
    60: {
      value: "hsl(210, 10%, 58%)"
    },
    80: {
      value: "hsl(210, 10%, 40%)"
    },
    90: {
      value: "hsl(210, 25%, 25%)"
    },
    100: {
      value: "hsl(210, 50%, 10%)"
    }
  },
  primary: {
    10: {
      value: "{colors.teal.10.value}"
    },
    20: {
      value: "{colors.teal.20.value}"
    },
    40: {
      value: "{colors.teal.40.value}"
    },
    60: {
      value: "{colors.teal.60.value}"
    },
    80: {
      value: "{colors.teal.80.value}"
    },
    90: {
      value: "{colors.teal.90.value}"
    },
    100: {
      value: "{colors.teal.100.value}"
    }
  },
  secondary: {
    10: {
      value: "{colors.purple.10.value}"
    },
    20: {
      value: "{colors.purple.20.value}"
    },
    40: {
      value: "{colors.purple.40.value}"
    },
    60: {
      value: "{colors.purple.60.value}"
    },
    80: {
      value: "{colors.purple.80.value}"
    },
    90: {
      value: "{colors.purple.90.value}"
    },
    100: {
      value: "{colors.purple.100.value}"
    }
  },
  font: {
    primary: {
      value: "{colors.neutral.100.value}"
    },
    secondary: {
      value: "{colors.neutral.90.value}"
    },
    tertiary: {
      value: "{colors.neutral.80.value}"
    },
    disabled: {
      value: "{colors.neutral.60.value}"
    },
    inverse: {
      value: "{colors.white.value}"
    },
    interactive: {
      value: "{colors.primary.80.value}"
    },
    // Hover and Focus colors are intentionally different colors.
    // This allows users to distinguish between the current keyboard focus
    // and the location of their pointer
    hover: {
      value: "{colors.primary.90.value}"
    },
    // Focus color is set to 100 to ensure enough contrast for accessibility
    focus: {
      value: "{colors.primary.100.value}"
    },
    active: {
      value: "{colors.primary.100.value}"
    },
    info: {
      value: "{colors.blue.90.value}"
    },
    warning: {
      value: "{colors.orange.90.value}"
    },
    error: {
      value: "{colors.red.90.value}"
    },
    success: {
      value: "{colors.green.90.value}"
    }
  },
  background: {
    primary: {
      value: "{colors.white.value}"
    },
    secondary: {
      value: "{colors.neutral.10.value}"
    },
    tertiary: {
      value: "{colors.neutral.20.value}"
    },
    quaternary: {
      value: "{colors.neutral.60.value}"
    },
    disabled: {
      value: "{colors.background.tertiary.value}"
    },
    info: {
      value: "{colors.blue.10.value}"
    },
    warning: {
      value: "{colors.orange.10.value}"
    },
    error: {
      value: "{colors.red.10.value}"
    },
    success: {
      value: "{colors.green.10.value}"
    }
  },
  border: {
    primary: {
      value: "{colors.neutral.60.value}"
    },
    secondary: {
      value: "{colors.neutral.40.value}"
    },
    tertiary: {
      value: "{colors.neutral.20.value}"
    },
    disabled: {
      value: "{colors.border.tertiary.value}"
    },
    pressed: {
      value: "{colors.primary.100.value}"
    },
    // Focus color is set to 100 to ensure enough contrast for accessibility
    focus: {
      value: "{colors.primary.100.value}"
    },
    error: {
      value: "{colors.red.80.value}"
    },
    info: {
      value: "{colors.blue.80.value}"
    },
    success: {
      value: "{colors.green.80.value}"
    },
    warning: {
      value: "{colors.orange.80.value}"
    }
  },
  shadow: {
    primary: {
      value: "hsla(210, 50%, 10%, 0.25)"
    },
    secondary: {
      value: "hsla(210, 50%, 10%, 0.15)"
    },
    tertiary: {
      value: "hsla(210, 50%, 10%, 0.05)"
    }
  },
  overlay: {
    5: {
      value: "hsla(0, 0%, 0%, 0.05)"
    },
    10: {
      value: "hsla(0, 0%, 0%, 0.1)"
    },
    20: {
      value: "hsla(0, 0%, 0%, 0.2)"
    },
    30: {
      value: "hsla(0, 0%, 0%, 0.3)"
    },
    40: {
      value: "hsla(0, 0%, 0%, 0.4)"
    },
    50: {
      value: "hsla(0, 0%, 0%, 0.5)"
    },
    60: {
      value: "hsla(0, 0%, 0%, 0.6)"
    },
    70: {
      value: "hsla(0, 0%, 0%, 0.7)"
    },
    80: {
      value: "hsla(0, 0%, 0%, 0.8)"
    },
    90: {
      value: "hsla(0, 0%, 0%, 0.9)"
    }
  },
  black: {
    value: "hsl(0, 0%, 0%)"
  },
  white: {
    value: "hsl(0, 0%, 100%)"
  },
  transparent: {
    value: "transparent"
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/alert.mjs
var alert = {
  // Default styles
  alignItems: {
    value: "center"
  },
  justifyContent: {
    value: "space-between"
  },
  color: {
    value: "{colors.font.primary.value}"
  },
  backgroundColor: {
    value: "{colors.background.tertiary.value}"
  },
  paddingBlock: {
    value: "{space.small.value}"
  },
  paddingInline: {
    value: "{space.medium.value}"
  },
  icon: {
    size: {
      value: "{fontSizes.xl.value}"
    }
  },
  heading: {
    fontSize: {
      value: "{fontSizes.medium.value}"
    },
    fontWeight: {
      value: "{fontWeights.bold.value}"
    }
  },
  // Variations
  info: {
    color: {
      value: "{colors.font.info.value}"
    },
    backgroundColor: {
      value: "{colors.background.info.value}"
    }
  },
  error: {
    color: {
      value: "{colors.font.error.value}"
    },
    backgroundColor: {
      value: "{colors.background.error.value}"
    }
  },
  warning: {
    color: {
      value: "{colors.font.warning.value}"
    },
    backgroundColor: {
      value: "{colors.background.warning.value}"
    }
  },
  success: {
    color: {
      value: "{colors.font.success.value}"
    },
    backgroundColor: {
      value: "{colors.background.success.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/aiConversation.mjs
var aiConversation = {
  message: {
    backgroundColor: {
      value: "{colors.background.secondary.value}"
    },
    borderRadius: {
      value: "{radii.large.value}"
    },
    gap: {
      value: "{space.small.value}"
    },
    paddingBlock: {
      value: "{space.small.value}"
    },
    paddingInline: {
      value: "{space.small.value}"
    },
    user: {
      backgroundColor: {
        value: "{colors.background.secondary.value}"
      }
    },
    assistant: {
      backgroundColor: {
        value: "{colors.primary.10.value}"
      }
    },
    sender: {
      gap: {
        value: "{space.small.value}"
      },
      username: {
        color: {
          value: "{colors.font.primary.value}"
        },
        fontSize: {
          value: "inherit"
        },
        fontWeight: {
          value: "{fontWeights.bold.value}"
        }
      },
      timestamp: {
        color: {
          value: "{colors.font.tertiary.value}"
        },
        fontSize: {
          value: "inherit"
        },
        fontWeight: {
          value: "inherit"
        }
      }
    },
    body: {
      gap: {
        value: "{space.xs.value}"
      }
    },
    actions: {
      gap: {
        value: "{space.xs.value}"
      }
    }
  },
  form: {
    gap: {
      value: "{space.small.value}"
    },
    padding: {
      value: "{space.small.value}"
    }
  },
  attachment: {
    borderColor: {
      value: "{colors.border.secondary.value}"
    },
    borderWidth: {
      value: "{borderWidths.small.value}"
    },
    borderRadius: {
      value: "{radii.small.value}"
    },
    fontSize: {
      value: "{fontSizes.small.value}"
    },
    paddingBlock: {
      value: "{space.xxxs.value}"
    },
    paddingInline: {
      value: "{space.xs.value}"
    },
    gap: {
      value: "{space.xs.value}"
    },
    list: {
      padding: {
        value: "{space.xs.value}"
      },
      paddingBlockStart: {
        value: "0"
      },
      gap: {
        value: "{space.xxs.value}"
      }
    },
    name: {
      color: {
        value: "{colors.font.primary.value}"
      },
      fontSize: {
        value: "{fontSizes.small.value}"
      },
      fontWeight: {
        value: "{fontWeights.normal.value}"
      }
    },
    size: {
      color: {
        value: "{colors.font.tertiary.value}"
      },
      fontSize: {
        value: "{fontSizes.small.value}"
      },
      fontWeight: {
        value: "{fontWeights.normal.value}"
      }
    },
    remove: {
      padding: {
        value: "{space.xxs.value}"
      }
    },
    image: {
      width: {
        value: "{fontSizes.medium.value}"
      },
      height: {
        value: "{fontSizes.medium.value}"
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/autocomplete.mjs
var autocomplete = {
  menu: {
    width: {
      value: "100%"
    },
    marginBlockStart: {
      value: "{space.xxxs}"
    },
    backgroundColor: {
      value: "{colors.background.primary}"
    },
    borderColor: {
      value: "{colors.border.primary}"
    },
    borderWidth: {
      value: "{borderWidths.small}"
    },
    borderStyle: {
      value: "solid"
    },
    borderRadius: {
      value: "{radii.small}"
    },
    options: {
      display: {
        value: "flex"
      },
      flexDirection: {
        value: "column"
      },
      maxHeight: {
        value: "300px"
      }
    },
    option: {
      backgroundColor: {
        value: "{colors.background.primary}"
      },
      color: {
        value: "currentcolor"
      },
      cursor: {
        value: "pointer"
      },
      transitionDuration: {
        value: "{time.short}"
      },
      transitionProperty: {
        value: "background-color, color"
      },
      transitionTimingFunction: {
        value: "ease"
      },
      _active: {
        backgroundColor: {
          value: "{colors.primary.80}"
        },
        color: {
          value: "{colors.white}"
        }
      }
    },
    _empty: {
      display: {
        value: "flex"
      }
    },
    _loading: {
      alignItems: {
        value: "center"
      },
      display: {
        value: "flex"
      },
      gap: {
        value: "{space.xxxs}"
      }
    },
    spaceShared: {
      paddingBlock: {
        value: "{space.xs}"
      },
      paddingInline: {
        value: "{space.small}"
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/authenticator.mjs
var authenticator = {
  maxWidth: {
    value: "60rem"
  },
  modal: {
    width: {
      value: "{space.relative.full}"
    },
    height: {
      value: "{space.relative.full}"
    },
    backgroundColor: {
      value: "{colors.overlay.50.value}"
    },
    top: {
      value: "{space.zero}"
    },
    left: {
      value: "{space.zero}"
    }
  },
  container: {
    widthMax: {
      value: "30rem"
    }
  },
  router: {
    borderWidth: {
      value: "{borderWidths.small.value}"
    },
    borderStyle: {
      value: "solid"
    },
    borderColor: {
      value: "{colors.border.primary.value}"
    },
    backgroundColor: {
      value: "{colors.background.primary.value}"
    },
    boxShadow: {
      value: "{shadows.medium.value}"
    }
  },
  footer: {
    paddingBottom: {
      value: "{space.medium.value}"
    }
  },
  form: {
    padding: {
      value: "{space.xl.value}"
    }
  },
  state: {
    inactive: {
      backgroundColor: {
        value: "{colors.background.secondary.value}"
      }
    }
  },
  orContainer: {
    color: {
      value: "{colors.neutral.80.value}"
    },
    orLine: {
      backgroundColor: {
        value: "{colors.background.primary.value}"
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/avatar.mjs
var avatar = {
  // Default styles
  color: {
    value: "{colors.font.tertiary.value}"
  },
  lineHeight: {
    value: 1
  },
  fontWeight: {
    value: "{fontWeights.semibold.value}"
  },
  fontSize: {
    value: "{fontSizes.small.value}"
  },
  textAlign: {
    value: "center"
  },
  width: {
    value: "{fontSizes.xxl.value}"
  },
  height: {
    value: "{fontSizes.xxl.value}"
  },
  backgroundColor: {
    value: "{colors.background.tertiary}"
  },
  borderRadius: {
    value: "100%"
  },
  borderColor: {
    value: "{colors.border.primary.value}"
  },
  borderWidth: {
    value: "{borderWidths.medium.value}"
  },
  // Color Theme Variations
  info: {
    color: {
      value: "{colors.font.info.value}"
    },
    backgroundColor: {
      value: "{colors.background.info.value}"
    },
    borderColor: {
      value: "{colors.border.info.value}"
    }
  },
  warning: {
    color: {
      value: "{colors.font.warning.value}"
    },
    backgroundColor: {
      value: "{colors.background.warning.value}"
    },
    borderColor: {
      value: "{colors.border.warning.value}"
    }
  },
  success: {
    color: {
      value: "{colors.font.success.value}"
    },
    backgroundColor: {
      value: "{colors.background.success.value}"
    },
    borderColor: {
      value: "{colors.border.success.value}"
    }
  },
  error: {
    color: {
      value: "{colors.font.error.value}"
    },
    backgroundColor: {
      value: "{colors.background.error.value}"
    },
    borderColor: {
      value: "{colors.border.error.value}"
    }
  },
  // Sizes
  small: {
    fontSize: {
      value: "{fontSizes.xs.value}"
    },
    width: {
      value: "{fontSizes.xl.value}"
    },
    height: {
      value: "{fontSizes.xl.value}"
    }
  },
  // medium is the default size
  large: {
    fontSize: {
      value: "{fontSizes.medium.value}"
    },
    width: {
      value: "{fontSizes.xxxl.value}"
    },
    height: {
      value: "{fontSizes.xxxl.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/badge.mjs
var badge = {
  // Default styles
  color: {
    value: "{colors.font.primary.value}"
  },
  lineHeight: {
    value: 1
  },
  fontWeight: {
    value: "{fontWeights.semibold.value}"
  },
  fontSize: {
    value: "{fontSizes.small.value}"
  },
  textAlign: {
    value: "center"
  },
  paddingVertical: {
    value: "{space.xs.value}"
  },
  paddingHorizontal: {
    value: "{space.small.value}"
  },
  backgroundColor: {
    value: "{colors.background.tertiary.value}"
  },
  // An arbitrarily large value to ensure that the left and right sides of the badge are perfectly rounded for any size variation
  borderRadius: {
    value: "{radii.xl.value}"
  },
  // Variations
  info: {
    color: {
      value: "{colors.font.info.value}"
    },
    backgroundColor: {
      value: "{colors.background.info.value}"
    }
  },
  warning: {
    color: {
      value: "{colors.font.warning.value}"
    },
    backgroundColor: {
      value: "{colors.background.warning.value}"
    }
  },
  success: {
    color: {
      value: "{colors.font.success.value}"
    },
    backgroundColor: {
      value: "{colors.background.success.value}"
    }
  },
  error: {
    color: {
      value: "{colors.font.error.value}"
    },
    backgroundColor: {
      value: "{colors.background.error.value}"
    }
  },
  // Sizes
  small: {
    fontSize: {
      value: "{fontSizes.xs.value}"
    },
    paddingVertical: {
      value: "{space.xxs.value}"
    },
    paddingHorizontal: {
      value: "{space.xs.value}"
    }
  },
  // medium is the default size
  large: {
    fontSize: {
      value: "{fontSizes.medium.value}"
    },
    paddingVertical: {
      value: "{space.small.value}"
    },
    paddingHorizontal: {
      value: "{space.medium.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/breadcrumbs.mjs
var breadcrumbs = {
  flexDirection: {
    value: "row"
  },
  flexWrap: {
    value: "wrap"
  },
  gap: {
    value: "0"
  },
  color: {
    value: "{colors.font.tertiary}"
  },
  item: {
    flexDirection: {
      value: "row"
    },
    color: {
      value: "inherit"
    },
    fontSize: {
      value: "inherit"
    },
    alignItems: {
      value: "center"
    },
    lineHeight: {
      value: "1"
    }
  },
  separator: {
    color: {
      value: "inherit"
    },
    fontSize: {
      value: "inherit"
    },
    paddingInline: {
      value: "{space.xxs}"
    }
  },
  link: {
    color: {
      value: "{components.link.color}"
    },
    fontSize: {
      value: "inherit"
    },
    fontWeight: {
      value: "normal"
    },
    textDecoration: {
      value: "none"
    },
    paddingInline: {
      value: "{space.xs}"
    },
    paddingBlock: {
      value: "{space.xxs}"
    },
    current: {
      color: {
        value: "inherit"
      },
      fontSize: {
        value: "inherit"
      },
      fontWeight: {
        value: "normal"
      },
      textDecoration: {
        value: "none"
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/button.mjs
var button = {
  // shared styles
  fontWeight: {
    value: "{fontWeights.bold.value}"
  },
  transitionDuration: {
    value: "{components.fieldcontrol.transitionDuration.value}"
  },
  fontSize: {
    value: "{components.fieldcontrol.fontSize.value}"
  },
  lineHeight: {
    value: "{components.fieldcontrol.lineHeight.value}"
  },
  paddingBlockStart: {
    value: "{components.fieldcontrol.paddingBlockStart.value}"
  },
  paddingBlockEnd: {
    value: "{components.fieldcontrol.paddingBlockEnd.value}"
  },
  paddingInlineStart: {
    value: "{components.fieldcontrol.paddingInlineStart.value}"
  },
  paddingInlineEnd: {
    value: "{components.fieldcontrol.paddingInlineEnd.value}"
  },
  backgroundColor: {
    value: "transparent"
  },
  borderColor: {
    value: "{components.fieldcontrol.borderColor.value}"
  },
  borderWidth: {
    value: "{components.fieldcontrol.borderWidth.value}"
  },
  borderStyle: {
    value: "{components.fieldcontrol.borderStyle.value}"
  },
  borderRadius: {
    value: "{components.fieldcontrol.borderRadius.value}"
  },
  color: {
    value: "{colors.font.primary.value}"
  },
  _hover: {
    color: {
      value: "{colors.font.focus.value}"
    },
    backgroundColor: {
      value: "{colors.primary.10.value}"
    },
    borderColor: {
      value: "{colors.primary.60.value}"
    }
  },
  _focus: {
    color: {
      value: "{colors.font.focus.value}"
    },
    backgroundColor: {
      value: "{colors.primary.10.value}"
    },
    borderColor: {
      value: "{colors.border.focus.value}"
    },
    boxShadow: {
      value: "{components.fieldcontrol._focus.boxShadow.value}"
    }
  },
  _active: {
    color: {
      value: "{colors.font.active.value}"
    },
    backgroundColor: {
      value: "{colors.primary.20.value}"
    },
    borderColor: {
      value: "{colors.primary.100.value}"
    }
  },
  _loading: {
    color: {
      value: "{colors.font.disabled.value}"
    },
    backgroundColor: {
      value: "transparent"
    },
    borderColor: {
      value: "{colors.border.tertiary.value}"
    }
  },
  _disabled: {
    color: {
      value: "{colors.font.disabled.value}"
    },
    backgroundColor: {
      value: "transparent"
    },
    borderColor: {
      value: "{colors.border.tertiary.value}"
    }
  },
  // variations
  outlined: {
    info: {
      borderColor: {
        value: "{colors.blue.60.value}"
      },
      backgroundColor: {
        value: "transparent"
      },
      color: {
        value: "{colors.blue.100}"
      },
      _hover: {
        borderColor: {
          value: "{colors.blue.60.value}"
        },
        backgroundColor: {
          value: "{colors.blue.10.value}"
        },
        color: {
          value: "{colors.blue.100.value}"
        }
      },
      _focus: {
        borderColor: {
          value: "{colors.blue.100.value}"
        },
        backgroundColor: {
          value: "{colors.blue.10.value}"
        },
        color: {
          value: "{colors.blue.100.value}"
        },
        boxShadow: {
          value: "{components.fieldcontrol.info._focus.boxShadow.value}"
        }
      },
      _active: {
        borderColor: {
          value: "{colors.blue.100.value}"
        },
        backgroundColor: {
          value: "{colors.blue.20.value}"
        },
        color: {
          value: "{colors.blue.100.value}"
        }
      }
    },
    warning: {
      borderColor: {
        value: "{colors.orange.60.value}"
      },
      backgroundColor: {
        value: "transparent"
      },
      color: {
        value: "{colors.orange.100}"
      },
      _hover: {
        borderColor: {
          value: "{colors.orange.60.value}"
        },
        backgroundColor: {
          value: "{colors.orange.10.value}"
        },
        color: {
          value: "{colors.orange.100.value}"
        }
      },
      _focus: {
        borderColor: {
          value: "{colors.orange.100.value}"
        },
        backgroundColor: {
          value: "{colors.orange.10.value}"
        },
        color: {
          value: "{colors.orange.100.value}"
        },
        boxShadow: {
          value: "{components.fieldcontrol.warning._focus.boxShadow.value}"
        }
      },
      _active: {
        borderColor: {
          value: "{colors.orange.100.value}"
        },
        backgroundColor: {
          value: "{colors.orange.20.value}"
        },
        color: {
          value: "{colors.orange.100.value}"
        }
      }
    },
    success: {
      borderColor: {
        value: "{colors.green.60.value}"
      },
      backgroundColor: {
        value: "transparent"
      },
      color: {
        value: "{colors.green.100}"
      },
      _hover: {
        borderColor: {
          value: "{colors.green.60.value}"
        },
        backgroundColor: {
          value: "{colors.green.10.value}"
        },
        color: {
          value: "{colors.green.100.value}"
        }
      },
      _focus: {
        borderColor: {
          value: "{colors.green.100.value}"
        },
        backgroundColor: {
          value: "{colors.green.10.value}"
        },
        color: {
          value: "{colors.green.100.value}"
        },
        boxShadow: {
          value: "{components.fieldcontrol.success._focus.boxShadow.value}"
        }
      },
      _active: {
        borderColor: {
          value: "{colors.green.100.value}"
        },
        backgroundColor: {
          value: "{colors.green.20.value}"
        },
        color: {
          value: "{colors.green.100.value}"
        }
      }
    },
    error: {
      borderColor: {
        value: "{colors.red.80.value}"
      },
      backgroundColor: {
        value: "transparent"
      },
      color: {
        value: "{colors.red.100}"
      },
      _hover: {
        borderColor: {
          value: "{colors.red.80.value}"
        },
        backgroundColor: {
          value: "{colors.red.10.value}"
        },
        color: {
          value: "{colors.red.100.value}"
        }
      },
      _focus: {
        borderColor: {
          value: "{colors.red.100.value}"
        },
        backgroundColor: {
          value: "{colors.red.10.value}"
        },
        color: {
          value: "{colors.red.100.value}"
        },
        boxShadow: {
          value: "{components.fieldcontrol._error._focus.boxShadow.value}"
        }
      },
      _active: {
        borderColor: {
          value: "{colors.red.100.value}"
        },
        backgroundColor: {
          value: "{colors.red.20.value}"
        },
        color: {
          value: "{colors.red.100.value}"
        }
      }
    },
    overlay: {
      borderColor: {
        value: "{colors.overlay.60.value}"
      },
      backgroundColor: {
        value: "transparent"
      },
      color: {
        value: "{colors.font.primary.value}"
      },
      _hover: {
        borderColor: {
          value: "{colors.overlay.60.value}"
        },
        backgroundColor: {
          value: "{colors.overlay.5.value}"
        },
        color: {
          value: "{colors.neutral.90.value}"
        }
      },
      _focus: {
        borderColor: {
          value: "{colors.overlay.90.value}"
        },
        backgroundColor: {
          value: "{colors.overlay.5.value}"
        },
        color: {
          value: "{colors.neutral.90.value}"
        },
        boxShadow: {
          value: "{components.fieldcontrol.overlay._focus.boxShadow.value}"
        }
      },
      _active: {
        borderColor: {
          value: "{colors.overlay.90.value}"
        },
        backgroundColor: {
          value: "{colors.overlay.10.value}"
        },
        color: {
          value: "{colors.neutral.100.value}"
        }
      }
    }
  },
  primary: {
    borderColor: {
      value: "transparent"
    },
    borderWidth: {
      value: "{borderWidths.small.value}"
    },
    borderStyle: {
      value: "solid"
    },
    backgroundColor: {
      value: "{colors.primary.80.value}"
    },
    color: {
      value: "{colors.font.inverse.value}"
    },
    _disabled: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "{colors.background.disabled.value}"
      },
      color: {
        value: "{colors.font.disabled.value}"
      }
    },
    _loading: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "{colors.background.disabled.value}"
      },
      color: {
        value: "{colors.font.disabled.value}"
      }
    },
    _hover: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "{colors.primary.90.value}"
      },
      color: {
        value: "{colors.font.inverse.value}"
      }
    },
    _focus: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "{colors.primary.90.value}"
      },
      color: {
        value: "{colors.font.inverse.value}"
      },
      boxShadow: {
        value: "{components.fieldcontrol._focus.boxShadow.value}"
      }
    },
    _active: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "{colors.primary.100.value}"
      },
      color: {
        value: "{colors.font.inverse.value}"
      }
    },
    info: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "{colors.blue.80}"
      },
      color: {
        value: "{colors.font.inverse.value}"
      },
      _hover: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.blue.90.value}"
        },
        color: {
          value: "{colors.font.inverse.value}"
        }
      },
      _focus: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.blue.90.value}"
        },
        color: {
          value: "{colors.font.inverse.value}"
        },
        boxShadow: {
          value: "{components.fieldcontrol.info._focus.boxShadow.value}"
        }
      },
      _active: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.blue.100.value}"
        },
        color: {
          value: "{colors.font.inverse.value}"
        }
      }
    },
    warning: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "{colors.orange.80}"
      },
      color: {
        value: "{colors.font.inverse.value}"
      },
      _hover: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.orange.90.value}"
        },
        color: {
          value: "{colors.font.inverse.value}"
        }
      },
      _focus: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.orange.90.value}"
        },
        color: {
          value: "{colors.font.inverse.value}"
        },
        boxShadow: {
          value: "{components.fieldcontrol.overlay._focus.boxShadow.value}"
        }
      },
      _active: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.orange.100.value}"
        },
        color: {
          value: "{colors.font.inverse.value}"
        }
      }
    },
    error: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "{colors.red.80}"
      },
      color: {
        value: "{colors.font.inverse.value}"
      },
      _hover: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.red.90.value}"
        },
        color: {
          value: "{colors.font.inverse.value}"
        }
      },
      _focus: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.red.90.value}"
        },
        color: {
          value: "{colors.font.inverse.value}"
        },
        boxShadow: {
          value: "{components.fieldcontrol._error._focus.boxShadow.value}"
        }
      },
      _active: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.red.100.value}"
        },
        color: {
          value: "{colors.font.inverse.value}"
        }
      }
    },
    success: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "{colors.green.80}"
      },
      color: {
        value: "{colors.font.inverse.value}"
      },
      _hover: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.green.90.value}"
        },
        color: {
          value: "{colors.font.inverse.value}"
        }
      },
      _focus: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.green.90.value}"
        },
        color: {
          value: "{colors.font.inverse.value}"
        },
        boxShadow: {
          value: "{components.fieldcontrol.success._focus.boxShadow.value}"
        }
      },
      _active: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.green.100.value}"
        },
        color: {
          value: "{colors.font.inverse.value}"
        }
      }
    },
    overlay: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "{colors.overlay.70}"
      },
      color: {
        value: "{colors.font.inverse.value}"
      },
      _hover: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.overlay.90.value}"
        },
        color: {
          value: "{colors.font.inverse.value}"
        }
      },
      _focus: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.overlay.90.value}"
        },
        color: {
          value: "{colors.font.inverse.value}"
        },
        boxShadow: {
          value: "{components.fieldcontrol.overlay._focus.boxShadow.value}"
        }
      },
      _active: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.overlay.90.value}"
        },
        color: {
          value: "{colors.font.inverse.value}"
        }
      }
    }
  },
  menu: {
    borderWidth: {
      value: "{space.zero.value}"
    },
    backgroundColor: {
      value: "transparent"
    },
    justifyContent: {
      value: "start"
    },
    // Focus and hover styles are identical for menu variation
    // because for Menu primitive, menu items are forced to be focused even
    // for mouse interactions, making it impossible to distinguish the two interactions
    _hover: {
      color: {
        value: "{colors.font.inverse.value}"
      },
      backgroundColor: {
        value: "{colors.primary.80.value}"
      }
    },
    _focus: {
      color: {
        value: "{colors.font.inverse.value}"
      },
      backgroundColor: {
        value: "{colors.primary.80.value}"
      }
    },
    _active: {
      color: {
        value: "{colors.font.inverse.value}"
      },
      backgroundColor: {
        value: "{colors.primary.90.value}"
      }
    },
    _disabled: {
      color: {
        value: "{colors.font.disabled.value}"
      }
    }
  },
  link: {
    backgroundColor: {
      value: "transparent"
    },
    borderColor: {
      value: "transparent"
    },
    borderWidth: {
      value: "{borderWidths.small.value}"
    },
    color: {
      value: "{colors.font.interactive.value}"
    },
    _hover: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "{colors.primary.10.value}"
      },
      color: {
        value: "{colors.font.hover.value}"
      }
    },
    _focus: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "{colors.primary.10.value}"
      },
      color: {
        value: "{colors.font.focus.value}"
      },
      boxShadow: {
        value: "{components.fieldcontrol._focus.boxShadow.value}"
      }
    },
    _active: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "{colors.primary.20.value}"
      },
      color: {
        value: "{colors.font.active.value}"
      }
    },
    _disabled: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "transparent"
      },
      color: {
        value: "{colors.font.disabled.value}"
      }
    },
    _loading: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "transparent"
      },
      color: {
        value: "{colors.font.disabled.value}"
      }
    },
    info: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "transparent"
      },
      color: {
        value: "{colors.blue.100}"
      },
      _hover: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.blue.10.value}"
        },
        color: {
          value: "{colors.blue.90.value}"
        }
      },
      _focus: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.blue.10.value}"
        },
        color: {
          value: "{colors.blue.100.value}"
        },
        boxShadow: {
          value: "{components.fieldcontrol.info._focus.boxShadow.value}"
        }
      },
      _active: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.blue.20.value}"
        },
        color: {
          value: "{colors.blue.100.value}"
        }
      }
    },
    warning: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "transparent"
      },
      color: {
        value: "{colors.orange.100}"
      },
      _hover: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.orange.10.value}"
        },
        color: {
          value: "{colors.orange.90.value}"
        }
      },
      _focus: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.orange.10.value}"
        },
        color: {
          value: "{colors.orange.100.value}"
        },
        boxShadow: {
          value: "{components.fieldcontrol.warning._focus.boxShadow.value}"
        }
      },
      _active: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.orange.20.value}"
        },
        color: {
          value: "{colors.orange.100.value}"
        }
      }
    },
    success: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "transparent"
      },
      color: {
        value: "{colors.green.100}"
      },
      _hover: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.green.10.value}"
        },
        color: {
          value: "{colors.green.90.value}"
        }
      },
      _focus: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.green.10.value}"
        },
        color: {
          value: "{colors.green.100.value}"
        },
        boxShadow: {
          value: "{components.fieldcontrol.success._focus.boxShadow.value}"
        }
      },
      _active: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.green.20.value}"
        },
        color: {
          value: "{colors.green.100.value}"
        }
      }
    },
    error: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "transparent"
      },
      color: {
        value: "{colors.red.100}"
      },
      _hover: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.red.10.value}"
        },
        color: {
          value: "{colors.red.90.value}"
        }
      },
      _focus: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.red.10.value}"
        },
        color: {
          value: "{colors.red.100.value}"
        },
        boxShadow: {
          value: "{components.fieldcontrol._error._focus.boxShadow.value}"
        }
      },
      _active: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.red.20.value}"
        },
        color: {
          value: "{colors.red.100.value}"
        }
      }
    },
    overlay: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "transparent"
      },
      color: {
        value: "{colors.neutral.100}"
      },
      _hover: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.overlay.5.value}"
        },
        color: {
          value: "{colors.overlay.80.value}"
        }
      },
      _focus: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.overlay.5.value}"
        },
        color: {
          value: "{colors.overlay.90.value}"
        },
        boxShadow: {
          value: "{components.fieldcontrol.overlay._focus.boxShadow.value}"
        }
      },
      _active: {
        borderColor: {
          value: "transparent"
        },
        backgroundColor: {
          value: "{colors.overlay.10.value}"
        },
        color: {
          value: "{colors.overlay.90.value}"
        }
      }
    }
  },
  warning: {
    backgroundColor: {
      value: "transparent"
    },
    borderColor: {
      value: "{colors.red.60}"
    },
    borderWidth: {
      value: "{borderWidths.small}"
    },
    color: {
      value: "{colors.red.60}"
    },
    _hover: {
      borderColor: {
        value: "{colors.red.80}"
      },
      backgroundColor: {
        value: "{colors.red.10}"
      },
      color: {
        value: "{colors.font.error}"
      }
    },
    _focus: {
      borderColor: {
        value: "{colors.red.80}"
      },
      backgroundColor: {
        value: "{colors.red.10}"
      },
      color: {
        value: "{colors.red.80}"
      },
      boxShadow: {
        value: "{components.fieldcontrol._error._focus.boxShadow}"
      }
    },
    _active: {
      borderColor: {
        value: "{colors.red.100}"
      },
      backgroundColor: {
        value: "{colors.red.20}"
      },
      color: {
        value: "{colors.red.100}"
      }
    },
    _disabled: {
      borderColor: {
        value: "{colors.border.tertiary}"
      },
      backgroundColor: {
        value: "transparent"
      },
      color: {
        value: "{colors.font.disabled}"
      }
    },
    _loading: {
      borderColor: {
        value: "{colors.border.tertiary}"
      },
      backgroundColor: {
        value: "transparent"
      },
      color: {
        value: "{colors.font.disabled}"
      }
    }
  },
  destructive: {
    borderColor: {
      value: "transparent"
    },
    borderWidth: {
      value: "{borderWidths.small}"
    },
    borderStyle: {
      value: "solid"
    },
    backgroundColor: {
      value: "{colors.red.60}"
    },
    color: {
      value: "{colors.font.inverse}"
    },
    _disabled: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "{colors.background.disabled}"
      },
      color: {
        value: "{colors.font.disabled}"
      }
    },
    _loading: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "{colors.background.disabled}"
      },
      color: {
        value: "{colors.font.disabled}"
      }
    },
    _hover: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "{colors.red.80}"
      },
      color: {
        value: "{colors.font.inverse}"
      }
    },
    _focus: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "{colors.red.80}"
      },
      color: {
        value: "{colors.font.inverse}"
      },
      boxShadow: {
        value: "{components.fieldcontrol._error._focus.boxShadow}"
      }
    },
    _active: {
      borderColor: {
        value: "transparent"
      },
      backgroundColor: {
        value: "{colors.red.100}"
      },
      color: {
        value: "{colors.font.inverse}"
      }
    }
  },
  // sizes
  small: {
    fontSize: {
      value: "{components.fieldcontrol.small.fontSize.value}"
    },
    paddingBlockStart: {
      value: "{components.fieldcontrol.small.paddingBlockStart.value}"
    },
    paddingBlockEnd: {
      value: "{components.fieldcontrol.small.paddingBlockEnd.value}"
    },
    paddingInlineStart: {
      value: "{components.fieldcontrol.small.paddingInlineStart.value}"
    },
    paddingInlineEnd: {
      value: "{components.fieldcontrol.small.paddingInlineEnd.value}"
    }
  },
  large: {
    fontSize: {
      value: "{components.fieldcontrol.large.fontSize.value}"
    },
    paddingBlockStart: {
      value: "{components.fieldcontrol.large.paddingBlockStart.value}"
    },
    paddingBlockEnd: {
      value: "{components.fieldcontrol.large.paddingBlockEnd.value}"
    },
    paddingInlineStart: {
      value: "{components.fieldcontrol.large.paddingInlineStart.value}"
    },
    paddingInlineEnd: {
      value: "{components.fieldcontrol.large.paddingInlineEnd.value}"
    }
  },
  loaderWrapper: {
    alignItems: {
      value: "center"
    },
    gap: {
      value: "{space.xs.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/card.mjs
var card = {
  backgroundColor: {
    value: "{colors.background.primary.value}"
  },
  borderRadius: {
    value: "{radii.xs.value}"
  },
  borderWidth: {
    value: "0"
  },
  borderStyle: {
    value: "solid"
  },
  borderColor: {
    value: "transparent"
  },
  boxShadow: {
    value: "none"
  },
  padding: {
    value: "{space.medium.value}"
  },
  outlined: {
    backgroundColor: {
      value: "{components.card.backgroundColor.value}"
    },
    borderRadius: {
      value: "{radii.xs.value}"
    },
    borderWidth: {
      value: "{borderWidths.small.value}"
    },
    borderStyle: {
      value: "solid"
    },
    borderColor: {
      value: "{colors.border.primary.value}"
    },
    boxShadow: {
      value: "{components.card.boxShadow.value}"
    }
  },
  elevated: {
    backgroundColor: {
      value: "{components.card.backgroundColor.value}"
    },
    borderRadius: {
      value: "{radii.xs.value}"
    },
    borderWidth: {
      value: "0"
    },
    borderStyle: {
      value: "solid"
    },
    borderColor: {
      value: "transparent"
    },
    boxShadow: {
      value: "{shadows.medium.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/checkbox.mjs
var checkbox = {
  cursor: {
    value: "pointer"
  },
  alignItems: {
    value: "center"
  },
  _disabled: {
    cursor: {
      value: "not-allowed"
    }
  },
  button: {
    position: {
      value: "relative"
    },
    alignItems: {
      value: "center"
    },
    justifyContent: {
      value: "center"
    },
    color: {
      value: "{colors.font.inverse.value}"
    },
    before: {
      width: {
        value: "100%"
      },
      height: {
        value: "100%"
      },
      borderWidth: {
        value: "{borderWidths.medium.value}"
      },
      borderRadius: {
        value: "20%"
      },
      borderStyle: {
        value: "solid"
      },
      borderColor: {
        value: "{colors.border.primary.value}"
      }
    },
    _focus: {
      outlineColor: {
        value: "{colors.transparent.value}"
      },
      outlineStyle: {
        value: "solid"
      },
      outlineWidth: {
        value: "{outlineWidths.medium.value}"
      },
      outlineOffset: {
        value: "{outlineOffsets.medium.value}"
      },
      borderColor: {
        value: "{colors.border.focus.value}"
      },
      boxShadow: {
        value: "{components.fieldcontrol._focus.boxShadow.value}"
      }
    },
    _disabled: {
      borderColor: {
        value: "{colors.border.disabled.value}"
      }
    },
    _error: {
      borderColor: {
        value: "{colors.border.error.value}"
      },
      _focus: {
        borderColor: {
          value: "{colors.border.error.value}"
        },
        boxShadow: {
          value: "{components.fieldcontrol._error._focus.boxShadow.value}"
        }
      }
    }
  },
  icon: {
    backgroundColor: {
      value: "{colors.primary.80.value}"
    },
    borderRadius: {
      value: "20%"
    },
    opacity: {
      value: "{opacities.0.value}"
    },
    transform: {
      value: "scale(0)"
    },
    transitionProperty: {
      value: "all"
    },
    transitionDuration: {
      value: "{time.short.value}"
    },
    transitionTimingFunction: {
      value: "ease-in-out"
    },
    _checked: {
      opacity: {
        value: "{opacities.100.value}"
      },
      transform: {
        value: "scale(1)"
      },
      _disabled: {
        backgroundColor: {
          value: "{colors.background.disabled.value}"
        }
      }
    },
    _indeterminate: {
      opacity: {
        value: "{opacities.100.value}"
      },
      transform: {
        value: "scale(1)"
      },
      _disabled: {
        backgroundColor: {
          value: "{colors.background.disabled.value}"
        }
      }
    }
  },
  label: {
    color: {
      value: "{components.text.color.value}"
    },
    _disabled: {
      color: {
        value: "{colors.font.disabled.value}"
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/checkboxField.mjs
var checkboxfield = {
  alignItems: {
    value: "flex-start"
  },
  alignContent: {
    value: "center"
  },
  flexDirection: {
    value: "column"
  },
  justifyContent: {
    value: "center"
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/collection.mjs
var collection = {
  pagination: {
    current: {
      color: {
        value: "{components.pagination.current.color}"
      },
      backgroundColor: {
        value: "{components.pagination.current.backgroundColor}"
      }
    },
    button: {
      color: {
        value: "{components.pagination.button.color}"
      },
      _hover: {
        backgroundColor: {
          value: "{components.pagination.button.hover.backgroundColor}"
        },
        color: {
          value: "{components.pagination.button.hover.color}"
        }
      },
      _disabled: {
        color: {
          value: "{components.pagination.button.disabled.color}"
        }
      }
    }
  },
  search: {
    input: {
      color: {
        value: "{components.searchfield.color}"
      }
    },
    button: {
      color: {
        value: "{components.searchfield.button.color}"
      },
      _active: {
        backgroundColor: {
          value: "{components.searchfield.button._active.backgroundColor}"
        },
        borderColor: {
          value: "{components.searchfield.button._active.borderColor}"
        },
        color: {
          value: "{components.searchfield.button._active.color}"
        }
      },
      _disabled: {
        backgroundColor: {
          value: "{components.searchfield.button._disabled.backgroundColor}"
        },
        borderColor: {
          value: "{components.searchfield.button._disabled.borderColor}"
        },
        color: {
          value: "{components.searchfield.button._disabled.color}"
        }
      },
      _focus: {
        backgroundColor: {
          value: "{components.searchfield.button._focus.backgroundColor}"
        },
        borderColor: {
          value: "{components.searchfield.button._focus.borderColor}"
        },
        color: {
          value: "{components.searchfield.button._focus.color}"
        }
      },
      _hover: {
        backgroundColor: {
          value: "{components.searchfield.button._hover.backgroundColor}"
        },
        borderColor: {
          value: "{components.searchfield.button._hover.borderColor}"
        },
        color: {
          value: "{components.searchfield.button._hover.color}"
        }
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/copy.mjs
var copy = {
  fontSize: {
    value: "{fontSizes.xs}"
  },
  gap: {
    value: "{space.relative.medium}"
  },
  svg: {
    path: {
      fill: {
        value: "{colors.font.primary}"
      }
    }
  },
  toolTip: {
    bottom: {
      value: "{space.large}"
    },
    color: {
      value: "{colors.teal.100}"
    },
    fontSize: {
      value: "{fontSizes.xxs}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/dialCodeSelect.mjs
var dialcodeselect = {
  height: {
    value: "{space.relative.full.value}"
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/divider.mjs
var divider = {
  borderStyle: {
    value: "solid"
  },
  borderColor: {
    value: "{colors.border.primary.value}"
  },
  borderWidth: {
    value: "{borderWidths.medium.value}"
  },
  label: {
    color: {
      value: "{colors.font.tertiary.value}"
    },
    paddingInline: {
      value: "{space.medium.value}"
    },
    fontSize: {
      value: "{fontSizes.small.value}"
    },
    backgroundColor: {
      value: "{colors.background.primary.value}"
    }
  },
  small: {
    borderWidth: {
      value: "{borderWidths.small.value}"
    }
  },
  large: {
    borderWidth: {
      value: "{borderWidths.large.value}"
    }
  },
  opacity: {
    value: "{opacities.60.value}"
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/dropZone.mjs
var dropzone = {
  backgroundColor: {
    value: "{colors.background.primary}"
  },
  borderRadius: {
    value: "{radii.small}"
  },
  borderColor: {
    value: "{colors.border.primary}"
  },
  borderStyle: {
    value: "dashed"
  },
  borderWidth: {
    value: "{borderWidths.small}"
  },
  color: {
    value: "{colors.font.primary}"
  },
  gap: {
    value: "{space.small}"
  },
  paddingBlock: {
    value: "{space.xl}"
  },
  paddingInline: {
    value: "{space.large}"
  },
  textAlign: {
    value: "center"
  },
  _active: {
    backgroundColor: {
      value: "{colors.primary.10}"
    },
    borderRadius: {
      value: "{components.dropzone.borderRadius}"
    },
    borderColor: {
      value: "{colors.border.pressed}"
    },
    borderStyle: {
      value: "{components.dropzone.borderStyle}"
    },
    borderWidth: {
      value: "{components.dropzone.borderWidth}"
    },
    color: {
      value: "{colors.font.primary}"
    }
  },
  _disabled: {
    backgroundColor: {
      value: "{colors.background.disabled}"
    },
    borderRadius: {
      value: "{components.dropzone.borderRadius}"
    },
    borderColor: {
      value: "{colors.border.disabled}"
    },
    borderStyle: {
      value: "{components.dropzone.borderStyle}"
    },
    borderWidth: {
      value: "{components.dropzone.borderWidth}"
    },
    color: {
      value: "{colors.font.disabled}"
    }
  },
  accepted: {
    backgroundColor: {
      value: "{colors.background.success}"
    },
    borderRadius: {
      value: "{components.dropzone.borderRadius}"
    },
    borderColor: {
      value: "{colors.border.success}"
    },
    borderStyle: {
      value: "{components.dropzone.borderStyle}"
    },
    borderWidth: {
      value: "{components.dropzone.borderWidth}"
    },
    color: {
      value: "{colors.font.success}"
    }
  },
  rejected: {
    backgroundColor: {
      value: "{colors.background.error}"
    },
    borderRadius: {
      value: "{components.dropzone.borderRadius}"
    },
    borderColor: {
      value: "{colors.border.pressed}"
    },
    borderStyle: {
      value: "{components.dropzone.borderStyle}"
    },
    borderWidth: {
      value: "{components.dropzone.borderWidth}"
    },
    color: {
      value: "{colors.font.error}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/accordion.mjs
var accordion = {
  backgroundColor: {
    value: "{colors.background.primary.value}"
  },
  item: {
    borderColor: {
      value: "{colors.border.secondary.value}"
    },
    borderWidth: {
      value: "{borderWidths.small.value}"
    },
    borderStyle: {
      value: "solid"
    },
    borderRadius: {
      value: "{radii.small.value}"
    },
    trigger: {
      alignItems: {
        value: "center"
      },
      backgroundColor: {
        value: "{colors.background.primary.value}"
      },
      color: {
        value: "inherit"
      },
      gap: {
        value: "{space.small.value}"
      },
      justifyContent: {
        value: "space-between"
      },
      paddingBlock: {
        value: "{space.xs.value}"
      },
      paddingInline: {
        value: "{space.small.value}"
      },
      _hover: {
        color: {
          value: "inherit"
        },
        backgroundColor: {
          value: "{colors.overlay.5.value}"
        }
      },
      _focus: {
        borderColor: {
          value: "{colors.border.focus.value}"
        },
        boxShadow: {
          value: {
            offsetX: "0",
            offsetY: "0",
            blurRadius: "0",
            spreadRadius: "2px",
            color: "{colors.border.focus.value}"
          }
        }
      }
    },
    content: {
      color: {
        value: "inherit"
      },
      paddingInline: {
        value: "{space.small.value}"
      },
      paddingBlockEnd: {
        value: "{space.small.value}"
      },
      paddingBlockStart: {
        value: "{space.xxxs.value}"
      }
    },
    icon: {
      color: {
        value: "{colors.font.tertiary.value}"
      },
      transitionDuration: {
        value: "{time.medium.value}"
      },
      transitionTimingFunction: {
        value: "cubic-bezier(0.87, 0, 0.13, 1)"
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/field.mjs
var field = {
  // default styles
  gap: {
    value: "{space.xs.value}"
  },
  fontSize: {
    value: "{fontSizes.medium.value}"
  },
  flexDirection: {
    value: "column"
  },
  // Adjust base fontSize and gap for small and large sizes
  small: {
    gap: {
      value: "{space.xxxs.value}"
    },
    fontSize: {
      value: "{fontSizes.small.value}"
    }
  },
  large: {
    gap: {
      value: "{space.small.value}"
    },
    fontSize: {
      value: "{fontSizes.large.value}"
    }
  },
  label: {
    color: {
      value: "{colors.font.secondary.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/fieldControl.mjs
var fieldcontrol = {
  borderStyle: {
    value: "solid"
  },
  borderColor: {
    value: "{colors.border.primary.value}"
  },
  borderWidth: {
    value: "{borderWidths.small.value}"
  },
  borderRadius: {
    value: "{radii.small.value}"
  },
  color: {
    value: "{colors.font.primary.value}"
  },
  paddingBlockStart: {
    value: "{space.xs.value}"
  },
  paddingBlockEnd: {
    value: "{space.xs.value}"
  },
  paddingInlineStart: {
    value: "{space.medium.value}"
  },
  paddingInlineEnd: {
    value: "{space.medium.value}"
  },
  fontSize: {
    value: "{components.field.fontSize.value}"
  },
  lineHeight: {
    value: "{lineHeights.medium.value}"
  },
  transitionDuration: {
    value: "{time.medium.value}"
  },
  outlineColor: {
    value: "{colors.transparent.value}"
  },
  outlineStyle: {
    value: "solid"
  },
  outlineWidth: {
    value: "{outlineWidths.medium.value}"
  },
  outlineOffset: {
    value: "{outlineOffsets.medium.value}"
  },
  small: {
    fontSize: {
      value: "{components.field.small.fontSize.value}"
    },
    paddingBlockStart: {
      value: "{space.xxs.value}"
    },
    paddingBlockEnd: {
      value: "{space.xxs.value}"
    },
    paddingInlineStart: {
      value: "{space.small.value}"
    },
    paddingInlineEnd: {
      value: "{space.small.value}"
    }
  },
  large: {
    fontSize: {
      value: "{components.field.large.fontSize.value}"
    },
    paddingBlockStart: {
      value: "{space.xs.value}"
    },
    paddingBlockEnd: {
      value: "{space.xs.value}"
    },
    paddingInlineStart: {
      value: "{space.medium.value}"
    },
    paddingInlineEnd: {
      value: "{space.medium.value}"
    }
  },
  quiet: {
    borderStyle: {
      value: "none"
    },
    borderInlineStart: {
      value: "none"
    },
    borderInlineEnd: {
      value: "none"
    },
    borderBlockStart: {
      value: "none"
    },
    borderRadius: {
      value: "0"
    },
    _focus: {
      borderBlockEndColor: {
        value: "transparent"
      },
      boxShadow: {
        value: "{components.fieldcontrol._focus.boxShadow.value}"
      }
    },
    _error: {
      borderBlockEndColor: {
        value: "{colors.border.error.value}"
      },
      _focus: {
        borderBlockEndColor: {
          value: "transparent"
        },
        boxShadow: {
          value: "{components.fieldcontrol._error._focus.boxShadow.value}"
        }
      }
    }
  },
  _focus: {
    // These focus styles have been calibrated to create
    // a highly visible focus indicator per WCAG 2.2 guidlines:
    // See: https://www.w3.org/TR/WCAG22/#focus-appearance
    //
    // Key features:
    // * Focus indicator area is at least the 2 CSS px perimeter around the component.
    // * Contrast between focused and unfocused area of contrast has a ratio of 3:1
    //
    // IMPORTANT: Must recalibrate if `colors.border.focus` are changed
    borderColor: {
      value: "{colors.border.focus.value}"
    },
    boxShadow: {
      value: {
        offsetX: "0px",
        offsetY: "0px",
        blurRadius: "0px",
        spreadRadius: "2px",
        color: "{colors.border.focus.value}"
      }
    }
  },
  _disabled: {
    color: {
      value: "{colors.font.disabled.value}"
    },
    cursor: {
      value: "not-allowed"
    },
    borderColor: {
      value: "{colors.transparent.value}"
    },
    backgroundColor: {
      value: "{colors.background.disabled.value}"
    }
  },
  _error: {
    borderColor: {
      value: "{colors.border.error.value}"
    },
    color: {
      value: "{colors.font.error.value}"
    },
    _focus: {
      boxShadow: {
        value: {
          offsetX: "0px",
          offsetY: "0px",
          blurRadius: "0px",
          spreadRadius: "2px",
          color: "{colors.border.error.value}"
        }
      }
    }
  },
  info: {
    _focus: {
      boxShadow: {
        value: {
          offsetX: "0px",
          offsetY: "0px",
          blurRadius: "0px",
          spreadRadius: "2px",
          color: "{colors.blue.100.value}"
        }
      }
    }
  },
  warning: {
    _focus: {
      boxShadow: {
        value: {
          offsetX: "0px",
          offsetY: "0px",
          blurRadius: "0px",
          spreadRadius: "2px",
          color: "{colors.orange.100.value}"
        }
      }
    }
  },
  success: {
    _focus: {
      boxShadow: {
        value: {
          offsetX: "0px",
          offsetY: "0px",
          blurRadius: "0px",
          spreadRadius: "2px",
          color: "{colors.green.100.value}"
        }
      }
    }
  },
  overlay: {
    _focus: {
      boxShadow: {
        value: {
          offsetX: "0px",
          offsetY: "0px",
          blurRadius: "0px",
          spreadRadius: "2px",
          color: "{colors.overlay.90.value}"
        }
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/fieldGroup.mjs
var fieldgroup = {
  gap: {
    value: "{space.zero.value}"
  },
  vertical: {
    alignItems: {
      value: "center"
    }
  },
  outer: {
    alignItems: {
      value: "center"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/fieldset.mjs
var fieldset = {
  backgroundColor: {
    value: "transparent"
  },
  borderRadius: {
    value: "{radii.xs.value}"
  },
  flexDirection: {
    value: "column"
  },
  gap: {
    value: "{components.field.gap.value}"
  },
  legend: {
    color: {
      value: "{colors.font.primary.value}"
    },
    fontSize: {
      value: "{components.field.fontSize.value}"
    },
    fontWeight: {
      value: "{fontWeights.bold.value}"
    },
    lineHeight: {
      value: "{lineHeights.medium.value}"
    },
    small: {
      fontSize: "{components.field.small.fontSize.value}"
    },
    large: {
      fontSize: "{components.field.large.fontSize.value}"
    }
  },
  outlined: {
    padding: "{space.medium.value}",
    borderColor: "{colors.neutral.40.value}",
    borderWidth: "{borderWidths.small.value}",
    borderStyle: "solid",
    small: {
      padding: "{space.small.value}"
    },
    large: {
      padding: "{space.large.value}"
    }
  },
  small: {
    gap: "{components.field.small.gap.value}"
  },
  large: {
    gap: "{components.field.large.gap.value}"
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/fieldMessages.mjs
var fieldmessages = {
  error: {
    color: {
      value: "{colors.font.error.value}"
    },
    fontSize: {
      value: "{fontSizes.small.value}"
    }
  },
  description: {
    color: {
      value: "{colors.font.secondary.value}"
    },
    fontStyle: {
      value: "italic"
    },
    fontSize: {
      value: "{fontSizes.small.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/fileuploader.mjs
var fileuploader = {
  dropzone: {
    backgroundColor: {
      value: "{colors.background.primary}"
    },
    borderRadius: {
      value: "{radii.small}"
    },
    borderColor: {
      value: "{colors.border.primary}"
    },
    borderStyle: {
      value: "dashed"
    },
    borderWidth: {
      value: "{borderWidths.small}"
    },
    gap: {
      value: "{space.small}"
    },
    paddingBlock: {
      value: "{space.xl}"
    },
    paddingInline: {
      value: "{space.large}"
    },
    textAlign: {
      value: "center"
    },
    _active: {
      backgroundColor: {
        value: "{colors.primary.10}"
      },
      borderRadius: {
        value: "{components.fileuploader.dropzone.borderRadius}"
      },
      borderColor: {
        value: "{colors.border.pressed}"
      },
      borderStyle: {
        value: "{components.fileuploader.dropzone.borderStyle}"
      },
      borderWidth: {
        value: "{borderWidths.medium}"
      }
    },
    icon: {
      color: {
        value: "{colors.border.primary}"
      },
      fontSize: {
        value: "{fontSizes.xxl}"
      }
    },
    text: {
      color: {
        value: "{colors.font.tertiary}"
      },
      fontSize: {
        value: "{fontSizes.medium}"
      },
      fontWeight: {
        value: "{fontWeights.bold}"
      }
    }
  },
  file: {
    backgroundColor: {
      value: "{colors.background.primary}"
    },
    borderRadius: {
      value: "{radii.small}"
    },
    borderColor: {
      value: "{colors.border.primary}"
    },
    borderStyle: {
      value: "solid"
    },
    borderWidth: {
      value: "{borderWidths.small}"
    },
    paddingBlock: {
      value: "{space.xs}"
    },
    paddingInline: {
      value: "{space.small}"
    },
    gap: {
      value: "{space.small}"
    },
    alignItems: {
      value: "baseline"
    },
    name: {
      fontSize: {
        value: "{fontSizes.medium}"
      },
      fontWeight: {
        value: "{fontWeights.bold}"
      },
      color: {
        value: "{colors.font.primary}"
      }
    },
    size: {
      fontSize: {
        value: "{fontSizes.small}"
      },
      fontWeight: {
        value: "{fontWeights.normal}"
      },
      color: {
        value: "{colors.font.tertiary}"
      }
    },
    image: {
      width: {
        value: "{space.xxl}"
      },
      height: {
        value: "{space.xxl}"
      },
      backgroundColor: {
        value: "{colors.background.secondary}"
      },
      color: {
        value: "{colors.font.tertiary}"
      },
      borderRadius: {
        value: "{radii.small}"
      }
    }
  },
  filelist: {
    flexDirection: {
      value: "column"
    },
    gap: {
      value: "{space.small}"
    }
  },
  loader: {
    strokeLinecap: {
      value: "round"
    },
    strokeEmpty: {
      value: "{colors.border.secondary}"
    },
    strokeFilled: {
      value: "{components.loader.strokeFilled}"
    },
    strokeWidth: {
      value: "{borderWidths.large}"
    }
  },
  previewer: {
    backgroundColor: {
      value: "{colors.background.primary}"
    },
    borderColor: {
      value: "{colors.border.primary}"
    },
    borderStyle: {
      value: "solid"
    },
    borderWidth: {
      value: "{borderWidths.small}"
    },
    borderRadius: {
      value: "{radii.small}"
    },
    paddingBlock: {
      value: "{space.zero}"
    },
    paddingInline: {
      value: "{space.zero}"
    },
    maxHeight: {
      value: "40rem"
    },
    maxWidth: {
      value: "auto"
    },
    text: {
      fontSize: {
        value: "{fontSizes.medium}"
      },
      fontWeight: {
        value: "{fontWeights.bold}"
      },
      color: {
        value: "{colors.font.primary}"
      }
    },
    body: {
      paddingBlock: {
        value: "{space.medium}"
      },
      paddingInline: {
        value: "{space.medium}"
      },
      gap: {
        value: "{space.small}"
      }
    },
    footer: {
      justifyContent: {
        value: "flex-end"
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/flex.mjs
var flex = {
  gap: {
    value: "{space.medium.value}"
  },
  justifyContent: {
    value: "normal"
  },
  alignItems: {
    value: "stretch"
  },
  alignContent: {
    value: "normal"
  },
  flexWrap: {
    value: "nowrap"
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/heading.mjs
var heading = {
  color: {
    value: "{colors.font.primary.value}"
  },
  lineHeight: {
    value: "{lineHeights.small.value}"
  },
  1: {
    fontSize: {
      value: "{fontSizes.xxxxl.value}"
    },
    fontWeight: {
      value: "{fontWeights.light.value}"
    }
  },
  2: {
    fontSize: {
      value: "{fontSizes.xxxl.value}"
    },
    fontWeight: {
      value: "{fontWeights.normal.value}"
    }
  },
  3: {
    fontSize: {
      value: "{fontSizes.xxl.value}"
    },
    fontWeight: {
      value: "{fontWeights.medium.value}"
    }
  },
  4: {
    fontSize: {
      value: "{fontSizes.xl.value}"
    },
    fontWeight: {
      value: "{fontWeights.semibold.value}"
    }
  },
  5: {
    fontSize: {
      value: "{fontSizes.large.value}"
    },
    fontWeight: {
      value: "{fontWeights.bold.value}"
    }
  },
  6: {
    fontSize: {
      value: "{fontSizes.medium.value}"
    },
    fontWeight: {
      value: "{fontWeights.extrabold.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/highlightMatch.mjs
var highlightmatch = {
  highlighted: {
    fontWeight: {
      value: "{fontWeights.bold}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/icon.mjs
var icon = {
  lineHeight: {
    value: 1
  },
  height: {
    value: "1em"
  }
  // Should match height of parent container font-size
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/input.mjs
var input = {
  color: {
    value: "{components.fieldcontrol.color.value}"
  },
  borderColor: {
    value: "{components.fieldcontrol.borderColor.value}"
  },
  fontSize: {
    value: "{components.fieldcontrol.fontSize.value}"
  },
  _focus: {
    borderColor: {
      value: "{components.fieldcontrol._focus.borderColor.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/image.mjs
var image = {
  maxWidth: {
    value: "100%"
  },
  height: {
    value: "auto"
  },
  objectFit: {
    value: "initial"
  },
  objectPosition: {
    value: "initial"
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/inAppMessaging.mjs
var inappmessaging = {
  banner: {
    height: {
      value: "150px "
    },
    width: {
      value: "400px "
    }
  },
  button: {
    backgroundColor: {
      value: "#e8e8e8"
    },
    borderRadius: {
      value: "5px"
    },
    color: {
      value: "black"
    }
  },
  dialog: {
    height: {
      value: "50vh"
    },
    minHeight: {
      value: "400px"
    },
    minWidth: {
      value: "400px"
    },
    width: {
      value: "30vw"
    }
  },
  header: {
    fontSize: {
      value: "{fontSizes.medium.value}"
    },
    fontWeight: {
      value: "{fontWeights.extrabold.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/link.mjs
var link = {
  active: {
    color: {
      value: "{colors.font.active.value}"
    }
  },
  color: {
    value: "{colors.font.interactive.value}"
  },
  focus: {
    color: {
      value: "{colors.font.focus.value}"
    }
  },
  hover: {
    color: {
      value: "{colors.font.hover.value}"
    }
  },
  visited: {
    color: {
      value: "{colors.font.interactive.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/liveness.mjs
var liveness = {
  cameraModule: {
    backgroundColor: {
      value: "{colors.background.primary.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/loader.mjs
var loader = {
  width: {
    value: "{fontSizes.medium.value}"
  },
  height: {
    value: "{fontSizes.medium.value}"
  },
  fontSize: {
    value: "{fontSizes.xs.value}"
  },
  strokeEmpty: {
    value: "{colors.neutral.20.value}"
  },
  strokeFilled: {
    value: "{colors.primary.80.value}"
  },
  strokeLinecap: {
    value: "round"
  },
  animationDuration: {
    value: "1s"
  },
  small: {
    width: {
      value: "{fontSizes.small.value}"
    },
    height: {
      value: "{fontSizes.small.value}"
    },
    fontSize: {
      value: "{fontSizes.xxs.value}"
    }
  },
  large: {
    width: {
      value: "{fontSizes.large.value}"
    },
    height: {
      value: "{fontSizes.large.value}"
    },
    fontSize: {
      value: "{fontSizes.small.value}"
    }
  },
  linear: {
    width: {
      value: "100%"
    },
    minWidth: {
      value: "5rem"
    },
    fontSize: {
      value: "{fontSizes.xxs.value}"
    },
    strokeWidth: {
      value: "{fontSizes.xxs.value}"
    },
    strokeFilled: {
      value: "{colors.primary.80.value}"
    },
    strokeEmpty: {
      value: "{colors.neutral.20.value}"
    },
    strokeLinecap: {
      value: "round"
    },
    animationDuration: {
      value: "1s"
    },
    small: {
      strokeWidth: {
        value: "{fontSizes.xxxs.value}"
      },
      fontSize: {
        value: "{fontSizes.xxxs.value}"
      }
    },
    large: {
      strokeWidth: {
        value: "{fontSizes.xs.value}"
      },
      fontSize: {
        value: "{fontSizes.xs.value}"
      }
    }
  },
  text: {
    fill: {
      value: "{colors.font.primary.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/menu.mjs
var menu = {
  backgroundColor: {
    value: "{colors.background.primary.value}"
  },
  borderRadius: {
    value: "{radii.medium.value}"
  },
  borderWidth: {
    value: "{borderWidths.small.value}"
  },
  borderStyle: {
    value: "solid"
  },
  borderColor: {
    value: "{colors.border.primary.value}"
  },
  boxShadow: {
    value: "{shadows.large.value}"
  },
  flexDirection: {
    value: "column"
  },
  gap: {
    value: "{space.zero.value}"
  },
  maxWidth: {
    value: "30rem"
  },
  minWidth: {
    value: "14rem"
  },
  small: {
    width: {
      value: "{fontSizes.medium.value}"
    },
    height: {
      value: "{fontSizes.medium.value}"
    }
  },
  large: {
    width: {
      value: "{fontSizes.xxxl.value}"
    },
    height: {
      value: "{fontSizes.xxxl.value}"
    }
  },
  item: {
    minHeight: {
      value: "2.5rem"
    },
    paddingInlineStart: {
      value: "{space.medium.value}"
    },
    paddingInlineEnd: {
      value: "{space.medium.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/message.mjs
var message = {
  // Default styles
  alignItems: {
    value: "center"
  },
  backgroundColor: {
    value: "{colors.background.tertiary.value}"
  },
  borderColor: {
    value: "transparent"
  },
  borderStyle: {
    value: "solid"
  },
  borderWidth: {
    value: "{borderWidths.small.value}"
  },
  borderRadius: {
    value: "{radii.xs.value}"
  },
  color: {
    value: "{colors.font.primary.value}"
  },
  justifyContent: {
    value: "flex-start"
  },
  paddingBlock: {
    value: "{space.small.value}"
  },
  paddingInline: {
    value: "{space.medium.value}"
  },
  lineHeight: {
    value: "{lineHeights.small.value}"
  },
  icon: {
    size: {
      value: "{fontSizes.xl.value}"
    }
  },
  heading: {
    fontSize: {
      value: "{fontSizes.medium.value}"
    },
    fontWeight: {
      value: "{fontWeights.bold.value}"
    }
  },
  dismiss: {
    gap: {
      value: "{space.xxs.value}"
    }
  },
  // Variations
  plain: {
    color: {
      value: "{colors.font.primary.value}"
    },
    backgroundColor: {
      value: "{colors.background.primary.value}"
    },
    borderColor: {
      value: "transparent"
    },
    info: {
      color: {
        value: "{colors.font.info.value}"
      },
      backgroundColor: {
        value: "{colors.background.primary.value}"
      },
      borderColor: {
        value: "transparent"
      }
    },
    error: {
      color: {
        value: "{colors.font.error.value}"
      },
      backgroundColor: {
        value: "{colors.background.primary.value}"
      },
      borderColor: {
        value: "transparent"
      }
    },
    success: {
      color: {
        value: "{colors.font.success.value}"
      },
      backgroundColor: {
        value: "{colors.background.primary.value}"
      },
      borderColor: {
        value: "transparent"
      }
    },
    warning: {
      color: {
        value: "{colors.font.warning.value}"
      },
      backgroundColor: {
        value: "{colors.background.primary.value}"
      },
      borderColor: {
        value: "transparent"
      }
    }
  },
  outlined: {
    color: {
      value: "{colors.font.primary.value}"
    },
    backgroundColor: {
      value: "{colors.background.primary.value}"
    },
    borderColor: {
      value: "{colors.border.primary.value}"
    },
    info: {
      color: {
        value: "{colors.font.info.value}"
      },
      backgroundColor: {
        value: "{colors.background.primary.value}"
      },
      borderColor: {
        value: "{colors.border.info.value}"
      }
    },
    error: {
      color: {
        value: "{colors.font.error.value}"
      },
      backgroundColor: {
        value: "{colors.background.primary.value}"
      },
      borderColor: {
        value: "{colors.border.error.value}"
      }
    },
    success: {
      color: {
        value: "{colors.font.success.value}"
      },
      backgroundColor: {
        value: "{colors.background.primary.value}"
      },
      borderColor: {
        value: "{colors.border.success.value}"
      }
    },
    warning: {
      color: {
        value: "{colors.font.warning.value}"
      },
      backgroundColor: {
        value: "{colors.background.primary.value}"
      },
      borderColor: {
        value: "{colors.border.warning.value}"
      }
    }
  },
  filled: {
    color: {
      value: "{colors.font.primary.value}"
    },
    backgroundColor: {
      value: "{colors.background.secondary.value}"
    },
    borderColor: {
      value: "transparent"
    },
    info: {
      color: {
        value: "{colors.font.info.value}"
      },
      backgroundColor: {
        value: "{colors.background.info.value}"
      },
      borderColor: {
        value: "transparent"
      }
    },
    error: {
      color: {
        value: "{colors.font.error.value}"
      },
      backgroundColor: {
        value: "{colors.background.error.value}"
      },
      borderColor: {
        value: "transparent"
      }
    },
    success: {
      color: {
        value: "{colors.font.success.value}"
      },
      backgroundColor: {
        value: "{colors.background.success.value}"
      },
      borderColor: {
        value: "transparent"
      }
    },
    warning: {
      color: {
        value: "{colors.font.warning.value}"
      },
      backgroundColor: {
        value: "{colors.background.warning.value}"
      },
      borderColor: {
        value: "transparent"
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/pagination.mjs
var pagination = {
  current: {
    alignItems: {
      value: "center"
    },
    justifyContent: {
      value: "center"
    },
    color: {
      value: "{colors.font.inverse.value}"
    },
    fontSize: {
      value: "{fontSizes.small.value}"
    },
    backgroundColor: {
      value: "{colors.overlay.40.value}"
    }
  },
  button: {
    color: {
      value: "{colors.font.primary.value}"
    },
    paddingInlineStart: {
      value: "{space.xxs.value}"
    },
    paddingInlineEnd: {
      value: "{space.xxs.value}"
    },
    transitionProperty: {
      value: "background-color"
    },
    transitionDuration: {
      value: "{time.medium.value}"
    },
    hover: {
      backgroundColor: {
        value: "{colors.overlay.10.value}"
      },
      color: {
        value: "{colors.font.primary.value}"
      }
    },
    disabled: {
      color: {
        value: "{colors.font.disabled.value}"
      }
    }
  },
  ellipsis: {
    alignItems: {
      value: "baseline"
    },
    justifyContent: {
      value: "center"
    },
    paddingInlineStart: {
      value: "{space.xs.value}"
    },
    paddingInlineEnd: {
      value: "{space.xs.value}"
    }
  },
  itemContainer: {
    marginLeft: {
      value: "{space.xxxs.value}"
    },
    marginRight: {
      value: "{space.xxxs.value}"
    }
  },
  itemShared: {
    height: {
      value: "{fontSizes.xxl.value}"
    },
    minWidth: {
      value: "{fontSizes.xxl.value}"
    },
    borderRadius: {
      value: "{fontSizes.medium.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/passwordField.mjs
var passwordfield = {
  color: {
    value: "{components.fieldcontrol.color.value}"
  },
  button: {
    color: {
      value: "{components.button.color.value}"
    },
    _active: {
      backgroundColor: {
        value: "{components.button._active.backgroundColor.value}"
      },
      borderColor: {
        value: "{components.button._active.borderColor.value}"
      },
      color: {
        value: "{components.button._active.color.value}"
      }
    },
    _disabled: {
      backgroundColor: {
        value: "{components.button._disabled.backgroundColor.value}"
      },
      borderColor: {
        value: "{components.button._disabled.borderColor.value}"
      },
      color: {
        value: "{components.button._disabled.color.value}"
      }
    },
    _error: {
      color: {
        value: "{components.button.outlined.error.color.value}"
      },
      backgroundColor: {
        value: "{components.button.outlined.error.backgroundColor.value}"
      },
      borderColor: {
        value: "{components.button.outlined.error.borderColor.value}"
      },
      _active: {
        borderColor: {
          value: "{components.button.outlined.error._active.borderColor.value}"
        },
        backgroundColor: {
          value: "{components.button.outlined.error._active.backgroundColor.value}"
        },
        color: {
          value: "{components.button.outlined.error._active.color.value}"
        }
      },
      _focus: {
        borderColor: {
          value: "{components.button.outlined.error._focus.borderColor.value}"
        },
        backgroundColor: {
          value: "{components.button.outlined.error._focus.backgroundColor.value}"
        },
        color: {
          value: "{components.button.outlined.error._focus.color.value}"
        },
        boxShadow: {
          value: "{components.button.outlined.error._focus.boxShadow.value}"
        }
      },
      _hover: {
        borderColor: {
          value: "{components.button.outlined.error._hover.borderColor.value}"
        },
        backgroundColor: {
          value: "{components.button.outlined.error._hover.backgroundColor.value}"
        },
        color: {
          value: "{components.button.outlined.error._hover.color.value}"
        }
      }
    },
    _focus: {
      backgroundColor: {
        value: "{components.button._focus.backgroundColor.value}"
      },
      borderColor: {
        value: "{components.button._focus.borderColor.value}"
      },
      color: {
        value: "{components.button._focus.color.value}"
      }
    },
    _hover: {
      backgroundColor: {
        value: "{components.button._hover.backgroundColor.value}"
      },
      borderColor: {
        value: "{components.button._hover.borderColor.value}"
      },
      color: {
        value: "{components.button._hover.color.value}"
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/phoneNumberField.mjs
var phonenumberfield = {
  color: {
    value: "{components.fieldcontrol.color}"
  },
  borderColor: {
    value: "{components.fieldcontrol.borderColor}"
  },
  fontSize: {
    value: "{components.fieldcontrol.fontSize}"
  },
  _focus: {
    borderColor: {
      value: "{components.fieldcontrol._focus.borderColor}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/placeholder.mjs
var placeholder = {
  borderRadius: {
    value: "{radii.small.value}"
  },
  transitionDuration: {
    value: "{time.long.value}"
  },
  startColor: {
    value: "{colors.background.secondary.value}"
  },
  endColor: {
    value: "{colors.background.tertiary.value}"
  },
  // sizes
  small: {
    height: {
      value: "{space.small.value}"
    }
  },
  default: {
    height: {
      value: "{space.medium.value}"
    }
  },
  large: {
    height: {
      value: "{space.large.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/radio.mjs
var radio = {
  alignItems: {
    value: "center"
  },
  justifyContent: {
    value: "flex-start"
  },
  gap: {
    value: "inherit"
  },
  _disabled: {
    cursor: {
      value: "not-allowed"
    }
  },
  button: {
    alignItems: {
      value: "center"
    },
    justifyContent: {
      value: "center"
    },
    width: {
      value: "{fontSizes.medium.value}"
    },
    height: {
      value: "{fontSizes.medium.value}"
    },
    boxSizing: {
      value: "border-box"
    },
    borderWidth: {
      value: "{borderWidths.medium.value}"
    },
    borderStyle: {
      value: "solid"
    },
    borderRadius: {
      value: "50%"
    },
    borderColor: {
      value: "{colors.border.primary.value}"
    },
    color: {
      value: "{colors.background.primary.value}"
    },
    backgroundColor: {
      value: "{colors.background.primary.value}"
    },
    transitionProperty: {
      value: "all"
    },
    transitionDuration: {
      value: "{time.medium.value}"
    },
    outlineColor: {
      value: "{colors.transparent.value}"
    },
    outlineStyle: {
      value: "solid"
    },
    outlineWidth: {
      value: "{outlineWidths.medium.value}"
    },
    outlineOffset: {
      value: "{outlineOffsets.medium.value}"
    },
    // We want the dot inside the border to be a border-width from the border
    padding: {
      value: "{borderWidths.medium.value}"
    },
    small: {
      width: {
        value: "{fontSizes.small.value}"
      },
      height: {
        value: "{fontSizes.small.value}"
      }
    },
    large: {
      width: {
        value: "{fontSizes.large.value}"
      },
      height: {
        value: "{fontSizes.large.value}"
      }
    },
    _checked: {
      color: {
        value: "{colors.primary.80.value}"
      },
      _disabled: {
        color: {
          value: "{colors.background.disabled.value}"
        }
      }
    },
    _focus: {
      borderColor: {
        value: "{colors.border.focus.value}"
      },
      boxShadow: {
        value: "{components.fieldcontrol._focus.boxShadow.value}"
      }
    },
    _error: {
      borderColor: {
        value: "{colors.border.error.value}"
      },
      _focus: {
        boxShadow: {
          value: "{components.fieldcontrol._error._focus.boxShadow.value}"
        }
      }
    },
    _disabled: {
      borderColor: {
        value: "{colors.border.disabled.value}"
      },
      backgroundColor: {
        value: "{colors.background.primary.value}"
      }
    }
  },
  label: {
    color: {
      value: "{components.text.color.value}"
    },
    _disabled: {
      color: {
        value: "{colors.font.disabled.value}"
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/radioGroup.mjs
var radiogroup = {
  radio: {
    borderWidth: {
      value: "{components.radio.button.borderWidth}"
    },
    borderColor: {
      value: "{components.radio.button.borderColor}"
    },
    backgroundColor: {
      value: "{components.radio.button.backgroundColor}"
    },
    _checked: {
      color: {
        value: "{components.radio.button._checked.color}"
      }
    },
    label: {
      color: {
        value: "{components.radio.label.color}"
      }
    }
  },
  legend: {
    color: {
      value: "{components.fieldset.legend.color}"
    },
    fontWeight: {
      value: "{fontWeights.normal}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/rating.mjs
var rating = {
  large: {
    size: {
      value: "{fontSizes.xxxl.value}"
    }
  },
  default: {
    size: {
      value: "{fontSizes.xl.value}"
    }
  },
  small: {
    size: {
      value: "{fontSizes.small.value}"
    }
  },
  filled: {
    color: {
      value: "{colors.secondary.80.value}"
    }
  },
  empty: {
    color: {
      value: "{colors.background.tertiary.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/searchField.mjs
var searchfield = {
  color: {
    value: "{components.fieldcontrol.color.value}"
  },
  button: {
    color: {
      value: "{components.button.color.value}"
    },
    backgroundColor: {
      value: "{colors.background.primary.value}"
    },
    _active: {
      backgroundColor: {
        value: "{components.button._active.backgroundColor.value}"
      },
      borderColor: {
        value: "{components.button._active.borderColor.value}"
      },
      color: {
        value: "{components.button._active.color.value}"
      }
    },
    _disabled: {
      backgroundColor: {
        value: "{components.button._disabled.backgroundColor.value}"
      },
      borderColor: {
        value: "{components.button._disabled.borderColor.value}"
      },
      color: {
        value: "{components.button._disabled.color.value}"
      }
    },
    _focus: {
      backgroundColor: {
        value: "{components.button._focus.backgroundColor.value}"
      },
      borderColor: {
        value: "{components.button._focus.borderColor.value}"
      },
      color: {
        value: "{components.button._focus.color.value}"
      }
    },
    _hover: {
      backgroundColor: {
        value: "{components.button._hover.backgroundColor.value}"
      },
      borderColor: {
        value: "{components.button._hover.borderColor.value}"
      },
      color: {
        value: "{components.button._hover.color.value}"
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/select.mjs
var select = {
  color: {
    value: "{components.fieldcontrol.color}"
  },
  backgroundColor: {
    value: "{colors.background.primary.value}"
  },
  paddingInlineEnd: {
    value: "{space.xxl.value}"
  },
  _disabled: {
    color: {
      value: "{colors.font.disabled.value}"
    },
    backgroundColor: {
      value: "{colors.background.disabled.value}"
    }
  },
  // wrappers
  wrapper: {
    flex: {
      value: "1"
    },
    display: {
      value: "block"
    },
    position: {
      value: "relative"
    },
    cursor: {
      value: "pointer"
    }
  },
  iconWrapper: {
    alignItems: {
      value: "center"
    },
    position: {
      value: "absolute"
    },
    top: {
      value: "50%"
    },
    right: {
      value: "{space.medium.value}"
    },
    transform: {
      value: "translateY(-50%)"
    },
    pointerEvents: {
      value: "none"
    },
    small: {
      right: {
        value: "{space.xs.value}"
      }
    },
    large: {
      right: {
        value: "{space.medium.value}"
      }
    }
  },
  // It's important to test these option values on Chrome/FireFox/Edge
  // on Windows because they allow styling of the option element.
  // Chrome/Safari/Firefox on Mac uses the system ui.
  option: {
    backgroundColor: {
      value: "transparent"
    },
    color: {
      value: "{colors.font.primary.value}"
    },
    _disabled: {
      color: {
        value: "{colors.font.disabled.value}"
      },
      backgroundColor: {
        value: "transparent"
      }
    }
  },
  whiteSpace: {
    value: "nowrap"
  },
  minWidth: {
    value: "6.5rem"
  },
  small: {
    minWidth: {
      value: "5.5rem"
    },
    paddingInlineEnd: {
      value: "{space.xl.value}"
    }
  },
  large: {
    minWidth: {
      value: "7.5rem"
    },
    paddingInlineEnd: {
      value: "{space.xxl.value}"
    }
  },
  expanded: {
    paddingBlock: {
      value: "{space.xs.value}"
    },
    paddingInline: {
      value: "{space.small.value}"
    },
    option: {
      paddingBlock: {
        value: "{space.xs.value}"
      },
      paddingInline: {
        value: "{space.small.value}"
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/selectField.mjs
var selectfield = {
  borderColor: {
    value: "{components.fieldcontrol.borderColor}"
  },
  color: {
    value: "{components.fieldcontrol.color}"
  },
  flexDirection: {
    value: "column"
  },
  fontSize: {
    value: "{components.fieldcontrol.fontSize}"
  },
  _focus: {
    borderColor: {
      value: "{components.fieldcontrol._focus.borderColor}"
    }
  },
  label: {
    color: {
      value: "{components.field.label.color}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/sliderField.mjs
var sliderfield = {
  paddingBlock: {
    value: "{space.xs.value}"
  },
  // The track is the thin background of the slider
  track: {
    backgroundColor: {
      value: "{colors.background.quaternary.value}"
    },
    borderRadius: {
      value: "9999px"
    },
    height: {
      value: "0.375rem"
    },
    minWidth: {
      value: "10rem"
    }
  },
  // The range is the filled part of the track
  range: {
    backgroundColor: {
      value: "{colors.primary.80.value}"
    },
    borderRadius: {
      value: "9999px"
    },
    _disabled: {
      backgroundColor: {
        value: "{colors.background.disabled.value}"
      }
    }
  },
  // The thumb is the circle above the track that the user drags
  thumb: {
    width: {
      value: "1.25rem"
    },
    height: {
      value: "1.25rem"
    },
    backgroundColor: {
      value: "{colors.background.primary.value}"
    },
    boxShadow: {
      value: "{shadows.small.value}"
    },
    borderRadius: {
      value: "50%"
    },
    borderWidth: {
      value: "{borderWidths.medium.value}"
    },
    borderColor: {
      value: "{colors.border.primary.value}"
    },
    borderStyle: {
      value: "solid"
    },
    _disabled: {
      backgroundColor: {
        value: "{colors.background.disabled.value}"
      },
      borderColor: {
        value: "transparent"
      },
      boxShadow: {
        value: "none"
      }
    },
    _hover: {
      backgroundColor: {
        value: "{colors.background.primary.value}"
      },
      borderColor: {
        value: "{colors.border.focus.value}"
      }
    },
    _focus: {
      borderColor: {
        value: "{colors.border.focus.value}"
      },
      boxShadow: {
        value: "{components.fieldcontrol._focus.boxShadow.value}"
      }
    }
  },
  small: {
    track: {
      height: {
        value: "0.25rem"
      }
    },
    thumb: {
      width: {
        value: "1rem"
      },
      height: {
        value: "1rem"
      }
    }
  },
  large: {
    track: {
      height: {
        value: "0.625rem"
      }
    },
    thumb: {
      width: {
        value: "1.5rem"
      },
      height: {
        value: "1.5rem"
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/stepperField.mjs
var stepperfield = {
  borderColor: {
    value: "{components.fieldcontrol.borderColor}"
  },
  flexDirection: {
    value: "column"
  },
  input: {
    color: {
      value: "{components.fieldcontrol.color}"
    },
    fontSize: {
      value: "{components.fieldcontrol.fontSize}"
    },
    textAlign: {
      value: "center"
    }
  },
  button: {
    color: {
      value: "{components.button.color}"
    },
    backgroundColor: {
      value: "{colors.transparent}"
    },
    _active: {
      color: {
        value: "{components.button._active.color}"
      },
      backgroundColor: {
        value: "{components.button._active.backgroundColor}"
      }
    },
    _focus: {
      color: {
        value: "{components.button._focus.color}"
      },
      backgroundColor: {
        value: "{components.button._focus.backgroundColor}"
      }
    },
    _disabled: {
      color: {
        value: "{components.button._disabled.color}"
      },
      backgroundColor: {
        value: "{components.fieldcontrol._disabled.backgroundColor}"
      }
    },
    _hover: {
      color: {
        value: "{components.button._hover.color}"
      },
      backgroundColor: {
        value: "{components.button._hover.backgroundColor}"
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/storagemanager.mjs
var storagemanager = {
  dropzone: {
    backgroundColor: {
      value: "{colors.background.primary}"
    },
    borderRadius: {
      value: "{radii.small}"
    },
    borderColor: {
      value: "{colors.border.primary}"
    },
    borderStyle: {
      value: "dashed"
    },
    borderWidth: {
      value: "{borderWidths.small}"
    },
    gap: {
      value: "{space.small}"
    },
    paddingBlock: {
      value: "{space.xl}"
    },
    paddingInline: {
      value: "{space.large}"
    },
    textAlign: {
      value: "center"
    },
    _active: {
      backgroundColor: {
        value: "{colors.primary.10}"
      },
      borderRadius: {
        value: "{components.storagemanager.dropzone.borderRadius}"
      },
      borderColor: {
        value: "{colors.border.pressed}"
      },
      borderStyle: {
        value: "{components.storagemanager.dropzone.borderStyle}"
      },
      borderWidth: {
        value: "{borderWidths.medium}"
      }
    },
    icon: {
      color: {
        value: "{colors.border.primary}"
      },
      fontSize: {
        value: "{fontSizes.xxl}"
      }
    },
    text: {
      color: {
        value: "{colors.font.tertiary}"
      },
      fontSize: {
        value: "{fontSizes.medium}"
      },
      fontWeight: {
        value: "{fontWeights.bold}"
      }
    }
  },
  file: {
    backgroundColor: {
      value: "{colors.background.primary}"
    },
    borderRadius: {
      value: "{radii.small}"
    },
    borderColor: {
      value: "{colors.border.primary}"
    },
    borderStyle: {
      value: "solid"
    },
    borderWidth: {
      value: "{borderWidths.small}"
    },
    paddingBlock: {
      value: "{space.xs}"
    },
    paddingInline: {
      value: "{space.small}"
    },
    gap: {
      value: "{space.small}"
    },
    alignItems: {
      value: "baseline"
    },
    name: {
      fontSize: {
        value: "{fontSizes.medium}"
      },
      fontWeight: {
        value: "{fontWeights.bold}"
      },
      color: {
        value: "{colors.font.primary}"
      }
    },
    size: {
      fontSize: {
        value: "{fontSizes.small}"
      },
      fontWeight: {
        value: "{fontWeights.normal}"
      },
      color: {
        value: "{colors.font.tertiary}"
      }
    },
    image: {
      width: {
        value: "{space.xxl}"
      },
      height: {
        value: "{space.xxl}"
      },
      backgroundColor: {
        value: "{colors.background.secondary}"
      },
      color: {
        value: "{colors.font.tertiary}"
      },
      borderRadius: {
        value: "{radii.small}"
      }
    }
  },
  filelist: {
    flexDirection: {
      value: "column"
    },
    gap: {
      value: "{space.small}"
    }
  },
  loader: {
    strokeLinecap: {
      value: "round"
    },
    strokeEmpty: {
      value: "{colors.border.secondary}"
    },
    strokeFilled: {
      value: "{components.loader.strokeFilled}"
    },
    strokeWidth: {
      value: "{borderWidths.large}"
    }
  },
  previewer: {
    backgroundColor: {
      value: "{colors.background.primary}"
    },
    borderColor: {
      value: "{colors.border.primary}"
    },
    borderStyle: {
      value: "solid"
    },
    borderWidth: {
      value: "{borderWidths.small}"
    },
    borderRadius: {
      value: "{radii.small}"
    },
    paddingBlock: {
      value: "{space.zero}"
    },
    paddingInline: {
      value: "{space.zero}"
    },
    maxHeight: {
      value: "40rem"
    },
    maxWidth: {
      value: "auto"
    },
    text: {
      fontSize: {
        value: "{fontSizes.medium}"
      },
      fontWeight: {
        value: "{fontWeights.bold}"
      },
      color: {
        value: "{colors.font.primary}"
      }
    },
    body: {
      paddingBlock: {
        value: "{space.medium}"
      },
      paddingInline: {
        value: "{space.medium}"
      },
      gap: {
        value: "{space.small}"
      }
    },
    footer: {
      justifyContent: {
        value: "flex-end"
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/switchField.mjs
var switchfield = {
  // States
  _disabled: {
    opacity: {
      value: "{opacities.60.value}"
    }
  },
  _focused: {
    shadow: {
      value: "{components.fieldcontrol._focus.boxShadow.value}"
    }
  },
  // Sizes
  fontSize: {
    value: "{fontSizes.medium.value}"
  },
  large: {
    fontSize: {
      value: "{fontSizes.large.value}"
    }
  },
  small: {
    fontSize: {
      value: "{fontSizes.small.value}"
    }
  },
  // Child elements
  label: {
    padding: {
      value: "{space.xs.value}"
    }
  },
  thumb: {
    backgroundColor: {
      value: "{colors.background.primary.value}"
    },
    borderColor: {
      value: "transparent"
    },
    borderWidth: {
      value: "{borderWidths.small.value}"
    },
    borderStyle: {
      value: "solid"
    },
    borderRadius: {
      value: "{radii.xxxl.value}"
    },
    checked: {
      transform: {
        value: "{transforms.slideX.medium.value}"
      }
    },
    transition: {
      duration: {
        value: "{time.medium.value}"
      }
    },
    width: {
      value: "{space.relative.medium.value}"
    }
  },
  track: {
    backgroundColor: {
      value: "{colors.background.quaternary.value}"
    },
    borderRadius: {
      value: "{radii.xxxl.value}"
    },
    checked: {
      backgroundColor: {
        value: "{colors.primary.80.value}"
      }
    },
    height: {
      value: "{space.relative.medium.value}"
    },
    padding: {
      value: "{outlineWidths.medium.value}"
    },
    transition: {
      duration: {
        value: "{time.short.value}"
      }
    },
    width: {
      value: "{space.relative.xl.value}"
    },
    _error: {
      backgroundColor: {
        value: "{colors.background.error.value}"
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/table.mjs
var table = {
  /**
   * Default table styles
   */
  borderCollapse: {
    value: "collapse"
  },
  display: {
    value: "table"
  },
  width: {
    value: "100%"
  },
  /**
   * Default table head styles
   */
  head: {
    display: {
      value: "table-header-group"
    },
    verticalAlign: {
      value: "middle"
    }
  },
  /**
   * Default table body styles
   */
  body: {
    display: {
      value: "table-row-group"
    },
    verticalAlign: {
      value: "middle"
    }
  },
  /**
   * Default table foot styles
   */
  foot: {
    display: {
      value: "table-footer-group"
    },
    verticalAlign: {
      value: "middle"
    }
  },
  /**
   * Default table row styles
   */
  row: {
    display: {
      value: "table-row"
    },
    verticalAlign: {
      value: "middle"
    },
    hover: {
      backgroundColor: {
        value: "{colors.background.tertiary.value}"
      }
    },
    striped: {
      backgroundColor: {
        value: "{colors.background.secondary.value}"
      }
    }
  },
  /**
   * Default table header cell styles
   */
  header: {
    borderColor: {
      value: "{colors.border.tertiary.value}"
    },
    borderStyle: {
      value: "solid"
    },
    borderWidth: {
      value: "{borderWidths.small.value}"
    },
    color: {
      value: "{colors.font.primary.value}"
    },
    display: {
      value: "table-cell"
    },
    fontSize: {
      value: "{fontSizes.medium.value}"
    },
    fontWeight: {
      value: "{fontWeights.bold.value}"
    },
    padding: {
      value: "{space.medium.value}"
    },
    verticalAlign: {
      value: "middle"
    },
    large: {
      fontSize: {
        value: "{fontSizes.large.value}"
      },
      padding: {
        value: "{space.large.value}"
      }
    },
    small: {
      fontSize: {
        value: "{fontSizes.small.value}"
      },
      padding: {
        value: "{space.xs.value}"
      }
    }
  },
  /**
   * Default table data cell styles
   */
  data: {
    borderColor: {
      value: "{colors.border.tertiary.value}"
    },
    borderStyle: {
      value: "solid"
    },
    borderWidth: {
      value: "{borderWidths.small.value}"
    },
    color: {
      value: "{colors.font.primary.value}"
    },
    display: {
      value: "table-cell"
    },
    fontSize: {
      value: "{fontSizes.medium.value}"
    },
    fontWeight: {
      value: "{fontWeights.normal.value}"
    },
    padding: {
      value: "{space.medium.value}"
    },
    verticalAlign: {
      value: "middle"
    },
    large: {
      fontSize: {
        value: "{fontSizes.large.value}"
      },
      padding: {
        value: "{space.large.value}"
      }
    },
    small: {
      fontSize: {
        value: "{fontSizes.small.value}"
      },
      padding: {
        value: "{space.xs.value}"
      }
    }
  },
  /**
   * Default table caption styles
   */
  caption: {
    captionSide: {
      value: "bottom"
    },
    color: {
      value: "{colors.font.primary.value}"
    },
    display: {
      value: "table-caption"
    },
    fontSize: {
      value: "{fontSizes.medium.value}"
    },
    textAlign: {
      value: "center"
    },
    wordBreak: {
      value: "break-all"
    },
    large: {
      fontSize: {
        value: "{fontSizes.large.value}"
      }
    },
    small: {
      fontSize: {
        value: "{fontSizes.small.value}"
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/tabs.mjs
var tabs = {
  backgroundColor: {
    value: "transparent"
  },
  borderColor: {
    value: "{colors.border.secondary.value}"
  },
  borderStyle: {
    value: "solid"
  },
  borderWidth: {
    value: "{borderWidths.medium.value}"
  },
  gap: {
    value: "0"
  },
  item: {
    backgroundColor: {
      value: "transparent"
    },
    borderColor: {
      value: "{colors.border.secondary.value}"
    },
    borderStyle: {
      value: "solid"
    },
    borderWidth: {
      value: "{borderWidths.medium.value}"
    },
    color: {
      value: "{colors.font.secondary.value}"
    },
    fontSize: {
      value: "{fontSizes.medium.value}"
    },
    fontWeight: {
      value: "{fontWeights.bold.value}"
    },
    paddingVertical: {
      value: "{space.small.value}"
    },
    paddingHorizontal: {
      value: "{space.medium.value}"
    },
    textAlign: {
      value: "center"
    },
    transitionDuration: {
      value: "{time.medium.value}"
    },
    _hover: {
      backgroundColor: {
        value: "transparent"
      },
      borderColor: {
        value: "{colors.border.focus.value}"
      },
      boxShadow: {
        value: "none"
      },
      color: {
        value: "{colors.font.hover.value}"
      }
    },
    _focus: {
      backgroundColor: {
        value: "transparent"
      },
      borderColor: {
        value: "{colors.border.focus.value}"
      },
      boxShadow: {
        value: {
          offsetX: "0px",
          offsetY: "0px",
          blurRadius: "0px",
          spreadRadius: "{borderWidths.medium}",
          color: "{colors.border.focus.value}"
        }
      },
      color: {
        value: "{colors.font.focus.value}"
      }
    },
    _active: {
      backgroundColor: {
        value: "transparent"
      },
      borderColor: {
        value: "{colors.font.interactive.value}"
      },
      boxShadow: {
        value: "none"
      },
      color: {
        value: "{colors.font.interactive.value}"
      }
    },
    _disabled: {
      backgroundColor: {
        value: "transparent"
      },
      borderColor: {
        value: "{colors.border.tertiary.value}"
      },
      boxShadow: {
        value: "none"
      },
      color: {
        value: "{colors.font.disabled.value}"
      }
    }
  },
  panel: {
    backgroundColor: {
      value: "transparent"
    },
    paddingInline: {
      value: "0"
    },
    paddingBlock: {
      value: "{space.small.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/text.mjs
var text = {
  // default styles
  color: {
    value: "{colors.font.primary.value}"
  },
  // variations
  primary: {
    color: {
      value: "{colors.font.primary.value}"
    }
  },
  secondary: {
    color: {
      value: "{colors.font.secondary.value}"
    }
  },
  tertiary: {
    color: {
      value: "{colors.font.tertiary.value}"
    }
  },
  error: {
    color: {
      value: "{colors.font.error.value}"
    }
  },
  warning: {
    color: {
      value: "{colors.font.warning.value}"
    }
  },
  success: {
    color: {
      value: "{colors.font.success.value}"
    }
  },
  info: {
    color: {
      value: "{colors.font.info.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/textAreaField.mjs
var textareafield = {
  color: {
    value: "{components.fieldcontrol.color.value}"
  },
  borderColor: {
    value: "{components.fieldcontrol.borderColor.value}"
  },
  _focus: {
    borderColor: {
      value: "{components.fieldcontrol._focus.borderColor.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/textField.mjs
var textfield = {
  color: {
    value: "{components.fieldcontrol.color.value}"
  },
  borderColor: {
    value: "{components.fieldcontrol.borderColor.value}"
  },
  fontSize: {
    value: "{components.fieldcontrol.fontSize.value}"
  },
  _focus: {
    borderColor: {
      value: "{components.fieldcontrol._focus.borderColor.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/toggleButton.mjs
var togglebutton = {
  borderColor: {
    value: "{colors.border.primary.value}"
  },
  color: {
    value: "{colors.font.primary.value}"
  },
  _hover: {
    backgroundColor: {
      value: "{colors.overlay.10.value}"
    }
  },
  _focus: {
    borderColor: {
      value: "{colors.border.focus.value}"
    },
    color: {
      value: "{colors.font.primary.value}"
    }
  },
  _active: {
    backgroundColor: {
      value: "{colors.transparent.value}"
    }
  },
  _disabled: {
    backgroundColor: {
      value: "{colors.transparent.value}"
    },
    borderColor: {
      value: "{colors.border.disabled.value}"
    },
    color: {
      value: "{colors.font.disabled.value}"
    }
  },
  _pressed: {
    borderColor: {
      value: "{colors.border.pressed.value}"
    },
    color: {
      value: "{colors.font.primary.value}"
    },
    backgroundColor: {
      value: "{colors.overlay.20.value}"
    },
    _hover: {
      backgroundColor: {
        value: "{colors.overlay.30.value}"
      }
    }
  },
  primary: {
    backgroundColor: {
      value: "{colors.transparent.value}"
    },
    borderWidth: {
      value: "{borderWidths.small.value}"
    },
    _focus: {
      borderColor: {
        value: "{colors.border.focus.value}"
      },
      backgroundColor: {
        value: "{colors.transparent.value}"
      },
      boxShadow: {
        value: "{components.fieldcontrol._focus.boxShadow.value}"
      },
      color: {
        value: "{colors.font.primary.value}"
      }
    },
    _hover: {
      backgroundColor: {
        value: "{colors.overlay.10.value}"
      },
      color: {
        value: "{colors.font.primary.value}"
      }
    },
    _disabled: {
      borderColor: {
        value: "{colors.border.disabled.value}"
      },
      backgroundColor: {
        value: "{colors.background.disabled.value}"
      },
      color: {
        value: "{colors.font.disabled.value}"
      }
    },
    _pressed: {
      backgroundColor: {
        value: "{colors.primary.80.value}"
      },
      borderColor: {
        value: "{colors.primary.80.value}"
      },
      color: {
        value: "{colors.background.primary.value}"
      },
      _focus: {
        backgroundColor: {
          value: "{colors.border.focus.value}"
        },
        borderColor: {
          value: "{colors.border.focus.value}"
        },
        color: {
          value: "{colors.background.primary.value}"
        }
      },
      _hover: {
        borderColor: {
          value: "{colors.primary.60.value}"
        },
        backgroundColor: {
          value: "{colors.primary.60.value}"
        },
        boxShadow: {
          value: "{colors.primary.60.value}"
        },
        color: {
          value: "{colors.background.primary.value}"
        }
      }
    }
  },
  link: {
    backgroundColor: {
      value: "{colors.transparent.value}"
    },
    color: {
      value: "{colors.overlay.50.value}"
    },
    _hover: {
      backgroundColor: {
        value: "{colors.transparent.value}"
      },
      color: {
        value: "{colors.overlay.50.value}"
      }
    },
    _focus: {
      backgroundColor: {
        value: "{colors.transparent.value}"
      },
      color: {
        value: "{colors.overlay.50.value}"
      }
    },
    _disabled: {
      backgroundColor: {
        value: "{colors.transparent.value}"
      },
      color: {
        value: "{colors.font.disabled.value}"
      }
    },
    _pressed: {
      backgroundColor: {
        value: "{colors.transparent.value}"
      },
      color: {
        value: "{colors.overlay.90.value}"
      },
      _focus: {
        backgroundColor: {
          value: "{colors.transparent.value}"
        },
        color: {
          value: "{colors.overlay.90.value}"
        }
      },
      _hover: {
        color: {
          value: "{colors.overlay.90.value}"
        },
        backgroundColor: {
          value: "{colors.transparent.value}"
        }
      }
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/toggleButtonGroup.mjs
var togglebuttongroup = {
  alignItems: {
    value: "center"
  },
  alignContent: {
    value: "center"
  },
  justifyContent: {
    value: "flex-start"
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/components/index.mjs
var components = {
  accordion,
  aiConversation,
  alert,
  authenticator,
  autocomplete,
  avatar,
  badge,
  breadcrumbs,
  button,
  card,
  checkbox,
  checkboxfield,
  collection,
  copy,
  countrycodeselect: dialcodeselect,
  divider,
  dropzone,
  field,
  fieldcontrol,
  fieldgroup,
  fieldmessages,
  fieldset,
  fileuploader,
  flex,
  heading,
  icon,
  highlightmatch,
  image,
  inappmessaging,
  input,
  link,
  liveness,
  loader,
  menu,
  message,
  pagination,
  passwordfield,
  phonenumberfield,
  placeholder,
  radio,
  radiogroup,
  rating,
  searchfield,
  select,
  selectfield,
  sliderfield,
  stepperfield,
  storagemanager,
  switchfield,
  table,
  tabs,
  text,
  textareafield,
  textfield,
  togglebutton,
  togglebuttongroup
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/fonts.mjs
var fonts = {
  default: {
    variable: {
      value: `'InterVariable', 'Inter var', 'Inter', -apple-system, BlinkMacSystemFont,
        'Helvetica Neue', 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans',
        sans-serif`
    },
    static: {
      value: `'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
        'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif`
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/fontSizes.mjs
var fontSizes = {
  xxxs: {
    value: "0.375rem"
  },
  xxs: {
    value: "0.5rem"
  },
  xs: {
    value: "0.75rem"
  },
  small: {
    value: "0.875rem"
  },
  medium: {
    value: "1rem"
  },
  large: {
    value: "1.25rem"
  },
  xl: {
    value: "1.5rem"
  },
  xxl: {
    value: "2rem"
  },
  xxxl: {
    value: "2.5rem"
  },
  xxxxl: {
    value: "3rem"
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/fontWeights.mjs
var fontWeights = {
  hairline: {
    value: 100
  },
  thin: {
    value: 200
  },
  light: {
    value: 300
  },
  normal: {
    value: 400
  },
  medium: {
    value: 500
  },
  semibold: {
    value: 600
  },
  bold: {
    value: 700
  },
  extrabold: {
    value: 800
  },
  black: {
    value: 900
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/lineHeights.mjs
var lineHeights = {
  small: {
    value: "1.25"
  },
  medium: {
    value: "1.5"
  },
  large: {
    value: "2"
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/opacities.mjs
var opacities = {
  0: {
    value: "0"
  },
  10: {
    value: "0.1"
  },
  20: {
    value: "0.2"
  },
  30: {
    value: "0.3"
  },
  40: {
    value: "0.4"
  },
  50: {
    value: "0.5"
  },
  60: {
    value: "0.6"
  },
  70: {
    value: "0.7"
  },
  80: {
    value: "0.8"
  },
  90: {
    value: "0.9"
  },
  100: {
    value: "1"
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/outlineOffsets.mjs
var outlineOffsets = {
  small: {
    value: "1px"
  },
  medium: {
    value: "2px"
  },
  large: {
    value: "3px"
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/outlineWidths.mjs
var outlineWidths = {
  small: {
    value: "1px"
  },
  medium: {
    value: "2px"
  },
  large: {
    value: "3px"
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/radii.mjs
var radii = {
  xs: {
    value: "0.125rem"
  },
  small: {
    value: "0.25rem"
  },
  medium: {
    value: "0.5rem"
  },
  large: {
    value: "1rem"
  },
  xl: {
    value: "2rem"
  },
  xxl: {
    value: "4rem"
  },
  xxxl: {
    value: "8rem"
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/shadows.mjs
var shadows = {
  small: {
    value: {
      offsetX: "0px",
      offsetY: "2px",
      blurRadius: "4px",
      color: "{colors.shadow.tertiary.value}"
    }
  },
  medium: {
    value: {
      offsetX: "0px",
      offsetY: "2px",
      blurRadius: "6px",
      color: "{colors.shadow.secondary.value}"
    }
  },
  large: {
    value: {
      offsetX: "0px",
      offsetY: "4px",
      blurRadius: "12px",
      color: "{colors.shadow.primary.value}"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/space.mjs
var space = {
  zero: {
    value: "0"
  },
  xxxs: {
    value: "0.25rem"
  },
  xxs: {
    value: "0.375rem"
  },
  xs: {
    value: "0.5rem"
  },
  small: {
    value: "0.75rem"
  },
  medium: {
    value: "1rem"
  },
  large: {
    value: "1.5rem"
  },
  xl: {
    value: "2.0rem"
  },
  xxl: {
    value: "3.0rem"
  },
  xxxl: {
    value: "4.5rem"
  },
  relative: {
    //creating a second set of sizes using em which will be sized relative to a parent instead of the root
    xxxs: {
      value: "0.25em"
    },
    xxs: {
      value: "0.375em"
    },
    xs: {
      value: "0.5em"
    },
    small: {
      value: "0.75em"
    },
    medium: {
      value: "1em"
    },
    large: {
      value: "1.5em"
    },
    xl: {
      value: "2.0em"
    },
    xxl: {
      value: "3.0em"
    },
    xxxl: {
      value: "4.5em"
    },
    full: {
      value: "100%"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/time.mjs
var time = {
  short: {
    value: "100ms"
  },
  medium: {
    value: "250ms"
  },
  long: {
    value: "500ms"
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/transforms.mjs
var transforms = {
  // TODO: make this more generic and cross-platform
  slideX: {
    small: {
      value: "translateX(0.5em)"
    },
    medium: {
      value: "translateX(1em)"
    },
    large: {
      value: "translateX(2em)"
    }
  }
};

// node_modules/@aws-amplify/ui/dist/esm/theme/tokens/index.mjs
var tokens = {
  components,
  borderWidths,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  opacities,
  outlineOffsets,
  outlineWidths,
  radii,
  shadows,
  space,
  time,
  transforms
};
var reactNativeTokens = {
  colors,
  borderWidths,
  fontSizes: {
    xxs: fontSizes.xxs,
    xs: fontSizes.xs,
    small: fontSizes.small,
    medium: fontSizes.medium,
    large: fontSizes.large,
    xl: fontSizes.xl,
    xxl: fontSizes.xxl,
    xxxl: fontSizes.xxxl
  },
  fontWeights,
  opacities,
  // React Native doesn't need the relative space values
  space: {
    // use `space.xxxs` to output a value of `2` and avoid odd space numbers
    xxs: space.xxxs,
    xs: space.xs,
    small: space.small,
    medium: space.medium,
    large: space.large,
    xl: space.xl,
    xxl: space.xxl,
    xxxl: space.xxxl
  },
  radii,
  time
};

// node_modules/@aws-amplify/ui/dist/esm/theme/createTheme/utils.mjs
var import_kebabCase = __toESM(require_kebabCase(), 1);

// node_modules/@aws-amplify/ui/dist/esm/utils/classNames.mjs
var classNames = (...args) => {
  const classes = [];
  for (const arg of args) {
    if (!arg) {
      continue;
    }
    if (isString(arg)) {
      classes.push(arg);
      continue;
    }
    if (typeof arg === "number") {
      classes.push(arg.toString());
      continue;
    }
    if (Array.isArray(arg)) {
      classes.push(classNames(...arg));
      continue;
    }
    if (isObject(arg)) {
      if (arg.toString !== Object.prototype.toString && arg.toString() !== "[object Object]") {
        classes.push(arg.toString());
        continue;
      }
      for (const key in arg) {
        if (has(arg, key) && arg[key]) {
          classes.push(key);
        }
      }
    }
  }
  return classes.join(" ");
};

// node_modules/@aws-amplify/ui/dist/esm/theme/defaultDarkModeOverride.mjs
var darkModeTokens = {
  colors: {
    red: {
      10: tokens.colors.red[100],
      20: tokens.colors.red[90],
      40: tokens.colors.red[80],
      // 60 doesn't change
      80: tokens.colors.red[40],
      90: tokens.colors.red[20],
      100: tokens.colors.red[10]
    },
    orange: {
      10: tokens.colors.orange[100],
      20: tokens.colors.orange[90],
      40: tokens.colors.orange[80],
      // 60 doesn't change
      80: tokens.colors.orange[40],
      90: tokens.colors.orange[20],
      100: tokens.colors.orange[10]
    },
    yellow: {
      10: tokens.colors.yellow[100],
      20: tokens.colors.yellow[90],
      40: tokens.colors.yellow[80],
      // 60 doesn't change
      80: tokens.colors.yellow[40],
      90: tokens.colors.yellow[20],
      100: tokens.colors.yellow[10]
    },
    green: {
      10: tokens.colors.green[100],
      20: tokens.colors.green[90],
      40: tokens.colors.green[80],
      // 60 doesn't change
      80: tokens.colors.green[40],
      90: tokens.colors.green[20],
      100: tokens.colors.green[10]
    },
    teal: {
      10: tokens.colors.teal[100],
      20: tokens.colors.teal[90],
      40: tokens.colors.teal[80],
      // 60 doesn't change
      80: tokens.colors.teal[40],
      90: tokens.colors.teal[20],
      100: tokens.colors.teal[10]
    },
    blue: {
      10: tokens.colors.blue[100],
      20: tokens.colors.blue[90],
      40: tokens.colors.blue[80],
      // 60 doesn't change
      80: tokens.colors.blue[40],
      90: tokens.colors.blue[20],
      100: tokens.colors.blue[10]
    },
    purple: {
      10: tokens.colors.purple[100],
      20: tokens.colors.purple[90],
      40: tokens.colors.purple[80],
      // 60 doesn't change
      80: tokens.colors.purple[40],
      90: tokens.colors.purple[20],
      100: tokens.colors.purple[10]
    },
    pink: {
      10: tokens.colors.pink[100],
      20: tokens.colors.pink[90],
      40: tokens.colors.pink[80],
      // 60 doesn't change
      80: tokens.colors.pink[40],
      90: tokens.colors.pink[20],
      100: tokens.colors.pink[10]
    },
    neutral: {
      10: tokens.colors.neutral[100],
      20: tokens.colors.neutral[90],
      40: tokens.colors.neutral[80],
      // 60 doesn't change
      80: tokens.colors.neutral[40],
      90: tokens.colors.neutral[20],
      100: tokens.colors.neutral[10]
    },
    font: {
      primary: "{colors.white}",
      secondary: "{colors.neutral.100}",
      tertiary: "{colors.neutral.90}",
      inverse: "{colors.neutral.10}"
    },
    background: {
      primary: "{colors.neutral.10}",
      secondary: "{colors.neutral.20}",
      tertiary: "{colors.neutral.40}"
    },
    border: {
      primary: "{colors.neutral.60}",
      secondary: "{colors.neutral.40}",
      tertiary: "{colors.neutral.20}"
    },
    shadow: {
      primary: {
        value: "hsla(100, 100%, 100%, 0.25)"
      },
      secondary: {
        value: "hsla(100, 100%, 100%, 0.15)"
      },
      tertiary: {
        value: "hsla(100, 100%, 100%, 0.05)"
      }
    },
    overlay: {
      5: "hsla(0, 0%, 100%, 0.05)",
      10: "hsla(0, 0%, 100%, 0.1)",
      20: "hsla(0, 0%, 100%, 0.2)",
      30: "hsla(0, 0%, 100%, 0.3)",
      40: "hsla(0, 0%, 100%, 0.4)",
      50: "hsla(0, 0%, 100%, 0.5)",
      60: "hsla(0, 0%, 100%, 0.6)",
      70: "hsla(0, 0%, 100%, 0.7)",
      80: "hsla(0, 0%, 100%, 0.8)",
      90: "hsla(0, 0%, 100%, 0.9)"
    }
  }
};
var reactNativeDarkTokens = __spreadValues({}, darkModeTokens);

// node_modules/@aws-amplify/ui/dist/esm/types/primitives/componentClassName.mjs
var ComponentClassName = {
  Accordion: "amplify-accordion",
  AccordionItem: "amplify-accordion__item",
  AccordionItemTrigger: "amplify-accordion__item__trigger",
  AccordionItemContent: "amplify-accordion__item__content",
  AccordionItemIcon: "amplify-accordion__item__icon",
  Alert: "amplify-alert",
  AlertIcon: "amplify-alert__icon",
  AlertHeading: "amplify-alert__heading",
  AlertBody: "amplify-alert__body",
  AlertDismiss: "amplify-alert__dismiss",
  Autocomplete: "amplify-autocomplete",
  AutocompleteMenu: "amplify-autocomplete__menu",
  AutocompleteMenuEmpty: "amplify-autocomplete__menu--empty",
  AutocompleteMenuFooter: "amplify-autocomplete__menu__footer",
  AutocompleteMenuHeader: "amplify-autocomplete__menu__header",
  AutocompleteMenuLoading: "amplify-autocomplete__menu--loading",
  AutocompleteMenuOption: "amplify-autocomplete__menu__option",
  AutocompleteMenuOptions: "amplify-autocomplete__menu__options",
  Avatar: "amplify-avatar",
  AvatarIcon: "amplify-avatar__icon",
  AvatarImage: "amplify-avatar__image",
  AvatarLoader: "amplify-avatar__loader",
  AIConversation: "amplify-ai-conversation",
  AIConversationScrollView: "amplify-ai-conversation__scrollview",
  AIConversationAttachment: "amplify-ai-conversation__attachment",
  AIConversationAttachmentList: "amplify-ai-conversation__attachment__list",
  AIConversationAttachmentImage: "amplify-ai-conversation__attachment__image",
  AIConversationAttachmentName: "amplify-ai-conversation__attachment__name",
  AIConversationAttachmentSize: "amplify-ai-conversation__attachment__size",
  AIConversationAttachmentRemove: "amplify-ai-conversation__attachment__remove",
  AIConversationForm: "amplify-ai-conversation__form",
  AIConversationFormAttach: "amplify-ai-conversation__form__attach",
  AIConversationFormError: "amplify-ai-conversation__form__error",
  AIConversationFormSend: "amplify-ai-conversation__form__send",
  AIConversationFormField: "amplify-ai-conversation__form__field",
  AIConversationFormDropzone: "amplify-ai-conversation__form__dropzone",
  AIConversationMessage: "amplify-ai-conversation__message",
  AIConversationMessageAvatar: "amplify-ai-conversation__message__avatar",
  AIConversationMessageSender: "amplify-ai-conversation__message__sender",
  AIConversationMessageSenderUsername: "amplify-ai-conversation__message__sender__username",
  AIConversationMessageSenderTimestamp: "amplify-ai-conversation__message__sender__timestamp",
  AIConversationMessageBody: "amplify-ai-conversation__message__body",
  AIConversationMessageContent: "amplify-ai-conversation__message__content",
  AIConversationMessageActions: "amplify-ai-conversation__message__actions",
  AIConversationMessageList: "amplify-ai-conversation__message__list",
  AIConversationPrompt: "amplify-ai-conversation__prompt",
  Badge: "amplify-badge",
  Breadcrumbs: "amplify-breadcrumbs",
  BreadcrumbsList: "amplify-breadcrumbs__list",
  BreadcrumbsItem: "amplify-breadcrumbs__item",
  BreadcrumbsSeparator: "amplify-breadcrumbs__separator",
  BreadcrumbsLink: "amplify-breadcrumbs__link",
  Button: "amplify-button",
  ButtonGroup: "amplify-buttongroup",
  ButtonLoaderWrapper: "amplify-button__loader-wrapper",
  Card: "amplify-card",
  Checkbox: "amplify-checkbox",
  CheckboxButton: "amplify-checkbox__button",
  CheckboxIcon: "amplify-checkbox__icon",
  CheckboxInput: "amplify-checkbox__input",
  CheckboxLabel: "amplify-checkbox__label",
  CheckboxField: "amplify-checkboxfield",
  Collection: "amplify-collection",
  CollectionItems: "amplify-collection-items",
  CollectionSearch: "amplify-collection-search",
  CollectionPagination: "amplify-collection-pagination",
  CountryCodeSelect: "amplify-countrycodeselect",
  DialCodeSelect: "amplify-dialcodeselect",
  Divider: "amplify-divider",
  DividerLabel: "amplify-divider--label",
  DropZone: "amplify-dropzone",
  Field: "amplify-field",
  FieldDescription: "amplify-field__description",
  FieldErrorMessage: "amplify-field__error-message",
  FieldGroup: "amplify-field-group",
  FieldGroupControl: "amplify-field-group__control",
  FieldGroupOuterEnd: "amplify-field-group__outer-end",
  FieldGroupOuterStart: "amplify-field-group__outer-start",
  FieldGroupInnerEnd: "amplify-field-group__inner-end",
  FieldGroupInnerStart: "amplify-field-group__inner-start",
  FieldGroupIcon: "amplify-field-group__icon",
  FieldGroupIconButton: "amplify-field-group__icon-button",
  FieldGroupHasInnerEnd: "amplify-field-group--has-inner-end",
  FieldGroupHasInnerStart: "amplify-field-group--has-inner-start",
  FieldShowPassword: "amplify-field__show-password",
  FieldGroupFieldWrapper: "amplify-field-group__field-wrapper",
  Fieldset: "amplify-fieldset",
  FieldsetLegend: "amplify-fieldset__legend",
  FileUploader: "amplify-fileuploader",
  FileUploaderDropZone: "amplify-fileuploader__dropzone",
  FileUploaderDropZoneIcon: "amplify-fileuploader__dropzone__icon",
  FileUploaderDropZoneText: "amplify-fileuploader__dropzone__text",
  FileUploaderFilePicker: "amplify-fileuploader__file__picker",
  FileUploaderFile: "amplify-fileuploader__file",
  FileUploaderFileWrapper: "amplify-fileuploader__file__wrapper",
  FileUploaderFileList: "amplify-fileuploader__file__list",
  FileUploaderFileName: "amplify-fileuploader__file__name",
  FileUploaderFileSize: "amplify-fileuploader__file__size",
  FileUploaderFileInfo: "amplify-fileuploader__file__info",
  FileUploaderFileImage: "amplify-fileuploader__file__image",
  FileUploaderFileMain: "amplify-fileuploader__file__main",
  FileUploaderFileStatus: "amplify-fileuploader__file__status",
  FileUploaderLoader: "amplify-fileuploader__loader",
  FileUploaderPreviewer: "amplify-fileuploader__previewer",
  FileUploaderPreviewerText: "amplify-fileuploader__previewer__text",
  FileUploaderPreviewerActions: "amplify-fileuploader__previewer__actions",
  FileUploaderPreviewerFooter: "amplify-fileuploader__previewer__footer",
  Flex: "amplify-flex",
  Grid: "amplify-grid",
  Heading: "amplify-heading",
  HighlightMatch: "amplify-highlightmatch",
  HighlightMatchHighlighted: "amplify-highlightmatch__highlighted",
  Icon: "amplify-icon",
  Image: "amplify-image",
  Input: "amplify-input",
  Label: "amplify-label",
  Link: "amplify-link",
  Loader: "amplify-loader",
  LoaderLabel: "amplify-loader__label",
  MenuContent: "amplify-menu__content",
  MenuItem: "amplify-menu__content__item",
  MenuTrigger: "amplify-menu__trigger",
  MenuWrapper: "amplify-menu__wrapper",
  Message: "amplify-message",
  MessageIcon: "amplify-message__icon",
  MessageHeading: "amplify-message__heading",
  MessageBody: "amplify-message__body",
  MessageContent: "amplify-message__content",
  MessageDismiss: "amplify-message__dismiss",
  Pagination: "amplify-pagination",
  PaginationItem: "amplify-pagination__item",
  PasswordField: "amplify-passwordfield",
  PhoneNumberField: "amplify-phonenumberfield",
  Placeholder: "amplify-placeholder",
  Radio: "amplify-radio",
  RadioButton: "amplify-radio__button",
  RadioInput: "amplify-radio__input",
  RadioLabel: "amplify-radio__label",
  RadioGroupField: "amplify-radiogroupfield",
  RadioGroup: "amplify-radiogroup",
  Rating: "amplify-rating",
  RatingItem: "amplify-rating__item",
  RatingIcon: "amplify-rating__icon",
  RatingLabel: "amplify-rating__label",
  ScrollView: "amplify-scrollview",
  SearchField: "amplify-searchfield",
  SearchFieldClear: "amplify-searchfield__clear",
  SearchFieldSearch: "amplify-searchfield__search",
  Select: "amplify-select",
  SelectField: "amplify-selectfield",
  SelectWrapper: "amplify-select__wrapper",
  SelectIcon: "amplify-select__icon",
  SliderField: "amplify-sliderfield",
  SliderFieldGroup: "amplify-sliderfield__group",
  SliderFieldLabel: "amplify-sliderfield__label",
  SliderFieldRange: "amplify-sliderfield__range",
  SliderFieldRoot: "amplify-sliderfield__root",
  SliderFieldThumb: "amplify-sliderfield__thumb",
  SliderFieldTrack: "amplify-sliderfield__track",
  StepperField: "amplify-stepperfield",
  StepperFieldButtonDecrease: "amplify-stepperfield__button--decrease",
  StepperFieldButtonIncrease: "amplify-stepperfield__button--increase",
  StepperFieldInput: "amplify-stepperfield__input",
  StorageImage: "amplify-storageimage",
  StorageManager: "amplify-storagemanager",
  StorageManagerDropZone: "amplify-storagemanager__dropzone",
  StorageManagerDropZoneIcon: "amplify-storagemanager__dropzone__icon",
  StorageManagerDropZoneText: "amplify-storagemanager__dropzone__text",
  StorageManagerFilePicker: "amplify-storagemanager__file__picker",
  StorageManagerFile: "amplify-storagemanager__file",
  StorageManagerFileWrapper: "amplify-storagemanager__file__wrapper",
  StorageManagerFileList: "amplify-storagemanager__file__list",
  StorageManagerFileName: "amplify-storagemanager__file__name",
  StorageManagerFileSize: "amplify-storagemanager__file__size",
  StorageManagerFileInfo: "amplify-storagemanager__file__info",
  StorageManagerFileImage: "amplify-storagemanager__file__image",
  StorageManagerFileMain: "amplify-storagemanager__file__main",
  StorageManagerFileStatus: "amplify-storagemanager__file__status",
  StorageManagerLoader: "amplify-storagemanager__loader",
  StorageManagerPreviewer: "amplify-storagemanager__previewer",
  StorageManagerPreviewerText: "amplify-storagemanager__previewer__text",
  StorageManagerPreviewerActions: "amplify-storagemanager__previewer__actions",
  StorageManagerPreviewerFooter: "amplify-storagemanager__previewer__footer",
  SwitchField: "amplify-switchfield",
  SwitchLabel: "amplify-switch__label",
  SwitchThumb: "amplify-switch__thumb",
  SwitchTrack: "amplify-switch__track",
  SwitchWrapper: "amplify-switch__wrapper",
  Table: "amplify-table",
  TableCaption: "amplify-table__caption",
  TableBody: "amplify-table__body",
  TableTd: "amplify-table__td",
  TableTh: "amplify-table__th",
  TableFoot: "amplify-table__foot",
  TableHead: "amplify-table__head",
  TableRow: "amplify-table__row",
  Tabs: "amplify-tabs",
  TabsList: "amplify-tabs__list",
  TabsItem: "amplify-tabs__item",
  TabsPanel: "amplify-tabs__panel",
  Text: "amplify-text",
  Textarea: "amplify-textarea",
  TextAreaField: "amplify-textareafield",
  TextField: "amplify-textfield",
  ToggleButton: "amplify-togglebutton",
  ToggleButtonGroup: "amplify-togglebuttongroup",
  VisuallyHidden: "amplify-visually-hidden"
};

// node_modules/@aws-amplify/ui/dist/esm/utils/setUserAgent/setUserAgent.mjs
var setUserAgent = ({
  componentName,
  packageName,
  version
}) => {
  const packageData = [`ui-${packageName}`, version];
  switch (componentName) {
    case "AIConversation": {
      setCustomUserAgent(__spreadProps(__spreadValues({}, AI_INPUT_BASE), {
        additionalDetails: [[componentName], packageData]
      }));
      break;
    }
    case "Authenticator": {
      setCustomUserAgent(__spreadProps(__spreadValues({}, AUTHENTICATOR_INPUT_BASE), {
        additionalDetails: [[componentName], packageData]
      }));
      break;
    }
    case "ChangePassword":
    case "DeleteUser": {
      setCustomUserAgent(__spreadProps(__spreadValues({}, ACCOUNT_SETTINGS_INPUT_BASE), {
        additionalDetails: [["AccountSettings"], packageData]
      }));
      break;
    }
    case "FileUploader": {
      setCustomUserAgent(__spreadProps(__spreadValues({}, FILE_UPLOADER_BASE_INPUT), {
        additionalDetails: [[componentName], packageData]
      }));
      break;
    }
    case "InAppMessaging": {
      setCustomUserAgent(__spreadProps(__spreadValues({}, IN_APP_MESSAGING_INPUT_BASE), {
        additionalDetails: [[componentName], packageData]
      }));
      break;
    }
    case "LocationSearch": {
      setCustomUserAgent(__spreadProps(__spreadValues({}, LOCATION_SEARCH_INPUT_BASE), {
        additionalDetails: [[componentName], packageData]
      }));
      break;
    }
    case "MapView": {
      setCustomUserAgent(__spreadProps(__spreadValues({}, MAP_VIEW_INPUT_BASE), {
        additionalDetails: [[componentName], packageData]
      }));
      break;
    }
    case "StorageManager": {
      setCustomUserAgent(__spreadProps(__spreadValues({}, STORAGE_MANAGER_INPUT_BASE), {
        additionalDetails: [[componentName], packageData]
      }));
      break;
    }
    case "StorageBrowser": {
      setCustomUserAgent(__spreadProps(__spreadValues({}, STORAGE_BROWSER_INPUT_BASE), {
        additionalDetails: [[componentName], packageData]
      }));
      break;
    }
  }
  return noop;
};

// node_modules/@aws-amplify/ui-angular/node_modules/nanoid/index.browser.js
var nanoid = (size = 21) => crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
  byte &= 63;
  if (byte < 36) {
    id += byte.toString(36);
  } else if (byte < 62) {
    id += (byte - 26).toString(36).toUpperCase();
  } else if (byte > 62) {
    id += "-";
  } else {
    id += "_";
  }
  return id;
}, "");

// node_modules/@aws-amplify/ui-angular/fesm2020/aws-amplify-ui-angular.mjs
var import_qrcode = __toESM(require_browser(), 1);
var _c0 = ["*"];
function AmplifySlotComponent_ng_content_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "!isOverriden"]);
  }
}
function AmplifySlotComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0, 2);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.overridingComponent)("ngTemplateOutletContext", ctx_r0.context);
  }
}
var _c1 = ["amplify-button", ""];
function PasswordFieldComponent__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 4);
    ɵɵelement(1, "path", 5);
    ɵɵelementEnd();
  }
}
function PasswordFieldComponent__svg_svg_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 4);
    ɵɵelement(1, "path", 6)(2, "path", 7);
    ɵɵelementEnd();
  }
}
function SelectComponent_option_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "option", 7);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("value", item_r1)("selected", item_r1 === ctx_r1.defaultValue);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", item_r1, " ");
  }
}
function FormFieldComponent_amplify_phone_number_field_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "amplify-phone-number-field", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.name)("label", ctx_r0.formField.label)("defaultCountryCode", ctx_r0.formField.dialCode)("dialCodeList", ctx_r0.formField.dialCodeList)("placeholder", ctx_r0.formField.placeholder)("required", ctx_r0.formField.isRequired)("labelHidden", ctx_r0.formField.labelHidden)("autocomplete", ctx_r0.formField.autocomplete)("hasError", ctx_r0.hasError)("describedBy", ctx_r0.ariaDescribedBy);
  }
}
function FormFieldComponent_amplify_password_field_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "amplify-password-field", 6);
    ɵɵlistener("setBlur", function FormFieldComponent_amplify_password_field_2_Template_amplify_password_field_setBlur_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext();
      return ɵɵresetView(ctx_r0.onBlur($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.name)("label", ctx_r0.formField.label)("placeholder", ctx_r0.formField.placeholder)("required", ctx_r0.formField.isRequired)("labelHidden", ctx_r0.formField.labelHidden)("autocomplete", ctx_r0.formField.autocomplete)("hasError", ctx_r0.hasError)("describedBy", ctx_r0.ariaDescribedBy);
  }
}
function FormFieldComponent_amplify_text_field_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "amplify-text-field", 7);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("name", ctx_r0.name)("label", ctx_r0.formField.label)("placeholder", ctx_r0.formField.placeholder)("required", ctx_r0.formField.isRequired)("labelHidden", ctx_r0.formField.labelHidden)("autocomplete", ctx_r0.formField.autocomplete)("type", ctx_r0.formField.type)("hasError", ctx_r0.hasError)("describedBy", ctx_r0.ariaDescribedBy);
  }
}
function FormFieldComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const error_r3 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.translate(error_r3), " ");
  }
}
function FormFieldComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, FormFieldComponent_div_4_div_1_Template, 2, 1, "div", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r0.errorId);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.errors);
  }
}
function BaseFormFieldsComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelement(1, "amplify-form-field", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const formField_r1 = ctx.$implicit;
    ɵɵadvance();
    ɵɵproperty("name", formField_r1[0])("formField", formField_r1[1]);
  }
}
function ErrorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1)(1, "div", 2);
    ɵɵnamespaceSVG();
    ɵɵelementStart(2, "svg", 3);
    ɵɵelement(3, "path", 4);
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(4, "div");
    ɵɵprojection(5);
    ɵɵelementEnd()();
    ɵɵelementStart(6, "button", 5);
    ɵɵlistener("click", function ErrorComponent_div_0_Template_button_click_6_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.close());
    });
    ɵɵnamespaceSVG();
    ɵɵelementStart(7, "svg", 3);
    ɵɵelement(8, "path", 6);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance(4);
    ɵɵproperty("fullWidth", false);
    ɵɵattribute("aria-label", ctx_r1.dismissAriaLabel);
    ɵɵadvance();
    ɵɵattribute("aria-hidden", true);
  }
}
function ConfirmResetPasswordComponent_amplify_error_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-error");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.authenticator.error, " ");
  }
}
function ConfirmSignInComponent_amplify_error_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-error");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.authenticator.error, " ");
  }
}
function ConfirmSignUpComponent_amplify_error_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-error");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.authenticator.error, " ");
  }
}
function ConfirmVerifyUserComponent_amplify_error_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-error");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.authenticator.error, " ");
  }
}
function ForceNewPasswordComponent_amplify_error_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-error");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.authenticator.error, " ");
  }
}
function ForgotPasswordComponent_amplify_error_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-error");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.authenticator.error, " ");
  }
}
function SelectMfaTypeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8)(1, "label")(2, "span");
    ɵɵtext(3);
    ɵɵelementEnd();
    ɵɵelement(4, "input", 9)(5, "span");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const mfaType_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.classNames(ctx_r2.ComponentClassName.Flex, ctx_r2.ComponentClassName.Field, ctx_r2.ComponentClassName.RadioGroupField));
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.classNames(ctx_r2.ComponentClassName.Flex, ctx_r2.ComponentClassName.Radio));
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.classNames(ctx_r2.ComponentClassName.Text, ctx_r2.ComponentClassName.RadioLabel));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.getMfaTypeLabelByValue(mfaType_r1), " ");
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.classNames(ctx_r2.ComponentClassName.Input, ctx_r2.ComponentClassName.FieldGroupControl, ctx_r2.ComponentClassName.VisuallyHidden, ctx_r2.ComponentClassName.RadioInput));
    ɵɵproperty("value", mfaType_r1)("checked", i_r2 === 0);
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.classNames(ctx_r2.ComponentClassName.Flex, ctx_r2.ComponentClassName.RadioButton));
    ɵɵattribute("aria-hidden", true);
  }
}
function SelectMfaTypeComponent_amplify_error_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-error");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.authenticator.error, " ");
  }
}
function SetupEmailComponent_amplify_error_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-error");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.authenticator.error, " ");
  }
}
function SetupTotpComponent_p_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p");
    ɵɵtext(1, "Loading...");
    ɵɵelementEnd();
  }
}
function SetupTotpComponent_img_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "img", 15);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("src", ctx_r0.qrCodeSource, ɵɵsanitizeUrl);
  }
}
function SetupTotpComponent_amplify_error_20_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-error");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.authenticator.error, " ");
  }
}
function FederatedSignInComponent_div_0_amplify_federated_sign_in_button_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-federated-sign-in-button", 5);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 6);
    ɵɵelement(2, "path", 7);
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(3, "p", 8);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("text", ctx_r0.signInAmazonText)("provider", ctx_r0.FederatedProviders.Amazon);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ctx_r0.signInAmazonText, " ");
  }
}
function FederatedSignInComponent_div_0_amplify_federated_sign_in_button_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-federated-sign-in-button", 9);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 10);
    ɵɵelement(2, "path", 11);
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(3, "p", 8);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("provider", ctx_r0.FederatedProviders.Apple);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ctx_r0.signInAppleText, " ");
  }
}
function FederatedSignInComponent_div_0_amplify_federated_sign_in_button_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-federated-sign-in-button", 5);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 12);
    ɵɵelement(2, "path", 13);
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(3, "p", 8);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("text", ctx_r0.signInFacebookText)("provider", ctx_r0.FederatedProviders.Facebook);
    ɵɵadvance(4);
    ɵɵtextInterpolate1(" ", ctx_r0.signInFacebookText, " ");
  }
}
function FederatedSignInComponent_div_0_amplify_federated_sign_in_button_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-federated-sign-in-button", 9);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 14);
    ɵɵelement(2, "path", 15)(3, "path", 16)(4, "path", 17)(5, "path", 18);
    ɵɵelementEnd();
    ɵɵnamespaceHTML();
    ɵɵelementStart(6, "p", 8);
    ɵɵtext(7);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("provider", ctx_r0.FederatedProviders.Google);
    ɵɵadvance(7);
    ɵɵtextInterpolate1(" ", ctx_r0.signInGoogleText, " ");
  }
}
function FederatedSignInComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, FederatedSignInComponent_div_0_amplify_federated_sign_in_button_1_Template, 5, 3, "amplify-federated-sign-in-button", 2)(2, FederatedSignInComponent_div_0_amplify_federated_sign_in_button_2_Template, 5, 2, "amplify-federated-sign-in-button", 3)(3, FederatedSignInComponent_div_0_amplify_federated_sign_in_button_3_Template, 5, 3, "amplify-federated-sign-in-button", 2)(4, FederatedSignInComponent_div_0_amplify_federated_sign_in_button_4_Template, 8, 2, "amplify-federated-sign-in-button", 3);
    ɵɵelement(5, "hr", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.includeAmazon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.includeApple);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.includeFacebook);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.includeGoogle);
    ɵɵadvance();
    ɵɵattribute("data-label", ctx_r0.orText);
  }
}
function SignInComponent_amplify_error_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-error");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.authenticator.error, " ");
  }
}
function SignUpComponent_amplify_error_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-error");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.authenticator.error, " ");
  }
}
function TabItemComponent_ng_content_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵprojection(0, 0, ["*ngIf", "active"]);
  }
}
function TabsComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 3);
    ɵɵlistener("click", function TabsComponent_button_2_Template_button_click_0_listener() {
      const tab_r2 = ɵɵrestoreView(_r1).$implicit;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.handleTabClick(tab_r2));
    });
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    ɵɵclassMap(tab_r2.active ? "amplify-tabs__item--active" : "");
    ɵɵproperty("id", tab_r2.labelledById)("tabindex", tab_r2.active ? "0" : "-1");
    ɵɵattribute("aria-selected", tab_r2.active)("aria-controls", tab_r2.id);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", tab_r2.title, " ");
  }
}
function VerifyUserComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "input", 9);
    ɵɵelementStart(2, "label", 10);
    ɵɵtext(3);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const unverifiedUserAttribute_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("value", unverifiedUserAttribute_r1.key)("id", ctx_r2.labelId)("checked", i_r2 === 0);
    ɵɵadvance();
    ɵɵproperty("for", ctx_r2.labelId);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.getLabel(unverifiedUserAttribute_r1.key, unverifiedUserAttribute_r1.value));
  }
}
function VerifyUserComponent_amplify_error_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-error");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r2.authenticator.error, " ");
  }
}
function AuthenticatorComponent_div_0_amplify_tabs_4_amplify_slot_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-slot", 22);
    ɵɵelement(1, "amplify-sign-in");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("context", ctx_r1.context);
  }
}
function AuthenticatorComponent_div_0_amplify_tabs_4_amplify_slot_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-slot", 23);
    ɵɵelement(1, "amplify-sign-up");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("context", ctx_r1.context);
  }
}
function AuthenticatorComponent_div_0_amplify_tabs_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "amplify-tabs", 19);
    ɵɵlistener("tabChange", function AuthenticatorComponent_div_0_amplify_tabs_4_Template_amplify_tabs_tabChange_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onTabChange());
    });
    ɵɵelementStart(1, "amplify-tab-item", 20);
    ɵɵtemplate(2, AuthenticatorComponent_div_0_amplify_tabs_4_amplify_slot_2_Template, 2, 1, "amplify-slot", 7);
    ɵɵelementEnd();
    ɵɵelementStart(3, "amplify-tab-item", 20);
    ɵɵtemplate(4, AuthenticatorComponent_div_0_amplify_tabs_4_amplify_slot_4_Template, 2, 1, "amplify-slot", 21);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("title", ctx_r1.signInTitle)("active", ctx_r1.route === "signIn");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.route === "signIn");
    ɵɵadvance();
    ɵɵproperty("title", ctx_r1.signUpTitle)("active", ctx_r1.route === "signUp");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.route === "signUp");
  }
}
function AuthenticatorComponent_div_0_amplify_slot_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-slot", 22);
    ɵɵelement(1, "amplify-sign-in");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("context", ctx_r1.context);
  }
}
function AuthenticatorComponent_div_0_amplify_slot_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-slot", 24);
    ɵɵelement(1, "amplify-confirm-sign-up");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("context", ctx_r1.context);
  }
}
function AuthenticatorComponent_div_0_amplify_slot_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-slot", 25);
    ɵɵelement(1, "amplify-confirm-sign-in");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("context", ctx_r1.context);
  }
}
function AuthenticatorComponent_div_0_amplify_slot_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-slot", 26);
    ɵɵelement(1, "amplify-setup-totp");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("context", ctx_r1.context);
  }
}
function AuthenticatorComponent_div_0_amplify_slot_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-slot", 27);
    ɵɵelement(1, "amplify-force-new-password");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("context", ctx_r1.context);
  }
}
function AuthenticatorComponent_div_0_amplify_slot_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-slot", 28);
    ɵɵelement(1, "amplify-forgot-password");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("context", ctx_r1.context);
  }
}
function AuthenticatorComponent_div_0_amplify_slot_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-slot", 29);
    ɵɵelement(1, "amplify-confirm-reset-password");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("context", ctx_r1.context);
  }
}
function AuthenticatorComponent_div_0_amplify_slot_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-slot", 30);
    ɵɵelement(1, "amplify-verify-user");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("context", ctx_r1.context);
  }
}
function AuthenticatorComponent_div_0_amplify_slot_13_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-slot", 31);
    ɵɵelement(1, "amplify-confirm-verify-user");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("context", ctx_r1.context);
  }
}
function AuthenticatorComponent_div_0_amplify_slot_14_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-slot", 32);
    ɵɵelement(1, "amplify-select-mfa-type");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("context", ctx_r1.context);
  }
}
function AuthenticatorComponent_div_0_amplify_slot_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-slot", 33);
    ɵɵelement(1, "amplify-setup-email");
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("context", ctx_r1.context);
  }
}
function AuthenticatorComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 2)(1, "div", 3);
    ɵɵelement(2, "amplify-slot", 4);
    ɵɵelementStart(3, "div", 5);
    ɵɵtemplate(4, AuthenticatorComponent_div_0_amplify_tabs_4_Template, 5, 6, "amplify-tabs", 6)(5, AuthenticatorComponent_div_0_amplify_slot_5_Template, 2, 1, "amplify-slot", 7)(6, AuthenticatorComponent_div_0_amplify_slot_6_Template, 2, 1, "amplify-slot", 8)(7, AuthenticatorComponent_div_0_amplify_slot_7_Template, 2, 1, "amplify-slot", 9)(8, AuthenticatorComponent_div_0_amplify_slot_8_Template, 2, 1, "amplify-slot", 10)(9, AuthenticatorComponent_div_0_amplify_slot_9_Template, 2, 1, "amplify-slot", 11)(10, AuthenticatorComponent_div_0_amplify_slot_10_Template, 2, 1, "amplify-slot", 12)(11, AuthenticatorComponent_div_0_amplify_slot_11_Template, 2, 1, "amplify-slot", 13)(12, AuthenticatorComponent_div_0_amplify_slot_12_Template, 2, 1, "amplify-slot", 14)(13, AuthenticatorComponent_div_0_amplify_slot_13_Template, 2, 1, "amplify-slot", 15)(14, AuthenticatorComponent_div_0_amplify_slot_14_Template, 2, 1, "amplify-slot", 16)(15, AuthenticatorComponent_div_0_amplify_slot_15_Template, 2, 1, "amplify-slot", 17);
    ɵɵelementEnd();
    ɵɵelement(16, "amplify-slot", 18);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵattribute("data-variation", ctx_r1.variation);
    ɵɵadvance(2);
    ɵɵproperty("context", ctx_r1.context);
    ɵɵadvance();
    ɵɵattribute("data-amplify-router-content", ctx_r1.hasTabs() ? void 0 : "");
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r1.route === "signIn" || ctx_r1.route === "signUp") && !ctx_r1.hideSignUp);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.route === "signIn" && ctx_r1.hideSignUp);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.route === "confirmSignUp");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.route === "confirmSignIn");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.route === "setupTotp");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.route === "forceNewPassword");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.route === "forgotPassword");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.route === "confirmResetPassword");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.route === "verifyUser");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.route === "confirmVerifyUser");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.route === "selectMfaType");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.route === "setupEmail");
    ɵɵadvance();
    ɵɵproperty("context", ctx_r1.context);
  }
}
function AuthenticatorComponent_amplify_slot_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "amplify-slot", 34);
    ɵɵprojection(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("context", ctx_r1.context);
  }
}
var _c2 = (a0) => ({
  "amplify-checkbox__button--error": a0
});
var _c3 = (a0) => ({
  "amplify-checkbox__icon--checked": a0
});
function CheckboxComponent_p_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p", 9);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
var AmplifySlotDirective = class {
  constructor(template) {
    this.template = template;
  }
  set amplifySlot(component) {
    this.name = component;
  }
};
AmplifySlotDirective.ɵfac = function AmplifySlotDirective_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AmplifySlotDirective)(ɵɵdirectiveInject(TemplateRef));
};
AmplifySlotDirective.ɵdir = ɵɵdefineDirective({
  type: AmplifySlotDirective,
  selectors: [["", "amplifySlot", ""]],
  inputs: {
    amplifySlot: "amplifySlot"
  },
  standalone: false
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AmplifySlotDirective, [{
    type: Directive,
    args: [{
      selector: "[amplifySlot]"
    }]
  }], function() {
    return [{
      type: TemplateRef
    }];
  }, {
    amplifySlot: [{
      type: Input
    }]
  });
})();
var CustomComponentsService = class {
  constructor() {
    this._customComponents = {};
  }
  get customComponents() {
    return this._customComponents;
  }
  set customComponents(customComponents) {
    this._customComponents = __spreadValues(__spreadValues({}, this._customComponents), customComponents);
  }
};
CustomComponentsService.ɵfac = function CustomComponentsService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CustomComponentsService)();
};
CustomComponentsService.ɵprov = ɵɵdefineInjectable({
  token: CustomComponentsService,
  factory: CustomComponentsService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomComponentsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var VERSION = "5.1.3";
var logger$1 = new ConsoleLogger("state-machine");
var AuthenticatorService = class {
  constructor() {
    this._authStatus = "configuring";
    const machine = createAuthenticatorMachine();
    this._authService = interpret(machine).start();
    this.getInitialAuthStatus();
    this.setupMachineSubscription();
    this.setupHubListener();
  }
  /**
   * Context facades
   */
  get error() {
    return translate(this._facade?.error);
  }
  get hasValidationErrors() {
    return this._facade?.hasValidationErrors;
  }
  get isPending() {
    return this._facade?.isPending;
  }
  get route() {
    return this._facade?.route;
  }
  get authStatus() {
    return this._authStatus;
  }
  get user() {
    return this._facade?.user;
  }
  get username() {
    return this._facade?.username;
  }
  get validationErrors() {
    return this._facade?.validationErrors;
  }
  get codeDeliveryDetails() {
    return this._facade?.codeDeliveryDetails;
  }
  get totpSecretCode() {
    return this._facade?.totpSecretCode;
  }
  /**
   * Service facades
   */
  get initializeMachine() {
    return this._facade.initializeMachine;
  }
  get updateForm() {
    return this._facade.updateForm;
  }
  get updateBlur() {
    return this._facade.updateBlur;
  }
  get resendCode() {
    return this._facade.resendCode;
  }
  get signOut() {
    return this._facade.signOut;
  }
  get submitForm() {
    return this._facade.submitForm;
  }
  /**
   * Transition facades
   */
  get toFederatedSignIn() {
    return this._facade.toFederatedSignIn;
  }
  get toForgotPassword() {
    return this._facade.toForgotPassword;
  }
  get toSignIn() {
    return this._facade.toSignIn;
  }
  get toSignUp() {
    return this._facade.toSignUp;
  }
  get skipVerification() {
    return this._facade.skipVerification;
  }
  /**
   * Internal utility functions
   */
  /** @deprecated For internal use only */
  get authState() {
    return this._authState;
  }
  /** @deprecated For internal use only */
  get authService() {
    return this._authService;
  }
  /** @deprecated For internal use only */
  get context() {
    return this._authState.context;
  }
  /** @deprecated For internal use only */
  get slotContext() {
    return __spreadProps(__spreadValues({}, this._facade), {
      $implicit: this._facade
    });
  }
  /** @deprecated For internal use only */
  get hubSubject() {
    return this._hubSubject;
  }
  subscribe(callback) {
    if (!this._authService) {
      logger$1.error("Subscription attempted before machine was created. This is likely a bug on the library, please consider filing a bug.");
    }
    const subscription = this._authService.subscribe(() => {
      callback(this._facade);
    });
    return subscription;
  }
  ngOnDestroy() {
    if (this._machineSubscription) this._machineSubscription.unsubscribe();
    if (this._unsubscribeHub) this._unsubscribeHub();
    this._authService.stop();
  }
  /** @deprecated For internal use only */
  send(event2) {
    this.authService.send(event2);
  }
  getInitialAuthStatus() {
    return __async(this, null, function* () {
      try {
        yield getCurrentUser();
        this._authStatus = "authenticated";
      } catch (e) {
        this._authStatus = "unauthenticated";
      }
    });
  }
  setupHubListener() {
    this._hubSubject = new Subject();
    const onSignIn = () => {
      this._authStatus = "authenticated";
    };
    const onSignOut = () => {
      this._authStatus = "unauthenticated";
    };
    this._unsubscribeHub = listenToAuthHub(this._authService, (data, service) => {
      defaultAuthHubHandler(data, service, {
        onSignIn,
        onSignOut
      });
      this._hubSubject.next();
    });
  }
  setupMachineSubscription() {
    this._machineSubscription = this._authService.subscribe((state) => {
      const newState = state;
      this._authState = newState;
      this._facade = getServiceFacade({
        send: this._authService.send,
        state: newState
      });
    });
  }
};
AuthenticatorService.ɵfac = function AuthenticatorService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AuthenticatorService)();
};
AuthenticatorService.ɵprov = ɵɵdefineInjectable({
  token: AuthenticatorService,
  factory: AuthenticatorService.ɵfac,
  providedIn: "root"
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthenticatorService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
      // ensure we have a singleton service
    }]
  }], function() {
    return [];
  }, null);
})();
var AmplifySlotComponent = class {
  constructor(propService) {
    this.propService = propService;
    this.display = "contents";
    this.isOverriden = false;
  }
  ngAfterContentInit() {
    const {
      customComponents
    } = this.propService;
    const overridingComponent = customComponents[this.name];
    if (overridingComponent) {
      this.overridingComponent = overridingComponent;
      this.isOverriden = true;
    }
  }
};
AmplifySlotComponent.ɵfac = function AmplifySlotComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AmplifySlotComponent)(ɵɵdirectiveInject(CustomComponentsService));
};
AmplifySlotComponent.ɵcmp = ɵɵdefineComponent({
  type: AmplifySlotComponent,
  selectors: [["amplify-slot"]],
  hostVars: 2,
  hostBindings: function AmplifySlotComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("display", ctx.display);
    }
  },
  inputs: {
    name: "name",
    context: "context"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 2,
  vars: 2,
  consts: [[4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext", 4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function AmplifySlotComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, AmplifySlotComponent_ng_content_0_Template, 1, 0, "ng-content", 0)(1, AmplifySlotComponent_ng_container_1_Template, 1, 2, "ng-container", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.isOverriden);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isOverriden);
    }
  },
  dependencies: [NgIf, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AmplifySlotComponent, [{
    type: Component,
    args: [{
      selector: "amplify-slot",
      template: `<!-- 
  if slot isn't overwritten, we display the the default coponent, which is the 
  children passed onto this component.
-->
<ng-content *ngIf="!isOverriden"></ng-content>

<!-- If slot is overwritten, we render that instead. -->
<ng-container
  *ngIf="isOverriden"
  [ngTemplateOutlet]="overridingComponent"
  [ngTemplateOutletContext]="context"
></ng-container>
`
    }]
  }], function() {
    return [{
      type: CustomComponentsService
    }];
  }, {
    name: [{
      type: Input
    }],
    context: [{
      type: Input
    }],
    display: [{
      type: HostBinding,
      args: ["style.display"]
    }]
  });
})();
var ButtonComponent = class {
  constructor() {
    this.type = "button";
    this.fullWidth = false;
    this.isDisabled = false;
    this.size = "medium";
    this.variation = "default";
    this.fontWeight = "normal";
  }
  get getDisabled() {
    return this.isDisabled ? "" : null;
  }
  get classNames() {
    let className = "amplify-button";
    if (this.variation) {
      className += ` amplify-button--${this.variation}`;
    }
    if (this.size) {
      className += ` amplify-button--${this.size}`;
    }
    if (this.fullWidth) {
      className += ` amplify-button--fullwidth`;
    }
    if (this.isDisabled) {
      className += ` amplify-button--disabled amplify-button--loading`;
    }
    return className;
  }
  ngOnInit() {
    this.typeAttr = this.type;
    this.fullWidthAttr = this.fullWidth;
    this.sizeAttr = this.size;
    this.variationAttr = this.variation;
    this.fontWeightAttr = this.fontWeight;
  }
};
ButtonComponent.ɵfac = function ButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ButtonComponent)();
};
ButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: ButtonComponent,
  selectors: [["button", "amplify-button", ""]],
  hostVars: 9,
  hostBindings: function ButtonComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵhostProperty("type", ctx.typeAttr);
      ɵɵattribute("data-fullwidth", ctx.fullWidthAttr)("data-size", ctx.sizeAttr)("data-variation", ctx.variationAttr)("disabled", ctx.getDisabled);
      ɵɵclassMap(ctx.classNames);
      ɵɵstyleProp("font-weight", ctx.fontWeightAttr);
    }
  },
  inputs: {
    type: "type",
    fullWidth: "fullWidth",
    isDisabled: "isDisabled",
    size: "size",
    variation: "variation",
    fontWeight: "fontWeight"
  },
  standalone: false,
  attrs: _c1,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function ButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ButtonComponent, [{
    type: Component,
    args: [{
      selector: "button[amplify-button]",
      template: "<ng-content></ng-content>\n"
    }]
  }], null, {
    type: [{
      type: Input
    }],
    fullWidth: [{
      type: Input
    }],
    isDisabled: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    variation: [{
      type: Input
    }],
    fontWeight: [{
      type: Input
    }],
    typeAttr: [{
      type: HostBinding,
      args: ["type"]
    }],
    fullWidthAttr: [{
      type: HostBinding,
      args: ["attr.data-fullwidth"]
    }],
    sizeAttr: [{
      type: HostBinding,
      args: ["attr.data-size"]
    }],
    variationAttr: [{
      type: HostBinding,
      args: ["attr.data-variation"]
    }],
    fontWeightAttr: [{
      type: HostBinding,
      args: ["style.font-weight"]
    }],
    getDisabled: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    classNames: [{
      type: HostBinding,
      args: ["class"]
    }]
  });
})();
var PasswordFieldComponent = class {
  constructor() {
    this.autocomplete = "new-password";
    this.disabled = false;
    this.fieldId = `amplify-field-${nanoid(12)}`;
    this.initialValue = "";
    this.label = "";
    this.placeholder = "";
    this.required = true;
    this.labelHidden = false;
    this.setBlur = new EventEmitter();
    this.type = "password";
    this.showPassword = false;
    this.showPasswordButtonlabel = translate("Show password");
    this.classnames = classNames;
    this.ComponentClassName = ComponentClassName;
  }
  togglePasswordText() {
    this.showPassword = !this.showPassword;
    this.showPasswordButtonlabel = this.showPassword ? translate("Hide password") : translate("Show password");
    this.type = this.showPassword ? "text" : "password";
  }
};
PasswordFieldComponent.ɵfac = function PasswordFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PasswordFieldComponent)();
};
PasswordFieldComponent.ɵcmp = ɵɵdefineComponent({
  type: PasswordFieldComponent,
  selectors: [["amplify-password-field"]],
  inputs: {
    autocomplete: "autocomplete",
    disabled: "disabled",
    fieldId: "fieldId",
    initialValue: "initialValue",
    label: "label",
    name: "name",
    placeholder: "placeholder",
    required: "required",
    labelHidden: "labelHidden",
    hasError: "hasError",
    describedBy: "describedBy"
  },
  outputs: {
    setBlur: "setBlur"
  },
  standalone: false,
  decls: 10,
  vars: 30,
  consts: [[1, "amplify-label", 3, "for"], ["autocapitalize", "off", 3, "blur", "id", "type", "name", "placeholder", "required", "value", "autocomplete"], ["amplify-button", "", "role", "switch", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 24 24", "class", "amplify-icon", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "currentColor", "viewBox", "0 0 24 24", 1, "amplify-icon"], ["d", "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"], ["d", "M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z", "fill", "none"], ["d", "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"]],
  template: function PasswordFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div")(1, "label", 0);
      ɵɵtext(2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div")(4, "div")(5, "input", 1);
      ɵɵlistener("blur", function PasswordFieldComponent_Template_input_blur_5_listener($event) {
        return ctx.setBlur.emit($event);
      });
      ɵɵelementEnd()();
      ɵɵelementStart(6, "div")(7, "button", 2);
      ɵɵlistener("click", function PasswordFieldComponent_Template_button_click_7_listener() {
        return ctx.togglePasswordText();
      });
      ɵɵtemplate(8, PasswordFieldComponent__svg_svg_8_Template, 2, 0, "svg", 3)(9, PasswordFieldComponent__svg_svg_9_Template, 3, 0, "svg", 3);
      ɵɵelementEnd()()()();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.classnames(ctx.ComponentClassName.Flex, ctx.ComponentClassName.Field, ctx.ComponentClassName.TextField, ctx.ComponentClassName.PasswordField));
      ɵɵadvance();
      ɵɵclassProp("amplify-visually-hidden", ctx.labelHidden);
      ɵɵproperty("for", ctx.fieldId);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.label, " ");
      ɵɵadvance();
      ɵɵclassMap(ctx.classnames(ctx.ComponentClassName.Flex, ctx.ComponentClassName.FieldGroup));
      ɵɵadvance();
      ɵɵclassMap(ctx.ComponentClassName.FieldGroupFieldWrapper);
      ɵɵadvance();
      ɵɵclassMap(ctx.classnames(ctx.ComponentClassName.Input, ctx.ComponentClassName.FieldGroupControl, ctx.ComponentClassName.FieldShowPassword));
      ɵɵproperty("id", ctx.fieldId)("type", ctx.type)("name", ctx.name)("placeholder", ctx.placeholder)("required", ctx.required)("value", ctx.initialValue)("autocomplete", ctx.autocomplete);
      ɵɵattribute("disabled", ctx.disabled ? "" : null)("aria-invalid", ctx.hasError ? "true" : "false")("aria-describedby", ctx.describedBy);
      ɵɵadvance();
      ɵɵclassMap(ctx.ComponentClassName.FieldGroupOuterEnd);
      ɵɵadvance();
      ɵɵclassMap(ctx.classnames(ctx.ComponentClassName.Input, ctx.ComponentClassName.FieldGroupControl));
      ɵɵattribute("aria-checked", ctx.type !== "password")("aria-label", ctx.showPasswordButtonlabel);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.showPassword);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.showPassword);
    }
  },
  dependencies: [NgIf, ButtonComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PasswordFieldComponent, [{
    type: Component,
    args: [{
      selector: "amplify-password-field",
      template: `<div
  [class]="
    classnames(
      ComponentClassName.Flex,
      ComponentClassName.Field,
      ComponentClassName.TextField,
      ComponentClassName.PasswordField
    )
  "
>
  <label
    class="amplify-label"
    [class.amplify-visually-hidden]="labelHidden"
    [for]="fieldId"
  >
    {{ label }}
  </label>
  <div
    [class]="classnames(ComponentClassName.Flex, ComponentClassName.FieldGroup)"
  >
    <div [class]="ComponentClassName.FieldGroupFieldWrapper">
      <input
        [class]="
          classnames(
            ComponentClassName.Input,
            ComponentClassName.FieldGroupControl,
            ComponentClassName.FieldShowPassword
          )
        "
        [id]="fieldId"
        [type]="type"
        [name]="name"
        [placeholder]="placeholder"
        [required]="required"
        [value]="initialValue"
        [autocomplete]="autocomplete"
        autocapitalize="off"
        [attr.disabled]="disabled ? '' : null"
        [attr.aria-invalid]="hasError ? 'true' : 'false'"
        [attr.aria-describedby]="describedBy"
        (blur)="setBlur.emit($event)"
      />
    </div>
    <div [class]="ComponentClassName.FieldGroupOuterEnd">
      <button
        amplify-button
        role="switch"
        (click)="togglePasswordText()"
        [attr.aria-checked]="type !== 'password'"
        [attr.aria-label]="showPasswordButtonlabel"
        [class]="
          classnames(
            ComponentClassName.Input,
            ComponentClassName.FieldGroupControl
          )
        "
      >
        <svg
          *ngIf="!showPassword"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          class="amplify-icon"
        >
          <path
            d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
          ></path>
        </svg>
        <svg
          *ngIf="showPassword"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          class="amplify-icon"
        >
          <path
            d="M0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0zm0 0h24v24H0z"
            fill="none"
          ></path>
          <path
            d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</div>
`
    }]
  }], null, {
    autocomplete: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    fieldId: [{
      type: Input
    }],
    initialValue: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    labelHidden: [{
      type: Input
    }],
    hasError: [{
      type: Input
    }],
    describedBy: [{
      type: Input
    }],
    setBlur: [{
      type: Output
    }]
  });
})();
var SelectComponent = class {
};
SelectComponent.ɵfac = function SelectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SelectComponent)();
};
SelectComponent.ɵcmp = ɵɵdefineComponent({
  type: SelectComponent,
  selectors: [["amplify-form-select"]],
  inputs: {
    items: "items",
    name: "name",
    label: "label",
    id: "id",
    defaultValue: "defaultValue"
  },
  standalone: false,
  decls: 8,
  vars: 5,
  consts: [[1, "amplify-label", "amplify-visually-hidden", 3, "for"], [1, "amplify-select__wrapper"], ["autocomplete", "tel-country-code", 1, "amplify-select", "amplify-field-group__control", 3, "id", "name"], [3, "value", "selected", 4, "ngFor", "ngForOf"], [1, "amplify-flex", "amplify-select__icon", 2, "align-items", "center", "justify-content", "center"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "data-size", "large", "fill", "currentColor", 1, "amplify-icon"], ["d", "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"], [3, "value", "selected"]],
  template: function SelectComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "label", 0);
      ɵɵtext(1);
      ɵɵelementEnd();
      ɵɵelementStart(2, "div", 1)(3, "select", 2);
      ɵɵtemplate(4, SelectComponent_option_4_Template, 2, 3, "option", 3);
      ɵɵelementEnd();
      ɵɵelementStart(5, "div", 4);
      ɵɵnamespaceSVG();
      ɵɵelementStart(6, "svg", 5);
      ɵɵelement(7, "path", 6);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵproperty("for", ctx.id);
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.label);
      ɵɵadvance(2);
      ɵɵproperty("id", ctx.id)("name", ctx.name);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.items);
    }
  },
  dependencies: [NgForOf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectComponent, [{
    type: Component,
    args: [{
      selector: "amplify-form-select",
      template: '<label class="amplify-label amplify-visually-hidden" [for]="id">{{\n  label\n}}</label>\n<div class="amplify-select__wrapper">\n  <select\n    class="amplify-select amplify-field-group__control"\n    autocomplete="tel-country-code"\n    [id]="id"\n    [name]="name"\n  >\n    <option\n      *ngFor="let item of items"\n      [value]="item"\n      [selected]="item === defaultValue"\n    >\n      {{ item }}\n    </option>\n  </select>\n  <div\n    class="amplify-flex amplify-select__icon"\n    style="align-items: center; justify-content: center"\n  >\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      class="amplify-icon"\n      viewBox="0 0 24 24"\n      data-size="large"\n      fill="currentColor"\n    >\n      <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>\n    </svg>\n  </div>\n</div>\n'
    }]
  }], null, {
    items: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    defaultValue: [{
      type: Input
    }]
  });
})();
var PhoneNumberFieldComponent = class {
  constructor() {
    this.autocomplete = "new-password";
    this.disabled = false;
    this.selectFieldId = `amplify-field-${nanoid(12)}`;
    this.textFieldId = `amplify-field-${nanoid(12)}`;
    this.initialValue = "";
    this.label = "";
    this.placeholder = "";
    this.required = true;
    this.labelHidden = false;
    this.display = "contents";
  }
  ngOnInit() {
    this.countryDialCodesValues = this.dialCodeList ?? countryDialCodes;
  }
};
PhoneNumberFieldComponent.ɵfac = function PhoneNumberFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || PhoneNumberFieldComponent)();
};
PhoneNumberFieldComponent.ɵcmp = ɵɵdefineComponent({
  type: PhoneNumberFieldComponent,
  selectors: [["amplify-phone-number-field"]],
  hostVars: 2,
  hostBindings: function PhoneNumberFieldComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("display", ctx.display);
    }
  },
  inputs: {
    autocomplete: "autocomplete",
    disabled: "disabled",
    defaultCountryCode: "defaultCountryCode",
    selectFieldId: "selectFieldId",
    textFieldId: "textFieldId",
    initialValue: "initialValue",
    label: "label",
    name: "name",
    placeholder: "placeholder",
    required: "required",
    type: "type",
    labelHidden: "labelHidden",
    dialCodeList: "dialCodeList",
    hasError: "hasError",
    describedBy: "describedBy"
  },
  standalone: false,
  decls: 9,
  vars: 17,
  consts: [[1, "amplify-flex", "amplify-field", "amplify-textfield", "amplify-phonenumberfield"], [1, "amplify-label", 3, "for"], [1, "amplify-flex", "amplify-field-group", "amplify-field-group--horizontal"], [1, "amplify-field-group__outer-start"], [1, "amplify-flex", "amplify-field", "amplify-selectfield", "amplify-dialcodeselect", 2, "flex-direction", "column"], ["name", "country_code", "label", "Country Code", 3, "id", "items", "defaultValue"], [1, "amplify-field-group__field-wrapper", "amplify-field-group__field-wrapper--horizontal"], [1, "amplify-input", "amplify-field-group__control", 3, "id", "type", "name", "placeholder", "required", "value", "autocomplete"]],
  template: function PhoneNumberFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0)(1, "label", 1);
      ɵɵtext(2);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 2)(4, "div", 3)(5, "div", 4);
      ɵɵelement(6, "amplify-form-select", 5);
      ɵɵelementEnd()();
      ɵɵelementStart(7, "div", 6);
      ɵɵelement(8, "input", 7);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵclassProp("amplify-visually-hidden", ctx.labelHidden);
      ɵɵproperty("for", ctx.textFieldId);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.label, " ");
      ɵɵadvance(4);
      ɵɵproperty("id", ctx.selectFieldId)("items", ctx.countryDialCodesValues)("defaultValue", ctx.defaultCountryCode);
      ɵɵadvance(2);
      ɵɵproperty("id", ctx.textFieldId)("type", ctx.type)("name", ctx.name)("placeholder", ctx.placeholder)("required", ctx.required)("value", ctx.initialValue)("autocomplete", ctx.autocomplete);
      ɵɵattribute("disabled", ctx.disabled ? "" : null)("aria-invalid", ctx.hasError ? "true" : "false")("aria-describedby", ctx.describedBy);
    }
  },
  dependencies: [SelectComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PhoneNumberFieldComponent, [{
    type: Component,
    args: [{
      selector: "amplify-phone-number-field",
      template: `<div
  class="amplify-flex amplify-field amplify-textfield amplify-phonenumberfield"
>
  <label
    class="amplify-label"
    [class.amplify-visually-hidden]="labelHidden"
    [for]="textFieldId"
  >
    {{ label }}
  </label>
  <div class="amplify-flex amplify-field-group amplify-field-group--horizontal">
    <div class="amplify-field-group__outer-start">
      <div
        class="amplify-flex amplify-field amplify-selectfield amplify-dialcodeselect"
        style="flex-direction: column"
      >
        <amplify-form-select
          name="country_code"
          label="Country Code"
          [id]="selectFieldId"
          [items]="countryDialCodesValues"
          [defaultValue]="defaultCountryCode"
        ></amplify-form-select>
      </div>
    </div>

    <div
      class="amplify-field-group__field-wrapper amplify-field-group__field-wrapper--horizontal"
    >
      <input
        class="amplify-input amplify-field-group__control"
        [id]="textFieldId"
        [type]="type"
        [name]="name"
        [placeholder]="placeholder"
        [required]="required"
        [value]="initialValue"
        [autocomplete]="autocomplete"
        [attr.disabled]="disabled ? '' : null"
        [attr.aria-invalid]="hasError ? 'true' : 'false'"
        [attr.aria-describedby]="describedBy"
      />
    </div>
  </div>
</div>
`
    }]
  }], null, {
    autocomplete: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    defaultCountryCode: [{
      type: Input
    }],
    selectFieldId: [{
      type: Input
    }],
    textFieldId: [{
      type: Input
    }],
    initialValue: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    labelHidden: [{
      type: Input
    }],
    dialCodeList: [{
      type: Input
    }],
    hasError: [{
      type: Input
    }],
    describedBy: [{
      type: Input
    }],
    display: [{
      type: HostBinding,
      args: ["style.display"]
    }]
  });
})();
var TextFieldComponent = class {
  constructor() {
    this.autocomplete = "new-password";
    this.disabled = false;
    this.fieldId = `amplify-field-${nanoid(12)}`;
    this.initialValue = "";
    this.label = "";
    this.placeholder = "";
    this.required = true;
    this.labelHidden = false;
    this.display = "contents";
  }
};
TextFieldComponent.ɵfac = function TextFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TextFieldComponent)();
};
TextFieldComponent.ɵcmp = ɵɵdefineComponent({
  type: TextFieldComponent,
  selectors: [["amplify-text-field"]],
  hostVars: 2,
  hostBindings: function TextFieldComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("display", ctx.display);
    }
  },
  inputs: {
    autocomplete: "autocomplete",
    disabled: "disabled",
    fieldId: "fieldId",
    initialValue: "initialValue",
    label: "label",
    name: "name",
    placeholder: "placeholder",
    required: "required",
    type: "type",
    labelHidden: "labelHidden",
    hasError: "hasError",
    describedBy: "describedBy"
  },
  standalone: false,
  decls: 3,
  vars: 14,
  consts: [[1, "amplify-label", 3, "for"], ["autocapitalize", "off", 1, "amplify-input", 3, "id", "type", "name", "placeholder", "required", "value", "autocomplete"]],
  template: function TextFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "label", 0);
      ɵɵtext(1);
      ɵɵelementEnd();
      ɵɵelement(2, "input", 1);
    }
    if (rf & 2) {
      ɵɵclassProp("amplify-visually-hidden", ctx.labelHidden);
      ɵɵproperty("for", ctx.fieldId);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.label, "\n");
      ɵɵadvance();
      ɵɵproperty("id", ctx.fieldId)("type", ctx.type)("name", ctx.name)("placeholder", ctx.placeholder)("required", ctx.required)("value", ctx.initialValue)("autocomplete", ctx.autocomplete);
      ɵɵattribute("disabled", ctx.disabled ? "" : null)("aria-invalid", ctx.hasError ? "true" : "false")("aria-describedby", ctx.describedBy);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextFieldComponent, [{
    type: Component,
    args: [{
      selector: "amplify-text-field",
      template: `<label
  class="amplify-label"
  [class.amplify-visually-hidden]="labelHidden"
  [for]="fieldId"
>
  {{ label }}
</label>
<input
  class="amplify-input"
  autocapitalize="off"
  [id]="fieldId"
  [type]="type"
  [name]="name"
  [placeholder]="placeholder"
  [required]="required"
  [value]="initialValue"
  [autocomplete]="autocomplete"
  [attr.disabled]="disabled ? '' : null"
  [attr.aria-invalid]="hasError ? 'true' : 'false'"
  [attr.aria-describedby]="describedBy"
/>
`
    }]
  }], null, {
    autocomplete: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    fieldId: [{
      type: Input
    }],
    initialValue: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    required: [{
      type: Input
    }],
    type: [{
      type: Input
    }],
    labelHidden: [{
      type: Input
    }],
    hasError: [{
      type: Input
    }],
    describedBy: [{
      type: Input
    }],
    display: [{
      type: HostBinding,
      args: ["style.display"]
    }]
  });
})();
var FormFieldComponent = class {
  constructor(authenticator2) {
    this.authenticator = authenticator2;
    this.countryDialCodesValue = countryDialCodes;
    this.errorId = nanoid(12);
  }
  get ariaDescribedBy() {
    return this.hasError() ? this.errorId : void 0;
  }
  get errors() {
    const {
      validationErrors
    } = this.authenticator;
    return getErrors(validationErrors[this.name]);
  }
  onBlur($event) {
    const {
      name
    } = $event.target;
    this.authenticator.updateBlur({
      name
    });
  }
  isPasswordField() {
    return this.formField.type === "password";
  }
  isPhoneField() {
    return this.formField.type === "tel";
  }
  hasError() {
    return this.errors?.length > 0;
  }
  translate(phrase) {
    return translate(phrase);
  }
};
FormFieldComponent.ɵfac = function FormFieldComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FormFieldComponent)(ɵɵdirectiveInject(AuthenticatorService));
};
FormFieldComponent.ɵcmp = ɵɵdefineComponent({
  type: FormFieldComponent,
  selectors: [["amplify-form-field"]],
  inputs: {
    name: "name",
    formField: "formField"
  },
  standalone: false,
  decls: 5,
  vars: 4,
  consts: [[1, "amplify-flex", "amplify-field", "amplify-authenticator__column"], ["type", "tel", 3, "name", "label", "defaultCountryCode", "dialCodeList", "placeholder", "required", "labelHidden", "autocomplete", "hasError", "describedBy", 4, "ngIf"], [3, "name", "label", "placeholder", "required", "labelHidden", "autocomplete", "hasError", "describedBy", "setBlur", 4, "ngIf"], [3, "name", "label", "placeholder", "required", "labelHidden", "autocomplete", "type", "hasError", "describedBy", 4, "ngIf"], ["data-amplify-sign-up-errors", "", 3, "id", 4, "ngIf"], ["type", "tel", 3, "name", "label", "defaultCountryCode", "dialCodeList", "placeholder", "required", "labelHidden", "autocomplete", "hasError", "describedBy"], [3, "setBlur", "name", "label", "placeholder", "required", "labelHidden", "autocomplete", "hasError", "describedBy"], [3, "name", "label", "placeholder", "required", "labelHidden", "autocomplete", "type", "hasError", "describedBy"], ["data-amplify-sign-up-errors", "", 3, "id"], ["class", "amplify-text amplify-text--error", "data-variation", "error", 4, "ngFor", "ngForOf"], ["data-variation", "error", 1, "amplify-text", "amplify-text--error"]],
  template: function FormFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, FormFieldComponent_amplify_phone_number_field_1_Template, 1, 10, "amplify-phone-number-field", 1)(2, FormFieldComponent_amplify_password_field_2_Template, 1, 8, "amplify-password-field", 2)(3, FormFieldComponent_amplify_text_field_3_Template, 1, 9, "amplify-text-field", 3)(4, FormFieldComponent_div_4_Template, 2, 2, "div", 4);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isPhoneField());
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isPasswordField());
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.isPasswordField() && !ctx.isPhoneField());
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.hasError());
    }
  },
  dependencies: [NgForOf, NgIf, PasswordFieldComponent, PhoneNumberFieldComponent, TextFieldComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FormFieldComponent, [{
    type: Component,
    args: [{
      selector: "amplify-form-field",
      template: '<div class="amplify-flex amplify-field amplify-authenticator__column">\n  <!-- Country code field -->\n  <amplify-phone-number-field\n    *ngIf="isPhoneField()"\n    [name]="name"\n    [label]="formField.label"\n    [defaultCountryCode]="formField.dialCode"\n    [dialCodeList]="formField.dialCodeList"\n    [placeholder]="formField.placeholder"\n    [required]="formField.isRequired"\n    [labelHidden]="formField.labelHidden"\n    [autocomplete]="formField.autocomplete"\n    [hasError]="hasError"\n    [describedBy]="ariaDescribedBy"\n    type="tel"\n  ></amplify-phone-number-field>\n\n  <amplify-password-field\n    *ngIf="isPasswordField()"\n    [name]="name"\n    [label]="formField.label"\n    [placeholder]="formField.placeholder"\n    [required]="formField.isRequired"\n    [labelHidden]="formField.labelHidden"\n    [autocomplete]="formField.autocomplete"\n    [hasError]="hasError"\n    [describedBy]="ariaDescribedBy"\n    (setBlur)="onBlur($event)"\n  ></amplify-password-field>\n\n  <amplify-text-field\n    *ngIf="!isPasswordField() && !isPhoneField()"\n    [name]="name"\n    [label]="formField.label"\n    [placeholder]="formField.placeholder"\n    [required]="formField.isRequired"\n    [labelHidden]="formField.labelHidden"\n    [autocomplete]="formField.autocomplete"\n    [type]="formField.type"\n    [hasError]="hasError"\n    [describedBy]="ariaDescribedBy"\n  ></amplify-text-field>\n\n  <div\n    data-amplify-sign-up-errors\n    *ngIf="hasError()"\n    [id]="errorId"\n  >\n    <div\n      class="amplify-text amplify-text--error"\n      data-variation="error"\n      *ngFor="let error of errors"\n    >\n      {{ translate(error) }}\n    </div>\n  </div>\n</div>'
    }]
  }], function() {
    return [{
      type: AuthenticatorService
    }];
  }, {
    name: [{
      type: Input
    }],
    formField: [{
      type: Input
    }]
  });
})();
var BaseFormFieldsComponent = class {
  constructor(authenticator2) {
    this.authenticator = authenticator2;
    this.display = "contents";
    this.formFields = [];
  }
  ngOnInit() {
    const state = this.authenticator.authState;
    this.formFields = getSortedFormFields(this.route, state);
  }
};
BaseFormFieldsComponent.ɵfac = function BaseFormFieldsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || BaseFormFieldsComponent)(ɵɵdirectiveInject(AuthenticatorService));
};
BaseFormFieldsComponent.ɵcmp = ɵɵdefineComponent({
  type: BaseFormFieldsComponent,
  selectors: [["amplify-base-form-fields"]],
  hostVars: 2,
  hostBindings: function BaseFormFieldsComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("display", ctx.display);
    }
  },
  inputs: {
    route: "route"
  },
  standalone: false,
  decls: 1,
  vars: 1,
  consts: [[4, "ngFor", "ngForOf"], [3, "name", "formField"]],
  template: function BaseFormFieldsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, BaseFormFieldsComponent_ng_container_0_Template, 2, 2, "ng-container", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngForOf", ctx.formFields);
    }
  },
  dependencies: [NgForOf, FormFieldComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseFormFieldsComponent, [{
    type: Component,
    args: [{
      selector: "amplify-base-form-fields",
      template: '<ng-container *ngFor="let formField of formFields">\n  <amplify-form-field\n    [name]="formField[0]"\n    [formField]="formField[1]"\n  ></amplify-form-field>\n</ng-container>\n'
    }]
  }], function() {
    return [{
      type: AuthenticatorService
    }];
  }, {
    route: [{
      type: Input
    }],
    display: [{
      type: HostBinding,
      args: ["style.display"]
    }]
  });
})();
var ErrorComponent = class {
  constructor() {
    this.isVisible = true;
    this.dismissAriaLabel = translate("Dismiss alert");
  }
  close() {
    this.isVisible = false;
  }
};
ErrorComponent.ɵfac = function ErrorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ErrorComponent)();
};
ErrorComponent.ɵcmp = ɵɵdefineComponent({
  type: ErrorComponent,
  selectors: [["amplify-error"]],
  standalone: false,
  ngContentSelectors: _c0,
  decls: 1,
  vars: 1,
  consts: [["class", "amplify-flex amplify-alert amplify-alert--error", "data-variation", "error", "style", "align-items: center; justify-content: space-between", "role", "alert", 4, "ngIf"], ["data-variation", "error", "role", "alert", 1, "amplify-flex", "amplify-alert", "amplify-alert--error", 2, "align-items", "center", "justify-content", "space-between"], [1, "amplify-flex", 2, "align-items", "center"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "amplify-icon"], ["d", "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"], ["amplify-button", "", "variation", "link", 3, "click", "fullWidth"], ["d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"]],
  template: function ErrorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, ErrorComponent_div_0_Template, 9, 4, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.isVisible);
    }
  },
  dependencies: [NgIf, ButtonComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorComponent, [{
    type: Component,
    args: [{
      selector: "amplify-error",
      template: '<div\n  class="amplify-flex amplify-alert amplify-alert--error"\n  data-variation="error"\n  style="align-items: center; justify-content: space-between"\n  *ngIf="isVisible"\n  role="alert"\n>\n  <div class="amplify-flex" style="align-items: center">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      class="amplify-icon"\n      [attr.aria-hidden]="true"\n      viewBox="0 0 24 24"\n      fill="currentColor"\n    >\n      <path\n        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"\n      ></path>\n    </svg>\n    <div><ng-content></ng-content></div>\n  </div>\n  <button\n    amplify-button\n    [attr.aria-label]="dismissAriaLabel"\n    variation="link"\n    [fullWidth]="false"\n    (click)="close()"\n  >\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      class="amplify-icon"\n      [attr.aria-hidden]="true"\n      viewBox="0 0 24 24"\n      fill="currentColor"\n    >\n      <path\n        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"\n      ></path>\n    </svg>\n  </button>\n</div>\n'
    }]
  }], null, null);
})();
var {
  getBackToSignInText: getBackToSignInText$6,
  getResendCodeText: getResendCodeText$1,
  getSubmitText: getSubmitText$1,
  getResetYourPasswordText: getResetYourPasswordText$1
} = authenticatorTextUtil;
var ConfirmResetPasswordComponent = class {
  constructor(authenticator2) {
    this.authenticator = authenticator2;
    this.dataAttr = "";
    this.headerText = getResetYourPasswordText$1();
    this.backToSignInText = getBackToSignInText$6();
    this.resendCodeText = getResendCodeText$1();
    this.submitText = getSubmitText$1();
  }
  get context() {
    return this.authenticator.slotContext;
  }
  onInput(event2) {
    event2.preventDefault();
    const {
      name,
      value
    } = event2.target;
    this.authenticator.updateForm({
      name,
      value
    });
  }
  onSubmit(event2) {
    event2.preventDefault();
    this.authenticator.submitForm(getFormDataFromEvent(event2));
  }
};
ConfirmResetPasswordComponent.ɵfac = function ConfirmResetPasswordComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ConfirmResetPasswordComponent)(ɵɵdirectiveInject(AuthenticatorService));
};
ConfirmResetPasswordComponent.ɵcmp = ɵɵdefineComponent({
  type: ConfirmResetPasswordComponent,
  selectors: [["amplify-confirm-reset-password"]],
  hostVars: 1,
  hostBindings: function ConfirmResetPasswordComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-amplify-authenticator-confirmsignin", ctx.dataAttr);
    }
  },
  inputs: {
    headerText: "headerText"
  },
  standalone: false,
  decls: 12,
  vars: 8,
  consts: [["data-amplify-form", "", 3, "submit", "input"], ["data-amplify-fieldset", "", 1, "amplify-flex", "amplify-authenticator__column", 3, "disabled"], ["name", "confirm-reset-password-header", 3, "context"], [1, "amplify-heading", "amplify-heading--3"], ["route", "confirmResetPassword"], ["amplify-button", "", "variation", "primary", "fullWidth", "true", "type", "submit", 3, "isDisabled"], ["amplify-button", "", "size", "small", "variation", "link", "fontWeight", "normal", "fullWidth", "true", "type", "button", 3, "click"], [4, "ngIf"], ["name", "confirm-reset-password-footer", 3, "context"]],
  template: function ConfirmResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "form", 0);
      ɵɵlistener("submit", function ConfirmResetPasswordComponent_Template_form_submit_0_listener($event) {
        return ctx.onSubmit($event);
      })("input", function ConfirmResetPasswordComponent_Template_form_input_0_listener($event) {
        return ctx.onInput($event);
      });
      ɵɵelementStart(1, "fieldset", 1)(2, "amplify-slot", 2)(3, "h3", 3);
      ɵɵtext(4);
      ɵɵelementEnd()();
      ɵɵelement(5, "amplify-base-form-fields", 4);
      ɵɵelementStart(6, "button", 5);
      ɵɵtext(7);
      ɵɵelementEnd();
      ɵɵelementStart(8, "button", 6);
      ɵɵlistener("click", function ConfirmResetPasswordComponent_Template_button_click_8_listener() {
        return ctx.authenticator.resendCode();
      });
      ɵɵtext(9);
      ɵɵelementEnd();
      ɵɵtemplate(10, ConfirmResetPasswordComponent_amplify_error_10_Template, 2, 1, "amplify-error", 7);
      ɵɵelementEnd();
      ɵɵelement(11, "amplify-slot", 8);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("disabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.headerText);
      ɵɵadvance(2);
      ɵɵproperty("isDisabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.submitText, " ");
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.resendCodeText, " ");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.authenticator.error);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
    }
  },
  dependencies: [NgIf, AmplifySlotComponent, BaseFormFieldsComponent, ButtonComponent, ErrorComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmResetPasswordComponent, [{
    type: Component,
    args: [{
      selector: "amplify-confirm-reset-password",
      template: '<form data-amplify-form (submit)="onSubmit($event)" (input)="onInput($event)">\n  <fieldset\n    class="amplify-flex amplify-authenticator__column"\n    data-amplify-fieldset\n    [disabled]="authenticator.isPending"\n  >\n    <amplify-slot name="confirm-reset-password-header" [context]="context">\n      <h3 class="amplify-heading amplify-heading--3">{{ headerText }}</h3>\n    </amplify-slot>\n\n    <amplify-base-form-fields\n      route="confirmResetPassword"\n    ></amplify-base-form-fields>\n\n    <button\n      amplify-button\n      variation="primary"\n      fullWidth="true"\n      type="submit"\n      [isDisabled]="authenticator.isPending"\n    >\n      {{ submitText }}\n    </button>\n\n    <button\n      amplify-button\n      size="small"\n      variation="link"\n      fontWeight="normal"\n      fullWidth="true"\n      type="button"\n      (click)="authenticator.resendCode()"\n    >\n      {{ resendCodeText }}\n    </button>\n\n    <amplify-error *ngIf="authenticator.error">\n      {{ authenticator.error }}\n    </amplify-error>\n  </fieldset>\n  <amplify-slot name="confirm-reset-password-footer" [context]="context">\n  </amplify-slot>\n</form>\n'
    }]
  }], function() {
    return [{
      type: AuthenticatorService
    }];
  }, {
    dataAttr: [{
      type: HostBinding,
      args: ["attr.data-amplify-authenticator-confirmsignin"]
    }],
    headerText: [{
      type: Input
    }]
  });
})();
var {
  getConfirmText: getConfirmText$4,
  getBackToSignInText: getBackToSignInText$5,
  getChallengeText: getChallengeText2
} = authenticatorTextUtil;
var ConfirmSignInComponent = class {
  constructor(authenticator2) {
    this.authenticator = authenticator2;
    this.dataAttr = "";
    this.confirmText = getConfirmText$4();
    this.backToSignInText = getBackToSignInText$5();
  }
  get context() {
    return this.authenticator.slotContext;
  }
  ngOnInit() {
    this.setHeaderText();
  }
  setHeaderText() {
    const state = this.authenticator.authState;
    const actorContext = getActorContext(state);
    const {
      challengeName
    } = actorContext;
    this.headerText = getChallengeText2(challengeName);
  }
  onInput(event2) {
    event2.preventDefault();
    const {
      name,
      value
    } = event2.target;
    this.authenticator.updateForm({
      name,
      value
    });
  }
  onSubmit(event2) {
    event2.preventDefault();
    this.authenticator.submitForm(getFormDataFromEvent(event2));
  }
};
ConfirmSignInComponent.ɵfac = function ConfirmSignInComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ConfirmSignInComponent)(ɵɵdirectiveInject(AuthenticatorService));
};
ConfirmSignInComponent.ɵcmp = ɵɵdefineComponent({
  type: ConfirmSignInComponent,
  selectors: [["amplify-confirm-sign-in"]],
  hostVars: 1,
  hostBindings: function ConfirmSignInComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-amplify-authenticator-confirmsignin", ctx.dataAttr);
    }
  },
  standalone: false,
  decls: 12,
  vars: 8,
  consts: [["data-amplify-form", "", 3, "submit", "input"], ["data-amplify-fieldset", "", 1, "amplify-flex", "amplify-authenticator__column", 3, "disabled"], ["name", "confirm-sign-in-header", 3, "context"], [1, "amplify-heading", "amplify-heading--3"], ["route", "confirmSignIn"], ["amplify-button", "", "variation", "primary", "fullWidth", "true", "type", "submit", 3, "isDisabled"], ["amplify-button", "", "size", "small", "variation", "link", "fontWeight", "normal", "fullWidth", "true", 3, "click"], [4, "ngIf"], ["name", "confirm-sign-in-footer", 3, "context"]],
  template: function ConfirmSignInComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "form", 0);
      ɵɵlistener("submit", function ConfirmSignInComponent_Template_form_submit_0_listener($event) {
        return ctx.onSubmit($event);
      })("input", function ConfirmSignInComponent_Template_form_input_0_listener($event) {
        return ctx.onInput($event);
      });
      ɵɵelementStart(1, "fieldset", 1)(2, "amplify-slot", 2)(3, "h3", 3);
      ɵɵtext(4);
      ɵɵelementEnd()();
      ɵɵelement(5, "amplify-base-form-fields", 4);
      ɵɵelementStart(6, "button", 5);
      ɵɵtext(7);
      ɵɵelementEnd();
      ɵɵelementStart(8, "button", 6);
      ɵɵlistener("click", function ConfirmSignInComponent_Template_button_click_8_listener() {
        return ctx.authenticator.toSignIn();
      });
      ɵɵtext(9);
      ɵɵelementEnd();
      ɵɵtemplate(10, ConfirmSignInComponent_amplify_error_10_Template, 2, 1, "amplify-error", 7);
      ɵɵelementEnd();
      ɵɵelement(11, "amplify-slot", 8);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("disabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.headerText);
      ɵɵadvance(2);
      ɵɵproperty("isDisabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.confirmText, " ");
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.backToSignInText, " ");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.authenticator.error);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
    }
  },
  dependencies: [NgIf, AmplifySlotComponent, BaseFormFieldsComponent, ButtonComponent, ErrorComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmSignInComponent, [{
    type: Component,
    args: [{
      selector: "amplify-confirm-sign-in",
      template: '<form data-amplify-form (submit)="onSubmit($event)" (input)="onInput($event)">\n  <fieldset\n    class="amplify-flex amplify-authenticator__column"\n    data-amplify-fieldset\n    [disabled]="authenticator.isPending"\n  >\n    <amplify-slot name="confirm-sign-in-header" [context]="context">\n      <h3 class="amplify-heading amplify-heading--3">{{ headerText }}</h3>\n    </amplify-slot>\n    <amplify-base-form-fields route="confirmSignIn"></amplify-base-form-fields>\n\n    <button\n      amplify-button\n      variation="primary"\n      fullWidth="true"\n      type="submit"\n      [isDisabled]="authenticator.isPending"\n    >\n      {{ confirmText }}\n    </button>\n    <button\n      amplify-button\n      size="small"\n      variation="link"\n      fontWeight="normal"\n      fullWidth="true"\n      (click)="authenticator.toSignIn()"\n    >\n      {{ backToSignInText }}\n    </button>\n    <amplify-error *ngIf="authenticator.error">\n      {{ authenticator.error }}\n    </amplify-error>\n  </fieldset>\n  <amplify-slot\n    name="confirm-sign-in-footer"\n    [context]="context"\n  ></amplify-slot>\n</form>\n'
    }]
  }], function() {
    return [{
      type: AuthenticatorService
    }];
  }, {
    dataAttr: [{
      type: HostBinding,
      args: ["attr.data-amplify-authenticator-confirmsignin"]
    }]
  });
})();
var {
  getResendCodeText,
  getConfirmText: getConfirmText$3,
  getDeliveryMethodText: getDeliveryMethodText2,
  getDeliveryMessageText: getDeliveryMessageText2
} = authenticatorTextUtil;
var ConfirmSignUpComponent = class {
  constructor(authenticator2) {
    this.authenticator = authenticator2;
    this.dataAttr = "";
    this.resendCodeText = getResendCodeText();
    this.confirmText = getConfirmText$3();
  }
  get context() {
    return this.authenticator.slotContext;
  }
  get confirmSignUpHeading() {
    const {
      codeDeliveryDetails
    } = this.authenticator;
    return getDeliveryMethodText2(codeDeliveryDetails);
  }
  get subtitleText() {
    const {
      codeDeliveryDetails
    } = this.authenticator;
    return getDeliveryMessageText2(codeDeliveryDetails);
  }
  onInput(event2) {
    event2.preventDefault();
    const {
      name,
      value
    } = event2.target;
    this.authenticator.updateForm({
      name,
      value
    });
  }
  onSubmit(event2) {
    event2.preventDefault();
    this.authenticator.submitForm(getFormDataFromEvent(event2));
  }
};
ConfirmSignUpComponent.ɵfac = function ConfirmSignUpComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ConfirmSignUpComponent)(ɵɵdirectiveInject(AuthenticatorService));
};
ConfirmSignUpComponent.ɵcmp = ɵɵdefineComponent({
  type: ConfirmSignUpComponent,
  selectors: [["amplify-confirm-sign-up"]],
  hostVars: 1,
  hostBindings: function ConfirmSignUpComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-amplify-authenticator-confirmsignup", ctx.dataAttr);
    }
  },
  standalone: false,
  decls: 15,
  vars: 9,
  consts: [["data-amplify-form", "", 3, "submit", "input"], ["data-amplify-fieldset", "", 1, "amplify-flex", "amplify-authenticator__column", 3, "disabled"], ["name", "confirm-sign-up-header", 3, "context"], [1, "amplify-heading", "amplify-authenticator__heading", 2, "font-size", "1.5rem"], [1, "amplify-authenticator__subtitle"], ["route", "confirmSignUp"], ["amplify-button", "", "variation", "primary", "fullWidth", "true", "type", "submit", 3, "isDisabled"], ["amplify-button", "", "fontWeight", "normal", 3, "click"], [4, "ngIf"], ["name", "confirm-sign-up-footer", 3, "context"]],
  template: function ConfirmSignUpComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementContainerStart(0);
      ɵɵelementStart(1, "form", 0);
      ɵɵlistener("submit", function ConfirmSignUpComponent_Template_form_submit_1_listener($event) {
        return ctx.onSubmit($event);
      })("input", function ConfirmSignUpComponent_Template_form_input_1_listener($event) {
        return ctx.onInput($event);
      });
      ɵɵelementStart(2, "fieldset", 1)(3, "amplify-slot", 2)(4, "h3", 3);
      ɵɵtext(5);
      ɵɵelementEnd()();
      ɵɵelementStart(6, "span", 4);
      ɵɵtext(7);
      ɵɵelementEnd();
      ɵɵelement(8, "amplify-base-form-fields", 5);
      ɵɵelementStart(9, "button", 6);
      ɵɵtext(10);
      ɵɵelementEnd();
      ɵɵelementStart(11, "button", 7);
      ɵɵlistener("click", function ConfirmSignUpComponent_Template_button_click_11_listener() {
        return ctx.authenticator.resendCode();
      });
      ɵɵtext(12);
      ɵɵelementEnd()();
      ɵɵtemplate(13, ConfirmSignUpComponent_amplify_error_13_Template, 2, 1, "amplify-error", 8);
      ɵɵelement(14, "amplify-slot", 9);
      ɵɵelementEnd();
      ɵɵelementContainerEnd();
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("disabled", ctx.context.isPending);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.confirmSignUpHeading, " ");
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.subtitleText, " ");
      ɵɵadvance(2);
      ɵɵproperty("isDisabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.confirmText, " ");
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.resendCodeText, " ");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.context.error);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
    }
  },
  dependencies: [NgIf, AmplifySlotComponent, BaseFormFieldsComponent, ButtonComponent, ErrorComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmSignUpComponent, [{
    type: Component,
    args: [{
      selector: "amplify-confirm-sign-up",
      template: '<ng-container>\n  <form data-amplify-form (submit)="onSubmit($event)" (input)="onInput($event)">\n    <fieldset\n      class="amplify-flex amplify-authenticator__column"\n      data-amplify-fieldset\n      [disabled]="context.isPending"\n    >\n      <amplify-slot name="confirm-sign-up-header" [context]="context">\n        <h3\n          class="amplify-heading amplify-authenticator__heading"\n          style="font-size: 1.5rem"\n        >\n          {{ confirmSignUpHeading }}\n        </h3>\n      </amplify-slot>\n      <span class="amplify-authenticator__subtitle">\n        {{ subtitleText }}\n      </span>\n      <amplify-base-form-fields\n        route="confirmSignUp"\n      ></amplify-base-form-fields>\n\n      <button\n        amplify-button\n        variation="primary"\n        fullWidth="true"\n        type="submit"\n        [isDisabled]="authenticator.isPending"\n      >\n        {{ confirmText }}\n      </button>\n      <button\n        amplify-button\n        fontWeight="normal"\n        (click)="authenticator.resendCode()"\n      >\n        {{ resendCodeText }}\n      </button>\n    </fieldset>\n\n    <amplify-error *ngIf="context.error">\n      {{ authenticator.error }}\n    </amplify-error>\n    <amplify-slot\n      name="confirm-sign-up-footer"\n      [context]="context"\n    ></amplify-slot>\n  </form>\n</ng-container>\n'
    }]
  }], function() {
    return [{
      type: AuthenticatorService
    }];
  }, {
    dataAttr: [{
      type: HostBinding,
      args: ["attr.data-amplify-authenticator-confirmsignup"]
    }]
  });
})();
var {
  getAccountRecoveryInfoText: getAccountRecoveryInfoText$1,
  getSkipText: getSkipText$1,
  getSubmitText
} = authenticatorTextUtil;
var ConfirmVerifyUserComponent = class {
  constructor(authenticator2) {
    this.authenticator = authenticator2;
    this.dataAttr = "";
    this.headerText = getAccountRecoveryInfoText$1();
    this.skipText = getSkipText$1();
    this.submitText = getSubmitText();
  }
  get context() {
    return this.authenticator.slotContext;
  }
  onInput(event2) {
    event2.preventDefault();
    const {
      name,
      value
    } = event2.target;
    this.authenticator.updateForm({
      name,
      value
    });
  }
  onSubmit(event2) {
    event2.preventDefault();
    this.authenticator.submitForm(getFormDataFromEvent(event2));
  }
};
ConfirmVerifyUserComponent.ɵfac = function ConfirmVerifyUserComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ConfirmVerifyUserComponent)(ɵɵdirectiveInject(AuthenticatorService));
};
ConfirmVerifyUserComponent.ɵcmp = ɵɵdefineComponent({
  type: ConfirmVerifyUserComponent,
  selectors: [["amplify-confirm-verify-user"]],
  hostVars: 1,
  hostBindings: function ConfirmVerifyUserComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-amplify-authenticator-confirmverifyuser", ctx.dataAttr);
    }
  },
  inputs: {
    headerText: "headerText"
  },
  standalone: false,
  decls: 12,
  vars: 8,
  consts: [["data-amplify-form", "", 3, "input", "submit"], ["data-amplify-fieldset", "", 1, "amplify-flex", "amplify-authenticator__column", 3, "disabled"], ["name", "confirm-verify-user-header", 3, "context"], [1, "amplify-heading", "amplify-heading--3"], ["route", "confirmVerifyUser"], ["amplify-button", "", "variation", "primary", "fullWidth", "true", "type", "submit", 3, "isDisabled"], ["amplify-button", "", "size", "small", "variation", "link", "fontWeight", "normal", "fullWidth", "true", 3, "click"], [4, "ngIf"], ["name", "confirm-verify-user-footer", 3, "context"]],
  template: function ConfirmVerifyUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "form", 0);
      ɵɵlistener("input", function ConfirmVerifyUserComponent_Template_form_input_0_listener($event) {
        return ctx.onInput($event);
      })("submit", function ConfirmVerifyUserComponent_Template_form_submit_0_listener($event) {
        return ctx.onSubmit($event);
      });
      ɵɵelementStart(1, "fieldset", 1)(2, "amplify-slot", 2)(3, "h3", 3);
      ɵɵtext(4);
      ɵɵelementEnd()();
      ɵɵelement(5, "amplify-base-form-fields", 4);
      ɵɵelementStart(6, "button", 5);
      ɵɵtext(7);
      ɵɵelementEnd();
      ɵɵelementStart(8, "button", 6);
      ɵɵlistener("click", function ConfirmVerifyUserComponent_Template_button_click_8_listener() {
        return ctx.authenticator.skipVerification();
      });
      ɵɵtext(9);
      ɵɵelementEnd();
      ɵɵtemplate(10, ConfirmVerifyUserComponent_amplify_error_10_Template, 2, 1, "amplify-error", 7);
      ɵɵelementEnd();
      ɵɵelement(11, "amplify-slot", 8);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("disabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.headerText);
      ɵɵadvance(2);
      ɵɵproperty("isDisabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.submitText, " ");
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.skipText, " ");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.authenticator.error);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
    }
  },
  dependencies: [NgIf, AmplifySlotComponent, BaseFormFieldsComponent, ButtonComponent, ErrorComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmVerifyUserComponent, [{
    type: Component,
    args: [{
      selector: "amplify-confirm-verify-user",
      template: '<form data-amplify-form (input)="onInput($event)" (submit)="onSubmit($event)">\n  <fieldset\n    class="amplify-flex amplify-authenticator__column"\n    data-amplify-fieldset\n    [disabled]="authenticator.isPending"\n  >\n    <amplify-slot name="confirm-verify-user-header" [context]="context">\n      <h3 class="amplify-heading amplify-heading--3">{{ this.headerText }}</h3>\n    </amplify-slot>\n    <amplify-base-form-fields\n      route="confirmVerifyUser"\n    ></amplify-base-form-fields>\n    <button\n      amplify-button\n      variation="primary"\n      fullWidth="true"\n      type="submit"\n      [isDisabled]="authenticator.isPending"\n    >\n      {{ submitText }}\n    </button>\n\n    <button\n      amplify-button\n      size="small"\n      variation="link"\n      fontWeight="normal"\n      fullWidth="true"\n      (click)="authenticator.skipVerification()"\n    >\n      {{ skipText }}\n    </button>\n    <amplify-error *ngIf="authenticator.error">\n      {{ authenticator.error }}\n    </amplify-error>\n  </fieldset>\n  <amplify-slot name="confirm-verify-user-footer" [context]="context">\n  </amplify-slot>\n</form>\n'
    }]
  }], function() {
    return [{
      type: AuthenticatorService
    }];
  }, {
    dataAttr: [{
      type: HostBinding,
      args: ["attr.data-amplify-authenticator-confirmverifyuser"]
    }],
    headerText: [{
      type: Input
    }]
  });
})();
var ForceNewPasswordFormFieldsComponent = class {
};
ForceNewPasswordFormFieldsComponent.ɵfac = function ForceNewPasswordFormFieldsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ForceNewPasswordFormFieldsComponent)();
};
ForceNewPasswordFormFieldsComponent.ɵcmp = ɵɵdefineComponent({
  type: ForceNewPasswordFormFieldsComponent,
  selectors: [["amplify-force-new-password-form-fields"]],
  standalone: false,
  decls: 2,
  vars: 0,
  consts: [["data-amplify-fieldset", "", 1, "amplify-flex", "amplify-authenticator__column"], ["route", "forceNewPassword"]],
  template: function ForceNewPasswordFormFieldsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵelement(1, "amplify-base-form-fields", 1);
      ɵɵelementEnd();
    }
  },
  dependencies: [BaseFormFieldsComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForceNewPasswordFormFieldsComponent, [{
    type: Component,
    args: [{
      selector: "amplify-force-new-password-form-fields",
      template: '<div class="amplify-flex amplify-authenticator__column" data-amplify-fieldset>\n  <amplify-base-form-fields route="forceNewPassword"></amplify-base-form-fields>\n</div>\n'
    }]
  }], null, null);
})();
var {
  getChangePasswordText,
  getBackToSignInText: getBackToSignInText$4
} = authenticatorTextUtil;
var ForceNewPasswordComponent = class {
  constructor(authenticator2) {
    this.authenticator = authenticator2;
    this.dataAttr = "";
    this.headerText = getChangePasswordText();
    this.changePasswordText = getChangePasswordText();
    this.backToSignInText = getBackToSignInText$4();
  }
  get context() {
    return this.authenticator.slotContext;
  }
  onInput(event2) {
    event2.preventDefault();
    const {
      name,
      value
    } = event2.target;
    this.authenticator.updateForm({
      name,
      value
    });
  }
  onSubmit(event2) {
    event2.preventDefault();
    this.authenticator.submitForm(getFormDataFromEvent(event2));
  }
};
ForceNewPasswordComponent.ɵfac = function ForceNewPasswordComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ForceNewPasswordComponent)(ɵɵdirectiveInject(AuthenticatorService));
};
ForceNewPasswordComponent.ɵcmp = ɵɵdefineComponent({
  type: ForceNewPasswordComponent,
  selectors: [["amplify-force-new-password"]],
  hostVars: 1,
  hostBindings: function ForceNewPasswordComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-amplify-authenticator-forcenewpassword", ctx.dataAttr);
    }
  },
  inputs: {
    headerText: "headerText"
  },
  standalone: false,
  decls: 13,
  vars: 8,
  consts: [["data-amplify-form", "", 3, "submit", "input"], ["data-amplify-fieldset", "", 1, "amplify-flex", "amplify-authenticator__column", 3, "disabled"], ["name", "force-new-password-header", 3, "context"], [1, "amplify-heading", "amplify-heading--3"], ["name", "force-new-form-fields", 3, "context"], ["amplify-button", "", "variation", "primary", "fullWidth", "true", "type", "submit"], ["amplify-button", "", "size", "small", "variation", "link", "fontWeight", "normal", "fullWidth", "true", 3, "click"], [4, "ngIf"], ["name", "force-new-password-footer", 3, "context"]],
  template: function ForceNewPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "form", 0);
      ɵɵlistener("submit", function ForceNewPasswordComponent_Template_form_submit_0_listener($event) {
        return ctx.onSubmit($event);
      })("input", function ForceNewPasswordComponent_Template_form_input_0_listener($event) {
        return ctx.onInput($event);
      });
      ɵɵelementStart(1, "fieldset", 1)(2, "amplify-slot", 2)(3, "h3", 3);
      ɵɵtext(4);
      ɵɵelementEnd()();
      ɵɵelementStart(5, "amplify-slot", 4);
      ɵɵelement(6, "amplify-force-new-password-form-fields");
      ɵɵelementEnd();
      ɵɵelementStart(7, "button", 5);
      ɵɵtext(8);
      ɵɵelementEnd();
      ɵɵelementStart(9, "button", 6);
      ɵɵlistener("click", function ForceNewPasswordComponent_Template_button_click_9_listener() {
        return ctx.authenticator.toSignIn();
      });
      ɵɵtext(10);
      ɵɵelementEnd();
      ɵɵtemplate(11, ForceNewPasswordComponent_amplify_error_11_Template, 2, 1, "amplify-error", 7);
      ɵɵelementEnd();
      ɵɵelement(12, "amplify-slot", 8);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("disabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.headerText);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
      ɵɵadvance(3);
      ɵɵtextInterpolate1(" ", ctx.changePasswordText, " ");
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.backToSignInText, " ");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.authenticator.error);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
    }
  },
  dependencies: [NgIf, AmplifySlotComponent, ButtonComponent, ErrorComponent, ForceNewPasswordFormFieldsComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForceNewPasswordComponent, [{
    type: Component,
    args: [{
      selector: "amplify-force-new-password",
      template: '<form data-amplify-form (submit)="onSubmit($event)" (input)="onInput($event)">\n  <fieldset\n    class="amplify-flex amplify-authenticator__column"\n    data-amplify-fieldset\n    [disabled]="authenticator.isPending"\n  >\n    <amplify-slot name="force-new-password-header" [context]="context">\n      <h3 class="amplify-heading amplify-heading--3">{{ this.headerText }}</h3>\n    </amplify-slot>\n\n    <amplify-slot name="force-new-form-fields" [context]="context">\n      <amplify-force-new-password-form-fields></amplify-force-new-password-form-fields>\n    </amplify-slot>\n\n    <button amplify-button variation="primary" fullWidth="true" type="submit">\n      {{ changePasswordText }}\n    </button>\n\n    <button\n      amplify-button\n      size="small"\n      variation="link"\n      fontWeight="normal"\n      fullWidth="true"\n      (click)="authenticator.toSignIn()"\n    >\n      {{ backToSignInText }}\n    </button>\n    <amplify-error *ngIf="authenticator.error">\n      {{ authenticator.error }}\n    </amplify-error>\n  </fieldset>\n  <amplify-slot name="force-new-password-footer" [context]="context">\n  </amplify-slot>\n</form>\n'
    }]
  }], function() {
    return [{
      type: AuthenticatorService
    }];
  }, {
    dataAttr: [{
      type: HostBinding,
      args: ["attr.data-amplify-authenticator-forcenewpassword"]
    }],
    headerText: [{
      type: Input
    }]
  });
})();
var {
  getResetYourPasswordText,
  getSendCodeText,
  getBackToSignInText: getBackToSignInText$3
} = authenticatorTextUtil;
var ForgotPasswordComponent = class {
  constructor(authenticator2) {
    this.authenticator = authenticator2;
    this.dataAttr = "";
    this.headerText = getResetYourPasswordText();
    this.sendCodeText = getSendCodeText();
    this.backToSignInText = getBackToSignInText$3();
  }
  get context() {
    return this.authenticator.slotContext;
  }
  onInput(event2) {
    event2.preventDefault();
    const {
      name,
      value
    } = event2.target;
    this.authenticator.updateForm({
      name,
      value
    });
  }
  onSubmit(event2) {
    event2.preventDefault();
    this.authenticator.submitForm(getFormDataFromEvent(event2));
  }
};
ForgotPasswordComponent.ɵfac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || ForgotPasswordComponent)(ɵɵdirectiveInject(AuthenticatorService));
};
ForgotPasswordComponent.ɵcmp = ɵɵdefineComponent({
  type: ForgotPasswordComponent,
  selectors: [["amplify-forgot-password"]],
  hostVars: 1,
  hostBindings: function ForgotPasswordComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-amplify-authenticator-forgotpassword", ctx.dataAttr);
    }
  },
  inputs: {
    headerText: "headerText"
  },
  standalone: false,
  decls: 12,
  vars: 8,
  consts: [["data-amplify-form", "", 3, "submit", "input"], ["data-amplify-fieldset", "", 1, "amplify-flex", "amplify-authenticator__column", 3, "disabled"], ["name", "forgot-password-header", 1, "amplify-flex", 3, "context"], [1, "amplify-heading", "amplify-heading--3"], ["route", "forgotPassword"], ["amplify-button", "", "variation", "primary", "fullWidth", "true", "type", "submit", 3, "isDisabled"], ["amplify-button", "", "size", "small", "variation", "link", "fontWeight", "normal", "fullWidth", "true", 3, "click"], [4, "ngIf"], ["name", "forgot-password-footer", 3, "context"]],
  template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "form", 0);
      ɵɵlistener("submit", function ForgotPasswordComponent_Template_form_submit_0_listener($event) {
        return ctx.onSubmit($event);
      })("input", function ForgotPasswordComponent_Template_form_input_0_listener($event) {
        return ctx.onInput($event);
      });
      ɵɵelementStart(1, "fieldset", 1)(2, "amplify-slot", 2)(3, "h3", 3);
      ɵɵtext(4);
      ɵɵelementEnd()();
      ɵɵelement(5, "amplify-base-form-fields", 4);
      ɵɵelementStart(6, "button", 5);
      ɵɵtext(7);
      ɵɵelementEnd();
      ɵɵelementStart(8, "button", 6);
      ɵɵlistener("click", function ForgotPasswordComponent_Template_button_click_8_listener() {
        return ctx.authenticator.toSignIn();
      });
      ɵɵtext(9);
      ɵɵelementEnd();
      ɵɵtemplate(10, ForgotPasswordComponent_amplify_error_10_Template, 2, 1, "amplify-error", 7);
      ɵɵelementEnd();
      ɵɵelement(11, "amplify-slot", 8);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("disabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.headerText);
      ɵɵadvance(2);
      ɵɵproperty("isDisabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.sendCodeText, " ");
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.backToSignInText, " ");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.authenticator.error);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
    }
  },
  dependencies: [NgIf, AmplifySlotComponent, BaseFormFieldsComponent, ButtonComponent, ErrorComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{
      selector: "amplify-forgot-password",
      template: '<form data-amplify-form (submit)="onSubmit($event)" (input)="onInput($event)">\n  <fieldset\n    class="amplify-flex amplify-authenticator__column"\n    data-amplify-fieldset\n    [disabled]="authenticator.isPending"\n  >\n    <amplify-slot\n      class="amplify-flex"\n      name="forgot-password-header"\n      [context]="context"\n    >\n      <h3 class="amplify-heading amplify-heading--3">{{ this.headerText }}</h3>\n    </amplify-slot>\n\n    <amplify-base-form-fields route="forgotPassword"></amplify-base-form-fields>\n    <button\n      amplify-button\n      variation="primary"\n      fullWidth="true"\n      type="submit"\n      [isDisabled]="authenticator.isPending"\n    >\n      {{ sendCodeText }}\n    </button>\n    <button\n      amplify-button\n      size="small"\n      variation="link"\n      fontWeight="normal"\n      fullWidth="true"\n      (click)="authenticator.toSignIn()"\n    >\n      {{ backToSignInText }}\n    </button>\n    <amplify-error *ngIf="authenticator.error">\n      {{ authenticator.error }}\n    </amplify-error>\n  </fieldset>\n\n  <amplify-slot name="forgot-password-footer" [context]="context">\n  </amplify-slot>\n</form>\n'
    }]
  }], function() {
    return [{
      type: AuthenticatorService
    }];
  }, {
    dataAttr: [{
      type: HostBinding,
      args: ["attr.data-amplify-authenticator-forgotpassword"]
    }],
    headerText: [{
      type: Input
    }]
  });
})();
var {
  getConfirmText: getConfirmText$2,
  getBackToSignInText: getBackToSignInText$2,
  getSelectMfaTypeText,
  getSelectMfaTypeByChallengeName: getSelectMfaTypeByChallengeName2,
  getMfaTypeLabelByValue: getMfaTypeLabelByValue2
} = authenticatorTextUtil;
var SelectMfaTypeComponent = class {
  constructor(authenticator2) {
    this.authenticator = authenticator2;
    this.confirmText = getConfirmText$2();
    this.backToSignInText = getBackToSignInText$2();
    this.selectMfaTypeText = getSelectMfaTypeText();
    this.getMfaTypeLabelByValue = getMfaTypeLabelByValue2;
    this.allowedMfaTypes = [];
    this.classNames = classNames;
    this.ComponentClassName = ComponentClassName;
  }
  get context() {
    return this.authenticator.slotContext;
  }
  ngOnInit() {
    this.setHeaderText();
    this.setAllowedMfaTypes();
  }
  setHeaderText() {
    const actorContext = getActorContext(this.authenticator.authState);
    this.headerText = getSelectMfaTypeByChallengeName2(actorContext.challengeName);
  }
  setAllowedMfaTypes() {
    const actorContext = getActorContext(this.authenticator.authState);
    this.allowedMfaTypes = actorContext.allowedMfaTypes;
  }
  onInput(event2) {
    event2.preventDefault();
    const {
      name,
      value
    } = event2.target;
    this.authenticator.updateForm({
      name,
      value
    });
  }
  onSubmit(event2) {
    event2.preventDefault();
    this.authenticator.submitForm(getFormDataFromEvent(event2));
  }
};
SelectMfaTypeComponent.ɵfac = function SelectMfaTypeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SelectMfaTypeComponent)(ɵɵdirectiveInject(AuthenticatorService));
};
SelectMfaTypeComponent.ɵcmp = ɵɵdefineComponent({
  type: SelectMfaTypeComponent,
  selectors: [["amplify-select-mfa-type"]],
  standalone: false,
  decls: 12,
  vars: 13,
  consts: [["data-amplify-form", "", "data-amplify-authenticator-select-mfa-type", "", 3, "submit", "input"], ["data-amplify-fieldset", "", 3, "disabled"], ["name", "select-mfa-type-header", 3, "context"], ["role", "radiogroup", 3, "class", 4, "ngFor", "ngForOf"], ["amplify-button", "", "variation", "primary", "fullWidth", "true", "type", "submit", 3, "isDisabled"], ["amplify-button", "", "size", "small", "variation", "link", "fontWeight", "normal", "fullWidth", "true", 3, "click"], [4, "ngIf"], ["name", "select-mfa-type-footer", 3, "context"], ["role", "radiogroup"], ["name", "mfa_type", "type", "radio", "required", "", 3, "value", "checked"]],
  template: function SelectMfaTypeComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "form", 0);
      ɵɵlistener("submit", function SelectMfaTypeComponent_Template_form_submit_0_listener($event) {
        return ctx.onSubmit($event);
      })("input", function SelectMfaTypeComponent_Template_form_input_0_listener($event) {
        return ctx.onInput($event);
      });
      ɵɵelementStart(1, "fieldset", 1)(2, "amplify-slot", 2)(3, "h3");
      ɵɵtext(4);
      ɵɵelementEnd()();
      ɵɵtemplate(5, SelectMfaTypeComponent_div_5_Template, 6, 14, "div", 3);
      ɵɵelementStart(6, "button", 4);
      ɵɵtext(7);
      ɵɵelementEnd();
      ɵɵelementStart(8, "button", 5);
      ɵɵlistener("click", function SelectMfaTypeComponent_Template_button_click_8_listener() {
        return ctx.authenticator.toSignIn();
      });
      ɵɵtext(9);
      ɵɵelementEnd();
      ɵɵtemplate(10, SelectMfaTypeComponent_amplify_error_10_Template, 2, 1, "amplify-error", 6);
      ɵɵelementEnd();
      ɵɵelement(11, "amplify-slot", 7);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵclassMap(ctx.classNames(ctx.ComponentClassName.Flex, "amplify-authenticator__column"));
      ɵɵproperty("disabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
      ɵɵadvance();
      ɵɵclassMap(ctx.classNames(ctx.ComponentClassName.Heading, "amplify-heading--3"));
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.headerText);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.allowedMfaTypes);
      ɵɵadvance();
      ɵɵproperty("isDisabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.confirmText, " ");
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.backToSignInText, " ");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.authenticator.error);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
    }
  },
  dependencies: [NgForOf, NgIf, AmplifySlotComponent, ButtonComponent, ErrorComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMfaTypeComponent, [{
    type: Component,
    args: [{
      selector: "amplify-select-mfa-type",
      template: `<form
    data-amplify-form
    data-amplify-authenticator-select-mfa-type
    (submit)="onSubmit($event)"
    (input)="onInput($event)"
>
    <fieldset
        [class]="classNames(ComponentClassName.Flex, 'amplify-authenticator__column')"
        data-amplify-fieldset
        [disabled]="authenticator.isPending"
    >
        <amplify-slot
            name="select-mfa-type-header"
            [context]="context"
        >
            <h3 [class]="classNames(ComponentClassName.Heading, 'amplify-heading--3')">{{ headerText }}</h3>
        </amplify-slot>
        <div
            *ngFor="let mfaType of allowedMfaTypes; index as i"
            [class]="classNames(ComponentClassName.Flex, ComponentClassName.Field, ComponentClassName.RadioGroupField)"
            role="radiogroup"
        >
            <label
                [class]="classNames(ComponentClassName.Flex, ComponentClassName.Radio)"
                [attr.data-amplify-radio-control-label]
            >
                <span [class]="classNames(ComponentClassName.Text, ComponentClassName.RadioLabel)">
                    {{getMfaTypeLabelByValue(mfaType)}}
                </span>
                <input
                    [class]="classNames(ComponentClassName.Input, ComponentClassName.FieldGroupControl, ComponentClassName.VisuallyHidden, ComponentClassName.RadioInput)"
                    [attr.data-amplify-radio-control-input]
                    [value]="mfaType"
                    [checked]="i === 0"
                    name="mfa_type"
                    type="radio"
                    required
                />
                <span
                    [class]="classNames(ComponentClassName.Flex, ComponentClassName.RadioButton)"
                    [attr.aria-hidden]="true"
                ></span>
            </label>
        </div>
        <button
            amplify-button
            variation="primary"
            fullWidth="true"
            type="submit"
            [isDisabled]="authenticator.isPending"
        >
            {{ confirmText }}
        </button>
        <button
            amplify-button
            size="small"
            variation="link"
            fontWeight="normal"
            fullWidth="true"
            (click)="authenticator.toSignIn()"
        >
            {{ backToSignInText }}
        </button>
        <amplify-error *ngIf="authenticator.error">
            {{ authenticator.error }}
        </amplify-error>
    </fieldset>
    <amplify-slot
        name="select-mfa-type-footer"
        [context]="context"
    ></amplify-slot>
</form>`
    }]
  }], function() {
    return [{
      type: AuthenticatorService
    }];
  }, null);
})();
var {
  getConfirmText: getConfirmText$1,
  getBackToSignInText: getBackToSignInText$1,
  getSetupEmailText
} = authenticatorTextUtil;
var SetupEmailComponent = class {
  constructor(authenticator2) {
    this.authenticator = authenticator2;
    this.headerText = getSetupEmailText();
    this.confirmText = getConfirmText$1();
    this.backToSignInText = getBackToSignInText$1();
    this.classNames = classNames;
    this.ComponentClassName = ComponentClassName;
  }
  get context() {
    return this.authenticator.slotContext;
  }
  onInput(event2) {
    event2.preventDefault();
    const {
      name,
      value
    } = event2.target;
    this.authenticator.updateForm({
      name,
      value
    });
  }
  onSubmit(event2) {
    event2.preventDefault();
    this.authenticator.submitForm(getFormDataFromEvent(event2));
  }
};
SetupEmailComponent.ɵfac = function SetupEmailComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SetupEmailComponent)(ɵɵdirectiveInject(AuthenticatorService));
};
SetupEmailComponent.ɵcmp = ɵɵdefineComponent({
  type: SetupEmailComponent,
  selectors: [["amplify-setup-email"]],
  standalone: false,
  decls: 12,
  vars: 12,
  consts: [["data-amplify-form", "", "data-amplify-authenticator-setup-email", "", 3, "submit", "input"], ["data-amplify-fieldset", "", 3, "disabled"], ["name", "setup-email-header", 3, "context"], ["route", "setupEmail"], ["amplify-button", "", "variation", "primary", "fullWidth", "true", "type", "submit", 3, "isDisabled"], ["amplify-button", "", "size", "small", "variation", "link", "fontWeight", "normal", "fullWidth", "true", 3, "click"], [4, "ngIf"], ["name", "setup-email-footer", 3, "context"]],
  template: function SetupEmailComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "form", 0);
      ɵɵlistener("submit", function SetupEmailComponent_Template_form_submit_0_listener($event) {
        return ctx.onSubmit($event);
      })("input", function SetupEmailComponent_Template_form_input_0_listener($event) {
        return ctx.onInput($event);
      });
      ɵɵelementStart(1, "fieldset", 1)(2, "amplify-slot", 2)(3, "h3");
      ɵɵtext(4);
      ɵɵelementEnd()();
      ɵɵelement(5, "amplify-base-form-fields", 3);
      ɵɵelementStart(6, "button", 4);
      ɵɵtext(7);
      ɵɵelementEnd();
      ɵɵelementStart(8, "button", 5);
      ɵɵlistener("click", function SetupEmailComponent_Template_button_click_8_listener() {
        return ctx.authenticator.toSignIn();
      });
      ɵɵtext(9);
      ɵɵelementEnd();
      ɵɵtemplate(10, SetupEmailComponent_amplify_error_10_Template, 2, 1, "amplify-error", 6);
      ɵɵelementEnd();
      ɵɵelement(11, "amplify-slot", 7);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵclassMap(ctx.classNames(ctx.ComponentClassName.Flex, "amplify-authenticator__column"));
      ɵɵproperty("disabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
      ɵɵadvance();
      ɵɵclassMap(ctx.classNames(ctx.ComponentClassName.Heading, "amplify-heading--3"));
      ɵɵadvance();
      ɵɵtextInterpolate(ctx.headerText);
      ɵɵadvance(2);
      ɵɵproperty("isDisabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.confirmText, " ");
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.backToSignInText, " ");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.authenticator.error);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
    }
  },
  dependencies: [NgIf, AmplifySlotComponent, BaseFormFieldsComponent, ButtonComponent, ErrorComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupEmailComponent, [{
    type: Component,
    args: [{
      selector: "amplify-setup-email",
      template: `<form
    data-amplify-form
    data-amplify-authenticator-setup-email
    (submit)="onSubmit($event)"
    (input)="onInput($event)"
>
    <fieldset
        [class]="classNames(ComponentClassName.Flex, 'amplify-authenticator__column')"
        data-amplify-fieldset
        [disabled]="authenticator.isPending"
    >
        <amplify-slot
            name="setup-email-header"
            [context]="context"
        >
            <h3 [class]="classNames(ComponentClassName.Heading, 'amplify-heading--3')">{{ headerText }}</h3>
        </amplify-slot>
        <amplify-base-form-fields route="setupEmail"></amplify-base-form-fields>

        <button
            amplify-button
            variation="primary"
            fullWidth="true"
            type="submit"
            [isDisabled]="authenticator.isPending"
        >
            {{ confirmText }}
        </button>
        <button
            amplify-button
            size="small"
            variation="link"
            fontWeight="normal"
            fullWidth="true"
            (click)="authenticator.toSignIn()"
        >
            {{ backToSignInText }}
        </button>
        <amplify-error *ngIf="authenticator.error">
            {{ authenticator.error }}
        </amplify-error>
    </fieldset>
    <amplify-slot
        name="setup-email-footer"
        [context]="context"
    ></amplify-slot>
</form>`
    }]
  }], function() {
    return [{
      type: AuthenticatorService
    }];
  }, null);
})();
var logger2 = new ConsoleLogger("SetupTotp");
var {
  getSetupTotpText,
  getCopyText,
  getBackToSignInText,
  getConfirmText,
  getCopiedText
} = authenticatorTextUtil;
var SetupTotpComponent = class {
  constructor(authenticator2) {
    this.authenticator = authenticator2;
    this.dataAttr = "";
    this.headerText = getSetupTotpText();
    this.qrCodeSource = "";
    this.totpSecretCode = "";
    this.copyTextLabel = getCopyText();
    this.backToSignInText = getBackToSignInText();
    this.confirmText = getConfirmText();
  }
  get context() {
    return this.authenticator.slotContext;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this.generateQRCode();
    });
  }
  generateQRCode() {
    return __async(this, null, function* () {
      const {
        authState: state,
        totpSecretCode,
        username
      } = this.authenticator;
      const {
        formFields
      } = getActorContext(state);
      const {
        totpIssuer = "AWSCognito",
        totpUsername = username
      } = formFields?.setupTotp?.QR ?? {};
      this.totpSecretCode = totpSecretCode;
      try {
        const totpCode = getTotpCodeURL(totpIssuer, totpUsername, this.totpSecretCode);
        logger2.info("totp code was generated:", totpCode);
        this.qrCodeSource = yield import_qrcode.default.toDataURL(totpCode);
      } catch (err) {
        logger2.error(err);
      }
    });
  }
  onInput(event2) {
    event2.preventDefault();
    const {
      name,
      value
    } = event2.target;
    this.authenticator.updateForm({
      name,
      value
    });
  }
  onSubmit(event2) {
    event2.preventDefault();
    this.authenticator.submitForm(getFormDataFromEvent(event2));
  }
  copyText() {
    navigator.clipboard.writeText(this.totpSecretCode);
    this.copyTextLabel = getCopiedText();
  }
};
SetupTotpComponent.ɵfac = function SetupTotpComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SetupTotpComponent)(ɵɵdirectiveInject(AuthenticatorService));
};
SetupTotpComponent.ɵcmp = ɵɵdefineComponent({
  type: SetupTotpComponent,
  selectors: [["amplify-setup-totp"]],
  hostVars: 1,
  hostBindings: function SetupTotpComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-amplify-authenticator-setup-totp", ctx.dataAttr);
    }
  },
  standalone: false,
  decls: 22,
  vars: 12,
  consts: [["data-amplify-form", "", 3, "submit", "input"], ["data-amplify-fieldset", "", 1, "amplify-flex", "amplify-authenticator__column", 3, "disabled"], ["name", "setup-totp-header", 3, "context"], [1, "amplify-heading", "amplify-heading--3"], [4, "ngIf"], ["alt", "qr code", "data-amplify-qrcode", "", "width", "228", "height", "228", 3, "src", 4, "ngIf"], ["data-amplify-copy", "", 1, "amplify-flex"], ["data-amplify-copy-svg", "", 3, "click"], ["data-amplify-copy-tooltip", ""], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM15 5H8C6.9 5 6.01 5.9 6.01 7L6 21C6 22.1 6.89 23 7.99 23H19C20.1 23 21 22.1 21 21V11L15 5ZM8 21V7H14V12H19V21H8Z"], ["route", "setupTotp"], ["amplify-button", "", "variation", "primary", "fullWidth", "true", "type", "submit", 3, "isDisabled"], ["amplify-button", "", "size", "small", "variation", "link", "fontWeight", "normal", "fullWidth", "true", 3, "click"], ["name", "setup-totp-footer", 3, "context"], ["alt", "qr code", "data-amplify-qrcode", "", "width", "228", "height", "228", 3, "src"]],
  template: function SetupTotpComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "form", 0);
      ɵɵlistener("submit", function SetupTotpComponent_Template_form_submit_0_listener($event) {
        return ctx.onSubmit($event);
      })("input", function SetupTotpComponent_Template_form_input_0_listener($event) {
        return ctx.onInput($event);
      });
      ɵɵelementStart(1, "fieldset", 1)(2, "amplify-slot", 2)(3, "h3", 3);
      ɵɵtext(4);
      ɵɵelementEnd()();
      ɵɵtemplate(5, SetupTotpComponent_p_5_Template, 2, 0, "p", 4)(6, SetupTotpComponent_img_6_Template, 1, 1, "img", 5);
      ɵɵelementStart(7, "div", 6)(8, "div");
      ɵɵtext(9);
      ɵɵelementEnd();
      ɵɵelementStart(10, "div", 7);
      ɵɵlistener("click", function SetupTotpComponent_Template_div_click_10_listener() {
        return ctx.copyText();
      });
      ɵɵelementStart(11, "div", 8);
      ɵɵtext(12);
      ɵɵelementEnd();
      ɵɵnamespaceSVG();
      ɵɵelementStart(13, "svg", 9);
      ɵɵelement(14, "path", 10);
      ɵɵelementEnd()()();
      ɵɵnamespaceHTML();
      ɵɵelement(15, "amplify-base-form-fields", 11);
      ɵɵelementStart(16, "button", 12);
      ɵɵtext(17);
      ɵɵelementEnd();
      ɵɵelementStart(18, "button", 13);
      ɵɵlistener("click", function SetupTotpComponent_Template_button_click_18_listener() {
        return ctx.authenticator.toSignIn();
      });
      ɵɵtext(19);
      ɵɵelementEnd();
      ɵɵtemplate(20, SetupTotpComponent_amplify_error_20_Template, 2, 1, "amplify-error", 4);
      ɵɵelementEnd();
      ɵɵelement(21, "amplify-slot", 14);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("disabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.headerText);
      ɵɵadvance();
      ɵɵproperty("ngIf", !ctx.qrCodeSource);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.qrCodeSource);
      ɵɵadvance(3);
      ɵɵtextInterpolate(ctx.totpSecretCode);
      ɵɵadvance(3);
      ɵɵtextInterpolate(ctx.copyTextLabel);
      ɵɵadvance(4);
      ɵɵproperty("isDisabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.confirmText, " ");
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.backToSignInText, " ");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.authenticator.error);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
    }
  },
  dependencies: [NgIf, AmplifySlotComponent, BaseFormFieldsComponent, ButtonComponent, ErrorComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetupTotpComponent, [{
    type: Component,
    args: [{
      selector: "amplify-setup-totp",
      template: '<form data-amplify-form (submit)="onSubmit($event)" (input)="onInput($event)">\n  <fieldset\n    class="amplify-flex amplify-authenticator__column"\n    data-amplify-fieldset\n    [disabled]="authenticator.isPending"\n  >\n    <amplify-slot name="setup-totp-header" [context]="context">\n      <h3 class="amplify-heading amplify-heading--3">{{ this.headerText }}</h3>\n    </amplify-slot>\n    <p *ngIf="!qrCodeSource">Loading...</p>\n    <img\n      *ngIf="qrCodeSource"\n      [src]="qrCodeSource"\n      alt="qr code"\n      data-amplify-qrcode\n      width="228"\n      height="228"\n    />\n    <div class="amplify-flex" data-amplify-copy>\n      <div>{{ totpSecretCode }}</div>\n      <div data-amplify-copy-svg (click)="copyText()">\n        <div data-amplify-copy-tooltip>{{ copyTextLabel }}</div>\n        <svg\n          width="24"\n          height="24"\n          viewBox="0 0 24 24"\n          xmlns="http://www.w3.org/2000/svg"\n        >\n          <path\n            d="M16 1H4C2.9 1 2 1.9 2 3V17H4V3H16V1ZM15 5H8C6.9 5 6.01 5.9 6.01 7L6 21C6 22.1 6.89 23 7.99 23H19C20.1 23 21 22.1 21 21V11L15 5ZM8 21V7H14V12H19V21H8Z"\n          />\n        </svg>\n      </div>\n    </div>\n\n    <amplify-base-form-fields route="setupTotp"></amplify-base-form-fields>\n    <button\n      amplify-button\n      variation="primary"\n      fullWidth="true"\n      type="submit"\n      [isDisabled]="authenticator.isPending"\n    >\n      {{ confirmText }}\n    </button>\n    <button\n      amplify-button\n      size="small"\n      variation="link"\n      fontWeight="normal"\n      fullWidth="true"\n      (click)="authenticator.toSignIn()"\n    >\n      {{ backToSignInText }}\n    </button>\n    <amplify-error *ngIf="authenticator.error">\n      {{ authenticator.error }}\n    </amplify-error>\n  </fieldset>\n  <amplify-slot name="setup-totp-footer" [context]="context"> </amplify-slot>\n</form>\n'
    }]
  }], function() {
    return [{
      type: AuthenticatorService
    }];
  }, {
    dataAttr: [{
      type: HostBinding,
      args: ["attr.data-amplify-authenticator-setup-totp"]
    }]
  });
})();
var FederatedSignInButtonComponent = class {
  constructor(authenticator2) {
    this.authenticator = authenticator2;
    this.onClick = () => {
      this.authenticator.send({
        type: "FEDERATED_SIGN_IN",
        data: {
          provider: this.provider
        }
      });
    };
  }
};
FederatedSignInButtonComponent.ɵfac = function FederatedSignInButtonComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FederatedSignInButtonComponent)(ɵɵdirectiveInject(AuthenticatorService));
};
FederatedSignInButtonComponent.ɵcmp = ɵɵdefineComponent({
  type: FederatedSignInButtonComponent,
  selectors: [["amplify-federated-sign-in-button"]],
  inputs: {
    provider: "provider",
    text: "text"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 3,
  vars: 0,
  consts: [["amplify-button", "", "fullWidth", "true", "fontWeight", "normal", 1, "amplify-field-group__control", "federated-sign-in-button", 3, "click"], [1, "amplify-flex", "federated-sign-in-button-row"]],
  template: function FederatedSignInButtonComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "button", 0);
      ɵɵlistener("click", function FederatedSignInButtonComponent_Template_button_click_0_listener() {
        return ctx.onClick();
      });
      ɵɵelementStart(1, "div", 1);
      ɵɵprojection(2);
      ɵɵelementEnd()();
    }
  },
  dependencies: [ButtonComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FederatedSignInButtonComponent, [{
    type: Component,
    args: [{
      selector: "amplify-federated-sign-in-button",
      template: '<button\n  amplify-button\n  class="amplify-field-group__control federated-sign-in-button"\n  fullWidth="true"\n  fontWeight="normal"\n  (click)="onClick()"\n>\n  <div class="amplify-flex federated-sign-in-button-row">\n    <ng-content></ng-content>\n  </div>\n</button>\n'
    }]
  }], function() {
    return [{
      type: AuthenticatorService
    }];
  }, {
    provider: [{
      type: Input
    }],
    text: [{
      type: Input
    }]
  });
})();
var {
  getSignInWithFederationText: getSignInWithFederationText2,
  getOrText
} = authenticatorTextUtil;
var FederatedSignInComponent = class {
  constructor(authenticator2) {
    this.authenticator = authenticator2;
    this.FederatedProviders = FederatedIdentityProviders;
    this.includeAmazon = false;
    this.includeApple = false;
    this.includeFacebook = false;
    this.includeGoogle = false;
    this.shouldShowFederatedSignIn = false;
  }
  ngOnInit() {
    const socialProviders = this.authenticator.context?.config?.socialProviders;
    this.setFederatedTexts();
    this.includeAmazon = socialProviders?.includes("amazon");
    this.includeApple = socialProviders?.includes("apple");
    this.includeGoogle = socialProviders?.includes("google");
    this.includeFacebook = socialProviders?.includes("facebook");
    this.shouldShowFederatedSignIn = this.includeAmazon || this.includeApple || this.includeFacebook || this.includeGoogle;
  }
  setFederatedTexts() {
    const {
      route
    } = this.authenticator;
    this.orText = getOrText();
    this.signInAmazonText = getSignInWithFederationText2(route, "amazon");
    this.signInAppleText = getSignInWithFederationText2(route, "apple");
    this.signInFacebookText = getSignInWithFederationText2(route, "facebook");
    this.signInGoogleText = getSignInWithFederationText2(route, "google");
  }
};
FederatedSignInComponent.ɵfac = function FederatedSignInComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || FederatedSignInComponent)(ɵɵdirectiveInject(AuthenticatorService));
};
FederatedSignInComponent.ɵcmp = ɵɵdefineComponent({
  type: FederatedSignInComponent,
  selectors: [["amplify-federated-sign-in"]],
  standalone: false,
  decls: 1,
  vars: 1,
  consts: [["class", "amplify-flex federated-sign-in-container", "data-orientation", "horizontal", "data-size", "small", 4, "ngIf"], ["data-orientation", "horizontal", "data-size", "small", 1, "amplify-flex", "federated-sign-in-container"], [3, "text", "provider", 4, "ngIf"], [3, "provider", 4, "ngIf"], ["aria-orientation", "horizontal", "data-size", "small", 1, "amplify-divider", "amplify-divider--label", "amplify-divider--small"], [3, "text", "provider"], ["aria-label", "Amazon icon", "viewBox", "0 0 248 268", 1, "amplify-icon", "federated-sign-in-icon"], ["d", "M139.056521,147.024612 C133.548808,156.744524 124.782731,162.726926 115.087401,162.726926 C101.790721,162.726926 93.9937779,152.612964 93.9937779,137.68681 C93.9937779,108.224571 120.447551,102.879017 145.533369,102.879017 L145.533369,110.365976 C145.533369,123.831358 145.876354,135.063787 139.056521,147.024612 M207.206992,162.579655 C209.400505,165.692256 209.887066,169.437725 207.063416,171.770186 C199.996315,177.653081 187.429476,188.590967 180.513926,194.716661 L180.46208,194.621133 C178.176838,196.663031 174.862638,196.810303 172.27828,195.445057 C160.780281,185.9162 158.686473,181.494078 152.405048,172.403055 C133.405233,191.751331 119.909143,197.534719 95.309886,197.534719 C66.1281801,197.534719 43.4791563,179.599451 43.4791563,143.669212 C43.4791563,115.616003 58.6782107,96.5105248 80.4019706,87.1727225 C99.2063636,78.9096034 125.464714,77.4528107 145.533369,75.1641337 L145.533369,70.694248 C145.533369,62.4749122 146.167493,52.7510201 141.297893,45.6541312 C137.110277,39.2856386 129.018206,36.6586354 121.859376,36.6586354 C108.658413,36.6586354 96.9171331,43.4171982 94.0416364,57.4199213 C93.4593582,60.532522 91.1701278,63.5933787 88.003492,63.7406501 L54.4387473,60.1424518 C51.6150972,59.5095829 48.4484614,57.2248862 49.2740201,52.8982915 C56.9712583,12.2553679 93.7983558,0 126.732964,0 C143.587124,0 165.606011,4.47386604 178.902691,17.2148315 C195.760839,32.917146 194.149604,53.8694866 194.149604,76.6726704 L194.149604,130.542157 C194.149604,146.734049 200.87372,153.830938 207.206992,162.579655 Z M233.826346,208.038962 C230.467669,203.683255 211.550709,205.9821 203.056405,206.998432 C200.470662,207.321077 200.076227,205.042397 202.406981,203.404973 C217.475208,192.664928 242.201125,195.766353 245.081698,199.363845 C247.966255,202.981502 244.336653,228.071183 230.172839,240.049379 C228.001452,241.888455 225.929671,240.904388 226.89783,238.468418 C230.077218,230.430525 237.204944,212.418868 233.826346,208.038962 Z M126.768855,264 C74.0234043,264 42.0764048,241.955028 17.7852554,217.541992 C12.9733903,212.705982 6.71799208,206.295994 3.31151296,200.690918 C1.90227474,198.372135 5.59096074,195.021875 8.0442063,196.84375 C38.2390146,219.267578 82.1011654,239.538304 125.529506,239.538304 C154.819967,239.538304 191.046475,227.469543 220.66851,214.867659 C225.146771,212.966167 225.146771,219.180222 224.511585,221.060516 C224.183264,222.03242 209.514625,236.221149 189.247207,247.047411 C170.304273,257.166172 146.397132,264 126.768855,264 Z", "fill", "#FF9900"], [1, "amplify-text", "amplify-authenticator__federated-text"], [3, "provider"], ["aria-label", "Apple icon", "fill", "#000", "preserveAspectRatio", "xMidYMid", "stroke", "#000", "strokeWidth", "0", "viewBox", "0 0 1024 1024", "xmlns", "http://www.w3.org/2000/svg", 1, "amplify-icon", "federated-sign-in-icon"], ["d", "M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"], ["aria-label", "Facebook icon", "viewBox", "0 0 279 538", 1, "amplify-icon", "federated-sign-in-icon"], ["d", "M82.3409742,538 L82.3409742,292.936652 L0,292.936652 L0,196.990154 L82.2410458,196.990154 L82.2410458,126.4295 C82.2410458,44.575144 132.205229,0 205.252865,0 C240.227794,0 270.306232,2.59855099 279,3.79788222 L279,89.2502322 L228.536175,89.2502322 C188.964542,89.2502322 181.270057,108.139699 181.270057,135.824262 L181.270057,196.89021 L276.202006,196.89021 L263.810888,292.836708 L181.16913,292.836708 L181.16913,538 L82.3409742,538 Z", "fill", "#1877F2"], ["aria-label", "Google icon", "viewBox", "0 0 256 262", "xmlns", "http://www.w3.org/2000/svg", "preserveAspectRatio", "xMidYMid", 1, "amplify-icon", "federated-sign-in-icon"], ["d", "M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027", "fill", "#4285F4"], ["d", "M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1", "fill", "#34A853"], ["d", "M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782", "fill", "#FBBC05"], ["d", "M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251", "fill", "#EB4335"]],
  template: function FederatedSignInComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, FederatedSignInComponent_div_0_Template, 6, 5, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.shouldShowFederatedSignIn);
    }
  },
  dependencies: [NgIf, FederatedSignInButtonComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FederatedSignInComponent, [{
    type: Component,
    args: [{
      selector: "amplify-federated-sign-in",
      template: '<div\n  class="amplify-flex federated-sign-in-container"\n  *ngIf="shouldShowFederatedSignIn"\n  data-orientation="horizontal"\n  data-size="small"\n>\n  <amplify-federated-sign-in-button\n    *ngIf="includeAmazon"\n    [text]="signInAmazonText"\n    [provider]="FederatedProviders.Amazon"\n  >\n    <svg\n      aria-label="Amazon icon"\n      class="amplify-icon federated-sign-in-icon"\n      viewBox="0 0 248 268"\n    >\n      <path\n        d="M139.056521,147.024612 C133.548808,156.744524 124.782731,162.726926 115.087401,162.726926 C101.790721,162.726926 93.9937779,152.612964 93.9937779,137.68681 C93.9937779,108.224571 120.447551,102.879017 145.533369,102.879017 L145.533369,110.365976 C145.533369,123.831358 145.876354,135.063787 139.056521,147.024612 M207.206992,162.579655 C209.400505,165.692256 209.887066,169.437725 207.063416,171.770186 C199.996315,177.653081 187.429476,188.590967 180.513926,194.716661 L180.46208,194.621133 C178.176838,196.663031 174.862638,196.810303 172.27828,195.445057 C160.780281,185.9162 158.686473,181.494078 152.405048,172.403055 C133.405233,191.751331 119.909143,197.534719 95.309886,197.534719 C66.1281801,197.534719 43.4791563,179.599451 43.4791563,143.669212 C43.4791563,115.616003 58.6782107,96.5105248 80.4019706,87.1727225 C99.2063636,78.9096034 125.464714,77.4528107 145.533369,75.1641337 L145.533369,70.694248 C145.533369,62.4749122 146.167493,52.7510201 141.297893,45.6541312 C137.110277,39.2856386 129.018206,36.6586354 121.859376,36.6586354 C108.658413,36.6586354 96.9171331,43.4171982 94.0416364,57.4199213 C93.4593582,60.532522 91.1701278,63.5933787 88.003492,63.7406501 L54.4387473,60.1424518 C51.6150972,59.5095829 48.4484614,57.2248862 49.2740201,52.8982915 C56.9712583,12.2553679 93.7983558,0 126.732964,0 C143.587124,0 165.606011,4.47386604 178.902691,17.2148315 C195.760839,32.917146 194.149604,53.8694866 194.149604,76.6726704 L194.149604,130.542157 C194.149604,146.734049 200.87372,153.830938 207.206992,162.579655 Z M233.826346,208.038962 C230.467669,203.683255 211.550709,205.9821 203.056405,206.998432 C200.470662,207.321077 200.076227,205.042397 202.406981,203.404973 C217.475208,192.664928 242.201125,195.766353 245.081698,199.363845 C247.966255,202.981502 244.336653,228.071183 230.172839,240.049379 C228.001452,241.888455 225.929671,240.904388 226.89783,238.468418 C230.077218,230.430525 237.204944,212.418868 233.826346,208.038962 Z M126.768855,264 C74.0234043,264 42.0764048,241.955028 17.7852554,217.541992 C12.9733903,212.705982 6.71799208,206.295994 3.31151296,200.690918 C1.90227474,198.372135 5.59096074,195.021875 8.0442063,196.84375 C38.2390146,219.267578 82.1011654,239.538304 125.529506,239.538304 C154.819967,239.538304 191.046475,227.469543 220.66851,214.867659 C225.146771,212.966167 225.146771,219.180222 224.511585,221.060516 C224.183264,222.03242 209.514625,236.221149 189.247207,247.047411 C170.304273,257.166172 146.397132,264 126.768855,264 Z"\n        fill="#FF9900"\n      ></path>\n    </svg>\n\n    <p class="amplify-text amplify-authenticator__federated-text">\n      {{ signInAmazonText }}\n    </p>\n  </amplify-federated-sign-in-button>\n\n  <amplify-federated-sign-in-button\n    *ngIf="includeApple"\n    [provider]="FederatedProviders.Apple"\n  >\n    <svg\n      aria-label="Apple icon"\n      class="amplify-icon federated-sign-in-icon"\n      fill="#000"\n      preserveAspectRatio="xMidYMid"\n      stroke="#000"\n      strokeWidth="0"\n      viewBox="0 0 1024 1024"\n      xmlns="http://www.w3.org/2000/svg"\n    >\n      <path\n        d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"\n      ></path>\n    </svg>\n    <p class="amplify-text amplify-authenticator__federated-text">\n      {{ signInAppleText }}\n    </p>\n  </amplify-federated-sign-in-button>\n\n  <amplify-federated-sign-in-button\n    *ngIf="includeFacebook"\n    [text]="signInFacebookText"\n    [provider]="FederatedProviders.Facebook"\n  >\n    <svg\n      aria-label="Facebook icon"\n      class="amplify-icon federated-sign-in-icon"\n      viewBox="0 0 279 538"\n    >\n      <path\n        d="M82.3409742,538 L82.3409742,292.936652 L0,292.936652 L0,196.990154 L82.2410458,196.990154 L82.2410458,126.4295 C82.2410458,44.575144 132.205229,0 205.252865,0 C240.227794,0 270.306232,2.59855099 279,3.79788222 L279,89.2502322 L228.536175,89.2502322 C188.964542,89.2502322 181.270057,108.139699 181.270057,135.824262 L181.270057,196.89021 L276.202006,196.89021 L263.810888,292.836708 L181.16913,292.836708 L181.16913,538 L82.3409742,538 Z"\n        fill="#1877F2"\n      ></path>\n    </svg>\n    <p class="amplify-text amplify-authenticator__federated-text">\n      {{ signInFacebookText }}\n    </p>\n  </amplify-federated-sign-in-button>\n\n  <amplify-federated-sign-in-button\n    *ngIf="includeGoogle"\n    [provider]="FederatedProviders.Google"\n  >\n    <svg\n      aria-label="Google icon"\n      class="amplify-icon federated-sign-in-icon"\n      viewBox="0 0 256 262"\n      xmlns="http://www.w3.org/2000/svg"\n      preserveAspectRatio="xMidYMid"\n    >\n      <path\n        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"\n        fill="#4285F4"\n      ></path>\n      <path\n        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"\n        fill="#34A853"\n      ></path>\n      <path\n        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"\n        fill="#FBBC05"\n      ></path>\n      <path\n        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"\n        fill="#EB4335"\n      ></path>\n    </svg>\n    <p class="amplify-text amplify-authenticator__federated-text">\n      {{ signInGoogleText }}\n    </p>\n  </amplify-federated-sign-in-button>\n\n  <hr\n    class="amplify-divider amplify-divider--label amplify-divider--small"\n    aria-orientation="horizontal"\n    data-size="small"\n    [attr.data-label]="orText"\n  />\n</div>\n'
    }]
  }], function() {
    return [{
      type: AuthenticatorService
    }];
  }, null);
})();
var {
  getForgotPasswordText,
  getSignInText
} = authenticatorTextUtil;
var SignInComponent = class {
  constructor(authenticator2) {
    this.authenticator = authenticator2;
    this.dataAttr = "";
    this.forgotPasswordText = getForgotPasswordText();
    this.signInButtonText = getSignInText();
  }
  get context() {
    return this.authenticator.slotContext;
  }
  onInput(event2) {
    event2.preventDefault();
    const {
      name,
      value
    } = event2.target;
    this.authenticator.updateForm({
      name,
      value
    });
  }
  onSubmit(event2) {
    event2.preventDefault();
    this.authenticator.submitForm(getFormDataFromEvent(event2));
  }
};
SignInComponent.ɵfac = function SignInComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SignInComponent)(ɵɵdirectiveInject(AuthenticatorService));
};
SignInComponent.ɵcmp = ɵɵdefineComponent({
  type: SignInComponent,
  selectors: [["amplify-sign-in"]],
  hostVars: 1,
  hostBindings: function SignInComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-amplify-authenticator-signin", ctx.dataAttr);
    }
  },
  standalone: false,
  decls: 14,
  vars: 7,
  consts: [["name", "sign-in-header", 3, "context"], ["data-amplify-form", "", 3, "submit", "input"], ["data-amplify-fieldset", "", 1, "amplify-flex", "amplify-authenticator__column", 2, "flex-direction", "column", 3, "disabled"], [1, "amplify-visually-hidden"], ["route", "signIn"], ["amplify-button", "", "variation", "primary", "fullWidth", "true", "type", "submit", 3, "isDisabled"], [4, "ngIf"], ["name", "sign-in-footer", 3, "context"], ["data-amplify-footer", ""], ["amplify-button", "", "fontWeight", "normal", "size", "small", "variation", "link", "fullWidth", "true", 3, "click"]],
  template: function SignInComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "amplify-slot", 0);
      ɵɵelementStart(1, "form", 1);
      ɵɵlistener("submit", function SignInComponent_Template_form_submit_1_listener($event) {
        return ctx.onSubmit($event);
      })("input", function SignInComponent_Template_form_input_1_listener($event) {
        return ctx.onInput($event);
      });
      ɵɵelement(2, "amplify-federated-sign-in");
      ɵɵelementStart(3, "fieldset", 2)(4, "legend", 3);
      ɵɵtext(5, "Sign in");
      ɵɵelementEnd();
      ɵɵelement(6, "amplify-base-form-fields", 4);
      ɵɵelementStart(7, "button", 5);
      ɵɵtext(8);
      ɵɵelementEnd();
      ɵɵtemplate(9, SignInComponent_amplify_error_9_Template, 2, 1, "amplify-error", 6);
      ɵɵelementEnd()();
      ɵɵelementStart(10, "amplify-slot", 7)(11, "div", 8)(12, "button", 9);
      ɵɵlistener("click", function SignInComponent_Template_button_click_12_listener() {
        return ctx.authenticator.toForgotPassword();
      });
      ɵɵtext(13);
      ɵɵelementEnd()()();
    }
    if (rf & 2) {
      ɵɵproperty("context", ctx.context);
      ɵɵadvance(3);
      ɵɵproperty("disabled", ctx.authenticator.isPending);
      ɵɵadvance(4);
      ɵɵproperty("isDisabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.signInButtonText, " ");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.authenticator.error);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
      ɵɵadvance(3);
      ɵɵtextInterpolate1(" ", ctx.forgotPasswordText, " ");
    }
  },
  dependencies: [NgIf, AmplifySlotComponent, BaseFormFieldsComponent, ButtonComponent, ErrorComponent, FederatedSignInComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignInComponent, [{
    type: Component,
    args: [{
      selector: "amplify-sign-in",
      encapsulation: ViewEncapsulation.None,
      template: '<amplify-slot name="sign-in-header" [context]="context"></amplify-slot>\n\n<form data-amplify-form (submit)="onSubmit($event)" (input)="onInput($event)">\n  <amplify-federated-sign-in></amplify-federated-sign-in>\n  <fieldset\n    class="amplify-flex amplify-authenticator__column"\n    style="flex-direction: column"\n    data-amplify-fieldset\n    [disabled]="authenticator.isPending"\n  >\n    <legend class="amplify-visually-hidden">Sign in</legend>\n    <amplify-base-form-fields route="signIn"></amplify-base-form-fields>\n    <button\n      amplify-button\n      variation="primary"\n      fullWidth="true"\n      type="submit"\n      [isDisabled]="authenticator.isPending"\n    >\n      {{ signInButtonText }}\n    </button>\n\n    <amplify-error *ngIf="authenticator.error">\n      {{ authenticator.error }}\n    </amplify-error>\n  </fieldset>\n</form>\n\n<amplify-slot name="sign-in-footer" [context]="context">\n  <div data-amplify-footer>\n    <button\n      amplify-button\n      fontWeight="normal"\n      size="small"\n      variation="link"\n      fullWidth="true"\n      (click)="authenticator.toForgotPassword()"\n    >\n      {{ forgotPasswordText }}\n    </button>\n  </div>\n</amplify-slot>\n'
    }]
  }], function() {
    return [{
      type: AuthenticatorService
    }];
  }, {
    dataAttr: [{
      type: HostBinding,
      args: ["attr.data-amplify-authenticator-signin"]
    }]
  });
})();
var SignUpFormFieldsComponent = class {
};
SignUpFormFieldsComponent.ɵfac = function SignUpFormFieldsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SignUpFormFieldsComponent)();
};
SignUpFormFieldsComponent.ɵcmp = ɵɵdefineComponent({
  type: SignUpFormFieldsComponent,
  selectors: [["amplify-sign-up-form-fields"]],
  standalone: false,
  decls: 2,
  vars: 0,
  consts: [["data-amplify-fieldset", "", 1, "amplify-flex", "amplify-authenticator__column"], ["route", "signUp"]],
  template: function SignUpFormFieldsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵelement(1, "amplify-base-form-fields", 1);
      ɵɵelementEnd();
    }
  },
  dependencies: [BaseFormFieldsComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignUpFormFieldsComponent, [{
    type: Component,
    args: [{
      selector: "amplify-sign-up-form-fields",
      template: '<div class="amplify-flex amplify-authenticator__column" data-amplify-fieldset>\n  <amplify-base-form-fields route="signUp"></amplify-base-form-fields>\n</div>\n'
    }]
  }], null, null);
})();
var {
  getCreateAccountText
} = authenticatorTextUtil;
var SignUpComponent = class {
  constructor(authenticator2) {
    this.authenticator = authenticator2;
    this.dataAttr = "";
    this.createAccountText = getCreateAccountText();
  }
  get context() {
    return this.authenticator.slotContext;
  }
  onInput(event2) {
    const {
      checked,
      name,
      type,
      value
    } = event2.target;
    const isUncheckedCheckbox = type === "checkbox" && !checked;
    this.authenticator.updateForm({
      name,
      value: isUncheckedCheckbox ? void 0 : value
    });
  }
  onSubmit(event2) {
    event2.preventDefault();
    this.authenticator.submitForm(getFormDataFromEvent(event2));
  }
};
SignUpComponent.ɵfac = function SignUpComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || SignUpComponent)(ɵɵdirectiveInject(AuthenticatorService));
};
SignUpComponent.ɵcmp = ɵɵdefineComponent({
  type: SignUpComponent,
  selectors: [["amplify-sign-up"]],
  hostVars: 1,
  hostBindings: function SignUpComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-amplify-authenticator-signup", ctx.dataAttr);
    }
  },
  standalone: false,
  decls: 12,
  vars: 7,
  consts: [["name", "sign-up-header", 3, "context"], ["data-amplify-form", "", 3, "submit", "input"], [1, "amplify-flex", "amplify-authenticator__column"], ["name", "sign-up-form-fields", 3, "context"], [4, "ngIf"], ["name", "sign-up-button", 3, "context"], ["amplify-button", "", "variation", "primary", "fullWidth", "true", "type", "submit", 3, "isDisabled"], ["name", "sign-up-footer", 3, "context"]],
  template: function SignUpComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "amplify-slot", 0);
      ɵɵelementStart(1, "form", 1);
      ɵɵlistener("submit", function SignUpComponent_Template_form_submit_1_listener($event) {
        return ctx.onSubmit($event);
      })("input", function SignUpComponent_Template_form_input_1_listener($event) {
        return ctx.onInput($event);
      });
      ɵɵelement(2, "amplify-federated-sign-in");
      ɵɵelementStart(3, "div", 2)(4, "div", 2)(5, "amplify-slot", 3);
      ɵɵelement(6, "amplify-sign-up-form-fields");
      ɵɵelementEnd();
      ɵɵtemplate(7, SignUpComponent_amplify_error_7_Template, 2, 1, "amplify-error", 4);
      ɵɵelementEnd();
      ɵɵelementStart(8, "amplify-slot", 5)(9, "button", 6);
      ɵɵtext(10);
      ɵɵelementEnd()()()();
      ɵɵelement(11, "amplify-slot", 7);
    }
    if (rf & 2) {
      ɵɵproperty("context", ctx.context);
      ɵɵadvance(5);
      ɵɵproperty("context", ctx.context);
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.authenticator.error);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
      ɵɵadvance();
      ɵɵproperty("isDisabled", ctx.authenticator.isPending || ctx.authenticator.hasValidationErrors);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.createAccountText, " ");
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
    }
  },
  dependencies: [NgIf, AmplifySlotComponent, ButtonComponent, ErrorComponent, FederatedSignInComponent, SignUpFormFieldsComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignUpComponent, [{
    type: Component,
    args: [{
      selector: "amplify-sign-up",
      template: '<amplify-slot name="sign-up-header" [context]="context"></amplify-slot>\n\n<form data-amplify-form (submit)="onSubmit($event)" (input)="onInput($event)">\n  <amplify-federated-sign-in></amplify-federated-sign-in>\n  <div class="amplify-flex amplify-authenticator__column">\n    <div class="amplify-flex amplify-authenticator__column">\n      <amplify-slot name="sign-up-form-fields" [context]="context">\n        <amplify-sign-up-form-fields></amplify-sign-up-form-fields>\n      </amplify-slot>\n\n      <amplify-error *ngIf="authenticator.error">\n        {{ authenticator.error }}\n      </amplify-error>\n    </div>\n\n    <amplify-slot name="sign-up-button" [context]="context">\n      <button\n        [isDisabled]="\n          authenticator.isPending || authenticator.hasValidationErrors\n        "\n        amplify-button\n        variation="primary"\n        fullWidth="true"\n        type="submit"\n      >\n        {{ createAccountText }}\n      </button>\n    </amplify-slot>\n  </div>\n</form>\n\n<amplify-slot name="sign-up-footer" [context]="context"> </amplify-slot>\n'
    }]
  }], function() {
    return [{
      type: AuthenticatorService
    }];
  }, {
    dataAttr: [{
      type: HostBinding,
      args: ["attr.data-amplify-authenticator-signup"]
    }]
  });
})();
var TabItemComponent = class {
  constructor() {
    this.active = false;
    this.display = "block";
  }
};
TabItemComponent.ɵfac = function TabItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TabItemComponent)();
};
TabItemComponent.ɵcmp = ɵɵdefineComponent({
  type: TabItemComponent,
  selectors: [["amplify-tab-item"]],
  hostVars: 2,
  hostBindings: function TabItemComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵstyleProp("display", ctx.display);
    }
  },
  inputs: {
    title: "title",
    active: "active",
    id: "id",
    labelledById: "labelledById",
    tabIndex: "tabIndex"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 2,
  vars: 6,
  consts: [["role", "tabpanel", 1, "amplify-tabs__panel", 3, "id"], [4, "ngIf"]],
  template: function TabItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵtemplate(1, TabItemComponent_ng_content_1_Template, 1, 0, "ng-content", 1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassMap(ctx.active ? "amplify-tabs__panel--active" : "");
      ɵɵproperty("id", ctx.id);
      ɵɵattribute("aria-labelledby", ctx.labelledById)("tabindex", ctx.tabIndex);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.active);
    }
  },
  dependencies: [NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabItemComponent, [{
    type: Component,
    args: [{
      selector: "amplify-tab-item",
      template: `<div
  role="tabpanel"
  class="amplify-tabs__panel"
  [class]="active ? 'amplify-tabs__panel--active' : ''"
  [id]="id"
  [attr.aria-labelledby]="labelledById"
  [attr.tabindex]="tabIndex"
>
  <ng-content *ngIf="active"></ng-content>
</div>
`
    }]
  }], null, {
    title: [{
      type: Input
    }],
    active: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    labelledById: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    display: [{
      type: HostBinding,
      args: ["style.display"]
    }]
  });
})();
var TabsComponent = class {
  constructor() {
    this.tabChange = new EventEmitter();
  }
  ngAfterContentInit() {
    this.tabs.forEach((tab, index) => {
      tab.id = `tab-${nanoid(12)}-panel-${index}`;
      tab.labelledById = `tab-${nanoid(12)}-tab-${index}`;
    });
    const activeTabs = this.tabs.filter((tab) => tab.active);
    if (activeTabs.length !== 1) {
      this.selectTab(this.tabs.first);
    }
  }
  selectTab(tab) {
    this.tabs.forEach((tab2) => {
      tab2.active = false;
    });
    tab.active = true;
  }
  handleTabClick(tab) {
    if (tab.active) return;
    this.tabChange.emit();
    this.selectTab(tab);
  }
};
TabsComponent.ɵfac = function TabsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || TabsComponent)();
};
TabsComponent.ɵcmp = ɵɵdefineComponent({
  type: TabsComponent,
  selectors: [["amplify-tabs"]],
  contentQueries: function TabsComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TabItemComponent, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tabs = _t);
    }
  },
  outputs: {
    tabChange: "tabChange"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 4,
  vars: 1,
  consts: [[1, "amplify-tabs"], ["role", "tablist", 1, "amplify-tabs__list", "amplify-tabs__list--top", "amplify-tabs__list--equal"], ["class", "amplify-tabs__item", "role", "tab", 3, "id", "tabindex", "class", "click", 4, "ngFor", "ngForOf"], ["role", "tab", 1, "amplify-tabs__item", 3, "click", "id", "tabindex"]],
  template: function TabsComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0)(1, "div", 1);
      ɵɵtemplate(2, TabsComponent_button_2_Template, 2, 7, "button", 2);
      ɵɵelementEnd()();
      ɵɵprojection(3);
    }
    if (rf & 2) {
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.tabs);
    }
  },
  dependencies: [NgForOf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TabsComponent, [{
    type: Component,
    args: [{
      selector: "amplify-tabs",
      template: `<div class="amplify-tabs">
  <div
    class="amplify-tabs__list amplify-tabs__list--top amplify-tabs__list--equal"
    role="tablist"
  >
    <button
      *ngFor="let tab of tabs"
      class="amplify-tabs__item"
      role="tab"
      [id]="tab.labelledById"
      [tabindex]="tab.active ? '0' : '-1'"
      [attr.aria-selected]="tab.active"
      [attr.aria-controls]="tab.id"
      [class]="tab.active ? 'amplify-tabs__item--active' : ''"
      (click)="handleTabClick(tab)"
    >
      {{ tab.title }}
    </button>
  </div>
</div>

<ng-content></ng-content>
`
    }]
  }], null, {
    tabs: [{
      type: ContentChildren,
      args: [TabItemComponent]
    }],
    tabChange: [{
      type: Output
    }]
  });
})();
var getAttributeMap = () => defaultFormFieldOptions;
var {
  getSkipText,
  getVerifyText,
  getAccountRecoveryInfoText
} = authenticatorTextUtil;
var VerifyUserComponent = class {
  constructor(authenticator2) {
    this.authenticator = authenticator2;
    this.dataAttr = "";
    this.headerText = getAccountRecoveryInfoText();
    this.unverifiedUserAttributes = {};
    this.labelId = nanoid(12);
    this.skipText = getSkipText();
    this.verifyText = getVerifyText();
  }
  get context() {
    return this.authenticator.slotContext;
  }
  ngOnInit() {
    const actorState = getActorState(this.authenticator.authState);
    this.unverifiedUserAttributes = actorState.context.unverifiedUserAttributes;
  }
  getLabel(attr, value) {
    const attributeMap = getAttributeMap();
    const {
      label
    } = attributeMap[attr];
    const translatedTypeLabel = translate(label);
    const censoredAttributeValue = censorContactMethod(label, value);
    return `${translatedTypeLabel}: ${censoredAttributeValue}`;
  }
  onInput(event2) {
    event2.preventDefault();
    const {
      name,
      value
    } = event2.target;
    this.authenticator.updateForm({
      name,
      value
    });
  }
  onSubmit(event2) {
    event2.preventDefault();
    this.authenticator.submitForm(getFormDataFromEvent(event2));
  }
};
VerifyUserComponent.ɵfac = function VerifyUserComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || VerifyUserComponent)(ɵɵdirectiveInject(AuthenticatorService));
};
VerifyUserComponent.ɵcmp = ɵɵdefineComponent({
  type: VerifyUserComponent,
  selectors: [["amplify-verify-user"]],
  hostVars: 1,
  hostBindings: function VerifyUserComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("data-amplify-authenticator-verifyuser", ctx.dataAttr);
    }
  },
  inputs: {
    headerText: "headerText"
  },
  standalone: false,
  decls: 13,
  vars: 11,
  consts: [["data-amplify-form", "", 3, "input", "submit"], ["data-amplify-fieldset", "", 1, "amplify-flex", "amplify-authenticator__column", 3, "disabled"], ["name", "verify-user-header", 3, "context"], [1, "amplify-heading", "amplify-heading--3"], [4, "ngFor", "ngForOf"], ["amplify-button", "", "variation", "primary", "fullWidth", "true", "type", "submit", 3, "isDisabled"], ["amplify-button", "", "size", "small", "variation", "link", "fontWeight", "normal", "fullWidth", "true", 3, "click"], [4, "ngIf"], ["name", "verify-user-footer", 3, "context"], ["name", "unverifiedAttr", "type", "radio", 3, "value", "id", "checked"], [3, "for"]],
  template: function VerifyUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "form", 0);
      ɵɵlistener("input", function VerifyUserComponent_Template_form_input_0_listener($event) {
        return ctx.onInput($event);
      })("submit", function VerifyUserComponent_Template_form_submit_0_listener($event) {
        return ctx.onSubmit($event);
      });
      ɵɵelementStart(1, "fieldset", 1)(2, "amplify-slot", 2)(3, "h3", 3);
      ɵɵtext(4);
      ɵɵelementEnd()();
      ɵɵtemplate(5, VerifyUserComponent_div_5_Template, 4, 5, "div", 4);
      ɵɵpipe(6, "keyvalue");
      ɵɵelementStart(7, "button", 5);
      ɵɵtext(8);
      ɵɵelementEnd();
      ɵɵelementStart(9, "button", 6);
      ɵɵlistener("click", function VerifyUserComponent_Template_button_click_9_listener() {
        return ctx.authenticator.skipVerification();
      });
      ɵɵtext(10);
      ɵɵelementEnd();
      ɵɵtemplate(11, VerifyUserComponent_amplify_error_11_Template, 2, 1, "amplify-error", 7);
      ɵɵelementEnd();
      ɵɵelement(12, "amplify-slot", 8);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("disabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
      ɵɵadvance(2);
      ɵɵtextInterpolate(ctx.headerText);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ɵɵpipeBind1(6, 9, ctx.unverifiedUserAttributes));
      ɵɵadvance(2);
      ɵɵproperty("isDisabled", ctx.authenticator.isPending);
      ɵɵadvance();
      ɵɵtextInterpolate1(" ", ctx.verifyText, " ");
      ɵɵadvance(2);
      ɵɵtextInterpolate1(" ", ctx.skipText, " ");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.authenticator.error);
      ɵɵadvance();
      ɵɵproperty("context", ctx.context);
    }
  },
  dependencies: [NgForOf, NgIf, AmplifySlotComponent, ButtonComponent, ErrorComponent, KeyValuePipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerifyUserComponent, [{
    type: Component,
    args: [{
      selector: "amplify-verify-user",
      encapsulation: ViewEncapsulation.None,
      template: '<form data-amplify-form (input)="onInput($event)" (submit)="onSubmit($event)">\n  <fieldset\n    class="amplify-flex amplify-authenticator__column"\n    data-amplify-fieldset\n    [disabled]="authenticator.isPending"\n  >\n    <amplify-slot name="verify-user-header" [context]="context">\n      <h3 class="amplify-heading amplify-heading--3">{{ this.headerText }}</h3>\n    </amplify-slot>\n\n    <div\n      *ngFor="\n        let unverifiedUserAttribute of unverifiedUserAttributes | keyvalue\n        let i = index;\n      "\n    >\n      <input\n        name="unverifiedAttr"\n        type="radio"\n        [value]="unverifiedUserAttribute.key"\n        [id]="labelId"\n        [checked]="i === 0"\n      />\n      <label [for]="labelId">{{\n        getLabel(unverifiedUserAttribute.key, unverifiedUserAttribute.value)\n      }}</label>\n    </div>\n\n    <button\n      amplify-button\n      variation="primary"\n      fullWidth="true"\n      type="submit"\n      [isDisabled]="authenticator.isPending"\n    >\n      {{ verifyText }}\n    </button>\n\n    <button\n      amplify-button\n      size="small"\n      variation="link"\n      fontWeight="normal"\n      fullWidth="true"\n      (click)="authenticator.skipVerification()"\n    >\n      {{ skipText }}\n    </button>\n\n    <amplify-error *ngIf="authenticator.error">\n      {{ authenticator.error }}\n    </amplify-error>\n  </fieldset>\n  <amplify-slot name="verify-user-footer" [context]="context"> </amplify-slot>\n</form>\n'
    }]
  }], function() {
    return [{
      type: AuthenticatorService
    }];
  }, {
    dataAttr: [{
      type: HostBinding,
      args: ["attr.data-amplify-authenticator-verifyuser"]
    }],
    headerText: [{
      type: Input
    }]
  });
})();
var {
  getSignInTabText,
  getSignUpTabText
} = authenticatorTextUtil;
var AuthenticatorComponent = class {
  constructor(authenticator2, contextService, changeDetector) {
    this.authenticator = authenticator2;
    this.contextService = contextService;
    this.changeDetector = changeDetector;
    this.customComponentQuery = null;
    this.signInTitle = getSignInTabText();
    this.signUpTitle = getSignUpTabText();
    this.hasInitialized = false;
    this.isHandlingHubEvent = false;
  }
  // context passed to "authenticated" slot
  get context() {
    return this.authenticator.slotContext;
  }
  get route() {
    return this.authenticator.route;
  }
  ngOnInit() {
    const {
      initialState,
      loginMechanisms,
      services,
      signUpAttributes,
      socialProviders,
      formFields
    } = this;
    this.clearUserAgent = setUserAgent({
      componentName: "Authenticator",
      packageName: "angular",
      version: VERSION
    });
    const {
      initializeMachine
    } = this.authenticator;
    this.authenticator.hubSubject.subscribe(() => {
      this.changeDetector.detectChanges();
      this.isHandlingHubEvent = true;
    });
    this.unsubscribeMachine = this.authenticator.subscribe(() => {
      const {
        route
      } = this.authenticator;
      if (this.isHandlingHubEvent) {
        this.changeDetector.detectChanges();
        const initialStateWithDefault = initialState ?? "signIn";
        if (route === initialStateWithDefault) {
          this.isHandlingHubEvent = false;
        }
      }
      if (!this.hasInitialized && route === "setup") {
        initializeMachine({
          initialState,
          loginMechanisms,
          services,
          signUpAttributes,
          socialProviders,
          formFields
        });
        this.hasInitialized = true;
      }
    }).unsubscribe;
    this.signInTitle = getSignInTabText();
    this.signUpTitle = getSignUpTabText();
  }
  /**
   * Lifecycle Methods
   */
  ngAfterContentInit() {
    this.contextService.customComponents = this.mapCustomComponents(this.customComponentQuery);
  }
  ngOnDestroy() {
    this.clearUserAgent();
    if (this.unsubscribeMachine) this.unsubscribeMachine();
  }
  /**
   * Class Functions
   */
  onTabChange() {
    const {
      route
    } = this.authenticator;
    if (route === "signIn") {
      this.authenticator.toSignUp();
    } else {
      this.authenticator.toSignIn();
    }
  }
  hasTabs() {
    const {
      route
    } = this.authenticator;
    return route === "signIn" || route === "signUp";
  }
  hasRouteComponent() {
    const {
      route
    } = this.authenticator;
    switch (route) {
      case "authenticated":
      case "idle":
      case "setup":
      case "signOut":
      case "transition":
        return false;
      default:
        return true;
    }
  }
  mapCustomComponents(componentQuery) {
    if (!componentQuery) return {};
    const customComponents = {};
    componentQuery.forEach((component) => {
      customComponents[component.name] = component.template;
    });
    return customComponents;
  }
};
AuthenticatorComponent.ɵfac = function AuthenticatorComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AuthenticatorComponent)(ɵɵdirectiveInject(AuthenticatorService), ɵɵdirectiveInject(CustomComponentsService), ɵɵdirectiveInject(ChangeDetectorRef));
};
AuthenticatorComponent.ɵcmp = ɵɵdefineComponent({
  type: AuthenticatorComponent,
  selectors: [["amplify-authenticator"]],
  contentQueries: function AuthenticatorComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, AmplifySlotDirective, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.customComponentQuery = _t);
    }
  },
  inputs: {
    formFields: "formFields",
    initialState: "initialState",
    loginMechanisms: "loginMechanisms",
    services: "services",
    signUpAttributes: "signUpAttributes",
    socialProviders: "socialProviders",
    variation: "variation",
    hideSignUp: "hideSignUp"
  },
  standalone: false,
  features: [ɵɵProvidersFeature([CustomComponentsService])],
  ngContentSelectors: _c0,
  decls: 2,
  vars: 2,
  consts: [["data-amplify-authenticator", "", 4, "ngIf"], ["name", "authenticated", 3, "context", 4, "ngIf"], ["data-amplify-authenticator", ""], ["data-amplify-container", ""], ["name", "header", 3, "context"], ["data-amplify-router", ""], [3, "tabChange", 4, "ngIf"], ["name", "sign-in", 3, "context", 4, "ngIf"], ["name", "confirm-sign-up", 3, "context", 4, "ngIf"], ["name", "confirm-sign-in", 3, "context", 4, "ngIf"], ["name", "setup-totp", 3, "context", 4, "ngIf"], ["name", "force-new-password", 3, "context", 4, "ngIf"], ["name", "forgot-password", 3, "context", 4, "ngIf"], ["name", "confirm-reset-password", 3, "context", 4, "ngIf"], ["name", "verify-user", 3, "context", 4, "ngIf"], ["name", "confirm-verify-user", 3, "context", 4, "ngIf"], ["name", "select-mfa-type", 3, "context", 4, "ngIf"], ["name", "setup-email", 3, "context", 4, "ngIf"], ["name", "footer", 3, "context"], [3, "tabChange"], ["data-amplify-router-content", "", 3, "title", "active"], ["name", "sign-up", 3, "context", 4, "ngIf"], ["name", "sign-in", 3, "context"], ["name", "sign-up", 3, "context"], ["name", "confirm-sign-up", 3, "context"], ["name", "confirm-sign-in", 3, "context"], ["name", "setup-totp", 3, "context"], ["name", "force-new-password", 3, "context"], ["name", "forgot-password", 3, "context"], ["name", "confirm-reset-password", 3, "context"], ["name", "verify-user", 3, "context"], ["name", "confirm-verify-user", 3, "context"], ["name", "select-mfa-type", 3, "context"], ["name", "setup-email", 3, "context"], ["name", "authenticated", 3, "context"]],
  template: function AuthenticatorComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵtemplate(0, AuthenticatorComponent_div_0_Template, 17, 16, "div", 0)(1, AuthenticatorComponent_amplify_slot_1_Template, 2, 1, "amplify-slot", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.hasRouteComponent());
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.route === "authenticated");
    }
  },
  dependencies: [NgIf, AmplifySlotComponent, ConfirmResetPasswordComponent, ConfirmSignInComponent, ConfirmSignUpComponent, ConfirmVerifyUserComponent, ForceNewPasswordComponent, ForgotPasswordComponent, SelectMfaTypeComponent, SetupEmailComponent, SetupTotpComponent, SignInComponent, SignUpComponent, TabItemComponent, TabsComponent, VerifyUserComponent],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthenticatorComponent, [{
    type: Component,
    args: [{
      selector: "amplify-authenticator",
      providers: [CustomComponentsService],
      encapsulation: ViewEncapsulation.None,
      template: `<div
  data-amplify-authenticator
  [attr.data-variation]="variation"
  *ngIf="hasRouteComponent()"
>
  <div data-amplify-container>
    <amplify-slot
      name="header"
      [context]="context"
    ></amplify-slot>
    <div
      data-amplify-router
      [attr.data-amplify-router-content]="hasTabs() ? undefined : ''"
    >
      <amplify-tabs
        (tabChange)="onTabChange()"
        *ngIf="(route === 'signIn' || route === 'signUp') && !hideSignUp"
      >
        <amplify-tab-item
          [title]="signInTitle"
          [active]="route === 'signIn'"
          data-amplify-router-content
        >
          <!-- signIn component -->
          <amplify-slot
            name="sign-in"
            [context]="context"
            *ngIf="route === 'signIn'"
          >
            <amplify-sign-in></amplify-sign-in>
          </amplify-slot>
        </amplify-tab-item>
        <amplify-tab-item
          [title]="signUpTitle"
          [active]="route === 'signUp'"
          data-amplify-router-content
        >
          <!-- signUp component -->
          <amplify-slot
            name="sign-up"
            [context]="context"
            *ngIf="route === 'signUp'"
          >
            <amplify-sign-up></amplify-sign-up>
          </amplify-slot>
        </amplify-tab-item>
      </amplify-tabs>

      <amplify-slot
        name="sign-in"
        [context]="context"
        *ngIf="route === 'signIn' && hideSignUp"
      >
        <amplify-sign-in></amplify-sign-in>
      </amplify-slot>

      <!-- confirmSignUp content -->
      <amplify-slot
        name="confirm-sign-up"
        [context]="context"
        *ngIf="route === 'confirmSignUp'"
      >
        <amplify-confirm-sign-up></amplify-confirm-sign-up>
      </amplify-slot>

      <!-- confirmSignIn content -->
      <amplify-slot
        name="confirm-sign-in"
        [context]="context"
        *ngIf="route === 'confirmSignIn'"
      >
        <amplify-confirm-sign-in></amplify-confirm-sign-in>
      </amplify-slot>

      <!-- setupTotp content -->
      <amplify-slot
        name="setup-totp"
        [context]="context"
        *ngIf="route === 'setupTotp'"
      >
        <amplify-setup-totp></amplify-setup-totp>
      </amplify-slot>

      <!-- forceNewPassword content -->
      <amplify-slot
        name="force-new-password"
        [context]="context"
        *ngIf="route === 'forceNewPassword'"
      >
        <amplify-force-new-password></amplify-force-new-password>
      </amplify-slot>

      <!-- forgotPassword content -->
      <amplify-slot
        name="forgot-password"
        [context]="context"
        *ngIf="route === 'forgotPassword'"
      >
        <amplify-forgot-password></amplify-forgot-password>
      </amplify-slot>

      <!-- confirmResetPassword content -->
      <amplify-slot
        name="confirm-reset-password"
        [context]="context"
        *ngIf="route === 'confirmResetPassword'"
      >
        <amplify-confirm-reset-password></amplify-confirm-reset-password>
      </amplify-slot>

      <!-- verifyUser content -->
      <amplify-slot
        name="verify-user"
        [context]="context"
        *ngIf="route === 'verifyUser'"
      >
        <amplify-verify-user></amplify-verify-user>
      </amplify-slot>

      <!-- confirmVerifyUser content -->
      <amplify-slot
        name="confirm-verify-user"
        [context]="context"
        *ngIf="route === 'confirmVerifyUser'"
      >
        <amplify-confirm-verify-user></amplify-confirm-verify-user>
      </amplify-slot>

      <!-- selectMfaType content -->
      <amplify-slot
        name="select-mfa-type"
        [context]="context"
        *ngIf="route === 'selectMfaType'"
      >
        <amplify-select-mfa-type></amplify-select-mfa-type>
      </amplify-slot>

      <!-- setupEmail content -->
      <amplify-slot
        name="setup-email"
        [context]="context"
        *ngIf="route === 'setupEmail'"
      >
        <amplify-setup-email></amplify-setup-email>
      </amplify-slot>
    </div>

    <amplify-slot
      name="footer"
      [context]="context"
    ></amplify-slot>
  </div>
</div>

<!-- signedIn content is rendered outside authenticator so it's not styled by authenticator -->
<amplify-slot
  name="authenticated"
  [context]="context"
  *ngIf="route === 'authenticated'"
>
  <ng-content></ng-content>
</amplify-slot>`
    }]
  }], function() {
    return [{
      type: AuthenticatorService
    }, {
      type: CustomComponentsService
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    formFields: [{
      type: Input
    }],
    initialState: [{
      type: Input
    }],
    loginMechanisms: [{
      type: Input
    }],
    services: [{
      type: Input
    }],
    signUpAttributes: [{
      type: Input
    }],
    socialProviders: [{
      type: Input
    }],
    variation: [{
      type: Input
    }],
    hideSignUp: [{
      type: Input
    }],
    customComponentQuery: [{
      type: ContentChildren,
      args: [AmplifySlotDirective]
    }]
  });
})();
var CheckboxComponent = class {
  constructor() {
    this.defaultChecked = false;
    this.hasError = false;
    this.isChecked = false;
  }
  ngOnInit() {
    if (this.defaultChecked) {
      this.isChecked = true;
    }
  }
  handleClick() {
    this.isChecked = !this.isChecked;
  }
};
CheckboxComponent.ɵfac = function CheckboxComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CheckboxComponent)();
};
CheckboxComponent.ɵcmp = ɵɵdefineComponent({
  type: CheckboxComponent,
  selectors: [["amplify-checkbox"]],
  inputs: {
    defaultChecked: "defaultChecked",
    errorMessage: "errorMessage",
    hasError: "hasError",
    label: "label",
    name: "name",
    value: "value"
  },
  standalone: false,
  ngContentSelectors: _c0,
  decls: 10,
  vars: 12,
  consts: [[1, "amplify-flex", "amplify-field", "amplify-checkboxfield"], [1, "amplify-flex", "amplify-checkbox"], [1, "amplify-visually-hidden"], ["aria-invalid", "false", "type", "checkbox", 1, "amplify-input", "amplify-field-group__control", "amplify-checkbox__input", 3, "click", "name", "value"], ["aria-hidden", "true", "data-focus", "false", 1, "amplify-flex", "amplify-checkbox__button", 3, "ngClass"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 1, "amplify-icon", "amplify-checkbox__icon", 3, "ngClass"], ["d", "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"], [1, "amplify-text", "amplify-checkbox__label"], ["class", "amplify-text amplify-field__error-message", 4, "ngIf"], [1, "amplify-text", "amplify-field__error-message"]],
  template: function CheckboxComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0)(1, "label", 1)(2, "span", 2)(3, "input", 3);
      ɵɵlistener("click", function CheckboxComponent_Template_input_click_3_listener() {
        return ctx.handleClick();
      });
      ɵɵelementEnd()();
      ɵɵelementStart(4, "span", 4);
      ɵɵnamespaceSVG();
      ɵɵelementStart(5, "svg", 5);
      ɵɵelement(6, "path", 6);
      ɵɵelementEnd()();
      ɵɵnamespaceHTML();
      ɵɵelementStart(7, "span", 7);
      ɵɵprojection(8);
      ɵɵelementEnd()();
      ɵɵtemplate(9, CheckboxComponent_p_9_Template, 2, 1, "p", 8);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(3);
      ɵɵproperty("name", ctx.name)("value", ctx.value);
      ɵɵadvance();
      ɵɵproperty("ngClass", ɵɵpureFunction1(8, _c2, ctx.hasError));
      ɵɵattribute("data-error", ctx.hasError)("data-checked", ctx.isChecked);
      ɵɵadvance();
      ɵɵproperty("ngClass", ɵɵpureFunction1(10, _c3, ctx.isChecked));
      ɵɵattribute("data-checked", ctx.isChecked);
      ɵɵadvance(4);
      ɵɵproperty("ngIf", ctx.hasError);
    }
  },
  dependencies: [NgClass, NgIf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxComponent, [{
    type: Component,
    args: [{
      selector: "amplify-checkbox",
      template: `<div class="amplify-flex amplify-field amplify-checkboxfield">
  <label class="amplify-flex amplify-checkbox">
    <span class="amplify-visually-hidden">
      <input
        (click)="handleClick()"
        class="
          amplify-input
          amplify-field-group__control
          amplify-checkbox__input
        "
        aria-invalid="false"
        type="checkbox"
        [name]="name"
        [value]="value"
      />
    </span>
    <span
      class="amplify-flex amplify-checkbox__button"
      aria-hidden="true"
      data-focus="false"
      [ngClass]="{
        'amplify-checkbox__button--error': hasError
      }"
      [attr.data-error]="hasError"
      [attr.data-checked]="isChecked"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="amplify-icon amplify-checkbox__icon"
        viewBox="0 0 24 24"
        fill="currentColor"
        [attr.data-checked]="isChecked"
        [ngClass]="{
          'amplify-checkbox__icon--checked': isChecked
        }"
      >
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
      </svg>
    </span>
    <span class="amplify-text amplify-checkbox__label">
      <ng-content></ng-content>
    </span>
  </label>
  <p *ngIf="hasError" class="amplify-text amplify-field__error-message">
    {{ errorMessage }}
  </p>
</div>
`
    }]
  }], null, {
    defaultChecked: [{
      type: Input
    }],
    errorMessage: [{
      type: Input
    }],
    hasError: [{
      type: Input
    }],
    label: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var AmplifyAuthenticatorModule = class {
};
AmplifyAuthenticatorModule.ɵfac = function AmplifyAuthenticatorModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || AmplifyAuthenticatorModule)();
};
AmplifyAuthenticatorModule.ɵmod = ɵɵdefineNgModule({
  type: AmplifyAuthenticatorModule,
  declarations: [AmplifySlotComponent, AmplifySlotDirective, AuthenticatorComponent, BaseFormFieldsComponent, ButtonComponent, CheckboxComponent, ConfirmResetPasswordComponent, ConfirmSignInComponent, ConfirmSignUpComponent, ConfirmVerifyUserComponent, ErrorComponent, FederatedSignInButtonComponent, FederatedSignInComponent, ForceNewPasswordComponent, ForceNewPasswordFormFieldsComponent, FormFieldComponent, PasswordFieldComponent, PhoneNumberFieldComponent, ForgotPasswordComponent, SelectComponent, SelectMfaTypeComponent, SetupEmailComponent, SetupTotpComponent, SignInComponent, SignUpComponent, SignUpFormFieldsComponent, TabItemComponent, TabsComponent, TextFieldComponent, VerifyUserComponent],
  imports: [CommonModule],
  exports: [AmplifySlotDirective, AuthenticatorComponent, CheckboxComponent, SignUpFormFieldsComponent, ForceNewPasswordFormFieldsComponent, TextFieldComponent]
});
AmplifyAuthenticatorModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AmplifyAuthenticatorModule, [{
    type: NgModule,
    args: [{
      declarations: [AmplifySlotComponent, AmplifySlotDirective, AuthenticatorComponent, BaseFormFieldsComponent, ButtonComponent, CheckboxComponent, ConfirmResetPasswordComponent, ConfirmSignInComponent, ConfirmSignUpComponent, ConfirmVerifyUserComponent, ErrorComponent, FederatedSignInButtonComponent, FederatedSignInComponent, ForceNewPasswordComponent, ForceNewPasswordFormFieldsComponent, FormFieldComponent, PasswordFieldComponent, PhoneNumberFieldComponent, ForgotPasswordComponent, SelectComponent, SelectMfaTypeComponent, SetupEmailComponent, SetupTotpComponent, SignInComponent, SignUpComponent, SignUpFormFieldsComponent, TabItemComponent, TabsComponent, TextFieldComponent, VerifyUserComponent],
      imports: [CommonModule],
      exports: [AmplifySlotDirective, AuthenticatorComponent, CheckboxComponent, SignUpFormFieldsComponent, ForceNewPasswordFormFieldsComponent, TextFieldComponent]
    }]
  }], null, null);
})();
export {
  AmplifyAuthenticatorModule,
  AmplifySlotDirective,
  AuthenticatorComponent,
  AuthenticatorService,
  BaseFormFieldsComponent,
  ButtonComponent,
  CheckboxComponent,
  ConfirmResetPasswordComponent,
  ConfirmSignInComponent,
  ConfirmSignUpComponent,
  ConfirmVerifyUserComponent,
  CustomComponentsService,
  ErrorComponent,
  FederatedSignInButtonComponent,
  FederatedSignInComponent,
  ForceNewPasswordComponent,
  ForceNewPasswordFormFieldsComponent,
  ForgotPasswordComponent,
  FormFieldComponent,
  PasswordFieldComponent,
  PhoneNumberFieldComponent,
  SelectComponent,
  SetupTotpComponent,
  SignInComponent,
  SignUpComponent,
  SignUpFormFieldsComponent,
  TabItemComponent,
  TabsComponent,
  TextFieldComponent,
  VerifyUserComponent,
  getAttributeMap,
  translations
};
/*! Bundled license information:

xstate/es/_virtual/_tslib.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=@aws-amplify_ui-angular.js.map
