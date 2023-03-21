globalThis.global = globalThis;
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key2, value) => key2 in obj ? __defProp(obj, key2, { enumerable: true, configurable: true, writable: true, value }) : obj[key2] = value;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key2, value) => {
  __defNormalProp(obj, typeof key2 !== "symbol" ? key2 + "" : key2, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};

// .svelte-kit/output/server/chunks/index.js
function noop() {
}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function set_current_component(component4) {
  current_component = component4;
}
function get_current_component() {
  if (!current_component)
    throw new Error("Function called outside component initialization");
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern2 = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern2.lastIndex = 0;
  let escaped2 = "";
  let last = 0;
  while (pattern2.test(str)) {
    const i = pattern2.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === "&" ? "&amp;" : ch === '"' ? "&quot;" : "&lt;");
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function validate_component(component4, name) {
  if (!component4 || !component4.$$render) {
    if (name === "svelte:component")
      name += " this={...}";
    throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules. Otherwise you may need to fix a <${name}>.`);
  }
  return component4;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      // these will be immediately discarded
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object()
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: "", head: "", css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css).map((css) => css.code).join("\n"),
          map: null
          // TODO
        },
        head: result.title + result.head
      };
    },
    $$render
  };
}
var current_component, ATTR_REGEX, CONTENT_REGEX, missing_component, on_destroy;
var init_chunks = __esm({
  ".svelte-kit/output/server/chunks/index.js"() {
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => ""
    };
  }
});

// node_modules/cookie/index.js
var require_cookie = __commonJS({
  "node_modules/cookie/index.js"(exports) {
    "use strict";
    exports.parse = parse4;
    exports.serialize = serialize2;
    var __toString = Object.prototype.toString;
    var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse4(str, options2) {
      if (typeof str !== "string") {
        throw new TypeError("argument str must be a string");
      }
      var obj = {};
      var opt = options2 || {};
      var dec = opt.decode || decode2;
      var index4 = 0;
      while (index4 < str.length) {
        var eqIdx = str.indexOf("=", index4);
        if (eqIdx === -1) {
          break;
        }
        var endIdx = str.indexOf(";", index4);
        if (endIdx === -1) {
          endIdx = str.length;
        } else if (endIdx < eqIdx) {
          index4 = str.lastIndexOf(";", eqIdx - 1) + 1;
          continue;
        }
        var key2 = str.slice(index4, eqIdx).trim();
        if (void 0 === obj[key2]) {
          var val = str.slice(eqIdx + 1, endIdx).trim();
          if (val.charCodeAt(0) === 34) {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode(val, dec);
        }
        index4 = endIdx + 1;
      }
      return obj;
    }
    function serialize2(name, val, options2) {
      var opt = options2 || {};
      var enc = opt.encode || encode2;
      if (typeof enc !== "function") {
        throw new TypeError("option encode is invalid");
      }
      if (!fieldContentRegExp.test(name)) {
        throw new TypeError("argument name is invalid");
      }
      var value = enc(val);
      if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError("argument val is invalid");
      }
      var str = name + "=" + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError("option maxAge is invalid");
        }
        str += "; Max-Age=" + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
          throw new TypeError("option domain is invalid");
        }
        str += "; Domain=" + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
          throw new TypeError("option path is invalid");
        }
        str += "; Path=" + opt.path;
      }
      if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
          throw new TypeError("option expires is invalid");
        }
        str += "; Expires=" + expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += "; HttpOnly";
      }
      if (opt.secure) {
        str += "; Secure";
      }
      if (opt.priority) {
        var priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
        switch (priority) {
          case "low":
            str += "; Priority=Low";
            break;
          case "medium":
            str += "; Priority=Medium";
            break;
          case "high":
            str += "; Priority=High";
            break;
          default:
            throw new TypeError("option priority is invalid");
        }
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += "; SameSite=Strict";
            break;
          case "lax":
            str += "; SameSite=Lax";
            break;
          case "strict":
            str += "; SameSite=Strict";
            break;
          case "none":
            str += "; SameSite=None";
            break;
          default:
            throw new TypeError("option sameSite is invalid");
        }
      }
      return str;
    }
    function decode2(str) {
      return str.indexOf("%") !== -1 ? decodeURIComponent(str) : str;
    }
    function encode2(val) {
      return encodeURIComponent(val);
    }
    function isDate(val) {
      return __toString.call(val) === "[object Date]" || val instanceof Date;
    }
    function tryDecode(str, decode3) {
      try {
        return decode3(str);
      } catch (e) {
        return str;
      }
    }
  }
});

// node_modules/set-cookie-parser/lib/set-cookie.js
var require_set_cookie = __commonJS({
  "node_modules/set-cookie-parser/lib/set-cookie.js"(exports, module) {
    "use strict";
    var defaultParseOptions = {
      decodeValues: true,
      map: false,
      silent: false
    };
    function isNonEmptyString(str) {
      return typeof str === "string" && !!str.trim();
    }
    function parseString2(setCookieValue, options2) {
      var parts = setCookieValue.split(";").filter(isNonEmptyString);
      var nameValuePairStr = parts.shift();
      var parsed = parseNameValuePair(nameValuePairStr);
      var name = parsed.name;
      var value = parsed.value;
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      try {
        value = options2.decodeValues ? decodeURIComponent(value) : value;
      } catch (e) {
        console.error(
          "set-cookie-parser encountered an error while decoding a cookie with value '" + value + "'. Set options.decodeValues to false to disable this feature.",
          e
        );
      }
      var cookie = {
        name,
        value
      };
      parts.forEach(function(part) {
        var sides = part.split("=");
        var key2 = sides.shift().trimLeft().toLowerCase();
        var value2 = sides.join("=");
        if (key2 === "expires") {
          cookie.expires = new Date(value2);
        } else if (key2 === "max-age") {
          cookie.maxAge = parseInt(value2, 10);
        } else if (key2 === "secure") {
          cookie.secure = true;
        } else if (key2 === "httponly") {
          cookie.httpOnly = true;
        } else if (key2 === "samesite") {
          cookie.sameSite = value2;
        } else {
          cookie[key2] = value2;
        }
      });
      return cookie;
    }
    function parseNameValuePair(nameValuePairStr) {
      var name = "";
      var value = "";
      var nameValueArr = nameValuePairStr.split("=");
      if (nameValueArr.length > 1) {
        name = nameValueArr.shift();
        value = nameValueArr.join("=");
      } else {
        value = nameValuePairStr;
      }
      return { name, value };
    }
    function parse4(input, options2) {
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!input) {
        if (!options2.map) {
          return [];
        } else {
          return {};
        }
      }
      if (input.headers) {
        if (typeof input.headers.getSetCookie === "function") {
          input = input.headers.getSetCookie();
        } else if (input.headers["set-cookie"]) {
          input = input.headers["set-cookie"];
        } else {
          var sch = input.headers[Object.keys(input.headers).find(function(key2) {
            return key2.toLowerCase() === "set-cookie";
          })];
          if (!sch && input.headers.cookie && !options2.silent) {
            console.warn(
              "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
            );
          }
          input = sch;
        }
      }
      if (!Array.isArray(input)) {
        input = [input];
      }
      options2 = options2 ? Object.assign({}, defaultParseOptions, options2) : defaultParseOptions;
      if (!options2.map) {
        return input.filter(isNonEmptyString).map(function(str) {
          return parseString2(str, options2);
        });
      } else {
        var cookies = {};
        return input.filter(isNonEmptyString).reduce(function(cookies2, str) {
          var cookie = parseString2(str, options2);
          cookies2[cookie.name] = cookie;
          return cookies2;
        }, cookies);
      }
    }
    function splitCookiesString2(cookiesString) {
      if (Array.isArray(cookiesString)) {
        return cookiesString;
      }
      if (typeof cookiesString !== "string") {
        return [];
      }
      var cookiesStrings = [];
      var pos = 0;
      var start;
      var ch;
      var lastComma;
      var nextStart;
      var cookiesSeparatorFound;
      function skipWhitespace() {
        while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
          pos += 1;
        }
        return pos < cookiesString.length;
      }
      function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
      }
      while (pos < cookiesString.length) {
        start = pos;
        cookiesSeparatorFound = false;
        while (skipWhitespace()) {
          ch = cookiesString.charAt(pos);
          if (ch === ",") {
            lastComma = pos;
            pos += 1;
            skipWhitespace();
            nextStart = pos;
            while (pos < cookiesString.length && notSpecialChar()) {
              pos += 1;
            }
            if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
              cookiesSeparatorFound = true;
              pos = nextStart;
              cookiesStrings.push(cookiesString.substring(start, lastComma));
              start = pos;
            } else {
              pos = lastComma + 1;
            }
          } else {
            pos += 1;
          }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
          cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
      }
      return cookiesStrings;
    }
    module.exports = parse4;
    module.exports.parse = parse4;
    module.exports.parseString = parseString2;
    module.exports.splitCookiesString = splitCookiesString2;
  }
});

// .svelte-kit/output/server/entries/fallbacks/layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => Layout
});
var Layout;
var init_layout_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/layout.svelte.js"() {
    init_chunks();
    Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `${slots.default ? slots.default({}) : ``}`;
    });
  }
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  component: () => component,
  file: () => file,
  fonts: () => fonts,
  imports: () => imports,
  index: () => index,
  stylesheets: () => stylesheets
});
var index, component, file, imports, stylesheets, fonts;
var init__ = __esm({
  ".svelte-kit/output/server/nodes/0.js"() {
    index = 0;
    component = async () => (await Promise.resolve().then(() => (init_layout_svelte(), layout_svelte_exports))).default;
    file = "_app/immutable/entry/layout.svelte.b0368388.js";
    imports = ["_app/immutable/entry/layout.svelte.b0368388.js", "_app/immutable/chunks/index.847936d9.js"];
    stylesheets = [];
    fonts = [];
  }
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error$1
});
var getStores, page, Error$1;
var init_error_svelte = __esm({
  ".svelte-kit/output/server/entries/fallbacks/error.svelte.js"() {
    init_chunks();
    getStores = () => {
      const stores = getContext("__svelte__");
      return {
        page: {
          subscribe: stores.page.subscribe
        },
        navigating: {
          subscribe: stores.navigating.subscribe
        },
        updated: stores.updated
      };
    };
    page = {
      /** @param {(value: any) => void} fn */
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      }
    };
    Error$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => $page = value);
      $$unsubscribe_page();
      return `<h1>${escape($page.status)}</h1>
<p>${escape($page.error?.message)}</p>`;
    });
  }
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  component: () => component2,
  file: () => file2,
  fonts: () => fonts2,
  imports: () => imports2,
  index: () => index2,
  stylesheets: () => stylesheets2
});
var index2, component2, file2, imports2, stylesheets2, fonts2;
var init__2 = __esm({
  ".svelte-kit/output/server/nodes/1.js"() {
    index2 = 1;
    component2 = async () => (await Promise.resolve().then(() => (init_error_svelte(), error_svelte_exports))).default;
    file2 = "_app/immutable/entry/error.svelte.201e1cfe.js";
    imports2 = ["_app/immutable/entry/error.svelte.201e1cfe.js", "_app/immutable/chunks/index.847936d9.js", "_app/immutable/chunks/singletons.ce7a18f3.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// node_modules/drizzle-orm/logger.js
var require_logger = __commonJS({
  "node_modules/drizzle-orm/logger.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NoopLogger = exports.DefaultLogger = exports.ConsoleLogWriter = void 0;
    var ConsoleLogWriter = class {
      write(message) {
        console.log(message);
      }
    };
    exports.ConsoleLogWriter = ConsoleLogWriter;
    var DefaultLogger = class {
      constructor(config2 = { writer: new ConsoleLogWriter() }) {
        this.writer = config2.writer;
      }
      logQuery(query, params) {
        const stringifiedParams = params.map((p) => {
          try {
            return JSON.stringify(p);
          } catch (e) {
            return String(p);
          }
        });
        const paramsStr = stringifiedParams.length ? ` -- params: [${stringifiedParams.join(", ")}]` : "";
        this.writer.write(`Query: ${query}${paramsStr}`);
      }
    };
    exports.DefaultLogger = DefaultLogger;
    var NoopLogger = class {
      logQuery() {
      }
    };
    exports.NoopLogger = NoopLogger;
  }
});

// node_modules/drizzle-orm/column.js
var require_column = __commonJS({
  "node_modules/drizzle-orm/column.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Column = void 0;
    var Column = class {
      constructor(table, config2) {
        this.table = table;
        this.name = config2.name;
        this.notNull = config2.notNull;
        this.default = config2.default;
        this.hasDefault = config2.hasDefault;
        this.primary = config2.primaryKey;
      }
      mapFromDriverValue(value) {
        return value;
      }
      mapToDriverValue(value) {
        return value;
      }
    };
    exports.Column = Column;
  }
});

// node_modules/drizzle-orm/table.js
var require_table = __commonJS({
  "node_modules/drizzle-orm/table.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getTableName = exports.Table = exports.OriginalName = exports.Columns = exports.Schema = exports.Name = void 0;
    exports.Name = Symbol("Name");
    exports.Schema = Symbol("Schema");
    exports.Columns = Symbol("Columns");
    exports.OriginalName = Symbol("OriginalName");
    var Table = class {
      constructor(name, schema) {
        this[exports.Name] = this[exports.OriginalName] = name;
        this[exports.Schema] = schema;
      }
    };
    exports.Table = Table;
    Table.Symbol = {
      Name: exports.Name,
      Schema: exports.Schema,
      OriginalName: exports.OriginalName,
      Columns: exports.Columns
    };
    function getTableName(table) {
      return table[Table.Symbol.Name];
    }
    exports.getTableName = getTableName;
  }
});

// node_modules/drizzle-orm/alias.js
var require_alias = __commonJS({
  "node_modules/drizzle-orm/alias.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TableAliasProxyHandler = exports.ColumnAliasProxyHandler = void 0;
    var column_1 = require_column();
    var table_1 = require_table();
    var ColumnAliasProxyHandler = class {
      constructor(table) {
        this.table = table;
      }
      get(columnObj, prop, receiver) {
        if (prop === "table") {
          return this.table;
        }
        return columnObj[prop];
      }
    };
    exports.ColumnAliasProxyHandler = ColumnAliasProxyHandler;
    var TableAliasProxyHandler = class {
      constructor(alias) {
        this.alias = alias;
      }
      get(tableObj, prop, receiver) {
        if (prop === table_1.Table.Symbol.Name) {
          return this.alias;
        }
        if (prop === table_1.Table.Symbol.Columns) {
          const columns = tableObj[table_1.Table.Symbol.Columns];
          if (!columns) {
            return columns;
          }
          const proxiedColumns = {};
          Object.keys(columns).map((key2) => {
            proxiedColumns[key2] = new Proxy(columns[key2], new ColumnAliasProxyHandler(new Proxy(tableObj, this)));
          });
          return proxiedColumns;
        }
        const value = tableObj[prop];
        if (value instanceof column_1.Column) {
          return new Proxy(value, new ColumnAliasProxyHandler(new Proxy(tableObj, this)));
        }
        return value;
      }
    };
    exports.TableAliasProxyHandler = TableAliasProxyHandler;
  }
});

// node_modules/drizzle-orm/view.js
var require_view = __commonJS({
  "node_modules/drizzle-orm/view.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.View = exports.ViewBaseConfig = void 0;
    exports.ViewBaseConfig = Symbol("ViewBaseConfig");
    var View = class {
      constructor({ name, schema, selection, query }) {
        this[exports.ViewBaseConfig] = {
          name,
          schema,
          selection,
          query,
          isExisting: !query
        };
      }
    };
    exports.View = View;
  }
});

// node_modules/drizzle-orm/sql/index.js
var require_sql = __commonJS({
  "node_modules/drizzle-orm/sql/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fillPlaceholders = exports.placeholder = exports.Placeholder = exports.sql = exports.param = exports.Param = exports.noopMapper = exports.noopEncoder = exports.noopDecoder = exports.name = exports.Name = exports.SQL = exports.isSQLWrapper = exports.FakePrimitiveParam = void 0;
    var subquery_1 = require_subquery();
    var view_1 = require_view();
    var column_1 = require_column();
    var table_1 = require_table();
    var FakePrimitiveParam = class {
    };
    exports.FakePrimitiveParam = FakePrimitiveParam;
    function isSQLWrapper(value) {
      return typeof value === "object" && value !== null && "getSQL" in value && typeof value.getSQL === "function";
    }
    exports.isSQLWrapper = isSQLWrapper;
    var SQL = class {
      constructor(queryChunks) {
        this.queryChunks = queryChunks;
        this.decoder = exports.noopDecoder;
        this.shouldInlineParams = false;
      }
      append(chunk) {
        this.queryChunks.push(...chunk.queryChunks);
        return this;
      }
      toQuery(config2) {
        const { escapeName, escapeParam, escapeString, prepareTyping, paramStartIndex = 0, inlineParams = false } = config2;
        const params = [];
        const typings = [];
        const chunks = this.queryChunks.map((chunk) => {
          if (chunk instanceof SQL) {
            const sqlChunkParts = chunk.toQuery(Object.assign(Object.assign({}, config2), { paramStartIndex: paramStartIndex + params.length, inlineParams: this.shouldInlineParams || config2.inlineParams }));
            params.push(...sqlChunkParts.params);
            if (prepareTyping && sqlChunkParts.typings)
              typings.push(...sqlChunkParts.typings);
            return sqlChunkParts.sql;
          }
          if (typeof chunk === "string") {
            return chunk;
          }
          if (chunk instanceof Name) {
            return escapeName(chunk.value);
          }
          if (chunk instanceof table_1.Table) {
            const schemaName = chunk[table_1.Table.Symbol.Schema];
            const tableName = chunk[table_1.Table.Symbol.Name];
            return typeof schemaName !== "undefined" ? escapeName(schemaName) + "." + escapeName(tableName) : escapeName(tableName);
          }
          if (chunk instanceof column_1.Column) {
            return escapeName(chunk.table[table_1.Table.Symbol.Name]) + "." + escapeName(chunk.name);
          }
          if (chunk instanceof view_1.View) {
            const schemaName = chunk[view_1.ViewBaseConfig].schema;
            const viewName = chunk[view_1.ViewBaseConfig].name;
            return typeof schemaName !== "undefined" ? escapeName(schemaName) + "." + escapeName(viewName) : escapeName(viewName);
          }
          if (chunk instanceof Param) {
            const mappedValue = chunk.value === null ? null : chunk.encoder.mapToDriverValue(chunk.value);
            if (mappedValue instanceof SQL) {
              const mappedValueQuery = mappedValue.toQuery(Object.assign(Object.assign({}, config2), { paramStartIndex: paramStartIndex + params.length, inlineParams: this.shouldInlineParams || config2.inlineParams }));
              params.push(...mappedValueQuery.params);
              if (prepareTyping && mappedValueQuery.typings)
                typings.push(...mappedValueQuery.typings);
              return mappedValueQuery.sql;
            }
            if (this.shouldInlineParams || inlineParams) {
              if (mappedValue === null) {
                return "null";
              }
              if (mappedValue === void 0) {
                return "";
              }
              if (typeof mappedValue === "number" || typeof mappedValue === "boolean") {
                return mappedValue.toString();
              }
              if (typeof mappedValue === "string") {
                return escapeString(mappedValue);
              }
              if (typeof mappedValue === "object") {
                const mappedValueAsString = mappedValue.toString();
                if (mappedValueAsString === "[object Object]") {
                  return escapeString(JSON.stringify(mappedValue));
                }
                return escapeString(mappedValueAsString);
              }
              throw new Error("Unexpected param value: " + mappedValue);
            }
            params.push(mappedValue);
            if (typeof prepareTyping !== "undefined")
              typings.push(prepareTyping(chunk.encoder));
            return escapeParam(paramStartIndex + params.length - 1, chunk.value);
          }
          const err = new Error("Unexpected chunk type!");
          console.error(chunk);
          throw err;
        });
        const sqlString = chunks.join("");
        return { sql: sqlString, params, typings };
      }
      getSQL() {
        return this;
      }
      as(alias) {
        if (typeof alias === "undefined") {
          return this;
        }
        return new SQL.Aliased(this, alias);
      }
      mapWith(decoder2) {
        if (typeof decoder2 === "function") {
          this.decoder = { mapFromDriverValue: decoder2 };
        } else {
          this.decoder = decoder2;
        }
        return this;
      }
      inlineParams() {
        this.shouldInlineParams = true;
        return this;
      }
    };
    exports.SQL = SQL;
    var Name = class {
      constructor(value) {
        this.value = value;
      }
    };
    exports.Name = Name;
    function name(value) {
      return new Name(value);
    }
    exports.name = name;
    exports.noopDecoder = {
      mapFromDriverValue: (value) => value
    };
    exports.noopEncoder = {
      mapToDriverValue: (value) => value
    };
    exports.noopMapper = Object.assign(Object.assign({}, exports.noopDecoder), exports.noopEncoder);
    var Param = class {
      /**
       * @param value - Parameter value
       * @param encoder - Encoder to convert the value to a driver parameter
       */
      constructor(value, encoder2 = exports.noopEncoder) {
        this.value = value;
        this.encoder = encoder2;
      }
    };
    exports.Param = Param;
    function param(value, encoder2) {
      return new Param(value, encoder2);
    }
    exports.param = param;
    function buildChunksFromParam(param2) {
      if (Array.isArray(param2)) {
        const result = ["("];
        param2.forEach((p, i) => {
          result.push(...buildChunksFromParam(p));
          if (i < param2.length - 1) {
            result.push(", ");
          }
        });
        result.push(")");
        return result;
      }
      if (param2 instanceof table_1.Table || param2 instanceof column_1.Column || param2 instanceof Name || param2 instanceof Param || param2 instanceof view_1.View || param2 instanceof SQL) {
        return [param2];
      }
      if (param2 instanceof SQL.Aliased && typeof param2.fieldAlias !== "undefined") {
        return [new Name(param2.fieldAlias)];
      }
      if (param2 instanceof subquery_1.Subquery) {
        if (param2[subquery_1.SubqueryConfig].isWith) {
          return [new Name(param2[subquery_1.SubqueryConfig].alias)];
        }
        return ["(", param2[subquery_1.SubqueryConfig].sql, ") ", new Name(param2[subquery_1.SubqueryConfig].alias)];
      }
      if (isSQLWrapper(param2)) {
        return ["(", param2.getSQL(), ")"];
      }
      if (param2 !== void 0) {
        return [new Param(param2)];
      }
      return [];
    }
    function sql(strings, ...params) {
      const queryChunks = [];
      if (params.length > 0 || strings.length > 0 && strings[0] !== "") {
        queryChunks.push(strings[0]);
      }
      params.forEach((param2, paramIndex) => {
        queryChunks.push(...buildChunksFromParam(param2));
        queryChunks.push(strings[paramIndex + 1]);
      });
      return new SQL(queryChunks);
    }
    exports.sql = sql;
    (function(sql2) {
      function empty() {
        return new SQL([]);
      }
      sql2.empty = empty;
      function fromList(list) {
        return new SQL(list.map(buildChunksFromParam).flat(1));
      }
      sql2.fromList = fromList;
      function raw(str) {
        return new SQL([str]);
      }
      sql2.raw = raw;
    })(sql = exports.sql || (exports.sql = {}));
    (function(SQL2) {
      class Aliased {
        constructor(sql2, fieldAlias) {
          this.sql = sql2;
          this.fieldAlias = fieldAlias;
          this.isSelectionField = false;
        }
        getSQL() {
          return this.sql;
        }
        /** @internal */
        clone() {
          return new Aliased(this.sql, this.fieldAlias);
        }
      }
      SQL2.Aliased = Aliased;
    })(SQL = exports.SQL || (exports.SQL = {}));
    var Placeholder = class {
      constructor(name2) {
        this.name = name2;
      }
    };
    exports.Placeholder = Placeholder;
    function placeholder(name2) {
      return new Placeholder(name2);
    }
    exports.placeholder = placeholder;
    function fillPlaceholders(params, values) {
      return params.map((p) => {
        if (p instanceof Placeholder) {
          if (!(p.name in values)) {
            throw new Error(`No value for placeholder "${p.name}" was provided`);
          }
          return values[p.name];
        }
        return p;
      });
    }
    exports.fillPlaceholders = fillPlaceholders;
  }
});

// node_modules/drizzle-orm/subquery.js
var require_subquery = __commonJS({
  "node_modules/drizzle-orm/subquery.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SelectionProxyHandler = exports.WithSubquery = exports.Subquery = exports.SubqueryConfig = void 0;
    var alias_1 = require_alias();
    var column_1 = require_column();
    var sql_1 = require_sql();
    var view_1 = require_view();
    exports.SubqueryConfig = Symbol("SubqueryConfig");
    var Subquery = class {
      constructor(sql, selection, alias, isWith = false) {
        this[exports.SubqueryConfig] = {
          sql,
          selection,
          alias,
          isWith
        };
      }
    };
    exports.Subquery = Subquery;
    var WithSubquery = class extends Subquery {
    };
    exports.WithSubquery = WithSubquery;
    var SelectionProxyHandler = class {
      constructor(config2) {
        this.config = Object.assign({}, config2);
      }
      get(subquery, prop, receiver) {
        if (typeof prop === "symbol") {
          return subquery[prop];
        }
        const columns = subquery instanceof Subquery ? subquery[exports.SubqueryConfig].selection : subquery instanceof view_1.View ? subquery[view_1.ViewBaseConfig].selection : subquery;
        const value = columns[prop];
        if (value instanceof sql_1.SQL.Aliased) {
          if (this.config.sqlAliasedBehavior !== "subquery_selection" && !value.isSelectionField || this.config.sqlAliasedBehavior === "sql") {
            return value.sql;
          }
          const newValue = value.clone();
          newValue.isSelectionField = true;
          return newValue;
        }
        if (value instanceof sql_1.SQL) {
          if (this.config.sqlBehavior === "sql") {
            return value;
          }
          throw new Error(`You tried to reference "${prop}" field from a subquery, which is a raw SQL field, but it doesn't have an alias. Please add an alias to the field using ".as('alias')" method.`);
        }
        if (value instanceof column_1.Column) {
          if (this.config.alias) {
            return new Proxy(value, new alias_1.ColumnAliasProxyHandler(new Proxy(value.table, new alias_1.TableAliasProxyHandler(this.config.alias))));
          }
          return value;
        }
        if (typeof value !== "object" || value === null) {
          return value;
        }
        return new Proxy(value, new SelectionProxyHandler(this.config));
      }
    };
    exports.SelectionProxyHandler = SelectionProxyHandler;
  }
});

// node_modules/drizzle-orm/query-promise.js
var require_query_promise = __commonJS({
  "node_modules/drizzle-orm/query-promise.js"(exports) {
    "use strict";
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QueryPromise = void 0;
    var QueryPromise = class {
      constructor() {
        this[_a] = "QueryPromise";
      }
      catch(onRejected) {
        return this.then(void 0, onRejected);
      }
      finally(onFinally) {
        return this.then((value) => {
          onFinally === null || onFinally === void 0 ? void 0 : onFinally();
          return value;
        }, (reason) => {
          onFinally === null || onFinally === void 0 ? void 0 : onFinally();
          return Promise.reject(reason);
        });
      }
      then(onFulfilled, onRejected) {
        return this.execute().then(onFulfilled, onRejected);
      }
    };
    exports.QueryPromise = QueryPromise;
    _a = Symbol.toStringTag;
  }
});

// node_modules/drizzle-orm/mysql-core/query-builders/delete.js
var require_delete = __commonJS({
  "node_modules/drizzle-orm/mysql-core/query-builders/delete.js"(exports) {
    "use strict";
    var __rest = exports && exports.__rest || function(s2, e) {
      var t = {};
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p) && e.indexOf(p) < 0)
          t[p] = s2[p];
      if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s2); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i]))
            t[p[i]] = s2[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MySqlDelete = void 0;
    var query_promise_1 = require_query_promise();
    var MySqlDelete = class extends query_promise_1.QueryPromise {
      constructor(table, session, dialect) {
        super();
        this.table = table;
        this.session = session;
        this.dialect = dialect;
        this.execute = (placeholderValues) => {
          return this._prepare().execute(placeholderValues);
        };
        this.config = { table };
      }
      where(where) {
        this.config.where = where;
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildDeleteQuery(this.config);
      }
      toSQL() {
        const _a = this.dialect.sqlToQuery(this.getSQL()), { typings } = _a, rest = __rest(_a, ["typings"]);
        return rest;
      }
      _prepare(name) {
        return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, name);
      }
      prepare(name) {
        return this._prepare(name);
      }
    };
    exports.MySqlDelete = MySqlDelete;
  }
});

// node_modules/drizzle-orm/utils.js
var require_utils = __commonJS({
  "node_modules/drizzle-orm/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.applyMixins = exports.mapUpdateSet = exports.orderSelectedFields = exports.mapResultRow = exports.npmVersion = exports.apiVersion = void 0;
    var column_1 = require_column();
    var sql_1 = require_sql();
    var table_1 = require_table();
    exports.apiVersion = 2;
    exports.npmVersion = "0.17.0";
    function mapResultRow(columns, row, joinsNotNullableMap) {
      const nullifyMap = {};
      const result = columns.reduce((result2, { path, field }, columnIndex) => {
        let decoder2;
        if (field instanceof column_1.Column) {
          decoder2 = field;
        } else if (field instanceof sql_1.SQL) {
          decoder2 = field.decoder;
        } else {
          decoder2 = field.sql.decoder;
        }
        let node = result2;
        path.forEach((pathChunk, pathChunkIndex) => {
          if (pathChunkIndex < path.length - 1) {
            if (!(pathChunk in node)) {
              node[pathChunk] = {};
            }
            node = node[pathChunk];
          } else {
            const rawValue = row[columnIndex];
            const value = node[pathChunk] = rawValue === null ? null : decoder2.mapFromDriverValue(rawValue);
            if (joinsNotNullableMap && field instanceof column_1.Column && path.length === 2) {
              const objectName = path[0];
              if (!(objectName in nullifyMap)) {
                if (value === null) {
                  nullifyMap[objectName] = (0, table_1.getTableName)(field.table);
                } else {
                  nullifyMap[objectName] = false;
                }
              } else if (typeof nullifyMap[objectName] === "string" && nullifyMap[objectName] !== (0, table_1.getTableName)(field.table)) {
                nullifyMap[objectName] = false;
              }
            }
          }
        });
        return result2;
      }, {});
      if (joinsNotNullableMap && Object.keys(nullifyMap).length > 0) {
        Object.entries(nullifyMap).forEach(([objectName, tableName]) => {
          if (typeof tableName === "string" && !joinsNotNullableMap[tableName]) {
            result[objectName] = null;
          }
        });
      }
      return result;
    }
    exports.mapResultRow = mapResultRow;
    function orderSelectedFields(fields, pathPrefix) {
      return Object.entries(fields).reduce((result, [name, field]) => {
        if (typeof name !== "string") {
          return result;
        }
        const newPath = pathPrefix ? [...pathPrefix, name] : [name];
        if (field instanceof column_1.Column || field instanceof sql_1.SQL || field instanceof sql_1.SQL.Aliased) {
          result.push({ path: newPath, field });
        } else if (field instanceof table_1.Table) {
          result.push(...orderSelectedFields(field[table_1.Table.Symbol.Columns], newPath));
        } else {
          result.push(...orderSelectedFields(field, newPath));
        }
        return result;
      }, []);
    }
    exports.orderSelectedFields = orderSelectedFields;
    function mapUpdateSet(table, values) {
      return Object.fromEntries(Object.entries(values).map(([key2, value]) => {
        if (value instanceof sql_1.SQL || value === null || value === void 0) {
          return [key2, value];
        } else {
          return [key2, new sql_1.Param(value, table[table_1.Table.Symbol.Columns][key2])];
        }
      }));
    }
    exports.mapUpdateSet = mapUpdateSet;
    function applyMixins(baseClass, extendedClasses) {
      extendedClasses.forEach((extendedClass) => {
        Object.getOwnPropertyNames(extendedClass.prototype).forEach((name) => {
          Object.defineProperty(baseClass.prototype, name, Object.getOwnPropertyDescriptor(extendedClass.prototype, name) || /* @__PURE__ */ Object.create(null));
        });
      });
    }
    exports.applyMixins = applyMixins;
  }
});

// node_modules/drizzle-orm/mysql-core/query-builders/insert.js
var require_insert = __commonJS({
  "node_modules/drizzle-orm/mysql-core/query-builders/insert.js"(exports) {
    "use strict";
    var __rest = exports && exports.__rest || function(s2, e) {
      var t = {};
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p) && e.indexOf(p) < 0)
          t[p] = s2[p];
      if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s2); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i]))
            t[p[i]] = s2[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MySqlInsert = exports.MySqlInsertBuilder = void 0;
    var query_promise_1 = require_query_promise();
    var sql_1 = require_sql();
    var table_1 = require_table();
    var utils_1 = require_utils();
    var MySqlInsertBuilder = class {
      constructor(table, session, dialect) {
        this.table = table;
        this.session = session;
        this.dialect = dialect;
      }
      values(...values) {
        const mappedValues = values.map((entry) => {
          const result = {};
          const cols = this.table[table_1.Table.Symbol.Columns];
          for (const colKey of Object.keys(entry)) {
            const colValue = entry[colKey];
            if (colValue instanceof sql_1.SQL) {
              result[colKey] = colValue;
            } else {
              result[colKey] = new sql_1.Param(colValue, cols[colKey]);
            }
          }
          return result;
        });
        return new MySqlInsert(this.table, mappedValues, this.session, this.dialect);
      }
    };
    exports.MySqlInsertBuilder = MySqlInsertBuilder;
    var MySqlInsert = class extends query_promise_1.QueryPromise {
      constructor(table, values, session, dialect) {
        super();
        this.session = session;
        this.dialect = dialect;
        this.execute = (placeholderValues) => {
          return this._prepare().execute(placeholderValues);
        };
        this.config = { table, values };
      }
      onDuplicateKeyUpdate(config2) {
        const setSql = this.dialect.buildUpdateSet(this.config.table, (0, utils_1.mapUpdateSet)(this.config.table, config2.set));
        this.config.onConflict = (0, sql_1.sql)`update ${setSql}`;
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildInsertQuery(this.config);
      }
      toSQL() {
        const _a = this.dialect.sqlToQuery(this.getSQL()), { typings } = _a, rest = __rest(_a, ["typings"]);
        return rest;
      }
      _prepare(name) {
        return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, name);
      }
      prepare(name) {
        return this._prepare(name);
      }
    };
    exports.MySqlInsert = MySqlInsert;
  }
});

// node_modules/drizzle-orm/column-builder.js
var require_column_builder = __commonJS({
  "node_modules/drizzle-orm/column-builder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ColumnBuilder = exports.ColumnBuilderWithConfig = void 0;
    var ColumnBuilderWithConfig = class {
    };
    exports.ColumnBuilderWithConfig = ColumnBuilderWithConfig;
    var ColumnBuilder = class extends ColumnBuilderWithConfig {
      constructor(name) {
        super();
        this.config = {
          name,
          notNull: false,
          default: void 0,
          primaryKey: false
        };
      }
      notNull() {
        this.config.notNull = true;
        return this;
      }
      default(value) {
        this.config.default = value;
        this.config.hasDefault = true;
        return this;
      }
      primaryKey() {
        this.config.primaryKey = true;
        this.config.notNull = true;
        return this;
      }
    };
    exports.ColumnBuilder = ColumnBuilder;
  }
});

// node_modules/drizzle-orm/mysql-core/table.js
var require_table2 = __commonJS({
  "node_modules/drizzle-orm/mysql-core/table.js"(exports) {
    "use strict";
    var _a;
    var _b;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mysqlTable = exports.mysqlTableWithSchema = exports.MySqlTable = exports.ExtraConfigBuilder = exports.InlineForeignKeys = void 0;
    var table_1 = require_table();
    exports.InlineForeignKeys = Symbol("InlineForeignKeys");
    exports.ExtraConfigBuilder = Symbol("ExtraConfigBuilder");
    var MySqlTable = class extends table_1.Table {
      constructor() {
        super(...arguments);
        this[_a] = [];
        this[_b] = void 0;
      }
    };
    exports.MySqlTable = MySqlTable;
    table_1.Table.Symbol.Columns, _a = exports.InlineForeignKeys, _b = exports.ExtraConfigBuilder;
    MySqlTable.Symbol = Object.assign(table_1.Table.Symbol, {
      InlineForeignKeys: exports.InlineForeignKeys,
      ExtraConfigBuilder: exports.ExtraConfigBuilder
    });
    function mysqlTableWithSchema(name, columns, extraConfig, schema) {
      const rawTable = new MySqlTable(name, schema);
      const builtColumns = Object.fromEntries(Object.entries(columns).map(([name2, colBuilder]) => {
        const column = colBuilder.build(rawTable);
        rawTable[exports.InlineForeignKeys].push(...colBuilder.buildForeignKeys(column, rawTable));
        return [name2, column];
      }));
      const table = Object.assign(rawTable, builtColumns);
      table[table_1.Table.Symbol.Columns] = builtColumns;
      if (extraConfig) {
        table[MySqlTable.Symbol.ExtraConfigBuilder] = extraConfig;
      }
      return table;
    }
    exports.mysqlTableWithSchema = mysqlTableWithSchema;
    function mysqlTable2(name, columns, extraConfig) {
      return mysqlTableWithSchema(name, columns, extraConfig, void 0);
    }
    exports.mysqlTable = mysqlTable2;
  }
});

// node_modules/drizzle-orm/mysql-core/foreign-keys.js
var require_foreign_keys = __commonJS({
  "node_modules/drizzle-orm/mysql-core/foreign-keys.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.foreignKey = exports.ForeignKey = exports.ForeignKeyBuilder = void 0;
    var table_1 = require_table2();
    var ForeignKeyBuilder = class {
      constructor(config2, actions) {
        this.reference = () => {
          const { columns, foreignColumns } = config2();
          return { columns, foreignTable: foreignColumns[0].table, foreignColumns };
        };
        if (actions) {
          this._onUpdate = actions.onUpdate;
          this._onDelete = actions.onDelete;
        }
      }
      onUpdate(action) {
        this._onUpdate = action;
        return this;
      }
      onDelete(action) {
        this._onDelete = action;
        return this;
      }
      /** @internal */
      build(table) {
        return new ForeignKey(table, this);
      }
    };
    exports.ForeignKeyBuilder = ForeignKeyBuilder;
    var ForeignKey = class {
      constructor(table, builder) {
        this.table = table;
        this.reference = builder.reference;
        this.onUpdate = builder._onUpdate;
        this.onDelete = builder._onDelete;
      }
      getName() {
        const { columns, foreignColumns } = this.reference();
        const columnNames = columns.map((column) => column.name);
        const foreignColumnNames = foreignColumns.map((column) => column.name);
        const chunks = [
          this.table[table_1.MySqlTable.Symbol.Name],
          ...columnNames,
          foreignColumns[0].table[table_1.MySqlTable.Symbol.Name],
          ...foreignColumnNames
        ];
        return `${chunks.join("_")}_fk`;
      }
    };
    exports.ForeignKey = ForeignKey;
    function foreignKey(config2) {
      function mappedConfig() {
        const { columns, foreignColumns } = config2;
        return {
          columns,
          foreignColumns
        };
      }
      return new ForeignKeyBuilder(mappedConfig);
    }
    exports.foreignKey = foreignKey;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/common.js
var require_common = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MySqlColumnWithAutoIncrement = exports.MySqlColumnBuilderWithAutoIncrement = exports.MySqlColumn = exports.MySqlColumnBuilder = void 0;
    var column_1 = require_column();
    var column_builder_1 = require_column_builder();
    var foreign_keys_1 = require_foreign_keys();
    var MySqlColumnBuilder = class extends column_builder_1.ColumnBuilder {
      constructor(name) {
        super(name);
        this.foreignKeyConfigs = [];
      }
      notNull() {
        return super.notNull();
      }
      default(value) {
        return super.default(value);
      }
      primaryKey() {
        return super.primaryKey();
      }
      references(ref, actions = {}) {
        this.foreignKeyConfigs.push({ ref, actions });
        return this;
      }
      /** @internal */
      buildForeignKeys(column, table) {
        return this.foreignKeyConfigs.map(({ ref, actions }) => {
          return ((ref2, actions2) => {
            const builder = new foreign_keys_1.ForeignKeyBuilder(() => {
              const foreignColumn = ref2();
              return { columns: [column], foreignColumns: [foreignColumn] };
            });
            if (actions2.onUpdate) {
              builder.onUpdate(actions2.onUpdate);
            }
            if (actions2.onDelete) {
              builder.onDelete(actions2.onDelete);
            }
            return builder.build(table);
          })(ref, actions);
        });
      }
    };
    exports.MySqlColumnBuilder = MySqlColumnBuilder;
    var MySqlColumn = class extends column_1.Column {
      constructor(table, config2) {
        super(table, config2);
        this.table = table;
      }
    };
    exports.MySqlColumn = MySqlColumn;
    var MySqlColumnBuilderWithAutoIncrement = class extends MySqlColumnBuilder {
      constructor(name) {
        super(name);
        this.config.autoIncrement = false;
      }
      autoincrement() {
        this.config.autoIncrement = true;
        return this;
      }
    };
    exports.MySqlColumnBuilderWithAutoIncrement = MySqlColumnBuilderWithAutoIncrement;
    var MySqlColumnWithAutoIncrement = class extends MySqlColumn {
      constructor(table, config2) {
        super(table, config2);
        this.table = table;
        this.autoIncrement = config2.autoIncrement;
      }
    };
    exports.MySqlColumnWithAutoIncrement = MySqlColumnWithAutoIncrement;
  }
});

// node_modules/drizzle-orm/mysql-core/checks.js
var require_checks = __commonJS({
  "node_modules/drizzle-orm/mysql-core/checks.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.check = exports.Check = exports.CheckBuilder = void 0;
    var CheckBuilder = class {
      constructor(name, value) {
        this.name = name;
        this.value = value;
      }
      /** @internal */
      build(table) {
        return new Check(table, this);
      }
    };
    exports.CheckBuilder = CheckBuilder;
    var Check = class {
      constructor(table, builder) {
        this.table = table;
        this.name = builder.name;
        this.value = builder.value;
      }
    };
    exports.Check = Check;
    function check(name, value) {
      return new CheckBuilder(name, value);
    }
    exports.check = check;
  }
});

// node_modules/drizzle-orm/mysql-core/indexes.js
var require_indexes = __commonJS({
  "node_modules/drizzle-orm/mysql-core/indexes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.uniqueIndex = exports.index = exports.Index = exports.IndexBuilder = exports.IndexBuilderOn = void 0;
    var IndexBuilderOn = class {
      constructor(name, unique) {
        this.name = name;
        this.unique = unique;
      }
      on(...columns) {
        return new IndexBuilder(this.name, columns, this.unique);
      }
    };
    exports.IndexBuilderOn = IndexBuilderOn;
    var IndexBuilder = class {
      constructor(name, columns, unique) {
        this.config = {
          name,
          columns,
          unique
        };
      }
      using(using) {
        this.config.using = using;
        return this;
      }
      algorythm(algorythm) {
        this.config.algorythm = algorythm;
        return this;
      }
      lock(lock) {
        this.config.lock = lock;
        return this;
      }
      /** @internal */
      build(table) {
        return new Index(this.config, table);
      }
    };
    exports.IndexBuilder = IndexBuilder;
    var Index = class {
      constructor(config2, table) {
        this.config = Object.assign(Object.assign({}, config2), { table });
      }
    };
    exports.Index = Index;
    function index4(name) {
      return new IndexBuilderOn(name, false);
    }
    exports.index = index4;
    function uniqueIndex(name) {
      return new IndexBuilderOn(name, true);
    }
    exports.uniqueIndex = uniqueIndex;
  }
});

// node_modules/drizzle-orm/mysql-core/primary-keys.js
var require_primary_keys = __commonJS({
  "node_modules/drizzle-orm/mysql-core/primary-keys.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PrimaryKey = exports.PrimaryKeyBuilder = exports.primaryKey = void 0;
    var table_1 = require_table2();
    function primaryKey(...columns) {
      return new PrimaryKeyBuilder(columns);
    }
    exports.primaryKey = primaryKey;
    var PrimaryKeyBuilder = class {
      constructor(columns) {
        this.columns = columns;
      }
      /** @internal */
      build(table) {
        return new PrimaryKey(table, this.columns);
      }
    };
    exports.PrimaryKeyBuilder = PrimaryKeyBuilder;
    var PrimaryKey = class {
      constructor(table, columns) {
        this.table = table;
        this.columns = columns;
      }
      getName() {
        return `${this.table[table_1.MySqlTable.Symbol.Name]}_${this.columns.map((column) => column.name).join("_")}_pk`;
      }
    };
    exports.PrimaryKey = PrimaryKey;
  }
});

// node_modules/drizzle-orm/mysql-core/utils.js
var require_utils2 = __commonJS({
  "node_modules/drizzle-orm/mysql-core/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getViewConfig = exports.getTableColumns = exports.getTableConfig = void 0;
    var table_1 = require_table();
    var view_1 = require_view();
    var checks_1 = require_checks();
    var foreign_keys_1 = require_foreign_keys();
    var indexes_1 = require_indexes();
    var primary_keys_1 = require_primary_keys();
    var table_2 = require_table2();
    var view_2 = require_view2();
    function getTableConfig(table) {
      const columns = Object.values(table[table_2.MySqlTable.Symbol.Columns]);
      const indexes = [];
      const checks = [];
      const primaryKeys = [];
      const foreignKeys = Object.values(table[table_2.MySqlTable.Symbol.InlineForeignKeys]);
      const name = table[table_1.Table.Symbol.Name];
      const schema = table[table_1.Table.Symbol.Schema];
      const extraConfigBuilder = table[table_2.MySqlTable.Symbol.ExtraConfigBuilder];
      if (typeof extraConfigBuilder !== "undefined") {
        const extraConfig = extraConfigBuilder(table[table_2.MySqlTable.Symbol.Columns]);
        Object.values(extraConfig).forEach((builder) => {
          if (builder instanceof indexes_1.IndexBuilder) {
            indexes.push(builder.build(table));
          } else if (builder instanceof checks_1.CheckBuilder) {
            checks.push(builder.build(table));
          } else if (builder instanceof primary_keys_1.PrimaryKeyBuilder) {
            primaryKeys.push(builder.build(table));
          } else if (builder instanceof foreign_keys_1.ForeignKeyBuilder) {
            foreignKeys.push(builder.build(table));
          }
        });
      }
      return {
        columns,
        indexes,
        foreignKeys,
        checks,
        primaryKeys,
        name,
        schema
      };
    }
    exports.getTableConfig = getTableConfig;
    function getTableColumns(table) {
      return Object.assign({}, table[table_2.MySqlTable.Symbol.Columns]);
    }
    exports.getTableColumns = getTableColumns;
    function getViewConfig(view) {
      return Object.assign(Object.assign({}, view[view_1.ViewBaseConfig]), view[view_2.MySqlViewConfig]);
    }
    exports.getViewConfig = getViewConfig;
  }
});

// node_modules/drizzle-orm/mysql-core/view.js
var require_view2 = __commonJS({
  "node_modules/drizzle-orm/mysql-core/view.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mysqlView = exports.mysqlViewWithSchema = exports.MySqlView = exports.MySqlViewConfig = exports.MySqlViewBase = exports.ManualViewBuilder = exports.ViewBuilder = exports.ViewBuilderCore = void 0;
    var subquery_1 = require_subquery();
    var view_1 = require_view();
    var query_builders_1 = require_query_builders();
    var table_1 = require_table2();
    var utils_1 = require_utils2();
    var ViewBuilderCore = class {
      constructor(name, schema) {
        this.name = name;
        this.schema = schema;
        this.config = {};
      }
      algorithm(algorithm) {
        this.config.algorithm = algorithm;
        return this;
      }
      definer(definer) {
        this.config.definer = definer;
        return this;
      }
      sqlSecurity(sqlSecurity) {
        this.config.sqlSecurity = sqlSecurity;
        return this;
      }
      withCheckOption(withCheckOption) {
        this.config.withCheckOption = withCheckOption !== null && withCheckOption !== void 0 ? withCheckOption : "cascaded";
        return this;
      }
    };
    exports.ViewBuilderCore = ViewBuilderCore;
    var ViewBuilder = class extends ViewBuilderCore {
      as(qb) {
        if (typeof qb === "function") {
          qb = qb(query_builders_1.queryBuilder);
        }
        const selectionProxy = new subquery_1.SelectionProxyHandler({
          alias: this.name,
          sqlBehavior: "error",
          sqlAliasedBehavior: "alias"
        });
        const aliasedSelection = new Proxy(qb.getSelection(), selectionProxy);
        return new Proxy(new MySqlView({
          mysqlConfig: this.config,
          config: {
            name: this.name,
            schema: this.schema,
            selection: aliasedSelection,
            query: qb.getSQL().inlineParams()
          }
        }), selectionProxy);
      }
    };
    exports.ViewBuilder = ViewBuilder;
    var ManualViewBuilder = class extends ViewBuilderCore {
      constructor(name, columns, schema) {
        super(name, schema);
        this.columns = (0, utils_1.getTableColumns)((0, table_1.mysqlTable)(name, columns));
      }
      existing() {
        return new Proxy(new MySqlView({
          mysqlConfig: void 0,
          config: {
            name: this.name,
            schema: this.schema,
            selection: this.columns,
            query: void 0
          }
        }), new subquery_1.SelectionProxyHandler({
          alias: this.name,
          sqlBehavior: "error",
          sqlAliasedBehavior: "alias"
        }));
      }
      as(query) {
        return new Proxy(new MySqlView({
          mysqlConfig: this.config,
          config: {
            name: this.name,
            schema: this.schema,
            selection: this.columns,
            query: query.inlineParams()
          }
        }), new subquery_1.SelectionProxyHandler({
          alias: this.name,
          sqlBehavior: "error",
          sqlAliasedBehavior: "alias"
        }));
      }
    };
    exports.ManualViewBuilder = ManualViewBuilder;
    var MySqlViewBase = class extends view_1.View {
    };
    exports.MySqlViewBase = MySqlViewBase;
    exports.MySqlViewConfig = Symbol("MySqlViewConfig");
    var MySqlView = class extends MySqlViewBase {
      constructor({ mysqlConfig, config: config2 }) {
        super(config2);
        this[exports.MySqlViewConfig] = mysqlConfig;
      }
    };
    exports.MySqlView = MySqlView;
    function mysqlViewWithSchema(name, selection, schema) {
      if (selection) {
        return new ManualViewBuilder(name, selection, schema);
      }
      return new ViewBuilder(name, schema);
    }
    exports.mysqlViewWithSchema = mysqlViewWithSchema;
    function mysqlView(name, selection) {
      return mysqlViewWithSchema(name, selection, void 0);
    }
    exports.mysqlView = mysqlView;
  }
});

// node_modules/drizzle-orm/mysql-core/dialect.js
var require_dialect = __commonJS({
  "node_modules/drizzle-orm/mysql-core/dialect.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __asyncValues = exports && exports.__asyncValues || function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve({ value: v2, done: d });
        }, reject);
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MySqlDialect = void 0;
    var column_1 = require_column();
    var sql_1 = require_sql();
    var subquery_1 = require_subquery();
    var table_1 = require_table();
    var view_1 = require_view();
    var common_1 = require_common();
    var table_2 = require_table2();
    var view_2 = require_view2();
    var MySqlDialect = class {
      migrate(migrations, session) {
        var migrations_1, migrations_1_1;
        var e_1, _a;
        return __awaiter(this, void 0, void 0, function* () {
          const migrationTableCreate = (0, sql_1.sql)`CREATE TABLE IF NOT EXISTS \`__drizzle_migrations\` (
			id SERIAL PRIMARY KEY,
			hash text NOT NULL,
			created_at bigint
		)`;
          yield session.execute(migrationTableCreate);
          const dbMigrations = yield session.all((0, sql_1.sql)`SELECT id, hash, created_at FROM \`__drizzle_migrations\` ORDER BY created_at DESC LIMIT 1`);
          const lastDbMigration = dbMigrations[0];
          yield session.execute((0, sql_1.sql)`BEGIN`);
          try {
            try {
              for (migrations_1 = __asyncValues(migrations); migrations_1_1 = yield migrations_1.next(), !migrations_1_1.done; ) {
                const migration = migrations_1_1.value;
                if (!lastDbMigration || parseInt(lastDbMigration.created_at, 10) < migration.folderMillis) {
                  yield session.execute(sql_1.sql.raw(migration.sql));
                  yield session.execute((0, sql_1.sql)`INSERT INTO \`__drizzle_migrations\` (\`hash\`, \`created_at\`) VALUES(${migration.hash}, ${migration.folderMillis})`);
                }
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (migrations_1_1 && !migrations_1_1.done && (_a = migrations_1.return))
                  yield _a.call(migrations_1);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
            yield session.execute((0, sql_1.sql)`COMMIT`);
          } catch (e) {
            yield session.execute((0, sql_1.sql)`ROLLBACK`);
            throw e;
          }
        });
      }
      escapeName(name) {
        return `\`${name}\``;
      }
      escapeParam(num) {
        return `?`;
      }
      escapeString(str) {
        return `'${str.replace(/'/g, "''")}'`;
      }
      buildDeleteQuery({ table, where, returning }) {
        const returningSql = returning ? (0, sql_1.sql)` returning ${this.buildSelection(returning, { isSingleTable: true })}` : void 0;
        const whereSql = where ? (0, sql_1.sql)` where ${where}` : void 0;
        return (0, sql_1.sql)`delete from ${table}${whereSql}${returningSql}`;
      }
      buildUpdateSet(table, set) {
        const setEntries = Object.entries(set);
        const setSize = setEntries.length;
        return sql_1.sql.fromList(setEntries.map(([colName, value], i) => {
          const col = table[table_1.Table.Symbol.Columns][colName];
          const res = (0, sql_1.sql)`${new sql_1.Name(col.name)} = ${value}`;
          if (i < setSize - 1) {
            return [res, sql_1.sql.raw(", ")];
          }
          return [res];
        }).flat(1));
      }
      buildUpdateQuery({ table, set, where, returning }) {
        const setSql = this.buildUpdateSet(table, set);
        const returningSql = returning ? (0, sql_1.sql)` returning ${this.buildSelection(returning, { isSingleTable: true })}` : void 0;
        const whereSql = where ? (0, sql_1.sql)` where ${where}` : void 0;
        return (0, sql_1.sql)`update ${table} set ${setSql}${whereSql}${returningSql}`;
      }
      /**
       * Builds selection SQL with provided fields/expressions
       *
       * Examples:
       *
       * `select <selection> from`
       *
       * `insert ... returning <selection>`
       *
       * If `isSingleTable` is true, then columns won't be prefixed with table name
       */
      buildSelection(fields, { isSingleTable = false } = {}) {
        const columnsLen = fields.length;
        const chunks = fields.map(({ field }, i) => {
          const chunk = [];
          if (field instanceof sql_1.SQL.Aliased && field.isSelectionField) {
            chunk.push(new sql_1.Name(field.fieldAlias));
          } else if (field instanceof sql_1.SQL.Aliased || field instanceof sql_1.SQL) {
            const query = field instanceof sql_1.SQL.Aliased ? field.sql : field;
            if (isSingleTable) {
              chunk.push(new sql_1.SQL(query.queryChunks.map((c) => {
                if (c instanceof common_1.MySqlColumn) {
                  return new sql_1.Name(c.name);
                }
                return c;
              })));
            } else {
              chunk.push(query);
            }
            if (field instanceof sql_1.SQL.Aliased) {
              chunk.push((0, sql_1.sql)` as ${new sql_1.Name(field.fieldAlias)}`);
            }
          } else if (field instanceof column_1.Column) {
            if (isSingleTable) {
              chunk.push(new sql_1.Name(field.name));
            } else {
              chunk.push(field);
            }
          }
          if (i < columnsLen - 1) {
            chunk.push((0, sql_1.sql)`, `);
          }
          return chunk;
        }).flat(1);
        return sql_1.sql.fromList(chunks);
      }
      buildSelectQuery({ withList, fieldsList, where, having, table, joins, orderBy, groupBy, limit, offset, lockingClause }) {
        fieldsList.forEach((f) => {
          if (f.field instanceof column_1.Column && (0, table_1.getTableName)(f.field.table) !== (table instanceof subquery_1.Subquery ? table[subquery_1.SubqueryConfig].alias : table instanceof view_2.MySqlViewBase ? table[view_1.ViewBaseConfig].name : table instanceof sql_1.SQL ? void 0 : (0, table_1.getTableName)(table)) && !((table2) => joins.some(({ alias }) => alias === (0, table_1.getTableName)(table2)))(f.field.table)) {
            const tableName = (0, table_1.getTableName)(f.field.table);
            throw new Error(`Your "${f.path.join("->")}" field references a column "${tableName}"."${f.field.name}", but the table "${tableName}" is not part of the query! Did you forget to join it?`);
          }
        });
        const isSingleTable = joins.length === 0;
        let withSql;
        if (withList.length) {
          const withSqlChunks = [(0, sql_1.sql)`with `];
          withList.forEach((w, i) => {
            withSqlChunks.push((0, sql_1.sql)`${new sql_1.Name(w[subquery_1.SubqueryConfig].alias)} as (${w[subquery_1.SubqueryConfig].sql})`);
            if (i < withList.length - 1) {
              withSqlChunks.push((0, sql_1.sql)`, `);
            }
          });
          withSqlChunks.push((0, sql_1.sql)` `);
          withSql = sql_1.sql.fromList(withSqlChunks);
        }
        const selection = this.buildSelection(fieldsList, { isSingleTable });
        const joinsArray = [];
        joins.forEach((joinMeta, index4) => {
          if (index4 === 0) {
            joinsArray.push((0, sql_1.sql)` `);
          }
          const table2 = joinMeta.table;
          if (table2 instanceof table_2.MySqlTable) {
            const tableName = table2[table_2.MySqlTable.Symbol.Name];
            const tableSchema = table2[table_2.MySqlTable.Symbol.Schema];
            const origTableName = table2[table_2.MySqlTable.Symbol.OriginalName];
            const alias = tableName === origTableName ? void 0 : joinMeta.alias;
            joinsArray.push((0, sql_1.sql)`${sql_1.sql.raw(joinMeta.joinType)} join ${tableSchema ? (0, sql_1.sql)`${new sql_1.Name(tableSchema)}.` : void 0}${new sql_1.Name(origTableName)} ${alias && new sql_1.Name(alias)} on ${joinMeta.on}`);
          } else {
            joinsArray.push((0, sql_1.sql)`${sql_1.sql.raw(joinMeta.joinType)} join ${table2} on ${joinMeta.on}`);
          }
          if (index4 < joins.length - 1) {
            joinsArray.push((0, sql_1.sql)` `);
          }
        });
        const joinsSql = sql_1.sql.fromList(joinsArray);
        const whereSql = where ? (0, sql_1.sql)` where ${where}` : void 0;
        const havingSql = having ? (0, sql_1.sql)` having ${having}` : void 0;
        const orderByList = [];
        orderBy.forEach((orderByValue, index4) => {
          orderByList.push(orderByValue);
          if (index4 < orderBy.length - 1) {
            orderByList.push((0, sql_1.sql)`, `);
          }
        });
        const orderBySql = orderByList.length > 0 ? (0, sql_1.sql)` order by ${sql_1.sql.fromList(orderByList)}` : void 0;
        const groupByList = [];
        groupBy.forEach((groupByValue, index4) => {
          groupByList.push(groupByValue);
          if (index4 < groupBy.length - 1) {
            groupByList.push((0, sql_1.sql)`, `);
          }
        });
        const groupBySql = groupByList.length > 0 ? (0, sql_1.sql)` group by ${sql_1.sql.fromList(groupByList)}` : void 0;
        const limitSql = limit ? (0, sql_1.sql)` limit ${limit}` : void 0;
        const offsetSql = offset ? (0, sql_1.sql)` offset ${offset}` : void 0;
        let lockingClausesSql;
        if (lockingClause) {
          const { config: config2, strength } = lockingClause;
          lockingClausesSql = (0, sql_1.sql)` for ${sql_1.sql.raw(strength)}`;
          if (config2.noWait) {
            lockingClausesSql.append((0, sql_1.sql)` no wait`);
          } else if (config2.skipLocked) {
            lockingClausesSql.append((0, sql_1.sql)` skip locked`);
          }
        }
        return (0, sql_1.sql)`${withSql}select ${selection} from ${table}${joinsSql}${whereSql}${groupBySql}${havingSql}${orderBySql}${limitSql}${offsetSql}${lockingClausesSql}`;
      }
      buildInsertQuery({ table, values, onConflict, returning }) {
        const isSingleValue = values.length === 1;
        const valuesSqlList = [];
        const columns = table[table_1.Table.Symbol.Columns];
        const colEntries = isSingleValue ? Object.keys(values[0]).map((fieldName) => [fieldName, columns[fieldName]]) : Object.entries(columns);
        const insertOrder = colEntries.map(([, column]) => new sql_1.Name(column.name));
        values.forEach((value, valueIndex) => {
          const valueList = [];
          colEntries.forEach(([fieldName]) => {
            const colValue = value[fieldName];
            if (typeof colValue === "undefined") {
              valueList.push((0, sql_1.sql)`default`);
            } else {
              valueList.push(colValue);
            }
          });
          valuesSqlList.push(valueList);
          if (valueIndex < values.length - 1) {
            valuesSqlList.push((0, sql_1.sql)`, `);
          }
        });
        const valuesSql = sql_1.sql.fromList(valuesSqlList);
        const returningSql = returning ? (0, sql_1.sql)` returning ${this.buildSelection(returning, { isSingleTable: true })}` : void 0;
        const onConflictSql = onConflict ? (0, sql_1.sql)` on duplicate key ${onConflict}` : void 0;
        return (0, sql_1.sql)`insert into ${table} ${insertOrder} values ${valuesSql}${onConflictSql}`;
      }
      sqlToQuery(sql) {
        return sql.toQuery({
          escapeName: this.escapeName,
          escapeParam: this.escapeParam,
          escapeString: this.escapeString
        });
      }
    };
    exports.MySqlDialect = MySqlDialect;
  }
});

// node_modules/drizzle-orm/mysql-core/query-builders/select.js
var require_select = __commonJS({
  "node_modules/drizzle-orm/mysql-core/query-builders/select.js"(exports) {
    "use strict";
    var __rest = exports && exports.__rest || function(s2, e) {
      var t = {};
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p) && e.indexOf(p) < 0)
          t[p] = s2[p];
      if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s2); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i]))
            t[p[i]] = s2[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MySqlSelect = exports.MySqlSelectQueryBuilder = exports.MySqlSelectBuilder = void 0;
    var utils_1 = require_utils2();
    var view_1 = require_view2();
    var query_promise_1 = require_query_promise();
    var sql_1 = require_sql();
    var subquery_1 = require_subquery();
    var table_1 = require_table();
    var utils_2 = require_utils();
    var utils_3 = require_utils();
    var view_2 = require_view();
    var query_builder_1 = require_query_builder();
    var MySqlSelectBuilder = class {
      constructor(fields, session, dialect, withList = []) {
        this.fields = fields;
        this.session = session;
        this.dialect = dialect;
        this.withList = withList;
      }
      from(source) {
        const isPartialSelect = !!this.fields;
        let fields;
        if (this.fields) {
          fields = this.fields;
        } else if (source instanceof subquery_1.Subquery) {
          fields = Object.fromEntries(Object.keys(source[subquery_1.SubqueryConfig].selection).map((key2) => [key2, source[key2]]));
        } else if (source instanceof view_1.MySqlViewBase) {
          fields = source[view_2.ViewBaseConfig].selection;
        } else if (source instanceof sql_1.SQL) {
          fields = {};
        } else {
          fields = (0, utils_1.getTableColumns)(source);
        }
        const fieldsList = (0, utils_3.orderSelectedFields)(fields);
        return new MySqlSelect(source, fields, fieldsList, isPartialSelect, this.session, this.dialect, this.withList);
      }
    };
    exports.MySqlSelectBuilder = MySqlSelectBuilder;
    var MySqlSelectQueryBuilder = class extends query_builder_1.QueryBuilder {
      constructor(table, fields, fieldsList, isPartialSelect, session, dialect, withList) {
        super();
        this.isPartialSelect = isPartialSelect;
        this.session = session;
        this.dialect = dialect;
        this.leftJoin = this.createJoin("left");
        this.rightJoin = this.createJoin("right");
        this.innerJoin = this.createJoin("inner");
        this.fullJoin = this.createJoin("full");
        this.config = {
          withList,
          table,
          fields,
          fieldsList,
          joins: [],
          orderBy: [],
          groupBy: []
        };
        this.$subquerySelection = fields;
        this.tableName = table instanceof subquery_1.Subquery ? table[subquery_1.SubqueryConfig].alias : table instanceof view_1.MySqlViewBase ? table[view_2.ViewBaseConfig].name : table instanceof sql_1.SQL ? void 0 : table[table_1.Table.Symbol.Name];
        this.joinsNotNullableMap = typeof this.tableName === "string" ? { [this.tableName]: true } : {};
      }
      createJoin(joinType) {
        return (table, on) => {
          const baseTableName = this.tableName;
          const tableName = table instanceof subquery_1.Subquery ? table[subquery_1.SubqueryConfig].alias : table instanceof sql_1.SQL ? void 0 : table[table_1.Table.Symbol.Name];
          if (typeof tableName === "string" && this.config.joins.some((join) => join.alias === tableName)) {
            throw new Error(`Alias "${tableName}" is already used in this query`);
          }
          if (!this.isPartialSelect) {
            if (Object.keys(this.joinsNotNullableMap).length === 1 && typeof baseTableName === "string") {
              this.config.fieldsList = this.config.fieldsList.map((field) => Object.assign(Object.assign({}, field), { path: [baseTableName, ...field.path] }));
            }
            if (typeof tableName === "string" && !(table instanceof sql_1.SQL)) {
              this.config.fieldsList.push(...(0, utils_3.orderSelectedFields)(table instanceof subquery_1.Subquery ? table[subquery_1.SubqueryConfig].selection : table[table_1.Table.Symbol.Columns], [tableName]));
            }
          }
          if (typeof on === "function") {
            on = on(new Proxy(this.config.fields, new subquery_1.SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })));
          }
          this.config.joins.push({ on, table, joinType, alias: tableName });
          if (typeof tableName === "string") {
            switch (joinType) {
              case "left":
                this.joinsNotNullableMap[tableName] = false;
                break;
              case "right":
                this.joinsNotNullableMap = Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([key2]) => [key2, false]));
                this.joinsNotNullableMap[tableName] = true;
                break;
              case "inner":
                this.joinsNotNullableMap[tableName] = true;
                break;
              case "full":
                this.joinsNotNullableMap = Object.fromEntries(Object.entries(this.joinsNotNullableMap).map(([key2]) => [key2, false]));
                this.joinsNotNullableMap[tableName] = false;
                break;
            }
          }
          return this;
        };
      }
      where(where) {
        if (typeof where === "function") {
          where = where(new Proxy(this.config.fields, new subquery_1.SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })));
        }
        this.config.where = where;
        return this;
      }
      having(having) {
        if (typeof having === "function") {
          having = having(new Proxy(this.config.fields, new subquery_1.SelectionProxyHandler({ sqlAliasedBehavior: "sql", sqlBehavior: "sql" })));
        }
        this.config.having = having;
        return this;
      }
      groupBy(...columns) {
        if (typeof columns[0] === "function") {
          const groupBy = columns[0](new Proxy(this.config.fields, new subquery_1.SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })));
          this.config.groupBy = Array.isArray(groupBy) ? groupBy : [groupBy];
        } else {
          this.config.groupBy = columns;
        }
        return this;
      }
      orderBy(...columns) {
        if (typeof columns[0] === "function") {
          const orderBy = columns[0](new Proxy(this.config.fields, new subquery_1.SelectionProxyHandler({ sqlAliasedBehavior: "alias", sqlBehavior: "sql" })));
          this.config.orderBy = Array.isArray(orderBy) ? orderBy : [orderBy];
        } else {
          this.config.orderBy = columns;
        }
        return this;
      }
      limit(limit) {
        this.config.limit = limit;
        return this;
      }
      offset(offset) {
        this.config.offset = offset;
        return this;
      }
      for(strength, config2 = {}) {
        this.config.lockingClause = { strength, config: config2 };
        return this;
      }
      /** @internal */
      getSQL() {
        return this.dialect.buildSelectQuery(this.config);
      }
      toSQL() {
        const _a = this.dialect.sqlToQuery(this.getSQL()), { typings } = _a, rest = __rest(_a, ["typings"]);
        return rest;
      }
      as(alias) {
        return new Proxy(new subquery_1.Subquery(this.getSQL(), this.config.fields, alias), new subquery_1.SelectionProxyHandler({ alias, sqlAliasedBehavior: "subquery_selection", sqlBehavior: "error" }));
      }
    };
    exports.MySqlSelectQueryBuilder = MySqlSelectQueryBuilder;
    var MySqlSelect = class extends MySqlSelectQueryBuilder {
      constructor() {
        super(...arguments);
        this.execute = (placeholderValues) => {
          return this._prepare().execute(placeholderValues);
        };
      }
      _prepare(name) {
        if (!this.session) {
          throw new Error("Cannot execute a query on a query builder. Please use a database instance instead.");
        }
        const query = this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.fieldsList, name);
        query.joinsNotNullableMap = this.joinsNotNullableMap;
        return query;
      }
      prepare(name) {
        return this._prepare(name);
      }
    };
    exports.MySqlSelect = MySqlSelect;
    (0, utils_2.applyMixins)(MySqlSelect, [query_promise_1.QueryPromise]);
  }
});

// node_modules/drizzle-orm/mysql-core/query-builders/query-builder.js
var require_query_builder = __commonJS({
  "node_modules/drizzle-orm/mysql-core/query-builders/query-builder.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.queryBuilder = exports.QueryBuilder = exports.QueryBuilderInstance = void 0;
    var dialect_1 = require_dialect();
    var subquery_1 = require_subquery();
    var QueryBuilderInstance = class {
      constructor() {
        this.dialect = new dialect_1.MySqlDialect();
        this.MySqlSelectBuilder = require_select().MySqlSelectBuilder;
      }
      $with(alias) {
        const queryBuilder = this;
        return {
          as(qb) {
            if (typeof qb === "function") {
              qb = qb(queryBuilder);
            }
            return new Proxy(new subquery_1.WithSubquery(qb.getSQL(), qb.getSelection(), alias, true), new subquery_1.SelectionProxyHandler({ alias, sqlAliasedBehavior: "alias", sqlBehavior: "error" }));
          }
        };
      }
      with(...queries) {
        const self = this;
        function select(fields) {
          return new self.MySqlSelectBuilder(fields !== null && fields !== void 0 ? fields : void 0, void 0, self.dialect, queries);
        }
        return { select };
      }
      select(fields) {
        return new this.MySqlSelectBuilder(fields !== null && fields !== void 0 ? fields : void 0, void 0, this.dialect);
      }
    };
    exports.QueryBuilderInstance = QueryBuilderInstance;
    var QueryBuilder = class {
      /** @internal */
      getSelection() {
        return this.$subquerySelection;
      }
    };
    exports.QueryBuilder = QueryBuilder;
    exports.queryBuilder = new QueryBuilderInstance();
  }
});

// node_modules/drizzle-orm/mysql-core/query-builders/update.js
var require_update = __commonJS({
  "node_modules/drizzle-orm/mysql-core/query-builders/update.js"(exports) {
    "use strict";
    var __rest = exports && exports.__rest || function(s2, e) {
      var t = {};
      for (var p in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p) && e.indexOf(p) < 0)
          t[p] = s2[p];
      if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s2); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p[i]))
            t[p[i]] = s2[p[i]];
        }
      return t;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MySqlUpdate = exports.MySqlUpdateBuilder = void 0;
    var query_promise_1 = require_query_promise();
    var utils_1 = require_utils();
    var MySqlUpdateBuilder = class {
      constructor(table, session, dialect) {
        this.table = table;
        this.session = session;
        this.dialect = dialect;
      }
      set(values) {
        return new MySqlUpdate(this.table, (0, utils_1.mapUpdateSet)(this.table, values), this.session, this.dialect);
      }
    };
    exports.MySqlUpdateBuilder = MySqlUpdateBuilder;
    var MySqlUpdate = class extends query_promise_1.QueryPromise {
      constructor(table, set, session, dialect) {
        super();
        this.session = session;
        this.dialect = dialect;
        this.execute = (placeholderValues) => {
          return this._prepare().execute(placeholderValues);
        };
        this.config = { set, table };
      }
      where(where) {
        this.config.where = where;
        return this;
      }
      // returning(): Omit<MySqlUpdate<TTable, InferModel<TTable>>, 'where' | 'returning'>;
      // returning<TSelectedFields extends SelectFields>(
      // 	fields: TSelectedFields,
      // ): Omit<MySqlUpdate<TTable, SelectResultFields<TSelectedFields>>, 'where' | 'returning'>;
      // returning(
      // 	fields: SelectFields = this.config.table[MySqlTable.Symbol.Columns],
      // ): Omit<MySqlUpdate<TTable, any>, 'where' | 'returning'> {
      // 	this.config.returning = orderSelectedFields(fields);
      // 	return this;
      // }
      /** @internal */
      getSQL() {
        return this.dialect.buildUpdateQuery(this.config);
      }
      toSQL() {
        const _a = this.dialect.sqlToQuery(this.getSQL()), { typings } = _a, rest = __rest(_a, ["typings"]);
        return rest;
      }
      _prepare(name) {
        return this.session.prepareQuery(this.dialect.sqlToQuery(this.getSQL()), this.config.returning, name);
      }
      prepare(name) {
        return this._prepare(name);
      }
    };
    exports.MySqlUpdate = MySqlUpdate;
  }
});

// node_modules/drizzle-orm/mysql-core/query-builders/index.js
var require_query_builders = __commonJS({
  "node_modules/drizzle-orm/mysql-core/query-builders/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_delete(), exports);
    __exportStar(require_insert(), exports);
    __exportStar(require_query_builder(), exports);
    __exportStar(require_select(), exports);
    __exportStar(require_update(), exports);
  }
});

// node_modules/drizzle-orm/mysql-core/db.js
var require_db = __commonJS({
  "node_modules/drizzle-orm/mysql-core/db.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MySqlDatabase = void 0;
    var subquery_1 = require_subquery();
    var query_builders_1 = require_query_builders();
    var MySqlDatabase = class {
      constructor(dialect, session) {
        this.dialect = dialect;
        this.session = session;
      }
      $with(alias) {
        return {
          as(qb) {
            if (typeof qb === "function") {
              qb = qb(query_builders_1.queryBuilder);
            }
            return new Proxy(new subquery_1.WithSubquery(qb.getSQL(), qb.getSelection(), alias, true), new subquery_1.SelectionProxyHandler({ alias, sqlAliasedBehavior: "subquery_selection", sqlBehavior: "error" }));
          }
        };
      }
      with(...queries) {
        const self = this;
        function select(fields) {
          return new query_builders_1.MySqlSelectBuilder(fields !== null && fields !== void 0 ? fields : void 0, self.session, self.dialect, queries);
        }
        return { select };
      }
      select(fields) {
        return new query_builders_1.MySqlSelectBuilder(fields !== null && fields !== void 0 ? fields : void 0, this.session, this.dialect);
      }
      update(table) {
        return new query_builders_1.MySqlUpdateBuilder(table, this.session, this.dialect);
      }
      insert(table) {
        return new query_builders_1.MySqlInsertBuilder(table, this.session, this.dialect);
      }
      delete(table) {
        return new query_builders_1.MySqlDelete(table, this.session, this.dialect);
      }
      execute(query) {
        return this.session.execute(query.getSQL());
      }
    };
    exports.MySqlDatabase = MySqlDatabase;
  }
});

// node_modules/drizzle-orm/mysql-core/session.js
var require_session = __commonJS({
  "node_modules/drizzle-orm/mysql-core/session.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MySqlSession = exports.PreparedQuery = void 0;
    var PreparedQuery = class {
    };
    exports.PreparedQuery = PreparedQuery;
    var MySqlSession = class {
      constructor(dialect) {
        this.dialect = dialect;
      }
      execute(query) {
        return this.prepareQuery(this.dialect.sqlToQuery(query), void 0, void 0).execute();
      }
      all(query) {
        return this.prepareQuery(this.dialect.sqlToQuery(query), void 0, void 0).all();
      }
    };
    exports.MySqlSession = MySqlSession;
  }
});

// node_modules/drizzle-orm/planetscale-serverless/session.js
var require_session2 = __commonJS({
  "node_modules/drizzle-orm/planetscale-serverless/session.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PlanetscaleSession = exports.PlanetScalePreparedQuery = void 0;
    var logger_1 = require_logger();
    var session_1 = require_session();
    var sql_1 = require_sql();
    var utils_1 = require_utils();
    var PlanetScalePreparedQuery = class extends session_1.PreparedQuery {
      constructor(client, queryString, params, logger, fields, name) {
        super();
        this.client = client;
        this.queryString = queryString;
        this.params = params;
        this.logger = logger;
        this.fields = fields;
        this.rawQuery = { as: "object" };
        this.query = { as: "array" };
      }
      execute(placeholderValues = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          const params = (0, sql_1.fillPlaceholders)(this.params, placeholderValues);
          this.logger.logQuery(this.queryString, params);
          const { fields } = this;
          if (!fields) {
            return this.client.execute(this.queryString, params, this.rawQuery);
          }
          const result = this.client.execute(this.queryString, params, this.query);
          return result.then((eQuery) => eQuery.rows.map((row) => (0, utils_1.mapResultRow)(fields, row, this.joinsNotNullableMap)));
        });
      }
      all(placeholderValues = {}) {
        return __awaiter(this, void 0, void 0, function* () {
          const params = (0, sql_1.fillPlaceholders)(this.params, placeholderValues);
          this.logger.logQuery(this.queryString, params);
          return this.client.execute(this.queryString, params, this.rawQuery).then((eQuery) => eQuery.rows);
        });
      }
    };
    exports.PlanetScalePreparedQuery = PlanetScalePreparedQuery;
    var PlanetscaleSession = class extends session_1.MySqlSession {
      constructor(client, dialect, options2 = {}) {
        var _a;
        super(dialect);
        this.client = client;
        this.logger = (_a = options2.logger) !== null && _a !== void 0 ? _a : new logger_1.NoopLogger();
      }
      prepareQuery(query, fields, name) {
        return new PlanetScalePreparedQuery(this.client, query.sql, query.params, this.logger, fields, name);
      }
      query(query, params) {
        return __awaiter(this, void 0, void 0, function* () {
          this.logger.logQuery(query, params);
          return yield this.client.execute(query, params, { as: "array" });
        });
      }
      transaction(queries) {
        return __awaiter(this, void 0, void 0, function* () {
          yield this.client.transaction((tx) => __awaiter(this, void 0, void 0, function* () {
            for (const query of queries) {
              yield tx.execute(query.sql, query.params);
            }
          }));
        });
      }
      queryObjects(query, params) {
        return __awaiter(this, void 0, void 0, function* () {
          return this.client.execute(query, params, { as: "object" });
        });
      }
    };
    exports.PlanetscaleSession = PlanetscaleSession;
  }
});

// node_modules/drizzle-orm/planetscale-serverless/driver.js
var require_driver = __commonJS({
  "node_modules/drizzle-orm/planetscale-serverless/driver.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.drizzle = exports.PlanetscaleDriver = void 0;
    var logger_1 = require_logger();
    var db_1 = require_db();
    var dialect_1 = require_dialect();
    var session_1 = require_session2();
    var PlanetscaleDriver = class {
      constructor(client, dialect, options2 = {}) {
        this.client = client;
        this.dialect = dialect;
        this.options = options2;
      }
      createSession() {
        return new session_1.PlanetscaleSession(this.client, this.dialect, { logger: this.options.logger });
      }
    };
    exports.PlanetscaleDriver = PlanetscaleDriver;
    function drizzle2(client, config2 = {}) {
      const dialect = new dialect_1.MySqlDialect();
      let logger;
      if (config2.logger === true) {
        logger = new logger_1.DefaultLogger();
      } else if (config2.logger !== false) {
        logger = config2.logger;
      }
      const driver = new PlanetscaleDriver(client, dialect, { logger });
      const session = driver.createSession();
      return new db_1.MySqlDatabase(dialect, session);
    }
    exports.drizzle = drizzle2;
  }
});

// node_modules/drizzle-orm/planetscale-serverless/index.js
var require_planetscale_serverless = __commonJS({
  "node_modules/drizzle-orm/planetscale-serverless/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_driver(), exports);
    __exportStar(require_session2(), exports);
  }
});

// node_modules/@planetscale/database/dist/sanitization.js
function format(query, values) {
  return Array.isArray(values) ? replacePosition(query, values) : replaceNamed(query, values);
}
function replacePosition(query, values) {
  let index4 = 0;
  return query.replace(/\?/g, (match) => {
    return index4 < values.length ? sanitize(values[index4++]) : match;
  });
}
function replaceNamed(query, values) {
  return query.replace(/:(\w+)/g, (match, name) => {
    return hasOwn(values, name) ? sanitize(values[name]) : match;
  });
}
function hasOwn(obj, name) {
  return Object.prototype.hasOwnProperty.call(obj, name);
}
function sanitize(value) {
  if (value == null) {
    return "null";
  }
  if (typeof value === "number") {
    return String(value);
  }
  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }
  if (typeof value === "string") {
    return quote(value);
  }
  if (Array.isArray(value)) {
    return value.map(sanitize).join(", ");
  }
  if (value instanceof Date) {
    return quote(value.toISOString().replace("Z", ""));
  }
  return quote(value.toString());
}
function quote(text3) {
  return `'${escape2(text3)}'`;
}
function escape2(text3) {
  return text3.replace(re, replacement);
}
function replacement(text3) {
  switch (text3) {
    case '"':
      return '\\"';
    case "'":
      return "\\'";
    case "\n":
      return "\\n";
    case "\r":
      return "\\r";
    case "	":
      return "\\t";
    case "\\":
      return "\\\\";
    case "\0":
      return "\\0";
    case "\b":
      return "\\b";
    case "":
      return "\\Z";
    default:
      return "";
  }
}
var re;
var init_sanitization = __esm({
  "node_modules/@planetscale/database/dist/sanitization.js"() {
    re = /[\0\b\n\r\t\x1a\\"']/g;
  }
});

// node_modules/@planetscale/database/dist/text.js
function decode(text3) {
  return text3 ? decoder.decode(Uint8Array.from(bytes(text3))) : "";
}
function bytes(text3) {
  return text3.split("").map((c) => c.charCodeAt(0));
}
var decoder;
var init_text = __esm({
  "node_modules/@planetscale/database/dist/text.js"() {
    decoder = new TextDecoder("utf-8");
  }
});

// node_modules/@planetscale/database/dist/version.js
var Version;
var init_version = __esm({
  "node_modules/@planetscale/database/dist/version.js"() {
    Version = "1.6.0";
  }
});

// node_modules/@planetscale/database/dist/index.js
async function postJSON(config2, url, body = {}) {
  const auth = btoa(`${config2.username}:${config2.password}`);
  const { fetch: fetch2 } = config2;
  const response = await fetch2(url.toString(), {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      "User-Agent": `database-js/${Version}`,
      Authorization: `Basic ${auth}`
    }
  });
  if (response.ok) {
    return await response.json();
  } else {
    let error2 = null;
    try {
      const e = (await response.json()).error;
      error2 = new DatabaseError(e.message, response.status, e);
    } catch {
      error2 = new DatabaseError(response.statusText, response.status, {
        code: "internal",
        message: response.statusText
      });
    }
    throw error2;
  }
}
function connect(config2) {
  return new Connection(config2);
}
function parseArrayRow(fields, rawRow, cast2) {
  const row = decodeRow(rawRow);
  return fields.map((field, ix) => {
    return cast2(field, row[ix]);
  });
}
function parseObjectRow(fields, rawRow, cast2) {
  const row = decodeRow(rawRow);
  return fields.reduce((acc, field, ix) => {
    acc[field.name] = cast2(field, row[ix]);
    return acc;
  }, {});
}
function parse3(result, cast2, returnAs) {
  const fields = result.fields;
  const rows = result.rows ?? [];
  return rows.map((row) => returnAs === "array" ? parseArrayRow(fields, row, cast2) : parseObjectRow(fields, row, cast2));
}
function decodeRow(row) {
  const values = row.values ? atob(row.values) : "";
  let offset = 0;
  return row.lengths.map((size) => {
    const width = parseInt(size, 10);
    if (width < 0)
      return null;
    const splice = values.substring(offset, offset + width);
    offset += width;
    return splice;
  });
}
function cast(field, value) {
  if (value === "" || value == null) {
    return value;
  }
  switch (field.type) {
    case "INT8":
    case "INT16":
    case "INT24":
    case "INT32":
    case "UINT8":
    case "UINT16":
    case "UINT24":
    case "UINT32":
    case "YEAR":
      return parseInt(value, 10);
    case "FLOAT32":
    case "FLOAT64":
      return parseFloat(value);
    case "DECIMAL":
    case "INT64":
    case "UINT64":
    case "DATE":
    case "TIME":
    case "DATETIME":
    case "TIMESTAMP":
    case "BLOB":
    case "BIT":
    case "VARBINARY":
    case "BINARY":
      return value;
    case "JSON":
      return JSON.parse(decode(value));
    default:
      return decode(value);
  }
}
var DatabaseError, defaultExecuteOptions, Tx, Connection;
var init_dist = __esm({
  "node_modules/@planetscale/database/dist/index.js"() {
    init_sanitization();
    init_sanitization();
    init_text();
    init_text();
    init_version();
    DatabaseError = class extends Error {
      constructor(message, status, body) {
        super(message);
        this.status = status;
        this.name = "DatabaseError";
        this.body = body;
      }
    };
    defaultExecuteOptions = {
      as: "object"
    };
    Tx = class {
      constructor(conn) {
        this.conn = conn;
      }
      async execute(query, args = null, options2 = defaultExecuteOptions) {
        return this.conn.execute(query, args, options2);
      }
    };
    Connection = class {
      constructor(config2) {
        var _a;
        this.session = null;
        this.config = { ...config2 };
        if (typeof fetch !== "undefined") {
          (_a = this.config).fetch || (_a.fetch = fetch);
        }
        if (config2.url) {
          const url = new URL(config2.url);
          this.config.username = url.username;
          this.config.password = url.password;
          this.config.host = url.hostname;
        }
      }
      async transaction(fn) {
        const conn = new Connection(this.config);
        const tx = new Tx(conn);
        try {
          await tx.execute("BEGIN");
          const res = await fn(tx);
          await tx.execute("COMMIT");
          return res;
        } catch (err) {
          await tx.execute("ROLLBACK");
          throw err;
        }
      }
      async refresh() {
        await this.createSession();
      }
      async execute(query, args = null, options2 = defaultExecuteOptions) {
        const url = new URL("/psdb.v1alpha1.Database/Execute", `https://${this.config.host}`);
        const formatter = this.config.format || format;
        const sql = args ? formatter(query, args) : query;
        const saved = await postJSON(this.config, url, { query: sql, session: this.session });
        const { result, session, error: error2, timing } = saved;
        if (error2) {
          throw new DatabaseError(error2.message, 400, error2);
        }
        const rowsAffected = result?.rowsAffected ? parseInt(result.rowsAffected, 10) : 0;
        const insertId = result?.insertId ?? "0";
        this.session = session;
        const fields = result?.fields ?? [];
        for (const field of fields) {
          field.type || (field.type = "NULL");
        }
        const castFn = options2.cast || this.config.cast || cast;
        const rows = result ? parse3(result, castFn, options2.as || "object") : [];
        const headers = fields.map((f) => f.name);
        const typeByName = (acc, { name, type }) => ({ ...acc, [name]: type });
        const types = fields.reduce(typeByName, {});
        const timingSeconds = timing ?? 0;
        return {
          headers,
          types,
          fields,
          rows,
          rowsAffected,
          insertId,
          size: rows.length,
          statement: sql,
          time: timingSeconds * 1e3
        };
      }
      async createSession() {
        const url = new URL("/psdb.v1alpha1.Database/CreateSession", `https://${this.config.host}`);
        const { session } = await postJSON(this.config, url);
        this.session = session;
        return session;
      }
    };
  }
});

// node_modules/drizzle-orm/mysql-core/alias.js
var require_alias2 = __commonJS({
  "node_modules/drizzle-orm/mysql-core/alias.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.alias = void 0;
    var alias_1 = require_alias();
    function alias(table, alias2) {
      return new Proxy(table, new alias_1.TableAliasProxyHandler(alias2));
    }
    exports.alias = alias;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/bigint.js
var require_bigint = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/bigint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bigint = exports.MySqlBigInt64 = exports.MySqlBigInt64Builder = exports.MySqlBigInt53 = exports.MySqlBigInt53Builder = void 0;
    var common_1 = require_common();
    var MySqlBigInt53Builder = class extends common_1.MySqlColumnBuilderWithAutoIncrement {
      /** @internal */
      build(table) {
        return new MySqlBigInt53(table, this.config);
      }
    };
    exports.MySqlBigInt53Builder = MySqlBigInt53Builder;
    var MySqlBigInt53 = class extends common_1.MySqlColumnWithAutoIncrement {
      getSQLType() {
        return "bigint";
      }
      mapFromDriverValue(value) {
        if (typeof value === "number") {
          return value;
        }
        return parseInt(value);
      }
    };
    exports.MySqlBigInt53 = MySqlBigInt53;
    var MySqlBigInt64Builder = class extends common_1.MySqlColumnBuilderWithAutoIncrement {
      /** @internal */
      build(table) {
        return new MySqlBigInt64(table, this.config);
      }
    };
    exports.MySqlBigInt64Builder = MySqlBigInt64Builder;
    var MySqlBigInt64 = class extends common_1.MySqlColumnWithAutoIncrement {
      getSQLType() {
        return "bigint";
      }
      mapFromDriverValue(value) {
        return BigInt(value);
      }
    };
    exports.MySqlBigInt64 = MySqlBigInt64;
    function bigint(name, config2) {
      if (config2.mode === "number") {
        return new MySqlBigInt53Builder(name);
      }
      return new MySqlBigInt64Builder(name);
    }
    exports.bigint = bigint;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/binary.js
var require_binary = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/binary.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.binary = exports.MySqlBinary = exports.MySqlBinaryBuilder = void 0;
    var common_1 = require_common();
    var MySqlBinaryBuilder = class extends common_1.MySqlColumnBuilder {
      constructor(name, length) {
        super(name);
        this.config.length = length;
      }
      /** @internal */
      build(table) {
        return new MySqlBinary(table, this.config);
      }
    };
    exports.MySqlBinaryBuilder = MySqlBinaryBuilder;
    var MySqlBinary = class extends common_1.MySqlColumn {
      constructor(table, config2) {
        super(table, config2);
        this.length = config2.length;
      }
      getSQLType() {
        return typeof this.length !== "undefined" ? `binary(${this.length})` : `binary`;
      }
    };
    exports.MySqlBinary = MySqlBinary;
    function binary(name, config2 = {}) {
      return new MySqlBinaryBuilder(name, config2.length);
    }
    exports.binary = binary;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/char.js
var require_char = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/char.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.char = exports.MySqlChar = exports.MySqlCharBuilder = void 0;
    var common_1 = require_common();
    var MySqlCharBuilder = class extends common_1.MySqlColumnBuilder {
      constructor(name, length) {
        super(name);
        this.config.length = length;
      }
      /** @internal */
      build(table) {
        return new MySqlChar(table, this.config);
      }
    };
    exports.MySqlCharBuilder = MySqlCharBuilder;
    var MySqlChar = class extends common_1.MySqlColumn {
      constructor(table, config2) {
        super(table, config2);
        this.length = config2.length;
      }
      getSQLType() {
        return typeof this.length !== "undefined" ? `char(${this.length})` : `char`;
      }
    };
    exports.MySqlChar = MySqlChar;
    function char(name, config2 = {}) {
      return new MySqlCharBuilder(name, config2.length);
    }
    exports.char = char;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/boolean.js
var require_boolean = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/boolean.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.boolean = exports.MySqlBoolean = exports.MySqlBooleanBuilder = void 0;
    var common_1 = require_common();
    var MySqlBooleanBuilder = class extends common_1.MySqlColumnBuilder {
      /** @internal */
      build(table) {
        return new MySqlBoolean(table, this.config);
      }
    };
    exports.MySqlBooleanBuilder = MySqlBooleanBuilder;
    var MySqlBoolean = class extends common_1.MySqlColumn {
      getSQLType() {
        return "boolean";
      }
      mapFromDriverValue(value) {
        if (typeof value === "boolean") {
          return value;
        }
        return value === 1;
      }
    };
    exports.MySqlBoolean = MySqlBoolean;
    function boolean(name) {
      return new MySqlBooleanBuilder(name);
    }
    exports.boolean = boolean;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/decimal.js
var require_decimal = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/decimal.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decimal = exports.MySqlDecimal = exports.MySqlDecimalBuilder = void 0;
    var common_1 = require_common();
    var MySqlDecimalBuilder = class extends common_1.MySqlColumnBuilderWithAutoIncrement {
      constructor(name, precision, scale) {
        super(name);
        this.config.precision = precision;
        this.config.scale = scale;
      }
      /** @internal */
      build(table) {
        return new MySqlDecimal(table, this.config);
      }
    };
    exports.MySqlDecimalBuilder = MySqlDecimalBuilder;
    var MySqlDecimal = class extends common_1.MySqlColumnWithAutoIncrement {
      constructor(table, config2) {
        super(table, config2);
        this.precision = config2.precision;
        this.scale = config2.scale;
      }
      getSQLType() {
        if (typeof this.precision !== "undefined" && typeof this.scale !== "undefined") {
          return `decimal(${this.precision},${this.scale})`;
        } else if (typeof this.precision === "undefined") {
          return "decimal";
        } else {
          return `decimal(${this.precision})`;
        }
      }
    };
    exports.MySqlDecimal = MySqlDecimal;
    function decimal(name, config2 = {}) {
      return new MySqlDecimalBuilder(name, config2.precision, config2.scale);
    }
    exports.decimal = decimal;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/double.js
var require_double = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/double.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.double = exports.MySqlDouble = exports.MySqlDoubleBuilder = void 0;
    var common_1 = require_common();
    var MySqlDoubleBuilder = class extends common_1.MySqlColumnBuilderWithAutoIncrement {
      constructor(name, precision, scale) {
        super(name);
        this.config.precision = precision;
        this.config.scale = scale;
      }
      /** @internal */
      build(table) {
        return new MySqlDouble(table, this.config);
      }
    };
    exports.MySqlDoubleBuilder = MySqlDoubleBuilder;
    var MySqlDouble = class extends common_1.MySqlColumnWithAutoIncrement {
      constructor(table, config2) {
        super(table, config2);
        this.precision = config2.precision;
        this.scale = config2.scale;
      }
      getSQLType() {
        if (typeof this.precision !== "undefined" && typeof this.scale !== "undefined") {
          return `double(${this.precision},${this.scale})`;
        } else if (typeof this.precision === "undefined") {
          return "double";
        } else {
          return `double(${this.precision})`;
        }
      }
    };
    exports.MySqlDouble = MySqlDouble;
    function double(name, config2) {
      return new MySqlDoubleBuilder(name, config2 === null || config2 === void 0 ? void 0 : config2.precision, config2 === null || config2 === void 0 ? void 0 : config2.scale);
    }
    exports.double = double;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/enum.js
var require_enum = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/enum.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mysqlEnum = exports.MySqlEnumColumn = exports.MySqlEnumColumnBuilder = void 0;
    var common_1 = require_common();
    var MySqlEnumColumnBuilder = class extends common_1.MySqlColumnBuilder {
      constructor(name, values) {
        super(name);
        this.config.values = values;
      }
      /** @internal */
      build(table) {
        return new MySqlEnumColumn(table, this.config);
      }
    };
    exports.MySqlEnumColumnBuilder = MySqlEnumColumnBuilder;
    var MySqlEnumColumn = class extends common_1.MySqlColumn {
      constructor(table, config2) {
        super(table, config2);
        this.values = config2.values;
      }
      getSQLType() {
        return `enum(${this.values.map((value) => `'${value}'`).join(",")})`;
      }
    };
    exports.MySqlEnumColumn = MySqlEnumColumn;
    function mysqlEnum(name, values) {
      if (values.length === 0)
        throw Error(`You have an empty array for "${name}" enum values`);
      return new MySqlEnumColumnBuilder(name, values);
    }
    exports.mysqlEnum = mysqlEnum;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/float.js
var require_float = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/float.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.float = exports.MySqlFloat = exports.MySqlFloatBuilder = void 0;
    var common_1 = require_common();
    var MySqlFloatBuilder = class extends common_1.MySqlColumnBuilderWithAutoIncrement {
      constructor(name, precision, scale) {
        super(name);
        this.config.precision = precision;
        this.config.scale = scale;
      }
      /** @internal */
      build(table) {
        return new MySqlFloat(table, this.config);
      }
    };
    exports.MySqlFloatBuilder = MySqlFloatBuilder;
    var MySqlFloat = class extends common_1.MySqlColumnWithAutoIncrement {
      constructor(table, config2) {
        super(table, config2);
        this.precision = config2.precision;
        this.scale = config2.scale;
      }
      getSQLType() {
        return "float";
      }
    };
    exports.MySqlFloat = MySqlFloat;
    function float(name) {
      return new MySqlFloatBuilder(name);
    }
    exports.float = float;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/int.js
var require_int = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/int.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.int = exports.MySqlInteger = exports.MySqlIntegerBuilder = void 0;
    var common_1 = require_common();
    var MySqlIntegerBuilder = class extends common_1.MySqlColumnBuilderWithAutoIncrement {
      /** @internal */
      build(table) {
        return new MySqlInteger(table, this.config);
      }
    };
    exports.MySqlIntegerBuilder = MySqlIntegerBuilder;
    var MySqlInteger = class extends common_1.MySqlColumnWithAutoIncrement {
      getSQLType() {
        return "int";
      }
      mapFromDriverValue(value) {
        if (typeof value === "string") {
          return parseInt(value);
        }
        return value;
      }
    };
    exports.MySqlInteger = MySqlInteger;
    function int(name) {
      return new MySqlIntegerBuilder(name);
    }
    exports.int = int;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/json.js
var require_json = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/json.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.json = exports.MySqlJson = exports.MySqlJsonBuilder = void 0;
    var common_1 = require_common();
    var MySqlJsonBuilder = class extends common_1.MySqlColumnBuilder {
      constructor(name) {
        super(name);
      }
      /** @internal */
      build(table) {
        return new MySqlJson(table, this.config);
      }
    };
    exports.MySqlJsonBuilder = MySqlJsonBuilder;
    var MySqlJson = class extends common_1.MySqlColumn {
      getSQLType() {
        return "json";
      }
      mapToDriverValue(value) {
        return JSON.stringify(value);
      }
    };
    exports.MySqlJson = MySqlJson;
    function json2(name) {
      return new MySqlJsonBuilder(name);
    }
    exports.json = json2;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/mediumint.js
var require_mediumint = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/mediumint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mediumint = exports.MySqlMediumInt = exports.MySqlMediumIntBuilder = void 0;
    var common_1 = require_common();
    var MySqlMediumIntBuilder = class extends common_1.MySqlColumnBuilderWithAutoIncrement {
      /** @internal */
      build(table) {
        return new MySqlMediumInt(table, this.config);
      }
    };
    exports.MySqlMediumIntBuilder = MySqlMediumIntBuilder;
    var MySqlMediumInt = class extends common_1.MySqlColumnWithAutoIncrement {
      getSQLType() {
        return "mediumint";
      }
      mapFromDriverValue(value) {
        if (typeof value === "string") {
          return parseInt(value);
        }
        return value;
      }
    };
    exports.MySqlMediumInt = MySqlMediumInt;
    function mediumint(name) {
      return new MySqlMediumIntBuilder(name);
    }
    exports.mediumint = mediumint;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/real.js
var require_real = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/real.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.real = exports.MySqlReal = exports.MySqlRealBuilder = void 0;
    var common_1 = require_common();
    var MySqlRealBuilder = class extends common_1.MySqlColumnBuilderWithAutoIncrement {
      constructor(name, precision, scale) {
        super(name);
        this.config.precision = precision;
        this.config.scale = scale;
      }
      /** @internal */
      build(table) {
        return new MySqlReal(table, this.config);
      }
    };
    exports.MySqlRealBuilder = MySqlRealBuilder;
    var MySqlReal = class extends common_1.MySqlColumnWithAutoIncrement {
      constructor(table, config2) {
        super(table, config2);
        this.precision = config2.precision;
        this.scale = config2.scale;
      }
      getSQLType() {
        if (typeof this.precision !== "undefined" && typeof this.scale !== "undefined") {
          return `real(${this.precision}, ${this.scale})`;
        } else if (typeof this.precision === "undefined") {
          return "real";
        } else {
          return `real(${this.precision})`;
        }
      }
    };
    exports.MySqlReal = MySqlReal;
    function real(name, config2 = {}) {
      return new MySqlRealBuilder(name, config2.precision, config2.scale);
    }
    exports.real = real;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/serial.js
var require_serial = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/serial.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.serial = exports.MySqlSerial = exports.MySqlSerialBuilder = void 0;
    var common_1 = require_common();
    var MySqlSerialBuilder = class extends common_1.MySqlColumnBuilderWithAutoIncrement {
      constructor(name) {
        super(name);
        this.config.hasDefault = true;
        this.config.autoIncrement = true;
      }
      /** @internal */
      build(table) {
        return new MySqlSerial(table, this.config);
      }
    };
    exports.MySqlSerialBuilder = MySqlSerialBuilder;
    var MySqlSerial = class extends common_1.MySqlColumnWithAutoIncrement {
      getSQLType() {
        return "serial";
      }
      mapFromDriverValue(value) {
        if (typeof value === "string") {
          return parseInt(value);
        }
        return value;
      }
    };
    exports.MySqlSerial = MySqlSerial;
    function serial2(name) {
      return new MySqlSerialBuilder(name);
    }
    exports.serial = serial2;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/smallint.js
var require_smallint = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/smallint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.smallint = exports.MySqlSmallInt = exports.MySqlSmallIntBuilder = void 0;
    var common_1 = require_common();
    var MySqlSmallIntBuilder = class extends common_1.MySqlColumnBuilderWithAutoIncrement {
      /** @internal */
      build(table) {
        return new MySqlSmallInt(table, this.config);
      }
    };
    exports.MySqlSmallIntBuilder = MySqlSmallIntBuilder;
    var MySqlSmallInt = class extends common_1.MySqlColumnWithAutoIncrement {
      getSQLType() {
        return "smallint";
      }
      mapFromDriverValue(value) {
        if (typeof value === "string") {
          return parseInt(value);
        }
        return value;
      }
    };
    exports.MySqlSmallInt = MySqlSmallInt;
    function smallint(name) {
      return new MySqlSmallIntBuilder(name);
    }
    exports.smallint = smallint;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/text.js
var require_text = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/text.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.longtext = exports.mediumtext = exports.tinytext = exports.text = exports.MySqlText = exports.MySqlTextBuilder = void 0;
    var common_1 = require_common();
    var MySqlTextBuilder = class extends common_1.MySqlColumnBuilder {
      constructor(name, textType) {
        super(name);
        this.config.textType = textType;
      }
      /** @internal */
      build(table) {
        return new MySqlText(table, this.config);
      }
    };
    exports.MySqlTextBuilder = MySqlTextBuilder;
    var MySqlText = class extends common_1.MySqlColumn {
      constructor(table, config2) {
        super(table, config2);
        this.textType = config2.textType;
      }
      getSQLType() {
        return this.textType;
      }
    };
    exports.MySqlText = MySqlText;
    function text3(name) {
      return new MySqlTextBuilder(name, "text");
    }
    exports.text = text3;
    function tinytext(name) {
      return new MySqlTextBuilder(name, "tinytext");
    }
    exports.tinytext = tinytext;
    function mediumtext(name) {
      return new MySqlTextBuilder(name, "mediumtext");
    }
    exports.mediumtext = mediumtext;
    function longtext(name) {
      return new MySqlTextBuilder(name, "longtext");
    }
    exports.longtext = longtext;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/date.common.js
var require_date_common = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/date.common.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MySqlDateBaseColumn = exports.MySqlDateColumnBaseBuilder = void 0;
    var sql_1 = require_sql();
    var common_1 = require_common();
    var MySqlDateColumnBaseBuilder = class extends common_1.MySqlColumnBuilder {
      constructor() {
        super(...arguments);
        this.hasOnUpdateNow = false;
      }
      notNull() {
        return super.notNull();
      }
      default(value) {
        return super.default(value);
      }
      primaryKey() {
        return super.primaryKey();
      }
      defaultNow() {
        return this.default((0, sql_1.sql)`(now())`);
      }
      onUpdateNow() {
        this.config.hasOnUpdateNow = true;
        this.config.hasDefault = true;
        return this;
      }
    };
    exports.MySqlDateColumnBaseBuilder = MySqlDateColumnBaseBuilder;
    var MySqlDateBaseColumn = class extends common_1.MySqlColumn {
      constructor(table, config2) {
        super(table, config2);
        this.table = table;
        this.hasOnUpdateNow = config2.hasOnUpdateNow;
      }
    };
    exports.MySqlDateBaseColumn = MySqlDateBaseColumn;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/timestamp.js
var require_timestamp = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/timestamp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.timestamp = exports.MySqlTimestampString = exports.MySqlTimestampStringBuilder = exports.MySqlTimestamp = exports.MySqlTimestampBuilder = void 0;
    require_common();
    var date_common_1 = require_date_common();
    var MySqlTimestampBuilder = class extends date_common_1.MySqlDateColumnBaseBuilder {
      constructor(name, fsp) {
        super(name);
        this.config.fsp = fsp;
      }
      /** @internal */
      build(table) {
        return new MySqlTimestamp(table, this.config);
      }
    };
    exports.MySqlTimestampBuilder = MySqlTimestampBuilder;
    var MySqlTimestamp = class extends date_common_1.MySqlDateBaseColumn {
      constructor(table, config2) {
        super(table, config2);
        this.fsp = config2.fsp;
      }
      getSQLType() {
        const precision = typeof this.fsp !== "undefined" ? `(${this.fsp})` : "";
        return `timestamp${precision}`;
      }
      mapFromDriverValue(value) {
        return new Date(value);
      }
    };
    exports.MySqlTimestamp = MySqlTimestamp;
    var MySqlTimestampStringBuilder = class extends date_common_1.MySqlDateColumnBaseBuilder {
      constructor(name, fsp) {
        super(name);
        this.config.fsp = fsp;
      }
      /** @internal */
      build(table) {
        return new MySqlTimestampString(table, this.config);
      }
    };
    exports.MySqlTimestampStringBuilder = MySqlTimestampStringBuilder;
    var MySqlTimestampString = class extends date_common_1.MySqlDateBaseColumn {
      constructor(table, config2) {
        super(table, config2);
        this.fsp = config2.fsp;
      }
      getSQLType() {
        const precision = typeof this.fsp !== "undefined" ? `(${this.fsp})` : "";
        return `timestamp${precision}`;
      }
    };
    exports.MySqlTimestampString = MySqlTimestampString;
    function timestamp(name, config2) {
      if ((config2 === null || config2 === void 0 ? void 0 : config2.mode) === "string") {
        return new MySqlTimestampStringBuilder(name, config2.fsp);
      }
      return new MySqlTimestampBuilder(name, config2 === null || config2 === void 0 ? void 0 : config2.fsp);
    }
    exports.timestamp = timestamp;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/tinyint.js
var require_tinyint = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/tinyint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tinyint = exports.MySqlTinyInt = exports.MySqlTinyIntBuilder = void 0;
    var common_1 = require_common();
    var MySqlTinyIntBuilder = class extends common_1.MySqlColumnBuilderWithAutoIncrement {
      /** @internal */
      build(table) {
        return new MySqlTinyInt(table, this.config);
      }
    };
    exports.MySqlTinyIntBuilder = MySqlTinyIntBuilder;
    var MySqlTinyInt = class extends common_1.MySqlColumnWithAutoIncrement {
      getSQLType() {
        return "tinyint";
      }
      mapFromDriverValue(value) {
        if (typeof value === "string") {
          return parseInt(value);
        }
        return value;
      }
    };
    exports.MySqlTinyInt = MySqlTinyInt;
    function tinyint(name) {
      return new MySqlTinyIntBuilder(name);
    }
    exports.tinyint = tinyint;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/varbinary.js
var require_varbinary = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/varbinary.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.varbinary = exports.MySqlVarBinary = exports.MySqlVarBinaryBuilder = void 0;
    var common_1 = require_common();
    var MySqlVarBinaryBuilder = class extends common_1.MySqlColumnBuilder {
      /** @internal */
      constructor(name, length) {
        super(name);
        this.config.length = length;
      }
      /** @internal */
      build(table) {
        return new MySqlVarBinary(table, this.config);
      }
    };
    exports.MySqlVarBinaryBuilder = MySqlVarBinaryBuilder;
    var MySqlVarBinary = class extends common_1.MySqlColumn {
      constructor(table, config2) {
        super(table, config2);
        this.length = config2.length;
      }
      getSQLType() {
        return typeof this.length !== "undefined" ? `varbinary(${this.length})` : `varbinary`;
      }
    };
    exports.MySqlVarBinary = MySqlVarBinary;
    function varbinary(name, options2) {
      return new MySqlVarBinaryBuilder(name, options2.length);
    }
    exports.varbinary = varbinary;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/varchar.js
var require_varchar = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/varchar.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.varchar = exports.MySqlVarChar = exports.MySqlVarCharBuilder = void 0;
    var common_1 = require_common();
    var MySqlVarCharBuilder = class extends common_1.MySqlColumnBuilder {
      /** @internal */
      constructor(name, length) {
        super(name);
        this.config.length = length;
      }
      /** @internal */
      build(table) {
        return new MySqlVarChar(table, this.config);
      }
    };
    exports.MySqlVarCharBuilder = MySqlVarCharBuilder;
    var MySqlVarChar = class extends common_1.MySqlColumn {
      constructor(table, config2) {
        super(table, config2);
        this.length = config2.length;
      }
      getSQLType() {
        return typeof this.length !== "undefined" ? `varchar(${this.length})` : `varchar`;
      }
    };
    exports.MySqlVarChar = MySqlVarChar;
    function varchar2(name, options2) {
      return new MySqlVarCharBuilder(name, options2.length);
    }
    exports.varchar = varchar2;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/date.js
var require_date = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/date.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.date = exports.MySqlStringDate = exports.MySqlDateStringBuilder = exports.MySqlDate = exports.MySqlDateBuilder = void 0;
    var common_1 = require_common();
    var MySqlDateBuilder = class extends common_1.MySqlColumnBuilder {
      constructor(name) {
        super(name);
      }
      /** @internal */
      build(table) {
        return new MySqlDate(table, this.config);
      }
    };
    exports.MySqlDateBuilder = MySqlDateBuilder;
    var MySqlDate = class extends common_1.MySqlColumn {
      constructor(table, config2) {
        super(table, config2);
      }
      getSQLType() {
        return `date`;
      }
      mapFromDriverValue(value) {
        return new Date(value);
      }
    };
    exports.MySqlDate = MySqlDate;
    var MySqlDateStringBuilder = class extends common_1.MySqlColumnBuilder {
      constructor(name) {
        super(name);
      }
      /** @internal */
      build(table) {
        return new MySqlStringDate(table, this.config);
      }
    };
    exports.MySqlDateStringBuilder = MySqlDateStringBuilder;
    var MySqlStringDate = class extends common_1.MySqlColumn {
      constructor(table, config2) {
        super(table, config2);
      }
      getSQLType() {
        return `date`;
      }
    };
    exports.MySqlStringDate = MySqlStringDate;
    function date(name, config2) {
      if ((config2 === null || config2 === void 0 ? void 0 : config2.mode) === "string") {
        return new MySqlDateStringBuilder(name);
      }
      return new MySqlDateBuilder(name);
    }
    exports.date = date;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/datetime.js
var require_datetime = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/datetime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.datetime = exports.MySqlDateTimeString = exports.MySqlDateTimeStringBuilder = exports.MySqlDateTime = exports.MySqlDateTimeBuilder = void 0;
    var common_1 = require_common();
    var MySqlDateTimeBuilder = class extends common_1.MySqlColumnBuilder {
      constructor(name, fsp) {
        super(name);
        this.config.fsp = fsp;
      }
      /** @internal */
      build(table) {
        return new MySqlDateTime(table, this.config);
      }
    };
    exports.MySqlDateTimeBuilder = MySqlDateTimeBuilder;
    var MySqlDateTime = class extends common_1.MySqlColumn {
      constructor(table, config2) {
        super(table, config2);
        this.fsp = config2.fsp;
      }
      getSQLType() {
        const precision = typeof this.fsp !== "undefined" ? `(${this.fsp})` : "";
        return `datetime${precision}`;
      }
      mapFromDriverValue(value) {
        return new Date(value);
      }
    };
    exports.MySqlDateTime = MySqlDateTime;
    var MySqlDateTimeStringBuilder = class extends common_1.MySqlColumnBuilder {
      constructor(name, fsp) {
        super(name);
        this.config.fsp = fsp;
      }
      /** @internal */
      build(table) {
        return new MySqlDateTimeString(table, this.config);
      }
    };
    exports.MySqlDateTimeStringBuilder = MySqlDateTimeStringBuilder;
    var MySqlDateTimeString = class extends common_1.MySqlColumn {
      constructor(table, config2) {
        super(table, config2);
        this.fsp = config2.fsp;
      }
      getSQLType() {
        const precision = typeof this.fsp !== "undefined" ? `(${this.fsp})` : "";
        return `datetime${precision}`;
      }
    };
    exports.MySqlDateTimeString = MySqlDateTimeString;
    function datetime(name, config2) {
      if ((config2 === null || config2 === void 0 ? void 0 : config2.mode) === "string") {
        return new MySqlDateTimeStringBuilder(name, config2.fsp);
      }
      return new MySqlDateTimeBuilder(name, config2 === null || config2 === void 0 ? void 0 : config2.fsp);
    }
    exports.datetime = datetime;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/time.js
var require_time = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/time.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.time = exports.MySqlTime = exports.MySqlTimeBuilder = void 0;
    var common_1 = require_common();
    var MySqlTimeBuilder = class extends common_1.MySqlColumnBuilder {
      constructor(name, fsp) {
        super(name);
        this.config.fsp = fsp;
      }
      /** @internal */
      build(table) {
        return new MySqlTime(table, this.config);
      }
    };
    exports.MySqlTimeBuilder = MySqlTimeBuilder;
    var MySqlTime = class extends common_1.MySqlColumn {
      constructor(table, config2) {
        super(table, config2);
        this.fsp = config2.fsp;
      }
      getSQLType() {
        const precision = typeof this.fsp !== "undefined" ? `(${this.fsp})` : "";
        return `time${precision}`;
      }
    };
    exports.MySqlTime = MySqlTime;
    function time(name, config2) {
      return new MySqlTimeBuilder(name, config2 === null || config2 === void 0 ? void 0 : config2.fsp);
    }
    exports.time = time;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/year.js
var require_year = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/year.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.year = exports.MySqlYear = exports.MySqlYearBuilder = void 0;
    var common_1 = require_common();
    var MySqlYearBuilder = class extends common_1.MySqlColumnBuilder {
      constructor(name) {
        super(name);
      }
      /** @internal */
      build(table) {
        return new MySqlYear(table, this.config);
      }
    };
    exports.MySqlYearBuilder = MySqlYearBuilder;
    var MySqlYear = class extends common_1.MySqlColumn {
      getSQLType() {
        return `year`;
      }
    };
    exports.MySqlYear = MySqlYear;
    function year(name) {
      return new MySqlYearBuilder(name);
    }
    exports.year = year;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/custom.js
var require_custom = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/custom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.customType = void 0;
    var common_1 = require_common();
    function returnColumn(table, config2, sqlName, mapTo, mapFrom) {
      return new class extends common_1.MySqlColumn {
        getSQLType() {
          return sqlName;
        }
        mapFromDriverValue(value) {
          if (typeof mapFrom === "function") {
            return mapFrom(value);
          } else {
            return value;
          }
        }
        mapToDriverValue(value) {
          if (typeof mapTo === "function") {
            return mapTo(value);
          } else {
            return value;
          }
        }
      }(table, config2);
    }
    function customType(customTypeParams) {
      return (dbName, fieldConfig) => new class extends common_1.MySqlColumnBuilder {
        /** @internal */
        build(table) {
          return returnColumn(table, this.config, customTypeParams.dataType(fieldConfig), customTypeParams.toDriver, customTypeParams.fromDriver);
        }
      }(dbName);
    }
    exports.customType = customType;
  }
});

// node_modules/drizzle-orm/mysql-core/columns/index.js
var require_columns = __commonJS({
  "node_modules/drizzle-orm/mysql-core/columns/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MySqlColumn = void 0;
    __exportStar(require_bigint(), exports);
    __exportStar(require_binary(), exports);
    __exportStar(require_char(), exports);
    __exportStar(require_boolean(), exports);
    var common_1 = require_common();
    Object.defineProperty(exports, "MySqlColumn", { enumerable: true, get: function() {
      return common_1.MySqlColumn;
    } });
    __exportStar(require_decimal(), exports);
    __exportStar(require_double(), exports);
    __exportStar(require_enum(), exports);
    __exportStar(require_float(), exports);
    __exportStar(require_int(), exports);
    __exportStar(require_json(), exports);
    __exportStar(require_mediumint(), exports);
    __exportStar(require_real(), exports);
    __exportStar(require_serial(), exports);
    __exportStar(require_smallint(), exports);
    __exportStar(require_text(), exports);
    __exportStar(require_timestamp(), exports);
    __exportStar(require_tinyint(), exports);
    __exportStar(require_varbinary(), exports);
    __exportStar(require_varchar(), exports);
    __exportStar(require_date(), exports);
    __exportStar(require_datetime(), exports);
    __exportStar(require_time(), exports);
    __exportStar(require_year(), exports);
    __exportStar(require_custom(), exports);
  }
});

// node_modules/drizzle-orm/mysql-core/schema.js
var require_schema = __commonJS({
  "node_modules/drizzle-orm/mysql-core/schema.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mysqlSchema = exports.mysqlDatabase = exports.isMySqlSchema = exports.MySqlSchema = void 0;
    var table_1 = require_table2();
    var view_1 = require_view2();
    var MySqlSchema = class {
      constructor(schemaName) {
        this.schemaName = schemaName;
        this.table = (name, columns, extraConfig) => {
          return (0, table_1.mysqlTableWithSchema)(name, columns, extraConfig, this.schemaName);
        };
        this.view = (name, columns) => {
          return (0, view_1.mysqlViewWithSchema)(name, columns, this.schemaName);
        };
      }
    };
    exports.MySqlSchema = MySqlSchema;
    function isMySqlSchema(obj) {
      return obj instanceof MySqlSchema;
    }
    exports.isMySqlSchema = isMySqlSchema;
    function mysqlDatabase(name) {
      return new MySqlSchema(name);
    }
    exports.mysqlDatabase = mysqlDatabase;
    exports.mysqlSchema = mysqlDatabase;
  }
});

// node_modules/drizzle-orm/mysql-core/index.js
var require_mysql_core = __commonJS({
  "node_modules/drizzle-orm/mysql-core/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_alias2(), exports);
    __exportStar(require_checks(), exports);
    __exportStar(require_columns(), exports);
    __exportStar(require_db(), exports);
    __exportStar(require_dialect(), exports);
    __exportStar(require_foreign_keys(), exports);
    __exportStar(require_indexes(), exports);
    __exportStar(require_primary_keys(), exports);
    __exportStar(require_schema(), exports);
    __exportStar(require_session(), exports);
    __exportStar(require_table2(), exports);
    __exportStar(require_view2(), exports);
  }
});

// .svelte-kit/output/server/entries/pages/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load
});
var import_planetscale_serverless, import_mysql_core, DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD, config, connection, db, users, load;
var init_page_server_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_page.server.ts.js"() {
    import_planetscale_serverless = __toESM(require_planetscale_serverless(), 1);
    init_dist();
    import_mysql_core = __toESM(require_mysql_core(), 1);
    DATABASE_HOST = "aws.connect.psdb.cloud";
    DATABASE_USERNAME = "iyz353bu12xx48pu7nnt";
    DATABASE_PASSWORD = "pscale_pw_kZomBLa42n2pmfKoCGO0WKCFwTx2IWYHxpA6Hlv4trn";
    config = {
      host: DATABASE_HOST,
      username: DATABASE_USERNAME,
      password: DATABASE_PASSWORD
    };
    connection = connect(config);
    db = (0, import_planetscale_serverless.drizzle)(connection);
    users = (0, import_mysql_core.mysqlTable)("users", {
      id: (0, import_mysql_core.serial)("id").primaryKey(),
      fullName: (0, import_mysql_core.text)("full_name"),
      phone: (0, import_mysql_core.varchar)("phone", { length: 256 })
    });
    load = async () => {
      const newUser = {
        id: 1,
        fullName: "Andrew",
        phone: "9999"
      };
      db.insert(users).values(newUser);
      db.select().from(users);
      return {};
    };
  }
});

// .svelte-kit/output/server/entries/pages/_page.svelte.js
var page_svelte_exports = {};
__export(page_svelte_exports, {
  default: () => Page
});
var Page;
var init_page_svelte = __esm({
  ".svelte-kit/output/server/entries/pages/_page.svelte.js"() {
    init_chunks();
    Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      return `<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>`;
    });
  }
});

// .svelte-kit/output/server/nodes/2.js
var __exports3 = {};
__export(__exports3, {
  component: () => component3,
  file: () => file3,
  fonts: () => fonts3,
  imports: () => imports3,
  index: () => index3,
  server: () => page_server_ts_exports,
  server_id: () => server_id,
  stylesheets: () => stylesheets3
});
var index3, component3, file3, server_id, imports3, stylesheets3, fonts3;
var init__3 = __esm({
  ".svelte-kit/output/server/nodes/2.js"() {
    init_page_server_ts();
    index3 = 2;
    component3 = async () => (await Promise.resolve().then(() => (init_page_svelte(), page_svelte_exports))).default;
    file3 = "_app/immutable/entry/_page.svelte.da808fe5.js";
    server_id = "src/routes/+page.server.ts";
    imports3 = ["_app/immutable/entry/_page.svelte.da808fe5.js", "_app/immutable/chunks/index.847936d9.js"];
    stylesheets3 = [];
    fonts3 = [];
  }
});

// .svelte-kit/output/server/chunks/internal.js
init_chunks();
var base = "";
var assets = base;
var initial = { base, assets };
function reset() {
  base = initial.base;
  assets = initial.assets;
}
var public_env = {};
function set_public_env(environment) {
  public_env = environment;
}
function afterUpdate() {
}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      stores.page.set(page2);
    }
    $$rendered = `


${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`}

${``}`;
  } while (!$$settled);
  return $$rendered;
});
var options = {
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width" />\n		' + head + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<div style="display: contents">' + body + "</div>\n	</body>\n</html>\n",
    error: ({ status, message }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
					Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid #ccc;
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1k9pbmf"
};
function get_hooks() {
  return {};
}

// node_modules/devalue/src/utils.js
var escaped = {
  "<": "\\u003C",
  ">": "\\u003E",
  "/": "\\u002F",
  "\\": "\\\\",
  "\b": "\\b",
  "\f": "\\f",
  "\n": "\\n",
  "\r": "\\r",
  "	": "\\t",
  "\0": "\\u0000",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var DevalueError = class extends Error {
  /**
   * @param {string} message
   * @param {string[]} keys
   */
  constructor(message, keys) {
    super(message);
    this.name = "DevalueError";
    this.path = keys.join("");
  }
};
function is_primitive(thing) {
  return Object(thing) !== thing;
}
var object_proto_names = Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function is_plain_object(thing) {
  const proto = Object.getPrototypeOf(thing);
  return proto === Object.prototype || proto === null || Object.getOwnPropertyNames(proto).sort().join("\0") === object_proto_names;
}
function get_type(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function stringify_string(str) {
  let result = '"';
  for (let i = 0; i < str.length; i += 1) {
    const char = str.charAt(i);
    const code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code <= 31) {
      result += `\\u${code.toString(16).toUpperCase().padStart(4, "0")}`;
    } else if (code >= 55296 && code <= 57343) {
      const next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += `\\u${code.toString(16).toUpperCase()}`;
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}

// node_modules/devalue/src/uneval.js
var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$";
var unsafe_chars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
function uneval(value, replacer) {
  const counts = /* @__PURE__ */ new Map();
  const keys = [];
  const custom = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (!is_primitive(thing)) {
      if (counts.has(thing)) {
        counts.set(thing, counts.get(thing) + 1);
        return;
      }
      counts.set(thing, 1);
      if (replacer) {
        const str2 = replacer(thing);
        if (typeof str2 === "string") {
          custom.set(thing, str2);
          return;
        }
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "BigInt":
        case "String":
        case "Boolean":
        case "Date":
        case "RegExp":
          return;
        case "Array":
          thing.forEach((value2, i) => {
            keys.push(`[${i}]`);
            walk(value2);
            keys.pop();
          });
          break;
        case "Set":
          Array.from(thing).forEach(walk);
          break;
        case "Map":
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive(key2) : "..."})`
            );
            walk(value2);
            keys.pop();
          }
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          for (const key2 in thing) {
            keys.push(`.${key2}`);
            walk(thing[key2]);
            keys.pop();
          }
      }
    }
  }
  walk(value);
  const names = /* @__PURE__ */ new Map();
  Array.from(counts).filter((entry) => entry[1] > 1).sort((a, b) => b[1] - a[1]).forEach((entry, i) => {
    names.set(entry[0], get_name(i));
  });
  function stringify2(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (is_primitive(thing)) {
      return stringify_primitive(thing);
    }
    if (custom.has(thing)) {
      return custom.get(thing);
    }
    const type = get_type(thing);
    switch (type) {
      case "Number":
      case "String":
      case "Boolean":
        return `Object(${stringify2(thing.valueOf())})`;
      case "RegExp":
        return `new RegExp(${stringify_string(thing.source)}, "${thing.flags}")`;
      case "Date":
        return `new Date(${thing.getTime()})`;
      case "Array":
        const members = (
          /** @type {any[]} */
          thing.map(
            (v, i) => i in thing ? stringify2(v) : ""
          )
        );
        const tail = thing.length === 0 || thing.length - 1 in thing ? "" : ",";
        return `[${members.join(",")}${tail}]`;
      case "Set":
      case "Map":
        return `new ${type}([${Array.from(thing).map(stringify2).join(",")}])`;
      default:
        const obj = `{${Object.keys(thing).map((key2) => `${safe_key(key2)}:${stringify2(thing[key2])}`).join(",")}}`;
        const proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0 ? `Object.assign(Object.create(null),${obj})` : `Object.create(null)`;
        }
        return obj;
    }
  }
  const str = stringify2(value);
  if (names.size) {
    const params = [];
    const statements = [];
    const values = [];
    names.forEach((name, thing) => {
      params.push(name);
      if (custom.has(thing)) {
        values.push(
          /** @type {string} */
          custom.get(thing)
        );
        return;
      }
      if (is_primitive(thing)) {
        values.push(stringify_primitive(thing));
        return;
      }
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          values.push(`Object(${stringify2(thing.valueOf())})`);
          break;
        case "RegExp":
          values.push(thing.toString());
          break;
        case "Date":
          values.push(`new Date(${thing.getTime()})`);
          break;
        case "Array":
          values.push(`Array(${thing.length})`);
          thing.forEach((v, i) => {
            statements.push(`${name}[${i}]=${stringify2(v)}`);
          });
          break;
        case "Set":
          values.push(`new Set`);
          statements.push(
            `${name}.${Array.from(thing).map((v) => `add(${stringify2(v)})`).join(".")}`
          );
          break;
        case "Map":
          values.push(`new Map`);
          statements.push(
            `${name}.${Array.from(thing).map(([k, v]) => `set(${stringify2(k)}, ${stringify2(v)})`).join(".")}`
          );
          break;
        default:
          values.push(
            Object.getPrototypeOf(thing) === null ? "Object.create(null)" : "{}"
          );
          Object.keys(thing).forEach((key2) => {
            statements.push(
              `${name}${safe_prop(key2)}=${stringify2(thing[key2])}`
            );
          });
      }
    });
    statements.push(`return ${str}`);
    return `(function(${params.join(",")}){${statements.join(
      ";"
    )}}(${values.join(",")}))`;
  } else {
    return str;
  }
}
function get_name(num) {
  let name = "";
  do {
    name = chars[num % chars.length] + name;
    num = ~~(num / chars.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? `${name}0` : name;
}
function escape_unsafe_char(c) {
  return escaped[c] || c;
}
function escape_unsafe_chars(str) {
  return str.replace(unsafe_chars, escape_unsafe_char);
}
function safe_key(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escape_unsafe_chars(JSON.stringify(key2));
}
function safe_prop(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? `.${key2}` : `[${escape_unsafe_chars(JSON.stringify(key2))}]`;
}
function stringify_primitive(thing) {
  if (typeof thing === "string")
    return stringify_string(thing);
  if (thing === void 0)
    return "void 0";
  if (thing === 0 && 1 / thing < 0)
    return "-0";
  const str = String(thing);
  if (typeof thing === "number")
    return str.replace(/^(-)?0\./, "$1.");
  if (typeof thing === "bigint")
    return thing + "n";
  return str;
}

// node_modules/devalue/src/constants.js
var UNDEFINED = -1;
var HOLE = -2;
var NAN = -3;
var POSITIVE_INFINITY = -4;
var NEGATIVE_INFINITY = -5;
var NEGATIVE_ZERO = -6;

// node_modules/devalue/src/stringify.js
function stringify(value, reducers) {
  const stringified = [];
  const indexes = /* @__PURE__ */ new Map();
  const custom = [];
  for (const key2 in reducers) {
    custom.push({ key: key2, fn: reducers[key2] });
  }
  const keys = [];
  let p = 0;
  function flatten(thing) {
    if (typeof thing === "function") {
      throw new DevalueError(`Cannot stringify a function`, keys);
    }
    if (indexes.has(thing))
      return indexes.get(thing);
    if (thing === void 0)
      return UNDEFINED;
    if (Number.isNaN(thing))
      return NAN;
    if (thing === Infinity)
      return POSITIVE_INFINITY;
    if (thing === -Infinity)
      return NEGATIVE_INFINITY;
    if (thing === 0 && 1 / thing < 0)
      return NEGATIVE_ZERO;
    const index5 = p++;
    indexes.set(thing, index5);
    for (const { key: key2, fn } of custom) {
      const value2 = fn(thing);
      if (value2) {
        stringified[index5] = `["${key2}",${flatten(value2)}]`;
        return index5;
      }
    }
    let str = "";
    if (is_primitive(thing)) {
      str = stringify_primitive2(thing);
    } else {
      const type = get_type(thing);
      switch (type) {
        case "Number":
        case "String":
        case "Boolean":
          str = `["Object",${stringify_primitive2(thing)}]`;
          break;
        case "BigInt":
          str = `["BigInt",${thing}]`;
          break;
        case "Date":
          str = `["Date","${thing.toISOString()}"]`;
          break;
        case "RegExp":
          const { source, flags } = thing;
          str = flags ? `["RegExp",${stringify_string(source)},"${flags}"]` : `["RegExp",${stringify_string(source)}]`;
          break;
        case "Array":
          str = "[";
          for (let i = 0; i < thing.length; i += 1) {
            if (i > 0)
              str += ",";
            if (i in thing) {
              keys.push(`[${i}]`);
              str += flatten(thing[i]);
              keys.pop();
            } else {
              str += HOLE;
            }
          }
          str += "]";
          break;
        case "Set":
          str = '["Set"';
          for (const value2 of thing) {
            str += `,${flatten(value2)}`;
          }
          str += "]";
          break;
        case "Map":
          str = '["Map"';
          for (const [key2, value2] of thing) {
            keys.push(
              `.get(${is_primitive(key2) ? stringify_primitive2(key2) : "..."})`
            );
            str += `,${flatten(key2)},${flatten(value2)}`;
          }
          str += "]";
          break;
        default:
          if (!is_plain_object(thing)) {
            throw new DevalueError(
              `Cannot stringify arbitrary non-POJOs`,
              keys
            );
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new DevalueError(
              `Cannot stringify POJOs with symbolic keys`,
              keys
            );
          }
          if (Object.getPrototypeOf(thing) === null) {
            str = '["null"';
            for (const key2 in thing) {
              keys.push(`.${key2}`);
              str += `,${stringify_string(key2)},${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "]";
          } else {
            str = "{";
            let started = false;
            for (const key2 in thing) {
              if (started)
                str += ",";
              started = true;
              keys.push(`.${key2}`);
              str += `${stringify_string(key2)}:${flatten(thing[key2])}`;
              keys.pop();
            }
            str += "}";
          }
      }
    }
    stringified[index5] = str;
    return index5;
  }
  const index4 = flatten(value);
  if (index4 < 0)
    return `${index4}`;
  return `[${stringified.join(",")}]`;
}
function stringify_primitive2(thing) {
  const type = typeof thing;
  if (type === "string")
    return stringify_string(thing);
  if (thing instanceof String)
    return stringify_string(thing.toString());
  if (thing === void 0)
    return UNDEFINED.toString();
  if (thing === 0 && 1 / thing < 0)
    return NEGATIVE_ZERO.toString();
  if (type === "bigint")
    return `["BigInt","${thing}"]`;
  return String(thing);
}

// .svelte-kit/output/server/index.js
init_chunks();
var import_cookie = __toESM(require_cookie(), 1);
var set_cookie_parser = __toESM(require_set_cookie(), 1);
var DEV = false;
function negotiate(accept, types) {
  const parts = [];
  accept.split(",").forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = "1"] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if (a.subtype === "*" !== (b.subtype === "*")) {
      return a.subtype === "*" ? 1 : -1;
    }
    if (a.type === "*" !== (b.type === "*")) {
      return a.type === "*" ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split("/");
    const priority = parts.findIndex(
      (part) => (part.type === type || part.type === "*") && (part.subtype === subtype || part.subtype === "*")
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function is_content_type(request, ...types) {
  const type = request.headers.get("content-type")?.split(";", 1)[0].trim() ?? "";
  return types.includes(type);
}
function is_form_content_type(request) {
  return is_content_type(request, "application/x-www-form-urlencoded", "multipart/form-data");
}
var HttpError = class HttpError2 {
  /**
   * @param {number} status
   * @param {{message: string} extends App.Error ? (App.Error | string | undefined) : App.Error} body
   */
  constructor(status, body) {
    this.status = status;
    if (typeof body === "string") {
      this.body = { message: body };
    } else if (body) {
      this.body = body;
    } else {
      this.body = { message: `Error: ${status}` };
    }
  }
  toString() {
    return JSON.stringify(this.body);
  }
};
var Redirect = class Redirect2 {
  /**
   * @param {300 | 301 | 302 | 303 | 304 | 305 | 306 | 307 | 308} status
   * @param {string} location
   */
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
};
var ActionFailure = class ActionFailure2 {
  /**
   * @param {number} status
   * @param {T} [data]
   */
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
};
function error(status, message) {
  if (isNaN(status) || status < 400 || status > 599) {
    throw new Error(`HTTP error status codes must be between 400 and 599 \u2014 ${status} is invalid`);
  }
  return new HttpError(status, message);
}
function json(data, init2) {
  const body = JSON.stringify(data);
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-length")) {
    headers.set("content-length", encoder$3.encode(body).byteLength.toString());
  }
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(body, {
    ...init2,
    headers
  });
}
var encoder$3 = new TextEncoder();
function text(body, init2) {
  const headers = new Headers(init2?.headers);
  if (!headers.has("content-length")) {
    headers.set("content-length", encoder$3.encode(body).byteLength.toString());
  }
  return new Response(body, {
    ...init2,
    headers
  });
}
function coalesce_to_error(err) {
  return err instanceof Error || err && /** @type {any} */
  err.name && /** @type {any} */
  err.message ? (
    /** @type {Error} */
    err
  ) : new Error(JSON.stringify(err));
}
function normalize_error(error2) {
  return (
    /** @type {Redirect | HttpError | Error} */
    error2
  );
}
function method_not_allowed(mod, method) {
  return text(`${method} method not allowed`, {
    status: 405,
    headers: {
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: allowed_methods(mod).join(", ")
    }
  });
}
function allowed_methods(mod) {
  const allowed = [];
  for (const method in ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"]) {
    if (method in mod)
      allowed.push(method);
  }
  if (mod.GET || mod.HEAD)
    allowed.push("HEAD");
  return allowed;
}
function static_error_page(options2, status, message) {
  return text(options2.templates.error({ status, message }), {
    headers: { "content-type": "text/html; charset=utf-8" },
    status
  });
}
async function handle_fatal_error(event, options2, error2) {
  error2 = error2 instanceof HttpError ? error2 : coalesce_to_error(error2);
  const status = error2 instanceof HttpError ? error2.status : 500;
  const body = await handle_error_and_jsonify(event, options2, error2);
  const type = negotiate(event.request.headers.get("accept") || "text/html", [
    "application/json",
    "text/html"
  ]);
  if (event.isDataRequest || type === "application/json") {
    return json(body, {
      status
    });
  }
  return static_error_page(options2, status, body.message);
}
async function handle_error_and_jsonify(event, options2, error2) {
  if (error2 instanceof HttpError) {
    return error2.body;
  } else {
    return await options2.hooks.handleError({ error: error2, event }) ?? {
      message: event.route.id != null ? "Internal Error" : "Not Found"
    };
  }
}
function redirect_response(status, location) {
  const response = new Response(void 0, {
    status,
    headers: { location }
  });
  return response;
}
function clarify_devalue_error(event, error2) {
  if (error2.path) {
    return `Data returned from \`load\` while rendering ${event.route.id} is not serializable: ${error2.message} (data${error2.path})`;
  }
  if (error2.path === "") {
    return `Data returned from \`load\` while rendering ${event.route.id} is not a plain object`;
  }
  return error2.message;
}
function stringify_uses(node) {
  const uses = [];
  if (node.uses && node.uses.dependencies.size > 0) {
    uses.push(`"dependencies":${JSON.stringify(Array.from(node.uses.dependencies))}`);
  }
  if (node.uses && node.uses.params.size > 0) {
    uses.push(`"params":${JSON.stringify(Array.from(node.uses.params))}`);
  }
  if (node.uses?.parent)
    uses.push(`"parent":1`);
  if (node.uses?.route)
    uses.push(`"route":1`);
  if (node.uses?.url)
    uses.push(`"url":1`);
  return `"uses":{${uses.join(",")}}`;
}
async function render_endpoint(event, mod, state) {
  const method = (
    /** @type {import('types').HttpMethod} */
    event.request.method
  );
  let handler = mod[method];
  if (!handler && method === "HEAD") {
    handler = mod.GET;
  }
  if (!handler) {
    return method_not_allowed(mod, method);
  }
  const prerender = mod.prerender ?? state.prerender_default;
  if (prerender && (mod.POST || mod.PATCH || mod.PUT || mod.DELETE)) {
    throw new Error("Cannot prerender endpoints that have mutative methods");
  }
  if (state.prerendering && !prerender) {
    if (state.depth > 0) {
      throw new Error(`${event.route.id} is not prerenderable`);
    } else {
      return new Response(void 0, { status: 204 });
    }
  }
  try {
    const response = await handler(
      /** @type {import('types').RequestEvent<Record<string, any>>} */
      event
    );
    if (!(response instanceof Response)) {
      throw new Error(
        `Invalid response from route ${event.url.pathname}: handler should return a Response object`
      );
    }
    if (state.prerendering) {
      response.headers.set("x-sveltekit-prerender", String(prerender));
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      return new Response(void 0, {
        status: e.status,
        headers: { location: e.location }
      });
    }
    throw e;
  }
}
function is_endpoint_request(event) {
  const { method, headers } = event.request;
  if (method === "PUT" || method === "PATCH" || method === "DELETE" || method === "OPTIONS") {
    return true;
  }
  if (method === "POST" && headers.get("x-sveltekit-action") === "true")
    return false;
  const accept = event.request.headers.get("accept") ?? "*/*";
  return negotiate(accept, ["*", "text/html"]) !== "text/html";
}
function compact(arr) {
  return arr.filter(
    /** @returns {val is NonNullable<T>} */
    (val) => val != null
  );
}
function normalize_path(path, trailing_slash) {
  if (path === "/" || trailing_slash === "ignore")
    return path;
  if (trailing_slash === "never") {
    return path.endsWith("/") ? path.slice(0, -1) : path;
  } else if (trailing_slash === "always" && !path.endsWith("/")) {
    return path + "/";
  }
  return path;
}
function decode_pathname(pathname) {
  return pathname.split("%25").map(decodeURI).join("%25");
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = decodeURIComponent(params[key2]);
  }
  return params;
}
var tracked_url_properties = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function make_trackable(url, callback) {
  const tracked = new URL(url);
  for (const property of tracked_url_properties) {
    let value = tracked[property];
    Object.defineProperty(tracked, property, {
      get() {
        callback();
        return value;
      },
      enumerable: true,
      configurable: true
    });
  }
  {
    tracked[Symbol.for("nodejs.util.inspect.custom")] = (depth, opts, inspect) => {
      return inspect(url, opts);
    };
  }
  disable_hash(tracked);
  return tracked;
}
function disable_hash(url) {
  Object.defineProperty(url, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    }
  });
}
function disable_search(url) {
  for (const property of ["search", "searchParams"]) {
    Object.defineProperty(url, property, {
      get() {
        throw new Error(`Cannot access url.${property} on a page with prerendering enabled`);
      }
    });
  }
}
var DATA_SUFFIX = "/__data.json";
function has_data_suffix(pathname) {
  return pathname.endsWith(DATA_SUFFIX);
}
function add_data_suffix(pathname) {
  return pathname.replace(/\/$/, "") + DATA_SUFFIX;
}
function strip_data_suffix(pathname) {
  return pathname.slice(0, -DATA_SUFFIX.length);
}
function is_action_json_request(event) {
  const accept = negotiate(event.request.headers.get("accept") ?? "*/*", [
    "application/json",
    "text/html"
  ]);
  return accept === "application/json" && event.request.method === "POST";
}
async function handle_action_json_request(event, options2, server2) {
  const actions = server2?.actions;
  if (!actions) {
    const no_actions_error = error(405, "POST method not allowed. No actions exist for this page");
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, no_actions_error)
      },
      {
        status: no_actions_error.status,
        headers: {
          // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
          // "The server must generate an Allow header field in a 405 status code response"
          allow: "GET"
        }
      }
    );
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return action_json({
        type: "failure",
        status: data.status,
        // @ts-expect-error we assign a string to what is supposed to be an object. That's ok
        // because we don't use the object outside, and this way we have better code navigation
        // through knowing where the related interface is used.
        data: stringify_action_response(
          data.data,
          /** @type {string} */
          event.route.id
        )
      });
    } else {
      return action_json({
        type: "success",
        status: data ? 200 : 204,
        // @ts-expect-error see comment above
        data: stringify_action_response(
          data,
          /** @type {string} */
          event.route.id
        )
      });
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return action_json({
        type: "redirect",
        status: err.status,
        location: err.location
      });
    }
    return action_json(
      {
        type: "error",
        error: await handle_error_and_jsonify(event, options2, check_incorrect_fail_use(err))
      },
      {
        status: err instanceof HttpError ? err.status : 500
      }
    );
  }
}
function check_incorrect_fail_use(error2) {
  return error2 instanceof ActionFailure ? new Error(`Cannot "throw fail()". Use "return fail()"`) : error2;
}
function action_json(data, init2) {
  return json(data, init2);
}
function is_action_request(event) {
  return event.request.method === "POST";
}
async function handle_action_request(event, server2) {
  const actions = server2?.actions;
  if (!actions) {
    event.setHeaders({
      // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
      // "The server must generate an Allow header field in a 405 status code response"
      allow: "GET"
    });
    return {
      type: "error",
      error: error(405, "POST method not allowed. No actions exist for this page")
    };
  }
  check_named_default_separate(actions);
  try {
    const data = await call_action(event, actions);
    if (false)
      ;
    if (data instanceof ActionFailure) {
      return {
        type: "failure",
        status: data.status,
        data: data.data
      };
    } else {
      return {
        type: "success",
        status: 200,
        // @ts-expect-error this will be removed upon serialization, so `undefined` is the same as omission
        data
      };
    }
  } catch (e) {
    const err = normalize_error(e);
    if (err instanceof Redirect) {
      return {
        type: "redirect",
        status: err.status,
        location: err.location
      };
    }
    return {
      type: "error",
      error: check_incorrect_fail_use(err)
    };
  }
}
function check_named_default_separate(actions) {
  if (actions.default && Object.keys(actions).length > 1) {
    throw new Error(
      `When using named actions, the default action cannot be used. See the docs for more info: https://kit.svelte.dev/docs/form-actions#named-actions`
    );
  }
}
async function call_action(event, actions) {
  const url = new URL(event.request.url);
  let name = "default";
  for (const param of url.searchParams) {
    if (param[0].startsWith("/")) {
      name = param[0].slice(1);
      if (name === "default") {
        throw new Error('Cannot use reserved action name "default"');
      }
      break;
    }
  }
  const action = actions[name];
  if (!action) {
    throw new Error(`No action with name '${name}' found`);
  }
  if (!is_form_content_type(event.request)) {
    throw new Error(
      `Actions expect form-encoded data (received ${event.request.headers.get("content-type")}`
    );
  }
  return action(event);
}
function uneval_action_response(data, route_id) {
  return try_deserialize(data, uneval, route_id);
}
function stringify_action_response(data, route_id) {
  return try_deserialize(data, stringify, route_id);
}
function try_deserialize(data, fn, route_id) {
  try {
    return fn(data);
  } catch (e) {
    const error2 = (
      /** @type {any} */
      e
    );
    if ("path" in error2) {
      let message = `Data returned from action inside ${route_id} is not serializable: ${error2.message}`;
      if (error2.path !== "")
        message += ` (data.${error2.path})`;
      throw new Error(message);
    }
    throw error2;
  }
}
async function unwrap_promises(object) {
  for (const key2 in object) {
    if (typeof object[key2]?.then === "function") {
      return Object.fromEntries(
        await Promise.all(Object.entries(object).map(async ([key3, value]) => [key3, await value]))
      );
    }
  }
  return object;
}
async function load_server_data({ event, state, node, parent }) {
  if (!node?.server)
    return null;
  const uses = {
    dependencies: /* @__PURE__ */ new Set(),
    params: /* @__PURE__ */ new Set(),
    parent: false,
    route: false,
    url: false
  };
  const url = make_trackable(event.url, () => {
    uses.url = true;
  });
  if (state.prerendering) {
    disable_search(url);
  }
  const result = await node.server.load?.call(null, {
    ...event,
    fetch: (info, init2) => {
      const url2 = new URL(info instanceof Request ? info.url : info, event.url);
      uses.dependencies.add(url2.href);
      return event.fetch(info, init2);
    },
    /** @param {string[]} deps */
    depends: (...deps) => {
      for (const dep of deps) {
        const { href } = new URL(dep, event.url);
        uses.dependencies.add(href);
      }
    },
    params: new Proxy(event.params, {
      get: (target, key2) => {
        uses.params.add(key2);
        return target[
          /** @type {string} */
          key2
        ];
      }
    }),
    parent: async () => {
      uses.parent = true;
      return parent();
    },
    route: new Proxy(event.route, {
      get: (target, key2) => {
        uses.route = true;
        return target[
          /** @type {'id'} */
          key2
        ];
      }
    }),
    url
  });
  const data = result ? await unwrap_promises(result) : null;
  return {
    type: "data",
    data,
    uses,
    slash: node.server.trailingSlash
  };
}
async function load_data({
  event,
  fetched,
  node,
  parent,
  server_data_promise,
  state,
  resolve_opts,
  csr
}) {
  const server_data_node = await server_data_promise;
  if (!node?.universal?.load) {
    return server_data_node?.data ?? null;
  }
  const result = await node.universal.load.call(null, {
    url: event.url,
    params: event.params,
    data: server_data_node?.data ?? null,
    route: event.route,
    fetch: create_universal_fetch(event, state, fetched, csr, resolve_opts),
    setHeaders: event.setHeaders,
    depends: () => {
    },
    parent
  });
  const data = result ? await unwrap_promises(result) : null;
  return data;
}
function create_universal_fetch(event, state, fetched, csr, resolve_opts) {
  return async (input, init2) => {
    const cloned_body = input instanceof Request && input.body ? input.clone().body : null;
    let response = await event.fetch(input, init2);
    const url = new URL(input instanceof Request ? input.url : input, event.url);
    const same_origin = url.origin === event.url.origin;
    let dependency;
    if (same_origin) {
      if (state.prerendering) {
        dependency = { response, body: null };
        state.prerendering.dependencies.set(url.pathname, dependency);
      }
    } else {
      const mode = input instanceof Request ? input.mode : init2?.mode ?? "cors";
      if (mode === "no-cors") {
        response = new Response("", {
          status: response.status,
          statusText: response.statusText,
          headers: response.headers
        });
      } else {
        const acao = response.headers.get("access-control-allow-origin");
        if (!acao || acao !== event.url.origin && acao !== "*") {
          throw new Error(
            `CORS error: ${acao ? "Incorrect" : "No"} 'Access-Control-Allow-Origin' header is present on the requested resource`
          );
        }
      }
    }
    const proxy = new Proxy(response, {
      get(response2, key2, _receiver) {
        async function text22() {
          const body = await response2.text();
          if (!body || typeof body === "string") {
            const status_number = Number(response2.status);
            if (isNaN(status_number)) {
              throw new Error(
                `response.status is not a number. value: "${response2.status}" type: ${typeof response2.status}`
              );
            }
            fetched.push({
              url: same_origin ? url.href.slice(event.url.origin.length) : url.href,
              method: event.request.method,
              request_body: (
                /** @type {string | ArrayBufferView | undefined} */
                input instanceof Request && cloned_body ? await stream_to_string(cloned_body) : init2?.body
              ),
              request_headers: init2?.headers,
              response_body: body,
              response: response2
            });
          }
          if (dependency) {
            dependency.body = body;
          }
          return body;
        }
        if (key2 === "arrayBuffer") {
          return async () => {
            const buffer = await response2.arrayBuffer();
            if (dependency) {
              dependency.body = new Uint8Array(buffer);
            }
            return buffer;
          };
        }
        if (key2 === "text") {
          return text22;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text22());
          };
        }
        return Reflect.get(response2, key2, response2);
      }
    });
    if (csr) {
      const get = response.headers.get;
      response.headers.get = (key2) => {
        const lower = key2.toLowerCase();
        const value = get.call(response.headers, lower);
        if (value && !lower.startsWith("x-sveltekit-")) {
          const included = resolve_opts.filterSerializedResponseHeaders(lower, value);
          if (!included) {
            throw new Error(
              `Failed to get response header "${lower}" \u2014 it must be included by the \`filterSerializedResponseHeaders\` option: https://kit.svelte.dev/docs/hooks#server-hooks-handle (at ${event.route.id})`
            );
          }
        }
        return value;
      };
    }
    return proxy;
  };
}
async function stream_to_string(stream) {
  let result = "";
  const reader = stream.getReader();
  const decoder2 = new TextDecoder();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    result += decoder2.decode(value);
  }
  return result;
}
var subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0 && stop) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function hash(...values) {
  let hash2 = 5381;
  for (const value of values) {
    if (typeof value === "string") {
      let i = value.length;
      while (i)
        hash2 = hash2 * 33 ^ value.charCodeAt(--i);
    } else if (ArrayBuffer.isView(value)) {
      const buffer = new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
      let i = buffer.length;
      while (i)
        hash2 = hash2 * 33 ^ buffer[--i];
    } else {
      throw new TypeError("value must be a string or TypedArray");
    }
  }
  return (hash2 >>> 0).toString(36);
}
var escape_html_attr_dict = {
  "&": "&amp;",
  '"': "&quot;"
};
var escape_html_attr_regex = new RegExp(
  // special characters
  `[${Object.keys(escape_html_attr_dict).join("")}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  "g"
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var replacements = {
  "<": "\\u003C",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029"
};
var pattern = new RegExp(`[${Object.keys(replacements).join("")}]`, "g");
function serialize_data(fetched, filter, prerendering = false) {
  const headers = {};
  let cache_control = null;
  let age = null;
  let vary = false;
  for (const [key2, value] of fetched.response.headers) {
    if (filter(key2, value)) {
      headers[key2] = value;
    }
    if (key2 === "cache-control")
      cache_control = value;
    if (key2 === "age")
      age = value;
    if (key2 === "vary")
      vary = true;
  }
  const payload = {
    status: fetched.response.status,
    statusText: fetched.response.statusText,
    headers,
    body: fetched.response_body
  };
  const safe_payload = JSON.stringify(payload).replace(pattern, (match) => replacements[match]);
  const attrs = [
    'type="application/json"',
    "data-sveltekit-fetched",
    `data-url=${escape_html_attr(fetched.url)}`
  ];
  if (fetched.request_headers || fetched.request_body) {
    const values = [];
    if (fetched.request_headers) {
      values.push([...new Headers(fetched.request_headers)].join(","));
    }
    if (fetched.request_body) {
      values.push(fetched.request_body);
    }
    attrs.push(`data-hash="${hash(...values)}"`);
  }
  if (!prerendering && fetched.method === "GET" && cache_control && !vary) {
    const match = /s-maxage=(\d+)/g.exec(cache_control) ?? /max-age=(\d+)/g.exec(cache_control);
    if (match) {
      const ttl = +match[1] - +(age ?? "0");
      attrs.push(`data-ttl="${ttl}"`);
    }
  }
  return `<script ${attrs.join(" ")}>${safe_payload}<\/script>`;
}
var s = JSON.stringify;
var encoder$2 = new TextEncoder();
function sha256(data) {
  if (!key[0])
    precompute();
  const out = init.slice(0);
  const array2 = encode(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[i2 + 1 & 15];
        b = w[i2 + 14 & 15];
        tmp = w[i2 & 15] = (a >>> 7 ^ a >>> 18 ^ a >>> 3 ^ a << 25 ^ a << 14) + (b >>> 17 ^ b >>> 19 ^ b >>> 10 ^ b << 15 ^ b << 13) + w[i2 & 15] + w[i2 + 9 & 15] | 0;
      }
      tmp = tmp + out7 + (out4 >>> 6 ^ out4 >>> 11 ^ out4 >>> 25 ^ out4 << 26 ^ out4 << 21 ^ out4 << 7) + (out6 ^ out4 & (out5 ^ out6)) + key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = out3 + tmp | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 = tmp + (out1 & out2 ^ out3 & (out1 ^ out2)) + (out1 >>> 2 ^ out1 >>> 13 ^ out1 >>> 22 ^ out1 << 30 ^ out1 << 19 ^ out1 << 10) | 0;
    }
    out[0] = out[0] + out0 | 0;
    out[1] = out[1] + out1 | 0;
    out[2] = out[2] + out2 | 0;
    out[3] = out[3] + out3 | 0;
    out[4] = out[4] + out4 | 0;
    out[5] = out[5] + out5 | 0;
    out[6] = out[6] + out6 | 0;
    out[7] = out[7] + out7 | 0;
  }
  const bytes2 = new Uint8Array(out.buffer);
  reverse_endianness(bytes2);
  return base64(bytes2);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes2) {
  for (let i = 0; i < bytes2.length; i += 4) {
    const a = bytes2[i + 0];
    const b = bytes2[i + 1];
    const c = bytes2[i + 2];
    const d = bytes2[i + 3];
    bytes2[i + 0] = d;
    bytes2[i + 1] = c;
    bytes2[i + 2] = b;
    bytes2[i + 3] = a;
  }
}
function encode(str) {
  const encoded = encoder$2.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes2 = new Uint8Array(size / 8);
  bytes2.set(encoded);
  bytes2[encoded.length] = 128;
  reverse_endianness(bytes2);
  const words = new Uint32Array(bytes2.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
function base64(bytes2) {
  const l = bytes2.length;
  let result = "";
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars2[bytes2[i - 2] >> 2];
    result += chars2[(bytes2[i - 2] & 3) << 4 | bytes2[i - 1] >> 4];
    result += chars2[(bytes2[i - 1] & 15) << 2 | bytes2[i] >> 6];
    result += chars2[bytes2[i] & 63];
  }
  if (i === l + 1) {
    result += chars2[bytes2[i - 2] >> 2];
    result += chars2[(bytes2[i - 2] & 3) << 4];
    result += "==";
  }
  if (i === l) {
    result += chars2[bytes2[i - 2] >> 2];
    result += chars2[(bytes2[i - 2] & 3) << 4 | bytes2[i - 1] >> 4];
    result += chars2[(bytes2[i - 1] & 15) << 2];
    result += "=";
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  "self",
  "unsafe-eval",
  "unsafe-hashes",
  "unsafe-inline",
  "none",
  "strict-dynamic",
  "report-sample",
  "wasm-unsafe-eval",
  "script"
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var _use_hashes, _script_needs_csp, _style_needs_csp, _directives, _script_src, _style_src, _nonce;
var BaseProvider = class {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    /** @type {boolean} */
    __privateAdd(this, _use_hashes, void 0);
    /** @type {boolean} */
    __privateAdd(this, _script_needs_csp, void 0);
    /** @type {boolean} */
    __privateAdd(this, _style_needs_csp, void 0);
    /** @type {import('types').CspDirectives} */
    __privateAdd(this, _directives, void 0);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _script_src, void 0);
    /** @type {import('types').Csp.Source[]} */
    __privateAdd(this, _style_src, void 0);
    /** @type {string} */
    __privateAdd(this, _nonce, void 0);
    __privateSet(this, _use_hashes, use_hashes);
    __privateSet(this, _directives, directives);
    const d = __privateGet(this, _directives);
    __privateSet(this, _script_src, []);
    __privateSet(this, _style_src, []);
    const effective_script_src = d["script-src"] || d["default-src"];
    const effective_style_src = d["style-src"] || d["default-src"];
    __privateSet(this, _script_needs_csp, !!effective_script_src && effective_script_src.filter((value) => value !== "unsafe-inline").length > 0);
    __privateSet(this, _style_needs_csp, !!effective_style_src && effective_style_src.filter((value) => value !== "unsafe-inline").length > 0);
    this.script_needs_nonce = __privateGet(this, _script_needs_csp) && !__privateGet(this, _use_hashes);
    this.style_needs_nonce = __privateGet(this, _style_needs_csp) && !__privateGet(this, _use_hashes);
    __privateSet(this, _nonce, nonce);
  }
  /** @param {string} content */
  add_script(content) {
    if (__privateGet(this, _script_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _script_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _script_src).length === 0) {
        __privateGet(this, _script_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  /** @param {string} content */
  add_style(content) {
    if (__privateGet(this, _style_needs_csp)) {
      if (__privateGet(this, _use_hashes)) {
        __privateGet(this, _style_src).push(`sha256-${sha256(content)}`);
      } else if (__privateGet(this, _style_src).length === 0) {
        __privateGet(this, _style_src).push(`nonce-${__privateGet(this, _nonce)}`);
      }
    }
  }
  /**
   * @param {boolean} [is_meta]
   */
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...__privateGet(this, _directives) };
    if (__privateGet(this, _style_src).length > 0) {
      directives["style-src"] = [
        ...directives["style-src"] || directives["default-src"] || [],
        ...__privateGet(this, _style_src)
      ];
    }
    if (__privateGet(this, _script_src).length > 0) {
      directives["script-src"] = [
        ...directives["script-src"] || directives["default-src"] || [],
        ...__privateGet(this, _script_src)
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === "frame-ancestors" || key2 === "report-uri" || key2 === "sandbox")) {
        continue;
      }
      const value = (
        /** @type {string[] | true} */
        directives[key2]
      );
      if (!value)
        continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(" "));
    }
    return header.join("; ");
  }
};
_use_hashes = new WeakMap();
_script_needs_csp = new WeakMap();
_style_needs_csp = new WeakMap();
_directives = new WeakMap();
_script_src = new WeakMap();
_style_src = new WeakMap();
_nonce = new WeakMap();
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  /**
   * @param {boolean} use_hashes
   * @param {import('types').CspDirectives} directives
   * @param {string} nonce
   */
  constructor(use_hashes, directives, nonce) {
    super(use_hashes, directives, nonce);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = directives["report-to"]?.length ?? 0 > 0;
      const has_report_uri = directives["report-uri"]?.length ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          "`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both"
        );
      }
    }
  }
};
var Csp = class {
  /**
   * @param {import('./types').CspConfig} config
   * @param {import('./types').CspOpts} opts
   */
  constructor({ mode, directives, reportOnly }, { prerender }) {
    /** @readonly */
    __publicField(this, "nonce", generate_nonce());
    /** @type {CspProvider} */
    __publicField(this, "csp_provider");
    /** @type {CspReportOnlyProvider} */
    __publicField(this, "report_only_provider");
    const use_hashes = mode === "hash" || mode === "auto" && prerender;
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  /** @param {string} content */
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  /** @param {string} content */
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
function defer() {
  let fulfil;
  let reject;
  const promise = new Promise((f, r) => {
    fulfil = f;
    reject = r;
  });
  return { promise, fulfil, reject };
}
function create_async_iterator() {
  let deferred = [defer()];
  return {
    iterator: {
      [Symbol.asyncIterator]() {
        return {
          next: async () => {
            const next = await deferred[0].promise;
            if (!next.done)
              deferred.shift();
            return next;
          }
        };
      }
    },
    push: (value) => {
      deferred[deferred.length - 1].fulfil({
        value,
        done: false
      });
      deferred.push(defer());
    },
    done: () => {
      deferred[deferred.length - 1].fulfil({ done: true });
    }
  };
}
var SVELTE_KIT_ASSETS = "/_svelte_kit_assets";
var updated = {
  ...readable(false),
  check: () => false
};
var encoder$1 = new TextEncoder();
async function render_response({
  branch,
  fetched,
  options: options2,
  manifest: manifest2,
  state,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  action_result
}) {
  if (state.prerendering) {
    if (options2.csp.mode === "nonce") {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options2.app_template_contains_nonce) {
      throw new Error("Cannot use prerendering if page template contains %sveltekit.nonce%");
    }
  }
  const { client } = manifest2._;
  const modulepreloads = /* @__PURE__ */ new Set([...client.start.imports, ...client.app.imports]);
  const stylesheets4 = new Set(client.app.stylesheets);
  const fonts4 = new Set(client.app.fonts);
  const link_header_preloads = /* @__PURE__ */ new Set();
  const inline_styles = /* @__PURE__ */ new Map();
  let rendered;
  const form_value = action_result?.type === "success" || action_result?.type === "failure" ? action_result.data ?? null : null;
  let base$1 = base;
  let assets$1 = assets;
  let base_expression = s(base);
  if (!state.prerendering?.fallback) {
    const segments = event.url.pathname.slice(base.length).split("/");
    if (segments.length === 1 && base !== "") {
      base$1 = `./${base.split("/").at(-1)}`;
      base_expression = `new URL(${s(base$1)}, location).pathname`;
    } else {
      base$1 = segments.slice(2).map(() => "..").join("/") || ".";
      base_expression = `new URL(${s(base$1)}, location).pathname.slice(0, -1)`;
    }
    if (!assets || assets[0] === "/" && assets !== SVELTE_KIT_ASSETS) {
      assets$1 = base$1;
    }
  }
  if (page_config.ssr) {
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        updated
      },
      constructors: await Promise.all(branch.map(({ node }) => node.component())),
      form: form_value
    };
    let data2 = {};
    for (let i = 0; i < branch.length; i += 1) {
      data2 = { ...data2, ...branch[i].data };
      props[`data_${i}`] = data2;
    }
    props.page = {
      error: error2,
      params: (
        /** @type {Record<string, any>} */
        event.params
      ),
      route: event.route,
      status,
      url: event.url,
      data: data2,
      form: form_value
    };
    {
      try {
        rendered = options2.root.render(props);
      } finally {
        reset();
      }
    }
    for (const { node } of branch) {
      for (const url of node.imports)
        modulepreloads.add(url);
      for (const url of node.stylesheets)
        stylesheets4.add(url);
      for (const url of node.fonts)
        fonts4.add(url);
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
    }
  } else {
    rendered = { head: "", html: "", css: { code: "", map: null } };
  }
  let head = "";
  let body = rendered.html;
  const csp = new Csp(options2.csp, {
    prerender: !!state.prerendering
  });
  const prefixed = (path) => {
    if (path.startsWith("/")) {
      return base + path;
    }
    return `${assets$1}/${path}`;
  };
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join("\n");
    const attributes = [];
    if (csp.style_needs_nonce)
      attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join("")}>${content}</style>`;
  }
  for (const dep of stylesheets4) {
    const path = prefixed(dep);
    const attributes = ['rel="stylesheet"'];
    if (inline_styles.has(dep)) {
      attributes.push("disabled", 'media="(max-width: 0)"');
    } else {
      if (resolve_opts.preload({ type: "css", path })) {
        const preload_atts = ['rel="preload"', 'as="style"'];
        link_header_preloads.add(`<${encodeURI(path)}>; ${preload_atts.join(";")}; nopush`);
      }
    }
    head += `
		<link href="${path}" ${attributes.join(" ")}>`;
  }
  for (const dep of fonts4) {
    const path = prefixed(dep);
    if (resolve_opts.preload({ type: "font", path })) {
      const ext = dep.slice(dep.lastIndexOf(".") + 1);
      const attributes = [
        'rel="preload"',
        'as="font"',
        `type="font/${ext}"`,
        `href="${path}"`,
        "crossorigin"
      ];
      head += `
		<link ${attributes.join(" ")}>`;
    }
  }
  const global = `__sveltekit_${options2.version_hash}`;
  const { data, chunks } = get_data(
    event,
    options2,
    branch.map((b) => b.server_data),
    global
  );
  if (page_config.ssr && page_config.csr) {
    body += `
			${fetched.map(
      (item) => serialize_data(item, resolve_opts.filterSerializedResponseHeaders, !!state.prerendering)
    ).join("\n			")}`;
  }
  if (page_config.csr) {
    const included_modulepreloads = Array.from(modulepreloads, (dep) => prefixed(dep)).filter(
      (path) => resolve_opts.preload({ type: "js", path })
    );
    for (const path of included_modulepreloads) {
      link_header_preloads.add(`<${encodeURI(path)}>; rel="modulepreload"; nopush`);
      if (options2.preload_strategy !== "modulepreload") {
        head += `
		<link rel="preload" as="script" crossorigin="anonymous" href="${path}">`;
      } else if (state.prerendering) {
        head += `
		<link rel="modulepreload" href="${path}">`;
      }
    }
    const blocks = [];
    const properties = [
      `env: ${s(public_env)}`,
      assets && `assets: ${s(assets)}`,
      `base: ${base_expression}`,
      `element: document.currentScript.parentElement`
    ].filter(Boolean);
    if (chunks) {
      blocks.push(`const deferred = new Map();`);
      properties.push(`defer: (id) => new Promise((fulfil, reject) => {
							deferred.set(id, { fulfil, reject });
						})`);
      properties.push(`resolve: ({ id, data, error }) => {
							const { fulfil, reject } = deferred.get(id);
							deferred.delete(id);

							if (error) reject(error);
							else fulfil(data);
						}`);
    }
    blocks.push(`${global} = {
						${properties.join(",\n						")}
					};`);
    const args = [`app`, `${global}.element`];
    if (page_config.ssr) {
      const serialized = { form: "null", error: "null" };
      blocks.push(`const data = ${data};`);
      if (form_value) {
        serialized.form = uneval_action_response(
          form_value,
          /** @type {string} */
          event.route.id
        );
      }
      if (error2) {
        serialized.error = uneval(error2);
      }
      const hydrate = [
        `node_ids: [${branch.map(({ node }) => node.index).join(", ")}]`,
        `data`,
        `form: ${serialized.form}`,
        `error: ${serialized.error}`
      ];
      if (status !== 200) {
        hydrate.push(`status: ${status}`);
      }
      if (options2.embedded) {
        hydrate.push(`params: ${uneval(event.params)}`, `route: ${s(event.route)}`);
      }
      args.push(`{
							${hydrate.join(",\n							")}
						}`);
    }
    blocks.push(`Promise.all([
						import(${s(prefixed(client.start.file))}),
						import(${s(prefixed(client.app.file))})
					]).then(([kit, app]) => {
						kit.start(${args.join(", ")});
					});`);
    if (options2.service_worker) {
      const opts = "";
      blocks.push(`if ('serviceWorker' in navigator) {
						addEventListener('load', function () {
							navigator.serviceWorker.register('${prefixed("service-worker.js")}'${opts});
						});
					}`);
    }
    const init_app = `
				{
					${blocks.join("\n\n					")}
				}
			`;
    csp.add_script(init_app);
    body += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ""}>${init_app}<\/script>
		`;
  }
  const headers = new Headers({
    "x-sveltekit-page": "true",
    "content-type": "text/html"
  });
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (state.prerendering.cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="${state.prerendering.cache}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join("\n") + head;
    }
  } else {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers.set("content-security-policy", csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers.set("content-security-policy-report-only", report_only_header);
    }
    if (link_header_preloads.size) {
      headers.set("link", Array.from(link_header_preloads).join(", "));
    }
  }
  head += rendered.head;
  const html = options2.templates.app({
    head,
    body,
    assets: assets$1,
    nonce: (
      /** @type {string} */
      csp.nonce
    ),
    env: public_env
  });
  const transformed = await resolve_opts.transformPageChunk({
    html,
    done: true
  }) || "";
  if (!chunks) {
    headers.set("etag", `"${hash(transformed)}"`);
  }
  return !chunks ? text(transformed, {
    status,
    headers
  }) : new Response(
    new ReadableStream({
      async start(controller) {
        controller.enqueue(encoder$1.encode(transformed + "\n"));
        for await (const chunk of chunks) {
          controller.enqueue(encoder$1.encode(chunk));
        }
        controller.close();
      },
      type: "bytes"
    }),
    {
      headers: {
        "content-type": "text/html"
      }
    }
  );
}
function get_data(event, options2, nodes, global) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  function replacer(thing) {
    if (typeof thing?.then === "function") {
      const id = promise_id++;
      count += 1;
      thing.then(
        /** @param {any} data */
        (data) => ({ data })
      ).catch(
        /** @param {any} error */
        async (error2) => ({
          error: await handle_error_and_jsonify(event, options2, error2)
        })
      ).then(
        /**
         * @param {{data: any; error: any}} result
         */
        async ({ data, error: error2 }) => {
          count -= 1;
          let str;
          try {
            str = uneval({ id, data, error: error2 }, replacer);
          } catch (e) {
            error2 = await handle_error_and_jsonify(
              event,
              options2,
              new Error(`Failed to serialize promise while rendering ${event.route.id}`)
            );
            data = void 0;
            str = uneval({ id, data, error: error2 }, replacer);
          }
          push(`<script>${global}.resolve(${str})<\/script>
`);
          if (count === 0)
            done();
        }
      );
      return `${global}.defer(${id})`;
    }
  }
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      return `{"type":"data","data":${uneval(node.data, replacer)},${stringify_uses(node)}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `[${strings.join(",")}]`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
function get_option(nodes, option) {
  return nodes.reduce(
    (value, node) => {
      return (
        /** @type {any} TypeScript's too dumb to understand this */
        node?.universal?.[option] ?? node?.server?.[option] ?? value
      );
    },
    /** @type {Value | undefined} */
    void 0
  );
}
async function respond_with_error({
  event,
  options: options2,
  manifest: manifest2,
  state,
  status,
  error: error2,
  resolve_opts
}) {
  const fetched = [];
  try {
    const branch = [];
    const default_layout = await manifest2._.nodes[0]();
    const ssr = get_option([default_layout], "ssr") ?? true;
    const csr = get_option([default_layout], "csr") ?? true;
    if (ssr) {
      state.error = true;
      const server_data_promise = load_server_data({
        event,
        state,
        node: default_layout,
        parent: async () => ({})
      });
      const server_data = await server_data_promise;
      const data = await load_data({
        event,
        fetched,
        node: default_layout,
        parent: async () => ({}),
        resolve_opts,
        server_data_promise,
        state,
        csr
      });
      branch.push(
        {
          node: default_layout,
          server_data,
          data
        },
        {
          node: await manifest2._.nodes[1](),
          // 1 is always the root error
          data: null,
          server_data: null
        }
      );
    }
    return await render_response({
      options: options2,
      manifest: manifest2,
      state,
      page_config: {
        ssr,
        csr: get_option([default_layout], "csr") ?? true
      },
      status,
      error: await handle_error_and_jsonify(event, options2, error2),
      branch,
      fetched,
      event,
      resolve_opts
    });
  } catch (e) {
    if (e instanceof Redirect) {
      return redirect_response(e.status, e.location);
    }
    return static_error_page(
      options2,
      e instanceof HttpError ? e.status : 500,
      (await handle_error_and_jsonify(event, options2, e)).message
    );
  }
}
function once(fn) {
  let done = false;
  let result;
  return () => {
    if (done)
      return result;
    done = true;
    return result = fn();
  };
}
var INVALIDATED_PARAM = "x-sveltekit-invalidated";
var encoder = new TextEncoder();
async function render_data(event, route, options2, manifest2, state, invalidated_data_nodes, trailing_slash) {
  if (!route.page) {
    return new Response(void 0, {
      status: 404
    });
  }
  try {
    const node_ids = [...route.page.layouts, route.page.leaf];
    const invalidated = invalidated_data_nodes ?? node_ids.map(() => true);
    let aborted = false;
    const url = new URL(event.url);
    url.pathname = normalize_path(url.pathname, trailing_slash);
    const new_event = { ...event, url };
    const functions = node_ids.map((n, i) => {
      return once(async () => {
        try {
          if (aborted) {
            return (
              /** @type {import('types').ServerDataSkippedNode} */
              {
                type: "skip"
              }
            );
          }
          const node = n == void 0 ? n : await manifest2._.nodes[n]();
          return load_server_data({
            event: new_event,
            state,
            node,
            parent: async () => {
              const data2 = {};
              for (let j = 0; j < i; j += 1) {
                const parent = (
                  /** @type {import('types').ServerDataNode | null} */
                  await functions[j]()
                );
                if (parent) {
                  Object.assign(data2, parent.data);
                }
              }
              return data2;
            }
          });
        } catch (e) {
          aborted = true;
          throw e;
        }
      });
    });
    const promises = functions.map(async (fn, i) => {
      if (!invalidated[i]) {
        return (
          /** @type {import('types').ServerDataSkippedNode} */
          {
            type: "skip"
          }
        );
      }
      return fn();
    });
    let length = promises.length;
    const nodes = await Promise.all(
      promises.map(
        (p, i) => p.catch(async (error2) => {
          if (error2 instanceof Redirect) {
            throw error2;
          }
          length = Math.min(length, i + 1);
          return (
            /** @type {import('types').ServerErrorNode} */
            {
              type: "error",
              error: await handle_error_and_jsonify(event, options2, error2),
              status: error2 instanceof HttpError ? error2.status : void 0
            }
          );
        })
      )
    );
    const { data, chunks } = get_data_json(event, options2, nodes);
    if (!chunks) {
      return json_response(data);
    }
    return new Response(
      new ReadableStream({
        async start(controller) {
          controller.enqueue(encoder.encode(data));
          for await (const chunk of chunks) {
            controller.enqueue(encoder.encode(chunk));
          }
          controller.close();
        },
        type: "bytes"
      }),
      {
        headers: {
          // we use a proprietary content type to prevent buffering.
          // the `text` prefix makes it inspectable
          "content-type": "text/sveltekit-data",
          "cache-control": "private, no-store"
        }
      }
    );
  } catch (e) {
    const error2 = normalize_error(e);
    if (error2 instanceof Redirect) {
      return redirect_json_response(error2);
    } else {
      return json_response(await handle_error_and_jsonify(event, options2, error2), 500);
    }
  }
}
function json_response(json2, status = 200) {
  return text(typeof json2 === "string" ? json2 : JSON.stringify(json2), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "private, no-store"
    }
  });
}
function redirect_json_response(redirect) {
  return json_response({
    type: "redirect",
    location: redirect.location
  });
}
function get_data_json(event, options2, nodes) {
  let promise_id = 1;
  let count = 0;
  const { iterator, push, done } = create_async_iterator();
  const reducers = {
    /** @param {any} thing */
    Promise: (thing) => {
      if (typeof thing?.then === "function") {
        const id = promise_id++;
        count += 1;
        let key2 = "data";
        thing.catch(
          /** @param {any} e */
          async (e) => {
            key2 = "error";
            return handle_error_and_jsonify(
              event,
              options2,
              /** @type {any} */
              e
            );
          }
        ).then(
          /** @param {any} value */
          async (value) => {
            let str;
            try {
              str = stringify(value, reducers);
            } catch (e) {
              const error2 = await handle_error_and_jsonify(
                event,
                options2,
                new Error(`Failed to serialize promise while rendering ${event.route.id}`)
              );
              key2 = "error";
              str = stringify(error2, reducers);
            }
            count -= 1;
            push(`{"type":"chunk","id":${id},"${key2}":${str}}
`);
            if (count === 0)
              done();
          }
        );
        return id;
      }
    }
  };
  try {
    const strings = nodes.map((node) => {
      if (!node)
        return "null";
      if (node.type === "error" || node.type === "skip") {
        return JSON.stringify(node);
      }
      return `{"type":"data","data":${stringify(node.data, reducers)},${stringify_uses(
        node
      )}${node.slash ? `,"slash":${JSON.stringify(node.slash)}` : ""}}`;
    });
    return {
      data: `{"type":"data","nodes":[${strings.join(",")}]}
`,
      chunks: count > 0 ? iterator : null
    };
  } catch (e) {
    throw new Error(clarify_devalue_error(
      event,
      /** @type {any} */
      e
    ));
  }
}
var MAX_DEPTH = 10;
async function render_page(event, page2, options2, manifest2, state, resolve_opts) {
  if (state.depth > MAX_DEPTH) {
    return text(`Not found: ${event.url.pathname}`, {
      status: 404
      // TODO in some cases this should be 500. not sure how to differentiate
    });
  }
  if (is_action_json_request(event)) {
    const node = await manifest2._.nodes[page2.leaf]();
    return handle_action_json_request(event, options2, node?.server);
  }
  try {
    const nodes = await Promise.all([
      // we use == here rather than === because [undefined] serializes as "[null]"
      ...page2.layouts.map((n) => n == void 0 ? n : manifest2._.nodes[n]()),
      manifest2._.nodes[page2.leaf]()
    ]);
    const leaf_node = (
      /** @type {import('types').SSRNode} */
      nodes.at(-1)
    );
    let status = 200;
    let action_result = void 0;
    if (is_action_request(event)) {
      action_result = await handle_action_request(event, leaf_node.server);
      if (action_result?.type === "redirect") {
        return redirect_response(action_result.status, action_result.location);
      }
      if (action_result?.type === "error") {
        const error2 = action_result.error;
        status = error2 instanceof HttpError ? error2.status : 500;
      }
      if (action_result?.type === "failure") {
        status = action_result.status;
      }
    }
    const should_prerender_data = nodes.some((node) => node?.server);
    const data_pathname = add_data_suffix(event.url.pathname);
    const should_prerender = get_option(nodes, "prerender") ?? false;
    if (should_prerender) {
      const mod = leaf_node.server;
      if (mod?.actions) {
        throw new Error("Cannot prerender pages with actions");
      }
    } else if (state.prerendering) {
      return new Response(void 0, {
        status: 204
      });
    }
    state.prerender_default = should_prerender;
    const fetched = [];
    if (get_option(nodes, "ssr") === false) {
      return await render_response({
        branch: [],
        fetched,
        page_config: {
          ssr: false,
          csr: get_option(nodes, "csr") ?? true
        },
        status,
        error: null,
        event,
        options: options2,
        manifest: manifest2,
        state,
        resolve_opts
      });
    }
    let branch = [];
    let load_error = null;
    const server_promises = nodes.map((node, i) => {
      if (load_error) {
        throw load_error;
      }
      return Promise.resolve().then(async () => {
        try {
          if (node === leaf_node && action_result?.type === "error") {
            throw action_result.error;
          }
          return await load_server_data({
            event,
            state,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                const parent = await server_promises[j];
                if (parent)
                  Object.assign(data, await parent.data);
              }
              return data;
            }
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    const csr = get_option(nodes, "csr") ?? true;
    const load_promises = nodes.map((node, i) => {
      if (load_error)
        throw load_error;
      return Promise.resolve().then(async () => {
        try {
          return await load_data({
            event,
            fetched,
            node,
            parent: async () => {
              const data = {};
              for (let j = 0; j < i; j += 1) {
                Object.assign(data, await load_promises[j]);
              }
              return data;
            },
            resolve_opts,
            server_data_promise: server_promises[i],
            state,
            csr
          });
        } catch (e) {
          load_error = /** @type {Error} */
          e;
          throw load_error;
        }
      });
    });
    for (const p of server_promises)
      p.catch(() => {
      });
    for (const p of load_promises)
      p.catch(() => {
      });
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      if (node) {
        try {
          const server_data = await server_promises[i];
          const data = await load_promises[i];
          branch.push({ node, server_data, data });
        } catch (e) {
          const err = normalize_error(e);
          if (err instanceof Redirect) {
            if (state.prerendering && should_prerender_data) {
              const body = JSON.stringify({
                type: "redirect",
                location: err.location
              });
              state.prerendering.dependencies.set(data_pathname, {
                response: text(body),
                body
              });
            }
            return redirect_response(err.status, err.location);
          }
          const status2 = err instanceof HttpError ? err.status : 500;
          const error2 = await handle_error_and_jsonify(event, options2, err);
          while (i--) {
            if (page2.errors[i]) {
              const index4 = (
                /** @type {number} */
                page2.errors[i]
              );
              const node2 = await manifest2._.nodes[index4]();
              let j = i;
              while (!branch[j])
                j -= 1;
              return await render_response({
                event,
                options: options2,
                manifest: manifest2,
                state,
                resolve_opts,
                page_config: { ssr: true, csr: true },
                status: status2,
                error: error2,
                branch: compact(branch.slice(0, j + 1)).concat({
                  node: node2,
                  data: null,
                  server_data: null
                }),
                fetched
              });
            }
          }
          return static_error_page(options2, status2, error2.message);
        }
      } else {
        branch.push(null);
      }
    }
    if (state.prerendering && should_prerender_data) {
      let { data, chunks } = get_data_json(
        event,
        options2,
        branch.map((node) => node?.server_data)
      );
      if (chunks) {
        for await (const chunk of chunks) {
          data += chunk;
        }
      }
      state.prerendering.dependencies.set(data_pathname, {
        response: text(data),
        body: data
      });
    }
    return await render_response({
      event,
      options: options2,
      manifest: manifest2,
      state,
      resolve_opts,
      page_config: {
        csr: get_option(nodes, "csr") ?? true,
        ssr: true
      },
      status,
      error: null,
      branch: compact(branch),
      action_result,
      fetched
    });
  } catch (e) {
    return await respond_with_error({
      event,
      options: options2,
      manifest: manifest2,
      state,
      status: 500,
      error: e,
      resolve_opts
    });
  }
}
function exec(match, params, matchers) {
  const result = {};
  const values = match.slice(1);
  let buffered = 0;
  for (let i = 0; i < params.length; i += 1) {
    const param = params[i];
    const value = values[i - buffered];
    if (param.chained && param.rest && buffered) {
      result[param.name] = values.slice(i - buffered, i + 1).filter((s2) => s2).join("/");
      buffered = 0;
      continue;
    }
    if (value === void 0) {
      if (param.rest)
        result[param.name] = "";
      continue;
    }
    if (!param.matcher || matchers[param.matcher](value)) {
      result[param.name] = value;
      const next_param = params[i + 1];
      const next_value = values[i + 1];
      if (next_param && !next_param.rest && next_param.optional && next_value) {
        buffered = 0;
      }
      continue;
    }
    if (param.optional && param.chained) {
      buffered++;
      continue;
    }
    return;
  }
  if (buffered)
    return;
  return result;
}
function get_cookies(request, url, trailing_slash) {
  const header = request.headers.get("cookie") ?? "";
  const initial_cookies = (0, import_cookie.parse)(header, { decode: (value) => value });
  const normalized_url = normalize_path(url.pathname, trailing_slash);
  const default_path = normalized_url.split("/").slice(0, -1).join("/") || "/";
  const new_cookies = {};
  const defaults = {
    httpOnly: true,
    sameSite: "lax",
    secure: url.hostname === "localhost" && url.protocol === "http:" ? false : true
  };
  const cookies = {
    // The JSDoc param annotations appearing below for get, set and delete
    // are necessary to expose the `cookie` library types to
    // typescript users. `@type {import('types').Cookies}` above is not
    // sufficient to do so.
    /**
     * @param {string} name
     * @param {import('cookie').CookieParseOptions} opts
     */
    get(name, opts) {
      const c = new_cookies[name];
      if (c && domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
        return c.value;
      }
      const decoder2 = opts?.decode || decodeURIComponent;
      const req_cookies = (0, import_cookie.parse)(header, { decode: decoder2 });
      const cookie = req_cookies[name];
      return cookie;
    },
    /**
     * @param {import('cookie').CookieParseOptions} opts
     */
    getAll(opts) {
      const decoder2 = opts?.decode || decodeURIComponent;
      const cookies2 = (0, import_cookie.parse)(header, { decode: decoder2 });
      for (const c of Object.values(new_cookies)) {
        if (domain_matches(url.hostname, c.options.domain) && path_matches(url.pathname, c.options.path)) {
          cookies2[c.name] = c.value;
        }
      }
      return Object.entries(cookies2).map(([name, value]) => ({ name, value }));
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    set(name, value, opts = {}) {
      let path = opts.path ?? default_path;
      new_cookies[name] = {
        name,
        value,
        options: {
          ...defaults,
          ...opts,
          path
        }
      };
    },
    /**
     * @param {string} name
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    delete(name, opts = {}) {
      cookies.set(name, "", {
        ...opts,
        maxAge: 0
      });
    },
    /**
     * @param {string} name
     * @param {string} value
     * @param {import('cookie').CookieSerializeOptions} opts
     */
    serialize(name, value, opts) {
      return (0, import_cookie.serialize)(name, value, {
        ...defaults,
        ...opts
      });
    }
  };
  function get_cookie_header(destination, header2) {
    const combined_cookies = {
      // cookies sent by the user agent have lowest precedence
      ...initial_cookies
    };
    for (const key2 in new_cookies) {
      const cookie = new_cookies[key2];
      if (!domain_matches(destination.hostname, cookie.options.domain))
        continue;
      if (!path_matches(destination.pathname, cookie.options.path))
        continue;
      const encoder2 = cookie.options.encode || encodeURIComponent;
      combined_cookies[cookie.name] = encoder2(cookie.value);
    }
    if (header2) {
      const parsed = (0, import_cookie.parse)(header2, { decode: (value) => value });
      for (const name in parsed) {
        combined_cookies[name] = parsed[name];
      }
    }
    return Object.entries(combined_cookies).map(([name, value]) => `${name}=${value}`).join("; ");
  }
  return { cookies, new_cookies, get_cookie_header };
}
function domain_matches(hostname, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint[0] === "." ? constraint.slice(1) : constraint;
  if (hostname === normalized)
    return true;
  return hostname.endsWith("." + normalized);
}
function path_matches(path, constraint) {
  if (!constraint)
    return true;
  const normalized = constraint.endsWith("/") ? constraint.slice(0, -1) : constraint;
  if (path === normalized)
    return true;
  return path.startsWith(normalized + "/");
}
function add_cookies_to_headers(headers, cookies) {
  for (const new_cookie of cookies) {
    const { name, value, options: options2 } = new_cookie;
    headers.append("set-cookie", (0, import_cookie.serialize)(name, value, options2));
  }
}
function create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header }) {
  return async (info, init2) => {
    const original_request = normalize_fetch_input(info, init2, event.url);
    const request_body = init2?.body;
    let mode = (info instanceof Request ? info.mode : init2?.mode) ?? "cors";
    let credentials = (info instanceof Request ? info.credentials : init2?.credentials) ?? "same-origin";
    return await options2.hooks.handleFetch({
      event,
      request: original_request,
      fetch: async (info2, init3) => {
        const request = normalize_fetch_input(info2, init3, event.url);
        const url = new URL(request.url);
        if (!request.headers.has("origin")) {
          request.headers.set("origin", event.url.origin);
        }
        if (info2 !== original_request) {
          mode = (info2 instanceof Request ? info2.mode : init3?.mode) ?? "cors";
          credentials = (info2 instanceof Request ? info2.credentials : init3?.credentials) ?? "same-origin";
        }
        if ((request.method === "GET" || request.method === "HEAD") && (mode === "no-cors" && url.origin !== event.url.origin || url.origin === event.url.origin)) {
          request.headers.delete("origin");
        }
        if (url.origin !== event.url.origin) {
          if (`.${url.hostname}`.endsWith(`.${event.url.hostname}`) && credentials !== "omit") {
            const cookie = get_cookie_header(url, request.headers.get("cookie"));
            if (cookie)
              request.headers.set("cookie", cookie);
          }
          return fetch(request);
        }
        let response;
        const prefix = assets || base;
        const decoded = decodeURIComponent(url.pathname);
        const filename = (decoded.startsWith(prefix) ? decoded.slice(prefix.length) : decoded).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = manifest2.assets.has(filename);
        const is_asset_html = manifest2.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file4 = is_asset ? filename : filename_html;
          if (state.read) {
            const type = is_asset ? manifest2.mimeTypes[filename.slice(filename.lastIndexOf("."))] : "text/html";
            return new Response(state.read(file4), {
              headers: type ? { "content-type": type } : {}
            });
          }
          return await fetch(request);
        }
        if (credentials !== "omit") {
          const cookie = get_cookie_header(url, request.headers.get("cookie"));
          if (cookie) {
            request.headers.set("cookie", cookie);
          }
          const authorization = event.request.headers.get("authorization");
          if (authorization && !request.headers.has("authorization")) {
            request.headers.set("authorization", authorization);
          }
        }
        if (request_body && typeof request_body !== "string" && !ArrayBuffer.isView(request_body)) {
          throw new Error("Request body must be a string or TypedArray");
        }
        if (!request.headers.has("accept")) {
          request.headers.set("accept", "*/*");
        }
        if (!request.headers.has("accept-language")) {
          request.headers.set(
            "accept-language",
            /** @type {string} */
            event.request.headers.get("accept-language")
          );
        }
        response = await respond(request, options2, manifest2, {
          ...state,
          depth: state.depth + 1
        });
        const set_cookie = response.headers.get("set-cookie");
        if (set_cookie) {
          for (const str of set_cookie_parser.splitCookiesString(set_cookie)) {
            const { name, value, ...options3 } = set_cookie_parser.parseString(str);
            event.cookies.set(
              name,
              value,
              /** @type {import('cookie').CookieSerializeOptions} */
              options3
            );
          }
        }
        return response;
      }
    });
  };
}
function normalize_fetch_input(info, init2, url) {
  if (info instanceof Request) {
    return info;
  }
  return new Request(typeof info === "string" ? new URL(info, url) : info, init2);
}
function validator(expected) {
  const set = new Set(expected);
  function validate(module, file4) {
    if (!module)
      return;
    for (const key2 in module) {
      if (key2[0] === "_" || set.has(key2))
        continue;
      const hint = hint_for_supported_files(key2, file4?.slice(file4.lastIndexOf("."))) ?? `valid exports are ${expected.join(", ")}, or anything with a '_' prefix`;
      throw new Error(`Invalid export '${key2}'${file4 ? ` in ${file4}` : ""} (${hint})`);
    }
  }
  return validate;
}
function hint_for_supported_files(key2, ext = ".js") {
  let supported_files = [];
  if (valid_common_exports.includes(key2)) {
    supported_files.push(`+page${ext}`);
  }
  if (valid_page_server_exports.includes(key2)) {
    supported_files.push(`+page.server${ext}`);
  }
  if (valid_server_exports.includes(key2)) {
    supported_files.push(`+server${ext}`);
  }
  if (supported_files.length > 0) {
    return `'${key2}' is a valid export in ${supported_files.join(` or `)}`;
  }
}
var valid_common_exports = ["load", "prerender", "csr", "ssr", "trailingSlash", "config"];
var valid_page_server_exports = [
  "load",
  "prerender",
  "csr",
  "ssr",
  "actions",
  "trailingSlash",
  "config"
];
var valid_server_exports = [
  "GET",
  "POST",
  "PATCH",
  "PUT",
  "DELETE",
  "OPTIONS",
  "prerender",
  "trailingSlash",
  "config"
];
var validate_common_exports = validator(valid_common_exports);
var validate_page_server_exports = validator(valid_page_server_exports);
var validate_server_exports = validator(valid_server_exports);
var default_transform = ({ html }) => html;
var default_filter = () => false;
var default_preload = ({ type }) => type === "js" || type === "css";
async function respond(request, options2, manifest2, state) {
  let url = new URL(request.url);
  if (options2.csrf_check_origin) {
    const forbidden = request.method === "POST" && request.headers.get("origin") !== url.origin && is_form_content_type(request);
    if (forbidden) {
      const csrf_error = error(403, `Cross-site ${request.method} form submissions are forbidden`);
      if (request.headers.get("accept") === "application/json") {
        return json(csrf_error.body, { status: csrf_error.status });
      }
      return text(csrf_error.body.message, { status: csrf_error.status });
    }
  }
  let decoded;
  try {
    decoded = decode_pathname(url.pathname);
  } catch {
    return text("Malformed URI", { status: 400 });
  }
  let route = null;
  let params = {};
  if (base && !state.prerendering?.fallback) {
    if (!decoded.startsWith(base)) {
      return text("Not found", { status: 404 });
    }
    decoded = decoded.slice(base.length) || "/";
  }
  const is_data_request = has_data_suffix(decoded);
  let invalidated_data_nodes;
  if (is_data_request) {
    decoded = strip_data_suffix(decoded) || "/";
    url.pathname = strip_data_suffix(url.pathname) || "/";
    invalidated_data_nodes = url.searchParams.get(INVALIDATED_PARAM)?.split("_").map(Boolean);
    url.searchParams.delete(INVALIDATED_PARAM);
  }
  if (!state.prerendering?.fallback) {
    const matchers = await manifest2._.matchers();
    for (const candidate of manifest2._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match)
        continue;
      const matched = exec(match, candidate.params, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  let trailing_slash = void 0;
  const headers = {};
  let cookies_to_add = {};
  const event = {
    // @ts-expect-error `cookies` and `fetch` need to be created after the `event` itself
    cookies: null,
    // @ts-expect-error
    fetch: null,
    getClientAddress: state.getClientAddress || (() => {
      throw new Error(
        `${"@sveltejs/adapter-vercel"} does not specify getClientAddress. Please raise an issue`
      );
    }),
    locals: {},
    params,
    platform: state.platform,
    request,
    route: { id: route?.id ?? null },
    setHeaders: (new_headers) => {
      for (const key2 in new_headers) {
        const lower = key2.toLowerCase();
        const value = new_headers[key2];
        if (lower === "set-cookie") {
          throw new Error(
            `Use \`event.cookies.set(name, value, options)\` instead of \`event.setHeaders\` to set cookies`
          );
        } else if (lower in headers) {
          throw new Error(`"${key2}" header is already set`);
        } else {
          headers[lower] = value;
          if (state.prerendering && lower === "cache-control") {
            state.prerendering.cache = /** @type {string} */
            value;
          }
        }
      }
    },
    url,
    isDataRequest: is_data_request
  };
  let resolve_opts = {
    transformPageChunk: default_transform,
    filterSerializedResponseHeaders: default_filter,
    preload: default_preload
  };
  try {
    if (route && !is_data_request) {
      if (route.page) {
        const nodes = await Promise.all([
          // we use == here rather than === because [undefined] serializes as "[null]"
          ...route.page.layouts.map((n) => n == void 0 ? n : manifest2._.nodes[n]()),
          manifest2._.nodes[route.page.leaf]()
        ]);
        if (DEV)
          ;
        trailing_slash = get_option(nodes, "trailingSlash");
      } else if (route.endpoint) {
        const node = await route.endpoint();
        trailing_slash = node.trailingSlash;
        if (DEV)
          ;
      }
      const normalized = normalize_path(url.pathname, trailing_slash ?? "never");
      if (normalized !== url.pathname && !state.prerendering?.fallback) {
        return new Response(void 0, {
          status: 308,
          headers: {
            "x-sveltekit-normalize": "1",
            location: (
              // ensure paths starting with '//' are not treated as protocol-relative
              (normalized.startsWith("//") ? url.origin + normalized : normalized) + (url.search === "?" ? "" : url.search)
            )
          }
        });
      }
    }
    const { cookies, new_cookies, get_cookie_header } = get_cookies(
      request,
      url,
      trailing_slash ?? "never"
    );
    cookies_to_add = new_cookies;
    event.cookies = cookies;
    event.fetch = create_fetch({ event, options: options2, manifest: manifest2, state, get_cookie_header });
    if (state.prerendering && !state.prerendering.fallback)
      disable_search(url);
    const response = await options2.hooks.handle({
      event,
      resolve: (event2, opts) => resolve(event2, opts).then((response2) => {
        for (const key2 in headers) {
          const value = headers[key2];
          response2.headers.set(
            key2,
            /** @type {string} */
            value
          );
        }
        add_cookies_to_headers(response2.headers, Object.values(cookies_to_add));
        if (state.prerendering && event2.route.id !== null) {
          response2.headers.set("x-sveltekit-routeid", encodeURI(event2.route.id));
        }
        return response2;
      })
    });
    if (response.status === 200 && response.headers.has("etag")) {
      let if_none_match_value = request.headers.get("if-none-match");
      if (if_none_match_value?.startsWith('W/"')) {
        if_none_match_value = if_none_match_value.substring(2);
      }
      const etag = (
        /** @type {string} */
        response.headers.get("etag")
      );
      if (if_none_match_value === etag) {
        const headers2 = new Headers({ etag });
        for (const key2 of [
          "cache-control",
          "content-location",
          "date",
          "expires",
          "vary",
          "set-cookie"
        ]) {
          const value = response.headers.get(key2);
          if (value)
            headers2.set(key2, value);
        }
        return new Response(void 0, {
          status: 304,
          headers: headers2
        });
      }
    }
    if (is_data_request && response.status >= 300 && response.status <= 308) {
      const location = response.headers.get("location");
      if (location) {
        return redirect_json_response(new Redirect(
          /** @type {any} */
          response.status,
          location
        ));
      }
    }
    return response;
  } catch (e) {
    if (e instanceof Redirect) {
      const response = is_data_request ? redirect_json_response(e) : redirect_response(e.status, e.location);
      add_cookies_to_headers(response.headers, Object.values(cookies_to_add));
      return response;
    }
    return await handle_fatal_error(event, options2, e);
  }
  async function resolve(event2, opts) {
    try {
      if (opts) {
        if ("ssr" in opts) {
          throw new Error(
            "ssr has been removed, set it in the appropriate +layout.js instead. See the PR for more information: https://github.com/sveltejs/kit/pull/6197"
          );
        }
        resolve_opts = {
          transformPageChunk: opts.transformPageChunk || default_transform,
          filterSerializedResponseHeaders: opts.filterSerializedResponseHeaders || default_filter,
          preload: opts.preload || default_preload
        };
      }
      if (state.prerendering?.fallback) {
        return await render_response({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          page_config: { ssr: false, csr: true },
          status: 200,
          error: null,
          branch: [],
          fetched: [],
          resolve_opts
        });
      }
      if (route) {
        let response;
        if (is_data_request) {
          response = await render_data(
            event2,
            route,
            options2,
            manifest2,
            state,
            invalidated_data_nodes,
            trailing_slash ?? "never"
          );
        } else if (route.endpoint && (!route.page || is_endpoint_request(event2))) {
          response = await render_endpoint(event2, await route.endpoint(), state);
        } else if (route.page) {
          response = await render_page(event2, route.page, options2, manifest2, state, resolve_opts);
        } else {
          throw new Error("This should never happen");
        }
        return response;
      }
      if (state.error) {
        return text("Internal Server Error", {
          status: 500
        });
      }
      if (state.depth === 0) {
        return await respond_with_error({
          event: event2,
          options: options2,
          manifest: manifest2,
          state,
          status: 404,
          error: new Error(`Not found: ${event2.url.pathname}`),
          resolve_opts
        });
      }
      if (state.prerendering) {
        return text("not found", { status: 404 });
      }
      return await fetch(request);
    } catch (e) {
      return await handle_fatal_error(event2, options2, e);
    } finally {
      event2.cookies.set = () => {
        throw new Error("Cannot use `cookies.set(...)` after the response has been generated");
      };
      event2.setHeaders = () => {
        throw new Error("Cannot use `setHeaders(...)` after the response has been generated");
      };
    }
  }
}
var _options, _manifest;
var Server = class {
  /** @param {import('types').SSRManifest} manifest */
  constructor(manifest2) {
    /** @type {import('types').SSROptions} */
    __privateAdd(this, _options, void 0);
    /** @type {import('types').SSRManifest} */
    __privateAdd(this, _manifest, void 0);
    __privateSet(this, _options, options);
    __privateSet(this, _manifest, manifest2);
  }
  /**
   * @param {{
   *   env: Record<string, string>
   * }} opts
   */
  async init({ env }) {
    const entries = Object.entries(env);
    const prefix = __privateGet(this, _options).env_public_prefix;
    Object.fromEntries(entries.filter(([k]) => !k.startsWith(prefix)));
    const pub = Object.fromEntries(entries.filter(([k]) => k.startsWith(prefix)));
    set_public_env(pub);
    if (!__privateGet(this, _options).hooks) {
      const module = await get_hooks();
      __privateGet(this, _options).hooks = {
        handle: module.handle || (({ event, resolve }) => resolve(event)),
        // @ts-expect-error
        handleError: module.handleError || (({ error: error2 }) => console.error(error2?.stack)),
        handleFetch: module.handleFetch || (({ request, fetch: fetch2 }) => fetch2(request))
      };
    }
  }
  /**
   * @param {Request} request
   * @param {import('types').RequestOptions} options
   */
  async respond(request, options2) {
    if (!(request instanceof Request)) {
      throw new Error(
        "The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details"
      );
    }
    return respond(request, __privateGet(this, _options), __privateGet(this, _manifest), {
      ...options2,
      error: false,
      depth: 0
    });
  }
};
_options = new WeakMap();
_manifest = new WeakMap();

// .svelte-kit/vercel-tmp/fn/manifest.js
var manifest = {
  appDir: "_app",
  appPath: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png"]),
  mimeTypes: { ".png": "image/png" },
  _: {
    client: { "start": { "file": "_app/immutable/entry/start.c09a3399.js", "imports": ["_app/immutable/entry/start.c09a3399.js", "_app/immutable/chunks/index.847936d9.js", "_app/immutable/chunks/singletons.ce7a18f3.js"], "stylesheets": [], "fonts": [] }, "app": { "file": "_app/immutable/entry/app.6a957e4e.js", "imports": ["_app/immutable/entry/app.6a957e4e.js", "_app/immutable/chunks/index.847936d9.js"], "stylesheets": [], "fonts": [] } },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3))
    ],
    routes: [
      {
        id: "/",
        pattern: /^\/$/,
        params: [],
        page: { layouts: [0], errors: [1], leaf: 2 },
        endpoint: null
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};

// .svelte-kit/vercel-tmp/fn/edge.js
var server = new Server(manifest);
var initialized = server.init({
  env: (
    /** @type {Record<string, string>} */
    process.env
  )
});
var edge_default = async (request, context) => {
  await initialized;
  return server.respond(request, {
    getClientAddress() {
      return (
        /** @type {string} */
        request.headers.get("x-forwarded-for")
      );
    },
    platform: {
      context
    }
  });
};
export {
  edge_default as default
};
/*! Bundled license information:

cookie/index.js:
  (*!
   * cookie
   * Copyright(c) 2012-2014 Roman Shtylman
   * Copyright(c) 2015 Douglas Christopher Wilson
   * MIT Licensed
   *)
*/
//# sourceMappingURL=index.js.map
