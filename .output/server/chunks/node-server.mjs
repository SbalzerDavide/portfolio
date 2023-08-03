globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const defineAppConfig = (config) => config;

const appConfig0 = defineAppConfig({
  theme: {
    primaryColor: "#ababab"
  },
  title: "Davide Sbalzer",
  language: "it"
});

const inlineAppConfig = {};

const appConfig = defuFn(appConfig0, inlineAppConfig);

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"envPrefix":"NUXT_","routeRules":{"/__nuxt_error":{"cache":false},"/_nuxt/**":{"headers":{"cache-control":"public, max-age=31536000, immutable"}}}},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
overrideConfig(_runtimeConfig);
const runtimeConfig = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => runtimeConfig;
deepFreeze(appConfig);
function getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"10be-n8egyE9tcb7sKGr/pYCaQ4uWqxI\"",
    "mtime": "2023-06-06T10:52:37.639Z",
    "size": 4286,
    "path": "../public/favicon.ico"
  },
  "/images/foodManagerDelete.png": {
    "type": "image/png",
    "etag": "\"16a4a-nMV9w2Zh4B2xGcUSv2mGbE50bLA\"",
    "mtime": "2023-06-06T10:52:37.639Z",
    "size": 92746,
    "path": "../public/images/foodManagerDelete.png"
  },
  "/images/foodManagerGarbage.png": {
    "type": "image/png",
    "etag": "\"14ab0-nT7a1mySNNbG51GKlp5OvjduUFA\"",
    "mtime": "2023-06-06T10:52:37.639Z",
    "size": 84656,
    "path": "../public/images/foodManagerGarbage.png"
  },
  "/images/foodManagerInput.jpeg": {
    "type": "image/jpeg",
    "etag": "\"1d2db-oN8ET+r6rX3RCKQ6j+nAPT7An/4\"",
    "mtime": "2023-06-06T10:52:37.655Z",
    "size": 119515,
    "path": "../public/images/foodManagerInput.jpeg"
  },
  "/images/foodManagerInput1.jpeg": {
    "type": "image/jpeg",
    "etag": "\"1a18c-bRxHX842lMfw1DDKk/3NBDfaBro\"",
    "mtime": "2023-06-06T10:52:37.655Z",
    "size": 106892,
    "path": "../public/images/foodManagerInput1.jpeg"
  },
  "/images/foodManagerStorage.png": {
    "type": "image/png",
    "etag": "\"23df5-ERanTo/D4k0+L31gFrBVnmEkKkw\"",
    "mtime": "2023-06-06T10:52:37.655Z",
    "size": 146933,
    "path": "../public/images/foodManagerStorage.png"
  },
  "/images/foodManagerStorageFilter.png": {
    "type": "image/png",
    "etag": "\"11a0e-S7R1cQUyBkIP17YoDAWEVOuKMWs\"",
    "mtime": "2023-06-06T10:52:37.655Z",
    "size": 72206,
    "path": "../public/images/foodManagerStorageFilter.png"
  },
  "/images/foodManagerToStore.jpeg": {
    "type": "image/jpeg",
    "etag": "\"17349-cljDsAn5Y76+ybwWhyP9GgWPCa8\"",
    "mtime": "2023-06-06T10:52:37.655Z",
    "size": 95049,
    "path": "../public/images/foodManagerToStore.jpeg"
  },
  "/images/formForPrint.png": {
    "type": "image/png",
    "etag": "\"4390f-F5SESZAsHAnx5N8SgriIZIhfCjI\"",
    "mtime": "2023-06-06T10:52:37.655Z",
    "size": 276751,
    "path": "../public/images/formForPrint.png"
  },
  "/images/formForPrint1.png": {
    "type": "image/png",
    "etag": "\"5a1c9-sBVmd2/A/1llkUSb9nl3416QXT8\"",
    "mtime": "2023-06-06T10:52:37.655Z",
    "size": 369097,
    "path": "../public/images/formForPrint1.png"
  },
  "/images/formForPrint2.png": {
    "type": "image/png",
    "etag": "\"4fd6c-c7vO4iIjgAfLBPzqGCUVS0mao3E\"",
    "mtime": "2023-06-06T10:52:37.670Z",
    "size": 327020,
    "path": "../public/images/formForPrint2.png"
  },
  "/images/minefield.jpeg": {
    "type": "image/jpeg",
    "etag": "\"244ca-ASum84Lh+ibPVdH745muY9rJlSM\"",
    "mtime": "2023-06-06T10:52:37.670Z",
    "size": 148682,
    "path": "../public/images/minefield.jpeg"
  },
  "/images/minefield.png": {
    "type": "image/png",
    "etag": "\"20f14-7nC1J4U6kbdL3D0W8iRtmQYdnOo\"",
    "mtime": "2023-06-06T10:52:37.670Z",
    "size": 134932,
    "path": "../public/images/minefield.png"
  },
  "/images/minefield1.jpeg": {
    "type": "image/jpeg",
    "etag": "\"18fc1-gBh6JxzxsI33kMWKApQl1Nyp998\"",
    "mtime": "2023-06-06T10:52:37.670Z",
    "size": 102337,
    "path": "../public/images/minefield1.jpeg"
  },
  "/images/Profile.jpeg": {
    "type": "image/jpeg",
    "etag": "\"25c28-iYp1GSpY2e3+8692SdeUoPWil2M\"",
    "mtime": "2023-06-06T10:52:37.639Z",
    "size": 154664,
    "path": "../public/images/Profile.jpeg"
  },
  "/images/rotellaOstetrica.png": {
    "type": "image/png",
    "etag": "\"21bb3-AEStHXJThVT5YJBWo4EsxhrE7Cs\"",
    "mtime": "2023-06-06T10:52:37.670Z",
    "size": 138163,
    "path": "../public/images/rotellaOstetrica.png"
  },
  "/resume/DavideSbalzer_CV_en.pdf": {
    "type": "application/pdf",
    "etag": "\"20245-WxPxAQM4cKBaOYHsLtI5Mon2Xhs\"",
    "mtime": "2023-07-31T10:38:51.888Z",
    "size": 131653,
    "path": "../public/resume/DavideSbalzer_CV_en.pdf"
  },
  "/resume/DavideSbalzer_CV_it.pdf": {
    "type": "application/pdf",
    "etag": "\"20835-dnhmPaeQ60qVCSf2hEhd+aFoiO4\"",
    "mtime": "2023-07-31T10:38:51.892Z",
    "size": 133173,
    "path": "../public/resume/DavideSbalzer_CV_it.pdf"
  },
  "/_nuxt/entry.60bd49d1.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"8efe-ZlJlwAWwGaP3GAJptX2e44R+j7o\"",
    "mtime": "2023-08-03T10:43:17.209Z",
    "size": 36606,
    "path": "../public/_nuxt/entry.60bd49d1.css"
  },
  "/_nuxt/entry.a1a5a842.js": {
    "type": "application/javascript",
    "etag": "\"22c0a-VO/Jdi4q8MvoWh2jLZOazHjU7u8\"",
    "mtime": "2023-08-03T10:43:17.211Z",
    "size": 142346,
    "path": "../public/_nuxt/entry.a1a5a842.js"
  },
  "/_nuxt/error-404.23f2309d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-ivsbEmi48+s9HDOqtrSdWFvddYQ\"",
    "mtime": "2023-08-03T10:43:17.209Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.23f2309d.css"
  },
  "/_nuxt/error-404.4a0d1dbb.js": {
    "type": "application/javascript",
    "etag": "\"1963-4N8b18CqLibYWHoyNgtiS9igQ60\"",
    "mtime": "2023-08-03T10:43:17.209Z",
    "size": 6499,
    "path": "../public/_nuxt/error-404.4a0d1dbb.js"
  },
  "/_nuxt/error-500.0fcf9ad0.js": {
    "type": "application/javascript",
    "etag": "\"756-vxVX6ofYY6iPsEjCZWg9ISPpP8A\"",
    "mtime": "2023-08-03T10:43:17.209Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.0fcf9ad0.js"
  },
  "/_nuxt/error-500.aa16ed4d.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-7j4Tsx89siDo85YoIs0XqsPWmPI\"",
    "mtime": "2023-08-03T10:43:17.209Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.aa16ed4d.css"
  },
  "/_nuxt/error-component.85f1b3ed.js": {
    "type": "application/javascript",
    "etag": "\"45e-3JzxW1Eu88yL5eoYjDXPKKxvQ6s\"",
    "mtime": "2023-08-03T10:43:17.209Z",
    "size": 1118,
    "path": "../public/_nuxt/error-component.85f1b3ed.js"
  },
  "/_nuxt/foodManagerDelete.b820a8c4.png": {
    "type": "image/png",
    "etag": "\"16a4a-nMV9w2Zh4B2xGcUSv2mGbE50bLA\"",
    "mtime": "2023-08-03T10:43:17.208Z",
    "size": 92746,
    "path": "../public/_nuxt/foodManagerDelete.b820a8c4.png"
  },
  "/_nuxt/foodManagerGarbage.d00c25d7.png": {
    "type": "image/png",
    "etag": "\"14ab0-nT7a1mySNNbG51GKlp5OvjduUFA\"",
    "mtime": "2023-08-03T10:43:17.208Z",
    "size": 84656,
    "path": "../public/_nuxt/foodManagerGarbage.d00c25d7.png"
  },
  "/_nuxt/foodManagerStorage.c54af4d0.png": {
    "type": "image/png",
    "etag": "\"23df5-ERanTo/D4k0+L31gFrBVnmEkKkw\"",
    "mtime": "2023-08-03T10:43:17.208Z",
    "size": 146933,
    "path": "../public/_nuxt/foodManagerStorage.c54af4d0.png"
  },
  "/_nuxt/foodManagerStorageFilter.598053cd.png": {
    "type": "image/png",
    "etag": "\"11a0e-S7R1cQUyBkIP17YoDAWEVOuKMWs\"",
    "mtime": "2023-08-03T10:43:17.208Z",
    "size": 72206,
    "path": "../public/_nuxt/foodManagerStorageFilter.598053cd.png"
  },
  "/_nuxt/formForPrint.67b1ed4e.png": {
    "type": "image/png",
    "etag": "\"4390f-F5SESZAsHAnx5N8SgriIZIhfCjI\"",
    "mtime": "2023-08-03T10:43:17.208Z",
    "size": 276751,
    "path": "../public/_nuxt/formForPrint.67b1ed4e.png"
  },
  "/_nuxt/index.6eb5c581.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"60d-f0zsNBTvfZvAKha+zuZMezfp6eY\"",
    "mtime": "2023-08-03T10:43:17.208Z",
    "size": 1549,
    "path": "../public/_nuxt/index.6eb5c581.css"
  },
  "/_nuxt/index.f603becb.js": {
    "type": "application/javascript",
    "etag": "\"83c6-OfduZXjVDxK5nE/Ita2pe1c5CTg\"",
    "mtime": "2023-08-03T10:43:17.209Z",
    "size": 33734,
    "path": "../public/_nuxt/index.f603becb.js"
  },
  "/_nuxt/minefield.75083bed.png": {
    "type": "image/png",
    "etag": "\"20f14-7nC1J4U6kbdL3D0W8iRtmQYdnOo\"",
    "mtime": "2023-08-03T10:43:17.208Z",
    "size": 134932,
    "path": "../public/_nuxt/minefield.75083bed.png"
  },
  "/_nuxt/primeicons.131bc3bf.ttf": {
    "type": "font/ttf",
    "etag": "\"11a0c-zutG1ZT95cxQfN+LcOOOeP5HZTw\"",
    "mtime": "2023-08-03T10:43:17.203Z",
    "size": 72204,
    "path": "../public/_nuxt/primeicons.131bc3bf.ttf"
  },
  "/_nuxt/primeicons.3824be50.woff2": {
    "type": "font/woff2",
    "etag": "\"75e4-VaSypfAuNiQF2Nh0kDrwtfamwV0\"",
    "mtime": "2023-08-03T10:43:17.208Z",
    "size": 30180,
    "path": "../public/_nuxt/primeicons.3824be50.woff2"
  },
  "/_nuxt/primeicons.5e10f102.svg": {
    "type": "image/svg+xml",
    "etag": "\"4727e-0zMqRSQrj27b8/PHF2ooDn7c2WE\"",
    "mtime": "2023-08-03T10:43:17.209Z",
    "size": 291454,
    "path": "../public/_nuxt/primeicons.5e10f102.svg"
  },
  "/_nuxt/primeicons.90a58d3a.woff": {
    "type": "font/woff",
    "etag": "\"11a58-sWSLUL4TNQ/ei12ab+eDVN3MQ+Q\"",
    "mtime": "2023-08-03T10:43:17.208Z",
    "size": 72280,
    "path": "../public/_nuxt/primeicons.90a58d3a.woff"
  },
  "/_nuxt/primeicons.ce852338.eot": {
    "type": "application/vnd.ms-fontobject",
    "etag": "\"11abc-5N8jVcQFzTiq2jbtqQFagQ/quUw\"",
    "mtime": "2023-08-03T10:43:17.208Z",
    "size": 72380,
    "path": "../public/_nuxt/primeicons.ce852338.eot"
  },
  "/_nuxt/rotellaOstetrica.6f088d87.png": {
    "type": "image/png",
    "etag": "\"21bb3-AEStHXJThVT5YJBWo4EsxhrE7Cs\"",
    "mtime": "2023-08-03T10:43:17.208Z",
    "size": 138163,
    "path": "../public/_nuxt/rotellaOstetrica.6f088d87.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_nEuy3M = () => import('./renderer.mjs').then(function (n) { return n.r; });

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_nEuy3M, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_nEuy3M, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: $fetch });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
