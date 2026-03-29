var oc = Object.defineProperty;
var uc = (e, i, n) => i in e ? oc(e, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[i] = n;
var L = (e, i, n) => uc(e, typeof i != "symbol" ? i + "" : i, n);
import { EmbeddedResourceSchema as sc, ResourceLinkSchema as lc, ContentBlockSchema as la, CallToolResultSchema as da, ToolSchema as dc, RequestIdSchema as cc, ImplementationSchema as ca, PingRequestSchema as mc, LoggingMessageNotificationSchema as fc, CallToolRequestSchema as pc, ListResourcesRequestSchema as vc, ListResourceTemplatesRequestSchema as gc, ReadResourceRequestSchema as hc, ListPromptsRequestSchema as $c, ToolListChangedNotificationSchema as bc, ListResourcesResultSchema as yc, ListResourceTemplatesResultSchema as _c, ReadResourceResultSchema as kc, ResourceListChangedNotificationSchema as Ic, ListPromptsResultSchema as xc, PromptListChangedNotificationSchema as wc, JSONRPCMessageSchema as Sc, McpError as Ni, ErrorCode as Pi } from "@modelcontextprotocol/sdk/types.js";
import { Protocol as zc } from "@modelcontextprotocol/sdk/shared/protocol.js";
import { jsx as ma, jsxs as fa } from "react/jsx-runtime";
import { useState as Pe, useRef as C, useEffect as ne, forwardRef as Uc, useImperativeHandle as Oc } from "react";
const Mr = "mcpui.dev/ui-";
function jc(e) {
  return e._meta ?? {};
}
function Hv(e) {
  const i = jc(e), n = {};
  return Object.entries(i).forEach(([a, t]) => {
    a.startsWith(Mr) && (n[a.slice(Mr.length)] = t);
  }), n;
}
function Xv(e) {
  var i, n;
  return (e.type === "resource" && ((n = (i = e.resource) == null ? void 0 : i.uri) == null ? void 0 : n.startsWith("ui://"))) ?? !1;
}
var Zc = Object.defineProperty, Nc = (e) => e;
function Pc(e, i) {
  this[e] = Nc.bind(null, i);
}
var le = (e, i) => {
  for (var n in i) Zc(e, n, { get: i[n], enumerable: !0, configurable: !0, set: Pc.bind(i, n) });
}, pa = "2026-01-26", Dc = "ui/notifications/sandbox-proxy-ready", l = {};
le(l, { xor: () => Nd, xid: () => td, void: () => Sd, uuidv7: () => Gl, uuidv6: () => Vl, uuidv4: () => Wl, uuid: () => ql, util: () => S, url: () => Kl, uppercase: () => qt, unknown: () => we, union: () => yi, undefined: () => xd, ulid: () => ed, uint64: () => kd, uint32: () => bd, tuple: () => sr, trim: () => Ht, treeifyError: () => Oa, transform: () => ki, toUpperCase: () => Yt, toLowerCase: () => Xt, toJSONSchema: () => kl, templateLiteral: () => Wd, symbol: () => Id, superRefine: () => Er, success: () => Md, stringbool: () => Yd, stringFormat: () => md, string: () => Pt, strictObject: () => jd, startsWith: () => Vt, slugify: () => Qt, size: () => lt, setErrorMap: () => iv, set: () => Ad, safeParseAsync: () => Pl, safeParse: () => Nl, safeEncodeAsync: () => Ll, safeEncode: () => Rl, safeDecodeAsync: () => Jl, safeDecode: () => Cl, registry: () => mn, regexes: () => ze, regex: () => Mt, refine: () => Dr, record: () => lr, readonly: () => Ur, property: () => An, promise: () => Vd, prettifyError: () => Za, preprocess: () => ec, prefault: () => _r, positive: () => Pn, pipe: () => Ye, partialRecord: () => Dd, parseAsync: () => Zl, parse: () => jl, overwrite: () => ce, optional: () => He, object: () => Od, number: () => Vn, nullish: () => Jd, nullable: () => Xe, null: () => Xn, normalize: () => Bt, nonpositive: () => En, nonoptional: () => kr, nonnegative: () => Tn, never: () => $i, negative: () => Dn, nativeEnum: () => Rd, nanoid: () => Xl, nan: () => Fd, multipleOf: () => Te, minSize: () => ve, minLength: () => xe, mime: () => Kt, meta: () => Hd, maxSize: () => Je, maxLength: () => dt, map: () => Td, mac: () => rd, lte: () => ee, lt: () => fe, lowercase: () => Ft, looseRecord: () => Ed, looseObject: () => Zd, locales: () => cn, literal: () => Cd, length: () => ct, lazy: () => Zr, ksuid: () => id, keyof: () => Ud, jwt: () => cd, json: () => Qd, iso: () => Ln, ipv6: () => ad, ipv4: () => nd, intersection: () => or, int64: () => _d, int32: () => $d, int: () => Dt, instanceof: () => Xd, includes: () => Wt, httpUrl: () => Bl, hostname: () => fd, hex: () => pd, hash: () => vd, guid: () => Fl, gte: () => V, gt: () => pe, globalRegistry: () => Q, getErrorMap: () => nv, function: () => Et, fromJSONSchema: () => uv, formatError: () => qi, float64: () => hd, float32: () => gd, flattenError: () => Fi, file: () => Ld, exactOptional: () => gr, enum: () => _i, endsWith: () => Gt, encodeAsync: () => Tl, encode: () => Dl, emoji: () => Hl, email: () => Ml, e164: () => dd, discriminatedUnion: () => Pd, describe: () => Bd, decodeAsync: () => Al, decode: () => El, date: () => zd, custom: () => Kd, cuid2: () => Ql, cuid: () => Yl, core: () => va, config: () => F, coerce: () => ic, codec: () => qd, clone: () => ie, cidrv6: () => ud, cidrv4: () => od, check: () => Gd, catch: () => wr, boolean: () => Gn, bigint: () => yd, base64url: () => ld, base64: () => sd, array: () => $t, any: () => wd, _function: () => Et, _default: () => br, _ZodString: () => ei, ZodXor: () => nr, ZodXID: () => ui, ZodVoid: () => tr, ZodUnknown: () => Qn, ZodUnion: () => yt, ZodUndefined: () => Bn, ZodUUID: () => oe, ZodURL: () => pt, ZodULID: () => oi, ZodType: () => I, ZodTuple: () => ur, ZodTransform: () => pr, ZodTemplateLiteral: () => Or, ZodSymbol: () => Kn, ZodSuccess: () => Ir, ZodStringFormat: () => N, ZodString: () => ft, ZodSet: () => cr, ZodRecord: () => _t, ZodRealError: () => B, ZodReadonly: () => zr, ZodPromise: () => Nr, ZodPrefault: () => yr, ZodPipe: () => wi, ZodOptional: () => Ii, ZodObject: () => bt, ZodNumberFormat: () => Ue, ZodNumber: () => vt, ZodNullable: () => hr, ZodNull: () => Hn, ZodNonOptional: () => xi, ZodNever: () => er, ZodNanoID: () => ni, ZodNaN: () => Sr, ZodMap: () => dr, ZodMAC: () => Wn, ZodLiteral: () => mr, ZodLazy: () => jr, ZodKSUID: () => si, ZodJWT: () => gi, ZodIssueCode: () => tv, ZodIntersection: () => ar, ZodISOTime: () => Fn, ZodISODuration: () => qn, ZodISODateTime: () => Jn, ZodISODate: () => Mn, ZodIPv6: () => di, ZodIPv4: () => li, ZodGUID: () => Be, ZodFunction: () => Pr, ZodFirstPartyTypeKind: () => Ci, ZodFile: () => fr, ZodExactOptional: () => vr, ZodError: () => ev, ZodEnum: () => Le, ZodEmoji: () => ii, ZodEmail: () => ti, ZodE164: () => vi, ZodDiscriminatedUnion: () => rr, ZodDefault: () => $r, ZodDate: () => bi, ZodCustomStringFormat: () => Me, ZodCustom: () => kt, ZodCodec: () => Si, ZodCatch: () => xr, ZodCUID2: () => ai, ZodCUID: () => ri, ZodCIDRv6: () => mi, ZodCIDRv4: () => ci, ZodBoolean: () => gt, ZodBigIntFormat: () => hi, ZodBigInt: () => ht, ZodBase64URL: () => pi, ZodBase64: () => fi, ZodArray: () => ir, ZodAny: () => Yn, TimePrecision: () => ts, NEVER: () => ga, $output: () => Bu, $input: () => Hu, $brand: () => ha });
var va = {};
le(va, { version: () => No, util: () => S, treeifyError: () => Oa, toJSONSchema: () => kl, toDotPath: () => ja, safeParseAsync: () => Pa, safeParse: () => Na, safeEncodeAsync: () => fm, safeEncode: () => cm, safeDecodeAsync: () => pm, safeDecode: () => mm, registry: () => mn, regexes: () => ze, process: () => O, prettifyError: () => Za, parseAsync: () => Ti, parse: () => Ei, meta: () => Ts, locales: () => cn, isValidJWT: () => nu, isValidBase64URL: () => eu, isValidBase64: () => rn, initializeContext: () => Ae, globalRegistry: () => Q, globalConfig: () => zt, formatError: () => qi, flattenError: () => Fi, finalize: () => Ce, extractDefs: () => Re, encodeAsync: () => lm, encode: () => um, describe: () => Es, decodeAsync: () => dm, decode: () => sm, createToJSONSchemaMethod: () => Rs, createStandardJSONSchemaMethod: () => Ke, config: () => F, clone: () => ie, _xor: () => Op, _xid: () => In, _void: () => ws, _uuidv7: () => hn, _uuidv6: () => gn, _uuidv4: () => vn, _uuid: () => pn, _url: () => Jt, _uppercase: () => qt, _unknown: () => Is, _union: () => Up, _undefined: () => ys, _ulid: () => kn, _uint64: () => $s, _uint32: () => ms, _tuple: () => Np, _trim: () => Ht, _transform: () => Cp, _toUpperCase: () => Yt, _toLowerCase: () => Xt, _templateLiteral: () => Kp, _symbol: () => bs, _superRefine: () => Ps, _success: () => qp, _stringbool: () => As, _stringFormat: () => mt, _string: () => Yu, _startsWith: () => Vt, _slugify: () => Qt, _size: () => lt, _set: () => Ep, _safeParseAsync: () => rt, _safeParse: () => nt, _safeEncodeAsync: () => Xi, _safeEncode: () => Bi, _safeDecodeAsync: () => Yi, _safeDecode: () => Hi, _regex: () => Mt, _refine: () => Ns, _record: () => Pp, _readonly: () => Gp, _property: () => An, _promise: () => Hp, _positive: () => Pn, _pipe: () => Vp, _parseAsync: () => it, _parse: () => tt, _overwrite: () => ce, _optional: () => Lp, _number: () => os, _nullable: () => Jp, _null: () => _s, _normalize: () => Bt, _nonpositive: () => En, _nonoptional: () => Fp, _nonnegative: () => Tn, _never: () => xs, _negative: () => Dn, _nativeEnum: () => Ap, _nanoid: () => bn, _nan: () => Us, _multipleOf: () => Te, _minSize: () => ve, _minLength: () => xe, _min: () => V, _mime: () => Kt, _maxSize: () => Je, _maxLength: () => dt, _max: () => ee, _map: () => Dp, _mac: () => es, _lte: () => ee, _lt: () => fe, _lowercase: () => Ft, _literal: () => Rp, _length: () => ct, _lazy: () => Bp, _ksuid: () => xn, _jwt: () => Nn, _isoTime: () => rs, _isoDuration: () => as, _isoDateTime: () => is, _isoDate: () => ns, _ipv6: () => Sn, _ipv4: () => wn, _intersection: () => Zp, _int64: () => hs, _int32: () => cs, _int: () => ss, _includes: () => Wt, _guid: () => Nt, _gte: () => V, _gt: () => pe, _float64: () => ds, _float32: () => ls, _file: () => js, _enum: () => Tp, _endsWith: () => Gt, _encodeAsync: () => Gi, _encode: () => Wi, _emoji: () => $n, _email: () => fn, _e164: () => Zn, _discriminatedUnion: () => jp, _default: () => Mp, _decodeAsync: () => Ki, _decode: () => Vi, _date: () => Ss, _custom: () => Zs, _cuid2: () => _n, _cuid: () => yn, _coercedString: () => Qu, _coercedNumber: () => us, _coercedDate: () => zs, _coercedBoolean: () => ps, _coercedBigint: () => gs, _cidrv6: () => Un, _cidrv4: () => zn, _check: () => Ds, _catch: () => Wp, _boolean: () => fs, _bigint: () => vs, _base64url: () => jn, _base64: () => On, _array: () => Os, _any: () => ks, TimePrecision: () => ts, NEVER: () => ga, JSONSchemaGenerator: () => Yp, JSONSchema: () => Qp, Doc: () => Zo, $output: () => Bu, $input: () => Hu, $constructor: () => f, $brand: () => ha, $ZodXor: () => _u, $ZodXID: () => Mo, $ZodVoid: () => pu, $ZodUnknown: () => mu, $ZodUnion: () => Lt, $ZodUndefined: () => lu, $ZodUUID: () => Do, $ZodURL: () => To, $ZodULID: () => Jo, $ZodType: () => k, $ZodTuple: () => sn, $ZodTransform: () => ju, $ZodTemplateLiteral: () => Ju, $ZodSymbol: () => su, $ZodSuccess: () => Tu, $ZodStringFormat: () => Z, $ZodString: () => st, $ZodSet: () => Su, $ZodRegistry: () => Xu, $ZodRecord: () => xu, $ZodRealError: () => K, $ZodReadonly: () => Lu, $ZodPromise: () => Fu, $ZodPrefault: () => Du, $ZodPipe: () => Cu, $ZodOptional: () => ln, $ZodObjectJIT: () => yu, $ZodObject: () => bu, $ZodNumberFormat: () => ou, $ZodNumber: () => an, $ZodNullable: () => Nu, $ZodNull: () => du, $ZodNonOptional: () => Eu, $ZodNever: () => fu, $ZodNanoID: () => Ro, $ZodNaN: () => Ru, $ZodMap: () => wu, $ZodMAC: () => Ho, $ZodLiteral: () => Uu, $ZodLazy: () => qu, $ZodKSUID: () => Fo, $ZodJWT: () => ru, $ZodIntersection: () => Iu, $ZodISOTime: () => Vo, $ZodISODuration: () => Go, $ZodISODateTime: () => qo, $ZodISODate: () => Wo, $ZodIPv6: () => Bo, $ZodIPv4: () => Ko, $ZodGUID: () => Po, $ZodFunction: () => Mu, $ZodFile: () => Ou, $ZodExactOptional: () => Zu, $ZodError: () => Mi, $ZodEnum: () => zu, $ZodEncodeError: () => Tt, $ZodEmoji: () => Ao, $ZodEmail: () => Eo, $ZodE164: () => iu, $ZodDiscriminatedUnion: () => ku, $ZodDefault: () => Pu, $ZodDate: () => vu, $ZodCustomStringFormat: () => au, $ZodCustom: () => Wu, $ZodCodec: () => dn, $ZodCheckUpperCase: () => xo, $ZodCheckStringFormat: () => ut, $ZodCheckStartsWith: () => So, $ZodCheckSizeEquals: () => $o, $ZodCheckRegex: () => ko, $ZodCheckProperty: () => Uo, $ZodCheckOverwrite: () => jo, $ZodCheckNumberFormat: () => po, $ZodCheckMultipleOf: () => fo, $ZodCheckMinSize: () => ho, $ZodCheckMinLength: () => yo, $ZodCheckMimeType: () => Oo, $ZodCheckMaxSize: () => go, $ZodCheckMaxLength: () => bo, $ZodCheckLowerCase: () => Io, $ZodCheckLessThan: () => tn, $ZodCheckLengthEquals: () => _o, $ZodCheckIncludes: () => wo, $ZodCheckGreaterThan: () => nn, $ZodCheckEndsWith: () => zo, $ZodCheckBigIntFormat: () => vo, $ZodCheck: () => E, $ZodCatch: () => Au, $ZodCUID2: () => Lo, $ZodCUID: () => Co, $ZodCIDRv6: () => Yo, $ZodCIDRv4: () => Xo, $ZodBoolean: () => on, $ZodBigIntFormat: () => uu, $ZodBigInt: () => un, $ZodBase64URL: () => tu, $ZodBase64: () => Qo, $ZodAsyncError: () => ke, $ZodArray: () => gu, $ZodAny: () => cu });
var ga = Object.freeze({ status: "aborted" });
function f(e, i, n) {
  function a(u, d) {
    if (u._zod || Object.defineProperty(u, "_zod", { value: { def: d, constr: o, traits: /* @__PURE__ */ new Set() }, enumerable: !1 }), u._zod.traits.has(e)) return;
    u._zod.traits.add(e), i(u, d);
    let s = o.prototype, m = Object.keys(s);
    for (let c = 0; c < m.length; c++) {
      let p = m[c];
      p in u || (u[p] = s[p].bind(u));
    }
  }
  let t = (n == null ? void 0 : n.Parent) ?? Object;
  class r extends t {
  }
  Object.defineProperty(r, "name", { value: e });
  function o(u) {
    var d;
    let s = n != null && n.Parent ? new r() : this;
    a(s, u), (d = s._zod).deferred ?? (d.deferred = []);
    for (let m of s._zod.deferred) m();
    return s;
  }
  return Object.defineProperty(o, "init", { value: a }), Object.defineProperty(o, Symbol.hasInstance, { value: (u) => {
    var d, s;
    return n != null && n.Parent && u instanceof n.Parent ? !0 : (s = (d = u == null ? void 0 : u._zod) == null ? void 0 : d.traits) == null ? void 0 : s.has(e);
  } }), Object.defineProperty(o, "name", { value: e }), o;
}
var ha = Symbol("zod_brand");
class ke extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Tt extends Error {
  constructor(i) {
    super(`Encountered unidirectional transform during encode: ${i}`), this.name = "ZodEncodeError";
  }
}
var zt = {};
function F(e) {
  return e && Object.assign(zt, e), zt;
}
var S = {};
le(S, { unwrapMessage: () => Ge, uint8ArrayToHex: () => am, uint8ArrayToBase64url: () => nm, uint8ArrayToBase64: () => za, stringifyPrimitive: () => b, slugify: () => ba, shallowClone: () => _a, safeExtend: () => Xc, required: () => em, randomString: () => qc, propertyKeyTypes: () => Ot, promiseAllObject: () => Fc, primitiveTypes: () => ka, prefixIssues: () => re, pick: () => Kc, partial: () => Qc, parsedType: () => _, optionalKeys: () => Ia, omit: () => Bc, objectClone: () => Lc, numKeys: () => Wc, nullish: () => Se, normalizeParams: () => g, mergeDefs: () => de, merge: () => Yc, jsonStringifyReplacer: () => Ut, joinValues: () => v, issue: () => jt, isPlainObject: () => Ie, isObject: () => De, hexToUint8Array: () => rm, getSizableOrigin: () => Rt, getParsedType: () => Vc, getLengthableOrigin: () => Ct, getEnumValues: () => Li, getElementAtPath: () => Mc, floatSafeRemainder: () => $a, finalizeIssue: () => te, extend: () => Hc, escapeRegex: () => se, esc: () => Di, defineLazy: () => w, createTransparentProxy: () => Gc, cloneDef: () => Jc, clone: () => ie, cleanRegex: () => At, cleanEnum: () => tm, captureStackTrace: () => Ji, cached: () => et, base64urlToUint8Array: () => im, base64ToUint8Array: () => Sa, assignProp: () => ge, assertNotEqual: () => Tc, assertNever: () => Rc, assertIs: () => Ac, assertEqual: () => Ec, assert: () => Cc, allowsEval: () => ya, aborted: () => _e, NUMBER_FORMAT_RANGES: () => xa, Class: () => om, BIGINT_FORMAT_RANGES: () => wa });
function Ec(e) {
  return e;
}
function Tc(e) {
  return e;
}
function Ac(e) {
}
function Rc(e) {
  throw Error("Unexpected value in exhaustive check");
}
function Cc(e) {
}
function Li(e) {
  let i = Object.values(e).filter((n) => typeof n == "number");
  return Object.entries(e).filter(([n, a]) => i.indexOf(+n) === -1).map(([n, a]) => a);
}
function v(e, i = "|") {
  return e.map((n) => b(n)).join(i);
}
function Ut(e, i) {
  return typeof i == "bigint" ? i.toString() : i;
}
function et(e) {
  return { get value() {
    {
      let i = e();
      return Object.defineProperty(this, "value", { value: i }), i;
    }
  } };
}
function Se(e) {
  return e == null;
}
function At(e) {
  let i = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(i, n);
}
function $a(e, i) {
  let n = (e.toString().split(".")[1] || "").length, a = i.toString(), t = (a.split(".")[1] || "").length;
  if (t === 0 && /\d?e-\d?/.test(a)) {
    let d = a.match(/\d?e-(\d?)/);
    d != null && d[1] && (t = Number.parseInt(d[1]));
  }
  let r = n > t ? n : t, o = Number.parseInt(e.toFixed(r).replace(".", "")), u = Number.parseInt(i.toFixed(r).replace(".", ""));
  return o % u / 10 ** r;
}
var Fr = Symbol("evaluating");
function w(e, i, n) {
  let a;
  Object.defineProperty(e, i, { get() {
    if (a !== Fr)
      return a === void 0 && (a = Fr, a = n()), a;
  }, set(t) {
    Object.defineProperty(e, i, { value: t });
  }, configurable: !0 });
}
function Lc(e) {
  return Object.create(Object.getPrototypeOf(e), Object.getOwnPropertyDescriptors(e));
}
function ge(e, i, n) {
  Object.defineProperty(e, i, { value: n, writable: !0, enumerable: !0, configurable: !0 });
}
function de(...e) {
  let i = {};
  for (let n of e) {
    let a = Object.getOwnPropertyDescriptors(n);
    Object.assign(i, a);
  }
  return Object.defineProperties({}, i);
}
function Jc(e) {
  return de(e._zod.def);
}
function Mc(e, i) {
  return i ? i.reduce((n, a) => n == null ? void 0 : n[a], e) : e;
}
function Fc(e) {
  let i = Object.keys(e), n = i.map((a) => e[a]);
  return Promise.all(n).then((a) => {
    let t = {};
    for (let r = 0; r < i.length; r++) t[i[r]] = a[r];
    return t;
  });
}
function qc(e = 10) {
  let i = "";
  for (let n = 0; n < e; n++) i += "abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random() * 26)];
  return i;
}
function Di(e) {
  return JSON.stringify(e);
}
function ba(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var Ji = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function De(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
var ya = et(() => {
  var e;
  if (typeof navigator < "u" && ((e = navigator == null ? void 0 : navigator.userAgent) != null && e.includes("Cloudflare"))) return !1;
  try {
    return new Function(""), !0;
  } catch {
    return !1;
  }
});
function Ie(e) {
  if (De(e) === !1) return !1;
  let i = e.constructor;
  if (i === void 0 || typeof i != "function") return !0;
  let n = i.prototype;
  return !(De(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function _a(e) {
  return Ie(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
function Wc(e) {
  let i = 0;
  for (let n in e) Object.prototype.hasOwnProperty.call(e, n) && i++;
  return i;
}
var Vc = (e) => {
  let i = typeof e;
  switch (i) {
    case "undefined":
      return "undefined";
    case "string":
      return "string";
    case "number":
      return Number.isNaN(e) ? "nan" : "number";
    case "boolean":
      return "boolean";
    case "function":
      return "function";
    case "bigint":
      return "bigint";
    case "symbol":
      return "symbol";
    case "object":
      return Array.isArray(e) ? "array" : e === null ? "null" : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? "promise" : typeof Map < "u" && e instanceof Map ? "map" : typeof Set < "u" && e instanceof Set ? "set" : typeof Date < "u" && e instanceof Date ? "date" : typeof File < "u" && e instanceof File ? "file" : "object";
    default:
      throw Error(`Unknown data type: ${i}`);
  }
}, Ot = /* @__PURE__ */ new Set(["string", "number", "symbol"]), ka = /* @__PURE__ */ new Set(["string", "number", "bigint", "boolean", "symbol", "undefined"]);
function se(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ie(e, i, n) {
  let a = new e._zod.constr(i ?? e._zod.def);
  return (!i || n != null && n.parent) && (a._zod.parent = e), a;
}
function g(e) {
  let i = e;
  if (!i) return {};
  if (typeof i == "string") return { error: () => i };
  if ((i == null ? void 0 : i.message) !== void 0) {
    if ((i == null ? void 0 : i.error) !== void 0) throw Error("Cannot specify both `message` and `error` params");
    i.error = i.message;
  }
  return delete i.message, typeof i.error == "string" ? { ...i, error: () => i.error } : i;
}
function Gc(e) {
  let i;
  return new Proxy({}, { get(n, a, t) {
    return i ?? (i = e()), Reflect.get(i, a, t);
  }, set(n, a, t, r) {
    return i ?? (i = e()), Reflect.set(i, a, t, r);
  }, has(n, a) {
    return i ?? (i = e()), Reflect.has(i, a);
  }, deleteProperty(n, a) {
    return i ?? (i = e()), Reflect.deleteProperty(i, a);
  }, ownKeys(n) {
    return i ?? (i = e()), Reflect.ownKeys(i);
  }, getOwnPropertyDescriptor(n, a) {
    return i ?? (i = e()), Reflect.getOwnPropertyDescriptor(i, a);
  }, defineProperty(n, a, t) {
    return i ?? (i = e()), Reflect.defineProperty(i, a, t);
  } });
}
function b(e) {
  return typeof e == "bigint" ? e.toString() + "n" : typeof e == "string" ? `"${e}"` : `${e}`;
}
function Ia(e) {
  return Object.keys(e).filter((i) => e[i]._zod.optin === "optional" && e[i]._zod.optout === "optional");
}
var xa = { safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER], int32: [-2147483648, 2147483647], uint32: [0, 4294967295], float32: [-34028234663852886e22, 34028234663852886e22], float64: [-Number.MAX_VALUE, Number.MAX_VALUE] }, wa = { int64: [BigInt("-9223372036854775808"), BigInt("9223372036854775807")], uint64: [BigInt(0), BigInt("18446744073709551615")] };
function Kc(e, i) {
  let n = e._zod.def, a = n.checks;
  if (a && a.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
  let t = de(e._zod.def, { get shape() {
    let r = {};
    for (let o in i) {
      if (!(o in n.shape)) throw Error(`Unrecognized key: "${o}"`);
      i[o] && (r[o] = n.shape[o]);
    }
    return ge(this, "shape", r), r;
  }, checks: [] });
  return ie(e, t);
}
function Bc(e, i) {
  let n = e._zod.def, a = n.checks;
  if (a && a.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
  let t = de(e._zod.def, { get shape() {
    let r = { ...e._zod.def.shape };
    for (let o in i) {
      if (!(o in n.shape)) throw Error(`Unrecognized key: "${o}"`);
      i[o] && delete r[o];
    }
    return ge(this, "shape", r), r;
  }, checks: [] });
  return ie(e, t);
}
function Hc(e, i) {
  if (!Ie(i)) throw Error("Invalid input to extend: expected a plain object");
  let n = e._zod.def.checks;
  if (n && n.length > 0) {
    let t = e._zod.def.shape;
    for (let r in i) if (Object.getOwnPropertyDescriptor(t, r) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  let a = de(e._zod.def, { get shape() {
    let t = { ...e._zod.def.shape, ...i };
    return ge(this, "shape", t), t;
  } });
  return ie(e, a);
}
function Xc(e, i) {
  if (!Ie(i)) throw Error("Invalid input to safeExtend: expected a plain object");
  let n = de(e._zod.def, { get shape() {
    let a = { ...e._zod.def.shape, ...i };
    return ge(this, "shape", a), a;
  } });
  return ie(e, n);
}
function Yc(e, i) {
  let n = de(e._zod.def, { get shape() {
    let a = { ...e._zod.def.shape, ...i._zod.def.shape };
    return ge(this, "shape", a), a;
  }, get catchall() {
    return i._zod.def.catchall;
  }, checks: [] });
  return ie(e, n);
}
function Qc(e, i, n) {
  let a = i._zod.def.checks;
  if (a && a.length > 0) throw Error(".partial() cannot be used on object schemas containing refinements");
  let t = de(i._zod.def, { get shape() {
    let r = i._zod.def.shape, o = { ...r };
    if (n) for (let u in n) {
      if (!(u in r)) throw Error(`Unrecognized key: "${u}"`);
      n[u] && (o[u] = e ? new e({ type: "optional", innerType: r[u] }) : r[u]);
    }
    else for (let u in r) o[u] = e ? new e({ type: "optional", innerType: r[u] }) : r[u];
    return ge(this, "shape", o), o;
  }, checks: [] });
  return ie(i, t);
}
function em(e, i, n) {
  let a = de(i._zod.def, { get shape() {
    let t = i._zod.def.shape, r = { ...t };
    if (n) for (let o in n) {
      if (!(o in r)) throw Error(`Unrecognized key: "${o}"`);
      n[o] && (r[o] = new e({ type: "nonoptional", innerType: t[o] }));
    }
    else for (let o in t) r[o] = new e({ type: "nonoptional", innerType: t[o] });
    return ge(this, "shape", r), r;
  } });
  return ie(i, a);
}
function _e(e, i = 0) {
  var n;
  if (e.aborted === !0) return !0;
  for (let a = i; a < e.issues.length; a++) if (((n = e.issues[a]) == null ? void 0 : n.continue) !== !0) return !0;
  return !1;
}
function re(e, i) {
  return i.map((n) => {
    var a;
    return (a = n).path ?? (a.path = []), n.path.unshift(e), n;
  });
}
function Ge(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.message;
}
function te(e, i, n) {
  var t, r, o, u, d, s;
  let a = { ...e, path: e.path ?? [] };
  if (!e.message) {
    let m = Ge((o = (r = (t = e.inst) == null ? void 0 : t._zod.def) == null ? void 0 : r.error) == null ? void 0 : o.call(r, e)) ?? Ge((u = i == null ? void 0 : i.error) == null ? void 0 : u.call(i, e)) ?? Ge((d = n.customError) == null ? void 0 : d.call(n, e)) ?? Ge((s = n.localeError) == null ? void 0 : s.call(n, e)) ?? "Invalid input";
    a.message = m;
  }
  return delete a.inst, delete a.continue, !(i != null && i.reportInput) && delete a.input, a;
}
function Rt(e) {
  return e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof File ? "file" : "unknown";
}
function Ct(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function _(e) {
  let i = typeof e;
  switch (i) {
    case "number":
      return Number.isNaN(e) ? "nan" : "number";
    case "object": {
      if (e === null) return "null";
      if (Array.isArray(e)) return "array";
      let n = e;
      if (n && Object.getPrototypeOf(n) !== Object.prototype && "constructor" in n && n.constructor) return n.constructor.name;
    }
  }
  return i;
}
function jt(...e) {
  let [i, n, a] = e;
  return typeof i == "string" ? { message: i, code: "custom", input: n, inst: a } : { ...i };
}
function tm(e) {
  return Object.entries(e).filter(([i, n]) => Number.isNaN(Number.parseInt(i, 10))).map((i) => i[1]);
}
function Sa(e) {
  let i = atob(e), n = new Uint8Array(i.length);
  for (let a = 0; a < i.length; a++) n[a] = i.charCodeAt(a);
  return n;
}
function za(e) {
  let i = "";
  for (let n = 0; n < e.length; n++) i += String.fromCharCode(e[n]);
  return btoa(i);
}
function im(e) {
  let i = e.replace(/-/g, "+").replace(/_/g, "/"), n = "=".repeat((4 - i.length % 4) % 4);
  return Sa(i + n);
}
function nm(e) {
  return za(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function rm(e) {
  let i = e.replace(/^0x/, "");
  if (i.length % 2 !== 0) throw Error("Invalid hex string length");
  let n = new Uint8Array(i.length / 2);
  for (let a = 0; a < i.length; a += 2) n[a / 2] = Number.parseInt(i.slice(a, a + 2), 16);
  return n;
}
function am(e) {
  return Array.from(e).map((i) => i.toString(16).padStart(2, "0")).join("");
}
class om {
  constructor(...i) {
  }
}
var Ua = (e, i) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }), Object.defineProperty(e, "issues", { value: i, enumerable: !1 }), e.message = JSON.stringify(i, Ut, 2), Object.defineProperty(e, "toString", { value: () => e.message, enumerable: !1 });
}, Mi = f("$ZodError", Ua), K = f("$ZodError", Ua, { Parent: Error });
function Fi(e, i = (n) => n.message) {
  let n = {}, a = [];
  for (let t of e.issues) t.path.length > 0 ? (n[t.path[0]] = n[t.path[0]] || [], n[t.path[0]].push(i(t))) : a.push(i(t));
  return { formErrors: a, fieldErrors: n };
}
function qi(e, i = (n) => n.message) {
  let n = { _errors: [] }, a = (t) => {
    for (let r of t.issues) if (r.code === "invalid_union" && r.errors.length) r.errors.map((o) => a({ issues: o }));
    else if (r.code === "invalid_key") a({ issues: r.issues });
    else if (r.code === "invalid_element") a({ issues: r.issues });
    else if (r.path.length === 0) n._errors.push(i(r));
    else {
      let o = n, u = 0;
      for (; u < r.path.length; ) {
        let d = r.path[u];
        u !== r.path.length - 1 ? o[d] = o[d] || { _errors: [] } : (o[d] = o[d] || { _errors: [] }, o[d]._errors.push(i(r))), o = o[d], u++;
      }
    }
  };
  return a(e), n;
}
function Oa(e, i = (n) => n.message) {
  let n = { errors: [] }, a = (t, r = []) => {
    var o, u;
    for (let d of t.issues) if (d.code === "invalid_union" && d.errors.length) d.errors.map((s) => a({ issues: s }, d.path));
    else if (d.code === "invalid_key") a({ issues: d.issues }, d.path);
    else if (d.code === "invalid_element") a({ issues: d.issues }, d.path);
    else {
      let s = [...r, ...d.path];
      if (s.length === 0) {
        n.errors.push(i(d));
        continue;
      }
      let m = n, c = 0;
      for (; c < s.length; ) {
        let p = s[c], $ = c === s.length - 1;
        typeof p == "string" ? (m.properties ?? (m.properties = {}), (o = m.properties)[p] ?? (o[p] = { errors: [] }), m = m.properties[p]) : (m.items ?? (m.items = []), (u = m.items)[p] ?? (u[p] = { errors: [] }), m = m.items[p]), $ && m.errors.push(i(d)), c++;
      }
    }
  };
  return a(e), n;
}
function ja(e) {
  let i = [], n = e.map((a) => typeof a == "object" ? a.key : a);
  for (let a of n) typeof a == "number" ? i.push(`[${a}]`) : typeof a == "symbol" ? i.push(`[${JSON.stringify(String(a))}]`) : /[^\w$]/.test(a) ? i.push(`[${JSON.stringify(a)}]`) : (i.length && i.push("."), i.push(a));
  return i.join("");
}
function Za(e) {
  var a;
  let i = [], n = [...e.issues].sort((t, r) => (t.path ?? []).length - (r.path ?? []).length);
  for (let t of n) i.push(`✖ ${t.message}`), (a = t.path) != null && a.length && i.push(`  → at ${ja(t.path)}`);
  return i.join(`
`);
}
var tt = (e) => (i, n, a, t) => {
  let r = a ? Object.assign(a, { async: !1 }) : { async: !1 }, o = i._zod.run({ value: n, issues: [] }, r);
  if (o instanceof Promise) throw new ke();
  if (o.issues.length) {
    let u = new ((t == null ? void 0 : t.Err) ?? e)(o.issues.map((d) => te(d, r, F())));
    throw Ji(u, t == null ? void 0 : t.callee), u;
  }
  return o.value;
}, Ei = tt(K), it = (e) => async (i, n, a, t) => {
  let r = a ? Object.assign(a, { async: !0 }) : { async: !0 }, o = i._zod.run({ value: n, issues: [] }, r);
  if (o instanceof Promise && (o = await o), o.issues.length) {
    let u = new ((t == null ? void 0 : t.Err) ?? e)(o.issues.map((d) => te(d, r, F())));
    throw Ji(u, t == null ? void 0 : t.callee), u;
  }
  return o.value;
}, Ti = it(K), nt = (e) => (i, n, a) => {
  let t = a ? { ...a, async: !1 } : { async: !1 }, r = i._zod.run({ value: n, issues: [] }, t);
  if (r instanceof Promise) throw new ke();
  return r.issues.length ? { success: !1, error: new (e ?? Mi)(r.issues.map((o) => te(o, t, F()))) } : { success: !0, data: r.value };
}, Na = nt(K), rt = (e) => async (i, n, a) => {
  let t = a ? Object.assign(a, { async: !0 }) : { async: !0 }, r = i._zod.run({ value: n, issues: [] }, t);
  return r instanceof Promise && (r = await r), r.issues.length ? { success: !1, error: new e(r.issues.map((o) => te(o, t, F()))) } : { success: !0, data: r.value };
}, Pa = rt(K), Wi = (e) => (i, n, a) => {
  let t = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return tt(e)(i, n, t);
}, um = Wi(K), Vi = (e) => (i, n, a) => tt(e)(i, n, a), sm = Vi(K), Gi = (e) => async (i, n, a) => {
  let t = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return it(e)(i, n, t);
}, lm = Gi(K), Ki = (e) => async (i, n, a) => it(e)(i, n, a), dm = Ki(K), Bi = (e) => (i, n, a) => {
  let t = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return nt(e)(i, n, t);
}, cm = Bi(K), Hi = (e) => (i, n, a) => nt(e)(i, n, a), mm = Hi(K), Xi = (e) => async (i, n, a) => {
  let t = a ? Object.assign(a, { direction: "backward" }) : { direction: "backward" };
  return rt(e)(i, n, t);
}, fm = Xi(K), Yi = (e) => async (i, n, a) => rt(e)(i, n, a), pm = Yi(K), ze = {};
le(ze, { xid: () => Aa, uuid7: () => $m, uuid6: () => hm, uuid4: () => gm, uuid: () => Ee, uppercase: () => co, unicodeEmail: () => Fa, undefined: () => so, ulid: () => Ta, time: () => to, string: () => no, sha512_hex: () => Cm, sha512_base64url: () => Jm, sha512_base64: () => Lm, sha384_hex: () => Tm, sha384_base64url: () => Rm, sha384_base64: () => Am, sha256_hex: () => Pm, sha256_base64url: () => Em, sha256_base64: () => Dm, sha1_hex: () => jm, sha1_base64url: () => Nm, sha1_base64: () => Zm, rfc5322Email: () => ym, number: () => en, null: () => uo, nanoid: () => Ca, md5_hex: () => zm, md5_base64url: () => Om, md5_base64: () => Um, mac: () => Ga, lowercase: () => lo, ksuid: () => Ra, ipv6: () => Va, ipv4: () => Wa, integer: () => ao, idnEmail: () => _m, html5Email: () => bm, hostname: () => xm, hex: () => Sm, guid: () => Ja, extendedDuration: () => vm, emoji: () => qa, email: () => Ma, e164: () => Xa, duration: () => La, domain: () => wm, datetime: () => io, date: () => Qa, cuid2: () => Ea, cuid: () => Da, cidrv6: () => Ba, cidrv4: () => Ka, browserEmail: () => km, boolean: () => oo, bigint: () => ro, base64url: () => Qi, base64: () => Ha });
var Da = /^[cC][^\s-]{8,}$/, Ea = /^[0-9a-z]+$/, Ta = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Aa = /^[0-9a-vA-V]{20}$/, Ra = /^[A-Za-z0-9]{27}$/, Ca = /^[a-zA-Z0-9_-]{21}$/, La = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, vm = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, Ja = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ee = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, gm = Ee(4), hm = Ee(6), $m = Ee(7), Ma = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, bm = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, ym = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, Fa = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u, _m = Fa, km = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/, Im = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function qa() {
  return new RegExp(Im, "u");
}
var Wa = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Va = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Ga = (e) => {
  let i = se(e ?? ":");
  return new RegExp(`^(?:[0-9A-F]{2}${i}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${i}){5}[0-9a-f]{2}$`);
}, Ka = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Ba = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, Ha = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Qi = /^[A-Za-z0-9_-]*$/, xm = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, wm = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/, Xa = /^\+[1-9]\d{6,14}$/, Ya = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Qa = new RegExp(`^${Ya}$`);
function eo(e) {
  return typeof e.precision == "number" ? e.precision === -1 ? "(?:[01]\\d|2[0-3]):[0-5]\\d" : e.precision === 0 ? "(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d" : `(?:[01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d\\.\\d{${e.precision}}` : "(?:[01]\\d|2[0-3]):[0-5]\\d(?::[0-5]\\d(?:\\.\\d+)?)?";
}
function to(e) {
  return new RegExp(`^${eo(e)}$`);
}
function io(e) {
  let i = eo({ precision: e.precision }), n = ["Z"];
  e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  let a = `${i}(?:${n.join("|")})`;
  return new RegExp(`^${Ya}T(?:${a})$`);
}
var no = (e) => {
  let i = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${i}$`);
}, ro = /^-?\d+n?$/, ao = /^-?\d+$/, en = /^-?\d+(?:\.\d+)?$/, oo = /^(?:true|false)$/i, uo = /^null$/i, so = /^undefined$/i, lo = /^[^A-Z]*$/, co = /^[^a-z]*$/, Sm = /^[0-9a-fA-F]*$/;
function at(e, i) {
  return new RegExp(`^[A-Za-z0-9+/]{${e}}${i}$`);
}
function ot(e) {
  return new RegExp(`^[A-Za-z0-9_-]{${e}}$`);
}
var zm = /^[0-9a-fA-F]{32}$/, Um = at(22, "=="), Om = ot(22), jm = /^[0-9a-fA-F]{40}$/, Zm = at(27, "="), Nm = ot(27), Pm = /^[0-9a-fA-F]{64}$/, Dm = at(43, "="), Em = ot(43), Tm = /^[0-9a-fA-F]{96}$/, Am = at(64, ""), Rm = ot(64), Cm = /^[0-9a-fA-F]{128}$/, Lm = at(86, "=="), Jm = ot(86), E = f("$ZodCheck", (e, i) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = i, (n = e._zod).onattach ?? (n.onattach = []);
}), mo = { number: "number", bigint: "bigint", object: "date" }, tn = f("$ZodCheckLessThan", (e, i) => {
  E.init(e, i);
  let n = mo[typeof i.value];
  e._zod.onattach.push((a) => {
    let t = a._zod.bag, r = (i.inclusive ? t.maximum : t.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    i.value < r && (i.inclusive ? t.maximum = i.value : t.exclusiveMaximum = i.value);
  }), e._zod.check = (a) => {
    (i.inclusive ? a.value <= i.value : a.value < i.value) || a.issues.push({ origin: n, code: "too_big", maximum: typeof i.value == "object" ? i.value.getTime() : i.value, input: a.value, inclusive: i.inclusive, inst: e, continue: !i.abort });
  };
}), nn = f("$ZodCheckGreaterThan", (e, i) => {
  E.init(e, i);
  let n = mo[typeof i.value];
  e._zod.onattach.push((a) => {
    let t = a._zod.bag, r = (i.inclusive ? t.minimum : t.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    i.value > r && (i.inclusive ? t.minimum = i.value : t.exclusiveMinimum = i.value);
  }), e._zod.check = (a) => {
    (i.inclusive ? a.value >= i.value : a.value > i.value) || a.issues.push({ origin: n, code: "too_small", minimum: typeof i.value == "object" ? i.value.getTime() : i.value, input: a.value, inclusive: i.inclusive, inst: e, continue: !i.abort });
  };
}), fo = f("$ZodCheckMultipleOf", (e, i) => {
  E.init(e, i), e._zod.onattach.push((n) => {
    var a;
    (a = n._zod.bag).multipleOf ?? (a.multipleOf = i.value);
  }), e._zod.check = (n) => {
    if (typeof n.value != typeof i.value) throw Error("Cannot mix number and bigint in multiple_of check.");
    (typeof n.value == "bigint" ? n.value % i.value === BigInt(0) : $a(n.value, i.value) === 0) || n.issues.push({ origin: typeof n.value, code: "not_multiple_of", divisor: i.value, input: n.value, inst: e, continue: !i.abort });
  };
}), po = f("$ZodCheckNumberFormat", (e, i) => {
  var o;
  E.init(e, i), i.format = i.format || "float64";
  let n = (o = i.format) == null ? void 0 : o.includes("int"), a = n ? "int" : "number", [t, r] = xa[i.format];
  e._zod.onattach.push((u) => {
    let d = u._zod.bag;
    d.format = i.format, d.minimum = t, d.maximum = r, n && (d.pattern = ao);
  }), e._zod.check = (u) => {
    let d = u.value;
    if (n) {
      if (!Number.isInteger(d)) {
        u.issues.push({ expected: a, format: i.format, code: "invalid_type", continue: !1, input: d, inst: e });
        return;
      }
      if (!Number.isSafeInteger(d)) {
        d > 0 ? u.issues.push({ input: d, code: "too_big", maximum: Number.MAX_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e, origin: a, inclusive: !0, continue: !i.abort }) : u.issues.push({ input: d, code: "too_small", minimum: Number.MIN_SAFE_INTEGER, note: "Integers must be within the safe integer range.", inst: e, origin: a, inclusive: !0, continue: !i.abort });
        return;
      }
    }
    d < t && u.issues.push({ origin: "number", input: d, code: "too_small", minimum: t, inclusive: !0, inst: e, continue: !i.abort }), d > r && u.issues.push({ origin: "number", input: d, code: "too_big", maximum: r, inclusive: !0, inst: e, continue: !i.abort });
  };
}), vo = f("$ZodCheckBigIntFormat", (e, i) => {
  E.init(e, i);
  let [n, a] = wa[i.format];
  e._zod.onattach.push((t) => {
    let r = t._zod.bag;
    r.format = i.format, r.minimum = n, r.maximum = a;
  }), e._zod.check = (t) => {
    let r = t.value;
    r < n && t.issues.push({ origin: "bigint", input: r, code: "too_small", minimum: n, inclusive: !0, inst: e, continue: !i.abort }), r > a && t.issues.push({ origin: "bigint", input: r, code: "too_big", maximum: a, inclusive: !0, inst: e, continue: !i.abort });
  };
}), go = f("$ZodCheckMaxSize", (e, i) => {
  var n;
  E.init(e, i), (n = e._zod.def).when ?? (n.when = (a) => {
    let t = a.value;
    return !Se(t) && t.size !== void 0;
  }), e._zod.onattach.push((a) => {
    let t = a._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    i.maximum < t && (a._zod.bag.maximum = i.maximum);
  }), e._zod.check = (a) => {
    let t = a.value;
    t.size <= i.maximum || a.issues.push({ origin: Rt(t), code: "too_big", maximum: i.maximum, inclusive: !0, input: t, inst: e, continue: !i.abort });
  };
}), ho = f("$ZodCheckMinSize", (e, i) => {
  var n;
  E.init(e, i), (n = e._zod.def).when ?? (n.when = (a) => {
    let t = a.value;
    return !Se(t) && t.size !== void 0;
  }), e._zod.onattach.push((a) => {
    let t = a._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    i.minimum > t && (a._zod.bag.minimum = i.minimum);
  }), e._zod.check = (a) => {
    let t = a.value;
    t.size >= i.minimum || a.issues.push({ origin: Rt(t), code: "too_small", minimum: i.minimum, inclusive: !0, input: t, inst: e, continue: !i.abort });
  };
}), $o = f("$ZodCheckSizeEquals", (e, i) => {
  var n;
  E.init(e, i), (n = e._zod.def).when ?? (n.when = (a) => {
    let t = a.value;
    return !Se(t) && t.size !== void 0;
  }), e._zod.onattach.push((a) => {
    let t = a._zod.bag;
    t.minimum = i.size, t.maximum = i.size, t.size = i.size;
  }), e._zod.check = (a) => {
    let t = a.value, r = t.size;
    if (r === i.size) return;
    let o = r > i.size;
    a.issues.push({ origin: Rt(t), ...o ? { code: "too_big", maximum: i.size } : { code: "too_small", minimum: i.size }, inclusive: !0, exact: !0, input: a.value, inst: e, continue: !i.abort });
  };
}), bo = f("$ZodCheckMaxLength", (e, i) => {
  var n;
  E.init(e, i), (n = e._zod.def).when ?? (n.when = (a) => {
    let t = a.value;
    return !Se(t) && t.length !== void 0;
  }), e._zod.onattach.push((a) => {
    let t = a._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    i.maximum < t && (a._zod.bag.maximum = i.maximum);
  }), e._zod.check = (a) => {
    let t = a.value;
    if (t.length <= i.maximum) return;
    let r = Ct(t);
    a.issues.push({ origin: r, code: "too_big", maximum: i.maximum, inclusive: !0, input: t, inst: e, continue: !i.abort });
  };
}), yo = f("$ZodCheckMinLength", (e, i) => {
  var n;
  E.init(e, i), (n = e._zod.def).when ?? (n.when = (a) => {
    let t = a.value;
    return !Se(t) && t.length !== void 0;
  }), e._zod.onattach.push((a) => {
    let t = a._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    i.minimum > t && (a._zod.bag.minimum = i.minimum);
  }), e._zod.check = (a) => {
    let t = a.value;
    if (t.length >= i.minimum) return;
    let r = Ct(t);
    a.issues.push({ origin: r, code: "too_small", minimum: i.minimum, inclusive: !0, input: t, inst: e, continue: !i.abort });
  };
}), _o = f("$ZodCheckLengthEquals", (e, i) => {
  var n;
  E.init(e, i), (n = e._zod.def).when ?? (n.when = (a) => {
    let t = a.value;
    return !Se(t) && t.length !== void 0;
  }), e._zod.onattach.push((a) => {
    let t = a._zod.bag;
    t.minimum = i.length, t.maximum = i.length, t.length = i.length;
  }), e._zod.check = (a) => {
    let t = a.value, r = t.length;
    if (r === i.length) return;
    let o = Ct(t), u = r > i.length;
    a.issues.push({ origin: o, ...u ? { code: "too_big", maximum: i.length } : { code: "too_small", minimum: i.length }, inclusive: !0, exact: !0, input: a.value, inst: e, continue: !i.abort });
  };
}), ut = f("$ZodCheckStringFormat", (e, i) => {
  var n, a;
  E.init(e, i), e._zod.onattach.push((t) => {
    let r = t._zod.bag;
    r.format = i.format, i.pattern && (r.patterns ?? (r.patterns = /* @__PURE__ */ new Set()), r.patterns.add(i.pattern));
  }), i.pattern ? (n = e._zod).check ?? (n.check = (t) => {
    i.pattern.lastIndex = 0, !i.pattern.test(t.value) && t.issues.push({ origin: "string", code: "invalid_format", format: i.format, input: t.value, ...i.pattern ? { pattern: i.pattern.toString() } : {}, inst: e, continue: !i.abort });
  }) : (a = e._zod).check ?? (a.check = () => {
  });
}), ko = f("$ZodCheckRegex", (e, i) => {
  ut.init(e, i), e._zod.check = (n) => {
    i.pattern.lastIndex = 0, !i.pattern.test(n.value) && n.issues.push({ origin: "string", code: "invalid_format", format: "regex", input: n.value, pattern: i.pattern.toString(), inst: e, continue: !i.abort });
  };
}), Io = f("$ZodCheckLowerCase", (e, i) => {
  i.pattern ?? (i.pattern = lo), ut.init(e, i);
}), xo = f("$ZodCheckUpperCase", (e, i) => {
  i.pattern ?? (i.pattern = co), ut.init(e, i);
}), wo = f("$ZodCheckIncludes", (e, i) => {
  E.init(e, i);
  let n = se(i.includes), a = new RegExp(typeof i.position == "number" ? `^.{${i.position}}${n}` : n);
  i.pattern = a, e._zod.onattach.push((t) => {
    let r = t._zod.bag;
    r.patterns ?? (r.patterns = /* @__PURE__ */ new Set()), r.patterns.add(a);
  }), e._zod.check = (t) => {
    t.value.includes(i.includes, i.position) || t.issues.push({ origin: "string", code: "invalid_format", format: "includes", includes: i.includes, input: t.value, inst: e, continue: !i.abort });
  };
}), So = f("$ZodCheckStartsWith", (e, i) => {
  E.init(e, i);
  let n = new RegExp(`^${se(i.prefix)}.*`);
  i.pattern ?? (i.pattern = n), e._zod.onattach.push((a) => {
    let t = a._zod.bag;
    t.patterns ?? (t.patterns = /* @__PURE__ */ new Set()), t.patterns.add(n);
  }), e._zod.check = (a) => {
    a.value.startsWith(i.prefix) || a.issues.push({ origin: "string", code: "invalid_format", format: "starts_with", prefix: i.prefix, input: a.value, inst: e, continue: !i.abort });
  };
}), zo = f("$ZodCheckEndsWith", (e, i) => {
  E.init(e, i);
  let n = new RegExp(`.*${se(i.suffix)}$`);
  i.pattern ?? (i.pattern = n), e._zod.onattach.push((a) => {
    let t = a._zod.bag;
    t.patterns ?? (t.patterns = /* @__PURE__ */ new Set()), t.patterns.add(n);
  }), e._zod.check = (a) => {
    a.value.endsWith(i.suffix) || a.issues.push({ origin: "string", code: "invalid_format", format: "ends_with", suffix: i.suffix, input: a.value, inst: e, continue: !i.abort });
  };
});
function qr(e, i, n) {
  e.issues.length && i.issues.push(...re(n, e.issues));
}
var Uo = f("$ZodCheckProperty", (e, i) => {
  E.init(e, i), e._zod.check = (n) => {
    let a = i.schema._zod.run({ value: n.value[i.property], issues: [] }, {});
    if (a instanceof Promise) return a.then((t) => qr(t, n, i.property));
    qr(a, n, i.property);
  };
}), Oo = f("$ZodCheckMimeType", (e, i) => {
  E.init(e, i);
  let n = new Set(i.mime);
  e._zod.onattach.push((a) => {
    a._zod.bag.mime = i.mime;
  }), e._zod.check = (a) => {
    n.has(a.value.type) || a.issues.push({ code: "invalid_value", values: i.mime, input: a.value.type, inst: e, continue: !i.abort });
  };
}), jo = f("$ZodCheckOverwrite", (e, i) => {
  E.init(e, i), e._zod.check = (n) => {
    n.value = i.tx(n.value);
  };
});
class Zo {
  constructor(i = []) {
    this.content = [], this.indent = 0, this && (this.args = i);
  }
  indented(i) {
    this.indent += 1, i(this), this.indent -= 1;
  }
  write(i) {
    if (typeof i == "function") {
      i(this, { execution: "sync" }), i(this, { execution: "async" });
      return;
    }
    let n = i.split(`
`).filter((r) => r), a = Math.min(...n.map((r) => r.length - r.trimStart().length)), t = n.map((r) => r.slice(a)).map((r) => " ".repeat(this.indent * 2) + r);
    for (let r of t) this.content.push(r);
  }
  compile() {
    let i = Function, n = this == null ? void 0 : this.args, a = [...((this == null ? void 0 : this.content) ?? [""]).map((t) => `  ${t}`)];
    return new i(...n, a.join(`
`));
  }
}
var No = { major: 4, minor: 3, patch: 5 }, k = f("$ZodType", (e, i) => {
  var t;
  var n;
  e ?? (e = {}), e._zod.def = i, e._zod.bag = e._zod.bag || {}, e._zod.version = No;
  let a = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && a.unshift(e);
  for (let r of a) for (let o of r._zod.onattach) o(e);
  if (a.length === 0) (n = e._zod).deferred ?? (n.deferred = []), (t = e._zod.deferred) == null || t.push(() => {
    e._zod.run = e._zod.parse;
  });
  else {
    let r = (u, d, s) => {
      let m = _e(u), c;
      for (let p of d) {
        if (p._zod.def.when) {
          if (!p._zod.def.when(u)) continue;
        } else if (m) continue;
        let $ = u.issues.length, y = p._zod.check(u);
        if (y instanceof Promise && (s == null ? void 0 : s.async) === !1) throw new ke();
        if (c || y instanceof Promise) c = (c ?? Promise.resolve()).then(async () => {
          await y, u.issues.length !== $ && (m || (m = _e(u, $)));
        });
        else {
          if (u.issues.length === $) continue;
          m || (m = _e(u, $));
        }
      }
      return c ? c.then(() => u) : u;
    }, o = (u, d, s) => {
      if (_e(u)) return u.aborted = !0, u;
      let m = r(d, a, s);
      if (m instanceof Promise) {
        if (s.async === !1) throw new ke();
        return m.then((c) => e._zod.parse(c, s));
      }
      return e._zod.parse(m, s);
    };
    e._zod.run = (u, d) => {
      if (d.skipChecks) return e._zod.parse(u, d);
      if (d.direction === "backward") {
        let m = e._zod.parse({ value: u.value, issues: [] }, { ...d, skipChecks: !0 });
        return m instanceof Promise ? m.then((c) => o(c, u, d)) : o(m, u, d);
      }
      let s = e._zod.parse(u, d);
      if (s instanceof Promise) {
        if (d.async === !1) throw new ke();
        return s.then((m) => r(m, a, d));
      }
      return r(s, a, d);
    };
  }
  w(e, "~standard", () => ({ validate: (r) => {
    var o;
    try {
      let u = Na(e, r);
      return u.success ? { value: u.data } : { issues: (o = u.error) == null ? void 0 : o.issues };
    } catch {
      return Pa(e, r).then((d) => {
        var s;
        return d.success ? { value: d.data } : { issues: (s = d.error) == null ? void 0 : s.issues };
      });
    }
  }, vendor: "zod", version: 1 }));
}), st = f("$ZodString", (e, i) => {
  var n;
  k.init(e, i), e._zod.pattern = [...((n = e == null ? void 0 : e._zod.bag) == null ? void 0 : n.patterns) ?? []].pop() ?? no(e._zod.bag), e._zod.parse = (a, t) => {
    if (i.coerce) try {
      a.value = String(a.value);
    } catch {
    }
    return typeof a.value == "string" || a.issues.push({ expected: "string", code: "invalid_type", input: a.value, inst: e }), a;
  };
}), Z = f("$ZodStringFormat", (e, i) => {
  ut.init(e, i), st.init(e, i);
}), Po = f("$ZodGUID", (e, i) => {
  i.pattern ?? (i.pattern = Ja), Z.init(e, i);
}), Do = f("$ZodUUID", (e, i) => {
  if (i.version) {
    let n = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[i.version];
    if (n === void 0) throw Error(`Invalid UUID version: "${i.version}"`);
    i.pattern ?? (i.pattern = Ee(n));
  } else i.pattern ?? (i.pattern = Ee());
  Z.init(e, i);
}), Eo = f("$ZodEmail", (e, i) => {
  i.pattern ?? (i.pattern = Ma), Z.init(e, i);
}), To = f("$ZodURL", (e, i) => {
  Z.init(e, i), e._zod.check = (n) => {
    try {
      let a = n.value.trim(), t = new URL(a);
      i.hostname && (i.hostname.lastIndex = 0, !i.hostname.test(t.hostname) && n.issues.push({ code: "invalid_format", format: "url", note: "Invalid hostname", pattern: i.hostname.source, input: n.value, inst: e, continue: !i.abort })), i.protocol && (i.protocol.lastIndex = 0, !i.protocol.test(t.protocol.endsWith(":") ? t.protocol.slice(0, -1) : t.protocol) && n.issues.push({ code: "invalid_format", format: "url", note: "Invalid protocol", pattern: i.protocol.source, input: n.value, inst: e, continue: !i.abort })), i.normalize ? n.value = t.href : n.value = a;
      return;
    } catch {
      n.issues.push({ code: "invalid_format", format: "url", input: n.value, inst: e, continue: !i.abort });
    }
  };
}), Ao = f("$ZodEmoji", (e, i) => {
  i.pattern ?? (i.pattern = qa()), Z.init(e, i);
}), Ro = f("$ZodNanoID", (e, i) => {
  i.pattern ?? (i.pattern = Ca), Z.init(e, i);
}), Co = f("$ZodCUID", (e, i) => {
  i.pattern ?? (i.pattern = Da), Z.init(e, i);
}), Lo = f("$ZodCUID2", (e, i) => {
  i.pattern ?? (i.pattern = Ea), Z.init(e, i);
}), Jo = f("$ZodULID", (e, i) => {
  i.pattern ?? (i.pattern = Ta), Z.init(e, i);
}), Mo = f("$ZodXID", (e, i) => {
  i.pattern ?? (i.pattern = Aa), Z.init(e, i);
}), Fo = f("$ZodKSUID", (e, i) => {
  i.pattern ?? (i.pattern = Ra), Z.init(e, i);
}), qo = f("$ZodISODateTime", (e, i) => {
  i.pattern ?? (i.pattern = io(i)), Z.init(e, i);
}), Wo = f("$ZodISODate", (e, i) => {
  i.pattern ?? (i.pattern = Qa), Z.init(e, i);
}), Vo = f("$ZodISOTime", (e, i) => {
  i.pattern ?? (i.pattern = to(i)), Z.init(e, i);
}), Go = f("$ZodISODuration", (e, i) => {
  i.pattern ?? (i.pattern = La), Z.init(e, i);
}), Ko = f("$ZodIPv4", (e, i) => {
  i.pattern ?? (i.pattern = Wa), Z.init(e, i), e._zod.bag.format = "ipv4";
}), Bo = f("$ZodIPv6", (e, i) => {
  i.pattern ?? (i.pattern = Va), Z.init(e, i), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
    try {
      new URL(`http://[${n.value}]`);
    } catch {
      n.issues.push({ code: "invalid_format", format: "ipv6", input: n.value, inst: e, continue: !i.abort });
    }
  };
}), Ho = f("$ZodMAC", (e, i) => {
  i.pattern ?? (i.pattern = Ga(i.delimiter)), Z.init(e, i), e._zod.bag.format = "mac";
}), Xo = f("$ZodCIDRv4", (e, i) => {
  i.pattern ?? (i.pattern = Ka), Z.init(e, i);
}), Yo = f("$ZodCIDRv6", (e, i) => {
  i.pattern ?? (i.pattern = Ba), Z.init(e, i), e._zod.check = (n) => {
    let a = n.value.split("/");
    try {
      if (a.length !== 2) throw Error();
      let [t, r] = a;
      if (!r) throw Error();
      let o = Number(r);
      if (`${o}` !== r || o < 0 || o > 128) throw Error();
      new URL(`http://[${t}]`);
    } catch {
      n.issues.push({ code: "invalid_format", format: "cidrv6", input: n.value, inst: e, continue: !i.abort });
    }
  };
});
function rn(e) {
  if (e === "") return !0;
  if (e.length % 4 !== 0) return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
var Qo = f("$ZodBase64", (e, i) => {
  i.pattern ?? (i.pattern = Ha), Z.init(e, i), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
    rn(n.value) || n.issues.push({ code: "invalid_format", format: "base64", input: n.value, inst: e, continue: !i.abort });
  };
});
function eu(e) {
  if (!Qi.test(e)) return !1;
  let i = e.replace(/[-_]/g, (a) => a === "-" ? "+" : "/"), n = i.padEnd(Math.ceil(i.length / 4) * 4, "=");
  return rn(n);
}
var tu = f("$ZodBase64URL", (e, i) => {
  i.pattern ?? (i.pattern = Qi), Z.init(e, i), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
    eu(n.value) || n.issues.push({ code: "invalid_format", format: "base64url", input: n.value, inst: e, continue: !i.abort });
  };
}), iu = f("$ZodE164", (e, i) => {
  i.pattern ?? (i.pattern = Xa), Z.init(e, i);
});
function nu(e, i = null) {
  try {
    let n = e.split(".");
    if (n.length !== 3) return !1;
    let [a] = n;
    if (!a) return !1;
    let t = JSON.parse(atob(a));
    return !("typ" in t && (t == null ? void 0 : t.typ) !== "JWT" || !t.alg || i && (!("alg" in t) || t.alg !== i));
  } catch {
    return !1;
  }
}
var ru = f("$ZodJWT", (e, i) => {
  Z.init(e, i), e._zod.check = (n) => {
    nu(n.value, i.alg) || n.issues.push({ code: "invalid_format", format: "jwt", input: n.value, inst: e, continue: !i.abort });
  };
}), au = f("$ZodCustomStringFormat", (e, i) => {
  Z.init(e, i), e._zod.check = (n) => {
    i.fn(n.value) || n.issues.push({ code: "invalid_format", format: i.format, input: n.value, inst: e, continue: !i.abort });
  };
}), an = f("$ZodNumber", (e, i) => {
  k.init(e, i), e._zod.pattern = e._zod.bag.pattern ?? en, e._zod.parse = (n, a) => {
    if (i.coerce) try {
      n.value = Number(n.value);
    } catch {
    }
    let t = n.value;
    if (typeof t == "number" && !Number.isNaN(t) && Number.isFinite(t)) return n;
    let r = typeof t == "number" ? Number.isNaN(t) ? "NaN" : Number.isFinite(t) ? void 0 : "Infinity" : void 0;
    return n.issues.push({ expected: "number", code: "invalid_type", input: t, inst: e, ...r ? { received: r } : {} }), n;
  };
}), ou = f("$ZodNumberFormat", (e, i) => {
  po.init(e, i), an.init(e, i);
}), on = f("$ZodBoolean", (e, i) => {
  k.init(e, i), e._zod.pattern = oo, e._zod.parse = (n, a) => {
    if (i.coerce) try {
      n.value = !!n.value;
    } catch {
    }
    let t = n.value;
    return typeof t == "boolean" || n.issues.push({ expected: "boolean", code: "invalid_type", input: t, inst: e }), n;
  };
}), un = f("$ZodBigInt", (e, i) => {
  k.init(e, i), e._zod.pattern = ro, e._zod.parse = (n, a) => {
    if (i.coerce) try {
      n.value = BigInt(n.value);
    } catch {
    }
    return typeof n.value == "bigint" || n.issues.push({ expected: "bigint", code: "invalid_type", input: n.value, inst: e }), n;
  };
}), uu = f("$ZodBigIntFormat", (e, i) => {
  vo.init(e, i), un.init(e, i);
}), su = f("$ZodSymbol", (e, i) => {
  k.init(e, i), e._zod.parse = (n, a) => {
    let t = n.value;
    return typeof t == "symbol" || n.issues.push({ expected: "symbol", code: "invalid_type", input: t, inst: e }), n;
  };
}), lu = f("$ZodUndefined", (e, i) => {
  k.init(e, i), e._zod.pattern = so, e._zod.values = /* @__PURE__ */ new Set([void 0]), e._zod.optin = "optional", e._zod.optout = "optional", e._zod.parse = (n, a) => {
    let t = n.value;
    return typeof t > "u" || n.issues.push({ expected: "undefined", code: "invalid_type", input: t, inst: e }), n;
  };
}), du = f("$ZodNull", (e, i) => {
  k.init(e, i), e._zod.pattern = uo, e._zod.values = /* @__PURE__ */ new Set([null]), e._zod.parse = (n, a) => {
    let t = n.value;
    return t === null || n.issues.push({ expected: "null", code: "invalid_type", input: t, inst: e }), n;
  };
}), cu = f("$ZodAny", (e, i) => {
  k.init(e, i), e._zod.parse = (n) => n;
}), mu = f("$ZodUnknown", (e, i) => {
  k.init(e, i), e._zod.parse = (n) => n;
}), fu = f("$ZodNever", (e, i) => {
  k.init(e, i), e._zod.parse = (n, a) => (n.issues.push({ expected: "never", code: "invalid_type", input: n.value, inst: e }), n);
}), pu = f("$ZodVoid", (e, i) => {
  k.init(e, i), e._zod.parse = (n, a) => {
    let t = n.value;
    return typeof t > "u" || n.issues.push({ expected: "void", code: "invalid_type", input: t, inst: e }), n;
  };
}), vu = f("$ZodDate", (e, i) => {
  k.init(e, i), e._zod.parse = (n, a) => {
    if (i.coerce) try {
      n.value = new Date(n.value);
    } catch {
    }
    let t = n.value, r = t instanceof Date;
    return r && !Number.isNaN(t.getTime()) || n.issues.push({ expected: "date", code: "invalid_type", input: t, ...r ? { received: "Invalid Date" } : {}, inst: e }), n;
  };
});
function Wr(e, i, n) {
  e.issues.length && i.issues.push(...re(n, e.issues)), i.value[n] = e.value;
}
var gu = f("$ZodArray", (e, i) => {
  k.init(e, i), e._zod.parse = (n, a) => {
    let t = n.value;
    if (!Array.isArray(t)) return n.issues.push({ expected: "array", code: "invalid_type", input: t, inst: e }), n;
    n.value = Array(t.length);
    let r = [];
    for (let o = 0; o < t.length; o++) {
      let u = t[o], d = i.element._zod.run({ value: u, issues: [] }, a);
      d instanceof Promise ? r.push(d.then((s) => Wr(s, n, o))) : Wr(d, n, o);
    }
    return r.length ? Promise.all(r).then(() => n) : n;
  };
});
function Zt(e, i, n, a, t) {
  if (e.issues.length) {
    if (t && !(n in a)) return;
    i.issues.push(...re(n, e.issues));
  }
  e.value === void 0 ? n in a && (i.value[n] = void 0) : i.value[n] = e.value;
}
function hu(e) {
  var a, t, r, o;
  let i = Object.keys(e.shape);
  for (let u of i) if (!((o = (r = (t = (a = e.shape) == null ? void 0 : a[u]) == null ? void 0 : t._zod) == null ? void 0 : r.traits) != null && o.has("$ZodType"))) throw Error(`Invalid element at key "${u}": expected a Zod schema`);
  let n = Ia(e.shape);
  return { ...e, keys: i, keySet: new Set(i), numKeys: i.length, optionalKeys: new Set(n) };
}
function $u(e, i, n, a, t, r) {
  let o = [], u = t.keySet, d = t.catchall._zod, s = d.def.type, m = d.optout === "optional";
  for (let c in i) {
    if (u.has(c)) continue;
    if (s === "never") {
      o.push(c);
      continue;
    }
    let p = d.run({ value: i[c], issues: [] }, a);
    p instanceof Promise ? e.push(p.then(($) => Zt($, n, c, i, m))) : Zt(p, n, c, i, m);
  }
  return o.length && n.issues.push({ code: "unrecognized_keys", keys: o, input: i, inst: r }), e.length ? Promise.all(e).then(() => n) : n;
}
var bu = f("$ZodObject", (e, i) => {
  var o;
  if (k.init(e, i), !((o = Object.getOwnPropertyDescriptor(i, "shape")) != null && o.get)) {
    let u = i.shape;
    Object.defineProperty(i, "shape", { get: () => {
      let d = { ...u };
      return Object.defineProperty(i, "shape", { value: d }), d;
    } });
  }
  let n = et(() => hu(i));
  w(e._zod, "propValues", () => {
    let u = i.shape, d = {};
    for (let s in u) {
      let m = u[s]._zod;
      if (m.values) {
        d[s] ?? (d[s] = /* @__PURE__ */ new Set());
        for (let c of m.values) d[s].add(c);
      }
    }
    return d;
  });
  let a = De, t = i.catchall, r;
  e._zod.parse = (u, d) => {
    r ?? (r = n.value);
    let s = u.value;
    if (!a(s)) return u.issues.push({ expected: "object", code: "invalid_type", input: s, inst: e }), u;
    u.value = {};
    let m = [], c = r.shape;
    for (let p of r.keys) {
      let $ = c[p], y = $._zod.optout === "optional", x = $._zod.run({ value: s[p], issues: [] }, d);
      x instanceof Promise ? m.push(x.then((z) => Zt(z, u, p, s, y))) : Zt(x, u, p, s, y);
    }
    return t ? $u(m, s, u, d, n.value, e) : m.length ? Promise.all(m).then(() => u) : u;
  };
}), yu = f("$ZodObjectJIT", (e, i) => {
  bu.init(e, i);
  let n = e._zod.parse, a = et(() => hu(i)), t = (c) => {
    var W, ae;
    let p = new Zo(["shape", "payload", "ctx"]), $ = a.value, y = (A) => {
      let D = Di(A);
      return `shape[${D}]._zod.run({ value: input[${D}], issues: [] }, ctx)`;
    };
    p.write("const input = payload.value;");
    let x = /* @__PURE__ */ Object.create(null), z = 0;
    for (let A of $.keys) x[A] = `key_${z++}`;
    p.write("const newResult = {};");
    for (let A of $.keys) {
      let D = x[A], R = Di(A), U = ((ae = (W = c[A]) == null ? void 0 : W._zod) == null ? void 0 : ae.optout) === "optional";
      p.write(`const ${D} = ${y(A)};`), U ? p.write(`
        if (${D}.issues.length) {
          if (${R} in input) {
            payload.issues = payload.issues.concat(${D}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${R}, ...iss.path] : [${R}]
            })));
          }
        }
        
        if (${D}.value === undefined) {
          if (${R} in input) {
            newResult[${R}] = undefined;
          }
        } else {
          newResult[${R}] = ${D}.value;
        }
        
      `) : p.write(`
        if (${D}.issues.length) {
          payload.issues = payload.issues.concat(${D}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${R}, ...iss.path] : [${R}]
          })));
        }
        
        if (${D}.value === undefined) {
          if (${R} in input) {
            newResult[${R}] = undefined;
          }
        } else {
          newResult[${R}] = ${D}.value;
        }
        
      `);
    }
    p.write("payload.value = newResult;"), p.write("return payload;");
    let P = p.compile();
    return (A, D) => P(c, A, D);
  }, r, o = De, u = !zt.jitless, d = u && ya.value, s = i.catchall, m;
  e._zod.parse = (c, p) => {
    m ?? (m = a.value);
    let $ = c.value;
    return o($) ? u && d && (p == null ? void 0 : p.async) === !1 && p.jitless !== !0 ? (r || (r = t(i.shape)), c = r(c, p), s ? $u([], $, c, p, m, e) : c) : n(c, p) : (c.issues.push({ expected: "object", code: "invalid_type", input: $, inst: e }), c);
  };
});
function Vr(e, i, n, a) {
  for (let r of e) if (r.issues.length === 0) return i.value = r.value, i;
  let t = e.filter((r) => !_e(r));
  return t.length === 1 ? (i.value = t[0].value, t[0]) : (i.issues.push({ code: "invalid_union", input: i.value, inst: n, errors: e.map((r) => r.issues.map((o) => te(o, a, F()))) }), i);
}
var Lt = f("$ZodUnion", (e, i) => {
  k.init(e, i), w(e._zod, "optin", () => i.options.some((t) => t._zod.optin === "optional") ? "optional" : void 0), w(e._zod, "optout", () => i.options.some((t) => t._zod.optout === "optional") ? "optional" : void 0), w(e._zod, "values", () => {
    if (i.options.every((t) => t._zod.values)) return new Set(i.options.flatMap((t) => Array.from(t._zod.values)));
  }), w(e._zod, "pattern", () => {
    if (i.options.every((t) => t._zod.pattern)) {
      let t = i.options.map((r) => r._zod.pattern);
      return new RegExp(`^(${t.map((r) => At(r.source)).join("|")})$`);
    }
  });
  let n = i.options.length === 1, a = i.options[0]._zod.run;
  e._zod.parse = (t, r) => {
    if (n) return a(t, r);
    let o = !1, u = [];
    for (let d of i.options) {
      let s = d._zod.run({ value: t.value, issues: [] }, r);
      if (s instanceof Promise) u.push(s), o = !0;
      else {
        if (s.issues.length === 0) return s;
        u.push(s);
      }
    }
    return o ? Promise.all(u).then((d) => Vr(d, t, e, r)) : Vr(u, t, e, r);
  };
});
function Gr(e, i, n, a) {
  let t = e.filter((r) => r.issues.length === 0);
  return t.length === 1 ? (i.value = t[0].value, i) : (t.length === 0 ? i.issues.push({ code: "invalid_union", input: i.value, inst: n, errors: e.map((r) => r.issues.map((o) => te(o, a, F()))) }) : i.issues.push({ code: "invalid_union", input: i.value, inst: n, errors: [], inclusive: !1 }), i);
}
var _u = f("$ZodXor", (e, i) => {
  Lt.init(e, i), i.inclusive = !1;
  let n = i.options.length === 1, a = i.options[0]._zod.run;
  e._zod.parse = (t, r) => {
    if (n) return a(t, r);
    let o = !1, u = [];
    for (let d of i.options) {
      let s = d._zod.run({ value: t.value, issues: [] }, r);
      s instanceof Promise ? (u.push(s), o = !0) : u.push(s);
    }
    return o ? Promise.all(u).then((d) => Gr(d, t, e, r)) : Gr(u, t, e, r);
  };
}), ku = f("$ZodDiscriminatedUnion", (e, i) => {
  i.inclusive = !1, Lt.init(e, i);
  let n = e._zod.parse;
  w(e._zod, "propValues", () => {
    let t = {};
    for (let r of i.options) {
      let o = r._zod.propValues;
      if (!o || Object.keys(o).length === 0) throw Error(`Invalid discriminated union option at index "${i.options.indexOf(r)}"`);
      for (let [u, d] of Object.entries(o)) {
        t[u] || (t[u] = /* @__PURE__ */ new Set());
        for (let s of d) t[u].add(s);
      }
    }
    return t;
  });
  let a = et(() => {
    var o;
    let t = i.options, r = /* @__PURE__ */ new Map();
    for (let u of t) {
      let d = (o = u._zod.propValues) == null ? void 0 : o[i.discriminator];
      if (!d || d.size === 0) throw Error(`Invalid discriminated union option at index "${i.options.indexOf(u)}"`);
      for (let s of d) {
        if (r.has(s)) throw Error(`Duplicate discriminator value "${String(s)}"`);
        r.set(s, u);
      }
    }
    return r;
  });
  e._zod.parse = (t, r) => {
    let o = t.value;
    if (!De(o)) return t.issues.push({ code: "invalid_type", expected: "object", input: o, inst: e }), t;
    let u = a.value.get(o == null ? void 0 : o[i.discriminator]);
    return u ? u._zod.run(t, r) : i.unionFallback ? n(t, r) : (t.issues.push({ code: "invalid_union", errors: [], note: "No matching discriminator", discriminator: i.discriminator, input: o, path: [i.discriminator], inst: e }), t);
  };
}), Iu = f("$ZodIntersection", (e, i) => {
  k.init(e, i), e._zod.parse = (n, a) => {
    let t = n.value, r = i.left._zod.run({ value: t, issues: [] }, a), o = i.right._zod.run({ value: t, issues: [] }, a);
    return r instanceof Promise || o instanceof Promise ? Promise.all([r, o]).then(([u, d]) => Kr(n, u, d)) : Kr(n, r, o);
  };
});
function Ai(e, i) {
  if (e === i) return { valid: !0, data: e };
  if (e instanceof Date && i instanceof Date && +e == +i) return { valid: !0, data: e };
  if (Ie(e) && Ie(i)) {
    let n = Object.keys(i), a = Object.keys(e).filter((r) => n.indexOf(r) !== -1), t = { ...e, ...i };
    for (let r of a) {
      let o = Ai(e[r], i[r]);
      if (!o.valid) return { valid: !1, mergeErrorPath: [r, ...o.mergeErrorPath] };
      t[r] = o.data;
    }
    return { valid: !0, data: t };
  }
  if (Array.isArray(e) && Array.isArray(i)) {
    if (e.length !== i.length) return { valid: !1, mergeErrorPath: [] };
    let n = [];
    for (let a = 0; a < e.length; a++) {
      let t = e[a], r = i[a], o = Ai(t, r);
      if (!o.valid) return { valid: !1, mergeErrorPath: [a, ...o.mergeErrorPath] };
      n.push(o.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Kr(e, i, n) {
  let a = /* @__PURE__ */ new Map(), t;
  for (let u of i.issues) if (u.code === "unrecognized_keys") {
    t ?? (t = u);
    for (let d of u.keys)
      a.has(d) || a.set(d, {}), a.get(d).l = !0;
  } else e.issues.push(u);
  for (let u of n.issues) if (u.code === "unrecognized_keys") for (let d of u.keys)
    a.has(d) || a.set(d, {}), a.get(d).r = !0;
  else e.issues.push(u);
  let r = [...a].filter(([, u]) => u.l && u.r).map(([u]) => u);
  if (r.length && t && e.issues.push({ ...t, keys: r }), _e(e)) return e;
  let o = Ai(i.value, n.value);
  if (!o.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
  return e.value = o.data, e;
}
var sn = f("$ZodTuple", (e, i) => {
  k.init(e, i);
  let n = i.items;
  e._zod.parse = (a, t) => {
    let r = a.value;
    if (!Array.isArray(r)) return a.issues.push({ input: r, inst: e, expected: "tuple", code: "invalid_type" }), a;
    a.value = [];
    let o = [], u = [...n].reverse().findIndex((m) => m._zod.optin !== "optional"), d = u === -1 ? 0 : n.length - u;
    if (!i.rest) {
      let m = r.length > n.length, c = r.length < d - 1;
      if (m || c) return a.issues.push({ ...m ? { code: "too_big", maximum: n.length, inclusive: !0 } : { code: "too_small", minimum: n.length }, input: r, inst: e, origin: "array" }), a;
    }
    let s = -1;
    for (let m of n) {
      if (s++, s >= r.length && s >= d)
        continue;
      let c = m._zod.run({ value: r[s], issues: [] }, t);
      c instanceof Promise ? o.push(c.then((p) => It(p, a, s))) : It(c, a, s);
    }
    if (i.rest) {
      let m = r.slice(n.length);
      for (let c of m) {
        s++;
        let p = i.rest._zod.run({ value: c, issues: [] }, t);
        p instanceof Promise ? o.push(p.then(($) => It($, a, s))) : It(p, a, s);
      }
    }
    return o.length ? Promise.all(o).then(() => a) : a;
  };
});
function It(e, i, n) {
  e.issues.length && i.issues.push(...re(n, e.issues)), i.value[n] = e.value;
}
var xu = f("$ZodRecord", (e, i) => {
  k.init(e, i), e._zod.parse = (n, a) => {
    let t = n.value;
    if (!Ie(t)) return n.issues.push({ expected: "record", code: "invalid_type", input: t, inst: e }), n;
    let r = [], o = i.keyType._zod.values;
    if (o) {
      n.value = {};
      let u = /* @__PURE__ */ new Set();
      for (let s of o) if (typeof s == "string" || typeof s == "number" || typeof s == "symbol") {
        u.add(typeof s == "number" ? s.toString() : s);
        let m = i.valueType._zod.run({ value: t[s], issues: [] }, a);
        m instanceof Promise ? r.push(m.then((c) => {
          c.issues.length && n.issues.push(...re(s, c.issues)), n.value[s] = c.value;
        })) : (m.issues.length && n.issues.push(...re(s, m.issues)), n.value[s] = m.value);
      }
      let d;
      for (let s in t) u.has(s) || (d = d ?? [], d.push(s));
      d && d.length > 0 && n.issues.push({ code: "unrecognized_keys", input: t, inst: e, keys: d });
    } else {
      n.value = {};
      for (let u of Reflect.ownKeys(t)) {
        if (u === "__proto__") continue;
        let d = i.keyType._zod.run({ value: u, issues: [] }, a);
        if (d instanceof Promise) throw Error("Async schemas not supported in object keys currently");
        if (typeof u == "string" && en.test(u) && d.issues.length && d.issues.some((m) => m.code === "invalid_type" && m.expected === "number")) {
          let m = i.keyType._zod.run({ value: Number(u), issues: [] }, a);
          if (m instanceof Promise) throw Error("Async schemas not supported in object keys currently");
          m.issues.length === 0 && (d = m);
        }
        if (d.issues.length) {
          i.mode === "loose" ? n.value[u] = t[u] : n.issues.push({ code: "invalid_key", origin: "record", issues: d.issues.map((m) => te(m, a, F())), input: u, path: [u], inst: e });
          continue;
        }
        let s = i.valueType._zod.run({ value: t[u], issues: [] }, a);
        s instanceof Promise ? r.push(s.then((m) => {
          m.issues.length && n.issues.push(...re(u, m.issues)), n.value[d.value] = m.value;
        })) : (s.issues.length && n.issues.push(...re(u, s.issues)), n.value[d.value] = s.value);
      }
    }
    return r.length ? Promise.all(r).then(() => n) : n;
  };
}), wu = f("$ZodMap", (e, i) => {
  k.init(e, i), e._zod.parse = (n, a) => {
    let t = n.value;
    if (!(t instanceof Map)) return n.issues.push({ expected: "map", code: "invalid_type", input: t, inst: e }), n;
    let r = [];
    n.value = /* @__PURE__ */ new Map();
    for (let [o, u] of t) {
      let d = i.keyType._zod.run({ value: o, issues: [] }, a), s = i.valueType._zod.run({ value: u, issues: [] }, a);
      d instanceof Promise || s instanceof Promise ? r.push(Promise.all([d, s]).then(([m, c]) => {
        Br(m, c, n, o, t, e, a);
      })) : Br(d, s, n, o, t, e, a);
    }
    return r.length ? Promise.all(r).then(() => n) : n;
  };
});
function Br(e, i, n, a, t, r, o) {
  e.issues.length && (Ot.has(typeof a) ? n.issues.push(...re(a, e.issues)) : n.issues.push({ code: "invalid_key", origin: "map", input: t, inst: r, issues: e.issues.map((u) => te(u, o, F())) })), i.issues.length && (Ot.has(typeof a) ? n.issues.push(...re(a, i.issues)) : n.issues.push({ origin: "map", code: "invalid_element", input: t, inst: r, key: a, issues: i.issues.map((u) => te(u, o, F())) })), n.value.set(e.value, i.value);
}
var Su = f("$ZodSet", (e, i) => {
  k.init(e, i), e._zod.parse = (n, a) => {
    let t = n.value;
    if (!(t instanceof Set)) return n.issues.push({ input: t, inst: e, expected: "set", code: "invalid_type" }), n;
    let r = [];
    n.value = /* @__PURE__ */ new Set();
    for (let o of t) {
      let u = i.valueType._zod.run({ value: o, issues: [] }, a);
      u instanceof Promise ? r.push(u.then((d) => Hr(d, n))) : Hr(u, n);
    }
    return r.length ? Promise.all(r).then(() => n) : n;
  };
});
function Hr(e, i) {
  e.issues.length && i.issues.push(...e.issues), i.value.add(e.value);
}
var zu = f("$ZodEnum", (e, i) => {
  k.init(e, i);
  let n = Li(i.entries), a = new Set(n);
  e._zod.values = a, e._zod.pattern = new RegExp(`^(${n.filter((t) => Ot.has(typeof t)).map((t) => typeof t == "string" ? se(t) : t.toString()).join("|")})$`), e._zod.parse = (t, r) => {
    let o = t.value;
    return a.has(o) || t.issues.push({ code: "invalid_value", values: n, input: o, inst: e }), t;
  };
}), Uu = f("$ZodLiteral", (e, i) => {
  if (k.init(e, i), i.values.length === 0) throw Error("Cannot create literal schema with no valid values");
  let n = new Set(i.values);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${i.values.map((a) => typeof a == "string" ? se(a) : a ? se(a.toString()) : String(a)).join("|")})$`), e._zod.parse = (a, t) => {
    let r = a.value;
    return n.has(r) || a.issues.push({ code: "invalid_value", values: i.values, input: r, inst: e }), a;
  };
}), Ou = f("$ZodFile", (e, i) => {
  k.init(e, i), e._zod.parse = (n, a) => {
    let t = n.value;
    return t instanceof File || n.issues.push({ expected: "file", code: "invalid_type", input: t, inst: e }), n;
  };
}), ju = f("$ZodTransform", (e, i) => {
  k.init(e, i), e._zod.parse = (n, a) => {
    if (a.direction === "backward") throw new Tt(e.constructor.name);
    let t = i.transform(n.value, n);
    if (a.async) return (t instanceof Promise ? t : Promise.resolve(t)).then((r) => (n.value = r, n));
    if (t instanceof Promise) throw new ke();
    return n.value = t, n;
  };
});
function Xr(e, i) {
  return e.issues.length && i === void 0 ? { issues: [], value: void 0 } : e;
}
var ln = f("$ZodOptional", (e, i) => {
  k.init(e, i), e._zod.optin = "optional", e._zod.optout = "optional", w(e._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, void 0]) : void 0), w(e._zod, "pattern", () => {
    let n = i.innerType._zod.pattern;
    return n ? new RegExp(`^(${At(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, a) => {
    if (i.innerType._zod.optin === "optional") {
      let t = i.innerType._zod.run(n, a);
      return t instanceof Promise ? t.then((r) => Xr(r, n.value)) : Xr(t, n.value);
    }
    return n.value === void 0 ? n : i.innerType._zod.run(n, a);
  };
}), Zu = f("$ZodExactOptional", (e, i) => {
  ln.init(e, i), w(e._zod, "values", () => i.innerType._zod.values), w(e._zod, "pattern", () => i.innerType._zod.pattern), e._zod.parse = (n, a) => i.innerType._zod.run(n, a);
}), Nu = f("$ZodNullable", (e, i) => {
  k.init(e, i), w(e._zod, "optin", () => i.innerType._zod.optin), w(e._zod, "optout", () => i.innerType._zod.optout), w(e._zod, "pattern", () => {
    let n = i.innerType._zod.pattern;
    return n ? new RegExp(`^(${At(n.source)}|null)$`) : void 0;
  }), w(e._zod, "values", () => i.innerType._zod.values ? /* @__PURE__ */ new Set([...i.innerType._zod.values, null]) : void 0), e._zod.parse = (n, a) => n.value === null ? n : i.innerType._zod.run(n, a);
}), Pu = f("$ZodDefault", (e, i) => {
  k.init(e, i), e._zod.optin = "optional", w(e._zod, "values", () => i.innerType._zod.values), e._zod.parse = (n, a) => {
    if (a.direction === "backward") return i.innerType._zod.run(n, a);
    if (n.value === void 0) return n.value = i.defaultValue, n;
    let t = i.innerType._zod.run(n, a);
    return t instanceof Promise ? t.then((r) => Yr(r, i)) : Yr(t, i);
  };
});
function Yr(e, i) {
  return e.value === void 0 && (e.value = i.defaultValue), e;
}
var Du = f("$ZodPrefault", (e, i) => {
  k.init(e, i), e._zod.optin = "optional", w(e._zod, "values", () => i.innerType._zod.values), e._zod.parse = (n, a) => (a.direction === "backward" || n.value === void 0 && (n.value = i.defaultValue), i.innerType._zod.run(n, a));
}), Eu = f("$ZodNonOptional", (e, i) => {
  k.init(e, i), w(e._zod, "values", () => {
    let n = i.innerType._zod.values;
    return n ? new Set([...n].filter((a) => a !== void 0)) : void 0;
  }), e._zod.parse = (n, a) => {
    let t = i.innerType._zod.run(n, a);
    return t instanceof Promise ? t.then((r) => Qr(r, e)) : Qr(t, e);
  };
});
function Qr(e, i) {
  return !e.issues.length && e.value === void 0 && e.issues.push({ code: "invalid_type", expected: "nonoptional", input: e.value, inst: i }), e;
}
var Tu = f("$ZodSuccess", (e, i) => {
  k.init(e, i), e._zod.parse = (n, a) => {
    if (a.direction === "backward") throw new Tt("ZodSuccess");
    let t = i.innerType._zod.run(n, a);
    return t instanceof Promise ? t.then((r) => (n.value = r.issues.length === 0, n)) : (n.value = t.issues.length === 0, n);
  };
}), Au = f("$ZodCatch", (e, i) => {
  k.init(e, i), w(e._zod, "optin", () => i.innerType._zod.optin), w(e._zod, "optout", () => i.innerType._zod.optout), w(e._zod, "values", () => i.innerType._zod.values), e._zod.parse = (n, a) => {
    if (a.direction === "backward") return i.innerType._zod.run(n, a);
    let t = i.innerType._zod.run(n, a);
    return t instanceof Promise ? t.then((r) => (n.value = r.value, r.issues.length && (n.value = i.catchValue({ ...n, error: { issues: r.issues.map((o) => te(o, a, F())) }, input: n.value }), n.issues = []), n)) : (n.value = t.value, t.issues.length && (n.value = i.catchValue({ ...n, error: { issues: t.issues.map((r) => te(r, a, F())) }, input: n.value }), n.issues = []), n);
  };
}), Ru = f("$ZodNaN", (e, i) => {
  k.init(e, i), e._zod.parse = (n, a) => ((typeof n.value != "number" || !Number.isNaN(n.value)) && n.issues.push({ input: n.value, inst: e, expected: "nan", code: "invalid_type" }), n);
}), Cu = f("$ZodPipe", (e, i) => {
  k.init(e, i), w(e._zod, "values", () => i.in._zod.values), w(e._zod, "optin", () => i.in._zod.optin), w(e._zod, "optout", () => i.out._zod.optout), w(e._zod, "propValues", () => i.in._zod.propValues), e._zod.parse = (n, a) => {
    if (a.direction === "backward") {
      let r = i.out._zod.run(n, a);
      return r instanceof Promise ? r.then((o) => xt(o, i.in, a)) : xt(r, i.in, a);
    }
    let t = i.in._zod.run(n, a);
    return t instanceof Promise ? t.then((r) => xt(r, i.out, a)) : xt(t, i.out, a);
  };
});
function xt(e, i, n) {
  return e.issues.length ? (e.aborted = !0, e) : i._zod.run({ value: e.value, issues: e.issues }, n);
}
var dn = f("$ZodCodec", (e, i) => {
  k.init(e, i), w(e._zod, "values", () => i.in._zod.values), w(e._zod, "optin", () => i.in._zod.optin), w(e._zod, "optout", () => i.out._zod.optout), w(e._zod, "propValues", () => i.in._zod.propValues), e._zod.parse = (n, a) => {
    if ((a.direction || "forward") === "forward") {
      let t = i.in._zod.run(n, a);
      return t instanceof Promise ? t.then((r) => wt(r, i, a)) : wt(t, i, a);
    } else {
      let t = i.out._zod.run(n, a);
      return t instanceof Promise ? t.then((r) => wt(r, i, a)) : wt(t, i, a);
    }
  };
});
function wt(e, i, n) {
  if (e.issues.length) return e.aborted = !0, e;
  if ((n.direction || "forward") === "forward") {
    let a = i.transform(e.value, e);
    return a instanceof Promise ? a.then((t) => St(e, t, i.out, n)) : St(e, a, i.out, n);
  } else {
    let a = i.reverseTransform(e.value, e);
    return a instanceof Promise ? a.then((t) => St(e, t, i.in, n)) : St(e, a, i.in, n);
  }
}
function St(e, i, n, a) {
  return e.issues.length ? (e.aborted = !0, e) : n._zod.run({ value: i, issues: e.issues }, a);
}
var Lu = f("$ZodReadonly", (e, i) => {
  k.init(e, i), w(e._zod, "propValues", () => i.innerType._zod.propValues), w(e._zod, "values", () => i.innerType._zod.values), w(e._zod, "optin", () => {
    var n, a;
    return (a = (n = i.innerType) == null ? void 0 : n._zod) == null ? void 0 : a.optin;
  }), w(e._zod, "optout", () => {
    var n, a;
    return (a = (n = i.innerType) == null ? void 0 : n._zod) == null ? void 0 : a.optout;
  }), e._zod.parse = (n, a) => {
    if (a.direction === "backward") return i.innerType._zod.run(n, a);
    let t = i.innerType._zod.run(n, a);
    return t instanceof Promise ? t.then(ea) : ea(t);
  };
});
function ea(e) {
  return e.value = Object.freeze(e.value), e;
}
var Ju = f("$ZodTemplateLiteral", (e, i) => {
  k.init(e, i);
  let n = [];
  for (let a of i.parts) if (typeof a == "object" && a !== null) {
    if (!a._zod.pattern) throw Error(`Invalid template literal part, no pattern found: ${[...a._zod.traits].shift()}`);
    let t = a._zod.pattern instanceof RegExp ? a._zod.pattern.source : a._zod.pattern;
    if (!t) throw Error(`Invalid template literal part: ${a._zod.traits}`);
    let r = t.startsWith("^") ? 1 : 0, o = t.endsWith("$") ? t.length - 1 : t.length;
    n.push(t.slice(r, o));
  } else if (a === null || ka.has(typeof a)) n.push(se(`${a}`));
  else throw Error(`Invalid template literal part: ${a}`);
  e._zod.pattern = new RegExp(`^${n.join("")}$`), e._zod.parse = (a, t) => typeof a.value != "string" ? (a.issues.push({ input: a.value, inst: e, expected: "string", code: "invalid_type" }), a) : (e._zod.pattern.lastIndex = 0, e._zod.pattern.test(a.value) || a.issues.push({ input: a.value, inst: e, code: "invalid_format", format: i.format ?? "template_literal", pattern: e._zod.pattern.source }), a);
}), Mu = f("$ZodFunction", (e, i) => (k.init(e, i), e._def = i, e._zod.def = i, e.implement = (n) => {
  if (typeof n != "function") throw Error("implement() must be called with a function");
  return function(...a) {
    let t = e._def.input ? Ei(e._def.input, a) : a, r = Reflect.apply(n, this, t);
    return e._def.output ? Ei(e._def.output, r) : r;
  };
}, e.implementAsync = (n) => {
  if (typeof n != "function") throw Error("implementAsync() must be called with a function");
  return async function(...a) {
    let t = e._def.input ? await Ti(e._def.input, a) : a, r = await Reflect.apply(n, this, t);
    return e._def.output ? await Ti(e._def.output, r) : r;
  };
}, e._zod.parse = (n, a) => typeof n.value != "function" ? (n.issues.push({ code: "invalid_type", expected: "function", input: n.value, inst: e }), n) : (e._def.output && e._def.output._zod.def.type === "promise" ? n.value = e.implementAsync(n.value) : n.value = e.implement(n.value), n), e.input = (...n) => {
  let a = e.constructor;
  return Array.isArray(n[0]) ? new a({ type: "function", input: new sn({ type: "tuple", items: n[0], rest: n[1] }), output: e._def.output }) : new a({ type: "function", input: n[0], output: e._def.output });
}, e.output = (n) => new e.constructor({ type: "function", input: e._def.input, output: n }), e)), Fu = f("$ZodPromise", (e, i) => {
  k.init(e, i), e._zod.parse = (n, a) => Promise.resolve(n.value).then((t) => i.innerType._zod.run({ value: t, issues: [] }, a));
}), qu = f("$ZodLazy", (e, i) => {
  k.init(e, i), w(e._zod, "innerType", () => i.getter()), w(e._zod, "pattern", () => {
    var n, a;
    return (a = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : a.pattern;
  }), w(e._zod, "propValues", () => {
    var n, a;
    return (a = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : a.propValues;
  }), w(e._zod, "optin", () => {
    var n, a;
    return ((a = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : a.optin) ?? void 0;
  }), w(e._zod, "optout", () => {
    var n, a;
    return ((a = (n = e._zod.innerType) == null ? void 0 : n._zod) == null ? void 0 : a.optout) ?? void 0;
  }), e._zod.parse = (n, a) => e._zod.innerType._zod.run(n, a);
}), Wu = f("$ZodCustom", (e, i) => {
  E.init(e, i), k.init(e, i), e._zod.parse = (n, a) => n, e._zod.check = (n) => {
    let a = n.value, t = i.fn(a);
    if (t instanceof Promise) return t.then((r) => ta(r, n, a, e));
    ta(t, n, a, e);
  };
});
function ta(e, i, n, a) {
  if (!e) {
    let t = { code: "custom", input: n, inst: a, path: [...a._zod.def.path ?? []], continue: !a._zod.def.abort };
    a._zod.def.params && (t.params = a._zod.def.params), i.issues.push(jt(t));
  }
}
var cn = {};
le(cn, { zhTW: () => wp, zhCN: () => Ip, yo: () => zp, vi: () => _p, uz: () => bp, ur: () => hp, uk: () => Ku, ua: () => vp, tr: () => fp, th: () => cp, ta: () => lp, sv: () => up, sl: () => ap, ru: () => np, pt: () => tp, ps: () => Xf, pl: () => Qf, ota: () => Bf, no: () => Gf, nl: () => Wf, ms: () => Ff, mk: () => Jf, lt: () => Cf, ko: () => Af, km: () => Gu, kh: () => Ef, ka: () => Pf, ja: () => Zf, it: () => Of, is: () => zf, id: () => wf, hy: () => If, hu: () => _f, he: () => bf, frCA: () => hf, fr: () => vf, fi: () => ff, fa: () => cf, es: () => lf, eo: () => uf, en: () => Vu, de: () => rf, da: () => tf, cs: () => Qm, ca: () => Xm, bg: () => Bm, be: () => Gm, az: () => Wm, ar: () => Fm });
var Mm = () => {
  let e = { string: { unit: "حرف", verb: "أن يحوي" }, file: { unit: "بايت", verb: "أن يحوي" }, array: { unit: "عنصر", verb: "أن يحوي" }, set: { unit: "عنصر", verb: "أن يحوي" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "مدخل", email: "بريد إلكتروني", url: "رابط", emoji: "إيموجي", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "تاريخ ووقت بمعيار ISO", date: "تاريخ بمعيار ISO", time: "وقت بمعيار ISO", duration: "مدة بمعيار ISO", ipv4: "عنوان IPv4", ipv6: "عنوان IPv6", cidrv4: "مدى عناوين بصيغة IPv4", cidrv6: "مدى عناوين بصيغة IPv6", base64: "نَص بترميز base64-encoded", base64url: "نَص بترميز base64url-encoded", json_string: "نَص على هيئة JSON", e164: "رقم هاتف بمعيار E.164", jwt: "JWT", template_literal: "مدخل" }, a = { nan: "NaN" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `مدخلات غير مقبولة: يفترض إدخال instanceof ${t.expected}، ولكن تم إدخال ${u}` : `مدخلات غير مقبولة: يفترض إدخال ${r}، ولكن تم إدخال ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `مدخلات غير مقبولة: يفترض إدخال ${b(t.values[0])}` : `اختيار غير مقبول: يتوقع انتقاء أحد هذه الخيارات: ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? ` أكبر من اللازم: يفترض أن تكون ${t.origin ?? "القيمة"} ${r} ${t.maximum.toString()} ${o.unit ?? "عنصر"}` : `أكبر من اللازم: يفترض أن تكون ${t.origin ?? "القيمة"} ${r} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `أصغر من اللازم: يفترض لـ ${t.origin} أن يكون ${r} ${t.minimum.toString()} ${o.unit}` : `أصغر من اللازم: يفترض لـ ${t.origin} أن يكون ${r} ${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `نَص غير مقبول: يجب أن يبدأ بـ "${t.prefix}"` : r.format === "ends_with" ? `نَص غير مقبول: يجب أن ينتهي بـ "${r.suffix}"` : r.format === "includes" ? `نَص غير مقبول: يجب أن يتضمَّن "${r.includes}"` : r.format === "regex" ? `نَص غير مقبول: يجب أن يطابق النمط ${r.pattern}` : `${n[r.format] ?? t.format} غير مقبول`;
      }
      case "not_multiple_of":
        return `رقم غير مقبول: يجب أن يكون من مضاعفات ${t.divisor}`;
      case "unrecognized_keys":
        return `معرف${t.keys.length > 1 ? "ات" : ""} غريب${t.keys.length > 1 ? "ة" : ""}: ${v(t.keys, "، ")}`;
      case "invalid_key":
        return `معرف غير مقبول في ${t.origin}`;
      case "invalid_union":
        return "مدخل غير مقبول";
      case "invalid_element":
        return `مدخل غير مقبول في ${t.origin}`;
      default:
        return "مدخل غير مقبول";
    }
  };
};
function Fm() {
  return { localeError: Mm() };
}
var qm = () => {
  let e = { string: { unit: "simvol", verb: "olmalıdır" }, file: { unit: "bayt", verb: "olmalıdır" }, array: { unit: "element", verb: "olmalıdır" }, set: { unit: "element", verb: "olmalıdır" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "input", email: "email address", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datetime", date: "ISO date", time: "ISO time", duration: "ISO duration", ipv4: "IPv4 address", ipv6: "IPv6 address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded string", base64url: "base64url-encoded string", json_string: "JSON string", e164: "E.164 number", jwt: "JWT", template_literal: "input" }, a = { nan: "NaN" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Yanlış dəyər: gözlənilən instanceof ${t.expected}, daxil olan ${u}` : `Yanlış dəyər: gözlənilən ${r}, daxil olan ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Yanlış dəyər: gözlənilən ${b(t.values[0])}` : `Yanlış seçim: aşağıdakılardan biri olmalıdır: ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Çox böyük: gözlənilən ${t.origin ?? "dəyər"} ${r}${t.maximum.toString()} ${o.unit ?? "element"}` : `Çox böyük: gözlənilən ${t.origin ?? "dəyər"} ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Çox kiçik: gözlənilən ${t.origin} ${r}${t.minimum.toString()} ${o.unit}` : `Çox kiçik: gözlənilən ${t.origin} ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Yanlış mətn: "${r.prefix}" ilə başlamalıdır` : r.format === "ends_with" ? `Yanlış mətn: "${r.suffix}" ilə bitməlidir` : r.format === "includes" ? `Yanlış mətn: "${r.includes}" daxil olmalıdır` : r.format === "regex" ? `Yanlış mətn: ${r.pattern} şablonuna uyğun olmalıdır` : `Yanlış ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Yanlış ədəd: ${t.divisor} ilə bölünə bilən olmalıdır`;
      case "unrecognized_keys":
        return `Tanınmayan açar${t.keys.length > 1 ? "lar" : ""}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `${t.origin} daxilində yanlış açar`;
      case "invalid_union":
        return "Yanlış dəyər";
      case "invalid_element":
        return `${t.origin} daxilində yanlış dəyər`;
      default:
        return "Yanlış dəyər";
    }
  };
};
function Wm() {
  return { localeError: qm() };
}
function ia(e, i, n, a) {
  let t = Math.abs(e), r = t % 10, o = t % 100;
  return o >= 11 && o <= 19 ? a : r === 1 ? i : r >= 2 && r <= 4 ? n : a;
}
var Vm = () => {
  let e = { string: { unit: { one: "сімвал", few: "сімвалы", many: "сімвалаў" }, verb: "мець" }, array: { unit: { one: "элемент", few: "элементы", many: "элементаў" }, verb: "мець" }, set: { unit: { one: "элемент", few: "элементы", many: "элементаў" }, verb: "мець" }, file: { unit: { one: "байт", few: "байты", many: "байтаў" }, verb: "мець" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "увод", email: "email адрас", url: "URL", emoji: "эмодзі", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO дата і час", date: "ISO дата", time: "ISO час", duration: "ISO працягласць", ipv4: "IPv4 адрас", ipv6: "IPv6 адрас", cidrv4: "IPv4 дыяпазон", cidrv6: "IPv6 дыяпазон", base64: "радок у фармаце base64", base64url: "радок у фармаце base64url", json_string: "JSON радок", e164: "нумар E.164", jwt: "JWT", template_literal: "увод" }, a = { nan: "NaN", number: "лік", array: "масіў" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Няправільны ўвод: чакаўся instanceof ${t.expected}, атрымана ${u}` : `Няправільны ўвод: чакаўся ${r}, атрымана ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Няправільны ўвод: чакалася ${b(t.values[0])}` : `Няправільны варыянт: чакаўся адзін з ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        if (o) {
          let u = Number(t.maximum), d = ia(u, o.unit.one, o.unit.few, o.unit.many);
          return `Занадта вялікі: чакалася, што ${t.origin ?? "значэнне"} павінна ${o.verb} ${r}${t.maximum.toString()} ${d}`;
        }
        return `Занадта вялікі: чакалася, што ${t.origin ?? "значэнне"} павінна быць ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        if (o) {
          let u = Number(t.minimum), d = ia(u, o.unit.one, o.unit.few, o.unit.many);
          return `Занадта малы: чакалася, што ${t.origin} павінна ${o.verb} ${r}${t.minimum.toString()} ${d}`;
        }
        return `Занадта малы: чакалася, што ${t.origin} павінна быць ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Няправільны радок: павінен пачынацца з "${r.prefix}"` : r.format === "ends_with" ? `Няправільны радок: павінен заканчвацца на "${r.suffix}"` : r.format === "includes" ? `Няправільны радок: павінен змяшчаць "${r.includes}"` : r.format === "regex" ? `Няправільны радок: павінен адпавядаць шаблону ${r.pattern}` : `Няправільны ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Няправільны лік: павінен быць кратным ${t.divisor}`;
      case "unrecognized_keys":
        return `Нераспазнаны ${t.keys.length > 1 ? "ключы" : "ключ"}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Няправільны ключ у ${t.origin}`;
      case "invalid_union":
        return "Няправільны ўвод";
      case "invalid_element":
        return `Няправільнае значэнне ў ${t.origin}`;
      default:
        return "Няправільны ўвод";
    }
  };
};
function Gm() {
  return { localeError: Vm() };
}
var Km = () => {
  let e = { string: { unit: "символа", verb: "да съдържа" }, file: { unit: "байта", verb: "да съдържа" }, array: { unit: "елемента", verb: "да съдържа" }, set: { unit: "елемента", verb: "да съдържа" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "вход", email: "имейл адрес", url: "URL", emoji: "емоджи", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO време", date: "ISO дата", time: "ISO време", duration: "ISO продължителност", ipv4: "IPv4 адрес", ipv6: "IPv6 адрес", cidrv4: "IPv4 диапазон", cidrv6: "IPv6 диапазон", base64: "base64-кодиран низ", base64url: "base64url-кодиран низ", json_string: "JSON низ", e164: "E.164 номер", jwt: "JWT", template_literal: "вход" }, a = { nan: "NaN", number: "число", array: "масив" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Невалиден вход: очакван instanceof ${t.expected}, получен ${u}` : `Невалиден вход: очакван ${r}, получен ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Невалиден вход: очакван ${b(t.values[0])}` : `Невалидна опция: очаквано едно от ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Твърде голямо: очаква се ${t.origin ?? "стойност"} да съдържа ${r}${t.maximum.toString()} ${o.unit ?? "елемента"}` : `Твърде голямо: очаква се ${t.origin ?? "стойност"} да бъде ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Твърде малко: очаква се ${t.origin} да съдържа ${r}${t.minimum.toString()} ${o.unit}` : `Твърде малко: очаква се ${t.origin} да бъде ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        if (r.format === "starts_with") return `Невалиден низ: трябва да започва с "${r.prefix}"`;
        if (r.format === "ends_with") return `Невалиден низ: трябва да завършва с "${r.suffix}"`;
        if (r.format === "includes") return `Невалиден низ: трябва да включва "${r.includes}"`;
        if (r.format === "regex") return `Невалиден низ: трябва да съвпада с ${r.pattern}`;
        let o = "Невалиден";
        return r.format === "emoji" && (o = "Невалидно"), r.format === "datetime" && (o = "Невалидно"), r.format === "date" && (o = "Невалидна"), r.format === "time" && (o = "Невалидно"), r.format === "duration" && (o = "Невалидна"), `${o} ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Невалидно число: трябва да бъде кратно на ${t.divisor}`;
      case "unrecognized_keys":
        return `Неразпознат${t.keys.length > 1 ? "и" : ""} ключ${t.keys.length > 1 ? "ове" : ""}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Невалиден ключ в ${t.origin}`;
      case "invalid_union":
        return "Невалиден вход";
      case "invalid_element":
        return `Невалидна стойност в ${t.origin}`;
      default:
        return "Невалиден вход";
    }
  };
};
function Bm() {
  return { localeError: Km() };
}
var Hm = () => {
  let e = { string: { unit: "caràcters", verb: "contenir" }, file: { unit: "bytes", verb: "contenir" }, array: { unit: "elements", verb: "contenir" }, set: { unit: "elements", verb: "contenir" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "entrada", email: "adreça electrònica", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "data i hora ISO", date: "data ISO", time: "hora ISO", duration: "durada ISO", ipv4: "adreça IPv4", ipv6: "adreça IPv6", cidrv4: "rang IPv4", cidrv6: "rang IPv6", base64: "cadena codificada en base64", base64url: "cadena codificada en base64url", json_string: "cadena JSON", e164: "número E.164", jwt: "JWT", template_literal: "entrada" }, a = { nan: "NaN" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Tipus invàlid: s'esperava instanceof ${t.expected}, s'ha rebut ${u}` : `Tipus invàlid: s'esperava ${r}, s'ha rebut ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Valor invàlid: s'esperava ${b(t.values[0])}` : `Opció invàlida: s'esperava una de ${v(t.values, " o ")}`;
      case "too_big": {
        let r = t.inclusive ? "com a màxim" : "menys de", o = i(t.origin);
        return o ? `Massa gran: s'esperava que ${t.origin ?? "el valor"} contingués ${r} ${t.maximum.toString()} ${o.unit ?? "elements"}` : `Massa gran: s'esperava que ${t.origin ?? "el valor"} fos ${r} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? "com a mínim" : "més de", o = i(t.origin);
        return o ? `Massa petit: s'esperava que ${t.origin} contingués ${r} ${t.minimum.toString()} ${o.unit}` : `Massa petit: s'esperava que ${t.origin} fos ${r} ${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Format invàlid: ha de començar amb "${r.prefix}"` : r.format === "ends_with" ? `Format invàlid: ha d'acabar amb "${r.suffix}"` : r.format === "includes" ? `Format invàlid: ha d'incloure "${r.includes}"` : r.format === "regex" ? `Format invàlid: ha de coincidir amb el patró ${r.pattern}` : `Format invàlid per a ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Número invàlid: ha de ser múltiple de ${t.divisor}`;
      case "unrecognized_keys":
        return `Clau${t.keys.length > 1 ? "s" : ""} no reconeguda${t.keys.length > 1 ? "s" : ""}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Clau invàlida a ${t.origin}`;
      case "invalid_union":
        return "Entrada invàlida";
      case "invalid_element":
        return `Element invàlid a ${t.origin}`;
      default:
        return "Entrada invàlida";
    }
  };
};
function Xm() {
  return { localeError: Hm() };
}
var Ym = () => {
  let e = { string: { unit: "znaků", verb: "mít" }, file: { unit: "bajtů", verb: "mít" }, array: { unit: "prvků", verb: "mít" }, set: { unit: "prvků", verb: "mít" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "regulární výraz", email: "e-mailová adresa", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "datum a čas ve formátu ISO", date: "datum ve formátu ISO", time: "čas ve formátu ISO", duration: "doba trvání ISO", ipv4: "IPv4 adresa", ipv6: "IPv6 adresa", cidrv4: "rozsah IPv4", cidrv6: "rozsah IPv6", base64: "řetězec zakódovaný ve formátu base64", base64url: "řetězec zakódovaný ve formátu base64url", json_string: "řetězec ve formátu JSON", e164: "číslo E.164", jwt: "JWT", template_literal: "vstup" }, a = { nan: "NaN", number: "číslo", string: "řetězec", function: "funkce", array: "pole" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Neplatný vstup: očekáváno instanceof ${t.expected}, obdrženo ${u}` : `Neplatný vstup: očekáváno ${r}, obdrženo ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Neplatný vstup: očekáváno ${b(t.values[0])}` : `Neplatná možnost: očekávána jedna z hodnot ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Hodnota je příliš velká: ${t.origin ?? "hodnota"} musí mít ${r}${t.maximum.toString()} ${o.unit ?? "prvků"}` : `Hodnota je příliš velká: ${t.origin ?? "hodnota"} musí být ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Hodnota je příliš malá: ${t.origin ?? "hodnota"} musí mít ${r}${t.minimum.toString()} ${o.unit ?? "prvků"}` : `Hodnota je příliš malá: ${t.origin ?? "hodnota"} musí být ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Neplatný řetězec: musí začínat na "${r.prefix}"` : r.format === "ends_with" ? `Neplatný řetězec: musí končit na "${r.suffix}"` : r.format === "includes" ? `Neplatný řetězec: musí obsahovat "${r.includes}"` : r.format === "regex" ? `Neplatný řetězec: musí odpovídat vzoru ${r.pattern}` : `Neplatný formát ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Neplatné číslo: musí být násobkem ${t.divisor}`;
      case "unrecognized_keys":
        return `Neznámé klíče: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Neplatný klíč v ${t.origin}`;
      case "invalid_union":
        return "Neplatný vstup";
      case "invalid_element":
        return `Neplatná hodnota v ${t.origin}`;
      default:
        return "Neplatný vstup";
    }
  };
};
function Qm() {
  return { localeError: Ym() };
}
var ef = () => {
  let e = { string: { unit: "tegn", verb: "havde" }, file: { unit: "bytes", verb: "havde" }, array: { unit: "elementer", verb: "indeholdt" }, set: { unit: "elementer", verb: "indeholdt" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "input", email: "e-mailadresse", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO dato- og klokkeslæt", date: "ISO-dato", time: "ISO-klokkeslæt", duration: "ISO-varighed", ipv4: "IPv4-område", ipv6: "IPv6-område", cidrv4: "IPv4-spektrum", cidrv6: "IPv6-spektrum", base64: "base64-kodet streng", base64url: "base64url-kodet streng", json_string: "JSON-streng", e164: "E.164-nummer", jwt: "JWT", template_literal: "input" }, a = { nan: "NaN", string: "streng", number: "tal", boolean: "boolean", array: "liste", object: "objekt", set: "sæt", file: "fil" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Ugyldigt input: forventede instanceof ${t.expected}, fik ${u}` : `Ugyldigt input: forventede ${r}, fik ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Ugyldig værdi: forventede ${b(t.values[0])}` : `Ugyldigt valg: forventede en af følgende ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin), u = a[t.origin] ?? t.origin;
        return o ? `For stor: forventede ${u ?? "value"} ${o.verb} ${r} ${t.maximum.toString()} ${o.unit ?? "elementer"}` : `For stor: forventede ${u ?? "value"} havde ${r} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin), u = a[t.origin] ?? t.origin;
        return o ? `For lille: forventede ${u} ${o.verb} ${r} ${t.minimum.toString()} ${o.unit}` : `For lille: forventede ${u} havde ${r} ${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Ugyldig streng: skal starte med "${r.prefix}"` : r.format === "ends_with" ? `Ugyldig streng: skal ende med "${r.suffix}"` : r.format === "includes" ? `Ugyldig streng: skal indeholde "${r.includes}"` : r.format === "regex" ? `Ugyldig streng: skal matche mønsteret ${r.pattern}` : `Ugyldig ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Ugyldigt tal: skal være deleligt med ${t.divisor}`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "Ukendte nøgler" : "Ukendt nøgle"}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig nøgle i ${t.origin}`;
      case "invalid_union":
        return "Ugyldigt input: matcher ingen af de tilladte typer";
      case "invalid_element":
        return `Ugyldig værdi i ${t.origin}`;
      default:
        return "Ugyldigt input";
    }
  };
};
function tf() {
  return { localeError: ef() };
}
var nf = () => {
  let e = { string: { unit: "Zeichen", verb: "zu haben" }, file: { unit: "Bytes", verb: "zu haben" }, array: { unit: "Elemente", verb: "zu haben" }, set: { unit: "Elemente", verb: "zu haben" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "Eingabe", email: "E-Mail-Adresse", url: "URL", emoji: "Emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO-Datum und -Uhrzeit", date: "ISO-Datum", time: "ISO-Uhrzeit", duration: "ISO-Dauer", ipv4: "IPv4-Adresse", ipv6: "IPv6-Adresse", cidrv4: "IPv4-Bereich", cidrv6: "IPv6-Bereich", base64: "Base64-codierter String", base64url: "Base64-URL-codierter String", json_string: "JSON-String", e164: "E.164-Nummer", jwt: "JWT", template_literal: "Eingabe" }, a = { nan: "NaN", number: "Zahl", array: "Array" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Ungültige Eingabe: erwartet instanceof ${t.expected}, erhalten ${u}` : `Ungültige Eingabe: erwartet ${r}, erhalten ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Ungültige Eingabe: erwartet ${b(t.values[0])}` : `Ungültige Option: erwartet eine von ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Zu groß: erwartet, dass ${t.origin ?? "Wert"} ${r}${t.maximum.toString()} ${o.unit ?? "Elemente"} hat` : `Zu groß: erwartet, dass ${t.origin ?? "Wert"} ${r}${t.maximum.toString()} ist`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Zu klein: erwartet, dass ${t.origin} ${r}${t.minimum.toString()} ${o.unit} hat` : `Zu klein: erwartet, dass ${t.origin} ${r}${t.minimum.toString()} ist`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Ungültiger String: muss mit "${r.prefix}" beginnen` : r.format === "ends_with" ? `Ungültiger String: muss mit "${r.suffix}" enden` : r.format === "includes" ? `Ungültiger String: muss "${r.includes}" enthalten` : r.format === "regex" ? `Ungültiger String: muss dem Muster ${r.pattern} entsprechen` : `Ungültig: ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Ungültige Zahl: muss ein Vielfaches von ${t.divisor} sein`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "Unbekannte Schlüssel" : "Unbekannter Schlüssel"}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Ungültiger Schlüssel in ${t.origin}`;
      case "invalid_union":
        return "Ungültige Eingabe";
      case "invalid_element":
        return `Ungültiger Wert in ${t.origin}`;
      default:
        return "Ungültige Eingabe";
    }
  };
};
function rf() {
  return { localeError: nf() };
}
var af = () => {
  let e = { string: { unit: "characters", verb: "to have" }, file: { unit: "bytes", verb: "to have" }, array: { unit: "items", verb: "to have" }, set: { unit: "items", verb: "to have" }, map: { unit: "entries", verb: "to have" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "input", email: "email address", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datetime", date: "ISO date", time: "ISO time", duration: "ISO duration", ipv4: "IPv4 address", ipv6: "IPv6 address", mac: "MAC address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded string", base64url: "base64url-encoded string", json_string: "JSON string", e164: "E.164 number", jwt: "JWT", template_literal: "input" }, a = { nan: "NaN" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return `Invalid input: expected ${r}, received ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Invalid input: expected ${b(t.values[0])}` : `Invalid option: expected one of ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Too big: expected ${t.origin ?? "value"} to have ${r}${t.maximum.toString()} ${o.unit ?? "elements"}` : `Too big: expected ${t.origin ?? "value"} to be ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Too small: expected ${t.origin} to have ${r}${t.minimum.toString()} ${o.unit}` : `Too small: expected ${t.origin} to be ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Invalid string: must start with "${r.prefix}"` : r.format === "ends_with" ? `Invalid string: must end with "${r.suffix}"` : r.format === "includes" ? `Invalid string: must include "${r.includes}"` : r.format === "regex" ? `Invalid string: must match pattern ${r.pattern}` : `Invalid ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${t.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${t.keys.length > 1 ? "s" : ""}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${t.origin}`;
      case "invalid_union":
        return "Invalid input";
      case "invalid_element":
        return `Invalid value in ${t.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function Vu() {
  return { localeError: af() };
}
var of = () => {
  let e = { string: { unit: "karaktrojn", verb: "havi" }, file: { unit: "bajtojn", verb: "havi" }, array: { unit: "elementojn", verb: "havi" }, set: { unit: "elementojn", verb: "havi" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "enigo", email: "retadreso", url: "URL", emoji: "emoĝio", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO-datotempo", date: "ISO-dato", time: "ISO-tempo", duration: "ISO-daŭro", ipv4: "IPv4-adreso", ipv6: "IPv6-adreso", cidrv4: "IPv4-rango", cidrv6: "IPv6-rango", base64: "64-ume kodita karaktraro", base64url: "URL-64-ume kodita karaktraro", json_string: "JSON-karaktraro", e164: "E.164-nombro", jwt: "JWT", template_literal: "enigo" }, a = { nan: "NaN", number: "nombro", array: "tabelo", null: "senvalora" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Nevalida enigo: atendiĝis instanceof ${t.expected}, riceviĝis ${u}` : `Nevalida enigo: atendiĝis ${r}, riceviĝis ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Nevalida enigo: atendiĝis ${b(t.values[0])}` : `Nevalida opcio: atendiĝis unu el ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Tro granda: atendiĝis ke ${t.origin ?? "valoro"} havu ${r}${t.maximum.toString()} ${o.unit ?? "elementojn"}` : `Tro granda: atendiĝis ke ${t.origin ?? "valoro"} havu ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Tro malgranda: atendiĝis ke ${t.origin} havu ${r}${t.minimum.toString()} ${o.unit}` : `Tro malgranda: atendiĝis ke ${t.origin} estu ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Nevalida karaktraro: devas komenciĝi per "${r.prefix}"` : r.format === "ends_with" ? `Nevalida karaktraro: devas finiĝi per "${r.suffix}"` : r.format === "includes" ? `Nevalida karaktraro: devas inkluzivi "${r.includes}"` : r.format === "regex" ? `Nevalida karaktraro: devas kongrui kun la modelo ${r.pattern}` : `Nevalida ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Nevalida nombro: devas esti oblo de ${t.divisor}`;
      case "unrecognized_keys":
        return `Nekonata${t.keys.length > 1 ? "j" : ""} ŝlosilo${t.keys.length > 1 ? "j" : ""}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Nevalida ŝlosilo en ${t.origin}`;
      case "invalid_union":
        return "Nevalida enigo";
      case "invalid_element":
        return `Nevalida valoro en ${t.origin}`;
      default:
        return "Nevalida enigo";
    }
  };
};
function uf() {
  return { localeError: of() };
}
var sf = () => {
  let e = { string: { unit: "caracteres", verb: "tener" }, file: { unit: "bytes", verb: "tener" }, array: { unit: "elementos", verb: "tener" }, set: { unit: "elementos", verb: "tener" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "entrada", email: "dirección de correo electrónico", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "fecha y hora ISO", date: "fecha ISO", time: "hora ISO", duration: "duración ISO", ipv4: "dirección IPv4", ipv6: "dirección IPv6", cidrv4: "rango IPv4", cidrv6: "rango IPv6", base64: "cadena codificada en base64", base64url: "URL codificada en base64", json_string: "cadena JSON", e164: "número E.164", jwt: "JWT", template_literal: "entrada" }, a = { nan: "NaN", string: "texto", number: "número", boolean: "booleano", array: "arreglo", object: "objeto", set: "conjunto", file: "archivo", date: "fecha", bigint: "número grande", symbol: "símbolo", undefined: "indefinido", null: "nulo", function: "función", map: "mapa", record: "registro", tuple: "tupla", enum: "enumeración", union: "unión", literal: "literal", promise: "promesa", void: "vacío", never: "nunca", unknown: "desconocido", any: "cualquiera" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Entrada inválida: se esperaba instanceof ${t.expected}, recibido ${u}` : `Entrada inválida: se esperaba ${r}, recibido ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Entrada inválida: se esperaba ${b(t.values[0])}` : `Opción inválida: se esperaba una de ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin), u = a[t.origin] ?? t.origin;
        return o ? `Demasiado grande: se esperaba que ${u ?? "valor"} tuviera ${r}${t.maximum.toString()} ${o.unit ?? "elementos"}` : `Demasiado grande: se esperaba que ${u ?? "valor"} fuera ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin), u = a[t.origin] ?? t.origin;
        return o ? `Demasiado pequeño: se esperaba que ${u} tuviera ${r}${t.minimum.toString()} ${o.unit}` : `Demasiado pequeño: se esperaba que ${u} fuera ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Cadena inválida: debe comenzar con "${r.prefix}"` : r.format === "ends_with" ? `Cadena inválida: debe terminar en "${r.suffix}"` : r.format === "includes" ? `Cadena inválida: debe incluir "${r.includes}"` : r.format === "regex" ? `Cadena inválida: debe coincidir con el patrón ${r.pattern}` : `Inválido ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Número inválido: debe ser múltiplo de ${t.divisor}`;
      case "unrecognized_keys":
        return `Llave${t.keys.length > 1 ? "s" : ""} desconocida${t.keys.length > 1 ? "s" : ""}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Llave inválida en ${a[t.origin] ?? t.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido en ${a[t.origin] ?? t.origin}`;
      default:
        return "Entrada inválida";
    }
  };
};
function lf() {
  return { localeError: sf() };
}
var df = () => {
  let e = { string: { unit: "کاراکتر", verb: "داشته باشد" }, file: { unit: "بایت", verb: "داشته باشد" }, array: { unit: "آیتم", verb: "داشته باشد" }, set: { unit: "آیتم", verb: "داشته باشد" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "ورودی", email: "آدرس ایمیل", url: "URL", emoji: "ایموجی", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "تاریخ و زمان ایزو", date: "تاریخ ایزو", time: "زمان ایزو", duration: "مدت زمان ایزو", ipv4: "IPv4 آدرس", ipv6: "IPv6 آدرس", cidrv4: "IPv4 دامنه", cidrv6: "IPv6 دامنه", base64: "base64-encoded رشته", base64url: "base64url-encoded رشته", json_string: "JSON رشته", e164: "E.164 عدد", jwt: "JWT", template_literal: "ورودی" }, a = { nan: "NaN", number: "عدد", array: "آرایه" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `ورودی نامعتبر: می‌بایست instanceof ${t.expected} می‌بود، ${u} دریافت شد` : `ورودی نامعتبر: می‌بایست ${r} می‌بود، ${u} دریافت شد`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `ورودی نامعتبر: می‌بایست ${b(t.values[0])} می‌بود` : `گزینه نامعتبر: می‌بایست یکی از ${v(t.values, "|")} می‌بود`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `خیلی بزرگ: ${t.origin ?? "مقدار"} باید ${r}${t.maximum.toString()} ${o.unit ?? "عنصر"} باشد` : `خیلی بزرگ: ${t.origin ?? "مقدار"} باید ${r}${t.maximum.toString()} باشد`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `خیلی کوچک: ${t.origin} باید ${r}${t.minimum.toString()} ${o.unit} باشد` : `خیلی کوچک: ${t.origin} باید ${r}${t.minimum.toString()} باشد`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `رشته نامعتبر: باید با "${r.prefix}" شروع شود` : r.format === "ends_with" ? `رشته نامعتبر: باید با "${r.suffix}" تمام شود` : r.format === "includes" ? `رشته نامعتبر: باید شامل "${r.includes}" باشد` : r.format === "regex" ? `رشته نامعتبر: باید با الگوی ${r.pattern} مطابقت داشته باشد` : `${n[r.format] ?? t.format} نامعتبر`;
      }
      case "not_multiple_of":
        return `عدد نامعتبر: باید مضرب ${t.divisor} باشد`;
      case "unrecognized_keys":
        return `کلید${t.keys.length > 1 ? "های" : ""} ناشناس: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `کلید ناشناس در ${t.origin}`;
      case "invalid_union":
        return "ورودی نامعتبر";
      case "invalid_element":
        return `مقدار نامعتبر در ${t.origin}`;
      default:
        return "ورودی نامعتبر";
    }
  };
};
function cf() {
  return { localeError: df() };
}
var mf = () => {
  let e = { string: { unit: "merkkiä", subject: "merkkijonon" }, file: { unit: "tavua", subject: "tiedoston" }, array: { unit: "alkiota", subject: "listan" }, set: { unit: "alkiota", subject: "joukon" }, number: { unit: "", subject: "luvun" }, bigint: { unit: "", subject: "suuren kokonaisluvun" }, int: { unit: "", subject: "kokonaisluvun" }, date: { unit: "", subject: "päivämäärän" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "säännöllinen lauseke", email: "sähköpostiosoite", url: "URL-osoite", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO-aikaleima", date: "ISO-päivämäärä", time: "ISO-aika", duration: "ISO-kesto", ipv4: "IPv4-osoite", ipv6: "IPv6-osoite", cidrv4: "IPv4-alue", cidrv6: "IPv6-alue", base64: "base64-koodattu merkkijono", base64url: "base64url-koodattu merkkijono", json_string: "JSON-merkkijono", e164: "E.164-luku", jwt: "JWT", template_literal: "templaattimerkkijono" }, a = { nan: "NaN" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Virheellinen tyyppi: odotettiin instanceof ${t.expected}, oli ${u}` : `Virheellinen tyyppi: odotettiin ${r}, oli ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Virheellinen syöte: täytyy olla ${b(t.values[0])}` : `Virheellinen valinta: täytyy olla yksi seuraavista: ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Liian suuri: ${o.subject} täytyy olla ${r}${t.maximum.toString()} ${o.unit}`.trim() : `Liian suuri: arvon täytyy olla ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Liian pieni: ${o.subject} täytyy olla ${r}${t.minimum.toString()} ${o.unit}`.trim() : `Liian pieni: arvon täytyy olla ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Virheellinen syöte: täytyy alkaa "${r.prefix}"` : r.format === "ends_with" ? `Virheellinen syöte: täytyy loppua "${r.suffix}"` : r.format === "includes" ? `Virheellinen syöte: täytyy sisältää "${r.includes}"` : r.format === "regex" ? `Virheellinen syöte: täytyy vastata säännöllistä lauseketta ${r.pattern}` : `Virheellinen ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Virheellinen luku: täytyy olla luvun ${t.divisor} monikerta`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return "Virheellinen avain tietueessa";
      case "invalid_union":
        return "Virheellinen unioni";
      case "invalid_element":
        return "Virheellinen arvo joukossa";
      default:
        return "Virheellinen syöte";
    }
  };
};
function ff() {
  return { localeError: mf() };
}
var pf = () => {
  let e = { string: { unit: "caractères", verb: "avoir" }, file: { unit: "octets", verb: "avoir" }, array: { unit: "éléments", verb: "avoir" }, set: { unit: "éléments", verb: "avoir" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "entrée", email: "adresse e-mail", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "date et heure ISO", date: "date ISO", time: "heure ISO", duration: "durée ISO", ipv4: "adresse IPv4", ipv6: "adresse IPv6", cidrv4: "plage IPv4", cidrv6: "plage IPv6", base64: "chaîne encodée en base64", base64url: "chaîne encodée en base64url", json_string: "chaîne JSON", e164: "numéro E.164", jwt: "JWT", template_literal: "entrée" }, a = { nan: "NaN", number: "nombre", array: "tableau" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Entrée invalide : instanceof ${t.expected} attendu, ${u} reçu` : `Entrée invalide : ${r} attendu, ${u} reçu`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Entrée invalide : ${b(t.values[0])} attendu` : `Option invalide : une valeur parmi ${v(t.values, "|")} attendue`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Trop grand : ${t.origin ?? "valeur"} doit ${o.verb} ${r}${t.maximum.toString()} ${o.unit ?? "élément(s)"}` : `Trop grand : ${t.origin ?? "valeur"} doit être ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Trop petit : ${t.origin} doit ${o.verb} ${r}${t.minimum.toString()} ${o.unit}` : `Trop petit : ${t.origin} doit être ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Chaîne invalide : doit commencer par "${r.prefix}"` : r.format === "ends_with" ? `Chaîne invalide : doit se terminer par "${r.suffix}"` : r.format === "includes" ? `Chaîne invalide : doit inclure "${r.includes}"` : r.format === "regex" ? `Chaîne invalide : doit correspondre au modèle ${r.pattern}` : `${n[r.format] ?? t.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${t.divisor}`;
      case "unrecognized_keys":
        return `Clé${t.keys.length > 1 ? "s" : ""} non reconnue${t.keys.length > 1 ? "s" : ""} : ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${t.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${t.origin}`;
      default:
        return "Entrée invalide";
    }
  };
};
function vf() {
  return { localeError: pf() };
}
var gf = () => {
  let e = { string: { unit: "caractères", verb: "avoir" }, file: { unit: "octets", verb: "avoir" }, array: { unit: "éléments", verb: "avoir" }, set: { unit: "éléments", verb: "avoir" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "entrée", email: "adresse courriel", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "date-heure ISO", date: "date ISO", time: "heure ISO", duration: "durée ISO", ipv4: "adresse IPv4", ipv6: "adresse IPv6", cidrv4: "plage IPv4", cidrv6: "plage IPv6", base64: "chaîne encodée en base64", base64url: "chaîne encodée en base64url", json_string: "chaîne JSON", e164: "numéro E.164", jwt: "JWT", template_literal: "entrée" }, a = { nan: "NaN" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Entrée invalide : attendu instanceof ${t.expected}, reçu ${u}` : `Entrée invalide : attendu ${r}, reçu ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Entrée invalide : attendu ${b(t.values[0])}` : `Option invalide : attendu l'une des valeurs suivantes ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "≤" : "<", o = i(t.origin);
        return o ? `Trop grand : attendu que ${t.origin ?? "la valeur"} ait ${r}${t.maximum.toString()} ${o.unit}` : `Trop grand : attendu que ${t.origin ?? "la valeur"} soit ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? "≥" : ">", o = i(t.origin);
        return o ? `Trop petit : attendu que ${t.origin} ait ${r}${t.minimum.toString()} ${o.unit}` : `Trop petit : attendu que ${t.origin} soit ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Chaîne invalide : doit commencer par "${r.prefix}"` : r.format === "ends_with" ? `Chaîne invalide : doit se terminer par "${r.suffix}"` : r.format === "includes" ? `Chaîne invalide : doit inclure "${r.includes}"` : r.format === "regex" ? `Chaîne invalide : doit correspondre au motif ${r.pattern}` : `${n[r.format] ?? t.format} invalide`;
      }
      case "not_multiple_of":
        return `Nombre invalide : doit être un multiple de ${t.divisor}`;
      case "unrecognized_keys":
        return `Clé${t.keys.length > 1 ? "s" : ""} non reconnue${t.keys.length > 1 ? "s" : ""} : ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Clé invalide dans ${t.origin}`;
      case "invalid_union":
        return "Entrée invalide";
      case "invalid_element":
        return `Valeur invalide dans ${t.origin}`;
      default:
        return "Entrée invalide";
    }
  };
};
function hf() {
  return { localeError: gf() };
}
var $f = () => {
  let e = { string: { label: "מחרוזת", gender: "f" }, number: { label: "מספר", gender: "m" }, boolean: { label: "ערך בוליאני", gender: "m" }, bigint: { label: "BigInt", gender: "m" }, date: { label: "תאריך", gender: "m" }, array: { label: "מערך", gender: "m" }, object: { label: "אובייקט", gender: "m" }, null: { label: "ערך ריק (null)", gender: "m" }, undefined: { label: "ערך לא מוגדר (undefined)", gender: "m" }, symbol: { label: "סימבול (Symbol)", gender: "m" }, function: { label: "פונקציה", gender: "f" }, map: { label: "מפה (Map)", gender: "f" }, set: { label: "קבוצה (Set)", gender: "f" }, file: { label: "קובץ", gender: "m" }, promise: { label: "Promise", gender: "m" }, NaN: { label: "NaN", gender: "m" }, unknown: { label: "ערך לא ידוע", gender: "m" }, value: { label: "ערך", gender: "m" } }, i = { string: { unit: "תווים", shortLabel: "קצר", longLabel: "ארוך" }, file: { unit: "בייטים", shortLabel: "קטן", longLabel: "גדול" }, array: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" }, set: { unit: "פריטים", shortLabel: "קטן", longLabel: "גדול" }, number: { unit: "", shortLabel: "קטן", longLabel: "גדול" } }, n = (s) => s ? e[s] : void 0, a = (s) => {
    let m = n(s);
    return m ? m.label : s ?? e.unknown.label;
  }, t = (s) => `ה${a(s)}`, r = (s) => {
    var m;
    return (((m = n(s)) == null ? void 0 : m.gender) ?? "m") === "f" ? "צריכה להיות" : "צריך להיות";
  }, o = (s) => s ? i[s] ?? null : null, u = { regex: { label: "קלט", gender: "m" }, email: { label: "כתובת אימייל", gender: "f" }, url: { label: "כתובת רשת", gender: "f" }, emoji: { label: "אימוג'י", gender: "m" }, uuid: { label: "UUID", gender: "m" }, nanoid: { label: "nanoid", gender: "m" }, guid: { label: "GUID", gender: "m" }, cuid: { label: "cuid", gender: "m" }, cuid2: { label: "cuid2", gender: "m" }, ulid: { label: "ULID", gender: "m" }, xid: { label: "XID", gender: "m" }, ksuid: { label: "KSUID", gender: "m" }, datetime: { label: "תאריך וזמן ISO", gender: "m" }, date: { label: "תאריך ISO", gender: "m" }, time: { label: "זמן ISO", gender: "m" }, duration: { label: "משך זמן ISO", gender: "m" }, ipv4: { label: "כתובת IPv4", gender: "f" }, ipv6: { label: "כתובת IPv6", gender: "f" }, cidrv4: { label: "טווח IPv4", gender: "m" }, cidrv6: { label: "טווח IPv6", gender: "m" }, base64: { label: "מחרוזת בבסיס 64", gender: "f" }, base64url: { label: "מחרוזת בבסיס 64 לכתובות רשת", gender: "f" }, json_string: { label: "מחרוזת JSON", gender: "f" }, e164: { label: "מספר E.164", gender: "m" }, jwt: { label: "JWT", gender: "m" }, ends_with: { label: "קלט", gender: "m" }, includes: { label: "קלט", gender: "m" }, lowercase: { label: "קלט", gender: "m" }, starts_with: { label: "קלט", gender: "m" }, uppercase: { label: "קלט", gender: "m" } }, d = { nan: "NaN" };
  return (s) => {
    var m;
    switch (s.code) {
      case "invalid_type": {
        let c = s.expected, p = d[c ?? ""] ?? a(c), $ = _(s.input), y = d[$] ?? ((m = e[$]) == null ? void 0 : m.label) ?? $;
        return /^[A-Z]/.test(s.expected) ? `קלט לא תקין: צריך להיות instanceof ${s.expected}, התקבל ${y}` : `קלט לא תקין: צריך להיות ${p}, התקבל ${y}`;
      }
      case "invalid_value": {
        if (s.values.length === 1) return `ערך לא תקין: הערך חייב להיות ${b(s.values[0])}`;
        let c = s.values.map(($) => b($));
        if (s.values.length === 2) return `ערך לא תקין: האפשרויות המתאימות הן ${c[0]} או ${c[1]}`;
        let p = c[c.length - 1];
        return `ערך לא תקין: האפשרויות המתאימות הן ${c.slice(0, -1).join(", ")} או ${p}`;
      }
      case "too_big": {
        let c = o(s.origin), p = t(s.origin ?? "value");
        if (s.origin === "string") return `${(c == null ? void 0 : c.longLabel) ?? "ארוך"} מדי: ${p} צריכה להכיל ${s.maximum.toString()} ${(c == null ? void 0 : c.unit) ?? ""} ${s.inclusive ? "או פחות" : "לכל היותר"}`.trim();
        if (s.origin === "number") {
          let x = s.inclusive ? `קטן או שווה ל-${s.maximum}` : `קטן מ-${s.maximum}`;
          return `גדול מדי: ${p} צריך להיות ${x}`;
        }
        if (s.origin === "array" || s.origin === "set") {
          let x = s.origin === "set" ? "צריכה" : "צריך", z = s.inclusive ? `${s.maximum} ${(c == null ? void 0 : c.unit) ?? ""} או פחות` : `פחות מ-${s.maximum} ${(c == null ? void 0 : c.unit) ?? ""}`;
          return `גדול מדי: ${p} ${x} להכיל ${z}`.trim();
        }
        let $ = s.inclusive ? "<=" : "<", y = r(s.origin ?? "value");
        return c != null && c.unit ? `${c.longLabel} מדי: ${p} ${y} ${$}${s.maximum.toString()} ${c.unit}` : `${(c == null ? void 0 : c.longLabel) ?? "גדול"} מדי: ${p} ${y} ${$}${s.maximum.toString()}`;
      }
      case "too_small": {
        let c = o(s.origin), p = t(s.origin ?? "value");
        if (s.origin === "string") return `${(c == null ? void 0 : c.shortLabel) ?? "קצר"} מדי: ${p} צריכה להכיל ${s.minimum.toString()} ${(c == null ? void 0 : c.unit) ?? ""} ${s.inclusive ? "או יותר" : "לפחות"}`.trim();
        if (s.origin === "number") {
          let x = s.inclusive ? `גדול או שווה ל-${s.minimum}` : `גדול מ-${s.minimum}`;
          return `קטן מדי: ${p} צריך להיות ${x}`;
        }
        if (s.origin === "array" || s.origin === "set") {
          let x = s.origin === "set" ? "צריכה" : "צריך";
          if (s.minimum === 1 && s.inclusive) {
            let P = (s.origin === "set", "לפחות פריט אחד");
            return `קטן מדי: ${p} ${x} להכיל ${P}`;
          }
          let z = s.inclusive ? `${s.minimum} ${(c == null ? void 0 : c.unit) ?? ""} או יותר` : `יותר מ-${s.minimum} ${(c == null ? void 0 : c.unit) ?? ""}`;
          return `קטן מדי: ${p} ${x} להכיל ${z}`.trim();
        }
        let $ = s.inclusive ? ">=" : ">", y = r(s.origin ?? "value");
        return c != null && c.unit ? `${c.shortLabel} מדי: ${p} ${y} ${$}${s.minimum.toString()} ${c.unit}` : `${(c == null ? void 0 : c.shortLabel) ?? "קטן"} מדי: ${p} ${y} ${$}${s.minimum.toString()}`;
      }
      case "invalid_format": {
        let c = s;
        if (c.format === "starts_with") return `המחרוזת חייבת להתחיל ב "${c.prefix}"`;
        if (c.format === "ends_with") return `המחרוזת חייבת להסתיים ב "${c.suffix}"`;
        if (c.format === "includes") return `המחרוזת חייבת לכלול "${c.includes}"`;
        if (c.format === "regex") return `המחרוזת חייבת להתאים לתבנית ${c.pattern}`;
        let p = u[c.format], $ = (p == null ? void 0 : p.label) ?? c.format, y = ((p == null ? void 0 : p.gender) ?? "m") === "f" ? "תקינה" : "תקין";
        return `${$} לא ${y}`;
      }
      case "not_multiple_of":
        return `מספר לא תקין: חייב להיות מכפלה של ${s.divisor}`;
      case "unrecognized_keys":
        return `מפתח${s.keys.length > 1 ? "ות" : ""} לא מזוה${s.keys.length > 1 ? "ים" : "ה"}: ${v(s.keys, ", ")}`;
      case "invalid_key":
        return "שדה לא תקין באובייקט";
      case "invalid_union":
        return "קלט לא תקין";
      case "invalid_element":
        return `ערך לא תקין ב${t(s.origin ?? "array")}`;
      default:
        return "קלט לא תקין";
    }
  };
};
function bf() {
  return { localeError: $f() };
}
var yf = () => {
  let e = { string: { unit: "karakter", verb: "legyen" }, file: { unit: "byte", verb: "legyen" }, array: { unit: "elem", verb: "legyen" }, set: { unit: "elem", verb: "legyen" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "bemenet", email: "email cím", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO időbélyeg", date: "ISO dátum", time: "ISO idő", duration: "ISO időintervallum", ipv4: "IPv4 cím", ipv6: "IPv6 cím", cidrv4: "IPv4 tartomány", cidrv6: "IPv6 tartomány", base64: "base64-kódolt string", base64url: "base64url-kódolt string", json_string: "JSON string", e164: "E.164 szám", jwt: "JWT", template_literal: "bemenet" }, a = { nan: "NaN", number: "szám", array: "tömb" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Érvénytelen bemenet: a várt érték instanceof ${t.expected}, a kapott érték ${u}` : `Érvénytelen bemenet: a várt érték ${r}, a kapott érték ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Érvénytelen bemenet: a várt érték ${b(t.values[0])}` : `Érvénytelen opció: valamelyik érték várt ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Túl nagy: ${t.origin ?? "érték"} mérete túl nagy ${r}${t.maximum.toString()} ${o.unit ?? "elem"}` : `Túl nagy: a bemeneti érték ${t.origin ?? "érték"} túl nagy: ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Túl kicsi: a bemeneti érték ${t.origin} mérete túl kicsi ${r}${t.minimum.toString()} ${o.unit}` : `Túl kicsi: a bemeneti érték ${t.origin} túl kicsi ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Érvénytelen string: "${r.prefix}" értékkel kell kezdődnie` : r.format === "ends_with" ? `Érvénytelen string: "${r.suffix}" értékkel kell végződnie` : r.format === "includes" ? `Érvénytelen string: "${r.includes}" értéket kell tartalmaznia` : r.format === "regex" ? `Érvénytelen string: ${r.pattern} mintának kell megfelelnie` : `Érvénytelen ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Érvénytelen szám: ${t.divisor} többszörösének kell lennie`;
      case "unrecognized_keys":
        return `Ismeretlen kulcs${t.keys.length > 1 ? "s" : ""}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Érvénytelen kulcs ${t.origin}`;
      case "invalid_union":
        return "Érvénytelen bemenet";
      case "invalid_element":
        return `Érvénytelen érték: ${t.origin}`;
      default:
        return "Érvénytelen bemenet";
    }
  };
};
function _f() {
  return { localeError: yf() };
}
function na(e, i, n) {
  return Math.abs(e) === 1 ? i : n;
}
function Ne(e) {
  if (!e) return "";
  let i = ["ա", "ե", "ը", "ի", "ո", "ու", "օ"], n = e[e.length - 1];
  return e + (i.includes(n) ? "ն" : "ը");
}
var kf = () => {
  let e = { string: { unit: { one: "նշան", many: "նշաններ" }, verb: "ունենալ" }, file: { unit: { one: "բայթ", many: "բայթեր" }, verb: "ունենալ" }, array: { unit: { one: "տարր", many: "տարրեր" }, verb: "ունենալ" }, set: { unit: { one: "տարր", many: "տարրեր" }, verb: "ունենալ" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "մուտք", email: "էլ. հասցե", url: "URL", emoji: "էմոջի", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO ամսաթիվ և ժամ", date: "ISO ամսաթիվ", time: "ISO ժամ", duration: "ISO տևողություն", ipv4: "IPv4 հասցե", ipv6: "IPv6 հասցե", cidrv4: "IPv4 միջակայք", cidrv6: "IPv6 միջակայք", base64: "base64 ձևաչափով տող", base64url: "base64url ձևաչափով տող", json_string: "JSON տող", e164: "E.164 համար", jwt: "JWT", template_literal: "մուտք" }, a = { nan: "NaN", number: "թիվ", array: "զանգված" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Սխալ մուտքագրում․ սպասվում էր instanceof ${t.expected}, ստացվել է ${u}` : `Սխալ մուտքագրում․ սպասվում էր ${r}, ստացվել է ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Սխալ մուտքագրում․ սպասվում էր ${b(t.values[1])}` : `Սխալ տարբերակ․ սպասվում էր հետևյալներից մեկը՝ ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        if (o) {
          let u = Number(t.maximum), d = na(u, o.unit.one, o.unit.many);
          return `Չափազանց մեծ արժեք․ սպասվում է, որ ${Ne(t.origin ?? "արժեք")} կունենա ${r}${t.maximum.toString()} ${d}`;
        }
        return `Չափազանց մեծ արժեք․ սպասվում է, որ ${Ne(t.origin ?? "արժեք")} լինի ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        if (o) {
          let u = Number(t.minimum), d = na(u, o.unit.one, o.unit.many);
          return `Չափազանց փոքր արժեք․ սպասվում է, որ ${Ne(t.origin)} կունենա ${r}${t.minimum.toString()} ${d}`;
        }
        return `Չափազանց փոքր արժեք․ սպասվում է, որ ${Ne(t.origin)} լինի ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Սխալ տող․ պետք է սկսվի "${r.prefix}"-ով` : r.format === "ends_with" ? `Սխալ տող․ պետք է ավարտվի "${r.suffix}"-ով` : r.format === "includes" ? `Սխալ տող․ պետք է պարունակի "${r.includes}"` : r.format === "regex" ? `Սխալ տող․ պետք է համապատասխանի ${r.pattern} ձևաչափին` : `Սխալ ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Սխալ թիվ․ պետք է բազմապատիկ լինի ${t.divisor}-ի`;
      case "unrecognized_keys":
        return `Չճանաչված բանալի${t.keys.length > 1 ? "ներ" : ""}. ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Սխալ բանալի ${Ne(t.origin)}-ում`;
      case "invalid_union":
        return "Սխալ մուտքագրում";
      case "invalid_element":
        return `Սխալ արժեք ${Ne(t.origin)}-ում`;
      default:
        return "Սխալ մուտքագրում";
    }
  };
};
function If() {
  return { localeError: kf() };
}
var xf = () => {
  let e = { string: { unit: "karakter", verb: "memiliki" }, file: { unit: "byte", verb: "memiliki" }, array: { unit: "item", verb: "memiliki" }, set: { unit: "item", verb: "memiliki" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "input", email: "alamat email", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "tanggal dan waktu format ISO", date: "tanggal format ISO", time: "jam format ISO", duration: "durasi format ISO", ipv4: "alamat IPv4", ipv6: "alamat IPv6", cidrv4: "rentang alamat IPv4", cidrv6: "rentang alamat IPv6", base64: "string dengan enkode base64", base64url: "string dengan enkode base64url", json_string: "string JSON", e164: "angka E.164", jwt: "JWT", template_literal: "input" }, a = { nan: "NaN" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Input tidak valid: diharapkan instanceof ${t.expected}, diterima ${u}` : `Input tidak valid: diharapkan ${r}, diterima ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Input tidak valid: diharapkan ${b(t.values[0])}` : `Pilihan tidak valid: diharapkan salah satu dari ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Terlalu besar: diharapkan ${t.origin ?? "value"} memiliki ${r}${t.maximum.toString()} ${o.unit ?? "elemen"}` : `Terlalu besar: diharapkan ${t.origin ?? "value"} menjadi ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Terlalu kecil: diharapkan ${t.origin} memiliki ${r}${t.minimum.toString()} ${o.unit}` : `Terlalu kecil: diharapkan ${t.origin} menjadi ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `String tidak valid: harus dimulai dengan "${r.prefix}"` : r.format === "ends_with" ? `String tidak valid: harus berakhir dengan "${r.suffix}"` : r.format === "includes" ? `String tidak valid: harus menyertakan "${r.includes}"` : r.format === "regex" ? `String tidak valid: harus sesuai pola ${r.pattern}` : `${n[r.format] ?? t.format} tidak valid`;
      }
      case "not_multiple_of":
        return `Angka tidak valid: harus kelipatan dari ${t.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali ${t.keys.length > 1 ? "s" : ""}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak valid di ${t.origin}`;
      case "invalid_union":
        return "Input tidak valid";
      case "invalid_element":
        return `Nilai tidak valid di ${t.origin}`;
      default:
        return "Input tidak valid";
    }
  };
};
function wf() {
  return { localeError: xf() };
}
var Sf = () => {
  let e = { string: { unit: "stafi", verb: "að hafa" }, file: { unit: "bæti", verb: "að hafa" }, array: { unit: "hluti", verb: "að hafa" }, set: { unit: "hluti", verb: "að hafa" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "gildi", email: "netfang", url: "vefslóð", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO dagsetning og tími", date: "ISO dagsetning", time: "ISO tími", duration: "ISO tímalengd", ipv4: "IPv4 address", ipv6: "IPv6 address", cidrv4: "IPv4 range", cidrv6: "IPv6 range", base64: "base64-encoded strengur", base64url: "base64url-encoded strengur", json_string: "JSON strengur", e164: "E.164 tölugildi", jwt: "JWT", template_literal: "gildi" }, a = { nan: "NaN", number: "númer", array: "fylki" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Rangt gildi: Þú slóst inn ${u} þar sem á að vera instanceof ${t.expected}` : `Rangt gildi: Þú slóst inn ${u} þar sem á að vera ${r}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Rangt gildi: gert ráð fyrir ${b(t.values[0])}` : `Ógilt val: má vera eitt af eftirfarandi ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Of stórt: gert er ráð fyrir að ${t.origin ?? "gildi"} hafi ${r}${t.maximum.toString()} ${o.unit ?? "hluti"}` : `Of stórt: gert er ráð fyrir að ${t.origin ?? "gildi"} sé ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Of lítið: gert er ráð fyrir að ${t.origin} hafi ${r}${t.minimum.toString()} ${o.unit}` : `Of lítið: gert er ráð fyrir að ${t.origin} sé ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Ógildur strengur: verður að byrja á "${r.prefix}"` : r.format === "ends_with" ? `Ógildur strengur: verður að enda á "${r.suffix}"` : r.format === "includes" ? `Ógildur strengur: verður að innihalda "${r.includes}"` : r.format === "regex" ? `Ógildur strengur: verður að fylgja mynstri ${r.pattern}` : `Rangt ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Röng tala: verður að vera margfeldi af ${t.divisor}`;
      case "unrecognized_keys":
        return `Óþekkt ${t.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Rangur lykill í ${t.origin}`;
      case "invalid_union":
        return "Rangt gildi";
      case "invalid_element":
        return `Rangt gildi í ${t.origin}`;
      default:
        return "Rangt gildi";
    }
  };
};
function zf() {
  return { localeError: Sf() };
}
var Uf = () => {
  let e = { string: { unit: "caratteri", verb: "avere" }, file: { unit: "byte", verb: "avere" }, array: { unit: "elementi", verb: "avere" }, set: { unit: "elementi", verb: "avere" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "input", email: "indirizzo email", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "data e ora ISO", date: "data ISO", time: "ora ISO", duration: "durata ISO", ipv4: "indirizzo IPv4", ipv6: "indirizzo IPv6", cidrv4: "intervallo IPv4", cidrv6: "intervallo IPv6", base64: "stringa codificata in base64", base64url: "URL codificata in base64", json_string: "stringa JSON", e164: "numero E.164", jwt: "JWT", template_literal: "input" }, a = { nan: "NaN", number: "numero", array: "vettore" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Input non valido: atteso instanceof ${t.expected}, ricevuto ${u}` : `Input non valido: atteso ${r}, ricevuto ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Input non valido: atteso ${b(t.values[0])}` : `Opzione non valida: atteso uno tra ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Troppo grande: ${t.origin ?? "valore"} deve avere ${r}${t.maximum.toString()} ${o.unit ?? "elementi"}` : `Troppo grande: ${t.origin ?? "valore"} deve essere ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Troppo piccolo: ${t.origin} deve avere ${r}${t.minimum.toString()} ${o.unit}` : `Troppo piccolo: ${t.origin} deve essere ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Stringa non valida: deve iniziare con "${r.prefix}"` : r.format === "ends_with" ? `Stringa non valida: deve terminare con "${r.suffix}"` : r.format === "includes" ? `Stringa non valida: deve includere "${r.includes}"` : r.format === "regex" ? `Stringa non valida: deve corrispondere al pattern ${r.pattern}` : `Invalid ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Numero non valido: deve essere un multiplo di ${t.divisor}`;
      case "unrecognized_keys":
        return `Chiav${t.keys.length > 1 ? "i" : "e"} non riconosciut${t.keys.length > 1 ? "e" : "a"}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Chiave non valida in ${t.origin}`;
      case "invalid_union":
        return "Input non valido";
      case "invalid_element":
        return `Valore non valido in ${t.origin}`;
      default:
        return "Input non valido";
    }
  };
};
function Of() {
  return { localeError: Uf() };
}
var jf = () => {
  let e = { string: { unit: "文字", verb: "である" }, file: { unit: "バイト", verb: "である" }, array: { unit: "要素", verb: "である" }, set: { unit: "要素", verb: "である" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "入力値", email: "メールアドレス", url: "URL", emoji: "絵文字", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO日時", date: "ISO日付", time: "ISO時刻", duration: "ISO期間", ipv4: "IPv4アドレス", ipv6: "IPv6アドレス", cidrv4: "IPv4範囲", cidrv6: "IPv6範囲", base64: "base64エンコード文字列", base64url: "base64urlエンコード文字列", json_string: "JSON文字列", e164: "E.164番号", jwt: "JWT", template_literal: "入力値" }, a = { nan: "NaN", number: "数値", array: "配列" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `無効な入力: instanceof ${t.expected}が期待されましたが、${u}が入力されました` : `無効な入力: ${r}が期待されましたが、${u}が入力されました`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `無効な入力: ${b(t.values[0])}が期待されました` : `無効な選択: ${v(t.values, "、")}のいずれかである必要があります`;
      case "too_big": {
        let r = t.inclusive ? "以下である" : "より小さい", o = i(t.origin);
        return o ? `大きすぎる値: ${t.origin ?? "値"}は${t.maximum.toString()}${o.unit ?? "要素"}${r}必要があります` : `大きすぎる値: ${t.origin ?? "値"}は${t.maximum.toString()}${r}必要があります`;
      }
      case "too_small": {
        let r = t.inclusive ? "以上である" : "より大きい", o = i(t.origin);
        return o ? `小さすぎる値: ${t.origin}は${t.minimum.toString()}${o.unit}${r}必要があります` : `小さすぎる値: ${t.origin}は${t.minimum.toString()}${r}必要があります`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `無効な文字列: "${r.prefix}"で始まる必要があります` : r.format === "ends_with" ? `無効な文字列: "${r.suffix}"で終わる必要があります` : r.format === "includes" ? `無効な文字列: "${r.includes}"を含む必要があります` : r.format === "regex" ? `無効な文字列: パターン${r.pattern}に一致する必要があります` : `無効な${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `無効な数値: ${t.divisor}の倍数である必要があります`;
      case "unrecognized_keys":
        return `認識されていないキー${t.keys.length > 1 ? "群" : ""}: ${v(t.keys, "、")}`;
      case "invalid_key":
        return `${t.origin}内の無効なキー`;
      case "invalid_union":
        return "無効な入力";
      case "invalid_element":
        return `${t.origin}内の無効な値`;
      default:
        return "無効な入力";
    }
  };
};
function Zf() {
  return { localeError: jf() };
}
var Nf = () => {
  let e = { string: { unit: "სიმბოლო", verb: "უნდა შეიცავდეს" }, file: { unit: "ბაიტი", verb: "უნდა შეიცავდეს" }, array: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" }, set: { unit: "ელემენტი", verb: "უნდა შეიცავდეს" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "შეყვანა", email: "ელ-ფოსტის მისამართი", url: "URL", emoji: "ემოჯი", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "თარიღი-დრო", date: "თარიღი", time: "დრო", duration: "ხანგრძლივობა", ipv4: "IPv4 მისამართი", ipv6: "IPv6 მისამართი", cidrv4: "IPv4 დიაპაზონი", cidrv6: "IPv6 დიაპაზონი", base64: "base64-კოდირებული სტრინგი", base64url: "base64url-კოდირებული სტრინგი", json_string: "JSON სტრინგი", e164: "E.164 ნომერი", jwt: "JWT", template_literal: "შეყვანა" }, a = { nan: "NaN", number: "რიცხვი", string: "სტრინგი", boolean: "ბულეანი", function: "ფუნქცია", array: "მასივი" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `არასწორი შეყვანა: მოსალოდნელი instanceof ${t.expected}, მიღებული ${u}` : `არასწორი შეყვანა: მოსალოდნელი ${r}, მიღებული ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `არასწორი შეყვანა: მოსალოდნელი ${b(t.values[0])}` : `არასწორი ვარიანტი: მოსალოდნელია ერთ-ერთი ${v(t.values, "|")}-დან`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `ზედმეტად დიდი: მოსალოდნელი ${t.origin ?? "მნიშვნელობა"} ${o.verb} ${r}${t.maximum.toString()} ${o.unit}` : `ზედმეტად დიდი: მოსალოდნელი ${t.origin ?? "მნიშვნელობა"} იყოს ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `ზედმეტად პატარა: მოსალოდნელი ${t.origin} ${o.verb} ${r}${t.minimum.toString()} ${o.unit}` : `ზედმეტად პატარა: მოსალოდნელი ${t.origin} იყოს ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `არასწორი სტრინგი: უნდა იწყებოდეს "${r.prefix}"-ით` : r.format === "ends_with" ? `არასწორი სტრინგი: უნდა მთავრდებოდეს "${r.suffix}"-ით` : r.format === "includes" ? `არასწორი სტრინგი: უნდა შეიცავდეს "${r.includes}"-ს` : r.format === "regex" ? `არასწორი სტრინგი: უნდა შეესაბამებოდეს შაბლონს ${r.pattern}` : `არასწორი ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `არასწორი რიცხვი: უნდა იყოს ${t.divisor}-ის ჯერადი`;
      case "unrecognized_keys":
        return `უცნობი გასაღებ${t.keys.length > 1 ? "ები" : "ი"}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `არასწორი გასაღები ${t.origin}-ში`;
      case "invalid_union":
        return "არასწორი შეყვანა";
      case "invalid_element":
        return `არასწორი მნიშვნელობა ${t.origin}-ში`;
      default:
        return "არასწორი შეყვანა";
    }
  };
};
function Pf() {
  return { localeError: Nf() };
}
var Df = () => {
  let e = { string: { unit: "តួអក្សរ", verb: "គួរមាន" }, file: { unit: "បៃ", verb: "គួរមាន" }, array: { unit: "ធាតុ", verb: "គួរមាន" }, set: { unit: "ធាតុ", verb: "គួរមាន" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "ទិន្នន័យបញ្ចូល", email: "អាសយដ្ឋានអ៊ីមែល", url: "URL", emoji: "សញ្ញាអារម្មណ៍", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "កាលបរិច្ឆេទ និងម៉ោង ISO", date: "កាលបរិច្ឆេទ ISO", time: "ម៉ោង ISO", duration: "រយៈពេល ISO", ipv4: "អាសយដ្ឋាន IPv4", ipv6: "អាសយដ្ឋាន IPv6", cidrv4: "ដែនអាសយដ្ឋាន IPv4", cidrv6: "ដែនអាសយដ្ឋាន IPv6", base64: "ខ្សែអក្សរអ៊ិកូដ base64", base64url: "ខ្សែអក្សរអ៊ិកូដ base64url", json_string: "ខ្សែអក្សរ JSON", e164: "លេខ E.164", jwt: "JWT", template_literal: "ទិន្នន័យបញ្ចូល" }, a = { nan: "NaN", number: "លេខ", array: "អារេ (Array)", null: "គ្មានតម្លៃ (null)" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ instanceof ${t.expected} ប៉ុន្តែទទួលបាន ${u}` : `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${r} ប៉ុន្តែទទួលបាន ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `ទិន្នន័យបញ្ចូលមិនត្រឹមត្រូវ៖ ត្រូវការ ${b(t.values[0])}` : `ជម្រើសមិនត្រឹមត្រូវ៖ ត្រូវជាមួយក្នុងចំណោម ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `ធំពេក៖ ត្រូវការ ${t.origin ?? "តម្លៃ"} ${r} ${t.maximum.toString()} ${o.unit ?? "ធាតុ"}` : `ធំពេក៖ ត្រូវការ ${t.origin ?? "តម្លៃ"} ${r} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `តូចពេក៖ ត្រូវការ ${t.origin} ${r} ${t.minimum.toString()} ${o.unit}` : `តូចពេក៖ ត្រូវការ ${t.origin} ${r} ${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវចាប់ផ្តើមដោយ "${r.prefix}"` : r.format === "ends_with" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវបញ្ចប់ដោយ "${r.suffix}"` : r.format === "includes" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវមាន "${r.includes}"` : r.format === "regex" ? `ខ្សែអក្សរមិនត្រឹមត្រូវ៖ ត្រូវតែផ្គូផ្គងនឹងទម្រង់ដែលបានកំណត់ ${r.pattern}` : `មិនត្រឹមត្រូវ៖ ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `លេខមិនត្រឹមត្រូវ៖ ត្រូវតែជាពហុគុណនៃ ${t.divisor}`;
      case "unrecognized_keys":
        return `រកឃើញសោមិនស្គាល់៖ ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `សោមិនត្រឹមត្រូវនៅក្នុង ${t.origin}`;
      case "invalid_union":
        return "ទិន្នន័យមិនត្រឹមត្រូវ";
      case "invalid_element":
        return `ទិន្នន័យមិនត្រឹមត្រូវនៅក្នុង ${t.origin}`;
      default:
        return "ទិន្នន័យមិនត្រឹមត្រូវ";
    }
  };
};
function Gu() {
  return { localeError: Df() };
}
function Ef() {
  return Gu();
}
var Tf = () => {
  let e = { string: { unit: "문자", verb: "to have" }, file: { unit: "바이트", verb: "to have" }, array: { unit: "개", verb: "to have" }, set: { unit: "개", verb: "to have" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "입력", email: "이메일 주소", url: "URL", emoji: "이모지", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO 날짜시간", date: "ISO 날짜", time: "ISO 시간", duration: "ISO 기간", ipv4: "IPv4 주소", ipv6: "IPv6 주소", cidrv4: "IPv4 범위", cidrv6: "IPv6 범위", base64: "base64 인코딩 문자열", base64url: "base64url 인코딩 문자열", json_string: "JSON 문자열", e164: "E.164 번호", jwt: "JWT", template_literal: "입력" }, a = { nan: "NaN" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `잘못된 입력: 예상 타입은 instanceof ${t.expected}, 받은 타입은 ${u}입니다` : `잘못된 입력: 예상 타입은 ${r}, 받은 타입은 ${u}입니다`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `잘못된 입력: 값은 ${b(t.values[0])} 이어야 합니다` : `잘못된 옵션: ${v(t.values, "또는 ")} 중 하나여야 합니다`;
      case "too_big": {
        let r = t.inclusive ? "이하" : "미만", o = r === "미만" ? "이어야 합니다" : "여야 합니다", u = i(t.origin), d = (u == null ? void 0 : u.unit) ?? "요소";
        return u ? `${t.origin ?? "값"}이 너무 큽니다: ${t.maximum.toString()}${d} ${r}${o}` : `${t.origin ?? "값"}이 너무 큽니다: ${t.maximum.toString()} ${r}${o}`;
      }
      case "too_small": {
        let r = t.inclusive ? "이상" : "초과", o = r === "이상" ? "이어야 합니다" : "여야 합니다", u = i(t.origin), d = (u == null ? void 0 : u.unit) ?? "요소";
        return u ? `${t.origin ?? "값"}이 너무 작습니다: ${t.minimum.toString()}${d} ${r}${o}` : `${t.origin ?? "값"}이 너무 작습니다: ${t.minimum.toString()} ${r}${o}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `잘못된 문자열: "${r.prefix}"(으)로 시작해야 합니다` : r.format === "ends_with" ? `잘못된 문자열: "${r.suffix}"(으)로 끝나야 합니다` : r.format === "includes" ? `잘못된 문자열: "${r.includes}"을(를) 포함해야 합니다` : r.format === "regex" ? `잘못된 문자열: 정규식 ${r.pattern} 패턴과 일치해야 합니다` : `잘못된 ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `잘못된 숫자: ${t.divisor}의 배수여야 합니다`;
      case "unrecognized_keys":
        return `인식할 수 없는 키: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `잘못된 키: ${t.origin}`;
      case "invalid_union":
        return "잘못된 입력";
      case "invalid_element":
        return `잘못된 값: ${t.origin}`;
      default:
        return "잘못된 입력";
    }
  };
};
function Af() {
  return { localeError: Tf() };
}
var Ve = (e) => e.charAt(0).toUpperCase() + e.slice(1);
function ra(e) {
  let i = Math.abs(e), n = i % 10, a = i % 100;
  return a >= 11 && a <= 19 || n === 0 ? "many" : n === 1 ? "one" : "few";
}
var Rf = () => {
  let e = { string: { unit: { one: "simbolis", few: "simboliai", many: "simbolių" }, verb: { smaller: { inclusive: "turi būti ne ilgesnė kaip", notInclusive: "turi būti trumpesnė kaip" }, bigger: { inclusive: "turi būti ne trumpesnė kaip", notInclusive: "turi būti ilgesnė kaip" } } }, file: { unit: { one: "baitas", few: "baitai", many: "baitų" }, verb: { smaller: { inclusive: "turi būti ne didesnis kaip", notInclusive: "turi būti mažesnis kaip" }, bigger: { inclusive: "turi būti ne mažesnis kaip", notInclusive: "turi būti didesnis kaip" } } }, array: { unit: { one: "elementą", few: "elementus", many: "elementų" }, verb: { smaller: { inclusive: "turi turėti ne daugiau kaip", notInclusive: "turi turėti mažiau kaip" }, bigger: { inclusive: "turi turėti ne mažiau kaip", notInclusive: "turi turėti daugiau kaip" } } }, set: { unit: { one: "elementą", few: "elementus", many: "elementų" }, verb: { smaller: { inclusive: "turi turėti ne daugiau kaip", notInclusive: "turi turėti mažiau kaip" }, bigger: { inclusive: "turi turėti ne mažiau kaip", notInclusive: "turi turėti daugiau kaip" } } } };
  function i(t, r, o, u) {
    let d = e[t] ?? null;
    return d === null ? d : { unit: d.unit[r], verb: d.verb[u][o ? "inclusive" : "notInclusive"] };
  }
  let n = { regex: "įvestis", email: "el. pašto adresas", url: "URL", emoji: "jaustukas", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO data ir laikas", date: "ISO data", time: "ISO laikas", duration: "ISO trukmė", ipv4: "IPv4 adresas", ipv6: "IPv6 adresas", cidrv4: "IPv4 tinklo prefiksas (CIDR)", cidrv6: "IPv6 tinklo prefiksas (CIDR)", base64: "base64 užkoduota eilutė", base64url: "base64url užkoduota eilutė", json_string: "JSON eilutė", e164: "E.164 numeris", jwt: "JWT", template_literal: "įvestis" }, a = { nan: "NaN", number: "skaičius", bigint: "sveikasis skaičius", string: "eilutė", boolean: "loginė reikšmė", undefined: "neapibrėžta reikšmė", function: "funkcija", symbol: "simbolis", array: "masyvas", object: "objektas", null: "nulinė reikšmė" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Gautas tipas ${u}, o tikėtasi - instanceof ${t.expected}` : `Gautas tipas ${u}, o tikėtasi - ${r}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Privalo būti ${b(t.values[0])}` : `Privalo būti vienas iš ${v(t.values, "|")} pasirinkimų`;
      case "too_big": {
        let r = a[t.origin] ?? t.origin, o = i(t.origin, ra(Number(t.maximum)), t.inclusive ?? !1, "smaller");
        if (o != null && o.verb) return `${Ve(r ?? t.origin ?? "reikšmė")} ${o.verb} ${t.maximum.toString()} ${o.unit ?? "elementų"}`;
        let u = t.inclusive ? "ne didesnis kaip" : "mažesnis kaip";
        return `${Ve(r ?? t.origin ?? "reikšmė")} turi būti ${u} ${t.maximum.toString()} ${o == null ? void 0 : o.unit}`;
      }
      case "too_small": {
        let r = a[t.origin] ?? t.origin, o = i(t.origin, ra(Number(t.minimum)), t.inclusive ?? !1, "bigger");
        if (o != null && o.verb) return `${Ve(r ?? t.origin ?? "reikšmė")} ${o.verb} ${t.minimum.toString()} ${o.unit ?? "elementų"}`;
        let u = t.inclusive ? "ne mažesnis kaip" : "didesnis kaip";
        return `${Ve(r ?? t.origin ?? "reikšmė")} turi būti ${u} ${t.minimum.toString()} ${o == null ? void 0 : o.unit}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Eilutė privalo prasidėti "${r.prefix}"` : r.format === "ends_with" ? `Eilutė privalo pasibaigti "${r.suffix}"` : r.format === "includes" ? `Eilutė privalo įtraukti "${r.includes}"` : r.format === "regex" ? `Eilutė privalo atitikti ${r.pattern}` : `Neteisingas ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Skaičius privalo būti ${t.divisor} kartotinis.`;
      case "unrecognized_keys":
        return `Neatpažint${t.keys.length > 1 ? "i" : "as"} rakt${t.keys.length > 1 ? "ai" : "as"}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return "Rastas klaidingas raktas";
      case "invalid_union":
        return "Klaidinga įvestis";
      case "invalid_element": {
        let r = a[t.origin] ?? t.origin;
        return `${Ve(r ?? t.origin ?? "reikšmė")} turi klaidingą įvestį`;
      }
      default:
        return "Klaidinga įvestis";
    }
  };
};
function Cf() {
  return { localeError: Rf() };
}
var Lf = () => {
  let e = { string: { unit: "знаци", verb: "да имаат" }, file: { unit: "бајти", verb: "да имаат" }, array: { unit: "ставки", verb: "да имаат" }, set: { unit: "ставки", verb: "да имаат" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "внес", email: "адреса на е-пошта", url: "URL", emoji: "емоџи", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO датум и време", date: "ISO датум", time: "ISO време", duration: "ISO времетраење", ipv4: "IPv4 адреса", ipv6: "IPv6 адреса", cidrv4: "IPv4 опсег", cidrv6: "IPv6 опсег", base64: "base64-енкодирана низа", base64url: "base64url-енкодирана низа", json_string: "JSON низа", e164: "E.164 број", jwt: "JWT", template_literal: "внес" }, a = { nan: "NaN", number: "број", array: "низа" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Грешен внес: се очекува instanceof ${t.expected}, примено ${u}` : `Грешен внес: се очекува ${r}, примено ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Invalid input: expected ${b(t.values[0])}` : `Грешана опција: се очекува една ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Премногу голем: се очекува ${t.origin ?? "вредноста"} да има ${r}${t.maximum.toString()} ${o.unit ?? "елементи"}` : `Премногу голем: се очекува ${t.origin ?? "вредноста"} да биде ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Премногу мал: се очекува ${t.origin} да има ${r}${t.minimum.toString()} ${o.unit}` : `Премногу мал: се очекува ${t.origin} да биде ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Неважечка низа: мора да започнува со "${r.prefix}"` : r.format === "ends_with" ? `Неважечка низа: мора да завршува со "${r.suffix}"` : r.format === "includes" ? `Неважечка низа: мора да вклучува "${r.includes}"` : r.format === "regex" ? `Неважечка низа: мора да одгоара на патернот ${r.pattern}` : `Invalid ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Грешен број: мора да биде делив со ${t.divisor}`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "Непрепознаени клучеви" : "Непрепознаен клуч"}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Грешен клуч во ${t.origin}`;
      case "invalid_union":
        return "Грешен внес";
      case "invalid_element":
        return `Грешна вредност во ${t.origin}`;
      default:
        return "Грешен внес";
    }
  };
};
function Jf() {
  return { localeError: Lf() };
}
var Mf = () => {
  let e = { string: { unit: "aksara", verb: "mempunyai" }, file: { unit: "bait", verb: "mempunyai" }, array: { unit: "elemen", verb: "mempunyai" }, set: { unit: "elemen", verb: "mempunyai" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "input", email: "alamat e-mel", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "tarikh masa ISO", date: "tarikh ISO", time: "masa ISO", duration: "tempoh ISO", ipv4: "alamat IPv4", ipv6: "alamat IPv6", cidrv4: "julat IPv4", cidrv6: "julat IPv6", base64: "string dikodkan base64", base64url: "string dikodkan base64url", json_string: "string JSON", e164: "nombor E.164", jwt: "JWT", template_literal: "input" }, a = { nan: "NaN", number: "nombor" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Input tidak sah: dijangka instanceof ${t.expected}, diterima ${u}` : `Input tidak sah: dijangka ${r}, diterima ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Input tidak sah: dijangka ${b(t.values[0])}` : `Pilihan tidak sah: dijangka salah satu daripada ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Terlalu besar: dijangka ${t.origin ?? "nilai"} ${o.verb} ${r}${t.maximum.toString()} ${o.unit ?? "elemen"}` : `Terlalu besar: dijangka ${t.origin ?? "nilai"} adalah ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Terlalu kecil: dijangka ${t.origin} ${o.verb} ${r}${t.minimum.toString()} ${o.unit}` : `Terlalu kecil: dijangka ${t.origin} adalah ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `String tidak sah: mesti bermula dengan "${r.prefix}"` : r.format === "ends_with" ? `String tidak sah: mesti berakhir dengan "${r.suffix}"` : r.format === "includes" ? `String tidak sah: mesti mengandungi "${r.includes}"` : r.format === "regex" ? `String tidak sah: mesti sepadan dengan corak ${r.pattern}` : `${n[r.format] ?? t.format} tidak sah`;
      }
      case "not_multiple_of":
        return `Nombor tidak sah: perlu gandaan ${t.divisor}`;
      case "unrecognized_keys":
        return `Kunci tidak dikenali: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Kunci tidak sah dalam ${t.origin}`;
      case "invalid_union":
        return "Input tidak sah";
      case "invalid_element":
        return `Nilai tidak sah dalam ${t.origin}`;
      default:
        return "Input tidak sah";
    }
  };
};
function Ff() {
  return { localeError: Mf() };
}
var qf = () => {
  let e = { string: { unit: "tekens", verb: "heeft" }, file: { unit: "bytes", verb: "heeft" }, array: { unit: "elementen", verb: "heeft" }, set: { unit: "elementen", verb: "heeft" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "invoer", email: "emailadres", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datum en tijd", date: "ISO datum", time: "ISO tijd", duration: "ISO duur", ipv4: "IPv4-adres", ipv6: "IPv6-adres", cidrv4: "IPv4-bereik", cidrv6: "IPv6-bereik", base64: "base64-gecodeerde tekst", base64url: "base64 URL-gecodeerde tekst", json_string: "JSON string", e164: "E.164-nummer", jwt: "JWT", template_literal: "invoer" }, a = { nan: "NaN", number: "getal" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Ongeldige invoer: verwacht instanceof ${t.expected}, ontving ${u}` : `Ongeldige invoer: verwacht ${r}, ontving ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Ongeldige invoer: verwacht ${b(t.values[0])}` : `Ongeldige optie: verwacht één van ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin), u = t.origin === "date" ? "laat" : t.origin === "string" ? "lang" : "groot";
        return o ? `Te ${u}: verwacht dat ${t.origin ?? "waarde"} ${r}${t.maximum.toString()} ${o.unit ?? "elementen"} ${o.verb}` : `Te ${u}: verwacht dat ${t.origin ?? "waarde"} ${r}${t.maximum.toString()} is`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin), u = t.origin === "date" ? "vroeg" : t.origin === "string" ? "kort" : "klein";
        return o ? `Te ${u}: verwacht dat ${t.origin} ${r}${t.minimum.toString()} ${o.unit} ${o.verb}` : `Te ${u}: verwacht dat ${t.origin} ${r}${t.minimum.toString()} is`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Ongeldige tekst: moet met "${r.prefix}" beginnen` : r.format === "ends_with" ? `Ongeldige tekst: moet op "${r.suffix}" eindigen` : r.format === "includes" ? `Ongeldige tekst: moet "${r.includes}" bevatten` : r.format === "regex" ? `Ongeldige tekst: moet overeenkomen met patroon ${r.pattern}` : `Ongeldig: ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Ongeldig getal: moet een veelvoud van ${t.divisor} zijn`;
      case "unrecognized_keys":
        return `Onbekende key${t.keys.length > 1 ? "s" : ""}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Ongeldige key in ${t.origin}`;
      case "invalid_union":
        return "Ongeldige invoer";
      case "invalid_element":
        return `Ongeldige waarde in ${t.origin}`;
      default:
        return "Ongeldige invoer";
    }
  };
};
function Wf() {
  return { localeError: qf() };
}
var Vf = () => {
  let e = { string: { unit: "tegn", verb: "å ha" }, file: { unit: "bytes", verb: "å ha" }, array: { unit: "elementer", verb: "å inneholde" }, set: { unit: "elementer", verb: "å inneholde" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "input", email: "e-postadresse", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO dato- og klokkeslett", date: "ISO-dato", time: "ISO-klokkeslett", duration: "ISO-varighet", ipv4: "IPv4-område", ipv6: "IPv6-område", cidrv4: "IPv4-spekter", cidrv6: "IPv6-spekter", base64: "base64-enkodet streng", base64url: "base64url-enkodet streng", json_string: "JSON-streng", e164: "E.164-nummer", jwt: "JWT", template_literal: "input" }, a = { nan: "NaN", number: "tall", array: "liste" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Ugyldig input: forventet instanceof ${t.expected}, fikk ${u}` : `Ugyldig input: forventet ${r}, fikk ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Ugyldig verdi: forventet ${b(t.values[0])}` : `Ugyldig valg: forventet en av ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `For stor(t): forventet ${t.origin ?? "value"} til å ha ${r}${t.maximum.toString()} ${o.unit ?? "elementer"}` : `For stor(t): forventet ${t.origin ?? "value"} til å ha ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `For lite(n): forventet ${t.origin} til å ha ${r}${t.minimum.toString()} ${o.unit}` : `For lite(n): forventet ${t.origin} til å ha ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Ugyldig streng: må starte med "${r.prefix}"` : r.format === "ends_with" ? `Ugyldig streng: må ende med "${r.suffix}"` : r.format === "includes" ? `Ugyldig streng: må inneholde "${r.includes}"` : r.format === "regex" ? `Ugyldig streng: må matche mønsteret ${r.pattern}` : `Ugyldig ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Ugyldig tall: må være et multiplum av ${t.divisor}`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "Ukjente nøkler" : "Ukjent nøkkel"}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Ugyldig nøkkel i ${t.origin}`;
      case "invalid_union":
        return "Ugyldig input";
      case "invalid_element":
        return `Ugyldig verdi i ${t.origin}`;
      default:
        return "Ugyldig input";
    }
  };
};
function Gf() {
  return { localeError: Vf() };
}
var Kf = () => {
  let e = { string: { unit: "harf", verb: "olmalıdır" }, file: { unit: "bayt", verb: "olmalıdır" }, array: { unit: "unsur", verb: "olmalıdır" }, set: { unit: "unsur", verb: "olmalıdır" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "giren", email: "epostagâh", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO hengâmı", date: "ISO tarihi", time: "ISO zamanı", duration: "ISO müddeti", ipv4: "IPv4 nişânı", ipv6: "IPv6 nişânı", cidrv4: "IPv4 menzili", cidrv6: "IPv6 menzili", base64: "base64-şifreli metin", base64url: "base64url-şifreli metin", json_string: "JSON metin", e164: "E.164 sayısı", jwt: "JWT", template_literal: "giren" }, a = { nan: "NaN", number: "numara", array: "saf", null: "gayb" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Fâsit giren: umulan instanceof ${t.expected}, alınan ${u}` : `Fâsit giren: umulan ${r}, alınan ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Fâsit giren: umulan ${b(t.values[0])}` : `Fâsit tercih: mûteberler ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Fazla büyük: ${t.origin ?? "value"}, ${r}${t.maximum.toString()} ${o.unit ?? "elements"} sahip olmalıydı.` : `Fazla büyük: ${t.origin ?? "value"}, ${r}${t.maximum.toString()} olmalıydı.`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Fazla küçük: ${t.origin}, ${r}${t.minimum.toString()} ${o.unit} sahip olmalıydı.` : `Fazla küçük: ${t.origin}, ${r}${t.minimum.toString()} olmalıydı.`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Fâsit metin: "${r.prefix}" ile başlamalı.` : r.format === "ends_with" ? `Fâsit metin: "${r.suffix}" ile bitmeli.` : r.format === "includes" ? `Fâsit metin: "${r.includes}" ihtivâ etmeli.` : r.format === "regex" ? `Fâsit metin: ${r.pattern} nakşına uymalı.` : `Fâsit ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Fâsit sayı: ${t.divisor} katı olmalıydı.`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar ${t.keys.length > 1 ? "s" : ""}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `${t.origin} için tanınmayan anahtar var.`;
      case "invalid_union":
        return "Giren tanınamadı.";
      case "invalid_element":
        return `${t.origin} için tanınmayan kıymet var.`;
      default:
        return "Kıymet tanınamadı.";
    }
  };
};
function Bf() {
  return { localeError: Kf() };
}
var Hf = () => {
  let e = { string: { unit: "توکي", verb: "ولري" }, file: { unit: "بایټس", verb: "ولري" }, array: { unit: "توکي", verb: "ولري" }, set: { unit: "توکي", verb: "ولري" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "ورودي", email: "بریښنالیک", url: "یو آر ال", emoji: "ایموجي", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "نیټه او وخت", date: "نېټه", time: "وخت", duration: "موده", ipv4: "د IPv4 پته", ipv6: "د IPv6 پته", cidrv4: "د IPv4 ساحه", cidrv6: "د IPv6 ساحه", base64: "base64-encoded متن", base64url: "base64url-encoded متن", json_string: "JSON متن", e164: "د E.164 شمېره", jwt: "JWT", template_literal: "ورودي" }, a = { nan: "NaN", number: "عدد", array: "ارې" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `ناسم ورودي: باید instanceof ${t.expected} وای, مګر ${u} ترلاسه شو` : `ناسم ورودي: باید ${r} وای, مګر ${u} ترلاسه شو`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `ناسم ورودي: باید ${b(t.values[0])} وای` : `ناسم انتخاب: باید یو له ${v(t.values, "|")} څخه وای`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `ډیر لوی: ${t.origin ?? "ارزښت"} باید ${r}${t.maximum.toString()} ${o.unit ?? "عنصرونه"} ولري` : `ډیر لوی: ${t.origin ?? "ارزښت"} باید ${r}${t.maximum.toString()} وي`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `ډیر کوچنی: ${t.origin} باید ${r}${t.minimum.toString()} ${o.unit} ولري` : `ډیر کوچنی: ${t.origin} باید ${r}${t.minimum.toString()} وي`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `ناسم متن: باید د "${r.prefix}" سره پیل شي` : r.format === "ends_with" ? `ناسم متن: باید د "${r.suffix}" سره پای ته ورسيږي` : r.format === "includes" ? `ناسم متن: باید "${r.includes}" ولري` : r.format === "regex" ? `ناسم متن: باید د ${r.pattern} سره مطابقت ولري` : `${n[r.format] ?? t.format} ناسم دی`;
      }
      case "not_multiple_of":
        return `ناسم عدد: باید د ${t.divisor} مضرب وي`;
      case "unrecognized_keys":
        return `ناسم ${t.keys.length > 1 ? "کلیډونه" : "کلیډ"}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `ناسم کلیډ په ${t.origin} کې`;
      case "invalid_union":
        return "ناسمه ورودي";
      case "invalid_element":
        return `ناسم عنصر په ${t.origin} کې`;
      default:
        return "ناسمه ورودي";
    }
  };
};
function Xf() {
  return { localeError: Hf() };
}
var Yf = () => {
  let e = { string: { unit: "znaków", verb: "mieć" }, file: { unit: "bajtów", verb: "mieć" }, array: { unit: "elementów", verb: "mieć" }, set: { unit: "elementów", verb: "mieć" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "wyrażenie", email: "adres email", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "data i godzina w formacie ISO", date: "data w formacie ISO", time: "godzina w formacie ISO", duration: "czas trwania ISO", ipv4: "adres IPv4", ipv6: "adres IPv6", cidrv4: "zakres IPv4", cidrv6: "zakres IPv6", base64: "ciąg znaków zakodowany w formacie base64", base64url: "ciąg znaków zakodowany w formacie base64url", json_string: "ciąg znaków w formacie JSON", e164: "liczba E.164", jwt: "JWT", template_literal: "wejście" }, a = { nan: "NaN", number: "liczba", array: "tablica" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Nieprawidłowe dane wejściowe: oczekiwano instanceof ${t.expected}, otrzymano ${u}` : `Nieprawidłowe dane wejściowe: oczekiwano ${r}, otrzymano ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Nieprawidłowe dane wejściowe: oczekiwano ${b(t.values[0])}` : `Nieprawidłowa opcja: oczekiwano jednej z wartości ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Za duża wartość: oczekiwano, że ${t.origin ?? "wartość"} będzie mieć ${r}${t.maximum.toString()} ${o.unit ?? "elementów"}` : `Zbyt duż(y/a/e): oczekiwano, że ${t.origin ?? "wartość"} będzie wynosić ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Za mała wartość: oczekiwano, że ${t.origin ?? "wartość"} będzie mieć ${r}${t.minimum.toString()} ${o.unit ?? "elementów"}` : `Zbyt mał(y/a/e): oczekiwano, że ${t.origin ?? "wartość"} będzie wynosić ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Nieprawidłowy ciąg znaków: musi zaczynać się od "${r.prefix}"` : r.format === "ends_with" ? `Nieprawidłowy ciąg znaków: musi kończyć się na "${r.suffix}"` : r.format === "includes" ? `Nieprawidłowy ciąg znaków: musi zawierać "${r.includes}"` : r.format === "regex" ? `Nieprawidłowy ciąg znaków: musi odpowiadać wzorcowi ${r.pattern}` : `Nieprawidłow(y/a/e) ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Nieprawidłowa liczba: musi być wielokrotnością ${t.divisor}`;
      case "unrecognized_keys":
        return `Nierozpoznane klucze${t.keys.length > 1 ? "s" : ""}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Nieprawidłowy klucz w ${t.origin}`;
      case "invalid_union":
        return "Nieprawidłowe dane wejściowe";
      case "invalid_element":
        return `Nieprawidłowa wartość w ${t.origin}`;
      default:
        return "Nieprawidłowe dane wejściowe";
    }
  };
};
function Qf() {
  return { localeError: Yf() };
}
var ep = () => {
  let e = { string: { unit: "caracteres", verb: "ter" }, file: { unit: "bytes", verb: "ter" }, array: { unit: "itens", verb: "ter" }, set: { unit: "itens", verb: "ter" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "padrão", email: "endereço de e-mail", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "data e hora ISO", date: "data ISO", time: "hora ISO", duration: "duração ISO", ipv4: "endereço IPv4", ipv6: "endereço IPv6", cidrv4: "faixa de IPv4", cidrv6: "faixa de IPv6", base64: "texto codificado em base64", base64url: "URL codificada em base64", json_string: "texto JSON", e164: "número E.164", jwt: "JWT", template_literal: "entrada" }, a = { nan: "NaN", number: "número", null: "nulo" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Tipo inválido: esperado instanceof ${t.expected}, recebido ${u}` : `Tipo inválido: esperado ${r}, recebido ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Entrada inválida: esperado ${b(t.values[0])}` : `Opção inválida: esperada uma das ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Muito grande: esperado que ${t.origin ?? "valor"} tivesse ${r}${t.maximum.toString()} ${o.unit ?? "elementos"}` : `Muito grande: esperado que ${t.origin ?? "valor"} fosse ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Muito pequeno: esperado que ${t.origin} tivesse ${r}${t.minimum.toString()} ${o.unit}` : `Muito pequeno: esperado que ${t.origin} fosse ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Texto inválido: deve começar com "${r.prefix}"` : r.format === "ends_with" ? `Texto inválido: deve terminar com "${r.suffix}"` : r.format === "includes" ? `Texto inválido: deve incluir "${r.includes}"` : r.format === "regex" ? `Texto inválido: deve corresponder ao padrão ${r.pattern}` : `${n[r.format] ?? t.format} inválido`;
      }
      case "not_multiple_of":
        return `Número inválido: deve ser múltiplo de ${t.divisor}`;
      case "unrecognized_keys":
        return `Chave${t.keys.length > 1 ? "s" : ""} desconhecida${t.keys.length > 1 ? "s" : ""}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Chave inválida em ${t.origin}`;
      case "invalid_union":
        return "Entrada inválida";
      case "invalid_element":
        return `Valor inválido em ${t.origin}`;
      default:
        return "Campo inválido";
    }
  };
};
function tp() {
  return { localeError: ep() };
}
function aa(e, i, n, a) {
  let t = Math.abs(e), r = t % 10, o = t % 100;
  return o >= 11 && o <= 19 ? a : r === 1 ? i : r >= 2 && r <= 4 ? n : a;
}
var ip = () => {
  let e = { string: { unit: { one: "символ", few: "символа", many: "символов" }, verb: "иметь" }, file: { unit: { one: "байт", few: "байта", many: "байт" }, verb: "иметь" }, array: { unit: { one: "элемент", few: "элемента", many: "элементов" }, verb: "иметь" }, set: { unit: { one: "элемент", few: "элемента", many: "элементов" }, verb: "иметь" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "ввод", email: "email адрес", url: "URL", emoji: "эмодзи", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO дата и время", date: "ISO дата", time: "ISO время", duration: "ISO длительность", ipv4: "IPv4 адрес", ipv6: "IPv6 адрес", cidrv4: "IPv4 диапазон", cidrv6: "IPv6 диапазон", base64: "строка в формате base64", base64url: "строка в формате base64url", json_string: "JSON строка", e164: "номер E.164", jwt: "JWT", template_literal: "ввод" }, a = { nan: "NaN", number: "число", array: "массив" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Неверный ввод: ожидалось instanceof ${t.expected}, получено ${u}` : `Неверный ввод: ожидалось ${r}, получено ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Неверный ввод: ожидалось ${b(t.values[0])}` : `Неверный вариант: ожидалось одно из ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        if (o) {
          let u = Number(t.maximum), d = aa(u, o.unit.one, o.unit.few, o.unit.many);
          return `Слишком большое значение: ожидалось, что ${t.origin ?? "значение"} будет иметь ${r}${t.maximum.toString()} ${d}`;
        }
        return `Слишком большое значение: ожидалось, что ${t.origin ?? "значение"} будет ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        if (o) {
          let u = Number(t.minimum), d = aa(u, o.unit.one, o.unit.few, o.unit.many);
          return `Слишком маленькое значение: ожидалось, что ${t.origin} будет иметь ${r}${t.minimum.toString()} ${d}`;
        }
        return `Слишком маленькое значение: ожидалось, что ${t.origin} будет ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Неверная строка: должна начинаться с "${r.prefix}"` : r.format === "ends_with" ? `Неверная строка: должна заканчиваться на "${r.suffix}"` : r.format === "includes" ? `Неверная строка: должна содержать "${r.includes}"` : r.format === "regex" ? `Неверная строка: должна соответствовать шаблону ${r.pattern}` : `Неверный ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Неверное число: должно быть кратным ${t.divisor}`;
      case "unrecognized_keys":
        return `Нераспознанн${t.keys.length > 1 ? "ые" : "ый"} ключ${t.keys.length > 1 ? "и" : ""}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Неверный ключ в ${t.origin}`;
      case "invalid_union":
        return "Неверные входные данные";
      case "invalid_element":
        return `Неверное значение в ${t.origin}`;
      default:
        return "Неверные входные данные";
    }
  };
};
function np() {
  return { localeError: ip() };
}
var rp = () => {
  let e = { string: { unit: "znakov", verb: "imeti" }, file: { unit: "bajtov", verb: "imeti" }, array: { unit: "elementov", verb: "imeti" }, set: { unit: "elementov", verb: "imeti" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "vnos", email: "e-poštni naslov", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO datum in čas", date: "ISO datum", time: "ISO čas", duration: "ISO trajanje", ipv4: "IPv4 naslov", ipv6: "IPv6 naslov", cidrv4: "obseg IPv4", cidrv6: "obseg IPv6", base64: "base64 kodiran niz", base64url: "base64url kodiran niz", json_string: "JSON niz", e164: "E.164 številka", jwt: "JWT", template_literal: "vnos" }, a = { nan: "NaN", number: "število", array: "tabela" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Neveljaven vnos: pričakovano instanceof ${t.expected}, prejeto ${u}` : `Neveljaven vnos: pričakovano ${r}, prejeto ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Neveljaven vnos: pričakovano ${b(t.values[0])}` : `Neveljavna možnost: pričakovano eno izmed ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Preveliko: pričakovano, da bo ${t.origin ?? "vrednost"} imelo ${r}${t.maximum.toString()} ${o.unit ?? "elementov"}` : `Preveliko: pričakovano, da bo ${t.origin ?? "vrednost"} ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Premajhno: pričakovano, da bo ${t.origin} imelo ${r}${t.minimum.toString()} ${o.unit}` : `Premajhno: pričakovano, da bo ${t.origin} ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Neveljaven niz: mora se začeti z "${r.prefix}"` : r.format === "ends_with" ? `Neveljaven niz: mora se končati z "${r.suffix}"` : r.format === "includes" ? `Neveljaven niz: mora vsebovati "${r.includes}"` : r.format === "regex" ? `Neveljaven niz: mora ustrezati vzorcu ${r.pattern}` : `Neveljaven ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Neveljavno število: mora biti večkratnik ${t.divisor}`;
      case "unrecognized_keys":
        return `Neprepoznan${t.keys.length > 1 ? "i ključi" : " ključ"}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Neveljaven ključ v ${t.origin}`;
      case "invalid_union":
        return "Neveljaven vnos";
      case "invalid_element":
        return `Neveljavna vrednost v ${t.origin}`;
      default:
        return "Neveljaven vnos";
    }
  };
};
function ap() {
  return { localeError: rp() };
}
var op = () => {
  let e = { string: { unit: "tecken", verb: "att ha" }, file: { unit: "bytes", verb: "att ha" }, array: { unit: "objekt", verb: "att innehålla" }, set: { unit: "objekt", verb: "att innehålla" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "reguljärt uttryck", email: "e-postadress", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO-datum och tid", date: "ISO-datum", time: "ISO-tid", duration: "ISO-varaktighet", ipv4: "IPv4-intervall", ipv6: "IPv6-intervall", cidrv4: "IPv4-spektrum", cidrv6: "IPv6-spektrum", base64: "base64-kodad sträng", base64url: "base64url-kodad sträng", json_string: "JSON-sträng", e164: "E.164-nummer", jwt: "JWT", template_literal: "mall-literal" }, a = { nan: "NaN", number: "antal", array: "lista" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Ogiltig inmatning: förväntat instanceof ${t.expected}, fick ${u}` : `Ogiltig inmatning: förväntat ${r}, fick ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Ogiltig inmatning: förväntat ${b(t.values[0])}` : `Ogiltigt val: förväntade en av ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `För stor(t): förväntade ${t.origin ?? "värdet"} att ha ${r}${t.maximum.toString()} ${o.unit ?? "element"}` : `För stor(t): förväntat ${t.origin ?? "värdet"} att ha ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `För lite(t): förväntade ${t.origin ?? "värdet"} att ha ${r}${t.minimum.toString()} ${o.unit}` : `För lite(t): förväntade ${t.origin ?? "värdet"} att ha ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Ogiltig sträng: måste börja med "${r.prefix}"` : r.format === "ends_with" ? `Ogiltig sträng: måste sluta med "${r.suffix}"` : r.format === "includes" ? `Ogiltig sträng: måste innehålla "${r.includes}"` : r.format === "regex" ? `Ogiltig sträng: måste matcha mönstret "${r.pattern}"` : `Ogiltig(t) ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Ogiltigt tal: måste vara en multipel av ${t.divisor}`;
      case "unrecognized_keys":
        return `${t.keys.length > 1 ? "Okända nycklar" : "Okänd nyckel"}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Ogiltig nyckel i ${t.origin ?? "värdet"}`;
      case "invalid_union":
        return "Ogiltig input";
      case "invalid_element":
        return `Ogiltigt värde i ${t.origin ?? "värdet"}`;
      default:
        return "Ogiltig input";
    }
  };
};
function up() {
  return { localeError: op() };
}
var sp = () => {
  let e = { string: { unit: "எழுத்துக்கள்", verb: "கொண்டிருக்க வேண்டும்" }, file: { unit: "பைட்டுகள்", verb: "கொண்டிருக்க வேண்டும்" }, array: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" }, set: { unit: "உறுப்புகள்", verb: "கொண்டிருக்க வேண்டும்" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "உள்ளீடு", email: "மின்னஞ்சல் முகவரி", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO தேதி நேரம்", date: "ISO தேதி", time: "ISO நேரம்", duration: "ISO கால அளவு", ipv4: "IPv4 முகவரி", ipv6: "IPv6 முகவரி", cidrv4: "IPv4 வரம்பு", cidrv6: "IPv6 வரம்பு", base64: "base64-encoded சரம்", base64url: "base64url-encoded சரம்", json_string: "JSON சரம்", e164: "E.164 எண்", jwt: "JWT", template_literal: "input" }, a = { nan: "NaN", number: "எண்", array: "அணி", null: "வெறுமை" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது instanceof ${t.expected}, பெறப்பட்டது ${u}` : `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${r}, பெறப்பட்டது ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `தவறான உள்ளீடு: எதிர்பார்க்கப்பட்டது ${b(t.values[0])}` : `தவறான விருப்பம்: எதிர்பார்க்கப்பட்டது ${v(t.values, "|")} இல் ஒன்று`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${t.origin ?? "மதிப்பு"} ${r}${t.maximum.toString()} ${o.unit ?? "உறுப்புகள்"} ஆக இருக்க வேண்டும்` : `மிக பெரியது: எதிர்பார்க்கப்பட்டது ${t.origin ?? "மதிப்பு"} ${r}${t.maximum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${t.origin} ${r}${t.minimum.toString()} ${o.unit} ஆக இருக்க வேண்டும்` : `மிகச் சிறியது: எதிர்பார்க்கப்பட்டது ${t.origin} ${r}${t.minimum.toString()} ஆக இருக்க வேண்டும்`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `தவறான சரம்: "${r.prefix}" இல் தொடங்க வேண்டும்` : r.format === "ends_with" ? `தவறான சரம்: "${r.suffix}" இல் முடிவடைய வேண்டும்` : r.format === "includes" ? `தவறான சரம்: "${r.includes}" ஐ உள்ளடக்க வேண்டும்` : r.format === "regex" ? `தவறான சரம்: ${r.pattern} முறைபாட்டுடன் பொருந்த வேண்டும்` : `தவறான ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `தவறான எண்: ${t.divisor} இன் பலமாக இருக்க வேண்டும்`;
      case "unrecognized_keys":
        return `அடையாளம் தெரியாத விசை${t.keys.length > 1 ? "கள்" : ""}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `${t.origin} இல் தவறான விசை`;
      case "invalid_union":
        return "தவறான உள்ளீடு";
      case "invalid_element":
        return `${t.origin} இல் தவறான மதிப்பு`;
      default:
        return "தவறான உள்ளீடு";
    }
  };
};
function lp() {
  return { localeError: sp() };
}
var dp = () => {
  let e = { string: { unit: "ตัวอักษร", verb: "ควรมี" }, file: { unit: "ไบต์", verb: "ควรมี" }, array: { unit: "รายการ", verb: "ควรมี" }, set: { unit: "รายการ", verb: "ควรมี" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "ข้อมูลที่ป้อน", email: "ที่อยู่อีเมล", url: "URL", emoji: "อิโมจิ", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "วันที่เวลาแบบ ISO", date: "วันที่แบบ ISO", time: "เวลาแบบ ISO", duration: "ช่วงเวลาแบบ ISO", ipv4: "ที่อยู่ IPv4", ipv6: "ที่อยู่ IPv6", cidrv4: "ช่วง IP แบบ IPv4", cidrv6: "ช่วง IP แบบ IPv6", base64: "ข้อความแบบ Base64", base64url: "ข้อความแบบ Base64 สำหรับ URL", json_string: "ข้อความแบบ JSON", e164: "เบอร์โทรศัพท์ระหว่างประเทศ (E.164)", jwt: "โทเคน JWT", template_literal: "ข้อมูลที่ป้อน" }, a = { nan: "NaN", number: "ตัวเลข", array: "อาร์เรย์ (Array)", null: "ไม่มีค่า (null)" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น instanceof ${t.expected} แต่ได้รับ ${u}` : `ประเภทข้อมูลไม่ถูกต้อง: ควรเป็น ${r} แต่ได้รับ ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `ค่าไม่ถูกต้อง: ควรเป็น ${b(t.values[0])}` : `ตัวเลือกไม่ถูกต้อง: ควรเป็นหนึ่งใน ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "ไม่เกิน" : "น้อยกว่า", o = i(t.origin);
        return o ? `เกินกำหนด: ${t.origin ?? "ค่า"} ควรมี${r} ${t.maximum.toString()} ${o.unit ?? "รายการ"}` : `เกินกำหนด: ${t.origin ?? "ค่า"} ควรมี${r} ${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? "อย่างน้อย" : "มากกว่า", o = i(t.origin);
        return o ? `น้อยกว่ากำหนด: ${t.origin} ควรมี${r} ${t.minimum.toString()} ${o.unit}` : `น้อยกว่ากำหนด: ${t.origin} ควรมี${r} ${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องขึ้นต้นด้วย "${r.prefix}"` : r.format === "ends_with" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องลงท้ายด้วย "${r.suffix}"` : r.format === "includes" ? `รูปแบบไม่ถูกต้อง: ข้อความต้องมี "${r.includes}" อยู่ในข้อความ` : r.format === "regex" ? `รูปแบบไม่ถูกต้อง: ต้องตรงกับรูปแบบที่กำหนด ${r.pattern}` : `รูปแบบไม่ถูกต้อง: ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `ตัวเลขไม่ถูกต้อง: ต้องเป็นจำนวนที่หารด้วย ${t.divisor} ได้ลงตัว`;
      case "unrecognized_keys":
        return `พบคีย์ที่ไม่รู้จัก: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `คีย์ไม่ถูกต้องใน ${t.origin}`;
      case "invalid_union":
        return "ข้อมูลไม่ถูกต้อง: ไม่ตรงกับรูปแบบยูเนียนที่กำหนดไว้";
      case "invalid_element":
        return `ข้อมูลไม่ถูกต้องใน ${t.origin}`;
      default:
        return "ข้อมูลไม่ถูกต้อง";
    }
  };
};
function cp() {
  return { localeError: dp() };
}
var mp = () => {
  let e = { string: { unit: "karakter", verb: "olmalı" }, file: { unit: "bayt", verb: "olmalı" }, array: { unit: "öğe", verb: "olmalı" }, set: { unit: "öğe", verb: "olmalı" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "girdi", email: "e-posta adresi", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO tarih ve saat", date: "ISO tarih", time: "ISO saat", duration: "ISO süre", ipv4: "IPv4 adresi", ipv6: "IPv6 adresi", cidrv4: "IPv4 aralığı", cidrv6: "IPv6 aralığı", base64: "base64 ile şifrelenmiş metin", base64url: "base64url ile şifrelenmiş metin", json_string: "JSON dizesi", e164: "E.164 sayısı", jwt: "JWT", template_literal: "Şablon dizesi" }, a = { nan: "NaN" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Geçersiz değer: beklenen instanceof ${t.expected}, alınan ${u}` : `Geçersiz değer: beklenen ${r}, alınan ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Geçersiz değer: beklenen ${b(t.values[0])}` : `Geçersiz seçenek: aşağıdakilerden biri olmalı: ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Çok büyük: beklenen ${t.origin ?? "değer"} ${r}${t.maximum.toString()} ${o.unit ?? "öğe"}` : `Çok büyük: beklenen ${t.origin ?? "değer"} ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Çok küçük: beklenen ${t.origin} ${r}${t.minimum.toString()} ${o.unit}` : `Çok küçük: beklenen ${t.origin} ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Geçersiz metin: "${r.prefix}" ile başlamalı` : r.format === "ends_with" ? `Geçersiz metin: "${r.suffix}" ile bitmeli` : r.format === "includes" ? `Geçersiz metin: "${r.includes}" içermeli` : r.format === "regex" ? `Geçersiz metin: ${r.pattern} desenine uymalı` : `Geçersiz ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Geçersiz sayı: ${t.divisor} ile tam bölünebilmeli`;
      case "unrecognized_keys":
        return `Tanınmayan anahtar${t.keys.length > 1 ? "lar" : ""}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `${t.origin} içinde geçersiz anahtar`;
      case "invalid_union":
        return "Geçersiz değer";
      case "invalid_element":
        return `${t.origin} içinde geçersiz değer`;
      default:
        return "Geçersiz değer";
    }
  };
};
function fp() {
  return { localeError: mp() };
}
var pp = () => {
  let e = { string: { unit: "символів", verb: "матиме" }, file: { unit: "байтів", verb: "матиме" }, array: { unit: "елементів", verb: "матиме" }, set: { unit: "елементів", verb: "матиме" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "вхідні дані", email: "адреса електронної пошти", url: "URL", emoji: "емодзі", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "дата та час ISO", date: "дата ISO", time: "час ISO", duration: "тривалість ISO", ipv4: "адреса IPv4", ipv6: "адреса IPv6", cidrv4: "діапазон IPv4", cidrv6: "діапазон IPv6", base64: "рядок у кодуванні base64", base64url: "рядок у кодуванні base64url", json_string: "рядок JSON", e164: "номер E.164", jwt: "JWT", template_literal: "вхідні дані" }, a = { nan: "NaN", number: "число", array: "масив" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Неправильні вхідні дані: очікується instanceof ${t.expected}, отримано ${u}` : `Неправильні вхідні дані: очікується ${r}, отримано ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Неправильні вхідні дані: очікується ${b(t.values[0])}` : `Неправильна опція: очікується одне з ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Занадто велике: очікується, що ${t.origin ?? "значення"} ${o.verb} ${r}${t.maximum.toString()} ${o.unit ?? "елементів"}` : `Занадто велике: очікується, що ${t.origin ?? "значення"} буде ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Занадто мале: очікується, що ${t.origin} ${o.verb} ${r}${t.minimum.toString()} ${o.unit}` : `Занадто мале: очікується, що ${t.origin} буде ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Неправильний рядок: повинен починатися з "${r.prefix}"` : r.format === "ends_with" ? `Неправильний рядок: повинен закінчуватися на "${r.suffix}"` : r.format === "includes" ? `Неправильний рядок: повинен містити "${r.includes}"` : r.format === "regex" ? `Неправильний рядок: повинен відповідати шаблону ${r.pattern}` : `Неправильний ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Неправильне число: повинно бути кратним ${t.divisor}`;
      case "unrecognized_keys":
        return `Нерозпізнаний ключ${t.keys.length > 1 ? "і" : ""}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Неправильний ключ у ${t.origin}`;
      case "invalid_union":
        return "Неправильні вхідні дані";
      case "invalid_element":
        return `Неправильне значення у ${t.origin}`;
      default:
        return "Неправильні вхідні дані";
    }
  };
};
function Ku() {
  return { localeError: pp() };
}
function vp() {
  return Ku();
}
var gp = () => {
  let e = { string: { unit: "حروف", verb: "ہونا" }, file: { unit: "بائٹس", verb: "ہونا" }, array: { unit: "آئٹمز", verb: "ہونا" }, set: { unit: "آئٹمز", verb: "ہونا" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "ان پٹ", email: "ای میل ایڈریس", url: "یو آر ایل", emoji: "ایموجی", uuid: "یو یو آئی ڈی", uuidv4: "یو یو آئی ڈی وی 4", uuidv6: "یو یو آئی ڈی وی 6", nanoid: "نینو آئی ڈی", guid: "جی یو آئی ڈی", cuid: "سی یو آئی ڈی", cuid2: "سی یو آئی ڈی 2", ulid: "یو ایل آئی ڈی", xid: "ایکس آئی ڈی", ksuid: "کے ایس یو آئی ڈی", datetime: "آئی ایس او ڈیٹ ٹائم", date: "آئی ایس او تاریخ", time: "آئی ایس او وقت", duration: "آئی ایس او مدت", ipv4: "آئی پی وی 4 ایڈریس", ipv6: "آئی پی وی 6 ایڈریس", cidrv4: "آئی پی وی 4 رینج", cidrv6: "آئی پی وی 6 رینج", base64: "بیس 64 ان کوڈڈ سٹرنگ", base64url: "بیس 64 یو آر ایل ان کوڈڈ سٹرنگ", json_string: "جے ایس او این سٹرنگ", e164: "ای 164 نمبر", jwt: "جے ڈبلیو ٹی", template_literal: "ان پٹ" }, a = { nan: "NaN", number: "نمبر", array: "آرے", null: "نل" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `غلط ان پٹ: instanceof ${t.expected} متوقع تھا، ${u} موصول ہوا` : `غلط ان پٹ: ${r} متوقع تھا، ${u} موصول ہوا`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `غلط ان پٹ: ${b(t.values[0])} متوقع تھا` : `غلط آپشن: ${v(t.values, "|")} میں سے ایک متوقع تھا`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `بہت بڑا: ${t.origin ?? "ویلیو"} کے ${r}${t.maximum.toString()} ${o.unit ?? "عناصر"} ہونے متوقع تھے` : `بہت بڑا: ${t.origin ?? "ویلیو"} کا ${r}${t.maximum.toString()} ہونا متوقع تھا`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `بہت چھوٹا: ${t.origin} کے ${r}${t.minimum.toString()} ${o.unit} ہونے متوقع تھے` : `بہت چھوٹا: ${t.origin} کا ${r}${t.minimum.toString()} ہونا متوقع تھا`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `غلط سٹرنگ: "${r.prefix}" سے شروع ہونا چاہیے` : r.format === "ends_with" ? `غلط سٹرنگ: "${r.suffix}" پر ختم ہونا چاہیے` : r.format === "includes" ? `غلط سٹرنگ: "${r.includes}" شامل ہونا چاہیے` : r.format === "regex" ? `غلط سٹرنگ: پیٹرن ${r.pattern} سے میچ ہونا چاہیے` : `غلط ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `غلط نمبر: ${t.divisor} کا مضاعف ہونا چاہیے`;
      case "unrecognized_keys":
        return `غیر تسلیم شدہ کی${t.keys.length > 1 ? "ز" : ""}: ${v(t.keys, "، ")}`;
      case "invalid_key":
        return `${t.origin} میں غلط کی`;
      case "invalid_union":
        return "غلط ان پٹ";
      case "invalid_element":
        return `${t.origin} میں غلط ویلیو`;
      default:
        return "غلط ان پٹ";
    }
  };
};
function hp() {
  return { localeError: gp() };
}
var $p = () => {
  let e = { string: { unit: "belgi", verb: "bo‘lishi kerak" }, file: { unit: "bayt", verb: "bo‘lishi kerak" }, array: { unit: "element", verb: "bo‘lishi kerak" }, set: { unit: "element", verb: "bo‘lishi kerak" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "kirish", email: "elektron pochta manzili", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO sana va vaqti", date: "ISO sana", time: "ISO vaqt", duration: "ISO davomiylik", ipv4: "IPv4 manzil", ipv6: "IPv6 manzil", mac: "MAC manzil", cidrv4: "IPv4 diapazon", cidrv6: "IPv6 diapazon", base64: "base64 kodlangan satr", base64url: "base64url kodlangan satr", json_string: "JSON satr", e164: "E.164 raqam", jwt: "JWT", template_literal: "kirish" }, a = { nan: "NaN", number: "raqam", array: "massiv" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Noto‘g‘ri kirish: kutilgan instanceof ${t.expected}, qabul qilingan ${u}` : `Noto‘g‘ri kirish: kutilgan ${r}, qabul qilingan ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Noto‘g‘ri kirish: kutilgan ${b(t.values[0])}` : `Noto‘g‘ri variant: quyidagilardan biri kutilgan ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Juda katta: kutilgan ${t.origin ?? "qiymat"} ${r}${t.maximum.toString()} ${o.unit} ${o.verb}` : `Juda katta: kutilgan ${t.origin ?? "qiymat"} ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Juda kichik: kutilgan ${t.origin} ${r}${t.minimum.toString()} ${o.unit} ${o.verb}` : `Juda kichik: kutilgan ${t.origin} ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Noto‘g‘ri satr: "${r.prefix}" bilan boshlanishi kerak` : r.format === "ends_with" ? `Noto‘g‘ri satr: "${r.suffix}" bilan tugashi kerak` : r.format === "includes" ? `Noto‘g‘ri satr: "${r.includes}" ni o‘z ichiga olishi kerak` : r.format === "regex" ? `Noto‘g‘ri satr: ${r.pattern} shabloniga mos kelishi kerak` : `Noto‘g‘ri ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Noto‘g‘ri raqam: ${t.divisor} ning karralisi bo‘lishi kerak`;
      case "unrecognized_keys":
        return `Noma’lum kalit${t.keys.length > 1 ? "lar" : ""}: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `${t.origin} dagi kalit noto‘g‘ri`;
      case "invalid_union":
        return "Noto‘g‘ri kirish";
      case "invalid_element":
        return `${t.origin} da noto‘g‘ri qiymat`;
      default:
        return "Noto‘g‘ri kirish";
    }
  };
};
function bp() {
  return { localeError: $p() };
}
var yp = () => {
  let e = { string: { unit: "ký tự", verb: "có" }, file: { unit: "byte", verb: "có" }, array: { unit: "phần tử", verb: "có" }, set: { unit: "phần tử", verb: "có" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "đầu vào", email: "địa chỉ email", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ngày giờ ISO", date: "ngày ISO", time: "giờ ISO", duration: "khoảng thời gian ISO", ipv4: "địa chỉ IPv4", ipv6: "địa chỉ IPv6", cidrv4: "dải IPv4", cidrv6: "dải IPv6", base64: "chuỗi mã hóa base64", base64url: "chuỗi mã hóa base64url", json_string: "chuỗi JSON", e164: "số E.164", jwt: "JWT", template_literal: "đầu vào" }, a = { nan: "NaN", number: "số", array: "mảng" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Đầu vào không hợp lệ: mong đợi instanceof ${t.expected}, nhận được ${u}` : `Đầu vào không hợp lệ: mong đợi ${r}, nhận được ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Đầu vào không hợp lệ: mong đợi ${b(t.values[0])}` : `Tùy chọn không hợp lệ: mong đợi một trong các giá trị ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Quá lớn: mong đợi ${t.origin ?? "giá trị"} ${o.verb} ${r}${t.maximum.toString()} ${o.unit ?? "phần tử"}` : `Quá lớn: mong đợi ${t.origin ?? "giá trị"} ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Quá nhỏ: mong đợi ${t.origin} ${o.verb} ${r}${t.minimum.toString()} ${o.unit}` : `Quá nhỏ: mong đợi ${t.origin} ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Chuỗi không hợp lệ: phải bắt đầu bằng "${r.prefix}"` : r.format === "ends_with" ? `Chuỗi không hợp lệ: phải kết thúc bằng "${r.suffix}"` : r.format === "includes" ? `Chuỗi không hợp lệ: phải bao gồm "${r.includes}"` : r.format === "regex" ? `Chuỗi không hợp lệ: phải khớp với mẫu ${r.pattern}` : `${n[r.format] ?? t.format} không hợp lệ`;
      }
      case "not_multiple_of":
        return `Số không hợp lệ: phải là bội số của ${t.divisor}`;
      case "unrecognized_keys":
        return `Khóa không được nhận dạng: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Khóa không hợp lệ trong ${t.origin}`;
      case "invalid_union":
        return "Đầu vào không hợp lệ";
      case "invalid_element":
        return `Giá trị không hợp lệ trong ${t.origin}`;
      default:
        return "Đầu vào không hợp lệ";
    }
  };
};
function _p() {
  return { localeError: yp() };
}
var kp = () => {
  let e = { string: { unit: "字符", verb: "包含" }, file: { unit: "字节", verb: "包含" }, array: { unit: "项", verb: "包含" }, set: { unit: "项", verb: "包含" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "输入", email: "电子邮件", url: "URL", emoji: "表情符号", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO日期时间", date: "ISO日期", time: "ISO时间", duration: "ISO时长", ipv4: "IPv4地址", ipv6: "IPv6地址", cidrv4: "IPv4网段", cidrv6: "IPv6网段", base64: "base64编码字符串", base64url: "base64url编码字符串", json_string: "JSON字符串", e164: "E.164号码", jwt: "JWT", template_literal: "输入" }, a = { nan: "NaN", number: "数字", array: "数组", null: "空值(null)" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `无效输入：期望 instanceof ${t.expected}，实际接收 ${u}` : `无效输入：期望 ${r}，实际接收 ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `无效输入：期望 ${b(t.values[0])}` : `无效选项：期望以下之一 ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `数值过大：期望 ${t.origin ?? "值"} ${r}${t.maximum.toString()} ${o.unit ?? "个元素"}` : `数值过大：期望 ${t.origin ?? "值"} ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `数值过小：期望 ${t.origin} ${r}${t.minimum.toString()} ${o.unit}` : `数值过小：期望 ${t.origin} ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `无效字符串：必须以 "${r.prefix}" 开头` : r.format === "ends_with" ? `无效字符串：必须以 "${r.suffix}" 结尾` : r.format === "includes" ? `无效字符串：必须包含 "${r.includes}"` : r.format === "regex" ? `无效字符串：必须满足正则表达式 ${r.pattern}` : `无效${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `无效数字：必须是 ${t.divisor} 的倍数`;
      case "unrecognized_keys":
        return `出现未知的键(key): ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `${t.origin} 中的键(key)无效`;
      case "invalid_union":
        return "无效输入";
      case "invalid_element":
        return `${t.origin} 中包含无效值(value)`;
      default:
        return "无效输入";
    }
  };
};
function Ip() {
  return { localeError: kp() };
}
var xp = () => {
  let e = { string: { unit: "字元", verb: "擁有" }, file: { unit: "位元組", verb: "擁有" }, array: { unit: "項目", verb: "擁有" }, set: { unit: "項目", verb: "擁有" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "輸入", email: "郵件地址", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "ISO 日期時間", date: "ISO 日期", time: "ISO 時間", duration: "ISO 期間", ipv4: "IPv4 位址", ipv6: "IPv6 位址", cidrv4: "IPv4 範圍", cidrv6: "IPv6 範圍", base64: "base64 編碼字串", base64url: "base64url 編碼字串", json_string: "JSON 字串", e164: "E.164 數值", jwt: "JWT", template_literal: "輸入" }, a = { nan: "NaN" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `無效的輸入值：預期為 instanceof ${t.expected}，但收到 ${u}` : `無效的輸入值：預期為 ${r}，但收到 ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `無效的輸入值：預期為 ${b(t.values[0])}` : `無效的選項：預期為以下其中之一 ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `數值過大：預期 ${t.origin ?? "值"} 應為 ${r}${t.maximum.toString()} ${o.unit ?? "個元素"}` : `數值過大：預期 ${t.origin ?? "值"} 應為 ${r}${t.maximum.toString()}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `數值過小：預期 ${t.origin} 應為 ${r}${t.minimum.toString()} ${o.unit}` : `數值過小：預期 ${t.origin} 應為 ${r}${t.minimum.toString()}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `無效的字串：必須以 "${r.prefix}" 開頭` : r.format === "ends_with" ? `無效的字串：必須以 "${r.suffix}" 結尾` : r.format === "includes" ? `無效的字串：必須包含 "${r.includes}"` : r.format === "regex" ? `無效的字串：必須符合格式 ${r.pattern}` : `無效的 ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `無效的數字：必須為 ${t.divisor} 的倍數`;
      case "unrecognized_keys":
        return `無法識別的鍵值${t.keys.length > 1 ? "們" : ""}：${v(t.keys, "、")}`;
      case "invalid_key":
        return `${t.origin} 中有無效的鍵值`;
      case "invalid_union":
        return "無效的輸入值";
      case "invalid_element":
        return `${t.origin} 中有無效的值`;
      default:
        return "無效的輸入值";
    }
  };
};
function wp() {
  return { localeError: xp() };
}
var Sp = () => {
  let e = { string: { unit: "àmi", verb: "ní" }, file: { unit: "bytes", verb: "ní" }, array: { unit: "nkan", verb: "ní" }, set: { unit: "nkan", verb: "ní" } };
  function i(t) {
    return e[t] ?? null;
  }
  let n = { regex: "ẹ̀rọ ìbáwọlé", email: "àdírẹ́sì ìmẹ́lì", url: "URL", emoji: "emoji", uuid: "UUID", uuidv4: "UUIDv4", uuidv6: "UUIDv6", nanoid: "nanoid", guid: "GUID", cuid: "cuid", cuid2: "cuid2", ulid: "ULID", xid: "XID", ksuid: "KSUID", datetime: "àkókò ISO", date: "ọjọ́ ISO", time: "àkókò ISO", duration: "àkókò tó pé ISO", ipv4: "àdírẹ́sì IPv4", ipv6: "àdírẹ́sì IPv6", cidrv4: "àgbègbè IPv4", cidrv6: "àgbègbè IPv6", base64: "ọ̀rọ̀ tí a kọ́ ní base64", base64url: "ọ̀rọ̀ base64url", json_string: "ọ̀rọ̀ JSON", e164: "nọ́mbà E.164", jwt: "JWT", template_literal: "ẹ̀rọ ìbáwọlé" }, a = { nan: "NaN", number: "nọ́mbà", array: "akopọ" };
  return (t) => {
    switch (t.code) {
      case "invalid_type": {
        let r = a[t.expected] ?? t.expected, o = _(t.input), u = a[o] ?? o;
        return /^[A-Z]/.test(t.expected) ? `Ìbáwọlé aṣìṣe: a ní láti fi instanceof ${t.expected}, àmọ̀ a rí ${u}` : `Ìbáwọlé aṣìṣe: a ní láti fi ${r}, àmọ̀ a rí ${u}`;
      }
      case "invalid_value":
        return t.values.length === 1 ? `Ìbáwọlé aṣìṣe: a ní láti fi ${b(t.values[0])}` : `Àṣàyàn aṣìṣe: yan ọ̀kan lára ${v(t.values, "|")}`;
      case "too_big": {
        let r = t.inclusive ? "<=" : "<", o = i(t.origin);
        return o ? `Tó pọ̀ jù: a ní láti jẹ́ pé ${t.origin ?? "iye"} ${o.verb} ${r}${t.maximum} ${o.unit}` : `Tó pọ̀ jù: a ní láti jẹ́ ${r}${t.maximum}`;
      }
      case "too_small": {
        let r = t.inclusive ? ">=" : ">", o = i(t.origin);
        return o ? `Kéré ju: a ní láti jẹ́ pé ${t.origin} ${o.verb} ${r}${t.minimum} ${o.unit}` : `Kéré ju: a ní láti jẹ́ ${r}${t.minimum}`;
      }
      case "invalid_format": {
        let r = t;
        return r.format === "starts_with" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bẹ̀rẹ̀ pẹ̀lú "${r.prefix}"` : r.format === "ends_with" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ parí pẹ̀lú "${r.suffix}"` : r.format === "includes" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ ní "${r.includes}"` : r.format === "regex" ? `Ọ̀rọ̀ aṣìṣe: gbọ́dọ̀ bá àpẹẹrẹ mu ${r.pattern}` : `Aṣìṣe: ${n[r.format] ?? t.format}`;
      }
      case "not_multiple_of":
        return `Nọ́mbà aṣìṣe: gbọ́dọ̀ jẹ́ èyà pípín ti ${t.divisor}`;
      case "unrecognized_keys":
        return `Bọtìnì àìmọ̀: ${v(t.keys, ", ")}`;
      case "invalid_key":
        return `Bọtìnì aṣìṣe nínú ${t.origin}`;
      case "invalid_union":
        return "Ìbáwọlé aṣìṣe";
      case "invalid_element":
        return `Iye aṣìṣe nínú ${t.origin}`;
      default:
        return "Ìbáwọlé aṣìṣe";
    }
  };
};
function zp() {
  return { localeError: Sp() };
}
var oa, Bu = Symbol("ZodOutput"), Hu = Symbol("ZodInput");
class Xu {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(i, ...n) {
    let a = n[0];
    return this._map.set(i, a), a && typeof a == "object" && "id" in a && this._idmap.set(a.id, i), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(i) {
    let n = this._map.get(i);
    return n && typeof n == "object" && "id" in n && this._idmap.delete(n.id), this._map.delete(i), this;
  }
  get(i) {
    let n = i._zod.parent;
    if (n) {
      let a = { ...this.get(n) ?? {} };
      delete a.id;
      let t = { ...a, ...this._map.get(i) };
      return Object.keys(t).length ? t : void 0;
    }
    return this._map.get(i);
  }
  has(i) {
    return this._map.has(i);
  }
}
function mn() {
  return new Xu();
}
(oa = globalThis).__zod_globalRegistry ?? (oa.__zod_globalRegistry = mn());
var Q = globalThis.__zod_globalRegistry;
function Yu(e, i) {
  return new e({ type: "string", ...g(i) });
}
function Qu(e, i) {
  return new e({ type: "string", coerce: !0, ...g(i) });
}
function fn(e, i) {
  return new e({ type: "string", format: "email", check: "string_format", abort: !1, ...g(i) });
}
function Nt(e, i) {
  return new e({ type: "string", format: "guid", check: "string_format", abort: !1, ...g(i) });
}
function pn(e, i) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, ...g(i) });
}
function vn(e, i) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v4", ...g(i) });
}
function gn(e, i) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v6", ...g(i) });
}
function hn(e, i) {
  return new e({ type: "string", format: "uuid", check: "string_format", abort: !1, version: "v7", ...g(i) });
}
function Jt(e, i) {
  return new e({ type: "string", format: "url", check: "string_format", abort: !1, ...g(i) });
}
function $n(e, i) {
  return new e({ type: "string", format: "emoji", check: "string_format", abort: !1, ...g(i) });
}
function bn(e, i) {
  return new e({ type: "string", format: "nanoid", check: "string_format", abort: !1, ...g(i) });
}
function yn(e, i) {
  return new e({ type: "string", format: "cuid", check: "string_format", abort: !1, ...g(i) });
}
function _n(e, i) {
  return new e({ type: "string", format: "cuid2", check: "string_format", abort: !1, ...g(i) });
}
function kn(e, i) {
  return new e({ type: "string", format: "ulid", check: "string_format", abort: !1, ...g(i) });
}
function In(e, i) {
  return new e({ type: "string", format: "xid", check: "string_format", abort: !1, ...g(i) });
}
function xn(e, i) {
  return new e({ type: "string", format: "ksuid", check: "string_format", abort: !1, ...g(i) });
}
function wn(e, i) {
  return new e({ type: "string", format: "ipv4", check: "string_format", abort: !1, ...g(i) });
}
function Sn(e, i) {
  return new e({ type: "string", format: "ipv6", check: "string_format", abort: !1, ...g(i) });
}
function es(e, i) {
  return new e({ type: "string", format: "mac", check: "string_format", abort: !1, ...g(i) });
}
function zn(e, i) {
  return new e({ type: "string", format: "cidrv4", check: "string_format", abort: !1, ...g(i) });
}
function Un(e, i) {
  return new e({ type: "string", format: "cidrv6", check: "string_format", abort: !1, ...g(i) });
}
function On(e, i) {
  return new e({ type: "string", format: "base64", check: "string_format", abort: !1, ...g(i) });
}
function jn(e, i) {
  return new e({ type: "string", format: "base64url", check: "string_format", abort: !1, ...g(i) });
}
function Zn(e, i) {
  return new e({ type: "string", format: "e164", check: "string_format", abort: !1, ...g(i) });
}
function Nn(e, i) {
  return new e({ type: "string", format: "jwt", check: "string_format", abort: !1, ...g(i) });
}
var ts = { Any: null, Minute: -1, Second: 0, Millisecond: 3, Microsecond: 6 };
function is(e, i) {
  return new e({ type: "string", format: "datetime", check: "string_format", offset: !1, local: !1, precision: null, ...g(i) });
}
function ns(e, i) {
  return new e({ type: "string", format: "date", check: "string_format", ...g(i) });
}
function rs(e, i) {
  return new e({ type: "string", format: "time", check: "string_format", precision: null, ...g(i) });
}
function as(e, i) {
  return new e({ type: "string", format: "duration", check: "string_format", ...g(i) });
}
function os(e, i) {
  return new e({ type: "number", checks: [], ...g(i) });
}
function us(e, i) {
  return new e({ type: "number", coerce: !0, checks: [], ...g(i) });
}
function ss(e, i) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "safeint", ...g(i) });
}
function ls(e, i) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "float32", ...g(i) });
}
function ds(e, i) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "float64", ...g(i) });
}
function cs(e, i) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "int32", ...g(i) });
}
function ms(e, i) {
  return new e({ type: "number", check: "number_format", abort: !1, format: "uint32", ...g(i) });
}
function fs(e, i) {
  return new e({ type: "boolean", ...g(i) });
}
function ps(e, i) {
  return new e({ type: "boolean", coerce: !0, ...g(i) });
}
function vs(e, i) {
  return new e({ type: "bigint", ...g(i) });
}
function gs(e, i) {
  return new e({ type: "bigint", coerce: !0, ...g(i) });
}
function hs(e, i) {
  return new e({ type: "bigint", check: "bigint_format", abort: !1, format: "int64", ...g(i) });
}
function $s(e, i) {
  return new e({ type: "bigint", check: "bigint_format", abort: !1, format: "uint64", ...g(i) });
}
function bs(e, i) {
  return new e({ type: "symbol", ...g(i) });
}
function ys(e, i) {
  return new e({ type: "undefined", ...g(i) });
}
function _s(e, i) {
  return new e({ type: "null", ...g(i) });
}
function ks(e) {
  return new e({ type: "any" });
}
function Is(e) {
  return new e({ type: "unknown" });
}
function xs(e, i) {
  return new e({ type: "never", ...g(i) });
}
function ws(e, i) {
  return new e({ type: "void", ...g(i) });
}
function Ss(e, i) {
  return new e({ type: "date", ...g(i) });
}
function zs(e, i) {
  return new e({ type: "date", coerce: !0, ...g(i) });
}
function Us(e, i) {
  return new e({ type: "nan", ...g(i) });
}
function fe(e, i) {
  return new tn({ check: "less_than", ...g(i), value: e, inclusive: !1 });
}
function ee(e, i) {
  return new tn({ check: "less_than", ...g(i), value: e, inclusive: !0 });
}
function pe(e, i) {
  return new nn({ check: "greater_than", ...g(i), value: e, inclusive: !1 });
}
function V(e, i) {
  return new nn({ check: "greater_than", ...g(i), value: e, inclusive: !0 });
}
function Pn(e) {
  return pe(0, e);
}
function Dn(e) {
  return fe(0, e);
}
function En(e) {
  return ee(0, e);
}
function Tn(e) {
  return V(0, e);
}
function Te(e, i) {
  return new fo({ check: "multiple_of", ...g(i), value: e });
}
function Je(e, i) {
  return new go({ check: "max_size", ...g(i), maximum: e });
}
function ve(e, i) {
  return new ho({ check: "min_size", ...g(i), minimum: e });
}
function lt(e, i) {
  return new $o({ check: "size_equals", ...g(i), size: e });
}
function dt(e, i) {
  return new bo({ check: "max_length", ...g(i), maximum: e });
}
function xe(e, i) {
  return new yo({ check: "min_length", ...g(i), minimum: e });
}
function ct(e, i) {
  return new _o({ check: "length_equals", ...g(i), length: e });
}
function Mt(e, i) {
  return new ko({ check: "string_format", format: "regex", ...g(i), pattern: e });
}
function Ft(e) {
  return new Io({ check: "string_format", format: "lowercase", ...g(e) });
}
function qt(e) {
  return new xo({ check: "string_format", format: "uppercase", ...g(e) });
}
function Wt(e, i) {
  return new wo({ check: "string_format", format: "includes", ...g(i), includes: e });
}
function Vt(e, i) {
  return new So({ check: "string_format", format: "starts_with", ...g(i), prefix: e });
}
function Gt(e, i) {
  return new zo({ check: "string_format", format: "ends_with", ...g(i), suffix: e });
}
function An(e, i, n) {
  return new Uo({ check: "property", property: e, schema: i, ...g(n) });
}
function Kt(e, i) {
  return new Oo({ check: "mime_type", mime: e, ...g(i) });
}
function ce(e) {
  return new jo({ check: "overwrite", tx: e });
}
function Bt(e) {
  return ce((i) => i.normalize(e));
}
function Ht() {
  return ce((e) => e.trim());
}
function Xt() {
  return ce((e) => e.toLowerCase());
}
function Yt() {
  return ce((e) => e.toUpperCase());
}
function Qt() {
  return ce((e) => ba(e));
}
function Os(e, i, n) {
  return new e({ type: "array", element: i, ...g(n) });
}
function Up(e, i, n) {
  return new e({ type: "union", options: i, ...g(n) });
}
function Op(e, i, n) {
  return new e({ type: "union", options: i, inclusive: !1, ...g(n) });
}
function jp(e, i, n, a) {
  return new e({ type: "union", options: n, discriminator: i, ...g(a) });
}
function Zp(e, i, n) {
  return new e({ type: "intersection", left: i, right: n });
}
function Np(e, i, n, a) {
  let t = n instanceof k;
  return new e({ type: "tuple", items: i, rest: t ? n : null, ...g(t ? a : n) });
}
function Pp(e, i, n, a) {
  return new e({ type: "record", keyType: i, valueType: n, ...g(a) });
}
function Dp(e, i, n, a) {
  return new e({ type: "map", keyType: i, valueType: n, ...g(a) });
}
function Ep(e, i, n) {
  return new e({ type: "set", valueType: i, ...g(n) });
}
function Tp(e, i, n) {
  let a = Array.isArray(i) ? Object.fromEntries(i.map((t) => [t, t])) : i;
  return new e({ type: "enum", entries: a, ...g(n) });
}
function Ap(e, i, n) {
  return new e({ type: "enum", entries: i, ...g(n) });
}
function Rp(e, i, n) {
  return new e({ type: "literal", values: Array.isArray(i) ? i : [i], ...g(n) });
}
function js(e, i) {
  return new e({ type: "file", ...g(i) });
}
function Cp(e, i) {
  return new e({ type: "transform", transform: i });
}
function Lp(e, i) {
  return new e({ type: "optional", innerType: i });
}
function Jp(e, i) {
  return new e({ type: "nullable", innerType: i });
}
function Mp(e, i, n) {
  return new e({ type: "default", innerType: i, get defaultValue() {
    return typeof n == "function" ? n() : _a(n);
  } });
}
function Fp(e, i, n) {
  return new e({ type: "nonoptional", innerType: i, ...g(n) });
}
function qp(e, i) {
  return new e({ type: "success", innerType: i });
}
function Wp(e, i, n) {
  return new e({ type: "catch", innerType: i, catchValue: typeof n == "function" ? n : () => n });
}
function Vp(e, i, n) {
  return new e({ type: "pipe", in: i, out: n });
}
function Gp(e, i) {
  return new e({ type: "readonly", innerType: i });
}
function Kp(e, i, n) {
  return new e({ type: "template_literal", parts: i, ...g(n) });
}
function Bp(e, i) {
  return new e({ type: "lazy", getter: i });
}
function Hp(e, i) {
  return new e({ type: "promise", innerType: i });
}
function Zs(e, i, n) {
  let a = g(n);
  return a.abort ?? (a.abort = !0), new e({ type: "custom", check: "custom", fn: i, ...a });
}
function Ns(e, i, n) {
  return new e({ type: "custom", check: "custom", fn: i, ...g(n) });
}
function Ps(e) {
  let i = Ds((n) => (n.addIssue = (a) => {
    if (typeof a == "string") n.issues.push(jt(a, n.value, i._zod.def));
    else {
      let t = a;
      t.fatal && (t.continue = !1), t.code ?? (t.code = "custom"), t.input ?? (t.input = n.value), t.inst ?? (t.inst = i), t.continue ?? (t.continue = !i._zod.def.abort), n.issues.push(jt(t));
    }
  }, e(n.value, n)));
  return i;
}
function Ds(e, i) {
  let n = new E({ check: "custom", ...g(i) });
  return n._zod.check = e, n;
}
function Es(e) {
  let i = new E({ check: "describe" });
  return i._zod.onattach = [(n) => {
    let a = Q.get(n) ?? {};
    Q.add(n, { ...a, description: e });
  }], i._zod.check = () => {
  }, i;
}
function Ts(e) {
  let i = new E({ check: "meta" });
  return i._zod.onattach = [(n) => {
    let a = Q.get(n) ?? {};
    Q.add(n, { ...a, ...e });
  }], i._zod.check = () => {
  }, i;
}
function As(e, i) {
  let n = g(i), a = n.truthy ?? ["true", "1", "yes", "on", "y", "enabled"], t = n.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
  n.case !== "sensitive" && (a = a.map((p) => typeof p == "string" ? p.toLowerCase() : p), t = t.map((p) => typeof p == "string" ? p.toLowerCase() : p));
  let r = new Set(a), o = new Set(t), u = e.Codec ?? dn, d = e.Boolean ?? on, s = new (e.String ?? st)({ type: "string", error: n.error }), m = new d({ type: "boolean", error: n.error }), c = new u({ type: "pipe", in: s, out: m, transform: (p, $) => {
    let y = p;
    return n.case !== "sensitive" && (y = y.toLowerCase()), r.has(y) ? !0 : o.has(y) ? !1 : ($.issues.push({ code: "invalid_value", expected: "stringbool", values: [...r, ...o], input: $.value, inst: c, continue: !1 }), {});
  }, reverseTransform: (p, $) => p === !0 ? a[0] || "true" : t[0] || "false", error: n.error });
  return c;
}
function mt(e, i, n, a = {}) {
  let t = g(a), r = { ...g(a), check: "string_format", type: "string", format: i, fn: typeof n == "function" ? n : (o) => n.test(o), ...t };
  return n instanceof RegExp && (r.pattern = n), new e(r);
}
function Ae(e) {
  let i = (e == null ? void 0 : e.target) ?? "draft-2020-12";
  return i === "draft-4" && (i = "draft-04"), i === "draft-7" && (i = "draft-07"), { processors: e.processors ?? {}, metadataRegistry: (e == null ? void 0 : e.metadata) ?? Q, target: i, unrepresentable: (e == null ? void 0 : e.unrepresentable) ?? "throw", override: (e == null ? void 0 : e.override) ?? (() => {
  }), io: (e == null ? void 0 : e.io) ?? "output", counter: 0, seen: /* @__PURE__ */ new Map(), cycles: (e == null ? void 0 : e.cycles) ?? "ref", reused: (e == null ? void 0 : e.reused) ?? "inline", external: (e == null ? void 0 : e.external) ?? void 0 };
}
function O(e, i, n = { path: [], schemaPath: [] }) {
  var s, m;
  var a;
  let t = e._zod.def, r = i.seen.get(e);
  if (r)
    return r.count++, n.schemaPath.includes(e) && (r.cycle = n.path), r.schema;
  let o = { schema: {}, count: 1, cycle: void 0, path: n.path };
  i.seen.set(e, o);
  let u = (m = (s = e._zod).toJSONSchema) == null ? void 0 : m.call(s);
  if (u) o.schema = u;
  else {
    let c = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
    if (e._zod.processJSONSchema) e._zod.processJSONSchema(i, o.schema, c);
    else {
      let $ = o.schema, y = i.processors[t.type];
      if (!y) throw Error(`[toJSONSchema]: Non-representable type encountered: ${t.type}`);
      y(e, i, $, c);
    }
    let p = e._zod.parent;
    p && (o.ref || (o.ref = p), O(p, i, c), i.seen.get(p).isParent = !0);
  }
  let d = i.metadataRegistry.get(e);
  return d && Object.assign(o.schema, d), i.io === "input" && q(e) && (delete o.schema.examples, delete o.schema.default), i.io === "input" && o.schema._prefault && ((a = o.schema).default ?? (a.default = o.schema._prefault)), delete o.schema._prefault, i.seen.get(e).schema;
}
function Re(e, i) {
  var o, u, d, s;
  let n = e.seen.get(i);
  if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
  let a = /* @__PURE__ */ new Map();
  for (let m of e.seen.entries()) {
    let c = (o = e.metadataRegistry.get(m[0])) == null ? void 0 : o.id;
    if (c) {
      let p = a.get(c);
      if (p && p !== m[0]) throw Error(`Duplicate schema id "${c}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      a.set(c, m[0]);
    }
  }
  let t = (m) => {
    var y;
    let c = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      let x = (y = e.external.registry.get(m[0])) == null ? void 0 : y.id, z = e.external.uri ?? ((W) => W);
      if (x) return { ref: z(x) };
      let P = m[1].defId ?? m[1].schema.id ?? `schema${e.counter++}`;
      return m[1].defId = P, { defId: P, ref: `${z("__shared")}#/${c}/${P}` };
    }
    if (m[1] === n) return { ref: "#" };
    let p = `#/${c}/`, $ = m[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: $, ref: p + $ };
  }, r = (m) => {
    if (m[1].schema.$ref) return;
    let c = m[1], { ref: p, defId: $ } = t(m);
    c.def = { ...c.schema }, $ && (c.defId = $);
    let y = c.schema;
    for (let x in y) delete y[x];
    y.$ref = p;
  };
  if (e.cycles === "throw") for (let m of e.seen.entries()) {
    let c = m[1];
    if (c.cycle) throw Error(`Cycle detected: #/${(u = c.cycle) == null ? void 0 : u.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
  }
  for (let m of e.seen.entries()) {
    let c = m[1];
    if (i === m[0]) {
      r(m);
      continue;
    }
    if (e.external) {
      let p = (d = e.external.registry.get(m[0])) == null ? void 0 : d.id;
      if (i !== m[0] && p) {
        r(m);
        continue;
      }
    }
    if ((s = e.metadataRegistry.get(m[0])) != null && s.id) {
      r(m);
      continue;
    }
    if (c.cycle) {
      r(m);
      continue;
    }
    if (c.count > 1 && e.reused === "ref") {
      r(m);
      continue;
    }
  }
}
function Ce(e, i) {
  var o, u, d;
  let n = e.seen.get(i);
  if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
  let a = (s) => {
    let m = e.seen.get(s);
    if (m.ref === null) return;
    let c = m.def ?? m.schema, p = { ...c }, $ = m.ref;
    if (m.ref = null, $) {
      a($);
      let x = e.seen.get($), z = x.schema;
      if (z.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (c.allOf = c.allOf ?? [], c.allOf.push(z)) : Object.assign(c, z), Object.assign(c, p), s._zod.parent === $) for (let P in c)
        P === "$ref" || P === "allOf" || P in p || delete c[P];
      if (z.$ref) for (let P in c)
        P === "$ref" || P === "allOf" || P in x.def && JSON.stringify(c[P]) === JSON.stringify(x.def[P]) && delete c[P];
    }
    let y = s._zod.parent;
    if (y && y !== $) {
      a(y);
      let x = e.seen.get(y);
      if (x != null && x.schema.$ref && (c.$ref = x.schema.$ref, x.def))
        for (let z in c)
          z === "$ref" || z === "allOf" || z in x.def && JSON.stringify(c[z]) === JSON.stringify(x.def[z]) && delete c[z];
    }
    e.override({ zodSchema: s, jsonSchema: c, path: m.path ?? [] });
  };
  for (let s of [...e.seen.entries()].reverse()) a(s[0]);
  let t = {};
  if (e.target === "draft-2020-12" ? t.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? t.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? t.$schema = "http://json-schema.org/draft-04/schema#" : e.target, (o = e.external) != null && o.uri) {
    let s = (u = e.external.registry.get(i)) == null ? void 0 : u.id;
    if (!s) throw Error("Schema is missing an `id` property");
    t.$id = e.external.uri(s);
  }
  Object.assign(t, n.def ?? n.schema);
  let r = ((d = e.external) == null ? void 0 : d.defs) ?? {};
  for (let s of e.seen.entries()) {
    let m = s[1];
    m.def && m.defId && (r[m.defId] = m.def);
  }
  e.external || Object.keys(r).length > 0 && (e.target === "draft-2020-12" ? t.$defs = r : t.definitions = r);
  try {
    let s = JSON.parse(JSON.stringify(t));
    return Object.defineProperty(s, "~standard", { value: { ...i["~standard"], jsonSchema: { input: Ke(i, "input", e.processors), output: Ke(i, "output", e.processors) } }, enumerable: !1, writable: !1 }), s;
  } catch {
    throw Error("Error converting schema to JSON.");
  }
}
function q(e, i) {
  let n = i ?? { seen: /* @__PURE__ */ new Set() };
  if (n.seen.has(e)) return !1;
  n.seen.add(e);
  let a = e._zod.def;
  if (a.type === "transform") return !0;
  if (a.type === "array") return q(a.element, n);
  if (a.type === "set") return q(a.valueType, n);
  if (a.type === "lazy") return q(a.getter(), n);
  if (a.type === "promise" || a.type === "optional" || a.type === "nonoptional" || a.type === "nullable" || a.type === "readonly" || a.type === "default" || a.type === "prefault") return q(a.innerType, n);
  if (a.type === "intersection") return q(a.left, n) || q(a.right, n);
  if (a.type === "record" || a.type === "map") return q(a.keyType, n) || q(a.valueType, n);
  if (a.type === "pipe") return q(a.in, n) || q(a.out, n);
  if (a.type === "object") {
    for (let t in a.shape) if (q(a.shape[t], n)) return !0;
    return !1;
  }
  if (a.type === "union") {
    for (let t of a.options) if (q(t, n)) return !0;
    return !1;
  }
  if (a.type === "tuple") {
    for (let t of a.items) if (q(t, n)) return !0;
    return !!(a.rest && q(a.rest, n));
  }
  return !1;
}
var Rs = (e, i = {}) => (n) => {
  let a = Ae({ ...n, processors: i });
  return O(e, a), Re(a, e), Ce(a, e);
}, Ke = (e, i, n = {}) => (a) => {
  let { libraryOptions: t, target: r } = a ?? {}, o = Ae({ ...t ?? {}, target: r, io: i, processors: n });
  return O(e, o), Re(o, e), Ce(o, e);
}, Xp = { guid: "uuid", url: "uri", datetime: "date-time", json_string: "json-string", regex: "" }, Cs = (e, i, n, a) => {
  let t = n;
  t.type = "string";
  let { minimum: r, maximum: o, format: u, patterns: d, contentEncoding: s } = e._zod.bag;
  if (typeof r == "number" && (t.minLength = r), typeof o == "number" && (t.maxLength = o), u && (t.format = Xp[u] ?? u, t.format === "" && delete t.format, u === "time" && delete t.format), s && (t.contentEncoding = s), d && d.size > 0) {
    let m = [...d];
    m.length === 1 ? t.pattern = m[0].source : m.length > 1 && (t.allOf = [...m.map((c) => ({ ...i.target === "draft-07" || i.target === "draft-04" || i.target === "openapi-3.0" ? { type: "string" } : {}, pattern: c.source }))]);
  }
}, Ls = (e, i, n, a) => {
  let t = n, { minimum: r, maximum: o, format: u, multipleOf: d, exclusiveMaximum: s, exclusiveMinimum: m } = e._zod.bag;
  typeof u == "string" && u.includes("int") ? t.type = "integer" : t.type = "number", typeof m == "number" && (i.target === "draft-04" || i.target === "openapi-3.0" ? (t.minimum = m, t.exclusiveMinimum = !0) : t.exclusiveMinimum = m), typeof r == "number" && (t.minimum = r, typeof m == "number" && i.target !== "draft-04" && (m >= r ? delete t.minimum : delete t.exclusiveMinimum)), typeof s == "number" && (i.target === "draft-04" || i.target === "openapi-3.0" ? (t.maximum = s, t.exclusiveMaximum = !0) : t.exclusiveMaximum = s), typeof o == "number" && (t.maximum = o, typeof s == "number" && i.target !== "draft-04" && (s <= o ? delete t.maximum : delete t.exclusiveMaximum)), typeof d == "number" && (t.multipleOf = d);
}, Js = (e, i, n, a) => {
  n.type = "boolean";
}, Ms = (e, i, n, a) => {
  if (i.unrepresentable === "throw") throw Error("BigInt cannot be represented in JSON Schema");
}, Fs = (e, i, n, a) => {
  if (i.unrepresentable === "throw") throw Error("Symbols cannot be represented in JSON Schema");
}, qs = (e, i, n, a) => {
  i.target === "openapi-3.0" ? (n.type = "string", n.nullable = !0, n.enum = [null]) : n.type = "null";
}, Ws = (e, i, n, a) => {
  if (i.unrepresentable === "throw") throw Error("Undefined cannot be represented in JSON Schema");
}, Vs = (e, i, n, a) => {
  if (i.unrepresentable === "throw") throw Error("Void cannot be represented in JSON Schema");
}, Gs = (e, i, n, a) => {
  n.not = {};
}, Ks = (e, i, n, a) => {
}, Bs = (e, i, n, a) => {
}, Hs = (e, i, n, a) => {
  if (i.unrepresentable === "throw") throw Error("Date cannot be represented in JSON Schema");
}, Xs = (e, i, n, a) => {
  let t = e._zod.def, r = Li(t.entries);
  r.every((o) => typeof o == "number") && (n.type = "number"), r.every((o) => typeof o == "string") && (n.type = "string"), n.enum = r;
}, Ys = (e, i, n, a) => {
  let t = e._zod.def, r = [];
  for (let o of t.values) if (o === void 0) {
    if (i.unrepresentable === "throw") throw Error("Literal `undefined` cannot be represented in JSON Schema");
  } else if (typeof o == "bigint") {
    if (i.unrepresentable === "throw") throw Error("BigInt literals cannot be represented in JSON Schema");
    r.push(Number(o));
  } else r.push(o);
  if (r.length !== 0) if (r.length === 1) {
    let o = r[0];
    n.type = o === null ? "null" : typeof o, i.target === "draft-04" || i.target === "openapi-3.0" ? n.enum = [o] : n.const = o;
  } else
    r.every((o) => typeof o == "number") && (n.type = "number"), r.every((o) => typeof o == "string") && (n.type = "string"), r.every((o) => typeof o == "boolean") && (n.type = "boolean"), r.every((o) => o === null) && (n.type = "null"), n.enum = r;
}, Qs = (e, i, n, a) => {
  if (i.unrepresentable === "throw") throw Error("NaN cannot be represented in JSON Schema");
}, el = (e, i, n, a) => {
  let t = n, r = e._zod.pattern;
  if (!r) throw Error("Pattern not found in template literal");
  t.type = "string", t.pattern = r.source;
}, tl = (e, i, n, a) => {
  let t = n, r = { type: "string", format: "binary", contentEncoding: "binary" }, { minimum: o, maximum: u, mime: d } = e._zod.bag;
  o !== void 0 && (r.minLength = o), u !== void 0 && (r.maxLength = u), d ? d.length === 1 ? (r.contentMediaType = d[0], Object.assign(t, r)) : (Object.assign(t, r), t.anyOf = d.map((s) => ({ contentMediaType: s }))) : Object.assign(t, r);
}, il = (e, i, n, a) => {
  n.type = "boolean";
}, nl = (e, i, n, a) => {
  if (i.unrepresentable === "throw") throw Error("Custom types cannot be represented in JSON Schema");
}, rl = (e, i, n, a) => {
  if (i.unrepresentable === "throw") throw Error("Function types cannot be represented in JSON Schema");
}, al = (e, i, n, a) => {
  if (i.unrepresentable === "throw") throw Error("Transforms cannot be represented in JSON Schema");
}, ol = (e, i, n, a) => {
  if (i.unrepresentable === "throw") throw Error("Map cannot be represented in JSON Schema");
}, ul = (e, i, n, a) => {
  if (i.unrepresentable === "throw") throw Error("Set cannot be represented in JSON Schema");
}, sl = (e, i, n, a) => {
  let t = n, r = e._zod.def, { minimum: o, maximum: u } = e._zod.bag;
  typeof o == "number" && (t.minItems = o), typeof u == "number" && (t.maxItems = u), t.type = "array", t.items = O(r.element, i, { ...a, path: [...a.path, "items"] });
}, ll = (e, i, n, a) => {
  var s;
  let t = n, r = e._zod.def;
  t.type = "object", t.properties = {};
  let o = r.shape;
  for (let m in o) t.properties[m] = O(o[m], i, { ...a, path: [...a.path, "properties", m] });
  let u = new Set(Object.keys(o)), d = new Set([...u].filter((m) => {
    let c = r.shape[m]._zod;
    return i.io === "input" ? c.optin === void 0 : c.optout === void 0;
  }));
  d.size > 0 && (t.required = Array.from(d)), ((s = r.catchall) == null ? void 0 : s._zod.def.type) === "never" ? t.additionalProperties = !1 : r.catchall ? r.catchall && (t.additionalProperties = O(r.catchall, i, { ...a, path: [...a.path, "additionalProperties"] })) : i.io === "output" && (t.additionalProperties = !1);
}, Rn = (e, i, n, a) => {
  let t = e._zod.def, r = t.inclusive === !1, o = t.options.map((u, d) => O(u, i, { ...a, path: [...a.path, r ? "oneOf" : "anyOf", d] }));
  r ? n.oneOf = o : n.anyOf = o;
}, dl = (e, i, n, a) => {
  let t = e._zod.def, r = O(t.left, i, { ...a, path: [...a.path, "allOf", 0] }), o = O(t.right, i, { ...a, path: [...a.path, "allOf", 1] }), u = (s) => "allOf" in s && Object.keys(s).length === 1, d = [...u(r) ? r.allOf : [r], ...u(o) ? o.allOf : [o]];
  n.allOf = d;
}, cl = (e, i, n, a) => {
  let t = n, r = e._zod.def;
  t.type = "array";
  let o = i.target === "draft-2020-12" ? "prefixItems" : "items", u = i.target === "draft-2020-12" || i.target === "openapi-3.0" ? "items" : "additionalItems", d = r.items.map((p, $) => O(p, i, { ...a, path: [...a.path, o, $] })), s = r.rest ? O(r.rest, i, { ...a, path: [...a.path, u, ...i.target === "openapi-3.0" ? [r.items.length] : []] }) : null;
  i.target === "draft-2020-12" ? (t.prefixItems = d, s && (t.items = s)) : i.target === "openapi-3.0" ? (t.items = { anyOf: d }, s && t.items.anyOf.push(s), t.minItems = d.length, !s && (t.maxItems = d.length)) : (t.items = d, s && (t.additionalItems = s));
  let { minimum: m, maximum: c } = e._zod.bag;
  typeof m == "number" && (t.minItems = m), typeof c == "number" && (t.maxItems = c);
}, ml = (e, i, n, a) => {
  var s;
  let t = n, r = e._zod.def;
  t.type = "object";
  let o = r.keyType, u = (s = o._zod.bag) == null ? void 0 : s.patterns;
  if (r.mode === "loose" && u && u.size > 0) {
    let m = O(r.valueType, i, { ...a, path: [...a.path, "patternProperties", "*"] });
    t.patternProperties = {};
    for (let c of u) t.patternProperties[c.source] = m;
  } else
    (i.target === "draft-07" || i.target === "draft-2020-12") && (t.propertyNames = O(r.keyType, i, { ...a, path: [...a.path, "propertyNames"] })), t.additionalProperties = O(r.valueType, i, { ...a, path: [...a.path, "additionalProperties"] });
  let d = o._zod.values;
  if (d) {
    let m = [...d].filter((c) => typeof c == "string" || typeof c == "number");
    m.length > 0 && (t.required = m);
  }
}, fl = (e, i, n, a) => {
  let t = e._zod.def, r = O(t.innerType, i, a), o = i.seen.get(e);
  i.target === "openapi-3.0" ? (o.ref = t.innerType, n.nullable = !0) : n.anyOf = [r, { type: "null" }];
}, pl = (e, i, n, a) => {
  let t = e._zod.def;
  O(t.innerType, i, a);
  let r = i.seen.get(e);
  r.ref = t.innerType;
}, vl = (e, i, n, a) => {
  let t = e._zod.def;
  O(t.innerType, i, a);
  let r = i.seen.get(e);
  r.ref = t.innerType, n.default = JSON.parse(JSON.stringify(t.defaultValue));
}, gl = (e, i, n, a) => {
  let t = e._zod.def;
  O(t.innerType, i, a);
  let r = i.seen.get(e);
  r.ref = t.innerType, i.io === "input" && (n._prefault = JSON.parse(JSON.stringify(t.defaultValue)));
}, hl = (e, i, n, a) => {
  let t = e._zod.def;
  O(t.innerType, i, a);
  let r = i.seen.get(e);
  r.ref = t.innerType;
  let o;
  try {
    o = t.catchValue(void 0);
  } catch {
    throw Error("Dynamic catch values are not supported in JSON Schema");
  }
  n.default = o;
}, $l = (e, i, n, a) => {
  let t = e._zod.def, r = i.io === "input" ? t.in._zod.def.type === "transform" ? t.out : t.in : t.out;
  O(r, i, a);
  let o = i.seen.get(e);
  o.ref = r;
}, bl = (e, i, n, a) => {
  let t = e._zod.def;
  O(t.innerType, i, a);
  let r = i.seen.get(e);
  r.ref = t.innerType, n.readOnly = !0;
}, yl = (e, i, n, a) => {
  let t = e._zod.def;
  O(t.innerType, i, a);
  let r = i.seen.get(e);
  r.ref = t.innerType;
}, Cn = (e, i, n, a) => {
  let t = e._zod.def;
  O(t.innerType, i, a);
  let r = i.seen.get(e);
  r.ref = t.innerType;
}, _l = (e, i, n, a) => {
  let t = e._zod.innerType;
  O(t, i, a);
  let r = i.seen.get(e);
  r.ref = t;
}, Ri = { string: Cs, number: Ls, boolean: Js, bigint: Ms, symbol: Fs, null: qs, undefined: Ws, void: Vs, never: Gs, any: Ks, unknown: Bs, date: Hs, enum: Xs, literal: Ys, nan: Qs, template_literal: el, file: tl, success: il, custom: nl, function: rl, transform: al, map: ol, set: ul, array: sl, object: ll, union: Rn, intersection: dl, tuple: cl, record: ml, nullable: fl, nonoptional: pl, default: vl, prefault: gl, catch: hl, pipe: $l, readonly: bl, promise: yl, optional: Cn, lazy: _l };
function kl(e, i) {
  if ("_idmap" in e) {
    let a = e, t = Ae({ ...i, processors: Ri }), r = {};
    for (let d of a._idmap.entries()) {
      let [s, m] = d;
      O(m, t);
    }
    let o = {}, u = { registry: a, uri: i == null ? void 0 : i.uri, defs: r };
    t.external = u;
    for (let d of a._idmap.entries()) {
      let [s, m] = d;
      Re(t, m), o[s] = Ce(t, m);
    }
    if (Object.keys(r).length > 0) {
      let d = t.target === "draft-2020-12" ? "$defs" : "definitions";
      o.__shared = { [d]: r };
    }
    return { schemas: o };
  }
  let n = Ae({ ...i, processors: Ri });
  return O(e, n), Re(n, e), Ce(n, e);
}
class Yp {
  get metadataRegistry() {
    return this.ctx.metadataRegistry;
  }
  get target() {
    return this.ctx.target;
  }
  get unrepresentable() {
    return this.ctx.unrepresentable;
  }
  get override() {
    return this.ctx.override;
  }
  get io() {
    return this.ctx.io;
  }
  get counter() {
    return this.ctx.counter;
  }
  set counter(i) {
    this.ctx.counter = i;
  }
  get seen() {
    return this.ctx.seen;
  }
  constructor(i) {
    let n = (i == null ? void 0 : i.target) ?? "draft-2020-12";
    n === "draft-4" && (n = "draft-04"), n === "draft-7" && (n = "draft-07"), this.ctx = Ae({ processors: Ri, target: n, ...(i == null ? void 0 : i.metadata) && { metadata: i.metadata }, ...(i == null ? void 0 : i.unrepresentable) && { unrepresentable: i.unrepresentable }, ...(i == null ? void 0 : i.override) && { override: i.override }, ...(i == null ? void 0 : i.io) && { io: i.io } });
  }
  process(i, n = { path: [], schemaPath: [] }) {
    return O(i, this.ctx, n);
  }
  emit(i, n) {
    n && (n.cycles && (this.ctx.cycles = n.cycles), n.reused && (this.ctx.reused = n.reused), n.external && (this.ctx.external = n.external)), Re(this.ctx, i);
    let a = Ce(this.ctx, i), { "~standard": t, ...r } = a;
    return r;
  }
}
var Qp = {}, Il = {};
le(Il, { xor: () => Nd, xid: () => td, void: () => Sd, uuidv7: () => Gl, uuidv6: () => Vl, uuidv4: () => Wl, uuid: () => ql, url: () => Kl, unknown: () => we, union: () => yi, undefined: () => xd, ulid: () => ed, uint64: () => kd, uint32: () => bd, tuple: () => sr, transform: () => ki, templateLiteral: () => Wd, symbol: () => Id, superRefine: () => Er, success: () => Md, stringbool: () => Yd, stringFormat: () => md, string: () => Pt, strictObject: () => jd, set: () => Ad, refine: () => Dr, record: () => lr, readonly: () => Ur, promise: () => Vd, preprocess: () => ec, prefault: () => _r, pipe: () => Ye, partialRecord: () => Dd, optional: () => He, object: () => Od, number: () => Vn, nullish: () => Jd, nullable: () => Xe, null: () => Xn, nonoptional: () => kr, never: () => $i, nativeEnum: () => Rd, nanoid: () => Xl, nan: () => Fd, meta: () => Hd, map: () => Td, mac: () => rd, looseRecord: () => Ed, looseObject: () => Zd, literal: () => Cd, lazy: () => Zr, ksuid: () => id, keyof: () => Ud, jwt: () => cd, json: () => Qd, ipv6: () => ad, ipv4: () => nd, intersection: () => or, int64: () => _d, int32: () => $d, int: () => Dt, instanceof: () => Xd, httpUrl: () => Bl, hostname: () => fd, hex: () => pd, hash: () => vd, guid: () => Fl, function: () => Et, float64: () => hd, float32: () => gd, file: () => Ld, exactOptional: () => gr, enum: () => _i, emoji: () => Hl, email: () => Ml, e164: () => dd, discriminatedUnion: () => Pd, describe: () => Bd, date: () => zd, custom: () => Kd, cuid2: () => Ql, cuid: () => Yl, codec: () => qd, cidrv6: () => ud, cidrv4: () => od, check: () => Gd, catch: () => wr, boolean: () => Gn, bigint: () => yd, base64url: () => ld, base64: () => sd, array: () => $t, any: () => wd, _function: () => Et, _default: () => br, _ZodString: () => ei, ZodXor: () => nr, ZodXID: () => ui, ZodVoid: () => tr, ZodUnknown: () => Qn, ZodUnion: () => yt, ZodUndefined: () => Bn, ZodUUID: () => oe, ZodURL: () => pt, ZodULID: () => oi, ZodType: () => I, ZodTuple: () => ur, ZodTransform: () => pr, ZodTemplateLiteral: () => Or, ZodSymbol: () => Kn, ZodSuccess: () => Ir, ZodStringFormat: () => N, ZodString: () => ft, ZodSet: () => cr, ZodRecord: () => _t, ZodReadonly: () => zr, ZodPromise: () => Nr, ZodPrefault: () => yr, ZodPipe: () => wi, ZodOptional: () => Ii, ZodObject: () => bt, ZodNumberFormat: () => Ue, ZodNumber: () => vt, ZodNullable: () => hr, ZodNull: () => Hn, ZodNonOptional: () => xi, ZodNever: () => er, ZodNanoID: () => ni, ZodNaN: () => Sr, ZodMap: () => dr, ZodMAC: () => Wn, ZodLiteral: () => mr, ZodLazy: () => jr, ZodKSUID: () => si, ZodJWT: () => gi, ZodIntersection: () => ar, ZodIPv6: () => di, ZodIPv4: () => li, ZodGUID: () => Be, ZodFunction: () => Pr, ZodFile: () => fr, ZodExactOptional: () => vr, ZodEnum: () => Le, ZodEmoji: () => ii, ZodEmail: () => ti, ZodE164: () => vi, ZodDiscriminatedUnion: () => rr, ZodDefault: () => $r, ZodDate: () => bi, ZodCustomStringFormat: () => Me, ZodCustom: () => kt, ZodCodec: () => Si, ZodCatch: () => xr, ZodCUID2: () => ai, ZodCUID: () => ri, ZodCIDRv6: () => mi, ZodCIDRv4: () => ci, ZodBoolean: () => gt, ZodBigIntFormat: () => hi, ZodBigInt: () => ht, ZodBase64URL: () => pi, ZodBase64: () => fi, ZodArray: () => ir, ZodAny: () => Yn });
var xl = {};
le(xl, { uppercase: () => qt, trim: () => Ht, toUpperCase: () => Yt, toLowerCase: () => Xt, startsWith: () => Vt, slugify: () => Qt, size: () => lt, regex: () => Mt, property: () => An, positive: () => Pn, overwrite: () => ce, normalize: () => Bt, nonpositive: () => En, nonnegative: () => Tn, negative: () => Dn, multipleOf: () => Te, minSize: () => ve, minLength: () => xe, mime: () => Kt, maxSize: () => Je, maxLength: () => dt, lte: () => ee, lt: () => fe, lowercase: () => Ft, length: () => ct, includes: () => Wt, gte: () => V, gt: () => pe, endsWith: () => Gt });
var Ln = {};
le(Ln, { time: () => zl, duration: () => Ul, datetime: () => wl, date: () => Sl, ZodISOTime: () => Fn, ZodISODuration: () => qn, ZodISODateTime: () => Jn, ZodISODate: () => Mn });
var Jn = f("ZodISODateTime", (e, i) => {
  qo.init(e, i), N.init(e, i);
});
function wl(e) {
  return is(Jn, e);
}
var Mn = f("ZodISODate", (e, i) => {
  Wo.init(e, i), N.init(e, i);
});
function Sl(e) {
  return ns(Mn, e);
}
var Fn = f("ZodISOTime", (e, i) => {
  Vo.init(e, i), N.init(e, i);
});
function zl(e) {
  return rs(Fn, e);
}
var qn = f("ZodISODuration", (e, i) => {
  Go.init(e, i), N.init(e, i);
});
function Ul(e) {
  return as(qn, e);
}
var Ol = (e, i) => {
  Mi.init(e, i), e.name = "ZodError", Object.defineProperties(e, { format: { value: (n) => qi(e, n) }, flatten: { value: (n) => Fi(e, n) }, addIssue: { value: (n) => {
    e.issues.push(n), e.message = JSON.stringify(e.issues, Ut, 2);
  } }, addIssues: { value: (n) => {
    e.issues.push(...n), e.message = JSON.stringify(e.issues, Ut, 2);
  } }, isEmpty: { get() {
    return e.issues.length === 0;
  } } });
}, ev = f("ZodError", Ol), B = f("ZodError", Ol, { Parent: Error }), jl = tt(B), Zl = it(B), Nl = nt(B), Pl = rt(B), Dl = Wi(B), El = Vi(B), Tl = Gi(B), Al = Ki(B), Rl = Bi(B), Cl = Hi(B), Ll = Xi(B), Jl = Yi(B), I = f("ZodType", (e, i) => (k.init(e, i), Object.assign(e["~standard"], { jsonSchema: { input: Ke(e, "input"), output: Ke(e, "output") } }), e.toJSONSchema = Rs(e, {}), e.def = i, e.type = i.type, Object.defineProperty(e, "_def", { value: i }), e.check = (...n) => e.clone(S.mergeDefs(i, { checks: [...i.checks ?? [], ...n.map((a) => typeof a == "function" ? { _zod: { check: a, def: { check: "custom" }, onattach: [] } } : a)] }), { parent: !0 }), e.with = e.check, e.clone = (n, a) => ie(e, n, a), e.brand = () => e, e.register = (n, a) => (n.add(e, a), e), e.parse = (n, a) => jl(e, n, a, { callee: e.parse }), e.safeParse = (n, a) => Nl(e, n, a), e.parseAsync = async (n, a) => Zl(e, n, a, { callee: e.parseAsync }), e.safeParseAsync = async (n, a) => Pl(e, n, a), e.spa = e.safeParseAsync, e.encode = (n, a) => Dl(e, n, a), e.decode = (n, a) => El(e, n, a), e.encodeAsync = async (n, a) => Tl(e, n, a), e.decodeAsync = async (n, a) => Al(e, n, a), e.safeEncode = (n, a) => Rl(e, n, a), e.safeDecode = (n, a) => Cl(e, n, a), e.safeEncodeAsync = async (n, a) => Ll(e, n, a), e.safeDecodeAsync = async (n, a) => Jl(e, n, a), e.refine = (n, a) => e.check(Dr(n, a)), e.superRefine = (n) => e.check(Er(n)), e.overwrite = (n) => e.check(ce(n)), e.optional = () => He(e), e.exactOptional = () => gr(e), e.nullable = () => Xe(e), e.nullish = () => He(Xe(e)), e.nonoptional = (n) => kr(e, n), e.array = () => $t(e), e.or = (n) => yi([e, n]), e.and = (n) => or(e, n), e.transform = (n) => Ye(e, ki(n)), e.default = (n) => br(e, n), e.prefault = (n) => _r(e, n), e.catch = (n) => wr(e, n), e.pipe = (n) => Ye(e, n), e.readonly = () => Ur(e), e.describe = (n) => {
  let a = e.clone();
  return Q.add(a, { description: n }), a;
}, Object.defineProperty(e, "description", { get() {
  var n;
  return (n = Q.get(e)) == null ? void 0 : n.description;
}, configurable: !0 }), e.meta = (...n) => {
  if (n.length === 0) return Q.get(e);
  let a = e.clone();
  return Q.add(a, n[0]), a;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (n) => n(e), e)), ei = f("_ZodString", (e, i) => {
  st.init(e, i), I.init(e, i), e._zod.processJSONSchema = (a, t, r) => Cs(e, a, t);
  let n = e._zod.bag;
  e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, e.regex = (...a) => e.check(Mt(...a)), e.includes = (...a) => e.check(Wt(...a)), e.startsWith = (...a) => e.check(Vt(...a)), e.endsWith = (...a) => e.check(Gt(...a)), e.min = (...a) => e.check(xe(...a)), e.max = (...a) => e.check(dt(...a)), e.length = (...a) => e.check(ct(...a)), e.nonempty = (...a) => e.check(xe(1, ...a)), e.lowercase = (a) => e.check(Ft(a)), e.uppercase = (a) => e.check(qt(a)), e.trim = () => e.check(Ht()), e.normalize = (...a) => e.check(Bt(...a)), e.toLowerCase = () => e.check(Xt()), e.toUpperCase = () => e.check(Yt()), e.slugify = () => e.check(Qt());
}), ft = f("ZodString", (e, i) => {
  st.init(e, i), ei.init(e, i), e.email = (n) => e.check(fn(ti, n)), e.url = (n) => e.check(Jt(pt, n)), e.jwt = (n) => e.check(Nn(gi, n)), e.emoji = (n) => e.check($n(ii, n)), e.guid = (n) => e.check(Nt(Be, n)), e.uuid = (n) => e.check(pn(oe, n)), e.uuidv4 = (n) => e.check(vn(oe, n)), e.uuidv6 = (n) => e.check(gn(oe, n)), e.uuidv7 = (n) => e.check(hn(oe, n)), e.nanoid = (n) => e.check(bn(ni, n)), e.guid = (n) => e.check(Nt(Be, n)), e.cuid = (n) => e.check(yn(ri, n)), e.cuid2 = (n) => e.check(_n(ai, n)), e.ulid = (n) => e.check(kn(oi, n)), e.base64 = (n) => e.check(On(fi, n)), e.base64url = (n) => e.check(jn(pi, n)), e.xid = (n) => e.check(In(ui, n)), e.ksuid = (n) => e.check(xn(si, n)), e.ipv4 = (n) => e.check(wn(li, n)), e.ipv6 = (n) => e.check(Sn(di, n)), e.cidrv4 = (n) => e.check(zn(ci, n)), e.cidrv6 = (n) => e.check(Un(mi, n)), e.e164 = (n) => e.check(Zn(vi, n)), e.datetime = (n) => e.check(wl(n)), e.date = (n) => e.check(Sl(n)), e.time = (n) => e.check(zl(n)), e.duration = (n) => e.check(Ul(n));
});
function Pt(e) {
  return Yu(ft, e);
}
var N = f("ZodStringFormat", (e, i) => {
  Z.init(e, i), ei.init(e, i);
}), ti = f("ZodEmail", (e, i) => {
  Eo.init(e, i), N.init(e, i);
});
function Ml(e) {
  return fn(ti, e);
}
var Be = f("ZodGUID", (e, i) => {
  Po.init(e, i), N.init(e, i);
});
function Fl(e) {
  return Nt(Be, e);
}
var oe = f("ZodUUID", (e, i) => {
  Do.init(e, i), N.init(e, i);
});
function ql(e) {
  return pn(oe, e);
}
function Wl(e) {
  return vn(oe, e);
}
function Vl(e) {
  return gn(oe, e);
}
function Gl(e) {
  return hn(oe, e);
}
var pt = f("ZodURL", (e, i) => {
  To.init(e, i), N.init(e, i);
});
function Kl(e) {
  return Jt(pt, e);
}
function Bl(e) {
  return Jt(pt, { protocol: /^https?$/, hostname: ze.domain, ...S.normalizeParams(e) });
}
var ii = f("ZodEmoji", (e, i) => {
  Ao.init(e, i), N.init(e, i);
});
function Hl(e) {
  return $n(ii, e);
}
var ni = f("ZodNanoID", (e, i) => {
  Ro.init(e, i), N.init(e, i);
});
function Xl(e) {
  return bn(ni, e);
}
var ri = f("ZodCUID", (e, i) => {
  Co.init(e, i), N.init(e, i);
});
function Yl(e) {
  return yn(ri, e);
}
var ai = f("ZodCUID2", (e, i) => {
  Lo.init(e, i), N.init(e, i);
});
function Ql(e) {
  return _n(ai, e);
}
var oi = f("ZodULID", (e, i) => {
  Jo.init(e, i), N.init(e, i);
});
function ed(e) {
  return kn(oi, e);
}
var ui = f("ZodXID", (e, i) => {
  Mo.init(e, i), N.init(e, i);
});
function td(e) {
  return In(ui, e);
}
var si = f("ZodKSUID", (e, i) => {
  Fo.init(e, i), N.init(e, i);
});
function id(e) {
  return xn(si, e);
}
var li = f("ZodIPv4", (e, i) => {
  Ko.init(e, i), N.init(e, i);
});
function nd(e) {
  return wn(li, e);
}
var Wn = f("ZodMAC", (e, i) => {
  Ho.init(e, i), N.init(e, i);
});
function rd(e) {
  return es(Wn, e);
}
var di = f("ZodIPv6", (e, i) => {
  Bo.init(e, i), N.init(e, i);
});
function ad(e) {
  return Sn(di, e);
}
var ci = f("ZodCIDRv4", (e, i) => {
  Xo.init(e, i), N.init(e, i);
});
function od(e) {
  return zn(ci, e);
}
var mi = f("ZodCIDRv6", (e, i) => {
  Yo.init(e, i), N.init(e, i);
});
function ud(e) {
  return Un(mi, e);
}
var fi = f("ZodBase64", (e, i) => {
  Qo.init(e, i), N.init(e, i);
});
function sd(e) {
  return On(fi, e);
}
var pi = f("ZodBase64URL", (e, i) => {
  tu.init(e, i), N.init(e, i);
});
function ld(e) {
  return jn(pi, e);
}
var vi = f("ZodE164", (e, i) => {
  iu.init(e, i), N.init(e, i);
});
function dd(e) {
  return Zn(vi, e);
}
var gi = f("ZodJWT", (e, i) => {
  ru.init(e, i), N.init(e, i);
});
function cd(e) {
  return Nn(gi, e);
}
var Me = f("ZodCustomStringFormat", (e, i) => {
  au.init(e, i), N.init(e, i);
});
function md(e, i, n = {}) {
  return mt(Me, e, i, n);
}
function fd(e) {
  return mt(Me, "hostname", ze.hostname, e);
}
function pd(e) {
  return mt(Me, "hex", ze.hex, e);
}
function vd(e, i) {
  let n = (i == null ? void 0 : i.enc) ?? "hex", a = `${e}_${n}`, t = ze[a];
  if (!t) throw Error(`Unrecognized hash format: ${a}`);
  return mt(Me, a, t, i);
}
var vt = f("ZodNumber", (e, i) => {
  an.init(e, i), I.init(e, i), e._zod.processJSONSchema = (a, t, r) => Ls(e, a, t), e.gt = (a, t) => e.check(pe(a, t)), e.gte = (a, t) => e.check(V(a, t)), e.min = (a, t) => e.check(V(a, t)), e.lt = (a, t) => e.check(fe(a, t)), e.lte = (a, t) => e.check(ee(a, t)), e.max = (a, t) => e.check(ee(a, t)), e.int = (a) => e.check(Dt(a)), e.safe = (a) => e.check(Dt(a)), e.positive = (a) => e.check(pe(0, a)), e.nonnegative = (a) => e.check(V(0, a)), e.negative = (a) => e.check(fe(0, a)), e.nonpositive = (a) => e.check(ee(0, a)), e.multipleOf = (a, t) => e.check(Te(a, t)), e.step = (a, t) => e.check(Te(a, t)), e.finite = () => e;
  let n = e._zod.bag;
  e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? 0.5), e.isFinite = !0, e.format = n.format ?? null;
});
function Vn(e) {
  return os(vt, e);
}
var Ue = f("ZodNumberFormat", (e, i) => {
  ou.init(e, i), vt.init(e, i);
});
function Dt(e) {
  return ss(Ue, e);
}
function gd(e) {
  return ls(Ue, e);
}
function hd(e) {
  return ds(Ue, e);
}
function $d(e) {
  return cs(Ue, e);
}
function bd(e) {
  return ms(Ue, e);
}
var gt = f("ZodBoolean", (e, i) => {
  on.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => Js(e, n, a);
});
function Gn(e) {
  return fs(gt, e);
}
var ht = f("ZodBigInt", (e, i) => {
  un.init(e, i), I.init(e, i), e._zod.processJSONSchema = (a, t, r) => Ms(e, a), e.gte = (a, t) => e.check(V(a, t)), e.min = (a, t) => e.check(V(a, t)), e.gt = (a, t) => e.check(pe(a, t)), e.gte = (a, t) => e.check(V(a, t)), e.min = (a, t) => e.check(V(a, t)), e.lt = (a, t) => e.check(fe(a, t)), e.lte = (a, t) => e.check(ee(a, t)), e.max = (a, t) => e.check(ee(a, t)), e.positive = (a) => e.check(pe(BigInt(0), a)), e.negative = (a) => e.check(fe(BigInt(0), a)), e.nonpositive = (a) => e.check(ee(BigInt(0), a)), e.nonnegative = (a) => e.check(V(BigInt(0), a)), e.multipleOf = (a, t) => e.check(Te(a, t));
  let n = e._zod.bag;
  e.minValue = n.minimum ?? null, e.maxValue = n.maximum ?? null, e.format = n.format ?? null;
});
function yd(e) {
  return vs(ht, e);
}
var hi = f("ZodBigIntFormat", (e, i) => {
  uu.init(e, i), ht.init(e, i);
});
function _d(e) {
  return hs(hi, e);
}
function kd(e) {
  return $s(hi, e);
}
var Kn = f("ZodSymbol", (e, i) => {
  su.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => Fs(e, n);
});
function Id(e) {
  return bs(Kn, e);
}
var Bn = f("ZodUndefined", (e, i) => {
  lu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => Ws(e, n);
});
function xd(e) {
  return ys(Bn, e);
}
var Hn = f("ZodNull", (e, i) => {
  du.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => qs(e, n, a);
});
function Xn(e) {
  return _s(Hn, e);
}
var Yn = f("ZodAny", (e, i) => {
  cu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => Ks();
});
function wd() {
  return ks(Yn);
}
var Qn = f("ZodUnknown", (e, i) => {
  mu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => Bs();
});
function we() {
  return Is(Qn);
}
var er = f("ZodNever", (e, i) => {
  fu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => Gs(e, n, a);
});
function $i(e) {
  return xs(er, e);
}
var tr = f("ZodVoid", (e, i) => {
  pu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => Vs(e, n);
});
function Sd(e) {
  return ws(tr, e);
}
var bi = f("ZodDate", (e, i) => {
  vu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (a, t, r) => Hs(e, a), e.min = (a, t) => e.check(V(a, t)), e.max = (a, t) => e.check(ee(a, t));
  let n = e._zod.bag;
  e.minDate = n.minimum ? new Date(n.minimum) : null, e.maxDate = n.maximum ? new Date(n.maximum) : null;
});
function zd(e) {
  return Ss(bi, e);
}
var ir = f("ZodArray", (e, i) => {
  gu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => sl(e, n, a, t), e.element = i.element, e.min = (n, a) => e.check(xe(n, a)), e.nonempty = (n) => e.check(xe(1, n)), e.max = (n, a) => e.check(dt(n, a)), e.length = (n, a) => e.check(ct(n, a)), e.unwrap = () => e.element;
});
function $t(e, i) {
  return Os(ir, e, i);
}
function Ud(e) {
  let i = e._zod.def.shape;
  return _i(Object.keys(i));
}
var bt = f("ZodObject", (e, i) => {
  yu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => ll(e, n, a, t), S.defineLazy(e, "shape", () => i.shape), e.keyof = () => _i(Object.keys(e._zod.def.shape)), e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: we() }), e.loose = () => e.clone({ ...e._zod.def, catchall: we() }), e.strict = () => e.clone({ ...e._zod.def, catchall: $i() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (n) => S.extend(e, n), e.safeExtend = (n) => S.safeExtend(e, n), e.merge = (n) => S.merge(e, n), e.pick = (n) => S.pick(e, n), e.omit = (n) => S.omit(e, n), e.partial = (...n) => S.partial(Ii, e, n[0]), e.required = (...n) => S.required(xi, e, n[0]);
});
function Od(e, i) {
  let n = { type: "object", shape: e ?? {}, ...S.normalizeParams(i) };
  return new bt(n);
}
function jd(e, i) {
  return new bt({ type: "object", shape: e, catchall: $i(), ...S.normalizeParams(i) });
}
function Zd(e, i) {
  return new bt({ type: "object", shape: e, catchall: we(), ...S.normalizeParams(i) });
}
var yt = f("ZodUnion", (e, i) => {
  Lt.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => Rn(e, n, a, t), e.options = i.options;
});
function yi(e, i) {
  return new yt({ type: "union", options: e, ...S.normalizeParams(i) });
}
var nr = f("ZodXor", (e, i) => {
  yt.init(e, i), _u.init(e, i), e._zod.processJSONSchema = (n, a, t) => Rn(e, n, a, t), e.options = i.options;
});
function Nd(e, i) {
  return new nr({ type: "union", options: e, inclusive: !1, ...S.normalizeParams(i) });
}
var rr = f("ZodDiscriminatedUnion", (e, i) => {
  yt.init(e, i), ku.init(e, i);
});
function Pd(e, i, n) {
  return new rr({ type: "union", options: i, discriminator: e, ...S.normalizeParams(n) });
}
var ar = f("ZodIntersection", (e, i) => {
  Iu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => dl(e, n, a, t);
});
function or(e, i) {
  return new ar({ type: "intersection", left: e, right: i });
}
var ur = f("ZodTuple", (e, i) => {
  sn.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => cl(e, n, a, t), e.rest = (n) => e.clone({ ...e._zod.def, rest: n });
});
function sr(e, i, n) {
  let a = i instanceof k, t = a ? n : i;
  return new ur({ type: "tuple", items: e, rest: a ? i : null, ...S.normalizeParams(t) });
}
var _t = f("ZodRecord", (e, i) => {
  xu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => ml(e, n, a, t), e.keyType = i.keyType, e.valueType = i.valueType;
});
function lr(e, i, n) {
  return new _t({ type: "record", keyType: e, valueType: i, ...S.normalizeParams(n) });
}
function Dd(e, i, n) {
  let a = ie(e);
  return a._zod.values = void 0, new _t({ type: "record", keyType: a, valueType: i, ...S.normalizeParams(n) });
}
function Ed(e, i, n) {
  return new _t({ type: "record", keyType: e, valueType: i, mode: "loose", ...S.normalizeParams(n) });
}
var dr = f("ZodMap", (e, i) => {
  wu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => ol(e, n), e.keyType = i.keyType, e.valueType = i.valueType, e.min = (...n) => e.check(ve(...n)), e.nonempty = (n) => e.check(ve(1, n)), e.max = (...n) => e.check(Je(...n)), e.size = (...n) => e.check(lt(...n));
});
function Td(e, i, n) {
  return new dr({ type: "map", keyType: e, valueType: i, ...S.normalizeParams(n) });
}
var cr = f("ZodSet", (e, i) => {
  Su.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => ul(e, n), e.min = (...n) => e.check(ve(...n)), e.nonempty = (n) => e.check(ve(1, n)), e.max = (...n) => e.check(Je(...n)), e.size = (...n) => e.check(lt(...n));
});
function Ad(e, i) {
  return new cr({ type: "set", valueType: e, ...S.normalizeParams(i) });
}
var Le = f("ZodEnum", (e, i) => {
  zu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (a, t, r) => Xs(e, a, t), e.enum = i.entries, e.options = Object.values(i.entries);
  let n = new Set(Object.keys(i.entries));
  e.extract = (a, t) => {
    let r = {};
    for (let o of a) if (n.has(o)) r[o] = i.entries[o];
    else throw Error(`Key ${o} not found in enum`);
    return new Le({ ...i, checks: [], ...S.normalizeParams(t), entries: r });
  }, e.exclude = (a, t) => {
    let r = { ...i.entries };
    for (let o of a) if (n.has(o)) delete r[o];
    else throw Error(`Key ${o} not found in enum`);
    return new Le({ ...i, checks: [], ...S.normalizeParams(t), entries: r });
  };
});
function _i(e, i) {
  let n = Array.isArray(e) ? Object.fromEntries(e.map((a) => [a, a])) : e;
  return new Le({ type: "enum", entries: n, ...S.normalizeParams(i) });
}
function Rd(e, i) {
  return new Le({ type: "enum", entries: e, ...S.normalizeParams(i) });
}
var mr = f("ZodLiteral", (e, i) => {
  Uu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => Ys(e, n, a), e.values = new Set(i.values), Object.defineProperty(e, "value", { get() {
    if (i.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
    return i.values[0];
  } });
});
function Cd(e, i) {
  return new mr({ type: "literal", values: Array.isArray(e) ? e : [e], ...S.normalizeParams(i) });
}
var fr = f("ZodFile", (e, i) => {
  Ou.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => tl(e, n, a), e.min = (n, a) => e.check(ve(n, a)), e.max = (n, a) => e.check(Je(n, a)), e.mime = (n, a) => e.check(Kt(Array.isArray(n) ? n : [n], a));
});
function Ld(e) {
  return js(fr, e);
}
var pr = f("ZodTransform", (e, i) => {
  ju.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => al(e, n), e._zod.parse = (n, a) => {
    if (a.direction === "backward") throw new Tt(e.constructor.name);
    n.addIssue = (r) => {
      if (typeof r == "string") n.issues.push(S.issue(r, n.value, i));
      else {
        let o = r;
        o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = n.value), o.inst ?? (o.inst = e), n.issues.push(S.issue(o));
      }
    };
    let t = i.transform(n.value, n);
    return t instanceof Promise ? t.then((r) => (n.value = r, n)) : (n.value = t, n);
  };
});
function ki(e) {
  return new pr({ type: "transform", transform: e });
}
var Ii = f("ZodOptional", (e, i) => {
  ln.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => Cn(e, n, a, t), e.unwrap = () => e._zod.def.innerType;
});
function He(e) {
  return new Ii({ type: "optional", innerType: e });
}
var vr = f("ZodExactOptional", (e, i) => {
  Zu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => Cn(e, n, a, t), e.unwrap = () => e._zod.def.innerType;
});
function gr(e) {
  return new vr({ type: "optional", innerType: e });
}
var hr = f("ZodNullable", (e, i) => {
  Nu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => fl(e, n, a, t), e.unwrap = () => e._zod.def.innerType;
});
function Xe(e) {
  return new hr({ type: "nullable", innerType: e });
}
function Jd(e) {
  return He(Xe(e));
}
var $r = f("ZodDefault", (e, i) => {
  Pu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => vl(e, n, a, t), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function br(e, i) {
  return new $r({ type: "default", innerType: e, get defaultValue() {
    return typeof i == "function" ? i() : S.shallowClone(i);
  } });
}
var yr = f("ZodPrefault", (e, i) => {
  Du.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => gl(e, n, a, t), e.unwrap = () => e._zod.def.innerType;
});
function _r(e, i) {
  return new yr({ type: "prefault", innerType: e, get defaultValue() {
    return typeof i == "function" ? i() : S.shallowClone(i);
  } });
}
var xi = f("ZodNonOptional", (e, i) => {
  Eu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => pl(e, n, a, t), e.unwrap = () => e._zod.def.innerType;
});
function kr(e, i) {
  return new xi({ type: "nonoptional", innerType: e, ...S.normalizeParams(i) });
}
var Ir = f("ZodSuccess", (e, i) => {
  Tu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => il(e, n, a), e.unwrap = () => e._zod.def.innerType;
});
function Md(e) {
  return new Ir({ type: "success", innerType: e });
}
var xr = f("ZodCatch", (e, i) => {
  Au.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => hl(e, n, a, t), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function wr(e, i) {
  return new xr({ type: "catch", innerType: e, catchValue: typeof i == "function" ? i : () => i });
}
var Sr = f("ZodNaN", (e, i) => {
  Ru.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => Qs(e, n);
});
function Fd(e) {
  return Us(Sr, e);
}
var wi = f("ZodPipe", (e, i) => {
  Cu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => $l(e, n, a, t), e.in = i.in, e.out = i.out;
});
function Ye(e, i) {
  return new wi({ type: "pipe", in: e, out: i });
}
var Si = f("ZodCodec", (e, i) => {
  wi.init(e, i), dn.init(e, i);
});
function qd(e, i, n) {
  return new Si({ type: "pipe", in: e, out: i, transform: n.decode, reverseTransform: n.encode });
}
var zr = f("ZodReadonly", (e, i) => {
  Lu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => bl(e, n, a, t), e.unwrap = () => e._zod.def.innerType;
});
function Ur(e) {
  return new zr({ type: "readonly", innerType: e });
}
var Or = f("ZodTemplateLiteral", (e, i) => {
  Ju.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => el(e, n, a);
});
function Wd(e, i) {
  return new Or({ type: "template_literal", parts: e, ...S.normalizeParams(i) });
}
var jr = f("ZodLazy", (e, i) => {
  qu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => _l(e, n, a, t), e.unwrap = () => e._zod.def.getter();
});
function Zr(e) {
  return new jr({ type: "lazy", getter: e });
}
var Nr = f("ZodPromise", (e, i) => {
  Fu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => yl(e, n, a, t), e.unwrap = () => e._zod.def.innerType;
});
function Vd(e) {
  return new Nr({ type: "promise", innerType: e });
}
var Pr = f("ZodFunction", (e, i) => {
  Mu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => rl(e, n);
});
function Et(e) {
  return new Pr({ type: "function", input: Array.isArray(e == null ? void 0 : e.input) ? sr(e == null ? void 0 : e.input) : (e == null ? void 0 : e.input) ?? $t(we()), output: (e == null ? void 0 : e.output) ?? we() });
}
var kt = f("ZodCustom", (e, i) => {
  Wu.init(e, i), I.init(e, i), e._zod.processJSONSchema = (n, a, t) => nl(e, n);
});
function Gd(e) {
  let i = new E({ check: "custom" });
  return i._zod.check = e, i;
}
function Kd(e, i) {
  return Zs(kt, e ?? (() => !0), i);
}
function Dr(e, i = {}) {
  return Ns(kt, e, i);
}
function Er(e) {
  return Ps(e);
}
var Bd = Es, Hd = Ts;
function Xd(e, i = {}) {
  let n = new kt({ type: "custom", check: "custom", fn: (a) => a instanceof e, abort: !0, ...S.normalizeParams(i) });
  return n._zod.bag.Class = e, n._zod.check = (a) => {
    a.value instanceof e || a.issues.push({ code: "invalid_type", expected: e.name, input: a.value, inst: n, path: [...n._zod.def.path ?? []] });
  }, n;
}
var Yd = (...e) => As({ Codec: Si, Boolean: gt, String: ft }, ...e);
function Qd(e) {
  let i = Zr(() => yi([Pt(e), Vn(), Gn(), Xn(), $t(i), lr(Pt(), i)]));
  return i;
}
function ec(e, i) {
  return Ye(ki(e), i);
}
var tv = { invalid_type: "invalid_type", too_big: "too_big", too_small: "too_small", invalid_format: "invalid_format", not_multiple_of: "not_multiple_of", unrecognized_keys: "unrecognized_keys", invalid_union: "invalid_union", invalid_key: "invalid_key", invalid_element: "invalid_element", invalid_value: "invalid_value", custom: "custom" };
function iv(e) {
  F({ customError: e });
}
function nv() {
  return F().customError;
}
var Ci;
Ci || (Ci = {});
var h = { ...Il, ...xl, iso: Ln }, rv = /* @__PURE__ */ new Set(["$schema", "$ref", "$defs", "definitions", "$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor", "type", "enum", "const", "anyOf", "oneOf", "allOf", "not", "properties", "required", "additionalProperties", "patternProperties", "propertyNames", "minProperties", "maxProperties", "items", "prefixItems", "additionalItems", "minItems", "maxItems", "uniqueItems", "contains", "minContains", "maxContains", "minLength", "maxLength", "pattern", "format", "minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "multipleOf", "description", "default", "contentEncoding", "contentMediaType", "contentSchema", "unevaluatedItems", "unevaluatedProperties", "if", "then", "else", "dependentSchemas", "dependentRequired", "nullable", "readOnly"]);
function av(e, i) {
  let n = e.$schema;
  return n === "https://json-schema.org/draft/2020-12/schema" ? "draft-2020-12" : n === "http://json-schema.org/draft-07/schema#" ? "draft-7" : n === "http://json-schema.org/draft-04/schema#" ? "draft-4" : i ?? "draft-2020-12";
}
function ov(e, i) {
  if (!e.startsWith("#")) throw Error("External $ref is not supported, only local refs (#/...) are allowed");
  let n = e.slice(1).split("/").filter(Boolean);
  if (n.length === 0) return i.rootSchema;
  let a = i.version === "draft-2020-12" ? "$defs" : "definitions";
  if (n[0] === a) {
    let t = n[1];
    if (!t || !i.defs[t]) throw Error(`Reference not found: ${e}`);
    return i.defs[t];
  }
  throw Error(`Reference not found: ${e}`);
}
function tc(e, i) {
  if (e.not !== void 0) {
    if (typeof e.not == "object" && Object.keys(e.not).length === 0) return h.never();
    throw Error("not is not supported in Zod (except { not: {} } for never)");
  }
  if (e.unevaluatedItems !== void 0) throw Error("unevaluatedItems is not supported");
  if (e.unevaluatedProperties !== void 0) throw Error("unevaluatedProperties is not supported");
  if (e.if !== void 0 || e.then !== void 0 || e.else !== void 0) throw Error("Conditional schemas (if/then/else) are not supported");
  if (e.dependentSchemas !== void 0 || e.dependentRequired !== void 0) throw Error("dependentSchemas and dependentRequired are not supported");
  if (e.$ref) {
    let t = e.$ref;
    if (i.refs.has(t)) return i.refs.get(t);
    if (i.processing.has(t)) return h.lazy(() => {
      if (!i.refs.has(t)) throw Error(`Circular reference not resolved: ${t}`);
      return i.refs.get(t);
    });
    i.processing.add(t);
    let r = ov(t, i), o = M(r, i);
    return i.refs.set(t, o), i.processing.delete(t), o;
  }
  if (e.enum !== void 0) {
    let t = e.enum;
    if (i.version === "openapi-3.0" && e.nullable === !0 && t.length === 1 && t[0] === null) return h.null();
    if (t.length === 0) return h.never();
    if (t.length === 1) return h.literal(t[0]);
    if (t.every((o) => typeof o == "string")) return h.enum(t);
    let r = t.map((o) => h.literal(o));
    return r.length < 2 ? r[0] : h.union([r[0], r[1], ...r.slice(2)]);
  }
  if (e.const !== void 0) return h.literal(e.const);
  let n = e.type;
  if (Array.isArray(n)) {
    let t = n.map((r) => {
      let o = { ...e, type: r };
      return tc(o, i);
    });
    return t.length === 0 ? h.never() : t.length === 1 ? t[0] : h.union(t);
  }
  if (!n) return h.any();
  let a;
  switch (n) {
    case "string": {
      let t = h.string();
      if (e.format) {
        let r = e.format;
        r === "email" ? t = t.check(h.email()) : r === "uri" || r === "uri-reference" ? t = t.check(h.url()) : r === "uuid" || r === "guid" ? t = t.check(h.uuid()) : r === "date-time" ? t = t.check(h.iso.datetime()) : r === "date" ? t = t.check(h.iso.date()) : r === "time" ? t = t.check(h.iso.time()) : r === "duration" ? t = t.check(h.iso.duration()) : r === "ipv4" ? t = t.check(h.ipv4()) : r === "ipv6" ? t = t.check(h.ipv6()) : r === "mac" ? t = t.check(h.mac()) : r === "cidr" ? t = t.check(h.cidrv4()) : r === "cidr-v6" ? t = t.check(h.cidrv6()) : r === "base64" ? t = t.check(h.base64()) : r === "base64url" ? t = t.check(h.base64url()) : r === "e164" ? t = t.check(h.e164()) : r === "jwt" ? t = t.check(h.jwt()) : r === "emoji" ? t = t.check(h.emoji()) : r === "nanoid" ? t = t.check(h.nanoid()) : r === "cuid" ? t = t.check(h.cuid()) : r === "cuid2" ? t = t.check(h.cuid2()) : r === "ulid" ? t = t.check(h.ulid()) : r === "xid" ? t = t.check(h.xid()) : r === "ksuid" && (t = t.check(h.ksuid()));
      }
      typeof e.minLength == "number" && (t = t.min(e.minLength)), typeof e.maxLength == "number" && (t = t.max(e.maxLength)), e.pattern && (t = t.regex(new RegExp(e.pattern))), a = t;
      break;
    }
    case "number":
    case "integer": {
      let t = n === "integer" ? h.number().int() : h.number();
      typeof e.minimum == "number" && (t = t.min(e.minimum)), typeof e.maximum == "number" && (t = t.max(e.maximum)), typeof e.exclusiveMinimum == "number" ? t = t.gt(e.exclusiveMinimum) : e.exclusiveMinimum === !0 && typeof e.minimum == "number" && (t = t.gt(e.minimum)), typeof e.exclusiveMaximum == "number" ? t = t.lt(e.exclusiveMaximum) : e.exclusiveMaximum === !0 && typeof e.maximum == "number" && (t = t.lt(e.maximum)), typeof e.multipleOf == "number" && (t = t.multipleOf(e.multipleOf)), a = t;
      break;
    }
    case "boolean": {
      a = h.boolean();
      break;
    }
    case "null": {
      a = h.null();
      break;
    }
    case "object": {
      let t = {}, r = e.properties || {}, o = new Set(e.required || []);
      for (let [d, s] of Object.entries(r)) {
        let m = M(s, i);
        t[d] = o.has(d) ? m : m.optional();
      }
      if (e.propertyNames) {
        let d = M(e.propertyNames, i), s = e.additionalProperties && typeof e.additionalProperties == "object" ? M(e.additionalProperties, i) : h.any();
        if (Object.keys(t).length === 0) {
          a = h.record(d, s);
          break;
        }
        let m = h.object(t).passthrough(), c = h.looseRecord(d, s);
        a = h.intersection(m, c);
        break;
      }
      if (e.patternProperties) {
        let d = e.patternProperties, s = Object.keys(d), m = [];
        for (let p of s) {
          let $ = M(d[p], i), y = h.string().regex(new RegExp(p));
          m.push(h.looseRecord(y, $));
        }
        let c = [];
        if (Object.keys(t).length > 0 && c.push(h.object(t).passthrough()), c.push(...m), c.length === 0) a = h.object({}).passthrough();
        else if (c.length === 1) a = c[0];
        else {
          let p = h.intersection(c[0], c[1]);
          for (let $ = 2; $ < c.length; $++) p = h.intersection(p, c[$]);
          a = p;
        }
        break;
      }
      let u = h.object(t);
      e.additionalProperties === !1 ? a = u.strict() : typeof e.additionalProperties == "object" ? a = u.catchall(M(e.additionalProperties, i)) : a = u.passthrough();
      break;
    }
    case "array": {
      let { prefixItems: t, items: r } = e;
      if (t && Array.isArray(t)) {
        let o = t.map((d) => M(d, i)), u = r && typeof r == "object" && !Array.isArray(r) ? M(r, i) : void 0;
        u ? a = h.tuple(o).rest(u) : a = h.tuple(o), typeof e.minItems == "number" && (a = a.check(h.minLength(e.minItems))), typeof e.maxItems == "number" && (a = a.check(h.maxLength(e.maxItems)));
      } else if (Array.isArray(r)) {
        let o = r.map((d) => M(d, i)), u = e.additionalItems && typeof e.additionalItems == "object" ? M(e.additionalItems, i) : void 0;
        u ? a = h.tuple(o).rest(u) : a = h.tuple(o), typeof e.minItems == "number" && (a = a.check(h.minLength(e.minItems))), typeof e.maxItems == "number" && (a = a.check(h.maxLength(e.maxItems)));
      } else if (r !== void 0) {
        let o = M(r, i), u = h.array(o);
        typeof e.minItems == "number" && (u = u.min(e.minItems)), typeof e.maxItems == "number" && (u = u.max(e.maxItems)), a = u;
      } else a = h.array(h.any());
      break;
    }
    default:
      throw Error(`Unsupported type: ${n}`);
  }
  return e.description && (a = a.describe(e.description)), e.default !== void 0 && (a = a.default(e.default)), a;
}
function M(e, i) {
  if (typeof e == "boolean") return e ? h.any() : h.never();
  let n = tc(e, i), a = e.type || e.enum !== void 0 || e.const !== void 0;
  if (e.anyOf && Array.isArray(e.anyOf)) {
    let u = e.anyOf.map((s) => M(s, i)), d = h.union(u);
    n = a ? h.intersection(n, d) : d;
  }
  if (e.oneOf && Array.isArray(e.oneOf)) {
    let u = e.oneOf.map((s) => M(s, i)), d = h.xor(u);
    n = a ? h.intersection(n, d) : d;
  }
  if (e.allOf && Array.isArray(e.allOf)) if (e.allOf.length === 0) n = a ? n : h.any();
  else {
    let u = a ? n : M(e.allOf[0], i), d = a ? 0 : 1;
    for (let s = d; s < e.allOf.length; s++) u = h.intersection(u, M(e.allOf[s], i));
    n = u;
  }
  e.nullable === !0 && i.version === "openapi-3.0" && (n = h.nullable(n)), e.readOnly === !0 && (n = h.readonly(n));
  let t = {}, r = ["$id", "id", "$comment", "$anchor", "$vocabulary", "$dynamicRef", "$dynamicAnchor"];
  for (let u of r) u in e && (t[u] = e[u]);
  let o = ["contentEncoding", "contentMediaType", "contentSchema"];
  for (let u of o) u in e && (t[u] = e[u]);
  for (let u of Object.keys(e)) rv.has(u) || (t[u] = e[u]);
  return Object.keys(t).length > 0 && i.registry.add(n, t), n;
}
function uv(e, i) {
  if (typeof e == "boolean") return e ? h.any() : h.never();
  let n = av(e, i == null ? void 0 : i.defaultTarget), a = e.$defs || e.definitions || {}, t = { version: n, defs: a, refs: /* @__PURE__ */ new Map(), processing: /* @__PURE__ */ new Set(), rootSchema: e, registry: (i == null ? void 0 : i.registry) ?? Q };
  return M(e, t);
}
var ic = {};
le(ic, { string: () => sv, number: () => lv, date: () => mv, boolean: () => dv, bigint: () => cv });
function sv(e) {
  return Qu(ft, e);
}
function lv(e) {
  return us(vt, e);
}
function dv(e) {
  return ps(gt, e);
}
function cv(e) {
  return gs(ht, e);
}
function mv(e) {
  return zs(bi, e);
}
F(Vu());
var fv = l.union([l.literal("light"), l.literal("dark")]).describe("Color theme preference for the host environment."), Qe = l.union([l.literal("inline"), l.literal("fullscreen"), l.literal("pip")]).describe("Display mode for UI presentation."), pv = l.union([l.literal("--color-background-primary"), l.literal("--color-background-secondary"), l.literal("--color-background-tertiary"), l.literal("--color-background-inverse"), l.literal("--color-background-ghost"), l.literal("--color-background-info"), l.literal("--color-background-danger"), l.literal("--color-background-success"), l.literal("--color-background-warning"), l.literal("--color-background-disabled"), l.literal("--color-text-primary"), l.literal("--color-text-secondary"), l.literal("--color-text-tertiary"), l.literal("--color-text-inverse"), l.literal("--color-text-ghost"), l.literal("--color-text-info"), l.literal("--color-text-danger"), l.literal("--color-text-success"), l.literal("--color-text-warning"), l.literal("--color-text-disabled"), l.literal("--color-border-primary"), l.literal("--color-border-secondary"), l.literal("--color-border-tertiary"), l.literal("--color-border-inverse"), l.literal("--color-border-ghost"), l.literal("--color-border-info"), l.literal("--color-border-danger"), l.literal("--color-border-success"), l.literal("--color-border-warning"), l.literal("--color-border-disabled"), l.literal("--color-ring-primary"), l.literal("--color-ring-secondary"), l.literal("--color-ring-inverse"), l.literal("--color-ring-info"), l.literal("--color-ring-danger"), l.literal("--color-ring-success"), l.literal("--color-ring-warning"), l.literal("--font-sans"), l.literal("--font-mono"), l.literal("--font-weight-normal"), l.literal("--font-weight-medium"), l.literal("--font-weight-semibold"), l.literal("--font-weight-bold"), l.literal("--font-text-xs-size"), l.literal("--font-text-sm-size"), l.literal("--font-text-md-size"), l.literal("--font-text-lg-size"), l.literal("--font-heading-xs-size"), l.literal("--font-heading-sm-size"), l.literal("--font-heading-md-size"), l.literal("--font-heading-lg-size"), l.literal("--font-heading-xl-size"), l.literal("--font-heading-2xl-size"), l.literal("--font-heading-3xl-size"), l.literal("--font-text-xs-line-height"), l.literal("--font-text-sm-line-height"), l.literal("--font-text-md-line-height"), l.literal("--font-text-lg-line-height"), l.literal("--font-heading-xs-line-height"), l.literal("--font-heading-sm-line-height"), l.literal("--font-heading-md-line-height"), l.literal("--font-heading-lg-line-height"), l.literal("--font-heading-xl-line-height"), l.literal("--font-heading-2xl-line-height"), l.literal("--font-heading-3xl-line-height"), l.literal("--border-radius-xs"), l.literal("--border-radius-sm"), l.literal("--border-radius-md"), l.literal("--border-radius-lg"), l.literal("--border-radius-xl"), l.literal("--border-radius-full"), l.literal("--border-width-regular"), l.literal("--shadow-hairline"), l.literal("--shadow-sm"), l.literal("--shadow-md"), l.literal("--shadow-lg")]).describe("CSS variable keys available to MCP apps for theming."), vv = l.record(pv.describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`), l.union([l.string(), l.undefined()]).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`)).describe(`Style variables for theming MCP apps.

Individual style keys are optional - hosts may provide any subset of these values.
Values are strings containing CSS values (colors, sizes, font stacks, etc.).

Note: This type uses \`Record<K, string | undefined>\` rather than \`Partial<Record<K, string>>\`
for compatibility with Zod schema generation. Both are functionally equivalent for validation.`), gv = l.object({ method: l.literal("ui/open-link"), params: l.object({ url: l.string().describe("URL to open in the host's browser") }) });
l.object({ isError: l.boolean().optional().describe("True if the host failed to open the URL (e.g., due to security policy).") }).passthrough();
l.object({ isError: l.boolean().optional().describe("True if the download failed (e.g., user cancelled or host denied).") }).passthrough();
l.object({ isError: l.boolean().optional().describe("True if the host rejected or failed to deliver the message.") }).passthrough();
var hv = l.object({ method: l.literal("ui/notifications/sandbox-proxy-ready"), params: l.object({}) }), Tr = l.object({ connectDomains: l.array(l.string()).optional().describe(`Origins for network requests (fetch/XHR/WebSocket).

- Maps to CSP \`connect-src\` directive
- Empty or omitted → no network connections (secure default)`), resourceDomains: l.array(l.string()).optional().describe("Origins for static resources (images, scripts, stylesheets, fonts, media).\n\n- Maps to CSP `img-src`, `script-src`, `style-src`, `font-src`, `media-src` directives\n- Wildcard subdomains supported: `https://*.example.com`\n- Empty or omitted → no network resources (secure default)"), frameDomains: l.array(l.string()).optional().describe("Origins for nested iframes.\n\n- Maps to CSP `frame-src` directive\n- Empty or omitted → no nested iframes allowed (`frame-src 'none'`)"), baseUriDomains: l.array(l.string()).optional().describe("Allowed base URIs for the document.\n\n- Maps to CSP `base-uri` directive\n- Empty or omitted → only same origin allowed (`base-uri 'self'`)") }), Ar = l.object({ camera: l.object({}).optional().describe("Request camera access.\n\nMaps to Permission Policy `camera` feature."), microphone: l.object({}).optional().describe("Request microphone access.\n\nMaps to Permission Policy `microphone` feature."), geolocation: l.object({}).optional().describe("Request geolocation access.\n\nMaps to Permission Policy `geolocation` feature."), clipboardWrite: l.object({}).optional().describe("Request clipboard write access.\n\nMaps to Permission Policy `clipboard-write` feature.") }), $v = l.object({ method: l.literal("ui/notifications/size-changed"), params: l.object({ width: l.number().optional().describe("New width in pixels."), height: l.number().optional().describe("New height in pixels.") }) });
l.object({ method: l.literal("ui/notifications/tool-input"), params: l.object({ arguments: l.record(l.string(), l.unknown().describe("Complete tool call arguments as key-value pairs.")).optional().describe("Complete tool call arguments as key-value pairs.") }) });
l.object({ method: l.literal("ui/notifications/tool-input-partial"), params: l.object({ arguments: l.record(l.string(), l.unknown().describe("Partial tool call arguments (incomplete, may change).")).optional().describe("Partial tool call arguments (incomplete, may change).") }) });
l.object({ method: l.literal("ui/notifications/tool-cancelled"), params: l.object({ reason: l.string().optional().describe('Optional reason for the cancellation (e.g., "user action", "timeout").') }) });
var bv = l.object({ fonts: l.string().optional() }), yv = l.object({ variables: vv.optional().describe("CSS variables for theming the app."), css: bv.optional().describe("CSS blocks that apps can inject.") });
l.object({ method: l.literal("ui/resource-teardown"), params: l.object({}) });
var _v = l.record(l.string(), l.unknown()), ua = l.object({ text: l.object({}).optional().describe("Host supports text content blocks."), image: l.object({}).optional().describe("Host supports image content blocks."), audio: l.object({}).optional().describe("Host supports audio content blocks."), resource: l.object({}).optional().describe("Host supports resource content blocks."), resourceLink: l.object({}).optional().describe("Host supports resource link content blocks."), structuredContent: l.object({}).optional().describe("Host supports structured content.") }), kv = l.object({ experimental: l.object({}).optional().describe("Experimental features (structure TBD)."), openLinks: l.object({}).optional().describe("Host supports opening external URLs."), downloadFile: l.object({}).optional().describe("Host supports file downloads via ui/download-file."), serverTools: l.object({ listChanged: l.boolean().optional().describe("Host supports tools/list_changed notifications.") }).optional().describe("Host can proxy tool calls to the MCP server."), serverResources: l.object({ listChanged: l.boolean().optional().describe("Host supports resources/list_changed notifications.") }).optional().describe("Host can proxy resource reads to the MCP server."), logging: l.object({}).optional().describe("Host accepts log messages."), sandbox: l.object({ permissions: Ar.optional().describe("Permissions granted by the host (camera, microphone, geolocation)."), csp: Tr.optional().describe("CSP domains approved by the host.") }).optional().describe("Sandbox configuration applied by the host."), updateModelContext: ua.optional().describe("Host accepts context updates (ui/update-model-context) to be included in the model's context for future turns."), message: ua.optional().describe("Host supports receiving content messages (ui/message) from the view.") }), Iv = l.object({ experimental: l.object({}).optional().describe("Experimental features (structure TBD)."), tools: l.object({ listChanged: l.boolean().optional().describe("App supports tools/list_changed notifications.") }).optional().describe("App exposes MCP-style tools that the host can call."), availableDisplayModes: l.array(Qe).optional().describe("Display modes the app supports.") }), xv = l.object({ method: l.literal("ui/notifications/initialized"), params: l.object({}).optional() });
l.object({ csp: Tr.optional().describe("Content Security Policy configuration for UI resources."), permissions: Ar.optional().describe("Sandbox permissions requested by the UI resource."), domain: l.string().optional().describe(`Dedicated origin for view sandbox.

Useful when views need stable, dedicated origins for OAuth callbacks, CORS policies, or API key allowlists.

**Host-dependent:** The format and validation rules for this field are determined by each host. Servers MUST consult host-specific documentation for the expected domain format. Common patterns include:
- Hash-based subdomains (e.g., \`{hash}.claudemcpcontent.com\`)
- URL-derived subdomains (e.g., \`www-example-com.oaiusercontent.com\`)

If omitted, host uses default sandbox origin (typically per-conversation).`), prefersBorder: l.boolean().optional().describe(`Visual boundary preference - true if view prefers a visible border.

Boolean requesting whether a visible border and background is provided by the host. Specifying an explicit value for this is recommended because hosts' defaults may vary.

- \`true\`: request visible border + background
- \`false\`: request no visible border + background
- omitted: host decides border`) });
var sa = l.object({ method: l.literal("ui/request-display-mode"), params: l.object({ mode: Qe.describe("The display mode being requested.") }) });
l.object({ mode: Qe.describe("The display mode that was actually set. May differ from requested if not supported.") }).passthrough();
var wv = l.union([l.literal("model"), l.literal("app")]).describe("Tool visibility scope - who can access the tool.");
l.object({ resourceUri: l.string().optional(), visibility: l.array(wv).optional().describe(`Who can access this tool. Default: ["model", "app"]
- "model": Tool visible to and callable by the agent
- "app": Tool callable by the app from this server only`) });
l.object({ mimeTypes: l.array(l.string()).optional().describe('Array of supported MIME types for UI resources.\nMust include `"text/html;profile=mcp-app"` for MCP Apps support.') });
var Sv = l.object({ method: l.literal("ui/download-file"), params: l.object({ contents: l.array(l.union([sc, lc])).describe("Resource contents to download — embedded (inline data) or linked (host fetches). Uses standard MCP resource types.") }) }), zv = l.object({ method: l.literal("ui/message"), params: l.object({ role: l.literal("user").describe('Message role, currently only "user" is supported.'), content: l.array(la).describe("Message content blocks (text, image, etc.).") }) });
l.object({ method: l.literal("ui/notifications/sandbox-resource-ready"), params: l.object({ html: l.string().describe("HTML content to load into the inner iframe."), sandbox: l.string().optional().describe("Optional override for the inner iframe's sandbox attribute."), csp: Tr.optional().describe("CSP configuration from resource metadata."), permissions: Ar.optional().describe("Sandbox permissions from resource metadata.") }) });
l.object({ method: l.literal("ui/notifications/tool-result"), params: da.describe("Standard MCP tool execution result.") });
var nc = l.object({ toolInfo: l.object({ id: cc.optional().describe("JSON-RPC id of the tools/call request."), tool: dc.describe("Tool definition including name, inputSchema, etc.") }).optional().describe("Metadata of the tool call that instantiated this App."), theme: fv.optional().describe("Current color theme preference."), styles: yv.optional().describe("Style configuration for theming the app."), displayMode: Qe.optional().describe("How the UI is currently displayed."), availableDisplayModes: l.array(Qe).optional().describe("Display modes the host supports."), containerDimensions: l.union([l.object({ height: l.number().describe("Fixed container height in pixels.") }), l.object({ maxHeight: l.union([l.number(), l.undefined()]).optional().describe("Maximum container height in pixels.") })]).and(l.union([l.object({ width: l.number().describe("Fixed container width in pixels.") }), l.object({ maxWidth: l.union([l.number(), l.undefined()]).optional().describe("Maximum container width in pixels.") })])).optional().describe(`Container dimensions. Represents the dimensions of the iframe or other
container holding the app. Specify either width or maxWidth, and either height or maxHeight.`), locale: l.string().optional().describe("User's language and region preference in BCP 47 format."), timeZone: l.string().optional().describe("User's timezone in IANA format."), userAgent: l.string().optional().describe("Host application identifier."), platform: l.union([l.literal("web"), l.literal("desktop"), l.literal("mobile")]).optional().describe("Platform type for responsive design decisions."), deviceCapabilities: l.object({ touch: l.boolean().optional().describe("Whether the device supports touch input."), hover: l.boolean().optional().describe("Whether the device supports hover interactions.") }).optional().describe("Device input capabilities."), safeAreaInsets: l.object({ top: l.number().describe("Top safe area inset in pixels."), right: l.number().describe("Right safe area inset in pixels."), bottom: l.number().describe("Bottom safe area inset in pixels."), left: l.number().describe("Left safe area inset in pixels.") }).optional().describe("Mobile safe area boundaries in pixels.") }).passthrough();
l.object({ method: l.literal("ui/notifications/host-context-changed"), params: nc.describe("Partial context update containing only changed fields.") });
var Uv = l.object({ method: l.literal("ui/update-model-context"), params: l.object({ content: l.array(la).optional().describe("Context content blocks (text, image, etc.)."), structuredContent: l.record(l.string(), l.unknown().describe("Structured content for machine-readable context data.")).optional().describe("Structured content for machine-readable context data.") }) }), Ov = l.object({ method: l.literal("ui/initialize"), params: l.object({ appInfo: ca.describe("App identification (name and version)."), appCapabilities: Iv.describe("Features and capabilities this app provides."), protocolVersion: l.string().describe("Protocol version this app supports.") }) });
l.object({ protocolVersion: l.string().describe('Negotiated protocol version string (e.g., "2025-11-21").'), hostInfo: ca.describe("Host application identification and version."), hostCapabilities: kv.describe("Features and capabilities provided by the host."), hostContext: nc.describe("Rich context about the host environment.") }).passthrough();
class jv {
  constructor(i = window.parent, n) {
    L(this, "eventTarget");
    L(this, "eventSource");
    L(this, "messageListener");
    L(this, "onclose");
    L(this, "onerror");
    L(this, "onmessage");
    L(this, "sessionId");
    L(this, "setProtocolVersion");
    this.eventTarget = i, this.eventSource = n, this.messageListener = (a) => {
      var r, o, u;
      if (n && a.source !== this.eventSource) {
        console.debug("Ignoring message from unknown source", a);
        return;
      }
      let t = Sc.safeParse(a.data);
      t.success ? (console.debug("Parsed message", t.data), (r = this.onmessage) == null || r.call(this, t.data)) : ((o = a.data) == null ? void 0 : o.jsonrpc) !== "2.0" ? console.debug("Ignoring non-JSON-RPC message", t.error.message, a) : (console.error("Failed to parse message", t.error.message, a), (u = this.onerror) == null || u.call(this, Error("Invalid JSON-RPC message received: " + t.error.message)));
    };
  }
  async start() {
    window.addEventListener("message", this.messageListener);
  }
  async send(i, n) {
    console.debug("Sending message", i), this.eventTarget.postMessage(i, "*");
  }
  async close() {
    var i;
    window.removeEventListener("message", this.messageListener), (i = this.onclose) == null || i.call(this);
  }
}
var Zv = "ui/resourceUri", Rr = "text/html;profile=mcp-app";
function Nv(e) {
  var n, a, t;
  let i = (a = (n = e._meta) == null ? void 0 : n.ui) == null ? void 0 : a.resourceUri;
  if (i === void 0 && (i = (t = e._meta) == null ? void 0 : t[Zv]), typeof i == "string" && i.startsWith("ui://")) return i;
  if (i !== void 0) throw Error(`Invalid UI resource URI: ${JSON.stringify(i)}`);
}
var Pv = [pa];
class Dv extends zc {
  constructor(n, a, t, r) {
    super(r);
    L(this, "_client");
    L(this, "_hostInfo");
    L(this, "_capabilities");
    L(this, "_appCapabilities");
    L(this, "_hostContext", {});
    L(this, "_appInfo");
    L(this, "onping");
    L(this, "sendResourceTeardown", this.teardownResource);
    this._client = n, this._hostInfo = a, this._capabilities = t, this._hostContext = (r == null ? void 0 : r.hostContext) || {}, this.setRequestHandler(Ov, (o) => this._oninitialize(o)), this.setRequestHandler(mc, (o, u) => {
      var d;
      return (d = this.onping) == null || d.call(this, o.params, u), {};
    }), this.setRequestHandler(sa, (o) => ({ mode: this._hostContext.displayMode ?? "inline" }));
  }
  getAppCapabilities() {
    return this._appCapabilities;
  }
  getAppVersion() {
    return this._appInfo;
  }
  set onsizechange(n) {
    this.setNotificationHandler($v, (a) => n(a.params));
  }
  set onsandboxready(n) {
    this.setNotificationHandler(hv, (a) => n(a.params));
  }
  set oninitialized(n) {
    this.setNotificationHandler(xv, (a) => n(a.params));
  }
  set onmessage(n) {
    this.setRequestHandler(zv, async (a, t) => n(a.params, t));
  }
  set onopenlink(n) {
    this.setRequestHandler(gv, async (a, t) => n(a.params, t));
  }
  set ondownloadfile(n) {
    this.setRequestHandler(Sv, async (a, t) => n(a.params, t));
  }
  set onrequestdisplaymode(n) {
    this.setRequestHandler(sa, async (a, t) => n(a.params, t));
  }
  set onloggingmessage(n) {
    this.setNotificationHandler(fc, async (a) => {
      n(a.params);
    });
  }
  set onupdatemodelcontext(n) {
    this.setRequestHandler(Uv, async (a, t) => n(a.params, t));
  }
  set oncalltool(n) {
    this.setRequestHandler(pc, async (a, t) => n(a.params, t));
  }
  sendToolListChanged(n = {}) {
    return this.notification({ method: "notifications/tools/list_changed", params: n });
  }
  set onlistresources(n) {
    this.setRequestHandler(vc, async (a, t) => n(a.params, t));
  }
  set onlistresourcetemplates(n) {
    this.setRequestHandler(gc, async (a, t) => n(a.params, t));
  }
  set onreadresource(n) {
    this.setRequestHandler(hc, async (a, t) => n(a.params, t));
  }
  sendResourceListChanged(n = {}) {
    return this.notification({ method: "notifications/resources/list_changed", params: n });
  }
  set onlistprompts(n) {
    this.setRequestHandler($c, async (a, t) => n(a.params, t));
  }
  sendPromptListChanged(n = {}) {
    return this.notification({ method: "notifications/prompts/list_changed", params: n });
  }
  assertCapabilityForMethod(n) {
  }
  assertRequestHandlerCapability(n) {
  }
  assertNotificationCapability(n) {
  }
  assertTaskCapability(n) {
    throw Error("Tasks are not supported in MCP Apps");
  }
  assertTaskHandlerCapability(n) {
    throw Error("Task handlers are not supported in MCP Apps");
  }
  getCapabilities() {
    return this._capabilities;
  }
  async _oninitialize(n) {
    let a = n.params.protocolVersion;
    return this._appCapabilities = n.params.appCapabilities, this._appInfo = n.params.appInfo, { protocolVersion: Pv.includes(a) ? a : pa, hostCapabilities: this.getCapabilities(), hostInfo: this._hostInfo, hostContext: this._hostContext };
  }
  setHostContext(n) {
    let a = {}, t = !1;
    for (let r of Object.keys(n)) {
      let o = this._hostContext[r], u = n[r];
      Ev(o, u) || (a[r] = u, t = !0);
    }
    t && (this._hostContext = n, this.sendHostContextChange(a));
  }
  sendHostContextChange(n) {
    return this.notification({ method: "ui/notifications/host-context-changed", params: n });
  }
  sendToolInput(n) {
    return this.notification({ method: "ui/notifications/tool-input", params: n });
  }
  sendToolInputPartial(n) {
    return this.notification({ method: "ui/notifications/tool-input-partial", params: n });
  }
  sendToolResult(n) {
    return this.notification({ method: "ui/notifications/tool-result", params: n });
  }
  sendToolCancelled(n) {
    return this.notification({ method: "ui/notifications/tool-cancelled", params: n });
  }
  sendSandboxResourceReady(n) {
    return this.notification({ method: "ui/notifications/sandbox-resource-ready", params: n });
  }
  teardownResource(n, a) {
    return this.request({ method: "ui/resource-teardown", params: n }, _v, a);
  }
  async connect(n) {
    if (this.transport) throw Error("AppBridge is already connected. Call close() before connecting again.");
    if (this._client) {
      let a = this._client.getServerCapabilities();
      if (!a) throw Error("Client server capabilities not available");
      a.tools && (this.oncalltool = async (t, r) => this._client.request({ method: "tools/call", params: t }, da, { signal: r.signal }), a.tools.listChanged && this._client.setNotificationHandler(bc, (t) => this.sendToolListChanged(t.params))), a.resources && (this.onlistresources = async (t, r) => this._client.request({ method: "resources/list", params: t }, yc, { signal: r.signal }), this.onlistresourcetemplates = async (t, r) => this._client.request({ method: "resources/templates/list", params: t }, _c, { signal: r.signal }), this.onreadresource = async (t, r) => this._client.request({ method: "resources/read", params: t }, kc, { signal: r.signal }), a.resources.listChanged && this._client.setNotificationHandler(Ic, (t) => this.sendResourceListChanged(t.params))), a.prompts && (this.onlistprompts = async (t, r) => this._client.request({ method: "prompts/list", params: t }, xc, { signal: r.signal }), a.prompts.listChanged && this._client.setNotificationHandler(wc, (t) => this.sendPromptListChanged(t.params)));
    }
    return super.connect(n);
  }
}
function Ev(e, i) {
  return JSON.stringify(e) === JSON.stringify(i);
}
const Tv = "io.modelcontextprotocol/ui", Av = {
  mimeTypes: [Rr]
}, Yv = {
  [Tv]: Av
}, Rv = 1e4;
async function Cv(e) {
  const i = document.createElement("iframe");
  i.style.width = "100%", i.style.height = "600px", i.style.border = "none", i.style.backgroundColor = "transparent", i.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
  const n = new Promise((a, t) => {
    let r = !1;
    const o = () => {
      window.removeEventListener("message", d), i.removeEventListener("error", s);
    }, u = setTimeout(() => {
      r || (r = !0, o(), t(new Error("Timed out waiting for sandbox proxy iframe to be ready")));
    }, Rv), d = (m) => {
      m.source === i.contentWindow && m.data && m.data.method === Dc && (r || (r = !0, clearTimeout(u), o(), a()));
    }, s = () => {
      r || (r = !0, clearTimeout(u), o(), t(new Error("Failed to load sandbox proxy iframe")));
    };
    window.addEventListener("message", d), i.addEventListener("error", s);
  });
  return i.src = e.href, { iframe: i, onReady: n };
}
async function Lv(e, i) {
  let n, a;
  do {
    const r = await e.listTools({ cursor: a });
    n = r.tools.find((o) => o.name === i), a = r.nextCursor;
  } while (!n && a);
  if (!n)
    throw new Error(`tool ${i} not found`);
  if (!n._meta)
    return null;
  const t = Nv(n);
  if (!t)
    return null;
  if (!t.startsWith("ui://"))
    throw new Error(`tool ${i} has unsupported output template URI: ${t}`);
  return { uri: t };
}
async function Jv(e, i) {
  const n = await e.readResource({ uri: i.uri });
  if (!n)
    throw new Error("UI resource not found: " + i.uri);
  if (n.contents.length !== 1)
    throw new Error("Unsupported UI resource content length: " + n.contents.length);
  const a = n.contents[0];
  let t;
  const r = (o) => o === Rr;
  if ("text" in a && typeof a.text == "string" && r(a.mimeType))
    t = a.text;
  else if ("blob" in a && typeof a.blob == "string" && r(a.mimeType))
    t = atob(a.blob);
  else
    throw new Error("Unsupported UI resource content format: " + JSON.stringify(a));
  return t;
}
function Mv(e, i) {
  const n = new URL(e.href);
  return i && Object.keys(i).length > 0 && n.searchParams.set("csp", JSON.stringify(i)), n;
}
const Fv = (e) => {
  const { html: i, sandbox: n, appBridge: a, onSizeChanged: t, onInitialized: r, toolInput: o, toolResult: u, onError: d } = e, [s, m] = Pe(!1), [c, p] = Pe(!1), [$, y] = Pe(null), x = C(null), z = C(null), P = C(null), W = C(null), ae = C(t), A = C(r), D = C(d);
  return ne(() => {
    ae.current = t, A.current = r, D.current = d;
  }), ne(() => {
    const R = Mv(n.url, n.csp), U = R.href;
    if (P.current === U && W.current === a && z.current)
      return;
    m(!1), p(!1), y(null);
    let H = !0;
    return (async () => {
      var Fe, qe;
      try {
        z.current && ((Fe = x.current) != null && Fe.contains(z.current)) && (x.current.removeChild(z.current), z.current = null, P.current = null, W.current = null);
        const { iframe: G, onReady: me } = await Cv(R);
        if (!H || (z.current = G, P.current = U, W.current = a, x.current && x.current.appendChild(G), await me, !H) || (a.onsizechange = async (X) => {
          var je;
          (je = ae.current) == null || je.call(ae, X), z.current && (X.width !== void 0 && (z.current.style.width = `${X.width}px`), X.height !== void 0 && (z.current.style.height = `${X.height}px`));
        }, a.oninitialized = () => {
          var X;
          H && (console.log("[AppFrame] App initialized"), m(!0), (X = A.current) == null || X.call(A, {
            appVersion: a.getAppVersion(),
            appCapabilities: a.getAppCapabilities()
          }));
        }, await a.connect(
          new jv(G.contentWindow, G.contentWindow)
        ), !H)) return;
        p(!0);
      } catch (G) {
        if (console.error("[AppFrame] Error:", G), !H) return;
        const me = G instanceof Error ? G : new Error(String(G));
        y(me), (qe = D.current) == null || qe.call(D, me);
      }
    })(), () => {
      H = !1;
    };
  }, [n.url, n.csp, a]), ne(() => {
    if (!c || !i || W.current !== a) return;
    (async () => {
      var U;
      try {
        console.log("[AppFrame] Sending HTML to sandbox"), await a.sendSandboxResourceReady({
          html: i,
          csp: n.csp
        });
      } catch (H) {
        const Oe = H instanceof Error ? H : new Error(String(H));
        y(Oe), (U = D.current) == null || U.call(D, Oe);
      }
    })();
  }, [c, i, a, n.csp]), ne(() => {
    c && s && o && W.current === a && (console.log("[AppFrame] Sending tool input:", o), a.sendToolInput({ arguments: o }));
  }, [a, c, s, o]), ne(() => {
    c && s && u && W.current === a && (console.log("[AppFrame] Sending tool result:", u), a.sendToolResult(u));
  }, [a, c, s, u]), /* @__PURE__ */ ma(
    "div",
    {
      ref: x,
      style: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column"
      },
      children: $ && /* @__PURE__ */ fa("div", { style: { color: "red", padding: "1rem" }, children: [
        "Error: ",
        $.message
      ] })
    }
  );
}, qv = Uc((e, i) => {
  const {
    client: n,
    toolName: a,
    sandbox: t,
    toolResourceUri: r,
    html: o,
    toolInput: u,
    toolResult: d,
    toolInputPartial: s,
    toolCancelled: m,
    hostContext: c,
    onMessage: p,
    onOpenLink: $,
    onLoggingMessage: y,
    onSizeChanged: x,
    onError: z,
    onCallTool: P,
    onListResources: W,
    onListResourceTemplates: ae,
    onReadResource: A,
    onListPrompts: D,
    onFallbackRequest: R
  } = e, [U, H] = Pe(null), [Oe, Fe] = Pe(o ?? null), [qe, G] = Pe(null), me = C(p), X = C($), je = C(y), Cr = C(x), he = C(z), zi = C(P), Ui = C(W), Oi = C(ae), Ze = C(A), ji = C(D), Zi = C(R);
  ne(() => {
    me.current = p, X.current = $, je.current = y, Cr.current = x, he.current = z, zi.current = P, Ui.current = W, Oi.current = ae, Ze.current = A, ji.current = D, Zi.current = R;
  }), Oc(
    i,
    () => ({
      sendToolListChanged: () => U == null ? void 0 : U.sendToolListChanged(),
      sendResourceListChanged: () => U == null ? void 0 : U.sendResourceListChanged(),
      sendPromptListChanged: () => U == null ? void 0 : U.sendPromptListChanged(),
      teardownResource: () => U == null ? void 0 : U.teardownResource({})
    }),
    [U]
  ), ne(() => {
    let We = !0;
    return (() => {
      var $e;
      try {
        const Y = n == null ? void 0 : n.getServerCapabilities(), J = new Dv(
          n ?? null,
          {
            name: "MCP-UI Host",
            version: "1.0.0"
          },
          {
            openLinks: {},
            serverTools: Y == null ? void 0 : Y.tools,
            serverResources: Y == null ? void 0 : Y.resources
          }
        );
        if (J.onmessage = async (T, j) => {
          if (me.current)
            return me.current(T, j);
          throw new Ni(Pi.MethodNotFound, "Method not found");
        }, J.onopenlink = async (T, j) => {
          if (X.current)
            return X.current(T, j);
          throw new Ni(Pi.MethodNotFound, "Method not found");
        }, J.onloggingmessage = (T) => {
          je.current && je.current(T);
        }, zi.current && (J.oncalltool = (T, j) => zi.current(T, j)), Ui.current && (J.onlistresources = (T, j) => Ui.current(T, j)), Oi.current && (J.onlistresourcetemplates = (T, j) => Oi.current(T, j)), Ze.current && (J.onreadresource = (T, j) => Ze.current(T, j)), ji.current && (J.onlistprompts = (T, j) => ji.current(T, j)), J.fallbackRequestHandler = async (T, j) => {
          if (Zi.current)
            return Zi.current(T, j);
          throw new Ni(
            Pi.MethodNotFound,
            `No handler for method: ${T.method}`
          );
        }, !We) return;
        H(J);
      } catch (Y) {
        if (console.error("[AppRenderer] Error creating bridge:", Y), !We) return;
        const J = Y instanceof Error ? Y : new Error(String(Y));
        G(J), ($e = he.current) == null || $e.call(he, J);
      }
    })(), () => {
      We = !1;
    };
  }, [n]), ne(() => {
    if (o) {
      Fe(o);
      return;
    }
    const We = !!n, Lr = !!r && !!Ze.current;
    if (!We && !Lr) {
      G(
        new Error(
          "Either 'html' prop, 'client', or ('toolResourceUri' + 'onReadResource') must be provided to fetch UI resource"
        )
      );
      return;
    }
    let $e = !0;
    return (async () => {
      var J, T;
      try {
        let j;
        if (r)
          j = r, console.log(`[AppRenderer] Using provided resource URI: ${j}`);
        else if (n) {
          console.log(`[AppRenderer] Fetching resource URI for tool: ${a}`);
          const ye = await Lv(n, a);
          if (!ye)
            throw new Error(
              `Tool ${a} has no UI resource (no ui/resourceUri in tool._meta)`
            );
          j = ye.uri, console.log(`[AppRenderer] Got resource URI: ${j}`);
        } else
          throw new Error("Cannot determine resource URI without client or toolResourceUri");
        if (!$e) return;
        console.log(`[AppRenderer] Reading resource HTML from: ${j}`);
        let be;
        if (n)
          be = await Jv(n, { uri: j });
        else if (Ze.current) {
          const ye = await Ze.current({ uri: j }, {});
          if (!ye.contents || ye.contents.length !== 1)
            throw new Error("Unsupported UI resource content length: " + ((J = ye.contents) == null ? void 0 : J.length));
          const ue = ye.contents[0], Jr = (ac) => ac === Rr;
          if ("text" in ue && typeof ue.text == "string" && Jr(ue.mimeType))
            be = ue.text;
          else if ("blob" in ue && typeof ue.blob == "string" && Jr(ue.mimeType))
            be = atob(ue.blob);
          else
            throw new Error("Unsupported UI resource content format: " + JSON.stringify(ue));
        } else
          throw new Error("No way to read resource HTML");
        if (!$e) return;
        Fe(be);
      } catch (j) {
        if (!$e) return;
        const be = j instanceof Error ? j : new Error(String(j));
        G(be), (T = he.current) == null || T.call(he, be);
      }
    })(), () => {
      $e = !1;
    };
  }, [n, a, r, o]), ne(() => {
    U && c && U.setHostContext(c);
  }, [U, c]), ne(() => {
    U && s && U.sendToolInputPartial(s);
  }, [U, s]), ne(() => {
    U && m && U.sendToolCancelled({});
  }, [U, m]);
  const rc = Cr.current;
  return qe ? /* @__PURE__ */ fa("div", { style: { color: "red", padding: "1rem" }, children: [
    "Error: ",
    qe.message
  ] }) : !U || !Oe ? null : /* @__PURE__ */ ma(
    Fv,
    {
      html: Oe,
      sandbox: t,
      appBridge: U,
      toolInput: u,
      toolResult: d,
      onSizeChanged: rc,
      onError: z
    }
  );
});
qv.displayName = "AppRenderer";
export {
  Dv as AppBridge,
  Fv as AppFrame,
  qv as AppRenderer,
  jv as PostMessageTransport,
  Yv as UI_EXTENSION_CAPABILITIES,
  Av as UI_EXTENSION_CONFIG,
  Tv as UI_EXTENSION_NAME,
  jc as getResourceMetadata,
  Hv as getUIResourceMetadata,
  Xv as isUIResource
};
