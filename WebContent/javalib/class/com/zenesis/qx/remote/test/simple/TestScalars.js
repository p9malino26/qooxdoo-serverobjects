/**
 * Class generated by Qoxodoo Server Objects com.zenesis.qx.remote.ClassWriter
 * 
 */

qx.Class.define("com.zenesis.qx.remote.test.simple.TestScalars", {
  "extend" : qx.core.Object,
  "implement" : [ com.zenesis.qx.remote.test.simple.ITestScalars ],
  "construct" : function() {
    var args = qx.lang.Array.fromArguments(arguments);
    args.unshift(arguments);
    this.base.apply(this, args);
    this.initialiseProxy();
 },
  "properties" : {
    "nullBooleanProperty" : {
      "@" : [ new com.zenesis.qx.remote.annotations.Property().set({"readOnly":true}) ],
      "nullable" : true,
      "apply" : "_applyNullBooleanProperty",
      "check" : "Boolean",
      "event" : "changeNullBooleanProperty"
    }
  },
  "members" : {
    "getSixPointSeven" : function() {
    return this._callServer("getSixPointSeven", qx.lang.Array.fromArguments(arguments));
 },
    "getTrue" : function() {
    return this._callServer("getTrue", qx.lang.Array.fromArguments(arguments));
 },
    "_applyNullBooleanProperty" : function(value, oldValue, name) {
    this._applyProperty("nullBooleanProperty", value, oldValue, name);
 },
    "getFalse" : function() {
    return this._callServer("getFalse", qx.lang.Array.fromArguments(arguments));
 },
    "getFourtyThree" : function() {
    return this._callServer("getFourtyThree", qx.lang.Array.fromArguments(arguments));
 },
    "getZeroAsync" : function() {
    var args = qx.lang.Array.fromArguments(arguments);
    return new qx.Promise(function(resolve, reject) {
      args.push(function() {
        resolve.apply(this, qx.lang.Array.fromArguments(arguments));
      });
      this._callServer("getZero", args);
    }, this);
 },
    "getHelloWorld" : function() {
    return this._callServer("getHelloWorld", qx.lang.Array.fromArguments(arguments));
 },
    "getTrueAsync" : function() {
    var args = qx.lang.Array.fromArguments(arguments);
    return new qx.Promise(function(resolve, reject) {
      args.push(function() {
        resolve.apply(this, qx.lang.Array.fromArguments(arguments));
      });
      this._callServer("getTrue", args);
    }, this);
 },
    "getNames" : function() {
    return this._callServer("getNames", qx.lang.Array.fromArguments(arguments));
 },
    "getFalseAsync" : function() {
    var args = qx.lang.Array.fromArguments(arguments);
    return new qx.Promise(function(resolve, reject) {
      args.push(function() {
        resolve.apply(this, qx.lang.Array.fromArguments(arguments));
      });
      this._callServer("getFalse", args);
    }, this);
 },
    "getNamesAsync" : function() {
    var args = qx.lang.Array.fromArguments(arguments);
    return new qx.Promise(function(resolve, reject) {
      args.push(function() {
        resolve.apply(this, qx.lang.Array.fromArguments(arguments));
      });
      this._callServer("getNames", args);
    }, this);
 },
    "getFourtyThreeAsync" : function() {
    var args = qx.lang.Array.fromArguments(arguments);
    return new qx.Promise(function(resolve, reject) {
      args.push(function() {
        resolve.apply(this, qx.lang.Array.fromArguments(arguments));
      });
      this._callServer("getFourtyThree", args);
    }, this);
 },
    "getNullBooleanAsync" : function() {
    var args = qx.lang.Array.fromArguments(arguments);
    return new qx.Promise(function(resolve, reject) {
      args.push(function() {
        resolve.apply(this, qx.lang.Array.fromArguments(arguments));
      });
      this._callServer("getNullBoolean", args);
    }, this);
 },
    "getNullBoolean" : function() {
    return this._callServer("getNullBoolean", qx.lang.Array.fromArguments(arguments));
 },
    "getZero" : function() {
    return this._callServer("getZero", qx.lang.Array.fromArguments(arguments));
 },
    "getNullBooleanPropertyAsync" : function() {
    return qx.Promise.resolve(this.getNullBooleanProperty()).bind(this);
 },
    "getHelloWorldAsync" : function() {
    var args = qx.lang.Array.fromArguments(arguments);
    return new qx.Promise(function(resolve, reject) {
      args.push(function() {
        resolve.apply(this, qx.lang.Array.fromArguments(arguments));
      });
      this._callServer("getHelloWorld", args);
    }, this);
 },
    "addUp" : function() {
    return this._callServer("addUp", qx.lang.Array.fromArguments(arguments));
 },
    "getSixPointSevenAsync" : function() {
    var args = qx.lang.Array.fromArguments(arguments);
    return new qx.Promise(function(resolve, reject) {
      args.push(function() {
        resolve.apply(this, qx.lang.Array.fromArguments(arguments));
      });
      this._callServer("getSixPointSeven", args);
    }, this);
 },
    "addUpAsync" : function() {
    var args = qx.lang.Array.fromArguments(arguments);
    return new qx.Promise(function(resolve, reject) {
      args.push(function() {
        resolve.apply(this, qx.lang.Array.fromArguments(arguments));
      });
      this._callServer("addUp", args);
    }, this);
 }
  },
  "defer" : function(clazz) {
    clazz.$$eventMeta = {};
    clazz.$$methodMeta = {};
    com.zenesis.qx.remote.MProxy.deferredClassInitialisation(clazz);
    clazz.$$methodMeta.addUp = {"isServer":true};
    clazz.$$methodMeta.getFalse = {"isServer":true};
    clazz.$$methodMeta.getFourtyThree = {"isServer":true};
    clazz.$$methodMeta.getHelloWorld = {"isServer":true};
    clazz.$$methodMeta.getNames = {"isServer":true,"returnArray":"native"};
    clazz.$$methodMeta.getNullBoolean = {"isServer":true};
    clazz.$$methodMeta.getSixPointSeven = {"isServer":true};
    clazz.$$methodMeta.getTrue = {"isServer":true};
    clazz.$$methodMeta.getZero = {"isServer":true};
    qx.lang.Object.mergeWith(clazz.$$properties.nullBooleanProperty, {"onDemand":false,"isServer":true,"readOnly":true,"sync":"queue","nativeKeyType":true});
    clazz.$$eventMeta.changeNullBooleanProperty = {"isServer":true,"isProperty":true};
 }
});