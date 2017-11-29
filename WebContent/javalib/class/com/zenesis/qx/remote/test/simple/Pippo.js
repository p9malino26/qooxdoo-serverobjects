/**
 * Class generated by Qoxodoo Server Objects com.zenesis.qx.remote.ClassWriter
 * 
 * @use(com.zenesis.qx.remote.test.simple.Pippo)
 */

qx.Class.define("com.zenesis.qx.remote.test.simple.Pippo", {
  "extend" : qx.core.Object,
  "construct" : function() {
    var args = qx.lang.Array.fromArguments(arguments);
    args.unshift(arguments);
    this.base.apply(this, args);
    this.initialiseProxy();
 },
  "properties" : {
    "collezioni" : {
      "@" : [ new com.zenesis.qx.remote.annotations.Property().set({"componentTypeName":"com.zenesis.qx.remote.test.simple.Pippo"}) ],
      "transform" : "__transformCollezioni",
      "nullable" : true,
      "apply" : "_applyCollezioni",
      "check" : "qx.data.Array",
      "event" : "changeCollezioni"
    },
    "name" : {
      "nullable" : true,
      "apply" : "_applyName",
      "check" : "String",
      "event" : "changeName"
    }
  },
  "members" : {
    "getExampleCode" : function() {
    return this._callServer("getExampleCode", qx.lang.Array.fromArguments(arguments));
 },
    "_applyCollezioni" : function(value, oldValue, name) {
    this._applyProperty("collezioni", value, oldValue, name);
 },
    "getCollezioniAsync" : function() {
    return qx.Promise.resolve(this.getCollezioni()).bind(this);
 },
    "getExampleCodeAsync" : function() {
    var args = qx.lang.Array.fromArguments(arguments);
    return new qx.Promise(function(resolve, reject) {
      args.push(function() {
        resolve.apply(this, qx.lang.Array.fromArguments(arguments));
      });
      this._callServer("getExampleCode", args);
    }, this);
 },
    "__transformCollezioni" : function(value) {
    return com.zenesis.qx.remote.MProxy.transformToDataArray(value, qx.data.Array);
 },
    "expireCollezioni" : function(sendToServer) {
    return this._expirePropertyOnDemand('collezioni', sendToServer);
 },
    "getNameAsync" : function() {
    return qx.Promise.resolve(this.getName()).bind(this);
 },
    "_applyName" : function(value, oldValue, name) {
    this._applyProperty("name", value, oldValue, name);
 },
    "getCollezioni" : function(async) {
    return this._getPropertyOnDemand('collezioni', async);
 },
    "setCollezioni" : function(value, async) {
    return this._setPropertyOnDemand('collezioni', value, async);
 }
  },
  "defer" : function(clazz) {
    clazz.$$eventMeta = {};
    clazz.$$methodMeta = {};
    com.zenesis.qx.remote.MProxy.deferredClassInitialisation(clazz);
    clazz.$$methodMeta.getExampleCode = {"isServer":true,"returnArray":"wrap"};
    qx.lang.Object.mergeWith(clazz.$$properties.collezioni, {"onDemand":true,"isServer":true,"array":"wrap","readOnly":false,"sync":"queue","nativeKeyType":true});
    qx.lang.Object.mergeWith(clazz.$$properties.name, {"onDemand":false,"isServer":true,"readOnly":false,"sync":"queue","nativeKeyType":true});
    clazz.$$eventMeta.changeName = {"isServer":true,"isProperty":true};
    clazz.$$eventMeta.changeCollezioni = {"isServer":true,"isProperty":true};
 }
});