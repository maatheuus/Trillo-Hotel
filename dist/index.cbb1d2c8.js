// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"4VNLt":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "314a2e84cbb1d2c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"aenu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _modelJs = require("./model.js");
var _renderPreviewJs = require("./views/renderPreview.js");
var _renderPreviewJsDefault = parcelHelpers.interopDefault(_renderPreviewJs);
var _paginationViewJs = require("./views/paginationView.js");
var _paginationViewJsDefault = parcelHelpers.interopDefault(_paginationViewJs);
var _renderViewJs = require("./views/renderView.js");
var _renderViewJsDefault = parcelHelpers.interopDefault(_renderViewJs);
var _hotelViewJs = require("./views/hotelView.js");
var _hotelViewJsDefault = parcelHelpers.interopDefault(_hotelViewJs);
var _searchHotelJs = require("./views/searchHotel.js");
var _searchHotelJsDefault = parcelHelpers.interopDefault(_searchHotelJs);
var _favoriteViewJs = require("./views/favoriteView.js");
var _favoriteViewJsDefault = parcelHelpers.interopDefault(_favoriteViewJs);
"use strict";
const controlSearchResults = async function() {
    try {
        (0, _renderPreviewJsDefault.default).renderSpinner();
        // Pega a cidade do input
        const city = (0, _searchHotelJsDefault.default).getQuery();
        if (!city) throw new Error();
        // Passa a cidade para o objeto
        await (0, _searchHotelJsDefault.default).getCityInput(city);
        // Pega os dados e manda para o state Object
        await _modelJs.hotelData();
        // Renderiza a preview na página de busca
        (0, _renderPreviewJsDefault.default).render(_modelJs.getSearchResults(1));
        // Renderiza os botões para a paginação
        (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
    } catch (error) {
        (0, _renderPreviewJsDefault.default).renderError();
    }
};
const controlPaginiation = function(goTo) {
    (0, _renderPreviewJsDefault.default).render(_modelJs.getSearchResults(goTo));
    (0, _paginationViewJsDefault.default).render(_modelJs.state.search);
};
//Pega dados nescessários para a renderização do hotel
const controlDetails = async function() {
    try {
        await _modelJs.getDetailsHotel();
        await _modelJs.getReviews();
    } catch (error) {
        throw error;
    }
};
// Controla a View quando o título ou a hash da URL tiver alteração
const controlView = async function() {
    try {
        const id = window.location.hash.slice(1);
        if (!id) return;
        (0, _renderViewJsDefault.default).renderSpinner();
        _modelJs.loadFavorite(id);
        await controlDetails();
        (0, _hotelViewJsDefault.default).render(_modelJs.state);
    } catch (error) {
        (0, _hotelViewJsDefault.default).renderError();
    }
};
const controlAddFavorite = function() {
    // Se falso ira add o hotel atual nos favoritos do usúario
    if (!_modelJs.state.hotel.favorite) _modelJs.addFavorite(_modelJs.state.hotel);
    else _modelJs.deleteBookmark(_modelJs.state.hotel.hotelId);
    // Ira atualizar a View do hotel conforme adicionado ou deletado o hotel dos favoritos
    (0, _renderViewJsDefault.default).update(_modelJs.state.hotel);
    // Ira atualizar a View dos favoritos para renderizar a preview do hotel
    (0, _favoriteViewJsDefault.default).render(_modelJs.state.favorites);
};
const controlFavorite = function() {
    (0, _favoriteViewJsDefault.default).render(_modelJs.state.favorites);
};
const init = async function() {
    (0, _favoriteViewJsDefault.default).addHandlerRender(controlFavorite);
    (0, _searchHotelJsDefault.default).handlerClick(controlSearchResults);
    (0, _renderPreviewJsDefault.default).handlerClick(controlView);
    (0, _paginationViewJsDefault.default).addHandler(controlPaginiation);
    (0, _hotelViewJsDefault.default).addHandlerAddFavorite(controlAddFavorite);
    (0, _renderViewJsDefault.default).addHandlerRender(controlView);
};
init();

},{"./model.js":"Y4A21","./views/renderPreview.js":"iQ636","./views/paginationView.js":"6z7bi","./views/renderView.js":"eJ9BD","./views/hotelView.js":"6unom","./views/searchHotel.js":"iGsqZ","./views/favoriteView.js":"irQD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Y4A21":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "hotelData", ()=>hotelData);
parcelHelpers.export(exports, "getSearchResults", ()=>getSearchResults);
parcelHelpers.export(exports, "getDetailsHotel", ()=>getDetailsHotel);
parcelHelpers.export(exports, "getReviews", ()=>getReviews);
parcelHelpers.export(exports, "loadFavorite", ()=>loadFavorite);
parcelHelpers.export(exports, "addFavorite", ()=>addFavorite);
parcelHelpers.export(exports, "deleteBookmark", ()=>deleteBookmark);
var _searchHotelJs = require("./views/searchHotel.js");
var _searchHotelJsDefault = parcelHelpers.interopDefault(_searchHotelJs);
var _configJs = require("./config.js");
var _favoriteViewJs = require("./views/favoriteView.js");
var _favoriteViewJsDefault = parcelHelpers.interopDefault(_favoriteViewJs);
"use strict";
const state = {
    hotel: {},
    favorites: [],
    search: {
        results: [],
        page: 1,
        perPage: (0, _configJs.RES_PER_PAGE)
    },
    detailsHotel: {},
    reviews: {}
};
const hotelData = async function() {
    try {
        const details = await (0, _searchHotelJsDefault.default).getHotel();
        state.search.results = details.properties.map((value)=>{
            return {
                hotelId: value.id,
                roomsLeft: value.availability?.minRoomsLeft,
                imageUrl: value.propertyImage.image.url,
                imageDescription: value.propertyImage.image.description,
                nameHotel: value.name,
                reviewScore: value.reviews.score,
                reviewTotal: value.reviews.total,
                local: value.neighborhood?.name,
                symbol: value.price.lead.currencyInfo.symbol,
                price: Math.round(value.price.lead.amount)
            };
        });
    } catch (error) {
        throw error;
    }
};
const getSearchResults = function(page = state.search.page) {
    state.search.page = page;
    const start = (page - 1) * state.search.perPage;
    const end = page * state.search.perPage;
    return state.search.results.slice(start, end);
};
const getDetailsHotel = async function() {
    try {
        const data = await (0, _searchHotelJsDefault.default).hotelDetails();
        if (!data) return;
        const img = data.propertyGallery.images.slice(0, 3).map((img)=>img.image.url);
        const ameni = data.summary.amenities.topAmenities.items.map((amenity)=>amenity.text);
        const icon = Math.floor(data.summary.overview.propertyRating.rating);
        const description = {
            images: img,
            amenities: ameni,
            description: data.summary.location.whatsAround.editorial.content[0],
            address: data.summary.location.address.city,
            icon: icon
        };
        state.detailsHotel = description;
    } catch (error) {
        throw error;
    }
};
const getReviews = async function() {
    try {
        const data = await (0, _searchHotelJsDefault.default).hotelReviews();
        if (!data) return;
        const score = data.reviewInfo.reviews.slice(0, 2).map((score)=>{
            const value = score.reviewScoreWithDescription.value;
            const scoreValue = value.split("-").slice(0, 1).join("\n");
            return scoreValue;
        });
        const reviewName = data.reviewInfo.reviews.slice(0, 2).map((duration)=>{
            const data = duration.stayDuration;
            const nameReview = data.split(",").slice(0, -1).join("\n");
            return nameReview;
        });
        state.reviews = data.reviewInfo.reviews.slice(0, 2).map((value)=>{
            return {
                score: score,
                reviewInfo: value.text,
                name: reviewName,
                stayDuration: value.submissionTimeLocalized
            };
        });
    } catch (error) {
        throw error;
    }
};
const loadFavorite = function(id) {
    try {
        // Se verdadeiro marca o hotel atual como favoritado
        if (state.favorites.some((favorite)=>favorite.hotelId === id)) state.hotel.favorite = true;
        else state.hotel.favorite = false;
    } catch (error) {
        (0, _favoriteViewJsDefault.default).renderError();
    }
};
const setFavorites = function() {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
};
const addFavorite = function(hotel) {
    //add ffavorito
    state.favorites.push(hotel);
    // Marque o hotel atual como favorito
    state.hotel.favorite = true;
    setFavorites();
};
const deleteBookmark = function(id) {
    // Deleta o hotel atual
    const index = state.favorites.findIndex((el)=>el.hotelId === id);
    state.favorites.splice(index, 1);
    // Deleta o hotel atual como favorito
    state.hotel.favorite = false;
    setFavorites();
};
const init = function() {
    const storage = localStorage.getItem("favorites");
    if (storage) state.favorites = JSON.parse(storage);
};
init();

},{"./views/searchHotel.js":"iGsqZ","./config.js":"k5Hzs","./views/favoriteView.js":"irQD0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iGsqZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _configJs = require("../config.js");
var _renderPreviewJs = require("./renderPreview.js");
var _renderPreviewJsDefault = parcelHelpers.interopDefault(_renderPreviewJs);
"use strict";
/**
 * @param {object} SearchHotel Faz toda pelo busca do hotel
 */ class SearchHotel {
    _id;
    _domain;
    _checkinInput = document.getElementById("checkin");
    _checkoutInput = document.getElementById("checkout");
    _adultInput = document.getElementById("adult");
    _childrenInput = document.getElementById("child");
    _locale = navigator.language.replace("-", "_");
    btnSearch = document.querySelector(".search__button");
    getQuery() {
        const query = document.querySelector(".search__input").value;
        return query;
    }
    handlerClick(handler) {
        this.btnSearch.addEventListener("click", handler);
    }
    /**
   * @param {object} getCityInput Recebe o nome da cidade e pega o código do país (e.g. BR)
   */ async getCityInput(text) {
        try {
            const response = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${text}&format=json&apiKey=${(0, _configJs.API_KEY)}`);
            const result = await response.json();
            const city = await result.results[0].city;
            const countryCode = await result.results[0].country_code;
            const domain = countryCode.toUpperCase();
            this._domain = domain;
            return this.getCityName(city);
        } catch (err) {
            throw err;
        }
    }
    /**
   * @param {object} getCityName Recebe o nome da cidade o código do país para fazer a buca de hóteis
   */ async getCityName(city) {
        try {
            const response = await fetch(`https://hotels-com-provider.p.rapidapi.com/v2/regions?query=${city}&domain=${this._domain}&locale=${this._locale}`, (0, _configJs.OPTIONS_HEADER));
            const result = await response.json();
            const getId = await result.data[0].essId.sourceId;
            this._id = getId;
            return getId;
        } catch (err) {
            throw err;
        }
    }
    /**
   * @param {object} getHotel Pega o hotel com base no dados fornecidados de getCityName
   */ async getHotel() {
        try {
            if (!this._childrenInput.value) this._childrenInput.value = 0;
            const url = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/search?region_id=${this._id}&locale=${this._locale}&checkin_date=${this._checkinInput.value}&sort_order=RECOMMENDED&adults_number=${this._adultInput.value}&domain=${this._domain}&checkout_date=${this._checkoutInput.value}&children_ages=${this._childrenInput.value}`;
            const response = await fetch(url, (0, _configJs.OPTIONS_HEADER));
            if (!response.ok) throw (0, _renderPreviewJsDefault.default).renderError();
            const result = await response.json();
            return result;
        } catch (err) {
            throw err;
        }
    }
    /**
   * @return Retorna detalhes do importantes para a renderização do hotel
   */ async hotelDetails() {
        try {
            const id = location.hash.slice(1);
            if (!id || !this._domain) return;
            const url = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/details?domain=${this._domain}&hotel_id=${id}&locale=${this._locale}`;
            const data = await fetch(url, (0, _configJs.OPTIONS_HEADER));
            if (!data.ok) throw new Error();
            const result = await data.json();
            return result;
        } catch (error) {
            throw error;
        }
    }
    /**
   * @returns Retorna as avaliações do hotel feita pelos hóspedes
   */ async hotelReviews() {
        try {
            const id = location.hash.slice(1);
            if (!id || !this._domain) return;
            const url = `https://hotels-com-provider.p.rapidapi.com/v2/hotels/reviews/list?domain=${this._domain}&locale=${this._locale}&hotel_id=${id}`;
            const data = await fetch(url, (0, _configJs.OPTIONS_HEADER));
            if (!data.ok) throw new Error();
            const result = await data.json();
            return result;
        } catch (error) {
            throw error;
        }
    }
}
exports.default = new SearchHotel();

},{"../config.js":"k5Hzs","./renderPreview.js":"iQ636","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5Hzs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OPTIONS_HEADER", ()=>OPTIONS_HEADER);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY);
parcelHelpers.export(exports, "RES_PER_PAGE", ()=>RES_PER_PAGE);
const OPTIONS_HEADER = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "cf5a5944e2msh1e14f695012d786p134397jsn7a02d8fb7fd2",
        "X-RapidAPI-Host": "hotels-com-provider.p.rapidapi.com"
    }
};
const API_KEY = "84c36219a76b42c5a389a19e2f2602d2";
const RES_PER_PAGE = 5; // export const API_KEY = "cf5a5944e2msh1e14f695012d786p134397jsn7a02d8fb7fd2";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iQ636":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _modelJs = require("../model.js");
var _previewHotelJs = require("./previewHotel.js");
var _previewHotelJsDefault = parcelHelpers.interopDefault(_previewHotelJs);
class RenderPreview extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".hotel-preview");
    _errorMessage = "N\xe3o foi poss\xedvel achar nenhum hotel. Tente novamente por favor!";
    handlerClick(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".informations__header-title");
            if (!btn) return;
            // Filtra o id do hotel com base em seu nome e manda para a URL
            _modelJs.state.search.results.map((data)=>data).filter((data)=>{
                if (data.nameHotel === btn.innerText) return _modelJs.state.hotel = data;
                location.hash = _modelJs.state.hotel.hotelId;
            });
            handler();
        });
    }
    _generateMarkup() {
        return this._data.map((result)=>(0, _previewHotelJsDefault.default).render(result, false)).join("");
    }
}
exports.default = new RenderPreview();

},{"./View.js":"5cUXS","../model.js":"Y4A21","./previewHotel.js":"50SPy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5cUXS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _spriteSvg = require("../../img/icons/sprite.svg");
var _spriteSvgDefault = parcelHelpers.interopDefault(_spriteSvg);
class View {
    _data;
    /**
   * Renderizando o objeto recebido para o DOM
   * @param {Object | Object[]} data  O dado para ser renderizado
   * @param {boolean} [render=true] se falso, cria um markup string ao invés de ser renderizado no DOM
   * @returns {undefined | String} Ira retornar uma marção se render=false
   * @this {Object} View instance
   * @author Matheus
   */ render(data, render = true) {
        if (!data || Array.isArray(data) && data.length === 0) return this.renderError();
        this._data = data;
        const markup = this._generateMarkup();
        if (!render) return markup;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    /**
   * @param {Object} data Atualiza uma nova marcação dos dados recebidos para o DOM
   * @returns {String} Ira retonar uma nova marcação dos dados para ser renderizado no DOM
   */ update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup);
        const newElements = Array.from(newDOM.querySelectorAll("*"));
        const curElements = Array.from(this._parentElement.querySelectorAll("*"));
        newElements.forEach((newEl, i)=>{
            const curEl = curElements[i];
            // Update changed TEXT
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== "") curEl.textContent = newEl.textContent;
            // Update changed ATTRIBUTES
            if (!newEl.isEqualNode(curEl)) Array.from(newEl.attributes).forEach((attri)=>curEl.setAttribute(attri.name, attri.value));
        });
    }
    _clear() {
        this._parentElement.innerHTML = "";
    }
    renderMessage(message = this._successMessage) {
        const markup = `
      <div class="message">
        <svg class="message__icon">
            <use href="${(0, _spriteSvgDefault.default)}#icon-location_city"></use>
        </svg>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderError(message = this._errorMessage) {
        const markup = `
      <div class="error">
        <svg class="error__icon">
            <use href="${(0, _spriteSvgDefault.default)}#icon-warning"></use>
        </svg>
        <p>${message}</p>
    </div>
  `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
    renderSpinner() {
        const markup = `
        <div class="loading">
            <svg class="loading__icon">
              <use href="${(0, _spriteSvgDefault.default)}#icon-spinner"></use>
            </svg>
        </div>
        `;
        this._clear();
        this._parentElement.insertAdjacentHTML("afterbegin", markup);
    }
}
exports.default = View;

},{"../../img/icons/sprite.svg":"a6jim","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a6jim":[function(require,module,exports) {
module.exports = require("959738a1ecbdb506").getBundleURL("4emPK") + "sprite.af061885.svg" + "?" + Date.now();

},{"959738a1ecbdb506":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"50SPy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _spriteSvg = require("../../img/icons/sprite.svg");
var _spriteSvgDefault = parcelHelpers.interopDefault(_spriteSvg);
class PreviewHotel extends (0, _viewJsDefault.default) {
    _parentElement = "";
    _generateMarkup() {
        const id = window.location.hash.slice(1);
        return `
    <div class="hotel-preview__block 
    ${this._data.hotelId === id ? "hotel-preview__block--active" : ""}">
        <div class="hotel-preview__gallery">
            <img src="${this._data.imageUrl}" 
            class="hotel-preview__gallery-photo" alt="image of 
            ${this._data.imageDescription}">
        </div>
     
        <div class="informations">
            <div class="informations__header">
                <h1 class="informations__header-title">
                    <a class="informations__header-link" href="#${this._data.hotelId}">
                    ${this._data.nameHotel}</a>
                </h1>
    
                <div class="informations__location">
                    <svg class="informations__icon-location">
                        <use xlink:href="${0, _spriteSvgDefault.default}#icon-location-pin"></use>
                    </svg>
                    <span class="informations__location-city">
                    ${this._data.local}</span>
                </div>
            </div>
    
            <div class="informations__price">
                <span class="informations__price-value">
                ${this._data.symbol + this._data.price}</span>
            </div>
    
            <div class="informations__avaliation">
                <div class="informations__rating">
                    <div class="informations__rating-average">
                    ${this._data.reviewScore}</div>
                    <div class="informations__rating-count">
                    ${this._data.reviewTotal} votes</div>
                </div>
            </div>
        </div>
        </div>
        `;
    }
}
exports.default = new PreviewHotel();

},{"./View.js":"5cUXS","../../img/icons/sprite.svg":"a6jim","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"irQD0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _previewHotelJs = require("./previewHotel.js");
var _previewHotelJsDefault = parcelHelpers.interopDefault(_previewHotelJs);
class FavoriteView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".favorites__list");
    _errorMessage = "Sem hoteis por aqui. Ache um hotel legal :)";
    addHandlerRender(handler) {
        window.addEventListener("load", handler);
    }
    _generateMarkup() {
        return this._data.map((favorite)=>(0, _previewHotelJsDefault.default).render(favorite, false)).join("");
    }
}
exports.default = new FavoriteView();

},{"./View.js":"5cUXS","./previewHotel.js":"50SPy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6z7bi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _spriteSvg = require("../../img/icons/sprite.svg");
var _spriteSvgDefault = parcelHelpers.interopDefault(_spriteSvg);
class PaginationView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".pagination");
    addHandler(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn-change");
            if (!btn) return;
            const goTo = +btn.dataset.goto;
            handler(goTo);
        });
    }
    _generateMarkup() {
        const currentPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / +this._data.perPage);
        if (currentPage === 1 && numPages > 1) return this._generateMarkupBtn("next", currentPage);
        if (currentPage === numPages && numPages > 1) return this._generateMarkupBtn("prev", currentPage);
        if (currentPage < numPages) return `
    ${this._generateMarkupBtn("prev", currentPage)}
    ${this._generateMarkupBtn("next", currentPage)}`;
        return "";
    }
    _generateMarkupBtn(type, currentPage) {
        return type === "next" ? `
        <button data-goto="${currentPage + 1}" class="btn-change next">
          <span>Page ${currentPage + 1}</span>
            <svg class="pagination__arrow ">
              <use href="${0, _spriteSvgDefault.default}#icon-arrow-right"></use>
            </svg>
        </button>
    ` : `
          <button data-goto="${currentPage - 1}" class="btn-change prev">
            <span>Page ${currentPage - 1}</span>
              <svg class="pagination__arrow ">
                <use href="${0, _spriteSvgDefault.default}#icon-arrow-left"></use>
              </svg>
          </button>
    `;
    }
}
exports.default = new PaginationView();

},{"./View.js":"5cUXS","../../img/icons/sprite.svg":"a6jim","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJ9BD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _modelJs = require("../model.js");
var _hotelViewJs = require("./hotelView.js");
var _hotelViewJsDefault = parcelHelpers.interopDefault(_hotelViewJs);
class RenderView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".hotel-view");
    addHandlerRender(handler) {
        [
            "hashchange",
            "load"
        ].forEach((ev)=>window.addEventListener(ev, handler));
    }
    _generateMarkup() {
        return (0, _hotelViewJsDefault.default).render(_modelJs.state, false);
    }
}
exports.default = new RenderView();

},{"./View.js":"5cUXS","../model.js":"Y4A21","./hotelView.js":"6unom","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6unom":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _spriteSvg = require("../../img/icons/sprite.svg");
var _spriteSvgDefault = parcelHelpers.interopDefault(_spriteSvg);
class HotelView extends (0, _viewJsDefault.default) {
    _parentElement = document.querySelector(".hotel-view");
    _errorMessage = "N\xe3o foi possivel achar o hotel desejado :(";
    addHandlerAddFavorite(handler) {
        this._parentElement.addEventListener("click", function(e) {
            const btn = e.target.closest(".btn-favorite");
            if (!btn) return;
            handler();
        });
    }
    _generateMarkup() {
        return `
            <div class="gallery">
                ${this._data.detailsHotel.images.map((img)=>{
            return `
                        <figure class="gallery__item">
                            <img src="${img}" alt="Photo of hotel" class="gallery__photo">
                        </figure>`;
        })}

                <button class="gallery__btn-favorite btn-favorite">
                    <svg class="gallery__icon  gallery__icon--favorite">
                        <use xlink:href="${0, _spriteSvgDefault.default}#icon-favorite${this._data.hotel.favorite ? "_fill" : ""}">
                        </use>
                    </svg>
                </button>

            </div>
            <div class="overview">
                    <h1 class="overview__heading">
                        ${this._data.hotel.nameHotel}
                    </h1>
                <div class="overview__stars">
                    ${this.generateIcon()}
                </div>
                <div class="overview__location">
                    <svg class="overview__icon-location">
                        <use xlink:href="${0, _spriteSvgDefault.default}#icon-location-pin"></use>
                    </svg>
                    <button class="btn-inline">
                    ${this._data.hotel.local},${this._data.detailsHotel.address}
                    </button>
                </div>
                <div class="overview__rating">
                    <div class="overview__rating-average">
                    ${this._data.hotel.reviewScore}</div>
                    <div class="overview__rating-count">
                    ${this._data.hotel.reviewTotal} votes</div>
                </div>
            </div>
            <div class="detail">
            <div class="description">
                <p class="paragraph">
                    ${this._data.detailsHotel.description}
                </p>
                <ul class="list">
                    ${this._data.detailsHotel.amenities.map((ameni)=>{
            return `
                            <li class="list__item">${ameni}</li>
                        `;
        }).join("")}
                </ul>
            </div>
            <div class="user-reviews">

                <figure class="review">
                    <blockquote class="review__text">
                        ${this._data.reviews[0].reviewInfo}
                    </blockquote>
                    <figcaption class="review__user">
                        <svg class="review__photo">
                            <use xlink:href="${0, _spriteSvgDefault.default}#icon-person"></use>
                        </svg>
                        <div class="review__user-box">
                            <p class="review__user-name">
                            ${this._data.reviews[0].name[0]}</p>
                            <p class="review__user-date">
                            ${this._data.reviews[0].stayDuration}</p>
                        </div>
                        <div class="review__rating">
                        ${this._data.reviews[0].score[0]}</div>
                    </figcaption>
                </figure>

                <figure class="review">
                    <blockquote class="review__text">
                        ${this._data.reviews[1].reviewInfo}
                    </blockquote>
                    <figcaption class="review__user">
                        <svg class="review__photo">
                            <use xlink:href="${0, _spriteSvgDefault.default}#icon-person"></use>
                        </svg>
                        <div class="review__user-box">
                            <p class="review__user-name">
                            ${this._data.reviews[1].name[1]}</p>
                            <p class="review__user-date">
                            ${this._data.reviews[1].stayDuration}</p>
                        </div>
                        <div class="review__rating">
                        ${this._data.reviews[1].score[1]}</div>
                    </figcaption>
                </figure>
            </div>
        </div>
        <div class="cta">
        ${this._data.hotel.roomsLeft > 0 ? `
        <h2 class="cta__book-now">
            Good news! We have ${this._data.hotel.roomsLeft} free rooms for your selected dates!
        </h2>
        <button class="btn">
            <span class="btn__visible">Book now</span>
            <span class="btn__invisible">Only ${this._data.hotel.roomsLeft} rooms left</span>
        </button>
        ` : `
        <h2 class="cta__book-now">
            Bad news! We dont't have free rooms for your selected dates!
        </h2>   
        `}
        </div>`;
    }
    generateIcon() {
        if (this._data.detailsHotel.icon === 0 || this._data.detailsHotel.icon === "") return "Sem m\xe9dia de avalia\xe7\xf5es.";
        // Controla quantas estrelas o hotel tem ou não
        switch(this._data.detailsHotel.icon){
            case 1:
                return `
              <svg class="overview__icon-star">
                  <use xlink:href="${0, _spriteSvgDefault.default}#icon-star"></use>
              </svg>
              `;
            case 2:
                return `
              <svg class="overview__icon-star">
                  <use xlink:href="${0, _spriteSvgDefault.default}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${0, _spriteSvgDefault.default}#icon-star"></use>
              </svg>
              `;
            case 3:
                return `
              <svg class="overview__icon-star">
                  <use xlink:href="${0, _spriteSvgDefault.default}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${0, _spriteSvgDefault.default}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${0, _spriteSvgDefault.default}#icon-star"></use>
              </svg>
              `;
            case 4:
                return `
              <svg class="overview__icon-star">
                  <use xlink:href="${0, _spriteSvgDefault.default}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${0, _spriteSvgDefault.default}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${0, _spriteSvgDefault.default}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${0, _spriteSvgDefault.default}#icon-star"></use>
              </svg>
              `;
            case 5:
                return `
              <svg class="overview__icon-star">
                  <use xlink:href="${0, _spriteSvgDefault.default}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${0, _spriteSvgDefault.default}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${0, _spriteSvgDefault.default}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${0, _spriteSvgDefault.default}#icon-star"></use>
              </svg>
              <svg class="overview__icon-star">
                  <use xlink:href="${0, _spriteSvgDefault.default}#icon-star"></use>
              </svg>
              `;
            default:
                return;
        }
    }
}
exports.default = new HotelView();

},{"./View.js":"5cUXS","../../img/icons/sprite.svg":"a6jim","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["4VNLt","aenu9"], "aenu9", "parcelRequirece37")

//# sourceMappingURL=index.cbb1d2c8.js.map
