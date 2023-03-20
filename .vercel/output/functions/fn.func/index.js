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
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
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
        if (!isDate2(expires) || isNaN(expires.valueOf())) {
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
    function isDate2(val) {
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
    file2 = "_app/immutable/entry/error.svelte.72554b83.js";
    imports2 = ["_app/immutable/entry/error.svelte.72554b83.js", "_app/immutable/chunks/index.847936d9.js", "_app/immutable/chunks/singletons.c42d62ce.js"];
    stylesheets2 = [];
    fonts2 = [];
  }
});

// node_modules/kysely/dist/esm/util/object-utils.js
function isUndefined(obj) {
  return obj === void 0;
}
function isString(obj) {
  return typeof obj === "string";
}
function isNumber(obj) {
  return typeof obj === "number";
}
function isBoolean(obj) {
  return typeof obj === "boolean";
}
function isNull(obj) {
  return obj === null;
}
function isDate(obj) {
  return obj instanceof Date;
}
function isBigInt(obj) {
  return typeof obj === "bigint";
}
function isBuffer(obj) {
  return typeof Buffer !== "undefined" && Buffer.isBuffer(obj);
}
function isFunction(obj) {
  return typeof obj === "function";
}
function isObject(obj) {
  return typeof obj === "object" && obj !== null;
}
function isArrayBufferOrView(obj) {
  return obj instanceof ArrayBuffer || ArrayBuffer.isView(obj);
}
function getLast(arr) {
  return arr[arr.length - 1];
}
function freeze(obj) {
  return Object.freeze(obj);
}
function isReadonlyArray(arg) {
  return Array.isArray(arg);
}
function noop2(obj) {
  return obj;
}
function compare(obj1, obj2) {
  if (isReadonlyArray(obj1) && isReadonlyArray(obj2)) {
    return compareArrays(obj1, obj2);
  } else if (isObject(obj1) && isObject(obj2)) {
    return compareObjects(obj1, obj2);
  }
  return obj1 === obj2;
}
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; ++i) {
    if (!compare(arr1[i], arr2[i])) {
      return false;
    }
  }
  return true;
}
function compareObjects(obj1, obj2) {
  if (isBuffer(obj1) && isBuffer(obj2)) {
    return compareBuffers(obj1, obj2);
  } else if (isDate(obj1) && isDate(obj2)) {
    return compareDates(obj1, obj2);
  }
  return compareGenericObjects(obj1, obj2);
}
function compareBuffers(buf1, buf2) {
  return Buffer.compare(buf1, buf2) === 0;
}
function compareDates(date1, date2) {
  return date1.getTime() === date2.getTime();
}
function compareGenericObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key2 of keys1) {
    if (!compare(obj1[key2], obj2[key2])) {
      return false;
    }
  }
  return true;
}
var init_object_utils = __esm({
  "node_modules/kysely/dist/esm/util/object-utils.js"() {
  }
});

// node_modules/kysely/dist/esm/operation-node/identifier-node.js
var IdentifierNode;
var init_identifier_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/identifier-node.js"() {
    init_object_utils();
    IdentifierNode = freeze({
      is(node) {
        return node.kind === "IdentifierNode";
      },
      create(name) {
        return freeze({
          kind: "IdentifierNode",
          name
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/schemable-identifier-node.js
var SchemableIdentifierNode;
var init_schemable_identifier_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/schemable-identifier-node.js"() {
    init_object_utils();
    init_identifier_node();
    SchemableIdentifierNode = freeze({
      is(node) {
        return node.kind === "SchemableIdentifierNode";
      },
      create(identifier) {
        return freeze({
          kind: "SchemableIdentifierNode",
          identifier: IdentifierNode.create(identifier)
        });
      },
      createWithSchema(schema, identifier) {
        return freeze({
          kind: "SchemableIdentifierNode",
          schema: IdentifierNode.create(schema),
          identifier: IdentifierNode.create(identifier)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/table-node.js
var TableNode;
var init_table_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/table-node.js"() {
    init_object_utils();
    init_schemable_identifier_node();
    TableNode = freeze({
      is(node) {
        return node.kind === "TableNode";
      },
      create(table) {
        return freeze({
          kind: "TableNode",
          table: SchemableIdentifierNode.create(table)
        });
      },
      createWithSchema(schema, table) {
        return freeze({
          kind: "TableNode",
          table: SchemableIdentifierNode.createWithSchema(schema, table)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/alter-table-node.js
var AlterTableNode;
var init_alter_table_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/alter-table-node.js"() {
    init_object_utils();
    init_table_node();
    AlterTableNode = freeze({
      is(node) {
        return node.kind === "AlterTableNode";
      },
      create(table) {
        return freeze({
          kind: "AlterTableNode",
          table: TableNode.create(table)
        });
      },
      cloneWithTableProps(node, props) {
        return freeze({
          ...node,
          ...props
        });
      },
      cloneWithColumnAlteration(node, columnAlteration) {
        return freeze({
          ...node,
          columnAlterations: node.columnAlterations ? [...node.columnAlterations, columnAlteration] : [columnAlteration]
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/create-index-node.js
var CreateIndexNode;
var init_create_index_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/create-index-node.js"() {
    init_object_utils();
    init_identifier_node();
    CreateIndexNode = freeze({
      is(node) {
        return node.kind === "CreateIndexNode";
      },
      create(name) {
        return freeze({
          kind: "CreateIndexNode",
          name: IdentifierNode.create(name)
        });
      },
      cloneWith(node, props) {
        return freeze({
          ...node,
          ...props
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/create-schema-node.js
var CreateSchemaNode;
var init_create_schema_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/create-schema-node.js"() {
    init_object_utils();
    init_identifier_node();
    CreateSchemaNode = freeze({
      is(node) {
        return node.kind === "CreateSchemaNode";
      },
      create(schema, params) {
        return freeze({
          kind: "CreateSchemaNode",
          schema: IdentifierNode.create(schema),
          ...params
        });
      },
      cloneWith(createSchema, params) {
        return freeze({
          ...createSchema,
          ...params
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/create-table-node.js
var ON_COMMIT_ACTIONS, CreateTableNode;
var init_create_table_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/create-table-node.js"() {
    init_object_utils();
    ON_COMMIT_ACTIONS = ["preserve rows", "delete rows", "drop"];
    CreateTableNode = freeze({
      is(node) {
        return node.kind === "CreateTableNode";
      },
      create(table) {
        return freeze({
          kind: "CreateTableNode",
          table,
          columns: freeze([])
        });
      },
      cloneWithColumn(createTable, column) {
        return freeze({
          ...createTable,
          columns: freeze([...createTable.columns, column])
        });
      },
      cloneWithConstraint(createTable, constraint) {
        return freeze({
          ...createTable,
          constraints: createTable.constraints ? freeze([...createTable.constraints, constraint]) : freeze([constraint])
        });
      },
      cloneWithFrontModifier(createTable, modifier) {
        return freeze({
          ...createTable,
          frontModifiers: createTable.frontModifiers ? freeze([...createTable.frontModifiers, modifier]) : freeze([modifier])
        });
      },
      cloneWithEndModifier(createTable, modifier) {
        return freeze({
          ...createTable,
          endModifiers: createTable.endModifiers ? freeze([...createTable.endModifiers, modifier]) : freeze([modifier])
        });
      },
      cloneWith(createTable, params) {
        return freeze({
          ...createTable,
          ...params
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/drop-index-node.js
var DropIndexNode;
var init_drop_index_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/drop-index-node.js"() {
    init_object_utils();
    init_schemable_identifier_node();
    DropIndexNode = freeze({
      is(node) {
        return node.kind === "DropIndexNode";
      },
      create(name, params) {
        return freeze({
          kind: "DropIndexNode",
          name: SchemableIdentifierNode.create(name),
          ...params
        });
      },
      cloneWith(dropIndex, props) {
        return freeze({
          ...dropIndex,
          ...props
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/drop-schema-node.js
var DropSchemaNode;
var init_drop_schema_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/drop-schema-node.js"() {
    init_object_utils();
    init_identifier_node();
    DropSchemaNode = freeze({
      is(node) {
        return node.kind === "DropSchemaNode";
      },
      create(schema, params) {
        return freeze({
          kind: "DropSchemaNode",
          schema: IdentifierNode.create(schema),
          ...params
        });
      },
      cloneWith(dropSchema, params) {
        return freeze({
          ...dropSchema,
          ...params
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/drop-table-node.js
var DropTableNode;
var init_drop_table_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/drop-table-node.js"() {
    init_object_utils();
    DropTableNode = freeze({
      is(node) {
        return node.kind === "DropTableNode";
      },
      create(table, params) {
        return freeze({
          kind: "DropTableNode",
          table,
          ...params
        });
      },
      cloneWith(dropIndex, params) {
        return freeze({
          ...dropIndex,
          ...params
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/alias-node.js
var AliasNode;
var init_alias_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/alias-node.js"() {
    init_object_utils();
    AliasNode = freeze({
      is(node) {
        return node.kind === "AliasNode";
      },
      create(node, alias) {
        return freeze({
          kind: "AliasNode",
          node,
          alias
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/operation-node-source.js
function isOperationNodeSource(obj) {
  return isObject(obj) && isFunction(obj.toOperationNode);
}
var init_operation_node_source = __esm({
  "node_modules/kysely/dist/esm/operation-node/operation-node-source.js"() {
    init_object_utils();
  }
});

// node_modules/kysely/dist/esm/expression/expression.js
function isExpression(obj) {
  return isObject(obj) && "expressionType" in obj && isOperationNodeSource(obj);
}
function isAliasedExpression(obj) {
  return isObject(obj) && "expression" in obj && isString(obj.alias) && isOperationNodeSource(obj);
}
var init_expression = __esm({
  "node_modules/kysely/dist/esm/expression/expression.js"() {
    init_operation_node_source();
    init_object_utils();
  }
});

// node_modules/kysely/dist/esm/operation-node/and-node.js
var AndNode;
var init_and_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/and-node.js"() {
    init_object_utils();
    AndNode = freeze({
      is(node) {
        return node.kind === "AndNode";
      },
      create(left, right) {
        return freeze({
          kind: "AndNode",
          left,
          right
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/or-node.js
var OrNode;
var init_or_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/or-node.js"() {
    init_object_utils();
    OrNode = freeze({
      is(node) {
        return node.kind === "OrNode";
      },
      create(left, right) {
        return freeze({
          kind: "OrNode",
          left,
          right
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/on-node.js
var OnNode;
var init_on_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/on-node.js"() {
    init_object_utils();
    init_and_node();
    init_or_node();
    OnNode = freeze({
      is(node) {
        return node.kind === "OnNode";
      },
      create(filter) {
        return freeze({
          kind: "OnNode",
          on: filter
        });
      },
      cloneWithOperation(onNode, operator, operation) {
        return freeze({
          ...onNode,
          on: operator === "And" ? AndNode.create(onNode.on, operation) : OrNode.create(onNode.on, operation)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/join-node.js
var JoinNode;
var init_join_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/join-node.js"() {
    init_object_utils();
    init_on_node();
    JoinNode = freeze({
      is(node) {
        return node.kind === "JoinNode";
      },
      create(joinType, table) {
        return freeze({
          kind: "JoinNode",
          joinType,
          table,
          on: void 0
        });
      },
      createWithOn(joinType, table, on) {
        return freeze({
          kind: "JoinNode",
          joinType,
          table,
          on: OnNode.create(on)
        });
      },
      cloneWithOn(joinNode, operation) {
        return freeze({
          ...joinNode,
          on: joinNode.on ? OnNode.cloneWithOperation(joinNode.on, "And", operation) : OnNode.create(operation)
        });
      },
      cloneWithOrOn(joinNode, operation) {
        return freeze({
          ...joinNode,
          on: joinNode.on ? OnNode.cloneWithOperation(joinNode.on, "Or", operation) : OnNode.create(operation)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/order-by-node.js
var OrderByNode;
var init_order_by_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/order-by-node.js"() {
    init_object_utils();
    OrderByNode = freeze({
      is(node) {
        return node.kind === "OrderByNode";
      },
      create(item) {
        return freeze({
          kind: "OrderByNode",
          items: freeze([item])
        });
      },
      cloneWithItem(orderBy, item) {
        return freeze({
          ...orderBy,
          items: freeze([...orderBy.items, item])
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/partition-by-node.js
var PartitionByNode;
var init_partition_by_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/partition-by-node.js"() {
    init_object_utils();
    PartitionByNode = freeze({
      is(node) {
        return node.kind === "PartitionByNode";
      },
      create(items) {
        return freeze({
          kind: "PartitionByNode",
          items: freeze(items)
        });
      },
      cloneWithItems(partitionBy, items) {
        return freeze({
          ...partitionBy,
          items: freeze([...partitionBy.items, ...items])
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/over-node.js
var OverNode;
var init_over_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/over-node.js"() {
    init_object_utils();
    init_order_by_node();
    init_partition_by_node();
    OverNode = freeze({
      is(node) {
        return node.kind === "OverNode";
      },
      create() {
        return freeze({
          kind: "OverNode"
        });
      },
      cloneWithOrderByItem(overNode, item) {
        return freeze({
          ...overNode,
          orderBy: overNode.orderBy ? OrderByNode.cloneWithItem(overNode.orderBy, item) : OrderByNode.create(item)
        });
      },
      cloneWithPartitionByItems(overNode, items) {
        return freeze({
          ...overNode,
          partitionBy: overNode.partitionBy ? PartitionByNode.cloneWithItems(overNode.partitionBy, items) : PartitionByNode.create(items)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/from-node.js
var FromNode;
var init_from_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/from-node.js"() {
    init_object_utils();
    FromNode = freeze({
      is(node) {
        return node.kind === "FromNode";
      },
      create(froms) {
        return freeze({
          kind: "FromNode",
          froms: freeze(froms)
        });
      },
      cloneWithFroms(from, froms) {
        return freeze({
          ...from,
          froms: freeze([...from.froms, ...froms])
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/group-by-node.js
var GroupByNode;
var init_group_by_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/group-by-node.js"() {
    init_object_utils();
    GroupByNode = freeze({
      is(node) {
        return node.kind === "GroupByNode";
      },
      create(items) {
        return freeze({
          kind: "GroupByNode",
          items: freeze(items)
        });
      },
      cloneWithItems(groupBy, items) {
        return freeze({
          ...groupBy,
          items: freeze([...groupBy.items, ...items])
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/having-node.js
var HavingNode;
var init_having_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/having-node.js"() {
    init_object_utils();
    init_and_node();
    init_or_node();
    HavingNode = freeze({
      is(node) {
        return node.kind === "HavingNode";
      },
      create(filter) {
        return freeze({
          kind: "HavingNode",
          having: filter
        });
      },
      cloneWithOperation(havingNode, operator, operation) {
        return freeze({
          ...havingNode,
          having: operator === "And" ? AndNode.create(havingNode.having, operation) : OrNode.create(havingNode.having, operation)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/select-query-node.js
var SelectQueryNode;
var init_select_query_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/select-query-node.js"() {
    init_object_utils();
    init_from_node();
    init_group_by_node();
    init_having_node();
    init_order_by_node();
    SelectQueryNode = freeze({
      is(node) {
        return node.kind === "SelectQueryNode";
      },
      create(fromItems, withNode) {
        return freeze({
          kind: "SelectQueryNode",
          from: FromNode.create(fromItems),
          ...withNode && { with: withNode }
        });
      },
      cloneWithSelections(select, selections) {
        return freeze({
          ...select,
          selections: select.selections ? freeze([...select.selections, ...selections]) : freeze(selections)
        });
      },
      cloneWithDistinctOn(select, expressions) {
        return freeze({
          ...select,
          distinctOn: select.distinctOn ? freeze([...select.distinctOn, ...expressions]) : freeze(expressions)
        });
      },
      cloneWithFrontModifier(select, modifier) {
        return freeze({
          ...select,
          frontModifiers: select.frontModifiers ? freeze([...select.frontModifiers, modifier]) : freeze([modifier])
        });
      },
      cloneWithEndModifier(select, modifier) {
        return freeze({
          ...select,
          endModifiers: select.endModifiers ? freeze([...select.endModifiers, modifier]) : freeze([modifier])
        });
      },
      cloneWithOrderByItem(selectNode, item) {
        return freeze({
          ...selectNode,
          orderBy: selectNode.orderBy ? OrderByNode.cloneWithItem(selectNode.orderBy, item) : OrderByNode.create(item)
        });
      },
      cloneWithGroupByItems(selectNode, items) {
        return freeze({
          ...selectNode,
          groupBy: selectNode.groupBy ? GroupByNode.cloneWithItems(selectNode.groupBy, items) : GroupByNode.create(items)
        });
      },
      cloneWithLimit(selectNode, limit) {
        return freeze({
          ...selectNode,
          limit
        });
      },
      cloneWithOffset(selectNode, offset) {
        return freeze({
          ...selectNode,
          offset
        });
      },
      cloneWithHaving(selectNode, operation) {
        return freeze({
          ...selectNode,
          having: selectNode.having ? HavingNode.cloneWithOperation(selectNode.having, "And", operation) : HavingNode.create(operation)
        });
      },
      cloneWithOrHaving(selectNode, operation) {
        return freeze({
          ...selectNode,
          having: selectNode.having ? HavingNode.cloneWithOperation(selectNode.having, "Or", operation) : HavingNode.create(operation)
        });
      },
      cloneWithSetOperation(selectNode, setOperation) {
        return freeze({
          ...selectNode,
          setOperations: selectNode.setOperations ? freeze([...selectNode.setOperations, setOperation]) : freeze([setOperation])
        });
      },
      cloneWithExplain(selectNode, explain) {
        return freeze({
          ...selectNode,
          explain
        });
      },
      cloneWithoutSelections(select) {
        return freeze({
          ...select,
          selections: []
        });
      },
      cloneWithoutLimit(select) {
        return freeze({
          ...select,
          limit: void 0
        });
      },
      cloneWithoutOffset(select) {
        return freeze({
          ...select,
          offset: void 0
        });
      },
      cloneWithoutOrderBy(select) {
        return freeze({
          ...select,
          orderBy: void 0
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/select-modifier-node.js
var SelectModifierNode;
var init_select_modifier_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/select-modifier-node.js"() {
    init_object_utils();
    SelectModifierNode = freeze({
      is(node) {
        return node.kind === "SelectModifierNode";
      },
      create(modifier) {
        return freeze({
          kind: "SelectModifierNode",
          modifier
        });
      },
      createWithExpression(modifier) {
        return freeze({
          kind: "SelectModifierNode",
          rawModifier: modifier
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/binary-operation-node.js
var BinaryOperationNode;
var init_binary_operation_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/binary-operation-node.js"() {
    init_object_utils();
    BinaryOperationNode = freeze({
      is(node) {
        return node.kind === "BinaryOperationNode";
      },
      create(leftOperand, operator, rightOperand) {
        return freeze({
          kind: "BinaryOperationNode",
          leftOperand,
          operator,
          rightOperand
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/raw-node.js
var RawNode;
var init_raw_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/raw-node.js"() {
    init_object_utils();
    RawNode = freeze({
      is(node) {
        return node.kind === "RawNode";
      },
      create(sqlFragments, parameters) {
        return freeze({
          kind: "RawNode",
          sqlFragments: freeze(sqlFragments),
          parameters: freeze(parameters)
        });
      },
      createWithSql(sql2) {
        return RawNode.create([sql2], []);
      },
      createWithChild(child) {
        return RawNode.create(["", ""], [child]);
      },
      createWithChildren(children) {
        return RawNode.create(new Array(children.length + 1).fill(""), children);
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/operator-node.js
var COMPARISON_OPERATORS, OperatorNode;
var init_operator_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/operator-node.js"() {
    init_object_utils();
    COMPARISON_OPERATORS = [
      "=",
      "==",
      "!=",
      "<>",
      ">",
      ">=",
      "<",
      "<=",
      "in",
      "not in",
      "is",
      "is not",
      "like",
      "not like",
      "match",
      "ilike",
      "not ilike",
      "@>",
      "<@",
      "?",
      "?&",
      "!<",
      "!>",
      "<=>",
      "!~",
      "~",
      "~*",
      "!~*",
      "&&",
      "||",
      "@@",
      "@@@",
      "!!",
      "<->"
    ];
    OperatorNode = freeze({
      is(node) {
        return node.kind === "OperatorNode";
      },
      create(operator) {
        return freeze({
          kind: "OperatorNode",
          operator
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/parens-node.js
var ParensNode;
var init_parens_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/parens-node.js"() {
    init_object_utils();
    ParensNode = freeze({
      is(node) {
        return node.kind === "ParensNode";
      },
      create(node) {
        return freeze({
          kind: "ParensNode",
          node
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/column-node.js
var ColumnNode;
var init_column_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/column-node.js"() {
    init_object_utils();
    init_identifier_node();
    ColumnNode = freeze({
      is(node) {
        return node.kind === "ColumnNode";
      },
      create(column) {
        return freeze({
          kind: "ColumnNode",
          column: IdentifierNode.create(column)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/select-all-node.js
var SelectAllNode;
var init_select_all_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/select-all-node.js"() {
    init_object_utils();
    SelectAllNode = freeze({
      is(node) {
        return node.kind === "SelectAllNode";
      },
      create() {
        return freeze({
          kind: "SelectAllNode"
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/reference-node.js
var ReferenceNode;
var init_reference_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/reference-node.js"() {
    init_select_all_node();
    init_object_utils();
    ReferenceNode = freeze({
      is(node) {
        return node.kind === "ReferenceNode";
      },
      create(table, column) {
        return freeze({
          kind: "ReferenceNode",
          table,
          column
        });
      },
      createSelectAll(table) {
        return freeze({
          kind: "ReferenceNode",
          table,
          column: SelectAllNode.create()
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/parser/reference-parser.js
function parseSimpleReferenceExpression(exp) {
  if (isString(exp)) {
    return parseStringReference(exp);
  }
  return exp.toOperationNode();
}
function parseReferenceExpressionOrList(arg) {
  if (isReadonlyArray(arg)) {
    return arg.map((it) => parseReferenceExpression(it));
  } else {
    return [parseReferenceExpression(arg)];
  }
}
function parseReferenceExpression(exp) {
  if (isExpressionOrFactory(exp)) {
    return parseExpression(exp);
  }
  return parseSimpleReferenceExpression(exp);
}
function parseStringReference(ref) {
  const COLUMN_SEPARATOR = ".";
  if (ref.includes(COLUMN_SEPARATOR)) {
    const parts = ref.split(COLUMN_SEPARATOR).map(trim);
    if (parts.length === 3) {
      return parseStringReferenceWithTableAndSchema(parts);
    } else if (parts.length === 2) {
      return parseStringReferenceWithTable(parts);
    } else {
      throw new Error(`invalid column reference ${ref}`);
    }
  } else {
    return ColumnNode.create(ref);
  }
}
function parseAliasedStringReference(ref) {
  const ALIAS_SEPARATOR = " as ";
  if (ref.includes(ALIAS_SEPARATOR)) {
    const [columnRef, alias] = ref.split(ALIAS_SEPARATOR).map(trim);
    return AliasNode.create(parseStringReference(columnRef), IdentifierNode.create(alias));
  } else {
    return parseStringReference(ref);
  }
}
function parseColumnName(column) {
  return ColumnNode.create(column);
}
function parseStringReferenceWithTableAndSchema(parts) {
  const [schema, table, column] = parts;
  return ReferenceNode.create(TableNode.createWithSchema(schema, table), ColumnNode.create(column));
}
function parseStringReferenceWithTable(parts) {
  const [table, column] = parts;
  return ReferenceNode.create(TableNode.create(table), ColumnNode.create(column));
}
function trim(str) {
  return str.trim();
}
var init_reference_parser = __esm({
  "node_modules/kysely/dist/esm/parser/reference-parser.js"() {
    init_alias_node();
    init_column_node();
    init_reference_node();
    init_table_node();
    init_object_utils();
    init_expression_parser();
    init_identifier_node();
  }
});

// node_modules/kysely/dist/esm/operation-node/primitive-value-list-node.js
var PrimitiveValueListNode;
var init_primitive_value_list_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/primitive-value-list-node.js"() {
    init_object_utils();
    PrimitiveValueListNode = freeze({
      is(node) {
        return node.kind === "PrimitiveValueListNode";
      },
      create(values) {
        return freeze({
          kind: "PrimitiveValueListNode",
          values: freeze([...values])
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/value-list-node.js
var ValueListNode;
var init_value_list_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/value-list-node.js"() {
    init_object_utils();
    ValueListNode = freeze({
      is(node) {
        return node.kind === "ValueListNode";
      },
      create(values) {
        return freeze({
          kind: "ValueListNode",
          values: freeze(values)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/value-node.js
var ValueNode;
var init_value_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/value-node.js"() {
    init_object_utils();
    ValueNode = freeze({
      is(node) {
        return node.kind === "ValueNode";
      },
      create(value) {
        return freeze({
          kind: "ValueNode",
          value
        });
      },
      createImmediate(value) {
        return freeze({
          kind: "ValueNode",
          value,
          immediate: true
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/parser/value-parser.js
function parseValueExpressionOrList(arg) {
  if (isReadonlyArray(arg)) {
    return parseValueExpressionList(arg);
  } else {
    return parseValueExpression(arg);
  }
}
function parseValueExpression(exp) {
  if (isExpressionOrFactory(exp)) {
    return parseExpression(exp);
  }
  return ValueNode.create(exp);
}
function parseValueExpressionList(arg) {
  if (arg.some(isExpressionOrFactory)) {
    return ValueListNode.create(arg.map((it) => parseValueExpression(it)));
  }
  return PrimitiveValueListNode.create(arg);
}
var init_value_parser = __esm({
  "node_modules/kysely/dist/esm/parser/value-parser.js"() {
    init_primitive_value_list_node();
    init_value_list_node();
    init_value_node();
    init_object_utils();
    init_expression_parser();
  }
});

// node_modules/kysely/dist/esm/parser/binary-operation-parser.js
function parseWhere(args) {
  return parseFilterExpression("where", args);
}
function parseHaving(args) {
  return parseFilterExpression("having", args);
}
function parseOn(args) {
  return parseFilterExpression("on", args);
}
function parseReferentialFilter(leftOperand, operator, rightOperand) {
  return BinaryOperationNode.create(parseReferenceExpression(leftOperand), parseComparisonOperatorExpression(operator), parseReferenceExpression(rightOperand));
}
function parseFilterExpression(type, args) {
  if (args.length === 3) {
    return parseFilter(args[0], args[1], args[2]);
  }
  if (args.length === 1) {
    return parseOneArgFilterExpression(type, args[0]);
  }
  throw createFilterExpressionError(type, args);
}
function parseFilter(leftOperand, operator, rightOperand) {
  if ((operator === "is" || operator === "is not") && (isNull(rightOperand) || isBoolean(rightOperand))) {
    return parseIs(leftOperand, operator, rightOperand);
  }
  return BinaryOperationNode.create(parseReferenceExpression(leftOperand), parseComparisonOperatorExpression(operator), parseValueExpressionOrList(rightOperand));
}
function parseIs(leftOperand, operator, rightOperand) {
  return BinaryOperationNode.create(parseReferenceExpression(leftOperand), parseComparisonOperatorExpression(operator), ValueNode.createImmediate(rightOperand));
}
function parseComparisonOperatorExpression(operator) {
  if (isString(operator) && COMPARISON_OPERATORS.includes(operator)) {
    return OperatorNode.create(operator);
  } else if (isOperationNodeSource(operator)) {
    return operator.toOperationNode();
  }
  throw new Error(`invalid comparison operator ${JSON.stringify(operator)} passed to a filter method`);
}
function parseOneArgFilterExpression(type, arg) {
  if (isFunction(arg)) {
    return GROUP_PARSERS[type](arg);
  } else if (isOperationNodeSource(arg)) {
    const node = arg.toOperationNode();
    if (RawNode.is(node)) {
      return node;
    }
  }
  throw createFilterExpressionError(type, arg);
}
function createFilterExpressionError(type, args) {
  return new Error(`invalid arguments passed to a '${type}' method: ${JSON.stringify(args)}`);
}
var GROUP_PARSERS;
var init_binary_operation_parser = __esm({
  "node_modules/kysely/dist/esm/parser/binary-operation-parser.js"() {
    init_binary_operation_node();
    init_object_utils();
    init_operation_node_source();
    init_raw_node();
    init_operator_node();
    init_parens_node();
    init_reference_parser();
    init_value_parser();
    init_value_node();
    init_parse_utils();
    GROUP_PARSERS = freeze({
      where(callback) {
        const query = callback(createSelectQueryBuilder());
        const queryNode = query.toOperationNode();
        if (!queryNode.where) {
          throw new Error("no `where` methods called inside a group callback");
        }
        return ParensNode.create(queryNode.where.where);
      },
      having(callback) {
        const query = callback(createSelectQueryBuilder());
        const queryNode = query.toOperationNode();
        if (!queryNode.having) {
          throw new Error("no `having` methods called inside a group callback");
        }
        return ParensNode.create(queryNode.having.having);
      },
      on(callback) {
        const joinBuilder = callback(createJoinBuilder("InnerJoin", "table"));
        const joinNode = joinBuilder.toOperationNode();
        if (!joinNode.on) {
          throw new Error("no `on` methods called inside a group callback");
        }
        return ParensNode.create(joinNode.on.on);
      }
    });
  }
});

// node_modules/kysely/dist/esm/parser/join-parser.js
function parseJoin(joinType, args) {
  if (args.length === 3) {
    return parseSingleOnJoin(joinType, args[0], args[1], args[2]);
  } else if (args.length === 2) {
    return parseCallbackJoin(joinType, args[0], args[1]);
  } else {
    throw new Error("not implemented");
  }
}
function parseCallbackJoin(joinType, from, callback) {
  const joinBuilder = callback(createJoinBuilder(joinType, from));
  return joinBuilder.toOperationNode();
}
function parseSingleOnJoin(joinType, from, lhsColumn, rhsColumn) {
  return JoinNode.createWithOn(joinType, parseTableExpression(from), parseReferentialFilter(lhsColumn, "=", rhsColumn));
}
var init_join_parser = __esm({
  "node_modules/kysely/dist/esm/parser/join-parser.js"() {
    init_join_node();
    init_table_parser();
    init_binary_operation_parser();
    init_parse_utils();
  }
});

// node_modules/kysely/dist/esm/operation-node/selection-node.js
var SelectionNode;
var init_selection_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/selection-node.js"() {
    init_object_utils();
    init_reference_node();
    init_select_all_node();
    SelectionNode = freeze({
      is(node) {
        return node.kind === "SelectionNode";
      },
      create(selection) {
        return freeze({
          kind: "SelectionNode",
          selection
        });
      },
      createSelectAll() {
        return freeze({
          kind: "SelectionNode",
          selection: SelectAllNode.create()
        });
      },
      createSelectAllFromTable(table) {
        return freeze({
          kind: "SelectionNode",
          selection: ReferenceNode.createSelectAll(table)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/dynamic/dynamic-reference-builder.js
function isDynamicReferenceBuilder(obj) {
  return isObject(obj) && isOperationNodeSource(obj) && isString(obj.dynamicReference);
}
var _dynamicReference, DynamicReferenceBuilder;
var init_dynamic_reference_builder = __esm({
  "node_modules/kysely/dist/esm/dynamic/dynamic-reference-builder.js"() {
    init_operation_node_source();
    init_reference_parser();
    init_object_utils();
    DynamicReferenceBuilder = class {
      constructor(reference) {
        __privateAdd(this, _dynamicReference, void 0);
        __privateSet(this, _dynamicReference, reference);
      }
      get dynamicReference() {
        return __privateGet(this, _dynamicReference);
      }
      /**
       * @private
       *
       * This needs to be here just so that the typings work. Without this
       * the generated .d.ts file contains no reference to the type param R
       * which causes this type to be equal to DynamicReferenceBuilder with
       * any R.
       */
      get refType() {
        return void 0;
      }
      toOperationNode() {
        return parseSimpleReferenceExpression(__privateGet(this, _dynamicReference));
      }
    };
    _dynamicReference = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/parser/select-parser.js
function parseSelectExpressionOrList(selection) {
  if (isReadonlyArray(selection)) {
    return selection.map((it) => parseSelectExpression(it));
  } else {
    return [parseSelectExpression(selection)];
  }
}
function parseSelectExpression(selection) {
  if (isString(selection)) {
    return SelectionNode.create(parseAliasedStringReference(selection));
  } else if (isDynamicReferenceBuilder(selection)) {
    return SelectionNode.create(selection.toOperationNode());
  } else {
    return SelectionNode.create(parseAliasedExpression(selection));
  }
}
function parseSelectAll(table) {
  if (!table) {
    return [SelectionNode.createSelectAll()];
  } else if (Array.isArray(table)) {
    return table.map(parseSelectAllArg);
  } else {
    return [parseSelectAllArg(table)];
  }
}
function parseSelectAllArg(table) {
  if (isString(table)) {
    return SelectionNode.createSelectAllFromTable(parseTable(table));
  }
  throw new Error(`invalid value selectAll expression: ${JSON.stringify(table)}`);
}
var init_select_parser = __esm({
  "node_modules/kysely/dist/esm/parser/select-parser.js"() {
    init_object_utils();
    init_selection_node();
    init_reference_parser();
    init_dynamic_reference_builder();
    init_expression_parser();
    init_table_parser();
  }
});

// node_modules/kysely/dist/esm/operation-node/insert-query-node.js
var InsertQueryNode;
var init_insert_query_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/insert-query-node.js"() {
    init_object_utils();
    InsertQueryNode = freeze({
      is(node) {
        return node.kind === "InsertQueryNode";
      },
      create(into, withNode, replace) {
        return freeze({
          kind: "InsertQueryNode",
          into,
          ...withNode && { with: withNode },
          replace
        });
      },
      cloneWith(insertQuery, props) {
        return freeze({
          ...insertQuery,
          ...props
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/update-query-node.js
var UpdateQueryNode;
var init_update_query_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/update-query-node.js"() {
    init_object_utils();
    init_from_node();
    UpdateQueryNode = freeze({
      is(node) {
        return node.kind === "UpdateQueryNode";
      },
      create(table, withNode) {
        return freeze({
          kind: "UpdateQueryNode",
          table,
          ...withNode && { with: withNode }
        });
      },
      cloneWithFromItems(updateQuery, fromItems) {
        return freeze({
          ...updateQuery,
          from: updateQuery.from ? FromNode.cloneWithFroms(updateQuery.from, fromItems) : FromNode.create(fromItems)
        });
      },
      cloneWithUpdates(updateQuery, updates) {
        return freeze({
          ...updateQuery,
          updates: updateQuery.updates ? freeze([...updateQuery.updates, ...updates]) : updates
        });
      },
      cloneWithExplain(updateQuery, explain) {
        return freeze({
          ...updateQuery,
          explain
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/using-node.js
var UsingNode;
var init_using_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/using-node.js"() {
    init_object_utils();
    UsingNode = freeze({
      is(node) {
        return node.kind === "UsingNode";
      },
      create(tables) {
        return freeze({
          kind: "UsingNode",
          tables: freeze(tables)
        });
      },
      cloneWithTables(using, tables) {
        return freeze({
          ...using,
          tables: freeze([...using.tables, ...tables])
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/delete-query-node.js
var DeleteQueryNode;
var init_delete_query_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/delete-query-node.js"() {
    init_object_utils();
    init_from_node();
    init_order_by_node();
    init_using_node();
    DeleteQueryNode = freeze({
      is(node) {
        return node.kind === "DeleteQueryNode";
      },
      create(fromItems, withNode) {
        return freeze({
          kind: "DeleteQueryNode",
          from: FromNode.create(fromItems),
          ...withNode && { with: withNode }
        });
      },
      cloneWithOrderByItem(deleteNode, item) {
        return freeze({
          ...deleteNode,
          orderBy: deleteNode.orderBy ? OrderByNode.cloneWithItem(deleteNode.orderBy, item) : OrderByNode.create(item)
        });
      },
      cloneWithLimit(deleteNode, limit) {
        return freeze({
          ...deleteNode,
          limit
        });
      },
      cloneWithExplain(deleteNode, explain) {
        return freeze({
          ...deleteNode,
          explain
        });
      },
      cloneWithUsing(deleteNode, tables) {
        return freeze({
          ...deleteNode,
          using: deleteNode.using !== void 0 ? UsingNode.cloneWithTables(deleteNode.using, tables) : UsingNode.create(tables)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/where-node.js
var WhereNode;
var init_where_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/where-node.js"() {
    init_object_utils();
    init_and_node();
    init_or_node();
    WhereNode = freeze({
      is(node) {
        return node.kind === "WhereNode";
      },
      create(filter) {
        return freeze({
          kind: "WhereNode",
          where: filter
        });
      },
      cloneWithOperation(whereNode, operator, operation) {
        return freeze({
          ...whereNode,
          where: operator === "And" ? AndNode.create(whereNode.where, operation) : OrNode.create(whereNode.where, operation)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/returning-node.js
var ReturningNode;
var init_returning_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/returning-node.js"() {
    init_object_utils();
    ReturningNode = freeze({
      is(node) {
        return node.kind === "ReturningNode";
      },
      create(selections) {
        return freeze({
          kind: "ReturningNode",
          selections: freeze(selections)
        });
      },
      cloneWithSelections(returning, selections) {
        return freeze({
          ...returning,
          selections: returning.selections ? freeze([...returning.selections, ...selections]) : freeze(selections)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/query-node.js
var QueryNode;
var init_query_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/query-node.js"() {
    init_insert_query_node();
    init_select_query_node();
    init_update_query_node();
    init_delete_query_node();
    init_where_node();
    init_object_utils();
    init_returning_node();
    QueryNode = freeze({
      is(node) {
        return DeleteQueryNode.is(node) || InsertQueryNode.is(node) || UpdateQueryNode.is(node) || SelectQueryNode.is(node);
      },
      cloneWithWhere(node, operation) {
        return freeze({
          ...node,
          where: node.where ? WhereNode.cloneWithOperation(node.where, "And", operation) : WhereNode.create(operation)
        });
      },
      cloneWithOrWhere(node, operation) {
        return freeze({
          ...node,
          where: node.where ? WhereNode.cloneWithOperation(node.where, "Or", operation) : WhereNode.create(operation)
        });
      },
      cloneWithJoin(node, join) {
        return freeze({
          ...node,
          joins: node.joins ? freeze([...node.joins, join]) : freeze([join])
        });
      },
      cloneWithReturning(node, selections) {
        return freeze({
          ...node,
          returning: node.returning ? ReturningNode.cloneWithSelections(node.returning, selections) : ReturningNode.create(selections)
        });
      },
      cloneWithoutWhere(node) {
        return freeze({
          ...node,
          where: void 0
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/order-by-item-node.js
var OrderByItemNode;
var init_order_by_item_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/order-by-item-node.js"() {
    init_object_utils();
    OrderByItemNode = freeze({
      is(node) {
        return node.kind === "OrderByItemNode";
      },
      create(orderBy, direction) {
        return freeze({
          kind: "OrderByItemNode",
          orderBy,
          direction
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/parser/order-by-parser.js
function parseOrderBy(orderBy, direction) {
  return OrderByItemNode.create(parseOrderByExpression(orderBy), parseOrderByDirectionExpression(direction));
}
function parseOrderByExpression(expr) {
  return parseReferenceExpression(expr);
}
function parseOrderByDirectionExpression(expr) {
  if (!expr) {
    return void 0;
  }
  if (expr === "asc" || expr === "desc") {
    return RawNode.createWithSql(expr);
  } else {
    return expr.toOperationNode();
  }
}
var init_order_by_parser = __esm({
  "node_modules/kysely/dist/esm/parser/order-by-parser.js"() {
    init_order_by_item_node();
    init_raw_node();
    init_reference_parser();
  }
});

// node_modules/kysely/dist/esm/util/prevent-await.js
function preventAwait(clazz, message) {
  Object.defineProperties(clazz.prototype, {
    then: {
      enumerable: false,
      value: () => {
        throw new Error(message);
      }
    }
  });
}
var init_prevent_await = __esm({
  "node_modules/kysely/dist/esm/util/prevent-await.js"() {
  }
});

// node_modules/kysely/dist/esm/operation-node/limit-node.js
var LimitNode;
var init_limit_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/limit-node.js"() {
    init_object_utils();
    init_value_node();
    LimitNode = freeze({
      is(node) {
        return node.kind === "LimitNode";
      },
      create(limit) {
        return freeze({
          kind: "LimitNode",
          limit: ValueNode.create(limit)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/offset-node.js
var OffsetNode;
var init_offset_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/offset-node.js"() {
    init_object_utils();
    init_value_node();
    OffsetNode = freeze({
      is(node) {
        return node.kind === "OffsetNode";
      },
      create(offset) {
        return freeze({
          kind: "OffsetNode",
          offset: ValueNode.create(offset)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/group-by-item-node.js
var GroupByItemNode;
var init_group_by_item_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/group-by-item-node.js"() {
    init_object_utils();
    GroupByItemNode = freeze({
      is(node) {
        return node.kind === "GroupByItemNode";
      },
      create(groupBy) {
        return freeze({
          kind: "GroupByItemNode",
          groupBy
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/parser/group-by-parser.js
function parseGroupBy(groupBy) {
  return parseReferenceExpressionOrList(groupBy).map(GroupByItemNode.create);
}
var init_group_by_parser = __esm({
  "node_modules/kysely/dist/esm/parser/group-by-parser.js"() {
    init_group_by_item_node();
    init_reference_parser();
  }
});

// node_modules/kysely/dist/esm/query-builder/no-result-error.js
var NoResultError;
var init_no_result_error = __esm({
  "node_modules/kysely/dist/esm/query-builder/no-result-error.js"() {
    NoResultError = class extends Error {
      constructor(node) {
        super("no result");
        /**
         * The operation node tree of the query that was executed.
         */
        __publicField(this, "node");
        this.node = node;
      }
    };
  }
});

// node_modules/kysely/dist/esm/operation-node/explain-node.js
var ExplainNode;
var init_explain_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/explain-node.js"() {
    init_object_utils();
    ExplainNode = freeze({
      is(node) {
        return node.kind === "ExplainNode";
      },
      create(format2, options2) {
        return freeze({
          kind: "ExplainNode",
          format: format2,
          options: options2
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/set-operation-node.js
var SetOperationNode;
var init_set_operation_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/set-operation-node.js"() {
    init_object_utils();
    SetOperationNode = freeze({
      is(node) {
        return node.kind === "SetOperationNode";
      },
      create(operator, expression, all) {
        return freeze({
          kind: "SetOperationNode",
          operator,
          expression,
          all
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/parser/set-operation-parser.js
function parseSetOperation(operator, expression, all) {
  return SetOperationNode.create(operator, expression.toOperationNode(), all);
}
var init_set_operation_parser = __esm({
  "node_modules/kysely/dist/esm/parser/set-operation-parser.js"() {
    init_set_operation_node();
  }
});

// node_modules/kysely/dist/esm/operation-node/unary-operation-node.js
var UnaryOperationNode;
var init_unary_operation_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/unary-operation-node.js"() {
    init_object_utils();
    UnaryOperationNode = freeze({
      is(node) {
        return node.kind === "UnaryOperationNode";
      },
      create(operator, operand) {
        return freeze({
          kind: "UnaryOperationNode",
          operator,
          operand
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/parser/unary-operation-parser.js
function parseExists(arg) {
  return parseUnaryOperation("exists", arg);
}
function parseNotExists(arg) {
  return parseUnaryOperation("not exists", arg);
}
function parseUnaryOperation(type, arg) {
  return UnaryOperationNode.create(OperatorNode.create(type), parseValueExpressionOrList(arg));
}
var init_unary_operation_parser = __esm({
  "node_modules/kysely/dist/esm/parser/unary-operation-parser.js"() {
    init_operator_node();
    init_unary_operation_node();
    init_value_parser();
  }
});

// node_modules/kysely/dist/esm/query-builder/select-query-builder.js
var _props, _SelectQueryBuilder, SelectQueryBuilder, _queryBuilder, _alias, AliasedSelectQueryBuilder;
var init_select_query_builder = __esm({
  "node_modules/kysely/dist/esm/query-builder/select-query-builder.js"() {
    init_alias_node();
    init_select_modifier_node();
    init_join_parser();
    init_select_parser();
    init_reference_parser();
    init_select_query_node();
    init_query_node();
    init_order_by_parser();
    init_prevent_await();
    init_limit_node();
    init_offset_node();
    init_object_utils();
    init_group_by_parser();
    init_no_result_error();
    init_identifier_node();
    init_explain_node();
    init_set_operation_parser();
    init_binary_operation_parser();
    init_unary_operation_parser();
    _SelectQueryBuilder = class {
      constructor(props) {
        __privateAdd(this, _props, void 0);
        __privateSet(this, _props, freeze(props));
      }
      /** @private */
      get expressionType() {
        return void 0;
      }
      where(...args) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: QueryNode.cloneWithWhere(__privateGet(this, _props).queryNode, parseWhere(args))
        });
      }
      whereRef(lhs, op, rhs) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: QueryNode.cloneWithWhere(__privateGet(this, _props).queryNode, parseReferentialFilter(lhs, op, rhs))
        });
      }
      orWhere(...args) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: QueryNode.cloneWithOrWhere(__privateGet(this, _props).queryNode, parseWhere(args))
        });
      }
      orWhereRef(lhs, op, rhs) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: QueryNode.cloneWithOrWhere(__privateGet(this, _props).queryNode, parseReferentialFilter(lhs, op, rhs))
        });
      }
      whereExists(arg) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: QueryNode.cloneWithWhere(__privateGet(this, _props).queryNode, parseExists(arg))
        });
      }
      whereNotExists(arg) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: QueryNode.cloneWithWhere(__privateGet(this, _props).queryNode, parseNotExists(arg))
        });
      }
      orWhereExists(arg) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: QueryNode.cloneWithOrWhere(__privateGet(this, _props).queryNode, parseExists(arg))
        });
      }
      orWhereNotExists(arg) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: QueryNode.cloneWithOrWhere(__privateGet(this, _props).queryNode, parseNotExists(arg))
        });
      }
      having(...args) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithHaving(__privateGet(this, _props).queryNode, parseHaving(args))
        });
      }
      havingRef(lhs, op, rhs) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithHaving(__privateGet(this, _props).queryNode, parseReferentialFilter(lhs, op, rhs))
        });
      }
      orHaving(...args) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithOrHaving(__privateGet(this, _props).queryNode, parseHaving(args))
        });
      }
      orHavingRef(lhs, op, rhs) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithOrHaving(__privateGet(this, _props).queryNode, parseReferentialFilter(lhs, op, rhs))
        });
      }
      havingExists(arg) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithHaving(__privateGet(this, _props).queryNode, parseExists(arg))
        });
      }
      havingNotExist(arg) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithHaving(__privateGet(this, _props).queryNode, parseNotExists(arg))
        });
      }
      orHavingExists(arg) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithOrHaving(__privateGet(this, _props).queryNode, parseExists(arg))
        });
      }
      orHavingNotExists(arg) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithOrHaving(__privateGet(this, _props).queryNode, parseNotExists(arg))
        });
      }
      select(selection) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithSelections(__privateGet(this, _props).queryNode, parseSelectExpressionOrList(selection))
        });
      }
      distinctOn(selection) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithDistinctOn(__privateGet(this, _props).queryNode, parseReferenceExpressionOrList(selection))
        });
      }
      /**
       * This can be used to add any additional SQL to the front of the query __after__ the `select` keyword.
       *
       * ### Examples
       *
       * ```ts
       * db.selectFrom('person')
       *   .modifyFront(sql`sql_no_cache`)
       *   .select('first_name')
       *   .execute()
       * ```
       *
       * The generated SQL (MySQL):
       *
       * ```sql
       * select sql_no_cache `first_name`
       * from `person`
       * ```
       */
      modifyFront(modifier) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithFrontModifier(__privateGet(this, _props).queryNode, SelectModifierNode.createWithExpression(modifier.toOperationNode()))
        });
      }
      /**
       * This can be used to add any additional SQL to the end of the query.
       *
       * Also see {@link forUpdate}, {@link forShare}, {@link forKeyShare}, {@link forNoKeyUpdate}
       * {@link skipLocked} and  {@link noWait}.
       *
       * ### Examples
       *
       * ```ts
       * db.selectFrom('person')
       *   .select('first_name')
       *   .modifyEnd(sql`for update`)
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select "first_name"
       * from "person"
       * for update
       * ```
       */
      modifyEnd(modifier) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithEndModifier(__privateGet(this, _props).queryNode, SelectModifierNode.createWithExpression(modifier.toOperationNode()))
        });
      }
      /**
       * Makes the selection distinct.
       *
       * ### Examples
       *
       * ```ts
       * await db.selectFrom('person')
       *   .select('first_name')
       *   .distinct()
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select distinct "first_name" from "person"
       * ```
       */
      distinct() {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithFrontModifier(__privateGet(this, _props).queryNode, SelectModifierNode.create("Distinct"))
        });
      }
      /**
       * Adds the `for update` modifier to a select query on supported databases.
       */
      forUpdate() {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithEndModifier(__privateGet(this, _props).queryNode, SelectModifierNode.create("ForUpdate"))
        });
      }
      /**
       * Adds the `for share` modifier to a select query on supported databases.
       */
      forShare() {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithEndModifier(__privateGet(this, _props).queryNode, SelectModifierNode.create("ForShare"))
        });
      }
      /**
       * Adds the `for key share` modifier to a select query on supported databases.
       */
      forKeyShare() {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithEndModifier(__privateGet(this, _props).queryNode, SelectModifierNode.create("ForKeyShare"))
        });
      }
      /**
       * Adds the `for no key update` modifier to a select query on supported databases.
       */
      forNoKeyUpdate() {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithEndModifier(__privateGet(this, _props).queryNode, SelectModifierNode.create("ForNoKeyUpdate"))
        });
      }
      /**
       * Adds the `skip locked` modifier to a select query on supported databases.
       */
      skipLocked() {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithEndModifier(__privateGet(this, _props).queryNode, SelectModifierNode.create("SkipLocked"))
        });
      }
      /**
       * Adds the `nowait` modifier to a select query on supported databases.
       */
      noWait() {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithEndModifier(__privateGet(this, _props).queryNode, SelectModifierNode.create("NoWait"))
        });
      }
      selectAll(table) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithSelections(__privateGet(this, _props).queryNode, parseSelectAll(table))
        });
      }
      innerJoin(...args) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: QueryNode.cloneWithJoin(__privateGet(this, _props).queryNode, parseJoin("InnerJoin", args))
        });
      }
      leftJoin(...args) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: QueryNode.cloneWithJoin(__privateGet(this, _props).queryNode, parseJoin("LeftJoin", args))
        });
      }
      rightJoin(...args) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: QueryNode.cloneWithJoin(__privateGet(this, _props).queryNode, parseJoin("RightJoin", args))
        });
      }
      fullJoin(...args) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: QueryNode.cloneWithJoin(__privateGet(this, _props).queryNode, parseJoin("FullJoin", args))
        });
      }
      innerJoinLateral(...args) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: QueryNode.cloneWithJoin(__privateGet(this, _props).queryNode, parseJoin("LateralInnerJoin", args))
        });
      }
      leftJoinLateral(...args) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: QueryNode.cloneWithJoin(__privateGet(this, _props).queryNode, parseJoin("LateralLeftJoin", args))
        });
      }
      /**
       * Adds an `order by` clause to the query.
       *
       * `orderBy` calls are additive. To order by multiple columns, call `orderBy`
       * multiple times.
       *
       * The first argument is the expression to order by and the second is the
       * order (`asc` or `desc`).
       *
       * ### Examples
       *
       * ```ts
       * await db
       *   .selectFrom('person')
       *   .select('person.first_name as fn')
       *   .orderBy('id')
       *   .orderBy('fn', 'desc')
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select "person"."first_name" as "fn"
       * from "person"
       * order by "id" asc, "fn" desc
       * ```
       *
       * The order by expression can also be a raw sql expression or a subquery
       * in addition to column references:
       *
       * ```ts
       * import { sql } from 'kysely'
       *
       * await db
       *   .selectFrom('person')
       *   .selectAll()
       *   .orderBy((qb) => qb.selectFrom('pet')
       *     .select('pet.name')
       *     .whereRef('pet.owner_id', '=', 'person.id')
       *     .limit(1)
       *   )
       *   .orderBy(
       *     sql`concat(first_name, last_name)`
       *   )
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select *
       * from "person"
       * order by
       *   ( select "pet"."name"
       *     from "pet"
       *     where "pet"."owner_id" = "person"."id"
       *     limit 1
       *   ) asc,
       *   concat(first_name, last_name) asc
       * ```
       *
       * `dynamic.ref` can be used to refer to columns not known at
       * compile time:
       *
       * ```ts
       * async function someQuery(orderBy: string) {
       *   const { ref } = db.dynamic
       *
       *   return await db
       *     .selectFrom('person')
       *     .select('person.first_name as fn')
       *     .orderBy(ref(orderBy))
       *     .execute()
       * }
       *
       * someQuery('fn')
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select "person"."first_name" as "fn"
       * from "person"
       * order by "fn" asc
       * ```
       */
      orderBy(orderBy, direction) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithOrderByItem(__privateGet(this, _props).queryNode, parseOrderBy(orderBy, direction))
        });
      }
      groupBy(groupBy) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithGroupByItems(__privateGet(this, _props).queryNode, parseGroupBy(groupBy))
        });
      }
      /**
       * Adds a limit clause to the query.
       *
       * ### Examples
       *
       * Select the first 10 rows of the result:
       *
       * ```ts
       * return await db
       *   .selectFrom('person')
       *   .select('first_name')
       *   .limit(10)
       * ```
       *
       * Select rows from index 10 to index 19 of the result:
       *
       * ```ts
       * return await db
       *   .selectFrom('person')
       *   .select('first_name')
       *   .offset(10)
       *   .limit(10)
       * ```
       */
      limit(limit) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithLimit(__privateGet(this, _props).queryNode, LimitNode.create(limit))
        });
      }
      /**
       * Adds an offset clause to the query.
       *
       * ### Examples
       *
       * Select rows from index 10 to index 19 of the result:
       *
       * ```ts
       * return await db
       *   .selectFrom('person')
       *   .select('first_name')
       *   .offset(10)
       *   .limit(10)
       * ```
       */
      offset(offset) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithOffset(__privateGet(this, _props).queryNode, OffsetNode.create(offset))
        });
      }
      /**
       * Combines another select query or raw expression to this query using `union`.
       *
       * The output row type of the combined query must match `this` query.
       *
       * ### Examples
       *
       * ```ts
       * db.selectFrom('person')
       *   .select(['id', 'first_name as name'])
       *   .union(db.selectFrom('pet').select(['id', 'name']))
       *   .orderBy('name')
       * ```
       */
      union(expression) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithSetOperation(__privateGet(this, _props).queryNode, parseSetOperation("union", expression, false))
        });
      }
      /**
       * Combines another select query or raw expression to this query using `union all`.
       *
       * The output row type of the combined query must match `this` query.
       *
       * ### Examples
       *
       * ```ts
       * db.selectFrom('person')
       *   .select(['id', 'first_name as name'])
       *   .unionAll(db.selectFrom('pet').select(['id', 'name']))
       *   .orderBy('name')
       * ```
       */
      unionAll(expression) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithSetOperation(__privateGet(this, _props).queryNode, parseSetOperation("union", expression, true))
        });
      }
      /**
       * Combines another select query or raw expression to this query using `intersect`.
       *
       * The output row type of the combined query must match `this` query.
       *
       * ### Examples
       *
       * ```ts
       * db.selectFrom('person')
       *   .select(['id', 'first_name as name'])
       *   .intersect(db.selectFrom('pet').select(['id', 'name']))
       *   .orderBy('name')
       * ```
       */
      intersect(expression) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithSetOperation(__privateGet(this, _props).queryNode, parseSetOperation("intersect", expression, false))
        });
      }
      /**
       * Combines another select query or raw expression to this query using `intersect all`.
       *
       * The output row type of the combined query must match `this` query.
       *
       * ### Examples
       *
       * ```ts
       * db.selectFrom('person')
       *   .select(['id', 'first_name as name'])
       *   .intersectAll(db.selectFrom('pet').select(['id', 'name']))
       *   .orderBy('name')
       * ```
       */
      intersectAll(expression) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithSetOperation(__privateGet(this, _props).queryNode, parseSetOperation("intersect", expression, true))
        });
      }
      /**
       * Combines another select query or raw expression to this query using `except`.
       *
       * The output row type of the combined query must match `this` query.
       *
       * ### Examples
       *
       * ```ts
       * db.selectFrom('person')
       *   .select(['id', 'first_name as name'])
       *   .except(db.selectFrom('pet').select(['id', 'name']))
       *   .orderBy('name')
       * ```
       */
      except(expression) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithSetOperation(__privateGet(this, _props).queryNode, parseSetOperation("except", expression, false))
        });
      }
      /**
       * Combines another select query or raw expression to this query using `except all`.
       *
       * The output row type of the combined query must match `this` query.
       *
       * ### Examples
       *
       * ```ts
       * db.selectFrom('person')
       *   .select(['id', 'first_name as name'])
       *   .exceptAll(db.selectFrom('pet').select(['id', 'name']))
       *   .orderBy('name')
       * ```
       */
      exceptAll(expression) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithSetOperation(__privateGet(this, _props).queryNode, parseSetOperation("except", expression, true))
        });
      }
      /**
       * Gives an alias for the query. This method is only useful for sub queries.
       *
       * ### Examples
       *
       * ```ts
       * const pets = await db.selectFrom('pet')
       *   .selectAll('pet')
       *   .select(
       *     (qb) => qb.selectFrom('person')
       *       .select('first_name')
       *       .whereRef('pet.owner_id', '=', 'person.id')
       *       .as('owner_first_name')
       *   )
       *   .execute()
       *
       * pets[0].owner_first_name
       * ```
       */
      as(alias) {
        return new AliasedSelectQueryBuilder(this, alias);
      }
      /**
       * Clears all select clauses from the query.
       *
       * ### Examples
       *
       * ```ts
       * db.selectFrom('person')
       *   .select(['id', 'first_name'])
       *   .clearSelect()
       *   .select(['id','gender'])
       * ```
       *
       * The generated SQL(PostgreSQL):
       *
       * ```sql
       * select "id", "gender" from "person"
       * ```
       */
      clearSelect() {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithoutSelections(__privateGet(this, _props).queryNode)
        });
      }
      clearWhere() {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: QueryNode.cloneWithoutWhere(__privateGet(this, _props).queryNode)
        });
      }
      /**
       * Clears limit clause from the query.
       *
       * ### Examples
       *
       * ```ts
       * db.selectFrom('person')
       *   .selectAll()
       *   .limit(10)
       *   .clearLimit()
       * ```
       *
       * The generated SQL(PostgreSQL):
       *
       * ```sql
       * select * from "person"
       * ```
       */
      clearLimit() {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithoutLimit(__privateGet(this, _props).queryNode)
        });
      }
      /**
       * Clears offset clause from the query.
       *
       * ### Examples
       *
       * ```ts
       * db.selectFrom('person')
       *   .selectAll()
       *   .limit(10)
       *   .offset(20)
       *   .clearOffset()
       * ```
       *
       * The generated SQL(PostgreSQL):
       *
       * ```sql
       * select * from "person" limit 10
       * ```
       */
      clearOffset() {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithoutOffset(__privateGet(this, _props).queryNode)
        });
      }
      /**
       * Clears all `order by` clauses from the query.
       *
       * ### Examples
       *
       * ```ts
       * db.selectFrom('person')
       *   .selectAll()
       *   .orderBy('id')
       *   .clearOrderBy()
       * ```
       *
       * The generated SQL(PostgreSQL):
       *
       * ```sql
       * select * from "person"
       * ```
       */
      clearOrderBy() {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithoutOrderBy(__privateGet(this, _props).queryNode)
        });
      }
      /**
       * Simply calls the given function passing `this` as the only argument.
       *
       * If you want to conditionally call a method on `this`, see
       * the {@link $if} method.
       *
       * ### Examples
       *
       * The next example uses a helper function `log` to log a query:
       *
       * ```ts
       * function log<T extends Compilable>(qb: T): T {
       *   console.log(qb.compile())
       *   return qb
       * }
       *
       * db.selectFrom('person')
       *   .selectAll()
       *   .$call(log)
       *   .execute()
       * ```
       */
      $call(func) {
        return func(this);
      }
      /**
       * @deprecated Use `$call` instead
       */
      call(func) {
        return this.$call(func);
      }
      /**
       * Call `func(this)` if `condition` is true.
       *
       * This method is especially handy with optional selects. Any `select` or `selectAll`
       * method calls add columns as optional fields to the output type when called inside
       * the `func` callback. This is because we can't know if those selections were actually
       * made before running the code.
       *
       * Also see [this recipe](https://github.com/koskimas/kysely/tree/master/recipes/conditional-selects.md)
       *
       * ### Examples
       *
       * ```ts
       * async function getPerson(id: number, withLastName: boolean) {
       *   return await db
       *     .selectFrom('person')
       *     .select(['id', 'first_name'])
       *     .$if(withLastName, (qb) => qb.select('last_name'))
       *     .where('id', '=', id)
       *     .executeTakeFirstOrThrow()
       * }
       * ```
       *
       * Any selections added inside the `if` callback will be added as optional fields to the
       * output type since we can't know if the selections were actually made before running
       * the code. In the example above the return type of the `getPerson` function is:
       *
       * ```ts
       * {
       *   id: number
       *   first_name: string
       *   last_name?: string
       * }
       * ```
       *
       * You can also call any other methods inside the callback:
       *
       * ```ts
       * const { count } = db.fn
       *
       * db.selectFrom('person')
       *   .select('person.id')
       *   .$if(filterByFirstName, (qb) => qb.where('first_name', '=', firstName))
       *   .$if(filterByPetCount, (qb) => qb
       *     .innerJoin('pet', 'pet.owner_id', 'person.id')
       *     .having(count('pet.id'), '>', petCountLimit)
       *     .groupBy('person.id')
       *   )
       * ```
       */
      $if(condition, func) {
        if (condition) {
          return func(this);
        }
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props)
        });
      }
      /**
       * @deprecated Use `$if` instead
       */
      if(condition, func) {
        return this.$if(condition, func);
      }
      /**
       * Change the output type of the query.
       *
       * You should only use this method as the last resort if the types
       * don't support your use case.
       */
      $castTo() {
        return new _SelectQueryBuilder(__privateGet(this, _props));
      }
      /**
       * @deprecated Use `$castTo` instead.
       */
      castTo() {
        return this.$castTo();
      }
      /**
       * Asserts that query's output row type equals the given type `T`.
       *
       * This method can be used to simplify excessively complex types to make typescript happy
       * and much faster.
       *
       * Kysely uses complex type magic to achieve its type safety. This complexity is sometimes too much
       * for typescript and you get errors like this:
       *
       * ```
       * error TS2589: Type instantiation is excessively deep and possibly infinite.
       * ```
       *
       * In these case you can often use this method to help typescript a little bit. When you use this
       * method to assert the output type of a query, Kysely can drop the complex output type that
       * consists of multiple nested helper types and replace it with the simple asserted type.
       *
       * Using this method doesn't reduce type safety at all. You have to pass in a type that is
       * structurally equal to the current type.
       *
       * ### Examples
       *
       * ```ts
       * const result = await db
       *   .with('first_and_last', (qb) => qb
       *     .selectFrom('person')
       *     .select(['first_name', 'last_name'])
       *     .$assertType<{ first_name: string, last_name: string }>()
       *   )
       *   .with('age', (qb) => qb
       *     .selectFrom('person')
       *     .select('age')
       *     .$assertType<{ age: number }>()
       *   )
       *   .selectFrom(['first_and_last', 'age'])
       *   .selectAll()
       *   .executeTakeFirstOrThrow()
       * ```
       */
      $assertType() {
        return new _SelectQueryBuilder(__privateGet(this, _props));
      }
      /**
       * @deprecated Use `$assertType` instead.
       */
      assertType() {
        return new _SelectQueryBuilder(__privateGet(this, _props));
      }
      /**
       * Returns a copy of this SelectQueryBuilder instance with the given plugin installed.
       */
      withPlugin(plugin) {
        return new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          executor: __privateGet(this, _props).executor.withPlugin(plugin)
        });
      }
      toOperationNode() {
        return __privateGet(this, _props).executor.transformQuery(__privateGet(this, _props).queryNode, __privateGet(this, _props).queryId);
      }
      compile() {
        return __privateGet(this, _props).executor.compileQuery(this.toOperationNode(), __privateGet(this, _props).queryId);
      }
      /**
       * Executes the query and returns an array of rows.
       *
       * Also see the {@link executeTakeFirst} and {@link executeTakeFirstOrThrow} methods.
       */
      async execute() {
        const compiledQuery = this.compile();
        const result = await __privateGet(this, _props).executor.executeQuery(compiledQuery, __privateGet(this, _props).queryId);
        return result.rows;
      }
      /**
       * Executes the query and returns the first result or undefined if
       * the query returned no result.
       */
      async executeTakeFirst() {
        const [result] = await this.execute();
        return result;
      }
      /**
       * Executes the query and returns the first result or throws if
       * the query returned no result.
       *
       * By default an instance of {@link NoResultError} is thrown, but you can
       * provide a custom error class as the only argument to throw a different
       * error.
       */
      async executeTakeFirstOrThrow(errorConstructor = NoResultError) {
        const result = await this.executeTakeFirst();
        if (result === void 0) {
          throw new errorConstructor(this.toOperationNode());
        }
        return result;
      }
      /**
       * Executes the query and streams the rows.
       *
       * The optional argument `chunkSize` defines how many rows to fetch from the database
       * at a time. It only affects some dialects like PostgreSQL that support it.
       *
       * ### Examples
       *
       * ```ts
       * const stream = db.
       *   .selectFrom('person')
       *   .select(['first_name', 'last_name'])
       *   .where('gender', '=', 'other')
       *   .stream()
       *
       * for await (const person of stream) {
       *   console.log(person.first_name)
       *
       *   if (person.last_name === 'Something') {
       *     // Breaking or returning before the stream has ended will release
       *     // the database connection and invalidate the stream.
       *     break
       *   }
       * }
       * ```
       */
      async *stream(chunkSize = 100) {
        const compiledQuery = this.compile();
        const stream = __privateGet(this, _props).executor.stream(compiledQuery, chunkSize, __privateGet(this, _props).queryId);
        for await (const item of stream) {
          yield* item.rows;
        }
      }
      /**
       * Executes query with `explain` statement before `select` keyword.
       *
       * ```ts
       * const explained = await db
       *  .selectFrom('person')
       *  .where('gender', '=', 'female')
       *  .selectAll()
       *  .explain('json')
       * ```
       *
       * The generated SQL (MySQL):
       *
       * ```sql
       * explain format=json select * from `person` where `gender` = ?
       * ```
       *
       * You can also execute `explain analyze` statements.
       *
       * ```ts
       * import { sql } from 'kysely'
       *
       * const explained = await db
       *  .selectFrom('person')
       *  .where('gender', '=', 'female')
       *  .selectAll()
       *  .explain('json', sql`analyze`)
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * explain (analyze, format json) select * from "person" where "gender" = $1
       * ```
       */
      async explain(format2, options2) {
        const builder = new _SelectQueryBuilder({
          ...__privateGet(this, _props),
          queryNode: SelectQueryNode.cloneWithExplain(__privateGet(this, _props).queryNode, ExplainNode.create(format2, options2?.toOperationNode()))
        });
        return await builder.execute();
      }
    };
    SelectQueryBuilder = _SelectQueryBuilder;
    _props = new WeakMap();
    preventAwait(SelectQueryBuilder, "don't await SelectQueryBuilder instances directly. To execute the query you need to call `execute` or `executeTakeFirst`.");
    AliasedSelectQueryBuilder = class {
      constructor(queryBuilder, alias) {
        __privateAdd(this, _queryBuilder, void 0);
        __privateAdd(this, _alias, void 0);
        __privateSet(this, _queryBuilder, queryBuilder);
        __privateSet(this, _alias, alias);
      }
      /** @private */
      get expression() {
        return __privateGet(this, _queryBuilder);
      }
      /** @private */
      get alias() {
        return __privateGet(this, _alias);
      }
      toOperationNode() {
        return AliasNode.create(__privateGet(this, _queryBuilder).toOperationNode(), IdentifierNode.create(__privateGet(this, _alias)));
      }
    };
    _queryBuilder = new WeakMap();
    _alias = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/util/require-all-props.js
function requireAllProps(obj) {
  return obj;
}
var init_require_all_props = __esm({
  "node_modules/kysely/dist/esm/util/require-all-props.js"() {
  }
});

// node_modules/kysely/dist/esm/operation-node/operation-node-transformer.js
var _transformers, OperationNodeTransformer;
var init_operation_node_transformer = __esm({
  "node_modules/kysely/dist/esm/operation-node/operation-node-transformer.js"() {
    init_object_utils();
    init_require_all_props();
    OperationNodeTransformer = class {
      constructor() {
        __publicField(this, "nodeStack", []);
        __privateAdd(this, _transformers, freeze({
          AliasNode: this.transformAlias.bind(this),
          ColumnNode: this.transformColumn.bind(this),
          IdentifierNode: this.transformIdentifier.bind(this),
          SchemableIdentifierNode: this.transformSchemableIdentifier.bind(this),
          RawNode: this.transformRaw.bind(this),
          ReferenceNode: this.transformReference.bind(this),
          SelectQueryNode: this.transformSelectQuery.bind(this),
          SelectionNode: this.transformSelection.bind(this),
          TableNode: this.transformTable.bind(this),
          FromNode: this.transformFrom.bind(this),
          SelectAllNode: this.transformSelectAll.bind(this),
          AndNode: this.transformAnd.bind(this),
          OrNode: this.transformOr.bind(this),
          ValueNode: this.transformValue.bind(this),
          ValueListNode: this.transformValueList.bind(this),
          PrimitiveValueListNode: this.transformPrimitiveValueList.bind(this),
          ParensNode: this.transformParens.bind(this),
          JoinNode: this.transformJoin.bind(this),
          OperatorNode: this.transformOperator.bind(this),
          WhereNode: this.transformWhere.bind(this),
          InsertQueryNode: this.transformInsertQuery.bind(this),
          DeleteQueryNode: this.transformDeleteQuery.bind(this),
          ReturningNode: this.transformReturning.bind(this),
          CreateTableNode: this.transformCreateTable.bind(this),
          AddColumnNode: this.transformAddColumn.bind(this),
          ColumnDefinitionNode: this.transformColumnDefinition.bind(this),
          DropTableNode: this.transformDropTable.bind(this),
          DataTypeNode: this.transformDataType.bind(this),
          OrderByNode: this.transformOrderBy.bind(this),
          OrderByItemNode: this.transformOrderByItem.bind(this),
          GroupByNode: this.transformGroupBy.bind(this),
          GroupByItemNode: this.transformGroupByItem.bind(this),
          UpdateQueryNode: this.transformUpdateQuery.bind(this),
          ColumnUpdateNode: this.transformColumnUpdate.bind(this),
          LimitNode: this.transformLimit.bind(this),
          OffsetNode: this.transformOffset.bind(this),
          OnConflictNode: this.transformOnConflict.bind(this),
          OnDuplicateKeyNode: this.transformOnDuplicateKey.bind(this),
          CreateIndexNode: this.transformCreateIndex.bind(this),
          DropIndexNode: this.transformDropIndex.bind(this),
          ListNode: this.transformList.bind(this),
          PrimaryKeyConstraintNode: this.transformPrimaryKeyConstraint.bind(this),
          UniqueConstraintNode: this.transformUniqueConstraint.bind(this),
          ReferencesNode: this.transformReferences.bind(this),
          CheckConstraintNode: this.transformCheckConstraint.bind(this),
          WithNode: this.transformWith.bind(this),
          CommonTableExpressionNode: this.transformCommonTableExpression.bind(this),
          CommonTableExpressionNameNode: this.transformCommonTableExpressionName.bind(this),
          HavingNode: this.transformHaving.bind(this),
          CreateSchemaNode: this.transformCreateSchema.bind(this),
          DropSchemaNode: this.transformDropSchema.bind(this),
          AlterTableNode: this.transformAlterTable.bind(this),
          DropColumnNode: this.transformDropColumn.bind(this),
          RenameColumnNode: this.transformRenameColumn.bind(this),
          AlterColumnNode: this.transformAlterColumn.bind(this),
          ModifyColumnNode: this.transformModifyColumn.bind(this),
          AddConstraintNode: this.transformAddConstraint.bind(this),
          DropConstraintNode: this.transformDropConstraint.bind(this),
          ForeignKeyConstraintNode: this.transformForeignKeyConstraint.bind(this),
          CreateViewNode: this.transformCreateView.bind(this),
          DropViewNode: this.transformDropView.bind(this),
          GeneratedNode: this.transformGenerated.bind(this),
          DefaultValueNode: this.transformDefaultValue.bind(this),
          OnNode: this.transformOn.bind(this),
          ValuesNode: this.transformValues.bind(this),
          SelectModifierNode: this.transformSelectModifier.bind(this),
          CreateTypeNode: this.transformCreateType.bind(this),
          DropTypeNode: this.transformDropType.bind(this),
          ExplainNode: this.transformExplain.bind(this),
          DefaultInsertValueNode: this.transformDefaultInsertValue.bind(this),
          AggregateFunctionNode: this.transformAggregateFunction.bind(this),
          OverNode: this.transformOver.bind(this),
          PartitionByNode: this.transformPartitionBy.bind(this),
          PartitionByItemNode: this.transformPartitionByItem.bind(this),
          SetOperationNode: this.transformSetOperation.bind(this),
          BinaryOperationNode: this.transformBinaryOperation.bind(this),
          UnaryOperationNode: this.transformUnaryOperation.bind(this),
          UsingNode: this.transformUsing.bind(this)
        }));
      }
      transformNode(node) {
        if (!node) {
          return node;
        }
        this.nodeStack.push(node);
        const out = this.transformNodeImpl(node);
        this.nodeStack.pop();
        return freeze(out);
      }
      transformNodeImpl(node) {
        return __privateGet(this, _transformers)[node.kind](node);
      }
      transformNodeList(list) {
        if (!list) {
          return list;
        }
        return freeze(list.map((node) => this.transformNode(node)));
      }
      transformSelectQuery(node) {
        return requireAllProps({
          kind: "SelectQueryNode",
          from: this.transformNode(node.from),
          selections: this.transformNodeList(node.selections),
          distinctOn: this.transformNodeList(node.distinctOn),
          joins: this.transformNodeList(node.joins),
          groupBy: this.transformNode(node.groupBy),
          orderBy: this.transformNode(node.orderBy),
          where: this.transformNode(node.where),
          frontModifiers: this.transformNodeList(node.frontModifiers),
          endModifiers: this.transformNodeList(node.endModifiers),
          limit: this.transformNode(node.limit),
          offset: this.transformNode(node.offset),
          with: this.transformNode(node.with),
          having: this.transformNode(node.having),
          explain: this.transformNode(node.explain),
          setOperations: this.transformNodeList(node.setOperations)
        });
      }
      transformSelection(node) {
        return requireAllProps({
          kind: "SelectionNode",
          selection: this.transformNode(node.selection)
        });
      }
      transformColumn(node) {
        return requireAllProps({
          kind: "ColumnNode",
          column: this.transformNode(node.column)
        });
      }
      transformAlias(node) {
        return requireAllProps({
          kind: "AliasNode",
          node: this.transformNode(node.node),
          alias: this.transformNode(node.alias)
        });
      }
      transformTable(node) {
        return requireAllProps({
          kind: "TableNode",
          table: this.transformNode(node.table)
        });
      }
      transformFrom(node) {
        return requireAllProps({
          kind: "FromNode",
          froms: this.transformNodeList(node.froms)
        });
      }
      transformReference(node) {
        return requireAllProps({
          kind: "ReferenceNode",
          table: this.transformNode(node.table),
          column: this.transformNode(node.column)
        });
      }
      transformAnd(node) {
        return requireAllProps({
          kind: "AndNode",
          left: this.transformNode(node.left),
          right: this.transformNode(node.right)
        });
      }
      transformOr(node) {
        return requireAllProps({
          kind: "OrNode",
          left: this.transformNode(node.left),
          right: this.transformNode(node.right)
        });
      }
      transformValueList(node) {
        return requireAllProps({
          kind: "ValueListNode",
          values: this.transformNodeList(node.values)
        });
      }
      transformParens(node) {
        return requireAllProps({
          kind: "ParensNode",
          node: this.transformNode(node.node)
        });
      }
      transformJoin(node) {
        return requireAllProps({
          kind: "JoinNode",
          joinType: node.joinType,
          table: this.transformNode(node.table),
          on: this.transformNode(node.on)
        });
      }
      transformRaw(node) {
        return requireAllProps({
          kind: "RawNode",
          sqlFragments: freeze([...node.sqlFragments]),
          parameters: this.transformNodeList(node.parameters)
        });
      }
      transformWhere(node) {
        return requireAllProps({
          kind: "WhereNode",
          where: this.transformNode(node.where)
        });
      }
      transformInsertQuery(node) {
        return requireAllProps({
          kind: "InsertQueryNode",
          into: this.transformNode(node.into),
          columns: this.transformNodeList(node.columns),
          values: this.transformNode(node.values),
          returning: this.transformNode(node.returning),
          onConflict: this.transformNode(node.onConflict),
          onDuplicateKey: this.transformNode(node.onDuplicateKey),
          with: this.transformNode(node.with),
          ignore: node.ignore,
          replace: node.replace,
          explain: this.transformNode(node.explain)
        });
      }
      transformValues(node) {
        return requireAllProps({
          kind: "ValuesNode",
          values: this.transformNodeList(node.values)
        });
      }
      transformDeleteQuery(node) {
        return requireAllProps({
          kind: "DeleteQueryNode",
          from: this.transformNode(node.from),
          using: this.transformNode(node.using),
          joins: this.transformNodeList(node.joins),
          where: this.transformNode(node.where),
          returning: this.transformNode(node.returning),
          with: this.transformNode(node.with),
          orderBy: this.transformNode(node.orderBy),
          limit: this.transformNode(node.limit),
          explain: this.transformNode(node.explain)
        });
      }
      transformReturning(node) {
        return requireAllProps({
          kind: "ReturningNode",
          selections: this.transformNodeList(node.selections)
        });
      }
      transformCreateTable(node) {
        return requireAllProps({
          kind: "CreateTableNode",
          table: this.transformNode(node.table),
          columns: this.transformNodeList(node.columns),
          constraints: this.transformNodeList(node.constraints),
          temporary: node.temporary,
          ifNotExists: node.ifNotExists,
          onCommit: node.onCommit,
          frontModifiers: this.transformNodeList(node.frontModifiers),
          endModifiers: this.transformNodeList(node.endModifiers)
        });
      }
      transformColumnDefinition(node) {
        return requireAllProps({
          kind: "ColumnDefinitionNode",
          column: this.transformNode(node.column),
          dataType: this.transformNode(node.dataType),
          references: this.transformNode(node.references),
          primaryKey: node.primaryKey,
          autoIncrement: node.autoIncrement,
          unique: node.unique,
          notNull: node.notNull,
          unsigned: node.unsigned,
          defaultTo: this.transformNode(node.defaultTo),
          check: this.transformNode(node.check),
          generated: this.transformNode(node.generated),
          frontModifiers: this.transformNodeList(node.frontModifiers),
          endModifiers: this.transformNodeList(node.endModifiers)
        });
      }
      transformAddColumn(node) {
        return requireAllProps({
          kind: "AddColumnNode",
          column: this.transformNode(node.column)
        });
      }
      transformDropTable(node) {
        return requireAllProps({
          kind: "DropTableNode",
          table: this.transformNode(node.table),
          ifExists: node.ifExists,
          cascade: node.cascade
        });
      }
      transformOrderBy(node) {
        return requireAllProps({
          kind: "OrderByNode",
          items: this.transformNodeList(node.items)
        });
      }
      transformOrderByItem(node) {
        return requireAllProps({
          kind: "OrderByItemNode",
          orderBy: this.transformNode(node.orderBy),
          direction: this.transformNode(node.direction)
        });
      }
      transformGroupBy(node) {
        return requireAllProps({
          kind: "GroupByNode",
          items: this.transformNodeList(node.items)
        });
      }
      transformGroupByItem(node) {
        return requireAllProps({
          kind: "GroupByItemNode",
          groupBy: this.transformNode(node.groupBy)
        });
      }
      transformUpdateQuery(node) {
        return requireAllProps({
          kind: "UpdateQueryNode",
          table: this.transformNode(node.table),
          from: this.transformNode(node.from),
          joins: this.transformNodeList(node.joins),
          where: this.transformNode(node.where),
          updates: this.transformNodeList(node.updates),
          returning: this.transformNode(node.returning),
          with: this.transformNode(node.with),
          explain: this.transformNode(node.explain)
        });
      }
      transformColumnUpdate(node) {
        return requireAllProps({
          kind: "ColumnUpdateNode",
          column: this.transformNode(node.column),
          value: this.transformNode(node.value)
        });
      }
      transformLimit(node) {
        return requireAllProps({
          kind: "LimitNode",
          limit: this.transformNode(node.limit)
        });
      }
      transformOffset(node) {
        return requireAllProps({
          kind: "OffsetNode",
          offset: this.transformNode(node.offset)
        });
      }
      transformOnConflict(node) {
        return requireAllProps({
          kind: "OnConflictNode",
          columns: this.transformNodeList(node.columns),
          constraint: this.transformNode(node.constraint),
          indexExpression: this.transformNode(node.indexExpression),
          indexWhere: this.transformNode(node.indexWhere),
          updates: this.transformNodeList(node.updates),
          updateWhere: this.transformNode(node.updateWhere),
          doNothing: node.doNothing
        });
      }
      transformOnDuplicateKey(node) {
        return requireAllProps({
          kind: "OnDuplicateKeyNode",
          updates: this.transformNodeList(node.updates)
        });
      }
      transformCreateIndex(node) {
        return requireAllProps({
          kind: "CreateIndexNode",
          name: this.transformNode(node.name),
          table: this.transformNode(node.table),
          expression: this.transformNode(node.expression),
          unique: node.unique,
          using: this.transformNode(node.using),
          ifNotExists: node.ifNotExists
        });
      }
      transformList(node) {
        return requireAllProps({
          kind: "ListNode",
          items: this.transformNodeList(node.items)
        });
      }
      transformDropIndex(node) {
        return requireAllProps({
          kind: "DropIndexNode",
          name: this.transformNode(node.name),
          table: this.transformNode(node.table),
          ifExists: node.ifExists,
          cascade: node.cascade
        });
      }
      transformPrimaryKeyConstraint(node) {
        return requireAllProps({
          kind: "PrimaryKeyConstraintNode",
          columns: this.transformNodeList(node.columns),
          name: this.transformNode(node.name)
        });
      }
      transformUniqueConstraint(node) {
        return requireAllProps({
          kind: "UniqueConstraintNode",
          columns: this.transformNodeList(node.columns),
          name: this.transformNode(node.name)
        });
      }
      transformForeignKeyConstraint(node) {
        return requireAllProps({
          kind: "ForeignKeyConstraintNode",
          columns: this.transformNodeList(node.columns),
          references: this.transformNode(node.references),
          name: this.transformNode(node.name),
          onDelete: node.onDelete,
          onUpdate: node.onUpdate
        });
      }
      transformSetOperation(node) {
        return requireAllProps({
          kind: "SetOperationNode",
          operator: node.operator,
          expression: this.transformNode(node.expression),
          all: node.all
        });
      }
      transformReferences(node) {
        return requireAllProps({
          kind: "ReferencesNode",
          table: this.transformNode(node.table),
          columns: this.transformNodeList(node.columns),
          onDelete: node.onDelete,
          onUpdate: node.onUpdate
        });
      }
      transformCheckConstraint(node) {
        return requireAllProps({
          kind: "CheckConstraintNode",
          expression: this.transformNode(node.expression),
          name: this.transformNode(node.name)
        });
      }
      transformWith(node) {
        return requireAllProps({
          kind: "WithNode",
          expressions: this.transformNodeList(node.expressions),
          recursive: node.recursive
        });
      }
      transformCommonTableExpression(node) {
        return requireAllProps({
          kind: "CommonTableExpressionNode",
          name: this.transformNode(node.name),
          expression: this.transformNode(node.expression)
        });
      }
      transformCommonTableExpressionName(node) {
        return requireAllProps({
          kind: "CommonTableExpressionNameNode",
          table: this.transformNode(node.table),
          columns: this.transformNodeList(node.columns)
        });
      }
      transformHaving(node) {
        return requireAllProps({
          kind: "HavingNode",
          having: this.transformNode(node.having)
        });
      }
      transformCreateSchema(node) {
        return requireAllProps({
          kind: "CreateSchemaNode",
          schema: this.transformNode(node.schema),
          ifNotExists: node.ifNotExists
        });
      }
      transformDropSchema(node) {
        return requireAllProps({
          kind: "DropSchemaNode",
          schema: this.transformNode(node.schema),
          ifExists: node.ifExists,
          cascade: node.cascade
        });
      }
      transformAlterTable(node) {
        return requireAllProps({
          kind: "AlterTableNode",
          table: this.transformNode(node.table),
          renameTo: this.transformNode(node.renameTo),
          setSchema: this.transformNode(node.setSchema),
          columnAlterations: this.transformNodeList(node.columnAlterations),
          addConstraint: this.transformNode(node.addConstraint),
          dropConstraint: this.transformNode(node.dropConstraint)
        });
      }
      transformDropColumn(node) {
        return requireAllProps({
          kind: "DropColumnNode",
          column: this.transformNode(node.column)
        });
      }
      transformRenameColumn(node) {
        return requireAllProps({
          kind: "RenameColumnNode",
          column: this.transformNode(node.column),
          renameTo: this.transformNode(node.renameTo)
        });
      }
      transformAlterColumn(node) {
        return requireAllProps({
          kind: "AlterColumnNode",
          column: this.transformNode(node.column),
          dataType: this.transformNode(node.dataType),
          dataTypeExpression: this.transformNode(node.dataTypeExpression),
          setDefault: this.transformNode(node.setDefault),
          dropDefault: node.dropDefault,
          setNotNull: node.setNotNull,
          dropNotNull: node.dropNotNull
        });
      }
      transformModifyColumn(node) {
        return requireAllProps({
          kind: "ModifyColumnNode",
          column: this.transformNode(node.column)
        });
      }
      transformAddConstraint(node) {
        return requireAllProps({
          kind: "AddConstraintNode",
          constraint: this.transformNode(node.constraint)
        });
      }
      transformDropConstraint(node) {
        return requireAllProps({
          kind: "DropConstraintNode",
          constraintName: this.transformNode(node.constraintName),
          ifExists: node.ifExists,
          modifier: node.modifier
        });
      }
      transformCreateView(node) {
        return requireAllProps({
          kind: "CreateViewNode",
          name: this.transformNode(node.name),
          temporary: node.temporary,
          orReplace: node.orReplace,
          ifNotExists: node.ifNotExists,
          materialized: node.materialized,
          columns: this.transformNodeList(node.columns),
          as: this.transformNode(node.as)
        });
      }
      transformDropView(node) {
        return requireAllProps({
          kind: "DropViewNode",
          name: this.transformNode(node.name),
          ifExists: node.ifExists,
          materialized: node.materialized,
          cascade: node.cascade
        });
      }
      transformGenerated(node) {
        return requireAllProps({
          kind: "GeneratedNode",
          byDefault: node.byDefault,
          always: node.always,
          identity: node.identity,
          stored: node.stored,
          expression: this.transformNode(node.expression)
        });
      }
      transformDefaultValue(node) {
        return requireAllProps({
          kind: "DefaultValueNode",
          defaultValue: this.transformNode(node.defaultValue)
        });
      }
      transformOn(node) {
        return requireAllProps({
          kind: "OnNode",
          on: this.transformNode(node.on)
        });
      }
      transformSelectModifier(node) {
        return requireAllProps({
          kind: "SelectModifierNode",
          modifier: node.modifier,
          rawModifier: this.transformNode(node.rawModifier)
        });
      }
      transformCreateType(node) {
        return requireAllProps({
          kind: "CreateTypeNode",
          name: this.transformNode(node.name),
          enum: this.transformNode(node.enum)
        });
      }
      transformDropType(node) {
        return requireAllProps({
          kind: "DropTypeNode",
          name: this.transformNode(node.name),
          ifExists: node.ifExists
        });
      }
      transformExplain(node) {
        return requireAllProps({
          kind: "ExplainNode",
          format: node.format,
          options: this.transformNode(node.options)
        });
      }
      transformSchemableIdentifier(node) {
        return requireAllProps({
          kind: "SchemableIdentifierNode",
          schema: this.transformNode(node.schema),
          identifier: this.transformNode(node.identifier)
        });
      }
      transformAggregateFunction(node) {
        return requireAllProps({
          kind: "AggregateFunctionNode",
          aggregated: this.transformNode(node.aggregated),
          distinct: node.distinct,
          filter: this.transformNode(node.filter),
          func: node.func,
          over: this.transformNode(node.over)
        });
      }
      transformOver(node) {
        return requireAllProps({
          kind: "OverNode",
          orderBy: this.transformNode(node.orderBy),
          partitionBy: this.transformNode(node.partitionBy)
        });
      }
      transformPartitionBy(node) {
        return requireAllProps({
          kind: "PartitionByNode",
          items: this.transformNodeList(node.items)
        });
      }
      transformPartitionByItem(node) {
        return requireAllProps({
          kind: "PartitionByItemNode",
          partitionBy: this.transformNode(node.partitionBy)
        });
      }
      transformBinaryOperation(node) {
        return requireAllProps({
          kind: "BinaryOperationNode",
          leftOperand: this.transformNode(node.leftOperand),
          operator: this.transformNode(node.operator),
          rightOperand: this.transformNode(node.rightOperand)
        });
      }
      transformUnaryOperation(node) {
        return requireAllProps({
          kind: "UnaryOperationNode",
          operator: this.transformNode(node.operator),
          operand: this.transformNode(node.operand)
        });
      }
      transformUsing(node) {
        return requireAllProps({
          kind: "UsingNode",
          tables: this.transformNodeList(node.tables)
        });
      }
      transformDataType(node) {
        return node;
      }
      transformSelectAll(node) {
        return node;
      }
      transformIdentifier(node) {
        return node;
      }
      transformValue(node) {
        return node;
      }
      transformPrimitiveValueList(node) {
        return node;
      }
      transformOperator(node) {
        return node;
      }
      transformDefaultInsertValue(node) {
        return node;
      }
    };
    _transformers = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/plugin/with-schema/with-schema-transformer.js
var ROOT_OPERATION_NODES, _schema, _schemableIds, _isRootOperationNode, isRootOperationNode_fn, _collectSchemableIds, collectSchemableIds_fn, _collectSchemableIdsFromTableExpr, collectSchemableIdsFromTableExpr_fn, _collectSchemableId, collectSchemableId_fn, _removeCommonTableExpressionTables, removeCommonTableExpressionTables_fn, WithSchemaTransformer;
var init_with_schema_transformer = __esm({
  "node_modules/kysely/dist/esm/plugin/with-schema/with-schema-transformer.js"() {
    init_alias_node();
    init_identifier_node();
    init_operation_node_transformer();
    init_schemable_identifier_node();
    init_table_node();
    init_object_utils();
    ROOT_OPERATION_NODES = freeze({
      AlterTableNode: true,
      CreateIndexNode: true,
      CreateSchemaNode: true,
      CreateTableNode: true,
      CreateTypeNode: true,
      CreateViewNode: true,
      DeleteQueryNode: true,
      DropIndexNode: true,
      DropSchemaNode: true,
      DropTableNode: true,
      DropTypeNode: true,
      DropViewNode: true,
      InsertQueryNode: true,
      RawNode: true,
      SelectQueryNode: true,
      UpdateQueryNode: true
    });
    WithSchemaTransformer = class extends OperationNodeTransformer {
      constructor(schema) {
        super();
        __privateAdd(this, _isRootOperationNode);
        __privateAdd(this, _collectSchemableIds);
        __privateAdd(this, _collectSchemableIdsFromTableExpr);
        __privateAdd(this, _collectSchemableId);
        __privateAdd(this, _removeCommonTableExpressionTables);
        __privateAdd(this, _schema, void 0);
        __privateAdd(this, _schemableIds, /* @__PURE__ */ new Set());
        __privateSet(this, _schema, schema);
      }
      transformNodeImpl(node) {
        if (!__privateMethod(this, _isRootOperationNode, isRootOperationNode_fn).call(this, node)) {
          return super.transformNodeImpl(node);
        }
        const tables = __privateMethod(this, _collectSchemableIds, collectSchemableIds_fn).call(this, node);
        for (const table of tables) {
          __privateGet(this, _schemableIds).add(table);
        }
        const transformed = super.transformNodeImpl(node);
        for (const table of tables) {
          __privateGet(this, _schemableIds).delete(table);
        }
        return transformed;
      }
      transformSchemableIdentifier(node) {
        const transformed = super.transformSchemableIdentifier(node);
        if (transformed.schema || !__privateGet(this, _schemableIds).has(node.identifier.name)) {
          return transformed;
        }
        return {
          ...transformed,
          schema: IdentifierNode.create(__privateGet(this, _schema))
        };
      }
      transformReferences(node) {
        const transformed = super.transformReferences(node);
        if (transformed.table.table.schema) {
          return transformed;
        }
        return {
          ...transformed,
          table: TableNode.createWithSchema(__privateGet(this, _schema), transformed.table.table.identifier.name)
        };
      }
    };
    _schema = new WeakMap();
    _schemableIds = new WeakMap();
    _isRootOperationNode = new WeakSet();
    isRootOperationNode_fn = function(node) {
      return node.kind in ROOT_OPERATION_NODES;
    };
    _collectSchemableIds = new WeakSet();
    collectSchemableIds_fn = function(node) {
      const schemableIds = /* @__PURE__ */ new Set();
      if ("name" in node && node.name && SchemableIdentifierNode.is(node.name)) {
        __privateMethod(this, _collectSchemableId, collectSchemableId_fn).call(this, node.name, schemableIds);
      }
      if ("from" in node && node.from) {
        for (const from of node.from.froms) {
          __privateMethod(this, _collectSchemableIdsFromTableExpr, collectSchemableIdsFromTableExpr_fn).call(this, from, schemableIds);
        }
      }
      if ("into" in node && node.into) {
        __privateMethod(this, _collectSchemableIdsFromTableExpr, collectSchemableIdsFromTableExpr_fn).call(this, node.into, schemableIds);
      }
      if ("table" in node && node.table) {
        __privateMethod(this, _collectSchemableIdsFromTableExpr, collectSchemableIdsFromTableExpr_fn).call(this, node.table, schemableIds);
      }
      if ("joins" in node && node.joins) {
        for (const join of node.joins) {
          __privateMethod(this, _collectSchemableIdsFromTableExpr, collectSchemableIdsFromTableExpr_fn).call(this, join.table, schemableIds);
        }
      }
      if ("with" in node && node.with) {
        __privateMethod(this, _removeCommonTableExpressionTables, removeCommonTableExpressionTables_fn).call(this, node.with, schemableIds);
      }
      return schemableIds;
    };
    _collectSchemableIdsFromTableExpr = new WeakSet();
    collectSchemableIdsFromTableExpr_fn = function(node, schemableIds) {
      const table = TableNode.is(node) ? node : AliasNode.is(node) && TableNode.is(node.node) ? node.node : null;
      if (table) {
        __privateMethod(this, _collectSchemableId, collectSchemableId_fn).call(this, table.table, schemableIds);
      }
    };
    _collectSchemableId = new WeakSet();
    collectSchemableId_fn = function(node, schemableIds) {
      if (!__privateGet(this, _schemableIds).has(node.identifier.name)) {
        schemableIds.add(node.identifier.name);
      }
    };
    _removeCommonTableExpressionTables = new WeakSet();
    removeCommonTableExpressionTables_fn = function(node, schemableIds) {
      for (const expr of node.expressions) {
        schemableIds.delete(expr.name.table.table.identifier.name);
      }
    };
  }
});

// node_modules/kysely/dist/esm/plugin/with-schema/with-schema-plugin.js
var _transformer, WithSchemaPlugin;
var init_with_schema_plugin = __esm({
  "node_modules/kysely/dist/esm/plugin/with-schema/with-schema-plugin.js"() {
    init_with_schema_transformer();
    WithSchemaPlugin = class {
      constructor(schema) {
        __privateAdd(this, _transformer, void 0);
        __privateSet(this, _transformer, new WithSchemaTransformer(schema));
      }
      transformQuery(args) {
        return __privateGet(this, _transformer).transformNode(args.node);
      }
      async transformResult(args) {
        return args.result;
      }
    };
    _transformer = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/util/random-string.js
function randomString(length) {
  let chars3 = "";
  for (let i = 0; i < length; ++i) {
    chars3 += randomChar();
  }
  return chars3;
}
function randomChar() {
  return CHARS[~~(Math.random() * CHARS.length)];
}
var CHARS;
var init_random_string = __esm({
  "node_modules/kysely/dist/esm/util/random-string.js"() {
    CHARS = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ];
  }
});

// node_modules/kysely/dist/esm/util/query-id.js
function createQueryId() {
  return new LazyQueryId();
}
var _queryId, LazyQueryId;
var init_query_id = __esm({
  "node_modules/kysely/dist/esm/util/query-id.js"() {
    init_random_string();
    LazyQueryId = class {
      constructor() {
        __privateAdd(this, _queryId, void 0);
      }
      get queryId() {
        if (__privateGet(this, _queryId) === void 0) {
          __privateSet(this, _queryId, randomString(8));
        }
        return __privateGet(this, _queryId);
      }
    };
    _queryId = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/operation-node/aggregate-function-node.js
var AggregateFunctionNode;
var init_aggregate_function_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/aggregate-function-node.js"() {
    init_object_utils();
    init_where_node();
    AggregateFunctionNode = freeze({
      is(node) {
        return node.kind === "AggregateFunctionNode";
      },
      create(aggregateFunction, aggregated) {
        return freeze({
          kind: "AggregateFunctionNode",
          func: aggregateFunction,
          aggregated
        });
      },
      cloneWithDistinct(aggregateFunctionNode) {
        return freeze({
          ...aggregateFunctionNode,
          distinct: true
        });
      },
      cloneWithFilter(aggregateFunctionNode, filter) {
        return freeze({
          ...aggregateFunctionNode,
          filter: aggregateFunctionNode.filter ? WhereNode.cloneWithOperation(aggregateFunctionNode.filter, "And", filter) : WhereNode.create(filter)
        });
      },
      cloneWithOrFilter(aggregateFunctionNode, filter) {
        return freeze({
          ...aggregateFunctionNode,
          filter: aggregateFunctionNode.filter ? WhereNode.cloneWithOperation(aggregateFunctionNode.filter, "Or", filter) : WhereNode.create(filter)
        });
      },
      cloneWithOver(aggregateFunctionNode, over) {
        return freeze({
          ...aggregateFunctionNode,
          over
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/parser/coalesce-parser.js
function parseCoalesce(values) {
  return RawNode.create(values.length > 1 ? ["coalesce(", ...new Array(values.length - 1).fill(", "), ")"] : ["coalesce(", ")"], parseReferenceExpressionOrList(values));
}
var init_coalesce_parser = __esm({
  "node_modules/kysely/dist/esm/parser/coalesce-parser.js"() {
    init_raw_node();
    init_reference_parser();
  }
});

// node_modules/kysely/dist/esm/util/deferred.js
var _promise, _resolve, _reject, Deferred;
var init_deferred = __esm({
  "node_modules/kysely/dist/esm/util/deferred.js"() {
    Deferred = class {
      constructor() {
        __privateAdd(this, _promise, void 0);
        __privateAdd(this, _resolve, void 0);
        __privateAdd(this, _reject, void 0);
        __publicField(this, "resolve", (value) => {
          if (__privateGet(this, _resolve)) {
            __privateGet(this, _resolve).call(this, value);
          }
        });
        __publicField(this, "reject", (reason) => {
          if (__privateGet(this, _reject)) {
            __privateGet(this, _reject).call(this, reason);
          }
        });
        __privateSet(this, _promise, new Promise((resolve, reject) => {
          __privateSet(this, _reject, reject);
          __privateSet(this, _resolve, resolve);
        }));
      }
      get promise() {
        return __privateGet(this, _promise);
      }
    };
    _promise = new WeakMap();
    _resolve = new WeakMap();
    _reject = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/util/log-once.js
function logOnce(message) {
  if (LOGGED_MESSAGES.has(message)) {
    return;
  }
  LOGGED_MESSAGES.add(message);
  console.log(message);
}
var LOGGED_MESSAGES;
var init_log_once = __esm({
  "node_modules/kysely/dist/esm/util/log-once.js"() {
    LOGGED_MESSAGES = /* @__PURE__ */ new Set();
  }
});

// node_modules/kysely/dist/esm/query-executor/query-executor-base.js
function warnOfOutdatedDriverOrPlugins(result, transformedResult) {
  const { numAffectedRows } = result;
  if (numAffectedRows === void 0 && result.numUpdatedOrDeletedRows === void 0 || numAffectedRows !== void 0 && transformedResult.numAffectedRows !== void 0) {
    return;
  }
  logOnce("kysely:warning: outdated driver/plugin detected! QueryResult.numUpdatedOrDeletedRows is deprecated and will be removed in a future release.");
}
var NO_PLUGINS, _plugins, _transformResult, transformResult_fn, QueryExecutorBase;
var init_query_executor_base = __esm({
  "node_modules/kysely/dist/esm/query-executor/query-executor-base.js"() {
    init_object_utils();
    init_deferred();
    init_log_once();
    NO_PLUGINS = freeze([]);
    QueryExecutorBase = class {
      constructor(plugins = NO_PLUGINS) {
        __privateAdd(this, _transformResult);
        __privateAdd(this, _plugins, void 0);
        __privateSet(this, _plugins, plugins);
      }
      get plugins() {
        return __privateGet(this, _plugins);
      }
      transformQuery(node, queryId) {
        for (const plugin of __privateGet(this, _plugins)) {
          const transformedNode = plugin.transformQuery({ node, queryId });
          if (transformedNode.kind === node.kind) {
            node = transformedNode;
          } else {
            throw new Error([
              `KyselyPlugin.transformQuery must return a node`,
              `of the same kind that was given to it.`,
              `The plugin was given a ${node.kind}`,
              `but it returned a ${transformedNode.kind}`
            ].join(" "));
          }
        }
        return node;
      }
      async executeQuery(compiledQuery, queryId) {
        return await this.provideConnection(async (connection) => {
          const result = await connection.executeQuery(compiledQuery);
          const transformedResult = await __privateMethod(this, _transformResult, transformResult_fn).call(this, result, queryId);
          warnOfOutdatedDriverOrPlugins(result, transformedResult);
          return transformedResult;
        });
      }
      async *stream(compiledQuery, chunkSize, queryId) {
        const connectionDefer = new Deferred();
        const connectionReleaseDefer = new Deferred();
        this.provideConnection(async (connection2) => {
          connectionDefer.resolve(connection2);
          return await connectionReleaseDefer.promise;
        }).catch((ex) => connectionDefer.reject(ex));
        const connection = await connectionDefer.promise;
        try {
          for await (const result of connection.streamQuery(compiledQuery, chunkSize)) {
            yield await __privateMethod(this, _transformResult, transformResult_fn).call(this, result, queryId);
          }
        } finally {
          connectionReleaseDefer.resolve();
        }
      }
    };
    _plugins = new WeakMap();
    _transformResult = new WeakSet();
    transformResult_fn = async function(result, queryId) {
      for (const plugin of __privateGet(this, _plugins)) {
        result = await plugin.transformResult({ result, queryId });
      }
      return result;
    };
  }
});

// node_modules/kysely/dist/esm/query-executor/noop-query-executor.js
var NoopQueryExecutor, NOOP_QUERY_EXECUTOR;
var init_noop_query_executor = __esm({
  "node_modules/kysely/dist/esm/query-executor/noop-query-executor.js"() {
    init_query_executor_base();
    NoopQueryExecutor = class extends QueryExecutorBase {
      get adapter() {
        throw new Error("this query cannot be compiled to SQL");
      }
      compileQuery() {
        throw new Error("this query cannot be compiled to SQL");
      }
      provideConnection() {
        throw new Error("this query cannot be executed");
      }
      withConnectionProvider() {
        throw new Error("this query cannot have a connection provider");
      }
      withPlugin(plugin) {
        return new NoopQueryExecutor([...this.plugins, plugin]);
      }
      withPlugins(plugins) {
        return new NoopQueryExecutor([...this.plugins, ...plugins]);
      }
      withPluginAtFront(plugin) {
        return new NoopQueryExecutor([plugin, ...this.plugins]);
      }
      withoutPlugins() {
        return new NoopQueryExecutor([]);
      }
    };
    NOOP_QUERY_EXECUTOR = new NoopQueryExecutor();
  }
});

// node_modules/kysely/dist/esm/raw-builder/raw-builder.js
var _props2, _toOperationNode, toOperationNode_fn, _compile, compile_fn, _RawBuilder, RawBuilder, _rawBuilder, _alias2, AliasedRawBuilder;
var init_raw_builder = __esm({
  "node_modules/kysely/dist/esm/raw-builder/raw-builder.js"() {
    init_alias_node();
    init_prevent_await();
    init_object_utils();
    init_noop_query_executor();
    init_identifier_node();
    init_operation_node_source();
    _RawBuilder = class {
      constructor(props) {
        __privateAdd(this, _toOperationNode);
        __privateAdd(this, _compile);
        __privateAdd(this, _props2, void 0);
        __privateSet(this, _props2, freeze(props));
      }
      /** @private */
      get expressionType() {
        return void 0;
      }
      as(alias) {
        return new AliasedRawBuilder(this, alias);
      }
      /**
       * Change the output type of the raw expression.
       *
       * This method call doesn't change the SQL in any way. This methods simply
       * returns a copy of this `RawBuilder` with a new output type.
       */
      $castTo() {
        return new _RawBuilder({ ...__privateGet(this, _props2) });
      }
      /**
       * @deprecated Use `$castTo` instead.
       */
      castTo() {
        return this.$castTo();
      }
      /**
       * Adds a plugin for this SQL snippet.
       */
      withPlugin(plugin) {
        return new _RawBuilder({
          ...__privateGet(this, _props2),
          plugins: __privateGet(this, _props2).plugins !== void 0 ? freeze([...__privateGet(this, _props2).plugins, plugin]) : freeze([plugin])
        });
      }
      toOperationNode() {
        const executor = __privateGet(this, _props2).plugins !== void 0 ? NOOP_QUERY_EXECUTOR.withPlugins(__privateGet(this, _props2).plugins) : NOOP_QUERY_EXECUTOR;
        return __privateMethod(this, _toOperationNode, toOperationNode_fn).call(this, executor);
      }
      async execute(executorProvider) {
        const executor = __privateGet(this, _props2).plugins !== void 0 ? executorProvider.getExecutor().withPlugins(__privateGet(this, _props2).plugins) : executorProvider.getExecutor();
        return executor.executeQuery(__privateMethod(this, _compile, compile_fn).call(this, executor), __privateGet(this, _props2).queryId);
      }
    };
    RawBuilder = _RawBuilder;
    _props2 = new WeakMap();
    _toOperationNode = new WeakSet();
    toOperationNode_fn = function(executor) {
      return executor.transformQuery(__privateGet(this, _props2).rawNode, __privateGet(this, _props2).queryId);
    };
    _compile = new WeakSet();
    compile_fn = function(executor) {
      return executor.compileQuery(__privateMethod(this, _toOperationNode, toOperationNode_fn).call(this, executor), __privateGet(this, _props2).queryId);
    };
    preventAwait(RawBuilder, "don't await RawBuilder instances directly. To execute the query you need to call `execute`");
    AliasedRawBuilder = class {
      constructor(rawBuilder, alias) {
        __privateAdd(this, _rawBuilder, void 0);
        __privateAdd(this, _alias2, void 0);
        __privateSet(this, _rawBuilder, rawBuilder);
        __privateSet(this, _alias2, alias);
      }
      /** @private */
      get expression() {
        return __privateGet(this, _rawBuilder);
      }
      /** @private */
      get alias() {
        return __privateGet(this, _alias2);
      }
      toOperationNode() {
        return AliasNode.create(__privateGet(this, _rawBuilder).toOperationNode(), isOperationNodeSource(__privateGet(this, _alias2)) ? __privateGet(this, _alias2).toOperationNode() : IdentifierNode.create(__privateGet(this, _alias2)));
      }
    };
    _rawBuilder = new WeakMap();
    _alias2 = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/query-builder/aggregate-function-builder.js
var _props3, _AggregateFunctionBuilder, AggregateFunctionBuilder, _aggregateFunctionBuilder, _alias3, AliasedAggregateFunctionBuilder;
var init_aggregate_function_builder = __esm({
  "node_modules/kysely/dist/esm/query-builder/aggregate-function-builder.js"() {
    init_object_utils();
    init_aggregate_function_node();
    init_alias_node();
    init_identifier_node();
    init_prevent_await();
    init_parse_utils();
    init_binary_operation_parser();
    init_unary_operation_parser();
    _AggregateFunctionBuilder = class {
      constructor(props) {
        __privateAdd(this, _props3, void 0);
        __privateSet(this, _props3, freeze(props));
      }
      /** @private */
      get expressionType() {
        return void 0;
      }
      /**
       * Returns an aliased version of the function.
       *
       * In addition to slapping `as "the_alias"` to the end of the SQL,
       * this method also provides strict typing:
       *
       * ```ts
       * const result = await db
       *   .selectFrom('person')
       *   .select(
       *     eb => eb.fn.count<number>('id').as('person_count')
       *   )
       *   .executeTakeFirstOrThrow()
       *
       * // `person_count: number` field exists in the result type.
       * console.log(result.person_count)
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select count("id") as "person_count"
       * from "person"
       * ```
       */
      as(alias) {
        return new AliasedAggregateFunctionBuilder(this, alias);
      }
      /**
       * Adds a `distinct` clause inside the function.
       *
       * ### Examples
       *
       * ```ts
       * const result = await db
       *   .selectFrom('person')
       *   .select((eb) =>
       *     eb.fn.count<number>('first_name').distinct().as('first_name_count')
       *   )
       *   .executeTakeFirstOrThrow()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select count(distinct "first_name") as "first_name_count"
       * from "person"
       * ```
       */
      distinct() {
        return new _AggregateFunctionBuilder({
          ...__privateGet(this, _props3),
          aggregateFunctionNode: AggregateFunctionNode.cloneWithDistinct(__privateGet(this, _props3).aggregateFunctionNode)
        });
      }
      filterWhere(...args) {
        return new _AggregateFunctionBuilder({
          ...__privateGet(this, _props3),
          aggregateFunctionNode: AggregateFunctionNode.cloneWithFilter(__privateGet(this, _props3).aggregateFunctionNode, parseWhere(args))
        });
      }
      /**
       * Adds a `filter` clause with a nested `where exists` clause after the function.
       *
       * Similar to {@link WhereInterface}'s `whereExists` method.
       *
       * ### Examples
       *
       * Count pet owners versus general public:
       *
       * ```ts
       * const result = await db
       *   .selectFrom('person')
       *   .select([
       *     (eb) =>
       *       eb.fn
       *         .count<number>('person.id')
       *         .filterWhereExists((qb) =>
       *           qb
       *             .selectFrom('pet')
       *             .select('pet.id')
       *             .whereRef('pet.owner_id', '=', 'person.id')
       *         )
       *         .as('pet_owner_count'),
       *     (eb) => eb.fn.count<number>('person.id').as('total_count'),
       *   ])
       *   .executeTakeFirstOrThrow()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select count("person"."id") filter(where exists (
       *   select "pet"."id"
       *   from "pet"
       *   where "pet"."owner_id" = "person"."id"
       * )) as "pet_ower_count",
       *   count("person"."id") as "total_count"
       * from "person"
       * ```
       */
      filterWhereExists(arg) {
        return new _AggregateFunctionBuilder({
          ...__privateGet(this, _props3),
          aggregateFunctionNode: AggregateFunctionNode.cloneWithFilter(__privateGet(this, _props3).aggregateFunctionNode, parseExists(arg))
        });
      }
      /**
       * Just like {@link filterWhereExists} but creates a `not exists` clause inside
       * the `filter` clause.
       */
      filterWhereNotExists(arg) {
        return new _AggregateFunctionBuilder({
          ...__privateGet(this, _props3),
          aggregateFunctionNode: AggregateFunctionNode.cloneWithFilter(__privateGet(this, _props3).aggregateFunctionNode, parseNotExists(arg))
        });
      }
      /**
       * Adds a `filter` clause with a nested `where` clause after the function, where
       * both sides of the operator are references to columns.
       *
       * Similar to {@link WhereInterface}'s `whereRef` method.
       *
       * ### Examples
       *
       * Count people with same first and last names versus general public:
       *
       * ```ts
       * const result = await db
       *   .selectFrom('person')
       *   .select([
       *     (eb) =>
       *       eb.fn
       *         .count<number>('id')
       *         .filterWhereRef('first_name', '=', 'last_name')
       *         .as('repeat_name_count'),
       *     (eb) => eb.fn.count<number>('id').as('total_count'),
       *   ])
       *   .executeTakeFirstOrThrow()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select
       *   count("id") filter(where "first_name" = "last_name") as "repeat_name_count",
       *   count("id") as "total_count"
       * from "person"
       * ```
       */
      filterWhereRef(lhs, op, rhs) {
        return new _AggregateFunctionBuilder({
          ...__privateGet(this, _props3),
          aggregateFunctionNode: AggregateFunctionNode.cloneWithFilter(__privateGet(this, _props3).aggregateFunctionNode, parseReferentialFilter(lhs, op, rhs))
        });
      }
      orFilterWhere(...args) {
        return new _AggregateFunctionBuilder({
          ...__privateGet(this, _props3),
          aggregateFunctionNode: AggregateFunctionNode.cloneWithOrFilter(__privateGet(this, _props3).aggregateFunctionNode, parseWhere(args))
        });
      }
      /**
       * Just like {@link filterWhereExists} but creates an `or exists` clause inside
       * the `filter` clause.
       *
       * Similar to {@link WhereInterface}'s `orWhereExists` method.
       */
      orFilterWhereExists(arg) {
        return new _AggregateFunctionBuilder({
          ...__privateGet(this, _props3),
          aggregateFunctionNode: AggregateFunctionNode.cloneWithOrFilter(__privateGet(this, _props3).aggregateFunctionNode, parseExists(arg))
        });
      }
      /**
       * Just like {@link filterWhereExists} but creates an `or not exists` clause inside
       * the `filter` clause.
       *
       * Similar to {@link WhereInterface}'s `orWhereNotExists` method.
       */
      orFilterWhereNotExists(arg) {
        return new _AggregateFunctionBuilder({
          ...__privateGet(this, _props3),
          aggregateFunctionNode: AggregateFunctionNode.cloneWithOrFilter(__privateGet(this, _props3).aggregateFunctionNode, parseNotExists(arg))
        });
      }
      /**
       * Adds an `or where` clause inside the `filter` clause. Otherwise works just
       * like {@link filterWhereRef}.
       *
       * Also see {@link orFilterWhere} and {@link filterWhere}.
       *
       * Similar to {@link WhereInterface}'s `orWhereRef` method.
       */
      orFilterWhereRef(lhs, op, rhs) {
        return new _AggregateFunctionBuilder({
          ...__privateGet(this, _props3),
          aggregateFunctionNode: AggregateFunctionNode.cloneWithOrFilter(__privateGet(this, _props3).aggregateFunctionNode, parseReferentialFilter(lhs, op, rhs))
        });
      }
      /**
       * Adds an `over` clause (window functions) after the function.
       *
       * ### Examples
       *
       * ```ts
       * const result = await db
       *   .selectFrom('person')
       *   .select(
       *     eb => eb.fn.avg<number>('age').over().as('average_age')
       *   )
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select avg("age") over() as "average_age"
       * from "person"
       * ```
       *
       * Also supports passing a callback that returns an over builder,
       * allowing to add partition by and sort by clauses inside over.
       *
       * ```ts
       * const result = await db
       *   .selectFrom('person')
       *   .select(
       *     eb => eb.fn.avg<number>('age').over(
       *       ob => ob.partitionBy('last_name').orderBy('first_name', 'asc')
       *     ).as('average_age')
       *   )
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select avg("age") over(partition by "last_name" order by "first_name" asc) as "average_age"
       * from "person"
       * ```
       */
      over(over) {
        const builder = createOverBuilder();
        return new _AggregateFunctionBuilder({
          ...__privateGet(this, _props3),
          aggregateFunctionNode: AggregateFunctionNode.cloneWithOver(__privateGet(this, _props3).aggregateFunctionNode, (over ? over(builder) : builder).toOperationNode())
        });
      }
      toOperationNode() {
        return __privateGet(this, _props3).aggregateFunctionNode;
      }
    };
    AggregateFunctionBuilder = _AggregateFunctionBuilder;
    _props3 = new WeakMap();
    preventAwait(AggregateFunctionBuilder, "don't await AggregateFunctionBuilder instances. They are never executed directly and are always just a part of a query.");
    AliasedAggregateFunctionBuilder = class {
      constructor(aggregateFunctionBuilder, alias) {
        __privateAdd(this, _aggregateFunctionBuilder, void 0);
        __privateAdd(this, _alias3, void 0);
        __privateSet(this, _aggregateFunctionBuilder, aggregateFunctionBuilder);
        __privateSet(this, _alias3, alias);
      }
      /** @private */
      get expression() {
        return __privateGet(this, _aggregateFunctionBuilder);
      }
      /** @private */
      get alias() {
        return __privateGet(this, _alias3);
      }
      toOperationNode() {
        return AliasNode.create(__privateGet(this, _aggregateFunctionBuilder).toOperationNode(), IdentifierNode.create(__privateGet(this, _alias3)));
      }
    };
    _aggregateFunctionBuilder = new WeakMap();
    _alias3 = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/query-builder/function-module.js
var FunctionModule;
var init_function_module = __esm({
  "node_modules/kysely/dist/esm/query-builder/function-module.js"() {
    init_aggregate_function_node();
    init_coalesce_parser();
    init_reference_parser();
    init_select_parser();
    init_raw_builder();
    init_query_id();
    init_aggregate_function_builder();
    FunctionModule = class {
      constructor() {
        this.avg = this.avg.bind(this);
        this.coalesce = this.coalesce.bind(this);
        this.count = this.count.bind(this);
        this.countAll = this.countAll.bind(this);
        this.max = this.max.bind(this);
        this.min = this.min.bind(this);
        this.sum = this.sum.bind(this);
      }
      /**
       * Calls the `avg` function for the column given as the argument.
       *
       * This sql function calculates the average value for a given column.
       *
       * For additional functionality such as distinct, filtering and window functions,
       * refer to {@link AggregateFunctionBuilder}. An instance of this builder is
       * returned when calling this function.
       *
       * ### Examples
       *
       * ```ts
       * const { avg } = db.fn
       *
       * db.selectFrom('toy')
       *   .select(avg('price').as('avg_price'))
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select avg("price") as "avg_price" from "toy"
       * ```
       *
       * You can limit column range to only columns participating in current query:
       *
       * ```ts
       * db.selectFrom('toy')
       *   .select(qb => qb.fn.avg('price').as('avg_price'))
       *   .execute()
       * ```
       *
       * If this function is used in a `select` statement, the type of the selected
       * expression will be `number | string` by default. This is because Kysely can't know the
       * type the db driver outputs. Sometimes the output can be larger than the largest
       * javascript number and a string is returned instead. Most drivers allow you
       * to configure the output type of large numbers and Kysely can't know if you've
       * done so.
       *
       * You can specify the output type of the expression by providing the type as
       * the first type argument:
       *
       * ```ts
       * const { avg } = db.fn
       *
       * db.selectFrom('toy')
       *   .select(avg<number>('price').as('avg_price'))
       *   .execute()
       * ```
       *
       * Sometimes a null is returned, e.g. when row count is 0, and no `group by`
       * was used. It is highly recommended to include null in the output type union
       * and handle null values in post-execute code, or wrap the function with a {@link coalesce}
       * function.
       *
       * ```ts
       * const { avg } = db.fn
       *
       * db.selectFrom('toy')
       *   .select(avg<number | null>('price').as('avg_price'))
       *   .execute()
       * ```
       */
      avg(column) {
        return new AggregateFunctionBuilder({
          aggregateFunctionNode: AggregateFunctionNode.create("avg", parseSimpleReferenceExpression(column))
        });
      }
      /**
       * Calls the `coalesce` function for given arguments.
       *
       * This sql function returns the first non-null value from left to right, commonly
       * used to provide a default scalar for nullable columns or functions.
       *
       * If this function is used in a `select` statement, the type of the selected
       * expression is inferred in the same manner that the sql function computes.
       * A union of arguments' types - if a non-nullable argument exists, it stops
       * there (ignoring any further arguments' types) and exludes null from the final
       * union type.
       *
       * `(string | null, number | null)` is inferred as `string | number | null`.
       *
       * `(string | null, number, Date | null)` is inferred as `string | number`.
       *
       * `(number, string | null)` is inferred as `number`.
       *
       * ### Examples
       *
       * ```ts
       * const { coalesce } = db.fn
       *
       * db.selectFrom('participant')
       *   .select(coalesce('nickname', sql<string>`'<anonymous>'`).as('nickname'))
       *   .where('room_id', '=', roomId)
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select coalesce("nickname", '<anonymous>') as "nickname"
       * from "participant" where "room_id" = $1
       * ```
       *
       * You can limit column range to only columns participating in current query:
       *
       * ```ts
       * db.selectFrom('participant')
       *   .select(qb =>
       *     qb.fn.coalesce('nickname', sql<string>`'<anonymous>'`).as('nickname')
       *   )
       *   .where('room_id', '=', roomId)
       *   .execute()
       * ```
       *
       * You can combine this function with other helpers in this module:
       *
       * ```ts
       * const { avg, coalesce } = db.fn
       *
       * db.selectFrom('person')
       *   .select(coalesce(avg<number | null>('age'), sql<number>`0`).as('avg_age'))
       *   .where('first_name', '=', 'Jennifer')
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select coalesce(avg("age"), 0) as "avg_age" from "person" where "first_name" = $1
       * ```
       */
      coalesce(value, ...otherValues) {
        return new RawBuilder({
          queryId: createQueryId(),
          rawNode: parseCoalesce([value, ...otherValues])
        });
      }
      /**
       * Calls the `count` function for the column given as the argument.
       *
       * When called with a column as argument, this sql function counts the number of rows where there
       * is a non-null value in that column.
       *
       * For counting all rows nulls included (`count(*)`), see {@link countAll}.
       *
       * For additional functionality such as distinct, filtering and window functions,
       * refer to {@link AggregateFunctionBuilder}. An instance of this builder is
       * returned when calling this function.
       *
       * ### Examples
       *
       * ```ts
       * const { count } = db.fn
       *
       * db.selectFrom('toy')
       *   .select(count('id').as('num_toys'))
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select count("id") as "num_toys" from "toy"
       * ```
       *
       * If this function is used in a `select` statement, the type of the selected
       * expression will be `number | string | bigint` by default. This is because
       * Kysely can't know the type the db driver outputs. Sometimes the output can
       * be larger than the largest javascript number and a string is returned instead.
       * Most drivers allow you to configure the output type of large numbers and Kysely
       * can't know if you've done so.
       *
       * You can specify the output type of the expression by providing
       * the type as the first type argument:
       *
       * ```ts
       * const { count } = db.fn
       *
       * db.selectFrom('toy')
       *   .select(count<number>('id').as('num_toys'))
       *   .execute()
       * ```
       *
       * You can limit column range to only columns participating in current query:
       *
       * ```ts
       * db.selectFrom('toy')
       *   .select(qb => qb.fn.count('id').as('num_toys'))
       *   .execute()
       * ```
       */
      count(column) {
        return new AggregateFunctionBuilder({
          aggregateFunctionNode: AggregateFunctionNode.create("count", parseSimpleReferenceExpression(column))
        });
      }
      countAll(table) {
        return new AggregateFunctionBuilder({
          aggregateFunctionNode: AggregateFunctionNode.create("count", parseSelectAll(table)[0].selection)
        });
      }
      max(column) {
        return new AggregateFunctionBuilder({
          aggregateFunctionNode: AggregateFunctionNode.create("max", parseSimpleReferenceExpression(column))
        });
      }
      min(column) {
        return new AggregateFunctionBuilder({
          aggregateFunctionNode: AggregateFunctionNode.create("min", parseSimpleReferenceExpression(column))
        });
      }
      /**
       * Calls the `sum` function for the column given as the argument.
       *
       * This sql function sums the values of a given column.
       *
       * For additional functionality such as distinct, filtering and window functions,
       * refer to {@link AggregateFunctionBuilder}. An instance of this builder is
       * returned when calling this function.
       *
       * ### Examples
       *
       * ```ts
       * const { sum } = db.fn
       *
       * db.selectFrom('toy')
       *   .select(sum('price').as('total_price'))
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select sum("price") as "total_price" from "toy"
       * ```
       *
       * You can limit column range to only columns participating in current query:
       *
       * ```ts
       * db.selectFrom('toy')
       *   .select(qb => qb.fn.sum('price').as('total_price'))
       *   .execute()
       * ```
       *
       * If this function is used in a `select` statement, the type of the selected
       * expression will be `number | string` by default. This is because Kysely can't know the
       * type the db driver outputs. Sometimes the output can be larger than the largest
       * javascript number and a string is returned instead. Most drivers allow you
       * to configure the output type of large numbers and Kysely can't know if you've
       * done so.
       *
       * You can specify the output type of the expression by providing the type as
       * the first type argument:
       *
       * ```ts
       * const { sum } = db.fn
       *
       * db.selectFrom('toy')
       *   .select(sum<number>('price').as('total_price'))
       *   .execute()
       * ```
       *
       * Sometimes a null is returned, e.g. when row count is 0, and no `group by`
       * was used. It is highly recommended to include null in the output type union
       * and handle null values in post-execute code, or wrap the function with a {@link coalesce}
       * function.
       *
       * ```ts
       * const { sum } = db.fn
       *
       * db.selectFrom('toy')
       *   .select(sum<number | null>('price').as('total_price'))
       *   .execute()
       * ```
       */
      sum(column) {
        return new AggregateFunctionBuilder({
          aggregateFunctionNode: AggregateFunctionNode.create("sum", parseSimpleReferenceExpression(column))
        });
      }
    };
  }
});

// node_modules/kysely/dist/esm/query-builder/expression-builder.js
var _props4, _ExpressionBuilder, ExpressionBuilder;
var init_expression_builder = __esm({
  "node_modules/kysely/dist/esm/query-builder/expression-builder.js"() {
    init_select_query_builder();
    init_select_query_node();
    init_table_parser();
    init_with_schema_plugin();
    init_query_id();
    init_function_module();
    init_reference_parser();
    init_raw_builder();
    init_object_utils();
    init_raw_node();
    _ExpressionBuilder = class {
      constructor(props) {
        __privateAdd(this, _props4, void 0);
        __privateSet(this, _props4, freeze(props));
      }
      /**
       * Returns a {@link FunctionModule} that can be used to write type safe function
       * calls.
       *
       * The difference between this and {@link Kysely.fn} is that this one is more
       * type safe. You can only refer to columns visible to the part of the query
       * you are building. {@link Kysely.fn} allows you to refer to columns in any
       * table of the database even if it doesn't produce valid SQL.
       *
       * ```ts
       * await db.selectFrom('person')
       *   .innerJoin('pet', 'pet.owner_id', 'person.id')
       *   .select([
       *     'person.id',
       *     (qb) => qb.fn.count('pet.id').as('pet_count')
       *   ])
       *   .groupBy('person.id')
       *   .having(count('pet.id'), '>', 10)
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select "person"."id", count("pet"."id") as "pet_count"
       * from "person"
       * inner join "pet" on "pet"."owner_id" = "person"."id"
       * group by "person"."id"
       * having count("pet"."id") > $1
       * ```
       */
      get fn() {
        return new FunctionModule();
      }
      selectFrom(table) {
        return new SelectQueryBuilder({
          queryId: createQueryId(),
          executor: __privateGet(this, _props4).executor,
          queryNode: SelectQueryNode.create(parseTableExpressionOrList(table))
        });
      }
      /**
       * See {@link QueryCreator.withSchema}
       */
      withSchema(schema) {
        return new _ExpressionBuilder({
          ...__privateGet(this, _props4),
          executor: __privateGet(this, _props4).executor.withPluginAtFront(new WithSchemaPlugin(schema))
        });
      }
      /**
       * This can be used to reference columns.
       *
       * ### Examples
       *
       * In the next example we use the `ref` method to reference
       * columns of the virtual table `excluded` in a type-safe way
       * to create an upsert operation:
       *
       * ```ts
       * db.insertInto('person')
       *   .values(person)
       *   .onConflict(oc => oc
       *     .column('id')
       *     .doUpdateSet({
       *       first_name: (eb) => eb.ref('excluded.first_name'),
       *       last_name: (eb) => eb.ref('excluded.last_name')
       *     })
       *   )
       * ```
       *
       * In the next example we use `ref` in a raw sql expression. Unless you
       * want to be as type-safe as possible, this is probably overkill:
       *
       * ```ts
       * db.update('pet').set({
       *   name: (eb) => sql`concat(${eb.ref('pet.name')}, ${suffix})`
       * })
       * ```
       */
      ref(reference) {
        return new RawBuilder({
          queryId: createQueryId(),
          plugins: __privateGet(this, _props4).executor.plugins,
          rawNode: RawNode.createWithChild(parseStringReference(reference))
        });
      }
    };
    ExpressionBuilder = _ExpressionBuilder;
    _props4 = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/query-builder/join-builder.js
var _props5, _JoinBuilder, JoinBuilder;
var init_join_builder = __esm({
  "node_modules/kysely/dist/esm/query-builder/join-builder.js"() {
    init_join_node();
    init_raw_node();
    init_binary_operation_parser();
    init_unary_operation_parser();
    init_object_utils();
    init_prevent_await();
    _JoinBuilder = class {
      constructor(props) {
        __privateAdd(this, _props5, void 0);
        __privateSet(this, _props5, freeze(props));
      }
      on(...args) {
        return new _JoinBuilder({
          ...__privateGet(this, _props5),
          joinNode: JoinNode.cloneWithOn(__privateGet(this, _props5).joinNode, parseOn(args))
        });
      }
      orOn(...args) {
        return new _JoinBuilder({
          ...__privateGet(this, _props5),
          joinNode: JoinNode.cloneWithOrOn(__privateGet(this, _props5).joinNode, parseOn(args))
        });
      }
      /**
       * Just like {@link WhereInterface.whereRef} but adds an item to the join's
       * `on` clause instead.
       *
       * See {@link WhereInterface.whereRef} for documentation and examples.
       */
      onRef(lhs, op, rhs) {
        return new _JoinBuilder({
          ...__privateGet(this, _props5),
          joinNode: JoinNode.cloneWithOn(__privateGet(this, _props5).joinNode, parseReferentialFilter(lhs, op, rhs))
        });
      }
      /**
       * Just like {@link WhereInterface.orWhereRef} but adds an item to the join's
       * `on` clause instead.
       *
       * See {@link WhereInterface.orWhereRef} for documentation and examples.
       */
      orOnRef(lhs, op, rhs) {
        return new _JoinBuilder({
          ...__privateGet(this, _props5),
          joinNode: JoinNode.cloneWithOrOn(__privateGet(this, _props5).joinNode, parseReferentialFilter(lhs, op, rhs))
        });
      }
      /**
       * Just like {@link WhereInterface.whereExists} but adds an item to the join's
       * `on` clause instead.
       *
       * See {@link WhereInterface.whereExists} for documentation and examples.
       */
      onExists(arg) {
        return new _JoinBuilder({
          ...__privateGet(this, _props5),
          joinNode: JoinNode.cloneWithOn(__privateGet(this, _props5).joinNode, parseExists(arg))
        });
      }
      /**
       * Just like {@link WhereInterface.whereNotExists} but adds an item to the join's
       * `on` clause instead.
       *
       * See {@link WhereInterface.whereNotExists} for documentation and examples.
       */
      onNotExists(arg) {
        return new _JoinBuilder({
          ...__privateGet(this, _props5),
          joinNode: JoinNode.cloneWithOn(__privateGet(this, _props5).joinNode, parseNotExists(arg))
        });
      }
      /**
       * Just like {@link WhereInterface.orWhereExists} but adds an item to the join's
       * `on` clause instead.
       *
       * See {@link WhereInterface.orWhereExists} for documentation and examples.
       */
      orOnExists(arg) {
        return new _JoinBuilder({
          ...__privateGet(this, _props5),
          joinNode: JoinNode.cloneWithOrOn(__privateGet(this, _props5).joinNode, parseExists(arg))
        });
      }
      /**
       * Just like {@link WhereInterface.orWhereNotExists} but adds an item to the join's
       * `on` clause instead.
       *
       * See {@link WhereInterface.orWhereNotExists} for documentation and examples.
       */
      orOnNotExists(arg) {
        return new _JoinBuilder({
          ...__privateGet(this, _props5),
          joinNode: JoinNode.cloneWithOrOn(__privateGet(this, _props5).joinNode, parseNotExists(arg))
        });
      }
      /**
       * Adds `on true`.
       */
      onTrue() {
        return new _JoinBuilder({
          ...__privateGet(this, _props5),
          joinNode: JoinNode.cloneWithOn(__privateGet(this, _props5).joinNode, RawNode.createWithSql("true"))
        });
      }
      toOperationNode() {
        return __privateGet(this, _props5).joinNode;
      }
    };
    JoinBuilder = _JoinBuilder;
    _props5 = new WeakMap();
    preventAwait(JoinBuilder, "don't await JoinBuilder instances. They are never executed directly and are always just a part of a query.");
  }
});

// node_modules/kysely/dist/esm/operation-node/partition-by-item-node.js
var PartitionByItemNode;
var init_partition_by_item_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/partition-by-item-node.js"() {
    init_object_utils();
    PartitionByItemNode = freeze({
      is(node) {
        return node.kind === "PartitionByItemNode";
      },
      create(partitionBy) {
        return freeze({
          kind: "PartitionByItemNode",
          partitionBy
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/parser/partition-by-parser.js
function parsePartitionBy(partitionBy) {
  return parseReferenceExpressionOrList(partitionBy).map(PartitionByItemNode.create);
}
var init_partition_by_parser = __esm({
  "node_modules/kysely/dist/esm/parser/partition-by-parser.js"() {
    init_partition_by_item_node();
    init_reference_parser();
  }
});

// node_modules/kysely/dist/esm/query-builder/over-builder.js
var _props6, _OverBuilder, OverBuilder;
var init_over_builder = __esm({
  "node_modules/kysely/dist/esm/query-builder/over-builder.js"() {
    init_over_node();
    init_order_by_parser();
    init_partition_by_parser();
    init_object_utils();
    init_prevent_await();
    _OverBuilder = class {
      constructor(props) {
        __privateAdd(this, _props6, void 0);
        __privateSet(this, _props6, freeze(props));
      }
      /**
       * Adds an order by clause item inside the over function.
       *
       * ```ts
       * const result = await db
       *   .selectFrom('person')
       *   .select(
       *     eb => eb.fn.avg<number>('age').over(
       *       ob => ob.orderBy('first_name', 'asc').orderBy('last_name', 'asc')
       *     ).as('average_age')
       *   )
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select avg("age") over(order by "first_name" asc, "last_name" asc) as "average_age"
       * from "person"
       * ```
       */
      orderBy(orderBy, direction) {
        return new _OverBuilder({
          overNode: OverNode.cloneWithOrderByItem(__privateGet(this, _props6).overNode, parseOrderBy(orderBy, direction))
        });
      }
      partitionBy(partitionBy) {
        return new _OverBuilder({
          overNode: OverNode.cloneWithPartitionByItems(__privateGet(this, _props6).overNode, parsePartitionBy(partitionBy))
        });
      }
      toOperationNode() {
        return __privateGet(this, _props6).overNode;
      }
    };
    OverBuilder = _OverBuilder;
    _props6 = new WeakMap();
    preventAwait(OverBuilder, "don't await OverBuilder instances. They are never executed directly and are always just a part of a query.");
  }
});

// node_modules/kysely/dist/esm/operation-node/values-node.js
var ValuesNode;
var init_values_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/values-node.js"() {
    init_object_utils();
    ValuesNode = freeze({
      is(node) {
        return node.kind === "ValuesNode";
      },
      create(values) {
        return freeze({
          kind: "ValuesNode",
          values: freeze(values)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/default-insert-value-node.js
var DefaultInsertValueNode;
var init_default_insert_value_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/default-insert-value-node.js"() {
    init_object_utils();
    DefaultInsertValueNode = freeze({
      is(node) {
        return node.kind === "DefaultInsertValueNode";
      },
      create() {
        return freeze({
          kind: "DefaultInsertValueNode"
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/parser/insert-values-parser.js
function parseInsertObjectOrList(args) {
  return parseInsertColumnsAndValues(Array.isArray(args) ? args : [args]);
}
function parseInsertColumnsAndValues(rows) {
  const columns = parseColumnNamesAndIndexes(rows);
  return [
    freeze([...columns.keys()].map(ColumnNode.create)),
    ValuesNode.create(rows.map((row) => parseRowValues(row, columns)))
  ];
}
function parseColumnNamesAndIndexes(rows) {
  const columns = /* @__PURE__ */ new Map();
  for (const row of rows) {
    const cols = Object.keys(row);
    for (const col of cols) {
      if (!columns.has(col) && row[col] !== void 0) {
        columns.set(col, columns.size);
      }
    }
  }
  return columns;
}
function parseRowValues(row, columns) {
  const rowColumns = Object.keys(row);
  const rowValues = Array.from({
    length: columns.size
  });
  let complexColumn = false;
  for (const col of rowColumns) {
    const columnIdx = columns.get(col);
    if (columnIdx !== void 0) {
      const value = row[col];
      if (isExpressionOrFactory(value)) {
        complexColumn = true;
      }
      rowValues[columnIdx] = value;
    }
  }
  const columnMissing = rowColumns.length < columns.size;
  if (columnMissing || complexColumn) {
    const defaultValue = DefaultInsertValueNode.create();
    return ValueListNode.create(rowValues.map((it) => isUndefined(it) ? defaultValue : parseValueExpression(it)));
  }
  return PrimitiveValueListNode.create(rowValues);
}
var init_insert_values_parser = __esm({
  "node_modules/kysely/dist/esm/parser/insert-values-parser.js"() {
    init_column_node();
    init_primitive_value_list_node();
    init_value_list_node();
    init_object_utils();
    init_value_parser();
    init_values_node();
    init_expression_parser();
    init_default_insert_value_node();
  }
});

// node_modules/kysely/dist/esm/operation-node/column-update-node.js
var ColumnUpdateNode;
var init_column_update_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/column-update-node.js"() {
    init_object_utils();
    ColumnUpdateNode = freeze({
      is(node) {
        return node.kind === "ColumnUpdateNode";
      },
      create(column, value) {
        return freeze({
          kind: "ColumnUpdateNode",
          column,
          value
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/parser/update-set-parser.js
function parseUpdateObject(update) {
  return Object.entries(update).filter(([_, value]) => value !== void 0).map(([key2, value]) => {
    return ColumnUpdateNode.create(ColumnNode.create(key2), parseValueExpression(value));
  });
}
var init_update_set_parser = __esm({
  "node_modules/kysely/dist/esm/parser/update-set-parser.js"() {
    init_column_node();
    init_column_update_node();
    init_value_parser();
  }
});

// node_modules/kysely/dist/esm/operation-node/on-duplicate-key-node.js
var OnDuplicateKeyNode;
var init_on_duplicate_key_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/on-duplicate-key-node.js"() {
    init_object_utils();
    OnDuplicateKeyNode = freeze({
      is(node) {
        return node.kind === "OnDuplicateKeyNode";
      },
      create(updates) {
        return freeze({
          kind: "OnDuplicateKeyNode",
          updates
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/query-builder/insert-result.js
var _insertId, _numInsertedOrUpdatedRows, InsertResult;
var init_insert_result = __esm({
  "node_modules/kysely/dist/esm/query-builder/insert-result.js"() {
    InsertResult = class {
      constructor(insertId, numInsertedOrUpdatedRows) {
        __privateAdd(this, _insertId, void 0);
        __privateAdd(this, _numInsertedOrUpdatedRows, void 0);
        __privateSet(this, _insertId, insertId);
        __privateSet(this, _numInsertedOrUpdatedRows, numInsertedOrUpdatedRows);
      }
      /**
       * The auto incrementing primary key
       */
      get insertId() {
        return __privateGet(this, _insertId);
      }
      /**
       * Affected rows count.
       */
      get numInsertedOrUpdatedRows() {
        return __privateGet(this, _numInsertedOrUpdatedRows);
      }
    };
    _insertId = new WeakMap();
    _numInsertedOrUpdatedRows = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/operation-node/on-conflict-node.js
var OnConflictNode;
var init_on_conflict_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/on-conflict-node.js"() {
    init_object_utils();
    init_where_node();
    OnConflictNode = freeze({
      is(node) {
        return node.kind === "OnConflictNode";
      },
      create() {
        return freeze({
          kind: "OnConflictNode"
        });
      },
      cloneWith(node, props) {
        return freeze({
          ...node,
          ...props
        });
      },
      cloneWithIndexWhere(node, operation) {
        return freeze({
          ...node,
          indexWhere: node.indexWhere ? WhereNode.cloneWithOperation(node.indexWhere, "And", operation) : WhereNode.create(operation)
        });
      },
      cloneWithIndexOrWhere(node, operation) {
        return freeze({
          ...node,
          indexWhere: node.indexWhere ? WhereNode.cloneWithOperation(node.indexWhere, "Or", operation) : WhereNode.create(operation)
        });
      },
      cloneWithUpdateWhere(node, operation) {
        return freeze({
          ...node,
          updateWhere: node.updateWhere ? WhereNode.cloneWithOperation(node.updateWhere, "And", operation) : WhereNode.create(operation)
        });
      },
      cloneWithUpdateOrWhere(node, operation) {
        return freeze({
          ...node,
          updateWhere: node.updateWhere ? WhereNode.cloneWithOperation(node.updateWhere, "Or", operation) : WhereNode.create(operation)
        });
      },
      cloneWithoutIndexWhere(node) {
        return freeze({
          ...node,
          indexWhere: void 0
        });
      },
      cloneWithoutUpdateWhere(node) {
        return freeze({
          ...node,
          updateWhere: void 0
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/query-builder/on-conflict-builder.js
var _props7, _OnConflictBuilder, OnConflictBuilder, _props8, OnConflictDoNothingBuilder, _props9, _OnConflictUpdateBuilder, OnConflictUpdateBuilder;
var init_on_conflict_builder = __esm({
  "node_modules/kysely/dist/esm/query-builder/on-conflict-builder.js"() {
    init_column_node();
    init_identifier_node();
    init_on_conflict_node();
    init_binary_operation_parser();
    init_unary_operation_parser();
    init_update_set_parser();
    init_object_utils();
    init_prevent_await();
    _OnConflictBuilder = class {
      constructor(props) {
        __privateAdd(this, _props7, void 0);
        __privateSet(this, _props7, freeze(props));
      }
      /**
       * Specify a single column as the conflict target.
       *
       * Also see the {@link columns}, {@link constraint} and {@link expression}
       * methods for alternative ways to specify the conflict target.
       */
      column(column) {
        const columnNode = ColumnNode.create(column);
        return new _OnConflictBuilder({
          ...__privateGet(this, _props7),
          onConflictNode: OnConflictNode.cloneWith(__privateGet(this, _props7).onConflictNode, {
            columns: __privateGet(this, _props7).onConflictNode.columns ? freeze([...__privateGet(this, _props7).onConflictNode.columns, columnNode]) : freeze([columnNode])
          })
        });
      }
      /**
       * Specify a list of columns as the conflict target.
       *
       * Also see the {@link column}, {@link constraint} and {@link expression}
       * methods for alternative ways to specify the conflict target.
       */
      columns(columns) {
        const columnNodes = columns.map(ColumnNode.create);
        return new _OnConflictBuilder({
          ...__privateGet(this, _props7),
          onConflictNode: OnConflictNode.cloneWith(__privateGet(this, _props7).onConflictNode, {
            columns: __privateGet(this, _props7).onConflictNode.columns ? freeze([...__privateGet(this, _props7).onConflictNode.columns, ...columnNodes]) : freeze(columnNodes)
          })
        });
      }
      /**
       * Specify a specific constraint by name as the conflict target.
       *
       * Also see the {@link column}, {@link columns} and {@link expression}
       * methods for alternative ways to specify the conflict target.
       */
      constraint(constraintName) {
        return new _OnConflictBuilder({
          ...__privateGet(this, _props7),
          onConflictNode: OnConflictNode.cloneWith(__privateGet(this, _props7).onConflictNode, {
            constraint: IdentifierNode.create(constraintName)
          })
        });
      }
      /**
       * Specify an expression as the conflict target.
       *
       * This can be used if the unique index is an expression index.
       *
       * Also see the {@link column}, {@link columns} and {@link constraint}
       * methods for alternative ways to specify the conflict target.
       */
      expression(expression) {
        return new _OnConflictBuilder({
          ...__privateGet(this, _props7),
          onConflictNode: OnConflictNode.cloneWith(__privateGet(this, _props7).onConflictNode, {
            indexExpression: expression.toOperationNode()
          })
        });
      }
      where(...args) {
        return new _OnConflictBuilder({
          ...__privateGet(this, _props7),
          onConflictNode: OnConflictNode.cloneWithIndexWhere(__privateGet(this, _props7).onConflictNode, parseWhere(args))
        });
      }
      /**
       * Specify an index predicate for the index target.
       *
       * See {@link WhereInterface.whereRef} for more info.
       */
      whereRef(lhs, op, rhs) {
        return new _OnConflictBuilder({
          ...__privateGet(this, _props7),
          onConflictNode: OnConflictNode.cloneWithIndexWhere(__privateGet(this, _props7).onConflictNode, parseReferentialFilter(lhs, op, rhs))
        });
      }
      orWhere(...args) {
        return new _OnConflictBuilder({
          ...__privateGet(this, _props7),
          onConflictNode: OnConflictNode.cloneWithIndexOrWhere(__privateGet(this, _props7).onConflictNode, parseWhere(args))
        });
      }
      /**
       * Specify an index predicate for the index target.
       *
       * See {@link WhereInterface.orWhereRef} for more info.
       */
      orWhereRef(lhs, op, rhs) {
        return new _OnConflictBuilder({
          ...__privateGet(this, _props7),
          onConflictNode: OnConflictNode.cloneWithIndexOrWhere(__privateGet(this, _props7).onConflictNode, parseReferentialFilter(lhs, op, rhs))
        });
      }
      /**
       * Specify an index predicate for the index target.
       *
       * See {@link WhereInterface.whereExists} for more info.
       */
      whereExists(arg) {
        return new _OnConflictBuilder({
          ...__privateGet(this, _props7),
          onConflictNode: OnConflictNode.cloneWithIndexWhere(__privateGet(this, _props7).onConflictNode, parseExists(arg))
        });
      }
      /**
       * Specify an index predicate for the index target.
       *
       * See {@link WhereInterface.whereNotExists} for more info.
       */
      whereNotExists(arg) {
        return new _OnConflictBuilder({
          ...__privateGet(this, _props7),
          onConflictNode: OnConflictNode.cloneWithIndexWhere(__privateGet(this, _props7).onConflictNode, parseNotExists(arg))
        });
      }
      /**
       * Specify an index predicate for the index target.
       *
       * See {@link WhereInterface.orWhereExists} for more info.
       */
      orWhereExists(arg) {
        return new _OnConflictBuilder({
          ...__privateGet(this, _props7),
          onConflictNode: OnConflictNode.cloneWithIndexOrWhere(__privateGet(this, _props7).onConflictNode, parseExists(arg))
        });
      }
      /**
       * Specify an index predicate for the index target.
       *
       * See {@link WhereInterface.orWhereNotExists} for more info.
       */
      orWhereNotExists(arg) {
        return new _OnConflictBuilder({
          ...__privateGet(this, _props7),
          onConflictNode: OnConflictNode.cloneWithIndexOrWhere(__privateGet(this, _props7).onConflictNode, parseNotExists(arg))
        });
      }
      clearWhere() {
        return new _OnConflictBuilder({
          ...__privateGet(this, _props7),
          onConflictNode: OnConflictNode.cloneWithoutIndexWhere(__privateGet(this, _props7).onConflictNode)
        });
      }
      /**
       * Adds the "do nothing" conflict action.
       *
       * ### Examples
       *
       * ```ts
       * await db
       *   .insertInto('person')
       *   .values({ first_name, pic })
       *   .onConflict((oc) => oc
       *     .column('pic')
       *     .doNothing()
       *   )
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * insert into "person" ("first_name", "pic")
       * values ($1, $2)
       * on conflict ("pic") do nothing
       * ```
       */
      doNothing() {
        return new OnConflictDoNothingBuilder({
          ...__privateGet(this, _props7),
          onConflictNode: OnConflictNode.cloneWith(__privateGet(this, _props7).onConflictNode, {
            doNothing: true
          })
        });
      }
      /**
       * Adds the "do update set" conflict action.
       *
       * ### Examples
       *
       * ```ts
       * await db
       *   .insertInto('person')
       *   .values({ first_name, pic })
       *   .onConflict((oc) => oc
       *     .column('pic')
       *     .doUpdateSet({ first_name })
       *   )
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * insert into "person" ("first_name", "pic")
       * values ($1, $2)
       * on conflict ("pic")
       * do update set "first_name" = $3
       * ```
       */
      doUpdateSet(updates) {
        return new OnConflictUpdateBuilder({
          ...__privateGet(this, _props7),
          onConflictNode: OnConflictNode.cloneWith(__privateGet(this, _props7).onConflictNode, {
            updates: parseUpdateObject(updates)
          })
        });
      }
    };
    OnConflictBuilder = _OnConflictBuilder;
    _props7 = new WeakMap();
    preventAwait(OnConflictBuilder, "don't await OnConflictBuilder instances.");
    OnConflictDoNothingBuilder = class {
      constructor(props) {
        __privateAdd(this, _props8, void 0);
        __privateSet(this, _props8, freeze(props));
      }
      toOperationNode() {
        return __privateGet(this, _props8).onConflictNode;
      }
    };
    _props8 = new WeakMap();
    preventAwait(OnConflictDoNothingBuilder, "don't await OnConflictDoNothingBuilder instances.");
    _OnConflictUpdateBuilder = class {
      constructor(props) {
        __privateAdd(this, _props9, void 0);
        __privateSet(this, _props9, freeze(props));
      }
      where(...args) {
        return new _OnConflictUpdateBuilder({
          ...__privateGet(this, _props9),
          onConflictNode: OnConflictNode.cloneWithUpdateWhere(__privateGet(this, _props9).onConflictNode, parseWhere(args))
        });
      }
      /**
       * Specify a where condition for the update operation.
       *
       * See {@link WhereInterface.whereRef} for more info.
       */
      whereRef(lhs, op, rhs) {
        return new _OnConflictUpdateBuilder({
          ...__privateGet(this, _props9),
          onConflictNode: OnConflictNode.cloneWithUpdateWhere(__privateGet(this, _props9).onConflictNode, parseReferentialFilter(lhs, op, rhs))
        });
      }
      orWhere(...args) {
        return new _OnConflictUpdateBuilder({
          ...__privateGet(this, _props9),
          onConflictNode: OnConflictNode.cloneWithUpdateOrWhere(__privateGet(this, _props9).onConflictNode, parseWhere(args))
        });
      }
      /**
       * Specify a where condition for the update operation.
       *
       * See {@link WhereInterface.orWhereRef} for more info.
       */
      orWhereRef(lhs, op, rhs) {
        return new _OnConflictUpdateBuilder({
          ...__privateGet(this, _props9),
          onConflictNode: OnConflictNode.cloneWithUpdateOrWhere(__privateGet(this, _props9).onConflictNode, parseReferentialFilter(lhs, op, rhs))
        });
      }
      /**
       * Specify a where condition for the update operation.
       *
       * See {@link WhereInterface.whereExists} for more info.
       */
      whereExists(arg) {
        return new _OnConflictUpdateBuilder({
          ...__privateGet(this, _props9),
          onConflictNode: OnConflictNode.cloneWithUpdateWhere(__privateGet(this, _props9).onConflictNode, parseExists(arg))
        });
      }
      /**
       * Specify a where condition for the update operation.
       *
       * See {@link WhereInterface.whereNotExists} for more info.
       */
      whereNotExists(arg) {
        return new _OnConflictUpdateBuilder({
          ...__privateGet(this, _props9),
          onConflictNode: OnConflictNode.cloneWithUpdateWhere(__privateGet(this, _props9).onConflictNode, parseNotExists(arg))
        });
      }
      /**
       * Specify a where condition for the update operation.
       *
       * See {@link WhereInterface.orWhereExists} for more info.
       */
      orWhereExists(arg) {
        return new _OnConflictUpdateBuilder({
          ...__privateGet(this, _props9),
          onConflictNode: OnConflictNode.cloneWithUpdateOrWhere(__privateGet(this, _props9).onConflictNode, parseExists(arg))
        });
      }
      /**
       * Specify a where condition for the update operation.
       *
       * See {@link WhereInterface.orWhereNotExists} for more info.
       */
      orWhereNotExists(arg) {
        return new _OnConflictUpdateBuilder({
          ...__privateGet(this, _props9),
          onConflictNode: OnConflictNode.cloneWithUpdateOrWhere(__privateGet(this, _props9).onConflictNode, parseNotExists(arg))
        });
      }
      clearWhere() {
        return new _OnConflictUpdateBuilder({
          ...__privateGet(this, _props9),
          onConflictNode: OnConflictNode.cloneWithoutUpdateWhere(__privateGet(this, _props9).onConflictNode)
        });
      }
      toOperationNode() {
        return __privateGet(this, _props9).onConflictNode;
      }
    };
    OnConflictUpdateBuilder = _OnConflictUpdateBuilder;
    _props9 = new WeakMap();
    preventAwait(OnConflictUpdateBuilder, "don't await OnConflictUpdateBuilder instances.");
  }
});

// node_modules/kysely/dist/esm/query-builder/insert-query-builder.js
var _props10, _InsertQueryBuilder, InsertQueryBuilder;
var init_insert_query_builder = __esm({
  "node_modules/kysely/dist/esm/query-builder/insert-query-builder.js"() {
    init_select_parser();
    init_insert_values_parser();
    init_insert_query_node();
    init_query_node();
    init_update_set_parser();
    init_prevent_await();
    init_object_utils();
    init_on_duplicate_key_node();
    init_insert_result();
    init_no_result_error();
    init_expression_parser();
    init_column_node();
    init_on_conflict_builder();
    init_on_conflict_node();
    init_explain_node();
    _InsertQueryBuilder = class {
      constructor(props) {
        __privateAdd(this, _props10, void 0);
        __privateSet(this, _props10, freeze(props));
      }
      values(args) {
        const [columns, values] = parseInsertObjectOrList(args);
        return new _InsertQueryBuilder({
          ...__privateGet(this, _props10),
          queryNode: InsertQueryNode.cloneWith(__privateGet(this, _props10).queryNode, {
            columns,
            values
          })
        });
      }
      /**
       * Sets the columns to insert.
       *
       * The {@link values} method sets both the columns and the values and this method
       * is not needed. But if you are using the {@link expression} method, you can use
       * this method to set the columns to insert.
       *
       * ### Examples
       *
       * ```ts
       * db.insertInto('person')
       *   .columns(['first_name'])
       *   .expression((eb) => eb.selectFrom('pet').select('pet.name'))
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * insert into "person" ("first_name")
       * select "pet"."name" from "pet"
       * ```
       */
      columns(columns) {
        return new _InsertQueryBuilder({
          ...__privateGet(this, _props10),
          queryNode: InsertQueryNode.cloneWith(__privateGet(this, _props10).queryNode, {
            columns: freeze(columns.map(ColumnNode.create))
          })
        });
      }
      /**
       * Insert an arbitrary expression. For example the result of a select query.
       *
       * ### Examples
       *
       * ```ts
       * db.insertInto('person')
       *   .columns(['first_name'])
       *   .expression((eb) => eb.selectFrom('pet').select('pet.name'))
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * insert into "person" ("first_name")
       * select "pet"."name" from "pet"
       * ```
       */
      expression(expression) {
        return new _InsertQueryBuilder({
          ...__privateGet(this, _props10),
          queryNode: InsertQueryNode.cloneWith(__privateGet(this, _props10).queryNode, {
            values: parseExpression(expression)
          })
        });
      }
      /**
       * Changes an `insert into` query to an `insert ignore into` query.
       *
       * If you use the ignore modifier, ignorable errors that occur while executing the
       * insert statement are ignored. For example, without ignore, a row that duplicates
       * an existing unique index or primary key value in the table causes a duplicate-key
       * error and the statement is aborted. With ignore, the row is discarded and no error
       * occurs.
       *
       * This is only supported on some dialects like MySQL. On most dialects you should
       * use the {@link onConflict} method.
       *
       * ### Examples
       *
       * ```ts
       * await db.insertInto('person')
       *   .ignore()
       *   .values(values)
       *   .execute()
       * ```
       */
      ignore() {
        return new _InsertQueryBuilder({
          ...__privateGet(this, _props10),
          queryNode: InsertQueryNode.cloneWith(__privateGet(this, _props10).queryNode, {
            ignore: true
          })
        });
      }
      /**
       * Adds an `on conflict` clause to the query.
       *
       * `on conflict` is only supported by some dialects like PostgreSQL and SQLite. On MySQL
       * you can use {@link ignore} and {@link onDuplicateKeyUpdate} to achieve similar results.
       *
       * ### Examples
       *
       * ```ts
       * await db
       *   .insertInto('pet')
       *   .values({
       *     name: 'Catto',
       *     species: 'cat',
       *   })
       *   .onConflict((oc) => oc
       *     .column('name')
       *     .doUpdateSet({ species: 'hamster' })
       *   )
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * insert into "pet" ("name", "species")
       * values ($1, $2)
       * on conflict ("name")
       * do update set "species" = $3
       * ```
       *
       * You can provide the name of the constraint instead of a column name:
       *
       * ```ts
       * await db
       *   .insertInto('pet')
       *   .values({
       *     name: 'Catto',
       *     species: 'cat',
       *   })
       *   .onConflict((oc) => oc
       *     .constraint('pet_name_key')
       *     .doUpdateSet({ species: 'hamster' })
       *   )
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * insert into "pet" ("name", "species")
       * values ($1, $2)
       * on conflict on constraint "pet_name_key"
       * do update set "species" = $3
       * ```
       *
       * You can also specify an expression as the conflict target in case
       * the unique index is an expression index:
       *
       * ```ts
       * import { sql } from 'kysely'
       *
       * await db
       *   .insertInto('pet')
       *   .values({
       *     name: 'Catto',
       *     species: 'cat',
       *   })
       *   .onConflict((oc) => oc
       *     .expression(sql`lower(name)`)
       *     .doUpdateSet({ species: 'hamster' })
       *   )
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * insert into "pet" ("name", "species")
       * values ($1, $2)
       * on conflict (lower(name))
       * do update set "species" = $3
       * ```
       *
       * You can add a filter for the update statement like this:
       *
       * ```ts
       * await db
       *   .insertInto('pet')
       *   .values({
       *     name: 'Catto',
       *     species: 'cat',
       *   })
       *   .onConflict((oc) => oc
       *     .column('name')
       *     .doUpdateSet({ species: 'hamster' })
       *     .where('excluded.name', '!=', 'Catto'')
       *   )
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * insert into "pet" ("name", "species")
       * values ($1, $2)
       * on conflict ("name")
       * do update set "species" = $3
       * where "excluded"."name" != $4
       * ```
       *
       * You can create an `on conflict do nothing` clauses like this:
       *
       * ```ts
       * await db
       *   .insertInto('pet')
       *   .values({
       *     name: 'Catto',
       *     species: 'cat',
       *   })
       *   .onConflict((oc) => oc
       *     .column('name')
       *     .doNothing()
       *   )
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * insert into "pet" ("name", "species")
       * values ($1, $2)
       * on conflict ("name") do nothing
       * ```
       *
       * You can refer to the columns of the virtual `excluded` table
       * in a type-safe way using a callback and the `ref` method of
       * `ExpressionBuilder`:
       *
       * ```ts
       * db.insertInto('person')
       *   .values(person)
       *   .onConflict(oc => oc
       *     .column('id')
       *     .doUpdateSet({
       *       first_name: (eb) => eb.ref('excluded.first_name'),
       *       last_name: (eb) => eb.ref('excluded.last_name')
       *     })
       *   )
       * ```
       */
      onConflict(callback) {
        return new _InsertQueryBuilder({
          ...__privateGet(this, _props10),
          queryNode: InsertQueryNode.cloneWith(__privateGet(this, _props10).queryNode, {
            onConflict: callback(new OnConflictBuilder({
              onConflictNode: OnConflictNode.create()
            })).toOperationNode()
          })
        });
      }
      /**
       * Adds `on duplicate key update` to the query.
       *
       * If you specify `on duplicate key update`, and a row is inserted that would cause
       * a duplicate value in a unique index or primary key, an update of the old row occurs.
       *
       * This is only implemented by some dialects like MySQL. On most dialects you should
       * use {@link onConflict} instead.
       *
       * ### Examples
       *
       * ```ts
       * await db
       *   .insertInto('person')
       *   .values(values)
       *   .onDuplicateKeyUpdate({ species: 'hamster' })
       * ```
       */
      onDuplicateKeyUpdate(updates) {
        return new _InsertQueryBuilder({
          ...__privateGet(this, _props10),
          queryNode: InsertQueryNode.cloneWith(__privateGet(this, _props10).queryNode, {
            onDuplicateKey: OnDuplicateKeyNode.create(parseUpdateObject(updates))
          })
        });
      }
      returning(selection) {
        return new _InsertQueryBuilder({
          ...__privateGet(this, _props10),
          queryNode: QueryNode.cloneWithReturning(__privateGet(this, _props10).queryNode, parseSelectExpressionOrList(selection))
        });
      }
      returningAll() {
        return new _InsertQueryBuilder({
          ...__privateGet(this, _props10),
          queryNode: QueryNode.cloneWithReturning(__privateGet(this, _props10).queryNode, parseSelectAll())
        });
      }
      /**
       * Simply calls the given function passing `this` as the only argument.
       *
       * If you want to conditionally call a method on `this`, see
       * the {@link $if} method.
       *
       * ### Examples
       *
       * The next example uses a helper function `log` to log a query:
       *
       * ```ts
       * function log<T extends Compilable>(qb: T): T {
       *   console.log(qb.compile())
       *   return qb
       * }
       *
       * db.updateTable('person')
       *   .set(values)
       *   .$call(log)
       *   .execute()
       * ```
       */
      $call(func) {
        return func(this);
      }
      /**
       * @deprecated Use `$call` instead
       */
      call(func) {
        return this.$call(func);
      }
      /**
       * Call `func(this)` if `condition` is true.
       *
       * This method is especially handy with optional selects. Any `returning` or `returningAll`
       * method calls add columns as optional fields to the output type when called inside
       * the `func` callback. This is because we can't know if those selections were actually
       * made before running the code.
       *
       * You can also call any other methods inside the callback.
       *
       * ### Examples
       *
       * ```ts
       * async function insertPerson(values: InsertablePerson, returnLastName: boolean) {
       *   return await db
       *     .insertInto('person')
       *     .values(values)
       *     .returning(['id', 'first_name'])
       *     .$if(returnLastName, (qb) => qb.returning('last_name'))
       *     .executeTakeFirstOrThrow()
       * }
       * ```
       *
       * Any selections added inside the `if` callback will be added as optional fields to the
       * output type since we can't know if the selections were actually made before running
       * the code. In the example above the return type of the `insertPerson` function is:
       *
       * ```ts
       * {
       *   id: number
       *   first_name: string
       *   last_name?: string
       * }
       * ```
       */
      $if(condition, func) {
        if (condition) {
          return func(this);
        }
        return new _InsertQueryBuilder({
          ...__privateGet(this, _props10)
        });
      }
      /**
       * @deprecated Use `$if` instead
       */
      if(condition, func) {
        return this.$if(condition, func);
      }
      /**
       * Change the output type of the query.
       *
       * You should only use this method as the last resort if the types
       * don't support your use case.
       */
      $castTo() {
        return new _InsertQueryBuilder(__privateGet(this, _props10));
      }
      /**
       * @deprecated Use `$castTo` instead.
       */
      castTo() {
        return this.$castTo();
      }
      /**
       * Asserts that query's output row type equals the given type `T`.
       *
       * This method can be used to simplify excessively complex types to make typescript happy
       * and much faster.
       *
       * Kysely uses complex type magic to achieve its type safety. This complexity is sometimes too much
       * for typescript and you get errors like this:
       *
       * ```
       * error TS2589: Type instantiation is excessively deep and possibly infinite.
       * ```
       *
       * In these case you can often use this method to help typescript a little bit. When you use this
       * method to assert the output type of a query, Kysely can drop the complex output type that
       * consists of multiple nested helper types and replace it with the simple asserted type.
       *
       * Using this method doesn't reduce type safety at all. You have to pass in a type that is
       * structurally equal to the current type.
       *
       * ### Examples
       *
       * ```ts
       * const result = await db
       *   .with('new_person', (qb) => qb
       *     .insertInto('person')
       *     .values(person)
       *     .returning('id')
       *     .$assertType<{ id: string }>()
       *   )
       *   .with('new_pet', (qb) => qb
       *     .insertInto('pet')
       *     .values({ owner_id: (eb) => eb.selectFrom('new_person').select('id'), ...pet })
       *     .returning(['name as pet_name', 'species'])
       *     .$assertType<{ pet_name: string, species: Species }>()
       *   )
       *   .selectFrom(['new_person', 'new_pet'])
       *   .selectAll()
       *   .executeTakeFirstOrThrow()
       * ```
       */
      $assertType() {
        return new _InsertQueryBuilder(__privateGet(this, _props10));
      }
      /**
       * @deprecated Use `$assertType` instead.
       */
      assertType() {
        return new _InsertQueryBuilder(__privateGet(this, _props10));
      }
      /**
       * Returns a copy of this InsertQueryBuilder instance with the given plugin installed.
       */
      withPlugin(plugin) {
        return new _InsertQueryBuilder({
          ...__privateGet(this, _props10),
          executor: __privateGet(this, _props10).executor.withPlugin(plugin)
        });
      }
      toOperationNode() {
        return __privateGet(this, _props10).executor.transformQuery(__privateGet(this, _props10).queryNode, __privateGet(this, _props10).queryId);
      }
      compile() {
        return __privateGet(this, _props10).executor.compileQuery(this.toOperationNode(), __privateGet(this, _props10).queryId);
      }
      /**
       * Executes the query and returns an array of rows.
       *
       * Also see the {@link executeTakeFirst} and {@link executeTakeFirstOrThrow} methods.
       */
      async execute() {
        const compiledQuery = this.compile();
        const query = compiledQuery.query;
        const result = await __privateGet(this, _props10).executor.executeQuery(compiledQuery, __privateGet(this, _props10).queryId);
        if (__privateGet(this, _props10).executor.adapter.supportsReturning && query.returning) {
          return result.rows;
        }
        return [
          new InsertResult(
            result.insertId,
            // TODO: remove numUpdatedOrDeletedRows.
            result.numAffectedRows ?? result.numUpdatedOrDeletedRows
          )
        ];
      }
      /**
       * Executes the query and returns the first result or undefined if
       * the query returned no result.
       */
      async executeTakeFirst() {
        const [result] = await this.execute();
        return result;
      }
      /**
       * Executes the query and returns the first result or throws if
       * the query returned no result.
       *
       * By default an instance of {@link NoResultError} is thrown, but you can
       * provide a custom error class as the only argument to throw a different
       * error.
       */
      async executeTakeFirstOrThrow(errorConstructor = NoResultError) {
        const result = await this.executeTakeFirst();
        if (result === void 0) {
          throw new errorConstructor(this.toOperationNode());
        }
        return result;
      }
      /**
       * Executes query with `explain` statement before `insert` keyword.
       *
       * ```ts
       * const explained = await db
       *  .insertInto('person')
       *  .values(values)
       *  .explain('json')
       * ```
       *
       * The generated SQL (MySQL):
       *
       * ```sql
       * explain format=json insert into `person` (`id`, `first_name`, `last_name`) values (?, ?, ?) (?, ?, ?)
       * ```
       */
      async explain(format2, options2) {
        const builder = new _InsertQueryBuilder({
          ...__privateGet(this, _props10),
          queryNode: InsertQueryNode.cloneWith(__privateGet(this, _props10).queryNode, {
            explain: ExplainNode.create(format2, options2?.toOperationNode())
          })
        });
        return await builder.execute();
      }
    };
    InsertQueryBuilder = _InsertQueryBuilder;
    _props10 = new WeakMap();
    preventAwait(InsertQueryBuilder, "don't await InsertQueryBuilder instances directly. To execute the query you need to call `execute` or `executeTakeFirst`.");
  }
});

// node_modules/kysely/dist/esm/query-builder/delete-result.js
var _numDeletedRows, DeleteResult;
var init_delete_result = __esm({
  "node_modules/kysely/dist/esm/query-builder/delete-result.js"() {
    DeleteResult = class {
      constructor(numDeletedRows) {
        __privateAdd(this, _numDeletedRows, void 0);
        __privateSet(this, _numDeletedRows, numDeletedRows);
      }
      get numDeletedRows() {
        return __privateGet(this, _numDeletedRows);
      }
    };
    _numDeletedRows = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/query-builder/delete-query-builder.js
var _props11, _DeleteQueryBuilder, DeleteQueryBuilder;
var init_delete_query_builder = __esm({
  "node_modules/kysely/dist/esm/query-builder/delete-query-builder.js"() {
    init_join_parser();
    init_table_parser();
    init_select_parser();
    init_query_node();
    init_prevent_await();
    init_object_utils();
    init_no_result_error();
    init_delete_result();
    init_delete_query_node();
    init_limit_node();
    init_order_by_parser();
    init_explain_node();
    init_binary_operation_parser();
    init_unary_operation_parser();
    _DeleteQueryBuilder = class {
      constructor(props) {
        __privateAdd(this, _props11, void 0);
        __privateSet(this, _props11, freeze(props));
      }
      where(...args) {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: QueryNode.cloneWithWhere(__privateGet(this, _props11).queryNode, parseWhere(args))
        });
      }
      whereRef(lhs, op, rhs) {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: QueryNode.cloneWithWhere(__privateGet(this, _props11).queryNode, parseReferentialFilter(lhs, op, rhs))
        });
      }
      orWhere(...args) {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: QueryNode.cloneWithOrWhere(__privateGet(this, _props11).queryNode, parseWhere(args))
        });
      }
      orWhereRef(lhs, op, rhs) {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: QueryNode.cloneWithOrWhere(__privateGet(this, _props11).queryNode, parseReferentialFilter(lhs, op, rhs))
        });
      }
      whereExists(arg) {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: QueryNode.cloneWithWhere(__privateGet(this, _props11).queryNode, parseExists(arg))
        });
      }
      whereNotExists(arg) {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: QueryNode.cloneWithWhere(__privateGet(this, _props11).queryNode, parseNotExists(arg))
        });
      }
      orWhereExists(arg) {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: QueryNode.cloneWithOrWhere(__privateGet(this, _props11).queryNode, parseExists(arg))
        });
      }
      orWhereNotExists(arg) {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: QueryNode.cloneWithOrWhere(__privateGet(this, _props11).queryNode, parseNotExists(arg))
        });
      }
      clearWhere() {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: QueryNode.cloneWithoutWhere(__privateGet(this, _props11).queryNode)
        });
      }
      using(tables) {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: DeleteQueryNode.cloneWithUsing(__privateGet(this, _props11).queryNode, parseTableExpressionOrList(tables))
        });
      }
      innerJoin(...args) {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: QueryNode.cloneWithJoin(__privateGet(this, _props11).queryNode, parseJoin("InnerJoin", args))
        });
      }
      leftJoin(...args) {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: QueryNode.cloneWithJoin(__privateGet(this, _props11).queryNode, parseJoin("LeftJoin", args))
        });
      }
      rightJoin(...args) {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: QueryNode.cloneWithJoin(__privateGet(this, _props11).queryNode, parseJoin("RightJoin", args))
        });
      }
      fullJoin(...args) {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: QueryNode.cloneWithJoin(__privateGet(this, _props11).queryNode, parseJoin("FullJoin", args))
        });
      }
      returning(selection) {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: QueryNode.cloneWithReturning(__privateGet(this, _props11).queryNode, parseSelectExpressionOrList(selection))
        });
      }
      returningAll() {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: QueryNode.cloneWithReturning(__privateGet(this, _props11).queryNode, parseSelectAll())
        });
      }
      /**
       * Adds an `order by` clause to the query.
       *
       * `orderBy` calls are additive. To order by multiple columns, call `orderBy`
       * multiple times.
       *
       * The first argument is the expression to order by and the second is the
       * order (`asc` or `desc`).
       *
       * An `order by` clause in a delete query is only supported by some dialects
       * like MySQL.
       *
       * See {@link SelectQueryBuilder.orderBy} for more examples.
       *
       * ### Examples
       *
       * Delete 5 oldest items in a table:
       *
       * ```ts
       * await db
       *   .deleteFrom('pet')
       *   .orderBy('created_at')
       *   .limit(5)
       *   .execute()
       * ```
       *
       * The generated SQL (MySQL):
       *
       * ```sql
       * delete from `pet`
       * order by `created_at`
       * limit ?
       * ```
       */
      orderBy(orderBy, direction) {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: DeleteQueryNode.cloneWithOrderByItem(__privateGet(this, _props11).queryNode, parseOrderBy(orderBy, direction))
        });
      }
      /**
       * Adds a limit clause to the query.
       *
       * A limit clause in a delete query is only supported by some dialects
       * like MySQL.
       *
       * ### Examples
       *
       * Delete 5 oldest items in a table:
       *
       * ```ts
       * await db
       *   .deleteFrom('pet')
       *   .orderBy('created_at')
       *   .limit(5)
       *   .execute()
       * ```
       */
      limit(limit) {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: DeleteQueryNode.cloneWithLimit(__privateGet(this, _props11).queryNode, LimitNode.create(limit))
        });
      }
      /**
       * Simply calls the given function passing `this` as the only argument.
       *
       * If you want to conditionally call a method on `this`, see
       * the {@link $if} method.
       *
       * ### Examples
       *
       * The next example uses a helper function `log` to log a query:
       *
       * ```ts
       * function log<T extends Compilable>(qb: T): T {
       *   console.log(qb.compile())
       *   return qb
       * }
       *
       * db.deleteFrom('person')
       *   .$call(log)
       *   .execute()
       * ```
       */
      $call(func) {
        return func(this);
      }
      /**
       * @deprecated Use `$call` instead
       */
      call(func) {
        return this.$call(func);
      }
      /**
       * Call `func(this)` if `condition` is true.
       *
       * This method is especially handy with optional selects. Any `returning` or `returningAll`
       * method calls add columns as optional fields to the output type when called inside
       * the `func` callback. This is because we can't know if those selections were actually
       * made before running the code.
       *
       * You can also call any other methods inside the callback.
       *
       * ### Examples
       *
       * ```ts
       * async function deletePerson(id: number, returnLastName: boolean) {
       *   return await db
       *     .deleteFrom('person')
       *     .where('id', '=', id)
       *     .returning(['id', 'first_name'])
       *     .$if(returnLastName, (qb) => qb.returning('last_name'))
       *     .executeTakeFirstOrThrow()
       * }
       * ```
       *
       * Any selections added inside the `if` callback will be added as optional fields to the
       * output type since we can't know if the selections were actually made before running
       * the code. In the example above the return type of the `deletePerson` function is:
       *
       * ```ts
       * {
       *   id: number
       *   first_name: string
       *   last_name?: string
       * }
       * ```
       */
      $if(condition, func) {
        if (condition) {
          return func(this);
        }
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11)
        });
      }
      /**
       * @deprecated Use `$if` instead
       */
      if(condition, func) {
        return this.$if(condition, func);
      }
      /**
       * Change the output type of the query.
       *
       * You should only use this method as the last resort if the types
       * don't support your use case.
       */
      $castTo() {
        return new _DeleteQueryBuilder(__privateGet(this, _props11));
      }
      /**
       * @deprecated Use `$castTo` instead.
       */
      castTo() {
        return this.$castTo();
      }
      /**
       * Asserts that query's output row type equals the given type `T`.
       *
       * This method can be used to simplify excessively complex types to make typescript happy
       * and much faster.
       *
       * Kysely uses complex type magic to achieve its type safety. This complexity is sometimes too much
       * for typescript and you get errors like this:
       *
       * ```
       * error TS2589: Type instantiation is excessively deep and possibly infinite.
       * ```
       *
       * In these case you can often use this method to help typescript a little bit. When you use this
       * method to assert the output type of a query, Kysely can drop the complex output type that
       * consists of multiple nested helper types and replace it with the simple asserted type.
       *
       * Using this method doesn't reduce type safety at all. You have to pass in a type that is
       * structurally equal to the current type.
       *
       * ### Examples
       *
       * ```ts
       * const result = await db
       *   .with('deleted_person', (qb) => qb
       *     .deleteFrom('person')
       *     .where('id', '=', person.id)
       *     .returning('first_name')
       *     .$assertType<{ first_name: string }>()
       *   )
       *   .with('deleted_pet', (qb) => qb
       *     .deleteFrom('pet')
       *     .where('owner_id', '=', person.id)
       *     .returning(['name as pet_name', 'species'])
       *     .$assertType<{ pet_name: string, species: Species }>()
       *   )
       *   .selectFrom(['deleted_person', 'deleted_pet'])
       *   .selectAll()
       *   .executeTakeFirstOrThrow()
       * ```
       */
      $assertType() {
        return new _DeleteQueryBuilder(__privateGet(this, _props11));
      }
      /**
       * @deprecated Use `$assertType` instead.
       */
      assertType() {
        return new _DeleteQueryBuilder(__privateGet(this, _props11));
      }
      /**
       * Returns a copy of this DeleteQueryBuilder instance with the given plugin installed.
       */
      withPlugin(plugin) {
        return new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          executor: __privateGet(this, _props11).executor.withPlugin(plugin)
        });
      }
      toOperationNode() {
        return __privateGet(this, _props11).executor.transformQuery(__privateGet(this, _props11).queryNode, __privateGet(this, _props11).queryId);
      }
      compile() {
        return __privateGet(this, _props11).executor.compileQuery(this.toOperationNode(), __privateGet(this, _props11).queryId);
      }
      /**
       * Executes the query and returns an array of rows.
       *
       * Also see the {@link executeTakeFirst} and {@link executeTakeFirstOrThrow} methods.
       */
      async execute() {
        const compiledQuery = this.compile();
        const query = compiledQuery.query;
        const result = await __privateGet(this, _props11).executor.executeQuery(compiledQuery, __privateGet(this, _props11).queryId);
        if (__privateGet(this, _props11).executor.adapter.supportsReturning && query.returning) {
          return result.rows;
        }
        return [
          new DeleteResult(
            // TODO: remove numUpdatedOrDeletedRows.
            result.numAffectedRows ?? result.numUpdatedOrDeletedRows ?? 0n
          )
        ];
      }
      /**
       * Executes the query and returns the first result or undefined if
       * the query returned no result.
       */
      async executeTakeFirst() {
        const [result] = await this.execute();
        return result;
      }
      /**
       * Executes the query and returns the first result or throws if
       * the query returned no result.
       *
       * By default an instance of {@link NoResultError} is thrown, but you can
       * provide a custom error class as the only argument to throw a different
       * error.
       */
      async executeTakeFirstOrThrow(errorConstructor = NoResultError) {
        const result = await this.executeTakeFirst();
        if (result === void 0) {
          throw new errorConstructor(this.toOperationNode());
        }
        return result;
      }
      /**
       * Executes query with `explain` statement before `delete` keyword.
       *
       * ```ts
       * const explained = await db
       *  .deleteFrom('person')
       *  .where('id', '=', 123)
       *  .explain('json')
       * ```
       *
       * The generated SQL (MySQL):
       *
       * ```sql
       * explain format=json delete from `person` where `id` = ?
       * ```
       */
      async explain(format2, options2) {
        const builder = new _DeleteQueryBuilder({
          ...__privateGet(this, _props11),
          queryNode: DeleteQueryNode.cloneWithExplain(__privateGet(this, _props11).queryNode, ExplainNode.create(format2, options2?.toOperationNode()))
        });
        return await builder.execute();
      }
    };
    DeleteQueryBuilder = _DeleteQueryBuilder;
    _props11 = new WeakMap();
    preventAwait(DeleteQueryBuilder, "don't await DeleteQueryBuilder instances directly. To execute the query you need to call `execute` or `executeTakeFirst`.");
  }
});

// node_modules/kysely/dist/esm/query-builder/update-result.js
var _numUpdatedRows, UpdateResult;
var init_update_result = __esm({
  "node_modules/kysely/dist/esm/query-builder/update-result.js"() {
    UpdateResult = class {
      constructor(numUpdatedRows) {
        __privateAdd(this, _numUpdatedRows, void 0);
        __privateSet(this, _numUpdatedRows, numUpdatedRows);
      }
      get numUpdatedRows() {
        return __privateGet(this, _numUpdatedRows);
      }
    };
    _numUpdatedRows = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/query-builder/update-query-builder.js
var _props12, _UpdateQueryBuilder, UpdateQueryBuilder;
var init_update_query_builder = __esm({
  "node_modules/kysely/dist/esm/query-builder/update-query-builder.js"() {
    init_join_parser();
    init_table_parser();
    init_select_parser();
    init_query_node();
    init_update_query_node();
    init_update_set_parser();
    init_prevent_await();
    init_object_utils();
    init_update_result();
    init_no_result_error();
    init_explain_node();
    init_binary_operation_parser();
    init_unary_operation_parser();
    _UpdateQueryBuilder = class {
      constructor(props) {
        __privateAdd(this, _props12, void 0);
        __privateSet(this, _props12, freeze(props));
      }
      where(...args) {
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          queryNode: QueryNode.cloneWithWhere(__privateGet(this, _props12).queryNode, parseWhere(args))
        });
      }
      whereRef(lhs, op, rhs) {
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          queryNode: QueryNode.cloneWithWhere(__privateGet(this, _props12).queryNode, parseReferentialFilter(lhs, op, rhs))
        });
      }
      orWhere(...args) {
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          queryNode: QueryNode.cloneWithOrWhere(__privateGet(this, _props12).queryNode, parseWhere(args))
        });
      }
      orWhereRef(lhs, op, rhs) {
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          queryNode: QueryNode.cloneWithOrWhere(__privateGet(this, _props12).queryNode, parseReferentialFilter(lhs, op, rhs))
        });
      }
      whereExists(arg) {
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          queryNode: QueryNode.cloneWithWhere(__privateGet(this, _props12).queryNode, parseExists(arg))
        });
      }
      whereNotExists(arg) {
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          queryNode: QueryNode.cloneWithWhere(__privateGet(this, _props12).queryNode, parseNotExists(arg))
        });
      }
      orWhereExists(arg) {
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          queryNode: QueryNode.cloneWithOrWhere(__privateGet(this, _props12).queryNode, parseExists(arg))
        });
      }
      orWhereNotExists(arg) {
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          queryNode: QueryNode.cloneWithOrWhere(__privateGet(this, _props12).queryNode, parseNotExists(arg))
        });
      }
      clearWhere() {
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          queryNode: QueryNode.cloneWithoutWhere(__privateGet(this, _props12).queryNode)
        });
      }
      from(from) {
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          queryNode: UpdateQueryNode.cloneWithFromItems(__privateGet(this, _props12).queryNode, parseTableExpressionOrList(from))
        });
      }
      innerJoin(...args) {
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          queryNode: QueryNode.cloneWithJoin(__privateGet(this, _props12).queryNode, parseJoin("InnerJoin", args))
        });
      }
      leftJoin(...args) {
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          queryNode: QueryNode.cloneWithJoin(__privateGet(this, _props12).queryNode, parseJoin("LeftJoin", args))
        });
      }
      rightJoin(...args) {
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          queryNode: QueryNode.cloneWithJoin(__privateGet(this, _props12).queryNode, parseJoin("RightJoin", args))
        });
      }
      fullJoin(...args) {
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          queryNode: QueryNode.cloneWithJoin(__privateGet(this, _props12).queryNode, parseJoin("FullJoin", args))
        });
      }
      /**
       * Sets the values to update for an {@link Kysely.updateTable | update} query.
       *
       * This method takes an object whose keys are column names and values are
       * values to update. In addition to the column's type, the values can be
       * raw {@link sql} snippets or select queries.
       *
       * The return value of an update query is an instance of {@link UpdateResult}.
       * You can use the {@link returning} method on supported databases to get out
       * the updated rows.
       *
       * ### Examples
       *
       * Update a row in `person` table:
       *
       * ```ts
       * const result = await db
       *   .updateTable('person')
       *   .set({
       *     first_name: 'Jennifer',
       *     last_name: 'Aniston'
       *   })
       *   .where('id', '=', 1)
       *   .executeTakeFirst()
       *
       * console.log(result.numUpdatedRows)
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * update "person" set "first_name" = $1, "last_name" = $2 where "id" = $3
       * ```
       *
       * On PostgreSQL you ca chain `returning` to the query to get
       * the updated rows' columns (or any other expression) as the
       * return value:
       *
       * ```ts
       * const row = await db
       *   .updateTable('person')
       *   .set({
       *     first_name: 'Jennifer',
       *     last_name: 'Aniston'
       *   })
       *   .where('id', '=', 1)
       *   .returning('id')
       *   .executeTakeFirstOrThrow()
       *
       * row.id
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * update "person" set "first_name" = $1, "last_name" = $2 where "id" = $3 returning "id"
       * ```
       *
       * In addition to primitives, the values can also be raw sql expressions or
       * select queries:
       *
       * ```ts
       * import { sql } from 'kysely'
       *
       * const result = await db
       *   .updateTable('person')
       *   .set({
       *     first_name: 'Jennifer',
       *     last_name: sql`${'Ani'} || ${'ston'}`,
       *     age: db.selectFrom('person').select(sql`avg(age)`),
       *   })
       *   .where('id', '=', 1)
       *   .executeTakeFirst()
       *
       * console.log(result.numUpdatedRows)
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * update "person" set
       * "first_name" = $1,
       * "last_name" = $2 || $3,
       * "age" = (select avg(age) from "person")
       * where "id" = $4
       * ```
       */
      set(row) {
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          queryNode: UpdateQueryNode.cloneWithUpdates(__privateGet(this, _props12).queryNode, parseUpdateObject(row))
        });
      }
      returning(selection) {
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          queryNode: QueryNode.cloneWithReturning(__privateGet(this, _props12).queryNode, parseSelectExpressionOrList(selection))
        });
      }
      returningAll() {
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          queryNode: QueryNode.cloneWithReturning(__privateGet(this, _props12).queryNode, parseSelectAll())
        });
      }
      /**
       * Simply calls the given function passing `this` as the only argument.
       *
       * If you want to conditionally call a method on `this`, see
       * the {@link $if} method.
       *
       * ### Examples
       *
       * The next example uses a helper function `log` to log a query:
       *
       * ```ts
       * function log<T extends Compilable>(qb: T): T {
       *   console.log(qb.compile())
       *   return qb
       * }
       *
       * db.updateTable('person')
       *   .set(values)
       *   .$call(log)
       *   .execute()
       * ```
       */
      $call(func) {
        return func(this);
      }
      /**
       * @deprecated Use `$call` instead
       */
      call(func) {
        return this.$call(func);
      }
      /**
       * Call `func(this)` if `condition` is true.
       *
       * This method is especially handy with optional selects. Any `returning` or `returningAll`
       * method calls add columns as optional fields to the output type when called inside
       * the `func` callback. This is because we can't know if those selections were actually
       * made before running the code.
       *
       * You can also call any other methods inside the callback.
       *
       * ### Examples
       *
       * ```ts
       * async function updatePerson(id: number, updates: UpdateablePerson, returnLastName: boolean) {
       *   return await db
       *     .updateTable('person')
       *     .set(updates)
       *     .where('id', '=', id)
       *     .returning(['id', 'first_name'])
       *     .$if(returnLastName, (qb) => qb.returning('last_name'))
       *     .executeTakeFirstOrThrow()
       * }
       * ```
       *
       * Any selections added inside the `if` callback will be added as optional fields to the
       * output type since we can't know if the selections were actually made before running
       * the code. In the example above the return type of the `updatePerson` function is:
       *
       * ```ts
       * {
       *   id: number
       *   first_name: string
       *   last_name?: string
       * }
       * ```
       */
      $if(condition, func) {
        if (condition) {
          return func(this);
        }
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12)
        });
      }
      /**
       * @deprecated Use `$if` instead
       */
      if(condition, func) {
        return this.$if(condition, func);
      }
      /**
       * Change the output type of the query.
       *
       * You should only use this method as the last resort if the types
       * don't support your use case.
       */
      $castTo() {
        return new _UpdateQueryBuilder(__privateGet(this, _props12));
      }
      /**
       * @deprecated Use `$castTo` instead.
       */
      castTo() {
        return this.$castTo();
      }
      /**
       * Asserts that query's output row type equals the given type `T`.
       *
       * This method can be used to simplify excessively complex types to make typescript happy
       * and much faster.
       *
       * Kysely uses complex type magic to achieve its type safety. This complexity is sometimes too much
       * for typescript and you get errors like this:
       *
       * ```
       * error TS2589: Type instantiation is excessively deep and possibly infinite.
       * ```
       *
       * In these case you can often use this method to help typescript a little bit. When you use this
       * method to assert the output type of a query, Kysely can drop the complex output type that
       * consists of multiple nested helper types and replace it with the simple asserted type.
       *
       * Using this method doesn't reduce type safety at all. You have to pass in a type that is
       * structurally equal to the current type.
       *
       * ### Examples
       *
       * ```ts
       * const result = await db
       *   .with('updated_person', (qb) => qb
       *     .updateTable('person')
       *     .set(person)
       *     .where('id', '=', person.id)
       *     .returning('first_name')
       *     .$assertType<{ first_name: string }>()
       *   )
       *   .with('updated_pet', (qb) => qb
       *     .updateTable('pet')
       *     .set(pet)
       *     .where('owner_id', '=', person.id)
       *     .returning(['name as pet_name', 'species'])
       *     .$assertType<{ pet_name: string, species: Species }>()
       *   )
       *   .selectFrom(['updated_person', 'updated_pet'])
       *   .selectAll()
       *   .executeTakeFirstOrThrow()
       * ```
       */
      $assertType() {
        return new _UpdateQueryBuilder(__privateGet(this, _props12));
      }
      /**
       * @deprecated Use `$assertType` instead.
       */
      assertType() {
        return new _UpdateQueryBuilder(__privateGet(this, _props12));
      }
      /**
       * Returns a copy of this UpdateQueryBuilder instance with the given plugin installed.
       */
      withPlugin(plugin) {
        return new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          executor: __privateGet(this, _props12).executor.withPlugin(plugin)
        });
      }
      toOperationNode() {
        return __privateGet(this, _props12).executor.transformQuery(__privateGet(this, _props12).queryNode, __privateGet(this, _props12).queryId);
      }
      compile() {
        return __privateGet(this, _props12).executor.compileQuery(this.toOperationNode(), __privateGet(this, _props12).queryId);
      }
      /**
       * Executes the query and returns an array of rows.
       *
       * Also see the {@link executeTakeFirst} and {@link executeTakeFirstOrThrow} methods.
       */
      async execute() {
        const compiledQuery = this.compile();
        const query = compiledQuery.query;
        const result = await __privateGet(this, _props12).executor.executeQuery(compiledQuery, __privateGet(this, _props12).queryId);
        if (__privateGet(this, _props12).executor.adapter.supportsReturning && query.returning) {
          return result.rows;
        }
        return [
          new UpdateResult(
            // TODO: remove numUpdatedOrDeletedRows.
            result.numAffectedRows ?? result.numUpdatedOrDeletedRows ?? 0n
          )
        ];
      }
      /**
       * Executes the query and returns the first result or undefined if
       * the query returned no result.
       */
      async executeTakeFirst() {
        const [result] = await this.execute();
        return result;
      }
      /**
       * Executes the query and returns the first result or throws if
       * the query returned no result.
       *
       * By default an instance of {@link NoResultError} is thrown, but you can
       * provide a custom error class as the only argument to throw a different
       * error.
       */
      async executeTakeFirstOrThrow(errorConstructor = NoResultError) {
        const result = await this.executeTakeFirst();
        if (result === void 0) {
          throw new errorConstructor(this.toOperationNode());
        }
        return result;
      }
      /**
       * Executes query with `explain` statement before `update` keyword.
       *
       * ```ts
       * const explained = await db
       *  .updateTable('person')
       *  .set(updates)
       *  .where('id', '=', 123)
       *  .explain('json')
       * ```
       *
       * The generated SQL (MySQL):
       *
       * ```sql
       * explain format=json update `person` set `first_name` = ?, `last_name` = ? where `id` = ?
       * ```
       */
      async explain(format2, options2) {
        const builder = new _UpdateQueryBuilder({
          ...__privateGet(this, _props12),
          queryNode: UpdateQueryNode.cloneWithExplain(__privateGet(this, _props12).queryNode, ExplainNode.create(format2, options2?.toOperationNode()))
        });
        return await builder.execute();
      }
    };
    UpdateQueryBuilder = _UpdateQueryBuilder;
    _props12 = new WeakMap();
    preventAwait(UpdateQueryBuilder, "don't await UpdateQueryBuilder instances directly. To execute the query you need to call `execute` or `executeTakeFirst`.");
  }
});

// node_modules/kysely/dist/esm/operation-node/common-table-expression-node.js
var CommonTableExpressionNode;
var init_common_table_expression_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/common-table-expression-node.js"() {
    init_object_utils();
    CommonTableExpressionNode = freeze({
      is(node) {
        return node.kind === "CommonTableExpressionNode";
      },
      create(name, expression) {
        return freeze({
          kind: "CommonTableExpressionNode",
          name,
          expression
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/common-table-expression-name-node.js
var CommonTableExpressionNameNode;
var init_common_table_expression_name_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/common-table-expression-name-node.js"() {
    init_object_utils();
    init_column_node();
    init_table_node();
    CommonTableExpressionNameNode = freeze({
      is(node) {
        return node.kind === "CommonTableExpressionNameNode";
      },
      create(tableName, columnNames) {
        return freeze({
          kind: "CommonTableExpressionNameNode",
          table: TableNode.create(tableName),
          columns: columnNames ? freeze(columnNames.map(ColumnNode.create)) : void 0
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/parser/with-parser.js
function parseCommonTableExpression(name, expression) {
  const builder = expression(createQueryCreator());
  return CommonTableExpressionNode.create(parseCommonTableExpressionName(name), builder.toOperationNode());
}
function parseCommonTableExpressionName(name) {
  if (name.includes("(")) {
    const parts = name.split(/[\(\)]/);
    const table = parts[0];
    const columns = parts[1].split(",").map((it) => it.trim());
    return CommonTableExpressionNameNode.create(table, columns);
  } else {
    return CommonTableExpressionNameNode.create(name);
  }
}
var init_with_parser = __esm({
  "node_modules/kysely/dist/esm/parser/with-parser.js"() {
    init_common_table_expression_node();
    init_common_table_expression_name_node();
    init_parse_utils();
  }
});

// node_modules/kysely/dist/esm/operation-node/with-node.js
var WithNode;
var init_with_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/with-node.js"() {
    init_object_utils();
    WithNode = freeze({
      is(node) {
        return node.kind === "WithNode";
      },
      create(expression, params) {
        return freeze({
          kind: "WithNode",
          expressions: freeze([expression]),
          ...params
        });
      },
      cloneWithExpression(withNode, expression) {
        return freeze({
          ...withNode,
          expressions: freeze([...withNode.expressions, expression])
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/query-creator.js
var _props13, _QueryCreator, QueryCreator;
var init_query_creator = __esm({
  "node_modules/kysely/dist/esm/query-creator.js"() {
    init_select_query_builder();
    init_insert_query_builder();
    init_delete_query_builder();
    init_update_query_builder();
    init_delete_query_node();
    init_insert_query_node();
    init_select_query_node();
    init_update_query_node();
    init_table_parser();
    init_with_parser();
    init_with_node();
    init_query_id();
    init_with_schema_plugin();
    init_object_utils();
    _QueryCreator = class {
      constructor(props) {
        __privateAdd(this, _props13, void 0);
        __privateSet(this, _props13, freeze(props));
      }
      selectFrom(from) {
        return new SelectQueryBuilder({
          queryId: createQueryId(),
          executor: __privateGet(this, _props13).executor,
          queryNode: SelectQueryNode.create(parseTableExpressionOrList(from), __privateGet(this, _props13).withNode)
        });
      }
      /**
       * Creates an insert query.
       *
       * The return value of this query is an instance of {@link InsertResult}. {@link InsertResult}
       * has the {@link InsertResult.insertId | insertId} field that holds the auto incremented id of
       * the inserted row if the db returned one.
       *
       * See the {@link InsertQueryBuilder.values | values} method for more info and examples. Also see
       * the {@link ReturningInterface.returning | returning} method for a way to return columns
       * on supported databases like PostgreSQL.
       *
       * ### Examples
       *
       * ```ts
       * const result = await db
       *   .insertInto('person')
       *   .values({
       *     first_name: 'Jennifer',
       *     last_name: 'Aniston'
       *   })
       *   .executeTakeFirst()
       *
       * console.log(result.insertId)
       * ```
       *
       * Some databases like PostgreSQL support the `returning` method:
       *
       * ```ts
       * const { id } = await db
       *   .insertInto('person')
       *   .values({
       *     first_name: 'Jennifer',
       *     last_name: 'Aniston'
       *   })
       *   .returning('id')
       *   .executeTakeFirst()
       * ```
       */
      insertInto(table) {
        return new InsertQueryBuilder({
          queryId: createQueryId(),
          executor: __privateGet(this, _props13).executor,
          queryNode: InsertQueryNode.create(parseTable(table), __privateGet(this, _props13).withNode)
        });
      }
      /**
       * Creates a replace query.
       *
       * A MySQL-only statement similar to {@link InsertQueryBuilder.onDuplicateKeyUpdate}
       * that deletes and inserts values on collision instead of updating existing rows.
       *
       * The return value of this query is an instance of {@link InsertResult}. {@link InsertResult}
       * has the {@link InsertResult.insertId | insertId} field that holds the auto incremented id of
       * the inserted row if the db returned one.
       *
       * See the {@link InsertQueryBuilder.values | values} method for more info and examples.
       *
       * ### Examples
       *
       * ```ts
       * const result = await db
       *   .replaceInto('person')
       *   .values({
       *     first_name: 'Jennifer',
       *     last_name: 'Aniston'
       *   })
       *   .executeTakeFirst()
       *
       * console.log(result.insertId)
       * ```
       */
      replaceInto(table) {
        return new InsertQueryBuilder({
          queryId: createQueryId(),
          executor: __privateGet(this, _props13).executor,
          queryNode: InsertQueryNode.create(parseTable(table), __privateGet(this, _props13).withNode, true)
        });
      }
      deleteFrom(tables) {
        return new DeleteQueryBuilder({
          queryId: createQueryId(),
          executor: __privateGet(this, _props13).executor,
          queryNode: DeleteQueryNode.create(parseTableExpressionOrList(tables), __privateGet(this, _props13).withNode)
        });
      }
      /**
       * Creates an update query.
       *
       * See the {@link UpdateQueryBuilder.where} method for examples on how to specify
       * a where clause for the update operation.
       *
       * See the {@link UpdateQueryBuilder.set} method for examples on how to
       * specify the updates.
       *
       * The return value of the query is an {@link UpdateResult}.
       *
       * ### Examples
       *
       * ```ts
       * const result = await db
       *   .updateTable('person')
       *   .set({ first_name: 'Jennifer' })
       *   .where('person.id', '=', 1)
       *   .executeTakeFirst()
       *
       * console.log(result.numUpdatedRows)
       * ```
       */
      updateTable(table) {
        return new UpdateQueryBuilder({
          queryId: createQueryId(),
          executor: __privateGet(this, _props13).executor,
          queryNode: UpdateQueryNode.create(parseTableExpression(table), __privateGet(this, _props13).withNode)
        });
      }
      /**
       * Creates a `with` query (Common Table Expression).
       *
       * ### Examples
       *
       * ```ts
       * await db
       *   .with('jennifers', (db) => db
       *     .selectFrom('person')
       *     .where('first_name', '=', 'Jennifer')
       *     .select(['id', 'age'])
       *   )
       *   .with('adult_jennifers', (db) => db
       *     .selectFrom('jennifers')
       *     .where('age', '>', 18)
       *     .select(['id', 'age'])
       *   )
       *   .selectFrom('adult_jennifers')
       *   .where('age', '<', 60)
       *   .selectAll()
       *   .execute()
       * ```
       *
       * The CTE name can optionally specify column names in addition to
       * a name. In that case Kysely requires the expression to retun
       * rows with the same columns.
       *
       * ```ts
       * await db
       *   .with('jennifers(id, age)', (db) => db
       *     .selectFrom('person')
       *     .where('first_name', '=', 'Jennifer')
       *     // This is ok since we return columns with the same
       *     // names as specified by `jennifers(id, age)`.
       *     .select(['id', 'age'])
       *   )
       *   .selectFrom('jennifers')
       *   .selectAll()
       *   .execute()
       * ```
       */
      with(name, expression) {
        const cte = parseCommonTableExpression(name, expression);
        return new _QueryCreator({
          ...__privateGet(this, _props13),
          withNode: __privateGet(this, _props13).withNode ? WithNode.cloneWithExpression(__privateGet(this, _props13).withNode, cte) : WithNode.create(cte)
        });
      }
      /**
       * Creates a recursive `with` query (Common Table Expression).
       *
       * See the {@link with} method for examples and more documentation.
       */
      withRecursive(name, expression) {
        const cte = parseCommonTableExpression(name, expression);
        return new _QueryCreator({
          ...__privateGet(this, _props13),
          withNode: __privateGet(this, _props13).withNode ? WithNode.cloneWithExpression(__privateGet(this, _props13).withNode, cte) : WithNode.create(cte, { recursive: true })
        });
      }
      /**
       * Returns a copy of this query creator instance with the given plugin installed.
       */
      withPlugin(plugin) {
        return new _QueryCreator({
          ...__privateGet(this, _props13),
          executor: __privateGet(this, _props13).executor.withPlugin(plugin)
        });
      }
      /**
       * Returns a copy of this query creator instance without any plugins.
       */
      withoutPlugins() {
        return new _QueryCreator({
          ...__privateGet(this, _props13),
          executor: __privateGet(this, _props13).executor.withoutPlugins()
        });
      }
      /**
       * Sets the schema to be used for all table references that don't explicitly
       * specify a schema.
       *
       * This only affects the query created through the builder returned from
       * this method and doesn't modify the `db` instance.
       *
       * See [this recipe](https://github.com/koskimas/kysely/tree/master/recipes/schemas.md)
       * for a more detailed explanation.
       *
       * ### Examples
       *
       * ```
       * await db
       *   .withSchema('mammals')
       *   .selectFrom('pet')
       *   .selectAll()
       *   .innerJoin('public.person', 'public.person.id', 'pet.owner_id')
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select * from "mammals"."pet"
       * inner join "public"."person"
       * on "public"."person"."id" = "mammals"."pet"."owner_id"
       * ```
       *
       * `withSchema` is smart enough to not add schema for aliases,
       * common table expressions or other places where the schema
       * doesn't belong to:
       *
       * ```
       * await db
       *   .withSchema('mammals')
       *   .selectFrom('pet as p')
       *   .select('p.name')
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select "p"."name" from "mammals"."pet" as "p"
       * ```
       */
      withSchema(schema) {
        return new _QueryCreator({
          ...__privateGet(this, _props13),
          executor: __privateGet(this, _props13).executor.withPluginAtFront(new WithSchemaPlugin(schema))
        });
      }
    };
    QueryCreator = _QueryCreator;
    _props13 = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/parser/parse-utils.js
function createSelectQueryBuilder() {
  return new SelectQueryBuilder({
    queryId: createQueryId(),
    executor: NOOP_QUERY_EXECUTOR,
    queryNode: SelectQueryNode.create(parseTableExpressionOrList([]))
  });
}
function createExpressionBuilder() {
  return new ExpressionBuilder({
    executor: NOOP_QUERY_EXECUTOR
  });
}
function createQueryCreator() {
  return new QueryCreator({
    executor: NOOP_QUERY_EXECUTOR
  });
}
function createJoinBuilder(joinType, table) {
  return new JoinBuilder({
    joinNode: JoinNode.create(joinType, parseTableExpression(table))
  });
}
function createOverBuilder() {
  return new OverBuilder({
    overNode: OverNode.create()
  });
}
var init_parse_utils = __esm({
  "node_modules/kysely/dist/esm/parser/parse-utils.js"() {
    init_join_node();
    init_over_node();
    init_select_query_node();
    init_expression_builder();
    init_join_builder();
    init_over_builder();
    init_select_query_builder();
    init_query_creator();
    init_noop_query_executor();
    init_query_id();
    init_table_parser();
  }
});

// node_modules/kysely/dist/esm/parser/expression-parser.js
function parseExpression(exp) {
  if (isOperationNodeSource(exp)) {
    return exp.toOperationNode();
  } else if (isFunction(exp)) {
    return exp(createExpressionBuilder()).toOperationNode();
  }
  throw new Error(`invalid expression: ${JSON.stringify(exp)}`);
}
function parseAliasedExpression(exp) {
  if (isOperationNodeSource(exp)) {
    return exp.toOperationNode();
  } else if (isFunction(exp)) {
    return exp(createExpressionBuilder()).toOperationNode();
  }
  throw new Error(`invalid aliased expression: ${JSON.stringify(exp)}`);
}
function isExpressionOrFactory(obj) {
  return isExpression(obj) || isAliasedExpression(obj) || isFunction(obj);
}
var init_expression_parser = __esm({
  "node_modules/kysely/dist/esm/parser/expression-parser.js"() {
    init_expression();
    init_operation_node_source();
    init_object_utils();
    init_parse_utils();
  }
});

// node_modules/kysely/dist/esm/parser/table-parser.js
function parseTableExpressionOrList(table) {
  if (isReadonlyArray(table)) {
    return table.map((it) => parseTableExpression(it));
  } else {
    return [parseTableExpression(table)];
  }
}
function parseTableExpression(table) {
  if (isString(table)) {
    return parseAliasedTable(table);
  } else {
    return parseAliasedExpression(table);
  }
}
function parseAliasedTable(from) {
  const ALIAS_SEPARATOR = " as ";
  if (from.includes(ALIAS_SEPARATOR)) {
    const [table, alias] = from.split(ALIAS_SEPARATOR).map(trim2);
    return AliasNode.create(parseTable(table), IdentifierNode.create(alias));
  } else {
    return parseTable(from);
  }
}
function parseTable(from) {
  const SCHEMA_SEPARATOR = ".";
  if (from.includes(SCHEMA_SEPARATOR)) {
    const [schema, table] = from.split(SCHEMA_SEPARATOR).map(trim2);
    return TableNode.createWithSchema(schema, table);
  } else {
    return TableNode.create(from);
  }
}
function trim2(str) {
  return str.trim();
}
var init_table_parser = __esm({
  "node_modules/kysely/dist/esm/parser/table-parser.js"() {
    init_object_utils();
    init_alias_node();
    init_table_node();
    init_expression_parser();
    init_identifier_node();
  }
});

// node_modules/kysely/dist/esm/operation-node/add-column-node.js
var AddColumnNode;
var init_add_column_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/add-column-node.js"() {
    init_object_utils();
    AddColumnNode = freeze({
      is(node) {
        return node.kind === "AddColumnNode";
      },
      create(column) {
        return freeze({
          kind: "AddColumnNode",
          column
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/alter-column-node.js
var AlterColumnNode;
var init_alter_column_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/alter-column-node.js"() {
    init_object_utils();
    init_column_node();
    AlterColumnNode = freeze({
      is(node) {
        return node.kind === "AlterColumnNode";
      },
      create(column) {
        return freeze({
          kind: "AlterColumnNode",
          column: ColumnNode.create(column)
        });
      },
      cloneWith(node, props) {
        return freeze({
          ...node,
          ...props
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/column-definition-node.js
var ColumnDefinitionNode;
var init_column_definition_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/column-definition-node.js"() {
    init_object_utils();
    init_column_node();
    ColumnDefinitionNode = freeze({
      is(node) {
        return node.kind === "ColumnDefinitionNode";
      },
      create(column, dataType) {
        return freeze({
          kind: "ColumnDefinitionNode",
          column: ColumnNode.create(column),
          dataType
        });
      },
      cloneWithFrontModifier(node, modifier) {
        return freeze({
          ...node,
          frontModifiers: node.frontModifiers ? freeze([...node.frontModifiers, modifier]) : [modifier]
        });
      },
      cloneWithEndModifier(node, modifier) {
        return freeze({
          ...node,
          endModifiers: node.endModifiers ? freeze([...node.endModifiers, modifier]) : [modifier]
        });
      },
      cloneWith(node, props) {
        return freeze({
          ...node,
          ...props
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/drop-column-node.js
var DropColumnNode;
var init_drop_column_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/drop-column-node.js"() {
    init_object_utils();
    init_column_node();
    DropColumnNode = freeze({
      is(node) {
        return node.kind === "DropColumnNode";
      },
      create(column) {
        return freeze({
          kind: "DropColumnNode",
          column: ColumnNode.create(column)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/rename-column-node.js
var RenameColumnNode;
var init_rename_column_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/rename-column-node.js"() {
    init_object_utils();
    init_column_node();
    RenameColumnNode = freeze({
      is(node) {
        return node.kind === "RenameColumnNode";
      },
      create(column, newColumn) {
        return freeze({
          kind: "RenameColumnNode",
          column: ColumnNode.create(column),
          renameTo: ColumnNode.create(newColumn)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/check-constraint-node.js
var CheckConstraintNode;
var init_check_constraint_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/check-constraint-node.js"() {
    init_object_utils();
    init_identifier_node();
    CheckConstraintNode = freeze({
      is(node) {
        return node.kind === "CheckConstraintNode";
      },
      create(expression, constraintName) {
        return freeze({
          kind: "CheckConstraintNode",
          expression,
          name: constraintName ? IdentifierNode.create(constraintName) : void 0
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/references-node.js
var ON_MODIFY_FOREIGN_ACTIONS, ReferencesNode;
var init_references_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/references-node.js"() {
    init_object_utils();
    ON_MODIFY_FOREIGN_ACTIONS = [
      "no action",
      "restrict",
      "cascade",
      "set null",
      "set default"
    ];
    ReferencesNode = freeze({
      is(node) {
        return node.kind === "ReferencesNode";
      },
      create(table, columns) {
        return freeze({
          kind: "ReferencesNode",
          table,
          columns: freeze([...columns])
        });
      },
      cloneWithOnDelete(references, onDelete) {
        return freeze({
          ...references,
          onDelete
        });
      },
      cloneWithOnUpdate(references, onUpdate) {
        return freeze({
          ...references,
          onUpdate
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/parser/default-value-parser.js
function parseDefaultValueExpression(value) {
  return isOperationNodeSource(value) ? value.toOperationNode() : ValueNode.createImmediate(value);
}
var init_default_value_parser = __esm({
  "node_modules/kysely/dist/esm/parser/default-value-parser.js"() {
    init_operation_node_source();
    init_value_node();
  }
});

// node_modules/kysely/dist/esm/operation-node/generated-node.js
var GeneratedNode;
var init_generated_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/generated-node.js"() {
    init_object_utils();
    GeneratedNode = freeze({
      is(node) {
        return node.kind === "GeneratedNode";
      },
      create(params) {
        return freeze({
          kind: "GeneratedNode",
          ...params
        });
      },
      createWithExpression(expression) {
        return freeze({
          kind: "GeneratedNode",
          always: true,
          expression
        });
      },
      cloneWith(node, params) {
        return freeze({
          ...node,
          ...params
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/default-value-node.js
var DefaultValueNode;
var init_default_value_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/default-value-node.js"() {
    init_object_utils();
    DefaultValueNode = freeze({
      is(node) {
        return node.kind === "DefaultValueNode";
      },
      create(defaultValue) {
        return freeze({
          kind: "DefaultValueNode",
          defaultValue
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/parser/on-modify-action-parser.js
function parseOnModifyForeignAction(action) {
  if (ON_MODIFY_FOREIGN_ACTIONS.includes(action)) {
    return action;
  }
  throw new Error(`invalid OnModifyForeignAction ${action}`);
}
var init_on_modify_action_parser = __esm({
  "node_modules/kysely/dist/esm/parser/on-modify-action-parser.js"() {
    init_references_node();
  }
});

// node_modules/kysely/dist/esm/schema/column-definition-builder.js
var _node, _ColumnDefinitionBuilder, ColumnDefinitionBuilder;
var init_column_definition_builder = __esm({
  "node_modules/kysely/dist/esm/schema/column-definition-builder.js"() {
    init_check_constraint_node();
    init_reference_node();
    init_references_node();
    init_select_all_node();
    init_reference_parser();
    init_prevent_await();
    init_column_definition_node();
    init_default_value_parser();
    init_generated_node();
    init_default_value_node();
    init_on_modify_action_parser();
    _ColumnDefinitionBuilder = class {
      constructor(node) {
        __privateAdd(this, _node, void 0);
        __privateSet(this, _node, node);
      }
      /**
       * Adds `auto_increment` or `autoincrement` to the column definition
       * depending on the dialect.
       *
       * Some dialects like PostgreSQL don't support this. On PostgreSQL
       * you can use the `serial` or `bigserial` data type instead.
       */
      autoIncrement() {
        return new _ColumnDefinitionBuilder(ColumnDefinitionNode.cloneWith(__privateGet(this, _node), { autoIncrement: true }));
      }
      /**
       * Makes the column the primary key.
       *
       * If you want to specify a composite primary key use the
       * {@link CreateTableBuilder.addPrimaryKeyConstraint} method.
       */
      primaryKey() {
        return new _ColumnDefinitionBuilder(ColumnDefinitionNode.cloneWith(__privateGet(this, _node), { primaryKey: true }));
      }
      /**
       * Adds a foreign key constraint for the column.
       *
       * If your database engine doesn't support foreign key constraints in the
       * column definition (like MySQL 5) you need to call the table level
       * {@link CreateTableBuilder.addForeignKeyConstraint} method instead.
       *
       * ### Examples
       *
       * ```ts
       * col.references('person.id')
       * ```
       */
      references(ref) {
        const references = parseStringReference(ref);
        if (!ReferenceNode.is(references) || SelectAllNode.is(references.column)) {
          throw new Error(`invalid call references('${ref}'). The reference must have format table.column or schema.table.column`);
        }
        return new _ColumnDefinitionBuilder(ColumnDefinitionNode.cloneWith(__privateGet(this, _node), {
          references: ReferencesNode.create(references.table, [
            references.column
          ])
        }));
      }
      /**
       * Adds an `on delete` constraint for the foreign key column.
       *
       * If your database engine doesn't support foreign key constraints in the
       * column definition (like MySQL 5) you need to call the table level
       * {@link CreateTableBuilder.addForeignKeyConstraint} method instead.
       *
       * ### Examples
       *
       * ```ts
       * col.references('person.id').onDelete('cascade')
       * ```
       */
      onDelete(onDelete) {
        if (!__privateGet(this, _node).references) {
          throw new Error("on delete constraint can only be added for foreign keys");
        }
        return new _ColumnDefinitionBuilder(ColumnDefinitionNode.cloneWith(__privateGet(this, _node), {
          references: ReferencesNode.cloneWithOnDelete(__privateGet(this, _node).references, parseOnModifyForeignAction(onDelete))
        }));
      }
      /**
       * Adds an `on update` constraint for the foreign key column.
       *
       * ### Examples
       *
       * ```ts
       * col.references('person.id').onUpdate('cascade')
       * ```
       */
      onUpdate(onUpdate) {
        if (!__privateGet(this, _node).references) {
          throw new Error("on update constraint can only be added for foreign keys");
        }
        return new _ColumnDefinitionBuilder(ColumnDefinitionNode.cloneWith(__privateGet(this, _node), {
          references: ReferencesNode.cloneWithOnUpdate(__privateGet(this, _node).references, parseOnModifyForeignAction(onUpdate))
        }));
      }
      /**
       * Adds a unique constraint for the column.
       */
      unique() {
        return new _ColumnDefinitionBuilder(ColumnDefinitionNode.cloneWith(__privateGet(this, _node), { unique: true }));
      }
      /**
       * Adds a `not null` constraint for the column.
       */
      notNull() {
        return new _ColumnDefinitionBuilder(ColumnDefinitionNode.cloneWith(__privateGet(this, _node), { notNull: true }));
      }
      /**
       * Adds a `unsigned` modifier for the column.
       *
       * This only works on some dialects like MySQL.
       */
      unsigned() {
        return new _ColumnDefinitionBuilder(ColumnDefinitionNode.cloneWith(__privateGet(this, _node), { unsigned: true }));
      }
      /**
       * Adds a default value constraint for the column.
       *
       * ### Examples
       *
       * ```ts
       * db.schema
       *   .createTable('pet')
       *   .addColumn('number_of_legs', 'integer', (col) => col.defaultTo(4))
       *   .execute()
       * ```
       *
       * Values passed to `defaultTo` are interpreted as value literals by default. You can define
       * an arbitrary SQL expression using the {@link sql} template tag:
       *
       * ```ts
       * import { sql } from 'kysely'
       *
       * db.schema
       *   .createTable('pet')
       *   .addColumn(
       *     'number_of_legs',
       *     'integer',
       *     (col) => col.defaultTo(sql`any SQL here`)
       *   )
       *   .execute()
       * ```
       */
      defaultTo(value) {
        return new _ColumnDefinitionBuilder(ColumnDefinitionNode.cloneWith(__privateGet(this, _node), {
          defaultTo: DefaultValueNode.create(parseDefaultValueExpression(value))
        }));
      }
      /**
       * Adds a check constraint for the column.
       *
       * ### Examples
       *
       * ```ts
       * import { sql } from 'kysely'
       *
       * db.schema
       *   .createTable('pet')
       *   .addColumn('number_of_legs', 'integer', (col) =>
       *     col.check(sql`number_of_legs < 5`)
       *   )
       *   .execute()
       * ```
       */
      check(expression) {
        return new _ColumnDefinitionBuilder(ColumnDefinitionNode.cloneWith(__privateGet(this, _node), {
          check: CheckConstraintNode.create(expression.toOperationNode())
        }));
      }
      /**
       * Makes the column a generated column using a `generated always as` statement.
       *
       * ### Examples
       *
       * ```ts
       * import { sql } from 'kysely'
       *
       * db.schema
       *   .createTable('person')
       *   .addColumn('full_name', 'varchar(255)',
       *     (col) => col.generatedAlwaysAs(sql`concat(first_name, ' ', last_name)`)
       *   )
       *   .execute()
       * ```
       */
      generatedAlwaysAs(expression) {
        return new _ColumnDefinitionBuilder(ColumnDefinitionNode.cloneWith(__privateGet(this, _node), {
          generated: GeneratedNode.createWithExpression(expression.toOperationNode())
        }));
      }
      /**
       * Adds the `generated always as identity` specifier on supported dialects.
       */
      generatedAlwaysAsIdentity() {
        return new _ColumnDefinitionBuilder(ColumnDefinitionNode.cloneWith(__privateGet(this, _node), {
          generated: GeneratedNode.create({ identity: true, always: true })
        }));
      }
      /**
       * Adds the `generated by default as identity` specifier on supported dialects.
       */
      generatedByDefaultAsIdentity() {
        return new _ColumnDefinitionBuilder(ColumnDefinitionNode.cloneWith(__privateGet(this, _node), {
          generated: GeneratedNode.create({ identity: true, byDefault: true })
        }));
      }
      /**
       * Makes a generated column stored instead of virtual. This method can only
       * be used with {@link generatedAlwaysAs}
       *
       * ### Examples
       *
       * ```ts
       * db.schema
       *   .createTable('person')
       *   .addColumn('full_name', 'varchar(255)', (col) => col
       *     .generatedAlwaysAs("concat(first_name, ' ', last_name)")
       *     .stored()
       *   )
       *   .execute()
       * ```
       */
      stored() {
        if (!__privateGet(this, _node).generated) {
          throw new Error("stored() can only be called after generatedAlwaysAs");
        }
        return new _ColumnDefinitionBuilder(ColumnDefinitionNode.cloneWith(__privateGet(this, _node), {
          generated: GeneratedNode.cloneWith(__privateGet(this, _node).generated, {
            stored: true
          })
        }));
      }
      /**
       * This can be used to add any additional SQL right after the column's data type.
       *
       * ### Examples
       *
       * ```ts
       * db.schema.createTable('person')
       *  .addColumn('id', 'integer', col => col.primaryKey())
       *  .addColumn('first_name', 'varchar(36)', col => col.modifyFront(sql`collate utf8mb4_general_ci`).notNull())
       *  .execute()
       * ```
       *
       * The generated SQL (MySQL):
       *
       * ```sql
       * create table `person` (
       *   `id` integer primary key,
       *   `first_name` varchar(36) collate utf8mb4_general_ci not null
       * )
       * ```
       */
      modifyFront(modifier) {
        return new _ColumnDefinitionBuilder(ColumnDefinitionNode.cloneWithFrontModifier(__privateGet(this, _node), modifier.toOperationNode()));
      }
      /**
       * This can be used to add any additional SQL to the end of the column definition.
       *
       * ### Examples
       *
       * ```ts
       * db.schema.createTable('person')
       *  .addColumn('id', 'integer', col => col.primaryKey())
       *  .addColumn('age', 'integer', col => col.unsigned().notNull().modifyEnd(sql`comment ${sql.literal('it is not polite to ask a woman her age')}`))
       *  .execute()
       * ```
       *
       * The generated SQL (MySQL):
       *
       * ```sql
       * create table `person` (
       *   `id` integer primary key,
       *   `age` integer unsigned not null comment 'it is not polite to ask a woman her age'
       * )
       * ```
       */
      modifyEnd(modifier) {
        return new _ColumnDefinitionBuilder(ColumnDefinitionNode.cloneWithEndModifier(__privateGet(this, _node), modifier.toOperationNode()));
      }
      toOperationNode() {
        return __privateGet(this, _node);
      }
    };
    ColumnDefinitionBuilder = _ColumnDefinitionBuilder;
    _node = new WeakMap();
    preventAwait(ColumnDefinitionBuilder, "don't await ColumnDefinitionBuilder instances directly.");
  }
});

// node_modules/kysely/dist/esm/operation-node/modify-column-node.js
var ModifyColumnNode;
var init_modify_column_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/modify-column-node.js"() {
    init_object_utils();
    ModifyColumnNode = freeze({
      is(node) {
        return node.kind === "ModifyColumnNode";
      },
      create(column) {
        return freeze({
          kind: "ModifyColumnNode",
          column
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/data-type-node.js
var DataTypeNode;
var init_data_type_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/data-type-node.js"() {
    init_object_utils();
    DataTypeNode = freeze({
      is(node) {
        return node.kind === "DataTypeNode";
      },
      create(dataType) {
        return freeze({
          kind: "DataTypeNode",
          dataType
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/parser/data-type-parser.js
function parseDataTypeExpression(dataType) {
  return isOperationNodeSource(dataType) ? dataType.toOperationNode() : DataTypeNode.create(dataType);
}
var init_data_type_parser = __esm({
  "node_modules/kysely/dist/esm/parser/data-type-parser.js"() {
    init_data_type_node();
    init_operation_node_source();
  }
});

// node_modules/kysely/dist/esm/operation-node/foreign-key-constraint-node.js
var ForeignKeyConstraintNode;
var init_foreign_key_constraint_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/foreign-key-constraint-node.js"() {
    init_object_utils();
    init_identifier_node();
    init_references_node();
    ForeignKeyConstraintNode = freeze({
      is(node) {
        return node.kind === "ForeignKeyConstraintNode";
      },
      create(sourceColumns, targetTable, targetColumns, constraintName) {
        return freeze({
          kind: "ForeignKeyConstraintNode",
          columns: sourceColumns,
          references: ReferencesNode.create(targetTable, targetColumns),
          name: constraintName ? IdentifierNode.create(constraintName) : void 0
        });
      },
      cloneWith(node, props) {
        return freeze({
          ...node,
          ...props
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/schema/foreign-key-constraint-builder.js
var _node2, _ForeignKeyConstraintBuilder, ForeignKeyConstraintBuilder;
var init_foreign_key_constraint_builder = __esm({
  "node_modules/kysely/dist/esm/schema/foreign-key-constraint-builder.js"() {
    init_foreign_key_constraint_node();
    init_on_modify_action_parser();
    init_prevent_await();
    _ForeignKeyConstraintBuilder = class {
      constructor(node) {
        __privateAdd(this, _node2, void 0);
        __privateSet(this, _node2, node);
      }
      onDelete(onDelete) {
        return new _ForeignKeyConstraintBuilder(ForeignKeyConstraintNode.cloneWith(__privateGet(this, _node2), {
          onDelete: parseOnModifyForeignAction(onDelete)
        }));
      }
      onUpdate(onUpdate) {
        return new _ForeignKeyConstraintBuilder(ForeignKeyConstraintNode.cloneWith(__privateGet(this, _node2), {
          onUpdate: parseOnModifyForeignAction(onUpdate)
        }));
      }
      toOperationNode() {
        return __privateGet(this, _node2);
      }
    };
    ForeignKeyConstraintBuilder = _ForeignKeyConstraintBuilder;
    _node2 = new WeakMap();
    preventAwait(ForeignKeyConstraintBuilder, "don't await ForeignKeyConstraintBuilder instances directly.");
  }
});

// node_modules/kysely/dist/esm/operation-node/add-constraint-node.js
var AddConstraintNode;
var init_add_constraint_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/add-constraint-node.js"() {
    init_object_utils();
    AddConstraintNode = freeze({
      is(node) {
        return node.kind === "AddConstraintNode";
      },
      create(constraint) {
        return freeze({
          kind: "AddConstraintNode",
          constraint
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/unique-constraint-node.js
var UniqueConstraintNode;
var init_unique_constraint_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/unique-constraint-node.js"() {
    init_object_utils();
    init_column_node();
    init_identifier_node();
    UniqueConstraintNode = freeze({
      is(node) {
        return node.kind === "UniqueConstraintNode";
      },
      create(columns, constraintName) {
        return freeze({
          kind: "UniqueConstraintNode",
          columns: freeze(columns.map(ColumnNode.create)),
          name: constraintName ? IdentifierNode.create(constraintName) : void 0
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/operation-node/drop-constraint-node.js
var DropConstraintNode;
var init_drop_constraint_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/drop-constraint-node.js"() {
    init_object_utils();
    init_identifier_node();
    DropConstraintNode = freeze({
      is(node) {
        return node.kind === "DropConstraintNode";
      },
      create(constraintName) {
        return freeze({
          kind: "DropConstraintNode",
          constraintName: IdentifierNode.create(constraintName)
        });
      },
      cloneWith(dropConstraint, props) {
        return freeze({
          ...dropConstraint,
          ...props
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/schema/alter-column-builder.js
var AlterColumnBuilder, AlteredColumnBuilder;
var init_alter_column_builder = __esm({
  "node_modules/kysely/dist/esm/schema/alter-column-builder.js"() {
    init_alter_column_node();
    init_data_type_node();
    init_default_value_parser();
    AlterColumnBuilder = class {
      constructor(alterColumnNode) {
        __publicField(this, "alterColumnNode");
        this.alterColumnNode = alterColumnNode;
      }
      setDataType(dataType) {
        return new AlteredColumnBuilder(AlterColumnNode.cloneWith(this.alterColumnNode, {
          dataType: DataTypeNode.create(dataType)
        }));
      }
      setDefault(value) {
        return new AlteredColumnBuilder(AlterColumnNode.cloneWith(this.alterColumnNode, {
          setDefault: parseDefaultValueExpression(value)
        }));
      }
      dropDefault() {
        return new AlteredColumnBuilder(AlterColumnNode.cloneWith(this.alterColumnNode, {
          dropDefault: true
        }));
      }
      setNotNull() {
        return new AlteredColumnBuilder(AlterColumnNode.cloneWith(this.alterColumnNode, {
          setNotNull: true
        }));
      }
      dropNotNull() {
        return new AlteredColumnBuilder(AlterColumnNode.cloneWith(this.alterColumnNode, {
          dropNotNull: true
        }));
      }
    };
    AlteredColumnBuilder = class extends AlterColumnBuilder {
      toOperationNode() {
        return this.alterColumnNode;
      }
    };
  }
});

// node_modules/kysely/dist/esm/schema/alter-table-executor.js
var _props14, AlterTableExecutor;
var init_alter_table_executor = __esm({
  "node_modules/kysely/dist/esm/schema/alter-table-executor.js"() {
    init_object_utils();
    init_prevent_await();
    AlterTableExecutor = class {
      constructor(props) {
        __privateAdd(this, _props14, void 0);
        __privateSet(this, _props14, freeze(props));
      }
      toOperationNode() {
        return __privateGet(this, _props14).executor.transformQuery(__privateGet(this, _props14).node, __privateGet(this, _props14).queryId);
      }
      compile() {
        return __privateGet(this, _props14).executor.compileQuery(this.toOperationNode(), __privateGet(this, _props14).queryId);
      }
      async execute() {
        await __privateGet(this, _props14).executor.executeQuery(this.compile(), __privateGet(this, _props14).queryId);
      }
    };
    _props14 = new WeakMap();
    preventAwait(AlterTableExecutor, "don't await AlterTableExecutor instances directly. To execute the query you need to call `execute`");
  }
});

// node_modules/kysely/dist/esm/schema/alter-table-add-foreign-key-constraint-builder.js
var _props15, _AlterTableAddForeignKeyConstraintBuilder, AlterTableAddForeignKeyConstraintBuilder;
var init_alter_table_add_foreign_key_constraint_builder = __esm({
  "node_modules/kysely/dist/esm/schema/alter-table-add-foreign-key-constraint-builder.js"() {
    init_add_constraint_node();
    init_alter_table_node();
    init_object_utils();
    init_prevent_await();
    _AlterTableAddForeignKeyConstraintBuilder = class {
      constructor(props) {
        __privateAdd(this, _props15, void 0);
        __privateSet(this, _props15, freeze(props));
      }
      onDelete(onDelete) {
        return new _AlterTableAddForeignKeyConstraintBuilder({
          ...__privateGet(this, _props15),
          constraintBuilder: __privateGet(this, _props15).constraintBuilder.onDelete(onDelete)
        });
      }
      onUpdate(onUpdate) {
        return new _AlterTableAddForeignKeyConstraintBuilder({
          ...__privateGet(this, _props15),
          constraintBuilder: __privateGet(this, _props15).constraintBuilder.onUpdate(onUpdate)
        });
      }
      toOperationNode() {
        return __privateGet(this, _props15).executor.transformQuery(AlterTableNode.cloneWithTableProps(__privateGet(this, _props15).node, {
          addConstraint: AddConstraintNode.create(__privateGet(this, _props15).constraintBuilder.toOperationNode())
        }), __privateGet(this, _props15).queryId);
      }
      compile() {
        return __privateGet(this, _props15).executor.compileQuery(this.toOperationNode(), __privateGet(this, _props15).queryId);
      }
      async execute() {
        await __privateGet(this, _props15).executor.executeQuery(this.compile(), __privateGet(this, _props15).queryId);
      }
    };
    AlterTableAddForeignKeyConstraintBuilder = _AlterTableAddForeignKeyConstraintBuilder;
    _props15 = new WeakMap();
    preventAwait(AlterTableAddForeignKeyConstraintBuilder, "don't await AlterTableAddForeignKeyConstraintBuilder instances directly. To execute the query you need to call `execute`");
  }
});

// node_modules/kysely/dist/esm/schema/alter-table-drop-constraint-builder.js
var _props16, _AlterTableDropConstraintBuilder, AlterTableDropConstraintBuilder;
var init_alter_table_drop_constraint_builder = __esm({
  "node_modules/kysely/dist/esm/schema/alter-table-drop-constraint-builder.js"() {
    init_alter_table_node();
    init_drop_constraint_node();
    init_object_utils();
    init_prevent_await();
    _AlterTableDropConstraintBuilder = class {
      constructor(props) {
        __privateAdd(this, _props16, void 0);
        __privateSet(this, _props16, freeze(props));
      }
      ifExists() {
        return new _AlterTableDropConstraintBuilder({
          ...__privateGet(this, _props16),
          node: AlterTableNode.cloneWithTableProps(__privateGet(this, _props16).node, {
            dropConstraint: DropConstraintNode.cloneWith(__privateGet(this, _props16).node.dropConstraint, {
              ifExists: true
            })
          })
        });
      }
      cascade() {
        return new _AlterTableDropConstraintBuilder({
          ...__privateGet(this, _props16),
          node: AlterTableNode.cloneWithTableProps(__privateGet(this, _props16).node, {
            dropConstraint: DropConstraintNode.cloneWith(__privateGet(this, _props16).node.dropConstraint, {
              modifier: "cascade"
            })
          })
        });
      }
      restrict() {
        return new _AlterTableDropConstraintBuilder({
          ...__privateGet(this, _props16),
          node: AlterTableNode.cloneWithTableProps(__privateGet(this, _props16).node, {
            dropConstraint: DropConstraintNode.cloneWith(__privateGet(this, _props16).node.dropConstraint, {
              modifier: "restrict"
            })
          })
        });
      }
      toOperationNode() {
        return __privateGet(this, _props16).executor.transformQuery(__privateGet(this, _props16).node, __privateGet(this, _props16).queryId);
      }
      compile() {
        return __privateGet(this, _props16).executor.compileQuery(this.toOperationNode(), __privateGet(this, _props16).queryId);
      }
      async execute() {
        await __privateGet(this, _props16).executor.executeQuery(this.compile(), __privateGet(this, _props16).queryId);
      }
    };
    AlterTableDropConstraintBuilder = _AlterTableDropConstraintBuilder;
    _props16 = new WeakMap();
    preventAwait(AlterTableDropConstraintBuilder, "don't await AlterTableDropConstraintBuilder instances directly. To execute the query you need to call `execute`");
  }
});

// node_modules/kysely/dist/esm/schema/alter-table-builder.js
var _props17, AlterTableBuilder, _props18, _AlterTableColumnAlteringBuilder, AlterTableColumnAlteringBuilder;
var init_alter_table_builder = __esm({
  "node_modules/kysely/dist/esm/schema/alter-table-builder.js"() {
    init_add_column_node();
    init_alter_column_node();
    init_alter_table_node();
    init_column_definition_node();
    init_drop_column_node();
    init_identifier_node();
    init_rename_column_node();
    init_object_utils();
    init_prevent_await();
    init_column_definition_builder();
    init_modify_column_node();
    init_data_type_parser();
    init_foreign_key_constraint_builder();
    init_add_constraint_node();
    init_unique_constraint_node();
    init_check_constraint_node();
    init_foreign_key_constraint_node();
    init_column_node();
    init_table_parser();
    init_drop_constraint_node();
    init_alter_column_builder();
    init_alter_table_executor();
    init_alter_table_add_foreign_key_constraint_builder();
    init_alter_table_drop_constraint_builder();
    AlterTableBuilder = class {
      constructor(props) {
        __privateAdd(this, _props17, void 0);
        __privateSet(this, _props17, freeze(props));
      }
      renameTo(newTableName) {
        return new AlterTableExecutor({
          ...__privateGet(this, _props17),
          node: AlterTableNode.cloneWithTableProps(__privateGet(this, _props17).node, {
            renameTo: parseTable(newTableName)
          })
        });
      }
      setSchema(newSchema) {
        return new AlterTableExecutor({
          ...__privateGet(this, _props17),
          node: AlterTableNode.cloneWithTableProps(__privateGet(this, _props17).node, {
            setSchema: IdentifierNode.create(newSchema)
          })
        });
      }
      alterColumn(column, alteration) {
        const builder = alteration(new AlterColumnBuilder(AlterColumnNode.create(column)));
        return new AlterTableColumnAlteringBuilder({
          ...__privateGet(this, _props17),
          node: AlterTableNode.cloneWithColumnAlteration(__privateGet(this, _props17).node, builder.toOperationNode())
        });
      }
      dropColumn(column) {
        return new AlterTableColumnAlteringBuilder({
          ...__privateGet(this, _props17),
          node: AlterTableNode.cloneWithColumnAlteration(__privateGet(this, _props17).node, DropColumnNode.create(column))
        });
      }
      renameColumn(column, newColumn) {
        return new AlterTableColumnAlteringBuilder({
          ...__privateGet(this, _props17),
          node: AlterTableNode.cloneWithColumnAlteration(__privateGet(this, _props17).node, RenameColumnNode.create(column, newColumn))
        });
      }
      addColumn(columnName, dataType, build = noop2) {
        const builder = build(new ColumnDefinitionBuilder(ColumnDefinitionNode.create(columnName, parseDataTypeExpression(dataType))));
        return new AlterTableColumnAlteringBuilder({
          ...__privateGet(this, _props17),
          node: AlterTableNode.cloneWithColumnAlteration(__privateGet(this, _props17).node, AddColumnNode.create(builder.toOperationNode()))
        });
      }
      modifyColumn(columnName, dataType, build = noop2) {
        const builder = build(new ColumnDefinitionBuilder(ColumnDefinitionNode.create(columnName, parseDataTypeExpression(dataType))));
        return new AlterTableColumnAlteringBuilder({
          ...__privateGet(this, _props17),
          node: AlterTableNode.cloneWithColumnAlteration(__privateGet(this, _props17).node, ModifyColumnNode.create(builder.toOperationNode()))
        });
      }
      /**
       * See {@link CreateTableBuilder.addUniqueConstraint}
       */
      addUniqueConstraint(constraintName, columns) {
        return new AlterTableExecutor({
          ...__privateGet(this, _props17),
          node: AlterTableNode.cloneWithTableProps(__privateGet(this, _props17).node, {
            addConstraint: AddConstraintNode.create(UniqueConstraintNode.create(columns, constraintName))
          })
        });
      }
      /**
       * See {@link CreateTableBuilder.addCheckConstraint}
       */
      addCheckConstraint(constraintName, checkExpression) {
        return new AlterTableExecutor({
          ...__privateGet(this, _props17),
          node: AlterTableNode.cloneWithTableProps(__privateGet(this, _props17).node, {
            addConstraint: AddConstraintNode.create(CheckConstraintNode.create(checkExpression.toOperationNode(), constraintName))
          })
        });
      }
      /**
       * See {@link CreateTableBuilder.addForeignKeyConstraint}
       *
       * Unlike {@link CreateTableBuilder.addForeignKeyConstraint} this method returns
       * the constraint builder and doesn't take a callback as the last argument. This
       * is because you can only add one column per `ALTER TABLE` query.
       */
      addForeignKeyConstraint(constraintName, columns, targetTable, targetColumns) {
        return new AlterTableAddForeignKeyConstraintBuilder({
          ...__privateGet(this, _props17),
          constraintBuilder: new ForeignKeyConstraintBuilder(ForeignKeyConstraintNode.create(columns.map(ColumnNode.create), parseTable(targetTable), targetColumns.map(ColumnNode.create), constraintName))
        });
      }
      dropConstraint(constraintName) {
        return new AlterTableDropConstraintBuilder({
          ...__privateGet(this, _props17),
          node: AlterTableNode.cloneWithTableProps(__privateGet(this, _props17).node, {
            dropConstraint: DropConstraintNode.create(constraintName)
          })
        });
      }
      /**
       * Calls the given function passing `this` as the only argument.
       *
       * See {@link CreateTableBuilder.$call}
       */
      $call(func) {
        return func(this);
      }
      /**
       * @deprecated Use `$call` instead
       */
      call(func) {
        return this.$call(func);
      }
    };
    _props17 = new WeakMap();
    _AlterTableColumnAlteringBuilder = class {
      constructor(props) {
        __privateAdd(this, _props18, void 0);
        __privateSet(this, _props18, freeze(props));
      }
      alterColumn(column, alteration) {
        const builder = alteration(new AlterColumnBuilder(AlterColumnNode.create(column)));
        return new _AlterTableColumnAlteringBuilder({
          ...__privateGet(this, _props18),
          node: AlterTableNode.cloneWithColumnAlteration(__privateGet(this, _props18).node, builder.toOperationNode())
        });
      }
      dropColumn(column) {
        return new _AlterTableColumnAlteringBuilder({
          ...__privateGet(this, _props18),
          node: AlterTableNode.cloneWithColumnAlteration(__privateGet(this, _props18).node, DropColumnNode.create(column))
        });
      }
      renameColumn(column, newColumn) {
        return new _AlterTableColumnAlteringBuilder({
          ...__privateGet(this, _props18),
          node: AlterTableNode.cloneWithColumnAlteration(__privateGet(this, _props18).node, RenameColumnNode.create(column, newColumn))
        });
      }
      addColumn(columnName, dataType, build = noop2) {
        const builder = build(new ColumnDefinitionBuilder(ColumnDefinitionNode.create(columnName, parseDataTypeExpression(dataType))));
        return new _AlterTableColumnAlteringBuilder({
          ...__privateGet(this, _props18),
          node: AlterTableNode.cloneWithColumnAlteration(__privateGet(this, _props18).node, AddColumnNode.create(builder.toOperationNode()))
        });
      }
      modifyColumn(columnName, dataType, build = noop2) {
        const builder = build(new ColumnDefinitionBuilder(ColumnDefinitionNode.create(columnName, parseDataTypeExpression(dataType))));
        return new _AlterTableColumnAlteringBuilder({
          ...__privateGet(this, _props18),
          node: AlterTableNode.cloneWithColumnAlteration(__privateGet(this, _props18).node, ModifyColumnNode.create(builder.toOperationNode()))
        });
      }
      toOperationNode() {
        return __privateGet(this, _props18).executor.transformQuery(__privateGet(this, _props18).node, __privateGet(this, _props18).queryId);
      }
      compile() {
        return __privateGet(this, _props18).executor.compileQuery(this.toOperationNode(), __privateGet(this, _props18).queryId);
      }
      async execute() {
        await __privateGet(this, _props18).executor.executeQuery(this.compile(), __privateGet(this, _props18).queryId);
      }
    };
    AlterTableColumnAlteringBuilder = _AlterTableColumnAlteringBuilder;
    _props18 = new WeakMap();
    preventAwait(AlterTableBuilder, "don't await AlterTableBuilder instances");
    preventAwait(AlterColumnBuilder, "don't await AlterColumnBuilder instances");
    preventAwait(AlterTableColumnAlteringBuilder, "don't await AlterTableColumnAlteringBuilder instances directly. To execute the query you need to call `execute`");
  }
});

// node_modules/kysely/dist/esm/operation-node/list-node.js
var ListNode;
var init_list_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/list-node.js"() {
    init_object_utils();
    ListNode = freeze({
      is(node) {
        return node.kind === "ListNode";
      },
      create(items) {
        return freeze({
          kind: "ListNode",
          items: freeze(items)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/schema/create-index-builder.js
var _props19, _CreateIndexBuilder, CreateIndexBuilder;
var init_create_index_builder = __esm({
  "node_modules/kysely/dist/esm/schema/create-index-builder.js"() {
    init_create_index_node();
    init_list_node();
    init_raw_node();
    init_reference_parser();
    init_table_parser();
    init_prevent_await();
    init_object_utils();
    _CreateIndexBuilder = class {
      constructor(props) {
        __privateAdd(this, _props19, void 0);
        __privateSet(this, _props19, freeze(props));
      }
      /**
       * Adds the "if not exists" modifier.
       *
       * If the index already exists, no error is thrown if this method has been called.
       */
      ifNotExists() {
        return new _CreateIndexBuilder({
          ...__privateGet(this, _props19),
          node: CreateIndexNode.cloneWith(__privateGet(this, _props19).node, {
            ifNotExists: true
          })
        });
      }
      /**
       * Makes the index unique.
       */
      unique() {
        return new _CreateIndexBuilder({
          ...__privateGet(this, _props19),
          node: CreateIndexNode.cloneWith(__privateGet(this, _props19).node, {
            unique: true
          })
        });
      }
      /**
       * Specifies the table for the index.
       */
      on(table) {
        return new _CreateIndexBuilder({
          ...__privateGet(this, _props19),
          node: CreateIndexNode.cloneWith(__privateGet(this, _props19).node, {
            table: parseTable(table)
          })
        });
      }
      /**
       * Specifies the column for the index.
       *
       * Also see the `expression` for specifying an arbitrary expression.
       */
      column(column) {
        return new _CreateIndexBuilder({
          ...__privateGet(this, _props19),
          node: CreateIndexNode.cloneWith(__privateGet(this, _props19).node, {
            expression: parseColumnName(column)
          })
        });
      }
      /**
       * Specifies a list of columns for the index.
       *
       * Also see the `expression` for specifying an arbitrary expression.
       */
      columns(columns) {
        return new _CreateIndexBuilder({
          ...__privateGet(this, _props19),
          node: CreateIndexNode.cloneWith(__privateGet(this, _props19).node, {
            expression: ListNode.create(columns.map(parseColumnName))
          })
        });
      }
      /**
       * Specifies an arbitrary expression for the index.
       *
       * ### Examples
       *
       * ```ts
       * import { sql } from 'kysely'
       *
       * await db.schema
       *   .createIndex('person_first_name_index')
       *   .on('person')
       *   .expression(sql`first_name COLLATE "fi_FI"`)
       *   .execute()
       * ```
       */
      expression(expression) {
        return new _CreateIndexBuilder({
          ...__privateGet(this, _props19),
          node: CreateIndexNode.cloneWith(__privateGet(this, _props19).node, {
            expression: expression.toOperationNode()
          })
        });
      }
      using(indexType) {
        return new _CreateIndexBuilder({
          ...__privateGet(this, _props19),
          node: CreateIndexNode.cloneWith(__privateGet(this, _props19).node, {
            using: RawNode.createWithSql(indexType)
          })
        });
      }
      toOperationNode() {
        return __privateGet(this, _props19).executor.transformQuery(__privateGet(this, _props19).node, __privateGet(this, _props19).queryId);
      }
      compile() {
        return __privateGet(this, _props19).executor.compileQuery(this.toOperationNode(), __privateGet(this, _props19).queryId);
      }
      async execute() {
        await __privateGet(this, _props19).executor.executeQuery(this.compile(), __privateGet(this, _props19).queryId);
      }
    };
    CreateIndexBuilder = _CreateIndexBuilder;
    _props19 = new WeakMap();
    preventAwait(CreateIndexBuilder, "don't await CreateIndexBuilder instances directly. To execute the query you need to call `execute`");
  }
});

// node_modules/kysely/dist/esm/schema/create-schema-builder.js
var _props20, _CreateSchemaBuilder, CreateSchemaBuilder;
var init_create_schema_builder = __esm({
  "node_modules/kysely/dist/esm/schema/create-schema-builder.js"() {
    init_create_schema_node();
    init_prevent_await();
    init_object_utils();
    _CreateSchemaBuilder = class {
      constructor(props) {
        __privateAdd(this, _props20, void 0);
        __privateSet(this, _props20, freeze(props));
      }
      ifNotExists() {
        return new _CreateSchemaBuilder({
          ...__privateGet(this, _props20),
          node: CreateSchemaNode.cloneWith(__privateGet(this, _props20).node, { ifNotExists: true })
        });
      }
      toOperationNode() {
        return __privateGet(this, _props20).executor.transformQuery(__privateGet(this, _props20).node, __privateGet(this, _props20).queryId);
      }
      compile() {
        return __privateGet(this, _props20).executor.compileQuery(this.toOperationNode(), __privateGet(this, _props20).queryId);
      }
      async execute() {
        await __privateGet(this, _props20).executor.executeQuery(this.compile(), __privateGet(this, _props20).queryId);
      }
    };
    CreateSchemaBuilder = _CreateSchemaBuilder;
    _props20 = new WeakMap();
    preventAwait(CreateSchemaBuilder, "don't await CreateSchemaBuilder instances directly. To execute the query you need to call `execute`");
  }
});

// node_modules/kysely/dist/esm/operation-node/primary-constraint-node.js
var PrimaryConstraintNode;
var init_primary_constraint_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/primary-constraint-node.js"() {
    init_object_utils();
    init_column_node();
    init_identifier_node();
    PrimaryConstraintNode = freeze({
      is(node) {
        return node.kind === "PrimaryKeyConstraintNode";
      },
      create(columns, constraintName) {
        return freeze({
          kind: "PrimaryKeyConstraintNode",
          columns: freeze(columns.map(ColumnNode.create)),
          name: constraintName ? IdentifierNode.create(constraintName) : void 0
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/parser/on-commit-action-parse.js
function parseOnCommitAction(action) {
  if (ON_COMMIT_ACTIONS.includes(action)) {
    return action;
  }
  throw new Error(`invalid OnCommitAction ${action}`);
}
var init_on_commit_action_parse = __esm({
  "node_modules/kysely/dist/esm/parser/on-commit-action-parse.js"() {
    init_create_table_node();
  }
});

// node_modules/kysely/dist/esm/schema/create-table-builder.js
var _props21, _CreateTableBuilder, CreateTableBuilder;
var init_create_table_builder = __esm({
  "node_modules/kysely/dist/esm/schema/create-table-builder.js"() {
    init_column_definition_node();
    init_create_table_node();
    init_prevent_await();
    init_column_definition_builder();
    init_object_utils();
    init_foreign_key_constraint_node();
    init_column_node();
    init_foreign_key_constraint_builder();
    init_data_type_parser();
    init_primary_constraint_node();
    init_unique_constraint_node();
    init_check_constraint_node();
    init_table_parser();
    init_on_commit_action_parse();
    _CreateTableBuilder = class {
      constructor(props) {
        __privateAdd(this, _props21, void 0);
        __privateSet(this, _props21, freeze(props));
      }
      /**
       * Adds the "temporary" modifier.
       *
       * Use this to create a temporary table.
       */
      temporary() {
        return new _CreateTableBuilder({
          ...__privateGet(this, _props21),
          node: CreateTableNode.cloneWith(__privateGet(this, _props21).node, {
            temporary: true
          })
        });
      }
      /**
       * Adds an "on commit" statement.
       *
       * This can be used in conjunction with temporary tables on supported databases
       * like PostgreSQL.
       */
      onCommit(onCommit) {
        return new _CreateTableBuilder({
          ...__privateGet(this, _props21),
          node: CreateTableNode.cloneWith(__privateGet(this, _props21).node, {
            onCommit: parseOnCommitAction(onCommit)
          })
        });
      }
      /**
       * Adds the "if not exists" modifier.
       *
       * If the table already exists, no error is thrown if this method has been called.
       */
      ifNotExists() {
        return new _CreateTableBuilder({
          ...__privateGet(this, _props21),
          node: CreateTableNode.cloneWith(__privateGet(this, _props21).node, {
            ifNotExists: true
          })
        });
      }
      /**
       * Adds a column to the table.
       *
       * ### Examples
       *
       * ```ts
       * import { sql } from 'kysely'
       *
       * await db.schema
       *   .createTable('person')
       *   .addColumn('id', 'integer', (col) => col.autoIncrement().primaryKey()),
       *   .addColumn('first_name', 'varchar(50)', (col) => col.notNull())
       *   .addColumn('last_name', 'varchar(255)')
       *   .addColumn('bank_balance', 'numeric(8, 2)')
       *   .addColumn('data', sql`some_type`)
       *   .addColumn('parent_id', 'integer', (col) =>
       *     col.references('person.id').onDelete('cascade'))
       *   )
       * ```
       *
       * With this method, it's once again good to remember that Kysely just builds the
       * query and doesn't provide the same API for all databses. For example, some
       * databases like older MySQL don't support the `references` statement in the
       * column definition. Instead foreign key constraints need to be defined in the
       * `create table` query. See the next example:
       *
       * ```ts
       *   .addColumn('parent_id', 'integer')
       *   .addForeignKeyConstraint(
       *     'person_parent_id_fk', ['parent_id'], 'person', ['id'],
       *     (cb) => cb.onDelete('cascade')
       *   )
       * ```
       *
       * Another good example is that PostgreSQL doesn't support the `auto_increment`
       * keyword and you need to define an autoincrementing column for example using
       * `serial`:
       *
       * ```ts
       * await db.schema
       *   .createTable('person')
       *   .addColumn('id', 'serial', (col) => col.primaryKey()),
       * ```
       */
      addColumn(columnName, dataType, build = noop2) {
        const columnBuilder = build(new ColumnDefinitionBuilder(ColumnDefinitionNode.create(columnName, parseDataTypeExpression(dataType))));
        return new _CreateTableBuilder({
          ...__privateGet(this, _props21),
          node: CreateTableNode.cloneWithColumn(__privateGet(this, _props21).node, columnBuilder.toOperationNode())
        });
      }
      /**
       * Adds a primary key constraint for one or more columns.
       *
       * The constraint name can be anything you want, but it must be unique
       * across the whole database.
       *
       * ### Examples
       *
       * ```ts
       * addPrimaryKeyConstraint('primary_key', ['first_name', 'last_name'])
       * ```
       */
      addPrimaryKeyConstraint(constraintName, columns) {
        return new _CreateTableBuilder({
          ...__privateGet(this, _props21),
          node: CreateTableNode.cloneWithConstraint(__privateGet(this, _props21).node, PrimaryConstraintNode.create(columns, constraintName))
        });
      }
      /**
       * Adds a unique constraint for one or more columns.
       *
       * The constraint name can be anything you want, but it must be unique
       * across the whole database.
       *
       * ### Examples
       *
       * ```ts
       * addUniqueConstraint('first_name_last_name_unique', ['first_name', 'last_name'])
       * ```
       */
      addUniqueConstraint(constraintName, columns) {
        return new _CreateTableBuilder({
          ...__privateGet(this, _props21),
          node: CreateTableNode.cloneWithConstraint(__privateGet(this, _props21).node, UniqueConstraintNode.create(columns, constraintName))
        });
      }
      /**
       * Adds a check constraint.
       *
       * The constraint name can be anything you want, but it must be unique
       * across the whole database.
       *
       * ### Examples
       *
       * ```ts
       * import { sql } from 'kysely'
       *
       * addCheckConstraint('check_legs', sql`number_of_legs < 5`)
       * ```
       */
      addCheckConstraint(constraintName, checkExpression) {
        return new _CreateTableBuilder({
          ...__privateGet(this, _props21),
          node: CreateTableNode.cloneWithConstraint(__privateGet(this, _props21).node, CheckConstraintNode.create(checkExpression.toOperationNode(), constraintName))
        });
      }
      /**
       * Adds a foreign key constraint.
       *
       * The constraint name can be anything you want, but it must be unique
       * across the whole database.
       *
       * ### Examples
       *
       * ```ts
       * addForeignKeyConstraint(
       *   'owner_id_foreign',
       *   ['owner_id'],
       *   'person',
       *   ['id'],
       * )
       * ```
       *
       * Add constraint for multiple columns:
       *
       * ```ts
       * addForeignKeyConstraint(
       *   'owner_id_foreign',
       *   ['owner_id1', 'owner_id2'],
       *   'person',
       *   ['id1', 'id2'],
       *   (cb) => cb.onDelete('cascade')
       * )
       * ```
       */
      addForeignKeyConstraint(constraintName, columns, targetTable, targetColumns, build = noop2) {
        const builder = build(new ForeignKeyConstraintBuilder(ForeignKeyConstraintNode.create(columns.map(ColumnNode.create), parseTable(targetTable), targetColumns.map(ColumnNode.create), constraintName)));
        return new _CreateTableBuilder({
          ...__privateGet(this, _props21),
          node: CreateTableNode.cloneWithConstraint(__privateGet(this, _props21).node, builder.toOperationNode())
        });
      }
      /**
       * This can be used to add any additional SQL to the front of the query __after__ the `create` keyword.
       *
       * Also see {@link temporary}.
       *
       * ### Examples
       *
       * ```ts
       * db.schema.createTable('person')
       *   .modifyFront(sql`global temporary`)
       *   .addColumn('id', 'integer', col => col.primaryKey())
       *   .addColumn('first_name', 'varchar(64)', col => col.notNull())
       *   .addColumn('last_name', 'varchar(64), col => col.notNull())
       *   .execute()
       * ```
       *
       * The generated SQL (Postgres):
       *
       * ```sql
       * create global temporary table "person" (
       *   "id" integer primary key,
       *   "first_name" varchar(64) not null,
       *   "last_name" varchar(64) not null
       * )
       * ```
       */
      modifyFront(modifier) {
        return new _CreateTableBuilder({
          ...__privateGet(this, _props21),
          node: CreateTableNode.cloneWithFrontModifier(__privateGet(this, _props21).node, modifier.toOperationNode())
        });
      }
      /**
       * This can be used to add any additional SQL to the end of the query.
       *
       * Also see {@link onCommit}.
       *
       * ### Examples
       *
       * ```ts
       * db.schema.createTable('person')
       *   .addColumn('id', 'integer', col => col => primaryKey())
       *   .addColumn('first_name', 'varchar(64)', col => col.notNull())
       *   .addColumn('last_name', 'varchar(64), col => col.notNull())
       *   .modifyEnd(sql`collate utf8_unicode_ci`)
       *   .execute()
       * ```
       *
       * The generated SQL (MySQL):
       *
       * ```sql
       * create table `person` (
       *   `id` integer primary key,
       *   `first_name` varchar(64) not null,
       *   `last_name` varchar(64) not null
       * ) collate utf8_unicode_ci
       * ```
       */
      modifyEnd(modifier) {
        return new _CreateTableBuilder({
          ...__privateGet(this, _props21),
          node: CreateTableNode.cloneWithEndModifier(__privateGet(this, _props21).node, modifier.toOperationNode())
        });
      }
      /**
       * Calls the given function passing `this` as the only argument.
       *
       * ### Examples
       *
       * ```ts
       * db.schema
       *   .createTable('test')
       *   .$call((builder) => builder.addColumn('id', 'integer'))
       *   .execute()
       * ```
       *
       * ```ts
       * const addDefaultColumns = <T extends string, C extends string = never>(
       *   builder: CreateTableBuilder<T, C>
       * ) => {
       *   return builder
       *     .addColumn('id', 'integer', (col) => col.notNull())
       *     .addColumn('created_at', 'date', (col) =>
       *       col.notNull().defaultTo(sql`now()`)
       *     )
       *     .addColumn('updated_at', 'date', (col) =>
       *       col.notNull().defaultTo(sql`now()`)
       *     )
       * }
       *
       * db.schema
       *   .createTable('test')
       *   .$call(addDefaultColumns)
       *   .execute()
       * ```
       */
      $call(func) {
        return func(this);
      }
      /**
       * @deprecated Use `$call` instead
       */
      call(func) {
        return this.$call(func);
      }
      toOperationNode() {
        return __privateGet(this, _props21).executor.transformQuery(__privateGet(this, _props21).node, __privateGet(this, _props21).queryId);
      }
      compile() {
        return __privateGet(this, _props21).executor.compileQuery(this.toOperationNode(), __privateGet(this, _props21).queryId);
      }
      async execute() {
        await __privateGet(this, _props21).executor.executeQuery(this.compile(), __privateGet(this, _props21).queryId);
      }
    };
    CreateTableBuilder = _CreateTableBuilder;
    _props21 = new WeakMap();
    preventAwait(CreateTableBuilder, "don't await CreateTableBuilder instances directly. To execute the query you need to call `execute`");
  }
});

// node_modules/kysely/dist/esm/schema/drop-index-builder.js
var _props22, _DropIndexBuilder, DropIndexBuilder;
var init_drop_index_builder = __esm({
  "node_modules/kysely/dist/esm/schema/drop-index-builder.js"() {
    init_drop_index_node();
    init_prevent_await();
    init_table_parser();
    init_object_utils();
    _DropIndexBuilder = class {
      constructor(props) {
        __privateAdd(this, _props22, void 0);
        __privateSet(this, _props22, freeze(props));
      }
      /**
       * Specifies the table the index was created for. This is not needed
       * in all dialects.
       */
      on(table) {
        return new _DropIndexBuilder({
          ...__privateGet(this, _props22),
          node: DropIndexNode.cloneWith(__privateGet(this, _props22).node, {
            table: parseTable(table)
          })
        });
      }
      ifExists() {
        return new _DropIndexBuilder({
          ...__privateGet(this, _props22),
          node: DropIndexNode.cloneWith(__privateGet(this, _props22).node, {
            ifExists: true
          })
        });
      }
      cascade() {
        return new _DropIndexBuilder({
          ...__privateGet(this, _props22),
          node: DropIndexNode.cloneWith(__privateGet(this, _props22).node, {
            cascade: true
          })
        });
      }
      toOperationNode() {
        return __privateGet(this, _props22).executor.transformQuery(__privateGet(this, _props22).node, __privateGet(this, _props22).queryId);
      }
      compile() {
        return __privateGet(this, _props22).executor.compileQuery(this.toOperationNode(), __privateGet(this, _props22).queryId);
      }
      async execute() {
        await __privateGet(this, _props22).executor.executeQuery(this.compile(), __privateGet(this, _props22).queryId);
      }
    };
    DropIndexBuilder = _DropIndexBuilder;
    _props22 = new WeakMap();
    preventAwait(DropIndexBuilder, "don't await DropIndexBuilder instances directly. To execute the query you need to call `execute`");
  }
});

// node_modules/kysely/dist/esm/schema/drop-schema-builder.js
var _props23, _DropSchemaBuilder, DropSchemaBuilder;
var init_drop_schema_builder = __esm({
  "node_modules/kysely/dist/esm/schema/drop-schema-builder.js"() {
    init_drop_schema_node();
    init_prevent_await();
    init_object_utils();
    _DropSchemaBuilder = class {
      constructor(props) {
        __privateAdd(this, _props23, void 0);
        __privateSet(this, _props23, freeze(props));
      }
      ifExists() {
        return new _DropSchemaBuilder({
          ...__privateGet(this, _props23),
          node: DropSchemaNode.cloneWith(__privateGet(this, _props23).node, {
            ifExists: true
          })
        });
      }
      cascade() {
        return new _DropSchemaBuilder({
          ...__privateGet(this, _props23),
          node: DropSchemaNode.cloneWith(__privateGet(this, _props23).node, {
            cascade: true
          })
        });
      }
      toOperationNode() {
        return __privateGet(this, _props23).executor.transformQuery(__privateGet(this, _props23).node, __privateGet(this, _props23).queryId);
      }
      compile() {
        return __privateGet(this, _props23).executor.compileQuery(this.toOperationNode(), __privateGet(this, _props23).queryId);
      }
      async execute() {
        await __privateGet(this, _props23).executor.executeQuery(this.compile(), __privateGet(this, _props23).queryId);
      }
    };
    DropSchemaBuilder = _DropSchemaBuilder;
    _props23 = new WeakMap();
    preventAwait(DropSchemaBuilder, "don't await DropSchemaBuilder instances directly. To execute the query you need to call `execute`");
  }
});

// node_modules/kysely/dist/esm/schema/drop-table-builder.js
var _props24, _DropTableBuilder, DropTableBuilder;
var init_drop_table_builder = __esm({
  "node_modules/kysely/dist/esm/schema/drop-table-builder.js"() {
    init_drop_table_node();
    init_prevent_await();
    init_object_utils();
    _DropTableBuilder = class {
      constructor(props) {
        __privateAdd(this, _props24, void 0);
        __privateSet(this, _props24, freeze(props));
      }
      ifExists() {
        return new _DropTableBuilder({
          ...__privateGet(this, _props24),
          node: DropTableNode.cloneWith(__privateGet(this, _props24).node, {
            ifExists: true
          })
        });
      }
      cascade() {
        return new _DropTableBuilder({
          ...__privateGet(this, _props24),
          node: DropTableNode.cloneWith(__privateGet(this, _props24).node, {
            cascade: true
          })
        });
      }
      toOperationNode() {
        return __privateGet(this, _props24).executor.transformQuery(__privateGet(this, _props24).node, __privateGet(this, _props24).queryId);
      }
      compile() {
        return __privateGet(this, _props24).executor.compileQuery(this.toOperationNode(), __privateGet(this, _props24).queryId);
      }
      async execute() {
        await __privateGet(this, _props24).executor.executeQuery(this.compile(), __privateGet(this, _props24).queryId);
      }
    };
    DropTableBuilder = _DropTableBuilder;
    _props24 = new WeakMap();
    preventAwait(DropTableBuilder, "don't await DropTableBuilder instances directly. To execute the query you need to call `execute`");
  }
});

// node_modules/kysely/dist/esm/operation-node/create-view-node.js
var CreateViewNode;
var init_create_view_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/create-view-node.js"() {
    init_object_utils();
    init_schemable_identifier_node();
    CreateViewNode = freeze({
      is(node) {
        return node.kind === "CreateViewNode";
      },
      create(name) {
        return freeze({
          kind: "CreateViewNode",
          name: SchemableIdentifierNode.create(name)
        });
      },
      cloneWith(createView, params) {
        return freeze({
          ...createView,
          ...params
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/plugin/immediate-value/immediate-value-transformer.js
var ImmediateValueTransformer;
var init_immediate_value_transformer = __esm({
  "node_modules/kysely/dist/esm/plugin/immediate-value/immediate-value-transformer.js"() {
    init_operation_node_transformer();
    ImmediateValueTransformer = class extends OperationNodeTransformer {
      transformValue(node) {
        return {
          ...super.transformValue(node),
          immediate: true
        };
      }
    };
  }
});

// node_modules/kysely/dist/esm/plugin/immediate-value/immediate-value-plugin.js
var _transformer2, ImmediateValuePlugin;
var init_immediate_value_plugin = __esm({
  "node_modules/kysely/dist/esm/plugin/immediate-value/immediate-value-plugin.js"() {
    init_immediate_value_transformer();
    ImmediateValuePlugin = class {
      constructor() {
        __privateAdd(this, _transformer2, new ImmediateValueTransformer());
      }
      transformQuery(args) {
        return __privateGet(this, _transformer2).transformNode(args.node);
      }
      transformResult(args) {
        return Promise.resolve(args.result);
      }
    };
    _transformer2 = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/schema/create-view-builder.js
var _props25, _CreateViewBuilder, CreateViewBuilder;
var init_create_view_builder = __esm({
  "node_modules/kysely/dist/esm/schema/create-view-builder.js"() {
    init_prevent_await();
    init_object_utils();
    init_create_view_node();
    init_reference_parser();
    init_immediate_value_plugin();
    _CreateViewBuilder = class {
      constructor(props) {
        __privateAdd(this, _props25, void 0);
        __privateSet(this, _props25, freeze(props));
      }
      /**
       * Adds the "temporary" modifier.
       *
       * Use this to create a temporary view.
       */
      temporary() {
        return new _CreateViewBuilder({
          ...__privateGet(this, _props25),
          node: CreateViewNode.cloneWith(__privateGet(this, _props25).node, {
            temporary: true
          })
        });
      }
      materialized() {
        return new _CreateViewBuilder({
          ...__privateGet(this, _props25),
          node: CreateViewNode.cloneWith(__privateGet(this, _props25).node, {
            materialized: true
          })
        });
      }
      /**
       * Only implemented on some dialects like SQLite. On most dialects, use {@link orReplace}.
       */
      ifNotExists() {
        return new _CreateViewBuilder({
          ...__privateGet(this, _props25),
          node: CreateViewNode.cloneWith(__privateGet(this, _props25).node, {
            ifNotExists: true
          })
        });
      }
      orReplace() {
        return new _CreateViewBuilder({
          ...__privateGet(this, _props25),
          node: CreateViewNode.cloneWith(__privateGet(this, _props25).node, {
            orReplace: true
          })
        });
      }
      columns(columns) {
        return new _CreateViewBuilder({
          ...__privateGet(this, _props25),
          node: CreateViewNode.cloneWith(__privateGet(this, _props25).node, {
            columns: columns.map(parseColumnName)
          })
        });
      }
      /**
       * Sets the select query or a `values` statement that creates the view.
       *
       * WARNING!
       * Some dialects don't support parameterized queries in DDL statements and therefore
       * the query or raw {@link sql } expression passed here is interpolated into a single
       * string opening an SQL injection vulnerability. DO NOT pass unchecked user input
       * into the query or raw expression passed to this method!
       */
      as(query) {
        const queryNode = query.withPlugin(new ImmediateValuePlugin()).toOperationNode();
        return new _CreateViewBuilder({
          ...__privateGet(this, _props25),
          node: CreateViewNode.cloneWith(__privateGet(this, _props25).node, {
            as: queryNode
          })
        });
      }
      toOperationNode() {
        return __privateGet(this, _props25).executor.transformQuery(__privateGet(this, _props25).node, __privateGet(this, _props25).queryId);
      }
      compile() {
        return __privateGet(this, _props25).executor.compileQuery(this.toOperationNode(), __privateGet(this, _props25).queryId);
      }
      async execute() {
        await __privateGet(this, _props25).executor.executeQuery(this.compile(), __privateGet(this, _props25).queryId);
      }
    };
    CreateViewBuilder = _CreateViewBuilder;
    _props25 = new WeakMap();
    preventAwait(CreateViewBuilder, "don't await CreateViewBuilder instances directly. To execute the query you need to call `execute`");
  }
});

// node_modules/kysely/dist/esm/operation-node/drop-view-node.js
var DropViewNode;
var init_drop_view_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/drop-view-node.js"() {
    init_object_utils();
    init_schemable_identifier_node();
    DropViewNode = freeze({
      is(node) {
        return node.kind === "DropViewNode";
      },
      create(name) {
        return freeze({
          kind: "DropViewNode",
          name: SchemableIdentifierNode.create(name)
        });
      },
      cloneWith(dropView, params) {
        return freeze({
          ...dropView,
          ...params
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/schema/drop-view-builder.js
var _props26, _DropViewBuilder, DropViewBuilder;
var init_drop_view_builder = __esm({
  "node_modules/kysely/dist/esm/schema/drop-view-builder.js"() {
    init_prevent_await();
    init_object_utils();
    init_drop_view_node();
    _DropViewBuilder = class {
      constructor(props) {
        __privateAdd(this, _props26, void 0);
        __privateSet(this, _props26, freeze(props));
      }
      materialized() {
        return new _DropViewBuilder({
          ...__privateGet(this, _props26),
          node: DropViewNode.cloneWith(__privateGet(this, _props26).node, {
            materialized: true
          })
        });
      }
      ifExists() {
        return new _DropViewBuilder({
          ...__privateGet(this, _props26),
          node: DropViewNode.cloneWith(__privateGet(this, _props26).node, {
            ifExists: true
          })
        });
      }
      cascade() {
        return new _DropViewBuilder({
          ...__privateGet(this, _props26),
          node: DropViewNode.cloneWith(__privateGet(this, _props26).node, {
            cascade: true
          })
        });
      }
      toOperationNode() {
        return __privateGet(this, _props26).executor.transformQuery(__privateGet(this, _props26).node, __privateGet(this, _props26).queryId);
      }
      compile() {
        return __privateGet(this, _props26).executor.compileQuery(this.toOperationNode(), __privateGet(this, _props26).queryId);
      }
      async execute() {
        await __privateGet(this, _props26).executor.executeQuery(this.compile(), __privateGet(this, _props26).queryId);
      }
    };
    DropViewBuilder = _DropViewBuilder;
    _props26 = new WeakMap();
    preventAwait(DropViewBuilder, "don't await DropViewBuilder instances directly. To execute the query you need to call `execute`");
  }
});

// node_modules/kysely/dist/esm/operation-node/create-type-node.js
var CreateTypeNode;
var init_create_type_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/create-type-node.js"() {
    init_object_utils();
    init_value_list_node();
    init_value_node();
    CreateTypeNode = freeze({
      is(node) {
        return node.kind === "CreateTypeNode";
      },
      create(name) {
        return freeze({
          kind: "CreateTypeNode",
          name
        });
      },
      cloneWithEnum(createType, values) {
        return freeze({
          ...createType,
          enum: ValueListNode.create(values.map((value) => ValueNode.createImmediate(value)))
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/schema/create-type-builder.js
var _props27, _CreateTypeBuilder, CreateTypeBuilder;
var init_create_type_builder = __esm({
  "node_modules/kysely/dist/esm/schema/create-type-builder.js"() {
    init_prevent_await();
    init_object_utils();
    init_create_type_node();
    _CreateTypeBuilder = class {
      constructor(props) {
        __privateAdd(this, _props27, void 0);
        __privateSet(this, _props27, freeze(props));
      }
      toOperationNode() {
        return __privateGet(this, _props27).executor.transformQuery(__privateGet(this, _props27).node, __privateGet(this, _props27).queryId);
      }
      /**
       * Creates an anum type.
       *
       * ### Examples
       *
       * ```ts
       * db.schema.createType('species').asEnum(['cat', 'dog', 'frog'])
       * ```
       */
      asEnum(values) {
        return new _CreateTypeBuilder({
          ...__privateGet(this, _props27),
          node: CreateTypeNode.cloneWithEnum(__privateGet(this, _props27).node, values)
        });
      }
      compile() {
        return __privateGet(this, _props27).executor.compileQuery(this.toOperationNode(), __privateGet(this, _props27).queryId);
      }
      async execute() {
        await __privateGet(this, _props27).executor.executeQuery(this.compile(), __privateGet(this, _props27).queryId);
      }
    };
    CreateTypeBuilder = _CreateTypeBuilder;
    _props27 = new WeakMap();
    preventAwait(CreateTypeBuilder, "don't await CreateTypeBuilder instances directly. To execute the query you need to call `execute`");
  }
});

// node_modules/kysely/dist/esm/operation-node/drop-type-node.js
var DropTypeNode;
var init_drop_type_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/drop-type-node.js"() {
    init_object_utils();
    DropTypeNode = freeze({
      is(node) {
        return node.kind === "DropTypeNode";
      },
      create(name) {
        return freeze({
          kind: "DropTypeNode",
          name
        });
      },
      cloneWith(dropType, params) {
        return freeze({
          ...dropType,
          ...params
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/schema/drop-type-builder.js
var _props28, _DropTypeBuilder, DropTypeBuilder;
var init_drop_type_builder = __esm({
  "node_modules/kysely/dist/esm/schema/drop-type-builder.js"() {
    init_drop_type_node();
    init_prevent_await();
    init_object_utils();
    _DropTypeBuilder = class {
      constructor(props) {
        __privateAdd(this, _props28, void 0);
        __privateSet(this, _props28, freeze(props));
      }
      ifExists() {
        return new _DropTypeBuilder({
          ...__privateGet(this, _props28),
          node: DropTypeNode.cloneWith(__privateGet(this, _props28).node, {
            ifExists: true
          })
        });
      }
      toOperationNode() {
        return __privateGet(this, _props28).executor.transformQuery(__privateGet(this, _props28).node, __privateGet(this, _props28).queryId);
      }
      compile() {
        return __privateGet(this, _props28).executor.compileQuery(this.toOperationNode(), __privateGet(this, _props28).queryId);
      }
      async execute() {
        await __privateGet(this, _props28).executor.executeQuery(this.compile(), __privateGet(this, _props28).queryId);
      }
    };
    DropTypeBuilder = _DropTypeBuilder;
    _props28 = new WeakMap();
    preventAwait(DropTypeBuilder, "don't await DropTypeBuilder instances directly. To execute the query you need to call `execute`");
  }
});

// node_modules/kysely/dist/esm/parser/identifier-parser.js
function parseSchemableIdentifier(id) {
  const SCHEMA_SEPARATOR = ".";
  if (id.includes(SCHEMA_SEPARATOR)) {
    const parts = id.split(SCHEMA_SEPARATOR).map(trim3);
    if (parts.length === 2) {
      return SchemableIdentifierNode.createWithSchema(parts[0], parts[1]);
    } else {
      throw new Error(`invalid schemable identifier ${id}`);
    }
  } else {
    return SchemableIdentifierNode.create(id);
  }
}
function trim3(str) {
  return str.trim();
}
var init_identifier_parser = __esm({
  "node_modules/kysely/dist/esm/parser/identifier-parser.js"() {
    init_schemable_identifier_node();
  }
});

// node_modules/kysely/dist/esm/schema/schema.js
var _executor, _SchemaModule, SchemaModule;
var init_schema = __esm({
  "node_modules/kysely/dist/esm/schema/schema.js"() {
    init_alter_table_node();
    init_create_index_node();
    init_create_schema_node();
    init_create_table_node();
    init_drop_index_node();
    init_drop_schema_node();
    init_drop_table_node();
    init_table_parser();
    init_alter_table_builder();
    init_create_index_builder();
    init_create_schema_builder();
    init_create_table_builder();
    init_drop_index_builder();
    init_drop_schema_builder();
    init_drop_table_builder();
    init_query_id();
    init_with_schema_plugin();
    init_create_view_builder();
    init_create_view_node();
    init_drop_view_builder();
    init_drop_view_node();
    init_create_type_builder();
    init_drop_type_builder();
    init_create_type_node();
    init_drop_type_node();
    init_identifier_parser();
    _SchemaModule = class {
      constructor(executor) {
        __privateAdd(this, _executor, void 0);
        __privateSet(this, _executor, executor);
      }
      /**
       * Create a new table.
       *
       * ### Examples
       *
       * This example creates a new table with columns `id`, `first_name`,
       * `last_name` and `gender`:
       *
       * ```ts
       * await db.schema
       *   .createTable('person')
       *   .addColumn('id', 'integer', col => col.primaryKey().autoIncrement())
       *   .addColumn('first_name', 'varchar', col => col.notNull())
       *   .addColumn('last_name', 'varchar', col => col.notNull())
       *   .addColumn('gender', 'varchar')
       *   .execute()
       * ```
       *
       * This example creates a table with a foreign key. Not all database
       * engines support column-level foreign key constraint definitions.
       * For example if you are using MySQL 5.X see the next example after
       * this one.
       *
       * ```ts
       * await db.schema
       *   .createTable('pet')
       *   .addColumn('id', 'integer', col => col.primaryKey().autoIncrement())
       *   .addColumn('owner_id', 'integer', col => col
       *     .references('person.id')
       *     .onDelete('cascade')
       *   )
       *   .execute()
       * ```
       *
       * This example adds a foreign key constraint for a columns just
       * like the previous example, but using a table-level statement.
       * On MySQL 5.X you need to define foreign key constraints like
       * this:
       *
       * ```ts
       * await db.schema
       *   .createTable('pet')
       *   .addColumn('id', 'integer', col => col.primaryKey().autoIncrement())
       *   .addColumn('owner_id', 'integer')
       *   .addForeignKeyConstraint(
       *     'pet_owner_id_foreign', ['owner_id'], 'person', ['id'],
       *     (constraint) => constraint.onDelete('cascade')
       *   )
       *   .execute()
       * ```
       */
      createTable(table) {
        return new CreateTableBuilder({
          queryId: createQueryId(),
          executor: __privateGet(this, _executor),
          node: CreateTableNode.create(parseTable(table))
        });
      }
      /**
       * Drop a table.
       *
       * ### Examples
       *
       * ```ts
       * await db.schema
       *   .dropTable('person')
       *   .execute()
       * ```
       */
      dropTable(table) {
        return new DropTableBuilder({
          queryId: createQueryId(),
          executor: __privateGet(this, _executor),
          node: DropTableNode.create(parseTable(table))
        });
      }
      /**
       * Create a new index.
       *
       * ### Examples
       *
       * ```ts
       * await db.schema
       *   .createIndex('person_full_name_unique_index')
       *   .on('person')
       *   .columns(['first_name', 'last_name'])
       *   .execute()
       * ```
       */
      createIndex(indexName) {
        return new CreateIndexBuilder({
          queryId: createQueryId(),
          executor: __privateGet(this, _executor),
          node: CreateIndexNode.create(indexName)
        });
      }
      /**
       * Drop an index.
       *
       * ### Examples
       *
       * ```ts
       * await db.schema
       *   .dropIndex('person_full_name_unique_index')
       *   .execute()
       * ```
       */
      dropIndex(indexName) {
        return new DropIndexBuilder({
          queryId: createQueryId(),
          executor: __privateGet(this, _executor),
          node: DropIndexNode.create(indexName)
        });
      }
      /**
       * Create a new schema.
       *
       * ### Examples
       *
       * ```ts
       * await db.schema
       *   .createSchema('some_schema')
       *   .execute()
       * ```
       */
      createSchema(schema) {
        return new CreateSchemaBuilder({
          queryId: createQueryId(),
          executor: __privateGet(this, _executor),
          node: CreateSchemaNode.create(schema)
        });
      }
      /**
       * Drop a schema.
       *
       * ### Examples
       *
       * ```ts
       * await db.schema
       *   .dropSchema('some_schema')
       *   .execute()
       * ```
       */
      dropSchema(schema) {
        return new DropSchemaBuilder({
          queryId: createQueryId(),
          executor: __privateGet(this, _executor),
          node: DropSchemaNode.create(schema)
        });
      }
      /**
       * Alter a table.
       *
       * ### Examples
       *
       * ```ts
       * await db.schema
       *   .alterTable('person')
       *   .alterColumn('first_name')
       *   .setDataType('text')
       *   .execute()
       * ```
       */
      alterTable(table) {
        return new AlterTableBuilder({
          queryId: createQueryId(),
          executor: __privateGet(this, _executor),
          node: AlterTableNode.create(table)
        });
      }
      /**
       * Create a new view.
       *
       * ### Examples
       *
       * ```ts
       * await db.schema
       *   .createView('dogs')
       *   .orReplace()
       *   .as(db.selectFrom('pet').selectAll().where('species', '=', 'dog'))
       *   .execute()
       * ```
       */
      createView(viewName) {
        return new CreateViewBuilder({
          queryId: createQueryId(),
          executor: __privateGet(this, _executor),
          node: CreateViewNode.create(viewName)
        });
      }
      /**
       * Drop a view.
       *
       * ### Examples
       *
       * ```ts
       * await db.schema
       *   .dropView('dogs')
       *   .ifExists()
       *   .execute()
       * ```
       */
      dropView(viewName) {
        return new DropViewBuilder({
          queryId: createQueryId(),
          executor: __privateGet(this, _executor),
          node: DropViewNode.create(viewName)
        });
      }
      /**
       * Create a new type.
       *
       * Only some dialects like PostgreSQL have user-defined types.
       *
       * ### Examples
       *
       * ```ts
       * await db.schema
       *   .createType('species')
       *   .asEnum(['dog', 'cat', 'frog'])
       *   .execute()
       * ```
       */
      createType(typeName) {
        return new CreateTypeBuilder({
          queryId: createQueryId(),
          executor: __privateGet(this, _executor),
          node: CreateTypeNode.create(parseSchemableIdentifier(typeName))
        });
      }
      /**
       * Drop a type.
       *
       * Only some dialects like PostgreSQL have user-defined types.
       *
       * ### Examples
       *
       * ```ts
       * await db.schema
       *   .dropType('species')
       *   .ifExists()
       *   .execute()
       * ```
       */
      dropType(typeName) {
        return new DropTypeBuilder({
          queryId: createQueryId(),
          executor: __privateGet(this, _executor),
          node: DropTypeNode.create(parseSchemableIdentifier(typeName))
        });
      }
      /**
       * Returns a copy of this schema module with the given plugin installed.
       */
      withPlugin(plugin) {
        return new _SchemaModule(__privateGet(this, _executor).withPlugin(plugin));
      }
      /**
       * Returns a copy of this schema module  without any plugins.
       */
      withoutPlugins() {
        return new _SchemaModule(__privateGet(this, _executor).withoutPlugins());
      }
      /**
       * See {@link QueryCreator.withSchema}
       */
      withSchema(schema) {
        return new _SchemaModule(__privateGet(this, _executor).withPluginAtFront(new WithSchemaPlugin(schema)));
      }
    };
    SchemaModule = _SchemaModule;
    _executor = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/dynamic/dynamic.js
var DynamicModule;
var init_dynamic = __esm({
  "node_modules/kysely/dist/esm/dynamic/dynamic.js"() {
    init_dynamic_reference_builder();
    DynamicModule = class {
      /**
       * Creates a dynamic reference to a column that is not know at compile time.
       *
       * Kysely is built in a way that by default you can't refer to tables or columns
       * that are not actually visible in the current query and context. This is all
       * done by typescript at compile time, which means that you need to know the
       * columns and tables at compile time. This is not always the case of course.
       *
       * This method is meant to be used in those cases where the column names
       * come from the user input or are not otherwise known at compile time.
       *
       * WARNING! Unlike values, column names are not escaped by the database engine
       * or Kysely and if you pass in unchecked column names using this method, you
       * create an SQL injection vulnerability. Always __always__ validate the user
       * input before passing it to this method.
       *
       * There are couple of examples below for some use cases, but you can pass
       * `ref` to other methods as well. If the types allow you to pass a `ref`
       * value to some place, it should work.
       *
       * ### Examples
       *
       * Filter by a column not know at compile time:
       *
       * ```ts
       * async function someQuery(filterColumn: string, filterValue: string) {
       *   const { ref } = db.dynamic
       *
       *   return await db
       *     .selectFrom('person')
       *     .selectAll()
       *     .where(ref(filterColumn), '=', filterValue)
       *     .execute()
       * }
       *
       * someQuery('first_name', 'Arnold')
       * someQuery('person.last_name', 'Aniston')
       * ```
       *
       * Order by a column not know at compile time:
       *
       * ```ts
       * async function someQuery(orderBy: string) {
       *   const { ref } = db.dynamic
       *
       *   return await db
       *     .selectFrom('person')
       *     .select('person.first_name as fn')
       *     .orderBy(ref(orderBy))
       *     .execute()
       * }
       *
       * someQuery('fn')
       * ```
       *
       * In this example we add selections dynamically:
       *
       * ```ts
       * const { ref } = db.dynamic
       *
       * // Some column name provided by the user. Value not known at compile time.
       * const columnFromUserInput = req.query.select;
       *
       * // A type that lists all possible values `columnFromUserInput` can have.
       * // You can use `keyof Person` if any column of an interface is allowed.
       * type PossibleColumns = 'last_name' | 'first_name' | 'birth_date'
       *
       * const [person] = await db.selectFrom('person')
       *   .select([
       *     ref<PossibleColumns>(columnFromUserInput)
       *     'id'
       *   ])
       *   .execute()
       *
       * // The resulting type contains all `PossibleColumns` as optional fields
       * // because we cannot know which field was actually selected before
       * // running the code.
       * const lastName: string | undefined = person.last_name
       * const firstName: string | undefined = person.first_name
       * const birthDate: string | undefined = person.birth_date
       *
       * // The result type also contains the compile time selection `id`.
       * person.id
       * ```
       */
      ref(reference) {
        return new DynamicReferenceBuilder(reference);
      }
    };
  }
});

// node_modules/kysely/dist/esm/driver/default-connection-provider.js
var _driver, DefaultConnectionProvider;
var init_default_connection_provider = __esm({
  "node_modules/kysely/dist/esm/driver/default-connection-provider.js"() {
    DefaultConnectionProvider = class {
      constructor(driver) {
        __privateAdd(this, _driver, void 0);
        __privateSet(this, _driver, driver);
      }
      async provideConnection(consumer) {
        const connection = await __privateGet(this, _driver).acquireConnection();
        try {
          return await consumer(connection);
        } finally {
          await __privateGet(this, _driver).releaseConnection(connection);
        }
      }
    };
    _driver = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/query-executor/default-query-executor.js
var _compiler, _adapter, _connectionProvider, _DefaultQueryExecutor, DefaultQueryExecutor;
var init_default_query_executor = __esm({
  "node_modules/kysely/dist/esm/query-executor/default-query-executor.js"() {
    init_query_executor_base();
    _DefaultQueryExecutor = class extends QueryExecutorBase {
      constructor(compiler, adapter, connectionProvider, plugins = []) {
        super(plugins);
        __privateAdd(this, _compiler, void 0);
        __privateAdd(this, _adapter, void 0);
        __privateAdd(this, _connectionProvider, void 0);
        __privateSet(this, _compiler, compiler);
        __privateSet(this, _adapter, adapter);
        __privateSet(this, _connectionProvider, connectionProvider);
      }
      get adapter() {
        return __privateGet(this, _adapter);
      }
      compileQuery(node) {
        return __privateGet(this, _compiler).compileQuery(node);
      }
      provideConnection(consumer) {
        return __privateGet(this, _connectionProvider).provideConnection(consumer);
      }
      withPlugins(plugins) {
        return new _DefaultQueryExecutor(__privateGet(this, _compiler), __privateGet(this, _adapter), __privateGet(this, _connectionProvider), [...this.plugins, ...plugins]);
      }
      withPlugin(plugin) {
        return new _DefaultQueryExecutor(__privateGet(this, _compiler), __privateGet(this, _adapter), __privateGet(this, _connectionProvider), [...this.plugins, plugin]);
      }
      withPluginAtFront(plugin) {
        return new _DefaultQueryExecutor(__privateGet(this, _compiler), __privateGet(this, _adapter), __privateGet(this, _connectionProvider), [plugin, ...this.plugins]);
      }
      withConnectionProvider(connectionProvider) {
        return new _DefaultQueryExecutor(__privateGet(this, _compiler), __privateGet(this, _adapter), connectionProvider, [...this.plugins]);
      }
      withoutPlugins() {
        return new _DefaultQueryExecutor(__privateGet(this, _compiler), __privateGet(this, _adapter), __privateGet(this, _connectionProvider), []);
      }
    };
    DefaultQueryExecutor = _DefaultQueryExecutor;
    _compiler = new WeakMap();
    _adapter = new WeakMap();
    _connectionProvider = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/util/performance-now.js
function performanceNow() {
  if (typeof performance !== "undefined" && isFunction(performance.now)) {
    return performance.now();
  } else {
    return Date.now();
  }
}
var init_performance_now = __esm({
  "node_modules/kysely/dist/esm/util/performance-now.js"() {
    init_object_utils();
  }
});

// node_modules/kysely/dist/esm/driver/runtime-driver.js
var _driver2, _log, _initPromise, _destroyPromise, _connections, _needsLogging, needsLogging_fn, _addLogging, addLogging_fn, _logError, logError_fn, _logQuery, logQuery_fn, _calculateDurationMillis, calculateDurationMillis_fn, RuntimeDriver;
var init_runtime_driver = __esm({
  "node_modules/kysely/dist/esm/driver/runtime-driver.js"() {
    init_performance_now();
    RuntimeDriver = class {
      constructor(driver, log) {
        __privateAdd(this, _needsLogging);
        // This method monkey patches the database connection's executeQuery method
        // by adding logging code around it. Monkey patching is not pretty, but it's
        // the best option in this case.
        __privateAdd(this, _addLogging);
        __privateAdd(this, _logError);
        __privateAdd(this, _logQuery);
        __privateAdd(this, _calculateDurationMillis);
        __privateAdd(this, _driver2, void 0);
        __privateAdd(this, _log, void 0);
        __privateAdd(this, _initPromise, void 0);
        __privateAdd(this, _destroyPromise, void 0);
        __privateAdd(this, _connections, /* @__PURE__ */ new WeakSet());
        __privateSet(this, _driver2, driver);
        __privateSet(this, _log, log);
      }
      async init() {
        if (!__privateGet(this, _initPromise)) {
          __privateSet(this, _initPromise, __privateGet(this, _driver2).init().catch((err) => {
            __privateSet(this, _initPromise, void 0);
            return Promise.reject(err);
          }));
        }
        await __privateGet(this, _initPromise);
      }
      async acquireConnection() {
        await this.init();
        const connection = await __privateGet(this, _driver2).acquireConnection();
        if (!__privateGet(this, _connections).has(connection)) {
          if (__privateMethod(this, _needsLogging, needsLogging_fn).call(this)) {
            __privateMethod(this, _addLogging, addLogging_fn).call(this, connection);
          }
          __privateGet(this, _connections).add(connection);
        }
        return connection;
      }
      async releaseConnection(connection) {
        await __privateGet(this, _driver2).releaseConnection(connection);
      }
      beginTransaction(connection, settings) {
        return __privateGet(this, _driver2).beginTransaction(connection, settings);
      }
      commitTransaction(connection) {
        return __privateGet(this, _driver2).commitTransaction(connection);
      }
      rollbackTransaction(connection) {
        return __privateGet(this, _driver2).rollbackTransaction(connection);
      }
      async destroy() {
        if (!__privateGet(this, _initPromise)) {
          return;
        }
        await __privateGet(this, _initPromise);
        if (!__privateGet(this, _destroyPromise)) {
          __privateSet(this, _destroyPromise, __privateGet(this, _driver2).destroy().catch((err) => {
            __privateSet(this, _destroyPromise, void 0);
            return Promise.reject(err);
          }));
        }
        await __privateGet(this, _destroyPromise);
      }
    };
    _driver2 = new WeakMap();
    _log = new WeakMap();
    _initPromise = new WeakMap();
    _destroyPromise = new WeakMap();
    _connections = new WeakMap();
    _needsLogging = new WeakSet();
    needsLogging_fn = function() {
      return __privateGet(this, _log).isLevelEnabled("query") || __privateGet(this, _log).isLevelEnabled("error");
    };
    _addLogging = new WeakSet();
    addLogging_fn = function(connection) {
      const executeQuery = connection.executeQuery;
      connection.executeQuery = async (compiledQuery) => {
        const startTime = performanceNow();
        try {
          return await executeQuery.call(connection, compiledQuery);
        } catch (error2) {
          __privateMethod(this, _logError, logError_fn).call(this, error2);
          throw error2;
        } finally {
          __privateMethod(this, _logQuery, logQuery_fn).call(this, compiledQuery, startTime);
        }
      };
    };
    _logError = new WeakSet();
    logError_fn = function(error2) {
      __privateGet(this, _log).error(() => ({
        level: "error",
        error: error2
      }));
    };
    _logQuery = new WeakSet();
    logQuery_fn = function(compiledQuery, startTime) {
      __privateGet(this, _log).query(() => ({
        level: "query",
        query: compiledQuery,
        queryDurationMillis: __privateMethod(this, _calculateDurationMillis, calculateDurationMillis_fn).call(this, startTime)
      }));
    };
    _calculateDurationMillis = new WeakSet();
    calculateDurationMillis_fn = function(startTime) {
      return performanceNow() - startTime;
    };
  }
});

// node_modules/kysely/dist/esm/driver/single-connection-provider.js
var _connection, _runningPromise, _run, run_fn, SingleConnectionProvider;
var init_single_connection_provider = __esm({
  "node_modules/kysely/dist/esm/driver/single-connection-provider.js"() {
    SingleConnectionProvider = class {
      constructor(connection) {
        // Run the runner in an async function to make sure it doesn't
        // throw synchronous errors.
        __privateAdd(this, _run);
        __privateAdd(this, _connection, void 0);
        __privateAdd(this, _runningPromise, void 0);
        __privateSet(this, _connection, connection);
      }
      async provideConnection(consumer) {
        while (__privateGet(this, _runningPromise)) {
          await __privateGet(this, _runningPromise);
        }
        const promise = __privateMethod(this, _run, run_fn).call(this, consumer);
        __privateSet(this, _runningPromise, promise.then(() => {
          __privateSet(this, _runningPromise, void 0);
        }).catch(() => {
          __privateSet(this, _runningPromise, void 0);
        }));
        return promise;
      }
    };
    _connection = new WeakMap();
    _runningPromise = new WeakMap();
    _run = new WeakSet();
    run_fn = async function(runner) {
      return await runner(__privateGet(this, _connection));
    };
  }
});

// node_modules/kysely/dist/esm/driver/driver.js
var TRANSACTION_ISOLATION_LEVELS;
var init_driver = __esm({
  "node_modules/kysely/dist/esm/driver/driver.js"() {
    TRANSACTION_ISOLATION_LEVELS = [
      "read uncommitted",
      "read committed",
      "repeatable read",
      "serializable"
    ];
  }
});

// node_modules/kysely/dist/esm/util/log.js
function defaultLogger(event) {
  if (event.level === "query") {
    console.log(`kysely:query: ${event.query.sql}`);
    console.log(`kysely:query: duration: ${event.queryDurationMillis.toFixed(1)}ms`);
  } else if (event.level === "error") {
    if (event.error instanceof Error) {
      console.error(`kysely:error: ${event.error.stack ?? event.error.message}`);
    } else {
      console.error(`kysely:error: ${event}`);
    }
  }
}
var LOG_LEVELS, _levels, _logger, Log;
var init_log = __esm({
  "node_modules/kysely/dist/esm/util/log.js"() {
    init_object_utils();
    LOG_LEVELS = freeze(["query", "error"]);
    Log = class {
      constructor(config2) {
        __privateAdd(this, _levels, void 0);
        __privateAdd(this, _logger, void 0);
        if (isFunction(config2)) {
          __privateSet(this, _logger, config2);
          __privateSet(this, _levels, freeze({
            query: true,
            error: true
          }));
        } else {
          __privateSet(this, _logger, defaultLogger);
          __privateSet(this, _levels, freeze({
            query: config2.includes("query"),
            error: config2.includes("error")
          }));
        }
      }
      isLevelEnabled(level) {
        return __privateGet(this, _levels)[level];
      }
      query(getEvent) {
        if (__privateGet(this, _levels).query) {
          __privateGet(this, _logger).call(this, getEvent());
        }
      }
      error(getEvent) {
        if (__privateGet(this, _levels).error) {
          __privateGet(this, _logger).call(this, getEvent());
        }
      }
    };
    _levels = new WeakMap();
    _logger = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/kysely.js
function isKyselyProps(obj) {
  return isObject(obj) && isObject(obj.config) && isObject(obj.driver) && isObject(obj.executor) && isObject(obj.dialect);
}
function validateTransactionSettings(settings) {
  if (settings.isolationLevel && !TRANSACTION_ISOLATION_LEVELS.includes(settings.isolationLevel)) {
    throw new Error(`invalid transaction isolation level ${settings.isolationLevel}`);
  }
}
var _props29, _Kysely, Kysely, _props30, _Transaction, Transaction, _props31, ConnectionBuilder, _props32, _TransactionBuilder, TransactionBuilder;
var init_kysely = __esm({
  "node_modules/kysely/dist/esm/kysely.js"() {
    init_schema();
    init_dynamic();
    init_default_connection_provider();
    init_query_creator();
    init_default_query_executor();
    init_object_utils();
    init_runtime_driver();
    init_single_connection_provider();
    init_driver();
    init_prevent_await();
    init_function_module();
    init_log();
    _Kysely = class extends QueryCreator {
      constructor(args) {
        let superProps;
        let props;
        if (isKyselyProps(args)) {
          superProps = { executor: args.executor };
          props = { ...args };
        } else {
          const dialect = args.dialect;
          const driver = dialect.createDriver();
          const compiler = dialect.createQueryCompiler();
          const adapter = dialect.createAdapter();
          const log = new Log(args.log ?? []);
          const runtimeDriver = new RuntimeDriver(driver, log);
          const connectionProvider = new DefaultConnectionProvider(runtimeDriver);
          const executor = new DefaultQueryExecutor(compiler, adapter, connectionProvider, args.plugins ?? []);
          superProps = { executor };
          props = {
            config: args,
            executor,
            dialect,
            driver: runtimeDriver
          };
        }
        super(superProps);
        __privateAdd(this, _props29, void 0);
        __privateSet(this, _props29, freeze(props));
      }
      /**
       * Returns the {@link SchemaModule} module for building database schema.
       */
      get schema() {
        return new SchemaModule(__privateGet(this, _props29).executor);
      }
      /**
       * Returns a the {@link DynamicModule} module.
       *
       * The {@link DynamicModule} module can be used to bypass strict typing and
       * passing in dynamic values for the queries.
       */
      get dynamic() {
        return new DynamicModule();
      }
      /**
       * Returns a {@link DatabaseIntrospector | database introspector}.
       */
      get introspection() {
        return __privateGet(this, _props29).dialect.createIntrospector(this.withoutPlugins());
      }
      /**
       * Returns a {@link FunctionModule} that can be used to write type safe function
       * calls.
       *
       * ```ts
       * const { count } = db.fn
       *
       * await db.selectFrom('person')
       *   .innerJoin('pet', 'pet.owner_id', 'person.id')
       *   .select([
       *     'person.id',
       *     count('pet.id').as('pet_count')
       *   ])
       *   .groupBy('person.id')
       *   .having(count('pet.id'), '>', 10)
       *   .execute()
       * ```
       *
       * The generated SQL (PostgreSQL):
       *
       * ```sql
       * select "person"."id", count("pet"."id") as "pet_count"
       * from "person"
       * inner join "pet" on "pet"."owner_id" = "person"."id"
       * group by "person"."id"
       * having count("pet"."id") > $1
       * ```
       */
      get fn() {
        return new FunctionModule();
      }
      /**
       * Creates a {@link TransactionBuilder} that can be used to run queries inside a transaction.
       *
       * The returned {@link TransactionBuilder} can be used to configure the transaction. The
       * {@link TransactionBuilder.execute} method can then be called to run the transaction.
       * {@link TransactionBuilder.execute} takes a function that is run inside the
       * transaction. If the function throws, the transaction is rolled back. Otherwise
       * the transaction is committed.
       *
       * The callback function passed to the {@link TransactionBuilder.execute | execute}
       * method gets the transaction object as its only argument. The transaction is
       * of type {@link Transaction} which inherits {@link Kysely}. Any query
       * started through the transaction object is executed inside the transaction.
       *
       * ### Examples
       *
       * ```ts
       * const catto = await db.transaction().execute(async (trx) => {
       *   const jennifer = await trx.insertInto('person')
       *     .values({
       *       first_name: 'Jennifer',
       *       last_name: 'Aniston',
       *     })
       *     .returning('id')
       *     .executeTakeFirstOrThrow()
       *
       *   await someFunction(trx, jennifer)
       *
       *   return await trx.insertInto('pet')
       *     .values({
       *       user_id: jennifer.id,
       *       name: 'Catto',
       *       species: 'cat'
       *     })
       *     .returning('*')
       *     .executeTakeFirst()
       * })
       * ```
       *
       * Setting the isolation level:
       *
       * ```ts
       * await db
       *   .transaction()
       *   .setIsolationLevel('serializable')
       *   .execute(async (trx) => {
       *     await doStuff(trx)
       *   })
       * ```
       */
      transaction() {
        return new TransactionBuilder({ ...__privateGet(this, _props29) });
      }
      /**
       * Provides a kysely instance bound to a single database connection.
       *
       * ### Examples
       *
       * ```ts
       * await db
       *   .connection()
       *   .execute(async (db) => {
       *     // `db` is an instance of `Kysely` that's bound to a single
       *     // database connection. All queries executed through `db` use
       *     // the same connection.
       *     await doStuff(db)
       *   })
       * ```
       */
      connection() {
        return new ConnectionBuilder({ ...__privateGet(this, _props29) });
      }
      /**
       * Returns a copy of this Kysely instance with the given plugin installed.
       */
      withPlugin(plugin) {
        return new _Kysely({
          ...__privateGet(this, _props29),
          executor: __privateGet(this, _props29).executor.withPlugin(plugin)
        });
      }
      /**
       * Returns a copy of this Kysely instance without any plugins.
       */
      withoutPlugins() {
        return new _Kysely({
          ...__privateGet(this, _props29),
          executor: __privateGet(this, _props29).executor.withoutPlugins()
        });
      }
      /**
       * Returns a copy of this Kysely instance with tables added to its
       * database type.
       *
       * This method only modifies the types and doesn't affect any of the
       * executed queries in any way.
       *
       * ### Examples
       *
       * The following example adds and uses a temporary table:
       *
       * @example
       * ```ts
       * await db.schema
       *   .createTable('temp_table')
       *   .temporary()
       *   .addColumn('some_column', 'integer')
       *   .execute()
       *
       * const tempDb = db.withTables<{
       *   temp_table: {
       *     some_column: number
       *   }
       * }>()
       *
       * await tempDb
       *   .insertInto('temp_table')
       *   .values({ some_column: 100 })
       *   .execute()
       * ```
       */
      withTables() {
        return new _Kysely({ ...__privateGet(this, _props29) });
      }
      /**
       * Releases all resources and disconnects from the database.
       *
       * You need to call this when you are done using the `Kysely` instance.
       */
      async destroy() {
        await __privateGet(this, _props29).driver.destroy();
      }
      /**
       * Returns true if this `Kysely` instance is a transaction.
       *
       * You can also use `db instanceof Transaction`.
       */
      get isTransaction() {
        return false;
      }
      /**
       * @internal
       * @private
       */
      getExecutor() {
        return __privateGet(this, _props29).executor;
      }
    };
    Kysely = _Kysely;
    _props29 = new WeakMap();
    _Transaction = class extends Kysely {
      constructor(props) {
        super(props);
        __privateAdd(this, _props30, void 0);
        __privateSet(this, _props30, props);
      }
      // The return type is `true` instead of `boolean` to make Kysely<DB>
      // unassignable to Transaction<DB> while allowing assignment the
      // other way around.
      get isTransaction() {
        return true;
      }
      transaction() {
        throw new Error("calling the transaction method for a Transaction is not supported");
      }
      connection() {
        throw new Error("calling the connection method for a Transaction is not supported");
      }
      async destroy() {
        throw new Error("calling the destroy method for a Transaction is not supported");
      }
      withPlugin(plugin) {
        return new _Transaction({
          ...__privateGet(this, _props30),
          executor: __privateGet(this, _props30).executor.withPlugin(plugin)
        });
      }
      withoutPlugins() {
        return new _Transaction({
          ...__privateGet(this, _props30),
          executor: __privateGet(this, _props30).executor.withoutPlugins()
        });
      }
      withTables() {
        return new _Transaction({ ...__privateGet(this, _props30) });
      }
    };
    Transaction = _Transaction;
    _props30 = new WeakMap();
    ConnectionBuilder = class {
      constructor(props) {
        __privateAdd(this, _props31, void 0);
        __privateSet(this, _props31, freeze(props));
      }
      async execute(callback) {
        return __privateGet(this, _props31).executor.provideConnection(async (connection) => {
          const executor = __privateGet(this, _props31).executor.withConnectionProvider(new SingleConnectionProvider(connection));
          const db2 = new Kysely({
            ...__privateGet(this, _props31),
            executor
          });
          return await callback(db2);
        });
      }
    };
    _props31 = new WeakMap();
    preventAwait(ConnectionBuilder, "don't await ConnectionBuilder instances directly. To execute the query you need to call the `execute` method");
    _TransactionBuilder = class {
      constructor(props) {
        __privateAdd(this, _props32, void 0);
        __privateSet(this, _props32, freeze(props));
      }
      setIsolationLevel(isolationLevel) {
        return new _TransactionBuilder({
          ...__privateGet(this, _props32),
          isolationLevel
        });
      }
      async execute(callback) {
        const { isolationLevel, ...kyselyProps } = __privateGet(this, _props32);
        const settings = { isolationLevel };
        validateTransactionSettings(settings);
        return __privateGet(this, _props32).executor.provideConnection(async (connection) => {
          const executor = __privateGet(this, _props32).executor.withConnectionProvider(new SingleConnectionProvider(connection));
          const transaction = new Transaction({
            ...kyselyProps,
            executor
          });
          try {
            await __privateGet(this, _props32).driver.beginTransaction(connection, settings);
            const result = await callback(transaction);
            await __privateGet(this, _props32).driver.commitTransaction(connection);
            return result;
          } catch (error2) {
            await __privateGet(this, _props32).driver.rollbackTransaction(connection);
            throw error2;
          }
        });
      }
    };
    TransactionBuilder = _TransactionBuilder;
    _props32 = new WeakMap();
    preventAwait(TransactionBuilder, "don't await TransactionBuilder instances directly. To execute the transaction you need to call the `execute` method");
  }
});

// node_modules/kysely/dist/esm/query-builder/where-interface.js
var init_where_interface = __esm({
  "node_modules/kysely/dist/esm/query-builder/where-interface.js"() {
  }
});

// node_modules/kysely/dist/esm/query-builder/returning-interface.js
var init_returning_interface = __esm({
  "node_modules/kysely/dist/esm/query-builder/returning-interface.js"() {
  }
});

// node_modules/kysely/dist/esm/query-builder/having-interface.js
var init_having_interface = __esm({
  "node_modules/kysely/dist/esm/query-builder/having-interface.js"() {
  }
});

// node_modules/kysely/dist/esm/raw-builder/sql.js
var sql;
var init_sql = __esm({
  "node_modules/kysely/dist/esm/raw-builder/sql.js"() {
    init_identifier_node();
    init_raw_node();
    init_value_node();
    init_reference_parser();
    init_table_parser();
    init_value_parser();
    init_query_id();
    init_raw_builder();
    sql = Object.assign((sqlFragments, ...parameters) => {
      return new RawBuilder({
        queryId: createQueryId(),
        rawNode: RawNode.create(sqlFragments, parameters?.map(parseValueExpression) ?? [])
      });
    }, {
      ref(columnReference) {
        return new RawBuilder({
          queryId: createQueryId(),
          rawNode: RawNode.createWithChild(parseStringReference(columnReference))
        });
      },
      value(value) {
        return new RawBuilder({
          queryId: createQueryId(),
          rawNode: RawNode.createWithChild(parseValueExpression(value))
        });
      },
      table(tableReference) {
        return new RawBuilder({
          queryId: createQueryId(),
          rawNode: RawNode.createWithChild(parseTable(tableReference))
        });
      },
      id(...ids) {
        const fragments = new Array(ids.length + 1).fill(".");
        fragments[0] = "";
        fragments[fragments.length - 1] = "";
        return new RawBuilder({
          queryId: createQueryId(),
          rawNode: RawNode.create(fragments, ids.map(IdentifierNode.create))
        });
      },
      literal(value) {
        return new RawBuilder({
          queryId: createQueryId(),
          rawNode: RawNode.createWithChild(ValueNode.createImmediate(value))
        });
      },
      raw(sql2) {
        return new RawBuilder({
          queryId: createQueryId(),
          rawNode: RawNode.createWithSql(sql2)
        });
      },
      join(array2, separator = sql`, `) {
        const nodes = new Array(2 * array2.length - 1);
        const sep = separator.toOperationNode();
        for (let i = 0; i < array2.length; ++i) {
          nodes[2 * i] = parseValueExpression(array2[i]);
          if (i !== array2.length - 1) {
            nodes[2 * i + 1] = sep;
          }
        }
        return new RawBuilder({
          queryId: createQueryId(),
          rawNode: RawNode.createWithChildren(nodes)
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/query-executor/query-executor.js
var init_query_executor = __esm({
  "node_modules/kysely/dist/esm/query-executor/query-executor.js"() {
  }
});

// node_modules/kysely/dist/esm/query-executor/query-executor-provider.js
var init_query_executor_provider = __esm({
  "node_modules/kysely/dist/esm/query-executor/query-executor-provider.js"() {
  }
});

// node_modules/kysely/dist/esm/operation-node/operation-node-visitor.js
var _visitors, OperationNodeVisitor;
var init_operation_node_visitor = __esm({
  "node_modules/kysely/dist/esm/operation-node/operation-node-visitor.js"() {
    init_object_utils();
    OperationNodeVisitor = class {
      constructor() {
        __publicField(this, "nodeStack", []);
        __privateAdd(this, _visitors, freeze({
          AliasNode: this.visitAlias.bind(this),
          ColumnNode: this.visitColumn.bind(this),
          IdentifierNode: this.visitIdentifier.bind(this),
          SchemableIdentifierNode: this.visitSchemableIdentifier.bind(this),
          RawNode: this.visitRaw.bind(this),
          ReferenceNode: this.visitReference.bind(this),
          SelectQueryNode: this.visitSelectQuery.bind(this),
          SelectionNode: this.visitSelection.bind(this),
          TableNode: this.visitTable.bind(this),
          FromNode: this.visitFrom.bind(this),
          SelectAllNode: this.visitSelectAll.bind(this),
          AndNode: this.visitAnd.bind(this),
          OrNode: this.visitOr.bind(this),
          ValueNode: this.visitValue.bind(this),
          ValueListNode: this.visitValueList.bind(this),
          PrimitiveValueListNode: this.visitPrimitiveValueList.bind(this),
          ParensNode: this.visitParens.bind(this),
          JoinNode: this.visitJoin.bind(this),
          OperatorNode: this.visitOperator.bind(this),
          WhereNode: this.visitWhere.bind(this),
          InsertQueryNode: this.visitInsertQuery.bind(this),
          DeleteQueryNode: this.visitDeleteQuery.bind(this),
          ReturningNode: this.visitReturning.bind(this),
          CreateTableNode: this.visitCreateTable.bind(this),
          AddColumnNode: this.visitAddColumn.bind(this),
          ColumnDefinitionNode: this.visitColumnDefinition.bind(this),
          DropTableNode: this.visitDropTable.bind(this),
          DataTypeNode: this.visitDataType.bind(this),
          OrderByNode: this.visitOrderBy.bind(this),
          OrderByItemNode: this.visitOrderByItem.bind(this),
          GroupByNode: this.visitGroupBy.bind(this),
          GroupByItemNode: this.visitGroupByItem.bind(this),
          UpdateQueryNode: this.visitUpdateQuery.bind(this),
          ColumnUpdateNode: this.visitColumnUpdate.bind(this),
          LimitNode: this.visitLimit.bind(this),
          OffsetNode: this.visitOffset.bind(this),
          OnConflictNode: this.visitOnConflict.bind(this),
          OnDuplicateKeyNode: this.visitOnDuplicateKey.bind(this),
          CreateIndexNode: this.visitCreateIndex.bind(this),
          DropIndexNode: this.visitDropIndex.bind(this),
          ListNode: this.visitList.bind(this),
          PrimaryKeyConstraintNode: this.visitPrimaryKeyConstraint.bind(this),
          UniqueConstraintNode: this.visitUniqueConstraint.bind(this),
          ReferencesNode: this.visitReferences.bind(this),
          CheckConstraintNode: this.visitCheckConstraint.bind(this),
          WithNode: this.visitWith.bind(this),
          CommonTableExpressionNode: this.visitCommonTableExpression.bind(this),
          CommonTableExpressionNameNode: this.visitCommonTableExpressionName.bind(this),
          HavingNode: this.visitHaving.bind(this),
          CreateSchemaNode: this.visitCreateSchema.bind(this),
          DropSchemaNode: this.visitDropSchema.bind(this),
          AlterTableNode: this.visitAlterTable.bind(this),
          DropColumnNode: this.visitDropColumn.bind(this),
          RenameColumnNode: this.visitRenameColumn.bind(this),
          AlterColumnNode: this.visitAlterColumn.bind(this),
          ModifyColumnNode: this.visitModifyColumn.bind(this),
          AddConstraintNode: this.visitAddConstraint.bind(this),
          DropConstraintNode: this.visitDropConstraint.bind(this),
          ForeignKeyConstraintNode: this.visitForeignKeyConstraint.bind(this),
          CreateViewNode: this.visitCreateView.bind(this),
          DropViewNode: this.visitDropView.bind(this),
          GeneratedNode: this.visitGenerated.bind(this),
          DefaultValueNode: this.visitDefaultValue.bind(this),
          OnNode: this.visitOn.bind(this),
          ValuesNode: this.visitValues.bind(this),
          SelectModifierNode: this.visitSelectModifier.bind(this),
          CreateTypeNode: this.visitCreateType.bind(this),
          DropTypeNode: this.visitDropType.bind(this),
          ExplainNode: this.visitExplain.bind(this),
          DefaultInsertValueNode: this.visitDefaultInsertValue.bind(this),
          AggregateFunctionNode: this.visitAggregateFunction.bind(this),
          OverNode: this.visitOver.bind(this),
          PartitionByNode: this.visitPartitionBy.bind(this),
          PartitionByItemNode: this.visitPartitionByItem.bind(this),
          SetOperationNode: this.visitSetOperation.bind(this),
          BinaryOperationNode: this.visitBinaryOperation.bind(this),
          UnaryOperationNode: this.visitUnaryOperation.bind(this),
          UsingNode: this.visitUsing.bind(this)
        }));
        __publicField(this, "visitNode", (node) => {
          this.nodeStack.push(node);
          __privateGet(this, _visitors)[node.kind](node);
          this.nodeStack.pop();
        });
      }
      get parentNode() {
        return this.nodeStack[this.nodeStack.length - 2];
      }
    };
    _visitors = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/query-compiler/default-query-compiler.js
var _sql, _parameters, DefaultQueryCompiler, SELECT_MODIFIER_SQL, JOIN_TYPE_SQL;
var init_default_query_compiler = __esm({
  "node_modules/kysely/dist/esm/query-compiler/default-query-compiler.js"() {
    init_insert_query_node();
    init_operation_node_visitor();
    init_query_node();
    init_object_utils();
    init_create_view_node();
    init_set_operation_node();
    DefaultQueryCompiler = class extends OperationNodeVisitor {
      constructor() {
        super(...arguments);
        __privateAdd(this, _sql, "");
        __privateAdd(this, _parameters, []);
      }
      get numParameters() {
        return __privateGet(this, _parameters).length;
      }
      compileQuery(node) {
        __privateSet(this, _sql, "");
        __privateSet(this, _parameters, []);
        this.visitNode(node);
        return freeze({
          query: node,
          sql: this.getSql(),
          parameters: [...__privateGet(this, _parameters)]
        });
      }
      getSql() {
        return __privateGet(this, _sql);
      }
      visitSelectQuery(node) {
        const wrapInParens = this.parentNode !== void 0 && !InsertQueryNode.is(this.parentNode) && !CreateViewNode.is(this.parentNode) && !SetOperationNode.is(this.parentNode);
        if (this.parentNode === void 0 && node.explain) {
          this.visitNode(node.explain);
          this.append(" ");
        }
        if (wrapInParens) {
          this.append("(");
        }
        if (node.with) {
          this.visitNode(node.with);
          this.append(" ");
        }
        this.append("select ");
        if (node.distinctOn) {
          this.compileDistinctOn(node.distinctOn);
          this.append(" ");
        }
        if (node.frontModifiers && node.frontModifiers.length > 0) {
          this.compileList(node.frontModifiers, " ");
          this.append(" ");
        }
        if (node.selections) {
          this.compileList(node.selections);
          this.append(" ");
        }
        this.visitNode(node.from);
        if (node.joins) {
          this.append(" ");
          this.compileList(node.joins, " ");
        }
        if (node.where) {
          this.append(" ");
          this.visitNode(node.where);
        }
        if (node.groupBy) {
          this.append(" ");
          this.visitNode(node.groupBy);
        }
        if (node.having) {
          this.append(" ");
          this.visitNode(node.having);
        }
        if (node.setOperations) {
          this.append(" ");
          this.compileList(node.setOperations, " ");
        }
        if (node.orderBy) {
          this.append(" ");
          this.visitNode(node.orderBy);
        }
        if (node.limit) {
          this.append(" ");
          this.visitNode(node.limit);
        }
        if (node.offset) {
          this.append(" ");
          this.visitNode(node.offset);
        }
        if (node.endModifiers && node.endModifiers.length > 0) {
          this.append(" ");
          this.compileList(node.endModifiers, " ");
        }
        if (wrapInParens) {
          this.append(")");
        }
      }
      visitFrom(node) {
        this.append("from ");
        this.compileList(node.froms);
      }
      visitSelection(node) {
        this.visitNode(node.selection);
      }
      visitColumn(node) {
        this.visitNode(node.column);
      }
      compileDistinctOn(expressions) {
        this.append("distinct on (");
        this.compileList(expressions);
        this.append(")");
      }
      compileList(nodes, separator = ", ") {
        const lastIndex = nodes.length - 1;
        for (let i = 0; i <= lastIndex; i++) {
          this.visitNode(nodes[i]);
          if (i < lastIndex) {
            this.append(separator);
          }
        }
      }
      visitWhere(node) {
        this.append("where ");
        this.visitNode(node.where);
      }
      visitHaving(node) {
        this.append("having ");
        this.visitNode(node.having);
      }
      visitInsertQuery(node) {
        const isSubQuery = this.nodeStack.find(QueryNode.is) !== node;
        if (!isSubQuery && node.explain) {
          this.visitNode(node.explain);
          this.append(" ");
        }
        if (isSubQuery) {
          this.append("(");
        }
        if (node.with) {
          this.visitNode(node.with);
          this.append(" ");
        }
        this.append(node.replace ? "replace" : "insert");
        if (node.ignore) {
          this.append(" ignore");
        }
        this.append(" into ");
        this.visitNode(node.into);
        if (node.columns) {
          this.append(" (");
          this.compileList(node.columns);
          this.append(")");
        }
        if (node.values) {
          this.append(" ");
          this.visitNode(node.values);
        }
        if (node.onConflict) {
          this.append(" ");
          this.visitNode(node.onConflict);
        }
        if (node.onDuplicateKey) {
          this.append(" ");
          this.visitNode(node.onDuplicateKey);
        }
        if (node.returning) {
          this.append(" ");
          this.visitNode(node.returning);
        }
        if (isSubQuery) {
          this.append(")");
        }
      }
      visitValues(node) {
        this.append("values ");
        this.compileList(node.values);
      }
      visitDeleteQuery(node) {
        const isSubQuery = this.nodeStack.find(QueryNode.is) !== node;
        if (!isSubQuery && node.explain) {
          this.visitNode(node.explain);
          this.append(" ");
        }
        if (isSubQuery) {
          this.append("(");
        }
        if (node.with) {
          this.visitNode(node.with);
          this.append(" ");
        }
        this.append("delete ");
        this.visitNode(node.from);
        if (node.using) {
          this.append(" ");
          this.visitNode(node.using);
        }
        if (node.joins) {
          this.append(" ");
          this.compileList(node.joins, " ");
        }
        if (node.where) {
          this.append(" ");
          this.visitNode(node.where);
        }
        if (node.orderBy) {
          this.append(" ");
          this.visitNode(node.orderBy);
        }
        if (node.limit) {
          this.append(" ");
          this.visitNode(node.limit);
        }
        if (node.returning) {
          this.append(" ");
          this.visitNode(node.returning);
        }
        if (isSubQuery) {
          this.append(")");
        }
      }
      visitReturning(node) {
        this.append("returning ");
        this.compileList(node.selections);
      }
      visitAlias(node) {
        this.visitNode(node.node);
        this.append(" as ");
        this.visitNode(node.alias);
      }
      visitReference(node) {
        this.visitNode(node.table);
        this.append(".");
        this.visitNode(node.column);
      }
      visitSelectAll(_) {
        this.append("*");
      }
      visitIdentifier(node) {
        this.append(this.getLeftIdentifierWrapper());
        this.compileUnwrappedIdentifier(node);
        this.append(this.getRightIdentifierWrapper());
      }
      compileUnwrappedIdentifier(node) {
        if (!isString(node.name)) {
          throw new Error("a non-string identifier was passed to compileUnwrappedIdentifier.");
        }
        this.append(this.sanitizeIdentifier(node.name));
      }
      visitAnd(node) {
        this.visitNode(node.left);
        this.append(" and ");
        this.visitNode(node.right);
      }
      visitOr(node) {
        this.visitNode(node.left);
        this.append(" or ");
        this.visitNode(node.right);
      }
      visitValue(node) {
        if (node.immediate) {
          this.appendImmediateValue(node.value);
        } else {
          this.appendValue(node.value);
        }
      }
      visitValueList(node) {
        this.append("(");
        this.compileList(node.values);
        this.append(")");
      }
      visitPrimitiveValueList(node) {
        this.append("(");
        const { values } = node;
        for (let i = 0; i < values.length; ++i) {
          this.appendValue(values[i]);
          if (i !== values.length - 1) {
            this.append(", ");
          }
        }
        this.append(")");
      }
      visitParens(node) {
        this.append("(");
        this.visitNode(node.node);
        this.append(")");
      }
      visitJoin(node) {
        this.append(JOIN_TYPE_SQL[node.joinType]);
        this.append(" ");
        this.visitNode(node.table);
        if (node.on) {
          this.append(" ");
          this.visitNode(node.on);
        }
      }
      visitOn(node) {
        this.append("on ");
        this.visitNode(node.on);
      }
      visitRaw(node) {
        const { sqlFragments, parameters: params } = node;
        for (let i = 0; i < sqlFragments.length; ++i) {
          this.append(sqlFragments[i]);
          if (params.length > i) {
            this.visitNode(params[i]);
          }
        }
      }
      visitOperator(node) {
        this.append(node.operator);
      }
      visitTable(node) {
        this.visitNode(node.table);
      }
      visitSchemableIdentifier(node) {
        if (node.schema) {
          this.visitNode(node.schema);
          this.append(".");
        }
        this.visitNode(node.identifier);
      }
      visitCreateTable(node) {
        this.append("create ");
        if (node.frontModifiers && node.frontModifiers.length > 0) {
          this.compileList(node.frontModifiers, " ");
          this.append(" ");
        }
        if (node.temporary) {
          this.append("temporary ");
        }
        this.append("table ");
        if (node.ifNotExists) {
          this.append("if not exists ");
        }
        this.visitNode(node.table);
        this.append(" (");
        this.compileList([...node.columns, ...node.constraints ?? []]);
        this.append(")");
        if (node.onCommit) {
          this.append(" on commit ");
          this.append(node.onCommit);
        }
        if (node.endModifiers && node.endModifiers.length > 0) {
          this.append(" ");
          this.compileList(node.endModifiers, " ");
        }
      }
      visitColumnDefinition(node) {
        this.visitNode(node.column);
        this.append(" ");
        this.visitNode(node.dataType);
        if (node.unsigned) {
          this.append(" unsigned");
        }
        if (node.frontModifiers && node.frontModifiers.length > 0) {
          this.append(" ");
          this.compileList(node.frontModifiers, " ");
        }
        if (node.generated) {
          this.append(" ");
          this.visitNode(node.generated);
        }
        if (node.defaultTo) {
          this.append(" ");
          this.visitNode(node.defaultTo);
        }
        if (node.notNull) {
          this.append(" not null");
        }
        if (node.unique) {
          this.append(" unique");
        }
        if (node.primaryKey) {
          this.append(" primary key");
        }
        if (node.autoIncrement) {
          this.append(" ");
          this.append(this.getAutoIncrement());
        }
        if (node.references) {
          this.append(" ");
          this.visitNode(node.references);
        }
        if (node.check) {
          this.append(" ");
          this.visitNode(node.check);
        }
        if (node.endModifiers && node.endModifiers.length > 0) {
          this.append(" ");
          this.compileList(node.endModifiers, " ");
        }
      }
      getAutoIncrement() {
        return "auto_increment";
      }
      visitReferences(node) {
        this.append("references ");
        this.visitNode(node.table);
        this.append(" (");
        this.compileList(node.columns);
        this.append(")");
        if (node.onDelete) {
          this.append(" on delete ");
          this.append(node.onDelete);
        }
        if (node.onUpdate) {
          this.append(" on update ");
          this.append(node.onUpdate);
        }
      }
      visitDropTable(node) {
        this.append("drop table ");
        if (node.ifExists) {
          this.append("if exists ");
        }
        this.visitNode(node.table);
        if (node.cascade) {
          this.append(" cascade");
        }
      }
      visitDataType(node) {
        this.append(node.dataType);
      }
      visitOrderBy(node) {
        this.append("order by ");
        this.compileList(node.items);
      }
      visitOrderByItem(node) {
        this.visitNode(node.orderBy);
        if (node.direction) {
          this.append(" ");
          this.visitNode(node.direction);
        }
      }
      visitGroupBy(node) {
        this.append("group by ");
        this.compileList(node.items);
      }
      visitGroupByItem(node) {
        this.visitNode(node.groupBy);
      }
      visitUpdateQuery(node) {
        const isSubQuery = this.nodeStack.find(QueryNode.is) !== node;
        if (!isSubQuery && node.explain) {
          this.visitNode(node.explain);
          this.append(" ");
        }
        if (isSubQuery) {
          this.append("(");
        }
        if (node.with) {
          this.visitNode(node.with);
          this.append(" ");
        }
        this.append("update ");
        this.visitNode(node.table);
        this.append(" set ");
        if (node.updates) {
          this.compileList(node.updates);
        }
        if (node.from) {
          this.append(" ");
          this.visitNode(node.from);
        }
        if (node.joins) {
          this.append(" ");
          this.compileList(node.joins, " ");
        }
        if (node.where) {
          this.append(" ");
          this.visitNode(node.where);
        }
        if (node.returning) {
          this.append(" ");
          this.visitNode(node.returning);
        }
        if (isSubQuery) {
          this.append(")");
        }
      }
      visitColumnUpdate(node) {
        this.visitNode(node.column);
        this.append(" = ");
        this.visitNode(node.value);
      }
      visitLimit(node) {
        this.append("limit ");
        this.visitNode(node.limit);
      }
      visitOffset(node) {
        this.append("offset ");
        this.visitNode(node.offset);
      }
      visitOnConflict(node) {
        this.append("on conflict");
        if (node.columns) {
          this.append(" (");
          this.compileList(node.columns);
          this.append(")");
        } else if (node.constraint) {
          this.append(" on constraint ");
          this.visitNode(node.constraint);
        } else if (node.indexExpression) {
          this.append(" (");
          this.visitNode(node.indexExpression);
          this.append(")");
        }
        if (node.indexWhere) {
          this.append(" ");
          this.visitNode(node.indexWhere);
        }
        if (node.doNothing === true) {
          this.append(" do nothing");
        } else if (node.updates) {
          this.append(" do update set ");
          this.compileList(node.updates);
          if (node.updateWhere) {
            this.append(" ");
            this.visitNode(node.updateWhere);
          }
        }
      }
      visitOnDuplicateKey(node) {
        this.append("on duplicate key update ");
        this.compileList(node.updates);
      }
      visitCreateIndex(node) {
        this.append("create ");
        if (node.unique) {
          this.append("unique ");
        }
        this.append("index ");
        if (node.ifNotExists) {
          this.append("if not exists ");
        }
        this.visitNode(node.name);
        if (node.table) {
          this.append(" on ");
          this.visitNode(node.table);
        }
        if (node.using) {
          this.append(" using ");
          this.visitNode(node.using);
        }
        if (node.expression) {
          this.append(" (");
          this.visitNode(node.expression);
          this.append(")");
        }
      }
      visitDropIndex(node) {
        this.append("drop index ");
        if (node.ifExists) {
          this.append("if exists ");
        }
        this.visitNode(node.name);
        if (node.table) {
          this.append(" on ");
          this.visitNode(node.table);
        }
        if (node.cascade) {
          this.append(" cascade");
        }
      }
      visitCreateSchema(node) {
        this.append("create schema ");
        if (node.ifNotExists) {
          this.append("if not exists ");
        }
        this.visitNode(node.schema);
      }
      visitDropSchema(node) {
        this.append("drop schema ");
        if (node.ifExists) {
          this.append("if exists ");
        }
        this.visitNode(node.schema);
        if (node.cascade) {
          this.append(" cascade");
        }
      }
      visitPrimaryKeyConstraint(node) {
        if (node.name) {
          this.append("constraint ");
          this.visitNode(node.name);
          this.append(" ");
        }
        this.append("primary key (");
        this.compileList(node.columns);
        this.append(")");
      }
      visitUniqueConstraint(node) {
        if (node.name) {
          this.append("constraint ");
          this.visitNode(node.name);
          this.append(" ");
        }
        this.append("unique (");
        this.compileList(node.columns);
        this.append(")");
      }
      visitCheckConstraint(node) {
        if (node.name) {
          this.append("constraint ");
          this.visitNode(node.name);
          this.append(" ");
        }
        this.append("check (");
        this.visitNode(node.expression);
        this.append(")");
      }
      visitForeignKeyConstraint(node) {
        if (node.name) {
          this.append("constraint ");
          this.visitNode(node.name);
          this.append(" ");
        }
        this.append("foreign key (");
        this.compileList(node.columns);
        this.append(") ");
        this.visitNode(node.references);
        if (node.onDelete) {
          this.append(" on delete ");
          this.append(node.onDelete);
        }
        if (node.onUpdate) {
          this.append(" on update ");
          this.append(node.onUpdate);
        }
      }
      visitList(node) {
        this.compileList(node.items);
      }
      visitWith(node) {
        this.append("with ");
        if (node.recursive) {
          this.append("recursive ");
        }
        this.compileList(node.expressions);
      }
      visitCommonTableExpression(node) {
        this.visitNode(node.name);
        this.append(" as ");
        this.visitNode(node.expression);
      }
      visitCommonTableExpressionName(node) {
        this.visitNode(node.table);
        if (node.columns) {
          this.append("(");
          this.compileList(node.columns);
          this.append(")");
        }
      }
      visitAlterTable(node) {
        this.append("alter table ");
        this.visitNode(node.table);
        this.append(" ");
        if (node.renameTo) {
          this.append("rename to ");
          this.visitNode(node.renameTo);
        }
        if (node.setSchema) {
          this.append("set schema ");
          this.visitNode(node.setSchema);
        }
        if (node.addConstraint) {
          this.visitNode(node.addConstraint);
        }
        if (node.dropConstraint) {
          this.visitNode(node.dropConstraint);
        }
        if (node.columnAlterations) {
          this.compileList(node.columnAlterations);
        }
      }
      visitAddColumn(node) {
        this.append("add column ");
        this.visitNode(node.column);
      }
      visitRenameColumn(node) {
        this.append("rename column ");
        this.visitNode(node.column);
        this.append(" to ");
        this.visitNode(node.renameTo);
      }
      visitDropColumn(node) {
        this.append("drop column ");
        this.visitNode(node.column);
      }
      visitAlterColumn(node) {
        this.append("alter column ");
        this.visitNode(node.column);
        this.append(" ");
        if (node.dataType) {
          this.append("type ");
          this.visitNode(node.dataType);
          if (node.dataTypeExpression) {
            this.append("using ");
            this.visitNode(node.dataTypeExpression);
          }
        }
        if (node.setDefault) {
          this.append("set default ");
          this.visitNode(node.setDefault);
        }
        if (node.dropDefault) {
          this.append("drop default");
        }
        if (node.setNotNull) {
          this.append("set not null");
        }
        if (node.dropNotNull) {
          this.append("drop not null");
        }
      }
      visitModifyColumn(node) {
        this.append("modify column ");
        this.visitNode(node.column);
      }
      visitAddConstraint(node) {
        this.append("add ");
        this.visitNode(node.constraint);
      }
      visitDropConstraint(node) {
        this.append("drop constraint ");
        if (node.ifExists) {
          this.append("if exists ");
        }
        this.visitNode(node.constraintName);
        if (node.modifier === "cascade") {
          this.append(" cascade");
        } else if (node.modifier === "restrict") {
          this.append(" restrict");
        }
      }
      visitSetOperation(node) {
        this.append(node.operator);
        this.append(" ");
        if (node.all) {
          this.append("all ");
        }
        this.visitNode(node.expression);
      }
      visitCreateView(node) {
        this.append("create ");
        if (node.orReplace) {
          this.append("or replace ");
        }
        if (node.materialized) {
          this.append("materialized ");
        }
        if (node.temporary) {
          this.append("temporary ");
        }
        this.append("view ");
        if (node.ifNotExists) {
          this.append("if not exists ");
        }
        this.visitNode(node.name);
        this.append(" ");
        if (node.columns) {
          this.append("(");
          this.compileList(node.columns);
          this.append(") ");
        }
        if (node.as) {
          this.append("as ");
          this.visitNode(node.as);
        }
      }
      visitDropView(node) {
        this.append("drop ");
        if (node.materialized) {
          this.append("materialized ");
        }
        this.append("view ");
        if (node.ifExists) {
          this.append("if exists ");
        }
        this.visitNode(node.name);
        if (node.cascade) {
          this.append(" cascade");
        }
      }
      visitGenerated(node) {
        this.append("generated ");
        if (node.always) {
          this.append("always ");
        }
        if (node.byDefault) {
          this.append("by default ");
        }
        this.append("as ");
        if (node.identity) {
          this.append("identity");
        }
        if (node.expression) {
          this.append("(");
          this.visitNode(node.expression);
          this.append(")");
        }
        if (node.stored) {
          this.append(" stored");
        }
      }
      visitDefaultValue(node) {
        this.append("default ");
        this.visitNode(node.defaultValue);
      }
      visitSelectModifier(node) {
        if (node.rawModifier) {
          this.visitNode(node.rawModifier);
        } else {
          this.append(SELECT_MODIFIER_SQL[node.modifier]);
        }
      }
      visitCreateType(node) {
        this.append("create type ");
        this.visitNode(node.name);
        if (node.enum) {
          this.append(" as enum ");
          this.visitNode(node.enum);
        }
      }
      visitDropType(node) {
        this.append("drop type ");
        if (node.ifExists) {
          this.append("if exists ");
        }
        this.visitNode(node.name);
      }
      visitExplain(node) {
        this.append("explain");
        if (node.options || node.format) {
          this.append(" ");
          this.append(this.getLeftExplainOptionsWrapper());
          if (node.options) {
            this.visitNode(node.options);
            if (node.format) {
              this.append(this.getExplainOptionsDelimiter());
            }
          }
          if (node.format) {
            this.append("format");
            this.append(this.getExplainOptionAssignment());
            this.append(node.format);
          }
          this.append(this.getRightExplainOptionsWrapper());
        }
      }
      visitDefaultInsertValue(_) {
        this.append("default");
      }
      visitAggregateFunction(node) {
        this.append(node.func);
        this.append("(");
        if (node.distinct) {
          this.append("distinct ");
        }
        this.visitNode(node.aggregated);
        this.append(")");
        if (node.filter) {
          this.append(" filter(");
          this.visitNode(node.filter);
          this.append(")");
        }
        if (node.over) {
          this.append(" ");
          this.visitNode(node.over);
        }
      }
      visitOver(node) {
        this.append("over(");
        if (node.partitionBy) {
          this.visitNode(node.partitionBy);
          if (node.orderBy) {
            this.append(" ");
          }
        }
        if (node.orderBy) {
          this.visitNode(node.orderBy);
        }
        this.append(")");
      }
      visitPartitionBy(node) {
        this.append("partition by ");
        this.compileList(node.items);
      }
      visitPartitionByItem(node) {
        this.visitNode(node.partitionBy);
      }
      visitBinaryOperation(node) {
        this.visitNode(node.leftOperand);
        this.append(" ");
        this.visitNode(node.operator);
        this.append(" ");
        this.visitNode(node.rightOperand);
      }
      visitUnaryOperation(node) {
        this.visitNode(node.operator);
        this.append(" ");
        this.visitNode(node.operand);
      }
      visitUsing(node) {
        this.append("using ");
        this.compileList(node.tables);
      }
      append(str) {
        __privateSet(this, _sql, __privateGet(this, _sql) + str);
      }
      appendValue(parameter) {
        this.addParameter(parameter);
        this.append(this.getCurrentParameterPlaceholder());
      }
      getLeftIdentifierWrapper() {
        return '"';
      }
      getRightIdentifierWrapper() {
        return '"';
      }
      getCurrentParameterPlaceholder() {
        return "$" + this.numParameters;
      }
      getLeftExplainOptionsWrapper() {
        return "(";
      }
      getExplainOptionAssignment() {
        return " ";
      }
      getExplainOptionsDelimiter() {
        return ", ";
      }
      getRightExplainOptionsWrapper() {
        return ")";
      }
      sanitizeIdentifier(identifier) {
        const leftWrap = this.getLeftIdentifierWrapper();
        const rightWrap = this.getRightIdentifierWrapper();
        let sanitized = "";
        for (const c of identifier) {
          sanitized += c;
          if (c === leftWrap) {
            sanitized += leftWrap;
          } else if (c === rightWrap) {
            sanitized += rightWrap;
          }
        }
        return sanitized;
      }
      addParameter(parameter) {
        __privateGet(this, _parameters).push(parameter);
      }
      appendImmediateValue(value) {
        if (isString(value)) {
          this.append(`'${value}'`);
        } else if (isNumber(value) || isBoolean(value)) {
          this.append(value.toString());
        } else if (isNull(value)) {
          this.append("null");
        } else if (isDate(value)) {
          this.appendImmediateValue(value.toISOString());
        } else if (isBigInt(value)) {
          this.appendImmediateValue(value.toString());
        } else {
          throw new Error(`invalid immediate value ${value}`);
        }
      }
    };
    _sql = new WeakMap();
    _parameters = new WeakMap();
    SELECT_MODIFIER_SQL = freeze({
      ForKeyShare: "for key share",
      ForNoKeyUpdate: "for no key update",
      ForUpdate: "for update",
      ForShare: "for share",
      NoWait: "nowait",
      SkipLocked: "skip locked",
      Distinct: "distinct"
    });
    JOIN_TYPE_SQL = freeze({
      InnerJoin: "inner join",
      LeftJoin: "left join",
      RightJoin: "right join",
      FullJoin: "full join",
      LateralInnerJoin: "inner join lateral",
      LateralLeftJoin: "left join lateral"
    });
  }
});

// node_modules/kysely/dist/esm/query-compiler/compiled-query.js
var CompiledQuery;
var init_compiled_query = __esm({
  "node_modules/kysely/dist/esm/query-compiler/compiled-query.js"() {
    init_raw_node();
    init_object_utils();
    CompiledQuery = freeze({
      raw(sql2) {
        return freeze({
          sql: sql2,
          query: RawNode.createWithSql(sql2),
          parameters: freeze([])
        });
      }
    });
  }
});

// node_modules/kysely/dist/esm/driver/database-connection.js
var init_database_connection = __esm({
  "node_modules/kysely/dist/esm/driver/database-connection.js"() {
  }
});

// node_modules/kysely/dist/esm/driver/connection-provider.js
var init_connection_provider = __esm({
  "node_modules/kysely/dist/esm/driver/connection-provider.js"() {
  }
});

// node_modules/kysely/dist/esm/driver/dummy-driver.js
var init_dummy_driver = __esm({
  "node_modules/kysely/dist/esm/driver/dummy-driver.js"() {
  }
});

// node_modules/kysely/dist/esm/dialect/dialect.js
var init_dialect = __esm({
  "node_modules/kysely/dist/esm/dialect/dialect.js"() {
  }
});

// node_modules/kysely/dist/esm/dialect/dialect-adapter.js
var init_dialect_adapter = __esm({
  "node_modules/kysely/dist/esm/dialect/dialect-adapter.js"() {
  }
});

// node_modules/kysely/dist/esm/dialect/dialect-adapter-base.js
var DialectAdapterBase;
var init_dialect_adapter_base = __esm({
  "node_modules/kysely/dist/esm/dialect/dialect-adapter-base.js"() {
    DialectAdapterBase = class {
      get supportsTransactionalDdl() {
        return false;
      }
      get supportsReturning() {
        return false;
      }
    };
  }
});

// node_modules/kysely/dist/esm/dialect/database-introspector.js
var init_database_introspector = __esm({
  "node_modules/kysely/dist/esm/dialect/database-introspector.js"() {
  }
});

// node_modules/kysely/dist/esm/dialect/sqlite/sqlite-driver.js
var _config, _connectionMutex, _db, _connection2, SqliteDriver, _db2, SqliteConnection, _promise2, _resolve2, ConnectionMutex;
var init_sqlite_driver = __esm({
  "node_modules/kysely/dist/esm/dialect/sqlite/sqlite-driver.js"() {
    init_compiled_query();
    init_object_utils();
    SqliteDriver = class {
      constructor(config2) {
        __privateAdd(this, _config, void 0);
        __privateAdd(this, _connectionMutex, new ConnectionMutex());
        __privateAdd(this, _db, void 0);
        __privateAdd(this, _connection2, void 0);
        __privateSet(this, _config, freeze({ ...config2 }));
      }
      async init() {
        __privateSet(this, _db, isFunction(__privateGet(this, _config).database) ? await __privateGet(this, _config).database() : __privateGet(this, _config).database);
        __privateSet(this, _connection2, new SqliteConnection(__privateGet(this, _db)));
        if (__privateGet(this, _config).onCreateConnection) {
          await __privateGet(this, _config).onCreateConnection(__privateGet(this, _connection2));
        }
      }
      async acquireConnection() {
        await __privateGet(this, _connectionMutex).lock();
        return __privateGet(this, _connection2);
      }
      async beginTransaction(connection) {
        await connection.executeQuery(CompiledQuery.raw("begin"));
      }
      async commitTransaction(connection) {
        await connection.executeQuery(CompiledQuery.raw("commit"));
      }
      async rollbackTransaction(connection) {
        await connection.executeQuery(CompiledQuery.raw("rollback"));
      }
      async releaseConnection() {
        __privateGet(this, _connectionMutex).unlock();
      }
      async destroy() {
        __privateGet(this, _db)?.close();
      }
    };
    _config = new WeakMap();
    _connectionMutex = new WeakMap();
    _db = new WeakMap();
    _connection2 = new WeakMap();
    SqliteConnection = class {
      constructor(db2) {
        __privateAdd(this, _db2, void 0);
        __privateSet(this, _db2, db2);
      }
      executeQuery(compiledQuery) {
        const { sql: sql2, parameters } = compiledQuery;
        const stmt = __privateGet(this, _db2).prepare(sql2);
        if (stmt.reader) {
          return Promise.resolve({
            rows: stmt.all(parameters)
          });
        } else {
          const { changes, lastInsertRowid } = stmt.run(parameters);
          const numAffectedRows = changes !== void 0 && changes !== null ? BigInt(changes) : void 0;
          return Promise.resolve({
            // TODO: remove.
            numUpdatedOrDeletedRows: numAffectedRows,
            numAffectedRows,
            insertId: lastInsertRowid !== void 0 && lastInsertRowid !== null ? BigInt(lastInsertRowid) : void 0,
            rows: []
          });
        }
      }
      async *streamQuery() {
        throw new Error("Sqlite driver doesn't support streaming");
      }
    };
    _db2 = new WeakMap();
    ConnectionMutex = class {
      constructor() {
        __privateAdd(this, _promise2, void 0);
        __privateAdd(this, _resolve2, void 0);
      }
      async lock() {
        while (__privateGet(this, _promise2)) {
          await __privateGet(this, _promise2);
        }
        __privateSet(this, _promise2, new Promise((resolve) => {
          __privateSet(this, _resolve2, resolve);
        }));
      }
      unlock() {
        const resolve = __privateGet(this, _resolve2);
        __privateSet(this, _promise2, void 0);
        __privateSet(this, _resolve2, void 0);
        resolve?.();
      }
    };
    _promise2 = new WeakMap();
    _resolve2 = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/dialect/sqlite/sqlite-query-compiler.js
var ID_WRAP_REGEX, SqliteQueryCompiler;
var init_sqlite_query_compiler = __esm({
  "node_modules/kysely/dist/esm/dialect/sqlite/sqlite-query-compiler.js"() {
    init_default_query_compiler();
    ID_WRAP_REGEX = /"/g;
    SqliteQueryCompiler = class extends DefaultQueryCompiler {
      getCurrentParameterPlaceholder() {
        return "?";
      }
      getLeftExplainOptionsWrapper() {
        return "";
      }
      getRightExplainOptionsWrapper() {
        return "";
      }
      getLeftIdentifierWrapper() {
        return '"';
      }
      getRightIdentifierWrapper() {
        return '"';
      }
      getAutoIncrement() {
        return "autoincrement";
      }
      sanitizeIdentifier(identifier) {
        return identifier.replace(ID_WRAP_REGEX, '""');
      }
      visitDefaultInsertValue(_) {
        this.append("null");
      }
    };
  }
});

// node_modules/kysely/dist/esm/plugin/noop-plugin.js
var NoopPlugin;
var init_noop_plugin = __esm({
  "node_modules/kysely/dist/esm/plugin/noop-plugin.js"() {
    NoopPlugin = class {
      transformQuery(args) {
        return args.node;
      }
      async transformResult(args) {
        return args.result;
      }
    };
  }
});

// node_modules/kysely/dist/esm/migration/migrator.js
var DEFAULT_MIGRATION_TABLE, DEFAULT_MIGRATION_LOCK_TABLE, MIGRATION_LOCK_ID, NO_MIGRATIONS, _props33, _migrate, migrate_fn, _migrationTableSchema, migrationTableSchema_get, _migrationTable, migrationTable_get, _migrationLockTable, migrationLockTable_get, _schemaPlugin, schemaPlugin_get, _ensureMigrationTablesExists, ensureMigrationTablesExists_fn, _ensureMigrationTableSchemaExists, ensureMigrationTableSchemaExists_fn, _ensureMigrationTableExists, ensureMigrationTableExists_fn, _ensureMigrationLockTableExists, ensureMigrationLockTableExists_fn, _ensureLockRowExists, ensureLockRowExists_fn, _doesSchemaExists, doesSchemaExists_fn, _doesTableExists, doesTableExists_fn, _doesLockRowExists, doesLockRowExists_fn, _runMigrations, runMigrations_fn, _getState, getState_fn, _resolveMigrations, resolveMigrations_fn, _getExecutedMigrations, getExecutedMigrations_fn, _ensureMigrationsNotCorrupted, ensureMigrationsNotCorrupted_fn, _migrateDown, migrateDown_fn, _migrateUp, migrateUp_fn, Migrator, _resultSet, MigrationResultSetError;
var init_migrator = __esm({
  "node_modules/kysely/dist/esm/migration/migrator.js"() {
    init_noop_plugin();
    init_with_schema_plugin();
    init_object_utils();
    DEFAULT_MIGRATION_TABLE = "kysely_migration";
    DEFAULT_MIGRATION_LOCK_TABLE = "kysely_migration_lock";
    MIGRATION_LOCK_ID = "migration_lock";
    NO_MIGRATIONS = freeze({ __noMigrations__: true });
    Migrator = class {
      constructor(props) {
        __privateAdd(this, _migrate);
        __privateAdd(this, _migrationTableSchema);
        __privateAdd(this, _migrationTable);
        __privateAdd(this, _migrationLockTable);
        __privateAdd(this, _schemaPlugin);
        __privateAdd(this, _ensureMigrationTablesExists);
        __privateAdd(this, _ensureMigrationTableSchemaExists);
        __privateAdd(this, _ensureMigrationTableExists);
        __privateAdd(this, _ensureMigrationLockTableExists);
        __privateAdd(this, _ensureLockRowExists);
        __privateAdd(this, _doesSchemaExists);
        __privateAdd(this, _doesTableExists);
        __privateAdd(this, _doesLockRowExists);
        __privateAdd(this, _runMigrations);
        __privateAdd(this, _getState);
        __privateAdd(this, _resolveMigrations);
        __privateAdd(this, _getExecutedMigrations);
        __privateAdd(this, _ensureMigrationsNotCorrupted);
        __privateAdd(this, _migrateDown);
        __privateAdd(this, _migrateUp);
        __privateAdd(this, _props33, void 0);
        __privateSet(this, _props33, freeze(props));
      }
      /**
       * Returns a {@link MigrationInfo} object for each migration.
       *
       * The returned array is sorted by migration name.
       */
      async getMigrations() {
        const executedMigrations = await __privateMethod(this, _doesTableExists, doesTableExists_fn).call(this, __privateGet(this, _migrationTable, migrationTable_get)) ? await __privateGet(this, _props33).db.withPlugin(__privateGet(this, _schemaPlugin, schemaPlugin_get)).selectFrom(__privateGet(this, _migrationTable, migrationTable_get)).select(["name", "timestamp"]).execute() : [];
        const migrations = await __privateMethod(this, _resolveMigrations, resolveMigrations_fn).call(this);
        return migrations.map(({ name, ...migration }) => {
          const executed = executedMigrations.find((it) => it.name === name);
          return {
            name,
            migration,
            executedAt: executed ? new Date(executed.timestamp) : void 0
          };
        });
      }
      /**
       * Runs all migrations that have not yet been run.
       *
       * This method returns a {@link MigrationResultSet} instance and _never_ throws.
       * {@link MigrationResultSet.error} holds the error if something went wrong.
       * {@link MigrationResultSet.results} contains information about which migrations
       * were executed and which failed. See the examples below.
       *
       * This method goes through all possible migrations provided by the provider and runs the
       * ones whose names come alphabetically after the last migration that has been run. If the
       * list of executed migrations doesn't match the beginning of the list of possible migrations
       * an error is thrown.
       *
       * ### Examples
       *
       * ```ts
       * const db = new Kysely<Database>({
       *   dialect: new PostgresDialect({
       *     host: 'localhost',
       *     database: 'kysely_test',
       *   }),
       * })
       *
       * const migrator = new Migrator({
       *   db,
       *   provider: new FileMigrationProvider(
       *     // Path to the folder that contains all your migrations.
       *     'some/path/to/migrations'
       *   )
       * })
       *
       * const { error, results } = await migrator.migrateToLatest()
       *
       * results?.forEach((it) => {
       *   if (it.status === 'Success') {
       *     console.log(`migration "${it.migrationName}" was executed successfully`)
       *   } else if (it.status === 'Error') {
       *     console.error(`failed to execute migration "${it.migrationName}"`)
       *   }
       * })
       *
       * if (error) {
       *   console.error('failed to run `migrateToLatest`')
       *   console.error(error)
       * }
       * ```
       */
      async migrateToLatest() {
        return __privateMethod(this, _migrate, migrate_fn).call(this, ({ migrations }) => migrations.length - 1);
      }
      /**
       * Migrate up/down to a specific migration.
       *
       * This method returns a {@link MigrationResultSet} instance and _never_ throws.
       * {@link MigrationResultSet.error} holds the error if something went wrong.
       * {@link MigrationResultSet.results} contains information about which migrations
       * were executed and which failed.
       *
       * ### Examples
       *
       * ```ts
       * await migrator.migrateTo('some_migration')
       * ```
       *
       * If you specify the name of the first migration, this method migrates
       * down to the first migration, but doesn't run the `down` method of
       * the first migration. In case you want to migrate all the way down,
       * you can use a special constant `NO_MIGRATIONS`:
       *
       * ```ts
       * await migrator.migrateTo(NO_MIGRATIONS)
       * ```
       */
      async migrateTo(targetMigrationName) {
        return __privateMethod(this, _migrate, migrate_fn).call(this, ({ migrations }) => {
          if (targetMigrationName === NO_MIGRATIONS) {
            return -1;
          }
          const index4 = migrations.findIndex((it) => it.name === targetMigrationName);
          if (index4 === -1) {
            throw new Error(`migration "${targetMigrationName}" doesn't exist`);
          }
          return index4;
        });
      }
      /**
       * Migrate one step up.
       *
       * This method returns a {@link MigrationResultSet} instance and _never_ throws.
       * {@link MigrationResultSet.error} holds the error if something went wrong.
       * {@link MigrationResultSet.results} contains information about which migrations
       * were executed and which failed.
       *
       * ### Examples
       *
       * ```ts
       * await migrator.migrateUp()
       * ```
       */
      async migrateUp() {
        return __privateMethod(this, _migrate, migrate_fn).call(this, ({ currentIndex, migrations }) => Math.min(currentIndex + 1, migrations.length - 1));
      }
      /**
       * Migrate one step down.
       *
       * This method returns a {@link MigrationResultSet} instance and _never_ throws.
       * {@link MigrationResultSet.error} holds the error if something went wrong.
       * {@link MigrationResultSet.results} contains information about which migrations
       * were executed and which failed.
       *
       * ### Examples
       *
       * ```ts
       * await migrator.migrateDown()
       * ```
       */
      async migrateDown() {
        return __privateMethod(this, _migrate, migrate_fn).call(this, ({ currentIndex }) => Math.max(currentIndex - 1, -1));
      }
    };
    _props33 = new WeakMap();
    _migrate = new WeakSet();
    migrate_fn = async function(getTargetMigrationIndex) {
      try {
        await __privateMethod(this, _ensureMigrationTablesExists, ensureMigrationTablesExists_fn).call(this);
        return await __privateMethod(this, _runMigrations, runMigrations_fn).call(this, getTargetMigrationIndex);
      } catch (error2) {
        if (error2 instanceof MigrationResultSetError) {
          return error2.resultSet;
        }
        return { error: error2 };
      }
    };
    _migrationTableSchema = new WeakSet();
    migrationTableSchema_get = function() {
      return __privateGet(this, _props33).migrationTableSchema;
    };
    _migrationTable = new WeakSet();
    migrationTable_get = function() {
      return __privateGet(this, _props33).migrationTableName ?? DEFAULT_MIGRATION_TABLE;
    };
    _migrationLockTable = new WeakSet();
    migrationLockTable_get = function() {
      return __privateGet(this, _props33).migrationLockTableName ?? DEFAULT_MIGRATION_LOCK_TABLE;
    };
    _schemaPlugin = new WeakSet();
    schemaPlugin_get = function() {
      if (__privateGet(this, _migrationTableSchema, migrationTableSchema_get)) {
        return new WithSchemaPlugin(__privateGet(this, _migrationTableSchema, migrationTableSchema_get));
      }
      return new NoopPlugin();
    };
    _ensureMigrationTablesExists = new WeakSet();
    ensureMigrationTablesExists_fn = async function() {
      await __privateMethod(this, _ensureMigrationTableSchemaExists, ensureMigrationTableSchemaExists_fn).call(this);
      await __privateMethod(this, _ensureMigrationTableExists, ensureMigrationTableExists_fn).call(this);
      await __privateMethod(this, _ensureMigrationLockTableExists, ensureMigrationLockTableExists_fn).call(this);
      await __privateMethod(this, _ensureLockRowExists, ensureLockRowExists_fn).call(this);
    };
    _ensureMigrationTableSchemaExists = new WeakSet();
    ensureMigrationTableSchemaExists_fn = async function() {
      if (!__privateGet(this, _migrationTableSchema, migrationTableSchema_get)) {
        return;
      }
      if (!await __privateMethod(this, _doesSchemaExists, doesSchemaExists_fn).call(this)) {
        try {
          await __privateGet(this, _props33).db.schema.createSchema(__privateGet(this, _migrationTableSchema, migrationTableSchema_get)).ifNotExists().execute();
        } catch (error2) {
          if (!await __privateMethod(this, _doesSchemaExists, doesSchemaExists_fn).call(this)) {
            throw error2;
          }
        }
      }
    };
    _ensureMigrationTableExists = new WeakSet();
    ensureMigrationTableExists_fn = async function() {
      if (!await __privateMethod(this, _doesTableExists, doesTableExists_fn).call(this, __privateGet(this, _migrationTable, migrationTable_get))) {
        try {
          if (__privateGet(this, _migrationTableSchema, migrationTableSchema_get)) {
            await __privateGet(this, _props33).db.schema.createSchema(__privateGet(this, _migrationTableSchema, migrationTableSchema_get)).ifNotExists().execute();
          }
          await __privateGet(this, _props33).db.schema.withPlugin(__privateGet(this, _schemaPlugin, schemaPlugin_get)).createTable(__privateGet(this, _migrationTable, migrationTable_get)).ifNotExists().addColumn("name", "varchar(255)", (col) => col.notNull().primaryKey()).addColumn("timestamp", "varchar(255)", (col) => col.notNull()).execute();
        } catch (error2) {
          if (!await __privateMethod(this, _doesTableExists, doesTableExists_fn).call(this, __privateGet(this, _migrationTable, migrationTable_get))) {
            throw error2;
          }
        }
      }
    };
    _ensureMigrationLockTableExists = new WeakSet();
    ensureMigrationLockTableExists_fn = async function() {
      if (!await __privateMethod(this, _doesTableExists, doesTableExists_fn).call(this, __privateGet(this, _migrationLockTable, migrationLockTable_get))) {
        try {
          await __privateGet(this, _props33).db.schema.withPlugin(__privateGet(this, _schemaPlugin, schemaPlugin_get)).createTable(__privateGet(this, _migrationLockTable, migrationLockTable_get)).ifNotExists().addColumn("id", "varchar(255)", (col) => col.notNull().primaryKey()).addColumn("is_locked", "integer", (col) => col.notNull().defaultTo(0)).execute();
        } catch (error2) {
          if (!await __privateMethod(this, _doesTableExists, doesTableExists_fn).call(this, __privateGet(this, _migrationLockTable, migrationLockTable_get))) {
            throw error2;
          }
        }
      }
    };
    _ensureLockRowExists = new WeakSet();
    ensureLockRowExists_fn = async function() {
      if (!await __privateMethod(this, _doesLockRowExists, doesLockRowExists_fn).call(this)) {
        try {
          await __privateGet(this, _props33).db.withPlugin(__privateGet(this, _schemaPlugin, schemaPlugin_get)).insertInto(__privateGet(this, _migrationLockTable, migrationLockTable_get)).values({ id: MIGRATION_LOCK_ID, is_locked: 0 }).execute();
        } catch (error2) {
          if (!await __privateMethod(this, _doesLockRowExists, doesLockRowExists_fn).call(this)) {
            throw error2;
          }
        }
      }
    };
    _doesSchemaExists = new WeakSet();
    doesSchemaExists_fn = async function() {
      const schemas = await __privateGet(this, _props33).db.introspection.getSchemas();
      return schemas.some((it) => it.name === __privateGet(this, _migrationTableSchema, migrationTableSchema_get));
    };
    _doesTableExists = new WeakSet();
    doesTableExists_fn = async function(tableName) {
      const schema = __privateGet(this, _migrationTableSchema, migrationTableSchema_get);
      const tables = await __privateGet(this, _props33).db.introspection.getTables({
        withInternalKyselyTables: true
      });
      return tables.some((it) => it.name === tableName && (!schema || it.schema === schema));
    };
    _doesLockRowExists = new WeakSet();
    doesLockRowExists_fn = async function() {
      const lockRow = await __privateGet(this, _props33).db.withPlugin(__privateGet(this, _schemaPlugin, schemaPlugin_get)).selectFrom(__privateGet(this, _migrationLockTable, migrationLockTable_get)).where("id", "=", MIGRATION_LOCK_ID).select("id").executeTakeFirst();
      return !!lockRow;
    };
    _runMigrations = new WeakSet();
    runMigrations_fn = async function(getTargetMigrationIndex) {
      const adapter = __privateGet(this, _props33).db.getExecutor().adapter;
      const lockOptions = freeze({
        lockTable: __privateGet(this, _props33).migrationLockTableName ?? DEFAULT_MIGRATION_LOCK_TABLE,
        lockRowId: MIGRATION_LOCK_ID,
        lockTableSchema: __privateGet(this, _props33).migrationTableSchema
      });
      const run2 = async (db2) => {
        try {
          await adapter.acquireMigrationLock(db2, lockOptions);
          const state = await __privateMethod(this, _getState, getState_fn).call(this, db2);
          if (state.migrations.length === 0) {
            return { results: [] };
          }
          const targetIndex = getTargetMigrationIndex(state);
          if (targetIndex === void 0) {
            return { results: [] };
          }
          if (targetIndex < state.currentIndex) {
            return await __privateMethod(this, _migrateDown, migrateDown_fn).call(this, db2, state, targetIndex);
          } else if (targetIndex > state.currentIndex) {
            return await __privateMethod(this, _migrateUp, migrateUp_fn).call(this, db2, state, targetIndex);
          }
          return { results: [] };
        } finally {
          await adapter.releaseMigrationLock(db2, lockOptions);
        }
      };
      if (adapter.supportsTransactionalDdl) {
        return __privateGet(this, _props33).db.transaction().execute(run2);
      } else {
        return __privateGet(this, _props33).db.connection().execute(run2);
      }
    };
    _getState = new WeakSet();
    getState_fn = async function(db2) {
      const migrations = await __privateMethod(this, _resolveMigrations, resolveMigrations_fn).call(this);
      const executedMigrations = await __privateMethod(this, _getExecutedMigrations, getExecutedMigrations_fn).call(this, db2);
      __privateMethod(this, _ensureMigrationsNotCorrupted, ensureMigrationsNotCorrupted_fn).call(this, migrations, executedMigrations);
      return freeze({
        migrations,
        currentIndex: migrations.findIndex((it) => it.name === getLast(executedMigrations))
      });
    };
    _resolveMigrations = new WeakSet();
    resolveMigrations_fn = async function() {
      const allMigrations = await __privateGet(this, _props33).provider.getMigrations();
      return Object.keys(allMigrations).sort().map((name) => ({
        ...allMigrations[name],
        name
      }));
    };
    _getExecutedMigrations = new WeakSet();
    getExecutedMigrations_fn = async function(db2) {
      const executedMigrations = await db2.withPlugin(__privateGet(this, _schemaPlugin, schemaPlugin_get)).selectFrom(__privateGet(this, _migrationTable, migrationTable_get)).select("name").orderBy("name").execute();
      return executedMigrations.map((it) => it.name);
    };
    _ensureMigrationsNotCorrupted = new WeakSet();
    ensureMigrationsNotCorrupted_fn = function(migrations, executedMigrations) {
      for (const executed of executedMigrations) {
        if (!migrations.some((it) => it.name === executed)) {
          throw new Error(`corrupted migrations: previously executed migration ${executed} is missing`);
        }
      }
      for (let i = 0; i < executedMigrations.length; ++i) {
        if (migrations[i].name !== executedMigrations[i]) {
          throw new Error(`corrupted migrations: expected previously executed migration ${executedMigrations[i]} to be at index ${i} but ${migrations[i].name} was found in its place. New migrations must always have a name that comes alphabetically after the last executed migration.`);
        }
      }
    };
    _migrateDown = new WeakSet();
    migrateDown_fn = async function(db2, state, targetIndex) {
      const results = [];
      for (let i = state.currentIndex; i > targetIndex; --i) {
        results.push({
          migrationName: state.migrations[i].name,
          direction: "Down",
          status: "NotExecuted"
        });
      }
      for (let i = 0; i < results.length; ++i) {
        const migration = state.migrations.find((it) => it.name === results[i].migrationName);
        try {
          if (migration.down) {
            await migration.down(db2);
            await db2.withPlugin(__privateGet(this, _schemaPlugin, schemaPlugin_get)).deleteFrom(__privateGet(this, _migrationTable, migrationTable_get)).where("name", "=", migration.name).execute();
            results[i] = {
              migrationName: migration.name,
              direction: "Down",
              status: "Success"
            };
          }
        } catch (error2) {
          results[i] = {
            migrationName: migration.name,
            direction: "Down",
            status: "Error"
          };
          throw new MigrationResultSetError({
            error: error2,
            results
          });
        }
      }
      return { results };
    };
    _migrateUp = new WeakSet();
    migrateUp_fn = async function(db2, state, targetIndex) {
      const results = [];
      for (let i = state.currentIndex + 1; i <= targetIndex; ++i) {
        results.push({
          migrationName: state.migrations[i].name,
          direction: "Up",
          status: "NotExecuted"
        });
      }
      for (let i = 0; i < results.length; ++i) {
        const migration = state.migrations.find((it) => it.name === results[i].migrationName);
        try {
          await migration.up(db2);
          await db2.withPlugin(__privateGet(this, _schemaPlugin, schemaPlugin_get)).insertInto(__privateGet(this, _migrationTable, migrationTable_get)).values({
            name: migration.name,
            timestamp: new Date().toISOString()
          }).execute();
          results[i] = {
            migrationName: migration.name,
            direction: "Up",
            status: "Success"
          };
        } catch (error2) {
          results[i] = {
            migrationName: migration.name,
            direction: "Up",
            status: "Error"
          };
          throw new MigrationResultSetError({
            error: error2,
            results
          });
        }
      }
      return { results };
    };
    MigrationResultSetError = class extends Error {
      constructor(result) {
        super();
        __privateAdd(this, _resultSet, void 0);
        __privateSet(this, _resultSet, result);
      }
      get resultSet() {
        return __privateGet(this, _resultSet);
      }
    };
    _resultSet = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/dialect/sqlite/sqlite-introspector.js
var _db3, _getTableMetadata, getTableMetadata_fn, SqliteIntrospector;
var init_sqlite_introspector = __esm({
  "node_modules/kysely/dist/esm/dialect/sqlite/sqlite-introspector.js"() {
    init_migrator();
    init_sql();
    SqliteIntrospector = class {
      constructor(db2) {
        __privateAdd(this, _getTableMetadata);
        __privateAdd(this, _db3, void 0);
        __privateSet(this, _db3, db2);
      }
      async getSchemas() {
        return [];
      }
      async getTables(options2 = { withInternalKyselyTables: false }) {
        let query = __privateGet(this, _db3).selectFrom("sqlite_schema").where("type", "in", ["table", "view"]).where("name", "not like", "sqlite_%").select("name").orderBy("name").$castTo();
        if (!options2.withInternalKyselyTables) {
          query = query.where("name", "!=", DEFAULT_MIGRATION_TABLE).where("name", "!=", DEFAULT_MIGRATION_LOCK_TABLE);
        }
        const tables = await query.execute();
        return Promise.all(tables.map(({ name }) => __privateMethod(this, _getTableMetadata, getTableMetadata_fn).call(this, name)));
      }
      async getMetadata(options2) {
        return {
          tables: await this.getTables(options2)
        };
      }
    };
    _db3 = new WeakMap();
    _getTableMetadata = new WeakSet();
    getTableMetadata_fn = async function(table) {
      const db2 = __privateGet(this, _db3);
      const tableDefinition = await db2.selectFrom("sqlite_master").where("name", "=", table).select(["sql", "type"]).$castTo().executeTakeFirstOrThrow();
      const autoIncrementCol = tableDefinition.sql?.split(/[\(\),]/)?.find((it) => it.toLowerCase().includes("autoincrement"))?.trimStart()?.split(/\s+/)?.[0]?.replace(/["`]/g, "");
      const columns = await db2.selectFrom(sql`pragma_table_info(${table})`.as("table_info")).select(["name", "type", "notnull", "dflt_value"]).orderBy("cid").execute();
      return {
        name: table,
        isView: tableDefinition.type === "view",
        columns: columns.map((col) => ({
          name: col.name,
          dataType: col.type,
          isNullable: !col.notnull,
          isAutoIncrementing: col.name === autoIncrementCol,
          hasDefaultValue: col.dflt_value != null
        }))
      };
    };
  }
});

// node_modules/kysely/dist/esm/dialect/sqlite/sqlite-adapter.js
var SqliteAdapter;
var init_sqlite_adapter = __esm({
  "node_modules/kysely/dist/esm/dialect/sqlite/sqlite-adapter.js"() {
    SqliteAdapter = class {
      get supportsTransactionalDdl() {
        return false;
      }
      get supportsReturning() {
        return true;
      }
      async acquireMigrationLock() {
      }
      async releaseMigrationLock() {
      }
    };
  }
});

// node_modules/kysely/dist/esm/dialect/sqlite/sqlite-dialect.js
var _config2, SqliteDialect;
var init_sqlite_dialect = __esm({
  "node_modules/kysely/dist/esm/dialect/sqlite/sqlite-dialect.js"() {
    init_sqlite_driver();
    init_sqlite_query_compiler();
    init_sqlite_introspector();
    init_sqlite_adapter();
    init_object_utils();
    SqliteDialect = class {
      constructor(config2) {
        __privateAdd(this, _config2, void 0);
        __privateSet(this, _config2, freeze({ ...config2 }));
      }
      createDriver() {
        return new SqliteDriver(__privateGet(this, _config2));
      }
      createQueryCompiler() {
        return new SqliteQueryCompiler();
      }
      createAdapter() {
        return new SqliteAdapter();
      }
      createIntrospector(db2) {
        return new SqliteIntrospector(db2);
      }
    };
    _config2 = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/dialect/sqlite/sqlite-dialect-config.js
var init_sqlite_dialect_config = __esm({
  "node_modules/kysely/dist/esm/dialect/sqlite/sqlite-dialect-config.js"() {
  }
});

// node_modules/kysely/dist/esm/dialect/postgres/postgres-query-compiler.js
var ID_WRAP_REGEX2, PostgresQueryCompiler;
var init_postgres_query_compiler = __esm({
  "node_modules/kysely/dist/esm/dialect/postgres/postgres-query-compiler.js"() {
    init_default_query_compiler();
    ID_WRAP_REGEX2 = /"/g;
    PostgresQueryCompiler = class extends DefaultQueryCompiler {
      sanitizeIdentifier(identifier) {
        return identifier.replace(ID_WRAP_REGEX2, '""');
      }
    };
  }
});

// node_modules/kysely/dist/esm/dialect/postgres/postgres-introspector.js
var _db4, _parseTableMetadata, parseTableMetadata_fn, PostgresIntrospector;
var init_postgres_introspector = __esm({
  "node_modules/kysely/dist/esm/dialect/postgres/postgres-introspector.js"() {
    init_migrator();
    init_object_utils();
    init_sql();
    PostgresIntrospector = class {
      constructor(db2) {
        __privateAdd(this, _parseTableMetadata);
        __privateAdd(this, _db4, void 0);
        __privateSet(this, _db4, db2);
      }
      async getSchemas() {
        let rawSchemas = await __privateGet(this, _db4).selectFrom("pg_catalog.pg_namespace").select("nspname").$castTo().execute();
        return rawSchemas.map((it) => ({ name: it.nspname }));
      }
      async getTables(options2 = { withInternalKyselyTables: false }) {
        let query = __privateGet(this, _db4).selectFrom("pg_catalog.pg_attribute as a").innerJoin("pg_catalog.pg_class as c", "a.attrelid", "c.oid").innerJoin("pg_catalog.pg_namespace as ns", "c.relnamespace", "ns.oid").innerJoin("pg_catalog.pg_type as typ", "a.atttypid", "typ.oid").innerJoin("pg_catalog.pg_namespace as dtns", "typ.typnamespace", "dtns.oid").select([
          "a.attname as column",
          "a.attnotnull as not_null",
          "a.atthasdef as has_default",
          "c.relname as table",
          "c.relkind as table_type",
          "ns.nspname as schema",
          "typ.typname as type",
          "dtns.nspname as type_schema",
          // Detect if the column is auto incrementing by finding the sequence
          // that is created for `serial` and `bigserial` columns.
          __privateGet(this, _db4).selectFrom("pg_class").select(sql`true`.as("auto_incrementing")).whereRef("relnamespace", "=", "c.relnamespace").where("relkind", "=", "S").where("relname", "=", sql`c.relname || '_' || a.attname || '_seq'`).as("auto_incrementing")
        ]).where("c.relkind", "in", ["r", "v"]).where("ns.nspname", "!~", "^pg_").where("ns.nspname", "!=", "information_schema").where("a.attnum", ">=", 0).where("a.attisdropped", "!=", true).orderBy("ns.nspname").orderBy("c.relname").orderBy("a.attnum").$castTo();
        if (!options2.withInternalKyselyTables) {
          query = query.where("c.relname", "!=", DEFAULT_MIGRATION_TABLE).where("c.relname", "!=", DEFAULT_MIGRATION_LOCK_TABLE);
        }
        const rawColumns = await query.execute();
        return __privateMethod(this, _parseTableMetadata, parseTableMetadata_fn).call(this, rawColumns);
      }
      async getMetadata(options2) {
        return {
          tables: await this.getTables(options2)
        };
      }
    };
    _db4 = new WeakMap();
    _parseTableMetadata = new WeakSet();
    parseTableMetadata_fn = function(columns) {
      return columns.reduce((tables, it) => {
        let table = tables.find((tbl) => tbl.name === it.table && tbl.schema === it.schema);
        if (!table) {
          table = freeze({
            name: it.table,
            isView: it.table_type === "v",
            schema: it.schema,
            columns: []
          });
          tables.push(table);
        }
        table.columns.push(freeze({
          name: it.column,
          dataType: it.type,
          dataTypeSchema: it.type_schema,
          isNullable: !it.not_null,
          isAutoIncrementing: !!it.auto_incrementing,
          hasDefaultValue: it.has_default
        }));
        return tables;
      }, []);
    };
  }
});

// node_modules/kysely/dist/esm/dialect/postgres/postgres-adapter.js
var LOCK_ID, PostgresAdapter;
var init_postgres_adapter = __esm({
  "node_modules/kysely/dist/esm/dialect/postgres/postgres-adapter.js"() {
    init_sql();
    init_dialect_adapter_base();
    LOCK_ID = BigInt("3853314791062309107");
    PostgresAdapter = class extends DialectAdapterBase {
      get supportsTransactionalDdl() {
        return true;
      }
      get supportsReturning() {
        return true;
      }
      async acquireMigrationLock(db2) {
        await sql`select pg_advisory_xact_lock(${sql.literal(LOCK_ID)})`.execute(db2);
      }
      async releaseMigrationLock() {
      }
    };
  }
});

// node_modules/kysely/dist/esm/util/stack-trace-utils.js
function extendStackTrace(err, stackError) {
  if (isStackHolder(err) && stackError.stack) {
    const stackExtension = stackError.stack.split("\n").slice(1).join("\n");
    err.stack += `
${stackExtension}`;
    return err;
  }
  return err;
}
function isStackHolder(obj) {
  return isObject(obj) && isString(obj.stack);
}
var init_stack_trace_utils = __esm({
  "node_modules/kysely/dist/esm/util/stack-trace-utils.js"() {
    init_object_utils();
  }
});

// node_modules/kysely/dist/esm/dialect/mysql/mysql-driver.js
function isOkPacket(obj) {
  return isObject(obj) && "insertId" in obj && "affectedRows" in obj;
}
var PRIVATE_RELEASE_METHOD, _config3, _connections2, _pool, _acquireConnection, acquireConnection_fn, MysqlDriver, _rawConnection, _executeQuery, executeQuery_fn, MysqlConnection;
var init_mysql_driver = __esm({
  "node_modules/kysely/dist/esm/dialect/mysql/mysql-driver.js"() {
    init_compiled_query();
    init_object_utils();
    init_stack_trace_utils();
    PRIVATE_RELEASE_METHOD = Symbol();
    MysqlDriver = class {
      constructor(configOrPool) {
        __privateAdd(this, _acquireConnection);
        __privateAdd(this, _config3, void 0);
        __privateAdd(this, _connections2, /* @__PURE__ */ new WeakMap());
        __privateAdd(this, _pool, void 0);
        __privateSet(this, _config3, freeze({ ...configOrPool }));
      }
      async init() {
        __privateSet(this, _pool, isFunction(__privateGet(this, _config3).pool) ? await __privateGet(this, _config3).pool() : __privateGet(this, _config3).pool);
      }
      async acquireConnection() {
        const rawConnection = await __privateMethod(this, _acquireConnection, acquireConnection_fn).call(this);
        let connection = __privateGet(this, _connections2).get(rawConnection);
        if (!connection) {
          connection = new MysqlConnection(rawConnection);
          __privateGet(this, _connections2).set(rawConnection, connection);
          if (__privateGet(this, _config3)?.onCreateConnection) {
            await __privateGet(this, _config3).onCreateConnection(connection);
          }
        }
        return connection;
      }
      async beginTransaction(connection, settings) {
        if (settings.isolationLevel) {
          await connection.executeQuery(CompiledQuery.raw(`set transaction isolation level ${settings.isolationLevel}`));
        }
        await connection.executeQuery(CompiledQuery.raw("begin"));
      }
      async commitTransaction(connection) {
        await connection.executeQuery(CompiledQuery.raw("commit"));
      }
      async rollbackTransaction(connection) {
        await connection.executeQuery(CompiledQuery.raw("rollback"));
      }
      async releaseConnection(connection) {
        connection[PRIVATE_RELEASE_METHOD]();
      }
      async destroy() {
        return new Promise((resolve, reject) => {
          __privateGet(this, _pool).end((err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
      }
    };
    _config3 = new WeakMap();
    _connections2 = new WeakMap();
    _pool = new WeakMap();
    _acquireConnection = new WeakSet();
    acquireConnection_fn = async function() {
      return new Promise((resolve, reject) => {
        __privateGet(this, _pool).getConnection(async (err, rawConnection) => {
          if (err) {
            reject(err);
          } else {
            resolve(rawConnection);
          }
        });
      });
    };
    MysqlConnection = class {
      constructor(rawConnection) {
        __privateAdd(this, _executeQuery);
        __privateAdd(this, _rawConnection, void 0);
        __privateSet(this, _rawConnection, rawConnection);
      }
      async executeQuery(compiledQuery) {
        try {
          const result = await __privateMethod(this, _executeQuery, executeQuery_fn).call(this, compiledQuery);
          if (isOkPacket(result)) {
            const { insertId, affectedRows } = result;
            const numAffectedRows = affectedRows !== void 0 && affectedRows !== null ? BigInt(affectedRows) : void 0;
            return {
              insertId: insertId !== void 0 && insertId !== null && insertId.toString() !== "0" ? BigInt(insertId) : void 0,
              // TODO: remove.
              numUpdatedOrDeletedRows: numAffectedRows,
              numAffectedRows,
              rows: []
            };
          } else if (Array.isArray(result)) {
            return {
              rows: result
            };
          }
          return {
            rows: []
          };
        } catch (err) {
          throw extendStackTrace(err, new Error());
        }
      }
      async *streamQuery(compiledQuery, chunkSize) {
        const stream = __privateGet(this, _rawConnection).query(compiledQuery.sql, compiledQuery.parameters).stream({
          objectMode: true
        });
        try {
          for await (const row of stream) {
            yield {
              rows: [row]
            };
          }
        } catch (ex) {
          if (ex && typeof ex === "object" && "code" in ex && // @ts-ignore
          ex.code === "ERR_STREAM_PREMATURE_CLOSE") {
            return;
          }
          throw ex;
        }
      }
      [PRIVATE_RELEASE_METHOD]() {
        __privateGet(this, _rawConnection).release();
      }
    };
    _rawConnection = new WeakMap();
    _executeQuery = new WeakSet();
    executeQuery_fn = function(compiledQuery) {
      return new Promise((resolve, reject) => {
        __privateGet(this, _rawConnection).query(compiledQuery.sql, compiledQuery.parameters, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    };
  }
});

// node_modules/kysely/dist/esm/dialect/mysql/mysql-query-compiler.js
var ID_WRAP_REGEX3, MysqlQueryCompiler;
var init_mysql_query_compiler = __esm({
  "node_modules/kysely/dist/esm/dialect/mysql/mysql-query-compiler.js"() {
    init_default_query_compiler();
    ID_WRAP_REGEX3 = /`/g;
    MysqlQueryCompiler = class extends DefaultQueryCompiler {
      getCurrentParameterPlaceholder() {
        return "?";
      }
      getLeftExplainOptionsWrapper() {
        return "";
      }
      getExplainOptionAssignment() {
        return "=";
      }
      getExplainOptionsDelimiter() {
        return " ";
      }
      getRightExplainOptionsWrapper() {
        return "";
      }
      getLeftIdentifierWrapper() {
        return "`";
      }
      getRightIdentifierWrapper() {
        return "`";
      }
      sanitizeIdentifier(identifier) {
        return identifier.replace(ID_WRAP_REGEX3, "``");
      }
    };
  }
});

// node_modules/kysely/dist/esm/dialect/mysql/mysql-introspector.js
var _db5, _parseTableMetadata2, parseTableMetadata_fn2, MysqlIntrospector;
var init_mysql_introspector = __esm({
  "node_modules/kysely/dist/esm/dialect/mysql/mysql-introspector.js"() {
    init_migrator();
    init_object_utils();
    init_sql();
    MysqlIntrospector = class {
      constructor(db2) {
        __privateAdd(this, _parseTableMetadata2);
        __privateAdd(this, _db5, void 0);
        __privateSet(this, _db5, db2);
      }
      async getSchemas() {
        let rawSchemas = await __privateGet(this, _db5).selectFrom("information_schema.schemata").select("schema_name").$castTo().execute();
        return rawSchemas.map((it) => ({ name: it.SCHEMA_NAME }));
      }
      async getTables(options2 = { withInternalKyselyTables: false }) {
        let query = __privateGet(this, _db5).selectFrom("information_schema.columns as columns").innerJoin("information_schema.tables as tables", (b) => b.onRef("columns.TABLE_CATALOG", "=", "tables.TABLE_CATALOG").onRef("columns.TABLE_SCHEMA", "=", "tables.TABLE_SCHEMA").onRef("columns.TABLE_NAME", "=", "tables.TABLE_NAME")).select([
          "columns.COLUMN_NAME",
          "columns.COLUMN_DEFAULT",
          "columns.TABLE_NAME",
          "columns.TABLE_SCHEMA",
          "tables.TABLE_TYPE",
          "columns.IS_NULLABLE",
          "columns.DATA_TYPE",
          "columns.EXTRA"
        ]).where("columns.TABLE_SCHEMA", "=", sql`database()`).orderBy("columns.TABLE_NAME").orderBy("columns.ORDINAL_POSITION").$castTo();
        if (!options2.withInternalKyselyTables) {
          query = query.where("columns.TABLE_NAME", "!=", DEFAULT_MIGRATION_TABLE).where("columns.TABLE_NAME", "!=", DEFAULT_MIGRATION_LOCK_TABLE);
        }
        const rawColumns = await query.execute();
        return __privateMethod(this, _parseTableMetadata2, parseTableMetadata_fn2).call(this, rawColumns);
      }
      async getMetadata(options2) {
        return {
          tables: await this.getTables(options2)
        };
      }
    };
    _db5 = new WeakMap();
    _parseTableMetadata2 = new WeakSet();
    parseTableMetadata_fn2 = function(columns) {
      return columns.reduce((tables, it) => {
        let table = tables.find((tbl) => tbl.name === it.TABLE_NAME);
        if (!table) {
          table = freeze({
            name: it.TABLE_NAME,
            isView: it.TABLE_TYPE === "VIEW",
            schema: it.TABLE_SCHEMA,
            columns: []
          });
          tables.push(table);
        }
        table.columns.push(freeze({
          name: it.COLUMN_NAME,
          dataType: it.DATA_TYPE,
          isNullable: it.IS_NULLABLE === "YES",
          isAutoIncrementing: it.EXTRA.toLowerCase().includes("auto_increment"),
          hasDefaultValue: it.COLUMN_DEFAULT !== null
        }));
        return tables;
      }, []);
    };
  }
});

// node_modules/kysely/dist/esm/dialect/mysql/mysql-adapter.js
var LOCK_ID2, LOCK_TIMEOUT_SECONDS, MysqlAdapter;
var init_mysql_adapter = __esm({
  "node_modules/kysely/dist/esm/dialect/mysql/mysql-adapter.js"() {
    init_sql();
    init_dialect_adapter_base();
    LOCK_ID2 = "ea586330-2c93-47c8-908d-981d9d270f9d";
    LOCK_TIMEOUT_SECONDS = 60 * 60;
    MysqlAdapter = class extends DialectAdapterBase {
      get supportsTransactionalDdl() {
        return false;
      }
      get supportsReturning() {
        return false;
      }
      async acquireMigrationLock(db2) {
        await sql`select get_lock(${sql.literal(LOCK_ID2)}, ${sql.literal(LOCK_TIMEOUT_SECONDS)})`.execute(db2);
      }
      async releaseMigrationLock(db2) {
        await sql`select release_lock(${sql.literal(LOCK_ID2)})`.execute(db2);
      }
    };
  }
});

// node_modules/kysely/dist/esm/dialect/mysql/mysql-dialect.js
var _config4, MysqlDialect;
var init_mysql_dialect = __esm({
  "node_modules/kysely/dist/esm/dialect/mysql/mysql-dialect.js"() {
    init_mysql_driver();
    init_mysql_query_compiler();
    init_mysql_introspector();
    init_mysql_adapter();
    MysqlDialect = class {
      constructor(config2) {
        __privateAdd(this, _config4, void 0);
        __privateSet(this, _config4, config2);
      }
      createDriver() {
        return new MysqlDriver(__privateGet(this, _config4));
      }
      createQueryCompiler() {
        return new MysqlQueryCompiler();
      }
      createAdapter() {
        return new MysqlAdapter();
      }
      createIntrospector(db2) {
        return new MysqlIntrospector(db2);
      }
    };
    _config4 = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/dialect/mysql/mysql-dialect-config.js
var init_mysql_dialect_config = __esm({
  "node_modules/kysely/dist/esm/dialect/mysql/mysql-dialect-config.js"() {
  }
});

// node_modules/kysely/dist/esm/dialect/postgres/postgres-driver.js
var PRIVATE_RELEASE_METHOD2, _config5, _connections3, _pool2, PostgresDriver, _client, _options2, PostgresConnection;
var init_postgres_driver = __esm({
  "node_modules/kysely/dist/esm/dialect/postgres/postgres-driver.js"() {
    init_compiled_query();
    init_object_utils();
    init_stack_trace_utils();
    PRIVATE_RELEASE_METHOD2 = Symbol();
    PostgresDriver = class {
      constructor(config2) {
        __privateAdd(this, _config5, void 0);
        __privateAdd(this, _connections3, /* @__PURE__ */ new WeakMap());
        __privateAdd(this, _pool2, void 0);
        __privateSet(this, _config5, freeze({ ...config2 }));
      }
      async init() {
        __privateSet(this, _pool2, isFunction(__privateGet(this, _config5).pool) ? await __privateGet(this, _config5).pool() : __privateGet(this, _config5).pool);
      }
      async acquireConnection() {
        const client = await __privateGet(this, _pool2).connect();
        let connection = __privateGet(this, _connections3).get(client);
        if (!connection) {
          connection = new PostgresConnection(client, {
            cursor: __privateGet(this, _config5).cursor ?? null
          });
          __privateGet(this, _connections3).set(client, connection);
          if (__privateGet(this, _config5)?.onCreateConnection) {
            await __privateGet(this, _config5).onCreateConnection(connection);
          }
        }
        return connection;
      }
      async beginTransaction(connection, settings) {
        if (settings.isolationLevel) {
          await connection.executeQuery(CompiledQuery.raw(`start transaction isolation level ${settings.isolationLevel}`));
        } else {
          await connection.executeQuery(CompiledQuery.raw("begin"));
        }
      }
      async commitTransaction(connection) {
        await connection.executeQuery(CompiledQuery.raw("commit"));
      }
      async rollbackTransaction(connection) {
        await connection.executeQuery(CompiledQuery.raw("rollback"));
      }
      async releaseConnection(connection) {
        connection[PRIVATE_RELEASE_METHOD2]();
      }
      async destroy() {
        if (__privateGet(this, _pool2)) {
          const pool = __privateGet(this, _pool2);
          __privateSet(this, _pool2, void 0);
          await pool.end();
        }
      }
    };
    _config5 = new WeakMap();
    _connections3 = new WeakMap();
    _pool2 = new WeakMap();
    PostgresConnection = class {
      constructor(client, options2) {
        __privateAdd(this, _client, void 0);
        __privateAdd(this, _options2, void 0);
        __privateSet(this, _client, client);
        __privateSet(this, _options2, options2);
      }
      async executeQuery(compiledQuery) {
        try {
          const result = await __privateGet(this, _client).query(compiledQuery.sql, [
            ...compiledQuery.parameters
          ]);
          if (result.command === "INSERT" || result.command === "UPDATE" || result.command === "DELETE") {
            const numAffectedRows = BigInt(result.rowCount);
            return {
              // TODO: remove.
              numUpdatedOrDeletedRows: numAffectedRows,
              numAffectedRows,
              rows: result.rows ?? []
            };
          }
          return {
            rows: result.rows ?? []
          };
        } catch (err) {
          throw extendStackTrace(err, new Error());
        }
      }
      async *streamQuery(compiledQuery, chunkSize) {
        if (!__privateGet(this, _options2).cursor) {
          throw new Error("'cursor' is not present in your postgres dialect config. It's required to make streaming work in postgres.");
        }
        if (!Number.isInteger(chunkSize) || chunkSize <= 0) {
          throw new Error("chunkSize must be a positive integer");
        }
        const cursor = __privateGet(this, _client).query(new (__privateGet(this, _options2)).cursor(compiledQuery.sql, compiledQuery.parameters.slice()));
        try {
          while (true) {
            const rows = await cursor.read(chunkSize);
            if (rows.length === 0) {
              break;
            }
            yield {
              rows
            };
          }
        } finally {
          await cursor.close();
        }
      }
      [PRIVATE_RELEASE_METHOD2]() {
        __privateGet(this, _client).release();
      }
    };
    _client = new WeakMap();
    _options2 = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/dialect/postgres/postgres-dialect-config.js
var init_postgres_dialect_config = __esm({
  "node_modules/kysely/dist/esm/dialect/postgres/postgres-dialect-config.js"() {
  }
});

// node_modules/kysely/dist/esm/dialect/postgres/postgres-dialect.js
var _config6, PostgresDialect;
var init_postgres_dialect = __esm({
  "node_modules/kysely/dist/esm/dialect/postgres/postgres-dialect.js"() {
    init_postgres_driver();
    init_postgres_introspector();
    init_postgres_query_compiler();
    init_postgres_adapter();
    PostgresDialect = class {
      constructor(config2) {
        __privateAdd(this, _config6, void 0);
        __privateSet(this, _config6, config2);
      }
      createDriver() {
        return new PostgresDriver(__privateGet(this, _config6));
      }
      createQueryCompiler() {
        return new PostgresQueryCompiler();
      }
      createAdapter() {
        return new PostgresAdapter();
      }
      createIntrospector(db2) {
        return new PostgresIntrospector(db2);
      }
    };
    _config6 = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/query-compiler/query-compiler.js
var init_query_compiler = __esm({
  "node_modules/kysely/dist/esm/query-compiler/query-compiler.js"() {
  }
});

// node_modules/kysely/dist/esm/migration/file-migration-provider.js
function isMigration(obj) {
  return isObject(obj) && isFunction(obj.up);
}
var _props34, FileMigrationProvider;
var init_file_migration_provider = __esm({
  "node_modules/kysely/dist/esm/migration/file-migration-provider.js"() {
    init_object_utils();
    FileMigrationProvider = class {
      constructor(props) {
        __privateAdd(this, _props34, void 0);
        __privateSet(this, _props34, props);
      }
      async getMigrations() {
        const migrations = {};
        const files = await __privateGet(this, _props34).fs.readdir(__privateGet(this, _props34).migrationFolder);
        for (const fileName of files) {
          if (fileName.endsWith(".js") || fileName.endsWith(".ts") && !fileName.endsWith(".d.ts") || fileName.endsWith(".mjs") || fileName.endsWith(".mts") && !fileName.endsWith(".d.mts")) {
            const migration = await import(
              /* webpackIgnore: true */
              __privateGet(this, _props34).path.join(__privateGet(this, _props34).migrationFolder, fileName)
            );
            const migrationKey = fileName.substring(0, fileName.lastIndexOf("."));
            if (isMigration(migration?.default)) {
              migrations[migrationKey] = migration.default;
            } else if (isMigration(migration)) {
              migrations[migrationKey] = migration;
            }
          }
        }
        return migrations;
      }
    };
    _props34 = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/plugin/kysely-plugin.js
var init_kysely_plugin = __esm({
  "node_modules/kysely/dist/esm/plugin/kysely-plugin.js"() {
  }
});

// node_modules/kysely/dist/esm/plugin/camel-case/camel-case-transformer.js
var _snakeCase, SnakeCaseTransformer;
var init_camel_case_transformer = __esm({
  "node_modules/kysely/dist/esm/plugin/camel-case/camel-case-transformer.js"() {
    init_operation_node_transformer();
    SnakeCaseTransformer = class extends OperationNodeTransformer {
      constructor(snakeCase) {
        super();
        __privateAdd(this, _snakeCase, void 0);
        __privateSet(this, _snakeCase, snakeCase);
      }
      transformIdentifier(node) {
        node = super.transformIdentifier(node);
        return {
          ...node,
          name: __privateGet(this, _snakeCase).call(this, node.name)
        };
      }
    };
    _snakeCase = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/plugin/camel-case/camel-case.js
function createSnakeCaseMapper({ upperCase = false, underscoreBeforeDigits = false, underscoreBetweenUppercaseLetters = false } = {}) {
  return memoize((str) => {
    if (str.length === 0) {
      return str;
    }
    const upper = str.toUpperCase();
    const lower = str.toLowerCase();
    let out = lower[0];
    for (let i = 1, l = str.length; i < l; ++i) {
      const char = str[i];
      const prevChar = str[i - 1];
      const upperChar = upper[i];
      const prevUpperChar = upper[i - 1];
      const lowerChar = lower[i];
      const prevLowerChar = lower[i - 1];
      if (underscoreBeforeDigits && isDigit(char) && !isDigit(prevChar)) {
        out += "_" + char;
        continue;
      }
      if (char === upperChar && upperChar !== lowerChar) {
        const prevCharacterIsUppercase = prevChar === prevUpperChar && prevUpperChar !== prevLowerChar;
        if (underscoreBetweenUppercaseLetters || !prevCharacterIsUppercase) {
          out += "_" + lowerChar;
        } else {
          out += lowerChar;
        }
      } else {
        out += char;
      }
    }
    if (upperCase) {
      return out.toUpperCase();
    } else {
      return out;
    }
  });
}
function createCamelCaseMapper({ upperCase = false } = {}) {
  return memoize((str) => {
    if (str.length === 0) {
      return str;
    }
    if (upperCase && isAllUpperCaseSnakeCase(str)) {
      str = str.toLowerCase();
    }
    let out = str[0];
    for (let i = 1, l = str.length; i < l; ++i) {
      const char = str[i];
      const prevChar = str[i - 1];
      if (char !== "_") {
        if (prevChar === "_") {
          out += char.toUpperCase();
        } else {
          out += char;
        }
      }
    }
    return out;
  });
}
function isAllUpperCaseSnakeCase(str) {
  for (let i = 1, l = str.length; i < l; ++i) {
    const char = str[i];
    if (char !== "_" && char !== char.toUpperCase()) {
      return false;
    }
  }
  return true;
}
function isDigit(char) {
  return char >= "0" && char <= "9";
}
function memoize(func) {
  const cache = /* @__PURE__ */ new Map();
  return (str) => {
    let mapped = cache.get(str);
    if (!mapped) {
      mapped = func(str);
      cache.set(str, mapped);
    }
    return mapped;
  };
}
var init_camel_case = __esm({
  "node_modules/kysely/dist/esm/plugin/camel-case/camel-case.js"() {
  }
});

// node_modules/kysely/dist/esm/plugin/camel-case/camel-case-plugin.js
function canMap(obj, opt) {
  return isObject(obj) && !isDate(obj) && !isBuffer(obj) && !isArrayBufferOrView(obj) && !opt?.maintainNestedObjectKeys;
}
var _camelCase, _snakeCase2, _snakeCaseTransformer, CamelCasePlugin;
var init_camel_case_plugin = __esm({
  "node_modules/kysely/dist/esm/plugin/camel-case/camel-case-plugin.js"() {
    init_object_utils();
    init_camel_case_transformer();
    init_camel_case();
    CamelCasePlugin = class {
      constructor(opt = {}) {
        __publicField(this, "opt");
        __privateAdd(this, _camelCase, void 0);
        __privateAdd(this, _snakeCase2, void 0);
        __privateAdd(this, _snakeCaseTransformer, void 0);
        this.opt = opt;
        __privateSet(this, _camelCase, createCamelCaseMapper(opt));
        __privateSet(this, _snakeCase2, createSnakeCaseMapper(opt));
        __privateSet(this, _snakeCaseTransformer, new SnakeCaseTransformer(this.snakeCase.bind(this)));
      }
      transformQuery(args) {
        return __privateGet(this, _snakeCaseTransformer).transformNode(args.node);
      }
      async transformResult(args) {
        if (args.result.rows && Array.isArray(args.result.rows)) {
          return {
            ...args.result,
            rows: args.result.rows.map((row) => this.mapRow(row))
          };
        }
        return args.result;
      }
      mapRow(row) {
        return Object.keys(row).reduce((obj, key2) => {
          let value = row[key2];
          if (Array.isArray(value)) {
            value = value.map((it) => canMap(it, this.opt) ? this.mapRow(it) : it);
          } else if (canMap(value, this.opt)) {
            value = this.mapRow(value);
          }
          obj[this.camelCase(key2)] = value;
          return obj;
        }, {});
      }
      snakeCase(str) {
        return __privateGet(this, _snakeCase2).call(this, str);
      }
      camelCase(str) {
        return __privateGet(this, _camelCase).call(this, str);
      }
    };
    _camelCase = new WeakMap();
    _snakeCase2 = new WeakMap();
    _snakeCaseTransformer = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/plugin/deduplicate-joins/deduplicate-joins-transformer.js
var _transformQuery, transformQuery_fn, _deduplicateJoins, deduplicateJoins_fn, DeduplicateJoinsTransformer;
var init_deduplicate_joins_transformer = __esm({
  "node_modules/kysely/dist/esm/plugin/deduplicate-joins/deduplicate-joins-transformer.js"() {
    init_operation_node_transformer();
    init_object_utils();
    DeduplicateJoinsTransformer = class extends OperationNodeTransformer {
      constructor() {
        super(...arguments);
        __privateAdd(this, _transformQuery);
        __privateAdd(this, _deduplicateJoins);
      }
      transformSelectQuery(node) {
        return __privateMethod(this, _transformQuery, transformQuery_fn).call(this, super.transformSelectQuery(node));
      }
      transformUpdateQuery(node) {
        return __privateMethod(this, _transformQuery, transformQuery_fn).call(this, super.transformUpdateQuery(node));
      }
      transformDeleteQuery(node) {
        return __privateMethod(this, _transformQuery, transformQuery_fn).call(this, super.transformDeleteQuery(node));
      }
    };
    _transformQuery = new WeakSet();
    transformQuery_fn = function(node) {
      if (!node.joins || node.joins.length === 0) {
        return node;
      }
      return freeze({
        ...node,
        joins: __privateMethod(this, _deduplicateJoins, deduplicateJoins_fn).call(this, node.joins)
      });
    };
    _deduplicateJoins = new WeakSet();
    deduplicateJoins_fn = function(joins) {
      const out = [];
      for (let i = 0; i < joins.length; ++i) {
        let foundDuplicate = false;
        for (let j = i + 1; j < joins.length; ++j) {
          if (compare(joins[i], joins[j])) {
            foundDuplicate = true;
            break;
          }
        }
        if (!foundDuplicate) {
          out.push(joins[i]);
        }
      }
      return freeze(out);
    };
  }
});

// node_modules/kysely/dist/esm/plugin/deduplicate-joins/deduplicate-joins-plugin.js
var _transformer3, DeduplicateJoinsPlugin;
var init_deduplicate_joins_plugin = __esm({
  "node_modules/kysely/dist/esm/plugin/deduplicate-joins/deduplicate-joins-plugin.js"() {
    init_deduplicate_joins_transformer();
    DeduplicateJoinsPlugin = class {
      constructor() {
        __privateAdd(this, _transformer3, new DeduplicateJoinsTransformer());
      }
      transformQuery(args) {
        return __privateGet(this, _transformer3).transformNode(args.node);
      }
      transformResult(args) {
        return Promise.resolve(args.result);
      }
    };
    _transformer3 = new WeakMap();
  }
});

// node_modules/kysely/dist/esm/operation-node/constraint-node.js
var init_constraint_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/constraint-node.js"() {
  }
});

// node_modules/kysely/dist/esm/operation-node/operation-node.js
var init_operation_node = __esm({
  "node_modules/kysely/dist/esm/operation-node/operation-node.js"() {
  }
});

// node_modules/kysely/dist/esm/util/column-type.js
var init_column_type = __esm({
  "node_modules/kysely/dist/esm/util/column-type.js"() {
  }
});

// node_modules/kysely/dist/esm/util/compilable.js
var init_compilable = __esm({
  "node_modules/kysely/dist/esm/util/compilable.js"() {
  }
});

// node_modules/kysely/dist/esm/util/explainable.js
var init_explainable = __esm({
  "node_modules/kysely/dist/esm/util/explainable.js"() {
  }
});

// node_modules/kysely/dist/esm/util/infer-result.js
var init_infer_result = __esm({
  "node_modules/kysely/dist/esm/util/infer-result.js"() {
  }
});

// node_modules/kysely/dist/esm/index.js
var init_esm = __esm({
  "node_modules/kysely/dist/esm/index.js"() {
    init_kysely();
    init_query_creator();
    init_expression();
    init_where_interface();
    init_returning_interface();
    init_having_interface();
    init_select_query_builder();
    init_insert_query_builder();
    init_update_query_builder();
    init_delete_query_builder();
    init_no_result_error();
    init_join_builder();
    init_expression_builder();
    init_function_module();
    init_insert_result();
    init_delete_result();
    init_update_result();
    init_on_conflict_builder();
    init_aggregate_function_builder();
    init_raw_builder();
    init_sql();
    init_query_executor();
    init_default_query_executor();
    init_noop_query_executor();
    init_query_executor_provider();
    init_default_query_compiler();
    init_compiled_query();
    init_schema();
    init_create_table_builder();
    init_create_type_builder();
    init_drop_table_builder();
    init_drop_type_builder();
    init_create_index_builder();
    init_drop_index_builder();
    init_create_schema_builder();
    init_drop_schema_builder();
    init_column_definition_builder();
    init_foreign_key_constraint_builder();
    init_alter_table_builder();
    init_create_view_builder();
    init_drop_view_builder();
    init_alter_column_builder();
    init_dynamic();
    init_driver();
    init_database_connection();
    init_connection_provider();
    init_default_connection_provider();
    init_single_connection_provider();
    init_dummy_driver();
    init_dialect();
    init_dialect_adapter();
    init_dialect_adapter_base();
    init_database_introspector();
    init_sqlite_dialect();
    init_sqlite_dialect_config();
    init_sqlite_driver();
    init_postgres_query_compiler();
    init_postgres_introspector();
    init_postgres_adapter();
    init_mysql_dialect();
    init_mysql_dialect_config();
    init_mysql_driver();
    init_mysql_query_compiler();
    init_mysql_introspector();
    init_mysql_adapter();
    init_postgres_driver();
    init_postgres_dialect_config();
    init_postgres_dialect();
    init_sqlite_query_compiler();
    init_sqlite_introspector();
    init_sqlite_adapter();
    init_default_query_compiler();
    init_query_compiler();
    init_migrator();
    init_file_migration_provider();
    init_kysely_plugin();
    init_camel_case_plugin();
    init_deduplicate_joins_plugin();
    init_with_schema_plugin();
    init_add_column_node();
    init_add_constraint_node();
    init_alias_node();
    init_alter_column_node();
    init_alter_table_node();
    init_and_node();
    init_check_constraint_node();
    init_column_definition_node();
    init_column_node();
    init_column_update_node();
    init_common_table_expression_node();
    init_common_table_expression_name_node();
    init_constraint_node();
    init_create_index_node();
    init_create_schema_node();
    init_create_table_node();
    init_create_type_node();
    init_create_view_node();
    init_data_type_node();
    init_default_value_node();
    init_delete_query_node();
    init_drop_column_node();
    init_drop_constraint_node();
    init_drop_index_node();
    init_drop_schema_node();
    init_drop_table_node();
    init_drop_type_node();
    init_drop_view_node();
    init_foreign_key_constraint_node();
    init_from_node();
    init_generated_node();
    init_group_by_item_node();
    init_group_by_node();
    init_having_node();
    init_identifier_node();
    init_insert_query_node();
    init_join_node();
    init_limit_node();
    init_list_node();
    init_modify_column_node();
    init_offset_node();
    init_on_conflict_node();
    init_on_duplicate_key_node();
    init_on_node();
    init_operation_node_source();
    init_operation_node_transformer();
    init_operation_node_visitor();
    init_operation_node();
    init_operator_node();
    init_or_node();
    init_order_by_item_node();
    init_order_by_node();
    init_parens_node();
    init_primary_constraint_node();
    init_primitive_value_list_node();
    init_query_node();
    init_raw_node();
    init_reference_node();
    init_references_node();
    init_rename_column_node();
    init_returning_node();
    init_select_all_node();
    init_select_query_node();
    init_select_query_node();
    init_selection_node();
    init_table_node();
    init_unique_constraint_node();
    init_update_query_node();
    init_value_list_node();
    init_value_node();
    init_values_node();
    init_where_node();
    init_with_node();
    init_explain_node();
    init_default_insert_value_node();
    init_aggregate_function_node();
    init_over_node();
    init_partition_by_node();
    init_partition_by_item_node();
    init_set_operation_node();
    init_binary_operation_node();
    init_unary_operation_node();
    init_using_node();
    init_column_type();
    init_compilable();
    init_explainable();
    init_log();
    init_infer_result();
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
function quote(text2) {
  return `'${escape2(text2)}'`;
}
function escape2(text2) {
  return text2.replace(re, replacement);
}
function replacement(text2) {
  switch (text2) {
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
function decode(text2) {
  return text2 ? decoder.decode(Uint8Array.from(bytes(text2))) : "";
}
function bytes(text2) {
  return text2.split("").map((c) => c.charCodeAt(0));
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
        const sql2 = args ? formatter(query, args) : query;
        const saved = await postJSON(this.config, url, { query: sql2, session: this.session });
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
          statement: sql2,
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

// node_modules/date-fns/esm/_lib/requiredArgs/index.js
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
  }
}
var init_requiredArgs = __esm({
  "node_modules/date-fns/esm/_lib/requiredArgs/index.js"() {
  }
});

// node_modules/date-fns/esm/toDate/index.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof2(obj2) {
      return typeof obj2;
    };
  } else {
    _typeof = function _typeof2(obj2) {
      return obj2 && typeof Symbol === "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    };
  }
  return _typeof(obj);
}
function toDate(argument) {
  requiredArgs(1, arguments);
  var argStr = Object.prototype.toString.call(argument);
  if (argument instanceof Date || _typeof(argument) === "object" && argStr === "[object Date]") {
    return new Date(argument.getTime());
  } else if (typeof argument === "number" || argStr === "[object Number]") {
    return new Date(argument);
  } else {
    if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}
var init_toDate = __esm({
  "node_modules/date-fns/esm/toDate/index.js"() {
    init_requiredArgs();
  }
});

// node_modules/date-fns/esm/constants/index.js
var daysInYear, maxTime, minTime, secondsInHour, secondsInDay, secondsInWeek, secondsInYear, secondsInMonth, secondsInQuarter;
var init_constants = __esm({
  "node_modules/date-fns/esm/constants/index.js"() {
    daysInYear = 365.2425;
    maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
    minTime = -maxTime;
    secondsInHour = 3600;
    secondsInDay = secondsInHour * 24;
    secondsInWeek = secondsInDay * 7;
    secondsInYear = secondsInDay * daysInYear;
    secondsInMonth = secondsInYear / 12;
    secondsInQuarter = secondsInMonth * 3;
  }
});

// node_modules/date-fns/esm/parseJSON/index.js
function parseJSON(argument) {
  requiredArgs(1, arguments);
  if (typeof argument === "string") {
    var parts = argument.match(/(\d{4})-(\d{2})-(\d{2})[T ](\d{2}):(\d{2}):(\d{2})(?:\.(\d{0,7}))?(?:Z|(.)(\d{2}):?(\d{2})?)?/);
    if (parts) {
      return new Date(Date.UTC(+parts[1], +parts[2] - 1, +parts[3], +parts[4] - (+parts[9] || 0) * (parts[8] == "-" ? -1 : 1), +parts[5] - (+parts[10] || 0) * (parts[8] == "-" ? -1 : 1), +parts[6], +((parts[7] || "0") + "00").substring(0, 3)));
    }
    return new Date(NaN);
  }
  return toDate(argument);
}
var init_parseJSON = __esm({
  "node_modules/date-fns/esm/parseJSON/index.js"() {
    init_toDate();
    init_requiredArgs();
  }
});

// node_modules/date-fns/esm/index.js
var init_esm2 = __esm({
  "node_modules/date-fns/esm/index.js"() {
    init_parseJSON();
    init_constants();
  }
});

// node_modules/kysely-planetscale/dist/index.js
function inflateDates(field, value) {
  if (field.type === "DATETIME" && value)
    return parseJSON(value);
  if (field.type === "TIMESTAMP" && value)
    return parseJSON(value);
  return cast(field, value);
}
function formatDate(date) {
  return date.toISOString().replace(/[TZ]/g, " ").trim();
}
var __accessCheck2, __privateGet2, __privateAdd2, __privateSet2, _config7, PlanetScaleDialect, _config22, PlanetScaleDriver, sharedConnections, _config32, _conn, _transactionClient, _PlanetScaleConnection, PlanetScaleConnection;
var init_dist2 = __esm({
  "node_modules/kysely-planetscale/dist/index.js"() {
    init_dist();
    init_esm2();
    init_esm();
    __accessCheck2 = (obj, member, msg) => {
      if (!member.has(obj))
        throw TypeError("Cannot " + msg);
    };
    __privateGet2 = (obj, member, getter) => {
      __accessCheck2(obj, member, "read from private field");
      return getter ? getter.call(obj) : member.get(obj);
    };
    __privateAdd2 = (obj, member, value) => {
      if (member.has(obj))
        throw TypeError("Cannot add the same private member more than once");
      member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
    };
    __privateSet2 = (obj, member, value, setter) => {
      __accessCheck2(obj, member, "write to private field");
      setter ? setter.call(obj, value) : member.set(obj, value);
      return value;
    };
    PlanetScaleDialect = class {
      constructor(config2) {
        __privateAdd2(this, _config7, void 0);
        __privateSet2(this, _config7, config2);
      }
      createAdapter() {
        return new MysqlAdapter();
      }
      createDriver() {
        return new PlanetScaleDriver(__privateGet2(this, _config7));
      }
      createQueryCompiler() {
        return new MysqlQueryCompiler();
      }
      createIntrospector(db2) {
        return new MysqlIntrospector(db2);
      }
    };
    _config7 = /* @__PURE__ */ new WeakMap();
    PlanetScaleDriver = class {
      constructor(config2) {
        __privateAdd2(this, _config22, void 0);
        __privateSet2(this, _config22, config2);
      }
      async init() {
      }
      async acquireConnection() {
        return new PlanetScaleConnection(__privateGet2(this, _config22));
      }
      async beginTransaction(conn) {
        return await conn.beginTransaction();
      }
      async commitTransaction(conn) {
        return await conn.commitTransaction();
      }
      async rollbackTransaction(conn) {
        return await conn.rollbackTransaction();
      }
      async releaseConnection(_conn2) {
      }
      async destroy() {
      }
    };
    _config22 = /* @__PURE__ */ new WeakMap();
    sharedConnections = /* @__PURE__ */ new WeakMap();
    _PlanetScaleConnection = class {
      constructor(config2, isForTransaction = false) {
        __privateAdd2(this, _config32, void 0);
        __privateAdd2(this, _conn, void 0);
        __privateAdd2(this, _transactionClient, void 0);
        __privateSet2(this, _config32, config2);
        const useSharedConnection = config2.useSharedConnection && !isForTransaction;
        const sharedConnection = useSharedConnection ? sharedConnections.get(config2) : void 0;
        __privateSet2(this, _conn, sharedConnection ?? connect({ cast: inflateDates, ...config2 }));
        if (useSharedConnection)
          sharedConnections.set(config2, __privateGet2(this, _conn));
      }
      async executeQuery(compiledQuery) {
        if (__privateGet2(this, _transactionClient))
          return __privateGet2(this, _transactionClient).executeQuery(compiledQuery);
        const parameters = __privateGet2(this, _config32).format ? compiledQuery.parameters : compiledQuery.parameters.map((param) => param instanceof Date ? formatDate(param) : param);
        const results = await __privateGet2(this, _conn).execute(compiledQuery.sql, parameters);
        if (results.error) {
          throw results.error;
        }
        const numAffectedRows = results.rowsAffected == null ? void 0 : BigInt(results.rowsAffected);
        return {
          insertId: results.insertId !== null && results.insertId.toString() !== "0" ? BigInt(results.insertId) : void 0,
          rows: results.rows,
          numAffectedRows,
          numUpdatedOrDeletedRows: numAffectedRows
        };
      }
      async beginTransaction() {
        __privateSet2(this, _transactionClient, __privateGet2(this, _transactionClient) ?? new _PlanetScaleConnection(__privateGet2(this, _config32), true));
        await __privateGet2(__privateGet2(this, _transactionClient), _conn).execute("BEGIN");
      }
      async commitTransaction() {
        if (!__privateGet2(this, _transactionClient))
          throw new Error("No transaction to commit");
        try {
          await __privateGet2(__privateGet2(this, _transactionClient), _conn).execute("COMMIT");
        } finally {
          __privateSet2(this, _transactionClient, void 0);
        }
      }
      async rollbackTransaction() {
        if (!__privateGet2(this, _transactionClient))
          throw new Error("No transaction to rollback");
        try {
          await __privateGet2(__privateGet2(this, _transactionClient), _conn).execute("ROLLBACK");
        } finally {
          __privateSet2(this, _transactionClient, void 0);
        }
      }
      async *streamQuery(_compiledQuery, _chunkSize) {
        throw new Error("PlanetScale Serverless Driver does not support streaming");
      }
    };
    PlanetScaleConnection = _PlanetScaleConnection;
    _config32 = /* @__PURE__ */ new WeakMap();
    _conn = /* @__PURE__ */ new WeakMap();
    _transactionClient = /* @__PURE__ */ new WeakMap();
  }
});

// .svelte-kit/output/server/entries/pages/_page.server.ts.js
var page_server_ts_exports = {};
__export(page_server_ts_exports, {
  load: () => load
});
var DATABASE_HOST, DATABASE_USERNAME, DATABASE_PASSWORD, config, db, load;
var init_page_server_ts = __esm({
  ".svelte-kit/output/server/entries/pages/_page.server.ts.js"() {
    init_esm();
    init_dist2();
    DATABASE_HOST = "aws.connect.psdb.cloud";
    DATABASE_USERNAME = "iyz353bu12xx48pu7nnt";
    DATABASE_PASSWORD = "pscale_pw_kZomBLa42n2pmfKoCGO0WKCFwTx2IWYHxpA6Hlv4trn";
    config = {
      host: DATABASE_HOST,
      username: DATABASE_USERNAME,
      password: DATABASE_PASSWORD
    };
    db = new Kysely({
      dialect: new PlanetScaleDialect(config)
    });
    load = async () => {
      const { id } = await db.insertInto("person").values({ first_name: "Jennifer", gender: "female" }).returning("id").executeTakeFirstOrThrow();
      await db.insertInto("pet").values({ name: "Catto", species: "cat", owner_id: id }).execute();
      const person = await db.selectFrom("person").innerJoin("pet", "pet.owner_id", "person.id").select(["first_name", "pet.name as pet_name"]).where("person.id", "=", id).executeTakeFirst();
      if (person) {
        person.pet_name;
      }
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
  version_hash: "6i7n5p"
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
        async function text2() {
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
          return text2;
        }
        if (key2 === "json") {
          return async () => {
            return JSON.parse(await text2());
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
    client: { "start": { "file": "_app/immutable/entry/start.8b4fe694.js", "imports": ["_app/immutable/entry/start.8b4fe694.js", "_app/immutable/chunks/index.847936d9.js", "_app/immutable/chunks/singletons.c42d62ce.js"], "stylesheets": [], "fonts": [] }, "app": { "file": "_app/immutable/entry/app.58a9c45f.js", "imports": ["_app/immutable/entry/app.58a9c45f.js", "_app/immutable/chunks/index.847936d9.js"], "stylesheets": [], "fonts": [] } },
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
